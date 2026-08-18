/**
 * Standard SuperMemo-2 (SM-2) algorithm for Spaced Repetition Flashcards.
 */

export interface ReviewResult {
    interval: number; // in days
    repetitions: number;
    easeFactor: number;
    nextReviewDate: string; // ISO String
}

export const Rating = {
    AGAIN: 0, // Complete blackout / reset
    HARD: 1,  // Correct response with hesitation
    GOOD: 2,  // Perfect response with hesitation
    EASY: 3,  // Perfect response
} as const;

export type Grade = typeof Rating[keyof typeof Rating];

/**
 * Calculates next review interval, ease factor, and review date based on SM-2.
 */
export function calculateReview(
    grade: Grade,
    priorInterval: number = 0,
    priorRepetitions: number = 0,
    priorEaseFactor: number = 2.5
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
            const multiplier = grade === Rating.EASY ? priorEaseFactor * 1.3 : grade === Rating.HARD ? 1.2 : priorEaseFactor;
            newInterval = Math.max(priorInterval + 1, Math.round(priorInterval * multiplier));
        }
        newRepetitions = priorRepetitions + 1;
    }

    // Update Ease Factor (EF)
    newEaseFactor = priorEaseFactor + (0.1 - (5 - standardGrade) * (0.08 + (5 - standardGrade) * 0.02));
    if (newEaseFactor < 1.3) newEaseFactor = 1.3;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);
    nextDate.setHours(4, 0, 0, 0);

    return {
        interval: newInterval,
        repetitions: newRepetitions,
        easeFactor: Math.round(newEaseFactor * 100) / 100,
        nextReviewDate: nextDate.toISOString()
    };
}

/**
 * Pre-calculates preview intervals for all 4 ratings so the UI can display them on buttons.
 */
export function getPreviewIntervals(
    priorInterval: number = 0,
    priorRepetitions: number = 0,
    priorEaseFactor: number = 2.5
): Record<Grade, number> {
    return {
        [Rating.AGAIN]: calculateReview(Rating.AGAIN, priorInterval, priorRepetitions, priorEaseFactor).interval,
        [Rating.HARD]: calculateReview(Rating.HARD, priorInterval, priorRepetitions, priorEaseFactor).interval,
        [Rating.GOOD]: calculateReview(Rating.GOOD, priorInterval, priorRepetitions, priorEaseFactor).interval,
        [Rating.EASY]: calculateReview(Rating.EASY, priorInterval, priorRepetitions, priorEaseFactor).interval,
    };
}
