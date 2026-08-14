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
    level: 'A1-A2' | 'B1-B2' | 'C1-C2' | 'IELTS Collocations' | 'IELTS Topics' | 'JLPT N5' | 'JLPT N4' | 'JLPT N3' | 'JLPT N2' | 'JLPT N1';
    badgeColor: string;
    icon: string;
    cardCount: number;
    isPremiumOnly?: boolean;
    loadCards: () => Promise<PresetCard[]>;
}

export interface PresetSubDeck {
    id: string;
    deckId: string;
    title: string;
    level: string;
    description?: string;
    badgeColor?: string;
    icon?: string;
    partNumber: number;
    cardCount: number;
    cards: PresetCard[];
    createdAt: string;
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
    },
    {
        id: 'deck_jlpt_n5',
        title: '🌸 JLPT N5 Master Deck (Minna & Try)',
        description: "Minna no Nihongo Uzbek translation, Kanji Master va Try N5 darsliklaridan 20 ta tayanch so'zlar.",
        level: 'JLPT N5',
        badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
        icon: '🌸',
        cardCount: 20,
        isPremiumOnly: false,
        loadCards: async () => {
            const data = await import('./decks/jlpt_n5.json');
            return data.default as PresetCard[];
        }
    },
    {
        id: 'deck_jlpt_n4',
        title: '🎌 JLPT N4 Master Deck (Shin Kanzen)',
        description: "Shin Kanzen Master Grammar, Reading va Listening N4 darsliklaridan 6,655 ta so'z va iboralar.",
        level: 'JLPT N4',
        badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
        icon: '🎌',
        cardCount: 6655,
        isPremiumOnly: false,
        loadCards: async () => {
            const data = await import('./decks/jlpt_n4.json');
            return data.default as PresetCard[];
        }
    },
    {
        id: 'deck_jlpt_n3',
        title: '🏮 JLPT N3 Master Deck (Shin Kanzen)',
        description: "Shin Kanzen Master Grammar, Kanji, Reading, Listening N3 kitoblaridan 10 ta so'zlar.",
        level: 'JLPT N3',
        badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        icon: '🏮',
        cardCount: 10,
        isPremiumOnly: false,
        loadCards: async () => {
            const data = await import('./decks/jlpt_n3.json');
            return data.default as PresetCard[];
        }
    },
    {
        id: 'deck_jlpt_n1',
        title: '👑 JLPT N1 Master Deck (Shin Kanzen & Sou Matome)',
        description: "N1 Shin Kanzen & Sou Matome Grammar, Kanji, Vocab, Reading darsliklaridan 18 ta so'zlar.",
        level: 'JLPT N1',
        badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
        icon: '👑',
        cardCount: 18,
        isPremiumOnly: true,
        loadCards: async () => {
            const data = await import('./decks/jlpt_n1.json');
            return data.default as PresetCard[];
        }
    }
];
