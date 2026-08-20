import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LearningPathEngine } from '../LearningPathEngine';

describe('Phase 8.7 — English Progression Track Tests', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
        localStorage.clear();
    });

    const createMockState = (overrides: any = {}) => {
        return {
            userId: 'test-user',
            primaryLanguage: 'en',
            enabledLanguages: ['en'],
            currentLevel: 'A1',
            targetLevel: 'B2',
            targetGoal: 'General English',
            availableStudyMinutes: 30,
            completedLessonsCount: 2,
            unfinishedLessons: [],
            recentActivity: {},
            signalsSummary: {
                recentMistakesCount: 0,
                recentMistakeTopics: []
            },
            masteryProfile: {
                skills: {
                    grammar: { score: 85, status: 'adeq' },
                    vocabulary: { score: 80, status: 'adeq' },
                    reading: { score: 75, status: 'adeq' },
                    listening: { score: 72, status: 'adeq' }
                }
            },
            diagnosticBaseline: true,
            ...overrides
        };
    };

    // 1. A1 -> A2 ready
    it('1. should promote user from A1 to A2 when all evidence is sufficient', () => {
        const state = createMockState({ currentLevel: 'A1', completedLessonsCount: 3 });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('A2');
    });

    // 2. A1 -> A2 not ready
    it('2. should block promotion from A1 to A2 if required lessons count is below threshold', () => {
        const state = createMockState({ currentLevel: 'A1', completedLessonsCount: 1 });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers).toContain('Completed Lessons (1/2) is below threshold.');
    });

    // 3. A2 -> B1
    it('3. should handle A2 to B1 evaluation correctly', () => {
        const state = createMockState({ currentLevel: 'A2', completedLessonsCount: 2 });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('B1');
    });

    // 4. B1 -> B2
    it('4. should handle B1 to B2 evaluation correctly', () => {
        const state = createMockState({ currentLevel: 'B1', completedLessonsCount: 2 });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('B2');
    });

    // 5. B2 -> C1
    it('5. should handle B2 to C1 evaluation correctly', () => {
        const state = createMockState({ currentLevel: 'B2', completedLessonsCount: 2 });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('C1');
    });

    // 6. weak Listening blocker
    it('6. should block promotion if Listening score is below skill minimum threshold', () => {
        const state = createMockState({
            currentLevel: 'B1',
            masteryProfile: {
                skills: {
                    grammar: { score: 85 },
                    vocabulary: { score: 80 },
                    reading: { score: 75 },
                    listening: { score: 55 }
                }
            }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers?.some(b => b.includes('LISTENING'))).toBe(true);
    });

    // 7. weak Grammar blocker
    it('7. should block promotion if Grammar score is below skill minimum threshold', () => {
        const state = createMockState({
            currentLevel: 'B1',
            masteryProfile: {
                skills: {
                    grammar: { score: 58 },
                    vocabulary: { score: 80 },
                    reading: { score: 75 },
                    listening: { score: 72 }
                }
            }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers?.some(b => b.includes('GRAMMAR'))).toBe(true);
    });

    // 8. insufficient evidence
    it('8. should block promotion if there is no diagnostic or lesson completed data', () => {
        const state = createMockState({
            currentLevel: 'B1',
            completedLessonsCount: 0,
            diagnosticBaseline: false
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers).toContain('Diagnostic test is required before promotion.');
    });

    // 9. diagnostic confidence low
    it('9. should block promotion if latest diagnostic confidence is low', () => {
        const state = createMockState({ currentLevel: 'B1' });
        localStorage.setItem('study_planner_diag_result_test-user_en', JSON.stringify({
            userId: 'test-user',
            language: 'en',
            overallConfidence: 45
        }));
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers).toContain('Diagnostic placement test confidence is too low. Please retake the test.');
    });

    // 10. recent repeated mistakes
    it('10. should block promotion if user has too many recent repeated mistakes', () => {
        const state = createMockState({
            currentLevel: 'B1',
            signalsSummary: {
                recentMistakesCount: 6,
                recentMistakeTopics: ['Present Perfect']
            }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.advancementBlockers?.some(b => b.includes('recent repeated mistakes'))).toBe(true);
    });

    // 11. old mistakes shouldn't block unnecessarily
    it('11. should not block promotion if mistakes count is below threshold', () => {
        const state = createMockState({
            currentLevel: 'B1',
            signalsSummary: {
                recentMistakesCount: 2,
                recentMistakeTopics: ['grammar']
            }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
    });

    // 12. zero-level safety
    it('12. should handle zero-level user progression correctly with lower thresholds', () => {
        const state = createMockState({
            currentLevel: 'ZERO',
            completedLessonsCount: 1,
            masteryProfile: {
                skills: {
                    grammar: { score: 45 },
                    vocabulary: { score: 45 }
                }
            }
        });
        const prog = LearningPathEngine.evalProgression(state, true);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('A1');
    });

    // 13. English/Japanese isolation
    it('13. should handle Japanese progression isolated from English requirements', () => {
        const state = createMockState({
            primaryLanguage: 'ja',
            currentLevel: 'N5',
            masteryProfile: {
                skills: {
                    kanji: { score: 75 },
                    grammar: { score: 75 }
                }
            }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
        expect(prog.nextLevel).toBe('N4');
    });

    // 14. General English goal
    it('14. should use CEFR sequence for General English target goals', () => {
        const state = createMockState({
            currentLevel: 'B2',
            targetGoal: 'General English'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBe('C1');
    });

    // 15. IELTS goal
    it('15. should transition target sequence to IELTS Foundation when goal is IELTS', () => {
        const state = createMockState({
            currentLevel: 'C1',
            targetGoal: 'IELTS Preparation'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBe('IELTS Foundation');
    });

    // 16. IELTS Foundation transition
    it('16. should suggest correct sequence next levels under IELTS track', () => {
        const state = createMockState({
            currentLevel: 'IELTS Foundation',
            targetGoal: 'IELTS 7.0+'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBe('IELTS 5.5');
    });

    // 17. IELTS 5.5 readiness
    it('17. should resolve IELTS 5.5 progression target correctly', () => {
        const state = createMockState({
            currentLevel: 'IELTS 5.5',
            targetGoal: 'IELTS 7.5+'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBe('IELTS 6.0');
    });

    // 18. IELTS 6.5 readiness
    it('18. should resolve IELTS 6.5 progression target correctly', () => {
        const state = createMockState({
            currentLevel: 'IELTS 6.5',
            targetGoal: 'IELTS 7.5+'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBe('IELTS 7.0');
    });

    // 19. target level higher than current
    it('19. should allow promotion if target level is higher than current level', () => {
        const state = createMockState({
            currentLevel: 'A1',
            targetLevel: 'B2'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(true);
    });

    // 20. already at target
    it('20. should handle edge case when user is at maximum level of the sequence', () => {
        const state = createMockState({
            currentLevel: 'IELTS 7.5+',
            targetGoal: 'IELTS 7.5+'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBeNull();
        expect(prog.isReadyForPromotion).toBe(false);
    });

    // 21. missing curriculum lesson
    it('21. should compute correct progression even when curriculum index is not fully resolved', () => {
        const state = createMockState({
            currentLevel: 'InvalidLevel'
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.nextLevel).toBeNull();
        expect(prog.isReadyForPromotion).toBe(false);
    });

    // 22. missing mastery data
    it('22. should fallback to zero average score when masteryProfile skills is empty', () => {
        const state = createMockState({
            completedLessonsCount: 0,
            masteryProfile: { skills: {} }
        });
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.isReadyForPromotion).toBe(false);
        expect(prog.readinessScore).toBe(0);
    });

    // 23. missing diagnostic data
    it('23. should gracefully default properties without throwing exception on missing fields', () => {
        const state = {
            primaryLanguage: 'en',
            currentLevel: 'A1'
        };
        const prog = LearningPathEngine.evalProgression(state, false);
        expect(prog.currentLevel).toBe('A1');
        expect(prog.isReadyForPromotion).toBe(false);
    });

    // 24. no profile fallback
    it('24. should handle totally empty input state gracefully', () => {
        const prog = LearningPathEngine.evalProgression({}, false);
        expect(prog.currentLevel).toBeUndefined();
        expect(prog.isReadyForPromotion).toBe(false);
    });

    // 25. deterministic repeated calls
    it('25. should generate identical progression outputs for identical inputs', () => {
        const state = createMockState();
        const firstCall = LearningPathEngine.evalProgression(state, false);
        const secondCall = LearningPathEngine.evalProgression(state, false);
        expect(firstCall).toEqual(secondCall);
    });
});
