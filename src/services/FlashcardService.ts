import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { generateUUID } from '../utils/uuid';

export const FlashcardService = {
    async fetchFlashcards(userId: string): Promise<Flashcard[]> {
        try {
            let { data, error } = await supabase
                .from('flashcards')
                .select('*')
                .eq('user_id', userId)
                .is('deleted_at', null);

            if (error && (error.code === '42703' || error.message?.includes('deleted_at'))) {
                const retry = await supabase
                    .from('flashcards')
                    .select('*')
                    .eq('user_id', userId);
                data = retry.data;
                error = retry.error;
            }

            if (error) throw error;
            if (!data) return [];

            const cards = (data as unknown as import('../types/supabase-types').DatabaseFlashcard[]).map(c => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor
            })) as Flashcard[];

            

            return cards;
        } catch (error) {
            console.error('Fetch flashcards error:', error);
            throw error;
        }
    },

    async addFlashcard(userId: string, cardData: Partial<Flashcard>): Promise<Flashcard | null> {
        const tempId = cardData.id || (generateUUID());
        const dbCard = {
            id: tempId,
            user_id: userId,
            subject_id: cardData.subjectId,
            front: cardData.front,
            back: cardData.back,
            next_review_date: new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        };

        try {
            const { data, error } = await supabase
                .from('flashcards')
                .insert(dbCard)
                .select()
                .single();

            if (error || !data) {
                return {
                    ...dbCard,
                    subjectId: dbCard.subject_id,
                    nextReviewDate: dbCard.next_review_date,
                    easeFactor: dbCard.ease_factor
                } as Flashcard;
            }

            const returnedCard = data as import('../types/supabase-types').DatabaseFlashcard;
            return {
                id: returnedCard.id,
                subjectId: returnedCard.subject_id,
                front: returnedCard.front,
                back: returnedCard.back,
                nextReviewDate: returnedCard.next_review_date,
                easeFactor: returnedCard.ease_factor,
                interval: returnedCard.interval,
                repetitions: returnedCard.repetitions,
                deletedAt: returnedCard.deleted_at || undefined
            } as Flashcard;
        } catch (error) {
            console.error('Add flashcard error:', error);
            return {
                ...dbCard,
                subjectId: dbCard.subject_id,
                nextReviewDate: dbCard.next_review_date,
                easeFactor: dbCard.ease_factor
            } as Flashcard;
        }
    },

    async addFlashcardsBatch(userId: string, cardsData: Partial<Flashcard>[]): Promise<Flashcard[]> {
        const tempCards = cardsData.map(c => ({
            id: c.id || generateUUID(),
            user_id: userId,
            subject_id: c.subjectId,
            front: c.front,
            back: c.back,
            next_review_date: c.nextReviewDate || new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        }));

        try {
            const chunkSize = 200;
            const insertedCards: Flashcard[] = [];

            for (let i = 0; i < tempCards.length; i += chunkSize) {
                const chunk = tempCards.slice(i, i + chunkSize);
                const { data, error } = await supabase
                    .from('flashcards')
                    .insert(chunk)
                    .select();

                if (error || !data) {
                    console.warn('[addFlashcardsBatch] DB insert chunk error, using local fallback:', error);
                    insertedCards.push(...chunk.map(c => ({
                        ...c,
                        subjectId: c.subject_id,
                        nextReviewDate: c.next_review_date,
                        easeFactor: c.ease_factor
                    })) as Flashcard[]);
                } else {
                    insertedCards.push(...(data as any[]).map(c => ({
                        ...c,
                        subjectId: c.subject_id,
                        nextReviewDate: c.next_review_date,
                        easeFactor: c.ease_factor
                    })) as Flashcard[]);
                }
            }
            return insertedCards;
        } catch (err) {
            console.error('[addFlashcardsBatch] Exception:', err);
            return tempCards.map(c => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor
            })) as Flashcard[];
        }
    },

    async updateFlashcard(id: string, updates: Partial<Flashcard>): Promise<void> {
        

        const dbUpdates: import('../types/supabase-types').DatabaseFlashcardUpdate = {};

        if (updates.nextReviewDate) dbUpdates.next_review_date = updates.nextReviewDate;
        if (updates.front) dbUpdates.front = updates.front;
        if (updates.back) dbUpdates.back = updates.back;
        if (updates.easeFactor) dbUpdates.ease_factor = updates.easeFactor;
        if (updates.interval !== undefined) dbUpdates.interval = updates.interval;
        if (updates.repetitions !== undefined) dbUpdates.repetitions = updates.repetitions;
        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;

        

        try {
            const { error } = await supabase.from('flashcards').update(dbUpdates).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Update flashcard error:', error);
            throw error;
        }
    },

    async deleteFlashcard(id: string, permanent = false): Promise<void> {
        if (permanent) {
            try {
                const { error } = await supabase.from('flashcards').delete().eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Delete flashcard error:', error);
                throw error;
            }
        } else {
            try {
                const { error } = await supabase.from('flashcards').update({ deleted_at: new Date().toISOString() }).eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Soft delete flashcard error:', error);
                throw error;
            }
        }
    },

    async restoreFlashcard(id: string): Promise<void> {
        

        

        try {
            const { error } = await supabase.from('flashcards').update({ deleted_at: null }).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Restore flashcard error:', error);
            throw error;
        }
    },

    async importFlashcards(userId: string, subjectId: string, cards: { front: string; back: string; example?: string }[]): Promise<boolean> {
        try {
            const dbCards = cards.map(c => ({
                id: generateUUID(),
                user_id: userId,
                subject_id: subjectId,
                front: c.front,
                back: c.back + (c.example ? `\n\nMisol: ${c.example}` : ''),
                next_review_date: new Date().toISOString(),
                ease_factor: 2.5,
                interval: 0,
                repetitions: 0
            }));

            

            

            const { error } = await supabase.from('flashcards').insert(dbCards);
            if (error) throw error;
            return true;
        } catch (e) {
            console.error("Import failed, falling back to local queue", e);
            return false;
        }
    }
};
