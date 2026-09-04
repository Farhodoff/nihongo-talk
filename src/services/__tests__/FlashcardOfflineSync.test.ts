import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FlashcardOfflineSync } from '../FlashcardOfflineSync';
import * as idb from '../../utils/storage/indexedDb';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe('FlashcardOfflineSync', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await idb.idbDelete('study_planner_flashcard_offline_queue');
  });

  it('enqueues an offline flashcard update correctly', async () => {
    await FlashcardOfflineSync.enqueueUpdate('card-1', { ease_factor: 2.5, repetitions: 1 });
    const count = await FlashcardOfflineSync.getPendingCount();
    expect(count).toBe(1);

    // Enqueueing update for the same card merges updates
    await FlashcardOfflineSync.enqueueUpdate('card-1', { interval: 6 });
    const countAfter = await FlashcardOfflineSync.getPendingCount();
    expect(countAfter).toBe(1);

    const queue = await idb.idbGet<any[]>('study_planner_flashcard_offline_queue');
    expect(queue?.[0].updates).toEqual({ ease_factor: 2.5, repetitions: 1, interval: 6 });
  });

  it('syncs pending updates when online and clears synced items', async () => {
    const mockUpdate = vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ error: null }),
    });
    (supabase.from as any).mockReturnValue({
      update: mockUpdate,
    });

    await FlashcardOfflineSync.enqueueUpdate('card-1', { interval: 1 });
    await FlashcardOfflineSync.enqueueUpdate('card-2', { interval: 2 });

    const result = await FlashcardOfflineSync.syncPending();
    expect(result.synced).toBe(2);
    expect(result.failed).toBe(0);

    const remainingCount = await FlashcardOfflineSync.getPendingCount();
    expect(remainingCount).toBe(0);
  });
});
