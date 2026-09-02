import { describe, it, expect, vi } from 'vitest';
import { getOrEnsureSpeakingDeck } from '../subjectResolver';
import { Subject } from '../../types';

const createMockSubject = (
  id: string,
  name: string,
  color: string = '#f59e0b',
  icon: string = 'Sparkles',
): Subject => ({
  id,
  name,
  color,
  icon,
  schedule: [],
});

describe('getOrEnsureSpeakingDeck', () => {
  it('finds an existing dedicated Japanese speaking deck if one exists', async () => {
    const subjects: Subject[] = [
      createMockSubject('sub-1', 'N5 Kanji', '#ff0000', 'Book'),
      createMockSubject('sub-speaking-ja', "🎙️ AI Speaking Lug'atlari", '#f59e0b', 'Mic'),
    ];

    const deckId = await getOrEnsureSpeakingDeck(subjects, vi.fn(), 'ja');
    expect(deckId).toBe('sub-speaking-ja');
  });

  it('creates an ALOHIDA (dedicated) Japanese speaking deck when none exists', async () => {
    const subjects: Subject[] = [
      createMockSubject('sub-kanji', 'JLPT N5 Kanji', '#3b82f6', 'Book'),
      createMockSubject('sub-grammar', 'JLPT Bunpou', '#10b981', 'Book'),
    ];

    const addSubjectMock = vi.fn().mockResolvedValue({
      id: 'new-speaking-deck-id',
      name: "🎙️ AI Speaking Lug'atlari",
      color: '#f59e0b',
      icon: 'Sparkles',
      schedule: [],
    });

    const deckId = await getOrEnsureSpeakingDeck(subjects, addSubjectMock, 'ja');
    expect(deckId).toBe('new-speaking-deck-id');
    expect(addSubjectMock).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "🎙️ AI Speaking Lug'atlari",
        color: '#f59e0b',
      }),
    );
  });

  it('finds or creates an ALOHIDA English speaking deck for English track', async () => {
    const subjects: Subject[] = [
      createMockSubject('sub-ielts-general', 'IELTS Academic Writing', '#6366f1', 'Book'),
    ];

    const addSubjectMock = vi.fn().mockResolvedValue({
      id: 'new-en-speaking-id',
      name: '🎙️ AI Speaking Vocabulary',
      color: '#f59e0b',
      schedule: [],
    });

    const deckId = await getOrEnsureSpeakingDeck(subjects, addSubjectMock, 'en');
    expect(deckId).toBe('new-en-speaking-id');
    expect(addSubjectMock).toHaveBeenCalledWith(
      expect.objectContaining({
        name: '🎙️ AI Speaking Vocabulary',
      }),
    );
  });
});
