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

const STORAGE_KEY = 'study_planner_error_vault';

import { supabase } from '../lib/supabase';

export class ErrorVaultService {
    /**
     * Gets all logged speaking errors
     */
    public static getErrors(): SpeakingErrorItem[] {
        if (typeof window === 'undefined') return [];
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error loading error vault:', e);
            return [];
        }
    }

    /**
     * Syncs error vault from Supabase DB on initialization
     */
    public static async syncFromDB(): Promise<SpeakingErrorItem[]> {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.user_metadata?.error_vault) {
                const dbErrors = user.user_metadata.error_vault as SpeakingErrorItem[];
                localStorage.setItem(STORAGE_KEY, JSON.stringify(dbErrors));
                return dbErrors;
            }
        } catch (e) {
            console.warn('Failed to sync error vault from DB:', e);
        }
        return this.getErrors();
    }

    /**
     * Saves a list of speaking errors captured during session
     */
    public static logErrors(errors: Omit<SpeakingErrorItem, 'id' | 'timestamp' | 'timesReviewed'>[]): SpeakingErrorItem[] {
        const existing = this.getErrors();
        const newItems: SpeakingErrorItem[] = errors.map(err => ({
            ...err,
            id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            timestamp: new Date().toISOString(),
            timesReviewed: 0
        }));

        const updated = [...newItems, ...existing].slice(0, 100); // Keep last 100 mistakes
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
            console.error('Error saving to error vault:', e);
        }

        // Sync to Supabase Auth user_metadata (DB)
        supabase.auth.getUser().then(({ data: { user } }) => {
            if (user) {
                supabase.auth.updateUser({
                    data: { error_vault: updated }
                }).catch(err => console.warn('Failed to sync error vault to DB:', err));
            }
        });

        return updated;
    }

    /**
     * Converts logged error items into Flashcard objects for spaced repetition
     */
    public static convertErrorsToFlashcards(language: 'en' | 'ja' = 'en', subjectId?: string): Partial<Flashcard>[] {
        const errors = this.getErrors().filter(e => e.language === language);
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
    public static getWeakItemsPromptSnippet(language: 'en' | 'ja' = 'en'): string {
        const errors = this.getErrors().filter(e => e.language === language).slice(0, 5);
        if (errors.length === 0) return '';

        const itemsStr = errors.map(e => `- User previously said "${e.verbatim}" instead of "${e.correction}" (${e.explanation})`).join('\n');
        return `\n\nRE-TESTING WEAKNESSES (CLOSED-LOOP REMEDIATION):\nThe student has previously struggled with these expressions. Naturally weave topics into the conversation to test if they can use these correctly:\n${itemsStr}\n`;
    }

    /**
     * Clears all items in Error Vault
     */
    public static clearVault(): void {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing vault:', e);
        }
    }
}
