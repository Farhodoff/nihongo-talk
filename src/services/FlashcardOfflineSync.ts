import { idbGet, idbSet } from '../utils/storage/indexedDb';
import { supabase } from '../lib/supabase';

export interface QueuedFlashcardUpdate {
  id: string;
  updates: Record<string, any>;
  timestamp: number;
}

const OFFLINE_QUEUE_KEY = 'study_planner_flashcard_offline_queue';
let isSyncing = false;
let isListenerInitialized = false;

export const FlashcardOfflineSync = {
  /**
   * Enqueues an offline flashcard mutation into IndexedDB.
   */
  async enqueueUpdate(id: string, updates: Record<string, any>): Promise<void> {
    try {
      const queue = (await idbGet<QueuedFlashcardUpdate[]>(OFFLINE_QUEUE_KEY)) || [];
      // Replace existing update for the same card ID or push new
      const existingIdx = queue.findIndex((item) => item.id === id);
      if (existingIdx >= 0) {
        queue[existingIdx] = {
          id,
          updates: { ...queue[existingIdx].updates, ...updates },
          timestamp: Date.now(),
        };
      } else {
        queue.push({ id, updates, timestamp: Date.now() });
      }
      await idbSet(OFFLINE_QUEUE_KEY, queue);
    } catch (e) {
      console.warn('[FlashcardOfflineSync] Failed to enqueue offline update:', e);
    }
  },

  /**
   * Retrieves pending offline updates count.
   */
  async getPendingCount(): Promise<number> {
    try {
      const queue = await idbGet<QueuedFlashcardUpdate[]>(OFFLINE_QUEUE_KEY);
      return queue ? queue.length : 0;
    } catch {
      return 0;
    }
  },

  /**
   * Syncs all queued updates to Supabase when network is restored.
   */
  async syncPending(): Promise<{ synced: number; failed: number }> {
    if (isSyncing) return { synced: 0, failed: 0 };
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return { synced: 0, failed: 0 };
    }

    isSyncing = true;
    let synced = 0;
    let failed = 0;

    try {
      const queue = (await idbGet<QueuedFlashcardUpdate[]>(OFFLINE_QUEUE_KEY)) || [];
      if (queue.length === 0) {
        isSyncing = false;
        return { synced: 0, failed: 0 };
      }

      const remaining: QueuedFlashcardUpdate[] = [];

      for (const item of queue) {
        try {
          const { error } = await supabase
            .from('flashcards')
            .update(item.updates)
            .eq('id', item.id);
          if (error) {
            remaining.push(item);
            failed++;
          } else {
            synced++;
          }
        } catch {
          remaining.push(item);
          failed++;
        }
      }

      await idbSet(OFFLINE_QUEUE_KEY, remaining);
    } catch (e) {
      console.warn('[FlashcardOfflineSync] Sync error:', e);
    } finally {
      isSyncing = false;
    }

    return { synced, failed };
  },

  /**
   * Attaches automatic online reconnection listener.
   */
  initAutoSync(): void {
    if (isListenerInitialized || typeof window === 'undefined') return;
    isListenerInitialized = true;

    window.addEventListener('online', () => {
      FlashcardOfflineSync.syncPending();
    });

    // Also trigger immediately if online
    if (navigator.onLine) {
      FlashcardOfflineSync.syncPending();
    }
  },
};
