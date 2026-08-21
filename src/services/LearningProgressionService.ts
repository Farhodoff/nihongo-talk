import { SupportedLanguage } from '../types/lesson';
import { RoadmapLessonNode } from '../types/curriculum';
import { LearningOrchestrator } from './LearningOrchestrator';
import { RoadmapService } from './RoadmapService';

/**
 * Unified Source of Truth for Level Progression, Promotion, and Lesson Access.
 */
export const LearningProgressionService = {
    /**
     * Get the user's current level.
     */
    getCurrentLevel(_userId: string = 'guest', language?: SupportedLanguage): string {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const { currentLevel } = LearningOrchestrator.getUserTarget(lang);
        return currentLevel;
    },

    /**
     * Get the next recommended lesson node based on current roadmap.
     */
    async getNextRecommendedLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        return this.getNextLesson(userId, language);
    },

    /**
     * Unified Priority-based Next Lesson resolver.
     */
    async getNextLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const state = await LearningOrchestrator.getUserLearningState(userId, { forceLanguage: lang });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        const priorityOrder: string[] = ['weak', 'in_progress', 'current', 'available'];
        for (const targetStatus of priorityOrder) {
            for (const level of roadmap.levels) {
                for (const unit of level.units) {
                    for (const lesson of unit.lessons) {
                        if (lesson.status === targetStatus) {
                            return lesson;
                        }
                    }
                }
            }
        }

        // Fallback to first lesson
        for (const level of roadmap.levels) {
            for (const unit of level.units) {
                if (unit.lessons.length > 0) {
                    return unit.lessons[0];
                }
            }
        }

        return null;
    },

    /**
     * Service-level authorization to check if a user can access a specific lesson.
     */
    canAccessLesson(
        lessonId: string,
        userId: string = 'guest',
        language?: SupportedLanguage
    ): { allowed: boolean; reason: string; redirectTo?: string } {
        return LearningOrchestrator.canAccessLesson(lessonId, userId, language);
    }
};

export default LearningProgressionService;
