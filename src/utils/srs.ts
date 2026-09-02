/**
 * Standard SuperMemo-2 (SM-2) algorithm for Spaced Repetition Flashcards.
 * Implements deterministic calendar-day semantics safe from timezone and DST artifacts.
 */

export interface ReviewResult {
  interval: number; // in days
  repetitions: number;
  easeFactor: number;
  dueDate: string; // "YYYY-MM-DD" calendar date
  nextReviewDate: string; // ISO String ("YYYY-MM-DDT00:00:00.000Z")
  dueInDays: number;
}

export const Rating = {
  AGAIN: 0, // Complete blackout / reset
  HARD: 1, // Correct response with hesitation
  GOOD: 2, // Perfect response with hesitation
  EASY: 3, // Perfect response
} as const;

export type Grade = (typeof Rating)[keyof typeof Rating];

/**
 * Adds an integer number of calendar days in a timezone-invariant manner.
 * Operates on UTC date boundaries to eliminate local DST shift artifacts.
 */
export function addCalendarDays(
  dateInput: string | Date = new Date(),
  daysToAdd: number = 1,
): { dueDate: string; nextReviewDate: string } {
  let year: number, month: number, day: number;

  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}/.test(dateInput)) {
    const parts = dateInput.substring(0, 10).split('-');
    year = parseInt(parts[0], 10);
    month = parseInt(parts[1], 10) - 1;
    day = parseInt(parts[2], 10);
  } else {
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
  }

  if (isNaN(daysToAdd) || !isFinite(daysToAdd)) {
    throw new RangeError('Invalid time value');
  }

  // Construct pure UTC calendar date to avoid any local DST shift artifacts
  const target = new Date(Date.UTC(year, month, day + daysToAdd, 0, 0, 0, 0));
  if (isNaN(target.getTime())) {
    throw new RangeError('Invalid time value');
  }
  const targetYear = target.getUTCFullYear();
  const targetMonth = String(target.getUTCMonth() + 1).padStart(2, '0');
  const targetDay = String(target.getUTCDate()).padStart(2, '0');
  const dueDateStr = `${targetYear}-${targetMonth}-${targetDay}`;

  return {
    dueDate: dueDateStr,
    nextReviewDate: `${dueDateStr}T00:00:00.000Z`,
  };
}

/**
 * Calculates next review interval, ease factor, and review date based on SM-2.
 */
export function calculateReview(
  grade: Grade,
  priorInterval: number = 0,
  priorRepetitions: number = 0,
  priorEaseFactor: number = 2.5,
  baseDate: string | Date = new Date(),
): ReviewResult {
  let newInterval: number;
  let newRepetitions: number;
  let newEaseFactor: number = priorEaseFactor;

  // Standard SM-2 0-5 grade mapping:
  // AGAIN (0) -> 0 (Fail)
  // HARD (1)  -> 3 (Pass with effort)
  // GOOD (2)  -> 4 (Pass good)
  // EASY (3)  -> 5 (Pass easy)
  const standardGrade = grade === 0 ? 0 : grade === 1 ? 3 : grade === 2 ? 4 : 5;

  if (standardGrade < 3) {
    // Failed (Again): reset repetitions and interval to 1 day
    newRepetitions = 0;
    newInterval = 1;
  } else {
    // Successful recall
    if (priorRepetitions === 0) {
      newInterval = grade === Rating.EASY ? 4 : grade === Rating.GOOD ? 2 : 1;
    } else if (priorRepetitions === 1) {
      newInterval = grade === Rating.EASY ? 10 : grade === Rating.GOOD ? 6 : 3;
    } else {
      const multiplier =
        grade === Rating.EASY
          ? priorEaseFactor * 1.3
          : grade === Rating.HARD
            ? 1.2
            : priorEaseFactor;
      newInterval = Math.max(priorInterval + 1, Math.round(priorInterval * multiplier));
    }
    newRepetitions = priorRepetitions + 1;
  }

  // Update Ease Factor (EF)
  newEaseFactor =
    priorEaseFactor + (0.1 - (5 - standardGrade) * (0.08 + (5 - standardGrade) * 0.02));
  if (newEaseFactor < 1.3) newEaseFactor = 1.3;

  const { dueDate, nextReviewDate } = addCalendarDays(baseDate, newInterval);

  return {
    interval: newInterval,
    repetitions: newRepetitions,
    easeFactor: Math.round(newEaseFactor * 100) / 100,
    dueDate,
    nextReviewDate,
    dueInDays: newInterval,
  };
}

/**
 * Pre-calculates preview intervals for all 4 ratings so the UI can display them on buttons.
 */
export function getPreviewIntervals(
  priorInterval: number = 0,
  priorRepetitions: number = 0,
  priorEaseFactor: number = 2.5,
  baseDate: string | Date = new Date(),
): Record<Grade, number> {
  return {
    [Rating.AGAIN]: calculateReview(
      Rating.AGAIN,
      priorInterval,
      priorRepetitions,
      priorEaseFactor,
      baseDate,
    ).interval,
    [Rating.HARD]: calculateReview(
      Rating.HARD,
      priorInterval,
      priorRepetitions,
      priorEaseFactor,
      baseDate,
    ).interval,
    [Rating.GOOD]: calculateReview(
      Rating.GOOD,
      priorInterval,
      priorRepetitions,
      priorEaseFactor,
      baseDate,
    ).interval,
    [Rating.EASY]: calculateReview(
      Rating.EASY,
      priorInterval,
      priorRepetitions,
      priorEaseFactor,
      baseDate,
    ).interval,
  };
}

/**
 * Checks if a flashcard is due for review today or in the past.
 */
export function isDue(
  card: {
    nextReviewDate?: string;
    nextReview?: string;
    dueDate?: string;
    repetitions?: number;
    repetition?: number;
  },
  now: Date = new Date(),
): boolean {
  const reviewDate = card.nextReviewDate || card.nextReview || card.dueDate;
  if (!reviewDate) {
    const reps = card.repetitions ?? card.repetition ?? 0;
    return reps > 0;
  }
  return new Date(reviewDate).getTime() <= now.getTime();
}

/**
 * Checks if a flashcard is overdue (due before start of today).
 */
export function isOverdue(
  card: {
    nextReviewDate?: string;
    nextReview?: string;
    dueDate?: string;
    repetitions?: number;
    repetition?: number;
  },
  now: Date = new Date(),
): boolean {
  const reviewDate = card.nextReviewDate || card.nextReview || card.dueDate;
  if (!reviewDate) return false;
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return new Date(reviewDate).getTime() < startOfToday;
}

/**
 * Checks if a card is brand new (never reviewed yet).
 */
export function isNew(card: { repetitions?: number; repetition?: number }): boolean {
  const reps = card.repetitions ?? card.repetition ?? 0;
  return reps === 0;
}

/**
 * Orders cards according to SuperMemo-2 spaced repetition priority:
 * 1. Overdue cards (sorted oldest nextReviewDate first)
 * 2. Due cards today
 * 3. Brand-new unstudied cards
 * 4. Cards not yet due (future reviews)
 */
export function sortCardsBySRSPriority<
  T extends {
    nextReviewDate?: string;
    nextReview?: string;
    dueDate?: string;
    repetitions?: number;
    repetition?: number;
  },
>(cards: T[], now: Date = new Date()): T[] {
  const overdue: T[] = [];
  const dueToday: T[] = [];
  const brandNew: T[] = [];
  const future: T[] = [];

  const nowTime = now.getTime();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  for (const card of cards) {
    const reviewDate = card.nextReviewDate || card.nextReview || card.dueDate;
    const reps = card.repetitions ?? card.repetition ?? 0;

    if (reps === 0) {
      brandNew.push(card);
    } else if (!reviewDate) {
      dueToday.push(card);
    } else {
      const cardTime = new Date(reviewDate).getTime();
      if (cardTime < startOfToday) {
        overdue.push(card);
      } else if (cardTime <= nowTime) {
        dueToday.push(card);
      } else {
        future.push(card);
      }
    }
  }

  // Sort overdue by oldest first (most urgent)
  overdue.sort((a, b) => {
    const timeA = new Date(a.nextReviewDate || a.nextReview || a.dueDate || 0).getTime();
    const timeB = new Date(b.nextReviewDate || b.nextReview || b.dueDate || 0).getTime();
    return timeA - timeB;
  });

  // Shuffle within due today and brand new for study variety
  dueToday.sort(() => Math.random() - 0.5);
  brandNew.sort(() => Math.random() - 0.5);
  future.sort((a, b) => {
    const timeA = new Date(a.nextReviewDate || a.nextReview || a.dueDate || 0).getTime();
    const timeB = new Date(b.nextReviewDate || b.nextReview || b.dueDate || 0).getTime();
    return timeA - timeB;
  });

  return [...overdue, ...dueToday, ...brandNew, ...future];
}
