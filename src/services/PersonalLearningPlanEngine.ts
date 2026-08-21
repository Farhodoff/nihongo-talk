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
import { WeaknessEngine } from './WeaknessEngine';

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
     * Generates a 7-day personalized weekly plan using AI, with automatic schema validation and fallback planning.
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
            const weaknesses = state.masteryProfile?.topWeaknesses.map(w => `${w.skill}: ${w.reason}`) || [];
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

            const systemPrompt = `You are a Senior Learning Architect specializing in personalized ${isJa ? 'Japanese (JLPT/Conversational)' : 'English (IELTS/CEFR)'} instruction.
You create a targeted study plan for exactly ONE WEEK (Day 1 to 7 / Monday to Sunday) based on student parameters.

CRITICAL RULES:
1. Output MUST be strictly valid JSON according to the schema. No markdown fences.
2. The language of tasks, objectives, reasoning, and outcomes MUST be in Uzbek (O'zbek tilida).
3. The total duration of all tasks in a single day MUST not exceed the user's budget of ${adjustedDailyMinutes} minutes. Clamp activities to fit this total.
4. Route validation: AI must map tasks to valid routes. Valid routes are:
   - Specific lessons: /lesson/<id> (e.g. en-a1-u1-l1)
   - Specific hub: /ielts/writing, /ielts/reading-listening, /speaking-coach, /vocabulary, /study-mode, /jlpt, /jlpt/grammar-quiz, /jlpt/reading, /jlpt/listening
5. Ensure strict isolation. An English user MUST NOT receive Japanese items/lessons (e.g. Kanji, JLPT), and a Japanese user MUST NOT receive IELTS or Murphy items.
6. Provide concrete contentIds matching curriculum lessons where possible.
7. Completed Lessons Rule: Do not select any lesson in the Completed Lesson IDs list (${JSON.stringify(completedLessonIds)}) as a NEW learning task in the plan. Previously completed lessons can only be given as SRS or review tasks.`;

            const prompt = `Student Parameters:
- Language Track: ${goal.language}
- Goal Type: ${goal.goalType}
- Target: ${goal.targetGoal} (Level: ${goal.targetLevel})
- Preparation Week: Week ${weekNumber} of ${goal.totalWeeks}
- Daily Available Time: ${adjustedDailyMinutes} minutes
- Current Level/Estimated Score: ${goal.currentLevel}
- Active Weaknesses: ${JSON.stringify(weaknesses)}
- Completed Lesson IDs: ${JSON.stringify(completedLessonIds)}
- Spaced Repetition (SRS) Status: ${srsSummary.dueCount} cards due (${srsSummary.overdueCount} overdue)
${evaluation ? `- Previous Week Summary: ${JSON.stringify(evaluation)}` : ''}

Generate the JSON response matching this template:
{
  "objectives": ["Haftalik maqsad 1", "Haftalik maqsad 2"],
  "focusSkills": ["vocabulary", "grammar"],
  "days": [
    {
      "day": "monday",
      "tasks": [
        {
          "title": "Present Simple & Greetings",
          "type": "grammar",
          "estimatedMinutes": 20,
          "contentId": "en-a1-u1-l1",
          "route": "/lesson/en-a1-u1-l1"
        }
      ]
    }
  ],
  "reasoning": "Tushuntirish va rejalashtirish asosi...",
  "expectedOutcome": "Hafta yakunida kutilayotgan natija..."
}`;

            let aiResponse: string | null = null;
            try {
                aiResponse = await callSelectedAIProvider(prompt, systemPrompt, true);
            } catch (err) {
                console.warn('[AI Plan Gen] Network or rate limit failure, running fallback:', err);
            }

            if (aiResponse) {
                const cleanJson = aiResponse.replace(/```json/g, '').replace(/```/g, '').trim();
                const parsed = this.parseAndValidateWeeklyPlan(cleanJson, goal, weekNumber, userId);
                if (parsed) {
                    this.releaseLock(userId, goal.id, weekNumber);
                    return {
                        plan: parsed,
                        isFallback: false,
                        noticeMessage: timeNotice
                    };
                }
            }

            // Fallback Plan if AI failed or response was invalid
            const fallbackPlan = this.generateDeterministicFallback(goal, weekNumber, userId, state, evaluation);
            this.releaseLock(userId, goal.id, weekNumber);
            return {
                plan: fallbackPlan,
                isFallback: true,
                noticeMessage: timeNotice || (goal.language === 'ja'
                    ? "AI rejalashtirish vaqtincha band. Siz uchun standart adaptiv dars rejasi tayyorlandi."
                    : "AI planning is currently busy. A standard adaptive curriculum plan has been prepared for you.")
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
        userId: string
    ): WeeklyLearningPlan | null {
        try {
            const raw = JSON.parse(jsonString);
            if (!raw || typeof raw !== 'object') return null;

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
                    if (dayMinutesAllocated + minutes > goal.dailyMinutes) {
                        const remaining = goal.dailyMinutes - dayMinutesAllocated;
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
                        estimatedMinutes: goal.dailyMinutes,
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
                id: `weekplan-${goal.id}-${weekNumber}-${Date.now()}`,
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

    /**
     * Creates a deterministic adaptive plan if AI generators fail
     */
    generateDeterministicFallback(
        goal: PersonalLearningGoal,
        weekNumber: number,
        userId: string,
        _state: any,
        previousEvaluation?: any
    ): WeeklyLearningPlan {
        const isJa = goal.language === 'ja';
        const focusSkills = isJa ? ['kanji', 'vocabulary', 'grammar'] : ['vocabulary', 'grammar', 'reading'];
        const objectives = isJa
            ? ["Yapon tili asosiy leksikasi", "Kundalik sodda gaplar tuzilishi"]
            : ["English general vocabulary expansions", "Grammar structures review"];

        const completedLessonIds = PersonalLearningPlanService.getCompletedLessonIds(userId, goal.language);
        const course = CurriculumService.getCourse(goal.language);
        // Find lesson nodes matching the target level
        let matchingLessons: any[] = [];

        const cleanCurrent = (goal.currentLevel || '').trim().toUpperCase();
        let targetLevelCode = cleanCurrent;
        if (cleanCurrent === 'ZERO') {
            targetLevelCode = goal.language === 'ja' ? 'N5' : 'A1';
        }

        course.levels?.forEach(lvl => {
            if (lvl.code.toUpperCase() === targetLevelCode) {
                lvl.units?.forEach(u => {
                    u.lessons?.forEach(l => {
                        if (l.isContentAvailable && !completedLessonIds.includes(l.id)) {
                            matchingLessons.push(l);
                        }
                    });
                });
            }
        });

        let fallbackToReview = false;
        // Fallback: If all lessons at this level are completed, fetch them all but mark them as review!
        if (matchingLessons.length === 0) {
            course.levels?.forEach(lvl => {
                if (lvl.code.toUpperCase() === targetLevelCode) {
                    lvl.units?.forEach(u => {
                        u.lessons?.forEach(l => {
                            if (l.isContentAvailable) matchingLessons.push(l);
                        });
                    });
                }
            });
            fallbackToReview = true;
        }

        // Final fallback if no lessons are found at all for this level
        if (matchingLessons.length === 0) {
            course.levels?.forEach(lvl => {
                lvl.units?.forEach(u => {
                    u.lessons?.forEach(l => {
                        if (l.isContentAvailable) matchingLessons.push(l);
                    });
                });
            });
        }

        const prevWeek = weekNumber - 1;
        let evaluation = previousEvaluation;
        if (!evaluation && prevWeek >= 1) {
            try {
                const evals = PersonalLearningPlanService.getWeeklyEvaluations(userId);
                evaluation = evals.find(e => e.weekNumber === prevWeek);
            } catch {}
        }

        let adjustedDailyMinutes = goal.dailyMinutes;
        if (evaluation) {
            const completion = evaluation.completionRate ?? 100;
            if (completion < 50) {
                adjustedDailyMinutes = Math.max(15, Math.round(goal.dailyMinutes * 0.8));
            } else if (completion === 100) {
                adjustedDailyMinutes = Math.min(180, Math.round(goal.dailyMinutes * 1.2));
            }
        }

        const daysOfWeek: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[] = [
            'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
        ];

        const days: WeeklyPlanDay[] = daysOfWeek.map((dayName, idx): WeeklyPlanDay => {
            const tasks: WeeklyPlanTask[] = [];

            // --- Phase 19: Read weak skills from enriched mastery profile ---
            const masteryProfile = (_state?.masteryProfile) || null;
            const topWeaknesses = masteryProfile?.topWeaknesses || [];
            const highSeverityWeakness = topWeaknesses.find((w: any) => w.severity === 'high');

            // 1. SRS Review (always first, capped to 15 mins)
            let srsTime = Math.min(15, Math.max(5, Math.round(adjustedDailyMinutes * 0.2)));
            tasks.push({
                id: `task-fallback-srs-${dayName}-${Date.now()}`,
                title: isJa ? "SM-2 Fleshkartalar takrorlash" : "Spaced Repetition Flashcards Review",
                type: 'srs',
                estimatedMinutes: srsTime,
                completed: false,
                status: 'pending',
                sourceType: 'srs',
                route: '/study-mode',
                skill: 'vocabulary'
            });

            // 2. Main curriculum lesson or quiz practice
            const lessonIdx = (weekNumber * 2 + idx) % Math.max(1, matchingLessons.length);
            const targetLesson = matchingLessons[lessonIdx] || { id: isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1', title: 'Greetings' };
            const lessonRoute = targetLesson.route || (isJa ? '/jlpt' : '/ielts');
            let lessonTime = adjustedDailyMinutes - srsTime;

            // --- Phase 19: Adaptive skill-based time reallocation ---
            const lessonSkill: string = targetLesson.skill || 'grammar';
            if (evaluation) {
                // Use evaluation weak/strong lists as secondary signal
                if (evaluation.weakSkills?.includes(lessonSkill)) {
                    lessonTime += 15; // Boost weak skill time
                } else if (evaluation.strongSkills?.includes(lessonSkill)) {
                    lessonTime = Math.max(5, lessonTime - 10); // Reduce strong skill time
                }
            } else if (masteryProfile) {
                // Fall back to live mastery profile when no evaluation yet
                const skillMastery = masteryProfile.skills?.[lessonSkill];
                if (skillMastery && skillMastery.score < 50) {
                    lessonTime += 15; // Boost weak skill time from live mastery
                } else if (skillMastery && skillMastery.score >= 85) {
                    lessonTime = Math.max(5, lessonTime - 10);
                }
            }

            // Cap lesson time to avoid exceeding daily budget
            lessonTime = Math.min(lessonTime, adjustedDailyMinutes - srsTime);

            tasks.push({
                id: `task-fallback-lesson-${dayName}-${Date.now()}`,
                title: fallbackToReview ? `${targetLesson.title} (Takrorlash)` : targetLesson.title,
                type: fallbackToReview ? 'review' : 'lesson',
                estimatedMinutes: lessonTime,
                completed: false,
                status: 'pending',
                sourceType: 'curriculum',
                contentId: targetLesson.id,
                route: lessonRoute,
                skill: lessonSkill as MasterySkill
            });

            // --- Phase 19: Inject remediation task for high-severity weak skill on alternating days ---
            // Inject on even-indexed days (Mon, Wed, Fri, Sun) to avoid overload
            if (highSeverityWeakness && idx % 2 === 0) {
                const remediationRoute = WeaknessEngine.resolveRouteForSkill(
                    highSeverityWeakness.skill,
                    goal.language
                );
                const remediationTime = 10; // Fixed 10-min focused remediation burst
                tasks.push({
                    id: `task-remediation-${dayName}-${Date.now()}`,
                    title: isJa
                        ? `${highSeverityWeakness.skill.toUpperCase()} — Tez mustahkamlash (Zaif ko'nikma)`
                        : `${highSeverityWeakness.skill.charAt(0).toUpperCase() + highSeverityWeakness.skill.slice(1)} Remediation — Targeted Practice`,
                    type: 'practice',
                    estimatedMinutes: remediationTime,
                    completed: false,
                    status: 'pending',
                    sourceType: 'curriculum',
                    route: remediationRoute,
                    skill: highSeverityWeakness.skill as MasterySkill
                });
            }

            return {
                day: dayName,
                tasks
            };
        });

        const existingPlans = PersonalLearningPlanService.getWeeklyPlans(userId);
        const matchingWeekPlans = existingPlans.filter(p => p.goalId === goal.id && p.weekNumber === weekNumber);
        const nextVersion = matchingWeekPlans.length > 0
            ? Math.max(...matchingWeekPlans.map(p => p.version)) + 1
            : 1;

        const today = new Date();
        const startDay = new Date(today.getTime() + 1 * 86400000);
        const endDay = new Date(startDay.getTime() + 6 * 86400000);

        return {
            id: `weekplan-fallback-${goal.id}-${weekNumber}-${Date.now()}`,
            goalId: goal.id,
            userId,
            weekNumber,
            startDate: startDay.toISOString().split('T')[0],
            endDate: endDay.toISOString().split('T')[0],
            objectives,
            focusSkills,
            days,
            reasoning: isJa
                ? "Tizim avtomatik ravishda darslik bazasidan foydalanib standart adaptive dars rejasini yaratdi."
                : "The system automatically generated a standard curriculum-based adaptive roadmap.",
            expectedOutcome: isJa
                ? "Boshlang'ich yapon tili grammatik va leksik tushunchalarni rivojlantirish."
                : "Build basic structures, consolidate vocabulary, and practice spaced repetition review.",
            aiGenerated: false,
            version: nextVersion,
            status: 'active',
            createdAt: new Date().toISOString()
        };
    }
};
export default PersonalLearningPlanEngine;
