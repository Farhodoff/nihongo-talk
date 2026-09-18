import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import {
  DiagnosticQuestion,
  DiagnosticMode,
  DiagnosticResult,
  DiagnosticSkillScore,
  DiagnosticSessionState,
  AdaptiveDiagnosticState,
} from '../types/diagnostic';
import { LearningSignalService } from './LearningSignalService';
import { AdaptiveQuestionEngine } from './AdaptiveQuestionEngine';
import { MasteryEngine } from './MasteryEngine';
import { LearningTrackStorage } from '../utils/storage/LearningTrackStorage';
import { LevelPromotionCandidate } from '../types/learningPath';
import { supabase } from '../lib/supabase';
import { toDeterministicUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { logger } from '../utils/logger';

interface DbSessionAnswers {
  mode?: 'adaptive' | 'standard';
  state?: AdaptiveDiagnosticState;
  session?: DiagnosticSessionState;
}

const DIAGNOSTIC_SESSION_PREFIX = 'study_planner_diag_session_';
const DIAGNOSTIC_ADAPTIVE_PREFIX = 'study_planner_diag_adaptive_';
const DIAGNOSTIC_RESULT_PREFIX = 'study_planner_diag_result_';

export const ENGLISH_DIAGNOSTIC_BANK: DiagnosticQuestion[] = [
  // A1
  {
    id: 'diag-en-a1-g1',
    language: 'en',
    level: 'A1',
    skill: 'grammar',
    difficulty: 'easy',
    prompt: 'Choose the correct form: "She _______ a doctor at City Hospital."',
    options: ['am', 'is', 'are', 'be'],
    correctAnswerIndex: 1,
    explanation:
      '"She" uchinchi shaxs birlik olmoshi uchun to be fe\'lining "is" shakli ishlatiladi.',
    topic: 'Present Simple: To Be',
  },
  {
    id: 'diag-en-a1-g2',
    language: 'en',
    level: 'A1',
    skill: 'grammar',
    difficulty: 'medium',
    prompt: 'Select the correct question: "_______ do you live?" — "In Tashkent."',
    options: ['Where', 'What', 'Who', 'When'],
    correctAnswerIndex: 0,
    explanation: "Joy nomini so'rash uchun \"Where\" (qayerda) so'rog'i ishlatiladi.",
    topic: 'Wh- Questions',
  },
  {
    id: 'diag-en-a1-v1',
    language: 'en',
    level: 'A1',
    skill: 'vocabulary',
    difficulty: 'easy',
    prompt: 'Which word means "the day after today"?',
    options: ['Yesterday', 'Tomorrow', 'Tonight', 'Last night'],
    correctAnswerIndex: 1,
    explanation: '"Tomorrow" ertaga (ertangi kun) degan ma\'noni bildiradi.',
    topic: 'Time & Calendar',
  },
  {
    id: 'diag-en-a1-l1',
    language: 'en',
    level: 'A1',
    skill: 'listening',
    difficulty: 'easy',
    prompt:
      'Audio snippet: "Good morning! Can I get a cup of black coffee, please?" Where is the speaker?',
    options: ['In a coffee shop', 'In a hospital', 'At the airport', 'At a car repair shop'],
    correctAnswerIndex: 0,
    explanation: "Qahva buyurtma qilish qahvaxonada bo'ladi.",
    topic: 'Everyday Ordering',
  },
  // A2
  {
    id: 'diag-en-a2-g1',
    language: 'en',
    level: 'A2',
    skill: 'grammar',
    difficulty: 'easy',
    prompt: 'Select the past tense: "We _______ to London two years ago."',
    options: ['go', 'goes', 'went', 'have gone'],
    correctAnswerIndex: 2,
    explanation:
      'O\'tgan zamon ("two years ago") uchun "go" fe\'lining o\'tgan shakli "went" bo\'ladi.',
    topic: 'Past Simple',
  },
  {
    id: 'diag-en-a2-g2',
    language: 'en',
    level: 'A2',
    skill: 'grammar',
    difficulty: 'medium',
    prompt: 'Choose the comparative form: "This book is _______ than that one."',
    options: ['more interesting', 'interesting', 'most interesting', 'interestinger'],
    correctAnswerIndex: 0,
    explanation: "Ko'p bo'g'inli sifatlar uchun taqqoslash darajasida \"more\" qo'shiladi.",
    topic: 'Comparatives',
  },
  {
    id: 'diag-en-a2-v1',
    language: 'en',
    level: 'A2',
    skill: 'vocabulary',
    difficulty: 'medium',
    prompt: 'Which word describes a person who helps patients in a hospital?',
    options: ['Nurse', 'Pilot', 'Chef', 'Mechanic'],
    correctAnswerIndex: 0,
    explanation: '"Nurse" — shifoxonada bemorlarga qaraydigan hamshira.',
    topic: 'Professions',
  },
  {
    id: 'diag-en-a2-r1',
    language: 'en',
    level: 'A2',
    skill: 'reading',
    difficulty: 'medium',
    prompt:
      'Read: "The library opens at 8:00 AM and closes at 6:00 PM on weekdays." When is the library open?',
    options: [
      'Only on weekends',
      'During the daytime on weekdays',
      'All night long',
      'Only in the evening',
    ],
    correctAnswerIndex: 1,
    explanation: "Kutubxona ish kunlari soat 8:00 dan 18:00 gacha (kunduzi) ochiq bo'ladi.",
    topic: 'Short Notice Reading',
  },
  // B1
  {
    id: 'diag-en-b1-g1',
    language: 'en',
    level: 'B1',
    skill: 'grammar',
    difficulty: 'medium',
    prompt: 'Choose the correct sentence: "If it rains tomorrow, we _______ the outdoor picnic."',
    options: ['cancel', 'will cancel', 'would cancel', 'cancelled'],
    correctAnswerIndex: 1,
    explanation: 'First Conditional: If + Present Simple, will + V1.',
    topic: 'Conditionals',
  },
  {
    id: 'diag-en-b1-g2',
    language: 'en',
    level: 'B1',
    skill: 'grammar',
    difficulty: 'hard',
    prompt: 'Select the present perfect continuous: "I _______ for this company for five years."',
    options: ['have been working', 'am working', 'worked', 'had worked'],
    correctAnswerIndex: 0,
    explanation: 'Hozirgacha davom etayotgan harakat uchun "have been working" to\'g\'ri keladi.',
    topic: 'Present Perfect Continuous',
  },
  {
    id: 'diag-en-b1-v1',
    language: 'en',
    level: 'B1',
    skill: 'vocabulary',
    difficulty: 'medium',
    prompt: 'What does "convenient" mean?',
    options: ['Expensive', 'Fitting well with plans or easy to use', 'Dangerous', 'Ancient'],
    correctAnswerIndex: 1,
    explanation: '"Convenient" qulay, foydalanishga oson degani.',
    topic: 'Intermediate Vocabulary',
  },
  {
    id: 'diag-en-b1-r1',
    language: 'en',
    level: 'B1',
    skill: 'reading',
    difficulty: 'medium',
    prompt:
      'Read: "Despite the bad weather, the marathon runners showed tremendous determination and finished the race." What was the runners\' attitude?',
    options: [
      'They gave up immediately',
      'They persevered despite difficulties',
      'They complained about the rain',
      'They ran slowly on purpose',
    ],
    correctAnswerIndex: 1,
    explanation:
      '"Tremendous determination" sportchilar qiyinchilikka qaramay sabr va matonat ko\'rsatganini bildiradi.',
    topic: 'Passage Comprehension',
  },
  {
    id: 'diag-en-b1-l1',
    language: 'en',
    level: 'B1',
    skill: 'listening',
    difficulty: 'medium',
    prompt:
      'Audio Transcript: "The train on platform 4 will depart 15 minutes later than scheduled." What is the announcement about?',
    options: ['A ticket discount', 'A train delay', 'A platform change', 'A cancellation'],
    correctAnswerIndex: 1,
    explanation:
      '"15 minutes later than scheduled" poezd kechikishi (train delay) haqida bildirish.',
    topic: 'Public Announcements',
  },
  // B2
  {
    id: 'diag-en-b2-g1',
    language: 'en',
    level: 'B2',
    skill: 'grammar',
    difficulty: 'hard',
    prompt:
      'Choose the inverted structure: "Seldom _______ such extraordinary academic dedication."',
    options: ['I have seen', 'have I seen', 'did I saw', 'I saw'],
    correctAnswerIndex: 1,
    explanation:
      'Negative adverbial inversion: Seldom + auxiliary + subject + main verb ("have I seen").',
    topic: 'Grammatical Inversion',
  },
  {
    id: 'diag-en-b2-v1',
    language: 'en',
    level: 'B2',
    skill: 'vocabulary',
    difficulty: 'hard',
    prompt:
      'Which academic word means "to examine in detail in order to discover meaning or essential features"?',
    options: ['Analyze', 'Procrastinate', 'Distort', 'Deteriorate'],
    correctAnswerIndex: 0,
    explanation: '"Analyze" — chuqur tahlil qilmoq (AWL sublist 1).',
    topic: 'Academic Word List',
  },
  {
    id: 'diag-en-b2-r1',
    language: 'en',
    level: 'B2',
    skill: 'reading',
    difficulty: 'hard',
    prompt:
      'Read: "The hypothesis was refuted when empirical data demonstrated a statistically insignificant correlation." What happened to the hypothesis?',
    options: [
      'It was proven true',
      'It was disproved by evidence',
      'It was ignored',
      'It became widely accepted',
    ],
    correctAnswerIndex: 1,
    explanation:
      '"Refuted by empirical data" gipotezaning ilmiy dalillar orqali rad etilganini bildiradi.',
    topic: 'Academic Text Interpretation',
  },
  {
    id: 'diag-en-b2-l1',
    language: 'en',
    level: 'B2',
    skill: 'listening',
    difficulty: 'hard',
    prompt:
      'Audio Transcript: "While economic expansion remains resilient, impending regulatory bottlenecks could dampen consumer confidence." What is the speaker’s stance?',
    options: [
      'Unconditionally optimistic',
      'Cautiously guarded about future headwinds',
      'Extremely pessimistic',
      'Indifferent',
    ],
    correctAnswerIndex: 1,
    explanation:
      "So'zlovchi o'sishni e'tirof etsa-da, kelgusi to'siqlardan ehtiyotkorona xavotir bildirmoqda.",
    topic: 'Analytical Discourse',
  },
  // C1
  {
    id: 'diag-en-c1-g1',
    language: 'en',
    level: 'C1',
    skill: 'grammar',
    difficulty: 'hard',
    prompt:
      'Select the correct participle clause: "_______ by the conflicting research findings, the team conducted a meta-analysis."',
    options: ['Perplexing', 'Having perplexed', 'Perplexed', 'To perplex'],
    correctAnswerIndex: 2,
    explanation:
      'Passive participle clause: "Perplexed by..." (hayratda qolgan/chalg\'igan holda).',
    topic: 'Participle Clauses',
  },
  {
    id: 'diag-en-c1-v1',
    language: 'en',
    level: 'C1',
    skill: 'vocabulary',
    difficulty: 'hard',
    prompt: 'Which word means "present, appearing, or found everywhere simultaneously"?',
    options: ['Ubiquitous', 'Ephemeral', 'Obsolete', 'Redundant'],
    correctAnswerIndex: 0,
    explanation: '"Ubiquitous" — hamma joyda bir vaqtda uchraydigan, keng tarqalgan.',
    topic: 'Advanced Vocabulary',
  },
];

import { JAPANESE_DIAGNOSTIC_BANK } from '../data/japaneseDiagnosticBank';
export { JAPANESE_DIAGNOSTIC_BANK };

export const DiagnosticService = {
  /**
   * Get instant placement result for total beginner learners.
   */
  getZeroLevelResult(userId: string, language: SupportedLanguage): DiagnosticResult {
    const isJa = language === 'ja';
    const startLevel = isJa ? 'N5' : 'A1';
    const firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';

    const skills: Partial<Record<MasterySkill, DiagnosticSkillScore>> = {
      grammar: {
        skill: 'grammar',
        score: 20,
        confidence: 95,
        estimatedLevel: startLevel,
        totalQuestions: 0,
        correctCount: 0,
        status: 'adequate',
        levelEvidence: [],
        reason: '',
      },
      vocabulary: {
        skill: 'vocabulary',
        score: 20,
        confidence: 95,
        estimatedLevel: startLevel,
        totalQuestions: 0,
        correctCount: 0,
        status: 'adequate',
        levelEvidence: [],
        reason: '',
      },
      reading: {
        skill: 'reading',
        score: 20,
        confidence: 95,
        estimatedLevel: startLevel,
        totalQuestions: 0,
        correctCount: 0,
        status: 'adequate',
        levelEvidence: [],
        reason: '',
      },
      listening: {
        skill: 'listening',
        score: 20,
        confidence: 95,
        estimatedLevel: startLevel,
        totalQuestions: 0,
        correctCount: 0,
        status: 'adequate',
        levelEvidence: [],
        reason: '',
      },
    };

    if (isJa) {
      skills.kanji = {
        skill: 'kanji',
        score: 10,
        confidence: 95,
        estimatedLevel: 'N5',
        totalQuestions: 0,
        correctCount: 0,
        status: 'adequate',
        levelEvidence: [],
        reason: '',
      };
    }

    const result: DiagnosticResult = {
      id: `diag-zero-${Date.now()}`,
      userId,
      language,
      mode: 'quick',
      claimedLevel: 'Zero (Nol daraja)',
      diagnosticLevel: startLevel,
      recommendedStartLevel: startLevel,
      overallConfidence: 95,
      overallScore: 20,
      skills,
      strengths: isJa
        ? ["Kana / Alifbo o'rganishga tayyorgarlik"]
        : ["Boshlang'ich ta'limga tayyorgarlik"],
      weaknesses: [],
      recommendedFirstLessonId: firstLessonId,
      completedAt: new Date().toISOString(),
    };

    this.saveDiagnosticResult(result);
    return result;
  },

  /**
   * Get question bank for language
   */
  getBankForLanguage(language: SupportedLanguage): DiagnosticQuestion[] {
    const staticBank = language === 'ja' ? JAPANESE_DIAGNOSTIC_BANK : ENGLISH_DIAGNOSTIC_BANK;
    try {
      // Read from any prefetch cache keys in safeLocalStorage
      const keys = safeLocalStorage.getAllKeys();
      for (const key of keys) {
        if (key.startsWith('study_planner_diag_prefetch_') && key.endsWith(`_${language}`)) {
          const raw = safeLocalStorage.getItem(key);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              const merged = [...staticBank];
              for (const q of parsed) {
                if (!merged.some((item) => item.id === q.id)) {
                  merged.push(q);
                }
              }
              return merged;
            }
          }
        }
      }
    } catch {}
    return staticBank;
  },

  /**
   * Legacy static questions loader (retained for backward compatibility)
   */
  getQuestionsForSession(
    language: SupportedLanguage,
    mode: DiagnosticMode = 'standard',
  ): DiagnosticQuestion[] {
    const bank = this.getBankForLanguage(language);
    const targetCount = mode === 'quick' ? 6 : mode === 'standard' ? 10 : bank.length;
    return bank.slice(0, targetCount);
  },

  /**
   * Initialize adaptive dynamic session
   */
  initializeAdaptiveSession(
    userId: string,
    language: SupportedLanguage,
    mode: DiagnosticMode = 'standard',
    claimedLevel: string = 'B1',
  ): AdaptiveDiagnosticState {
    const bank = this.getBankForLanguage(language);
    const state = AdaptiveQuestionEngine.initializeSession(
      userId,
      language,
      mode,
      claimedLevel,
      bank,
    );
    this.saveAdaptiveSession(state);
    return state;
  },

  /**
   * Process an answer in the real-time adaptive engine
   */
  processAdaptiveAnswer(
    state: AdaptiveDiagnosticState,
    questionId: string,
    selectedOptionIndex: number,
  ): AdaptiveDiagnosticState {
    const bank = this.getBankForLanguage(state.language);
    const updatedState = AdaptiveQuestionEngine.processAnswer(
      state,
      questionId,
      selectedOptionIndex,
      bank,
    );
    this.saveAdaptiveSession(updatedState);
    return updatedState;
  },

  /**
   * Evaluate completed adaptive session
   */
  evaluateAdaptiveSession(state: AdaptiveDiagnosticState): DiagnosticResult {
    const bank = this.getBankForLanguage(state.language);
    const result = AdaptiveQuestionEngine.evaluateAdaptiveSession(state, bank);
    this.saveDiagnosticResult(result);
    this.clearAdaptiveSession(state.userId, state.language);
    return result;
  },

  /**
   * Legacy evaluate method
   */
  evaluateDiagnosticAnswers(
    userId: string,
    language: SupportedLanguage,
    mode: DiagnosticMode,
    claimedLevel: string,
    answers: { questionId: string; selectedOptionIndex: number; isCorrect: boolean }[],
  ): DiagnosticResult {
    const bank = this.getBankForLanguage(language);
    const isJa = language === 'ja';

    const skillStats: Record<string, { total: number; correct: number; levels: string[] }> = {};
    let totalCorrect = 0;

    for (const ans of answers) {
      const q = bank.find((item) => item.id === ans.questionId);
      if (!q) continue;

      if (!skillStats[q.skill]) {
        skillStats[q.skill] = { total: 0, correct: 0, levels: [] };
      }

      skillStats[q.skill].total++;
      if (ans.isCorrect) {
        skillStats[q.skill].correct++;
        totalCorrect++;
        skillStats[q.skill].levels.push(q.level);
      }
    }

    const evaluatedSkills: Partial<Record<MasterySkill, DiagnosticSkillScore>> = {};
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    for (const skillKey of Object.keys(skillStats)) {
      const skill = skillKey as MasterySkill;
      const stat = skillStats[skill];
      const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 50;
      const confidence = Math.min(100, Math.max(50, stat.total * 25));

      let estLevel = isJa ? 'N5' : 'A1';
      if (accuracy >= 80) {
        estLevel = isJa ? 'N3' : 'B2';
      } else if (accuracy >= 60) {
        estLevel = isJa ? 'N4' : 'B1';
      } else if (accuracy >= 40) {
        estLevel = isJa ? 'N5' : 'A2';
      }

      const status = accuracy >= 75 ? 'strong' : accuracy < 60 ? 'weak' : 'adequate';

      evaluatedSkills[skill] = {
        skill,
        score: accuracy,
        confidence,
        estimatedLevel: estLevel,
        totalQuestions: stat.total,
        correctCount: stat.correct,
        status,
        levelEvidence: [],
        reason: '',
      };

      if (status === 'strong') {
        strengths.push(`${skill.toUpperCase()} (${accuracy}%)`);
      } else if (status === 'weak') {
        weaknesses.push(`${skill.toUpperCase()} (${accuracy}%)`);
        LearningSignalService.recordSignal({
          id: `diag-sig-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          userId,
          language,
          lessonId: `diag-${skill}`,
          type: 'incorrect_answer',
          timestamp: new Date().toISOString(),
          stepId: `step-diag-${skill}`,
          questionId: `diag-${skill}-evaluation`,
          prompt: `Diagnostic evaluation for ${skill}`,
          userAnswer: `${accuracy}%`,
          expectedAnswer: '>=60%',
          explanation: `Diagnostic score below benchmark: ${accuracy}%`,
          attemptCount: 1,
        });
      }
    }

    const overallScore =
      answers.length > 0 ? Math.round((totalCorrect / answers.length) * 100) : 50;
    const overallConfidence = Math.min(95, Math.max(50, answers.length * 10));

    let recommendedLevel = isJa ? 'N5' : 'A1';
    let firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';

    if (isJa) {
      if (overallScore >= 80) {
        recommendedLevel = 'N3';
        firstLessonId = 'ja-n3-u1-l1';
      } else if (overallScore >= 55) {
        recommendedLevel = 'N4';
        firstLessonId = 'ja-minna-l26';
      } else {
        recommendedLevel = 'N5';
        firstLessonId = 'ja-n5-u1-l1';
      }
    } else {
      if (overallScore >= 85) {
        recommendedLevel = 'C1';
        firstLessonId = 'en-c1-u1-l1';
      } else if (overallScore >= 70) {
        recommendedLevel = 'B2';
        firstLessonId = 'en-b2-u1-l1';
      } else if (overallScore >= 50) {
        recommendedLevel = 'B1';
        firstLessonId = 'en-b1-u1-l1';
      } else if (overallScore >= 40) {
        recommendedLevel = 'A2';
        firstLessonId = 'en-a2-u1-l1';
      } else {
        recommendedLevel = 'A1';
        firstLessonId = 'en-a1-u1-l1';
      }
    }

    const result: DiagnosticResult = {
      id: `diag-res-${Date.now()}`,
      userId,
      language,
      mode,
      claimedLevel,
      diagnosticLevel: recommendedLevel,
      recommendedStartLevel: recommendedLevel,
      overallConfidence,
      overallScore,
      skills: evaluatedSkills,
      strengths,
      weaknesses,
      recommendedFirstLessonId: firstLessonId,
      completedAt: new Date().toISOString(),
    };

    this.saveDiagnosticResult(result);
    return result;
  },

  /**
   * Adaptive Session Storage
   */
  saveAdaptiveSession(state: AdaptiveDiagnosticState): void {
    const activeUserId = state.userId || 'guest';
    const key = `${DIAGNOSTIC_ADAPTIVE_PREFIX}${activeUserId}_${state.language}`;
    try {
      safeLocalStorage.setJSON(key, state);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to save adaptive session', e);
    }

    if (supabase?.from && activeUserId && activeUserId !== 'guest') {
      const uuid = toDeterministicUUID(`adaptive_session_${activeUserId}_${state.language}`);
      const promise = supabase.from('diagnostic_sessions').upsert({
        id: uuid,
        user_id: activeUserId,
        language: state.language,
        current_step: state.answeredCount || 0,
        answers: { state, mode: 'adaptive' },
        status: 'in_progress',
        updated_at: new Date().toISOString(),
      });
      if (promise && typeof promise.then === 'function') {
        promise.then(({ error }) => {
          if (error) logger.warn('DiagnosticService', 'DB adaptive session save error', error);
        });
      }
    }
  },

  getSavedAdaptiveSession(
    userId: string,
    language: SupportedLanguage,
  ): AdaptiveDiagnosticState | null {
    const key = `${DIAGNOSTIC_ADAPTIVE_PREFIX}${userId || 'guest'}_${language}`;
    try {
      return safeLocalStorage.getJSON<AdaptiveDiagnosticState | null>(key, null);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to load adaptive session', e);
    }
    return null;
  },

  clearAdaptiveSession(userId: string, language: SupportedLanguage): void {
    const activeUserId = userId || 'guest';
    const key = `${DIAGNOSTIC_ADAPTIVE_PREFIX}${activeUserId}_${language}`;
    try {
      safeLocalStorage.removeItem(key);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to clear adaptive session', e);
    }

    if (supabase?.from && activeUserId && activeUserId !== 'guest') {
      const uuid = toDeterministicUUID(`adaptive_session_${activeUserId}_${language}`);
      const promise = supabase.from('diagnostic_sessions').delete().eq('id', uuid);
      if (promise && typeof promise.then === 'function') {
        promise.then(({ error }) => {
          if (error) logger.warn('DiagnosticService', 'DB adaptive session delete error', error);
        });
      }
    }
  },

  /**
   * Session Storage & Resume methods
   */
  saveSession(session: DiagnosticSessionState): void {
    const activeUserId = session.userId || 'guest';
    const key = `${DIAGNOSTIC_SESSION_PREFIX}${activeUserId}_${session.language}`;
    try {
      safeLocalStorage.setJSON(key, session);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to save session', e);
    }

    if (supabase?.from && activeUserId && activeUserId !== 'guest') {
      const uuid = toDeterministicUUID(`standard_session_${activeUserId}_${session.language}`);
      const promise = supabase.from('diagnostic_sessions').upsert({
        id: uuid,
        user_id: activeUserId,
        language: session.language,
        current_step: session.currentQuestionIndex || 0,
        answers: { session, mode: 'standard' },
        start_time: session.lastUpdated || new Date().toISOString(),
        status: 'in_progress',
        updated_at: new Date().toISOString(),
      });
      if (promise && typeof promise.then === 'function') {
        promise.then(({ error }) => {
          if (error) logger.warn('DiagnosticService', 'DB session save error', error);
        });
      }
    }
  },

  getSavedSession(userId: string, language: SupportedLanguage): DiagnosticSessionState | null {
    const key = `${DIAGNOSTIC_SESSION_PREFIX}${userId || 'guest'}_${language}`;
    try {
      return safeLocalStorage.getJSON<DiagnosticSessionState | null>(key, null);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to load session', e);
    }
    return null;
  },

  clearSession(userId: string, language: SupportedLanguage): void {
    const activeUserId = userId || 'guest';
    const key = `${DIAGNOSTIC_SESSION_PREFIX}${activeUserId}_${language}`;
    try {
      safeLocalStorage.removeItem(key);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to clear session', e);
    }

    if (supabase?.from && activeUserId && activeUserId !== 'guest') {
      const uuid = toDeterministicUUID(`standard_session_${activeUserId}_${language}`);
      const promise = supabase.from('diagnostic_sessions').delete().eq('id', uuid);
      if (promise && typeof promise.then === 'function') {
        promise.then(({ error }) => {
          if (error) logger.warn('DiagnosticService', 'DB session delete error', error);
        });
      }
    }
  },

  saveDiagnosticResult(result: DiagnosticResult): void {
    const activeUserId = result.userId || 'guest';
    const key = `${DIAGNOSTIC_RESULT_PREFIX}${activeUserId}_${result.language}`;
    try {
      safeLocalStorage.setJSON(key, result);

      // Immediate Database Persistence
      if (
        activeUserId &&
        activeUserId !== 'guest' &&
        activeUserId !== 'local_user' &&
        supabase?.from
      ) {
        const resultId = result.id
          ? toDeterministicUUID(String(result.id))
          : toDeterministicUUID(
              `diag_${activeUserId}_${result.language}_${result.completedAt || Date.now()}`,
            );
        (async () => {
          try {
            const { error } = await supabase.from('diagnostic_results').upsert(
              {
                id: resultId,
                user_id: activeUserId,
                language: result.language,
                score: result.overallScore,
                estimated_level: result.diagnosticLevel || result.recommendedStartLevel || 'A1',
                confidence: result.overallConfidence || 0,
                weaknesses: result.weaknesses || [],
                strengths: result.strengths || [],
                breakdown: result.skills || {},
                created_at: result.completedAt || new Date().toISOString(),
              },
              { onConflict: 'id' },
            );
            if (error) console.warn('[DiagnosticService] DB save result notice:', error.message);
          } catch (err) {
            console.warn('[DiagnosticService] DB save result error:', err);
          }
        })();
      }

      // Phase E: Diagnostic recommendedStartLevel is only evidence/recommendation.
      // Do NOT call setCurrentLevel directly.
      // Instead, register a promotion candidate if it recommends a level different from current level.
      const currentLevel = LearningTrackStorage.getCurrentLevel(result.language);
      if (result.recommendedStartLevel && result.recommendedStartLevel !== currentLevel) {
        const candidate: LevelPromotionCandidate = {
          language: result.language,
          currentLevel,
          candidateLevel: result.recommendedStartLevel,
          reason: `Diagnostic placement recommendation`,
          evidenceIds: [result.id],
          masteryScore: result.overallScore,
          requiredThreshold: 0,
          createdAt: new Date().toISOString(),
          status: 'pending',
          completedLessonsCount: 0,
        };
        LearningTrackStorage.setPromotionCandidate(result.language, candidate);
      }
    } catch (e) {
      console.warn('[DiagnosticService] Failed to save result:', e);
    }

    // Closed loop: Record diagnostic benchmark evidence into MasteryEngine for each evaluated skill
    if (result.skills) {
      const entries = Object.values(result.skills);
      for (const entry of entries) {
        if (entry && entry.skill && typeof entry.score === 'number') {
          MasteryEngine.recordEvent(activeUserId, result.language, {
            id: `diag_ev_${result.id}_${entry.skill}`,
            activityType: 'diagnostic',
            skill: entry.skill,
            score: entry.score,
            accuracy: entry.score,
            timestamp: result.completedAt || new Date().toISOString(),
            details: `Diagnostic benchmark score for ${entry.skill}: ${entry.score}%`,
            source: 'diagnostic',
          });
        }
      }
    }

    // Asynchronous write to Supabase diagnostic_results table
    if (supabase?.from && activeUserId && activeUserId !== 'guest') {
      const uuid = toDeterministicUUID(result.id || `diag_res_${activeUserId}_${result.language}`);
      const promise = supabase.from('diagnostic_results').upsert({
        id: uuid,
        user_id: activeUserId,
        language: result.language,
        estimated_level: result.diagnosticLevel || result.recommendedStartLevel || 'A1',
        score: result.overallScore || 0,
        confidence: result.overallConfidence || 0,
        weaknesses: result.weaknesses || [],
        strengths: result.strengths || [],
        breakdown: result.skills || {},
        updated_at: new Date().toISOString(),
      });
      if (promise && typeof promise.then === 'function') {
        promise.then(({ error }) => {
          if (error) logger.warn('DiagnosticService', 'DB diagnostic result save error', error);
        });
      }
    }
  },

  getLatestDiagnosticResult(userId: string, language: SupportedLanguage): DiagnosticResult | null {
    const key = `${DIAGNOSTIC_RESULT_PREFIX}${userId || 'guest'}_${language}`;
    try {
      return safeLocalStorage.getJSON<DiagnosticResult | null>(key, null);
    } catch (e) {
      logger.warn('DiagnosticService', 'Failed to load result', e);
    }
    return null;
  },

  /**
   * Synchronize Diagnostic Result and Session from Supabase DB to local cache.
   */
  async syncDiagnosticFromDB(userId: string, language: SupportedLanguage): Promise<void> {
    if (!supabase?.from || !userId || userId === 'guest') return;

    try {
      // 1. Sync Result
      const { data: dbResult, error: resErr } = await supabase
        .from('diagnostic_results')
        .select('*')
        .eq('user_id', userId)
        .eq('language', language)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!resErr && dbResult) {
        const resKey = `${DIAGNOSTIC_RESULT_PREFIX}${userId}_${language}`;
        const mappedResult: DiagnosticResult = {
          id: dbResult.id,
          userId: dbResult.user_id,
          language: dbResult.language as SupportedLanguage,
          mode: 'standard',
          claimedLevel: dbResult.estimated_level || 'A1',
          diagnosticLevel: dbResult.estimated_level || 'A1',
          recommendedStartLevel: dbResult.estimated_level || 'A1',
          overallScore: Number(dbResult.score),
          overallConfidence: Number(dbResult.confidence || 0),
          weaknesses: Array.isArray(dbResult.weaknesses) ? dbResult.weaknesses : [],
          strengths: Array.isArray(dbResult.strengths) ? dbResult.strengths : [],
          skills: dbResult.breakdown || {},
          recommendedFirstLessonId: '',
          completedAt: dbResult.created_at,
        };
        safeLocalStorage.setJSON(resKey, mappedResult);
      }

      // 2. Sync Active Session
      const { data: dbSession, error: sessErr } = await supabase
        .from('diagnostic_sessions')
        .select('*')
        .eq('user_id', userId)
        .eq('language', language)
        .eq('status', 'in_progress')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!sessErr && dbSession && dbSession.answers) {
        const answersData = dbSession.answers as DbSessionAnswers;
        if (answersData.mode === 'adaptive' && answersData.state) {
          const adaptiveKey = `${DIAGNOSTIC_ADAPTIVE_PREFIX}${userId}_${language}`;
          safeLocalStorage.setJSON(adaptiveKey, answersData.state);
        } else if (answersData.mode === 'standard' && answersData.session) {
          const sessionKey = `${DIAGNOSTIC_SESSION_PREFIX}${userId}_${language}`;
          safeLocalStorage.setJSON(sessionKey, answersData.session);
        }
      }
    } catch (e) {
      logger.warn('DiagnosticService', 'DB sync error', e);
    }
  },
};
