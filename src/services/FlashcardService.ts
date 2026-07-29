import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { generateUUID } from '../utils/uuid';

const CACHE_KEY_PREFIX = 'study_planner_flashcards_cache_';

export const getLocalFlashcardCache = (userId: string): Flashcard[] => {
    try {
        const raw = localStorage.getItem(CACHE_KEY_PREFIX + userId);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

export const setLocalFlashcardCache = (userId: string, cards: Flashcard[]): void => {
    try {
        localStorage.setItem(CACHE_KEY_PREFIX + userId, JSON.stringify(cards));
    } catch (e) {
        console.warn('Failed to update flashcard local cache:', e);
    }
};

export const FlashcardService = {
    async fetchFlashcards(userId: string): Promise<Flashcard[]> {
        console.log('[fetchFlashcards] Starting for userId:', userId);
        const localCached = getLocalFlashcardCache(userId);
        console.log('[fetchFlashcards] Local cache has', localCached.length, 'cards');
        let dbCards: Flashcard[] = [];

        try {
            // First try with deleted_at filter
            let { data, error } = await supabase
                .from('flashcards')
                .select('*')
                .eq('user_id', userId)
                .is('deleted_at', null);

            console.log('[fetchFlashcards] Query with deleted_at filter - error:', error?.message || 'none', 'data count:', data?.length ?? 'null');

            if (error && (error.code === '42703' || error.message?.includes('deleted_at'))) {
                console.log('[fetchFlashcards] deleted_at column not found, retrying without filter...');
                const retry = await supabase
                    .from('flashcards')
                    .select('*')
                    .eq('user_id', userId);
                data = retry.data;
                error = retry.error;
                console.log('[fetchFlashcards] Retry without filter - error:', error?.message || 'none', 'data count:', data?.length ?? 'null');
            }

            if (error) {
                console.error('[fetchFlashcards] ❌ DB query error:', error.message, error.code, error.details);
            }

            if (!error && data) {
                dbCards = (data as unknown as import('../types/supabase-types').DatabaseFlashcard[]).map(c => ({
                    id: c.id,
                    subjectId: c.subject_id,
                    front: c.front,
                    back: c.back,
                    nextReviewDate: c.next_review_date,
                    easeFactor: c.ease_factor,
                    interval: c.interval,
                    repetitions: c.repetitions,
                    deletedAt: c.deleted_at || undefined
                })) as Flashcard[];
                console.log('[fetchFlashcards] ✅ Got', dbCards.length, 'cards from DB');
            }
        } catch (error: any) {
            console.error('[fetchFlashcards] ❌ Exception:', error?.message || error);
        }

        // Merge DB cards and local cached cards (prefer DB version if present)
        const dbCardIds = new Set(dbCards.map(c => c.id));
        const missingLocalCards = localCached.filter(c => !dbCardIds.has(c.id) && !c.deletedAt);

        if (missingLocalCards.length > 0) {
            console.log(`[fetchFlashcards] Found ${missingLocalCards.length} cached cards NOT in DB, syncing...`);
            this.addFlashcardsBatch(userId, missingLocalCards).catch(e => console.warn('[fetchFlashcards] Background sync error:', e));
        }

        const merged = [...dbCards, ...missingLocalCards];
        console.log('[fetchFlashcards] Final merged count:', merged.length, '(DB:', dbCards.length, '+ cached missing:', missingLocalCards.length, ')');
        setLocalFlashcardCache(userId, merged);
        return merged;
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

        console.log('[addFlashcard] Attempting insert to Supabase:', JSON.stringify(dbCard));

        try {
            const { data, error } = await supabase
                .from('flashcards')
                .insert(dbCard)
                .select()
                .single();

            if (error) {
                console.error('[addFlashcard] ❌ Supabase INSERT error:', error.message, error.code, error.details, error.hint);
                
                // If it's a foreign key error on subject_id, try without subject_id
                if (error.code === '23503' && error.message?.includes('subject_id')) {
                    console.warn('[addFlashcard] Foreign key error on subject_id, retrying without it...');
                    const { data: retryData, error: retryError } = await supabase
                        .from('flashcards')
                        .insert({ ...dbCard, subject_id: null })
                        .select()
                        .single();
                    
                    if (retryError) {
                        console.error('[addFlashcard] ❌ Retry also failed:', retryError.message);
                        throw new Error(`Flashcard DB insert failed: ${retryError.message}`);
                    }
                    
                    if (retryData) {
                        const rc = retryData as import('../types/supabase-types').DatabaseFlashcard;
                        return {
                            id: rc.id, subjectId: rc.subject_id, front: rc.front, back: rc.back,
                            nextReviewDate: rc.next_review_date, easeFactor: rc.ease_factor,
                            interval: rc.interval, repetitions: rc.repetitions
                        } as Flashcard;
                    }
                }
                
                throw new Error(`Flashcard DB insert failed: ${error.message}`);
            }

            if (!data) {
                console.error('[addFlashcard] ❌ No data returned from Supabase insert (RLS issue?)');
                throw new Error('Flashcard insert returned no data - possible RLS policy issue');
            }

            console.log('[addFlashcard] ✅ Successfully inserted to DB, id:', data.id);
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
        } catch (error: any) {
            console.error('[addFlashcard] ❌ Exception during insert:', error?.message || error);
            throw error;
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

    async importFlashcards(userId: string, subjectId: string, cards: { front: string; back: string; example?: string }[]): Promise<Flashcard[]> {
        const dbCards = cards.map(c => ({
            id: generateUUID(),
            user_id: userId,
            subject_id: subjectId,
            front: c.front,
            back: (c.back + (c.example ? `\n\nMisol: ${c.example}` : '')).trim(),
            next_review_date: new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        }));

        const chunkSize = 50;
        const insertedCards: Flashcard[] = [];

        for (let i = 0; i < dbCards.length; i += chunkSize) {
            const chunk = dbCards.slice(i, i + chunkSize);
            try {
                const { data, error } = await supabase.from('flashcards').insert(chunk).select();
                if (error || !data) {
                    console.warn('[importFlashcards] DB insert chunk error, using local fallback:', error);
                    insertedCards.push(...chunk.map(c => ({
                        id: c.id,
                        subjectId: c.subject_id,
                        front: c.front,
                        back: c.back,
                        nextReviewDate: c.next_review_date,
                        easeFactor: c.ease_factor,
                        interval: c.interval,
                        repetitions: c.repetitions
                    })) as Flashcard[]);
                } else {
                    insertedCards.push(...(data as any[]).map(c => ({
                        id: c.id,
                        subjectId: c.subject_id,
                        front: c.front,
                        back: c.back,
                        nextReviewDate: c.next_review_date,
                        easeFactor: c.ease_factor,
                        interval: c.interval,
                        repetitions: c.repetitions
                    })) as Flashcard[]);
                }
            } catch (err) {
                console.error('[importFlashcards] Chunk exception:', err);
                insertedCards.push(...chunk.map(c => ({
                    id: c.id,
                    subjectId: c.subject_id,
                    front: c.front,
                    back: c.back,
                    nextReviewDate: c.next_review_date,
                    easeFactor: c.ease_factor,
                    interval: c.interval,
                    repetitions: c.repetitions
                })) as Flashcard[]);
            }
        }
        return insertedCards;
    }
};
