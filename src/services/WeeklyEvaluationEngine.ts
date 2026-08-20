import {
    WeeklyLearningPlan,
    WeeklyEvaluation,
    PersonalLearningGoal
} from '../types/learningPlan';
import { callSelectedAIProvider } from '../utils/ai/aiCore';
import { PersonalLearningPlanService } from './PersonalLearningPlanService';
import { LearningPathEngine } from './LearningPathEngine';

export const WeeklyEvaluationEngine = {
    /**
     * Complete the evaluation for a weekly plan
     */
    async evaluateWeek(
        userId: string,
        goal: PersonalLearningGoal,
        plan: WeeklyLearningPlan
    ): Promise<WeeklyEvaluation> {
        // 1. Calculate actual completion metrics from plan tasks
        let totalTasks = 0;
        let completedTasks = 0;
        let studyMinutesPlanned = 0;
        let studyMinutesActual = 0;

        plan.days.forEach(day => {
            day.tasks.forEach(t => {
                totalTasks++;
                studyMinutesPlanned += t.estimatedMinutes;
                if (t.completed || t.status === 'completed') {
                    completedTasks++;
                    studyMinutesActual += t.estimatedMinutes;
                }
            });
        });

        const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        // 2. Fetch current mastery state to compute deltas and skills profile
        const state = await LearningPathEngine.getLearningPath(userId, { forceLanguage: goal.language });
        const skillsProfile = state.masteryProfile?.skills || {};

        const skillScores: Record<string, number> = {};
        const masteryDelta: Record<string, number> = {};
        const weakSkills: string[] = state.masteryProfile?.topWeaknesses.map(w => w.skill) || [];
        const strongSkills: string[] = state.masteryProfile?.topStrengths.map(s => s.skill) || [];

        Object.keys(skillsProfile).forEach(skillName => {
            const mastery = skillsProfile[skillName];
            skillScores[skillName] = mastery.score;
            // Mastery delta is simulated or calculated based on recent evidence in the last 7 days
            masteryDelta[skillName] = mastery.trend === 'improving' ? 5 : mastery.trend === 'declining' ? -5 : 0;
        });

        const srsRetention = state.reviewSummary?.averageRetentionScore || 80;

        const evaluationId = `eval-${plan.id}-${Date.now()}`;

        // 3. Dynamic feedback from AI
        const prompt = `Act as an expert EdTech evaluation engine. Evaluate the student's study week performance:
- Language: ${goal.language}
- Target: ${goal.targetGoal}
- Week Number: ${plan.weekNumber}
- Tasks Completed: ${completedTasks} of ${totalTasks} (${completionRate}%)
- Study Time: Planned ${studyMinutesPlanned} min, Completed ${studyMinutesActual} min
- Mastery profile: ${JSON.stringify(skillScores)}
- Weak Skills: ${weakSkills.join(', ')}
- Strong Skills: ${strongSkills.join(', ')}
- Spaced Repetition (SRS) Retention: ${srsRetention}%

Generate a brief constructive assessment (max 150 words) in Uzbek explaining:
1. What went well (e.g. good consistency, strong vocab progress).
2. What went poorly (e.g. low writing/listening completion).
3. Exact minutes adjustment recommendation for next week (e.g. increase listening by 10m, decrease speaking by 5m).

Output ONLY the text feedback in Uzbek, no markdown fences.`;

        let aiFeedback = '';
        try {
            const response = await callSelectedAIProvider(prompt, undefined, false);
            aiFeedback = response.trim();
        } catch (err) {
            console.warn('[WeeklyEvaluationEngine] AI feedback call failed, using fallback feedback:', err);
        }

        // Fallback Uzbek evaluation feedback if AI fails
        if (!aiFeedback) {
            if (completionRate >= 80) {
                aiFeedback = goal.language === 'ja'
                    ? "Ajoyib natija! Siz haftalik rejadagi topshiriqlarni juda yaxshi bajardingiz. Yapon tili grammatikasi va kanji bo'yicha mustahkam progress kuzatilmoqda. Kelasi haftada ham shu tempda davom etishni va zaif ko'nikmalarni takrorlashni tavsiya etamiz."
                    : "Outstanding week! You successfully completed most of your tasks. Keep up this steady pace. Next week, we recommend slightly increasing mock exam simulation tasks.";
            } else if (completionRate >= 50) {
                aiFeedback = goal.language === 'ja'
                    ? "Yaxshi natija, ammo ba'zi kunlarni o'tkazib yubordingiz. Yapon tili suhbat ko'nikmalarini (Speaking) rivojlantirishga ko'proq vaqt ajratishingiz kerak. Kelasi haftada vazifalar vaqtini 5-10 daqiqaga qisqartirishni tavsiya etamiz."
                    : "Moderate progress. You had some missed days. Next week, we suggest reducing vocabulary study time by 5 minutes and allocating that budget directly to practice writing exercises.";
            } else {
                aiFeedback = goal.language === 'ja'
                    ? "Afsuski, darslarga yetarlicha vaqt ajratmadingiz. Kelgusi haftada dars yuklamasini kamaytiramiz va poydevor darslariga qaytamiz."
                    : "Your task completion rate is below 50%. Next week, the system will adjust tasks to be shorter and focus on core fundamentals and flashcards review first.";
            }
        }

        const evaluation: WeeklyEvaluation = {
            id: evaluationId,
            weeklyPlanId: plan.id,
            userId,
            weekNumber: plan.weekNumber,
            completionRate,
            studyMinutesPlanned,
            studyMinutesActual,
            skillScores,
            masteryDelta,
            srsRetention,
            weakSkills,
            strongSkills,
            aiFeedback,
            createdAt: new Date().toISOString()
        };

        // Save evaluation
        await PersonalLearningPlanService.saveWeeklyEvaluation(evaluation);

        // Update plan status to completed
        const updatedPlan: WeeklyLearningPlan = {
            ...plan,
            status: 'completed'
        };
        await PersonalLearningPlanService.saveWeeklyPlan(updatedPlan);

        // Increment currentWeek on the goal
        const activeGoal = PersonalLearningPlanService.getActiveGoal(userId);
        if (activeGoal && activeGoal.id === goal.id) {
            const updatedGoal: PersonalLearningGoal = {
                ...activeGoal,
                currentWeek: activeGoal.currentWeek + 1,
                updatedAt: new Date().toISOString()
            };
            if (updatedGoal.currentWeek > updatedGoal.totalWeeks) {
                updatedGoal.status = 'completed';
            }
            await PersonalLearningPlanService.saveGoal(userId, updatedGoal);
        }

        return evaluation;
    }
};
export default WeeklyEvaluationEngine;
