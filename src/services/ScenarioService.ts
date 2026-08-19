import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { DEFAULT_SCENARIOS } from '../data/defaultScenarios';
import { supabase } from '../lib/supabase';

const CUSTOM_SCENARIOS_KEY = 'kaizen_custom_scenarios';
const SCENARIO_HISTORY_KEY = 'kaizen_scenario_history';

export class ScenarioService {
    // 1. Get all scenarios (Default + Custom Admin Scenarios)
    static async getScenarios(): Promise<ConversationScenario[]> {
        let customScenarios: ConversationScenario[] = [];
        try {
            const local = localStorage.getItem(CUSTOM_SCENARIOS_KEY);
            if (local) {
                customScenarios = JSON.parse(local);
            }
        } catch (e) {
            console.error('Error reading custom scenarios from local storage:', e);
        }

        // Try syncing from Supabase if table exists
        try {
            const { data, error } = await supabase.from('scenarios').select('*');
            if (!error && data && data.length > 0) {
                const dbScenarios: ConversationScenario[] = data.map(item => ({
                    id: item.id,
                    title_ja: item.title_ja,
                    title_uz: item.title_uz,
                    emoji: item.emoji || '🗣️',
                    difficulty: item.difficulty || 'N4',
                    category: item.category || 'daily',
                    description_uz: item.description_uz || '',
                    opening_line_ja: item.opening_line_ja,
                    context_prompt: item.context_prompt,
                    key_phrases: Array.isArray(item.key_phrases) ? item.key_phrases : [],
                    is_custom: true,
                    created_at: item.created_at
                }));

                // Merge unique custom scenarios
                const merged = [...customScenarios];
                for (const dbS of dbScenarios) {
                    if (!merged.some(m => m.id === dbS.id)) {
                        merged.push(dbS);
                    }
                }
                customScenarios = merged;
            }
        } catch (e) {
            // Table might not exist yet; gracefully fallback
        }

        return [...DEFAULT_SCENARIOS, ...customScenarios];
    }

    // 2. Add or Update Custom Scenario (Admin)
    static async saveScenario(scenario: ConversationScenario): Promise<void> {
        let customScenarios: ConversationScenario[] = [];
        try {
            const local = localStorage.getItem(CUSTOM_SCENARIOS_KEY);
            if (local) {
                customScenarios = JSON.parse(local);
            }
        } catch (e) {
            console.error(e);
        }

        const index = customScenarios.findIndex(s => s.id === scenario.id);
        if (index >= 0) {
            customScenarios[index] = scenario;
        } else {
            customScenarios.push(scenario);
        }

        localStorage.setItem(CUSTOM_SCENARIOS_KEY, JSON.stringify(customScenarios));

        // Sync to Supabase table asynchronously
        try {
            await supabase.from('scenarios').upsert({
                id: scenario.id,
                title_ja: scenario.title_ja,
                title_uz: scenario.title_uz,
                emoji: scenario.emoji,
                difficulty: scenario.difficulty,
                category: scenario.category,
                description_uz: scenario.description_uz,
                opening_line_ja: scenario.opening_line_ja,
                context_prompt: scenario.context_prompt,
                key_phrases: scenario.key_phrases,
                updated_at: new Date().toISOString()
            });
        } catch (e) {
            console.warn('Supabase scenario sync omitted:', e);
        }
    }

    // 3. Delete Custom Scenario (Admin)
    static async deleteScenario(id: string): Promise<void> {
        let customScenarios: ConversationScenario[] = [];
        try {
            const local = localStorage.getItem(CUSTOM_SCENARIOS_KEY);
            if (local) {
                customScenarios = JSON.parse(local);
            }
        } catch (e) {
            console.error(e);
        }

        customScenarios = customScenarios.filter(s => s.id !== id);
        localStorage.setItem(CUSTOM_SCENARIOS_KEY, JSON.stringify(customScenarios));

        try {
            await supabase.from('scenarios').delete().eq('id', id);
        } catch (e) {
            console.warn('Supabase scenario delete error:', e);
        }
    }

    // 4. Save Session Evaluation Result
    static async saveSessionResult(result: ScenarioSessionResult): Promise<void> {
        let history: ScenarioSessionResult[] = [];
        try {
            const local = localStorage.getItem(SCENARIO_HISTORY_KEY);
            if (local) {
                history = JSON.parse(local);
            }
        } catch (e) {
            console.error(e);
        }

        history.unshift(result);
        localStorage.setItem(SCENARIO_HISTORY_KEY, JSON.stringify(history.slice(0, 50)));

        // Sync to Supabase speaking_sessions & coach_sessions tables
        try {
            const { data: userData } = await supabase.auth.getUser();
            const userId = userData?.user?.id || null;
            const userEmail = userData?.user?.email || 'guest@kaizen.ai';

            // 1. Primary insertion into speaking_sessions (with transcript)
            await supabase.from('speaking_sessions').insert({
                user_id: userId,
                user_email: userEmail,
                scenario_id: result.scenario_id,
                persona_title: result.scenario_title,
                fluency_score: result.fluency_score,
                vocabulary_score: result.vocabulary_score,
                grammar_score: result.grammar_score,
                pronunciation_score: result.pronunciation_score,
                overall_score: result.overall_score,
                duration_seconds: result.duration_seconds,
                feedback: result.ai_feedback,
                transcript: result.transcript || [],
                created_at: result.created_at
            });

            // 2. Legacy table fallback insertion
            if (userId) {
                await supabase.from('coach_sessions').insert({
                    user_id: userId,
                    persona_title: result.scenario_title,
                    fluency_score: result.fluency_score,
                    vocabulary_score: result.vocabulary_score,
                    grammar_score: result.grammar_score,
                    pronunciation_score: result.pronunciation_score,
                    duration_seconds: result.duration_seconds,
                    feedback: result.ai_feedback,
                    created_at: result.created_at
                });
            }
        } catch (e) {
            console.warn('Supabase session history insert notice:', e);
        }
    }

    // 5. Get Learning History
    static async getScenarioHistory(): Promise<ScenarioSessionResult[]> {
        let history: ScenarioSessionResult[] = [];
        try {
            const local = localStorage.getItem(SCENARIO_HISTORY_KEY);
            if (local) {
                history = JSON.parse(local);
            }
        } catch (e) {
            console.error(e);
        }

        try {
            const { data: userData } = await supabase.auth.getUser();
            const userId = userData?.user?.id;
            if (userId) {
                const { data, error } = await supabase
                    .from('speaking_sessions')
                    .select('*')
                    .eq('user_id', userId)
                    .order('created_at', { ascending: false })
                    .limit(50);
                if (!error && data && data.length > 0) {
                    const dbHistory: ScenarioSessionResult[] = data.map(item => ({
                        id: item.id || `sc_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
                        scenario_id: item.scenario_id || 'custom',
                        scenario_title: item.persona_title || item.scenario_title || 'Ssenariy',
                        duration_seconds: item.duration_seconds || 0,
                        overall_score: item.overall_score || 0,
                        fluency_score: item.fluency_score || 0,
                        vocabulary_score: item.vocabulary_score || 0,
                        grammar_score: item.grammar_score || 0,
                        pronunciation_score: item.pronunciation_score || 0,
                        ai_feedback: item.feedback || '',
                        key_phrases_used: Array.isArray(item.key_phrases_used) ? item.key_phrases_used : [],
                        key_phrases_missed: Array.isArray(item.key_phrases_missed) ? item.key_phrases_missed : [],
                        transcript: item.transcript || [],
                        created_at: item.created_at
                    }));
                    const dbTimes = new Set(dbHistory.map(h => h.created_at));
                    const merged = [...dbHistory, ...history.filter(h => !dbTimes.has(h.created_at))].slice(0, 50);
                    localStorage.setItem(SCENARIO_HISTORY_KEY, JSON.stringify(merged));
                    return merged;
                }
            }
        } catch (e) {
            console.warn('Scenario history fetch from DB notice:', e);
        }

        return history;
    }
}
