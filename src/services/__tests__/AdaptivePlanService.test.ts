import { describe, it, expect } from 'vitest';
import { AdaptivePlanService } from '../AdaptivePlanService';
import { UserLearningState } from '../../types/learningOrchestrator';

describe('AdaptivePlanService Unit Tests', () => {
    const createBaseState = (overrides?: Partial<UserLearningState>): UserLearningState => ({
        userId: 'test_plan_user',
        primaryLanguage: 'en',
        enabledLanguages: ['en'],
        currentLevel: 'B2',
        targetLevel: 'B2',
        targetGoal: 'IELTS 7.5+',
        availableStudyMinutes: 30,
        currentPosition: {
            courseId: 'ielts-b2',
            unitId: 'en-b2-u1',
            unitTitle: 'Unit 1: Education',
            lessonId: 'en-b2-u1-l1',
            lessonTitle: 'Academic Inversion & Reading',
            stepIndex: 0,
            totalSteps: 3,
            status: 'not_started',
            percentage: 0
        },
        completedLessonsCount: 0,
        unfinishedLessons: [],
        reviewSummary: {
            totalCards: 0,
            dueCount: 0,
            overdueCount: 0,
            newCount: 0,
            learnedCount: 0,
            averageRetentionScore: 0
        },
        signalsSummary: {
            totalSignalsCount: 0,
            recentMistakesCount: 0,
            newVocabCount: 0,
            completedLessonsCount: 0,
            recentMistakeTopics: []
        },
        recentActivity: {
            lastStudyAt: null,
            recentLessonIds: [],
            lastCompletedLessonId: null
        },
        ...overrides
    });

    it('1. should handle empty state with safe fallback plan', () => {
        const state = createBaseState({ currentPosition: null });
        const plan = AdaptivePlanService.generateDailyPlan(state);

        expect(plan.items.length).toBeGreaterThan(0);
        expect(plan.allocatedMinutes).toBe(30);
        expect(plan.summary.primaryFocus).toBeDefined();
    });

    it('2. should generate a valid 15-minute plan', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 15);

        expect(plan.totalMinutes).toBe(15);
        expect(plan.allocatedMinutes).toBe(15);
        const sum = plan.items.reduce((acc, i) => acc + i.estimatedMinutes, 0);
        expect(sum).toBe(15);
    });

    it('3. should generate a valid 30-minute plan', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 30);

        expect(plan.totalMinutes).toBe(30);
        expect(plan.allocatedMinutes).toBe(30);
        const sum = plan.items.reduce((acc, i) => acc + i.estimatedMinutes, 0);
        expect(sum).toBe(30);
    });

    it('4. should generate a valid 60-minute plan', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 60);

        expect(plan.totalMinutes).toBe(60);
        expect(plan.allocatedMinutes).toBe(60);
        const sum = plan.items.reduce((acc, i) => acc + i.estimatedMinutes, 0);
        expect(sum).toBe(60);
    });

    it('5. should generate a valid 120-minute plan', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 120);

        expect(plan.totalMinutes).toBe(120);
        expect(plan.allocatedMinutes).toBe(120);
        const sum = plan.items.reduce((acc, i) => acc + i.estimatedMinutes, 0);
        expect(sum).toBe(120);
    });

    it('6. should prioritize critical overdue SRS in daily plan', () => {
        const state = createBaseState({
            reviewSummary: {
                totalCards: 50,
                dueCount: 20,
                overdueCount: 15,
                newCount: 5,
                learnedCount: 45,
                averageRetentionScore: 60
            }
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 30);
        const srsItem = plan.items.find(i => i.type === 'srs_review');

        expect(srsItem).toBeDefined();
        expect(srsItem?.priority).toBeGreaterThanOrEqual(90);
        expect(srsItem?.route).toBe('/study-mode');
    });

    it('7. should prioritize unfinished lesson in daily plan', () => {
        const state = createBaseState({
            unfinishedLessons: [
                {
                    lessonId: 'en-b2-u1-l1',
                    lessonTitle: 'Academic Inversion',
                    language: 'en',
                    level: 'B2',
                    lastStepIndex: 2,
                    totalSteps: 3,
                    progressPercentage: 66
                }
            ]
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 30);
        const lessonItem = plan.items.find(i => i.type === 'lesson');

        expect(lessonItem).toBeDefined();
        expect(lessonItem?.lessonId).toBe('en-b2-u1-l1');
        expect(lessonItem?.priority).toBe(95);
    });

    it('8. should allocate time for high severity weakness', () => {
        const state = createBaseState({
            masteryProfile: {
                userId: 'test_plan_user',
                language: 'en',
                skills: {},
                topWeaknesses: [
                    {
                        skill: 'listening',
                        score: 42,
                        confidence: 60,
                        severity: 'high',
                        reason: 'Low listening comprehension',
                        recommendedRoute: '/ielts/reading-listening',
                        language: 'en'
                    }
                ],
                topStrengths: [],
                overallMasteryScore: 60,
                overallConfidence: 60,
                lastCalculatedAt: new Date().toISOString()
            }
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 45);
        const weaknessItem = plan.items.find(i => i.type === 'weakness_practice');

        expect(weaknessItem).toBeDefined();
        expect(weaknessItem?.skill).toBe('listening');
        expect(weaknessItem?.route).toBe('/ielts/reading-listening');
    });

    it('9. should allocate time for declining skill remediation', () => {
        const state = createBaseState({
            masteryProfile: {
                userId: 'test_plan_user',
                language: 'en',
                skills: {},
                topWeaknesses: [
                    {
                        skill: 'speaking',
                        score: 65,
                        confidence: 70,
                        severity: 'high',
                        reason: 'Declining speaking scores',
                        recommendedRoute: '/speaking-coach?lang=en',
                        language: 'en'
                    }
                ],
                topStrengths: [],
                overallMasteryScore: 70,
                overallConfidence: 70,
                lastCalculatedAt: new Date().toISOString()
            }
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 30);
        const speakingItem = plan.items.find(i => i.skill === 'speaking');

        expect(speakingItem).toBeDefined();
        expect(speakingItem?.route).toBe('/speaking-coach?lang=en');
    });

    it('10. should offer beginner-safe pacing for A1 English learners', () => {
        const state = createBaseState({
            currentLevel: 'A1',
            targetLevel: 'A2'
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 30);
        for (const item of plan.items) {
            expect(item.route).not.toContain('/ielts/mock');
        }
    });

    it('11. should offer beginner-safe pacing for N5 Japanese learners', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            currentLevel: 'N5',
            targetLevel: 'N5'
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 30);
        for (const item of plan.items) {
            expect(item.route).not.toContain('/jlpt/mock');
        }
    });

    it('12. should include advanced IELTS prep for B2/C1 English learners', () => {
        const state = createBaseState({
            currentLevel: 'B2',
            targetGoal: 'IELTS 7.5+'
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 60);
        const hasEnrichment = plan.items.some(i => i.type === 'speaking' || i.type === 'writing' || i.type === 'reading');
        expect(hasEnrichment).toBe(true);
    });

    it('13. should include advanced JLPT practice for N3/N2 Japanese learners', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            currentLevel: 'N3',
            targetGoal: 'JLPT N2'
        });

        const plan = AdaptivePlanService.generateDailyPlan(state, 60);
        const hasJaEnrichment = plan.items.some(i => i.route.includes('jlpt') || i.route.includes('speaking'));
        expect(hasJaEnrichment).toBe(true);
    });

    it('14. should guarantee primary language isolation', () => {
        const stateJa = createBaseState({
            primaryLanguage: 'ja',
            enabledLanguages: ['ja', 'en'],
            currentPosition: {
                courseId: 'jlpt-n3',
                unitId: 'ja-n3-u1',
                unitTitle: '1-Bo\'lim',
                lessonId: 'ja-n3-u1-l1',
                lessonTitle: 'Sayohat',
                stepIndex: 0,
                totalSteps: 3,
                status: 'not_started',
                percentage: 0
            }
        });

        const planJa = AdaptivePlanService.generateDailyPlan(stateJa, 30);
        for (const item of planJa.items) {
            expect(item.route).not.toContain('/ielts');
            expect(item.route).not.toContain('/lesson/en-');
        }
    });

    it('15. should ensure exact time sum matching available minutes', () => {
        const state = createBaseState();
        for (const mins of [15, 30, 45, 60, 90, 120]) {
            const plan = AdaptivePlanService.generateDailyPlan(state, mins);
            const sum = plan.items.reduce((acc, i) => acc + i.estimatedMinutes, 0);
            expect(sum).toBe(mins);
        }
    });

    it('16. should enforce minimum 5-minute block size for all items', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 30);

        for (const item of plan.items) {
            expect(item.estimatedMinutes).toBeGreaterThanOrEqual(5);
        }
    });

    it('17. should adjust plan variety dynamically when weaknesses change', () => {
        const state1 = createBaseState({
            masteryProfile: {
                userId: 'u1',
                language: 'en',
                skills: {},
                topWeaknesses: [{ skill: 'listening', score: 40, confidence: 50, severity: 'high', reason: '', recommendedRoute: '/ielts/reading-listening', language: 'en' }],
                topStrengths: [],
                overallMasteryScore: 50,
                overallConfidence: 50,
                lastCalculatedAt: ''
            }
        });

        const state2 = createBaseState({
            masteryProfile: {
                userId: 'u1',
                language: 'en',
                skills: {},
                topWeaknesses: [{ skill: 'speaking', score: 45, confidence: 50, severity: 'high', reason: '', recommendedRoute: '/speaking-coach?lang=en', language: 'en' }],
                topStrengths: [],
                overallMasteryScore: 50,
                overallConfidence: 50,
                lastCalculatedAt: ''
            }
        });

        const plan1 = AdaptivePlanService.generateDailyPlan(state1, 30);
        const plan2 = AdaptivePlanService.generateDailyPlan(state2, 30);

        expect(plan1.items.some(i => i.skill === 'listening')).toBe(true);
        expect(plan2.items.some(i => i.skill === 'speaking')).toBe(true);
    });

    it('18. should handle item completion flag without mutating schema', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 30);

        expect(plan.items[0].isCompleted).toBe(false);
        plan.items[0].isCompleted = true;
        expect(plan.items[0].isCompleted).toBe(true);
    });

    it('19. should fallback safely when study goal minutes is invalid or zero', () => {
        const state = createBaseState({ availableStudyMinutes: 0 });
        const plan = AdaptivePlanService.generateDailyPlan(state);

        expect(plan.totalMinutes).toBe(30); // Default to 30 mins
        expect(plan.items.length).toBeGreaterThan(0);
    });

    it('20. should provide safe valid routes on every single plan item', () => {
        const state = createBaseState();
        const plan = AdaptivePlanService.generateDailyPlan(state, 60);

        for (const item of plan.items) {
            expect(item.route).toBeDefined();
            expect(item.route.startsWith('/')).toBe(true);
        }
    });
});
