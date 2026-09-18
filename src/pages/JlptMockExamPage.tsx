import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Award,
  Volume2,
  BookOpen,
  CheckCircle2,
  FileText,
  Database,
  Loader2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HistoryService } from '../services/HistoryService';
import {
  evaluateMockExamSession,
  ExamDiagnosticReport,
  ExamQuestionAnswer,
} from '../utils/ai/examEvaluator';
import { JlptExamResultCard } from '../components/jlpt/JlptExamResultCard';
import { MasteryEngine } from '../services/MasteryEngine';
import { calculateJlptScore } from '../utils/jlptScoring';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { ExamService, ExamListItem, NormalizedExam } from '../services/ExamService';
import { JLPT_MOCK_EXAM_DATA, ExamQuestion } from '../data/jlptMockExamData';

export const JlptMockExamPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlLevel = searchParams.get('level')?.toUpperCase();
  const initialLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' =
    urlLevel && ['N5', 'N4', 'N3', 'N2', 'N1'].includes(urlLevel) ? (urlLevel as any) : 'N5';

  const { user, awardXP } = useStudyData();
  const { language } = useLanguage();
  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(initialLevel);
  const [step, setStep] = useState<'intro' | 'exam' | 'report'>('intro');

  // Available Exams from Supabase DB
  const [availableExams, setAvailableExams] = useState<ExamListItem[]>([]);
  const [selectedExamId, setSelectedExamId] = useState<string>('');
  const [loadingExams, setLoadingExams] = useState<boolean>(true);
  const [activeExam, setActiveExam] = useState<NormalizedExam | null>(null);
  const [isStartingExam, setIsStartingExam] = useState<boolean>(false);

  useEffect(() => {
    if (urlLevel && ['N5', 'N4', 'N3', 'N2', 'N1'].includes(urlLevel)) {
      setLevel(urlLevel as any);
    }
  }, [urlLevel]);

  // Fetch published exams for current level from Supabase
  useEffect(() => {
    let isMounted = true;
    const fetchExams = async () => {
      setLoadingExams(true);
      try {
        const list = await ExamService.getPublishedJlptExams(level);
        if (isMounted) {
          setAvailableExams(list);
          const urlExamId = searchParams.get('examId');
          if (urlExamId && list.some((e) => e.id === urlExamId)) {
            setSelectedExamId(urlExamId);
          } else if (list.length > 0) {
            setSelectedExamId(list[0].id);
          }
        }
      } catch (err) {
        console.warn('JlptMockExamPage: Error fetching exams:', err);
      } finally {
        if (isMounted) setLoadingExams(false);
      }
    };
    fetchExams();
    return () => {
      isMounted = false;
    };
  }, [level, searchParams]);

  // Active Section State
  const [activeSection, setActiveSection] = useState<'knowledge' | 'reading' | 'listening'>(
    'knowledge',
  );
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});

  // Timer & Status
  const [timeLeft, setTimeLeft] = useState(3000); // default 50 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Audio Playback
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // AI Diagnostic Report State
  const [diagnosticReport, setDiagnosticReport] = useState<ExamDiagnosticReport | null>(null);
  const [mistakes, setMistakes] = useState<ExamQuestionAnswer[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Questions from active loaded exam (or fallback)
  const levelQuestions: ExamQuestion[] =
    activeExam?.questions || JLPT_MOCK_EXAM_DATA[level] || JLPT_MOCK_EXAM_DATA['N5'];
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

  const handleStartExam = async () => {
    setIsStartingExam(true);
    try {
      const examData = await ExamService.getExamWithQuestions(
        selectedExamId || `builtin_${level.toLowerCase()}`,
        level,
      );
      setActiveExam(examData);
      setUserAnswers({});
      setMistakes([]);
      setStep('exam');
      setActiveSection('knowledge');
      setIsTimerRunning(true);
      setTimeLeft(examData.timeLimitSeconds);
    } catch (err) {
      console.error('Failed to load exam:', err);
    } finally {
      setIsStartingExam(false);
    }
  };

  const handleOptionSelect = (qId: number, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  // Listening Audio with Web Speech TTS Fallback
  const handlePlayAudio = (url?: string, script?: string) => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    const playTtsFallback = () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && script) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(script);
        utt.lang = 'ja-JP';
        utt.rate = 0.9;
        utt.onend = () => setIsPlaying(false);
        utt.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utt);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    if (url) {
      try {
        const audio = new Audio(url);
        audioRef.current = audio;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Audio play failed, falling back to TTS:', err);
            playTtsFallback();
          });
        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => {
          console.warn('Audio onerror, falling back to TTS');
          playTtsFallback();
        };
      } catch {
        playTtsFallback();
      }
    } else {
      playTtsFallback();
    }
  };

  const handleSubmitExam = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
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
        audioUrl: q.audioUrl,
        script: q.script,
      };
    });

    // Track wrong questions for flashcard export
    setMistakes(questionAnswers.filter((q) => !q.isCorrect));

    // Calculate official JLPT score report with sectional cutoffs
    const jlptScoreReport = calculateJlptScore(level, levelQuestions, userAnswers);

    try {
      const report = await evaluateMockExamSession(
        `JLPT ${level}`,
        questionAnswers,
        durSecs,
        jlptScoreReport,
      );
      setDiagnosticReport(report);

      await HistoryService.saveMockExam({
        examType: 'jlpt',
        level: level,
        score: jlptScoreReport.totalScore,
        totalQuestions: levelQuestions.length,
      });

      // Award XP for completing a full mock exam
      if (awardXP) {
        awardXP(100).catch(() => {});
      }

      // Register evidence for JLPT Level Progression
      const activeUserId = user?.id || 'guest';
      MasteryEngine.recordEvidence(activeUserId, 'ja', {
        id: `jlpt_mock_${level}_${Date.now()}`,
        skill:
          jlptScoreReport.weakestSection === 'listening'
            ? 'listening'
            : jlptScoreReport.weakestSection === 'reading'
              ? 'reading'
              : 'grammar',
        score: Math.min(100, Math.round((jlptScoreReport.totalScore / 180) * 100)),
        timestamp: new Date().toISOString(),
        details: `JLPT ${level} Official Mock: ${jlptScoreReport.totalScore}/180 ball (O'tish: ${jlptScoreReport.passMark}) - ${jlptScoreReport.passed ? 'PASSED (GOUKAKU)' : 'FAILED (FUGOUKAKU)'}. Zaif bo'lim: ${jlptScoreReport.weakestSection}`,
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

          {/* Available Mock Exams Selector */}
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">
                {language === 'ja' ? 'もぎテストを えらぶ' : 'Mavjud Imtihonni Tanlang:'}
              </span>
              <span className="text-[11px] font-medium text-muted-foreground">
                {availableExams.length} ta test mavjud
              </span>
            </div>

            {loadingExams ? (
              <div className="flex items-center justify-center gap-2 py-6 text-xs text-muted-foreground">
                <Loader2 size={16} className="animate-spin text-rose-500" />
                <span>Imtihonlar bazadan yuklanmoqda...</span>
              </div>
            ) : (
              <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
                {availableExams.map((ex) => {
                  const isSelected = selectedExamId === ex.id;
                  return (
                    <div
                      key={ex.id}
                      onClick={() => setSelectedExamId(ex.id)}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                        isSelected
                          ? 'border-rose-500 bg-rose-500/10 shadow-md ring-1 ring-rose-500/30'
                          : 'border-border bg-muted/20 hover:border-border hover:bg-muted/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-foreground">{ex.title}</span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                              <Database size={10} />{' '}
                              {ex.id.startsWith('builtin_') ? 'Oflayn Baza' : 'Rasmiy DB'}
                            </span>
                          </div>
                          {ex.description && (
                            <p className="line-clamp-1 text-xs text-muted-foreground">
                              {ex.description}
                            </p>
                          )}
                        </div>
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isSelected ? 'border-rose-500 bg-rose-500 text-white' : 'border-border'
                          }`}
                        >
                          {isSelected && <CheckCircle2 size={13} />}
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText size={12} className="text-rose-500" /> 3 bo'lim (Goi, Dokkai,
                          Choukai)
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-rose-500" /> 180 ballik rasmiy format
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Button
            disabled={isStartingExam}
            onClick={handleStartExam}
            className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 hover:bg-rose-700 disabled:opacity-50"
          >
            {isStartingExam ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={16} className="animate-spin" /> Imtihon tayyorlanmoqda...
              </span>
            ) : language === 'ja' ? (
              'もぎしけんを スタート 🚀'
            ) : (
              'Mock Imtihonni Boshlash 🚀'
            )}
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
                      onClick={() => handlePlayAudio(q.audioUrl, q.script)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-rose-500 px-3 py-1.5 text-xs font-extrabold text-white shadow transition-all hover:bg-rose-600"
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
