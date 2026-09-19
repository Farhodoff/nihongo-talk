export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface JlptLevelBenchmark {
  level: JlptLevel;
  passMark: number; // out of 180
  sectionalFloor: number; // minimum points required per section (19 out of 60)
  vocabTarget: number;
  kanjiTarget: number;
  grammarTarget: number;
  listeningTarget: number;
  speakingTarget: number;
}

export const JLPT_BENCHMARKS: Record<JlptLevel, JlptLevelBenchmark> = {
  N5: {
    level: 'N5',
    passMark: 80,
    sectionalFloor: 19,
    vocabTarget: 800,
    kanjiTarget: 100,
    grammarTarget: 40,
    listeningTarget: 10,
    speakingTarget: 5,
  },
  N4: {
    level: 'N4',
    passMark: 90,
    sectionalFloor: 19,
    vocabTarget: 1500,
    kanjiTarget: 300,
    grammarTarget: 80,
    listeningTarget: 15,
    speakingTarget: 10,
  },
  N3: {
    level: 'N3',
    passMark: 95,
    sectionalFloor: 19,
    vocabTarget: 3750,
    kanjiTarget: 650,
    grammarTarget: 140,
    listeningTarget: 20,
    speakingTarget: 15,
  },
  N2: {
    level: 'N2',
    passMark: 90,
    sectionalFloor: 19,
    vocabTarget: 6000,
    kanjiTarget: 1000,
    grammarTarget: 200,
    listeningTarget: 25,
    speakingTarget: 20,
  },
  N1: {
    level: 'N1',
    passMark: 100,
    sectionalFloor: 19,
    vocabTarget: 10000,
    kanjiTarget: 2000,
    grammarTarget: 300,
    listeningTarget: 30,
    speakingTarget: 25,
  },
};

export interface UserSkillStats {
  vocabCount: number;
  vocabRetentionRate?: number; // 0-100
  kanjiCount: number;
  grammarMasteredCount: number;
  listeningCompletedCount: number;
  listeningAccuracy?: number; // 0-100
  speakingSessionsCount: number;
  speakingFluencyScore?: number; // 0-10
  mockExamHighestScore?: number; // 0-180
}

export interface SkillPillarScore {
  key: 'vocabulary' | 'kanji' | 'grammar' | 'listening' | 'speaking';
  name: { uz: string; ja: string; en: string };
  shortName: string;
  score: number; // 0-100 normalized
  currentCount: number;
  targetCount: number;
  status: 'beginner' | 'developing' | 'proficient' | 'mastered';
}

export interface SectionalScoreEstimate {
  name: { uz: string; ja: string; en: string };
  score: number; // estimated 0-60
  maxScore: number; // 60
  floor: number; // 19
  isAtRisk: boolean; // score < 19
}

export interface JlptReadinessReport {
  level: JlptLevel;
  overallReadiness: number; // 0-100 percentage
  projectedScore: number; // 0-180
  passMark: number;
  passProbability: number; // 0-100
  isProjectedToPass: boolean;
  hasSectionalFailureRisk: boolean;
  radarData: { subject: string; score: number; fullMark: number }[];
  pillars: SkillPillarScore[];
  sections: {
    gengoChishiki: SectionalScoreEstimate;
    dokkai: SectionalScoreEstimate;
    choukai: SectionalScoreEstimate;
  };
  weakestPillar: SkillPillarScore;
  actionableRecommendation: { uz: string; ja: string; en: string };
}

export class JlptReadinessService {
  /**
   * Calculates comprehensive readiness assessment for a target JLPT level.
   */
  static calculateReadiness(stats: UserSkillStats, level: JlptLevel = 'N5'): JlptReadinessReport {
    const benchmark = JLPT_BENCHMARKS[level] || JLPT_BENCHMARKS.N5;

    // 1. Calculate normalized 0-100 score per skill pillar
    // Vocabulary (Tango)
    const vocabRatio = Math.min(1.2, stats.vocabCount / benchmark.vocabTarget);
    const vocabRetention = (stats.vocabRetentionRate ?? 80) / 100;
    const vocabScore = Math.min(100, Math.round(vocabRatio * vocabRetention * 100));

    // Kanji (Strokes & Recognition)
    const kanjiRatio = Math.min(1.2, stats.kanjiCount / benchmark.kanjiTarget);
    const kanjiScore = Math.min(100, Math.round(kanjiRatio * 100));

    // Grammar (Bunpou)
    const grammarRatio = Math.min(1.2, stats.grammarMasteredCount / benchmark.grammarTarget);
    const grammarScore = Math.min(100, Math.round(grammarRatio * 100));

    // Listening (Choukai)
    const listeningRatio = Math.min(1.2, stats.listeningCompletedCount / benchmark.listeningTarget);
    const listeningAcc = (stats.listeningAccuracy ?? 75) / 100;
    const listeningScore = Math.min(100, Math.round(listeningRatio * listeningAcc * 100));

    // Speaking / Pronunciation (Kaiwa / Pitch)
    const speakingRatio = Math.min(1.2, stats.speakingSessionsCount / benchmark.speakingTarget);
    const fluencyAcc = Math.min(1, (stats.speakingFluencyScore ?? 7.0) / 10);
    const speakingScore = Math.min(100, Math.round(speakingRatio * fluencyAcc * 100));

    const getStatus = (score: number): 'beginner' | 'developing' | 'proficient' | 'mastered' => {
      if (score >= 85) return 'mastered';
      if (score >= 65) return 'proficient';
      if (score >= 40) return 'developing';
      return 'beginner';
    };

    const pillars: SkillPillarScore[] = [
      {
        key: 'vocabulary',
        name: { uz: "So'z Boyligi", ja: '単語・語彙', en: 'Vocabulary' },
        shortName: '単語 (Tango)',
        score: vocabScore,
        currentCount: stats.vocabCount,
        targetCount: benchmark.vocabTarget,
        status: getStatus(vocabScore),
      },
      {
        key: 'kanji',
        name: { uz: 'Kanji Iyerogliflari', ja: '漢字認識・筆記', en: 'Kanji' },
        shortName: '漢字 (Kanji)',
        score: kanjiScore,
        currentCount: stats.kanjiCount,
        targetCount: benchmark.kanjiTarget,
        status: getStatus(kanjiScore),
      },
      {
        key: 'grammar',
        name: { uz: 'Grammatika', ja: '文法・構文', en: 'Grammar' },
        shortName: '文法 (Bunpou)',
        score: grammarScore,
        currentCount: stats.grammarMasteredCount,
        targetCount: benchmark.grammarTarget,
        status: getStatus(grammarScore),
      },
      {
        key: 'listening',
        name: { uz: 'Tinglab Tushunish', ja: '聴解・リスニング', en: 'Listening' },
        shortName: '聴解 (Choukai)',
        score: listeningScore,
        currentCount: stats.listeningCompletedCount,
        targetCount: benchmark.listeningTarget,
        status: getStatus(listeningScore),
      },
      {
        key: 'speaking',
        name: { uz: 'Nutq & Ohang', ja: '会話・アクセント', en: 'Speaking' },
        shortName: '会話 (Kaiwa)',
        score: speakingScore,
        currentCount: stats.speakingSessionsCount,
        targetCount: benchmark.speakingTarget,
        status: getStatus(speakingScore),
      },
    ];

    // Weakest pillar
    const sortedPillars = [...pillars].sort((a, b) => a.score - b.score);
    const weakestPillar = sortedPillars[0];

    // 2. Sectional Estimates (each out of 60)
    // Section 1: Language Knowledge (Gengo Chishiki) = Vocab (50%) + Kanji (25%) + Grammar (25%)
    const gengoChishikiScore = Math.min(
      60,
      Math.round(((vocabScore * 0.5 + kanjiScore * 0.25 + grammarScore * 0.25) / 100) * 60),
    );

    // Section 2: Reading (Dokkai) = Grammar (60%) + Vocab (40%)
    const dokkaiScore = Math.min(
      60,
      Math.round(((grammarScore * 0.6 + vocabScore * 0.4) / 100) * 60),
    );

    // Section 3: Listening (Choukai) = Listening (80%) + Speaking/Pitch (20%)
    const choukaiScore = Math.min(
      60,
      Math.round(((listeningScore * 0.8 + speakingScore * 0.2) / 100) * 60),
    );

    const gengoSection: SectionalScoreEstimate = {
      name: {
        uz: 'Til Bilimi (Soʻz & Grammatika)',
        ja: '言語知識（文字・語彙・文法）',
        en: 'Language Knowledge',
      },
      score: gengoChishikiScore,
      maxScore: 60,
      floor: benchmark.sectionalFloor,
      isAtRisk: gengoChishikiScore < benchmark.sectionalFloor,
    };

    const dokkaiSection: SectionalScoreEstimate = {
      name: { uz: "O'qib Tushunish (Dokkai)", ja: '読解', en: 'Reading Comprehension' },
      score: dokkaiScore,
      maxScore: 60,
      floor: benchmark.sectionalFloor,
      isAtRisk: dokkaiScore < benchmark.sectionalFloor,
    };

    const choukaiSection: SectionalScoreEstimate = {
      name: { uz: 'Tinglab Tushunish (Choukai)', ja: '聴解', en: 'Listening' },
      score: choukaiScore,
      maxScore: 60,
      floor: benchmark.sectionalFloor,
      isAtRisk: choukaiScore < benchmark.sectionalFloor,
    };

    const hasSectionalFailureRisk =
      gengoSection.isAtRisk || dokkaiSection.isAtRisk || choukaiSection.isAtRisk;

    // 3. Projected Total Score (out of 180)
    const rawProjected = gengoChishikiScore + dokkaiScore + choukaiScore;
    // Factor in actual mock exam highest score if available
    const projectedScore =
      stats.mockExamHighestScore && stats.mockExamHighestScore > 0
        ? Math.round(rawProjected * 0.6 + stats.mockExamHighestScore * 0.4)
        : rawProjected;

    // 4. Pass Probability & Overall Readiness
    const overallReadiness = Math.min(
      100,
      Math.round(
        vocabScore * 0.25 +
          kanjiScore * 0.2 +
          grammarScore * 0.25 +
          listeningScore * 0.2 +
          speakingScore * 0.1,
      ),
    );

    let passProbability = 0;
    if (projectedScore >= benchmark.passMark && !hasSectionalFailureRisk) {
      // Scales between 70% and 98%
      const surplus = projectedScore - benchmark.passMark;
      passProbability = Math.min(98, 70 + Math.round((surplus / 40) * 28));
    } else if (hasSectionalFailureRisk) {
      // Risk of failing despite good total score
      passProbability = Math.min(45, Math.round((projectedScore / benchmark.passMark) * 40));
    } else {
      // Below pass mark
      passProbability = Math.max(5, Math.round((projectedScore / benchmark.passMark) * 65));
    }

    const isProjectedToPass = projectedScore >= benchmark.passMark && !hasSectionalFailureRisk;

    // 5. Radar Chart Data
    const radarData = pillars.map((p) => ({
      subject: p.shortName,
      score: p.score,
      fullMark: 100,
    }));

    // 6. Actionable Recommendation
    let actionableRecommendation = {
      uz: `JLPT ${level} imtihoniga tayyorgarlik darajangiz yuqori! Rasmiy Mock Exam sinovidan o'ting.`,
      ja: `JLPT ${level}の準備は順調です！本番模擬試験に挑戦してみましょう。`,
      en: `Your JLPT ${level} readiness is solid! Take an official Mock Exam to validate.`,
    };

    if (hasSectionalFailureRisk) {
      if (choukaiSection.isAtRisk) {
        actionableRecommendation = {
          uz: "Diqqat: Tinglash (Choukai) bo'limi 19 ballik minimal xavf ostida! Kuniga kamida 2 ta audio dialogni Audio Sync rejimida tinglang.",
          ja: '警告：聴解セクションが19点未満の足切りリスクに直面しています！Audio Syncで毎日2問以上練習してください。',
          en: 'Caution: Listening score is at risk of falling below the 19-point cutoff! Practice 2+ dialogues daily in Audio Sync.',
        };
      } else if (dokkaiSection.isAtRisk) {
        actionableRecommendation = {
          uz: "Diqqat: O'qish (Dokkai) bo'limi xavf ostida! Minna no Nihongo matnlari va grammatik tuzilmalarni takrorlang.",
          ja: '警告：読解セクションが足切りライン付近です！文法解説と長文読解を強化しましょう。',
          en: 'Caution: Reading score is near the cutoff threshold! Reinforce grammar patterns and reading passages.',
        };
      } else {
        actionableRecommendation = {
          uz: "Diqqat: Til bilimi bo'limi xavf ostida! Kunlik 10 tadan Kanji va fleshkarta takrorlashni odat qiling.",
          ja: '警告：言語知識（文字・語彙）が不足しています！漢字書き順と語彙フラッシュカードを集中復習してください。',
          en: 'Caution: Language Knowledge score is near the cutoff! Prioritize kanji strokes and vocabulary flashcards.',
        };
      }
    } else if (weakestPillar.score < 50) {
      actionableRecommendation = {
        uz: `Eng zaif bo'g'iningiz: ${weakestPillar.name.uz} (${weakestPillar.score}%). Ushbu soha bo'yicha kunlik mashg'ulotlarni ko'paytiring.`,
        ja: `最も苦手な分野: ${weakestPillar.name.ja} (${weakestPillar.score}%)。集中的な学習を推奨します。`,
        en: `Your weakest skill is ${weakestPillar.name.en} (${weakestPillar.score}%). Focus your next study sessions here.`,
      };
    }

    return {
      level,
      overallReadiness,
      projectedScore,
      passMark: benchmark.passMark,
      passProbability,
      isProjectedToPass,
      hasSectionalFailureRisk,
      radarData,
      pillars,
      sections: {
        gengoChishiki: gengoSection,
        dokkai: dokkaiSection,
        choukai: choukaiSection,
      },
      weakestPillar,
      actionableRecommendation,
    };
  }
}
