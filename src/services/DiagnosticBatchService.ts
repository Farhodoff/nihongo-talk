import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { DiagnosticQuestion, AdaptiveDiagnosticState } from '../types/diagnostic';
import { DiagnosticService } from './DiagnosticService';
import { callSelectedAIProvider } from '../utils/ai/aiCore';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

const BATCH_CACHE_PREFIX = 'study_planner_diag_prefetch_';

export const DiagnosticBatchService = {
    /**
     * Get unique cache key for a prefetch batch
     */
    getCacheKey(userId: string, language: SupportedLanguage): string {
        return `${BATCH_CACHE_PREFIX}${userId}_${language}`;
    },

    /**
     * Retrieve any prefetched questions currently in storage
     */
    getPrefetchedQuestions(userId: string, language: SupportedLanguage): DiagnosticQuestion[] {
        const key = this.getCacheKey(userId, language);
        return safeLocalStorage.getJSON<DiagnosticQuestion[]>(key, []);
    },

    /**
     * Save prefetched questions to local cache
     */
    savePrefetchedQuestions(userId: string, language: SupportedLanguage, questions: DiagnosticQuestion[]): void {
        const key = this.getCacheKey(userId, language);
        safeLocalStorage.setJSON(key, questions);
    },

    /**
     * Clear prefetched questions cache
     */
    clearPrefetchCache(userId: string, language: SupportedLanguage): void {
        const key = this.getCacheKey(userId, language);
        safeLocalStorage.removeItem(key);
    },

    /**
     * Start prefetching the next batch of questions asynchronously in the background.
     * Prefetches a batch of 3-4 questions tailored to the user's estimated level and upcoming focus.
     */
    async prefetchNextBatch(
        userId: string,
        language: SupportedLanguage,
        state: AdaptiveDiagnosticState
    ): Promise<void> {
        // Run as a background task to ensure user experiences no latency
        setTimeout(async () => {
            try {
                const currentPrefetched = this.getPrefetchedQuestions(userId, language);
                if (currentPrefetched.length >= 4) {
                    return; // Already has enough prefetched questions
                }

                const bank = DiagnosticService.getBankForLanguage(language);
                const visitedIds = [...state.visitedQuestionIds, ...currentPrefetched.map(q => q.id)];

                // Determine next 4 focus states based on skill rotations
                const skills = language === 'ja'
                    ? ['vocabulary', 'kanji', 'grammar', 'reading', 'listening']
                    : ['vocabulary', 'grammar', 'reading', 'listening'];

                const currentSkillIdx = skills.indexOf(state.currentSkillFocus);

                const neededCount = 4 - currentPrefetched.length;
                const newQuestions: DiagnosticQuestion[] = [];

                for (let i = 0; i < neededCount; i++) {
                    const focusSkill = skills[(currentSkillIdx + 1 + i) % skills.length] as MasterySkill;

                    // Try to pick from static bank first (Hybrid Model: Step 1 & 2)
                    const localCandidate = bank.find(q =>
                        q.language === language &&
                        q.level === state.currentLevel &&
                        q.skill === focusSkill &&
                        !visitedIds.includes(q.id)
                    );

                    if (localCandidate) {
                        newQuestions.push(localCandidate);
                        visitedIds.push(localCandidate.id);
                    }
                }

                // If we couldn't satisfy with static questions, call AI for generation (Step 3: AI generation)
                if (newQuestions.length < neededCount) {
                    const aiNeeded = neededCount - newQuestions.length;
                    const aiFocusSkills = [];
                    for (let i = 0; i < aiNeeded; i++) {
                        aiFocusSkills.push(skills[(currentSkillIdx + 1 + newQuestions.length + i) % skills.length]);
                    }

                    const aiQuestions = await this.generateQuestionsViaAI(
                        language,
                        state.currentLevel,
                        state.currentDifficulty,
                        aiFocusSkills as MasterySkill[]
                    );

                    aiQuestions.forEach(q => {
                        newQuestions.push(q);
                    });
                }

                // Save merged batch back to cache
                this.savePrefetchedQuestions(userId, language, [...currentPrefetched, ...newQuestions]);
            } catch (err) {
                console.warn('[DiagnosticBatchService] Background prefetching failed:', err);
            }
        }, 100);
    },

    /**
     * AI Question generator for edge cases / hybrid adaptation.
     */
    async generateQuestionsViaAI(
        language: SupportedLanguage,
        level: string,
        difficulty: 'easy' | 'medium' | 'hard',
        skills: MasterySkill[]
    ): Promise<DiagnosticQuestion[]> {
        const isJa = language === 'ja';
        const prompt = `Act as an expert ${isJa ? 'JLPT' : 'IELTS/CEFR'} curriculum designer.
Generate exactly ${skills.length} multiple-choice exam-style questions for:
- Language: ${language}
- Target Level: ${level}
- Target Difficulty: ${difficulty}
- Skills to evaluate: ${skills.join(', ')}

Ensure questions are original, realistic, and contain exactly 4 options.
Output ONLY a valid JSON array matching this exact schema:
[
  {
    "id": "ai-diag-${language}-${level}-\${Math.random()}",
    "language": "${language}",
    "level": "${level}",
    "skill": "skill_name_matching_requested",
    "difficulty": "${difficulty}",
    "prompt": "Question text here...",
    "options": ["A", "B", "C", "D"],
    "correctAnswerIndex": 0,
    "explanation": "Uzbekcha tushuntirish...",
    "topic": "Specific grammar/vocabulary topic"
  }
]
No code fences, no leading/trailing commentary.`;

        try {
            const response = await callSelectedAIProvider(prompt, undefined, true);
            const cleaned = response.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleaned);

            if (Array.isArray(parsed)) {
                // Strict validation & sanitization
                return parsed.map((item, idx) => ({
                    id: item.id || `ai-diag-${language}-${level}-${Date.now()}-${idx}`,
                    language: language,
                    level: level,
                    skill: (skills[idx] || item.skill) as MasterySkill,
                    difficulty: difficulty,
                    prompt: String(item.prompt || 'Choose the correct answer'),
                    options: Array.isArray(item.options) && item.options.length === 4
                        ? item.options.map(String)
                        : ['Option A', 'Option B', 'Option C', 'Option D'],
                    correctAnswerIndex: typeof item.correctAnswerIndex === 'number' && item.correctAnswerIndex >= 0 && item.correctAnswerIndex <= 3
                        ? item.correctAnswerIndex
                        : 0,
                    explanation: String(item.explanation || ''),
                    topic: String(item.topic || 'General Practice')
                }));
            }
        } catch (e) {
            console.error('[DiagnosticBatchService] AI Question generation error:', e);
        }

        // Fallback local stub questions to prevent test freeze
        return skills.map((sk, idx) => ({
            id: `fallback-diag-${language}-${level}-${sk}-${Date.now()}-${idx}`,
            language,
            level,
            skill: sk,
            difficulty,
            prompt: language === 'ja'
                ? `【Fallback Quiz】 ${sk.toUpperCase()} bo'yicha mashq.`
                : `[Fallback Quiz] Practice question for ${sk.toUpperCase()}.`,
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctAnswerIndex: 0,
            explanation: 'Fallback question used.',
            topic: 'General'
        }));
    }
};
