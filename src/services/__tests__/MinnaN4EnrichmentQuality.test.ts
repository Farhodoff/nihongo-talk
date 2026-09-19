import { describe, it, expect } from 'vitest';
import { MINNA_N4_LESSONS } from '../../data/curriculum/minnaN4Lessons';

describe('Minna no Nihongo N4 Curriculum Quality & Enrichment Verification', () => {
  it('should contain all 25 Minna no Nihongo N4 lessons (L26-L50) with valid metadata', () => {
    expect(MINNA_N4_LESSONS).toBeDefined();
    expect(MINNA_N4_LESSONS.length).toBe(25);

    for (let i = 26; i <= 50; i++) {
      const expectedId = `ja-minna-l${i}`;
      const lesson = MINNA_N4_LESSONS.find((l) => l.id === expectedId);
      expect(lesson, `Lesson ${expectedId} must exist`).toBeDefined();
      expect(lesson?.lessonNumber).toBe(i);
      expect(lesson?.level).toBe('N4');
      expect(lesson?.language).toBe('ja');
      expect(lesson?.title).toBeTruthy();
      expect(lesson?.description).toBeTruthy();
    }
  });

  it('should have complete and non-truncated keyPoints without trailing ellipsis (...)', () => {
    let totalKeyPoints = 0;
    for (const lesson of MINNA_N4_LESSONS) {
      const learnStep = lesson.steps.find((s) => s.type === 'learn');
      expect(learnStep, `Lesson ${lesson.id} must have a learn step`).toBeDefined();
      const keyPoints = learnStep?.learnData?.keyPoints || [];
      expect(keyPoints.length).toBeGreaterThan(0);

      for (const point of keyPoints) {
        totalKeyPoints++;
        expect(point.trim().length).toBeGreaterThan(5);
        expect(
          point.endsWith('...'),
          `keyPoint in lesson ${lesson.id} should not end with '...': "${point}"`,
        ).toBe(false);
        expect(point).not.toMatch(/\.\.\.$/);
      }
    }
    expect(totalKeyPoints).toBeGreaterThanOrEqual(60);
  });

  it('should have proper 3-step structure (learn, practice, test) for each lesson', () => {
    for (const lesson of MINNA_N4_LESSONS) {
      expect(lesson.steps.length).toBe(3);
      const stepTypes = lesson.steps.map((s) => s.type);
      expect(stepTypes).toEqual(['learn', 'practice', 'test']);

      const [learnStep, practiceStep, testStep] = lesson.steps;
      expect(learnStep.learnData).toBeDefined();
      expect(practiceStep.practiceData).toBeDefined();
      expect(testStep.testData).toBeDefined();
    }
  });

  it('should have enriched contextual vocab example sentences with proper translations', () => {
    let totalVocabCount = 0;
    let totalExamples = 0;

    for (const lesson of MINNA_N4_LESSONS) {
      const learnStep = lesson.steps.find((s) => s.type === 'learn');
      const words = learnStep?.learnData?.vocabulary || [];
      expect(words.length).toBeGreaterThan(0);

      for (const word of words) {
        totalVocabCount++;
        expect(word.term).toBeTruthy();
        expect(word.meaning).toBeTruthy();

        if (word.exampleSentence) {
          totalExamples++;
          expect(word.exampleSentence).not.toContain(`${word.term} — ${word.meaning}`);
          expect(word.exampleSentence.trim().length).toBeGreaterThan(3);
        }
        if (word.exampleTranslation) {
          expect(word.exampleTranslation.trim().length).toBeGreaterThan(2);
        }
      }
    }
    expect(totalVocabCount).toBeGreaterThan(400);
    expect(totalExamples).toBeGreaterThan(400);
  });

  it('should have balanced answer distributions for practice and test steps without static index 0 bias', () => {
    const answerCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let totalQuestions = 0;

    for (const lesson of MINNA_N4_LESSONS) {
      const practiceStep = lesson.steps.find((s) => s.type === 'practice');
      const testStep = lesson.steps.find((s) => s.type === 'test');

      const exercises = practiceStep?.practiceData?.exercises || [];
      const questions = testStep?.testData?.questions || [];

      // Practice exercises
      for (const ex of exercises) {
        if (ex.options && ex.options.length > 0 && typeof ex.correctAnswer === 'number') {
          totalQuestions++;
          expect(ex.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(ex.correctAnswer).toBeLessThan(ex.options.length);
          answerCounts[ex.correctAnswer] = (answerCounts[ex.correctAnswer] || 0) + 1;

          // Ensure options are all distinct
          const uniqueOpts = new Set(ex.options);
          expect(uniqueOpts.size, `Exercise ${ex.id} options must be unique`).toBe(
            ex.options.length,
          );

          // Ensure options do not have dummy legacy text
          for (const opt of ex.options) {
            expect(opt).not.toContain('Aeroportda bojxona tekshiruvidan');
            expect(opt).not.toContain('Bankdan xalqaro kredit olish');
            expect(opt).not.toContain('Kasalxonada operatsiyaga tayyorgarlik');
          }
        }
      }

      // Test questions
      for (const q of questions) {
        if (q.options && q.options.length > 0 && typeof q.correctAnswerIndex === 'number') {
          totalQuestions++;
          expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
          expect(q.correctAnswerIndex).toBeLessThan(q.options.length);
          answerCounts[q.correctAnswerIndex] = (answerCounts[q.correctAnswerIndex] || 0) + 1;

          // Ensure options are all distinct
          const uniqueOpts = new Set(q.options);
          expect(uniqueOpts.size, `Question ${q.id} options must be unique`).toBe(q.options.length);

          for (const opt of q.options) {
            expect(opt).not.toContain('faqat qadimiy yapon adabiyotida');
            expect(opt).not.toContain('faqat bolalar bilan gaplashganda');
          }
        }
      }
    }

    expect(totalQuestions).toBeGreaterThanOrEqual(200);

    // Every option index (0, 1, 2, 3) must be represented
    for (let idx = 0; idx <= 3; idx++) {
      expect(answerCounts[idx], `Option index ${idx} should have answers`).toBeGreaterThan(20);
      // No single option should exceed 40% of all questions
      const proportion = answerCounts[idx] / totalQuestions;
      expect(
        proportion,
        `Proportion for index ${idx} (${proportion}) must be under 40%`,
      ).toBeLessThan(0.4);
    }
  });

  it('should have properly structured grammar rules and clean sentences', () => {
    for (const lesson of MINNA_N4_LESSONS) {
      const learnStep = lesson.steps.find((s) => s.type === 'learn');
      const rules = learnStep?.learnData?.grammarRules || [];
      expect(rules.length).toBeGreaterThan(0);

      for (const rule of rules) {
        expect(rule.pattern).toBeTruthy();
        expect(rule.meaning.trim().length).toBeGreaterThan(5);
        for (const ex of rule.examples) {
          expect(ex.sentence).toBeTruthy();
          expect(ex.translation).toBeTruthy();
          expect(ex.sentence).not.toMatch(/\s+(Janob|Men|Ular|Biz|Bu|O'sha|Shu)\s+/i);
        }
      }
    }
  });

  it('should have authentic canonical Kaiwa dialogues in all 25 lessons (L26-L50) with complete lines and speakers', () => {
    for (const lesson of MINNA_N4_LESSONS) {
      const learnStep = lesson.steps.find((s) => s.type === 'learn');
      const dialogue = learnStep?.learnData?.dialogue;
      expect(dialogue, `Lesson ${lesson.id} must have a dialogue object`).toBeDefined();
      expect(dialogue?.title).toBeTruthy();
      expect(dialogue?.situationUz).toBeTruthy();
      expect(dialogue?.lines.length).toBeGreaterThanOrEqual(4);

      for (const line of dialogue?.lines || []) {
        expect(line.speaker).toBeTruthy();
        expect(line.japanese).toBeTruthy();
        expect(line.uzbek).toBeTruthy();
        expect(line.romaji).toBeTruthy();
      }
    }
  });
});
