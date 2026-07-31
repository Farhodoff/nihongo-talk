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
    }
};
