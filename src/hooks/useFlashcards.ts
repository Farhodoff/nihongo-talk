import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { FlashcardService } from '../services/FlashcardService';

export const useFlashcards = (onCardReviewed?: (amount: number) => Promise<void>) => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    const addFlashcard = async (cardData: Partial<Flashcard>) => {
        console.log('[addFlashcard] Starting...', cardData);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.error('[addFlashcard] No user authenticated');
            throw new Error('User not authenticated');
        }
        console.log('[addFlashcard] User ID:', user.id);

        const newCard = await FlashcardService.addFlashcard(user.id, cardData);
        console.log('[addFlashcard] Card saved to DB:', newCard);
        if (newCard) {
            setFlashcards(prev => {
                if (prev.some(c => c.id === newCard.id)) return prev;
                const updated = [...prev, newCard];
                console.log('[addFlashcard] Updated local state, total cards:', updated.length);
                return updated;
            });
        }
        return newCard;
    };

    const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
        setFlashcards(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
        try {
            await FlashcardService.updateFlashcard(id, updates);
        } catch (error) {
            console.error("Failed to update flashcard:", error);
            // Revert logic could be added here
        }
    };

    const deleteFlashcard = async (id: string, permanent = false) => {
        setFlashcards(prev => prev.filter(c => c.id !== id));
        try {
            await FlashcardService.deleteFlashcard(id, permanent);
        } catch (error) {
            console.error("Failed to delete flashcard:", error);
        }
    };

    const restoreFlashcard = async (id: string) => {
        try {
            await FlashcardService.restoreFlashcard(id);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const updatedCards = await FlashcardService.fetchFlashcards(user.id);
                setFlashcards(updatedCards);
            }
        } catch (error) {
            console.error("Failed to restore flashcard:", error);
        }
    };

    const reviewFlashcard = async (id: string, rating: number) => {
        const now = new Date();
        const nextReviewDate = new Date(now);

        // SRS Logic (Custom as per user request)
        // 1 (Bilmayman) -> 10 minutes
        // 2 (Qiyin) -> 1 day
        // 3 (Yaxshi) -> 3 days
        // 4 (Juda oson) -> 7 days

        switch (rating) {
            case 1: // Again / Bilmayman
                nextReviewDate.setMinutes(now.getMinutes() + 10);
                break;
            case 2: // Hard / Qiyin
                nextReviewDate.setDate(now.getDate() + 1);
                break;
            case 3: // Good / Yaxshi
                nextReviewDate.setDate(now.getDate() + 3);
                break;
            case 4: // Easy / Juda oson
                nextReviewDate.setDate(now.getDate() + 7);
                break;
            default:
                nextReviewDate.setDate(now.getDate() + 1);
        }

        const updates = {
            nextReviewDate: nextReviewDate.toISOString(),
        };

        try {
            await updateFlashcard(id, updates);
            if (onCardReviewed) {
                await onCardReviewed(rating * 2); // XP based on performance: 2, 4, 6, 8 XP
            }
        } catch (error) {
            console.error("Failed to review flashcard:", error);
        }
    };

    const importFlashcards = async (subjectId: string, cards: { front: string; back: string; example?: string }[]) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;

        const success = await FlashcardService.importFlashcards(user.id, subjectId, cards);
        if (success) {
            // Reload cards to ensure we have the latest
            try {
                const updatedCards = await FlashcardService.fetchFlashcards(user.id);
                setFlashcards(updatedCards);
            } catch (e) {
                console.error("Failed to reload cards after import", e);
            }
        }
        return success;
    };

    const setFlashcardsState = useCallback((newCards: Flashcard[]) => {
        setFlashcards(newCards);
    }, []);

    return {
        flashcards,
        setFlashcards: setFlashcardsState,
        addFlashcard,
        updateFlashcard,
        deleteFlashcard,
        restoreFlashcard,
        reviewFlashcard,
        importFlashcards
    };
};
