import { describe, it, expect } from 'vitest';
import { JLPT_READING_PASSAGES } from '../jlptReadingData';

describe('JLPT Reading Data (Dokkai) Integrity Tests', () => {
  it('contains exactly 58 unique passages across N5 through N1', () => {
    expect(JLPT_READING_PASSAGES.length).toBe(58);
    const ids = JLPT_READING_PASSAGES.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(58);
  });

  it('has expected distribution across all levels (N5:10, N4:12, N3:12, N2:12, N1:12)', () => {
    const counts: Record<string, number> = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
    for (const p of JLPT_READING_PASSAGES) {
      counts[p.level] = (counts[p.level] || 0) + 1;
    }

    expect(counts['N5']).toBe(10);
    expect(counts['N4']).toBe(12);
    expect(counts['N3']).toBe(12);
    expect(counts['N2']).toBe(12);
    expect(counts['N1']).toBe(12);
  });

  it('ensures every passage and its questions conform to schema requirements', () => {
    for (const p of JLPT_READING_PASSAGES) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(['short', 'medium', 'long', 'information_retrieval']).toContain(p.passageType);
      expect(p.japaneseContent.trim().length).toBeGreaterThan(20);
      expect(p.uzbekTranslation.trim().length).toBeGreaterThan(15);
      expect(p.recommendedTimeMinutes).toBeGreaterThanOrEqual(2);
      expect(p.questions.length).toBeGreaterThanOrEqual(1);

      for (const q of p.questions) {
        expect(q.id).toBeTruthy();
        expect(q.questionText.trim().length).toBeGreaterThan(5);
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
        expect(q.explanation.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it('verifies newly added authentic Shin Kanzen Dokkai passages exist and are well-formed', () => {
    const targetIds = [
      'n4_read_11',
      'n4_read_12',
      'n3_read_11',
      'n3_read_12',
      'n2_read_11',
      'n2_read_12',
      'n1_read_11',
      'n1_read_12',
    ];

    for (const tid of targetIds) {
      const passage = JLPT_READING_PASSAGES.find((p) => p.id === tid);
      expect(passage).toBeDefined();
      expect(passage?.japaneseContent).toContain('['); // contains Furigana notation
      expect(passage?.questions.length).toBeGreaterThanOrEqual(1);
    }
  });
});
