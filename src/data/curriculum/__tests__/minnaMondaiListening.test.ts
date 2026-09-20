import { describe, it, expect } from 'vitest';
import { MINNA_MONDAI_LISTENING_DATA } from '../minnaMondaiListeningData';
import { MINNA_N5_LESSONS } from '../minnaN5Lessons';
import { MINNA_N5_QUIZ_DATABASE } from '../minnaN5QuizDatabase';

describe('Minna no Nihongo 1-25 Mondai Listening Dataset', () => {
  it('contains Mondai listening sets for all 25 lessons', () => {
    for (let l = 1; l <= 25; l++) {
      const lessonMondai = MINNA_MONDAI_LISTENING_DATA[l];
      expect(lessonMondai, `Lesson ${l} missing in MINNA_MONDAI_LISTENING_DATA`).toBeDefined();
      expect(lessonMondai.lessonNumber).toBe(l);
      expect(lessonMondai.questions.length).toBeGreaterThan(0);
    }
  });

  it('verifies all questions have valid audio tracks, options, answers, and explanations', () => {
    for (let l = 1; l <= 25; l++) {
      const { questions } = MINNA_MONDAI_LISTENING_DATA[l];
      questions.forEach((q, idx) => {
        expect(q.id, `Lesson ${l} question ${idx} has no id`).toBeTruthy();
        expect(q.question, `Lesson ${l} question ${idx} has no prompt`).toBeTruthy();
        expect(q.audioUrl, `Lesson ${l} question ${idx} missing audioUrl`).toBeTruthy();
        expect(q.audioUrl?.startsWith('/audio/minna/minna_shokyu_1_')).toBe(true);
        expect(q.audioUrl?.endsWith('.mp3')).toBe(true);
        expect(
          q.options.length,
          `Lesson ${l} question ${idx} has < 2 options`,
        ).toBeGreaterThanOrEqual(2);
        expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswerIndex).toBeLessThan(q.options.length);
        expect(q.explanation, `Lesson ${l} question ${idx} missing explanation`).toBeTruthy();
      });
    }
  });

  it('confirms every lesson in MINNA_N5_LESSONS has Step 4 for Mondai CD Audio', () => {
    expect(MINNA_N5_LESSONS.length).toBe(25);
    MINNA_N5_LESSONS.forEach((lesson, index) => {
      const lessonNumber = index + 1;
      expect(lesson.steps.length).toBe(4);
      const step4 = lesson.steps[3];
      expect(step4.id).toBe(`ja-minna-l${lessonNumber}-s4`);
      expect(step4.type).toBe('test');
      expect(step4.title).toContain('Mondai Tinglash Testi');
      expect(step4.testData?.questions.length).toBeGreaterThan(0);
      expect(step4.testData?.questions[0].audioUrl).toBeDefined();
    });
  });

  it('confirms MINNA_N5_QUIZ_DATABASE contains mondaiListening for all 25 lessons', () => {
    for (let l = 1; l <= 25; l++) {
      const quizSet = MINNA_N5_QUIZ_DATABASE[l];
      expect(quizSet, `Quiz set for lesson ${l} not found`).toBeDefined();
      expect(quizSet.mondaiListening).toBeDefined();
      expect(quizSet.mondaiListening?.length).toBeGreaterThan(0);
    }
  });
});
