import { describe, it, expect } from 'vitest';
import { searchCardsAsync, sortCardsAsync } from '../workerSearch';
import { Flashcard } from '../../types';

describe('workerSearch - Off-main-thread search and SRS sorting', () => {
  const mockCards: Partial<Flashcard>[] = [
    { id: '1', front: '犬', back: 'it (dog)', repetitions: 0 },
    {
      id: '2',
      front: '猫',
      back: 'mushuk (cat)',
      repetitions: 2,
      nextReviewDate: '2026-01-01T00:00:00.000Z',
    },
    {
      id: '3',
      front: '食べる',
      back: 'yemoq (eat)',
      repetitions: 5,
      nextReviewDate: '2030-01-01T00:00:00.000Z',
    },
  ];

  it('should search and filter cards correctly by front or back', async () => {
    const results = await searchCardsAsync(mockCards as Flashcard[], 'dog');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('should search and filter cards by Japanese front text', async () => {
    const results = await searchCardsAsync(mockCards as Flashcard[], '猫');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('2');
  });

  it('should return all cards if search query is empty', async () => {
    const results = await searchCardsAsync(mockCards as Flashcard[], '');
    expect(results).toHaveLength(3);
  });

  it('should respect limit parameter in search', async () => {
    const results = await searchCardsAsync(mockCards as Flashcard[], '', 2);
    expect(results).toHaveLength(2);
  });

  it('should prioritize overdue cards in sortCardsAsync', async () => {
    const sorted = await sortCardsAsync(mockCards as Flashcard[]);
    expect(sorted).toHaveLength(3);
    // Card 2 is overdue (2026-01-01), so it must be first
    expect(sorted[0].id).toBe('2');
  });
});
