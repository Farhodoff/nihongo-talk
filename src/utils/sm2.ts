/**
 * SuperMemo SM-2 Spaced Repetition Algorithm implementation for Study Planner Flashcards
 */

export interface SM2Input {
    interval: number; // in days
    repetitions: number;
    easeFactor: number;
}

export interface SM2Output {
    interval: number;
    repetitions: number;
    easeFactor: number;
    nextReviewDate: Date;
}

/**
 * Quality ratings:
 * 1: Again (Qayta) - Complete lapse, incorrect response
 * 2: Hard (Qiyin) - Correct response, but with great difficulty
 * 3: Good (Yaxshi) - Correct response after a hesitate
 * 4: Easy (Oson) - Perfect response, effortless
 */
export type Rating = 1 | 2 | 3 | 4;

export function calculateSM2(input: SM2Input, rating: Rating): SM2Output {
    let { interval, repetitions, easeFactor } = input;

    // Quality mapping for SM2 formula (0 to 5 scale):
    // Rating 1 -> Quality 1 (Complete failure)
    // Rating 2 -> Quality 3 (Hard)
    // Rating 3 -> Quality 4 (Good)
    // Rating 4 -> Quality 5 (Easy)
    const qualityMap: Record<Rating, number> = {
        1: 1,
        2: 3,
        3: 4,
        4: 5
    };
    const q = qualityMap[rating];

    if (q < 3) {
        // Incorrect response or complete lapse
        repetitions = 0;
        interval = 1;
    } else {
        // Correct response
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
    }

    // Calculate new Ease Factor (EF): EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    
    // Minimum Ease Factor limit
    if (easeFactor < 1.3) {
        easeFactor = 1.3;
    }

    // Calculate next review date
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + interval);

    return {
        interval,
        repetitions,
        easeFactor: Number(easeFactor.toFixed(2)),
        nextReviewDate
    };
}
