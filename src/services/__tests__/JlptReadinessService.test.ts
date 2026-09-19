import { describe, it, expect } from 'vitest';
import { JlptReadinessService, JLPT_BENCHMARKS, UserSkillStats } from '../JlptReadinessService';

describe('JlptReadinessService', () => {
  it('contains official JLPT benchmarks for all levels N5-N1', () => {
    expect(JLPT_BENCHMARKS.N5.passMark).toBe(80);
    expect(JLPT_BENCHMARKS.N4.passMark).toBe(90);
    expect(JLPT_BENCHMARKS.N3.passMark).toBe(95);
    expect(JLPT_BENCHMARKS.N2.passMark).toBe(90);
    expect(JLPT_BENCHMARKS.N1.passMark).toBe(100);

    // Sectional floor is strictly 19 points out of 60 for all levels
    ['N5', 'N4', 'N3', 'N2', 'N1'].forEach((lvl) => {
      expect(JLPT_BENCHMARKS[lvl as keyof typeof JLPT_BENCHMARKS].sectionalFloor).toBe(19);
    });
  });

  it('calculates 5 skill pillars and generates radar items for N5', () => {
    const stats: UserSkillStats = {
      vocabCount: 600, // 600/800 = 75%
      vocabRetentionRate: 85,
      kanjiCount: 80, // 80/100 = 80%
      grammarMasteredCount: 30, // 30/40 = 75%
      listeningCompletedCount: 8, // 8/10 = 80%
      listeningAccuracy: 80,
      speakingSessionsCount: 4, // 4/5 = 80%
      speakingFluencyScore: 8.0,
    };

    const report = JlptReadinessService.calculateReadiness(stats, 'N5');

    expect(report.level).toBe('N5');
    expect(report.pillars.length).toBe(5);
    expect(report.radarData.length).toBe(5);
    expect(report.radarData.map((r) => r.subject)).toEqual([
      '単語 (Tango)',
      '漢字 (Kanji)',
      '文法 (Bunpou)',
      '聴解 (Choukai)',
      '会話 (Kaiwa)',
    ]);

    expect(report.overallReadiness).toBeGreaterThan(60);
    expect(report.projectedScore).toBeGreaterThanOrEqual(80);
    expect(report.isProjectedToPass).toBe(true);
    expect(report.hasSectionalFailureRisk).toBe(false);
  });

  it('detects sectional failure risk when listening score is below 19 floor', () => {
    const stats: UserSkillStats = {
      vocabCount: 800,
      vocabRetentionRate: 90,
      kanjiCount: 100,
      grammarMasteredCount: 40,
      listeningCompletedCount: 1, // very low listening!
      listeningAccuracy: 30,
      speakingSessionsCount: 5,
    };

    const report = JlptReadinessService.calculateReadiness(stats, 'N5');

    expect(report.sections.choukai.isAtRisk).toBe(true);
    expect(report.sections.choukai.score).toBeLessThan(19);
    expect(report.hasSectionalFailureRisk).toBe(true);
    expect(report.isProjectedToPass).toBe(false); // even if total is high, failing section prevents pass!
    expect(report.actionableRecommendation.uz).toContain('Tinglash');
  });

  it('correctly adapts when switching target level from N5 to N3', () => {
    const stats: UserSkillStats = {
      vocabCount: 800,
      kanjiCount: 120,
      grammarMasteredCount: 45,
      listeningCompletedCount: 10,
      speakingSessionsCount: 5,
    };

    // Ready for N5
    const reportN5 = JlptReadinessService.calculateReadiness(stats, 'N5');
    expect(reportN5.overallReadiness).toBeGreaterThan(70);

    // But for N3 (which requires 3750 words, 650 kanji), readiness is much lower
    const reportN3 = JlptReadinessService.calculateReadiness(stats, 'N3');
    expect(reportN3.overallReadiness).toBeLessThan(40);
    expect(reportN3.isProjectedToPass).toBe(false);
  });
});
