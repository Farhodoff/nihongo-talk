import { describe, it, expect } from 'vitest';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';
import { ALL_CURRICULUM_LESSONS } from '../../data/curriculum/curriculumLessons';

describe('CurriculumLessonResolver Unit Tests', () => {
    describe('Real curriculum resolution (Phase 19)', () => {
        it('1. resolves every real curriculum lesson to the lesson player', () => {
            for (const lesson of ALL_CURRICULUM_LESSONS) {
                const resolved = CurriculumLessonResolver.resolveLesson(lesson.id, lesson.language);
                expect(resolved.sourceType).toBe('lesson_player');
                expect(resolved.route).toBe(`/lesson/${lesson.id}`);
                expect(resolved.language).toBe(lesson.language);
                expect(resolved.level).toBe(lesson.level);
                expect(resolved.isAvailable).toBe(true);
                expect(resolved.title).toBeTruthy();
            }
        });

        it('2. no duplicate lesson IDs in the real registry', () => {
            const ids = ALL_CURRICULUM_LESSONS.map(l => l.id);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('3. representative English lessons resolve with real titles', () => {
            const a1 = CurriculumLessonResolver.resolveLesson('en-a1-u1-l1', 'en');
            expect(a1.route).toBe('/lesson/en-a1-u1-l1');
            expect(a1.level).toBe('A1');
            expect(a1.isAvailable).toBe(true);

            const b1 = CurriculumLessonResolver.resolveLesson('en-b1-u1-l2', 'en');
            expect(b1.route).toBe('/lesson/en-b1-u1-l2');
            expect(b1.title).toBe('Present Perfect vs Past Simple');
        });

        it('4. representative Japanese lessons resolve with real titles', () => {
            const n5 = CurriculumLessonResolver.resolveLesson('ja-n5-u1-l1', 'ja');
            expect(n5.route).toBe('/lesson/ja-n5-u1-l1');
            expect(n5.level).toBe('N5');
            expect(n5.isAvailable).toBe(true);
            expect(n5.title).toContain('Hiragana');
        });

        it('5. language isolation: English lesson keeps English, Japanese keeps Japanese', () => {
            const en = CurriculumLessonResolver.resolveLesson('en-a1-u1-l1', 'en');
            const ja = CurriculumLessonResolver.resolveLesson('ja-n5-u1-l1', 'ja');
            expect(en.language).toBe('en');
            expect(ja.language).toBe('ja');
        });

        it('6. provides safe fallback for unregistered IDs without crashing', () => {
            const resolved = CurriculumLessonResolver.resolveLesson('unknown-id-xyz', 'en');
            expect(resolved.isAvailable).toBe(false);
            expect(resolved.route).toBe('/ielts');
        });
    });
});
