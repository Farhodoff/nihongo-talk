import { Flashcard, Subject } from '../types';

/**
 * Calculates a mastery score (0-100) for a given set of flashcards.
 * Uses SRS interval as the primary proxy for retention.
 */
export const calculateMasteryScore = (cards: Flashcard[]): number => {
    if (cards.length === 0) return 0;

    let totalScore = 0;

    cards.forEach(card => {
        // New cards or never reviewed
        if (card.repetitions === 0) {
            totalScore += 0;
            return;
        }

        // Interval based scoring
        // > 21 days: Solidly mastered (100%)
        // > 14 days: Very good (85%)
        // > 6 days: Learning well (60%)
        // > 3 days: Getting there (40%)
        // > 1 day: Just reviewed / Weak (20%)
        // <= 1 day: Struggling (10%)

        if (card.interval >= 21) {
            totalScore += 100;
        } else if (card.interval >= 14) {
            totalScore += 85;
        } else if (card.interval >= 7) {
            totalScore += 60;
        } else if (card.interval >= 3) {
            totalScore += 40;
        } else if (card.interval > 1) {
            totalScore += 20;
        } else {
            totalScore += 10;
        }
    });

    return Math.round(totalScore / cards.length);
};

export interface SubjectAnalytics {
    subjectId: string;
    subjectName: string;
    totalCards: number;
    masteredCards: number; // Interval >= 21
    strugglingCards: number; // Interval <= 1 && Repetitions > 0
    masteryScore: number; // 0-100
}

export const getSubjectAnalytics = (subjects: Subject[], flashcards: Flashcard[]): SubjectAnalytics[] => {
    return subjects.map(subject => {
        const subjectCards = flashcards.filter(c => c.subjectId === subject.id);
        const masteryScore = calculateMasteryScore(subjectCards);

        const masteredCards = subjectCards.filter(c => c.interval >= 21).length;
        const strugglingCards = subjectCards.filter(c => c.interval <= 1 && c.repetitions > 0).length;

        return {
            subjectId: subject.id,
            subjectName: subject.name,
            totalCards: subjectCards.length,
            masteredCards,
            strugglingCards,
            masteryScore
        };
    }).sort((a, b) => a.masteryScore - b.masteryScore); // Ascending: Weakest first
};
