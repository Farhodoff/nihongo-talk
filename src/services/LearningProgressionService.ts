import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { RoadmapLessonNode } from '../types/curriculum';
import { LearningOrchestrator } from './LearningOrchestrator';
import { RoadmapService } from './RoadmapService';
import { WeaknessEngine } from './WeaknessEngine';

// ---------------------------------------------------------------------------
// Priority order for next-lesson resolution
// ---------------------------------------------------------------------------
// 1. Remediation: A lesson targeting the user's top-weak skill (score < 50)
// 2. In-progress: A lesson the user started but hasn't finished
// 3. Current-level: The next un-started lesson at the user's current level
// 4. Available: Any lesson not yet completed
// 5. Fallback: The very first lesson in the roadmap
// ---------------------------------------------------------------------------

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
     * Delegates to the full adaptive resolver.
     */
    async getNextRecommendedLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        return this.getNextLesson(userId, language);
    },

    /**
     * Phase 19 — Priority-based Adaptive Next Lesson Resolver.
     *
     * Priority ladder:
     *   1. Remediation lesson for the user's highest-severity weak skill (score < 50)
     *   2. Any in-progress lesson
     *   3. Next not-started lesson at current level
     *   4. Any available (accessible but not started) lesson
     *   5. Fallback to the very first roadmap lesson
     */
    async getNextLesson(
        userId: string = 'guest',
        language?: SupportedLanguage
    ): Promise<RoadmapLessonNode | null> {
        const lang = language || LearningOrchestrator.getPrimaryLanguage();
        const state = await LearningOrchestrator.getUserLearningState(userId, { forceLanguage: lang });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        // --- Collect flat lists for each priority bucket ---
        const inProgress: RoadmapLessonNode[] = [];
        const current: RoadmapLessonNode[] = [];
        const available: RoadmapLessonNode[] = [];
        let firstLesson: RoadmapLessonNode | null = null;

        for (const level of roadmap.levels) {
            for (const unit of level.units) {
                for (const lesson of unit.lessons) {
                    if (!firstLesson) firstLesson = lesson;

                    if (lesson.status === 'in_progress') inProgress.push(lesson);
                    else if (lesson.status === 'current') current.push(lesson);
                    else if (lesson.status === 'available') available.push(lesson);
                }
            }
        }

        // --- Priority 1: Remediation for top weak skill (score < 50) ---
        const remediationLesson = this._findRemediationLesson(
            userId, lang, [...inProgress, ...current, ...available]
        );
        if (remediationLesson) return remediationLesson;

        // --- Priority 2: In-progress lesson ---
        if (inProgress.length > 0) return inProgress[0];

        // --- Priority 3: Next not-started lesson at current level ---
        if (current.length > 0) return current[0];

        // --- Priority 4: Any available lesson ---
        if (available.length > 0) return available[0];

        // --- Priority 5: Fallback ---
        return firstLesson;
    },

    /**
     * Find a lesson that directly targets the user's most critical weak skill.
     * Only triggers when at least one skill has score < 50 (severity: high).
     * Returns null if no weak-skill remediation candidate exists in the active pool.
     */
    _findRemediationLesson(
        userId: string,
        lang: SupportedLanguage,
        candidates: RoadmapLessonNode[]
    ): RoadmapLessonNode | null {
        if (candidates.length === 0) return null;

        // Get the enriched mastery profile (includes topWeaknesses, sorted by severity)
        const profile = WeaknessEngine.getUserMasteryProfile(userId, lang);
        const highSeverityWeaknesses = (profile.topWeaknesses || []).filter(w => w.severity === 'high');

        if (highSeverityWeaknesses.length === 0) return null;

        // Try to find a candidate lesson whose skill matches the weakest skill
        const targetSkills: MasterySkill[] = highSeverityWeaknesses.map(w => w.skill);

        for (const targetSkill of targetSkills) {
            const match = candidates.find(lesson => (lesson as any).skill === targetSkill);
            if (match) return match;
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
