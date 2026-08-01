import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { FlashcardService, setLocalFlashcardCache } from '../services/FlashcardService';

export const useFlashcards = (onCardReviewed?: (amount: number) => Promise<void>) => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    const addFlashcard = async (cardData: Partial<Flashcard>) => {
        console.log('[addFlashcard] Starting...', cardData);
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const newCard = await FlashcardService.addFlashcard(activeUserId, cardData);
        if (newCard) {
            setFlashcards(prev => {
                if (prev.some(c => c.id === newCard.id)) return prev;
                const updated = [...prev, newCard];
                setLocalFlashcardCache(activeUserId, updated);
                return updated;
            });
        }
        return newCard;
    };

    const addFlashcardsBatch = async (cardsData: Partial<Flashcard>[]) => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        let fallbackSubjectId: string | null = null;
        if (activeUserId !== 'local_user') {
            const { data: subjectsData } = await supabase.from('subjects').select('id, name').eq('user_id', activeUserId).limit(1);
            fallbackSubjectId = subjectsData && subjectsData.length > 0 ? subjectsData[0].id : null;
        }

        const normalizedCards = cardsData.map(c => ({
            ...c,
            subjectId: c.subjectId || fallbackSubjectId || undefined
        }));

        const newCards = await FlashcardService.addFlashcardsBatch(activeUserId, normalizedCards);
        if (newCards.length > 0) {
            setFlashcards(prev => {
                const existingIds = new Set(prev.map(c => c.id));
                const filteredNew = newCards.filter(c => !existingIds.has(c.id));
                const updated = [...prev, ...filteredNew];
                setLocalFlashcardCache(activeUserId, updated);
                return updated;
            });
        }
        return newCards;
    };

    const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
        setFlashcards(prev => {
            const updated = prev.map(c => c.id === id ? { ...c, ...updates } : c);
            supabase.auth.getUser().then(({ data: { user } }) => {
                if (user) setLocalFlashcardCache(user.id, updated);
            });
            return updated;
        });
        try {
            await FlashcardService.updateFlashcard(id, updates);
        } catch (error) {
            console.error("Failed to update flashcard:", error);
        }
    };

    const deleteFlashcard = async (id: string, permanent = false) => {
        setFlashcards(prev => {
            const updated = prev.filter(c => c.id !== id);
            supabase.auth.getUser().then(({ data: { user } }) => {
                if (user) setLocalFlashcardCache(user.id, updated);
            });
            return updated;
        });
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

        const importedCards = await FlashcardService.importFlashcards(user.id, subjectId, cards);
        if (importedCards && importedCards.length > 0) {
            setFlashcards(prev => {
                const existingIds = new Set(prev.map(c => c.id));
                const filteredNew = importedCards.filter(c => !existingIds.has(c.id));
                return [...prev, ...filteredNew];
            });
            return true;
        }
        return false;
    };

    const setFlashcardsState = useCallback((value: React.SetStateAction<Flashcard[]>) => {
        setFlashcards(value);
    }, []);

    return {
        flashcards,
        setFlashcards: setFlashcardsState,
        addFlashcard,
        addFlashcardsBatch,
        updateFlashcard,
        deleteFlashcard,
        restoreFlashcard,
        reviewFlashcard,
        importFlashcards
    };
};
