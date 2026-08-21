import { UserLearningState } from '../types/learningOrchestrator';
import { 
    LearningRoadmap, 
    RoadmapLevelNode, 
    RoadmapUnitNode, 
    RoadmapLessonNode, 
    RoadmapSummary,
    NodeStatus 
} from '../types/curriculum';
import { CurriculumService } from './CurriculumService';
import { LessonService } from './LessonService';
import { PersonalLearningPlanService } from './PersonalLearningPlanService';


export const RoadmapService = {
    /**
     * Build the complete personalised Learning Roadmap for the user.
     */
    getLearningRoadmap(state: UserLearningState): LearningRoadmap {
        const course = CurriculumService.getCourse(state.primaryLanguage);
        const currentLevelCode = state.currentLevel || (state.primaryLanguage === 'ja' ? 'N3' : 'B2');
        const targetLevelCode = state.targetLevel || (state.primaryLanguage === 'ja' ? 'N2' : 'B2');
        const isJa = state.primaryLanguage === 'ja';

        // Find user current level order
        const currentLevelNode = course.levels.find(l => l.code.toLowerCase() === currentLevelCode.toLowerCase()) || course.levels[0];
        const userLevelOrder = currentLevelNode.order;

        let activeLessonNode: RoadmapLessonNode | null = null;
        let activeLevelNode: RoadmapLevelNode | null = null;
        let completedLessonsTotal = 0;
        let totalCourseLessons = 0;

        const roadmapLevels: RoadmapLevelNode[] = course.levels.map(level => {
            const isPast = level.order < userLevelOrder;
            const isCurrent = level.order === userLevelOrder;
            const isFuture = level.order > userLevelOrder;

            let levelStatus: NodeStatus = isPast ? 'completed' : isCurrent ? 'current' : 'locked';
            let levelCompletedCount = 0;
            let levelLessonsCount = 0;

            const roadmapUnits: RoadmapUnitNode[] = level.units.map(unit => {
                let unitCompletedCount = 0;

                const roadmapLessons: RoadmapLessonNode[] = unit.lessons.map(lesson => {
                    totalCourseLessons++;
                    levelLessonsCount++;

                    let lessonStatus: NodeStatus = 'locked';
                    let progressPercentage = 0;
                    let lockReason: string | undefined = undefined;

                    if (isPast) {
                        // User started past this level (skipped/passed via placement)
                        lessonStatus = 'completed';
                        progressPercentage = 100;
                        levelCompletedCount++;
                        unitCompletedCount++;
                        completedLessonsTotal++;
                    } else if (isFuture) {
                        lessonStatus = 'locked';
                        progressPercentage = 0;
                        lockReason = isJa 
                            ? `Ushbu darsni ochish uchun avval ${currentLevelNode.code} bosqichini yakunlang.` 
                            : `Complete ${currentLevelNode.code} level to unlock this lesson.`;
                    } else {
                        // Current Level logic
                        const completedIds = PersonalLearningPlanService.getCompletedLessonIds(state.userId, state.primaryLanguage);
                        const prog = LessonService.getLessonProgress(state.userId, lesson.id);
                        const isDone = completedIds.includes(lesson.id) || (prog ? (prog.isCompleted || (prog as any).completed) : false);

                        if (isDone) {
                            lessonStatus = 'completed';
                            progressPercentage = 100;
                            levelCompletedCount++;
                            unitCompletedCount++;
                            completedLessonsTotal++;
                        } else if (prog && prog.currentStepIndex > 0) {
                            lessonStatus = 'in_progress';
                            const totalSteps = 3;
                            progressPercentage = Math.round((prog.currentStepIndex / totalSteps) * 100);
                        } else if (state.currentPosition?.lessonId === lesson.id) {
                            lessonStatus = 'current';
                            progressPercentage = 0;
                        } else {
                            // Check prerequisites
                            let prereqsMet = true;
                            const prereqIds = CurriculumService.getLessonPrerequisites(lesson.id);
                            if (prereqIds.length > 0) {
                                for (const prereqId of prereqIds) {
                                    const pProg = LessonService.getLessonProgress(state.userId, prereqId);
                                    const pDone = completedIds.includes(prereqId) || (pProg ? (pProg.isCompleted || (pProg as any).completed) : false);
                                    if (!pDone) {
                                        prereqsMet = false;
                                        lockReason = isJa 
                                            ? `Oldingi darsni yakunlashingiz kerak.` 
                                            : `Complete previous lesson first.`;
                                        break;
                                    }
                                }
                            }

                            lessonStatus = prereqsMet ? 'available' : 'locked';
                            progressPercentage = 0;
                        }

                        // Check if this skill is flagged as a top weakness
                        const isWeak = state.masteryProfile?.topWeaknesses.some(w => w.skill === lesson.skill);
                        if (isWeak && lessonStatus === 'available') {
                            lessonStatus = 'weak';
                        }
                    }

                    const node: RoadmapLessonNode = {
                        ...lesson,
                        status: lessonStatus,
                        progressPercentage,
                        lockReason
                    };

                    if (!activeLessonNode && (lessonStatus === 'current' || lessonStatus === 'in_progress')) {
                        activeLessonNode = node;
                    }

                    return node;
                });

                const unitProg = roadmapLessons.length > 0 
                    ? Math.round((unitCompletedCount / roadmapLessons.length) * 100) 
                    : 0;

                const unitStatus: NodeStatus = isPast ? 'completed' : isFuture ? 'locked' : unitProg === 100 ? 'completed' : 'current';

                return {
                    id: unit.id,
                    title: unit.title,
                    order: unit.order,
                    levelCode: unit.levelCode,
                    status: unitStatus,
                    progressPercentage: unitProg,
                    lessons: roadmapLessons
                };
            });

            const levelProg = levelLessonsCount > 0 
                ? Math.round((levelCompletedCount / levelLessonsCount) * 100) 
                : 0;

            const lvlNode: RoadmapLevelNode = {
                id: level.id,
                code: level.code,
                title: level.title,
                order: level.order,
                status: levelStatus,
                progressPercentage: levelProg,
                description: level.description,
                units: roadmapUnits
            };

            if (isCurrent) {
                activeLevelNode = lvlNode;
            }

            return lvlNode;
        });

        // Compute Overall Progress towards target level
        const overallProgressPercentage = totalCourseLessons > 0
            ? Math.min(100, Math.round((completedLessonsTotal / totalCourseLessons) * 100))
            : 0;

        return {
            userId: state.userId,
            language: state.primaryLanguage,
            currentLevelCode,
            targetLevelCode,
            targetGoal: state.targetGoal,
            overallProgressPercentage,
            levels: roadmapLevels,
            activeLesson: activeLessonNode,
            activeLevelNode,
            skillMasteries: state.masteryProfile?.skills || {},
            topWeaknesses: state.masteryProfile?.topWeaknesses || [],
            generatedAt: new Date().toISOString()
        };
    },

    /**
     * Find the next recommended lesson from a computed roadmap.
     * Priority: weak → in_progress → current → available.
     */
    getNextRecommendedLesson(roadmap: LearningRoadmap): RoadmapLessonNode | null {
        const priorityOrder: NodeStatus[] = ['weak', 'in_progress', 'current', 'available'];

        for (const targetStatus of priorityOrder) {
            for (const level of roadmap.levels) {
                for (const unit of level.units) {
                    for (const lesson of unit.lessons) {
                        if (lesson.status === targetStatus) {
                            return lesson;
                        }
                    }
                }
            }
        }

        return null;
    },

    /**
     * Compute an aggregated summary DTO from a full roadmap.
     * Used by Dashboard widget — no business logic, pure data aggregation.
     */
    getRoadmapSummary(roadmap: LearningRoadmap): RoadmapSummary {
        let completedCount = 0;
        let totalCount = 0;
        let topWeakLesson: RoadmapLessonNode | null = null;

        for (const level of roadmap.levels) {
            for (const unit of level.units) {
                for (const lesson of unit.lessons) {
                    totalCount++;
                    if (lesson.status === 'completed') {
                        completedCount++;
                    }
                    if (lesson.status === 'weak' && !topWeakLesson) {
                        topWeakLesson = lesson;
                    }
                }
            }
        }

        const currentLevel = roadmap.levels.find(l => l.code === roadmap.currentLevelCode);

        return {
            completedCount,
            totalCount,
            progressPercentage: roadmap.overallProgressPercentage,
            currentLevelCode: roadmap.currentLevelCode,
            currentLevelProgress: currentLevel?.progressPercentage ?? 0,
            nextLesson: this.getNextRecommendedLesson(roadmap),
            topWeakLesson
        };
    }
};
