import { 
    UserLearningState, 
    LessonPosition, 
    UnfinishedLessonInfo, 
    SrsReviewSummary, 
    SignalsSummary, 
    RecentLearningActivity,
    OrchestratorOptions
} from '../types/learningOrchestrator';
import { SupportedLanguage } from '../types/lesson';
import { LessonService } from './LessonService';
import { LearningSignalService } from './LearningSignalService';
import { WeaknessEngine } from './WeaknessEngine';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { Flashcard } from '../types';
import { isDue, isOverdue } from '../utils/srs';
import { supabase } from '../lib/supabase';

export const LearningOrchestrator = {
    /**
     * Resolve the primary language of the user from local storage or defaults.
     */
    getPrimaryLanguage(): SupportedLanguage {
        const saved = safeLocalStorage.getItem('study_planner_primary_language') || 
                      safeLocalStorage.getItem('study_planner_study_track');
        return (saved === 'ja' || saved === 'en') ? saved : 'en';
    },

    /**
     * Resolve all enabled languages.
     */
    getEnabledLanguages(primaryLang: SupportedLanguage): SupportedLanguage[] {
        const saved = safeLocalStorage.getJSON<SupportedLanguage[] | null>('study_planner_enabled_languages', null);
        if (Array.isArray(saved) && saved.length > 0) {
            return saved;
        }
        return [primaryLang];
    },

    /**
     * Resolve user's target level and goal.
     */
    getUserTarget(primaryLang: SupportedLanguage): { targetLevel: string; targetGoal: string; currentLevel: string } {
        const defaultLevel = primaryLang === 'ja' ? 'N3' : 'B2';
        const defaultGoal = primaryLang === 'ja' ? 'JLPT Imtihoni' : 'IELTS 7.0+';

        const targetLevel = safeLocalStorage.getItem('study_planner_target_level') || defaultLevel;
        const targetGoal = safeLocalStorage.getItem('study_planner_target_goal') || defaultGoal;
        const currentLevel = safeLocalStorage.getItem('study_planner_current_level') || targetLevel;

        return { currentLevel, targetLevel, targetGoal };
    },

    /**
     * Resolve daily available study minutes.
     */
    getAvailableStudyMinutes(): number {
        const aiSettings = safeLocalStorage.getJSON<Record<string, any>>('study_planner_ai_settings', {});
        if (typeof aiSettings.dailyStudyGoalMinutes === 'number' && aiSettings.dailyStudyGoalMinutes > 0) {
            return aiSettings.dailyStudyGoalMinutes;
        }
        return 30; // Clean, standard default (30 mins)
    },

    /**
     * Determine user's current learning position and unfinished lessons in the curriculum.
     */
    getCurrentLearningPosition(userId: string = 'guest', language?: SupportedLanguage): LessonPosition | null {
        const lang = language || this.getPrimaryLanguage();
        const { currentLevel } = this.getUserTarget(lang);
        const lessons = LessonService.getLessonsForLanguage(lang);

        if (!lessons || lessons.length === 0) {
            return null;
        }

        // 1. Look for first in-progress lesson
        for (const lesson of lessons) {
            const prog = LessonService.getLessonProgress(userId, lesson.id);
            const isDone = prog ? (prog.isCompleted || (prog as any).completed) : false;
            if (prog && !isDone && prog.currentStepIndex > 0) {
                const totalSteps = lesson.steps?.length || 1;
                const percentage = Math.round((prog.currentStepIndex / totalSteps) * 100);
                return {
                    courseId: lesson.courseId,
                    unitId: lesson.unitId,
                    unitTitle: lesson.unitTitle,
                    lessonId: lesson.id,
                    lessonTitle: lesson.title,
                    stepIndex: prog.currentStepIndex,
                    totalSteps,
                    status: 'in_progress',
                    percentage
                };
            }
        }

        // 2. Look for first uncompleted lesson
        for (const lesson of lessons) {
            const prog = LessonService.getLessonProgress(userId, lesson.id);
            const isDone = prog ? (prog.isCompleted || (prog as any).completed) : false;
            if (!prog || !isDone) {
                const totalSteps = lesson.steps?.length || 1;
                return {
                    courseId: lesson.courseId,
                    unitId: lesson.unitId,
                    unitTitle: lesson.unitTitle,
                    lessonId: lesson.id,
                    lessonTitle: lesson.title,
                    stepIndex: 0,
                    totalSteps,
                    status: 'not_started',
                    percentage: 0
                };
            }
        }

        // 3. Fallback to default starting lesson matching level
        const defaultLesson = LessonService.getDefaultLessonForLanguage(lang, currentLevel) || lessons[0];
        const defaultTotalSteps = defaultLesson.steps?.length || 1;
        const defaultProg = LessonService.getLessonProgress(userId, defaultLesson.id);
        const isDefaultDone = defaultProg ? (defaultProg.isCompleted || (defaultProg as any).completed) : false;

        return {
            courseId: defaultLesson.courseId,
            unitId: defaultLesson.unitId,
            unitTitle: defaultLesson.unitTitle,
            lessonId: defaultLesson.id,
            lessonTitle: defaultLesson.title,
            stepIndex: defaultProg?.currentStepIndex || 0,
            totalSteps: defaultTotalSteps,
            status: isDefaultDone ? 'completed' : 'not_started',
            percentage: isDefaultDone ? 100 : 0
        };
    },

    /**
     * Get list of all unfinished lessons across active curriculum.
     */
    getUnfinishedLessons(userId: string = 'guest', language?: SupportedLanguage): UnfinishedLessonInfo[] {
        const lang = language || this.getPrimaryLanguage();
        const lessons = LessonService.getLessonsForLanguage(lang);
        const unfinished: UnfinishedLessonInfo[] = [];

        for (const lesson of lessons) {
            const prog = LessonService.getLessonProgress(userId, lesson.id);
            const isDone = prog ? (prog.isCompleted || (prog as any).completed) : false;
            if (prog && !isDone && prog.currentStepIndex > 0) {
                const totalSteps = lesson.steps?.length || 1;
                const progressPercentage = Math.round((prog.currentStepIndex / totalSteps) * 100);
                unfinished.push({
                    lessonId: lesson.id,
                    lessonTitle: lesson.title,
                    language: lesson.language,
                    level: lesson.level,
                    lastStepIndex: prog.currentStepIndex,
                    totalSteps,
                    progressPercentage,
                    lastAccessedAt: prog.lastAttemptedAt || (prog as any).lastAccessedAt
                });
            }
        }

        return unfinished;
    },

    /**
     * Aggregate Spaced Repetition (SRS) Flashcards status.
     */
    getReviewSummary(_userId: string = 'guest', cachedFlashcards?: Flashcard[]): SrsReviewSummary {
        let cards: Flashcard[] = cachedFlashcards || [];

        // If not provided in options, try reading from local cache
        if (cards.length === 0) {
            try {
                const cached = safeLocalStorage.getJSON<Flashcard[]>('study_planner_flashcards_cache', []);
                if (Array.isArray(cached)) {
                    cards = cached;
                }
            } catch (e) {
                console.warn('[LearningOrchestrator] Error reading flashcards cache:', e);
            }
        }

        let dueCount = 0;
        let overdueCount = 0;
        let newCount = 0;
        let learnedCount = 0;
        let totalMasterySum = 0;

        for (const card of cards) {
            if (isOverdue(card)) {
                overdueCount++;
                dueCount++;
            } else if (isDue(card)) {
                dueCount++;
            }

            const reps = card.repetitions ?? (card as any).repetition ?? 0;
            if (reps === 0) {
                newCount++;
            } else {
                learnedCount++;
            }

            // Estimate card mastery from easeFactor and interval
            const factor = card.easeFactor || 2.5;
            const interval = card.interval || 0;
            const cardScore = Math.min(100, Math.round((interval / 30) * 50 + (factor / 2.5) * 50));
            totalMasterySum += cardScore;
        }

        const averageRetentionScore = cards.length > 0 ? Math.round(totalMasterySum / cards.length) : 0;

        return {
            totalCards: cards.length,
            dueCount,
            overdueCount,
            newCount,
            learnedCount,
            averageRetentionScore
        };
    },

    /**
     * Aggregate Learning Signals (mistakes, completed lessons, new vocab).
     */
    getLearningSignalsSummary(userId: string = 'guest'): SignalsSummary {
        const signals = LearningSignalService.getSignalsForUser(userId);
        let recentMistakesCount = 0;
        let newVocabCount = 0;
        let completedLessonsCount = 0;
        const mistakeTopicSet = new Set<string>();

        for (const sig of signals) {
            if (sig.type === 'incorrect_answer' || sig.type === 'repeated_error') {
                recentMistakesCount++;
                if ('prompt' in sig && sig.prompt) {
                    mistakeTopicSet.add(sig.prompt.slice(0, 40));
                }
            } else if (sig.type === 'new_vocabulary') {
                newVocabCount++;
            } else if (sig.type === 'completed_lesson') {
                completedLessonsCount++;
            }
        }

        return {
            totalSignalsCount: signals.length,
            recentMistakesCount,
            newVocabCount,
            completedLessonsCount,
            recentMistakeTopics: Array.from(mistakeTopicSet).slice(0, 5)
        };
    },

    /**
     * Aggregate recent learning activities and history.
     */
    getRecentLearningActivity(userId: string = 'guest'): RecentLearningActivity {
        const signals = LearningSignalService.getSignalsForUser(userId);
        let lastStudyAt: string | null = null;
        let lastCompletedLessonId: string | null = null;
        const recentLessonIdSet = new Set<string>();

        for (let i = signals.length - 1; i >= 0; i--) {
            const sig = signals[i];
            if (!lastStudyAt && sig.timestamp) {
                lastStudyAt = sig.timestamp;
            }
            if (sig.lessonId) {
                recentLessonIdSet.add(sig.lessonId);
            }
            if (!lastCompletedLessonId && sig.type === 'completed_lesson' && sig.lessonId) {
                lastCompletedLessonId = sig.lessonId;
            }
        }

        return {
            lastStudyAt,
            recentLessonIds: Array.from(recentLessonIdSet).slice(0, 5),
            lastCompletedLessonId
        };
    },

    /**
     * Master Aggregator: Consolidates the complete UserLearningState.
     */
    async getUserLearningState(userId?: string, options?: OrchestratorOptions): Promise<UserLearningState> {
        let activeUserId = userId;

        if (!activeUserId) {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user?.id) {
                    activeUserId = user.id;
                }
            } catch (e) {
                // Ignore auth exception and fallback
            }
        }

        if (!activeUserId) {
            activeUserId = 'guest';
        }

        const primaryLanguage = options?.forceLanguage || this.getPrimaryLanguage();
        const enabledLanguages = this.getEnabledLanguages(primaryLanguage);
        const { currentLevel, targetLevel, targetGoal } = this.getUserTarget(primaryLanguage);
        const availableStudyMinutes = this.getAvailableStudyMinutes();

        const currentPosition = this.getCurrentLearningPosition(activeUserId, primaryLanguage);
        const unfinishedLessons = this.getUnfinishedLessons(activeUserId, primaryLanguage);

        // Count completed lessons for language
        const lessons = LessonService.getLessonsForLanguage(primaryLanguage);
        let completedLessonsCount = 0;
        for (const l of lessons) {
            const prog = LessonService.getLessonProgress(activeUserId, l.id);
            const isDone = prog ? (prog.isCompleted || (prog as any).completed) : false;
            if (isDone) {
                completedLessonsCount++;
            }
        }

        const reviewSummary = this.getReviewSummary(activeUserId, options?.cachedFlashcards);
        const signalsSummary = this.getLearningSignalsSummary(activeUserId);
        const recentActivity = this.getRecentLearningActivity(activeUserId);
        const masteryProfile = WeaknessEngine.getUserMasteryProfile(activeUserId, primaryLanguage, {
            srsRetention: reviewSummary.averageRetentionScore
        });

        return {
            userId: activeUserId,
            primaryLanguage,
            enabledLanguages,
            currentLevel,
            targetLevel,
            targetGoal,
            availableStudyMinutes,
            currentPosition,
            completedLessonsCount,
            unfinishedLessons,
            reviewSummary,
            signalsSummary,
            recentActivity,
            masteryProfile
        };
    }
};
