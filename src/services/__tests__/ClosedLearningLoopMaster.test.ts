import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PersonalLearningPlanEngine } from '../PersonalLearningPlanEngine';
import { PersonalLearningPlanService } from '../PersonalLearningPlanService';
import { MasteryEngine } from '../MasteryEngine';
import { WeaknessEngine } from '../WeaknessEngine';
import { PersonalLearningGoal } from '../../types/learningPlan';
import { PRESET_DECKS } from '../../data/presetDecks';

describe('Nihon Talk Closed Learning Loop Master Integration Tests', () => {
    const userA_id = 'guest';
    const userB_id = 'user-b-mock';

    const baseGoalUserA: PersonalLearningGoal = {
        id: 'goal-user-a',
        userId: userA_id,
        language: 'en',
        goalType: 'ielts',
        currentLevel: 'A1',
        targetLevel: 'B2',
        targetGoal: '6.5',
        totalWeeks: 36, // 9 months
        currentWeek: 1,
        deadline: new Date(Date.now() + 36 * 7 * 86400000).toISOString(),
        dailyMinutes: 60,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    const baseGoalUserB: PersonalLearningGoal = {
        id: 'goal-user-b',
        userId: userB_id,
        language: 'en',
        goalType: 'ielts',
        currentLevel: 'A1',
        targetLevel: 'C1',
        targetGoal: '8.0',
        totalWeeks: 12, // 3 months
        currentWeek: 1,
        deadline: new Date(Date.now() + 12 * 7 * 86400000).toISOString(),
        dailyMinutes: 120,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    beforeEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it.skip('TEST 1: User A and User B with different targets/deadlines/budgets receive distinct plans', () => {
        const planA = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(JSON.stringify({
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(d => ({
        day: d,
        tasks: [
            { title: "Review", type: "srs", estimatedMinutes: 15 },
            { title: "Lesson 1", type: "lesson", contentId: baseGoalUserA.language === "ja" ? "ja-n5-u1-l1" : "en-a1-u1-l1", estimatedMinutes: 30 },
            { title: "Practice", type: "practice", contentId: "en-a1-u1-l1", estimatedMinutes: 15 }
        ]
    }))
}), baseGoalUserA, 1, userA_id)!;
        const planB = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(JSON.stringify({
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(d => ({
        day: d,
        tasks: [
            { title: "Review", type: "srs", estimatedMinutes: 15 },
            { title: "Lesson 1", type: "lesson", contentId: baseGoalUserB.language === "ja" ? "ja-n5-u1-l1" : "en-a1-u1-l1", estimatedMinutes: 30 },
            { title: "Practice", type: "practice", contentId: "en-a1-u1-l1", estimatedMinutes: 15 }
        ]
    }))
}), baseGoalUserB, 1, userB_id)!;

        expect(planA).toBeDefined();
        expect(planB).toBeDefined();

        // User A (60 min) should have standard single-lesson days (2 tasks: SRS + Lesson)
        const dayA_Mon = planA.days[0];
        expect(dayA_Mon.tasks.length).toBe(2);
        const totalDurationA = dayA_Mon.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
        expect(totalDurationA).toBe(60);

        // User B (120 min intensive) should have multi-task days (SRS + Core + Practice)
        const dayB_Mon = planB.days[0];
        expect(dayB_Mon.tasks.length).toBe(3);
        const totalDurationB = dayB_Mon.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
        expect(totalDurationB).toBe(120);

        // User B contains application practice task
        expect(dayB_Mon.tasks[2].type).toBe('practice');
    });

    it.skip('TEST 2: Strict Daily Minutes Budget constraint is NEVER exceeded (<= dailyMinutes across all days)', () => {
        // Test various budgets: 30, 45, 60, 90, 120, 150
        const testBudgets = [30, 45, 60, 90, 120, 150];

        for (const budget of testBudgets) {
            const goal: PersonalLearningGoal = {
                ...baseGoalUserA,
                id: `goal-budget-${budget}`,
                dailyMinutes: budget
            };

            // Set high severity weakness to test remediation injection
            const mockState = {
                masteryProfile: {
                    topWeaknesses: [{ skill: 'reading', severity: 'high', score: 35 }]
                }
            };

            const plan = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(JSON.stringify({
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(d => ({
        day: d,
        tasks: [
            { title: "Review", type: "srs", estimatedMinutes: 15 },
            { title: "Lesson 1", type: "lesson", contentId: goal.language === "ja" ? "ja-n5-u1-l1" : "en-a1-u1-l1", estimatedMinutes: 30 },
            { title: "Practice", type: "practice", contentId: "en-a1-u1-l1", estimatedMinutes: 15 }
        ]
    }))
}), goal, 1, `user-${budget}`, budget)!;

            plan.days.forEach(day => {
                const daySum = day.tasks.reduce((acc, t) => acc + t.estimatedMinutes, 0);
                expect(daySum).toBeLessThanOrEqual(budget);
                expect(daySum).toBe(budget); // Exact budget match
            });
        }
    });

    it('TEST 3 & 4: SRS completion marks Personal Plan daily task as completed idempotently', async () => {
        // Setup goal and weekly plan in memory
        const plan = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(JSON.stringify({
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(d => ({
        day: d,
        tasks: [
            { title: "Review", type: "srs", estimatedMinutes: 15 },
            { title: "Lesson 1", type: "lesson", contentId: baseGoalUserA.language === "ja" ? "ja-n5-u1-l1" : "en-a1-u1-l1", estimatedMinutes: 30 },
            { title: "Practice", type: "practice", contentId: "en-a1-u1-l1", estimatedMinutes: 15 }
        ]
    }))
}), baseGoalUserA, 1, userA_id)!;
        await PersonalLearningPlanService.saveWeeklyPlan(plan);

        const activePlan = PersonalLearningPlanService.getLatestWeeklyPlan(userA_id, baseGoalUserA.id);
        expect(activePlan).toBeDefined();

        const mondaySrsTask = activePlan!.days[0].tasks.find(t => t.type === 'srs');
        expect(mondaySrsTask).toBeDefined();
        expect(mondaySrsTask!.completed).toBe(false);

        // Execute completion
        const updatedPlan = await PersonalLearningPlanService.completePlanTask(userA_id, activePlan!.id, mondaySrsTask!.id);
        expect(updatedPlan).toBeDefined();

        const reloadedTask = updatedPlan!.days[0].tasks.find(t => t.id === mondaySrsTask!.id);
        expect(reloadedTask!.completed).toBe(true);

        // Idempotency: completing again should return the existing completed plan without error
        const secondCall = await PersonalLearningPlanService.completePlanTask(userA_id, activePlan!.id, mondaySrsTask!.id);
        expect(secondCall!.days[0].tasks.find(t => t.id === mondaySrsTask!.id)!.completed).toBe(true);
    });

    it.skip('TEST 5 & 6: Mock Exam results record evidence in MasteryEngine and prioritize weak skill lessons', () => {
        const mockUserId = 'guest';

        // 1. Record poor reading score (Band 4.5 = 50%)
        MasteryEngine.recordEvidence(mockUserId, 'en', {
            id: 'mock-reading-1',
            skill: 'reading',
            score: 45,
            timestamp: new Date().toISOString(),
            type: 'performance',
            details: 'IELTS Reading Mock Band 4.5'
        });

        // Record high listening score (Band 8.0 = 88%)
        MasteryEngine.recordEvidence(mockUserId, 'en', {
            id: 'mock-listening-1',
            skill: 'listening',
            score: 88,
            timestamp: new Date().toISOString(),
            type: 'performance',
            details: 'IELTS Listening Mock Band 8.0'
        });

        const profile = WeaknessEngine.getUserMasteryProfile(mockUserId, 'en');
        const enriched = WeaknessEngine.enrichProfile(profile);

        expect(enriched.topWeaknesses.length).toBeGreaterThan(0);
        expect(enriched.topWeaknesses[0].skill).toBe('reading');
        expect(enriched.topWeaknesses[0].severity).toBe('high');

        // 2. Generate plan with this profile and verify reading is prioritized
        const goal: PersonalLearningGoal = {
            ...baseGoalUserA,
            userId: mockUserId
        };

        const plan = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(JSON.stringify({
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(d => ({
        day: d,
        tasks: [
            { title: "Review", type: "srs", estimatedMinutes: 15 },
            { title: "Lesson 1", type: "lesson", contentId: goal.language === "ja" ? "ja-n5-u1-l1" : "en-a1-u1-l1", estimatedMinutes: 30 },
            { title: "Practice", type: "practice", contentId: "en-a1-u1-l1", estimatedMinutes: 15 }
        ]
    }))
}), goal, 1, mockUserId)!;

        // Monday should include targeted reading remediation on alternating days
        const mondayRemediation = plan.days[0].tasks.find(t => t.id.includes('remediation'));
        expect(mondayRemediation).toBeDefined();
        expect(mondayRemediation!.skill).toBe('reading');
    });

    it('TEST 7: Clean Academic Flashcard Dataset has no TOC, garbage OCR, or placeholder examples', async () => {
        const academicDeck = PRESET_DECKS.find(d => d.id === 'deck_intermediate_b1_b2');
        expect(academicDeck).toBeDefined();

        const cards = await academicDeck!.loadCards();
        expect(cards.length).toBe(539);

        // Ensure zero TOC fragments
        const tocCards = cards.filter(c => 
            c.front.toLowerCase() === 'contents' || 
            c.back.includes('MyGrammarLab') ||
            c.front.includes('Because non') ||
            c.front.includes('Hotidag')
        );
        expect(tocCards.length).toBe(0);

        // Ensure zero dummy examples
        const dummyExamples = cards.filter(c => 
            c.example?.includes('Example sentence with') || 
            !c.example || 
            c.example.trim() === ''
        );
        expect(dummyExamples.length).toBe(0);

        // Verify language consistency (English front, Uzbek back)
        const nonEnglishFront = cards.filter(c => /[\u3040-\u30ff\u4e00-\u9faf]/.test(c.front));
        expect(nonEnglishFront.length).toBe(0);
    });

    it('TEST 8: Language isolation prevents cross-language contamination', async () => {
        const starterDeck = PRESET_DECKS.find(d => d.id === 'deck_starter_a1_a2');
        const starterCards = await starterDeck!.loadCards();
        const jaCardsInStarter = starterCards.filter(c => /[\u3040-\u30ff\u4e00-\u9faf]/.test(c.front));
        expect(jaCardsInStarter.length).toBe(0);
    });
});
