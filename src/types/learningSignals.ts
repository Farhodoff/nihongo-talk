import { SupportedLanguage } from './lesson';

export type LearningSignalType = 
    | 'new_vocabulary' 
    | 'grammar_pattern' 
    | 'incorrect_answer' 
    | 'repeated_error' 
    | 'completed_lesson';

export interface BaseLearningSignal {
    id: string;
    type: LearningSignalType;
    language: SupportedLanguage;
    lessonId: string;
    userId: string;
    timestamp: string;
}

export interface VocabularySignal extends BaseLearningSignal {
    type: 'new_vocabulary';
    term: string;
    reading?: string;
    meaning: string;
    exampleSentence?: string;
    exampleTranslation?: string;
    srsCardId?: string;
}

export interface GrammarSignal extends BaseLearningSignal {
    type: 'grammar_pattern';
    pattern: string;
    meaning: string;
    level: string;
}

export interface IncorrectAnswerSignal extends BaseLearningSignal {
    type: 'incorrect_answer';
    stepId: string;
    questionId: string;
    prompt: string;
    userAnswer: string | number;
    expectedAnswer: string | number;
    explanation?: string;
    attemptCount: number;
}

export interface RepeatedErrorSignal extends BaseLearningSignal {
    type: 'repeated_error';
    questionId: string;
    errorCount: number;
    prompt: string;
}

export interface CompletedLessonSignal extends BaseLearningSignal {
    type: 'completed_lesson';
    level: string;
    score: number;
    total: number;
    percentage: number;
    newCardsCreated: number;
    mistakesCount: number;
    durationMinutes?: number;
}

export type LearningSignal = 
    | VocabularySignal 
    | GrammarSignal 
    | IncorrectAnswerSignal 
    | RepeatedErrorSignal 
    | CompletedLessonSignal;
