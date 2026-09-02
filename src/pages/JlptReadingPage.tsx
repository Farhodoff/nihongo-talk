import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import FuriganaText from '../components/jlpt/FuriganaText';
import { JLPT_READING_PASSAGES, JlptReadingPassage } from '../data/jlptReadingData';
import { useStudyData } from '../context/StudyPlannerContext';

import { HistoryService } from '../services/HistoryService';

export const JlptReadingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { awardXP, addSession } = useStudyData();

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

  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(
    initialLevel,
  );
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);

  useEffect(() => {
    if (urlLevel && ['N5', 'N4', 'N3', 'N2', 'N1'].includes(urlLevel)) {
      setSelectedLevel(urlLevel as any);
      setCurrentPassageIndex(0);
    }
  }, [urlLevel]);

  const levelPassages = JLPT_READING_PASSAGES.filter((p) => p.level === selectedLevel);
  const currentPassage: JlptReadingPassage | undefined =
    levelPassages[currentPassageIndex] || levelPassages[0];

  // User answers & state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showTranslation, setShowTranslation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer state
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);

  useEffect(() => {
    setUserAnswers({});
    setIsSubmitted(false);
    setShowTranslation(false);
    setIsTimerActive(false);
    if (currentPassage) {
      setTimeLeftSeconds(currentPassage.recommendedTimeMinutes * 60);
    }
  }, [selectedLevel, currentPassageIndex]);

  useEffect(() => {
    let timer: any;
    if (isTimerActive && timeLeftSeconds > 0 && !isSubmitted) {
      timer = setTimeout(() => setTimeLeftSeconds((prev) => prev - 1), 1000);
    } else if (isTimerActive && timeLeftSeconds === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
    return () => clearTimeout(timer);
  }, [isTimerActive, timeLeftSeconds, isSubmitted]);

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = async () => {
    if (!currentPassage || isSubmitted) return;
    setIsSubmitted(true);
    setIsTimerActive(false);

    // Calculate score
    let correctCount = 0;
    currentPassage.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    if (correctCount > 0 && awardXP) {
      await awardXP(correctCount * 15);
    }

    if (addSession) {
      try {
        await addSession({
          duration: currentPassage.recommendedTimeMinutes || 10,
          type: 'focus',
          completed: true,
          startTime: new Date().toISOString(),
        });
      } catch (e) {}
    }

    // Persist attempt to HistoryService
    try {
      await HistoryService.saveMockExam({
        examType: 'jlpt',
        level: selectedLevel,
        score: correctCount,
        totalQuestions: currentPassage.questions.length,
        bandScore: Math.round((correctCount / (currentPassage.questions.length || 1)) * 180),
      });
    } catch (e) {
      console.warn('Failed to save JLPT reading score:', e);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-xl md:p-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/jlpt')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="flex items-center gap-2 text-xl font-bold text-white md:text-2xl">
              📖 JLPT Reading (読解) Master
            </h1>
            <p className="text-sm text-slate-400">
              N5–N1 darajasidagi yaponcha o'qish matnlari va savollar
            </p>
          </div>
        </div>

        {/* Level Selectors */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 p-1.5">
          {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevel(lvl);
                setCurrentPassageIndex(0);
              }}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-all ${
                selectedLevel === lvl
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {currentPassage ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Passage */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="flex items-center gap-2 text-lg font-bold text-white">
                <BookOpen className="h-5 w-5 text-rose-500" />
                {currentPassage.title}
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="border-slate-700 text-xs hover:bg-slate-800"
                >
                  {showTranslation ? (
                    <EyeOff className="mr-1 h-3.5 w-3.5" />
                  ) : (
                    <Eye className="mr-1 h-3.5 w-3.5" />
                  )}
                  {showTranslation ? 'Tarjimani Yashirish' : "O'zbekcha Tarjima"}
                </Button>
              </div>
            </div>

            {/* Passage Japanese Text */}
            <div className="min-h-[200px] space-y-3 rounded-xl border border-slate-800 bg-slate-950 p-5 text-lg font-medium leading-relaxed text-slate-100">
              {currentPassage.japaneseContent.split('\n').map((line, idx) => (
                <p key={idx}>
                  <FuriganaText text={line} />
                </p>
              ))}
            </div>

            {/* Uzbek Translation Toggle */}
            {showTranslation && (
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200/90">
                <div className="mb-1 font-semibold text-amber-400">🇺🇿 O'zbekcha Tarjimasi:</div>
                {currentPassage.uzbekTranslation}
              </div>
            )}
          </div>

          {/* Right Column: Questions & Timer */}
          <div className="space-y-6 lg:col-span-5">
            {/* Timer Card */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-xl p-2.5 ${isTimerActive ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-400'}`}
                >
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Tavsiya Etilgan Vaqt</div>
                  <div className="font-mono text-xl font-bold text-white">
                    {formatTime(timeLeftSeconds)}
                  </div>
                </div>
              </div>

              {!isSubmitted && (
                <Button
                  variant={isTimerActive ? 'destructive' : 'secondary'}
                  size="sm"
                  onClick={() => setIsTimerActive(!isTimerActive)}
                >
                  {isTimerActive ? "Vaqtni To'xtatish" : 'Taymerni Boshlash'}
                </Button>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="flex items-center gap-2 border-b border-slate-800 pb-3 text-base font-bold text-white">
                <HelpCircle className="h-4 w-4 text-sky-400" />
                Matn Bo'yicha Savollar ({currentPassage.questions.length})
              </h3>

              {currentPassage.questions.map((q, qIdx) => {
                const selectedOpt = userAnswers[q.id];
                return (
                  <div key={q.id} className="space-y-3">
                    <div className="text-sm font-semibold text-slate-200">
                      {qIdx + 1}. <FuriganaText text={q.questionText} />
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = selectedOpt === oIdx;
                        const isCorrect = q.correctIndex === oIdx;

                        let btnStyle =
                          'border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-300';

                        if (isSubmitted) {
                          if (isCorrect) {
                            btnStyle =
                              'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 font-semibold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'border-rose-500/50 bg-rose-500/10 text-rose-300';
                          }
                        } else if (isSelected) {
                          btnStyle = 'border-rose-500 bg-rose-500/20 text-white font-medium';
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectAnswer(q.id, oIdx)}
                            className={`flex w-full items-center justify-between rounded-xl border p-3 text-left text-sm transition-all ${btnStyle}`}
                          >
                            <span>
                              <FuriganaText text={opt} />
                            </span>
                            {isSubmitted && isCorrect && (
                              <CheckCircle2 className="ml-2 h-4 w-4 flex-shrink-0 text-emerald-400" />
                            )}
                            {isSubmitted && isSelected && !isCorrect && (
                              <XCircle className="ml-2 h-4 w-4 flex-shrink-0 text-rose-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation when submitted */}
                    {isSubmitted && (
                      <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-400">
                        <span className="font-semibold text-rose-400">Tushuntirish: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}

              {!isSubmitted ? (
                <Button
                  variant="default"
                  onClick={handleSubmit}
                  className="w-full rounded-xl bg-rose-600 py-3 font-semibold text-white shadow-lg shadow-rose-600/30 hover:bg-rose-500"
                >
                  Javoblarni Tekshirish 🚀
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => {
                    setUserAnswers({});
                    setIsSubmitted(false);
                    if (currentPassage)
                      setTimeLeftSeconds(currentPassage.recommendedTimeMinutes * 60);
                  }}
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Qayta O'rinib Ko'rish
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400">
          <BookOpen className="mx-auto h-12 w-12 text-slate-600" />
          <p>Ushbu daraja uchun o'qish matnlari tez orada qo'shiladi.</p>
        </div>
      )}
    </div>
  );
};
export default JlptReadingPage;
