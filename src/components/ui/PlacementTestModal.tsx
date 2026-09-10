import React, { useState, useEffect } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Sparkles,
  X,
  Activity,
} from 'lucide-react';
import {
  generatePlacementQuestions,
  evaluatePlacementTest,
  PlacementQuestion,
  PlacementResult,
} from '../../utils/ai/aiPlacementTest';

interface PlacementTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  testType?: 'jlpt';
  onComplete: (determinedLevel: string) => void;
}

export const PlacementTestModal: React.FC<PlacementTestModalProps> = ({
  isOpen,
  onClose,
  testType: _testType = 'jlpt',
  onComplete,
}) => {
  const [step, setStep] = useState<
    'intro' | 'loading_questions' | 'testing' | 'evaluating' | 'result'
  >('intro');
  const [questions, setQuestions] = useState<PlacementQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; userAnswer: string }[]>([]);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep('intro');
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setResult(null);
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startTest = async () => {
    setStep('loading_questions');
    setError(null);
    try {
      const q = await generatePlacementQuestions('jlpt');
      setQuestions(q);
      setStep('testing');
    } catch (err: any) {
      setError(err.message || 'Savollarni yuklashda xatolik yuz berdi.');
      setStep('intro');
    }
  };

  const handleAnswerSelect = async (option: string) => {
    const currentQ = questions[currentQuestionIndex];
    const newAnswers = [...answers, { question: currentQ.question, userAnswer: option }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Test finished, evaluate
      setStep('evaluating');
      try {
        const evalResult = await evaluatePlacementTest('jlpt', newAnswers);
        setResult(evalResult);
        setStep('result');
      } catch (err: any) {
        setError(err.message || 'Natijani hisoblashda xatolik yuz berdi.');
        setStep('testing'); // Let them try to submit again or handle error
      }
    }
  };

  const handleFinish = () => {
    if (result?.determinedLevel) {
      onComplete(result.determinedLevel);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        >
          <X size={20} />
        </button>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="mb-2 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-200" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
              AI Placement Test
            </span>
          </div>
          <h2 className="text-2xl font-black">JLPT Darajani Aniqlash</h2>
          <p className="mt-1 text-sm text-blue-100">AI orqali hozirgi darajangizni bilib oling.</p>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-4 flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {step === 'intro' && (
            <div className="py-6 text-center">
              <Sparkles className="mx-auto mb-4 h-16 w-16 text-indigo-500" />
              <h3 className="mb-2 text-lg font-bold">Darajangizni aniq bilmaysizmi?</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                AI Ustoz sizga 5 ta maxsus savol beradi. Javoblaringizga qarab haqiqiy JLPT (N5-N1)
                darajangizni aniqlab beradi.
              </p>
              <button
                onClick={startTest}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-bold text-white transition-all hover:bg-indigo-700 active:scale-95"
              >
                Testni boshlash <ChevronRight size={18} />
              </button>
            </div>
          )}

          {step === 'loading_questions' && (
            <div className="flex flex-col items-center py-12 text-center">
              <Loader2 className="mb-4 h-10 w-10 animate-spin text-indigo-500" />
              <p className="font-medium">Savollar generatsiya qilinmoqda...</p>
              <p className="mt-2 text-xs text-muted-foreground">Bu biroz vaqt olishi mumkin</p>
            </div>
          )}

          {step === 'testing' && questions.length > 0 && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Savol {currentQuestionIndex + 1} / {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${i <= currentQuestionIndex ? 'bg-indigo-600' : 'bg-secondary'}`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="mb-6 text-lg font-bold">{questions[currentQuestionIndex].question}</h3>

              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswerSelect(opt)}
                    className="group flex w-full items-center justify-between rounded-xl border border-border p-4 text-left font-medium transition-colors hover:border-indigo-500 hover:bg-indigo-500/10"
                  >
                    <span>{opt}</span>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'evaluating' && (
            <div className="flex flex-col items-center py-12 text-center">
              <Loader2 className="mb-4 h-10 w-10 animate-spin text-green-500" />
              <p className="font-medium">Natijalar tahlil qilinmoqda...</p>
              <p className="mt-2 text-xs text-muted-foreground">AI darajangizni hisoblamoqda</p>
            </div>
          )}

          {step === 'result' && result && (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/20 text-green-500">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="mb-1 text-lg font-medium text-muted-foreground">
                Sizning taxminiy darajangiz:
              </h3>
              <div className="mb-6 text-5xl font-black text-foreground">
                {result.determinedLevel}
              </div>

              <div className="mb-6 rounded-xl border border-border bg-secondary/50 p-4 text-left text-sm">
                <p className="mb-1 font-medium">AI Tahlili:</p>
                <p className="leading-relaxed text-muted-foreground">{result.feedback}</p>
              </div>

              <button
                onClick={handleFinish}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-bold text-white transition-all hover:bg-green-700 active:scale-95"
              >
                Davom etish <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
