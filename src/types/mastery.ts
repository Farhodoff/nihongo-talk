import { SupportedLanguage } from './lesson';

export type MasterySkill = 
    | 'vocabulary' 
    | 'grammar' 
    | 'reading' 
    | 'listening' 
    | 'writing' 
    | 'speaking' 
    | 'kanji';

export type MasteryTrend = 'improving' | 'stable' | 'declining';

export type MasteryStatus = 'not_started' | 'weak' | 'learning' | 'strong' | 'mastered';

export type WeaknessSeverity = 'high' | 'medium' | 'low';

export interface SkillMastery {
    skill: MasterySkill;
    score: number; // 0-100
    confidence: number; // 0-100 (based on evidence volume & variety)
    evidenceCount: number;
    lastUpdatedAt?: string;
    trend: MasteryTrend;
    status: MasteryStatus;
    explanation: string;
}

export interface SkillWeakness {
    skill: MasterySkill;
    score: number;
    confidence: number;
    severity: WeaknessSeverity;
    reason: string;
    recommendedRoute: string;
    language: SupportedLanguage;
    evidenceDetails?: string[];
}

export interface UserMasteryProfile {
    userId: string;
    language: SupportedLanguage;
    skills: Record<string, SkillMastery>;
    topWeaknesses: SkillWeakness[];
    topStrengths: SkillMastery[];
    overallMasteryScore: number;
    overallConfidence: number;
    lastCalculatedAt: string;
}
