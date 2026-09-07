import React, { useState, useEffect } from 'react';
import {
  Zap,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  getTodaysBlitzQuestions,
  getTodayStorageKey,
  DailyBlitzQuestion,
} from '../../data/jlpt/daily_blitz_data';
import { useStudyData } from '../../context/StudyPlannerContext';
import { useLanguage } from '../../context/LanguageContext';

interface QuizState {
  completed: boolean;
  score: number;
  answers: (number | null)[];
}

export const JlptDailyBlitzCard: React.FC = () => {
  const { awardXP } = useStudyData();
  const { language } = useLanguage();
  const isJa = language === 'ja';

  const [questions, setQuestions] = useState<DailyBlitzQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  // Initialize questions and check local storage
  useEffect(() => {
    const todayQuestions = getTodaysBlitzQuestions();
    setQuestions(todayQuestions);

    const storageKey = getTodayStorageKey();
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed: QuizState = JSON.parse(saved);
        if (parsed.completed) {
          setIsCompleted(true);
          setScore(parsed.score);
          setUserAnswers(parsed.answers || []);
          setXpAwarded(true);
          setIsCollapsed(true); // default collapsed if already done today
        }
      } catch {
        // ignore parse error
      }
    }
  }, []);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(idx);
  };

  const handleNext = async () => {
    if (selectedOption === null) return;

    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);

    const isCorrect = selectedOption === currentQ.correctIndex;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      // Finished all 3
      setIsCompleted(true);
      const storageKey = getTodayStorageKey();
      const stateToSave: QuizState = {
        completed: true,
        score: newScore,
        answers: newAnswers,
      };
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));

      if (!xpAwarded && awardXP) {
        try {
          await awardXP(30);
          setXpAwarded(true);
        } catch {
          // ignore
        }
      }
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setIsCompleted(false);
    setScore(0);
    setIsCollapsed(false);
  };

  // Compact banner when collapsed
  if (isCollapsed) {
    return (
      <div className="flex items-center justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-card to-primary/10 p-3.5 shadow-xs transition-all">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500">
            <Zap size={18} className="fill-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                {isJa ? '今日の3問ブリッツ' : 'Kunlik 3-Savollik Blitz'}
              </span>
              {isCompleted && (
                <span className="rounded-md bg-green-500/20 px-1.5 py-0.5 text-[10px] font-bold text-green-600 dark:text-green-400">
                  {score}/{questions.length} {isJa ? '正解' : "to'g'ri"}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {isCompleted
                ? isJa
                  ? '今日のテストは完了しました！明日また新しい問題が届きます。'
                  : 'Bugungi test yakunlangan (+30 XP olindi). Ertaga yangi savollar!'
                : isJa
                  ? '1分でJLPTの実力を確認しよう'
                  : "1 daqiqada o'z darajangizni tekshirib oling"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-muted"
        >
          {isCompleted ? (isJa ? '確認 / 再挑戦' : "Ko'rish / Qayta") : isJa ? '解く' : 'Yechish'}
          <ChevronDown size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-card via-card to-amber-500/5 p-4 shadow-sm transition-all md:p-6">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500">
            <Zap size={18} className="fill-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-black tracking-tight text-foreground md:text-base">
                {isJa ? '⚡ 今日の3問JLPTブリッツ' : '⚡ 3-Savollik Kunlik Blitz'}
              </h2>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                +30 XP
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              {isJa
                ? '毎日更新・1分スピード確認'
                : 'Har kuni 1 marta • 1 daqiqa • Kanji, Grammatika, So‘z'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(true)}
          className="rounded-xl p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title="Ixchamlashtirish"
        >
          <ChevronUp size={16} />
        </button>
      </div>

      {/* COMPLETED STATE */}
      {isCompleted ? (
        <div className="py-6 text-center duration-200 animate-in fade-in zoom-in-95">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/20 text-amber-500 shadow-xs">
            <Award size={32} />
          </div>
          <h3 className="text-lg font-black text-foreground md:text-xl">
            {score === 3
              ? isJa
                ? '素晴らしい！全問正解 🎉'
                : 'Ajoyib natija! 3/3 to‘liq to‘g‘ri 🎉'
              : score >= 2
                ? isJa
                  ? 'よくできました！'
                  : 'Yaxshi natija! 👍'
                : isJa
                  ? 'お疲れ様でした！復習しましょう'
                  : 'Yaxshi urinish! Takrorlashda davom eting 💪'}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {isJa
              ? `正解数: ${score} / ${questions.length}問 • +30 XP 獲得!`
              : `Natija: ${score} / ${questions.length} to‘g‘ri • +30 XP balansingizga qo‘shildi!`}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted active:scale-95"
            >
              <RotateCcw size={14} />
              {isJa ? 'もう一度解く' : 'Qayta yechish'}
            </button>
            <button
              onClick={() => setIsCollapsed(true)}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95"
            >
              {isJa ? '完了 (閉じる)' : 'Yopish'}
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ IN PROGRESS */
        <div className="mt-4 space-y-4">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {questions.map((q, idx) => {
                const isActive = idx === currentIndex;
                const isPast = idx < currentIndex;
                return (
                  <div
                    key={q.id}
                    className={`flex h-6 items-center gap-1 rounded-lg px-2 text-[11px] font-bold transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-xs'
                        : isPast
                          ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                          : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <span>{idx + 1}.</span>
                    <span>{q.typeLabel}</span>
                  </div>
                );
              })}
            </div>
            <span className="text-[11px] font-bold text-muted-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          {/* Question Box */}
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                {currentQ.level}
              </span>
              <span className="text-xs text-muted-foreground">{currentQ.question}</span>
            </div>

            {/* Prompt */}
            <div className="my-3 flex items-center justify-center rounded-xl bg-muted/40 px-3 py-4 text-center">
              <span className="font-display text-2xl font-black tracking-wide text-foreground md:text-3xl">
                {currentQ.prompt}
              </span>
            </div>

            {/* 4 Options */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;
                const showFeedback = selectedOption !== null;

                let btnStyle = 'border-border bg-card hover:bg-muted/60 text-foreground';
                if (showFeedback) {
                  if (isCorrect) {
                    btnStyle =
                      'border-green-500 bg-green-500/15 text-green-700 dark:text-green-300 font-bold';
                  } else if (isSelected) {
                    btnStyle =
                      'border-red-500 bg-red-500/15 text-red-700 dark:text-red-300 font-bold';
                  } else {
                    btnStyle = 'border-border/40 opacity-50 bg-card text-muted-foreground';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={showFeedback}
                    className={`flex items-center justify-between rounded-xl border p-3 text-left text-xs transition-all active:scale-[0.99] sm:text-sm ${btnStyle}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-black text-muted-foreground">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </span>

                    {showFeedback && isCorrect && (
                      <CheckCircle2 size={16} className="shrink-0 text-green-500" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle size={16} className="shrink-0 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Action */}
            {selectedOption !== null && (
              <div className="mt-3.5 space-y-3 rounded-xl border border-border bg-muted/40 p-3 duration-150 animate-in fade-in">
                <div className="text-xs leading-relaxed text-foreground">
                  <span className="font-bold text-primary">💡 Izoh: </span>
                  {currentQ.explanationUz}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95"
                  >
                    <span>
                      {currentIndex + 1 < questions.length
                        ? isJa
                          ? '次の問題へ'
                          : 'Keyingi savol'
                        : isJa
                          ? '結果を見る'
                          : 'Natijani ko‘rish'}
                    </span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
