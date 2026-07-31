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
     * Splits a large preset deck into 100-card Parts (1-Qism, 2-Qism, ... 10-Qism)
     * and merges any Admin-created custom parts (11-Qism, 12-Qism...) from Supabase DB.
     */
    async getDeckParts(deck: PresetDeck, chunkSize: number = 100): Promise<DeckPart[]> {
        const parts: DeckPart[] = [];
        
        try {
            // 1. Load base deck cards
            const allCards = await deck.loadCards();
            if (allCards && allCards.length > 0) {
                let partNum = 1;
                for (let i = 0; i < allCards.length; i += chunkSize) {
                    const chunk = allCards.slice(i, i + chunkSize);
                    parts.push({
                        id: `${deck.id}_part_${partNum}`,
                        deckId: deck.id,
                        level: deck.level,
                        partNumber: partNum,
                        title: `${deck.level} — ${partNum}-Qism (${chunk.length} ta card)`,
                        cardCount: chunk.length,
                        cards: chunk,
                        isCustomAdminPart: false
                    });
                    partNum++;
                }
            }

            // 2. Fetch custom Admin-created extension parts (11-Qism...) from Supabase DB
            const { data: dbAlbums, error } = await supabase
                .from('admin_preset_albums')
                .select('*')
                .eq('level', deck.level);

            if (!error && dbAlbums && dbAlbums.length > 0) {
                const nextStartingPart = parts.length + 1;
                dbAlbums.forEach((alb: any, idx: number) => {
                    const pNum = alb.part_number || (nextStartingPart + idx);
                    parts.push({
                        id: alb.id || `custom_part_${deck.id}_${pNum}`,
                        deckId: deck.id,
                        level: deck.level,
                        partNumber: pNum,
                        title: alb.title || `${deck.level} — ${pNum}-Qism (${alb.card_count || alb.cards?.length || 0} ta card)`,
                        cardCount: alb.card_count || alb.cards?.length || 0,
                        cards: alb.cards || [],
                        isCustomAdminPart: true
                    });
                });
            }

            // Also check localStorage cache for offline/backup custom parts
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            if (savedLocal) {
                try {
                    const localAlbums: PresetSubDeck[] = JSON.parse(savedLocal);
                    const matchingLocal = localAlbums.filter(a => a.level === deck.level);
                    const existingPartIds = new Set(parts.map(p => p.id));
                    
                    matchingLocal.forEach(alb => {
                        if (!existingPartIds.has(alb.id)) {
                            parts.push({
                                id: alb.id,
                                deckId: deck.id,
                                level: deck.level,
                                partNumber: alb.partNumber,
                                title: alb.title,
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

        // Sort by partNumber ascending
        return parts.sort((a, b) => a.partNumber - b.partNumber);
    }
};
