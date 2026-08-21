import { describe, it, expect } from 'vitest';
import { ALL_CURRICULUM_LESSONS } from '../../data/curriculum/curriculumLessons';

describe('Phase 19 - Real Content Data Quality Audit', () => {
    it('1. Verifies all lessons meet strict production data schema requirements', () => {
        expect(ALL_CURRICULUM_LESSONS.length).toBeGreaterThanOrEqual(275);

        for (const lesson of ALL_CURRICULUM_LESSONS) {
            expect(lesson.id).toBeTruthy();
            expect(lesson.title).toBeTruthy();
            expect(lesson.description).toBeTruthy();
            expect(lesson.courseId).toBeTruthy();
            expect(lesson.unitId).toBeTruthy();
            expect(lesson.unitTitle).toBeTruthy();
            expect(['en', 'ja']).toContain(lesson.language);
            expect(lesson.estimatedDurationMinutes).toBeGreaterThan(0);
            expect(lesson.steps.length).toBeGreaterThanOrEqual(2);

            for (const step of lesson.steps) {
                expect(step.id).toBeTruthy();
                expect(step.title).toBeTruthy();
                expect(['learn', 'practice', 'test']).toContain(step.type);

                if (step.type === 'learn') {
                    expect(step.learnData).toBeDefined();
                    expect(step.learnData?.title).toBeTruthy();
                    expect(step.learnData?.explanation).toBeTruthy();
                } else if (step.type === 'practice') {
                    expect(step.practiceData).toBeDefined();
                    expect(step.practiceData?.instructions).toBeTruthy();
                    expect(step.practiceData?.exercises?.length).toBeGreaterThan(0);

                    for (const ex of step.practiceData!.exercises) {
                        expect(ex.id).toBeTruthy();
                        expect(ex.prompt).toBeTruthy();
                        const opts = ex.options || [];
                        expect(opts.length).toBeGreaterThanOrEqual(2);
                        expect(typeof ex.correctAnswer === 'number' || typeof ex.correctAnswer === 'string').toBe(true);
                        if (typeof ex.correctAnswer === 'number') {
                            expect(ex.correctAnswer).toBeGreaterThanOrEqual(0);
                            expect(ex.correctAnswer).toBeLessThan(opts.length);
                        }
                    }
                } else if (step.type === 'test') {
                    expect(step.testData).toBeDefined();
                    expect(step.testData?.instructions).toBeTruthy();
                    expect(step.testData?.questions?.length).toBeGreaterThan(0);

                    for (const q of step.testData!.questions) {
                        expect(q.id).toBeTruthy();
                        expect(q.question).toBeTruthy();
                        const opts = q.options || [];
                        expect(opts.length).toBeGreaterThanOrEqual(2);
                        expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
                        expect(q.correctAnswerIndex).toBeLessThan(opts.length);
                    }
                }
            }
        }
    });

    it('2. Verifies zero placeholders or dummy texts exist in curriculum lessons', () => {
        const forbiddenPatterns = [
            /\blorem ipsum\b/i,
            /\btodo\b/i,
            /\bplaceholder\b/i,
            /\bdummy text\b/i,
            /\bsample question\b/i
        ];
        for (const lesson of ALL_CURRICULUM_LESSONS) {
            const lessonJson = JSON.stringify(lesson);
            for (const pattern of forbiddenPatterns) {
                expect(lessonJson).not.toMatch(pattern);
            }
        }
    });
});
