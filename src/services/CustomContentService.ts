import { JlptKanjiItem, JlptGrammarItem } from '../data/jlptGrammarKanji';
import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

const CUSTOM_KANJI_KEY = 'study_planner_custom_admin_kanji';
const CUSTOM_GRAMMAR_KEY = 'study_planner_custom_admin_grammar';

export interface BulkImportResult {
  added: number;
  updated: number;
  failed: number;
}

export class CustomContentService {
  /**
   * Synchronize custom content from Supabase to local storage
   */
  static async syncFromSupabase(): Promise<{ kanjiCount: number; grammarCount: number }> {
    let kanjiCount = 0;
    let grammarCount = 0;

    try {
      const [kRes, gRes] = await Promise.allSettled([
        supabase.from('custom_kanji').select('*'),
        supabase.from('custom_grammar').select('*'),
      ]);

      if (kRes.status === 'fulfilled' && kRes.value.data && Array.isArray(kRes.value.data)) {
        const remoteK: JlptKanjiItem[] = kRes.value.data.map((r: any) => ({
          id: r.id,
          kanji: r.kanji,
          level: r.level,
          onyomi: r.onyomi || '-',
          kunyomi: r.kunyomi || '-',
          meaningUz: r.meaning_uz,
          strokeCount: r.stroke_count || 1,
          examples: Array.isArray(r.examples) ? r.examples : [],
        }));

        const localK = this.getCustomKanji();
        const mergedMap = new Map<string, JlptKanjiItem>();
        // Remote takes precedent
        remoteK.forEach((item) => mergedMap.set(item.id || item.kanji, item));
        // Keep local if not yet in remote
        localK.forEach((item) => {
          const key = item.id || item.kanji;
          if (!mergedMap.has(key)) {
            mergedMap.set(key, item);
          }
        });

        const combined = Array.from(mergedMap.values());
        safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, combined);
        kanjiCount = combined.length;
      }

      if (gRes.status === 'fulfilled' && gRes.value.data && Array.isArray(gRes.value.data)) {
        const remoteG: JlptGrammarItem[] = gRes.value.data.map((r: any) => ({
          id: r.id,
          title: r.title,
          level: r.level,
          romaji: r.romaji || '',
          meaningUz: r.meaning_uz,
          structure: r.structure || '',
          examples: Array.isArray(r.examples) ? r.examples : [],
        }));

        const localG = this.getCustomGrammar();
        const mergedMap = new Map<string, JlptGrammarItem>();
        remoteG.forEach((item) => mergedMap.set(item.id || item.title, item));
        localG.forEach((item) => {
          const key = item.id || item.title;
          if (!mergedMap.has(key)) {
            mergedMap.set(key, item);
          }
        });

        const combined = Array.from(mergedMap.values());
        safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, combined);
        grammarCount = combined.length;
      }
    } catch (e) {
      console.warn('[CustomContentService] syncFromSupabase fallback to local:', e);
    }

    return { kanjiCount, grammarCount };
  }

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
   * Save or insert custom Kanji
   */
  static async saveCustomKanji(item: JlptKanjiItem): Promise<boolean> {
    try {
      const current = this.getCustomKanji();
      const existingIdx = current.findIndex((k) => k.id === item.id || k.kanji === item.kanji);

      let updated: JlptKanjiItem[];
      const itemId =
        item.id || (existingIdx >= 0 ? current[existingIdx].id : `custom-k-${Date.now()}`);
      const preparedItem: JlptKanjiItem = { ...item, id: itemId };

      if (existingIdx >= 0) {
        updated = [...current];
        updated[existingIdx] = preparedItem;
      } else {
        updated = [preparedItem, ...current];
      }

      safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, updated);

      // Try syncing to Supabase
      try {
        await (supabase.from('custom_kanji') as any).upsert([
          {
            id: preparedItem.id,
            kanji: preparedItem.kanji,
            level: preparedItem.level,
            onyomi: preparedItem.onyomi || '-',
            kunyomi: preparedItem.kunyomi || '-',
            meaning_uz: preparedItem.meaningUz,
            stroke_count: preparedItem.strokeCount || 1,
            examples: preparedItem.examples || [],
            updated_at: new Date().toISOString(),
          },
        ]);
      } catch {
        // Table might not exist or offline
      }

      return true;
    } catch (e) {
      console.error('Error saving custom kanji:', e);
      return false;
    }
  }

  /**
   * Update existing custom Kanji by ID
   */
  static async updateCustomKanji(id: string, partial: Partial<JlptKanjiItem>): Promise<boolean> {
    try {
      const current = this.getCustomKanji();
      const idx = current.findIndex((k) => k.id === id);
      if (idx < 0) return false;

      const updatedItem: JlptKanjiItem = {
        ...current[idx],
        ...partial,
        id, // preserve ID
      };

      current[idx] = updatedItem;
      safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, [...current]);

      try {
        await (supabase.from('custom_kanji') as any)
          .update({
            kanji: updatedItem.kanji,
            level: updatedItem.level,
            onyomi: updatedItem.onyomi,
            kunyomi: updatedItem.kunyomi,
            meaning_uz: updatedItem.meaningUz,
            stroke_count: updatedItem.strokeCount,
            examples: updatedItem.examples,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id);
      } catch {
        // ignore
      }

      return true;
    } catch (e) {
      console.error('Error updating custom kanji:', e);
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
        await (supabase.from('custom_kanji') as any)
          .delete()
          .or(`id.eq.${idOrKanji},kanji.eq.${idOrKanji}`);
      } catch {
        // ignore
      }

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Bulk import Kanji items
   */
  static async bulkImportKanji(items: Partial<JlptKanjiItem>[]): Promise<BulkImportResult> {
    let added = 0;
    let updated = 0;
    let failed = 0;

    const current = this.getCustomKanji();
    const map = new Map<string, JlptKanjiItem>(current.map((k) => [k.kanji, k]));
    const toUpsertDb: any[] = [];

    for (const raw of items) {
      if (!raw.kanji || !raw.kanji.trim() || !raw.meaningUz || !raw.meaningUz.trim()) {
        failed++;
        continue;
      }

      const kanjiChar = raw.kanji.trim();
      const existing = map.get(kanjiChar);
      const isUpdate = !!existing;

      const item: JlptKanjiItem = {
        id: existing
          ? existing.id
          : `custom-k-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        kanji: kanjiChar,
        level: raw.level || 'N5',
        onyomi: raw.onyomi?.trim() || '-',
        kunyomi: raw.kunyomi?.trim() || '-',
        meaningUz: raw.meaningUz.trim(),
        strokeCount: Number(raw.strokeCount) || 1,
        examples: Array.isArray(raw.examples) ? raw.examples : [],
      };

      map.set(kanjiChar, item);
      if (isUpdate) updated++;
      else added++;

      toUpsertDb.push({
        id: item.id,
        kanji: item.kanji,
        level: item.level,
        onyomi: item.onyomi,
        kunyomi: item.kunyomi,
        meaning_uz: item.meaningUz,
        stroke_count: item.strokeCount,
        examples: item.examples,
        updated_at: new Date().toISOString(),
      });
    }

    safeLocalStorage.setJSON(CUSTOM_KANJI_KEY, Array.from(map.values()));

    if (toUpsertDb.length > 0) {
      try {
        await (supabase.from('custom_kanji') as any).upsert(toUpsertDb);
      } catch {
        // ignore
      }
    }

    return { added, updated, failed };
  }

  /**
   * Parse delimited text or JSON for Kanji bulk import
   * Formats supported:
   * 1. JSON string: [{"kanji": "猫", "level": "N5", "meaningUz": "Mushuk"}]
   * 2. Pipe delimited: Kanji | Level | Onyomi | Kunyomi | Meaning | Strokes
   * 3. Dash delimited: Kanji - Meaning
   */
  static parseKanjiInput(text: string): Partial<JlptKanjiItem>[] {
    const trimmed = text.trim();
    if (!trimmed) return [];

    // Try parsing as JSON first
    if (
      (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
      (trimmed.startsWith('{') && trimmed.endsWith('}'))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        const list = Array.isArray(parsed) ? parsed : [parsed];
        return list.map((item: any) => ({
          kanji: item.kanji || item.char || item.character || '',
          level: (['N5', 'N4', 'N3', 'N2', 'N1'].includes(item.level) ? item.level : 'N5') as any,
          onyomi: item.onyomi || item.on || '-',
          kunyomi: item.kunyomi || item.kun || '-',
          meaningUz: item.meaningUz || item.meaning_uz || item.meaning || item.tarjima || '',
          strokeCount: Number(item.strokeCount || item.stroke_count || item.strokes || 1),
          examples: Array.isArray(item.examples) ? item.examples : [],
        }));
      } catch {
        // Fall back to line parser
      }
    }

    // Line parser
    const lines = trimmed.split('\n');
    const result: Partial<JlptKanjiItem>[] = [];

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#') || line.startsWith('//')) continue;

      if (line.includes('|')) {
        const parts = line.split('|').map((p) => p.trim());
        const kanji = parts[0] || '';
        const level = (['N5', 'N4', 'N3', 'N2', 'N1'].includes(parts[1]) ? parts[1] : 'N5') as any;
        const onyomi = parts[2] || '-';
        const kunyomi = parts[3] || '-';
        const meaningUz = parts[4] || '';
        const strokeCount = parts[5] ? Number(parts[5]) || 1 : 1;

        if (kanji && meaningUz) {
          result.push({ kanji, level, onyomi, kunyomi, meaningUz, strokeCount, examples: [] });
        }
      } else if (line.includes('-')) {
        const [k, m] = line.split('-').map((p) => p.trim());
        if (k && m) {
          result.push({
            kanji: k,
            level: 'N5',
            onyomi: '-',
            kunyomi: '-',
            meaningUz: m,
            strokeCount: 1,
            examples: [],
          });
        }
      } else if (line.includes('\t')) {
        const parts = line.split('\t').map((p) => p.trim());
        if (parts[0] && parts[1]) {
          result.push({
            kanji: parts[0],
            level: (['N5', 'N4', 'N3', 'N2', 'N1'].includes(parts[2]) ? parts[2] : 'N5') as any,
            onyomi: parts[3] || '-',
            kunyomi: parts[4] || '-',
            meaningUz: parts[1],
            strokeCount: 1,
            examples: [],
          });
        }
      }
    }

    return result;
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
   * Save or insert custom Grammar rule
   */
  static async saveCustomGrammar(item: JlptGrammarItem): Promise<boolean> {
    try {
      const current = this.getCustomGrammar();
      const existingIdx = current.findIndex((g) => g.id === item.id || g.title === item.title);

      let updated: JlptGrammarItem[];
      const itemId =
        item.id || (existingIdx >= 0 ? current[existingIdx].id : `custom-g-${Date.now()}`);
      const preparedItem: JlptGrammarItem = { ...item, id: itemId };

      if (existingIdx >= 0) {
        updated = [...current];
        updated[existingIdx] = preparedItem;
      } else {
        updated = [preparedItem, ...current];
      }

      safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, updated);

      try {
        await (supabase.from('custom_grammar') as any).upsert([
          {
            id: preparedItem.id,
            title: preparedItem.title,
            level: preparedItem.level,
            romaji: preparedItem.romaji || '',
            meaning_uz: preparedItem.meaningUz,
            structure: preparedItem.structure || '',
            examples: preparedItem.examples || [],
            updated_at: new Date().toISOString(),
          },
        ]);
      } catch {
        // ignore
      }

      return true;
    } catch (e) {
      console.error('Error saving custom grammar:', e);
      return false;
    }
  }

  /**
   * Update existing custom Grammar by ID
   */
  static async updateCustomGrammar(
    id: string,
    partial: Partial<JlptGrammarItem>,
  ): Promise<boolean> {
    try {
      const current = this.getCustomGrammar();
      const idx = current.findIndex((g) => g.id === id);
      if (idx < 0) return false;

      const updatedItem: JlptGrammarItem = {
        ...current[idx],
        ...partial,
        id, // preserve ID
      };

      current[idx] = updatedItem;
      safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, [...current]);

      try {
        await (supabase.from('custom_grammar') as any)
          .update({
            title: updatedItem.title,
            level: updatedItem.level,
            romaji: updatedItem.romaji,
            meaning_uz: updatedItem.meaningUz,
            structure: updatedItem.structure,
            examples: updatedItem.examples,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id);
      } catch {
        // ignore
      }

      return true;
    } catch (e) {
      console.error('Error updating custom grammar:', e);
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
        await (supabase.from('custom_grammar') as any)
          .delete()
          .or(`id.eq.${idOrTitle},title.eq.${idOrTitle}`);
      } catch {
        // ignore
      }

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Bulk import Grammar items
   */
  static async bulkImportGrammar(items: Partial<JlptGrammarItem>[]): Promise<BulkImportResult> {
    let added = 0;
    let updated = 0;
    let failed = 0;

    const current = this.getCustomGrammar();
    const map = new Map<string, JlptGrammarItem>(current.map((g) => [g.title, g]));
    const toUpsertDb: any[] = [];

    for (const raw of items) {
      if (!raw.title || !raw.title.trim() || !raw.meaningUz || !raw.meaningUz.trim()) {
        failed++;
        continue;
      }

      const patternTitle = raw.title.trim();
      const existing = map.get(patternTitle);
      const isUpdate = !!existing;

      const item: JlptGrammarItem = {
        id: existing
          ? existing.id
          : `custom-g-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: patternTitle,
        level: raw.level || 'N5',
        romaji: raw.romaji?.trim() || '',
        meaningUz: raw.meaningUz.trim(),
        structure: raw.structure?.trim() || '',
        examples: Array.isArray(raw.examples) ? raw.examples : [],
      };

      map.set(patternTitle, item);
      if (isUpdate) updated++;
      else added++;

      toUpsertDb.push({
        id: item.id,
        title: item.title,
        level: item.level,
        romaji: item.romaji,
        meaning_uz: item.meaningUz,
        structure: item.structure,
        examples: item.examples,
        updated_at: new Date().toISOString(),
      });
    }

    safeLocalStorage.setJSON(CUSTOM_GRAMMAR_KEY, Array.from(map.values()));

    if (toUpsertDb.length > 0) {
      try {
        await (supabase.from('custom_grammar') as any).upsert(toUpsertDb);
      } catch {
        // ignore
      }
    }

    return { added, updated, failed };
  }

  /**
   * Parse delimited text or JSON for Grammar bulk import
   * Formats supported:
   * 1. JSON string
   * 2. Pipe delimited: Pattern | Level | Romaji | Structure | Meaning
   * 3. Dash delimited: Pattern - Meaning
   */
  static parseGrammarInput(text: string): Partial<JlptGrammarItem>[] {
    const trimmed = text.trim();
    if (!trimmed) return [];

    // Try parsing as JSON first
    if (
      (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
      (trimmed.startsWith('{') && trimmed.endsWith('}'))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        const list = Array.isArray(parsed) ? parsed : [parsed];
        return list.map((item: any) => ({
          title: item.title || item.pattern || item.grammar || '',
          level: (['N5', 'N4', 'N3', 'N2', 'N1'].includes(item.level) ? item.level : 'N5') as any,
          romaji: item.romaji || '',
          meaningUz: item.meaningUz || item.meaning_uz || item.meaning || item.tarjima || '',
          structure: item.structure || item.formula || '',
          examples: Array.isArray(item.examples) ? item.examples : [],
        }));
      } catch {
        // Fall back to line parser
      }
    }

    const lines = trimmed.split('\n');
    const result: Partial<JlptGrammarItem>[] = [];

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#') || line.startsWith('//')) continue;

      if (line.includes('|')) {
        const parts = line.split('|').map((p) => p.trim());
        const title = parts[0] || '';
        const level = (['N5', 'N4', 'N3', 'N2', 'N1'].includes(parts[1]) ? parts[1] : 'N5') as any;
        const romaji = parts[2] || '';
        const structure = parts[3] || '';
        const meaningUz = parts[4] || '';

        if (title && meaningUz) {
          result.push({ title, level, romaji, structure, meaningUz, examples: [] });
        }
      } else if (line.includes('-')) {
        const [pattern, meaning] = line.split('-').map((p) => p.trim());
        if (pattern && meaning) {
          result.push({
            title: pattern,
            level: 'N5',
            romaji: '',
            structure: '',
            meaningUz: meaning,
            examples: [],
          });
        }
      } else if (line.includes('\t')) {
        const parts = line.split('\t').map((p) => p.trim());
        if (parts[0] && parts[1]) {
          result.push({
            title: parts[0],
            level: (['N5', 'N4', 'N3', 'N2', 'N1'].includes(parts[2]) ? parts[2] : 'N5') as any,
            romaji: parts[3] || '',
            structure: parts[4] || '',
            meaningUz: parts[1],
            examples: [],
          });
        }
      }
    }

    return result;
  }

  /**
   * Export all custom content as a JSON string
   */
  static exportBackupJSON(): string {
    const kanji = this.getCustomKanji();
    const grammar = this.getCustomGrammar();
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      counts: {
        kanji: kanji.length,
        grammar: grammar.length,
      },
      kanji,
      grammar,
    };
    return JSON.stringify(payload, null, 2);
  }

  /**
   * Import from full JSON backup
   */
  static async importBackupJSON(
    jsonStr: string,
  ): Promise<{ kanjiResult: BulkImportResult; grammarResult: BulkImportResult }> {
    try {
      const data = JSON.parse(jsonStr);
      const kanjiList = Array.isArray(data.kanji) ? data.kanji : [];
      const grammarList = Array.isArray(data.grammar) ? data.grammar : [];

      const kanjiResult = await this.bulkImportKanji(kanjiList);
      const grammarResult = await this.bulkImportGrammar(grammarList);

      return { kanjiResult, grammarResult };
    } catch {
      return {
        kanjiResult: { added: 0, updated: 0, failed: 0 },
        grammarResult: { added: 0, updated: 0, failed: 0 },
      };
    }
  }

  /**
   * Merge base kanji with custom kanji
   */
  static mergeKanji(baseList: JlptKanjiItem[]): JlptKanjiItem[] {
    const custom = this.getCustomKanji();
    if (custom.length === 0) return baseList;

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
