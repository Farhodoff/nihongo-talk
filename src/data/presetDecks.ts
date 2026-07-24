export interface PresetCard {
    front: string;
    back: string;
    phonetic?: string;
    example?: string;
    category?: string;
}

export interface PresetDeck {
    id: string;
    title: string;
    description: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2' | 'IELTS Collocations' | 'IELTS Topics';
    badgeColor: string;
    icon: string;
    cardCount: number;
    isPremiumOnly?: boolean;
    loadCards: () => Promise<PresetCard[]>;
}

export const PRESET_DECKS: PresetDeck[] = [
    {
        id: 'deck_starter_a1_a2',
        title: '🌱 A1-A2 Starter Vocabulary',
        description: "Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so'zlar.",
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        cardCount: 1646,
        isPremiumOnly: false,
        loadCards: async () => {
            const data = await import('./decks/starter.json');
            return data.default as PresetCard[];
        }
    },
    {
        id: 'deck_intermediate_b1_b2',
        title: '📈 B1-B2 Pre-IELTS Academic Vocab',
        description: "Band 5.5-6.5 darajasidagi talabalar uchun akademik so'zlar va iboralar to'plami.",
        level: 'B1-B2',
        badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        icon: '📈',
        cardCount: 1201,
        isPremiumOnly: false,
        loadCards: async () => {
            const data = await import('./decks/academic.json');
            return data.default as PresetCard[];
        }
    },
    {
        id: 'deck_master_c1_c2',
        title: '📙 C1-C2 Master IELTS Collocations',
        description: "Band 7.5-9.0 darajasidagi insholar uchun akademik birikmalar va iboralar.",
        level: 'C1-C2',
        badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        icon: '📙',
        cardCount: 53,
        isPremiumOnly: true,
        loadCards: async () => {
            const data = await import('./decks/c1_c2.json');
            return data.default as PresetCard[];
        }
    }
];
