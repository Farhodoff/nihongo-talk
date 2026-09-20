import { ExamQuestionAnswer } from '../utils/ai/examEvaluator';
import { JlptScoreReport } from '../utils/jlptScoring';
import { WeeklyPlanTask } from '../types/learningPlan';

export type PillarKey = 'kanji_vocab' | 'grammar' | 'reading' | 'listening';

export interface PillarDiagnostic {
  key: PillarKey;
  titleUz: string;
  titleJa: string;
  icon: string;
  totalQuestions: number;
  correctCount: number;
  accuracyPercentage: number;
  scoreOutOf60?: number;
  status: 'critical' | 'moderate' | 'strong';
  statusTextUz: string;
  feedbackUz: string;
}

export interface RemediationAction {
  id: string;
  skill: 'vocabulary' | 'grammar' | 'reading' | 'listening' | 'kanji';
  title: string;
  subtitle: string;
  route: string;
  estimatedMinutes: number;
  actionText: string;
  severity: 'high' | 'medium';
  presetDeckId?: string;
  reasons: string[];
}

export interface DiagnosticAnalysisResult {
  level: string;
  pillars: Record<PillarKey, PillarDiagnostic>;
  weakestPillar: PillarKey;
  criticalPillars: PillarKey[];
  remediations: RemediationAction[];
  weeklyTasks: WeeklyPlanTask[];
  aiAdvice: string;
}

export class JlptMockDiagnosticService {
  /**
   * Distinguishes whether a knowledge question belongs to Kanji/Vocab or Grammar
   */
  private static isGrammarQuestion(q: ExamQuestionAnswer): boolean {
    const text = q.questionText || '';
    const expl = (q.explanationUzbek || '').toLowerCase();

    // Look for standard JLPT grammar patterns: blanks for particles/conjugations
    const hasGrammarBlank = /[（(]\s*[　\s]*[）)]/.test(text) || text.includes('_____');
    const hasGrammarKeywords =
      expl.includes('grammatika') ||
      expl.includes('yuklama') ||
      expl.includes('qoʻshimcha') ||
      expl.includes('feʻl') ||
      expl.includes('tuslanish') ||
      expl.includes('bogʻlovchi') ||
      expl.includes('shakl') ||
      expl.includes('qoida');

    const hasKanjiReadingPattern = /[（(][^）)]+[）)]/.test(text) && !hasGrammarBlank;
    const hasKanjiKeywords =
      expl.includes('iyeroglif') ||
      expl.includes('kanji') ||
      expl.includes("o'qilishi") ||
      expl.includes("lug'at") ||
      expl.includes('leksika');

    if (hasKanjiReadingPattern || (hasKanjiKeywords && !hasGrammarKeywords)) {
      return false;
    }

    return hasGrammarBlank || hasGrammarKeywords;
  }

  /**
   * Analyzes an exam session and yields 4-pillar diagnostics + targeted remediation tasks
   */
  public static analyzeExamResults(
    levelInput: string,
    questions: ExamQuestionAnswer[],
    jlptScoreReport?: JlptScoreReport,
  ): DiagnosticAnalysisResult {
    const cleanLevel = (levelInput || 'N5').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    const level = (['N5', 'N4', 'N3', 'N2', 'N1'].includes(cleanLevel) ? cleanLevel : 'N5') as
      'N5' | 'N4' | 'N3' | 'N2' | 'N1';

    // 1. Partition questions into the 4 pillars
    const buckets: Record<PillarKey, ExamQuestionAnswer[]> = {
      kanji_vocab: [],
      grammar: [],
      reading: [],
      listening: [],
    };

    for (const q of questions) {
      const sec = (q.section || '').toLowerCase();
      if (sec === 'reading' || sec === 'dokkai') {
        buckets.reading.push(q);
      } else if (sec === 'listening' || sec === 'choukai') {
        buckets.listening.push(q);
      } else {
        // Knowledge section -> classify into kanji_vocab or grammar
        if (this.isGrammarQuestion(q)) {
          buckets.grammar.push(q);
        } else {
          buckets.kanji_vocab.push(q);
        }
      }
    }

    // Ensure no empty bucket if there was knowledge questions
    if (buckets.kanji_vocab.length === 0 && buckets.grammar.length > 2) {
      const half = Math.floor(buckets.grammar.length / 2);
      buckets.kanji_vocab = buckets.grammar.slice(0, half);
      buckets.grammar = buckets.grammar.slice(half);
    }

    // 2. Build Pillar Diagnostics
    const calcPillar = (
      key: PillarKey,
      titleUz: string,
      titleJa: string,
      icon: string,
      qs: ExamQuestionAnswer[],
      scoreSec?: number,
    ): PillarDiagnostic => {
      const total = qs.length;
      const correct = qs.filter((q) => q.isCorrect).length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 100;

      let status: 'critical' | 'moderate' | 'strong' = 'strong';
      let statusTextUz = "A'lo daraja";
      let feedbackUz = "Ushbu bo'limda bilimingiz mustahkam.";

      if (scoreSec !== undefined && scoreSec < 19) {
        status = 'critical';
        statusTextUz = 'Kritik zaif (<19 ball)';
        feedbackUz =
          "Rasmiy minimal o'tish chegarasi (19 ball) bajarilmadi. Zudlik bilan mashq qilish zarur.";
      } else if (accuracy < 50) {
        status = 'critical';
        statusTextUz = 'Jiddiy zaiflik (<50%)';
        feedbackUz =
          "Savollarning yarmidan ko'pida xatolik qayd etildi. Maxsus o'rganish rejasi kerak.";
      } else if (accuracy < 70) {
        status = 'moderate';
        statusTextUz = "O'rtacha daraja (50–70%)";
        feedbackUz = "Bo'lim bo'yicha barqarorlikni oshirish uchun qo'shimcha takrorlash lozim.";
      } else {
        status = 'strong';
        statusTextUz = 'Yuqori natija (≥70%)';
        feedbackUz = "Muvaffaqiyatli o'zlashtirilgan. Mustahkamlab borish tavsiya etiladi.";
      }

      return {
        key,
        titleUz,
        titleJa,
        icon,
        totalQuestions: total,
        correctCount: correct,
        accuracyPercentage: accuracy,
        scoreOutOf60: scoreSec,
        status,
        statusTextUz,
        feedbackUz,
      };
    };

    const knowledgeScore = jlptScoreReport?.sections.knowledge?.score;
    const readingScore = jlptScoreReport?.sections.reading?.score;
    const listeningScore = jlptScoreReport?.sections.listening?.score;

    const pillars: Record<PillarKey, PillarDiagnostic> = {
      kanji_vocab: calcPillar(
        'kanji_vocab',
        'Kanji & Leksika',
        '文字・語彙',
        '🈳',
        buckets.kanji_vocab,
        knowledgeScore !== undefined ? Math.round(knowledgeScore * 0.5) : undefined,
      ),
      grammar: calcPillar(
        'grammar',
        'Grammatika',
        '文法',
        '⛩️',
        buckets.grammar,
        knowledgeScore !== undefined ? Math.round(knowledgeScore * 0.5) : undefined,
      ),
      reading: calcPillar(
        'reading',
        "O'qib tushunish (Dokkai)",
        '読解',
        '📖',
        buckets.reading,
        readingScore,
      ),
      listening: calcPillar(
        'listening',
        'Tinglab tushunish (Choukai)',
        '聴解',
        '🎧',
        buckets.listening,
        listeningScore,
      ),
    };

    // 3. Determine Weakest & Critical Pillars
    const sortedPillars = (Object.values(pillars) as PillarDiagnostic[]).sort(
      (a, b) => a.accuracyPercentage - b.accuracyPercentage,
    );
    const weakestPillar = sortedPillars[0].key;
    const criticalPillars = sortedPillars
      .filter((p) => p.status === 'critical' || p.status === 'moderate')
      .map((p) => p.key);

    // 4. Generate Concrete Targeted Remediations
    const remediations: RemediationAction[] = [];
    const weeklyTasks: WeeklyPlanTask[] = [];

    // Helper to add remediation & weekly task
    const addRemediation = (
      id: string,
      skill: 'vocabulary' | 'grammar' | 'reading' | 'listening' | 'kanji',
      title: string,
      subtitle: string,
      route: string,
      estimatedMinutes: number,
      actionText: string,
      severity: 'high' | 'medium',
      presetDeckId?: string,
    ) => {
      remediations.push({
        id,
        skill,
        title,
        subtitle,
        route,
        estimatedMinutes,
        actionText,
        severity,
        presetDeckId,
        reasons: [subtitle],
      });

      weeklyTasks.push({
        id: `remediation_${id}_${Date.now()}`,
        title,
        type: 'weakness_practice',
        estimatedMinutes,
        completed: false,
        status: 'pending',
        sourceType: 'ai_generated',
        route,
        skill,
        metadata: {
          examLevel: level,
          severity,
          presetDeckId,
          generatedFromMock: true,
        },
      });
    };

    // Pillar: Reading (Dokkai)
    if (pillars.reading.status === 'critical' || pillars.reading.status === 'moderate') {
      const isCrit = pillars.reading.status === 'critical';
      addRemediation(
        `dokkai_${level.toLowerCase()}`,
        'reading',
        `📖 JLPT ${level} Dokkai: Matnlarni Tahlil Qilish`,
        isCrit
          ? `O'qish bo'limida ${pillars.reading.accuracyPercentage}% to'g'ri natija. Rasmiy 19 ballik chegaradan o'tish uchun matnlar mashqi tavsiya etiladi.`
          : `Dokkai ko'nikmasini oshirish uchun qisqa va o'rta hajmli matnlarni ishlash.`,
        `/jlpt?tab=reading&level=${level}`,
        15,
        "Matnlarni o'qish ➔",
        isCrit ? 'high' : 'medium',
      );
    }

    // Pillar: Listening (Choukai)
    if (pillars.listening.status === 'critical' || pillars.listening.status === 'moderate') {
      const isCrit = pillars.listening.status === 'critical';
      addRemediation(
        `choukai_${level.toLowerCase()}`,
        'listening',
        `🎧 JLPT ${level} Choukai: Studiya Audiolari Mashqi`,
        isCrit
          ? `Tinglash bo'limida ${pillars.listening.accuracyPercentage}% natija qayd etildi. Vazifa va suhbat audiolari ustida ishlash zarur.`
          : `Tinglab tushunish tezligini oshirish uchun CD audio mashqlari.`,
        `/jlpt?tab=listening&level=${level}`,
        15,
        'Audiolarni tinglash ➔',
        isCrit ? 'high' : 'medium',
      );
    }

    // Pillar: Grammar
    if (pillars.grammar.status === 'critical' || pillars.grammar.status === 'moderate') {
      const isCrit = pillars.grammar.status === 'critical';
      const deckId =
        level === 'N1'
          ? 'deck_n1_500_mon'
          : level === 'N2'
            ? 'deck_n2_500_mon'
            : level === 'N3'
              ? 'deck_n3_confusing_grammar'
              : 'deck_n4_500_mon';

      addRemediation(
        `grammar_${level.toLowerCase()}`,
        'grammar',
        `⛩️ JLPT ${level} Grammatika & 500 Mon Mashqi`,
        isCrit
          ? `Grammatika savollarida ${pillars.grammar.accuracyPercentage}% to'g'ri bo'ldi. Asosiy grammatik qoliplarni takrorlash tavsiya etiladi.`
          : `Grammatik strukturalar va qoliplarni mustahkamlash kvizi.`,
        `/jlpt?tab=grammar&level=${level}`,
        12,
        "Grammatikani ko'rish ➔",
        isCrit ? 'high' : 'medium',
        deckId,
      );
    }

    // Pillar: Kanji & Vocab
    if (pillars.kanji_vocab.status === 'critical' || pillars.kanji_vocab.status === 'moderate') {
      const isCrit = pillars.kanji_vocab.status === 'critical';
      const deckId =
        level === 'N1'
          ? 'deck_n1_yojijukugo'
          : level === 'N2'
            ? 'deck_n2_collocations'
            : level === 'N3'
              ? 'deck_n3_thematic_vocab'
              : 'deck_n4_500_mon';

      addRemediation(
        `vocab_${level.toLowerCase()}`,
        'vocabulary',
        `🈳 JLPT ${level} Kanji & So'z Boyligi (Anki SRS)`,
        isCrit
          ? `Leksika va iyeroglif savollarida ${pillars.kanji_vocab.accuracyPercentage}% ko'rsatkich. Fleshkartalarda faol takrorlash tavsiya etiladi.`
          : `Yangi so'z va kanjilarni eslab qolish mashg'uloti.`,
        `/study-mode?deck=${deckId}`,
        10,
        'Fleshkartalarni ochish ➔',
        isCrit ? 'high' : 'medium',
        deckId,
      );
    }

    // Fallback if all pillars are strong: give high-level refinement remediation
    if (remediations.length === 0) {
      addRemediation(
        `mastery_${level.toLowerCase()}`,
        'reading',
        `🏆 JLPT ${level} Barcha Bo'limlar Bo'yicha Ilg'or Mashq`,
        "Siz ajoyib natija ko'rsatdingiz! Natijani mustahkamlash uchun navbatdagi Mock Imtihon yoki yuqori darajadagi Dokkai matnlarini ko'rib chiqing.",
        `/jlpt?tab=reading&level=${level}`,
        15,
        "Mashqlarni ko'rish ➔",
        'medium',
      );
    }

    // 5. Compose AI Advice in Uzbek
    let aiAdvice = '';
    if (criticalPillars.length > 0) {
      const critNames = criticalPillars.map((k) => pillars[k].titleUz).join(', ');
      aiAdvice = `JLPT ${level} imtihon tahliliga ko'ra, eng asosiy e'tibor qaratilishi kerak bo'lgan bo'limlar: ${critNames}. Shaxsiy o'rganish rejangizga ushbu zaifliklarni bartaraf etishga qaratilgan amaliy mashg'ulotlar tayyorlandi. Har kuni kamida 15-20 daqiqa ushbu vazifalar ustida ishlash tavsiya etiladi.`;
    } else {
      aiAdvice = `JLPT ${level} imtihonida barcha bo'limlar bo'yicha a'lo ko'rsatkich qayd etildi! Barqarorlikni saqlab qolish uchun fleshkartalar takrorini uzib qo'ymang va keyingi darajaga tayyorgarlikni boshlang.`;
    }

    return {
      level,
      pillars,
      weakestPillar,
      criticalPillars,
      remediations,
      weeklyTasks,
      aiAdvice,
    };
  }
}
