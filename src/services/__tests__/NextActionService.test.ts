import { describe, it, expect } from 'vitest';
import { NextActionService } from '../NextActionService';
import { UserLearningState } from '../../types/learningOrchestrator';

describe('NextActionService Unit Tests', () => {
    const createBaseState = (overrides?: Partial<UserLearningState>): UserLearningState => ({
        userId: 'test_user',
        primaryLanguage: 'en',
        enabledLanguages: ['en'],
        currentLevel: 'B2',
        targetLevel: 'B2',
        targetGoal: 'IELTS 7.5+',
        availableStudyMinutes: 30,
        currentPosition: {
            courseId: 'ielts-b2',
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

    it('1. should recommend starting first lesson for new English user', () => {
        const state = createBaseState({ primaryLanguage: 'en' });
        const action = NextActionService.getNextAction(state);

        expect(action.type).toBe('start_next_lesson');
        expect(action.language).toBe('en');
        expect(action.route).toContain('/lesson/en-b2-u1-l1');
        expect(action.ctaLabel).toBeDefined();
        expect(action.reason).toBeDefined();
    });

    it('2. should recommend starting first lesson for new Japanese user', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            targetLevel: 'N3',
            targetGoal: 'JLPT N2',
            currentPosition: {
                courseId: 'jlpt-n3',
                unitId: 'ja-n3-u1',
                unitTitle: '1-Bo\'lim',
                lessonId: 'ja-n3-u1-l1',
                lessonTitle: 'Sayohat va Transport',
                stepIndex: 0,
                totalSteps: 3,
                status: 'not_started',
                percentage: 0
            }
        });
        const action = NextActionService.getNextAction(state);

        expect(action.type).toBe('start_next_lesson');
        expect(action.language).toBe('ja');
        expect(action.route).toContain('/lesson/ja-n3-u1-l1');
    });

    it('3. should prioritize resuming unfinished lesson when one exists', () => {
        const state = createBaseState({
            unfinishedLessons: [
                {
                    lessonId: 'en-b2-u1-l1',
                    lessonTitle: 'Academic Learning & Inversion',
                    language: 'en',
                    level: 'B2',
                    lastStepIndex: 2,
                    totalSteps: 3,
                    progressPercentage: 66
                }
            ]
        });

        const action = NextActionService.getNextAction(state);

        expect(action.type).toBe('resume_lesson');
        expect(action.lessonId).toBe('en-b2-u1-l1');
        expect(action.reason).toContain('66%');
        expect(action.priority).toBeGreaterThanOrEqual(90);
    });

    it('4. should generate review_srs action when cards are due', () => {
        const state = createBaseState({
            reviewSummary: {
                totalCards: 20,
                dueCount: 8,
                overdueCount: 2,
                newCount: 5,
                learnedCount: 15,
                averageRetentionScore: 80
            }
        });

        const candidates = NextActionService.getCandidateActions(state);
        const srsCandidate = candidates.find(c => c.type === 'review_srs');

        expect(srsCandidate).toBeDefined();
        expect(srsCandidate?.route).toBe('/study-mode');
        expect(srsCandidate?.priority).toBeGreaterThan(80);
    });

    it('5. should prioritize critical overdue SRS (>=10 cards) over lower priority tasks', () => {
        const state = createBaseState({
            reviewSummary: {
                totalCards: 50,
                dueCount: 15,
                overdueCount: 12,
                newCount: 0,
                learnedCount: 50,
                averageRetentionScore: 65
            }
        });

        const action = NextActionService.getNextAction(state);

        expect(action.type).toBe('review_srs');
        expect(action.priority).toBe(98);
        expect(action.route).toBe('/study-mode');
    });

    it('6. should generate weakness_practice when recurring mistakes are detected', () => {
        const state = createBaseState({
            signalsSummary: {
                totalSignalsCount: 5,
                recentMistakesCount: 3,
                newVocabCount: 2,
                completedLessonsCount: 1,
                recentMistakeTopics: ['Inversion Structure']
            }
        });

        const candidates = NextActionService.getCandidateActions(state);
        const weaknessCandidate = candidates.find(c => c.type === 'weakness_practice');

        expect(weaknessCandidate).toBeDefined();
        expect(weaknessCandidate?.reason).toContain('Inversion Structure');
    });

    it('7. should correctly recommend next lesson after prior lesson completion', () => {
        const state = createBaseState({
            completedLessonsCount: 1,
            currentPosition: {
                courseId: 'ielts-b2',
                unitId: 'en-b2-u1',
                unitTitle: 'Unit 1: Education',
                lessonId: 'en-b2-u1-l2',
                lessonTitle: 'Advanced Writing Vocabulary',
                stepIndex: 0,
                totalSteps: 3,
                status: 'not_started',
                percentage: 0
            }
        });

        const action = NextActionService.getNextAction(state);

        expect(action.type).toBe('start_next_lesson');
        expect(action.route).toBe('/lesson/en-b2-u1-l2');
        expect(action.title).toContain('Advanced Writing Vocabulary');
    });

    it('8. should never recommend English lessons to Japanese primary user', () => {
        const state = createBaseState({
            primaryLanguage: 'ja',
            enabledLanguages: ['ja', 'en'],
            currentPosition: {
                courseId: 'jlpt-n3',
                unitId: 'ja-n3-u1',
                lessonId: 'ja-n3-u1-l1',
                lessonTitle: 'Sayohat',
                stepIndex: 0,
                totalSteps: 3,
                status: 'not_started',
                percentage: 0
            }
        });

        const candidates = NextActionService.getCandidateActions(state);
        for (const candidate of candidates) {
            expect(candidate.language).toBe('ja');
            expect(candidate.route).not.toContain('/lesson/en-');
        }
    });

    it('9. should never recommend Japanese lessons to English primary user', () => {
        const state = createBaseState({
            primaryLanguage: 'en',
            enabledLanguages: ['en', 'ja']
        });

        const candidates = NextActionService.getCandidateActions(state);
        for (const candidate of candidates) {
            expect(candidate.language).toBe('en');
            expect(candidate.route).not.toContain('/lesson/ja-');
        }
    });

    it('10. should rank multiple candidates and pick the highest priority action', () => {
        const state = createBaseState({
            unfinishedLessons: [
                {
                    lessonId: 'en-b2-u1-l1',
                    lessonTitle: 'Inversion Lesson',
                    language: 'en',
                    level: 'B2',
                    lastStepIndex: 2,
                    totalSteps: 3,
                    progressPercentage: 66
                }
            ],
            signalsSummary: {
                totalSignalsCount: 2,
                recentMistakesCount: 2,
                newVocabCount: 1,
                completedLessonsCount: 0,
                recentMistakeTopics: ['Grammar']
            }
        });

        const action = NextActionService.getNextAction(state);

        // Resume lesson (score 97) should win over weakness (score 82)
        expect(action.type).toBe('resume_lesson');
    });

    it('11. should provide safe fallback for empty/minimal state', () => {
        const emptyState = createBaseState({
            currentPosition: null,
            unfinishedLessons: [],
            reviewSummary: { totalCards: 0, dueCount: 0, overdueCount: 0, newCount: 0, learnedCount: 0, averageRetentionScore: 0 }
        });

        const action = NextActionService.getNextAction(emptyState);

        expect(action).toBeDefined();
        expect(action.route).toBeDefined();
        expect(action.title).toBeDefined();
        expect(action.ctaLabel).toBeDefined();
    });

    it('12. should format reasonable estimated minutes based on task type', () => {
        const state = createBaseState({
            reviewSummary: {
                totalCards: 20,
                dueCount: 10,
                overdueCount: 0,
                newCount: 0,
                learnedCount: 20,
                averageRetentionScore: 90
            }
        });

        const action = NextActionService.getNextAction(state);
        expect(action.estimatedMinutes).toBeGreaterThanOrEqual(5);
        expect(action.estimatedMinutes).toBeLessThanOrEqual(30);
    });
});
