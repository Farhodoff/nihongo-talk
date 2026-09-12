import { Lesson } from '../../types/lesson';
import { MINNA_N5_LESSONS } from './minnaN5Lessons';
import { MINNA_N4_LESSONS } from './minnaN4Lessons';
import { JAPANESE_N5_LESSONS } from './japaneseN5';
import { JAPANESE_N4_LESSONS } from './japaneseN4';
import { JAPANESE_N3_LESSONS } from './japaneseN3';
import { JAPANESE_N2_LESSONS } from './japaneseN2';
import { JAPANESE_N1_LESSONS } from './japaneseN1';

export const ALL_ENGLISH_LESSONS: Lesson[] = [];

/**
 * Canonical Japanese curriculum:
 * - N5: 25 comprehensive Minna no Nihongo lessons (ja-minna-l1 to ja-minna-l25)
 * - N4: 25 comprehensive Minna no Nihongo lessons (ja-minna-l26 to ja-minna-l50)
 * - N3: 30 structured JLPT N3 lessons (ja-n3-u1-l1 to ja-n3-u6-l5)
 * - N2: 30 structured JLPT N2 lessons (ja-n2-u1-l1 to ja-n2-u6-l5)
 * - N1: 30 structured JLPT N1 lessons (ja-n1-u1-l1 to ja-n1-u6-l5)
 * Total: 140 canonical high-quality lessons (zero duplicate tracks).
 */
export const ALL_JAPANESE_LESSONS: Lesson[] = [
  ...MINNA_N5_LESSONS,
  ...MINNA_N4_LESSONS,
  ...JAPANESE_N3_LESSONS,
  ...JAPANESE_N2_LESSONS,
  ...JAPANESE_N1_LESSONS,
];

export const ALL_CURRICULUM_LESSONS: Lesson[] = [...ALL_JAPANESE_LESSONS];

/**
 * Registry by lesson ID. Includes legacy dummy IDs (ja-n5-u*, ja-n4-u*)
 * for backward compatibility with existing saved user progress and direct links.
 */
export const CURRICULUM_LESSONS_BY_ID: Map<string, Lesson> = new Map([
  ...JAPANESE_N5_LESSONS.map((l) => [l.id, l] as [string, Lesson]),
  ...JAPANESE_N4_LESSONS.map((l) => [l.id, l] as [string, Lesson]),
  ...ALL_CURRICULUM_LESSONS.map((l) => [l.id, l] as [string, Lesson]),
]);

export function getCurriculumLessonById(id: string): Lesson | undefined {
  return CURRICULUM_LESSONS_BY_ID.get(id);
}

export function getCurriculumLessonsByLanguage(language: 'en' | 'ja'): Lesson[] {
  return language === 'en' ? ALL_ENGLISH_LESSONS : ALL_JAPANESE_LESSONS;
}

export function getCurriculumLessonsByLevel(language: 'en' | 'ja', level: string): Lesson[] {
  const list = getCurriculumLessonsByLanguage(language);
  return list.filter((lesson) => lesson.level.toUpperCase() === level.toUpperCase());
}
