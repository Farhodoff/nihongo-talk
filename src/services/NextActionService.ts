import { UserLearningState } from '../types/learningOrchestrator';
import { NextLearningAction } from '../types/nextAction';

export const NextActionService = {
    /**
     * Generate all eligible candidate actions based on the user learning state.
     */
    getCandidateActions(state: UserLearningState): NextLearningAction[] {
        const candidates: NextLearningAction[] = [];
        const isJa = state.primaryLanguage === 'ja';

        // 1. Candidate: Unfinished Lesson in progress (Very High Priority)
        if (state.unfinishedLessons && state.unfinishedLessons.length > 0) {
            const unfinished = state.unfinishedLessons[0];
            const remainingSteps = unfinished.totalSteps - unfinished.lastStepIndex;
            const estMinutes = Math.max(5, Math.round((remainingSteps / unfinished.totalSteps) * 15));
            const priorityScore = 90 + Math.min(10, Math.round(unfinished.progressPercentage / 10));

            candidates.push({
                type: 'resume_lesson',
                title: isJa 
                    ? `Darsni davom ettiring: ${unfinished.lessonTitle}` 
                    : `Resume Lesson: ${unfinished.lessonTitle}`,
                description: isJa 
                    ? `${unfinished.level} darajasi bo'yicha ${unfinished.lastStepIndex}/${unfinished.totalSteps}-qadamda to'xtagansiz.` 
                    : `Currently on step ${unfinished.lastStepIndex}/${unfinished.totalSteps} of ${unfinished.level} lesson.`,
                reason: isJa 
                    ? `Siz ushbu darsning ${unfinished.progressPercentage}% qismini bajargansiz.` 
                    : `You have completed ${unfinished.progressPercentage}% of this lesson.`,
                ctaLabel: isJa ? '🚀 Davom Ettirish' : '🚀 Resume Lesson',
                estimatedMinutes: estMinutes,
                priority: priorityScore,
                language: state.primaryLanguage,
                route: `/lesson/${unfinished.lessonId}`,
                lessonId: unfinished.lessonId,
                badgeIcon: isJa ? '🚅' : '🎓',
                metadata: {
                    lessonId: unfinished.lessonId,
                    stepIndex: unfinished.lastStepIndex,
                    progressPercentage: unfinished.progressPercentage
                }
            });
        }

        // 2. Candidate: Overdue or Due Spaced Repetition (SRS) Flashcards
        const { overdueCount, dueCount } = state.reviewSummary;
        if (overdueCount > 0 || dueCount >= 5) {
            let srsPriority = 75;
            if (overdueCount >= 10) {
                srsPriority = 98; // Critical backlog
            } else if (overdueCount > 0) {
                srsPriority = 92; // Overdue review
            } else if (dueCount >= 15) {
                srsPriority = 85; // Heavy due batch
            } else if (dueCount >= 5) {
                srsPriority = 78;
            }

            const estMinutes = Math.min(25, Math.max(5, Math.round(dueCount * 0.5)));

            candidates.push({
                type: 'review_srs',
                title: isJa 
                    ? `${dueCount} ta fleshkartani takrorlang` 
                    : `Review ${dueCount} Flashcards`,
                description: isJa 
                    ? `Xotirangizni mustahkamlash uchun interval takrorlash mashg'uloti.` 
                    : `Spaced repetition review session to solidify long-term retention.`,
                reason: overdueCount > 0 
                    ? (isJa ? `${overdueCount} ta kartaning takrorlash muddati o'tib ketgan.` : `${overdueCount} cards are overdue for review.`)
                    : (isJa ? `Bugun ${dueCount} ta so'zni takrorlash vaqti kelgan.` : `${dueCount} cards are scheduled for review today.`),
                ctaLabel: isJa ? '🧠 Takrorlashni Boshlash' : '🧠 Start Review',
                estimatedMinutes: estMinutes,
                priority: srsPriority,
                language: state.primaryLanguage,
                route: '/study-mode',
                badgeIcon: '🧠',
                metadata: {
                    dueCount,
                    overdueCount
                }
            });
        }

        // 3. Candidate: Weakness or Repeated Error Remediation
        if (state.signalsSummary.recentMistakesCount >= 2) {
            const topic = state.signalsSummary.recentMistakeTopics[0];
            const reasonText = topic
                ? (isJa ? `So'nggi darslarda "${topic}" mavzusida xatoliklar qayd etilgan.` : `Recent mistakes detected in "${topic}".`)
                : (isJa ? `So'nggi darslarda bir nechta xatoliklar qayd etildi.` : `Multiple errors were detected in recent exercises.`);

            candidates.push({
                type: 'weakness_practice',
                title: isJa 
                    ? `Zaif ko'nikmalarni mustahkamlash` 
                    : `Strengthen Weak Skills`,
                description: isJa 
                    ? `O'rganilgan mavzular bo'yicha mustahkamlovchi interaktiv mashqlar.` 
                    : `Targeted interactive practice to overcome recurring errors.`,
                reason: reasonText,
                ctaLabel: isJa ? '⚡ Mashq Qilish' : '⚡ Practice Now',
                estimatedMinutes: 10,
                priority: 82,
                language: state.primaryLanguage,
                route: isJa ? '/jlpt/grammar-quiz' : '/vocabulary',
                badgeIcon: '⚡',
                metadata: {
                    mistakesCount: state.signalsSummary.recentMistakesCount,
                    topic
                }
            });
        }

        // 4. Candidate: Start Next Lesson in Curriculum
        if (state.currentPosition) {
            const isFirst = state.completedLessonsCount === 0;
            const title = isFirst
                ? (isJa ? `1-Dars: ${state.currentPosition.lessonTitle}` : `Lesson 1: ${state.currentPosition.lessonTitle}`)
                : (isJa ? `Keyingi dars: ${state.currentPosition.lessonTitle}` : `Next Lesson: ${state.currentPosition.lessonTitle}`);

            const reason = isFirst
                ? (isJa ? `${state.targetLevel} darajasi bo'yicha boshlang'ich darsni boshlang.` : `Start the foundational lesson for ${state.targetLevel} level.`)
                : (isJa ? `O'quv rejangizdagi keyingi asosiy mavzuga o'tish vaqti keldi.` : `Time to advance to the next core lesson in your curriculum.`);

            candidates.push({
                type: 'start_next_lesson',
                title,
                description: state.currentPosition.unitTitle 
                    ? `${state.currentPosition.unitTitle} • ${state.currentPosition.totalSteps} qadam` 
                    : `${state.targetLevel} Curriculum • ${state.currentPosition.totalSteps} steps`,
                reason,
                ctaLabel: isJa ? '🚀 Darsni Boshlash' : '🚀 Start Lesson',
                estimatedMinutes: 15,
                priority: 70,
                language: state.primaryLanguage,
                route: `/lesson/${state.currentPosition.lessonId}`,
                lessonId: state.currentPosition.lessonId,
                badgeIcon: isJa ? '🌸' : '📚',
                metadata: {
                    lessonId: state.currentPosition.lessonId,
                    courseId: state.currentPosition.courseId,
                    unitId: state.currentPosition.unitId
                }
            });
        }

        // 5. Candidate: General Fallback
        const defaultRoute = isJa ? '/jlpt' : '/ielts';
        candidates.push({
            type: 'start_next_lesson',
            title: isJa 
                ? `${state.targetLevel} o'quv rejasini boshlash` 
                : `Start ${state.targetLevel} Learning Path`,
            description: isJa 
                ? `${state.targetGoal} maqsadiga yo'naltirilgan shaxsiy o'quv dasturi.` 
                : `Structured learning path designed for ${state.targetGoal}.`,
            reason: isJa 
                ? `Kunlik ${state.availableStudyMinutes} daqiqalik o'quv maqsadingizni bajaring.` 
                : `Fulfill your daily ${state.availableStudyMinutes}-minute learning goal.`,
            ctaLabel: isJa ? '🎯 Rejani Ochish' : '🎯 Open Plan',
            estimatedMinutes: state.availableStudyMinutes || 30,
            priority: 40,
            language: state.primaryLanguage,
            route: defaultRoute,
            badgeIcon: '🎯'
        });

        return candidates;
    },

    /**
     * Deterministically selects the single Next Best Action with the highest priority score.
     */
    getNextAction(state: UserLearningState): NextLearningAction {
        const candidates = this.getCandidateActions(state);
        
        // Sort descending by priority score
        candidates.sort((a, b) => b.priority - a.priority);

        return candidates[0];
    }
};
