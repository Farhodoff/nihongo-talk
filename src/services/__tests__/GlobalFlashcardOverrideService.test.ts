import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GlobalFlashcardOverrideService } from '../GlobalFlashcardOverrideService';
import type { PresetCard } from '../../data/presetDecks';
import type { Flashcard } from '../../types';

// Mock supabase client
vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        order: vi.fn(() => Promise.resolve({ data: [], error: null })),
      })),
      upsert: vi.fn(() => Promise.resolve({ error: null })),
      delete: vi.fn(() => ({
        eq: vi.fn(() => Promise.resolve({ error: null })),
      })),
    })),
  },
}));

describe('GlobalFlashcardOverrideService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('normalizes word keys correctly by stripping punctuation and whitespace', () => {
    expect(GlobalFlashcardOverrideService.normalizeWordKey(' 私 (わたし) ')).toBe('私');
    expect(GlobalFlashcardOverrideService.normalizeWordKey('学校（がっこう）')).toBe('学校');
    expect(GlobalFlashcardOverrideService.normalizeWordKey('食べる [たべる]')).toBe('食べる');
    expect(GlobalFlashcardOverrideService.normalizeWordKey('  Cat  ')).toBe('cat');
  });

  it('saves an override locally and applies it to PresetCard', async () => {
    await GlobalFlashcardOverrideService.saveGlobalOverride(
      {
        word: '私',
        front: '私',
        phonetic: 'わたし',
        back: "Men (tuzatilgan ma'no)",
        example: '私は学生です。- Men talabaman.',
        deck_id: 'minna-lesson-1',
      },
      'admin-user-id',
    );

    const testPresetCards: PresetCard[] = [
      {
        front: '私',
        phonetic: 'わたし',
        back: 'Eski tarjima',
        example: 'Eski misol',
      },
      {
        front: '本',
        phonetic: 'ほん',
        back: 'Kitob',
        example: '本を読みます。',
      },
    ];

    const updated = GlobalFlashcardOverrideService.applyOverridesToCards(testPresetCards);
    expect(updated[0].back).toBe("Men (tuzatilgan ma'no)");
    expect(updated[0].example).toBe('私は学生です。- Men talabaman.');
    expect(updated[1].back).toBe('Kitob'); // Unchanged
  });

  it('applies override to user Flashcard object', async () => {
    await GlobalFlashcardOverrideService.saveGlobalOverride(
      {
        word: '食べる',
        front: '食べる',
        phonetic: 'たべる',
        back: 'Yemoq',
        example: 'ご飯を食べる。',
      },
      'admin-user-id',
    );

    const card: Flashcard = {
      id: 'card-123',
      subjectId: 'subject-456',
      front: '食べる',
      back: 'Notugri tarjima',
      interval: 1,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewDate: new Date().toISOString(),
    };

    const transformed = GlobalFlashcardOverrideService.applyOverrideToCard(card);
    expect(transformed.back).toBe('Yemoq');
    expect((transformed as any).example).toBe('ご飯を食べる。');
  });

  it('deletes an override and stops applying it', async () => {
    await GlobalFlashcardOverrideService.saveGlobalOverride(
      {
        word: '先生',
        front: '先生',
        phonetic: 'せんせい',
        back: "O'qituvchi",
      },
      'admin-user-id',
    );

    expect(GlobalFlashcardOverrideService.hasOverride('先生')).toBe(true);

    await GlobalFlashcardOverrideService.deleteOverride('先生');
    expect(GlobalFlashcardOverrideService.hasOverride('先生')).toBe(false);
  });
});
