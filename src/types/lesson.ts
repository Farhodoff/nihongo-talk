export type SupportedLanguage = 'en' | 'ja';

export type LessonStepType = 'learn' | 'practice' | 'test';

export interface VocabItem {
    term: string;
    reading?: string; // Furigana or phonetic transcription
    meaning: string;
    exampleSentence?: string;
    exampleTranslation?: string;
}

export interface GrammarRule {
    pattern: string;
    meaning: string;
    usageNotes?: string;
    examples: {
        sentence: string;
        translation: string;
    }[];
}

export interface LearnContent {
    title: string;
    subtitle?: string;
    explanation: string;
    keyPoints?: string[];
    vocabulary?: VocabItem[];
    grammarRules?: GrammarRule[];
    culturalNotes?: string;
}

export interface PracticeExercise {
    id: string;
    type: 'multiple-choice' | 'true-false' | 'fill-in-blank';
    prompt: string;
    options?: string[];
    correctAnswer: string | number;
    explanation?: string;
    hint?: string;
}

export interface TestQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}

export interface LessonStep {
    id: string;
    title: string;
    type: LessonStepType;
    estimatedMinutes: number;
    learnData?: LearnContent;
    practiceData?: {
        instructions: string;
        exercises: PracticeExercise[];
    };
    testData?: {
        instructions: string;
        passingScorePercentage: number;
        questions: TestQuestion[];
    };
}

export interface Lesson {
    id: string;
    courseId: string;
    unitId: string;
    unitTitle: string;
    language: SupportedLanguage;
    level: string; // e.g. 'N3' or 'B2'
    lessonNumber: number;
    title: string;
    description: string;
    estimatedDurationMinutes: number;
    icon?: string;
    steps: LessonStep[];
}

export interface UserLessonProgress {
    lessonId: string;
    userId: string;
    currentStepIndex: number;
    completedStepIds: string[];
    isCompleted: boolean;
    quizScore?: {
        score: number;
        total: number;
        percentage: number;
    };
    lastAttemptedAt: string;
    completedAt?: string;
}
