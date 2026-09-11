import { describe, it, expect } from 'vitest';
import { MINNA_N4_QUIZ_DATABASE } from '../../data/curriculum/minnaN4QuizDatabase';
import { MINNA_N4_LESSONS } from '../../data/curriculum/minnaN4Lessons';

describe('Minna no Nihongo N4 Quiz Database Quality & Integrity', () => {
  const lessonKeys = Object.keys(MINNA_N4_QUIZ_DATABASE).map(Number);

  it('contains exactly 25 lessons (Lessons 26 to 50)', () => {
    expect(lessonKeys.length).toBe(25);
    for (let l = 26; l <= 50; l++) {
      expect(MINNA_N4_QUIZ_DATABASE[l]).toBeDefined();
    }
  });

  it('each lesson has exactly 10 practice exercises and 10 test questions (500 total)', () => {
    let totalPractice = 0;
    let totalTest = 0;

    for (let l = 26; l <= 50; l++) {
      const lessonQuiz = MINNA_N4_QUIZ_DATABASE[l];
      expect(lessonQuiz.practice).toHaveLength(10);
      expect(lessonQuiz.test).toHaveLength(10);
      totalPractice += lessonQuiz.practice.length;
      totalTest += lessonQuiz.test.length;
    }

    expect(totalPractice).toBe(250);
    expect(totalTest).toBe(250);
  });

  it('all 500 questions have valid fields and unique IDs', () => {
    const allIds = new Set<string>();

    for (let l = 26; l <= 50; l++) {
      const lessonQuiz = MINNA_N4_QUIZ_DATABASE[l];

      // Practice exercises
      lessonQuiz.practice.forEach((p, idx) => {
        expect(p.id).toBe(`ja-minna-l${l}-ex${idx + 1}`);
        expect(allIds.has(p.id)).toBe(false);
        allIds.add(p.id);

        expect(p.type).toBe('multiple-choice');
        expect(p.prompt.trim().length).toBeGreaterThan(0);
        expect(p.options).toHaveLength(4);

        // Check options are unique
        const uniqueOpts = new Set(p.options);
        expect(uniqueOpts.size).toBe(4);

        // Check correctAnswer is valid index
        expect(Number.isInteger(p.correctAnswer)).toBe(true);
        expect(p.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(p.correctAnswer).toBeLessThanOrEqual(3);
        expect(p.explanation?.trim().length).toBeGreaterThan(0);
      });

      // Test questions
      lessonQuiz.test.forEach((t, idx) => {
        expect(t.id).toBe(`ja-minna-l${l}-q${idx + 1}`);
        expect(allIds.has(t.id)).toBe(false);
        allIds.add(t.id);

        expect(t.question.trim().length).toBeGreaterThan(0);
        expect(t.options).toHaveLength(4);

        // Check options are unique
        const uniqueOpts = new Set(t.options);
        expect(uniqueOpts.size).toBe(4);

        // Check correctAnswerIndex is valid index
        expect(Number.isInteger(t.correctAnswerIndex)).toBe(true);
        expect(t.correctAnswerIndex).toBeGreaterThanOrEqual(0);
        expect(t.correctAnswerIndex).toBeLessThanOrEqual(3);
        expect(t.explanation.trim().length).toBeGreaterThan(0);
      });
    }

    expect(allIds.size).toBe(500);
  });

  it('test questions do not leak translations or answers in options (spoiler-free)', () => {
    for (let l = 26; l <= 50; l++) {
      const lessonQuiz = MINNA_N4_QUIZ_DATABASE[l];
      lessonQuiz.test.forEach((t) => {
        t.options.forEach((opt) => {
          // Should not mix Japanese kanji/kana with parenthetical Latin translations like "落とします (tushirmoq)"
          const hasJapanese = /[\u3040-\u30ff\u4e00-\u9faf]/.test(opt);
          const hasLatinParentheses = /\([a-zA-Z\s'-]+\)/.test(opt);
          expect(hasJapanese && hasLatinParentheses).toBe(false);
        });
      });
    }
  });

  it('maintains a balanced answer distribution across 0, 1, 2, 3 (~25% each)', () => {
    const practiceDistribution = [0, 0, 0, 0];
    const testDistribution = [0, 0, 0, 0];

    for (let l = 26; l <= 50; l++) {
      const lessonQuiz = MINNA_N4_QUIZ_DATABASE[l];
      lessonQuiz.practice.forEach((p) => {
        practiceDistribution[p.correctAnswer as number]++;
      });
      lessonQuiz.test.forEach((t) => {
        testDistribution[t.correctAnswerIndex]++;
      });
    }

    // Each position in practice should be between 20% (50) and 30% (75)
    practiceDistribution.forEach((count) => {
      expect(count).toBeGreaterThanOrEqual(50);
      expect(count).toBeLessThanOrEqual(75);
    });

    // Each position in test should be between 20% (50) and 30% (75)
    testDistribution.forEach((count) => {
      expect(count).toBeGreaterThanOrEqual(50);
      expect(count).toBeLessThanOrEqual(75);
    });
  });

  it('integrates seamlessly with MINNA_N4_LESSONS', () => {
    expect(MINNA_N4_LESSONS).toHaveLength(25);

    MINNA_N4_LESSONS.forEach((lesson) => {
      const num = lesson.lessonNumber;
      const quizSet = MINNA_N4_QUIZ_DATABASE[num];
      expect(quizSet).toBeDefined();

      const practiceStep = lesson.steps.find((s) => s.type === 'practice');
      expect(practiceStep).toBeDefined();
      expect(practiceStep?.practiceData?.exercises).toHaveLength(10);
      expect(practiceStep?.practiceData?.exercises[0].id).toBe(`ja-minna-l${num}-ex1`);

      const testStep = lesson.steps.find((s) => s.type === 'test');
      expect(testStep).toBeDefined();
      expect(testStep?.testData?.questions).toHaveLength(10);
      expect(testStep?.testData?.questions[0].id).toBe(`ja-minna-l${num}-q1`);
    });
  });
});
