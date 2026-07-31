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

const KNOWN_JLPT_FIXES: Record<string, string> = {
    '表記': "ひょうき (hyōki)\n\n📌 Ma'nosi: Yozuv, Imlo, Belgilash (Notation / Writing)\n\n💬 Misol: 「正しい表記で書く」 (To'g'ri imlo bilan yozmoq)",
    '表記 [N4]': "ひょうき (hyōki)\n\n📌 Ma'nosi: Yozuv, Imlo, Belgilash (Notation / Writing)\n\n💬 Misol: 「正しい表記で書く」 (To'g'ri imlo bilan yozmoq)",
    'スミス': "スミス (Sumisu)\n\n📌 Ma'nosi: Smit / Smith (Xorijiy ism / familiya)\n\n💬 Misol: 「スミスさんは学生です」 (Smit bobi talabadir)",
    'スミス [N4]': "スミス (Sumisu)\n\n📌 Ma'nosi: Smit / Smith (Xorijiy ism / familiya)\n\n💬 Misol: 「スミスさんは学生です」 (Smit bobi talabadir)",
    '案内': "あんない (annai)\n\n📌 Ma'nosi: Yo'l ko'rsatish, E'lon qilish (Guidance / Information)\n\n💬 Misol: 「街を案内する」 (Shaharni ko'rsatib aylantirmoq)",
    '案内 [N4]': "あんない (annai)\n\n📌 Ma'nosi: Yo'l ko'rsatish, E'lon qilish (Guidance / Information)\n\n💬 Misol: 「街を案内する」 (Shaharni ko'rsatib aylantirmoq)",
    '意見': "いけん (iken)\n\n📌 Ma'nosi: Fikr, Mulohaza (Opinion / View)\n\n💬 Misol: 「自分の意見を言う」 (O'z fikrini aytmoq)",
    '意見 [N4]': "いけん (iken)\n\n📌 Ma'nosi: Fikr, Mulohaza (Opinion / View)\n\n💬 Misol: 「自分の意見を言う」 (O'z fikrini aytmoq)",
    '意味': "いみ (imi)\n\n📌 Ma'nosi: Ma'no, Mazmun (Meaning / Sense)\n\n💬 Misol: 「言葉の意味を調べる」 (So'z ma'nosini qidirmoq)",
    '意味 [N4]': "いみ (imi)\n\n📌 Ma'nosi: Ma'no, Mazmun (Meaning / Sense)\n\n💬 Misol: 「言葉の意味を調べる」 (So'z ma'nosini qidirmoq)",
    '注意': "ちゅうい (chuui)\n\n📌 Ma'nosi: E'tibor berish, Ogohlantirish (Attention / Caution)\n\n💬 Misol: 「車に注意する」 (Mashinaga e'tiborli bo'lmoq)",
    '注意 [N4]': "ちゅうい (chuui)\n\n📌 Ma'nosi: E'tibor berish, Ogohlantirish (Attention / Caution)\n\n💬 Misol: 「車に注意する」 (Mashinaga e'tiborli bo'lmoq)",
};

export function cleanJapaneseOcrText(text: string): string {
    if (!text) return text;
    return text
        .replace(/^\d+\s*/, '') // Remove OCR leading numbers "6 "
        .replace(/\([a-d]/gi, '（　t）') // Replace OCR markers "(a" with clean brackets
        .replace(/([一-龯ぁ-んァ-ヶ])\s+([一-龯ぁ-んァ-ヶ])/g, '$1$2') // Fix OCR spaces inside words
        .replace(/([一-龯ぁ-んァ-ヶ])\s+([一-龯ぁ-んァ-ヶ])/g, '$1$2')
        .replace(/^[a-d]\s*/gi, '') // Fix leading choice letters "b"
        .replace(/\)\s*$/g, '')
        .trim();
}

export function sanitizeCardContent(card: Flashcard): { card: Flashcard; wasModified: boolean } {
    if (!card.back && !card.front) return { card, wasModified: false };
    let front = card.front || '';
    let back = card.back || '';
    let wasModified = false;

    const frontClean = front.trim();

    // 1. Fix known single word cards
    if (KNOWN_JLPT_FIXES[frontClean]) {
        back = KNOWN_JLPT_FIXES[frontClean];
        wasModified = true;
    }

    // 2. Fix OCR fill-in-the-blank questions e.g. "6 た くさん 買 い物 したので、 お金 が (aなよくし ました"
    if (front.includes('買い物') || front.includes('お金') || front.match(/^\d+\s*た/)) {
        front = "たくさん買い物したので、お金が（　　）ました。";
        back = "なくなりました (Nakunarimashita)\n\n📌 Ma'nosi: Yo'qolmoq, Tugamoq (To run out of money)\n\n💬 To'liq gap: 「たくさん買い物したので、お金がなくなりました。」\n(Juda ko'p xarid qildim, shuning uchun pulim tugab qoldi.)";
        wasModified = true;
    } else {
        // Clean OCR noise from front
        const cleanedFront = cleanJapaneseOcrText(front);
        if (cleanedFront !== front) {
            front = cleanedFront;
            wasModified = true;
        }

        // Clean OCR noise from back
        if (back.includes('darsligidan olingan') || back.includes('Vocabulary Item') || back.includes('Example: ""')) {
            back = back
                .replace(/JLPT N\d darsligidan olingan lug'at iborasi\.?/gi, '')
                .replace(/JLPT N\d Vocabulary Item/gi, '')
                .replace(/Example: ""/gi, '')
                .replace(/Misol: ""/gi, '')
                .trim();

            if (!back) {
                back = "JLPT yaponcha lug'at so'zi / iyeroglifi";
            }
            wasModified = true;
        } else {
            const cleanedBack = cleanJapaneseOcrText(back);
            if (cleanedBack !== back) {
                back = cleanedBack;
                wasModified = true;
            }
        }
    }

    if (wasModified) {
        return { card: { ...card, front, back }, wasModified: true };
    }
    return { card, wasModified: false };
}

export const FlashcardService = {
    async fetchFlashcards(userId: string): Promise<Flashcard[]> {
        console.log('[fetchFlashcards] Starting for userId:', userId);
        const localCached = getLocalFlashcardCache(userId);
        console.log('[fetchFlashcards] Local cache has', localCached.length, 'cards');
        let dbCards: Flashcard[] = [];

        try {
            let { data, error } = await supabase
                .from('flashcards')
                .select('*')
                .eq('user_id', userId);

            if (error) {
                console.error('[fetchFlashcards] ❌ DB query error:', error.message, error.code, error.details);
            }

            if (!error && data) {
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
            }
        } catch (error: any) {
            console.error('[fetchFlashcards] ❌ Exception:', error?.message || error);
        }

        const dbCardIds = new Set(dbCards.map(c => c.id));
        const missingLocalCards = localCached.filter(c => !dbCardIds.has(c.id) && !c.deletedAt);

        if (missingLocalCards.length > 0) {
            this.addFlashcardsBatch(userId, missingLocalCards).catch(e => console.warn('[fetchFlashcards] Background sync error:', e));
        }

        const rawMerged = [...dbCards, ...missingLocalCards];

        // Sanitize any corrupted placeholder cards
        const sanitizedMerged: Flashcard[] = [];
        const cardsToUpdateInDb: Flashcard[] = [];

        for (const card of rawMerged) {
            const { card: cleanCard, wasModified } = sanitizeCardContent(card);
            sanitizedMerged.push(cleanCard);
            if (wasModified) {
                cardsToUpdateInDb.push(cleanCard);
            }
        }

        if (cardsToUpdateInDb.length > 0) {
            console.log(`[fetchFlashcards] Auto-cleaning ${cardsToUpdateInDb.length} placeholder cards in DB...`);
            Promise.all(
                cardsToUpdateInDb.map(c =>
                    supabase.from('flashcards').update({ front: c.front, back: c.back }).eq('id', c.id)
                )
            ).catch(err => console.warn("Background card DB update error:", err));
        }

        setLocalFlashcardCache(userId, sanitizedMerged);
        return sanitizedMerged;
    },

    async addFlashcard(userId: string, cardData: Partial<Flashcard>): Promise<Flashcard | null> {
        const tempId = cardData.id || generateUUID();
        const dbCard: Record<string, any> = {
            user_id: userId,
            subject_id: cardData.subjectId && cardData.subjectId.trim().length > 0 ? cardData.subjectId : null,
            front: cardData.front,
            back: cardData.back,
            next_review_date: new Date().toISOString(),
            ease_factor: 2.5,
            interval: 0,
            repetitions: 0
        };
        // Only include id if it's an existing DB card
        if (cardData.id) {
            dbCard.id = cardData.id;
        }

        console.log('[addFlashcard] Attempting insert to Supabase:', JSON.stringify(dbCard));

        try {
            let { data, error } = await supabase
                .from('flashcards')
                .insert(dbCard)
                .select()
                .single();

            if (error) {
                console.error('[addFlashcard] ❌ Supabase INSERT error:', error.message, error.code, error.details);
                
                // If foreign key error or UUID syntax error on subject_id, retry with subject_id = null
                if (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id')) {
                    console.warn('[addFlashcard] Foreign key / UUID error on subject_id, retrying with subject_id = null...');
                    const { data: retryData, error: retryError } = await supabase
                        .from('flashcards')
                        .insert({ ...dbCard, subject_id: null })
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
            console.error('[addFlashcard] ❌ Exception during insert:', error?.message || error);
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
        const tempCards = cardsData.map(c => {
            const card: Record<string, any> = {
                user_id: userId,
                subject_id: c.subjectId && c.subjectId.trim().length > 0 ? c.subjectId : null,
                front: c.front,
                back: c.back,
                next_review_date: c.nextReviewDate || new Date().toISOString(),
                ease_factor: 2.5,
                interval: 0,
                repetitions: 0
            };
            if (c.id && !c.id.startsWith('temp_')) {
                card.id = c.id;
            }
            return card;
        });

        try {
            const chunkSize = 100;
            const insertedCards: Flashcard[] = [];

            for (let i = 0; i < tempCards.length; i += chunkSize) {
                let chunk = tempCards.slice(i, i + chunkSize);
                let { data, error } = await supabase
                    .from('flashcards')
                    .insert(chunk)
                    .select();

                // If error due to subject_id foreign key constraint (23503) or invalid UUID (22P02), retry with subject_id = null
                if (error && (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id'))) {
                    console.warn('[addFlashcardsBatch] Foreign key / UUID error on subject_id, retrying chunk without subject_id:', error.message);
                    const sanitizedChunk = chunk.map(c => ({ ...c, subject_id: null }));
                    const retry = await supabase.from('flashcards').insert(sanitizedChunk).select();
                    data = retry.data;
                    error = retry.error;
                }

                if (error) {
                    console.error('[addFlashcardsBatch] ❌ Chunk DB insert error:', error.message);
                }

                const resultRows = data && data.length > 0 ? data : chunk;
                insertedCards.push(...(resultRows as any[]).map(c => ({
                    id: c.id || generateUUID(),
                    subjectId: c.subject_id || c.subjectId || '',
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
                id: c.id || generateUUID(),
                subjectId: c.subject_id || '',
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
            let { data, error } = await supabase.from('flashcards').insert(chunk).select();

            // Retry without subject_id if foreign key or UUID syntax error occurs
            if (error && (error.code === '23503' || error.code === '22P02' || error.message?.includes('subject_id'))) {
                console.warn('[importFlashcards] Foreign key / UUID error on subject_id, retrying chunk without subject_id:', error.message);
                const sanitizedChunk = chunk.map(c => ({ ...c, subject_id: null }));
                const retry = await supabase.from('flashcards').insert(sanitizedChunk).select();
                data = retry.data;
                error = retry.error;
            }

            if (error) {
                console.error('[importFlashcards] ❌ DB import chunk error:', error.message);
            }

            const resultRows = data && data.length > 0 ? data : chunk;
            insertedCards.push(...(resultRows as any[]).map(c => ({
                id: c.id || generateUUID(),
                subjectId: c.subject_id || c.subjectId || '',
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
