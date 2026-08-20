import { SupportedLanguage } from './lesson';
import { MasterySkill } from './mastery';

export type DiagnosticMode = 'quick' | 'standard' | 'deep';

export interface DiagnosticQuestion {
    id: string;
    language: SupportedLanguage;
    level: string; // 'A1' | 'A2' | 'B1' | 'B2' | 'C1' or 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    skill: MasterySkill;
    difficulty: 'easy' | 'medium' | 'hard';
    prompt: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
    topic: string;
}

export interface LevelEvidence {
    level: string;
    attempts: number;
    correct: number;
    confidence: number; // 0 - 100
}

export interface DiagnosticSkillScore {
    skill: MasterySkill;
    score: number; // 0 - 100
    confidence: number; // 0 - 100
    estimatedLevel: string;
    totalQuestions: number;
    correctCount: number;
    status: 'strong' | 'adequate' | 'weak' | 'insufficient';
    levelEvidence: LevelEvidence[];
    reason: string;
}

export interface DiagnosticResult {
    id: string;
    userId: string;
    language: SupportedLanguage;
    mode: DiagnosticMode;
    claimedLevel: string;
    diagnosticLevel: string;
    recommendedStartLevel: string;
    overallConfidence: number;
    overallScore: number;
    skills: Partial<Record<MasterySkill, DiagnosticSkillScore>>;
    strengths: string[];
    weaknesses: string[];
    recommendedFirstLessonId: string;
    explanation?: string;
    completedAt: string;
}

export interface AdaptiveAnswerRecord {
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    level: string;
    skill: MasterySkill;
    difficulty: 'easy' | 'medium' | 'hard';
    timeSpentSeconds?: number;
}

export interface AdaptiveDiagnosticState {
    userId: string;
    language: SupportedLanguage;
    mode: DiagnosticMode;
    claimedLevel: string;
    currentLevel: string;
    currentDifficulty: 'easy' | 'medium' | 'hard';
    currentSkillFocus: MasterySkill;
    consecutiveCorrect: number;
    consecutiveIncorrect: number;
    answeredCount: number;
    maxQuestions: number;
    currentQuestionId: string | null;
    visitedQuestionIds: string[];
    answers: AdaptiveAnswerRecord[];
    isCompleted: boolean;
    lastUpdated: string;
}

export interface DiagnosticSessionState {
    userId: string;
    language: SupportedLanguage;
    mode: DiagnosticMode;
    claimedLevel: string;
    currentQuestionIndex: number;
    totalQuestions: number;
    answeredQuestions: {
        questionId: string;
        selectedOptionIndex: number;
        isCorrect: boolean;
        timeSpentSeconds: number;
    }[];
    lastUpdated: string;
}
