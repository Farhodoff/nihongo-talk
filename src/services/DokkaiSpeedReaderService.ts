import { JlptLevel } from './JlptReadinessService';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface SokudokuMetrics {
  charCount: number;
  readingDurationSeconds: number;
  cpm: number; // Characters per minute (分速文字数)
  wpm: number; // Approximate Words per minute
  targetCpm: number;
  speedRatio: number; // e.g. 1.25 = 25% faster than benchmark
  speedRating: 'slow' | 'optimal' | 'fast' | 'blazing';
  speedRatingLabel: { uz: string; ja: string; en: string };
  comprehensionAccuracy: number; // 0-100%
  efficiencyIndex: number; // 0-100 balanced speed + accuracy score
  feedback: { uz: string; ja: string; en: string };
}

export interface ReadingProgressRecord {
  passageId: string;
  level: JlptLevel;
  completedAt: string;
  score: number;
  totalQuestions: number;
  accuracy: number;
  durationSeconds: number;
  cpm: number;
  mode: 'standard' | 'sokudoku';
}

const STORAGE_KEY = 'study_planner_jlpt_reading_progress';

// Benchmark Character Per Minute (CPM) reading speed targets for official JLPT levels
export const JLPT_CPM_BENCHMARKS: Record<
  JlptLevel,
  { passingCpm: number; fastCpm: number; blazingCpm: number }
> = {
  N5: { passingCpm: 120, fastCpm: 180, blazingCpm: 240 },
  N4: { passingCpm: 160, fastCpm: 230, blazingCpm: 300 },
  N3: { passingCpm: 220, fastCpm: 320, blazingCpm: 420 },
  N2: { passingCpm: 300, fastCpm: 420, blazingCpm: 540 },
  N1: { passingCpm: 380, fastCpm: 500, blazingCpm: 650 },
};

export class DokkaiSpeedReaderService {
  /**
   * Cleans furigana brackets from raw text (e.g. "田中[たなか]" -> "田中")
   * and returns clean characters string.
   */
  public static cleanJapaneseText(rawText: string): string {
    if (!rawText) return '';
    return rawText
      .replace(/\[[^\]]+\]/g, '') // remove [furigana]
      .replace(/\([^)]+\)/g, '') // remove (furigana)
      .replace(/（[^）]+）/g, '') // remove （furigana）
      .trim();
  }

  /**
   * Calculates the exact Japanese character count excluding whitespaces.
   */
  public static getCharacterCount(rawText: string): number {
    const cleaned = this.cleanJapaneseText(rawText);
    return cleaned.replace(/\s+/g, '').length;
  }

  /**
   * Splits Japanese content into logical paragraphs for reading analysis and focus highlight.
   */
  public static splitIntoParagraphs(
    rawText: string,
  ): { id: number; text: string; charCount: number }[] {
    if (!rawText) return [];

    // Split on double newlines or single newlines that mark distinct sentences
    const lines = rawText
      .split(/\n\s*\n|\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    return lines.map((line, idx) => ({
      id: idx + 1,
      text: line,
      charCount: this.getCharacterCount(line),
    }));
  }

  /**
   * Calculates comprehensive Speed-Reading (速読) metrics, CPM, and efficiency index.
   */
  public static calculateMetrics(params: {
    rawContent: string;
    readingDurationSeconds: number;
    level: JlptLevel;
    correctAnswers: number;
    totalQuestions: number;
  }): SokudokuMetrics {
    const { rawContent, readingDurationSeconds, level, correctAnswers, totalQuestions } = params;

    const charCount = this.getCharacterCount(rawContent);
    const duration = Math.max(1, readingDurationSeconds);
    const cpm = Math.round((charCount / duration) * 60);
    const wpm = Math.round(cpm / 2); // Roughly 2 characters per Japanese word/morpheme

    const benchmark = JLPT_CPM_BENCHMARKS[level] || JLPT_CPM_BENCHMARKS.N5;
    const speedRatio = Math.round((cpm / benchmark.passingCpm) * 100) / 100;
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    let speedRating: SokudokuMetrics['speedRating'] = 'slow';
    let speedRatingLabel = {
      uz: 'Sekinroq (Mashq Talab Qilinadi)',
      ja: '要練習（スピードアップ目標）',
      en: 'Developing (Needs Speed Practice)',
    };

    if (cpm >= benchmark.blazingCpm) {
      speedRating = 'blazing';
      speedRatingLabel = {
        uz: '🚀 Chosoku (Super Tezkor)',
        ja: '🚀 超速（ネイティブ級スピード）',
        en: '🚀 Blazing (Native-Level Speed)',
      };
    } else if (cpm >= benchmark.fastCpm) {
      speedRating = 'fast';
      speedRatingLabel = {
        uz: '⚡ Juda Tez (Imtihondan Yuqori)',
        ja: '⚡ 快速（合格余裕ペース）',
        en: '⚡ Fast (Above Benchmark)',
      };
    } else if (cpm >= benchmark.passingCpm) {
      speedRating = 'optimal';
      speedRatingLabel = {
        uz: "🎯 Optimal (JLPT Me'yori)",
        ja: '🎯 適正（JLPT合格ペース）',
        en: '🎯 Optimal (JLPT Passing Pace)',
      };
    }

    // Efficiency index blends speed and accuracy (0-100)
    // 60% weight on accuracy, 40% weight on speed ratio up to 1.5x
    const speedScore = Math.min(100, Math.round((cpm / benchmark.fastCpm) * 100));
    const efficiencyIndex = Math.min(100, Math.round(accuracy * 0.6 + speedScore * 0.4));

    // Formulate actionable feedback
    let feedback = {
      uz: `O'qish tezligingiz ${cpm} belgi/daqiqani tashkil qildi. JLPT ${level} talabi ${benchmark.passingCpm} belgi/daq.`,
      ja: `読解スピードは分速${cpm}文字です。JLPT ${level}の基準速度は分速${benchmark.passingCpm}文字です。`,
      en: `Your reading speed is ${cpm} char/min. The JLPT ${level} target is ${benchmark.passingCpm} char/min.`,
    };

    if (accuracy >= 80 && speedRating !== 'slow') {
      feedback = {
        uz: `Mukammal natija! ${cpm} belgi/daqiqa tezlikda o'qib, ${accuracy}% aniqlik ko'rsatdingiz. JLPT ${level} Dokkai uchun a'lo daraja.`,
        ja: `素晴らしい！分速${cpm}文字の高速読解で正答率${accuracy}%を達成しました。本番でも時間内に読了可能です。`,
        en: `Outstanding! You achieved ${accuracy}% accuracy at ${cpm} char/min. You are well prepared for JLPT ${level} reading speed.`,
      };
    } else if (accuracy < 60) {
      feedback = {
        uz: "Diqqat: Tez o'qishda tushunish aniqligi pasaydi. Xatboshilardagi kalit so'zlar va predikatlarga ko'proq e'tibor qarating.",
        ja: '注意：読解速度を意識しすぎて正答率が低下しました。接続詞や文末の述語を正確に捉えましょう。',
        en: 'Caution: Comprehension accuracy dropped under speed pressure. Focus on conjunctions and core predicates.',
      };
    } else if (speedRating === 'slow') {
      feedback = {
        uz: `Aniqligingiz yaxshi (${accuracy}%), lekin tezlik me'yordan past (${cpm} < ${benchmark.passingCpm} CPM). Furigana Hover rejimidan foydalanib kanjilarni tezroq tanishni mashq qiling.`,
        ja: `理解度は良好（${accuracy}%）ですが、速度が目標未満（${cpm}文字/分）です。ルビ非表示モードで即時認識を鍛えましょう。`,
        en: `Accuracy is solid (${accuracy}%), but pace is below target (${cpm} < ${benchmark.passingCpm} CPM). Use Furigana Hover mode to boost recognition.`,
      };
    }

    return {
      charCount,
      readingDurationSeconds: duration,
      cpm,
      wpm,
      targetCpm: benchmark.passingCpm,
      speedRatio,
      speedRating,
      speedRatingLabel,
      comprehensionAccuracy: accuracy,
      efficiencyIndex,
      feedback,
    };
  }

  /**
   * Persist user's reading passage attempt in local storage
   */
  public static saveProgress(record: ReadingProgressRecord): void {
    if (typeof window === 'undefined') return;
    const history = this.getProgressHistory();
    history[record.passageId] = record;
    safeLocalStorage.setJSON(STORAGE_KEY, history);
  }

  /**
   * Retrieve all saved reading records
   */
  public static getProgressHistory(): Record<string, ReadingProgressRecord> {
    if (typeof window === 'undefined') return {};
    return safeLocalStorage.getJSON<Record<string, ReadingProgressRecord>>(STORAGE_KEY, {});
  }
}
