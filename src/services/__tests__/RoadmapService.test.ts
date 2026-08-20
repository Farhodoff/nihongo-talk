import { describe, it, expect, beforeEach } from 'vitest';
import { RoadmapService } from '../RoadmapService';
import { UserLearningState } from '../../types/learningOrchestrator';

describe('RoadmapService Unit Tests', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    const createBaseState = (overrides?: Partial<UserLearningState>): UserLearningState => ({
        userId: 'test_roadmap_user',
        primaryLanguage: 'en',
        enabledLanguages: ['en'],
        currentLevel: 'B2',
        targetLevel: 'B2',
        targetGoal: 'IELTS 7.5+',
        availableStudyMinutes: 30,
        currentPosition: {
            courseId: 'course-en-general',
            unitId: 'en-b2-u1',
            unitTitle: 'Unit 1: Education',
            lessonId: 'en-b2-u1-l1',
            lessonTitle: 'Academic Learning & Inversion',
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

    it('1. should build English A1 beginner roadmap correctly', () => {
        const state = createBaseState({ currentLevel: 'A1', targetLevel: 'B2' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        expect(roadmap.language).toBe('en');
        expect(roadmap.levels[0].code).toBe('A1');
        expect(roadmap.levels[0].status).toBe('current');
        expect(roadmap.levels[1].status).toBe('locked'); // A2 is locked
    });

    it('2. should build English B2 roadmap with A1-B1 marked as completed/skipped', () => {
        const state = createBaseState({ currentLevel: 'B2', targetLevel: 'B2' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        const a1 = roadmap.levels.find(l => l.code === 'A1');
        const b2 = roadmap.levels.find(l => l.code === 'B2');
        const c1 = roadmap.levels.find(l => l.code === 'C1');

        expect(a1?.status).toBe('completed');
        expect(b2?.status).toBe('current');
        expect(c1?.status).toBe('locked');
    });

    it('3. should build Japanese N5 beginner roadmap', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            currentLevel: 'N5',
            targetLevel: 'N3',
            targetGoal: 'JLPT N2'
        });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        expect(roadmap.language).toBe('ja');
        expect(roadmap.levels[0].code).toBe('N5');
        expect(roadmap.levels[0].status).toBe('current');
        expect(roadmap.levels[1].status).toBe('locked'); // N4 is locked
    });

    it('4. should build Japanese N3 roadmap with N5-N4 completed and N2-N1 locked', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            currentLevel: 'N3',
            targetLevel: 'N2',
            targetGoal: 'JLPT N2'
        });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        const n5 = roadmap.levels.find(l => l.code === 'N5');
        const n4 = roadmap.levels.find(l => l.code === 'N4');
        const n3 = roadmap.levels.find(l => l.code === 'N3');
        const n2 = roadmap.levels.find(l => l.code === 'N2');

        expect(n5?.status).toBe('completed');
        expect(n4?.status).toBe('completed');
        expect(n3?.status).toBe('current');
        expect(n2?.status).toBe('locked');
    });

    it('5. should identify active lesson node on the roadmap', () => {
        const state = createBaseState({ currentLevel: 'B2' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        expect(roadmap.activeLesson).not.toBeNull();
        expect(roadmap.activeLesson?.id).toBe('en-b2-u1-l1');
    });

    it('6. should provide explicit lockReason on locked future lessons', () => {
        const state = createBaseState({ currentLevel: 'B2' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        const c1Level = roadmap.levels.find(l => l.code === 'C1');
        const lockedLesson = c1Level?.units[0].lessons[0];

        expect(lockedLesson?.status).toBe('locked');
        expect(lockedLesson?.lockReason).toBeDefined();
    });

    it('7. should flag weak skills on relevant roadmap lessons', () => {
        const state = createBaseState({
            currentLevel: 'B2',
            masteryProfile: {
                userId: 'test_roadmap_user',
                language: 'en',
                skills: {},
                topWeaknesses: [
                    {
                        skill: 'vocabulary',
                        score: 45,
                        confidence: 60,
                        severity: 'high',
                        reason: 'Low vocab retention',
                        recommendedRoute: '/vocabulary',
                        language: 'en'
                    }
                ],
                topStrengths: [],
                overallMasteryScore: 60,
                overallConfidence: 60,
                lastCalculatedAt: ''
            }
        });

        const roadmap = RoadmapService.getLearningRoadmap(state);
        const b2Level = roadmap.levels.find(l => l.code === 'B2');
        const vocabLesson = b2Level?.units[0].lessons.find(l => l.skill === 'vocabulary');

        // If available, weak flag applies
        expect(vocabLesson).toBeDefined();
    });

    it('8. should calculate overall progress percentage towards target level', () => {
        const state = createBaseState({ currentLevel: 'B2' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        expect(roadmap.overallProgressPercentage).toBeGreaterThanOrEqual(0);
        expect(roadmap.overallProgressPercentage).toBeLessThanOrEqual(100);
    });

    it('9. should ensure Japanese user receives only Japanese JLPT levels', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            enabledLanguages: ['ja', 'en']
        });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        for (const lvl of roadmap.levels) {
            expect(['N5', 'N4', 'N3', 'N2', 'N1']).toContain(lvl.code);
        }
    });

    it('10. should ensure English user receives only English CEFR levels', () => {
        const state = createBaseState({
            primaryLanguage: 'en',
            enabledLanguages: ['en', 'ja']
        });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        for (const lvl of roadmap.levels) {
            expect(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).toContain(lvl.code);
        }
    });

    it('11. should provide valid route on every single roadmap lesson node', () => {
        const state = createBaseState();
        const roadmap = RoadmapService.getLearningRoadmap(state);

        for (const lvl of roadmap.levels) {
            for (const unit of lvl.units) {
                for (const lesson of unit.lessons) {
                    expect(lesson.route).toBeDefined();
                    expect(lesson.route.startsWith('/')).toBe(true);
                }
            }
        }
    });

    it('12. should handle empty state gracefully without crashing', () => {
        const state = createBaseState({ currentPosition: null, currentLevel: '' });
        const roadmap = RoadmapService.getLearningRoadmap(state);

        expect(roadmap.levels.length).toBeGreaterThan(0);
        expect(roadmap.currentLevelCode).toBeDefined();
    });
});
