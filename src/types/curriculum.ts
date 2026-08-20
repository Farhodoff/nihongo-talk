import { SupportedLanguage } from './lesson';
import { MasterySkill, SkillMastery, SkillWeakness } from './mastery';

export type NodeStatus = 
    | 'completed' 
    | 'current' 
    | 'in_progress' 
    | 'weak' 
    | 'available' 
    | 'locked' 
    | 'skipped';

export interface CurriculumLessonNode {
    id: string;
    title: string;
    description: string;
    order: number;
    estimatedMinutes: number;
    skill: MasterySkill;
    route: string;
    sourceType?: string;
    contentId?: string;
    isContentAvailable?: boolean;
    availabilityMessage?: string;
    prerequisites?: string[];
}

export interface CurriculumUnitNode {
    id: string;
    title: string;
    description: string;
    order: number;
    levelCode: string;
    lessons: CurriculumLessonNode[];
}

export interface CurriculumLevelNode {
    id: string;
    code: string; // 'A1', 'A2', 'B1', 'B2', 'C1', 'C2' or 'N5', 'N4', 'N3', 'N2', 'N1'
    title: string;
    order: number;
    description: string;
    units: CurriculumUnitNode[];
}

export interface CurriculumCourse {
    id: string;
    language: SupportedLanguage;
    title: string;
    type: 'general' | 'exam' | 'goal';
    levels: CurriculumLevelNode[];
}

export interface RoadmapLessonNode extends CurriculumLessonNode {
    status: NodeStatus;
    progressPercentage: number;
    score?: number;
    lockReason?: string;
}

export interface RoadmapUnitNode {
    id: string;
    title: string;
    order: number;
    levelCode: string;
    status: NodeStatus;
    progressPercentage: number;
    lessons: RoadmapLessonNode[];
}

export interface RoadmapLevelNode {
    id: string;
    code: string;
    title: string;
    order: number;
    status: NodeStatus;
    progressPercentage: number;
    description: string;
    units: RoadmapUnitNode[];
}

export interface LearningRoadmap {
    userId: string;
    language: SupportedLanguage;
    currentLevelCode: string;
    targetLevelCode: string;
    targetGoal: string;
    overallProgressPercentage: number;
    levels: RoadmapLevelNode[];
    activeLesson: RoadmapLessonNode | null;
    activeLevelNode: RoadmapLevelNode | null;
    skillMasteries: Record<string, SkillMastery>;
    topWeaknesses: SkillWeakness[];
    generatedAt: string;
}
