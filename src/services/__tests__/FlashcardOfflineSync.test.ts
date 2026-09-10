import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FlashcardOfflineSync } from '../FlashcardOfflineSync';
import { supabase } from '../../lib/supabase';
import { toast } from '../../hooks/use-toast';

vi.mock('../../hooks/use-toast', () => ({
  toast: vi.fn(),
}));

describe('FlashcardOfflineSync Service', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await FlashcardOfflineSync.clearQueue();
  });

  it('enqueues offline updates and increments pending count', async () => {
    expect(await FlashcardOfflineSync.getPendingCount()).toBe(0);

    await FlashcardOfflineSync.enqueueUpdate('card-1', {
      interval: 1,
      repetitions: 1,
      ease_factor: 2.5,
    });

    expect(await FlashcardOfflineSync.getPendingCount()).toBe(1);

    // Enqueuing update for same card merges updates
    await FlashcardOfflineSync.enqueueUpdate('card-1', {
      interval: 4,
      repetitions: 2,
    });

    expect(await FlashcardOfflineSync.getPendingCount()).toBe(1);

    // Enqueuing update for different card increments
    await FlashcardOfflineSync.enqueueUpdate('card-2', {
      interval: 10,
    });

    expect(await FlashcardOfflineSync.getPendingCount()).toBe(2);
  });

  it('syncs pending offline updates to Supabase when online', async () => {
    const mockUpdate = vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ error: null }),
    });

    vi.spyOn(supabase, 'from').mockReturnValue({
      update: mockUpdate,
    } as any);

    await FlashcardOfflineSync.enqueueUpdate('card-101', { interval: 2 });
    await FlashcardOfflineSync.enqueueUpdate('card-102', { interval: 4 });

    const result = await FlashcardOfflineSync.syncPending();

    expect(result.synced).toBe(2);
    expect(result.failed).toBe(0);
    expect(await FlashcardOfflineSync.getPendingCount()).toBe(0);
    expect(toast).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.stringContaining('Sinxronlash muvaffaqiyatli'),
        description: expect.stringContaining('2 ta oflayn'),
      }),
    );
  });

  it('preserves failed items in queue for next sync retry', async () => {
    let callCount = 0;
    const mockUpdate = vi.fn().mockImplementation(() => ({
      eq: vi.fn().mockImplementation(async () => {
        callCount++;
        if (callCount === 1) {
          return { error: null }; // First item succeeds
        }
        return { error: new Error('Network error on second card') }; // Second item fails
      }),
    }));

    vi.spyOn(supabase, 'from').mockReturnValue({
      update: mockUpdate,
    } as any);

    await FlashcardOfflineSync.enqueueUpdate('card-pass', { interval: 1 });
    await FlashcardOfflineSync.enqueueUpdate('card-fail', { interval: 5 });

    const result = await FlashcardOfflineSync.syncPending();

    expect(result.synced).toBe(1);
    expect(result.failed).toBe(1);
    expect(await FlashcardOfflineSync.getPendingCount()).toBe(1);
  });

  it('caches and retrieves full deck from IndexedDB', async () => {
    const mockCards = [
      {
        id: 'c1',
        front: '犬',
        back: 'it',
        interval: 1,
        repetitions: 1,
        easeFactor: 2.5,
        nextReviewDate: '2026-09-10',
      } as any,
    ];

    await FlashcardOfflineSync.cacheDeck('user-123', mockCards);

    const cached = await FlashcardOfflineSync.getCachedDeck('user-123');
    expect(cached).not.toBeNull();
    expect(cached?.cards).toHaveLength(1);
    expect(cached?.cards[0].front).toBe('犬');
  });
});
