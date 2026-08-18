import { 
    LearningSignal, 
    VocabularySignal, 
    GrammarSignal, 
    IncorrectAnswerSignal, 
    RepeatedErrorSignal, 
    CompletedLessonSignal 
} from '../types/learningSignals';
import { Lesson, VocabItem } from '../types/lesson';
import { Flashcard } from '../types';
import { FlashcardService } from './FlashcardService';
import { supabase } from '../lib/supabase';

const SIGNALS_STORAGE_PREFIX = 'study_planner_learning_signals_';

function generateUUID(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'sig_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

function normalizeTerm(str: string): string {
    return (str || '')
        .trim()
        .toLowerCase()
        .replace(/[\s()[\]（）]/g, '');
}

export const LearningSignalService = {
    /**
     * Get all recorded learning signals for a user.
     */
    getSignalsForUser(userId: string): LearningSignal[] {
        const key = `${SIGNALS_STORAGE_PREFIX}${userId || 'guest'}`;
        try {
            const raw = localStorage.getItem(key);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {
            console.warn('[LearningSignalService] Failed to read cached signals:', e);
        }
        return [];
    },

    /**
     * Record a single learning signal.
     */
    async recordSignal(signal: LearningSignal): Promise<void> {
        await this.recordSignalsBatch([signal]);
    },

    /**
     * Record multiple learning signals in a single batch.
     */
    async recordSignalsBatch(signals: LearningSignal[]): Promise<void> {
        if (!signals || signals.length === 0) return;

        const userId = signals[0].userId || 'guest';
        const key = `${SIGNALS_STORAGE_PREFIX}${userId}`;
        const current = this.getSignalsForUser(userId);

        // Append new signals and cap to latest 300 to avoid unbounded storage growth
        const updated = [...current, ...signals].slice(-300);

        try {
            localStorage.setItem(key, JSON.stringify(updated));
        } catch (e) {
            console.error('[LearningSignalService] Failed to save signals to localStorage:', e);
        }

        // Sync to Supabase in background
        if (userId && userId !== 'guest') {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    await supabase.auth.updateUser({
                        data: { learning_signals: updated.slice(-100) }
                    });
                }
            } catch (err) {
                console.warn('[LearningSignalService] Background sync to Supabase failed:', err);
            }
        }
    },

    /**
     * Check whether a vocabulary term already exists in user's flashcards.
     * Prevents duplicate card creation across repeated lessons.
     */
    isVocabAlreadyInFlashcards(vocab: VocabItem, existingCards: Flashcard[]): boolean {
        if (!vocab || !vocab.term) return true;
        const normalizedVocabTerm = normalizeTerm(vocab.term);

        return existingCards.some(card => {
            if (!card.front) return false;
            const normalizedFront = normalizeTerm(card.front);
            // Matches exact term or front starts with term
            return normalizedFront === normalizedVocabTerm || 
                   normalizedFront.startsWith(normalizedVocabTerm) ||
                   normalizedVocabTerm.startsWith(normalizedFront);
        });
    },

    /**
     * Ingests vocabulary into the user's SRS flashcard deck and records all relevant learning signals.
     */
    async processLessonCompletion(
        userId: string,
        lesson: Lesson,
        scoreData: { score: number; total: number; percentage: number },
        incorrectAnswers: IncorrectAnswerSignal[] = []
    ): Promise<{ newCardsCount: number; mistakesCount: number }> {
        const timestamp = new Date().toISOString();
        const activeUserId = userId || 'guest';
        const emittedSignals: LearningSignal[] = [];

        // 1. Extract vocabulary from all "learn" steps in this lesson
        const allVocab: VocabItem[] = [];
        lesson.steps.forEach(step => {
            if (step.type === 'learn' && step.learnData?.vocabulary) {
                allVocab.push(...step.learnData.vocabulary);
            }
        });

        // 2. Fetch existing cards to perform duplicate protection check
        let existingCards: Flashcard[] = [];
        try {
            existingCards = await FlashcardService.fetchFlashcards(activeUserId);
        } catch (e) {
            console.warn('[LearningSignalService] Could not fetch existing cards for duplicate check:', e);
        }

        const cardsToCreate: Partial<Flashcard>[] = [];

        allVocab.forEach(v => {
            const alreadyExists = this.isVocabAlreadyInFlashcards(v, existingCards);

            if (!alreadyExists) {
                const frontText = `${v.term}${v.reading ? ` (${v.reading})` : ''}`.trim();
                const backText = [
                    v.meaning,
                    v.exampleSentence ? `\n\n📌 Misol: ${v.exampleSentence}` : '',
                    v.exampleTranslation ? `\n(${v.exampleTranslation})` : ''
                ].join('').trim();

                const newCard: Partial<Flashcard> = {
                    front: frontText,
                    back: backText,
                    nextReviewDate: timestamp,
                    easeFactor: 2.5,
                    interval: 0,
                    repetitions: 0
                };
                cardsToCreate.push(newCard);

                // Add to local list so duplicates within the same lesson are also skipped
                existingCards.push({
                    id: generateUUID(),
                    subjectId: '',
                    front: frontText,
                    back: backText,
                    nextReviewDate: timestamp,
                    easeFactor: 2.5,
                    interval: 0,
                    repetitions: 0
                });

                // Create vocabulary signal
                const vocabSignal: VocabularySignal = {
                    id: generateUUID(),
                    type: 'new_vocabulary',
                    language: lesson.language,
                    lessonId: lesson.id,
                    userId: activeUserId,
                    term: v.term,
                    reading: v.reading,
                    meaning: v.meaning,
                    exampleSentence: v.exampleSentence,
                    exampleTranslation: v.exampleTranslation,
                    timestamp
                };
                emittedSignals.push(vocabSignal);
            }
        });

        // 3. Batch insert new non-duplicate cards into SRS
        let createdCount = 0;
        if (cardsToCreate.length > 0) {
            try {
                const created = await FlashcardService.addFlashcardsBatch(activeUserId, cardsToCreate);
                createdCount = created.length;
            } catch (err) {
                console.error('[LearningSignalService] Failed to auto-create SRS cards:', err);
            }
        }

        // 4. Capture Grammar signals from the lesson
        lesson.steps.forEach(step => {
            if (step.type === 'learn' && step.learnData?.grammarRules) {
                step.learnData.grammarRules.forEach(rule => {
                    const grammarSignal: GrammarSignal = {
                        id: generateUUID(),
                        type: 'grammar_pattern',
                        language: lesson.language,
                        lessonId: lesson.id,
                        userId: activeUserId,
                        pattern: rule.pattern,
                        meaning: rule.meaning,
                        level: lesson.level,
                        timestamp
                    };
                    emittedSignals.push(grammarSignal);
                });
            }
        });

        // 5. Check for repeated errors (questions failed >= 2 times)
        const errorCountByQuestion: Record<string, { count: number; prompt: string }> = {};
        incorrectAnswers.forEach(err => {
            if (!errorCountByQuestion[err.questionId]) {
                errorCountByQuestion[err.questionId] = { count: 0, prompt: err.prompt };
            }
            errorCountByQuestion[err.questionId].count += 1;
        });

        Object.entries(errorCountByQuestion).forEach(([qId, data]) => {
            if (data.count >= 2) {
                const repeatedSignal: RepeatedErrorSignal = {
                    id: generateUUID(),
                    type: 'repeated_error',
                    language: lesson.language,
                    lessonId: lesson.id,
                    userId: activeUserId,
                    questionId: qId,
                    errorCount: data.count,
                    prompt: data.prompt,
                    timestamp
                };
                emittedSignals.push(repeatedSignal);
            }
        });

        // Add the incorrect answer signals
        emittedSignals.push(...incorrectAnswers);

        // 6. Record CompletedLessonSignal
        const completionSignal: CompletedLessonSignal = {
            id: generateUUID(),
            type: 'completed_lesson',
            language: lesson.language,
            lessonId: lesson.id,
            userId: activeUserId,
            level: lesson.level,
            score: scoreData.score,
            total: scoreData.total,
            percentage: scoreData.percentage,
            newCardsCreated: createdCount,
            mistakesCount: incorrectAnswers.length,
            durationMinutes: lesson.estimatedDurationMinutes,
            timestamp
        };
        emittedSignals.push(completionSignal);

        // 7. Save all emitted signals in batch
        await this.recordSignalsBatch(emittedSignals);

        return {
            newCardsCount: createdCount,
            mistakesCount: incorrectAnswers.length
        };
    }
};
