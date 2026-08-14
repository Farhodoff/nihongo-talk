import { PresetDeck, PresetCard, PresetSubDeck } from '../data/presetDecks';
import { supabase } from '../lib/supabase';

export interface DeckPart {
    id: string;
    deckId: string;
    level: string;
    partNumber: number;
    title: string;
    cardCount: number;
    cards: PresetCard[];
    isCustomAdminPart?: boolean;
}

export const PresetDeckService = {
    /**
     * Splits a large preset deck into 100-card Parts (1-Qism, 2-Qism, ... N-Qism)
     * and merges any Admin-created custom parts (N+1-Qism...) dynamically ensuring NO duplicate Part numbers.
     */
    async getDeckParts(deck: PresetDeck, chunkSize: number = 100): Promise<DeckPart[]> {
        const parts: DeckPart[] = [];
        const seenIds = new Set<string>();
        
        try {
            // 1. Load base deck cards and partition into 100-card chunks
            const allCards = await deck.loadCards();
            if (allCards && allCards.length > 0) {
                let partNum = 1;
                for (let i = 0; i < allCards.length; i += chunkSize) {
                    const chunk = allCards.slice(i, i + chunkSize);
                    const partId = `${deck.id}_part_${partNum}`;
                    parts.push({
                        id: partId,
                        deckId: deck.id,
                        level: deck.level,
                        partNumber: partNum,
                        title: `${deck.level} — ${partNum}-Qism (${chunk.length} ta card)`,
                        cardCount: chunk.length,
                        cards: chunk,
                        isCustomAdminPart: false
                    });
                    seenIds.add(partId);
                    partNum++;
                }
            }

            // Determine highest base part number
            let currentHighestPartNumber = parts.length > 0 ? Math.max(...parts.map(p => p.partNumber)) : 0;

            // 2. Fetch custom Admin-created extension parts from Supabase DB
            const { data: dbAlbums, error } = await supabase
                .from('admin_preset_albums')
                .select('*')
                .eq('level', deck.level);

            if (!error && dbAlbums && dbAlbums.length > 0) {
                dbAlbums.forEach((alb: any) => {
                    if (alb.id && !seenIds.has(alb.id)) {
                        currentHighestPartNumber++;
                        const allocatedPartNumber = currentHighestPartNumber;
                        const partId = alb.id;
                        seenIds.add(partId);

                        parts.push({
                            id: partId,
                            deckId: deck.id,
                            level: deck.level,
                            partNumber: allocatedPartNumber,
                            title: `${deck.level} — ${allocatedPartNumber}-Qism (${alb.card_count || alb.cards?.length || 0} ta card)`,
                            cardCount: alb.card_count || alb.cards?.length || 0,
                            cards: alb.cards || [],
                            isCustomAdminPart: true
                        });
                    }
                });
            }

            // 3. Also check localStorage cache for offline/backup custom parts
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            if (savedLocal) {
                try {
                    const localAlbums: PresetSubDeck[] = JSON.parse(savedLocal);
                    const matchingLocal = localAlbums.filter(a => a.level === deck.level);
                    
                    matchingLocal.forEach(alb => {
                        if (alb.id && !seenIds.has(alb.id)) {
                            currentHighestPartNumber++;
                            const allocatedPartNumber = currentHighestPartNumber;
                            seenIds.add(alb.id);

                            parts.push({
                                id: alb.id,
                                deckId: deck.id,
                                level: deck.level,
                                partNumber: allocatedPartNumber,
                                title: `${deck.level} — ${allocatedPartNumber}-Qism (${alb.cardCount} ta card)`,
                                cardCount: alb.cardCount,
                                cards: alb.cards,
                                isCustomAdminPart: true
                            });
                        }
                    });
                } catch (e) {}
            }
        } catch (err) {
            console.error("Error building deck parts:", err);
        }

        // Sort strictly by partNumber ascending
        return parts.sort((a, b) => a.partNumber - b.partNumber);
    },

    /**
     * Fetches all Custom Standalone Albums created by Super Admin (from DB + LocalStorage cache)
     */
    async getStandaloneAlbums(): Promise<PresetSubDeck[]> {
        const albumsMap = new Map<string, PresetSubDeck>();

        // 1. Check local storage cache first for instant UI response
        try {
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            if (savedLocal) {
                const localAlbums: PresetSubDeck[] = JSON.parse(savedLocal);
                localAlbums
                    .filter(a => a.deckId === 'deck_custom_standalone' || a.id.startsWith('standalone_') || a.level === 'MUSTAQIL' || a.level === 'SPECIAL' || a.level === 'BIZNES')
                    .forEach(a => albumsMap.set(a.id, a));
            }
        } catch (e) {}

        // 2. Fetch from Supabase DB table `admin_preset_albums`
        try {
            const { data: dbAlbums, error } = await supabase
                .from('admin_preset_albums')
                .select('*')
                .or('deck_id.eq.deck_custom_standalone,id.ilike.standalone_%');

            if (!error && dbAlbums && dbAlbums.length > 0) {
                dbAlbums.forEach((alb: any) => {
                    albumsMap.set(alb.id, {
                        id: alb.id,
                        deckId: alb.deck_id || 'deck_custom_standalone',
                        title: alb.title || 'Mustaqil Albom',
                        level: alb.level || 'MUSTAQIL',
                        description: alb.description || '',
                        partNumber: alb.part_number || 1,
                        cardCount: alb.card_count || (Array.isArray(alb.cards) ? alb.cards.length : 0),
                        cards: Array.isArray(alb.cards) ? alb.cards : [],
                        createdAt: alb.created_at || new Date().toISOString()
                    });
                });
            }
        } catch (err) {
            console.warn('Supabase standalone albums fetch notice:', err);
        }

        const allStandalone = Array.from(albumsMap.values());
        
        // Update local cache with merged standalone albums
        try {
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localList: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            const nonStandalone = localList.filter(a => a.deckId !== 'deck_custom_standalone' && !a.id.startsWith('standalone_'));
            localStorage.setItem('study_planner_admin_albums', JSON.stringify([...nonStandalone, ...allStandalone]));
        } catch (e) {}

        return allStandalone.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    },

    /**
     * Deletes a Standalone Album from DB and Local Cache
     */
    async deleteStandaloneAlbum(id: string): Promise<boolean> {
        try {
            await supabase.from('admin_preset_albums').delete().eq('id', id);
        } catch (e) {
            console.warn('Supabase delete standalone album notice:', e);
        }

        try {
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            if (savedLocal) {
                const localList: PresetSubDeck[] = JSON.parse(savedLocal);
                const updated = localList.filter(a => a.id !== id);
                localStorage.setItem('study_planner_admin_albums', JSON.stringify(updated));
            }
        } catch (e) {}

        return true;
    }
};
