import { SupabaseClient } from '@supabase/supabase-js';

export interface OfflineMutation {
    id: string;
    table: string;
    method: 'insert' | 'update' | 'delete';
    data: unknown;
    key?: string; // primary key value (e.g. UUID)
}

const QUEUE_KEY = 'study-planner-offline-queue';

export const getOfflineQueue = (): OfflineMutation[] => {
    try {
        const data = localStorage.getItem(QUEUE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Failed to read offline queue:', e);
        return [];
    }
};

export const saveOfflineQueue = (queue: OfflineMutation[]): void => {
    try {
        localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    } catch (e) {
        console.error('Failed to save offline queue:', e);
    }
};

export const queueMutation = (
    table: string,
    method: 'insert' | 'update' | 'delete',
    data: unknown,
    key?: string
): void => {
    const queue = getOfflineQueue();
    const mutation: OfflineMutation = {
        id: self.crypto?.randomUUID ? self.crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
        table,
        method,
        data,
        key
    };
    queue.push(mutation);
    saveOfflineQueue(queue);
    console.log(`[Offline Sync] Queued mutation: ${method} on ${table}`, mutation);
};

export const syncOfflineQueue = async (supabase: SupabaseClient): Promise<void> => {
    const queue = getOfflineQueue();
    if (queue.length === 0) return;

    console.log(`[Offline Sync] Starting sync for ${queue.length} mutations...`);
    const remainingQueue: OfflineMutation[] = [...queue];

    for (const item of queue) {
        try {
            let error: unknown = null;

            if (item.method === 'insert') {
                const { error: err } = await supabase.from(item.table).insert(item.data);
                error = err;
            } else if (item.method === 'update') {
                const { error: err } = await supabase.from(item.table).update(item.data).eq('id', item.key);
                error = err;
            } else if (item.method === 'delete') {
                const { error: err } = await supabase.from(item.table).delete().eq('id', item.key);
                error = err;
            }

            if (error) {
                const errObj = error as { message?: string; status?: number };
                // If it's a network error/timeout, we should stop sync and try again later
                const isNetworkError = errObj.message?.includes('Failed to fetch') || errObj.status === 0 || errObj.status === 504;
                if (isNetworkError) {
                    console.warn('[Offline Sync] Network error encountered. Postponing sync.', error);
                    break;
                } else {
                    // Database validation or constraint error: log it but remove from queue to prevent blocking
                    console.error(`[Offline Sync] Permanent error on mutation ${item.id}:`, error);
                }
            }

            // Remove successfully synced item
            remainingQueue.shift();
            saveOfflineQueue(remainingQueue);
            console.log(`[Offline Sync] Synced mutation ${item.id} successfully.`);
        } catch (e) {
            console.error(`[Offline Sync] Unexpected error syncing mutation ${item.id}:`, e);
            // If it's network-related, break
            break;
        }
    }

    console.log(`[Offline Sync] Sync complete. Remaining in queue: ${remainingQueue.length}`);
};
