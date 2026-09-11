import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PracticeExercise } from '../../types/lesson';
import { FuriganaText } from '../jlpt/FuriganaText';

interface PracticeStepViewProps {
  instructions: string;
  exercises: PracticeExercise[];
  onCompleteExercise?: (exerciseId: string, isCorrect: boolean) => void;
  onIncorrectAnswer?: (
    exerciseId: string,
    prompt: string,
    userAnswer: string | number,
    expectedAnswer: string | number,
    explanation?: string,
  ) => void;
}

export const PracticeStepView: React.FC<PracticeStepViewProps> = ({
  instructions,
  exercises,
  onCompleteExercise,
  onIncorrectAnswer,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic shuffle for multiple-choice exercise options
  const activeExercises = useMemo(() => {
    return exercises.map((ex) => {
      if (ex.type !== 'multiple-choice' || !ex.options || ex.options.length < 2) {
        return ex;
      }
      const correctText =
        typeof ex.correctAnswer === 'number' ? ex.options[ex.correctAnswer] : ex.correctAnswer;

      const shuffled = [...ex.options];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const newCorrectIdx = shuffled.indexOf(correctText);

      return {
        ...ex,
        options: shuffled,
        correctAnswer: newCorrectIdx >= 0 ? newCorrectIdx : ex.correctAnswer,
      };
    });
  }, [exercises]);

  const currentExercise = activeExercises[currentIdx];
  const isCorrect =
    currentExercise &&
    selectedOption !== null &&
    (typeof currentExercise.correctAnswer === 'number'
      ? selectedOption === currentExercise.correctAnswer
      : String(selectedOption).trim().toLowerCase() ===
        String(currentExercise.correctAnswer).trim().toLowerCase());

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedOption(optIdx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    const correct =
      typeof currentExercise.correctAnswer === 'number'
        ? selectedOption === currentExercise.correctAnswer
        : String(selectedOption).trim().toLowerCase() ===
          String(currentExercise.correctAnswer).trim().toLowerCase();

    onCompleteExercise?.(currentExercise.id, correct);
    if (!correct) {
      onIncorrectAnswer?.(
        currentExercise.id,
        currentExercise.prompt,
        selectedOption,
        currentExercise.correctAnswer,
        currentExercise.explanation,
      );
    }
  };

  const handleNextExercise = () => {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const handlePrevExercise = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  if (!currentExercise) {
    return <div className="p-8 text-center text-muted-foreground">Mashqlar topilmadi.</div>;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 duration-200 animate-in fade-in">
      {/* Header / Subtitle */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-primary">
            Interaktiv Mashq
          </span>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {instructions || "Savolga to'g'ri javobni tanlang:"}
          </p>
        </div>
        <div className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground">
          {currentIdx + 1} / {exercises.length}
        </div>
      </div>

      {/* Exercise Card */}
      <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="text-lg font-bold leading-snug text-foreground">
          <FuriganaText text={currentExercise.prompt} />
        </div>

        {/* Options list */}
        {currentExercise.options && (
          <div className="space-y-2.5">
            {currentExercise.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              let btnStyle = 'border-border bg-secondary/30 hover:bg-secondary text-foreground';

              if (isSubmitted) {
                if (optIdx === currentExercise.correctAnswer) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400';
                }
              } else if (isSelected) {
                btnStyle = 'border-primary bg-primary/10 text-primary font-bold shadow-sm';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isSubmitted}
                  className={`flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border p-3.5 text-left text-sm transition-all active:scale-[0.99] sm:p-4 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-xs font-black text-muted-foreground">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed">
                      <FuriganaText text={opt} />
                    </span>
                  </div>
                  {isSubmitted && optIdx === currentExercise.correctAnswer && (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle size={18} className="shrink-0 text-rose-500" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        {!isSubmitted ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedOption === null}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Javobni Tekshirish
          </button>
        ) : (
          <div className="space-y-4 animate-in fade-in">
            {/* Result Alert */}
            <div
              className={`flex items-start gap-3 rounded-2xl border p-4 ${
                isCorrect
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              ) : (
                <XCircle size={20} className="mt-0.5 shrink-0" />
              )}
              <div className="text-xs leading-relaxed">
                <div className="mb-0.5 text-sm font-bold">
                  {isCorrect ? "To'g'ri javob! 🎉" : "Noto'g'ri javob 💡"}
                </div>
                {currentExercise.explanation && (
                  <div className="mt-1 text-foreground/80">
                    <FuriganaText text={currentExercise.explanation} />
                  </div>
                )}
              </div>
            </div>

            {/* Navigation between exercises */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrevExercise}
                disabled={currentIdx === 0}
                className="h-10 cursor-pointer rounded-xl border border-border px-4 text-xs font-bold text-muted-foreground hover:text-foreground active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Oldingi mashq
              </button>
              {currentIdx < exercises.length - 1 ? (
                <button
                  onClick={handleNextExercise}
                  className="flex h-10 cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-90 active:scale-95"
                >
                  <span>Keyingi mashq</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                  <Sparkles size={14} />
                  <span>Barcha mashqlar bajarildi!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
