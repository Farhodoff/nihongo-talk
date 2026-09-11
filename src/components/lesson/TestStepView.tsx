import React, { useState, useMemo } from 'react';
import { Award, CheckCircle2, XCircle, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { TestQuestion } from '../../types/lesson';
import { FuriganaText } from '../jlpt/FuriganaText';

export interface MissedQuestionInfo {
  questionId: string;
  prompt: string;
  userAnswer: string;
  expectedAnswer: string;
  explanation: string;
}

interface TestStepViewProps {
  instructions: string;
  questions: TestQuestion[];
  passingScorePercentage?: number;
  onCompleteTest?: (result: {
    score: number;
    total: number;
    percentage: number;
    missedQuestions: MissedQuestionInfo[];
  }) => void;
}

export const TestStepView: React.FC<TestStepViewProps> = ({
  instructions,
  questions,
  passingScorePercentage = 75,
  onCompleteTest,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [attemptSeed, setAttemptSeed] = useState(0);

  // Shuffle options for each question dynamically per attempt
  const activeQuestions = useMemo(() => {
    return questions.map((q) => {
      if (!q.options || q.options.length < 2) return q;
      const correctOptionText = q.options[q.correctAnswerIndex];

      const shuffled = [...q.options];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const newCorrectIdx = shuffled.indexOf(correctOptionText);

      return {
        ...q,
        options: shuffled,
        correctAnswerIndex: newCorrectIdx >= 0 ? newCorrectIdx : q.correctAnswerIndex,
      };
    });
  }, [questions, attemptSeed]);

  const currentQuestion = activeQuestions[currentIdx];
  const totalQuestions = activeQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (optionIdx: number) => {
    if (isCompleted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIdx,
    }));
  };

  const handleFinishTest = () => {
    let correctCount = 0;
    const missedQuestions: MissedQuestionInfo[] = [];

    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correctCount++;
      } else {
        missedQuestions.push({
          questionId: q.id,
          prompt: q.question,
          userAnswer: q.options[selectedAnswers[idx]] || 'Tanlanmadi',
          expectedAnswer: q.options[q.correctAnswerIndex],
          explanation: q.explanation,
        });
      }
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    setIsCompleted(true);
    onCompleteTest?.({
      score: correctCount,
      total: totalQuestions,
      percentage,
      missedQuestions,
    });
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
    setAttemptSeed((prev) => prev + 1);
  };

  let score = 0;
  if (isCompleted) {
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        score++;
      }
    });
  }
  const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isPassed = scorePercentage >= passingScorePercentage;

  return (
    <div className="mx-auto max-w-2xl space-y-6 duration-200 animate-in fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary">
            <Award size={14} />
            <span>Dars Testi (Quiz)</span>
          </span>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {instructions || "Bilimingizni sinovdan o'tkazing:"}
          </p>
        </div>
        {!isCompleted && (
          <div className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground">
            {currentIdx + 1} / {totalQuestions}
          </div>
        )}
      </div>

      {!isCompleted ? (
        /* Active Question Card */
        <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="text-base font-bold leading-snug text-foreground md:text-lg">
            <FuriganaText text={currentQuestion.question} />
          </div>

          <div className="space-y-2.5">
            {currentQuestion.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIdx] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border p-3.5 text-left text-sm transition-all active:scale-[0.99] sm:p-4 ${
                    isSelected
                      ? 'border-primary bg-primary/10 font-bold text-primary shadow-sm'
                      : 'border-border bg-secondary/30 text-foreground hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'border border-border bg-card text-muted-foreground'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed">
                      <FuriganaText text={opt} />
                    </span>
                  </div>
                  {isSelected && <CheckCircle2 size={18} className="shrink-0 text-primary" />}
                </button>
              );
            })}
          </div>

          {/* Footer Nav Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="h-10 cursor-pointer rounded-xl border border-border px-4 text-xs font-bold text-muted-foreground hover:text-foreground active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Oldingisi
            </button>

            {currentIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                disabled={selectedAnswers[currentIdx] === undefined}
                className="flex h-10 cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span>Keyingisi</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleFinishTest}
                disabled={answeredCount < totalQuestions}
                className="flex h-10 cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-6 text-xs font-black text-white shadow-md shadow-emerald-600/30 transition-all hover:bg-emerald-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Sparkles size={14} />
                <span>Testni Yakunlash</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Test Summary & Question Review Card */
        <div className="space-y-6">
          {/* Score Hero Banner */}
          <div
            className={`space-y-3 rounded-3xl border p-6 text-center shadow-md ${
              isPassed
                ? 'border-emerald-500/30 bg-emerald-500/10 text-foreground'
                : 'border-amber-500/30 bg-amber-500/10 text-foreground'
            }`}
          >
            <div className="text-3xl">{isPassed ? '🎉' : '📖'}</div>
            <h3 className="text-xl font-black">
              {isPassed ? 'Test Muvaffaqiyatli Topshirildi!' : "Qayta urinib ko'ring"}
            </h3>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-primary">
                {score} / {totalQuestions}
              </span>
              <span className="text-sm font-bold text-muted-foreground">({scorePercentage}%)</span>
            </div>
            <p className="mx-auto max-w-md text-xs text-muted-foreground">
              {isPassed
                ? "Ajoyib natija! Ushbu darsning barcha asosiy mavzularini o'zlashtirdingiz."
                : "Natijangizni yaxshilash uchun tahlillarni ko'rib chiqing va qayta urinib ko'ring."}
            </p>
          </div>

          {/* Question by Question Review */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground">
              Savollar Tahlili:
            </h4>

            {activeQuestions.map((q, qIdx) => {
              const userAnswer = selectedAnswers[qIdx];
              const isUserCorrect = userAnswer === q.correctAnswerIndex;

              return (
                <div
                  key={qIdx}
                  className={`space-y-2 rounded-2xl border bg-card p-4 ${
                    isUserCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-foreground">
                      {qIdx + 1}. <FuriganaText text={q.question} />
                    </div>
                    {isUserCorrect ? (
                      <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-emerald-500">
                        <CheckCircle2 size={14} /> To'g'ri
                      </span>
                    ) : (
                      <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-rose-500">
                        <XCircle size={14} /> Xato
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 border-t border-border/50 pt-1 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">To'g'ri javob: </span>
                      <span className="font-bold text-emerald-500">
                        <FuriganaText text={q.options[q.correctAnswerIndex]} />
                      </span>
                    </div>
                    {q.explanation && (
                      <div className="mt-0.5 text-[11px] text-muted-foreground">
                        💡 <FuriganaText text={q.explanation} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {!isPassed && (
            <button
              onClick={handleRetry}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card py-3 text-xs font-bold text-foreground transition-all hover:bg-secondary"
            >
              <RotateCcw size={14} />
              <span>Testni Qayta Topshirish</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
