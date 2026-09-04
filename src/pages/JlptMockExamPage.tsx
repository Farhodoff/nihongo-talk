import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Award, Volume2, BookOpen, CheckCircle2, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HistoryService } from '../services/HistoryService';
import {
  evaluateMockExamSession,
  ExamDiagnosticReport,
  ExamQuestionAnswer,
} from '../utils/ai/examEvaluator';
import { JlptExamResultCard } from '../components/jlpt/JlptExamResultCard';
import { MasteryEngine } from '../services/MasteryEngine';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';

interface ExamQuestion {
  id: number;
  section: 'knowledge' | 'reading' | 'listening';
  questionText: string;
  passageText?: string; // only for reading
  audioUrl?: string; // only for listening
  script?: string; // only for listening
  options: string[];
  correctAnswer: number;
  explanationUzbek: string;
}

const MOCK_EXAM_QUESTIONS: { [key: string]: ExamQuestion[] } = {
  N5: [
    // Language Knowledge
    {
      id: 1,
      section: 'knowledge',
      questionText: 'きょうは 水曜日（すいようび）です。あしたは（　）曜日です。',
      options: ['火', '木', '金', '土'],
      correctAnswer: 1,
      explanationUzbek: "Bugun Chorshanba (水曜日). Ertaga esa Payshanba (木曜日) bo'ladi.",
    },
    {
      id: 2,
      section: 'knowledge',
      questionText: '教室（きょうしつ）の なかに つくえ（　）いすが あります。',
      options: ['と', 'が', 'を', 'も'],
      correctAnswer: 0,
      explanationUzbek:
        "Narsalarni sanashda 'va' ma'nosida 'と' predlogi keladi: tsukue to isu (stol va stul).",
    },
    // Reading
    {
      id: 3,
      section: 'reading',
      passageText:
        'リーさんは 毎朝（まいあさ）７時に おきます。朝ご飯を 食べてから、８時に 自転車で 学校へ 行きます。学校は ８時半に 始まります。',
      questionText: 'リーさんは 何で 学校へ 行きますか？',
      options: [
        '歩いて (piyoda)',
        'バスで (avtobusda)',
        '自転車で (velosipedda)',
        '電車で (poezdda)',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda aniq keltirilgan: 'jitensha de gakkou e ikimasu' (velosipedda maktabga boradi).",
    },
    // Listening
    {
      id: 4,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        '女の人が話しています。テーブルの上に何を置きますか？\n女：食事の準備をしましょう。お皿を並べて、その右側にスプーンを置いてください。',
      questionText: "お皿の右側に何を置きますか？ (Likopchaning o'ng tomoniga nima qo'yiladi?)",
      options: ['フォーク (vilka)', 'ナイフ (pichoq)', 'スプーン (qoshiq)', "はし (cho'p)"],
      correctAnswer: 2,
      explanationUzbek:
        "Ayol kishi: 'migi gawa ni supuun o oite kudasai' (o'ng tomonga qoshiqni qo'ying) deb buyuradi.",
    },
  ],
};

export const JlptMockExamPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useStudyData();
  const { language } = useLanguage();
  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
  const [step, setStep] = useState<'intro' | 'exam' | 'report'>('intro');

  // Active Section State
  const [activeSection, setActiveSection] = useState<'knowledge' | 'reading' | 'listening'>(
    'knowledge',
  );
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});

  // Timer & Status
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Audio Playback
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // AI Diagnostic Report State
  const [diagnosticReport, setDiagnosticReport] = useState<ExamDiagnosticReport | null>(null);
  const [mistakes, setMistakes] = useState<ExamQuestionAnswer[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Questions filtering
  const levelQuestions = MOCK_EXAM_QUESTIONS[level] || MOCK_EXAM_QUESTIONS['N5'];
  const knowledgeQuestions = levelQuestions.filter((q) => q.section === 'knowledge');
  const readingQuestions = levelQuestions.filter((q) => q.section === 'reading');
  const listeningQuestions = levelQuestions.filter((q) => q.section === 'listening');

  // Timer Effect
  useEffect(() => {
    let timer: any;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      handleSubmitExam();
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setUserAnswers({});
    setMistakes([]);
    setStep('exam');
    setActiveSection('knowledge');
    setIsTimerRunning(true);
    setTimeLeft(3000); // 50 mins for mock exam
  };

  const handleOptionSelect = (qId: number, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  // Listening Audio
  const handlePlayAudio = (url: string) => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  };

  const handleSubmitExam = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setIsTimerRunning(false);
    setStep('report');
    setIsAnalyzing(true);

    const durSecs = Math.max(10, 3000 - timeLeft);

    const questionAnswers: ExamQuestionAnswer[] = levelQuestions.map((q) => {
      const userIdx = userAnswers[q.id];
      const isCorr = userIdx === q.correctAnswer;
      return {
        questionText: q.questionText,
        section: q.section,
        userAnswer: userIdx !== undefined ? q.options[userIdx] : 'Javob berilmagan',
        correctAnswer: q.options[q.correctAnswer],
        isCorrect: isCorr,
        explanationUzbek: q.explanationUzbek,
      };
    });

    // Track wrong questions for flashcard export
    setMistakes(questionAnswers.filter((q) => !q.isCorrect));

    try {
      const report = await evaluateMockExamSession(`JLPT ${level}`, questionAnswers, durSecs);
      setDiagnosticReport(report);

      let correctCount = questionAnswers.filter((q) => q.isCorrect).length;
      const totalQ = levelQuestions.length;
      const finalScorePoints = Math.round((correctCount / totalQ) * 180);

      await HistoryService.saveMockExam({
        examType: 'jlpt',
        level: level,
        score: finalScorePoints,
        totalQuestions: totalQ,
      });

      // Register evidence for JLPT Level Progression
      const activeUserId = user?.id || 'guest';
      MasteryEngine.recordEvidence(activeUserId, 'ja', {
        id: `jlpt_mock_${level}_${Date.now()}`,
        skill: 'reading',
        score: Math.min(100, Math.round((finalScorePoints / 180) * 100)),
        timestamp: new Date().toISOString(),
        details: `JLPT ${level} Mock Simulation score: ${finalScorePoints}/180 (${correctCount}/${totalQ} to'g'ri javob)`,
        type: 'performance',
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 pb-16 md:p-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <button
          onClick={() => {
            if (audioRef.current) audioRef.current.pause();
            navigate('/jlpt');
          }}
          className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-extrabold text-rose-600 dark:text-rose-400">
          🎌{' '}
          {language === 'ja'
            ? 'JLPT こうしき もぎしけん'
            : 'JLPT Official Mock Simulator (模擬試験)'}
        </span>
      </div>

      {/* STEP 1: INTRO */}
      {step === 'intro' && (
        <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 shadow-md">
            <Award size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground">
              {language === 'ja' ? 'JLPT ほんばん もぎしけん' : 'JLPT Full Simulation Exam'}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {language === 'ja'
                ? 'げんごちしき（たんご・ぶんぽう）、どっかい、ちょうかいの ほんばん もぎしけん。180てん まんてん。'
                : "Lug'at/Grammatika (言語知識), O'qish (読解) va Tinglash (聴解) bo'limlaridan iborat rasmiy imtihon simulyatori. 180 ballik reyting tizimi."}
            </p>
          </div>

          {/* Level Selector */}
          <div className="grid grid-cols-5 gap-2">
            {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`rounded-xl border py-3 text-xs font-black transition-all ${
                  level === lvl
                    ? 'border-rose-500 bg-rose-500 text-white shadow-md shadow-rose-500/20'
                    : 'border-border bg-muted/40 text-muted-foreground hover:bg-muted'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <Button
            onClick={handleStartExam}
            className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 hover:bg-rose-700"
          >
            {language === 'ja' ? 'もぎしけんを スタート 🚀' : 'Mock Imtihonni Boshlash 🚀'}
          </Button>
        </div>
      )}

      {/* STEP 2: ACTIVE EXAM */}
      {step === 'exam' && (
        <div className="space-y-6">
          {/* Top Stats */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm">
            <span className="text-xs font-black uppercase text-rose-500">
              JLPT {level} Full Simulation Exam
            </span>
            <div className="flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 font-mono text-sm font-extrabold text-rose-600 dark:text-rose-400">
              <Clock size={16} />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Section Switcher Tabs */}
          <div className="flex border-b border-border text-xs">
            <button
              onClick={() => setActiveSection('knowledge')}
              className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 py-3 font-bold transition-all ${
                activeSection === 'knowledge'
                  ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                  : 'border-transparent text-muted-foreground'
              }`}
            >
              <FileText size={14} />
              言語知識 (Language Knowledge)
            </button>
            <button
              onClick={() => setActiveSection('reading')}
              className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 py-3 font-bold transition-all ${
                activeSection === 'reading'
                  ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                  : 'border-transparent text-muted-foreground'
              }`}
            >
              <BookOpen size={14} />
              読解 (Reading)
            </button>
            <button
              onClick={() => setActiveSection('listening')}
              className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 py-3 font-bold transition-all ${
                activeSection === 'listening'
                  ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                  : 'border-transparent text-muted-foreground'
              }`}
            >
              <Volume2 size={14} />
              聴解 (Listening)
            </button>
          </div>

          {/* Questions area according to active section */}
          <div className="space-y-4">
            {activeSection === 'knowledge' &&
              knowledgeQuestions.map((q) => (
                <div
                  key={q.id}
                  className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h4 className="font-serif text-xs font-black text-foreground">
                    Q{q.id}. {q.questionText}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, idx) => {
                      const isSelected = userAnswers[q.id] === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(q.id, idx)}
                          className={`rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                            isSelected
                              ? 'border-rose-500 bg-rose-500/20 text-rose-600 dark:text-rose-400'
                              : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

            {activeSection === 'reading' &&
              readingQuestions.map((q) => (
                <div key={q.id} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <h4 className="mb-2 text-xs font-extrabold text-foreground">
                      読解 (Reading Passage)
                    </h4>
                    <p className="whitespace-pre-wrap font-serif text-xs leading-relaxed text-muted-foreground">
                      {q.passageText}
                    </p>
                  </div>
                  <div className="h-fit space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <h4 className="font-serif text-xs font-black text-foreground">
                      Q{q.id}. {q.questionText}
                    </h4>
                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        const isSelected = userAnswers[q.id] === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(q.id, idx)}
                            className={`flex w-full items-center justify-between rounded-xl border p-3 text-left text-xs font-bold transition-all ${
                              isSelected
                                ? 'border-rose-500 bg-rose-500/20 text-rose-600 dark:text-rose-400'
                                : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                            }`}
                          >
                            <span>{opt}</span>
                            {isSelected && <CheckCircle2 size={15} className="text-rose-500" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

            {activeSection === 'listening' &&
              listeningQuestions.map((q) => (
                <div
                  key={q.id}
                  className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <h4 className="text-xs font-black text-foreground">
                      聴解 (Listening Question)
                    </h4>
                    <button
                      onClick={() => q.audioUrl && handlePlayAudio(q.audioUrl)}
                      className="flex items-center gap-1.5 rounded-xl bg-rose-500 px-3 py-1.5 text-xs font-extrabold text-white shadow"
                    >
                      <Volume2 size={15} /> {isPlaying ? "Audio to'xtatish" : 'Audio eshitish'} 🎧
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-xs font-bold text-foreground">
                      {q.questionText}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((opt, idx) => {
                        const isSelected = userAnswers[q.id] === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(q.id, idx)}
                            className={`rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                              isSelected
                                ? 'border-rose-500 bg-rose-500/20 text-rose-600 dark:text-rose-400'
                                : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Submit Actions */}
          <div className="pt-6">
            <Button
              onClick={handleSubmitExam}
              className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg hover:bg-rose-700"
            >
              Imtihonni Yakunlash & Natijani Baholash 🎯
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: REPORT */}
      {step === 'report' &&
        (isAnalyzing ? (
          <div className="mx-auto max-w-xl space-y-4 rounded-3xl border border-border bg-card p-8 py-20 text-center shadow-xl">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-rose-500 border-t-transparent shadow-md" />
            <h3 className="text-base font-extrabold text-foreground">
              🤖 AI Coach imtihon natijangizni va xatolarni tahlil qilmoqda...
            </h3>
            <p className="text-xs text-muted-foreground">
              Xatolaringiz o'rganilmoqda va tavsiyalar tayyorlanmoqda.
            </p>
          </div>
        ) : diagnosticReport ? (
          <JlptExamResultCard
            report={diagnosticReport}
            level={level}
            mistakes={mistakes}
            onRetry={() => setStep('intro')}
            onBackToHub={() => navigate('/jlpt')}
          />
        ) : null)}
    </div>
  );
};

export default JlptMockExamPage;
