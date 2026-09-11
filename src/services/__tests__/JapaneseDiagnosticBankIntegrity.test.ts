import { describe, it, expect } from 'vitest';
import { JAPANESE_DIAGNOSTIC_BANK } from '../../data/japaneseDiagnosticBank';
import { DiagnosticService } from '../DiagnosticService';
import { getLevelPedagogicalDirectives } from '../PersonalLearningPlanEngine';

describe('Japanese Diagnostic Bank (65 Questions Integrity)', () => {
  it('should contain exactly 65 questions in the static bank', () => {
    expect(JAPANESE_DIAGNOSTIC_BANK).toHaveLength(65);
  });

  it('should distribute exactly 13 questions per JLPT level (N5 to N1)', () => {
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
    levels.forEach((lvl) => {
      const count = JAPANESE_DIAGNOSTIC_BANK.filter((q) => q.level === lvl).length;
      expect(count, `Expected 13 questions for level ${lvl}`).toBe(13);
    });
  });

  it('should distribute questions across all 5 skills per level (Kanji: 3, Grammar: 3, Vocab: 3, Reading: 2, Listening: 2)', () => {
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
    levels.forEach((lvl) => {
      const levelQuestions = JAPANESE_DIAGNOSTIC_BANK.filter((q) => q.level === lvl);

      const kanji = levelQuestions.filter((q) => q.skill === 'kanji').length;
      const grammar = levelQuestions.filter((q) => q.skill === 'grammar').length;
      const vocab = levelQuestions.filter((q) => q.skill === 'vocabulary').length;
      const reading = levelQuestions.filter((q) => q.skill === 'reading').length;
      const listening = levelQuestions.filter((q) => q.skill === 'listening').length;

      expect(kanji, `Kanji count for ${lvl}`).toBe(3);
      expect(grammar, `Grammar count for ${lvl}`).toBe(3);
      expect(vocab, `Vocab count for ${lvl}`).toBe(3);
      expect(reading, `Reading count for ${lvl}`).toBe(2);
      expect(listening, `Listening count for ${lvl}`).toBe(2);
    });
  });

  it('should validate structure and fields of all 65 questions', () => {
    const ids = new Set<string>();

    JAPANESE_DIAGNOSTIC_BANK.forEach((q) => {
      // Unique ID
      expect(ids.has(q.id), `Duplicate ID found: ${q.id}`).toBe(false);
      ids.add(q.id);

      // Language
      expect(q.language).toBe('ja');

      // Level
      expect(['N5', 'N4', 'N3', 'N2', 'N1']).toContain(q.level);

      // Skill
      expect(['kanji', 'grammar', 'vocabulary', 'reading', 'listening']).toContain(q.skill);

      // Difficulty
      expect(['easy', 'medium', 'hard']).toContain(q.difficulty);

      // Prompt
      expect(q.prompt).toBeTruthy();
      expect(q.prompt.trim().length).toBeGreaterThan(5);

      // Options
      expect(q.options).toHaveLength(4);
      q.options.forEach((opt, idx) => {
        expect(opt.trim().length, `Empty option ${idx} in question ${q.id}`).toBeGreaterThan(0);
      });

      // Correct Answer Index
      expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswerIndex).toBeLessThan(4);

      // Explanation (Uzbek)
      expect(q.explanation).toBeTruthy();
      expect(q.explanation.trim().length).toBeGreaterThan(5);

      // Topic
      expect(q.topic).toBeTruthy();

      // Listening questions MUST have audioText
      if (q.skill === 'listening') {
        expect(q.audioText, `Missing audioText for listening question ${q.id}`).toBeTruthy();
        expect(q.audioText!.trim().length).toBeGreaterThan(10);
      }
    });
  });

  it('should verify DiagnosticService.getBankForLanguage returns the updated 65 questions for ja', () => {
    const bank = DiagnosticService.getBankForLanguage('ja');
    expect(bank.length).toBeGreaterThanOrEqual(65);
    const n1Questions = bank.filter((q) => q.level === 'N1');
    expect(n1Questions.length).toBeGreaterThanOrEqual(13);
  });

  it('should ensure no translation spoilers or romaji exist in kanji and grammar options', () => {
    JAPANESE_DIAGNOSTIC_BANK.forEach((q) => {
      if (q.skill === 'kanji') {
        q.options.forEach((opt) => {
          // Kanji options must be pure Japanese readings without Uzbek translation or romaji
          expect(opt).not.toMatch(/[a-zA-Z]/);
          expect(opt).not.toContain('—');
        });
      }
      if (q.skill === 'grammar') {
        q.options.forEach((opt) => {
          // Grammar options should not have romaji attached in parentheses
          expect(opt).not.toMatch(/\([a-zA-Z\s]+\)/);
        });
      }
      if (q.id === 'diag-ja-n5-v3') {
        // Specific user-reported question: antonym test must not have translation spoilers
        expect(q.prompt).not.toContain('katta');
        expect(q.prompt).not.toContain('ookii');
        q.options.forEach((opt) => {
          expect(opt).not.toMatch(/[a-zA-Z]/);
          expect(opt).not.toContain('kichik');
        });
      }
    });
  });

  it('should ensure balanced distribution of correctAnswerIndex across all 4 options', () => {
    const counts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    JAPANESE_DIAGNOSTIC_BANK.forEach((q) => {
      counts[q.correctAnswerIndex] = (counts[q.correctAnswerIndex] || 0) + 1;
    });

    // Each option (0, 1, 2, 3) must represent between 14 and 18 questions (~25% each)
    expect(counts[0]).toBeGreaterThanOrEqual(14);
    expect(counts[0]).toBeLessThanOrEqual(18);
    expect(counts[1]).toBeGreaterThanOrEqual(14);
    expect(counts[1]).toBeLessThanOrEqual(18);
    expect(counts[2]).toBeGreaterThanOrEqual(14);
    expect(counts[2]).toBeLessThanOrEqual(18);
    expect(counts[3]).toBeGreaterThanOrEqual(14);
    expect(counts[3]).toBeLessThanOrEqual(18);
  });
});

describe('Personal Learning Plan Engine Zero-Level & Adaptation Directives', () => {
  it('should return Japanese zero-level Kana & phrases blueprint for ZERO level', () => {
    const directives = getLevelPedagogicalDirectives('ja', 'jlpt', 'ZERO');
    expect(directives).toContain('JAPANESE ZERO LEVEL');
    expect(directives).toContain('Hiragana');
    expect(directives).toContain('Katakana');
    expect(directives).toContain('Eng muhim iboralar');
  });

  it('should return zero-level blueprint when goalType is zero_ja', () => {
    const directives = getLevelPedagogicalDirectives('ja', 'zero_ja' as any, 'N5');
    expect(directives).toContain('JAPANESE ZERO LEVEL');
  });

  it('should return N5 through N1 blueprints correctly', () => {
    expect(getLevelPedagogicalDirectives('ja', 'jlpt', 'N5')).toContain(
      'JLPT N5 PEDAGOGICAL BLUEPRINT',
    );
    expect(getLevelPedagogicalDirectives('ja', 'jlpt', 'N4')).toContain(
      'JLPT N4 PEDAGOGICAL BLUEPRINT',
    );
    expect(getLevelPedagogicalDirectives('ja', 'jlpt', 'N3')).toContain(
      'JLPT N3 PEDAGOGICAL BLUEPRINT',
    );
    expect(getLevelPedagogicalDirectives('ja', 'jlpt', 'N2')).toContain(
      'JLPT N2 PEDAGOGICAL BLUEPRINT',
    );
    expect(getLevelPedagogicalDirectives('ja', 'jlpt', 'N1')).toContain(
      'JLPT N1 PEDAGOGICAL BLUEPRINT',
    );
  });
});
