import { SupportedLanguage } from '../types/lesson';
import { PersonalLearningGoal, PlanGoalType, WeeklyLearningPlan, WeeklyEvaluation, PlanStatus } from '../types/learningPlan';
import { supabase } from '../lib/supabase';
import { LearningSignalService } from './LearningSignalService';
import { toDeterministicUUID } from '../utils/uuid';

const GOAL_STORAGE_PREFIX = 'study_planner_personal_goal_';
const PLANS_STORAGE_KEY = 'study_planner_weekly_plans';
const EVALS_STORAGE_KEY = 'study_planner_weekly_evaluations';

// Mappings for Guided Learning Hours
const JLPT_HOURS_MAP: Record<string, number> = {
    'ZERO': 0,
    'N5': 150,
    'N4': 300,
    'N3': 450,
    'N2': 650,
    'N1': 950
};

const CEFR_HOURS_MAP: Record<string, number> = {
    'ZERO': 0,
    'A1': 100,
    'A2': 220,
    'B1': 380,
    'B2': 550,
    'C1': 750,
    'C2': 980
};

const IELTS_HOURS_MAP: Record<string, number> = {
    '0': 0,
    '4.0': 180,
    '5.0': 300,
    '5.5': 360,
    '6.0': 460,
    '6.5': 560,
    '7.0': 680,
    '7.5': 810,
    '8.0': 950,
    '8.5': 1100,
    '9.0': 1250
};

export interface FeasibilityResult {
    totalHoursRequired: number;
    dailyHoursRequired: number;
    status: 'realistic' | 'intensive' | 'unrealistic';
    warningMessage: string | null;
}

export const PersonalLearningPlanService = {
    /**
     * Compute plan feasibility based on guided learning hours
     */
    checkFeasibility(
        language: SupportedLanguage,
        goalType: PlanGoalType,
        current: string,
        target: string,
        durationDays: number,
        dailyMinutes: number
    ): FeasibilityResult {
        let currentHours = 0;
        let targetHours = 0;

        const cleanCurrent = (current || '').trim().toUpperCase();
        const cleanTarget = (target || '').trim().toUpperCase();

        if (goalType === 'jlpt') {
            currentHours = JLPT_HOURS_MAP[cleanCurrent] ?? JLPT_HOURS_MAP['N5'];
            targetHours = JLPT_HOURS_MAP[cleanTarget] ?? JLPT_HOURS_MAP['N1'];
        } else if (goalType === 'ielts') {
            const cleanCurrScore = cleanCurrent.replace('IELTS', '').trim();
            const cleanTargScore = cleanTarget.replace('IELTS', '').trim();
            currentHours = IELTS_HOURS_MAP[cleanCurrScore] ?? (Number(cleanCurrScore) * 100);
            targetHours = IELTS_HOURS_MAP[cleanTargScore] ?? (Number(cleanTargScore) * 110);
        } else {
            currentHours = CEFR_HOURS_MAP[cleanCurrent] ?? CEFR_HOURS_MAP['A1'];
            targetHours = CEFR_HOURS_MAP[cleanTarget] ?? CEFR_HOURS_MAP['C1'];
        }

        const totalHoursRequired = Math.max(20, targetHours - currentHours);
        const dailyHoursRequired = Number((totalHoursRequired / Math.max(1, durationDays)).toFixed(2));
        const dailyHoursTarget = dailyMinutes / 60;

        let status: 'realistic' | 'intensive' | 'unrealistic' = 'realistic';
        let warningMessage: string | null = null;

        if (dailyHoursRequired > dailyHoursTarget * 1.5) {
            status = 'unrealistic';
            warningMessage = language === 'ja'
                ? `Ushbu maqsadga erishish uchun kuniga taxminan ${dailyHoursRequired} soat o'qishingiz kerak. Hozirgi ${dailyMinutes} daqiqa bilan bu juda qiyin.`
                : `Achieving this goal requires ~${dailyHoursRequired} hours of daily study. Your selected goal might be highly ambitious within your available study time.`;
        } else if (dailyHoursRequired > dailyHoursTarget) {
            status = 'intensive';
            warningMessage = language === 'ja'
                ? `Kunlik dars soati (${dailyHoursRequired} soat) rejangizdan ko'proq. Kuchli intizom talab etiladi.`
                : `Intensive pace: You will need ~${dailyHoursRequired} hours daily. Strong commitment is required.`;
        }

        return {
            totalHoursRequired,
            dailyHoursRequired,
            status,
            warningMessage
        };
    },

    /**
     * Validate if target level is strictly higher than current level
     */
    isTargetLevelValid(current: string, target: string, goalType: PlanGoalType): boolean {
        const cleanCurrent = (current || '').trim().toUpperCase();
        const cleanTarget = (target || '').trim().toUpperCase();

        if (cleanCurrent === 'ZERO') return true;

        if (goalType === 'jlpt') {
            const ranks: Record<string, number> = { 'ZERO': 0, 'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5 };
            const currentRank = ranks[cleanCurrent] ?? 0;
            const targetRank = ranks[cleanTarget] ?? 0;
            return targetRank > currentRank;
        } else if (goalType === 'ielts') {
            const cleanCurrScore = cleanCurrent.replace('IELTS', '').trim();
            const cleanTargScore = cleanTarget.replace('IELTS', '').replace('+', '').trim();
            const currentRank = Number(cleanCurrScore) || 0;
            const targetRank = Number(cleanTargScore) || 0;
            return targetRank > currentRank;
        } else {
            const ranks: Record<string, number> = { 'ZERO': 0, 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
            const currentRank = ranks[cleanCurrent] ?? 0;
            const targetRank = ranks[cleanTarget] ?? 0;
            return targetRank > currentRank;
        }
    },

    /**
     * Get cached active personal learning goal synchronously
     */
    getActiveGoal(userId: string = 'guest'): PersonalLearningGoal | null {
        const key = `${GOAL_STORAGE_PREFIX}${userId}`;
        try {
            const raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
        } catch {}
        return null;
    },

    /**
     * Save personal learning goal to DB & cache
     */
    async saveGoal(userId: string = 'guest', goal: PersonalLearningGoal): Promise<void> {
        const key = `${GOAL_STORAGE_PREFIX}${userId}`;

        // Update local storage cache
        try {
            localStorage.setItem(key, JSON.stringify(goal));
        } catch {}

        if (userId && userId !== 'guest') {
            const dbGoalId = toDeterministicUUID(goal.id);
            const dbPayload = {
                id: dbGoalId,
                user_id: userId,
                language: goal.language,
                goal_type: goal.goalType,
                current_level: goal.currentLevel,
                target_level: goal.targetLevel,
                target_goal: goal.targetGoal,
                deadline: goal.deadline,
                daily_minutes: goal.dailyMinutes,
                total_weeks: goal.totalWeeks,
                current_week: goal.currentWeek,
                status: goal.status,
                updated_at: new Date().toISOString()
            };

            const { data, error } = await supabase
                .from('personal_learning_goals')
                .upsert(dbPayload)
                .select()
                .single();

            if (error) {
                console.error('[PersonalLearningPlanService] saveGoal DB error:', error);
                throw error;
            }

            if (data) {
                const updatedGoal: PersonalLearningGoal = {
                    ...goal,
                    id: data.id,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                };
                localStorage.setItem(key, JSON.stringify(updatedGoal));
            }
        }
    },

    /**
     * Fetches active goal from DB, updates cache, and runs localStorage migration
     */
    async fetchActiveGoalFromServer(userId: string): Promise<PersonalLearningGoal | null> {
        if (!userId || userId === 'guest') {
            return this.getActiveGoal(userId);
        }

        try {
            const { data, error } = await supabase
                .from('personal_learning_goals')
                .select('*')
                .eq('user_id', userId)
                .eq('status', 'active')
                .maybeSingle();

            if (error) throw error;

            if (data) {
                const goal: PersonalLearningGoal = {
                    id: data.id,
                    userId: data.user_id,
                    language: data.language as SupportedLanguage,
                    goalType: data.goal_type as PlanGoalType,
                    currentLevel: data.current_level,
                    targetLevel: data.target_level,
                    targetGoal: data.target_goal || '',
                    deadline: data.deadline,
                    dailyMinutes: data.daily_minutes,
                    totalWeeks: data.total_weeks,
                    currentWeek: data.current_week,
                    status: data.status as PlanStatus,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                };
                localStorage.setItem(`${GOAL_STORAGE_PREFIX}${userId}`, JSON.stringify(goal));
                return goal;
            } else {
                // Check if user has legacy goal in localStorage to migrate
                const localGoal = this.getActiveGoal(userId);
                if (localGoal) {
                    console.log('[PersonalLearningPlanService] Migrating local goal to DB:', localGoal.id);
                    await this.saveGoal(userId, localGoal);

                    const localPlans = this.getWeeklyPlans(userId);
                    for (const plan of localPlans) {
                        await this.saveWeeklyPlan(plan);
                    }

                    const localEvals = this.getWeeklyEvaluations(userId);
                    for (const ev of localEvals) {
                        await this.saveWeeklyEvaluation(ev);
                    }
                    return localGoal;
                }
            }
        } catch (e) {
            console.error('[PersonalLearningPlanService] fetchActiveGoalFromServer error:', e);
        }
        return this.getActiveGoal(userId);
    },

    /**
     * Retrieve all weekly plans for a user from cache
     */
    getWeeklyPlans(userId: string = 'guest'): WeeklyLearningPlan[] {
        try {
            const raw = localStorage.getItem(PLANS_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    return parsed.filter((p: WeeklyLearningPlan) => p.userId === userId);
                }
            }
        } catch {}
        return [];
    },

    /**
     * Retrieve the latest weekly plan from cache
     */
    getLatestWeeklyPlan(userId: string = 'guest', goalId: string): WeeklyLearningPlan | null {
        const dbGoalId = toDeterministicUUID(goalId);
        const plans = this.getWeeklyPlans(userId).filter(p => toDeterministicUUID(p.goalId) === dbGoalId);
        if (plans.length === 0) return null;

        plans.sort((a, b) => {
            if (a.weekNumber !== b.weekNumber) return b.weekNumber - a.weekNumber;
            return b.version - a.version;
        });
        return plans[0];
    },

    /**
     * Fetches all weekly plans from Supabase DB and updates the cache
     */
    async fetchWeeklyPlansFromServer(userId: string): Promise<WeeklyLearningPlan[]> {
        if (!userId || userId === 'guest') return this.getWeeklyPlans(userId);

        try {
            const { data, error } = await supabase
                .from('weekly_learning_plans')
                .select('*')
                .eq('user_id', userId);

            if (error) throw error;

            const plans: WeeklyLearningPlan[] = (data || []).map(row => ({
                id: row.id,
                goalId: row.goal_id,
                userId: row.user_id,
                weekNumber: row.week_number,
                startDate: row.plan_data.startDate,
                endDate: row.plan_data.endDate,
                objectives: row.plan_data.objectives,
                focusSkills: row.plan_data.focusSkills,
                days: row.plan_data.days,
                reasoning: row.plan_data.reasoning,
                expectedOutcome: row.plan_data.expectedOutcome,
                aiGenerated: row.plan_data.aiGenerated,
                version: row.plan_data.version,
                status: row.plan_data.status,
                createdAt: row.created_at || row.plan_data.createdAt
            }));

            // Sync cache (preserve other users' data)
            const raw = localStorage.getItem(PLANS_STORAGE_KEY);
            let otherUsersPlans: WeeklyLearningPlan[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    otherUsersPlans = parsed.filter(p => p.userId !== userId);
                }
            }
            const merged = [...otherUsersPlans, ...plans];
            localStorage.setItem(PLANS_STORAGE_KEY, JSON.stringify(merged));

            return plans;
        } catch (e) {
            console.error('[PersonalLearningPlanService] fetchWeeklyPlansFromServer error:', e);
        }
        return this.getWeeklyPlans(userId);
    },

    /**
     * Save weekly plan (keeps history, upserting to DB to prevent duplicate rows)
     */
    async saveWeeklyPlan(plan: WeeklyLearningPlan): Promise<void> {
        // 1. Save to local storage cache
        try {
            const raw = localStorage.getItem(PLANS_STORAGE_KEY);
            let allPlans: WeeklyLearningPlan[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) allPlans = parsed;
            }

            const existingIndex = allPlans.findIndex(p => p.id === plan.id);
            if (existingIndex !== -1) {
                allPlans[existingIndex] = plan;
            } else {
                allPlans = allPlans.map(p => {
                    if (p.goalId === plan.goalId && p.weekNumber === plan.weekNumber && p.status === 'active') {
                        return { ...p, status: 'archived' };
                    }
                    return p;
                });
                allPlans.push(plan);
            }
            localStorage.setItem(PLANS_STORAGE_KEY, JSON.stringify(allPlans));
        } catch {}

        // 2. Save to database
        if (plan.userId && plan.userId !== 'guest') {
            const dbPlanId = toDeterministicUUID(plan.id);
            const dbGoalId = toDeterministicUUID(plan.goalId);

            const dbPayload = {
                id: dbPlanId,
                goal_id: dbGoalId,
                user_id: plan.userId,
                week_number: plan.weekNumber,
                plan_data: {
                    startDate: plan.startDate,
                    endDate: plan.endDate,
                    objectives: plan.objectives,
                    focusSkills: plan.focusSkills,
                    days: plan.days,
                    reasoning: plan.reasoning,
                    expectedOutcome: plan.expectedOutcome,
                    aiGenerated: plan.aiGenerated,
                    version: plan.version,
                    status: plan.status
                },
                updated_at: new Date().toISOString()
            };

            const { error } = await supabase
                .from('weekly_learning_plans')
                .upsert(dbPayload, { onConflict: 'goal_id, week_number' });

            if (error) {
                console.error('[PersonalLearningPlanService] saveWeeklyPlan DB error:', error);
                throw error;
            }
        }
    },

    /** Mark a plan task complete from the learning module that performed it. */
    async completePlanTask(userId: string, planId: string, taskId: string): Promise<WeeklyLearningPlan | null> {
        const plan = this.getWeeklyPlans(userId).find(candidate => candidate.id === planId);
        if (!plan) return null;

        const updatedPlan: WeeklyLearningPlan = {
            ...plan,
            days: plan.days.map(day => ({
                ...day,
                tasks: day.tasks.map(task => task.id === taskId
                    ? { ...task, completed: true, status: 'completed' }
                    : task)
            }))
        };
        await this.saveWeeklyPlan(updatedPlan);
        return updatedPlan;
    },

    /**
     * Retrieve all weekly evaluations from cache
     */
    getWeeklyEvaluations(userId: string = 'guest'): WeeklyEvaluation[] {
        try {
            const raw = localStorage.getItem(EVALS_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    return parsed.filter((e: WeeklyEvaluation) => e.userId === userId);
                }
            }
        } catch {}
        return [];
    },

    /**
     * Fetches all weekly evaluations from Supabase DB and updates the cache
     */
    async fetchWeeklyEvaluationsFromServer(userId: string): Promise<WeeklyEvaluation[]> {
        if (!userId || userId === 'guest') return this.getWeeklyEvaluations(userId);

        try {
            const { data, error } = await supabase
                .from('weekly_learning_evaluations')
                .select('*')
                .eq('user_id', userId);

            if (error) throw error;

            const evals: WeeklyEvaluation[] = (data || []).map(row => ({
                id: row.id,
                weeklyPlanId: row.evaluation_data.weeklyPlanId,
                userId: row.user_id,
                weekNumber: row.week_number,
                completionRate: row.evaluation_data.completionRate,
                studyMinutesPlanned: row.evaluation_data.studyMinutesPlanned,
                studyMinutesActual: row.evaluation_data.studyMinutesActual,
                skillScores: row.evaluation_data.skillScores,
                masteryDelta: row.evaluation_data.masteryDelta,
                srsRetention: row.evaluation_data.srsRetention,
                weakSkills: row.evaluation_data.weakSkills,
                strongSkills: row.evaluation_data.strongSkills,
                aiFeedback: row.evaluation_data.aiFeedback,
                createdAt: row.created_at || row.evaluation_data.createdAt
            }));

            // Sync cache (preserve other users' data)
            const raw = localStorage.getItem(EVALS_STORAGE_KEY);
            let otherUsersEvals: WeeklyEvaluation[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    otherUsersEvals = parsed.filter(ev => ev.userId !== userId);
                }
            }
            const merged = [...otherUsersEvals, ...evals];
            localStorage.setItem(EVALS_STORAGE_KEY, JSON.stringify(merged));

            return evals;
        } catch (e) {
            console.error('[PersonalLearningPlanService] fetchWeeklyEvaluationsFromServer error:', e);
        }
        return this.getWeeklyEvaluations(userId);
    },

    /**
     * Save weekly evaluation
     */
    async saveWeeklyEvaluation(evaluation: WeeklyEvaluation): Promise<void> {
        // 1. Save to local storage cache
        try {
            const raw = localStorage.getItem(EVALS_STORAGE_KEY);
            let allEvals: WeeklyEvaluation[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) allEvals = parsed;
            }

            allEvals = allEvals.filter(e => e.weeklyPlanId !== evaluation.weeklyPlanId);
            allEvals.push(evaluation);
            localStorage.setItem(EVALS_STORAGE_KEY, JSON.stringify(allEvals));
        } catch {}

        // 2. Save to database
        if (evaluation.userId && evaluation.userId !== 'guest') {
            const activeGoal = this.getActiveGoal(evaluation.userId);
            if (!activeGoal) {
                throw new Error('[PersonalLearningPlanService] Active goal not found in cache for evaluation save');
            }

            const dbEvalId = toDeterministicUUID(evaluation.id);
            const dbGoalId = toDeterministicUUID(activeGoal.id);

            const dbPayload = {
                id: dbEvalId,
                goal_id: dbGoalId,
                user_id: evaluation.userId,
                week_number: evaluation.weekNumber,
                evaluation_data: {
                    weeklyPlanId: evaluation.weeklyPlanId,
                    completionRate: evaluation.completionRate,
                    studyMinutesPlanned: evaluation.studyMinutesPlanned,
                    studyMinutesActual: evaluation.studyMinutesActual,
                    skillScores: evaluation.skillScores,
                    masteryDelta: evaluation.masteryDelta,
                    srsRetention: evaluation.srsRetention,
                    weakSkills: evaluation.weakSkills,
                    strongSkills: evaluation.strongSkills,
                    aiFeedback: evaluation.aiFeedback
                }
            };

            const { error } = await supabase
                .from('weekly_learning_evaluations')
                .upsert(dbPayload, { onConflict: 'goal_id, week_number' });

            if (error) {
                console.error('[PersonalLearningPlanService] saveWeeklyEvaluation DB error:', error);
                throw error;
            }
        }
    },

    /**
     * Reset whole plan (deletes from cache and database cascading plans and evaluations)
     */
    async resetPlan(userId: string = 'guest'): Promise<void> {
        // 1. Clear local storage cache
        localStorage.removeItem(`${GOAL_STORAGE_PREFIX}${userId}`);

        try {
            const rawPlans = localStorage.getItem(PLANS_STORAGE_KEY);
            if (rawPlans) {
                const parsed = JSON.parse(rawPlans);
                if (Array.isArray(parsed)) {
                    localStorage.setItem(PLANS_STORAGE_KEY, JSON.stringify(parsed.filter(p => p.userId !== userId)));
                }
            }
        } catch {}

        try {
            const rawEvals = localStorage.getItem(EVALS_STORAGE_KEY);
            if (rawEvals) {
                const parsed = JSON.parse(rawEvals);
                if (Array.isArray(parsed)) {
                    localStorage.setItem(EVALS_STORAGE_KEY, JSON.stringify(parsed.filter(e => e.userId !== userId)));
                }
            }
        } catch {}

        // 2. Delete from database (cascade handles weekly plans and evaluations deletion automatically)
        if (userId && userId !== 'guest') {
            const { error } = await supabase
                .from('personal_learning_goals')
                .delete()
                .eq('user_id', userId);

            if (error) {
                console.error('[PersonalLearningPlanService] resetPlan DB error:', error);
                throw error;
            }
        }
    },

    /**
     * Get list of completed lesson IDs for a specific user and language track
     */
    getCompletedLessonIds(userId: string = 'guest', language: SupportedLanguage): string[] {
        const completedIds = new Set<string>();

        // 1. Get completed lessons from LearningSignalService (interactive lessons)
        try {
            const signals = LearningSignalService.getSignalsForUser(userId);
            signals.forEach((sig: any) => {
                if (sig.type === 'completed_lesson' && sig.lessonId && (!language || sig.language === language)) {
                    completedIds.add(sig.lessonId);
                }
            });
        } catch (e) {
            console.warn("[PersonalLearningPlanService] Failed to load completed signals:", e);
        }

        // 2. Get completed lessons from saved WeeklyLearningPlans (tasks checked by user in PLP checklist)
        try {
            const plans = this.getWeeklyPlans(userId);
            plans.forEach(plan => {
                plan.days.forEach(day => {
                    day.tasks.forEach(task => {
                        if ((task.completed || task.status === 'completed') && task.contentId && task.type === 'lesson') {
                            completedIds.add(task.contentId);
                        }
                    });
                });
            });
        } catch (e) {
            console.warn("[PersonalLearningPlanService] Failed to parse completed plans:", e);
        }

        return Array.from(completedIds);
    }
};
