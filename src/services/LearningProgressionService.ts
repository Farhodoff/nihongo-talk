import { SupportedLanguage } from '../types/lesson';
import { RoadmapLessonNode } from '../types/curriculum';
import { LearningOrchestrator } from './LearningOrchestrator';
import { RoadmapService } from './RoadmapService';
import { resolveNextLesson, NextLessonResult, NextLessonBucket } from './NextLessonResolver';

/**
 * Unified Source of Truth for Level Progression, Promotion, and Lesson Access.
 *
 * All "next lesson" decisions flow through here. UI pages and other services
 * must NOT compute their own next lesson — they call `getNextLesson`.
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
     * Phase 19 — Single next-lesson decision.
     * Returns the resolved lesson node (or null).
     */
    async getNextLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        const result = await this.getNextLessonDetail(userId, language);
        return result.lesson;
    },

    /**
     * Phase 19 — Single next-lesson decision with reason + priority bucket.
     */
    async getNextLessonDetail(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<NextLessonResult> {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const state = await LearningOrchestrator.getUserLearningState(userId, { forceLanguage: lang });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        return resolveNextLesson(roadmap, state.masteryProfile?.topWeaknesses || []);
    },

    /**
     * Alias: get the next recommended lesson node (single source of truth).
     */
    async getNextRecommendedLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        return this.getNextLesson(userId, language);
    },

    /**
     * Phase 19 — Synchronous resolver for callers that already hold a roadmap.
     * Same single ladder; no duplicate decision logic.
     */
    getNextLessonFromRoadmap(
        roadmap: Parameters<typeof resolveNextLesson>[0],
        topWeaknesses: Parameters<typeof resolveNextLesson>[1] = []
    ): NextLessonResult {
        return resolveNextLesson(roadmap, topWeaknesses);
    },

    /**
     * Service-level authorization to check if a user can access a specific lesson.
     */
    canAccessLesson(
        lessonId: string,
        userId: string = 'guest',
        language?: SupportedLanguage
    ): { allowed: boolean; reason: string; redirectTo?: string; missingPrerequisites?: string[] } {
        return LearningOrchestrator.canAccessLesson(lessonId, userId, language);
    }
};

export type { NextLessonResult, NextLessonBucket };
export default LearningProgressionService;
