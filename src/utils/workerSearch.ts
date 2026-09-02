/**
 * workerSearch.ts
 * Safe client-side wrapper for offloading heavy flashcard operations to searchWorker.
 * Automatically falls back to synchronous main-thread execution in environments without Web Worker support.
 */

import { Flashcard } from '../types';
import { sortCardsBySRSPriority } from './srs';

let workerInstance: Worker | null = null;
let isWorkerSupported = typeof window !== 'undefined' && typeof Worker !== 'undefined';

function getWorker(): Worker | null {
  if (!isWorkerSupported) return null;
  if (!workerInstance) {
    try {
      workerInstance = new Worker(new URL('../workers/searchWorker.ts', import.meta.url), {
        type: 'module',
      });
    } catch {
      isWorkerSupported = false;
      return null;
    }
  }
  return workerInstance;
}

export async function searchCardsAsync(
  cards: Flashcard[],
  query: string,
  limit?: number,
): Promise<Flashcard[]> {
  const worker = getWorker();

  // Fallback to synchronous in-memory search if worker unavailable
  if (!worker) {
    const q = query.trim().toLowerCase();
    if (!q) return typeof limit === 'number' ? cards.slice(0, limit) : cards;

    const filtered = cards.filter((c) => {
      const front = (c.front || '').toLowerCase();
      const back = (c.back || '').toLowerCase();
      return front.includes(q) || back.includes(q);
    });
    return typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
  }

  return new Promise((resolve) => {
    const id = `req_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
    const timeout = setTimeout(() => {
      // Timeout fallback to main-thread
      worker.removeEventListener('message', handleMsg);
      const q = query.trim().toLowerCase();
      const filtered = q
        ? cards.filter(
            (c) =>
              (c.front || '').toLowerCase().includes(q) || (c.back || '').toLowerCase().includes(q),
          )
        : cards;
      resolve(typeof limit === 'number' ? filtered.slice(0, limit) : filtered);
    }, 2000);

    const handleMsg = (e: MessageEvent) => {
      if (e.data && e.data.id === id) {
        clearTimeout(timeout);
        worker.removeEventListener('message', handleMsg);
        resolve(e.data.results || []);
      }
    };

    worker.addEventListener('message', handleMsg);
    worker.postMessage({
      id,
      type: 'FILTER_CARDS',
      cards,
      query,
      limit,
    });
  });
}

export async function sortCardsAsync(cards: Flashcard[], limit?: number): Promise<Flashcard[]> {
  const worker = getWorker();

  if (!worker) {
    const sorted = sortCardsBySRSPriority(cards);
    return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
  }

  return new Promise((resolve) => {
    const id = `sort_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
    const timeout = setTimeout(() => {
      worker.removeEventListener('message', handleMsg);
      const sorted = sortCardsBySRSPriority(cards);
      resolve(typeof limit === 'number' ? sorted.slice(0, limit) : sorted);
    }, 2000);

    const handleMsg = (e: MessageEvent) => {
      if (e.data && e.data.id === id) {
        clearTimeout(timeout);
        worker.removeEventListener('message', handleMsg);
        resolve(e.data.results || []);
      }
    };

    worker.addEventListener('message', handleMsg);
    worker.postMessage({
      id,
      type: 'SORT_CARDS',
      cards,
      limit,
    });
  });
}
