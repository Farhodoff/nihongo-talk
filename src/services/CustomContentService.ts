import { JlptKanjiItem, JlptGrammarItem } from '../data/jlptGrammarKanji';
import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

const CUSTOM_KANJI_KEY = 'study_planner_custom_admin_kanji';
const CUSTOM_GRAMMAR_KEY = 'study_planner_custom_admin_grammar';

export class CustomContentService {
  /**
   * Get all custom admin Kanji
   */
  static getCustomKanji(): JlptKanjiItem[] {
    try {
      const data = safeLocalStorage.getJSON<JlptKanjiItem[]>(CUSTOM_KANJI_KEY, []);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  /**
   * Save or update custom Kanji
   */
  static async saveCustomKanji(item: JlptKanjiItem): Promise<boolean> {
    try {
      const current = this.getCustomKanji();
      const existingIdx = current.findIndex((k) => k.id === item.id || k.kanji === item.kanji);

      let updated: JlptKanjiItem[];
      if (existingIdx >= 0) {
        updated = [...current];
        updated[existingIdx] = { ...item, id: current[existingIdx].id };
      } else {
        const newItem = {
          ...item,
          id: item.id || `custom-k-${Date.now()}`,
        };
        updated = [newItem, ...current];
      }

      safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, updated);

      // Try syncing to Supabase if table exists
      try {
        await (supabase.from('custom_kanji') as any).upsert([
          {
            id: item.id,
            kanji: item.kanji,
            level: item.level,
            onyomi: item.onyomi,
            kunyomi: item.kunyomi,
            meaning_uz: item.meaningUz,
            stroke_count: item.strokeCount,
            examples: item.examples,
            updated_at: new Date().toISOString(),
          },
        ]);
      } catch {
        // Table might not exist yet, local storage remains primary
      }

      return true;
    } catch (e) {
      console.error('Error saving custom kanji:', e);
      return false;
    }
  }

  /**
   * Delete custom Kanji
   */
  static async deleteCustomKanji(idOrKanji: string): Promise<boolean> {
    try {
      const current = this.getCustomKanji();
      const filtered = current.filter((k) => k.id !== idOrKanji && k.kanji !== idOrKanji);
      safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, filtered);

      try {
        await (supabase.from('custom_kanji') as any).delete().eq('id', idOrKanji);
      } catch {
        // ignore
      }

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get all custom admin Grammar rules
   */
  static getCustomGrammar(): JlptGrammarItem[] {
    try {
      const data = safeLocalStorage.getJSON<JlptGrammarItem[]>(CUSTOM_GRAMMAR_KEY, []);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  /**
   * Save or update custom Grammar rule
   */
  static async saveCustomGrammar(item: JlptGrammarItem): Promise<boolean> {
    try {
      const current = this.getCustomGrammar();
      const existingIdx = current.findIndex((g) => g.id === item.id || g.title === item.title);

      let updated: JlptGrammarItem[];
      if (existingIdx >= 0) {
        updated = [...current];
        updated[existingIdx] = { ...item, id: current[existingIdx].id };
      } else {
        const newItem = {
          ...item,
          id: item.id || `custom-g-${Date.now()}`,
        };
        updated = [newItem, ...current];
      }

      safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, updated);

      try {
        await (supabase.from('custom_grammar') as any).upsert([
          {
            id: item.id,
            title: item.title,
            level: item.level,
            romaji: item.romaji,
            meaning_uz: item.meaningUz,
            structure: item.structure,
            examples: item.examples,
            updated_at: new Date().toISOString(),
          },
        ]);
      } catch {
        // Table might not exist yet, local storage remains primary
      }

      return true;
    } catch (e) {
      console.error('Error saving custom grammar:', e);
      return false;
    }
  }

  /**
   * Delete custom Grammar
   */
  static async deleteCustomGrammar(idOrTitle: string): Promise<boolean> {
    try {
      const current = this.getCustomGrammar();
      const filtered = current.filter((g) => g.id !== idOrTitle && g.title !== idOrTitle);
      safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, filtered);

      try {
        await (supabase.from('custom_grammar') as any).delete().eq('id', idOrTitle);
      } catch {
        // ignore
      }

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Merge base kanji with custom kanji
   */
  static mergeKanji(baseList: JlptKanjiItem[]): JlptKanjiItem[] {
    const custom = this.getCustomKanji();
    if (custom.length === 0) return baseList;

    // Custom items appear at the beginning of their respective levels
    const customMap = new Map(custom.map((c) => [c.kanji, c]));
    const filteredBase = baseList.filter((b) => !customMap.has(b.kanji));
    return [...custom, ...filteredBase];
  }

  /**
   * Merge base grammar with custom grammar
   */
  static mergeGrammar(baseList: JlptGrammarItem[]): JlptGrammarItem[] {
    const custom = this.getCustomGrammar();
    if (custom.length === 0) return baseList;

    const customMap = new Map(custom.map((c) => [c.id, c]));
    const filteredBase = baseList.filter((b) => !customMap.has(b.id));
    return [...custom, ...filteredBase];
  }
}
