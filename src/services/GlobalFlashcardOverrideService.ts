import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface GlobalFlashcardOverride {
  id?: string;
  word: string;
  front: string;
  phonetic?: string;
  back: string;
  example?: string;
  deck_id?: string | null;
  category?: string | null;
  updated_by?: string;
  created_at?: string;
  updated_at?: string;
}

const STORAGE_KEY = 'study_planner_global_flashcard_overrides';

export class GlobalFlashcardOverrideService {
  private static memoryCache: Map<string, GlobalFlashcardOverride> | null = null;
  private static listeners: Array<() => void> = [];

  public static normalizeWordKey(text: string): string {
    if (!text) return '';
    return text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[[（(［「].*?[\]）)］」]/g, ''); // strip parenthetical qualifiers and bracketed readings
  }

  public static hasOverride(word: string): boolean {
    if (!word) return false;
    const map = this.getLocalOverridesMap();
    return map.has(word.trim().toLowerCase()) || map.has(this.normalizeWordKey(word));
  }

  /**
   * Subscribe to override updates
   */
  public static subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private static notifyListeners(): void {
    this.listeners.forEach((l) => {
      try {
        l();
      } catch (e) {
        console.error('Error in override listener:', e);
      }
    });
  }

  /**
   * Returns memory cache or local storage cache synchronously for instant rendering
   */
  public static getLocalOverridesMap(): Map<string, GlobalFlashcardOverride> {
    if (this.memoryCache) {
      return this.memoryCache;
    }

    const map = new Map<string, GlobalFlashcardOverride>();
    try {
      const raw = safeLocalStorage.getItem(STORAGE_KEY);
      if (raw) {
        const list: GlobalFlashcardOverride[] = JSON.parse(raw);
        list.forEach((item) => {
          if (item && item.word) {
            map.set(item.word.trim().toLowerCase(), item);
            map.set(this.normalizeWordKey(item.word), item);
            if (item.front) {
              map.set(item.front.trim().toLowerCase(), item);
              map.set(this.normalizeWordKey(item.front), item);
            }
          }
        });
      }
    } catch (e) {
      console.warn('Failed to load local global flashcard overrides:', e);
    }

    this.memoryCache = map;
    return map;
  }

  /**
   * Fetches all global overrides from Supabase and syncs to local cache
   */
  public static async fetchGlobalOverrides(): Promise<Map<string, GlobalFlashcardOverride>> {
    const map = this.getLocalOverridesMap();

    try {
      const { data, error } = await supabase
        .from('global_flashcard_overrides')
        .select('*')
        .order('updated_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        const newMap = new Map<string, GlobalFlashcardOverride>();
        data.forEach((item: any) => {
          const override: GlobalFlashcardOverride = {
            id: item.id,
            word: item.word || item.front,
            front: item.front,
            phonetic: item.phonetic || '',
            back: item.back,
            example: item.example || '',
            deck_id: item.deck_id || undefined,
            category: item.category || undefined,
            updated_by: item.updated_by || undefined,
            created_at: item.created_at,
            updated_at: item.updated_at,
          };

          newMap.set(override.word.trim().toLowerCase(), override);
          newMap.set(this.normalizeWordKey(override.word), override);
          if (override.front) {
            newMap.set(override.front.trim().toLowerCase(), override);
            newMap.set(this.normalizeWordKey(override.front), override);
          }
        });

        this.memoryCache = newMap;
        try {
          // Save unique entries list to localStorage
          const uniqueList = Array.from(new Set(Array.from(newMap.values())));
          safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueList));
        } catch {}

        this.notifyListeners();
        return newMap;
      }
    } catch (err) {
      console.warn('Failed to fetch global flashcard overrides from DB:', err);
    }

    return map;
  }

  /**
   * Save or update a single global flashcard override (Admins & Super Admins)
   */
  public static async saveGlobalOverride(
    override: GlobalFlashcardOverride,
    adminEmail?: string,
  ): Promise<boolean> {
    const cleanWord = (override.word || override.front).trim();
    const cleanFront = (override.front || override.word).trim();
    const cleanBack = override.back.trim();
    const cleanPhonetic = override.phonetic ? override.phonetic.trim() : '';
    const cleanExample = override.example ? override.example.trim() : '';

    if (!cleanWord || !cleanBack) {
      throw new Error("So'z (front) va tarjima (back) bo'sh bo'lishi mumkin emas");
    }

    const payload = {
      word: cleanWord,
      front: cleanFront,
      phonetic: cleanPhonetic,
      back: cleanBack,
      example: cleanExample,
      deck_id: override.deck_id || null,
      category: override.category || null,
      updated_by: adminEmail || 'admin',
      updated_at: new Date().toISOString(),
    };

    // 1. Update local cache immediately for responsive UI
    const map = this.getLocalOverridesMap();
    const fullOverride: GlobalFlashcardOverride = {
      ...payload,
      id: override.id,
      created_at: override.created_at || new Date().toISOString(),
    };

    map.set(cleanWord.toLowerCase(), fullOverride);
    map.set(this.normalizeWordKey(cleanWord), fullOverride);
    map.set(cleanFront.toLowerCase(), fullOverride);
    map.set(this.normalizeWordKey(cleanFront), fullOverride);

    try {
      const uniqueList = Array.from(new Set(Array.from(map.values())));
      safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueList));
    } catch {}

    this.notifyListeners();

    // 2. Persist to Supabase DB for production users
    try {
      const { error } = await supabase
        .from('global_flashcard_overrides')
        .upsert(payload, { onConflict: 'word' });

      if (error) {
        console.error('Supabase global flashcard override upsert error:', error.message);
        // Even if remote fails, local is updated; return true or throw based on preference
        return false;
      }
      return true;
    } catch (err) {
      console.error('Exception during global override save:', err);
      return false;
    }
  }

  /**
   * Save a batch of global flashcard overrides (e.g. from Deck Auditor)
   */
  public static async saveBatchOverrides(
    overrides: GlobalFlashcardOverride[],
    adminEmail?: string,
  ): Promise<boolean> {
    if (!overrides || overrides.length === 0) return true;

    const map = this.getLocalOverridesMap();
    const payloads = overrides.map((o) => {
      const cleanWord = (o.word || o.front).trim();
      const cleanFront = (o.front || o.word).trim();
      const cleanBack = o.back.trim();
      const cleanPhonetic = o.phonetic ? o.phonetic.trim() : '';
      const cleanExample = o.example ? o.example.trim() : '';

      const payload = {
        word: cleanWord,
        front: cleanFront,
        phonetic: cleanPhonetic,
        back: cleanBack,
        example: cleanExample,
        deck_id: o.deck_id || null,
        category: o.category || null,
        updated_by: adminEmail || 'admin',
        updated_at: new Date().toISOString(),
      };

      map.set(cleanWord.toLowerCase(), payload);
      map.set(this.normalizeWordKey(cleanWord), payload);
      map.set(cleanFront.toLowerCase(), payload);
      map.set(this.normalizeWordKey(cleanFront), payload);

      return payload;
    });

    try {
      const uniqueList = Array.from(new Set(Array.from(map.values())));
      safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueList));
    } catch {}

    this.notifyListeners();

    try {
      const { error } = await supabase
        .from('global_flashcard_overrides')
        .upsert(payloads, { onConflict: 'word' });

      if (error) {
        console.warn('Batch overrides upsert notice:', error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.warn('Batch overrides upsert exception:', err);
      return false;
    }
  }

  /**
   * Delete a global override (restore base word)
   */
  public static async deleteOverride(word: string): Promise<boolean> {
    const map = this.getLocalOverridesMap();
    const key = word.trim().toLowerCase();
    const normKey = this.normalizeWordKey(word);

    map.delete(key);
    map.delete(normKey);

    try {
      const uniqueList = Array.from(new Set(Array.from(map.values())));
      safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueList));
    } catch {}

    this.notifyListeners();

    try {
      await supabase.from('global_flashcard_overrides').delete().eq('word', word.trim());
      return true;
    } catch (err) {
      console.warn('Delete override error:', err);
      return false;
    }
  }

  /**
   * Applies global word/translation/phonetic/example overrides to a list of cards
   */
  public static applyOverridesToCards<
    T extends {
      front: string;
      back: string;
      phonetic?: string;
      example?: string;
      [key: string]: any;
    },
  >(cards: T[]): T[] {
    if (!cards || cards.length === 0) return cards;
    const map = this.getLocalOverridesMap();
    if (map.size === 0) return cards;

    return cards.map((card) => {
      const frontKey = (card.front || '').trim().toLowerCase();
      const normKey = this.normalizeWordKey(card.front || '');

      const override = map.get(frontKey) || map.get(normKey);
      if (!override) {
        return card;
      }

      return {
        ...card,
        front: override.front || card.front,
        back: override.back || card.back,
        phonetic: override.phonetic !== undefined ? override.phonetic : card.phonetic,
        example: override.example !== undefined ? override.example : card.example,
      };
    });
  }

  /**
   * Applies override to a single Flashcard or PresetCard
   */
  public static applyOverrideToCard<
    T extends {
      front: string;
      back: string;
      phonetic?: string;
      example?: string;
      [key: string]: any;
    },
  >(card: T): T {
    const map = this.getLocalOverridesMap();
    if (map.size === 0) return card;

    const frontKey = (card.front || '').trim().toLowerCase();
    const normKey = this.normalizeWordKey(card.front || '');

    const override = map.get(frontKey) || map.get(normKey);
    if (!override) return card;

    return {
      ...card,
      front: override.front || card.front,
      back: override.back || card.back,
      phonetic: override.phonetic !== undefined ? override.phonetic : card.phonetic,
      example: override.example !== undefined ? override.example : card.example,
    };
  }
}
