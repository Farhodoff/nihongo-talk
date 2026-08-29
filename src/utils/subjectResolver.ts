import { Subject } from '../types';

export const JAPANESE_SUBJECT_KEYWORDS = [
    'japan',
    'jlpt',
    'yapon',
    'nihongo',
    'kanji',
    'kaiwa',
    'bunpou',
    'n5',
    'n4',
    'n3',
    'n2',
    'n1'
];

export const ENGLISH_SUBJECT_KEYWORDS = [
    'english',
    'ielts',
    'ingliz',
    'cefr',
    'grammar',
    'speaking'
];

/**
 * Searches user's subject list to find the most appropriate subject matching the language track.
 */
export function findLanguageSubject(subjects: Subject[], lang: 'ja' | 'en' = 'ja'): Subject | undefined {
    if (!subjects || subjects.length === 0) return undefined;
    const keywords = lang === 'ja' ? JAPANESE_SUBJECT_KEYWORDS : ENGLISH_SUBJECT_KEYWORDS;

    return subjects.find(s => {
        const name = (s.name || '').toLowerCase();
        const category = ((s as any).category || '').toLowerCase();
        const type = ((s as any).type || '').toLowerCase();
        return keywords.some(k => name.includes(k) || category.includes(k) || type.includes(k));
    });
}

/**
 * Finds matching subject by language or creates a dedicated default subject if none exists.
 */
export async function getOrEnsureLanguageSubject(
    subjects: Subject[],
    addSubject?: (subjectData: Partial<Subject>) => Promise<Subject | null>,
    lang: 'ja' | 'en' = 'ja'
): Promise<string> {
    // 1. Try finding existing subject matching the language track
    const found = findLanguageSubject(subjects, lang);
    if (found?.id) {
        return found.id;
    }

    // 2. If not found and addSubject is provided, auto-create a dedicated subject
    if (addSubject) {
        try {
            const isJa = lang === 'ja';
            const created = await addSubject({
                name: isJa ? "🎌 Yapon tili (JLPT)" : "🇬🇧 Ingliz tili (IELTS)",
                color: isJa ? "#f43f5e" : "#6366f1",
                icon: isJa ? "Sparkles" : "BookOpen",
                isArchived: false,
            });
            if (created?.id) {
                return created.id;
            }
        } catch (e) {
            console.warn('[getOrEnsureLanguageSubject] Failed to auto-create subject:', e);
        }
    }

    // 3. Fallback: if subjects exist, use first or empty
    return subjects?.[0]?.id || '';
}
