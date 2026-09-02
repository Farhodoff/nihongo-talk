import { describe, expect, it } from 'vitest';
import { calculateReview, Rating, sortCardsBySRSPriority } from './srs';

describe('SRS (Spaced Repetition System) Utils', () => {
  describe('calculateReview', () => {
    describe('New card (first review)', () => {
      it('should set interval to 2 days for GOOD rating', () => {
        const result = calculateReview(Rating.GOOD, 0, 0, 2.5);
        expect(result.interval).toBe(2);
        expect(result.repetitions).toBe(1);
        expect(result.easeFactor).toBeGreaterThan(0);
      });

      it('should set interval to 4 days for EASY rating', () => {
        const result = calculateReview(Rating.EASY, 0, 0, 2.5);
        expect(result.interval).toBe(4);
        expect(result.repetitions).toBe(1);
      });

      it('should reset to interval 1 for AGAIN rating', () => {
        const result = calculateReview(Rating.AGAIN, 0, 0, 2.5);
        expect(result.interval).toBe(1);
        expect(result.repetitions).toBe(0);
      });

      it('should set interval to 1 day for HARD rating on first review', () => {
        const result = calculateReview(Rating.HARD, 0, 0, 2.5);
        expect(result.interval).toBe(1);
        expect(result.repetitions).toBe(1);
      });
    });

    describe('Second review (repetitions = 1)', () => {
      it('should set interval to 6 days for GOOD rating', () => {
        const result = calculateReview(Rating.GOOD, 1, 1, 2.5);
        expect(result.interval).toBe(6);
        expect(result.repetitions).toBe(2);
      });

      it('should set interval to 10 days for EASY rating', () => {
        const result = calculateReview(Rating.EASY, 1, 1, 2.5);
        expect(result.interval).toBe(10);
        expect(result.repetitions).toBe(2);
      });

      it('should reset on AGAIN rating', () => {
        const result = calculateReview(Rating.AGAIN, 1, 1, 2.5);
        expect(result.interval).toBe(1);
        expect(result.repetitions).toBe(0);
      });
    });

    describe('Subsequent reviews (repetitions >= 2)', () => {
      it('should multiply interval by ease factor for GOOD rating', () => {
        const result = calculateReview(Rating.GOOD, 6, 2, 2.5);
        expect(result.interval).toBe(Math.round(6 * 2.5)); // 15
        expect(result.repetitions).toBe(3);
      });

      it('should increase interval for EASY rating', () => {
        const result = calculateReview(Rating.EASY, 6, 2, 2.5);
        expect(result.interval).toBeGreaterThan(6);
        expect(result.repetitions).toBe(3);
      });

      it('should reset progress on AGAIN rating', () => {
        const result = calculateReview(Rating.AGAIN, 15, 3, 2.5);
        expect(result.interval).toBe(1);
        expect(result.repetitions).toBe(0);
      });
    });

    describe('Ease factor adjustments', () => {
      it('should increase ease factor for EASY rating', () => {
        const initialEF = 2.5;
        const result = calculateReview(Rating.EASY, 6, 2, initialEF);
        expect(result.easeFactor).toBeGreaterThan(initialEF);
      });

      it('should decrease ease factor for HARD rating', () => {
        const initialEF = 2.5;
        const result = calculateReview(Rating.HARD, 6, 2, initialEF);
        expect(result.easeFactor).toBeLessThanOrEqual(initialEF);
      });

      it('should maintain minimum ease factor of 1.3', () => {
        const result = calculateReview(Rating.AGAIN, 6, 2, 1.3);
        expect(result.easeFactor).toBeGreaterThanOrEqual(1.3);
      });

      it('should decrease ease factor on AGAIN', () => {
        const initialEF = 2.5;
        const result = calculateReview(Rating.AGAIN, 6, 2, initialEF);
        expect(result.easeFactor).toBeLessThan(initialEF);
      });
    });

    describe('Next review date', () => {
      it('should return a valid ISO date string', () => {
        const result = calculateReview(Rating.GOOD, 0, 0, 2.5);
        expect(result.nextReviewDate).toMatch(/^\d{4}-\d{2}-\d{2}T/);
        expect(() => new Date(result.nextReviewDate)).not.toThrow();
      });

      it('should set next review date in the future', () => {
        const result = calculateReview(Rating.GOOD, 6, 2, 2.5);
        const nextDate = new Date(result.nextReviewDate);
        const now = new Date();
        expect(nextDate.getTime()).toBeGreaterThan(now.getTime());
      });

      it('should calculate correct interval for next review', () => {
        const result = calculateReview(Rating.GOOD, 0, 0, 2.5);
        const nextDate = new Date(result.nextReviewDate);
        const todayMidnightUTC = new Date(
          Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        );
        const daysDiff = Math.round(
          (nextDate.getTime() - todayMidnightUTC.getTime()) / (1000 * 60 * 60 * 24),
        );
        expect(daysDiff).toBe(result.interval);
        expect(result.dueInDays).toBe(result.interval);
      });
    });

    describe('Edge cases', () => {
      it('should handle very high intervals', () => {
        const result = calculateReview(Rating.GOOD, 365, 10, 2.5);
        expect(result.interval).toBeGreaterThan(365);
        expect(result.repetitions).toBe(11);
      });

      it('should handle very low ease factor', () => {
        const result = calculateReview(Rating.GOOD, 6, 2, 1.3);
        expect(result.easeFactor).toBeGreaterThanOrEqual(1.3);
      });

      it('should handle very high ease factor', () => {
        const result = calculateReview(Rating.EASY, 6, 2, 4.0);
        expect(result.interval).toBeGreaterThan(6);
      });

      it('should round ease factor to 2 decimal places', () => {
        const result = calculateReview(Rating.GOOD, 6, 2, 2.5);
        const decimalPlaces = (result.easeFactor.toString().split('.')[1] || '').length;
        expect(decimalPlaces).toBeLessThanOrEqual(2);
      });
    });

    describe('All rating grades', () => {
      it('should handle AGAIN (0) rating', () => {
        const result = calculateReview(Rating.AGAIN, 6, 2, 2.5);
        expect(result.interval).toBe(1);
        expect(result.repetitions).toBe(0);
      });

      it('should handle HARD (1) rating', () => {
        const result = calculateReview(Rating.HARD, 6, 2, 2.5);
        expect(result.interval).toBeGreaterThan(6);
        expect(result.repetitions).toBe(3);
      });

      it('should handle GOOD (2) rating', () => {
        const result = calculateReview(Rating.GOOD, 6, 2, 2.5);
        expect(result.interval).toBeGreaterThan(1);
        expect(result.repetitions).toBe(3);
      });

      it('should handle EASY (3) rating', () => {
        const result = calculateReview(Rating.EASY, 6, 2, 2.5);
        expect(result.interval).toBeGreaterThan(1);
        expect(result.repetitions).toBe(3);
      });
    });

    describe('sortCardsBySRSPriority', () => {
      it('should order overdue cards before due today and new cards', () => {
        const now = new Date('2026-09-02T12:00:00.000Z');
        const overdueCard = {
          id: 'c1',
          nextReviewDate: '2026-08-30T00:00:00.000Z',
          repetitions: 3,
        };
        const dueTodayCard = {
          id: 'c2',
          nextReviewDate: '2026-09-02T08:00:00.000Z',
          repetitions: 2,
        };
        const newCard = { id: 'c3', repetitions: 0 };
        const futureCard = { id: 'c4', nextReviewDate: '2026-09-10T00:00:00.000Z', repetitions: 4 };

        const mixed = [futureCard, newCard, dueTodayCard, overdueCard];
        const sorted = sortCardsBySRSPriority(mixed, now);

        expect(sorted[0].id).toBe('c1'); // Overdue is first
        expect(sorted[1].id).toBe('c2'); // Due today is second
        expect(sorted[2].id).toBe('c3'); // Brand-new is third
        expect(sorted[3].id).toBe('c4'); // Future is last
      });
    });
  });
});
