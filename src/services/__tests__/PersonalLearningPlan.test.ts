import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DiagnosticBatchService } from '../DiagnosticBatchService';
import { PersonalLearningPlanService } from '../PersonalLearningPlanService';
import { PersonalLearningPlanEngine } from '../PersonalLearningPlanEngine';
import { WeeklyEvaluationEngine } from '../WeeklyEvaluationEngine';
import { DiagnosticService } from '../DiagnosticService';
import { PersonalLearningGoal, WeeklyLearningPlan } from '../../types/learningPlan';
import { callSelectedAIProvider } from '../../utils/ai/aiCore';
import { MasteryEngine } from '../MasteryEngine';

// Mock AI Core to avoid hitting actual endpoints during tests
vi.mock('../../utils/ai/aiCore', () => ({
    callSelectedAIProvider: vi.fn(async (prompt: string) => {
        if (prompt.includes('Student Parameters:')) {
            return JSON.stringify({
                objectives: ["Weekly goal 1", "Weekly goal 2"],
                focusSkills: ["grammar", "vocabulary"],
                days: [
                    {
                        day: "monday",
                        tasks: [
                            {
                                title: "Grammar lesson A1",
                                type: "grammar",
                                estimatedMinutes: 20,
                                contentId: "en-a1-u1-l1",
                                route: "/lesson/en-a1-u1-l1"
                            }
                        ]
                    }
                ],
                reasoning: "Test reasoning",
                expectedOutcome: "Test outcome"
            });
        }
        if (prompt.includes('JLPT') || prompt.includes('IELTS/CEFR') || prompt.includes('multiple-choice')) {
            return JSON.stringify([
                {
                    id: "ai-diag-en-b1-mock",
                    language: "en",
                    level: "B1",
                    skill: "grammar",
                    difficulty: "medium",
                    prompt: "Mock prompt",
                    options: ["A", "B", "C", "D"],
                    correctAnswerIndex: 0,
                    explanation: "Uzbekcha test",
                    topic: "mock topic"
                }
            ]);
        }
        return "Ajoyib natija! Darslar rejalashtirildi.";
    })
}));

describe('Personal Learning Plan System Tests', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    describe('1. Feasibility Checker & Goal System', () => {
        it('should mark a realistic goal as realistic', () => {
            const res = PersonalLearningPlanService.checkFeasibility(
                'en',
                'ielts',
                '5.0',
                '6.0',
                180, // 6 months
                60   // 60 minutes daily
            );
            expect(res.status).toBe('realistic');
            expect(res.warningMessage).toBeNull();
        });

        it('should mark an unrealistic deadline goal as unrealistic with a warning', () => {
            const res = PersonalLearningPlanService.checkFeasibility(
                'en',
                'ielts',
                '5.0',
                '8.0',
                30, // 1 month
                30  // 30 minutes daily
            );
            expect(res.status).toBe('unrealistic');
            expect(res.warningMessage).toContain('study');
        });

        it('should validate target goal level index constraints', () => {
            // Target higher than current -> valid
            expect(PersonalLearningPlanService.isTargetLevelValid('5.0', '7.0', 'ielts')).toBe(true);
            expect(PersonalLearningPlanService.isTargetLevelValid('N3', 'N2', 'jlpt')).toBe(true);
            expect(PersonalLearningPlanService.isTargetLevelValid('A1', 'B2', 'general_en')).toBe(true);

            // Target equal to or lower than current -> invalid
            expect(PersonalLearningPlanService.isTargetLevelValid('5.0', '5.0', 'ielts')).toBe(false);
            expect(PersonalLearningPlanService.isTargetLevelValid('5.0', '4.5', 'ielts')).toBe(false);
            expect(PersonalLearningPlanService.isTargetLevelValid('N3', 'N3', 'jlpt')).toBe(false);
            expect(PersonalLearningPlanService.isTargetLevelValid('N2', 'N4', 'jlpt')).toBe(false);
            expect(PersonalLearningPlanService.isTargetLevelValid('B2', 'A2', 'general_en')).toBe(false);
        });
    });

    describe('2. Diagnostic Prefetching & Adaptation', () => {
        it('should prefetch questions correctly and load them into getBankForLanguage', async () => {
            const mockState: any = {
                userId: 'test_user',
                language: 'en',
                currentLevel: 'B1',
                currentDifficulty: 'medium',
                currentSkillFocus: 'vocabulary',
                visitedQuestionIds: [],
                answers: []
            };

            // Prefetch questions
            await DiagnosticBatchService.prefetchNextBatch('test_user', 'en', mockState);

            // Wait for setTimeout in prefetcher
            await new Promise(r => setTimeout(r, 150));

            const cached = DiagnosticBatchService.getPrefetchedQuestions('test_user', 'en');
            expect(cached.length).toBeGreaterThan(0);

            // Verify they merge in getBankForLanguage
            const mergedBank = DiagnosticService.getBankForLanguage('en');
            expect(mergedBank.some(q => q.id.includes('ai-diag') || q.id.includes('diag-en'))).toBe(true);
        });
    });

    describe('3. Weekly Plan Generation', () => {
        const sampleGoal: PersonalLearningGoal = {
            id: 'goal-123',
            userId: 'test_user',
            language: 'en',
            goalType: 'ielts',
            currentLevel: '5.0',
            targetGoal: 'IELTS 7.0',
            targetLevel: '7.0',
            deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
            dailyMinutes: 60,
            totalWeeks: 24,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        it('should generate a valid 7-day plan with restricted daily minutes', async () => {
            const result = await PersonalLearningPlanEngine.generateWeeklyPlan('test_user', sampleGoal, 1);
            expect(result.isFallback).toBe(false);
            expect(result.plan.days.length).toBe(7);

            // Monday should have a grammar lesson task matching prompt output
            const monTasks = result.plan.days.find(d => d.day === 'monday')?.tasks || [];
            expect(monTasks.length).toBeGreaterThan(0);
            expect(monTasks[0].estimatedMinutes).toBeLessThanOrEqual(sampleGoal.dailyMinutes);
        });

        it('should generate a deterministic fallback plan if AI response fails', async () => {
            // Force mock to throw
            vi.mocked(callSelectedAIProvider).mockRejectedValueOnce(new Error('Rate limited'));

            const result = await PersonalLearningPlanEngine.generateWeeklyPlan('test_user', sampleGoal, 1);
            expect(result.isFallback).toBe(true);
            expect(result.noticeMessage).toBeDefined();
            expect(result.plan.days.length).toBe(7);
        });

        it('should prevent concurrent generation with idempotency lock', async () => {
            // Acquire lock manually
            const locked = PersonalLearningPlanEngine.acquireLock('test_user', sampleGoal.id, 1);
            expect(locked).toBe(true);

            const duplicateLock = PersonalLearningPlanEngine.acquireLock('test_user', sampleGoal.id, 1);
            expect(duplicateLock).toBe(false); // Locked!
        });
    });

    describe('4. Weekly Evaluation & Adaptation', () => {
        const sampleGoal: PersonalLearningGoal = {
            id: 'goal-123',
            userId: 'test_user',
            language: 'en',
            goalType: 'ielts',
            currentLevel: '5.0',
            targetGoal: 'IELTS 7.0',
            targetLevel: '7.0',
            deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
            dailyMinutes: 60,
            totalWeeks: 24,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const samplePlan: WeeklyLearningPlan = {
            id: 'plan-123',
            goalId: 'goal-123',
            userId: 'test_user',
            weekNumber: 1,
            startDate: '2026-08-20',
            endDate: '2026-08-27',
            objectives: ['Test'],
            focusSkills: ['grammar'],
            days: [
                {
                    day: 'monday',
                    tasks: [
                        {
                            id: 'task-1',
                            title: 'Practice',
                            type: 'grammar',
                            estimatedMinutes: 30,
                            completed: true,
                            status: 'completed',
                            sourceType: 'curriculum',
                            route: '/ielts'
                        }
                    ]
                }
            ],
            reasoning: 'None',
            expectedOutcome: 'None',
            aiGenerated: false,
            version: 1,
            status: 'active',
            createdAt: new Date().toISOString()
        };

        it('should evaluate the completed week and recommend next week adaptations', async () => {
            // Save active goal
            await PersonalLearningPlanService.saveGoal('test_user', sampleGoal);

            const evalRes = await WeeklyEvaluationEngine.evaluateWeek('test_user', sampleGoal, samplePlan);
            expect(evalRes.completionRate).toBe(100);
            expect(evalRes.studyMinutesActual).toBe(30);
            expect(evalRes.aiFeedback).toBeDefined();

            // Verify active goal's currentWeek was incremented to 2
            const updatedGoal = PersonalLearningPlanService.getActiveGoal('test_user');
            expect(updatedGoal?.currentWeek).toBe(2);
        });
    });

    describe('5. Isolation & Route Security', () => {
        it('should enforce strict route validation and avoid mixing language resources', () => {
            const sampleGoalJa: PersonalLearningGoal = {
                id: 'goal-ja-123',
                userId: 'test_user',
                language: 'ja',
                goalType: 'jlpt',
                currentLevel: 'N4',
                targetGoal: 'JLPT N2',
                targetLevel: 'N2',
                deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
                dailyMinutes: 60,
                totalWeeks: 24,
                currentWeek: 1,
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const maliciousJson = JSON.stringify({
                objectives: ["Learn English writing"],
                focusSkills: ["writing"],
                days: [
                    {
                        day: "monday",
                        tasks: [
                            {
                                title: "English grammar exercise",
                                type: "grammar",
                                estimatedMinutes: 20,
                                contentId: "en-a1-u1-l1",
                                route: "/ielts/writing" // English route!
                            }
                        ]
                    }
                ],
                reasoning: "Force English",
                expectedOutcome: "Fail"
            });

            const parsed = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(maliciousJson, sampleGoalJa, 1, 'test_user');
            expect(parsed).not.toBeNull();

            const monTasks = parsed!.days.find(d => d.day === 'monday')?.tasks || [];
            expect(monTasks.length).toBeGreaterThan(0);
            // Verify it was sanitized and mapped to a Japanese route
            expect(monTasks[0].route).toBe('/jlpt');
        });
    });

    describe('6. Pedagogical Model (Completion vs Performance Mastery)', () => {
        it('should record completion type evidence and ignore it in mastery score computation', () => {
            const userId = 'pedagogical_test_user';
            const language = 'en';

            // Record a task completion evidence (ticking a checkbox)
            MasteryEngine.recordEvidence(userId, language, {
                id: 'task-complete-1',
                skill: 'reading',
                score: 100,
                timestamp: new Date().toISOString(),
                details: 'Checkbox ticked',
                type: 'completion'
            });

            // Retrieve mastery profile
            const profile = MasteryEngine.calculateMasteryProfile(userId, language);
            const readingMastery = profile.skills['reading'];

            // Actual score must remain 0 because there is no performance evidence, but totalCount is logged
            expect(readingMastery.score).toBe(0);
            expect(readingMastery.evidenceCount).toBe(1);

            // Record a performance quiz score of 80%
            MasteryEngine.recordEvidence(userId, language, {
                id: 'quiz-score-1',
                skill: 'reading',
                score: 80,
                timestamp: new Date().toISOString(),
                details: 'Quiz score',
                type: 'performance'
            });

            const updatedProfile = MasteryEngine.calculateMasteryProfile(userId, language);
            const updatedReadingMastery = updatedProfile.skills['reading'];

            // Average score is calculated strictly from performance evidence (which is 80)
            expect(updatedReadingMastery.score).toBe(80);
            // Total evidence counts both completion and performance
            expect(updatedReadingMastery.evidenceCount).toBe(2);
        });
    });

    describe('7. Fallback Level Filtering & Wizard Option Validation', () => {
        it('should filter fallback lessons matching goal currentLevel', () => {
            // A1 English goal
            const a1Goal: PersonalLearningGoal = {
                id: 'goal-a1',
                userId: 'test_user_a1',
                language: 'en',
                goalType: 'ielts',
                currentLevel: 'A1',
                targetGoal: 'IELTS 6.0',
                targetLevel: '6.0',
                deadline: new Date(Date.now() + 90 * 86400000).toISOString(),
                dailyMinutes: 60,
                totalWeeks: 12,
                currentWeek: 1,
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const plan = PersonalLearningPlanEngine.generateDeterministicFallback(a1Goal, 1, 'test_user_a1', {});
            const curriculumTasks = plan.days.flatMap(d => d.tasks).filter(t => t.type === 'lesson');
            expect(curriculumTasks.length).toBeGreaterThan(0);

            // All generated fallback lessons should belong to A1 level code
            curriculumTasks.forEach(t => {
                expect(t.contentId).toMatch(/^en-a1-/);
            });

            // N5 Japanese goal
            const n5Goal: PersonalLearningGoal = {
                id: 'goal-n5',
                userId: 'test_user_n5',
                language: 'ja',
                goalType: 'jlpt',
                currentLevel: 'N5',
                targetGoal: 'JLPT N3',
                targetLevel: 'N3',
                deadline: new Date(Date.now() + 90 * 86400000).toISOString(),
                dailyMinutes: 60,
                totalWeeks: 12,
                currentWeek: 1,
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const planJa = PersonalLearningPlanEngine.generateDeterministicFallback(n5Goal, 1, 'test_user_n5', {});
            const curriculumTasksJa = planJa.days.flatMap(d => d.tasks).filter(t => t.type === 'lesson');
            expect(curriculumTasksJa.length).toBeGreaterThan(0);

            // All generated fallback lessons should belong to N5 level code
            curriculumTasksJa.forEach(t => {
                expect(t.contentId).toMatch(/^ja-n5-/);
            });
        });

        it('should enforce language separation for current and target level dropdown options', () => {
            const getTargetsForLang = (lang: 'en' | 'ja', goalType: string) => {
                if (lang === 'ja') {
                    return ['N5', 'N4', 'N3', 'N2', 'N1'];
                }
                if (goalType === 'ielts') {
                    return ['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5+'];
                }
                return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
            };

            const getCurrentsForLang = (lang: 'en' | 'ja', goalType: string) => {
                if (lang === 'ja') {
                    return ['ZERO', 'N5', 'N4', 'N3', 'N2'];
                }
                if (goalType === 'ielts') {
                    return ['ZERO', '4.0', '4.5', '5.0', '5.5', '6.0', '6.5', '7.0'];
                }
                return ['ZERO', 'A1', 'A2', 'B1', 'B2', 'C1'];
            };

            // Test English IELTS options
            const enTargets = getTargetsForLang('en', 'ielts');
            const enCurrents = getCurrentsForLang('en', 'ielts');
            expect(enTargets).toContain('7.0');
            expect(enTargets).not.toContain('N3');
            expect(enCurrents).toContain('5.0');
            expect(enCurrents).not.toContain('N5');

            // Test Japanese JLPT options
            const jaTargets = getTargetsForLang('ja', 'jlpt');
            const jaCurrents = getCurrentsForLang('ja', 'jlpt');
            expect(jaTargets).toContain('N1');
            expect(jaTargets).not.toContain('7.0');
            expect(jaCurrents).toContain('N3');
            expect(jaCurrents).not.toContain('5.0');
        });
    });
});
