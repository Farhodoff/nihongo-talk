import { GlobalFlashcardOverrideService } from '../services/GlobalFlashcardOverrideService';

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
  language: 'ja';
  level: 'JLPT N5' | 'JLPT N4' | 'JLPT N3' | 'JLPT N2' | 'JLPT N1';
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

async function loadAndApplyOverrides(
  importPromise: Promise<{ default: any }>,
): Promise<PresetCard[]> {
  const data = await importPromise;
  try {
    return GlobalFlashcardOverrideService.applyOverridesToCards(data.default as PresetCard[]);
  } catch {
    return data.default as PresetCard[];
  }
}

export const PRESET_DECKS: PresetDeck[] = [
  {
    id: 'deck_minna_shokyu1',
    title: "🌸 Minna no Nihongo Shokyu 1 (1–25 Darslar To'liq Lug'ati)",
    description:
      "Minna no Nihongo Shokyu 1 darsligining barcha 25 ta darsidan 1,111 ta so'z va iboralar to'plami (O'zbekcha tarjima va grammatik belgilar bilan).",
    language: 'ja',
    level: 'JLPT N5',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: '🌸',
    cardCount: 1111,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/minna_shokyu1.json')),
  },
  {
    id: 'deck_minna_shokyu2',
    title: "🌿 Minna no Nihongo Shokyu 2 (26–50 Darslar To'liq Lug'ati)",
    description:
      "Minna no Nihongo Shokyu 2 darsligining barcha 25 ta darsidan 451 ta so'z va iboralar to'plami (O'zbekcha tarjima va grammatik belgilar bilan).",
    language: 'ja',
    level: 'JLPT N4',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: '🌿',
    cardCount: 451,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/minna_shokyu2.json')),
  },
  {
    id: 'deck_jlpt_n5',
    title: '🌸 JLPT N5 Master Deck (Minna & Try)',
    description:
      "Minna no Nihongo Uzbek translation, Kanji Master va Try N5 darsliklaridan 218 ta tayanch kanji va so'zlar.",
    language: 'ja',
    level: 'JLPT N5',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    icon: '🌸',
    cardCount: 218,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/jlpt_n5.json')),
  },
  {
    id: 'deck_jlpt_n4',
    title: '🎌 JLPT N4 Master Deck (Shin Kanzen & Kanji 234)',
    description: "Shin Kanzen Master, Minna no Nihongo va 234 ta N4 tayanch Kanji hamda so'zlar.",
    language: 'ja',
    level: 'JLPT N4',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    icon: '🎌',
    cardCount: 310,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/jlpt_n4.json')),
  },
  {
    id: 'deck_jlpt_n3',
    title: '🏮 JLPT N3 Master Deck (Shin Kanzen & Goi 1730)',
    description: "Shin Kanzen Master, Somatome va 1730 ta N3 tayanch so'zlar.",
    language: 'ja',
    level: 'JLPT N3',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    icon: '🏮',
    cardCount: 1730,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/jlpt_n3.json')),
  },
  {
    id: 'deck_jlpt_n2',
    title: '🗾 JLPT N2 Master Deck (Shin Kanzen & Goi 3213)',
    description: "Shin Kanzen Master, Sou Matome va 3213 ta N2 tayanch so'zlar.",
    language: 'ja',
    level: 'JLPT N2',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    icon: '🗾',
    cardCount: 3213,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/jlpt_n2.json')),
  },
  {
    id: 'deck_jlpt_n1',
    title: '👑 JLPT N1 Master Deck (Shin Kanzen & Sou Matome)',
    description:
      "N1 Shin Kanzen & Sou Matome darsliklaridan 205 ta oliy darajadagi akademik va adabiy so'zlar.",
    language: 'ja',
    level: 'JLPT N1',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    icon: '👑',
    cardCount: 205,
    isPremiumOnly: false,
    loadCards: () => loadAndApplyOverrides(import('./decks/jlpt_n1.json')),
  },
];
