import { Flashcard } from '../types';

export interface SpeakingErrorItem {
    id: string;
    verbatim: string;
    correction: string;
    explanation: string;
    category: 'grammar' | 'vocabulary' | 'pronunciation' | 'fluency';
    language: 'en' | 'ja';
    timestamp: string;
    timesReviewed: number;
}

const STORAGE_KEY_PREFIX = 'study_planner_error_vault_cache_';

import { supabase } from '../lib/supabase';
import { toDeterministicUUID } from '../utils/uuid';

export class ErrorVaultService {
    private static getStorageKey(userId?: string | null): string {
        if (userId) return `${STORAGE_KEY_PREFIX}${userId}`;
        try {
            const cachedUser = JSON.parse(localStorage.getItem('study_planner_user_cache') || '{}');
            if (cachedUser?.id) return `${STORAGE_KEY_PREFIX}${cachedUser.id}`;
        } catch {}
        return `${STORAGE_KEY_PREFIX}guest`;
    }

    /**
     * Gets all logged speaking errors for active user
     */
    public static getErrors(userId?: string | null): SpeakingErrorItem[] {
        if (typeof window === 'undefined') return [];
        try {
            const key = this.getStorageKey(userId);
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error loading error vault:', e);
            return [];
        }
    }

    /**
     * Syncs error vault from Supabase speaking_errors DB table on initialization
     */
    public static async syncFromDB(explicitUserId?: string | null): Promise<SpeakingErrorItem[]> {
        try {
            let userId = explicitUserId;
            if (!userId) {
                const sessionRes = await supabase.auth.getSession().catch(() => null);
                userId = sessionRes?.data?.session?.user?.id || null;
            }
            if (!userId) return this.getErrors(null);

            const userKey = this.getStorageKey(userId);
            const localErrors = this.getErrors(userId);

            // 1. Fetch from speaking_errors table
            const { data: dbRows, error } = await supabase
                .from('speaking_errors')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false })
                .limit(100);

            if (!error && dbRows && dbRows.length > 0) {
                const mappedFromDB: SpeakingErrorItem[] = dbRows.map(r => ({
                    id: r.id,
                    verbatim: r.verbatim,
                    correction: r.correction,
                    explanation: r.explanation || '',
                    category: (r.category || 'grammar') as any,
                    language: (r.language || 'en') as any,
                    timestamp: r.created_at || new Date().toISOString(),
                    timesReviewed: r.times_reviewed || 0
                }));

                const dbIds = new Set(mappedFromDB.map(e => e.id));
                const merged = [...mappedFromDB, ...localErrors.filter(e => !dbIds.has(e.id))].slice(0, 100);
                localStorage.setItem(userKey, JSON.stringify(merged));
                return merged;
            }
        } catch (e) {
            console.warn('Failed to sync error vault from DB:', e);
        }
        return this.getErrors(explicitUserId);
    }

    /**
     * Saves a list of speaking errors captured during session
     */
    public static logErrors(errors: Omit<SpeakingErrorItem, 'id' | 'timestamp' | 'timesReviewed'>[], explicitUserId?: string | null): SpeakingErrorItem[] {
        const userKey = this.getStorageKey(explicitUserId);
        const existing = this.getErrors(explicitUserId);
        const newItems: SpeakingErrorItem[] = errors.map(err => ({
            ...err,
            id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            timestamp: new Date().toISOString(),
            timesReviewed: 0
        }));

        const updated = [...newItems, ...existing].slice(0, 100); // Keep last 100 mistakes
        try {
            localStorage.setItem(userKey, JSON.stringify(updated));
        } catch (e) {
            console.error('Error saving to error vault:', e);
        }

        // Asynchronously sync to Supabase speaking_errors table
        const syncToDb = (activeId: string) => {
            if (activeId && activeId !== 'guest') {
                const payloads = newItems.map(item => ({
                    id: toDeterministicUUID(item.id),
                    user_id: activeId,
                    language: item.language,
                    verbatim: item.verbatim,
                    correction: item.correction,
                    explanation: item.explanation,
                    category: item.category,
                    times_reviewed: item.timesReviewed,
                    created_at: item.timestamp,
                    updated_at: new Date().toISOString()
                }));

                supabase.from('speaking_errors').upsert(payloads).then(({ error }) => {
                    if (error) console.warn('[ErrorVaultService] DB upsert error:', error);
                });
            }
        };

        if (explicitUserId) {
            syncToDb(explicitUserId);
        } else if (typeof supabase?.auth?.getSession === 'function') {
            supabase.auth.getSession().then(({ data }) => {
                if (data?.session?.user?.id) syncToDb(data.session.user.id);
            }).catch(() => null);
        } else if (typeof supabase?.auth?.getUser === 'function') {
            supabase.auth.getUser().then(({ data }) => {
                if (data?.user?.id) syncToDb(data.user.id);
            }).catch(() => null);
        }

        return updated;
    }

    /**
     * Converts logged error items into Flashcard objects for spaced repetition
     */
    public static convertErrorsToFlashcards(language: 'en' | 'ja' = 'en', subjectId?: string, userId?: string | null): Partial<Flashcard>[] {
        const errors = this.getErrors(userId).filter(e => e.language === language);
        return errors.slice(0, 10).map(err => ({
            subjectId,
            front: language === 'ja'
                ? `❌ Qoidani tuzating:\n"${err.verbatim}"`
                : `❌ Correct the mistake:\n"${err.verbatim}"`,
            back: `✅ Tog'ri shakli:\n"${err.correction}"\n\n💡 Qoida:\n${err.explanation}`
        }));
    }

    /**
     * Gets a formatted list of active weak error items to re-inject into AI Coach system prompt
     */
    public static getWeakItemsPromptSnippet(language: 'en' | 'ja' = 'en', userId?: string | null): string {
        const errors = this.getErrors(userId).filter(e => e.language === language).slice(0, 5);
        if (errors.length === 0) return '';

        const itemsStr = errors.map(e => `- User previously said "${e.verbatim}" instead of "${e.correction}" (${e.explanation})`).join('\n');
        return `\n\nRE-TESTING WEAKNESSES (CLOSED-LOOP REMEDIATION):\nThe student has previously struggled with these expressions. Naturally weave topics into the conversation to test if they can use these correctly:\n${itemsStr}\n`;
    }

    /**
     * Clears all items in Error Vault for specific user
     */
    public static clearVault(userId?: string | null): void {
        try {
            const key = this.getStorageKey(userId);
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error clearing vault:', e);
        }
    }
}
