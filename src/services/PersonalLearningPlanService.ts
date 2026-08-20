import { SupportedLanguage } from '../types/lesson';
import { PersonalLearningGoal, PlanGoalType, WeeklyLearningPlan, WeeklyEvaluation } from '../types/learningPlan';
import { supabase } from '../lib/supabase';

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
    '5.5:': 360,
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
     * Get active personal learning goal
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
     * Save personal learning goal
     */
    async saveGoal(userId: string = 'guest', goal: PersonalLearningGoal): Promise<void> {
        const key = `${GOAL_STORAGE_PREFIX}${userId}`;
        try {
            localStorage.setItem(key, JSON.stringify(goal));
        } catch {}

        // Sync in background to Supabase
        if (userId && userId !== 'guest') {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    await supabase.auth.updateUser({
                        data: { personal_learning_goal: goal }
                    });
                }
            } catch {}
        }
    },

    /**
     * Retrieve all weekly plans for a user
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
     * Retrieve the latest weekly plan
     */
    getLatestWeeklyPlan(userId: string = 'guest', goalId: string): WeeklyLearningPlan | null {
        const plans = this.getWeeklyPlans(userId).filter(p => p.goalId === goalId);
        if (plans.length === 0) return null;
        // Sort by week number and version descending
        plans.sort((a, b) => {
            if (a.weekNumber !== b.weekNumber) return b.weekNumber - a.weekNumber;
            return b.version - a.version;
        });
        return plans[0];
    },

    /**
     * Save weekly plan (keeps history, incrementing versions if same week is regenerated)
     */
    async saveWeeklyPlan(plan: WeeklyLearningPlan): Promise<void> {
        try {
            const raw = localStorage.getItem(PLANS_STORAGE_KEY);
            let allPlans: WeeklyLearningPlan[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) allPlans = parsed;
            }

            // Archive previous versions for the same week and goal
            allPlans = allPlans.map(p => {
                if (p.goalId === plan.goalId && p.weekNumber === plan.weekNumber && p.status === 'active') {
                    return { ...p, status: 'archived' };
                }
                return p;
            });

            allPlans.push(plan);
            localStorage.setItem(PLANS_STORAGE_KEY, JSON.stringify(allPlans));

            // Sync to Supabase background
            if (plan.userId && plan.userId !== 'guest') {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    await supabase.auth.updateUser({
                        data: { weekly_plans: allPlans.filter(p => p.userId === plan.userId).slice(-20) }
                    });
                }
            }
        } catch {}
    },

    /**
     * Retrieve all weekly evaluations
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
     * Save weekly evaluation
     */
    async saveWeeklyEvaluation(evaluation: WeeklyEvaluation): Promise<void> {
        try {
            const raw = localStorage.getItem(EVALS_STORAGE_KEY);
            let allEvals: WeeklyEvaluation[] = [];
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) allEvals = parsed;
            }

            // Remove existing evaluation for the same week/plan if any
            allEvals = allEvals.filter(e => e.weeklyPlanId !== evaluation.weeklyPlanId);
            allEvals.push(evaluation);

            localStorage.setItem(EVALS_STORAGE_KEY, JSON.stringify(allEvals));

            // Sync background
            if (evaluation.userId && evaluation.userId !== 'guest') {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    await supabase.auth.updateUser({
                        data: { weekly_evaluations: allEvals.filter(e => e.userId === evaluation.userId) }
                    });
                }
            }
        } catch {}
    }
};
