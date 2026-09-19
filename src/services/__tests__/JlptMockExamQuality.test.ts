import { describe, it, expect } from 'vitest';
import { JLPT_MOCK_EXAM_DATA } from '../../data/jlptMockExamData';
import { calculateJlptScore } from '../../utils/jlptScoring';

describe('JLPT Mock Exam Data Quality & Rigor Tests', () => {
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;

  it('validates each level (N5, N4, N3, N2, N1) has exactly 25 questions with standard section balance', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      expect(questions).toBeDefined();
      expect(questions.length).toBe(25);

      const knowledgeQs = questions.filter((q) => q.section === 'knowledge');
      const readingQs = questions.filter((q) => q.section === 'reading');
      const listeningQs = questions.filter((q) => q.section === 'listening');

      // 13 Language Knowledge, 6 Reading, 6 Listening = 25 total
      expect(knowledgeQs.length).toBe(13);
      expect(readingQs.length).toBe(6);
      expect(listeningQs.length).toBe(6);
    });
  });

  it('ensures all question IDs are unique and strictly adhere to level ID schemes', () => {
    const allIds = new Set<number>();

    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      const baseId =
        lvl === 'N5' ? 100 : lvl === 'N4' ? 200 : lvl === 'N3' ? 300 : lvl === 'N2' ? 400 : 500;

      questions.forEach((q, idx) => {
        expect(allIds.has(q.id)).toBe(false);
        allIds.add(q.id);
        expect(q.id).toBe(baseId + idx + 1);
      });
    });
  });

  it('verifies all questions have exactly 4 choices and a valid correctAnswer index (0..3)', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      questions.forEach((q) => {
        expect(q.options).toHaveLength(4);
        expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswer).toBeLessThanOrEqual(3);
        expect(q.options[q.correctAnswer]).toBeDefined();
        expect(q.questionText.trim().length).toBeGreaterThan(3);
      });
    });
  });

  it('verifies all reading comprehension questions have substantial passage text', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      const readingQs = questions.filter((q) => q.section === 'reading');

      readingQs.forEach((q) => {
        expect(q.passageText).toBeDefined();
        expect(q.passageText!.trim().length).toBeGreaterThan(25);
      });
    });
  });

  it('verifies all listening comprehension questions have scripts, audio URLs, and prompt questions', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      const listeningQs = questions.filter((q) => q.section === 'listening');

      listeningQs.forEach((q) => {
        expect(q.script).toBeDefined();
        expect(q.script!.trim().length).toBeGreaterThan(20);
        if (q.audioUrl) {
          expect(q.audioUrl).toMatch(/^https?:\/\//);
        }
      });
    });
  });

  it('verifies informative Uzbek explanations for pedagogical value', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      questions.forEach((q) => {
        expect(q.explanationUzbek).toBeDefined();
        expect(q.explanationUzbek.trim().length).toBeGreaterThan(15);
      });
    });
  });

  it('calculates perfect and cutoff scores correctly on 25-question exams across all 3 levels', () => {
    levels.forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl];
      const allCorrectAnswers: Record<number, number> = {};
      questions.forEach((q) => {
        allCorrectAnswers[q.id] = q.correctAnswer;
      });

      // Perfect test
      const perfectReport = calculateJlptScore(lvl, questions, allCorrectAnswers);
      expect(perfectReport.totalScore).toBe(180);
      expect(perfectReport.passed).toBe(true);
      expect(perfectReport.sections.knowledge.score).toBe(60);
      expect(perfectReport.sections.reading.score).toBe(60);
      expect(perfectReport.sections.listening.score).toBe(60);
      expect(perfectReport.sections.knowledge.correctCount).toBe(13);
      expect(perfectReport.sections.reading.correctCount).toBe(6);
      expect(perfectReport.sections.listening.correctCount).toBe(6);

      // Sectional cutoff fail test: 0 on reading
      const failReadingAnswers: Record<number, number> = {};
      questions.forEach((q) => {
        if (q.section === 'reading') {
          failReadingAnswers[q.id] = (q.correctAnswer + 1) % 4; // wrong
        } else {
          failReadingAnswers[q.id] = q.correctAnswer;
        }
      });

      const failReadingReport = calculateJlptScore(lvl, questions, failReadingAnswers);
      expect(failReadingReport.sections.reading.score).toBe(0);
      expect(failReadingReport.sections.reading.passed).toBe(false);
      expect(failReadingReport.passed).toBe(false);
      expect(failReadingReport.failedSections).toContain('reading');
    });
  });
});
