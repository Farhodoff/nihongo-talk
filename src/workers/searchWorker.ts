/**
 * searchWorker.ts
 * Dedicated Web Worker for off-main-thread flashcard search, fuzzy matching, and SRS priority sorting.
 */

export interface SearchWorkerMessage {
  id: string;
  type: 'FILTER_CARDS' | 'SORT_CARDS';
  cards: any[];
  query?: string;
  limit?: number;
}

export interface SearchWorkerResponse {
  id: string;
  success: boolean;
  results: any[];
  error?: string;
}

self.onmessage = (event: MessageEvent<SearchWorkerMessage>) => {
  const { id, type, cards, query = '', limit } = event.data;

  try {
    if (type === 'FILTER_CARDS') {
      const q = query.trim().toLowerCase();
      let matched = cards;

      if (q) {
        matched = cards.filter((c: any) => {
          const front = (c.front || '').toLowerCase();
          const back = (c.back || '').toLowerCase();
          const tags = Array.isArray(c.tags) ? c.tags.join(' ').toLowerCase() : '';
          return front.includes(q) || back.includes(q) || tags.includes(q);
        });
      }

      const finalResults =
        typeof limit === 'number' && limit > 0 ? matched.slice(0, limit) : matched;
      self.postMessage({ id, success: true, results: finalResults });
      return;
    }

    if (type === 'SORT_CARDS') {
      // Sort by overdue, due today, new, future
      const now = Date.now();
      const startOfToday = new Date().setHours(0, 0, 0, 0);

      const overdue: any[] = [];
      const dueToday: any[] = [];
      const brandNew: any[] = [];
      const future: any[] = [];

      for (const card of cards) {
        const reps = card.repetitions ?? card.repetition ?? 0;
        const reviewDate = card.nextReviewDate || card.nextReview || card.dueDate;

        if (reps === 0) {
          brandNew.push(card);
        } else if (!reviewDate) {
          dueToday.push(card);
        } else {
          const cardTime = new Date(reviewDate).getTime();
          if (cardTime < startOfToday) {
            overdue.push(card);
          } else if (cardTime <= now) {
            dueToday.push(card);
          } else {
            future.push(card);
          }
        }
      }

      overdue.sort((a, b) => {
        const timeA = new Date(a.nextReviewDate || a.nextReview || 0).getTime();
        const timeB = new Date(b.nextReviewDate || b.nextReview || 0).getTime();
        return timeA - timeB;
      });

      dueToday.sort(() => Math.random() - 0.5);
      brandNew.sort(() => Math.random() - 0.5);

      const sorted = [...overdue, ...dueToday, ...brandNew, ...future];
      const finalResults = typeof limit === 'number' && limit > 0 ? sorted.slice(0, limit) : sorted;
      self.postMessage({ id, success: true, results: finalResults });
      return;
    }

    self.postMessage({ id, success: true, results: cards });
  } catch (err: any) {
    self.postMessage({ id, success: false, results: [], error: err?.message || 'Worker error' });
  }
};
