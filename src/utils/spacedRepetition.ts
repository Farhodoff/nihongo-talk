import { Flashcard } from '../types';

export interface SM2Result {
    interval: number;
    easeFactor: number;
    repetitions: number;
    nextReviewDate: string;
}

export type Grade = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

/**
 * Calculates SuperMemo-2 (SM-2) Spaced Repetition interval
 * Grade values:
 * 1 = Again (Q=2: Fail, reset interval)
 * 2 = Hard (Q=3: Pass with difficulty)
 * 3 = Good (Q=4: Pass with hesitation)
 * 4 = Easy (Q=5: Perfect recall)
 */
export const calculateSM2 = (
    currentInterval: number = 0,
    currentEaseFactor: number = 2.5,
    currentRepetitions: number = 0,
    grade: Grade
): SM2Result => {
    let interval = currentInterval;
    let easeFactor = currentEaseFactor;
    let repetitions = currentRepetitions;

    if (grade < 2) {
        // Fail / Again
        repetitions = 0;
        interval = 1;
    } else {
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
    }

    // Adjust ease factor based on grade
    const q = grade + 1; // Map 1-4 to SM-2 quality 2-5
    easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    // Bonus for Easy grade
    if (grade === 4) {
        interval = Math.round(interval * 1.3);
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);

    return {
        interval,
        easeFactor: Number(easeFactor.toFixed(2)),
        repetitions,
        nextReviewDate: nextDate.toISOString()
    };
};

export const isCardDueForReview = (card: Flashcard): boolean => {
    if (!card.nextReviewDate) return true;
    const reviewDate = new Date(card.nextReviewDate);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return reviewDate <= today;
};
