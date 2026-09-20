import { describe, it, expect, beforeEach } from 'vitest';
import { JlptMockDiagnosticService } from '../JlptMockDiagnosticService';
import { PersonalLearningPlanService } from '../PersonalLearningPlanService';
import { ExamQuestionAnswer } from '../../utils/ai/examEvaluator';
import { JlptScoreReport } from '../../utils/jlptScoring';
import { WeeklyPlanTask } from '../../types/learningPlan';

describe('JlptMockDiagnosticService & PersonalPlan Remediation Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const mockQuestions: ExamQuestionAnswer[] = [
    // 2 Kanji / Vocab questions (1 correct, 1 wrong)
    {
      questionText: '（毎朝）ジョギングをします。',
      section: 'knowledge',
      userAnswer: 'まいあさ',
      correctAnswer: 'まいあさ',
      isCorrect: true,
      explanationUzbek: '毎朝 (まいあさ) - har kuni ertalab',
    },
    {
      questionText: '（図書館）に行きます。',
      section: 'knowledge',
      userAnswer: 'としょかん',
      correctAnswer: 'としょしつ',
      isCorrect: false,
      explanationUzbek: 'Kutubxona xonasi (図書室 - としょしつ)',
    },
    // 2 Grammar questions (0 correct, 2 wrong -> 0%)
    {
      questionText: 'パン（　）食べます。',
      section: 'knowledge',
      userAnswer: 'に',
      correctAnswer: 'を',
      isCorrect: false,
      explanationUzbek: "Vositasiz to'ldiruvchi uchun を yuklamasi keladi.",
    },
    {
      questionText: '新聞を読ん（　）から会社へ行きます。',
      section: 'knowledge',
      userAnswer: 'だ',
      correctAnswer: 'で',
      isCorrect: false,
      explanationUzbek: '~te/de kara grammatikasi.',
    },
    // 2 Reading questions (1 correct, 1 wrong -> 50%)
    {
      questionText: 'Tanaka-san qayerga ketdi?',
      section: 'reading',
      userAnswer: 'Kyoto',
      correctAnswer: 'Tokyo',
      isCorrect: false,
      explanationUzbek: 'Matnda aniq Tokyo deb keltirilgan.',
    },
    {
      questionText: 'Kutubxona soat nechada ochiladi?',
      section: 'reading',
      userAnswer: '09:00',
      correctAnswer: '09:00',
      isCorrect: true,
      explanationUzbek: "09:00 da ochilishi matnda ko'rsatilgan.",
    },
    // 2 Listening questions (0 correct, 2 wrong -> 0%)
    {
      questionText: 'Erkak kishi birinchi nima qiladi?',
      section: 'listening',
      userAnswer: 'Suv ichadi',
      correctAnswer: 'Qoʻngʻiroq qiladi',
      isCorrect: false,
      explanationUzbek: 'Avval telefon qilishi kerakligini aytdi.',
    },
    {
      questionText: 'Ayol qaysi avtobusga chiqadi?',
      section: 'listening',
      userAnswer: '5-avtobus',
      correctAnswer: '12-avtobus',
      isCorrect: false,
      explanationUzbek: "12-avtobus to'g'ri bekatga boradi.",
    },
  ];

  const mockScoreReport: JlptScoreReport = {
    level: 'N4',
    totalScore: 45,
    maxScore: 180,
    passMark: 90,
    passed: false,
    statusReason: 'FAILED_BOTH',
    statusTextUz: 'Imtihondan o‘tmadi',
    statusTextJa: '不合格',
    statusBadge: 'fugoukaku',
    sections: {
      knowledge: {
        section: 'knowledge',
        titleUz: "Til bilimi (Lug'at & Grammatika)",
        titleJa: '言語知識',
        icon: '⛩️',
        score: 15, // <19 cutoff fail
        maxScore: 60,
        passMark: 19,
        passed: false,
        correctCount: 1,
        totalQuestions: 4,
        percentage: 25,
      },
      reading: {
        section: 'reading',
        titleUz: "O'qib tushunish",
        titleJa: '読解',
        icon: '📖',
        score: 18, // <19 cutoff fail
        maxScore: 60,
        passMark: 19,
        passed: false,
        correctCount: 1,
        totalQuestions: 2,
        percentage: 50,
      },
      listening: {
        section: 'listening',
        titleUz: 'Tinglab tushunish',
        titleJa: '聴解',
        icon: '🎧',
        score: 12, // <19 cutoff fail
        maxScore: 60,
        passMark: 19,
        passed: false,
        correctCount: 0,
        totalQuestions: 2,
        percentage: 0,
      },
    },
    failedSections: ['knowledge', 'reading', 'listening'],
    weakestSection: 'listening',
    correctTotal: 2,
    questionsTotal: 8,
    accuracyPercentage: 25,
  };

  it('correctly categorizes questions into 4 pillars and calculates metrics', () => {
    const analysis = JlptMockDiagnosticService.analyzeExamResults(
      'N4',
      mockQuestions,
      mockScoreReport,
    );

    expect(analysis.level).toBe('N4');
    expect(analysis.pillars.kanji_vocab.totalQuestions).toBe(2);
    expect(analysis.pillars.kanji_vocab.correctCount).toBe(1);
    expect(analysis.pillars.kanji_vocab.accuracyPercentage).toBe(50);

    expect(analysis.pillars.grammar.totalQuestions).toBe(2);
    expect(analysis.pillars.grammar.correctCount).toBe(0);
    expect(analysis.pillars.grammar.accuracyPercentage).toBe(0);

    expect(analysis.pillars.reading.totalQuestions).toBe(2);
    expect(analysis.pillars.reading.accuracyPercentage).toBe(50);

    expect(analysis.pillars.listening.totalQuestions).toBe(2);
    expect(analysis.pillars.listening.accuracyPercentage).toBe(0);

    expect(analysis.criticalPillars).toContain('listening');
    expect(analysis.criticalPillars).toContain('grammar');
  });

  it('generates targeted remediation actions with valid routes and metadata', () => {
    const analysis = JlptMockDiagnosticService.analyzeExamResults(
      'N4',
      mockQuestions,
      mockScoreReport,
    );

    expect(analysis.remediations.length).toBeGreaterThanOrEqual(3);

    // Reading remediation check
    const readingRem = analysis.remediations.find((r) => r.skill === 'reading');
    expect(readingRem).toBeDefined();
    expect(readingRem?.route).toContain('/jlpt?tab=reading&level=N4');

    // Listening remediation check
    const listeningRem = analysis.remediations.find((r) => r.skill === 'listening');
    expect(listeningRem).toBeDefined();
    expect(listeningRem?.route).toContain('/jlpt?tab=listening&level=N4');
    expect(listeningRem?.severity).toBe('high');

    // Grammar remediation check
    const grammarRem = analysis.remediations.find((r) => r.skill === 'grammar');
    expect(grammarRem).toBeDefined();
    expect(grammarRem?.route).toContain('/jlpt?tab=grammar&level=N4');

    // Weekly tasks check
    expect(analysis.weeklyTasks.length).toBe(analysis.remediations.length);
    expect(analysis.weeklyTasks[0].sourceType).toBe('ai_generated');
    expect(analysis.weeklyTasks[0].type).toBe('weakness_practice');
  });

  it('injects remediation tasks into PersonalLearningPlanService correctly', async () => {
    const analysis = JlptMockDiagnosticService.analyzeExamResults(
      'N4',
      mockQuestions,
      mockScoreReport,
    );
    const userId = 'test_user_remediation_1';

    const res = await PersonalLearningPlanService.injectRemediationTasks(
      userId,
      analysis.weeklyTasks,
      'N4',
    );

    expect(res.success).toBe(true);
    expect(res.addedCount).toBeGreaterThan(0);
    expect(res.targetDays.length).toBeGreaterThan(0);

    const plans = PersonalLearningPlanService.getWeeklyPlans(userId);
    expect(plans.length).toBe(1);

    // Verify tasks are inside the plan days
    const allTasks: WeeklyPlanTask[] = plans[0].days.flatMap((d) => d.tasks);
    expect(allTasks.length).toBeGreaterThanOrEqual(analysis.weeklyTasks.length);
    const hasRemediation = allTasks.some(
      (t) => t.type === 'weakness_practice' && t.sourceType === 'ai_generated',
    );
    expect(hasRemediation).toBe(true);
  });
});
