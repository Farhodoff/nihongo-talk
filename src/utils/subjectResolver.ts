import { Flashcard, Subject } from '../types';

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
  'n1',
];

export const ENGLISH_SUBJECT_KEYWORDS = [
  'english',
  'ielts',
  'ingliz',
  'cefr',
  'grammar',
  'speaking',
];

const JAPANESE_TEXT_PATTERN = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;

const getSubjectSearchText = (subject: Subject): string =>
  [
    subject.name,
    subject.description,
    (subject as any).category,
    (subject as any).type,
    (subject as any).language,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

/**
 * Strictly identifies subjects that explicitly belong to a language track.
 * Bare level-like text such as "N2 matematika" is intentionally not enough;
 * JLPT or another Japanese marker must also be present.
 */
export function isSubjectForLanguage(subject: Subject, lang: 'ja' | 'en'): boolean {
  const text = getSubjectSearchText(subject);
  const explicitLanguage = String((subject as any).language || '').toLowerCase();

  if (lang === 'ja') {
    if (explicitLanguage === 'ja' || explicitLanguage === 'japanese') return true;
    return (
      JAPANESE_TEXT_PATTERN.test(text) ||
      ['japan', 'jlpt', 'yapon', 'nihongo', 'kanji', 'kaiwa', 'bunpou'].some((keyword) =>
        text.includes(keyword),
      )
    );
  }

  if (explicitLanguage === 'en' || explicitLanguage === 'english') return true;
  return ENGLISH_SUBJECT_KEYWORDS.some((keyword) => text.includes(keyword));
}

/**
 * Resolves flashcard language by deck/subject ownership first. Content-based
 * detection is only a fallback for legacy cards whose subject no longer exists.
 */
export function isFlashcardForLanguage(
  card: Flashcard,
  subjects: Subject[],
  lang: 'ja' | 'en',
): boolean {
  const subject = subjects.find((item) => item.id === card.subjectId);
  if (subject) {
    return isSubjectForLanguage(subject, lang);
  }

  const content = `${card.front || ''} ${card.back || ''} ${card.phonetic || ''}`;
  const containsJapanese = JAPANESE_TEXT_PATTERN.test(content);
  return lang === 'ja' ? containsJapanese : !containsJapanese;
}

/**
 * Searches user's subject list to find the most appropriate subject matching the language track.
 */
export function findLanguageSubject(
  subjects: Subject[],
  lang: 'ja' | 'en' = 'ja',
): Subject | undefined {
  if (!subjects || subjects.length === 0) return undefined;
  const keywords = lang === 'ja' ? JAPANESE_SUBJECT_KEYWORDS : ENGLISH_SUBJECT_KEYWORDS;

  return subjects.find((s) => {
    const name = (s.name || '').toLowerCase();
    const category = ((s as any).category || '').toLowerCase();
    const type = ((s as any).type || '').toLowerCase();
    return keywords.some((k) => name.includes(k) || category.includes(k) || type.includes(k));
  });
}

/**
 * Finds matching subject by language or creates a dedicated default subject if none exists.
 */
export async function getOrEnsureLanguageSubject(
  subjects: Subject[],
  addSubject?: (subjectData: Partial<Subject>) => Promise<Subject | null>,
  lang: 'ja' | 'en' = 'ja',
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
        name: isJa ? '🎌 Yapon tili (JLPT)' : '🇬🇧 Ingliz tili (IELTS)',
        color: isJa ? '#f43f5e' : '#6366f1',
        icon: isJa ? 'Sparkles' : 'BookOpen',
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

/**
 * Finds or creates a dedicated flashcard subject / deck exclusively for Speaking Coach vocabulary.
 */
export async function getOrEnsureSpeakingDeck(
  subjects: Subject[],
  addSubject?: (subjectData: Partial<Subject>) => Promise<Subject | null>,
  lang: 'ja' | 'en' = 'ja',
): Promise<string> {
  const isJa = lang === 'ja';
  const targetName = isJa ? "🎙️ AI Speaking Lug'atlari" : '🎙️ AI Speaking Vocabulary';

  // 1. Check for an existing subject dedicated specifically to Speaking Coach
  const found =
    (subjects || []).find((s) => {
      const name = (s.name || '').toLowerCase();
      const isSpeaking =
        name.includes('speaking') ||
        name.includes('kaiwa') ||
        name.includes('muloqot') ||
        name.includes('🎙️');
      if (!isSpeaking) return false;
      return isJa
        ? name.includes('yapon') ||
            name.includes('lug') ||
            name.includes('ja') ||
            name.includes('🎙️')
        : name.includes('ingliz') ||
            name.includes('vocab') ||
            name.includes('en') ||
            name.includes('🎙️');
    }) || (subjects || []).find((s) => s.name.trim().toLowerCase() === targetName.toLowerCase());

  if (found?.id) {
    return found.id;
  }

  // 2. Auto-create dedicated speaking subject if none exists
  if (addSubject) {
    try {
      const created = await addSubject({
        name: targetName,
        color: '#f59e0b',
        icon: 'Sparkles',
        isArchived: false,
        category: isJa ? 'Speaking (Yapon tili)' : 'Speaking (English)',
        description: isJa
          ? "AI Speaking Coach bilan jonli suhbatlarda tavsiya etilgan yangi so'z va iboralar fleshkartalari"
          : 'Vocabulary and expressions recommended during AI Speaking Coach sessions',
      } as any);
      if (created?.id) {
        return created.id;
      }
    } catch (e) {
      console.warn('[getOrEnsureSpeakingDeck] Failed to auto-create speaking deck:', e);
    }
  }

  // 3. Fallback to generic language subject
  return getOrEnsureLanguageSubject(subjects, addSubject, lang);
}
