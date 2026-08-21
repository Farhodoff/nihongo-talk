import { SupportedLanguage } from '../types/lesson';
import { RoadmapLessonNode } from '../types/curriculum';
import { LearningOrchestrator } from './LearningOrchestrator';
import { RoadmapService } from './RoadmapService';
import { resolveNextLesson, NextLessonResult, NextLessonBucket } from './NextLessonResolver';
import { LearningTrackStorage } from '../utils/storage/LearningTrackStorage';
import { LevelPromotionCandidate } from '../types/learningPath';
import { LearningPathEngine, PROGRESSION_CONFIG } from './LearningPathEngine';

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
    },

    /**
     * Evaluate and create/save level promotion candidate if user meets criteria.
     */
    async evaluatePromotion(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<LevelPromotionCandidate | null> {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();

        // 1. Check if there is already a pending candidate
        const existing = LearningTrackStorage.getPromotionCandidate(lang);
        if (existing && existing.status === 'pending') {
            return existing;
        }

        // 2. Fetch user state
        const state = await LearningOrchestrator.getUserLearningState(userId, { forceLanguage: lang });
        const isZeroLevel = state.completedLessonsCount === 0 &&
            (state.currentLevel === 'A1' || state.currentLevel === 'N5');

        // 3. Evaluate progression criteria
        const progression = LearningPathEngine.evalProgression(state, isZeroLevel);

        if (progression.canAdvance && progression.nextLevel) {
            const skills = Object.values(state.masteryProfile?.skills || {});
            const avgMastery = skills.length > 0
                ? Math.round(skills.reduce((sum: number, sk: any) => sum + (sk.score || 0), 0) / skills.length)
                : 0;

            // Check if user previously dismissed this level candidate
            if (existing && existing.status === 'dismissed' && existing.candidateLevel === progression.nextLevel) {
                // Re-evaluate only if there's new evidence (more completed lessons or higher mastery score)
                const hasNewEvidence = state.completedLessonsCount > existing.completedLessonsCount ||
                                     avgMastery > existing.masteryScore;
                if (!hasNewEvidence) {
                    return null;
                }
            }

            const requiredThreshold = PROGRESSION_CONFIG.STANDARD_LEVEL_MASTERY_THRESHOLD;

            const candidate: LevelPromotionCandidate = {
                language: lang,
                currentLevel: state.currentLevel,
                candidateLevel: progression.nextLevel,
                reason: progression.explanation || `Passed requirements for ${progression.nextLevel}`,
                evidenceIds: (state.unfinishedLessons || []).map((l: any) => l.lessonId || l),
                masteryScore: avgMastery,
                requiredThreshold,
                createdAt: new Date().toISOString(),
                status: 'pending',
                completedLessonsCount: state.completedLessonsCount
            };

            LearningTrackStorage.setPromotionCandidate(lang, candidate);
            return candidate;
        }

        return null;
    },

    /**
     * Retrieve the current pending promotion candidate if one exists.
     */
    getPromotionCandidate(language?: SupportedLanguage): LevelPromotionCandidate | null {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const candidate = LearningTrackStorage.getPromotionCandidate(lang);
        return (candidate && candidate.status === 'pending') ? candidate : null;
    },

    /**
     * Confirm candidate promotion and advance the user to candidateLevel.
     */
    async confirmPromotion(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<{ promoted: boolean; oldLevel: string; newLevel: string | null; reason: string }> {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const candidate = LearningTrackStorage.getPromotionCandidate(lang);

        if (!candidate || candidate.status !== 'pending') {
            return {
                promoted: false,
                oldLevel: LearningTrackStorage.getCurrentLevel(lang),
                newLevel: null,
                reason: 'No pending promotion candidate found.'
            };
        }

        const oldLevel = candidate.currentLevel;
        const newLevel = candidate.candidateLevel;

        // Update candidate status to confirmed
        candidate.status = 'confirmed';
        LearningTrackStorage.setPromotionCandidate(lang, candidate);

        // Update confirmed current level in local track storage
        LearningTrackStorage.setCurrentLevel(lang, newLevel);

        // Sync level to Supabase profile metadata
        if (userId && userId !== 'guest') {
            try {
                const supabase = (await import('../lib/supabase') as any).supabase;
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    await supabase.auth.updateUser({
                        data: { current_level: newLevel, current_level_language: lang }
                    });
                }
            } catch (err) {
                console.warn('[LearningProgressionService] Supabase profile sync failed:', err);
            }
        }

        return { promoted: true, oldLevel, newLevel, reason: `Promotion confirmed by user: ${newLevel}` };
    },

    /**
     * Dismiss/reject candidate promotion.
     */
    dismissPromotion(language?: SupportedLanguage): void {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const candidate = LearningTrackStorage.getPromotionCandidate(lang);
        if (candidate && candidate.status === 'pending') {
            candidate.status = 'dismissed';
            LearningTrackStorage.setPromotionCandidate(lang, candidate);
        }
    }
};

export type { NextLessonResult, NextLessonBucket };
export default LearningProgressionService;
