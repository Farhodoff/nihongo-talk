import { MasterySkill } from '../types/mastery';
import {
    PersonalLearningGoal,
    WeeklyLearningPlan,
    WeeklyPlanTask,
    WeeklyPlanDay,
    TaskSourceType
} from '../types/learningPlan';
import { callSelectedAIProvider } from '../utils/ai/aiCore';
import { CurriculumLessonResolver } from './CurriculumLessonResolver';
import { CurriculumService } from './CurriculumService';
import { LearningPathEngine } from './LearningPathEngine';
import { PersonalLearningPlanService } from './PersonalLearningPlanService';

import { generateUUID } from '../utils/uuid';

const LOCK_KEY_PREFIX = 'study_planner_pending_generation_';

export interface PlanGenerationResult {
    plan: WeeklyLearningPlan;
    isFallback: boolean;
    noticeMessage: string | null;
}

export const PersonalLearningPlanEngine = {
    /**
     * Get idempotency lock key
     */
    getLockKey(userId: string, goalId: string, weekNumber: number): string {
        return `${LOCK_KEY_PREFIX}${userId}:${goalId}:${weekNumber}`;
    },

    /**
     * Acquire generation lock
     */
    acquireLock(userId: string, goalId: string, weekNumber: number): boolean {
        const key = this.getLockKey(userId, goalId, weekNumber);
        const existing = localStorage.getItem(key);
        if (existing) {
            const time = Number(existing);
            // 5 minute timeout for locks
            if (Date.now() - time < 5 * 60 * 1000) {
                return false;
            }
        }
        localStorage.setItem(key, String(Date.now()));
        return true;
    },

    /**
     * Release generation lock
     */
    releaseLock(userId: string, goalId: string, weekNumber: number): void {
        const key = this.getLockKey(userId, goalId, weekNumber);
        localStorage.removeItem(key);
    },

    /**
     * Clean HTML and scripts to avoid XSS injections from AI outputs
     */
    sanitizeText(str: string): string {
        return (str || '')
            .replace(/<[^>]*>/g, '') // Strip HTML tags
            .replace(/javascript:/gi, '')
            .substring(0, 1000)
            .trim();
    },

    /**
 * Generates a 7-day personalized weekly plan using the configured AI provider.
     */
    async generateWeeklyPlan(
        userId: string,
        goal: PersonalLearningGoal,
        weekNumber: number,
        previousWeekResult?: any
    ): Promise<PlanGenerationResult> {
        const hasLock = this.acquireLock(userId, goal.id, weekNumber);
        if (!hasLock) {
            throw new Error('Hozirda ushbu hafta uchun reja generatsiyasi kutilmoqda. Iltimos bir oz kuting.');
        }

        try {
            // Get user current mastery, weaknesses, and SRS state from orchestrator / engines
            const state = await LearningPathEngine.getLearningPath(userId, { forceLanguage: goal.language });
            const srsSummary = state.srsSummary || { dueCount: 0, overdueCount: 0 };
            const completedLessonIds = PersonalLearningPlanService.getCompletedLessonIds(userId, goal.language);

            const isJa = goal.language === 'ja';

            // Resolve previous week's evaluation if not passed
            let evaluation = previousWeekResult;
            if (!evaluation && weekNumber > 1) {
                try {
                    const evals = PersonalLearningPlanService.getWeeklyEvaluations(userId);
                    evaluation = evals.find(e => e.weekNumber === weekNumber - 1);
                } catch {}
            }

            let adjustedDailyMinutes = goal.dailyMinutes;
            let timeNotice: string | null = null;
            if (evaluation) {
                const completion = evaluation.completionRate ?? 100;
                if (completion < 50) {
                    adjustedDailyMinutes = Math.max(15, Math.round(goal.dailyMinutes * 0.8));
                    timeNotice = isJa
                        ? `O'tgan haftadagi topshiriqlar kam bajarilgani uchun (completion: ${completion}%), haftalik yuklama 20% ga kamaytirildi.`
                        : `Due to low completion last week (${completion}%), your daily study workload has been reduced by 20%.`;
                } else if (completion === 100) {
                    adjustedDailyMinutes = Math.min(180, Math.round(goal.dailyMinutes * 1.2));
                    timeNotice = isJa
                        ? `O'tgan haftadagi topshiriqlar 100% bajarilgani uchun, haftalik yuklama 20% ga oshirildi.`
                        : `Excellent job! Since you completed 100% of your tasks, your daily study workload has been increased by 20%.`;
                }
            }

            // Build available content catalog for the current language and level
            const course = CurriculumService.getCourse(goal.language);
            const cleanCurrent = (goal.currentLevel || '').trim().toUpperCase();
            const targetLevelCode = cleanCurrent === 'ZERO' ? (isJa ? 'N5' : 'A1') : cleanCurrent;
            const availableContent: { id: string; title: string; skill: string }[] = [];

            course.levels?.forEach(lvl => {
                if (lvl.code.toUpperCase() === targetLevelCode || lvl.code.toUpperCase().includes(targetLevelCode)) {
                    lvl.units?.forEach(u => {
                        u.lessons?.forEach(l => {
                            if (l.isContentAvailable && !completedLessonIds.includes(l.id)) {
                                availableContent.push({ id: l.id, title: l.title, skill: l.skill || 'grammar' });
                            }
                        });
                    });
                }
            });

            // If English track, also include Murphy A1 Unit IDs
            if (!isJa) {
                availableContent.push(
                    { id: 'murphy_u01_am_is_are', title: 'Unit 1: am / is / are', skill: 'grammar' },
                    { id: 'murphy_u02_am_is_are_questions', title: 'Unit 2: am / is / are questions', skill: 'grammar' },
                    { id: 'murphy_u03_present_continuous', title: 'Unit 3: Present Continuous', skill: 'grammar' },
                    { id: 'murphy_u05_present_simple', title: 'Unit 5: Present Simple', skill: 'grammar' },
                    { id: 'murphy_u10_was_were', title: 'Unit 10: was / were', skill: 'grammar' },
                    { id: 'murphy_u11_past_simple_regular_irregular', title: 'Unit 11: Past Simple', skill: 'grammar' },
                    { id: 'murphy_u15_present_perfect_1', title: 'Unit 15: Present Perfect', skill: 'grammar' },
                    { id: 'murphy_u31_can_could', title: 'Unit 23: can / could', skill: 'speaking' },
                    { id: 'murphy_u36_there_is_there_are', title: 'Unit 3: there is / there are', skill: 'grammar' }
                );
            }

            const allowedRoutes = isJa
                ? ['/jlpt', '/jlpt/grammar-quiz', '/jlpt/reading', '/jlpt/listening', '/scenarios', '/study-mode']
                : ['/ielts?tab=grammar', '/scenarios', '/speaking-coach', '/ielts?tab=reading_listening', '/ielts?tab=writing', '/vocabulary', '/study-mode'];

            const strongSkills = state.masteryProfile?.topStrengths.map(s => s.skill) || [];
            const weaknessesWithSeverity = state.masteryProfile?.topWeaknesses.map(w => ({
                skill: w.skill,
                severity: w.severity || 'medium',
                reason: w.reason
            })) || [];

            const systemPrompt = `You are Nihon Talk’s Adaptive Learning Planner for English (IELTS/CEFR) and Japanese (JLPT).

Your job is to create one realistic, personalized 7-day study plan using only the student data and valid learning routes provided below.

Return ONLY one valid JSON object. Do not use Markdown, explanations outside JSON, comments, or code fences.

LANGUAGE:
- All task titles, objectives, reasoning, and expectedOutcome MUST be in Uzbek.
- Keep lesson IDs, routes, and skill enum values exactly as provided.

NON-NEGOTIABLE RULES:

1. Generate exactly 7 days in this order:
monday, tuesday, wednesday, thursday, friday, saturday, sunday.

2. Every task MUST contain:
- title
- type
- skill
- estimatedMinutes
- route
- contentId only when a real available content ID is supplied

3. A day’s total estimatedMinutes MUST NOT exceed DAILY_MINUTES.

4. Never generate an SRS-only day.
- DAILY_MINUTES below 30: exactly 2 tasks per day.
- DAILY_MINUTES from 30 to 59: 2 or 3 tasks per day.
- DAILY_MINUTES 60 or higher: 3 tasks per day.
- If the daily time is too limited, rotate skills across the week instead of forcing all skills into every day.

5. SRS:
- Use type "srs", skill "vocabulary", route "/study-mode".
- Include SRS only when DUE_CARDS is greater than 0.
- Give SRS 5–20 minutes depending on DUE_CARDS and OVERDUE_CARDS.
- Higher overdue count means higher SRS priority.

6. Adaptation:
- High-severity weak skills must appear at least 3 times during the week.
- Medium-severity weak skills must appear at least 2 times.
- Strong skills should receive less time, but must not disappear completely if they are relevant to the user’s exam goal.
- Use diagnostic, mock, SRS, and previous-week evidence as the highest-priority signals.

7. Goal intensity:
- A higher target score and shorter remaining deadline require more exam-oriented practice.
- IELTS target 7.0+ must include speaking, writing, reading/listening, and mock/exam practice across the week when DAILY_MINUTES permits.
- JLPT plans must balance grammar, vocabulary, kanji, reading, and listening according to level and weakness.
- Do not give beginner material to an advanced learner unless it is explicitly a review/remediation task.

8. Content safety:
- Use only routes from ALLOWED_ROUTES.
- Use a contentId only from AVAILABLE_CONTENT_IDS.
- Never invent content IDs, lessons, books, modules, or routes.
- Never mix English and Japanese content.
- Never assign a completed lesson as a new lesson. It may only appear as review.

9. Quality:
- Tasks must be concrete and actionable, not generic.
- Bad: "English practice"
- Good: "Past Simple: irregular verbs bo‘yicha 15 savollik mashq"
- Do not repeat the same task title on consecutive days unless it is SRS.

OUTPUT JSON SCHEMA:

{
  "objectives": ["string", "string"],
  "focusSkills": ["grammar", "vocabulary"],
  "days": [
    {
      "day": "monday",
      "tasks": [
        {
          "title": "string in Uzbek",
          "type": "lesson | grammar | vocabulary | srs | speaking | reading | listening | writing | practice | mock_test | review",
          "skill": "grammar | vocabulary | reading | listening | speaking | writing | kanji",
          "estimatedMinutes": 20,
          "contentId": "only if included in AVAILABLE_CONTENT_IDS",
          "route": "one route from ALLOWED_ROUTES"
        }
      ]
    }
  ],
  "reasoning": "Talabaning natijalari va zaif ko‘nikmalariga asoslangan qisqa o‘zbekcha izoh.",
  "expectedOutcome": "Hafta oxirida o‘lchab bo‘ladigan o‘zbekcha natija."
}`;

            const prompt = `Create the adaptive weekly plan using this source-of-truth student profile.

Student Parameters:
LANGUAGE_TRACK: ${goal.language}
GOAL_TYPE: ${goal.goalType}
CURRENT_LEVEL: ${goal.currentLevel}
CURRENT_ESTIMATED_SCORE: ${goal.currentLevel || 'A1'}
TARGET_GOAL: ${goal.targetGoal}
TARGET_LEVEL: ${goal.targetLevel}
TARGET_SCORE: ${goal.targetLevel || goal.targetGoal}
DEADLINE: ${goal.deadline || 'Flexible'}
REMAINING_WEEKS: ${Math.max(1, goal.totalWeeks - weekNumber + 1)}
CURRENT_WEEK: ${weekNumber}
DAILY_MINUTES: ${adjustedDailyMinutes}

DIAGNOSTIC_RESULT:
${JSON.stringify((state as any)?.diagnosticSummary || (state as any)?.diagnosticLevel || 'Barcha diagnostik savollar topshirilgan')}

LATEST_MOCK_RESULTS:
${JSON.stringify((state as any)?.recentMockScores || 'Oxirgi mock test natijasi mavjud emas')}

ACTIVE_WEAKNESSES:
${JSON.stringify(weaknessesWithSeverity)}

STRONG_SKILLS:
${JSON.stringify(strongSkills)}

PREVIOUS_WEEK_EVALUATION:
${JSON.stringify(evaluation || 'Birinchi hafta (oldingi evaluation mavjud emas)')}

SRS_STATE:
- DUE_CARDS: ${srsSummary.dueCount}
- OVERDUE_CARDS: ${srsSummary.overdueCount}
- RETENTION: ${(state as any)?.reviewSummary?.averageRetentionScore || 80}%

COMPLETED_LESSON_IDS:
${JSON.stringify(completedLessonIds)}

AVAILABLE_CONTENT_IDS:
${JSON.stringify(availableContent.map(c => c.id))}

ALLOWED_ROUTES:
${JSON.stringify(allowedRoutes)}

Before returning JSON, verify:
- all 7 days exist;
- every day fits DAILY_MINUTES;
- no SRS-only day exists;
- weak skills receive required priority;
- no invalid route or invented contentId exists;
- English and Japanese content are never mixed.`;

            let cleanJson = '';
            let parsed: WeeklyLearningPlan | null = null;

            // 1. Initial AI call (re-throws immediately on network/HTTP provider error)
            const aiResponse = await callSelectedAIProvider(prompt, systemPrompt, true);
            cleanJson = aiResponse.replace(/```json/g, '').replace(/```/g, '').trim();
            parsed = this.parseAndValidateWeeklyPlan(cleanJson, goal, weekNumber, userId, adjustedDailyMinutes);

            // 2. Controlled 1-time targeted "repair JSON" retry if plan was rejected by validator
            if (!parsed) {
                try {
                    const repairPrompt = `The previous JSON response was REJECTED by the validator.
Ensure:
1. All 7 days (monday, tuesday, wednesday, thursday, friday, saturday, sunday) are present.
2. NO day contains ONLY SRS tasks.
3. Daily total minutes must be <= ${adjustedDailyMinutes}.
4. All tasks include title, type, skill, estimatedMinutes, and valid route from ALLOWED_ROUTES.
5. Return ONLY a valid JSON object matching the requested schema. No markdown fences.

Original Student Profile:
${prompt}`;

                    const retryResponse = await callSelectedAIProvider(repairPrompt, systemPrompt, true);
                    cleanJson = retryResponse.replace(/```json/g, '').replace(/```/g, '').trim();
                    parsed = this.parseAndValidateWeeklyPlan(cleanJson, goal, weekNumber, userId, adjustedDailyMinutes);
                } catch (retryErr: any) {
                    console.error('[PersonalLearningPlanEngine] Repair generation attempt error:', retryErr?.message);
                }
            }

            if (!parsed) {
                throw new Error("AI_UNAVAILABLE: AI reja formati noto'g'ri qaytdi yoki AI xizmati vaqtincha mavjud emas.");
            }

            this.releaseLock(userId, goal.id, weekNumber);
            return {
                plan: parsed,
                isFallback: false,
                noticeMessage: timeNotice
            };

        } catch (e: any) {
            this.releaseLock(userId, goal.id, weekNumber);
            throw e;
        }
    },

    /**
     * Strict JSON validator & sanitizer
     */
    parseAndValidateWeeklyPlan(
        jsonString: string,
        goal: PersonalLearningGoal,
        weekNumber: number,
        userId: string,
        dailyMinutesBudget: number = goal.dailyMinutes
    ): WeeklyLearningPlan | null {
        try {
            const raw = JSON.parse(jsonString);
            if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;

            const completedLessonIds = PersonalLearningPlanService.getCompletedLessonIds(userId, goal.language);

            const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            const objectives = Array.isArray(raw.objectives) ? raw.objectives.map((o: any) => this.sanitizeText(o)) : ['Mashq bajarish'];
            const focusSkills = Array.isArray(raw.focusSkills) ? raw.focusSkills.map((s: any) => this.sanitizeText(s)) : ['general'];

            const validatedDays: WeeklyPlanDay[] = daysOfWeek.map((dayName): WeeklyPlanDay => {
                const rawDay = (raw.days || []).find((d: any) => String(d.day).toLowerCase() === dayName);
                const rawTasks = rawDay && Array.isArray(rawDay.tasks) ? rawDay.tasks : [];

                let dayMinutesAllocated = 0;
                const validatedTasks: WeeklyPlanTask[] = [];

                for (const t of rawTasks) {
                    if (!t || typeof t !== 'object') continue;

                    // Clamp task minutes between 5 and 60 minutes
                    let minutes = Number(t.estimatedMinutes || t.minutes || 15);
                    if (isNaN(minutes) || minutes < 5) minutes = 10;
                    if (minutes > 60) minutes = 60;

                    // Respect daily study minutes budget
                    if (dayMinutesAllocated + minutes > dailyMinutesBudget) {
                        const remaining = dailyMinutesBudget - dayMinutesAllocated;
                        if (remaining >= 5) {
                            minutes = remaining;
                        } else {
                            continue; // Skip task if no budget
                        }
                    }

                    dayMinutesAllocated += minutes;

                    let actualTitle = this.sanitizeText(t.title || 'Dars');
                    let actualType = this.sanitizeText(t.type || 'lesson');
                    let actualContentId = t.contentId ? this.sanitizeText(t.contentId) : undefined;
                    let rawRoute = t.route ? String(t.route).trim() : '/dashboard';

                    // Completed Lesson Deduplication Check (Hard Guard)
                    if (actualType === 'lesson' && actualContentId && completedLessonIds.includes(actualContentId)) {
                        // Find a replacement lesson at the same level and language
                        const course = CurriculumService.getCourse(goal.language);
                        const cleanCurrent = (goal.currentLevel || '').trim().toUpperCase();
                        let targetLevelCode = cleanCurrent === 'ZERO' ? (goal.language === 'ja' ? 'N5' : 'A1') : cleanCurrent;
                        
                        let replacementNode: any = null;
                        course.levels?.forEach(lvl => {
                            if (lvl.code.toUpperCase() === targetLevelCode) {
                                lvl.units?.forEach(u => {
                                    u.lessons?.forEach(l => {
                                        if (l.isContentAvailable && !completedLessonIds.includes(l.id) && l.id !== actualContentId) {
                                            replacementNode = l;
                                        }
                                    });
                                });
                            }
                        });

                        if (replacementNode) {
                            actualContentId = replacementNode.id;
                            actualTitle = replacementNode.title;
                            rawRoute = replacementNode.route || (goal.language === 'ja' ? '/jlpt' : '/ielts');
                        } else {
                            // Exhausted level: Fallback to review
                            actualType = 'review';
                            actualTitle = `${actualTitle} (Takrorlash)`;
                        }
                    }

                    // Route Sanitation & Language isolation check
                    let resolvedRoute = rawRoute;
                    let sourceType: TaskSourceType = 'ai_generated';

                    if (actualContentId) {
                        try {
                            const resolved = CurriculumLessonResolver.resolveLesson(actualContentId, goal.language);
                            if (resolved && resolved.isAvailable) {
                                resolvedRoute = resolved.route;
                                sourceType = resolved.sourceType === 'lesson_player' ? 'lesson' : 'curriculum';
                            }
                        } catch {
                            // Resolver failed, fallback to raw or general route
                        }
                    }

                    // Enforce language isolations
                    if (goal.language === 'ja') {
                        if (
                            resolvedRoute.includes('ielts') ||
                            resolvedRoute.includes('/lesson/en-') ||
                            actualTitle.toLowerCase().includes('ielts') ||
                            actualTitle.toLowerCase().includes('english')
                        ) {
                            resolvedRoute = '/jlpt';
                            sourceType = 'curriculum';
                        }
                    } else {
                        if (
                            resolvedRoute.includes('jlpt') ||
                            resolvedRoute.includes('/lesson/ja-') ||
                            actualTitle.toLowerCase().includes('jlpt') ||
                            actualTitle.toLowerCase().includes('kanji') ||
                            actualTitle.toLowerCase().includes('japanese')
                        ) {
                            resolvedRoute = '/ielts';
                            sourceType = 'curriculum';
                        }
                    }

                    // Strict route verification mapping
                    const validStartingRoutes = ['/lesson/', '/vocabulary', '/study-mode', '/speaking-coach', '/ielts', '/jlpt', '/scenarios', '/dashboard'];
                    const hasValidRoute = validStartingRoutes.some(prefix => resolvedRoute.startsWith(prefix));
                    if (!hasValidRoute) {
                        resolvedRoute = goal.language === 'ja' ? '/jlpt' : '/ielts';
                    }

                    validatedTasks.push({
                        id: `task-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                        title: actualTitle,
                        type: actualType,
                        estimatedMinutes: minutes,
                        completed: false,
                        status: 'pending',
                        sourceType,
                        contentId: actualContentId,
                        route: resolvedRoute,
                        skill: t.skill || (actualType as MasterySkill)
                    });
                }

                // If tasks are empty, append a default lesson to keep plan intact
                if (validatedTasks.length === 0) {
                    const fallbackRoute = goal.language === 'ja' ? '/jlpt' : '/ielts';
                    validatedTasks.push({
                        id: `task-fallback-${Date.now()}`,
                        title: goal.language === 'ja' ? 'Kundalik dars va takrorlash' : 'Daily practice and review',
                        type: 'lesson',
                        estimatedMinutes: dailyMinutesBudget,
                        completed: false,
                        status: 'pending',
                        sourceType: 'curriculum',
                        route: fallbackRoute
                    });
                }

                return {
                    day: dayName as any,
                    tasks: validatedTasks
                };
            });

            // Get existing plans to determine version history
            const existingPlans = PersonalLearningPlanService.getWeeklyPlans(userId);
            const matchingWeekPlans = existingPlans.filter(p => p.goalId === goal.id && p.weekNumber === weekNumber);
            const nextVersion = matchingWeekPlans.length > 0
                ? Math.max(...matchingWeekPlans.map(p => p.version)) + 1
                : 1;

            const reasoning = this.sanitizeText(raw.reasoning || 'Reja tayyorlandi.');
            const expectedOutcome = this.sanitizeText(raw.expectedOutcome || 'Yaxshi natija.');

            const today = new Date();
            const startDay = new Date(today.getTime() + 1 * 86400000); // starts tomorrow
            const endDay = new Date(startDay.getTime() + 6 * 86400000);

            return {
                id: generateUUID(),
                goalId: goal.id,
                userId,
                weekNumber,
                startDate: startDay.toISOString().split('T')[0],
                endDate: endDay.toISOString().split('T')[0],
                objectives,
                focusSkills,
                days: validatedDays,
                reasoning,
                expectedOutcome,
                aiGenerated: true,
                version: nextVersion,
                status: 'active',
                createdAt: new Date().toISOString()
            };

        } catch (err) {
            console.warn('[PersonalLearningPlanEngine] Validation parse failed:', err);
            return null;
        }
    },

    
};
export default PersonalLearningPlanEngine;
