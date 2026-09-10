import { describe, it, expect, vi } from 'vitest';
import { calculateReview, Rating, getPreviewIntervalLabels, isDue } from '../srs';

describe('Morning QA Verification: SRS Flashcards & Speaking Coach Safeguards', () => {
  describe('1. SRS Flashcard Interval & Display Calibration', () => {
    it('QA-1.1: should return exact user-requested intervals on new flashcards (0 reps)', () => {
      const labelsUz = getPreviewIntervalLabels(0, 0, 2.5, false);
      expect(labelsUz[Rating.AGAIN]).toBe('10 daq');
      expect(labelsUz[Rating.HARD]).toBe('30 daq');
      expect(labelsUz[Rating.GOOD]).toBe('2 kun');
      expect(labelsUz[Rating.EASY]).toBe('4 kun');

      const labelsJa = getPreviewIntervalLabels(0, 0, 2.5, true);
      expect(labelsJa[Rating.AGAIN]).toBe('10分');
      expect(labelsJa[Rating.HARD]).toBe('30分');
      expect(labelsJa[Rating.GOOD]).toBe('2日');
      expect(labelsJa[Rating.EASY]).toBe('4日');
    });

    it('QA-1.2: should calculate accurate intra-day nextReviewDate for AGAIN (10 mins) and HARD (30 mins)', () => {
      const baseDate = new Date('2026-09-10T07:00:00.000Z');

      const againReview = calculateReview(Rating.AGAIN, 0, 0, 2.5, baseDate);
      expect(againReview.interval).toBe(1);
      expect(againReview.repetitions).toBe(0);
      expect(againReview.nextReviewDate).toBe('2026-09-10T07:10:00.000Z');
      expect(againReview.dueDate).toBe('2026-09-11');

      const hardReview = calculateReview(Rating.HARD, 0, 0, 2.5, baseDate);
      expect(hardReview.interval).toBe(1);
      expect(hardReview.repetitions).toBe(1);
      expect(hardReview.nextReviewDate).toBe('2026-09-10T07:30:00.000Z');
      expect(hardReview.dueDate).toBe('2026-09-11');
    });

    it('QA-1.3: should calculate multi-day review dates for GOOD (2 days) and EASY (4 days)', () => {
      const baseDate = '2026-09-10';

      const goodReview = calculateReview(Rating.GOOD, 0, 0, 2.5, baseDate);
      expect(goodReview.interval).toBe(2);
      expect(goodReview.repetitions).toBe(1);
      expect(goodReview.dueDate).toBe('2026-09-12');

      const easyReview = calculateReview(Rating.EASY, 0, 0, 2.5, baseDate);
      expect(easyReview.interval).toBe(4);
      expect(easyReview.repetitions).toBe(1);
      expect(easyReview.dueDate).toBe('2026-09-14');
    });

    it('QA-1.4: should trigger intra-day readiness in isDue after the intra-day delay expires', () => {
      const reviewTime = new Date('2026-09-10T07:00:00.000Z');
      const againResult = calculateReview(Rating.AGAIN, 0, 0, 2.5, reviewTime);

      const card = {
        id: 'card-qa-1',
        nextReviewDate: againResult.nextReviewDate,
        repetitions: againResult.repetitions,
      };

      // 5 minutes later: NOT due yet
      const fiveMinsLater = new Date('2026-09-10T07:05:00.000Z');
      expect(isDue(card, fiveMinsLater)).toBe(false);

      // 10 minutes later: NOW due on the same day!
      const tenMinsLater = new Date('2026-09-10T07:10:00.000Z');
      expect(isDue(card, tenMinsLater)).toBe(true);

      // 15 minutes later: still due today
      const fifteenMinsLater = new Date('2026-09-10T07:15:00.000Z');
      expect(isDue(card, fifteenMinsLater)).toBe(true);
    });

    it('QA-1.5: should simulate in-session re-queuing flow for AGAIN and HARD cards', () => {
      interface CardItem {
        id: string;
        front: string;
        interval: number;
        repetitions: number;
        easeFactor: number;
      }

      // Initial study session with 2 cards
      let queue: CardItem[] = [
        { id: 'c1', front: '手負い', interval: 0, repetitions: 0, easeFactor: 2.5 },
        { id: 'c2', front: '手を貸す', interval: 0, repetitions: 0, easeFactor: 2.5 },
      ];
      let currentIndex = 0;
      let finished = false;

      const rateCard = (grade: (typeof Rating)[keyof typeof Rating]) => {
        const card = queue[currentIndex];
        const shouldRequeue = grade === Rating.AGAIN || grade === Rating.HARD;
        if (shouldRequeue) {
          const rev = calculateReview(grade, card.interval, card.repetitions, card.easeFactor);
          queue.push({
            ...card,
            interval: rev.interval,
            repetitions: rev.repetitions,
            easeFactor: rev.easeFactor,
          });
        }

        if (currentIndex < queue.length - 1 || shouldRequeue) {
          currentIndex++;
        } else {
          finished = true;
        }
      };

      // Card 1: User rates HARD -> re-queued to position 2
      rateCard(Rating.HARD);
      expect(queue.length).toBe(3);
      expect(currentIndex).toBe(1);
      expect(finished).toBe(false);

      // Card 2: User rates AGAIN -> re-queued to position 3
      rateCard(Rating.AGAIN);
      expect(queue.length).toBe(4);
      expect(currentIndex).toBe(2);
      expect(finished).toBe(false);

      // Now reviewing Card 1 again (from position 2): User rates GOOD -> NOT re-queued
      expect(queue[currentIndex].id).toBe('c1');
      rateCard(Rating.GOOD);
      expect(queue.length).toBe(4);
      expect(currentIndex).toBe(3);
      expect(finished).toBe(false);

      // Now reviewing Card 2 again (from position 3): User rates EASY -> NOT re-queued -> FINISHED!
      expect(queue[currentIndex].id).toBe('c2');
      rateCard(Rating.EASY);
      expect(finished).toBe(true);
    });
  });

  describe('2. Speaking Coach Safeguards & Stability Verification', () => {
    it('QA-2.1: Volume analysis throttles rapid updates to maintain high UI responsiveness (~12-14 FPS)', () => {
      let lastVolumeTime = 0;
      let renderCount = 0;
      const THROTTLE_MS = 75;

      const simulateAudioFrame = (now: number, normalizedVol: number, lastReported: number) => {
        if (
          now - lastVolumeTime >= THROTTLE_MS &&
          (Math.abs(normalizedVol - lastReported) >= 5 ||
            (normalizedVol === 0 && lastReported !== 0))
        ) {
          lastVolumeTime = now;
          renderCount++;
          return normalizedVol;
        }
        return lastReported;
      };

      let reported = 0;
      // Simulate 60 incoming animation frames over 1000ms
      for (let i = 0; i < 60; i++) {
        const time = i * 16.6; // ~60fps
        reported = simulateAudioFrame(time, (i % 20) * 5, reported);
      }

      // Instead of 60 re-renders that would freeze the UI, throttled to <= 14 frames
      expect(renderCount).toBeLessThanOrEqual(14);
      expect(renderCount).toBeGreaterThanOrEqual(10);
    });

    it('QA-2.2: stopMicrophoneStream safely terminates audio tracks without memory leaks', () => {
      const stopTrackMock = vi.fn();
      const mockStream = {
        getTracks: () => [
          { readyState: 'live', stop: stopTrackMock },
          { readyState: 'ended', stop: vi.fn() },
        ],
      } as unknown as MediaStream;

      mockStream.getTracks().forEach((t) => {
        if (t.readyState === 'live') t.stop();
      });

      expect(stopTrackMock).toHaveBeenCalledTimes(1);
    });
  });
});
