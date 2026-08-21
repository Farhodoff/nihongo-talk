import { Lesson } from '../../types/lesson';
import { ENGLISH_A1_LESSONS } from './englishA1';
import { ENGLISH_A2_LESSONS } from './englishA2';
import { ENGLISH_B1_LESSONS } from './englishB1';
import { ENGLISH_B2_LESSONS } from './englishB2';
import { ENGLISH_C1_LESSONS } from './englishC1';
import { ENGLISH_C2_LESSONS } from './englishC2';
import { JAPANESE_N5_LESSONS } from './japaneseN5';
import { JAPANESE_N4_LESSONS } from './japaneseN4';
import { JAPANESE_N3_LESSONS } from './japaneseN3';
import { JAPANESE_N2_LESSONS } from './japaneseN2';
import { JAPANESE_N1_LESSONS } from './japaneseN1';

export const ALL_ENGLISH_LESSONS: Lesson[] = [
    ...ENGLISH_A1_LESSONS,
    ...ENGLISH_A2_LESSONS,
    ...ENGLISH_B1_LESSONS,
    ...ENGLISH_B2_LESSONS,
    ...ENGLISH_C1_LESSONS,
    ...ENGLISH_C2_LESSONS
];

export const ALL_JAPANESE_LESSONS: Lesson[] = [
    ...JAPANESE_N5_LESSONS,
    ...JAPANESE_N4_LESSONS,
    ...JAPANESE_N3_LESSONS,
    ...JAPANESE_N2_LESSONS,
    ...JAPANESE_N1_LESSONS
];

export const ALL_CURRICULUM_LESSONS: Lesson[] = [
    ...ALL_ENGLISH_LESSONS,
    ...ALL_JAPANESE_LESSONS
];

export const CURRICULUM_LESSONS_BY_ID: Map<string, Lesson> = new Map(
    ALL_CURRICULUM_LESSONS.map(lesson => [lesson.id, lesson])
);

export function getCurriculumLessonById(id: string): Lesson | undefined {
    return CURRICULUM_LESSONS_BY_ID.get(id);
}

export function getCurriculumLessonsByLanguage(language: 'en' | 'ja'): Lesson[] {
    return language === 'en' ? ALL_ENGLISH_LESSONS : ALL_JAPANESE_LESSONS;
}

export function getCurriculumLessonsByLevel(language: 'en' | 'ja', level: string): Lesson[] {
    const list = getCurriculumLessonsByLanguage(language);
    return list.filter(lesson => lesson.level.toUpperCase() === level.toUpperCase());
}
