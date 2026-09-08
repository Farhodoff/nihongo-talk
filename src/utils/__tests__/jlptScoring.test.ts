import { describe, expect, it } from 'vitest';
import {
  calculateJlptScore,
  JLPT_LEVEL_THRESHOLDS,
  SECTION_METADATA,
  RawExamQuestionInput,
} from '../jlptScoring';

describe('JLPT Official Scoring Engine (jlptScoring)', () => {
  it('has official thresholds defined for all JLPT levels N1 to N5', () => {
    expect(JLPT_LEVEL_THRESHOLDS.N1.passMark).toBe(100);
    expect(JLPT_LEVEL_THRESHOLDS.N2.passMark).toBe(90);
    expect(JLPT_LEVEL_THRESHOLDS.N3.passMark).toBe(95);
    expect(JLPT_LEVEL_THRESHOLDS.N4.passMark).toBe(90);
    expect(JLPT_LEVEL_THRESHOLDS.N5.passMark).toBe(80);

    // Section pass mark (cutoff) is 19/60 for all levels
    ['N1', 'N2', 'N3', 'N4', 'N5'].forEach((lvl) => {
      expect(JLPT_LEVEL_THRESHOLDS[lvl as keyof typeof JLPT_LEVEL_THRESHOLDS].sectionPassMark).toBe(
        19,
      );
    });

    expect(SECTION_METADATA.knowledge.defaultPassMark).toBe(19);
    expect(SECTION_METADATA.reading.defaultPassMark).toBe(19);
    expect(SECTION_METADATA.listening.defaultPassMark).toBe(19);
  });

  it('calculates a 100% perfect score correctly across all sections', () => {
    const questions: RawExamQuestionInput[] = [
      { id: 1, section: 'knowledge', correctAnswer: 0 },
      { id: 2, section: 'knowledge', correctAnswer: 1 },
      { id: 3, section: 'reading', correctAnswer: 2 },
      { id: 4, section: 'reading', correctAnswer: 0 },
      { id: 5, section: 'listening', correctAnswer: 3 },
      { id: 6, section: 'listening', correctAnswer: 1 },
    ];

    const answers = { 1: 0, 2: 1, 3: 2, 4: 0, 5: 3, 6: 1 };
    const result = calculateJlptScore('N5', questions, answers);

    expect(result.level).toBe('N5');
    expect(result.totalScore).toBe(180);
    expect(result.sections.knowledge.score).toBe(60);
    expect(result.sections.reading.score).toBe(60);
    expect(result.sections.listening.score).toBe(60);
    expect(result.passed).toBe(true);
    expect(result.statusReason).toBe('PASSED');
    expect(result.statusBadge).toBe('goukaku');
    expect(result.failedSections).toHaveLength(0);
    expect(result.accuracyPercentage).toBe(100);
  });

  it('correctly flags FAILED_SECTION_CUTOFF when overall score is high but one section is below 19', () => {
    // 10 questions in knowledge (10 correct = 60/60)
    // 10 questions in reading (10 correct = 60/60)
    // 10 questions in listening (2 correct = 12/60 < 19)
    // Total = 132/180. Pass mark for N1 is 100.
    // In raw score, 132 > 100, BUT listening is 12 < 19 -> MUST FAIL due to Sectional Cutoff!
    const questions: RawExamQuestionInput[] = [];
    const answers: Record<number, number> = {};

    let id = 1;
    // Knowledge: 10/10 correct
    for (let i = 0; i < 10; i++, id++) {
      questions.push({ id, section: 'knowledge', correctAnswer: 0 });
      answers[id] = 0;
    }
    // Reading: 10/10 correct
    for (let i = 0; i < 10; i++, id++) {
      questions.push({ id, section: 'reading', correctAnswer: 0 });
      answers[id] = 0;
    }
    // Listening: only 2/10 correct (12/60 points)
    for (let i = 0; i < 10; i++, id++) {
      questions.push({ id, section: 'listening', correctAnswer: 0 });
      answers[id] = i < 2 ? 0 : 1; // only first 2 are correct
    }

    const result = calculateJlptScore('N1', questions, answers);

    expect(result.level).toBe('N1');
    expect(result.totalScore).toBe(132); // 60 + 60 + 12
    expect(result.totalScore).toBeGreaterThanOrEqual(100); // Exceeds 100!
    expect(result.sections.listening.score).toBe(12);
    expect(result.sections.listening.passed).toBe(false);
    expect(result.passed).toBe(false); // MUST FAIL
    expect(result.statusReason).toBe('FAILED_SECTION_CUTOFF');
    expect(result.statusBadge).toBe('fugoukaku');
    expect(result.failedSections).toContain('listening');
    expect(result.weakestSection).toBe('listening');
    expect(result.statusTextUz).toContain('minimal 19 ball');
  });

  it('correctly flags FAILED_TOTAL_CUTOFF when all sections pass sectional cutoff but total score is insufficient', () => {
    // 3 sections, each gets exactly 20/60 (which is >= 19).
    // Total = 60/180.
    // For N5, pass mark is 80.
    // 60 < 80, so failed total cutoff.
    const questions: RawExamQuestionInput[] = [];
    const answers: Record<number, number> = {};

    let id = 1;
    ['knowledge', 'reading', 'listening'].forEach((sec) => {
      // 3 questions per section, 1 correct -> (1/3)*60 = 20 points
      for (let i = 0; i < 3; i++, id++) {
        questions.push({ id, section: sec as any, correctAnswer: 0 });
        answers[id] = i === 0 ? 0 : 1;
      }
    });

    const result = calculateJlptScore('N5', questions, answers);

    expect(result.totalScore).toBe(60); // 20 + 20 + 20
    expect(result.sections.knowledge.score).toBe(20);
    expect(result.sections.reading.score).toBe(20);
    expect(result.sections.listening.score).toBe(20);
    expect(result.failedSections).toHaveLength(0); // All sections passed cutoff >= 19
    expect(result.passed).toBe(false); // But overall 60 < 80
    expect(result.statusReason).toBe('FAILED_TOTAL_CUTOFF');
    expect(result.statusBadge).toBe('fugoukaku');
  });

  it('correctly flags FAILED_BOTH when both total score and sections fail cutoff', () => {
    const questions: RawExamQuestionInput[] = [
      { id: 1, section: 'knowledge', correctAnswer: 0 },
      { id: 2, section: 'reading', correctAnswer: 0 },
      { id: 3, section: 'listening', correctAnswer: 0 },
    ];
    const answers = { 1: 1, 2: 1, 3: 1 }; // All wrong -> 0 points
    const result = calculateJlptScore('N3', questions, answers);

    expect(result.totalScore).toBe(0);
    expect(result.passed).toBe(false);
    expect(result.statusReason).toBe('FAILED_BOTH');
    expect(result.failedSections).toHaveLength(3);
  });

  it('gracefully handles unknown level by defaulting to N5', () => {
    const questions: RawExamQuestionInput[] = [{ id: 1, section: 'knowledge', correctAnswer: 0 }];
    const answers = { 1: 0 };
    const result = calculateJlptScore('INVALID_LEVEL', questions, answers);

    expect(result.level).toBe('N5');
    expect(result.passMark).toBe(80);
  });
});
