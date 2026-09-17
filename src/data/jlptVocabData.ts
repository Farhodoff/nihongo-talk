import n5Data from './vocab/jlptVocabN5.json';
import n4Data from './vocab/jlptVocabN4.json';
import n3Data from './vocab/jlptVocabN3.json';
import n2Data from './vocab/jlptVocabN2.json';
import n1Data from './vocab/jlptVocabN1.json';

export interface JlptVocabItem {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  word: string;
  reading: string;
  romaji: string;
  meaningUz: string;
  partOfSpeech?: string;
  examples: {
    ja: string;
    romaji: string;
    uz: string;
  }[];
}

export const JLPT_VOCAB_DATA: JlptVocabItem[] = [
  ...(n5Data as JlptVocabItem[]),
  ...(n4Data as JlptVocabItem[]),
  ...(n3Data as JlptVocabItem[]),
  ...(n2Data as JlptVocabItem[]),
  ...(n1Data as JlptVocabItem[]),
];

const LEVEL_VOCAB_MAP: Record<string, JlptVocabItem[]> = {
  N5: n5Data as JlptVocabItem[],
  N4: n4Data as JlptVocabItem[],
  N3: n3Data as JlptVocabItem[],
  N2: n2Data as JlptVocabItem[],
  N1: n1Data as JlptVocabItem[],
};

export async function loadVocabByLevel(
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
): Promise<JlptVocabItem[]> {
  return LEVEL_VOCAB_MAP[level] || [];
}
