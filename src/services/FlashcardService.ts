import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { dbOps } from '../utils/db';
import { generateUUID } from '../utils/uuid';
import { queueMutation } from '../utils/offlineSync';

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

            // Cache locally
            await dbOps.clear('flashcards');
            await dbOps.putAll('flashcards', cards);

            return cards;
        } catch (error) {
            console.error('Fetch flashcards error, falling back to local:', error);
            const localCards = await dbOps.getAll('flashcards') as Flashcard[];
            return localCards.filter(c => !c.deletedAt);
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
            next_review_date: new Date().toISOString(), // Default to now
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        };

        const localCard: Flashcard = {
            id: tempId,
            subjectId: dbCard.subject_id || '',
            front: dbCard.front || '',
            back: dbCard.back || '',
            nextReviewDate: dbCard.next_review_date,
            easeFactor: dbCard.ease_factor,
            interval: dbCard.interval,
            repetitions: dbCard.repetitions,
        };

        await dbOps.put('flashcards', localCard);

        if (!navigator.onLine) {
            queueMutation('flashcards', 'insert', dbCard);
            return localCard;
        }

        try {
            const { data, error } = await supabase
                .from('flashcards')
                .insert(dbCard)
                .select()
                .single();

            if (error) throw error;
            const returnedCard = data as import('../types/supabase-types').DatabaseFlashcard;
            
            const finalCard: Flashcard = {
                id: returnedCard.id,
                subjectId: returnedCard.subject_id,
                front: returnedCard.front,
                back: returnedCard.back,
                nextReviewDate: returnedCard.next_review_date,
                easeFactor: returnedCard.ease_factor,
                interval: returnedCard.interval,
                repetitions: returnedCard.repetitions,
                deletedAt: returnedCard.deleted_at || undefined
            };

            await dbOps.delete('flashcards', tempId);
            await dbOps.put('flashcards', finalCard);

            return finalCard;
        } catch (error) {
            console.error('Add flashcard error, queued for sync:', error);
            queueMutation('flashcards', 'insert', dbCard);
            return localCard;
        }
    },

    async updateFlashcard(id: string, updates: Partial<Flashcard>): Promise<void> {
        const localCards = await dbOps.getAll('flashcards') as Flashcard[];
        const card = localCards.find(c => c.id === id);
        if (card) {
            const updatedCard = { ...card, ...updates };
            await dbOps.put('flashcards', updatedCard);
        }

        const dbUpdates: import('../types/supabase-types').DatabaseFlashcardUpdate = {};

        if (updates.nextReviewDate) dbUpdates.next_review_date = updates.nextReviewDate;
        if (updates.front) dbUpdates.front = updates.front;
        if (updates.back) dbUpdates.back = updates.back;
        if (updates.easeFactor) dbUpdates.ease_factor = updates.easeFactor;
        if (updates.interval !== undefined) dbUpdates.interval = updates.interval;
        if (updates.repetitions !== undefined) dbUpdates.repetitions = updates.repetitions;
        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;

        if (!navigator.onLine) {
            queueMutation('flashcards', 'update', dbUpdates, id);
            return;
        }

        try {
            const { error } = await supabase.from('flashcards').update(dbUpdates).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Update flashcard error, queued for sync:', error);
            queueMutation('flashcards', 'update', dbUpdates, id);
        }
    },

    async deleteFlashcard(id: string, permanent = false): Promise<void> {
        const localCards = await dbOps.getAll('flashcards') as Flashcard[];
        const card = localCards.find(c => c.id === id);
        
        if (permanent) {
            await dbOps.delete('flashcards', id);
            if (!navigator.onLine) {
                queueMutation('flashcards', 'delete', null, id);
                return;
            }
            try {
                const { error } = await supabase.from('flashcards').delete().eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Delete flashcard error, queued for sync:', error);
                queueMutation('flashcards', 'delete', null, id);
            }
        } else {
            if (card) {
                const updatedCard = { ...card, deletedAt: new Date().toISOString() };
                await dbOps.put('flashcards', updatedCard);
            }
            if (!navigator.onLine) {
                queueMutation('flashcards', 'update', { deleted_at: new Date().toISOString() }, id);
                return;
            }
            try {
                const { error } = await supabase.from('flashcards').update({ deleted_at: new Date().toISOString() }).eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Soft delete flashcard error, queued for sync:', error);
                queueMutation('flashcards', 'update', { deleted_at: new Date().toISOString() }, id);
            }
        }
    },

    async restoreFlashcard(id: string): Promise<void> {
        const localCards = await dbOps.getAll('flashcards') as Flashcard[];
        const card = localCards.find(c => c.id === id);
        if (card) {
            const updatedCard = { ...card };
            delete updatedCard.deletedAt;
            await dbOps.put('flashcards', updatedCard);
        }

        if (!navigator.onLine) {
            queueMutation('flashcards', 'update', { deleted_at: null }, id);
            return;
        }

        try {
            const { error } = await supabase.from('flashcards').update({ deleted_at: null }).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Restore flashcard error, queued for sync:', error);
            queueMutation('flashcards', 'update', { deleted_at: null }, id);
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

            // Local cache
            const localCards: Flashcard[] = dbCards.map(c => ({
                id: c.id,
                subjectId: c.subject_id,
                front: c.front,
                back: c.back,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor,
                interval: c.interval,
                repetitions: c.repetitions,
            }));
            await dbOps.putAll('flashcards', localCards);

            if (!navigator.onLine) {
                for (const dbCard of dbCards) {
                    queueMutation('flashcards', 'insert', dbCard);
                }
                return true;
            }

            const { error } = await supabase.from('flashcards').insert(dbCards);
            if (error) throw error;
            return true;
        } catch (e) {
            console.error("Import failed, falling back to local queue", e);
            return false;
        }
    }
};
