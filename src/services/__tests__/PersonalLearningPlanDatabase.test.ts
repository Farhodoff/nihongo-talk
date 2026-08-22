import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PersonalLearningPlanService } from '../PersonalLearningPlanService';
import { PersonalLearningGoal, WeeklyLearningPlan, WeeklyEvaluation } from '../../types/learningPlan';
import { supabase } from '../../lib/supabase';
import { toDeterministicUUID } from '../../utils/uuid';

// Fluent/Chainable Supabase Mock
const mockSelect = vi.fn();
const mockEq = vi.fn();
const mockMaybeSingle = vi.fn();
const mockSingle = vi.fn();
const mockUpsert = vi.fn();
const mockDelete = vi.fn();

const chainableMock = {
    select: mockSelect,
    eq: mockEq,
    maybeSingle: mockMaybeSingle,
    single: mockSingle,
    upsert: mockUpsert,
    delete: mockDelete,
    order: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis()
};

// Make sure the fluent methods return the builder itself
mockSelect.mockReturnValue(chainableMock);
mockEq.mockReturnValue(chainableMock);
mockUpsert.mockReturnValue(chainableMock);
mockDelete.mockReturnValue(chainableMock);

vi.mock('../../lib/supabase', () => {
    return {
        supabase: {
            auth: {
                getUser: vi.fn().mockResolvedValue({ data: { user: { id: 'test-user-id' } }, error: null }),
                updateUser: vi.fn().mockResolvedValue({ error: null })
            },
            from: vi.fn(() => chainableMock)
        }
    };
});

const testUserId = 'test-user-id';

function makeTestGoal(overrides: Partial<PersonalLearningGoal> = {}): PersonalLearningGoal {
    return {
        id: 'goal-test-uuid',
        userId: testUserId,
        language: 'en',
        goalType: 'general_en',
        currentLevel: 'A1',
        targetGoal: 'General English B2',
        targetLevel: 'B2',
        deadline: new Date().toISOString(),
        dailyMinutes: 45,
        totalWeeks: 12,
        currentWeek: 1,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...overrides
    };
}

function makeTestPlan(overrides: Partial<WeeklyLearningPlan> = {}): WeeklyLearningPlan {
    return {
        id: 'plan-test-uuid',
        goalId: 'goal-test-uuid',
        userId: testUserId,
        weekNumber: 1,
        startDate: '2026-08-21',
        endDate: '2026-08-27',
        objectives: [],
        focusSkills: [],
        days: [],
        reasoning: '',
        expectedOutcome: '',
        aiGenerated: false,
        version: 1,
        status: 'active',
        createdAt: new Date().toISOString(),
        ...overrides
    };
}

function makeTestEval(overrides: Partial<WeeklyEvaluation> = {}): WeeklyEvaluation {
    return {
        id: 'eval-test-uuid',
        weeklyPlanId: 'plan-test-uuid',
        userId: testUserId,
        weekNumber: 1,
        completionRate: 90,
        studyMinutesPlanned: 300,
        studyMinutesActual: 270,
        skillScores: {},
        masteryDelta: {},
        weakSkills: [],
        strongSkills: [],
        aiFeedback: 'Excellent progress!',
        createdAt: new Date().toISOString(),
        ...overrides
    };
}

describe('Personal Learning Plan Database Persistence', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
        
        // Default mock resolutions to avoid unhandled rejections
        mockSelect.mockReturnValue(chainableMock);
        mockEq.mockReturnValue(chainableMock);
        mockUpsert.mockReturnValue(chainableMock);
        mockDelete.mockReturnValue(chainableMock);
        mockSingle.mockResolvedValue({ data: null, error: null });
        mockMaybeSingle.mockResolvedValue({ data: null, error: null });
    });

    // 1. saveGoal -> Supabase
    it('1. saveGoal correctly writes to Supabase database', async () => {
        const goal = makeTestGoal();
        
        mockSingle.mockResolvedValue({
            data: {
                id: toDeterministicUUID(goal.id),
                user_id: testUserId,
                language: 'en',
                goal_type: 'general_en',
                current_level: 'A1',
                target_level: 'B2',
                daily_minutes: 45,
                total_weeks: 12,
                current_week: 1,
                status: 'active',
                created_at: goal.createdAt,
                updated_at: goal.updatedAt
            },
            error: null
        });

        await PersonalLearningPlanService.saveGoal(testUserId, goal);

        expect(supabase.from).toHaveBeenCalledWith('personal_learning_goals');
        expect(mockUpsert).toHaveBeenCalledWith(expect.objectContaining({
            id: toDeterministicUUID(goal.id),
            user_id: testUserId,
            status: 'active'
        }));
    });

    // 2. getActiveGoal -> Supabase
    it('2. fetchActiveGoalFromServer retrieves goal from DB and populates cache', async () => {
        const goalId = toDeterministicUUID('goal-test-uuid');
        
        mockMaybeSingle.mockResolvedValue({
            data: {
                id: goalId,
                user_id: testUserId,
                language: 'en',
                goal_type: 'general_en',
                current_level: 'A1',
                target_level: 'B2',
                daily_minutes: 45,
                total_weeks: 12,
                current_week: 1,
                status: 'active',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            error: null
        });

        const activeGoal = await PersonalLearningPlanService.fetchActiveGoalFromServer(testUserId);
        
        expect(activeGoal).not.toBeNull();
        expect(activeGoal!.id).toBe(goalId);
        expect(PersonalLearningPlanService.getActiveGoal(testUserId)).not.toBeNull();
    });

    // 3. saveWeeklyPlan -> Supabase
    it('3. saveWeeklyPlan writes to Supabase database', async () => {
        const plan = makeTestPlan();

        await PersonalLearningPlanService.saveWeeklyPlan(plan);

        expect(supabase.from).toHaveBeenCalledWith('weekly_learning_plans');
        expect(mockUpsert).toHaveBeenCalledWith(
            expect.objectContaining({
                id: toDeterministicUUID(plan.id),
                goal_id: toDeterministicUUID(plan.goalId)
            }),
            { onConflict: 'goal_id, week_number' }
        );
    });

    // 4. fetchWeeklyPlansFromServer -> Supabase
    it('4. fetchWeeklyPlansFromServer fetches and populates local cache list', async () => {
        mockSelect.mockReturnValue(chainableMock);
        mockEq.mockResolvedValue({
            data: [
                {
                    id: toDeterministicUUID('plan-1'),
                    goal_id: toDeterministicUUID('goal-1'),
                    user_id: testUserId,
                    week_number: 1,
                    plan_data: {
                        startDate: '2026-08-21',
                        endDate: '2026-08-27',
                        objectives: [],
                        focusSkills: [],
                        days: [],
                        reasoning: '',
                        expectedOutcome: '',
                        aiGenerated: false,
                        version: 1,
                        status: 'active'
                    },
                    created_at: new Date().toISOString()
                }
            ],
            error: null
        });

        const plans = await PersonalLearningPlanService.fetchWeeklyPlansFromServer(testUserId);
        expect(plans).toHaveLength(1);
        expect(plans[0].id).toBe(toDeterministicUUID('plan-1'));
        expect(PersonalLearningPlanService.getWeeklyPlans(testUserId)).toHaveLength(1);
    });

    // 5. saveWeeklyEvaluation -> Supabase
    it('5. saveWeeklyEvaluation writes evaluation to Supabase DB', async () => {
        const goal = makeTestGoal();
        const ev = makeTestEval();

        // Cache the active goal so service knows which goal_id to reference
        localStorage.setItem(`study_planner_personal_goal_${testUserId}`, JSON.stringify(goal));

        await PersonalLearningPlanService.saveWeeklyEvaluation(ev);

        expect(supabase.from).toHaveBeenCalledWith('weekly_learning_evaluations');
        expect(mockUpsert).toHaveBeenCalledWith(
            expect.objectContaining({
                id: toDeterministicUUID(ev.id),
                goal_id: toDeterministicUUID(goal.id),
                week_number: ev.weekNumber
            }),
            { onConflict: 'goal_id, week_number' }
        );
    });

    // 6. DB failure -> localStorage fallback
    it('6. DB error in getActiveGoal gracefully falls back to local storage cache', async () => {
        mockMaybeSingle.mockResolvedValue({ data: null, error: new Error('Network error') });

        const cachedGoal = makeTestGoal();
        localStorage.setItem(`study_planner_personal_goal_${testUserId}`, JSON.stringify(cachedGoal));

        const result = await PersonalLearningPlanService.fetchActiveGoalFromServer(testUserId);
        expect(result).not.toBeNull();
        expect(result!.id).toBe(cachedGoal.id);
    });

    // 7. localStorage -> DB migration
    it('7. migrates plan data from localStorage on first server read when DB is blank', async () => {
        const localGoal = makeTestGoal({ id: 'legacy-goal-id' });
        localStorage.setItem(`study_planner_personal_goal_${testUserId}`, JSON.stringify(localGoal));

        // DB returns no active goal
        mockMaybeSingle.mockResolvedValue({ data: null, error: null });
        mockSingle.mockResolvedValue({ data: { id: toDeterministicUUID(localGoal.id) }, error: null });

        const result = await PersonalLearningPlanService.fetchActiveGoalFromServer(testUserId);
        
        expect(result).not.toBeNull();
        expect(mockUpsert).toHaveBeenCalled(); // Triggered save/migration to Supabase
    });

    // 8. Auth metadata -> no writing to auth user metadata
    it('8. saveGoal and saveWeeklyPlan do not write weekly plan arrays to Auth user_metadata', async () => {
        const goal = makeTestGoal();
        const plan = makeTestPlan();
        
        await PersonalLearningPlanService.saveGoal(testUserId, goal);
        await PersonalLearningPlanService.saveWeeklyPlan(plan);

        // Verify supabase.auth.updateUser is NOT called with weekly_plans or goals
        expect(supabase.auth.updateUser).not.toHaveBeenCalled();
    });
});
