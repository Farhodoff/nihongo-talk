import { SupportedLanguage } from './lesson';

export interface LessonPosition {
    courseId: string;
    unitId: string;
    unitTitle?: string;
    lessonId: string;
    lessonTitle: string;
    stepIndex: number;
    totalSteps: number;
    status: 'not_started' | 'in_progress' | 'completed';
    percentage: number;
}

export interface UnfinishedLessonInfo {
    lessonId: string;
    lessonTitle: string;
    language: SupportedLanguage;
    level: string;
    lastStepIndex: number;
    totalSteps: number;
    progressPercentage: number;
    lastAccessedAt?: string;
}

export interface SrsReviewSummary {
    totalCards: number;
    dueCount: number;
    overdueCount: number;
    newCount: number;
    learnedCount: number;
    averageRetentionScore: number;
}

export interface SignalsSummary {
    totalSignalsCount: number;
    recentMistakesCount: number;
    newVocabCount: number;
    completedLessonsCount: number;
    recentMistakeTopics: string[];
}

export interface RecentLearningActivity {
    lastStudyAt: string | null;
    recentLessonIds: string[];
    lastCompletedLessonId: string | null;
}

export interface UserLearningState {
    userId: string;
    primaryLanguage: SupportedLanguage;
    enabledLanguages: SupportedLanguage[];
    currentLevel: string;
    targetLevel: string;
    targetGoal: string;
    availableStudyMinutes: number;
    currentPosition: LessonPosition | null;
    completedLessonsCount: number;
    unfinishedLessons: UnfinishedLessonInfo[];
    reviewSummary: SrsReviewSummary;
    signalsSummary: SignalsSummary;
    recentActivity: RecentLearningActivity;
}

export interface OrchestratorOptions {
    forceLanguage?: SupportedLanguage;
    cachedFlashcards?: any[];
}
