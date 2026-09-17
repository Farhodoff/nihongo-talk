import grammarData from './grammar/jlptGrammarDatabase.json';

export interface JlptGrammarItem {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  title: string;
  romaji: string;
  meaningUz: string;
  structure: string;
  examples: {
    ja: string;
    romaji: string;
    uz: string;
  }[];
}

export interface JlptKanjiItem {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaningUz: string;
  strokeCount: number;
  examples: {
    word: string;
    reading: string;
    meaning: string;
  }[];
}

export type { JlptVocabItem } from './jlptVocabData';

export const JLPT_GRAMMAR_DATA: JlptGrammarItem[] = grammarData as JlptGrammarItem[];

export { JLPT_KANJI_DATABASE as JLPT_KANJI_DATA } from './jlptKanjiDatabase';
