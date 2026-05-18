import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';

export const FlashcardService = {
    async fetchFlashcards(userId: string): Promise<Flashcard[]> {
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

        return (data as unknown as import('../types/supabase-types').DatabaseFlashcard[]).map(c => ({
            ...c,
            subjectId: c.subject_id,
            nextReviewDate: c.next_review_date,
            easeFactor: c.ease_factor
        })) as Flashcard[];
    },

    async addFlashcard(userId: string, cardData: Partial<Flashcard>): Promise<Flashcard | null> {
        const dbCard = {
            user_id: userId,
            subject_id: cardData.subjectId,
            front: cardData.front,
            back: cardData.back,
            next_review_date: new Date().toISOString(), // Default to now
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        };

        const { data, error } = await supabase
            .from('flashcards')
            .insert(dbCard)
            .select()
            .single();

        if (error) throw error;
        if (!data) return null;

        return {
            ...data,
            subjectId: data.subject_id,
            nextReviewDate: data.next_review_date,
            easeFactor: data.ease_factor
        } as any;
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


        // Clean up other potential inconsistencies if necessary

        const { error } = await supabase.from('flashcards').update(dbUpdates).eq('id', id);
        if (error) throw error;
    },

    async deleteFlashcard(id: string, permanent = false): Promise<void> {
        if (permanent) {
            const { error } = await supabase.from('flashcards').delete().eq('id', id);
            if (error) throw error;
        } else {
            const { error } = await supabase.from('flashcards').update({ deleted_at: new Date().toISOString() }).eq('id', id);
            if (error) throw error;
        }
    },

    async restoreFlashcard(id: string): Promise<void> {
        const { error } = await supabase.from('flashcards').update({ deleted_at: null }).eq('id', id);
        if (error) throw error;
    },

    async importFlashcards(userId: string, subjectId: string, cards: { front: string; back: string; example?: string }[]): Promise<boolean> {
        try {
            const dbCards = cards.map(c => ({
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
            console.error("Import failed", e);
            return false;
        }
    }
};
