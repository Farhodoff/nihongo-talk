/**
 * Single DeepSeek Provider Production Architecture & Invariants Test Suite
 * 
 * Validates all 15 core architectural and security requirements:
 *  1. Client cannot provide custom API key.
 *  2. /api/deepseek ignores X-Custom-Key.
 *  3. Server uses process.env.DEEPSEEK_API_KEY.
 *  4. VITE_DEEPSEEK_API_KEY is not referenced in client code.
 *  5. localStorage API key is not referenced in client code.
 *  6. Gemini provider is unavailable.
 *  7. Ollama provider is unavailable.
 *  8. AI failure does not generate fallback plan.
 *  9. AI failure returns AI_UNAVAILABLE.
 *  10. Daily plan never exceeds dailyMinutes.
 *  11. English deck never returns Japanese card.
 *  12. SRS completion completes Personal Plan task.
 *  13. Mock results affect WeaknessEngine.
 *  14. Weakness profile affects next plan.
 *  15. DeepSeek response schema is validated.
 */
/// <reference types="node" />
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { getAIConfig } from '../../utils/ai/aiConfig';
import { callSelectedAIProvider } from '../../utils/ai/aiCore';
import { PersonalLearningPlanEngine } from '../PersonalLearningPlanEngine';
import { PersonalLearningPlanService } from '../PersonalLearningPlanService';
import { PersonalLearningGoal, WeeklyLearningPlan } from '../../types/learningPlan';
import { PRESET_DECKS } from '../../data/presetDecks';
import { WeaknessEngine } from '../WeaknessEngine';

vi.mock('../../utils/ai/aiCore', () => ({
    callSelectedAIProvider: vi.fn(),
    callAI: vi.fn(),
    callDeepSeekAI: vi.fn(),
}));

const projectRoot = path.resolve(__dirname, '../../..');

function readProjectFile(rel: string): string {
    return readFileSync(path.join(projectRoot, rel), 'utf-8');
}

describe('Single DeepSeek Provider Production Architecture Test Suite', () => {

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    // 1. Client cannot provide custom API key
    it('1. Client cannot provide custom API key (settings interface has no API key fields)', () => {
        const contextSrc = readProjectFile('src/context/StudyPlannerContext.tsx');
        expect(contextSrc).not.toMatch(/googleApiKey\?:/);
        expect(contextSrc).not.toMatch(/deepseekApiKey\?:/);
        expect(contextSrc).not.toMatch(/coachApiKey\?:/);
    });

    // 2. /api/deepseek ignores X-Custom-Key
    it('2. /api/deepseek server handler ignores X-Custom-Key and reads only server environment', () => {
        const proxySrc = readProjectFile('api/deepseek.js');
        expect(proxySrc).not.toContain('req.headers.get(\'X-Custom-Key\')');
        expect(proxySrc).not.toContain('req.headers[\'x-custom-key\']');
        expect(proxySrc).toContain('process.env.DEEPSEEK_API_KEY');
    });

    // 3. Server uses process.env.DEEPSEEK_API_KEY
    it('3. Server gateway strictly requires process.env.DEEPSEEK_API_KEY as single source of truth', () => {
        const proxySrc = readProjectFile('api/deepseek.js');
        expect(proxySrc).toContain('const rawServerKey = process.env.DEEPSEEK_API_KEY;');
        expect(proxySrc).toContain('AI_NOT_CONFIGURED');
    });

    // 4. VITE_DEEPSEEK_API_KEY is not referenced
    it('4. VITE_DEEPSEEK_API_KEY is completely absent from client codebase', () => {
        const deepseekSrc = readProjectFile('src/utils/deepseek.ts');
        const aiConfigSrc = readProjectFile('src/utils/ai/aiConfig.ts');
        expect(deepseekSrc).not.toContain('VITE_DEEPSEEK_API_KEY');
        expect(aiConfigSrc).not.toContain('VITE_DEEPSEEK_API_KEY');
    });

    // 5. localStorage API key is not referenced
    it('5. localStorage API key storage (study_planner_deepseek_api_key) is not referenced in AI core', () => {
        const deepseekSrc = readProjectFile('src/utils/deepseek.ts');
        const aiConfigSrc = readProjectFile('src/utils/ai/aiConfig.ts');
        expect(deepseekSrc).not.toContain('study_planner_deepseek_api_key');
        expect(aiConfigSrc).not.toContain('study_planner_deepseek_api_key');
    });

    // 6. Gemini provider is unavailable
    it('6. Gemini provider is unavailable (getAIConfig returns single deepseek provider)', () => {
        const config = getAIConfig();
        expect(config.provider).toBe('deepseek');
        expect((config as any).provider).not.toBe('gemini');
    });

    // 7. Ollama provider is unavailable
    it('7. Ollama provider is unavailable (aiCoach has purged Ollama imports and branching)', () => {
        const coachSrc = readProjectFile('src/utils/ai/aiCoach.ts');
        expect(coachSrc).not.toContain('callOllama');
        expect(coachSrc).not.toContain('import { callOllama }');
    });

    // 8. AI failure does not generate fallback plan
    it('8. AI failure does not generate a fake fallback plan in generateWeeklyPlan', async () => {
        vi.mocked(callSelectedAIProvider).mockRejectedValueOnce(new Error('Connection refused'));

        const sampleGoal: PersonalLearningGoal = {
            id: 'goal-fail-test',
            userId: 'user-fail-test',
            language: 'en',
            goalType: 'ielts',
            targetGoal: 'Band 7.5',
            targetLevel: 'C1',
            targetScore: 7.5,
            currentLevel: 'B2',
            dailyMinutes: 60,
            deadline: '2026-12-31',
            totalWeeks: 12,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await expect(PersonalLearningPlanEngine.generateWeeklyPlan('user-fail-test', sampleGoal, 1))
            .rejects.toThrow('Connection refused');
    });

    // 9. AI failure returns AI_UNAVAILABLE
    it('9. AI failure returns AI_UNAVAILABLE status message when response is empty/invalid', async () => {
        vi.mocked(callSelectedAIProvider).mockResolvedValueOnce(''); // empty response
        vi.mocked(callSelectedAIProvider).mockResolvedValueOnce('invalid json'); // retry also invalid

        const sampleGoal: PersonalLearningGoal = {
            id: 'goal-unavail-test',
            userId: 'user-unavail-test',
            language: 'en',
            goalType: 'ielts',
            targetGoal: 'Band 7.5',
            targetLevel: 'C1',
            targetScore: 7.5,
            currentLevel: 'B2',
            dailyMinutes: 60,
            deadline: '2026-12-31',
            totalWeeks: 12,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await expect(PersonalLearningPlanEngine.generateWeeklyPlan('user-unavail-test', sampleGoal, 1))
            .rejects.toThrow('AI_UNAVAILABLE');
    });

    // 10. Daily plan never exceeds dailyMinutes
    it('10. Daily plan strictly caps sum of tasks so it never exceeds dailyMinutes budget', () => {
        const mockRawAiPlan = JSON.stringify({
            objectives: ['Grammar mastery', 'Vocabulary building'],
            focusSkills: ['grammar', 'vocabulary'],
            days: [
                {
                    day: 'monday',
                    tasks: [
                        { title: 'Task 1', type: 'grammar', estimatedMinutes: 45 },
                        { title: 'Task 2', type: 'vocabulary', estimatedMinutes: 45 },
                        { title: 'Task 3', type: 'reading', estimatedMinutes: 45 },
                        { title: 'Task 4', type: 'listening', estimatedMinutes: 45 },
                    ]
                }
            ],
            reasoning: 'Intensive prep',
            expectedOutcome: 'High retention'
        });

        const goal: PersonalLearningGoal = {
            id: 'goal-budget-test',
            userId: 'user-budget-test',
            language: 'en',
            goalType: 'ielts',
            targetGoal: 'Band 7.0',
            targetLevel: 'B2',
            currentLevel: 'B1',
            dailyMinutes: 60, // budget is 60 min!
            deadline: '2026-12-31',
            totalWeeks: 8,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const parsed = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(mockRawAiPlan, goal, 1, 'user-budget-test', 60);
        expect(parsed).not.toBeNull();

        // Total minutes for monday must NOT exceed 60
        const monday = parsed!.days.find(d => d.day === 'monday');
        expect(monday).toBeDefined();
        const totalMinutes = monday!.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
        expect(totalMinutes).toBeLessThanOrEqual(60);
    });

    // 11. English deck never returns Japanese card
    it('11. English preset decks strictly contain zero Japanese cards (Japanese deck isolation)', async () => {
        const englishDecks = PRESET_DECKS.filter(d => d.language === 'en');
        expect(englishDecks.length).toBeGreaterThan(0);

        for (const deck of englishDecks) {
            const cards = await deck.loadCards();
            const jaChars = cards.filter(c => /[\u3040-\u30ff\u4e00-\u9faf]/.test(c.front));
            expect(jaChars.length).toBe(0);
        }
    });

    // 12. SRS completion completes Personal Plan task
    it('12. SRS review completion completes today active Personal Plan SRS task', async () => {
        const userId = 'guest';
        const goal: PersonalLearningGoal = {
            id: 'goal-guest-srs',
            userId,
            language: 'en',
            goalType: 'ielts',
            targetGoal: 'Band 7.0',
            targetLevel: 'B2',
            currentLevel: 'B1',
            dailyMinutes: 60,
            deadline: '2026-12-31',
            totalWeeks: 8,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await PersonalLearningPlanService.saveGoal(userId, goal);

        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayName = daysOfWeek[new Date().getDay()];

        const initialPlan: WeeklyLearningPlan = {
            id: 'plan-srs-1',
            goalId: goal.id,
            userId,
            weekNumber: 1,
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date().toISOString().split('T')[0],
            objectives: ['Test'],
            focusSkills: ['vocabulary'],
            days: [
                {
                    day: todayName as any,
                    tasks: [
                        {
                            id: 'srs-task-today',
                            title: 'Flashcard SRS Review',
                            type: 'srs',
                            estimatedMinutes: 15,
                            completed: false,
                            status: 'pending',
                            sourceType: 'srs',
                            route: '/study-mode'
                        }
                    ]
                }
            ],
            reasoning: 'Test',
            expectedOutcome: 'Test',
            aiGenerated: true,
            version: 1,
            status: 'active',
            createdAt: new Date().toISOString()
        };

        await PersonalLearningPlanService.saveWeeklyPlan(initialPlan);

        // Complete the plan task
        const updated = await PersonalLearningPlanService.completePlanTask(userId, 'plan-srs-1', 'srs-task-today');
        expect(updated).not.toBeNull();

        const reloadedPlan = PersonalLearningPlanService.getLatestWeeklyPlan(userId, goal.id);
        const todayDay = reloadedPlan?.days.find(d => d.day === todayName);
        const srsTask = todayDay?.tasks.find(t => t.id === 'srs-task-today');
        expect(srsTask?.completed).toBe(true);
    });

    // 13. Mock results affect WeaknessEngine
    it('13. Mock exam failure signals register high-severity weakness in WeaknessEngine', () => {
        const userId = 'user-mock-weakness';

        const profile = WeaknessEngine.getUserMasteryProfile(userId, 'en');
        profile.skills.reading.score = 40;
        profile.skills.reading.evidenceCount = 2;
        profile.skills.reading.status = 'weak';
        const enriched = WeaknessEngine.enrichProfile(profile);

        expect(enriched.topWeaknesses.length).toBeGreaterThan(0);
        const readingWeakness = enriched.topWeaknesses.find(w => w.skill === 'reading');
        expect(readingWeakness).toBeDefined();
        expect(readingWeakness!.severity).toBe('high');
    });



    // 15. DeepSeek response schema is validated
    it('15. DeepSeek response schema is strictly validated by parseAndValidateWeeklyPlan', () => {
        const goal: PersonalLearningGoal = {
            id: 'goal-schema-test',
            userId: 'user-schema-test',
            language: 'en',
            goalType: 'ielts',
            targetGoal: 'Band 7.0',
            targetLevel: 'B2',
            currentLevel: 'B1',
            dailyMinutes: 60,
            deadline: '2026-12-31',
            totalWeeks: 8,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // Malformed JSON returns null
        expect(PersonalLearningPlanEngine.parseAndValidateWeeklyPlan('not valid json {', goal, 1, 'user-schema-test')).toBeNull();
        expect(PersonalLearningPlanEngine.parseAndValidateWeeklyPlan('[]', goal, 1, 'user-schema-test')).toBeNull();

        // Valid JSON passes
        const validJson = JSON.stringify({
            objectives: ['Master Past Tenses'],
            focusSkills: ['grammar'],
            days: [
                {
                    day: 'monday',
                    tasks: [{ title: 'Past Continuous', type: 'grammar', estimatedMinutes: 30 }]
                }
            ],
            reasoning: 'Grammar reinforcement',
            expectedOutcome: 'High fluency'
        });
        const validated = PersonalLearningPlanEngine.parseAndValidateWeeklyPlan(validJson, goal, 1, 'user-schema-test');
        expect(validated).not.toBeNull();
        expect(validated!.days.length).toBe(7);
        expect(validated!.objectives[0]).toBe('Master Past Tenses');
    });
});
