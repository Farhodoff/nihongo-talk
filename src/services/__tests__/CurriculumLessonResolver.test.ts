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
      const ids = ALL_CURRICULUM_LESSONS.map((l) => l.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('3. representative Japanese N5 and N3 lessons resolve with real titles', () => {
      const n5 = CurriculumLessonResolver.resolveLesson('ja-n5-u1-l1', 'ja');
      expect(n5.route).toBe('/lesson/ja-n5-u1-l1');
      expect(n5.level).toBe('N5');
      expect(n5.isAvailable).toBe(true);
      expect(n5.title).toContain('Hiragana');

      const n3 = CurriculumLessonResolver.resolveLesson('ja-n3-u1-l1', 'ja');
      expect(n3.route).toBe('/lesson/ja-n3-u1-l1');
      expect(n3.level).toBe('N3');
      expect(n3.isAvailable).toBe(true);
    });

    it('4. provides safe fallback for unregistered IDs without crashing', () => {
      const resolved = CurriculumLessonResolver.resolveLesson('unknown-id-xyz', 'ja');
      expect(resolved.isAvailable).toBe(false);
      expect(resolved.route).toBe('/jlpt');
    });
  });
});
