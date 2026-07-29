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
            // Try simple query first (without deleted_at) — most reliable
            let { data, error } = await supabase
                .from('flashcards')
                .select('*')
                .eq('user_id', userId);

            console.log('[fetchFlashcards] Query result - error:', error?.message || 'none', 'data count:', data?.length ?? 'null');

            if (error) {
                console.error('[fetchFlashcards] ❌ DB query error:', error.message, error.code, error.details);
            }

            if (!error && data) {
                // Filter out soft-deleted cards client-side if the column exists
                const rawCards = data as unknown as import('../types/supabase-types').DatabaseFlashcard[];
                const activeCards = rawCards.filter(c => !c.deleted_at);
                
                dbCards = activeCards.map(c => ({
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
                console.log('[fetchFlashcards] ✅ Got', dbCards.length, 'active cards from DB (total raw:', rawCards.length, ')');
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
            subject_id: cardData.subjectId && cardData.subjectId.trim().length > 0 ? cardData.subjectId : null,
            front: cardData.front,
            back: cardData.back,
            next_review_date: new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        };

        console.log('[addFlashcard] Attempting upsert to Supabase:', JSON.stringify(dbCard));

        try {
            let { data, error } = await supabase
                .from('flashcards')
                .upsert(dbCard, { onConflict: 'id', ignoreDuplicates: false })
                .select()
                .single();

            if (error) {
                console.error('[addFlashcard] ❌ Supabase UPSERT error:', error.message, error.code, error.details);
                
                // If foreign key error or UUID syntax error on subject_id, retry with subject_id = null
                if (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id')) {
                    console.warn('[addFlashcard] Foreign key / UUID error on subject_id, retrying with subject_id = null...');
                    const { data: retryData, error: retryError } = await supabase
                        .from('flashcards')
                        .upsert({ ...dbCard, subject_id: null }, { onConflict: 'id' })
                        .select()
                        .single();
                    
                    if (retryError) {
                        console.error('[addFlashcard] ❌ Retry also failed:', retryError.message);
                    } else if (retryData) {
                        data = retryData;
                        error = null;
                    }
                }
            }

            const returnedCard = (data || dbCard) as import('../types/supabase-types').DatabaseFlashcard;
            const finalCard: Flashcard = {
                id: returnedCard.id || tempId,
                subjectId: returnedCard.subject_id || dbCard.subject_id || '',
                front: returnedCard.front || dbCard.front || '',
                back: returnedCard.back || dbCard.back || '',
                nextReviewDate: returnedCard.next_review_date || dbCard.next_review_date,
                easeFactor: returnedCard.ease_factor || 2.5,
                interval: returnedCard.interval || 0,
                repetitions: returnedCard.repetitions || 0,
                deletedAt: returnedCard.deleted_at || undefined
            };

            const currentCache = getLocalFlashcardCache(userId);
            const filteredCache = currentCache.filter(c => c.id !== finalCard.id);
            setLocalFlashcardCache(userId, [...filteredCache, finalCard]);

            return finalCard;
        } catch (error: any) {
            console.error('[addFlashcard] ❌ Exception during upsert:', error?.message || error);
            const fallback: Flashcard = {
                id: tempId,
                subjectId: dbCard.subject_id || '',
                front: dbCard.front || '',
                back: dbCard.back || '',
                nextReviewDate: dbCard.next_review_date,
                easeFactor: 2.5,
                interval: 0,
                repetitions: 0
            };
            const currentCache = getLocalFlashcardCache(userId);
            setLocalFlashcardCache(userId, [...currentCache.filter(c => c.id !== tempId), fallback]);
            return fallback;
        }
    },

    async addFlashcardsBatch(userId: string, cardsData: Partial<Flashcard>[]): Promise<Flashcard[]> {
        const tempCards = cardsData.map(c => ({
            id: c.id || generateUUID(),
            user_id: userId,
            subject_id: c.subjectId && c.subjectId.trim().length > 0 ? c.subjectId : null,
            front: c.front,
            back: c.back,
            next_review_date: c.nextReviewDate || new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        }));

        try {
            const chunkSize = 100;
            const insertedCards: Flashcard[] = [];

            for (let i = 0; i < tempCards.length; i += chunkSize) {
                let chunk = tempCards.slice(i, i + chunkSize);
                let { data, error } = await supabase
                    .from('flashcards')
                    .upsert(chunk, { onConflict: 'id', ignoreDuplicates: true })
                    .select();

                // If error due to subject_id foreign key constraint (23503) or invalid UUID (22P02), retry with subject_id = null
                if (error && (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id'))) {
                    console.warn('[addFlashcardsBatch] Foreign key / UUID error on subject_id, retrying chunk without subject_id:', error.message);
                    const sanitizedChunk = chunk.map(c => ({ ...c, subject_id: null }));
                    const retry = await supabase.from('flashcards').upsert(sanitizedChunk, { onConflict: 'id', ignoreDuplicates: true }).select();
                    data = retry.data;
                    error = retry.error;
                }

                if (error) {
                    console.error('[addFlashcardsBatch] ❌ Chunk DB upsert error:', error.message);
                }

                const resultRows = data && data.length > 0 ? data : chunk;
                insertedCards.push(...(resultRows as any[]).map(c => ({
                    id: c.id,
                    subjectId: c.subject_id || c.subjectId,
                    front: c.front,
                    back: c.back,
                    nextReviewDate: c.next_review_date || c.nextReviewDate,
                    easeFactor: c.ease_factor || c.easeFactor || 2.5,
                    interval: c.interval || 0,
                    repetitions: c.repetitions || 0
                })) as Flashcard[]);
            }

            const currentCache = getLocalFlashcardCache(userId);
            const mergedCache = [...currentCache, ...insertedCards.filter(ic => !currentCache.some(cc => cc.id === ic.id))];
            setLocalFlashcardCache(userId, mergedCache);

            return insertedCards;
        } catch (err) {
            console.error('[addFlashcardsBatch] Exception:', err);
            const fallback = tempCards.map(c => ({
                id: c.id,
                subjectId: c.subject_id,
                front: c.front,
                back: c.back,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor,
                interval: c.interval,
                repetitions: c.repetitions
            })) as Flashcard[];

            const currentCache = getLocalFlashcardCache(userId);
            setLocalFlashcardCache(userId, [...currentCache, ...fallback]);
            return fallback;
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
            subject_id: subjectId && subjectId.trim().length > 0 ? subjectId : null,
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
            let chunk = dbCards.slice(i, i + chunkSize);
            let { data, error } = await supabase.from('flashcards').upsert(chunk, { onConflict: 'id', ignoreDuplicates: true }).select();

            // Retry without subject_id if foreign key or UUID syntax error occurs
            if (error && (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id'))) {
                console.warn('[importFlashcards] Foreign key / UUID error on subject_id, retrying chunk without subject_id:', error.message);
                const sanitizedChunk = chunk.map(c => ({ ...c, subject_id: null }));
                const retry = await supabase.from('flashcards').upsert(sanitizedChunk, { onConflict: 'id', ignoreDuplicates: true }).select();
                data = retry.data;
                error = retry.error;
            }

            if (error) {
                console.error('[importFlashcards] ❌ DB import chunk error:', error.message);
            }

            const resultRows = data && data.length > 0 ? data : chunk;
            insertedCards.push(...(resultRows as any[]).map(c => ({
                id: c.id,
                subjectId: c.subject_id || c.subjectId,
                front: c.front,
                back: c.back,
                nextReviewDate: c.next_review_date || c.nextReviewDate,
                easeFactor: c.ease_factor || c.easeFactor || 2.5,
                interval: c.interval || 0,
                repetitions: c.repetitions || 0
            })) as Flashcard[]);
        }

        const currentCache = getLocalFlashcardCache(userId);
        const mergedCache = [...currentCache, ...insertedCards.filter(ic => !currentCache.some(cc => cc.id === ic.id))];
        setLocalFlashcardCache(userId, mergedCache);

        return insertedCards;
    }
};
