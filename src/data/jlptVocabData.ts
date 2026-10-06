import { DatasetStorageService } from '../services/DatasetStorageService';

export type JlptVocabLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

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

const vocabCache: Partial<Record<JlptVocabLevel, JlptVocabItem[]>> = {};

/**
 * Asynchronously loads vocabulary dataset for a specific JLPT level on-demand.
 * Integrates DatasetStorageService for fast IndexedDB offline access and CDN fetch.
 * Enables granular code-splitting so users download only the level they are actively studying.
 */
export async function loadVocabByLevel(level: JlptVocabLevel): Promise<JlptVocabItem[]> {
  if (vocabCache[level]) return vocabCache[level]!;

  const items = await DatasetStorageService.loadDataset<JlptVocabItem[]>({
    datasetKey: `jlpt_vocab_${level.toLowerCase()}`,
    localPath: `/data/vocab/jlptVocab${level}.json`,
    supabaseBucket: 'datasets',
    supabasePath: `vocab/jlptVocab${level}.json`,
    fallbackLoader: async () => {
      if (!import.meta.env.PROD) {
        switch (level) {
          case 'N5':
            return ((await import('./vocab/jlptVocabN5.json')).default || []) as JlptVocabItem[];
          case 'N4':
            return ((await import('./vocab/jlptVocabN4.json')).default || []) as JlptVocabItem[];
          case 'N3':
            return ((await import('./vocab/jlptVocabN3.json')).default || []) as JlptVocabItem[];
          case 'N2':
            return ((await import('./vocab/jlptVocabN2.json')).default || []) as JlptVocabItem[];
          case 'N1':
            return ((await import('./vocab/jlptVocabN1.json')).default || []) as JlptVocabItem[];
          default:
            return [];
        }
      }
      const res = await fetch(`/data/vocab/jlptVocab${level}.json`);
      return (await res.json()) as JlptVocabItem[];
    },
  });

  vocabCache[level] = items;
  return items;
}

/**
 * Loads vocabulary for all JLPT levels concurrently.
 */
export async function loadAllVocab(): Promise<JlptVocabItem[]> {
  const levels: JlptVocabLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const results = await Promise.all(levels.map((lvl) => loadVocabByLevel(lvl)));
  return results.flat();
}

/**
 * Backward-compatible stub
 */
export const JLPT_VOCAB_DATA: JlptVocabItem[] = [];
