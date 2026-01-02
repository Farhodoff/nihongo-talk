/**
 * Simple implementation of the SuperMemo-2 (SM-2) algorithm.
 */

export interface ReviewResult {
    interval: number;
    repetitions: number;
    easeFactor: number;
    nextReviewDate: string; // ISO String
}

export const Rating = {
    AGAIN: 0, // Complete blackout
    HARD: 1,  // Correct response with hesitation
    GOOD: 2,  // Perfect response with hesitation
    EASY: 3,  // Perfect response
} as const;

export type Grade = typeof Rating[keyof typeof Rating];

export function calculateReview(
    grade: Grade,
    priorInterval: number,
    priorRepetitions: number,
    priorEaseFactor: number
): ReviewResult {
    let newInterval: number;
    let newRepetitions: number;
    let newEaseFactor: number;

    if (grade >= Rating.GOOD) { // Correct (Good or Easy in simplified 0-3 scale, usually 3-5 in standard SM-2)
        // Adjust for simplified 0-3 scale to standard 0-5 mapping logic approximation:
        // We treat 2 (Good) as passing, anything less as failing/resetting in strict mode, 
        // but here "Hard" (1) might just keep interval same? 
        // Let's stick to standard logic: 
        // if grade >= 3 (standard): success.

        // Mapping our 0-3 to Standard 0-5:
        // AGAIN (0) -> 0
        // HARD (1) -> 3
        // GOOD (2) -> 4
        // EASY (3) -> 5

        const standardGrade = grade === 0 ? 0 : grade === 1 ? 3 : grade === 2 ? 4 : 5;

        if (standardGrade >= 3) {
            if (priorRepetitions === 0) {
                newInterval = 1;
            } else if (priorRepetitions === 1) {
                newInterval = 6;
            } else {
                newInterval = Math.round(priorInterval * priorEaseFactor);
            }
            newRepetitions = priorRepetitions + 1;
        } else {
            newInterval = 1;
            newRepetitions = 0;
        }

        newEaseFactor = priorEaseFactor + (0.1 - (5 - standardGrade) * (0.08 + (5 - standardGrade) * 0.02));
        if (newEaseFactor < 1.3) newEaseFactor = 1.3;

    } else {
        // Failed (Again) or Hard (if we treat Hard as retry immediately for safety)
        newRepetitions = 0;
        newInterval = 1;
        newEaseFactor = priorEaseFactor; // Keep ease factor same on fail
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);

    // For "Again" or immediate review, maybe set minutes? 
    // Simplified: "Again" means tomorrow. Ideally it means 1 minute later. 
    // For this web app, let's keep it daily granularity for now.

    return {
        interval: newInterval,
        repetitions: newRepetitions,
        easeFactor: state_grade_adjust(newEaseFactor),
        nextReviewDate: nextDate.toISOString()
    };
}

function state_grade_adjust(ef: number) {
    // float precision handling
    return Math.round(ef * 100) / 100;
}
