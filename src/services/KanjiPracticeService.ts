import kanjiDataRaw from '../data/kanji/jlptKanjiDatabase.json';
import type { JlptKanjiItem } from '../data/jlptGrammarKanji';

export interface KanjiStrokeNumber {
  x: number;
  y: number;
  num: number;
}

export interface KanjiStrokeData {
  paths: string[];
  numbers: KanjiStrokeNumber[];
}

export type JlptLevelFilter = 'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

// Curated quick kanji recommendations verified from jlptKanjiDatabase & kanjiStrokes
export const CURATED_QUICK_KANJIS: Record<JlptLevelFilter, string[]> = {
  ALL: [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
    '山',
    '川',
    '人',
    '会',
    '社',
    '学',
    '校',
    '本',
    '年',
    '新',
    '高',
    '大',
    '小',
  ],
  N5: [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
    '山',
    '川',
    '人',
    '口',
    '車',
    '女',
    '男',
    '子',
    '学',
    '校',
    '先',
    '生',
    '本',
    '年',
    '時',
    '分',
    '大',
    '小',
  ],
  N4: [
    '会',
    '社',
    '新',
    '古',
    '高',
    '安',
    '多',
    '少',
    '長',
    '不',
    '世',
    '主',
    '乗',
    '事',
    '京',
    '仕',
    '代',
    '以',
    '低',
    '住',
    '体',
    '作',
    '使',
    '便',
    '借',
  ],
  N3: [
    '経',
    '済',
    '論',
    '議',
    '選',
    '挙',
    '提',
    '案',
    '関',
    '係',
    '税',
    '権',
    '義',
    '務',
    '総',
    '領',
    '査',
    '政',
  ],
  N2: [
    '概',
    '略',
    '障',
    '害',
    '拡',
    '縮',
    '抑',
    '促',
    '勧',
    '恐',
    '慎',
    '緩',
    '激',
    '陥',
    '融',
    '換',
    '替',
    '棄',
    '避',
    '阻',
  ],
  N1: [
    '匿',
    '茫',
    '漠',
    '弊',
    '歪',
    '嘲',
    '弄',
    '蔑',
    '傲',
    '慢',
    '躊',
    '躇',
    '曖',
    '昧',
    '恣',
    '苛',
    '忌',
    '憚',
    '捏',
    '斬',
  ],
};

const kanjiList: JlptKanjiItem[] = kanjiDataRaw as JlptKanjiItem[];

let cachedStrokeMap: Record<string, KanjiStrokeData> | null = null;
let strokePromise: Promise<Record<string, KanjiStrokeData>> | null = null;

export async function loadKanjiStrokes(): Promise<Record<string, KanjiStrokeData>> {
  if (cachedStrokeMap) return cachedStrokeMap;
  if (!strokePromise) {
    strokePromise = import('../data/kanjiStrokes.json').then((mod) => {
      cachedStrokeMap = mod.default as unknown as Record<string, KanjiStrokeData>;
      return cachedStrokeMap;
    });
  }
  return strokePromise;
}

export class KanjiPracticeService {
  /**
   * Returns all available kanjis in the database
   */
  static getAllKanjis(): JlptKanjiItem[] {
    return kanjiList;
  }

  /**
   * Filter kanjis by JLPT level
   */
  static getKanjisByLevel(level: JlptLevelFilter): JlptKanjiItem[] {
    if (level === 'ALL') return kanjiList;
    return kanjiList.filter((k) => k.level === level);
  }

  /**
   * Search kanjis by character, reading (onyomi/kunyomi), or Uzbek meaning
   */
  static searchKanjis(query: string, level: JlptLevelFilter = 'ALL'): JlptKanjiItem[] {
    const list = this.getKanjisByLevel(level);
    if (!query || !query.trim()) return list;

    const q = query.trim().toLowerCase();
    return list.filter((k) => {
      const matchKanji = k.kanji.toLowerCase().includes(q);
      const matchMeaning = (k.meaningUz || '').toLowerCase().includes(q);
      const matchOnyomi = (k.onyomi || '').toLowerCase().includes(q);
      const matchKunyomi = (k.kunyomi || '').toLowerCase().includes(q);
      return matchKanji || matchMeaning || matchOnyomi || matchKunyomi;
    });
  }

  /**
   * Retrieve a specific kanji by character
   */
  static getKanjiByChar(char: string): JlptKanjiItem | undefined {
    return kanjiList.find((k) => k.kanji === char);
  }

  /**
   * Preload authentic KanjiVG strokes dictionary into memory
   */
  static async preloadStrokes(): Promise<Record<string, KanjiStrokeData>> {
    return loadKanjiStrokes();
  }

  /**
   * Retrieve authentic KanjiVG SVG stroke paths and numbering coordinates asynchronously (lazy-loaded)
   */
  static async getStrokeDataAsync(kanji: string): Promise<KanjiStrokeData | null> {
    const strokes = await loadKanjiStrokes();
    return strokes[kanji] || null;
  }

  /**
   * Retrieve authentic KanjiVG SVG stroke paths from memory cache if already loaded
   */
  static getStrokeData(kanji: string): KanjiStrokeData | null {
    if (!cachedStrokeMap) {
      void loadKanjiStrokes();
      return null;
    }
    return cachedStrokeMap[kanji] || null;
  }

  /**
   * Get curated quick kanji list
   */
  static getQuickKanjis(level: JlptLevelFilter): string[] {
    return CURATED_QUICK_KANJIS[level] || CURATED_QUICK_KANJIS.ALL;
  }
}
