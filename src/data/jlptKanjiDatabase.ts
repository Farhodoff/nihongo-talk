import kanjiData from './kanji/jlptKanjiDatabase.json';
import type { JlptKanjiItem } from './jlptGrammarKanji';

export const JLPT_KANJI_DATABASE: JlptKanjiItem[] = kanjiData as JlptKanjiItem[];

export function getKanjiByLevel(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): JlptKanjiItem[] {
  return JLPT_KANJI_DATABASE.filter((k) => k.level === level);
}
