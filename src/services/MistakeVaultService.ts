import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export type MistakeSource = 'lesson' | 'quiz' | 'sentence_order' | 'mock_exam';
export type MistakeCategory = 'grammar' | 'kanji' | 'vocab' | 'reading' | 'listening';
export type MistakeLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface JlptMistakeItem {
  id: string;
  userId?: string;
  source: MistakeSource;
  level: MistakeLevel;
  category: MistakeCategory;
  title?: string;
  questionText: string;
  passageText?: string;
  audioUrl?: string;
  options: string[];
  userAnswer: number | string;
  correctAnswer: number | string;
  explanationUzbek: string;
  timestamp: string;
  reviewCount: number;
  status: 'unresolved' | 'mastered';
}

const STORAGE_KEY_PREFIX = 'study_planner_jlpt_mistakes_';

export class MistakeVaultService {
  private static getStorageKey(userId?: string | null): string {
    if (userId) return `${STORAGE_KEY_PREFIX}${userId}`;
    const cachedUser = safeLocalStorage.getJSON<{ id?: string }>('study_planner_user_cache', {});
    if (cachedUser?.id) return `${STORAGE_KEY_PREFIX}${cachedUser.id}`;
    return `${STORAGE_KEY_PREFIX}guest`;
  }

  /**
   * Get all recorded mistakes for active user
   */
  public static getMistakes(userId?: string | null): JlptMistakeItem[] {
    if (typeof window === 'undefined') return [];
    return safeLocalStorage.getJSON<JlptMistakeItem[]>(this.getStorageKey(userId), []);
  }

  /**
   * Save a single mistake
   */
  public static recordMistake(
    item: Omit<JlptMistakeItem, 'id' | 'timestamp' | 'reviewCount' | 'status'>,
    userId?: string | null,
  ): JlptMistakeItem {
    const list = this.getMistakes(userId);
    const existingIdx = list.findIndex(
      (m) => m.questionText === item.questionText && m.level === item.level,
    );

    const newItem: JlptMistakeItem = {
      ...item,
      id:
        existingIdx !== -1
          ? list[existingIdx].id
          : `mstk_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      reviewCount: existingIdx !== -1 ? list[existingIdx].reviewCount + 1 : 0,
      status: 'unresolved',
    };

    let updated: JlptMistakeItem[];
    if (existingIdx !== -1) {
      updated = [...list];
      updated[existingIdx] = newItem;
    } else {
      updated = [newItem, ...list].slice(0, 300); // Keep last 300 mistakes
    }

    safeLocalStorage.setJSON(this.getStorageKey(userId), updated);
    return newItem;
  }

  /**
   * Record multiple mistakes in bulk
   */
  public static recordBatch(
    items: Omit<JlptMistakeItem, 'id' | 'timestamp' | 'reviewCount' | 'status'>[],
    userId?: string | null,
  ): void {
    if (!items || items.length === 0) return;
    const list = this.getMistakes(userId);
    const updated = [...list];

    for (const item of items) {
      const existingIdx = updated.findIndex(
        (m) => m.questionText === item.questionText && m.level === item.level,
      );
      const entry: JlptMistakeItem = {
        ...item,
        id:
          existingIdx !== -1
            ? updated[existingIdx].id
            : `mstk_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        timestamp: new Date().toISOString(),
        reviewCount: existingIdx !== -1 ? updated[existingIdx].reviewCount + 1 : 0,
        status: 'unresolved',
      };
      if (existingIdx !== -1) {
        updated[existingIdx] = entry;
      } else {
        updated.unshift(entry);
      }
    }

    safeLocalStorage.setJSON(this.getStorageKey(userId), updated.slice(0, 300));
  }

  /**
   * Mark a mistake as mastered (solved successfully in re-test)
   */
  public static markAsMastered(id: string, userId?: string | null): boolean {
    const list = this.getMistakes(userId);
    const target = list.find((m) => m.id === id);
    if (!target) return false;

    target.status = 'mastered';
    target.reviewCount += 1;
    target.timestamp = new Date().toISOString();

    safeLocalStorage.setJSON(this.getStorageKey(userId), list);
    return true;
  }

  /**
   * Delete mistake item
   */
  public static deleteMistake(id: string, userId?: string | null): void {
    const list = this.getMistakes(userId);
    const updated = list.filter((m) => m.id !== id);
    safeLocalStorage.setJSON(this.getStorageKey(userId), updated);
  }

  /**
   * Clear all mastered mistakes
   */
  public static clearMastered(userId?: string | null): void {
    const list = this.getMistakes(userId);
    const updated = list.filter((m) => m.status !== 'mastered');
    safeLocalStorage.setJSON(this.getStorageKey(userId), updated);
  }

  /**
   * Get stats summary
   */
  public static getStats(userId?: string | null): {
    total: number;
    unresolved: number;
    mastered: number;
    byLevel: Record<MistakeLevel, number>;
    byCategory: Record<MistakeCategory, number>;
  } {
    const list = this.getMistakes(userId);
    const byLevel: Record<MistakeLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
    const byCategory: Record<MistakeCategory, number> = {
      grammar: 0,
      kanji: 0,
      vocab: 0,
      reading: 0,
      listening: 0,
    };

    let unresolved = 0;
    let mastered = 0;

    for (const item of list) {
      if (item.status === 'mastered') {
        mastered++;
      } else {
        unresolved++;
      }
      if (byLevel[item.level] !== undefined) {
        byLevel[item.level]++;
      }
      if (byCategory[item.category] !== undefined) {
        byCategory[item.category]++;
      }
    }

    return {
      total: list.length,
      unresolved,
      mastered,
      byLevel,
      byCategory,
    };
  }
}
