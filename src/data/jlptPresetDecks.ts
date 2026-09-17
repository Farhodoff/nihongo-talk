import n5Decks from './decks/n5PresetDecks.json';
import n4Decks from './decks/n4PresetDecks.json';
import n3Decks from './decks/n3PresetDecks.json';
import n2Decks from './decks/n2PresetDecks.json';
import n1Decks from './decks/n1PresetDecks.json';

export interface JlptPresetCard {
  id: string;
  front: string; // Kanji / Phrase
  back: string; // Uzbek translation + Grammar explanation
  romaji?: string;
  furigana?: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  type: 'kanji' | 'vocab' | 'grammar';
  example?: string;
}

export interface JlptPresetDeck {
  id: string;
  title: string;
  description: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  icon: string;
  cards: JlptPresetCard[];
}

export const JLPT_PRESET_DECKS: JlptPresetDeck[] = [
  ...(n5Decks as JlptPresetDeck[]),
  ...(n4Decks as JlptPresetDeck[]),
  ...(n3Decks as JlptPresetDeck[]),
  ...(n2Decks as JlptPresetDeck[]),
  ...(n1Decks as JlptPresetDeck[]),
];

const LEVEL_PRESET_DECKS_MAP: Record<string, JlptPresetDeck[]> = {
  N5: n5Decks as JlptPresetDeck[],
  N4: n4Decks as JlptPresetDeck[],
  N3: n3Decks as JlptPresetDeck[],
  N2: n2Decks as JlptPresetDeck[],
  N1: n1Decks as JlptPresetDeck[],
};

export function getPresetDecksByLevel(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): JlptPresetDeck[] {
  return LEVEL_PRESET_DECKS_MAP[level] || [];
}
