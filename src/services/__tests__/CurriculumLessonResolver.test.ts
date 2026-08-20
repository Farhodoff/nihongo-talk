import { describe, it, expect } from 'vitest';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';

describe('CurriculumLessonResolver Unit Tests', () => {
    it('1. should resolve en-a1-u1-l1 to true interactive LessonPlayer', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-a1-u1-l1', 'en');
        expect(resolved.sourceType).toBe('lesson_player');
        expect(resolved.route).toBe('/lesson/en-a1-u1-l1');
        expect(resolved.language).toBe('en');
        expect(resolved.level).toBe('A1');
        expect(resolved.isAvailable).toBe(true);
    });

    it('2. should resolve en-a1-u1-l2 to true Vocabulary module', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-a1-u1-l2', 'en');
        expect(resolved.sourceType).toBe('vocabulary');
        expect(resolved.route).toBe('/vocabulary');
        expect(resolved.level).toBe('A1');
        expect(resolved.isAvailable).toBe(true);
    });

    it('3. should resolve en-a2-u1-l1 to true A2 Murphy Past Simple grammar', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-a2-u1-l1', 'en');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toContain('murphy_u05_past_simple');
        expect(resolved.level).toBe('A2');
        expect(resolved.isAvailable).toBe(true);
    });

    it('4. should resolve en-b1-u1-l1 to true B1 Future modals grammar', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-b1-u1-l1', 'en');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toContain('murphy_u18');
        expect(resolved.level).toBe('B1');
        expect(resolved.isAvailable).toBe(true);
    });

    it('5. should resolve en-b2-u1-l1 to true B2 LessonPlayer module', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-b2-u1-l1', 'en');
        expect(resolved.sourceType).toBe('lesson_player');
        expect(resolved.route).toBe('/lesson/en-b2-u1-l1');
        expect(resolved.level).toBe('B2');
        expect(resolved.isAvailable).toBe(true);
    });

    it('6. should resolve en-b2-u1-l2 to true AWL Vocabulary module', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-b2-u1-l2', 'en');
        expect(resolved.sourceType).toBe('vocabulary');
        expect(resolved.route).toBe('/vocabulary');
        expect(resolved.level).toBe('B2');
        expect(resolved.isAvailable).toBe(true);
    });

    it('7. should resolve en-b2-u2-l1 to true IELTS Writing module', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-b2-u2-l1', 'en');
        expect(resolved.sourceType).toBe('writing');
        expect(resolved.route).toBe('/ielts/writing');
        expect(resolved.isAvailable).toBe(true);
    });

    it('8. should resolve en-b2-u2-l2 to true AI Speaking Coach', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-b2-u2-l2', 'en');
        expect(resolved.sourceType).toBe('speaking');
        expect(resolved.route).toBe('/speaking-coach?lang=en');
        expect(resolved.isAvailable).toBe(true);
    });

    it('9. should resolve en-c1-u1-l1 to true C1 Inversion grammar', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-c1-u1-l1', 'en');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toContain('murphy_u33_inversion_structures');
        expect(resolved.level).toBe('C1');
    });

    it('10. should resolve en-c2-u1-l1 to true C2 Native Speaking Coach', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('en-c2-u1-l1', 'en');
        expect(resolved.sourceType).toBe('speaking');
        expect(resolved.route).toBe('/speaking-coach?lang=en');
    });

    it('11. should resolve ja-n5-u1-l1 to true JLPT N5 Grammar Quiz', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n5-u1-l1', 'ja');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toBe('/jlpt/grammar-quiz?level=N5');
        expect(resolved.language).toBe('ja');
        expect(resolved.level).toBe('N5');
        expect(resolved.isAvailable).toBe(true);
    });

    it('12. should resolve ja-n5-u1-l2 to true JLPT N5 Kanji practice', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n5-u1-l2', 'ja');
        expect(resolved.sourceType).toBe('jlpt');
        expect(resolved.route).toBe('/jlpt?tab=kanji&level=N5');
        expect(resolved.language).toBe('ja');
        expect(resolved.isAvailable).toBe(true);
    });

    it('13. should resolve ja-n4-u1-l1 to true JLPT N4 Grammar Quiz', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n4-u1-l1', 'ja');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toBe('/jlpt/grammar-quiz?level=N4');
        expect(resolved.level).toBe('N4');
    });

    it('14. should resolve ja-n3-u1-l1 to true JLPT N3 LessonPlayer', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n3-u1-l1', 'ja');
        expect(resolved.sourceType).toBe('lesson_player');
        expect(resolved.route).toBe('/lesson/ja-n3-u1-l1');
        expect(resolved.level).toBe('N3');
        expect(resolved.isAvailable).toBe(true);
    });

    it('15. should resolve ja-n3-u1-l2 to true JLPT N3 Kanji hub', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n3-u1-l2', 'ja');
        expect(resolved.sourceType).toBe('jlpt');
        expect(resolved.route).toBe('/jlpt?tab=kanji&level=N3');
    });

    it('16. should resolve ja-n3-u2-l1 to true JLPT N3 Dokkai reading', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n3-u2-l1', 'ja');
        expect(resolved.sourceType).toBe('reading');
        expect(resolved.route).toBe('/jlpt/reading');
    });

    it('17. should resolve ja-n3-u2-l2 to true JLPT N3 Chokkai listening', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n3-u2-l2', 'ja');
        expect(resolved.sourceType).toBe('listening');
        expect(resolved.route).toBe('/jlpt/listening');
    });

    it('18. should resolve ja-n2-u1-l1 to true JLPT N2 Grammar Quiz', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n2-u1-l1', 'ja');
        expect(resolved.sourceType).toBe('grammar');
        expect(resolved.route).toBe('/jlpt/grammar-quiz?level=N2');
        expect(resolved.level).toBe('N2');
    });

    it('19. should resolve ja-n1-u1-l1 to true JLPT N1 Reading hub', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('ja-n1-u1-l1', 'ja');
        expect(resolved.sourceType).toBe('reading');
        expect(resolved.route).toBe('/jlpt/reading');
        expect(resolved.level).toBe('N1');
    });

    it('20. should provide safe fallback for unregistered IDs without crashing', () => {
        const resolved = CurriculumLessonResolver.resolveLesson('unknown-id-xyz', 'en');
        expect(resolved.isAvailable).toBe(false);
        expect(resolved.route).toBe('/ielts');
    });
});
