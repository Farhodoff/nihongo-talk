import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ScenarioService } from '../ScenarioService';
import { supabase } from '../../lib/supabase';
import { ConversationScenario } from '../../components/speaking/scenarioTypes';

describe('ScenarioService Cross-Device Sync & Fallbacks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('1. saveScenario infers Japanese language when title_ja is provided', async () => {
    const upsertSpy = vi.fn().mockResolvedValue({ error: null });
    vi.spyOn(supabase, 'from').mockReturnValue({
      upsert: upsertSpy,
    } as any);

    const testScenario: ConversationScenario = {
      id: 'custom_arubaito_interview',
      title_ja: 'アルバイトの面接',
      title_uz: 'Yarim stavkali ish suhbati',
      emoji: '💼',
      difficulty: 'N4',
      category: 'business',
      description_uz: 'Konbini yoki restoranda suhbat',
      context_prompt: 'You are a Japanese store manager conducting an interview.',
      key_phrases: ['志望動機', 'シフト'],
    };

    await ScenarioService.saveScenario(testScenario);

    expect(upsertSpy).toHaveBeenCalledTimes(1);
    expect(upsertSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'custom_arubaito_interview',
        language: 'ja',
        title_ja: 'アルバイトの面接',
        difficulty: 'N4',
      }),
    );
  });

  it('2. saveScenario defaults difficulty to N5 when missing in Japanese scenario', async () => {
    const upsertSpy = vi.fn().mockResolvedValue({ error: null });
    vi.spyOn(supabase, 'from').mockReturnValue({
      upsert: upsertSpy,
    } as any);

    const testScenario: any = {
      id: 'custom_aisatsu',
      title_ja: '朝の挨拶',
      title_uz: 'Ertalabki salomlashish',
      emoji: '🌅',
      category: 'daily',
      description_uz: 'Salomlashish mashqi',
      context_prompt: 'Practice morning greetings.',
      key_phrases: ['おはようございます'],
    };

    await ScenarioService.saveScenario(testScenario);

    expect(upsertSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        language: 'ja',
        difficulty: 'N5',
      }),
    );
  });

  it('3. getScenarios maps DB items defaulting Japanese scenarios to N5 and ja', async () => {
    vi.spyOn(supabase, 'from').mockReturnValue({
      select: vi.fn().mockResolvedValue({
        data: [
          {
            id: 'db_scenario_1',
            title_ja: '日本の祭り',
            title_uz: 'Yaponiya bayrami',
            emoji: '🏮',
            category: 'social',
            key_phrases: [],
          },
        ],
        error: null,
      }),
    } as any);

    const scenarios = await ScenarioService.getScenarios();
    const fetched = scenarios.find((s) => s.id === 'db_scenario_1');

    expect(fetched).toBeDefined();
    expect(fetched?.language).toBe('ja');
    expect(fetched?.difficulty).toBe('N5');
  });
});
