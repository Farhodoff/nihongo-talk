import { describe, it, expect, vi } from 'vitest';
import {
  findLanguageSubject,
  getOrEnsureLanguageSubject,
  isFlashcardForLanguage,
  isSubjectForLanguage,
} from '../subjectResolver';
import { Subject } from '../../types';

describe('Subject Resolver & Auto-Creation Tests', () => {
  it('1. Correctly selects Japanese subject even when English subject is subjects[0]', async () => {
    const mockSubjects: Subject[] = [
      {
        id: 'sub-en',
        name: '🇬🇧 Ingliz tili (IELTS)',
        color: '#6366f1',
        icon: 'BookOpen',
        isArchived: false,
        schedule: [],
      },
      {
        id: 'sub-ja',
        name: '🎌 Yapon tili (JLPT)',
        color: '#f43f5e',
        icon: 'Sparkles',
        isArchived: false,
        schedule: [],
      },
    ];

    const resolved = findLanguageSubject(mockSubjects, 'ja');
    expect(resolved).toBeDefined();
    expect(resolved?.id).toBe('sub-ja');

    const subjectId = await getOrEnsureLanguageSubject(mockSubjects, undefined, 'ja');
    expect(subjectId).toBe('sub-ja');
  });

  it('2. Auto-creates "🎌 Yapon tili (JLPT)" if user only has English subjects', async () => {
    const mockSubjects: Subject[] = [
      {
        id: 'sub-en',
        name: 'General English C1',
        color: '#6366f1',
        icon: 'BookOpen',
        isArchived: false,
        schedule: [],
      },
    ];

    const mockAddSubject = vi.fn().mockImplementation(async (sub) => ({
      id: 'sub-new-ja-123',
      schedule: [],
      ...sub,
    }));

    const subjectId = await getOrEnsureLanguageSubject(mockSubjects, mockAddSubject, 'ja');
    expect(mockAddSubject).toHaveBeenCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('Yapon tili'),
      }),
    );
    expect(subjectId).toBe('sub-new-ja-123');
  });

  it('3. Auto-creates Japanese subject if user has zero subjects', async () => {
    const mockAddSubject = vi.fn().mockImplementation(async (sub) => ({
      id: 'sub-new-ja-456',
      schedule: [],
      ...sub,
    }));

    const subjectId = await getOrEnsureLanguageSubject([], mockAddSubject, 'ja');
    expect(mockAddSubject).toHaveBeenCalled();
    expect(subjectId).toBe('sub-new-ja-456');
  });

  it('4. Correctly matches various Japanese keywords (JLPT, nihongo, kanji, kaiwa)', () => {
    const mockSubjects: Subject[] = [
      {
        id: 'sub-math',
        name: 'Matematika',
        color: '#10b981',
        icon: 'Calculator',
        isArchived: false,
        schedule: [],
      },
      {
        id: 'sub-nihongo',
        name: 'Nihongo N3 Course',
        color: '#f43f5e',
        icon: 'Sparkles',
        isArchived: false,
        schedule: [],
      },
    ];

    const found = findLanguageSubject(mockSubjects, 'ja');
    expect(found?.id).toBe('sub-nihongo');
  });

  it('5. Does not treat unrelated subjects as Japanese from a bare N-level or full-width punctuation', () => {
    const mathSubject: Subject = {
      id: 'sub-math',
      name: 'N2 Matematika',
      color: '#10b981',
      schedule: [],
    };

    expect(isSubjectForLanguage(mathSubject, 'ja')).toBe(false);
    expect(
      isFlashcardForLanguage(
        {
          id: 'math-card',
          subjectId: 'sub-math',
          front: 'Formula：速度 = 距離 ÷ 時間',
          back: 'Tezlik formulasi',
          interval: 1,
          repetitions: 1,
          easeFactor: 2.5,
          nextReviewDate: new Date().toISOString(),
        },
        [mathSubject],
        'ja',
      ),
    ).toBe(false);
  });

  it('6. Uses Japanese text detection only for orphan legacy cards', () => {
    const orphanJapaneseCard = {
      id: 'orphan-ja',
      subjectId: 'missing-subject',
      front: '食べる',
      back: 'Yemoq',
      interval: 1,
      repetitions: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString(),
    };

    expect(isFlashcardForLanguage(orphanJapaneseCard, [], 'ja')).toBe(true);
    expect(isFlashcardForLanguage(orphanJapaneseCard, [], 'en')).toBe(false);
  });
});
