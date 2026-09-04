import { describe, it, expect } from 'vitest';
import { generateContextualHints } from '../conversationHintGenerator';

describe('conversationHintGenerator', () => {
  it('returns scenario-specific hints for train ticket scenario', () => {
    const hints = generateContextualHints('切符をどうぞ', {
      id: 'tokyo_train_ticket',
      language: 'ja',
      title_ja: '駅の窓口',
      title_uz: 'Metro',
      emoji: '🚇',
      difficulty: 'N4',
      category: 'travel',
      description_uz: '',
      opening_line_ja: '',
      context_prompt: '',
      key_phrases: [],
      is_custom: false,
    });
    expect(hints).toHaveLength(3);
    expect(hints[0].japanese).toContain('新宿駅');
    expect(hints[0].uzbek).toBeTruthy();
  });

  it('returns scenario-specific hints for konbini scenario', () => {
    const hints = generateContextualHints('いらっしゃいませ', {
      id: 'konbini_shopping',
      language: 'ja',
      title_ja: 'コンビニ',
      title_uz: 'Kombini',
      emoji: '🏪',
      difficulty: 'N5',
      category: 'daily',
      description_uz: '',
      opening_line_ja: '',
      context_prompt: '',
      key_phrases: [],
      is_custom: false,
    });
    expect(hints).toHaveLength(3);
    expect(hints[0].japanese).toContain('温めて');
  });

  it('returns natural conversational hints when coach asks about preferences/hobbies', () => {
    const hints = generateContextualHints('何が好きですか？');
    expect(hints).toHaveLength(3);
    expect(hints.some((h) => h.japanese.includes('好き'))).toBe(true);
  });

  it('returns universal fallbacks for general statements', () => {
    const hints = generateContextualHints('今日も頑張りましょう。');
    expect(hints).toHaveLength(3);
    expect(hints[0].japanese).toContain('分かりました');
  });
});
