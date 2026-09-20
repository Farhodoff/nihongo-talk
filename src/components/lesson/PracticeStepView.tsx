import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { PracticeExercise } from '../../types/lesson';
import { FuriganaText } from '../jlpt/FuriganaText';
import { LessonAudioPlayer } from './LessonAudioPlayer';

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
  const submitRef = useRef<HTMLDivElement>(null);

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

  // Determine 2-column layout based on text length
  const isTwoColumns = useMemo(() => {
    if (!currentExercise?.options || currentExercise.options.length < 2) return false;
    return currentExercise.options.every((opt) => opt.length <= 24 && !opt.includes('\n'));
  }, [currentExercise]);

  useEffect(() => {
    if (isSubmitted && submitRef.current) {
      submitRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isSubmitted]);

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
      <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:space-y-6 sm:rounded-3xl sm:p-6">
        {currentExercise.audioUrl && (
          <LessonAudioPlayer
            key={`audio-ex-${currentExercise.id}-${currentIdx}`}
            audioUrl={currentExercise.audioUrl}
            audioTitle={currentExercise.audioTitle || 'Mondai Mashq Audiosi'}
          />
        )}

        <div className="break-words text-base font-bold leading-snug text-foreground sm:text-lg md:text-xl">
          <FuriganaText text={currentExercise.prompt} />
        </div>

        {/* Options list: 2 columns for short text, 1 column for long sentences */}
        {currentExercise.options && (
          <div
            className={
              isTwoColumns ? 'grid grid-cols-2 gap-2.5 sm:gap-3' : 'space-y-2 sm:space-y-2.5'
            }
          >
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
                  className={`flex min-h-[50px] w-full cursor-pointer touch-manipulation select-none items-center justify-between gap-2 rounded-2xl border p-3 text-left text-sm transition-all active:scale-[0.99] sm:min-h-[56px] sm:gap-3 sm:p-4 sm:text-base ${btnStyle}`}
                >
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-xs font-black text-muted-foreground sm:h-8 sm:w-8 sm:text-sm">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="break-words font-medium leading-relaxed">
                      <FuriganaText text={opt} />
                    </span>
                  </div>
                  {isSubmitted && optIdx === currentExercise.correctAnswer && (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-500 sm:h-5 sm:w-5" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle size={18} className="shrink-0 text-rose-500 sm:h-5 sm:w-5" />
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
            className="sm:h-13 flex h-12 w-full cursor-pointer touch-manipulation select-none items-center justify-center rounded-2xl bg-primary text-sm font-black text-primary-foreground shadow-md shadow-primary/25 transition-all hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
          >
            Javobni Tekshirish
          </button>
        ) : (
          <div ref={submitRef} className="space-y-4 animate-in fade-in">
            {/* Result Alert */}
            <div
              className={`flex items-start gap-3 rounded-2xl border p-3.5 sm:p-4 ${
                isCorrect
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 sm:h-5 sm:w-5" />
              ) : (
                <XCircle size={20} className="mt-0.5 shrink-0 sm:h-5 sm:w-5" />
              )}
              <div className="text-xs leading-relaxed sm:text-sm">
                <div className="mb-0.5 font-bold">
                  {isCorrect ? "To'g'ri javob! 🎉" : "Noto'g'ri javob 💡"}
                </div>
                {currentExercise.explanation && (
                  <div className="mt-1 break-words text-foreground/85">
                    <FuriganaText text={currentExercise.explanation} />
                  </div>
                )}
              </div>
            </div>

            {/* Prominent Davom Etish (Next Exercise) Button */}
            {currentIdx < exercises.length - 1 ? (
              <button
                onClick={handleNextExercise}
                className="sm:h-13 flex h-12 w-full cursor-pointer touch-manipulation select-none items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90 active:scale-[0.99] sm:text-base"
              >
                <span>Davom etish</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1.5 py-1 text-xs font-bold text-emerald-500">
                  <CheckCircle2 size={16} />
                  <span>Barcha amaliy mashqlar yakunlandi!</span>
                </div>
                <button
                  onClick={handleNextExercise}
                  className="sm:h-13 flex h-12 w-full cursor-pointer touch-manipulation select-none items-center justify-center gap-2 rounded-2xl bg-emerald-600 text-sm font-black text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-500 active:scale-[0.99] sm:text-base"
                >
                  <span>Dars Testiga O'tish</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* Back to previous exercise (if needed) */}
            {currentIdx > 0 && (
              <div className="pt-0.5 text-center">
                <button
                  onClick={handlePrevExercise}
                  className="cursor-pointer text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  ← Oldingi mashqqa qaytish
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
