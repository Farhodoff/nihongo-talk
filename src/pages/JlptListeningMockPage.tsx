import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Volume2,
  CheckCircle2,
  Award,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { JLPT_LISTENING_QUESTIONS, JlptListeningQuestion } from '../data/jlpt/listening_data';
import { HistoryService } from '../services/HistoryService';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';

export const JlptListeningMockPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { awardXP, addSession } = useStudyData();
  const { language } = useLanguage();

  const urlLevel = (
    searchParams.get('level') ||
    (location.state as any)?.level ||
    (location.state as any)?.personalPlanTask?.level
  )?.toUpperCase();
  const initialLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = ['N5', 'N4', 'N3', 'N2', 'N1'].includes(
    urlLevel,
  )
    ? (urlLevel as any)
    : 'N5';

  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(initialLevel);
  const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

  useEffect(() => {
    if (urlLevel && ['N5', 'N4', 'N3', 'N2', 'N1'].includes(urlLevel)) {
      setLevel(urlLevel as any);
    }
  }, [urlLevel]);

  // Timer & Status
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Questions State
  const [activeQuestions, setActiveQuestions] = useState<JlptListeningQuestion[]>([]);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});
  const [score, setScore] = useState(0);

  // Audio Playback
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // TTS Fallback
  const [isUsingTts, setIsUsingTts] = useState(false);

  // Timer Effect
  useEffect(() => {
    let timer: any;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      handleSubmitTest();
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- Start JLPT Listening Test ---
  const handleStartTest = () => {
    let filtered = JLPT_LISTENING_QUESTIONS.filter((q) => q.level === level);
    if (filtered.length === 0) {
      filtered = JLPT_LISTENING_QUESTIONS.filter((q) => q.level === 'N5');
    }

    stopAudio();
    setActiveQuestions(filtered);
    setCurrentQIdx(0);
    setUserAnswers({});
    setStep('test');
    setIsTimerRunning(true);
    setTimeLeft(1800);
  };

  // --- Audio Logic ---
  const handlePlayPause = () => {
    const activeQ = activeQuestions[currentQIdx];
    if (!activeQ) return;

    if (isPlaying) {
      stopAudio();
    } else {
      playAudio(activeQ);
    }
  };

  const playAudio = (q: JlptListeningQuestion) => {
    stopAudio();
    setIsPlaying(true);

    if (q.audioUrl) {
      const audio = new Audio(q.audioUrl);
      audio.playbackRate = playbackSpeed;
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
      };

      audio.ontimeupdate = () => {
        setAudioProgress(audio.currentTime);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setAudioProgress(0);
      };

      audio.onerror = () => {
        console.warn('Audio file failed to load, falling back to Web Speech TTS');
        setIsUsingTts(true);
        playTtsFallback(q.script);
      };

      audio.play().catch((e) => {
        console.warn('Audio play rejected, using TTS:', e);
        setIsUsingTts(true);
        playTtsFallback(q.script);
      });
    } else {
      setIsUsingTts(true);
      playTtsFallback(q.script);
    }
  };

  const playTtsFallback = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = playbackSpeed;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    window.speechSynthesis.cancel();
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setAudioProgress(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const skipTime = (amount: number) => {
    if (audioRef.current) {
      let next = audioRef.current.currentTime + amount;
      if (next < 0) next = 0;
      if (next > audioRef.current.duration) next = audioRef.current.duration;
      audioRef.current.currentTime = next;
      setAudioProgress(next);
    }
  };

  const handleOptionSelect = (optionIdx: number) => {
    const activeQ = activeQuestions[currentQIdx];
    if (!activeQ) return;
    setUserAnswers((prev) => ({ ...prev, [activeQ.id]: optionIdx }));
  };

  const handleNext = () => {
    stopAudio();
    setIsUsingTts(false);
    setAudioDuration(0);
    setAudioProgress(0);

    if (currentQIdx < activeQuestions.length - 1) {
      setCurrentQIdx((prev) => prev + 1);
    } else {
      handleSubmitTest();
    }
  };

  const handleSubmitTest = async () => {
    stopAudio();
    setIsTimerRunning(false);

    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setStep('report');

    // Award XP
    try {
      if (awardXP && correctCount > 0) {
        await awardXP(correctCount * 25);
      }
    } catch (e) {}

    // Add study session to public.study_sessions
    if (addSession) {
      try {
        await addSession({
          duration: 20,
          type: 'focus',
          completed: true,
          startTime: new Date().toISOString(),
        });
      } catch (e) {}
    }

    // Save mock exam to history
    try {
      await HistoryService.saveMockExam({
        examType: 'jlpt',
        level: level,
        score: correctCount,
        totalQuestions: activeQuestions.length,
        bandScore: Math.round((correctCount / (activeQuestions.length || 1)) * 180),
      });
    } catch (e) {
      console.error('Failed to save JLPT score:', e);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 pb-16 md:p-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <button
          onClick={() => {
            stopAudio();
            navigate('/jlpt');
          }}
          className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-extrabold text-rose-600 dark:text-rose-400">
          🎌{' '}
          {language === 'ja'
            ? 'JLPT ちょうかい（きく）れんしゅう'
            : 'JLPT Listening Practice (聴解)'}
        </span>
      </div>

      {/* STEP 1: INTRO LEVEL SELECTION */}
      {step === 'intro' && (
        <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 shadow-md">
            <Volume2 size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground">
              {language === 'ja'
                ? 'JLPT ちょうかい（きく）れんしゅう'
                : 'JLPT Choukail (聴解) Practice'}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {language === 'ja'
                ? 'N5からN1までの ちょうかい れんしゅうもんだい。'
                : "N5 dan N1 gacha bo'lgan darajalar bo'yicha Yapon tili tinglab tushunish mashqlari."}
            </p>
          </div>

          {/* Level Buttons Grid */}
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
            onClick={handleStartTest}
            className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 hover:bg-rose-700"
          >
            {language === 'ja' ? 'れんしゅうを スタート 🎌' : 'Imtihonni Boshlash 🎌'}
          </Button>
        </div>
      )}

      {/* STEP 2: ACTIVE TEST */}
      {step === 'test' && activeQuestions[currentQIdx] && (
        <div className="space-y-6">
          {/* Progress Bar & Timer */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm">
            <span className="text-xs font-black text-rose-500">
              {level} tinglash testi · Savol {currentQIdx + 1} / {activeQuestions.length}
            </span>
            <div className="flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 font-mono text-sm font-extrabold text-rose-600 dark:text-rose-400">
              <Clock size={16} />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* LEFT: Audio Player & Instruction */}
            <div className="h-fit space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="border-b border-border pb-3">
                <h3 className="text-sm font-extrabold text-foreground">
                  {activeQuestions[currentQIdx].type === 'task' && '課題理解 (Vazifa tushunish)'}
                  {activeQuestions[currentQIdx].type === 'point' &&
                    'ポイント理解 (Kalit nuqtalarni tushunish)'}
                  {activeQuestions[currentQIdx].type === 'quick' &&
                    '即時応答 (Tezkor javob qaytarish)'}
                </h3>
              </div>

              <div className="space-y-3 rounded-2xl border border-rose-200/60 bg-rose-50 p-4 text-center dark:border-rose-900/40 dark:bg-rose-950/20">
                <div className="flex justify-center">
                  <div className="animate-pulse rounded-full bg-rose-500/10 p-4 text-rose-600 dark:text-rose-400">
                    <Volume2 size={32} />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-foreground">
                  {isUsingTts ? 'TTS Audio Track (AI Ovoz)' : 'Listening Audio Track'}
                </h4>
              </div>

              {/* Audio Progress Slider */}
              <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span>{formatTime(Math.round(audioProgress))}</span>
                  <input
                    type="range"
                    min={0}
                    max={audioDuration || 60}
                    value={audioProgress}
                    onChange={handleSeek}
                    className="flex-1 accent-rose-600"
                  />
                  <span>{formatTime(Math.round(audioDuration || 60))}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => skipTime(-10)} className="rounded-xl p-2 hover:bg-muted">
                      <RotateCcw size={16} />
                    </button>
                    <Button
                      onClick={handlePlayPause}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow hover:bg-rose-700"
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                    </Button>
                    <button onClick={() => skipTime(10)} className="rounded-xl p-2 hover:bg-muted">
                      <Play size={16} className="rotate-180" />
                    </button>
                  </div>

                  {/* Speed */}
                  <div className="flex gap-1.5 text-[10px] font-bold">
                    {[0.8, 1.0, 1.2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
                        className={`rounded-md border px-2 py-1 ${
                          playbackSpeed === speed
                            ? 'border-rose-500 bg-rose-500 text-white'
                            : 'border-border bg-background text-muted-foreground'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Questions */}
            <div className="space-y-4">
              <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h4 className="text-xs font-black text-foreground">
                  {activeQuestions[currentQIdx].questionText}
                </h4>

                <div className="space-y-2">
                  {activeQuestions[currentQIdx].options.map((opt, idx) => {
                    const isSelected = userAnswers[activeQuestions[currentQIdx].id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
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

              <Button
                onClick={handleNext}
                className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg hover:bg-rose-700"
              >
                {currentQIdx === activeQuestions.length - 1
                  ? "Natijani Ko'rish 🎯"
                  : 'Keyingi Savol ➔'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: REPORT & SCRIPT EXPLANATIONS */}
      {step === 'report' && (
        <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 shadow-sm">
            <Award size={32} />
          </div>

          <div>
            <span className="block text-xs font-extrabold uppercase tracking-wider text-rose-500">
              JLPT {level} Listening report
            </span>
            <h2 className="mt-1 text-4xl font-black text-foreground">
              {score} / {activeQuestions.length} To'g'ri
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Natijangiz muvaffaqiyatli saqlandi.
            </p>
          </div>

          <div className="space-y-3 border-t border-border pt-4 text-left">
            <h4 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
              <BookOpen size={16} /> Savollar va Skript tahlili:
            </h4>

            {activeQuestions.map((q, idx) => {
              const isCorrect = userAnswers[q.id] === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`space-y-3 rounded-2xl border p-4 text-xs ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-rose-500/20 bg-rose-500/5'}`}
                >
                  <div className="flex items-center justify-between font-bold text-foreground">
                    <span>
                      Savol {idx + 1}. {q.questionText}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[9px] font-black uppercase ${isCorrect ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}
                    >
                      {isCorrect ? "To'g'ri" : 'Xato'}
                    </span>
                  </div>

                  {/* Text script */}
                  <div className="whitespace-pre-wrap rounded-lg border border-border/50 bg-muted/40 p-3 font-serif text-[11px] leading-relaxed">
                    <b>Audio Skript (台本):</b>\n{q.script}
                  </div>

                  <p className="text-[11px] text-muted-foreground">
                    To'g'ri javob:{' '}
                    <span className="font-bold text-rose-500">{q.options[q.correctAnswer]}</span>
                  </p>

                  <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-[10px] text-muted-foreground">
                    💡 <b>O'zbekcha tushuntirish:</b> {q.explanationUzbek}
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            onClick={() => {
              setStep('intro');
            }}
            className="w-full rounded-2xl bg-rose-600 py-4 text-sm font-extrabold text-white shadow-lg hover:bg-rose-700"
          >
            Qayta Topsherish 🔄
          </Button>
        </div>
      )}
    </div>
  );
};

export default JlptListeningMockPage;
