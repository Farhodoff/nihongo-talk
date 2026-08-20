import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { 
    DiagnosticQuestion, 
    DiagnosticMode, 
    DiagnosticResult, 
    DiagnosticSkillScore, 
    DiagnosticSessionState 
} from '../types/diagnostic';
import { LearningSignalService } from './LearningSignalService';

const DIAGNOSTIC_SESSION_PREFIX = 'study_planner_diag_session_';
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
        explanation: '"She" uchinchi shaxs birlik olmoshi uchun to be fe\'lining "is" shakli ishlatiladi.',
        topic: 'Present Simple: To Be'
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
        topic: 'Time & Calendar'
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
        explanation: 'O\'tgan zamon ("two years ago") uchun "go" fe\'lining o\'tgan shakli "went" bo\'ladi.',
        topic: 'Past Simple'
    },
    {
        id: 'diag-en-a2-r1',
        language: 'en',
        level: 'A2',
        skill: 'reading',
        difficulty: 'medium',
        prompt: 'Read: "The library opens at 8:00 AM and closes at 6:00 PM on weekdays." When is the library open?',
        options: ['Only on weekends', 'During the daytime on weekdays', 'All night long', 'Only in the evening'],
        correctAnswerIndex: 1,
        explanation: 'Kutubxona ish kunlari soat 8:00 dan 18:00 gacha (kunduzi) ochiq bo\'ladi.',
        topic: 'Short Notice Reading'
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
        topic: 'Conditionals'
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
        topic: 'Intermediate Vocabulary'
    },
    {
        id: 'diag-en-b1-l1',
        language: 'en',
        level: 'B1',
        skill: 'listening',
        difficulty: 'medium',
        prompt: 'Audio Transcript: "The train on platform 4 will depart 15 minutes later than scheduled." What is the announcement about?',
        options: ['A ticket discount', 'A train delay', 'A platform change', 'A cancellation'],
        correctAnswerIndex: 1,
        explanation: '"15 minutes later than scheduled" poezd kechikishi (train delay) haqida bildirish.',
        topic: 'Public Announcements'
    },
    // B2
    {
        id: 'diag-en-b2-g1',
        language: 'en',
        level: 'B2',
        skill: 'grammar',
        difficulty: 'hard',
        prompt: 'Choose the inverted structure: "Seldom _______ such extraordinary academic dedication."',
        options: ['I have seen', 'have I seen', 'did I saw', 'I saw'],
        correctAnswerIndex: 1,
        explanation: 'Negative adverbial inversion: Seldom + auxiliary + subject + main verb ("have I seen").',
        topic: 'Grammatical Inversion'
    },
    {
        id: 'diag-en-b2-v1',
        language: 'en',
        level: 'B2',
        skill: 'vocabulary',
        difficulty: 'hard',
        prompt: 'Which academic word means "to examine in detail in order to discover meaning or essential features"?',
        options: ['Analyze', 'Procrastinate', 'Distort', 'Deteriorate'],
        correctAnswerIndex: 0,
        explanation: '"Analyze" — chuqur tahlil qilmoq (AWL sublist 1).',
        topic: 'Academic Word List'
    },
    {
        id: 'diag-en-b2-l1',
        language: 'en',
        level: 'B2',
        skill: 'listening',
        difficulty: 'hard',
        prompt: 'Audio Transcript: "While economic expansion remains resilient, impending regulatory bottlenecks could dampen consumer confidence." What is the speaker’s stance?',
        options: ['Unconditionally optimistic', 'Cautiously guarded about future headwinds', 'Extremely pessimistic', 'Indifferent'],
        correctAnswerIndex: 1,
        explanation: 'So\'zlovchi o\'sishni e\'tirof etsa-da, kelgusi to\'siqlardan ehtiyotkorona xavotir bildirmoqda.',
        topic: 'Analytical Discourse'
    },
    // C1
    {
        id: 'diag-en-c1-g1',
        language: 'en',
        level: 'C1',
        skill: 'grammar',
        difficulty: 'hard',
        prompt: 'Select the correct participle clause: "_______ by the conflicting research findings, the team conducted a meta-analysis."',
        options: ['Perplexing', 'Having perplexed', 'Perplexed', 'To perplex'],
        correctAnswerIndex: 2,
        explanation: 'Passive participle clause: "Perplexed by..." (hayratda qolgan/chalg\'igan holda).',
        topic: 'Participle Clauses'
    }
];

export const JAPANESE_DIAGNOSTIC_BANK: DiagnosticQuestion[] = [
    // N5
    {
        id: 'diag-ja-n5-k1',
        language: 'ja',
        level: 'N5',
        skill: 'kanji',
        difficulty: 'easy',
        prompt: '「日」 kanjisining to\'g\'ri o\'qilishi va ma\'nosi qaysi?',
        options: ['ひ (hi) — Quyosh / Kun', 'つき (tsuki) — Oy', 'みず (mizu) — Suv', 'き (ki) — Daraxt'],
        correctAnswerIndex: 0,
        explanation: '「日」 belgisi kun / quyosh ma\'nosini anglatadi.',
        topic: 'N5 Basic Kanji'
    },
    {
        id: 'diag-ja-n5-g1',
        language: 'ja',
        level: 'N5',
        skill: 'grammar',
        difficulty: 'easy',
        prompt: 'To\'g\'ri zarrachani tanlang: 「わたし _______ がくせいです。」',
        options: ['を (o)', 'は (wa)', 'に (ni)', 'で (de)'],
        correctAnswerIndex: 1,
        explanation: 'Mavzu (ega) zarrachasi: 「は」 (wa).',
        topic: 'N5 Topic Particle'
    },
    // N4
    {
        id: 'diag-ja-n4-g1',
        language: 'ja',
        level: 'N4',
        skill: 'grammar',
        difficulty: 'medium',
        prompt: 'Iltimos ifodasini tanlang: 「ここに名前を _______ ください。」',
        options: ['かいて (kaite)', 'かく (kaku)', 'かきました (kakimashita)', 'かかない (kakanai)'],
        correctAnswerIndex: 0,
        explanation: 'Te-form + kudasai: 「書いてください」 (Iltimos, yozing).',
        topic: 'Te-Form Requests'
    },
    {
        id: 'diag-ja-n4-v1',
        language: 'ja',
        level: 'N4',
        skill: 'vocabulary',
        difficulty: 'medium',
        prompt: '「案内する (あんないする)」 so\'zining ma\'nosi nima?',
        options: ['Bekor qilmoq', 'Yo\'l ko\'rsatmoq / tanishtirmoq', 'Sotib olmoq', 'Yetib kelmoq'],
        correctAnswerIndex: 1,
        explanation: '案内する — yo\'l ko\'rsatish, ekskursiya qilish, tanishtirish.',
        topic: 'N4 Daily Vocabulary'
    },
    // N3
    {
        id: 'diag-ja-n3-g1',
        language: 'ja',
        level: 'N3',
        skill: 'grammar',
        difficulty: 'medium',
        prompt: 'Qaror qabul qilish grammatikasini tanlang: 「来月から日本語を勉強する _______ にしました。」',
        options: ['こと (koto)', 'もの (mono)', 'わけ (wake)', 'ところ (tokoro)'],
        correctAnswerIndex: 0,
        explanation: '〜ことにする — ... qilishga shaxsiy qaror qabul qilmoq.',
        topic: 'N3 Decision Grammar'
    },
    {
        id: 'diag-ja-n3-r1',
        language: 'ja',
        level: 'N3',
        skill: 'reading',
        difficulty: 'hard',
        prompt: '読解: 「台風の影響により、本日の新幹線は全線で運転を見合わせます。」 Ushbu xabar nimani bildiradi?',
        options: ['Poyezdlar jadvaldan ertaroq yetib keladi', 'Tayfun tufayli Shinkansen harakati to\'xtatiladi', 'Chiptalar narxi arzonlashdi', 'Poyezd tezligi oshirildi'],
        correctAnswerIndex: 1,
        explanation: '「運転を見合わせます」 harakatni vaqtincha to\'xtatishni bildiradi.',
        topic: 'N3 Dokkai Reading'
    },
    {
        id: 'diag-ja-n3-l1',
        language: 'ja',
        level: 'N3',
        skill: 'listening',
        difficulty: 'hard',
        prompt: 'Chokkai suhbat: 「明日の会議、10時からに変更になったって本当？」「いや、予定通り9時からだよ。」 Uchrashuv soat nechada bo\'ladi?',
        options: ['Soat 10:00 da', 'Soat 9:00 da', 'Kechiktirildi', 'Bekor qilindi'],
        correctAnswerIndex: 1,
        explanation: 'Ikkinchi shaxs uchrashuv rejadagidek 9:00 da qolganini tasdiqlamoqda.',
        topic: 'N3 Chokkai Listening'
    },
    // N2
    {
        id: 'diag-ja-n2-g1',
        language: 'ja',
        level: 'N2',
        skill: 'grammar',
        difficulty: 'hard',
        prompt: 'Rasmiy Keigo ifodasi: 「社長はもう _______。」',
        options: ['お帰りになりました (o-kaeri ni narimashita)', '帰らせました (kaerasemashita)', '帰りたいです (kaeritai desu)', '帰るはずです (kaeru hazu desu)'],
        correctAnswerIndex: 0,
        explanation: 'Sonkeigo (hurmat shakli): お + V-masu o\'zagi + になる.',
        topic: 'N2 Honorific Keigo'
    },
    // N1
    {
        id: 'diag-ja-n1-g1',
        language: 'ja',
        level: 'N1',
        skill: 'grammar',
        difficulty: 'hard',
        prompt: '「彼の実力をもってすれば、合格は _______。」 Bo\'sh joyga eng mos N1 grammatikasini qo\'ying:',
        options: ['疑うべくもない (utagau beku mo nai)', '疑うしかない (utagau shika nai)', '疑いかねない (utagai kanenai)', '疑うはずがない (utagau hazu ga nai)'],
        correctAnswerIndex: 0,
        explanation: '〜べくもない — "... qilishga shubha ham yo\'q / imkonsiz" ma\'nosidagi yuqori uslubiy N1 qoidasi.',
        topic: 'N1 Advanced Grammar'
    }
];

export const DiagnosticService = {
    /**
     * Get instant placement result for total beginner learners.
     */
    getZeroLevelResult(userId: string, language: SupportedLanguage): DiagnosticResult {
        const isJa = language === 'ja';
        const startLevel = isJa ? 'N5' : 'A1';
        const firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';

        const skills: Partial<Record<MasterySkill, DiagnosticSkillScore>> = {
            grammar: { skill: 'grammar', score: 20, confidence: 95, estimatedLevel: startLevel, totalQuestions: 0, correctCount: 0, status: 'neutral' },
            vocabulary: { skill: 'vocabulary', score: 20, confidence: 95, estimatedLevel: startLevel, totalQuestions: 0, correctCount: 0, status: 'neutral' },
            reading: { skill: 'reading', score: 20, confidence: 95, estimatedLevel: startLevel, totalQuestions: 0, correctCount: 0, status: 'neutral' },
            listening: { skill: 'listening', score: 20, confidence: 95, estimatedLevel: startLevel, totalQuestions: 0, correctCount: 0, status: 'neutral' }
        };

        if (isJa) {
            skills.kanji = { skill: 'kanji', score: 10, confidence: 95, estimatedLevel: 'N5', totalQuestions: 0, correctCount: 0, status: 'neutral' };
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
            strengths: isJa ? ['Kana / Alifbo o\'rganishga tayyorgarlik'] : ['Boshlang\'ich ta\'limga tayyorgarlik'],
            weaknesses: [],
            recommendedFirstLessonId: firstLessonId,
            completedAt: new Date().toISOString()
        };

        this.saveDiagnosticResult(result);
        return result;
    },

    /**
     * Select questions dynamically tailored to mode and target language.
     */
    getQuestionsForSession(language: SupportedLanguage, mode: DiagnosticMode = 'standard'): DiagnosticQuestion[] {
        const bank = language === 'ja' ? JAPANESE_DIAGNOSTIC_BANK : ENGLISH_DIAGNOSTIC_BANK;
        const targetCount = mode === 'quick' ? 6 : mode === 'standard' ? 10 : bank.length;
        return bank.slice(0, targetCount);
    },

    /**
     * Evaluates diagnostic answers and generates full evidence-based diagnostic profile.
     */
    evaluateDiagnosticAnswers(
        userId: string,
        language: SupportedLanguage,
        mode: DiagnosticMode,
        claimedLevel: string,
        answers: { questionId: string; selectedOptionIndex: number; isCorrect: boolean }[]
    ): DiagnosticResult {
        const bank = language === 'ja' ? JAPANESE_DIAGNOSTIC_BANK : ENGLISH_DIAGNOSTIC_BANK;
        const isJa = language === 'ja';

        const skillStats: Record<string, { total: number; correct: number; levels: string[] }> = {};

        let totalCorrect = 0;

        for (const ans of answers) {
            const q = bank.find(item => item.id === ans.questionId);
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

        // Evaluate each skill score
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

            const status = accuracy >= 75 ? 'strength' : accuracy < 60 ? 'weakness' : 'neutral';

            evaluatedSkills[skill] = {
                skill,
                score: accuracy,
                confidence,
                estimatedLevel: estLevel,
                totalQuestions: stat.total,
                correctCount: stat.correct,
                status
            };

            if (status === 'strength') {
                strengths.push(`${skill.toUpperCase()} (${accuracy}%)`);
            } else if (status === 'weakness') {
                weaknesses.push(`${skill.toUpperCase()} (${accuracy}%)`);
                // Emit learning signal for immediate orchestration awareness
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
                    attemptCount: 1
                });
            }
        }

        const overallScore = answers.length > 0 ? Math.round((totalCorrect / answers.length) * 100) : 50;
        const overallConfidence = Math.min(95, Math.max(50, answers.length * 10));

        // Determine recommendedStartLevel
        let recommendedLevel = isJa ? 'N5' : 'A1';
        let firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';

        if (isJa) {
            if (overallScore >= 80) {
                recommendedLevel = 'N3';
                firstLessonId = 'ja-n3-u1-l1';
            } else if (overallScore >= 55) {
                recommendedLevel = 'N4';
                firstLessonId = 'ja-n4-u1-l1';
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
            completedAt: new Date().toISOString()
        };

        this.saveDiagnosticResult(result);
        return result;
    },

    /**
     * Session Storage & Resume methods
     */
    saveSession(session: DiagnosticSessionState): void {
        const key = `${DIAGNOSTIC_SESSION_PREFIX}${session.userId}_${session.language}`;
        try {
            localStorage.setItem(key, JSON.stringify(session));
        } catch (e) {
            console.warn('[DiagnosticService] Failed to save session:', e);
        }
    },

    getSavedSession(userId: string, language: SupportedLanguage): DiagnosticSessionState | null {
        const key = `${DIAGNOSTIC_SESSION_PREFIX}${userId || 'guest'}_${language}`;
        try {
            const raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('[DiagnosticService] Failed to load session:', e);
        }
        return null;
    },

    clearSession(userId: string, language: SupportedLanguage): void {
        const key = `${DIAGNOSTIC_SESSION_PREFIX}${userId || 'guest'}_${language}`;
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('[DiagnosticService] Failed to clear session:', e);
        }
    },

    saveDiagnosticResult(result: DiagnosticResult): void {
        const key = `${DIAGNOSTIC_RESULT_PREFIX}${result.userId || 'guest'}_${result.language}`;
        try {
            localStorage.setItem(key, JSON.stringify(result));
        } catch (e) {
            console.warn('[DiagnosticService] Failed to save result:', e);
        }
    },

    getLatestDiagnosticResult(userId: string, language: SupportedLanguage): DiagnosticResult | null {
        const key = `${DIAGNOSTIC_RESULT_PREFIX}${userId || 'guest'}_${language}`;
        try {
            const raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('[DiagnosticService] Failed to load result:', e);
        }
        return null;
    }
};
