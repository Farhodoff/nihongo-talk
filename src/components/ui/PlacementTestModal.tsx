import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Loader2, Sparkles, X, Activity } from 'lucide-react';
import { generatePlacementQuestions, evaluatePlacementTest, PlacementQuestion, PlacementResult } from '../../utils/ai/aiPlacementTest';

interface PlacementTestModalProps {
    isOpen: boolean;
    onClose: () => void;
    testType: 'jlpt' | 'ielts';
    onComplete: (determinedLevel: string) => void;
}

export const PlacementTestModal: React.FC<PlacementTestModalProps> = ({ isOpen, onClose, testType, onComplete }) => {
    const [step, setStep] = useState<'intro' | 'loading_questions' | 'testing' | 'evaluating' | 'result'>('intro');
    const [questions, setQuestions] = useState<PlacementQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ question: string, userAnswer: string }[]>([]);
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
            const q = await generatePlacementQuestions(testType);
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
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Test finished, evaluate
            setStep('evaluating');
            try {
                const evalResult = await evaluatePlacementTest(testType, newAnswers);
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-5 h-5 text-blue-200" />
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                            AI Placement Test
                        </span>
                    </div>
                    <h2 className="text-2xl font-black">
                        {testType === 'jlpt' ? 'JLPT Darajani Aniqlash' : 'IELTS Darajani Aniqlash'}
                    </h2>
                    <p className="text-blue-100 mt-1 text-sm">
                        AI orqali hozirgi darajangizni bilib oling.
                    </p>
                </div>

                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    {step === 'intro' && (
                        <div className="text-center py-6">
                            <Sparkles className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold mb-2">Darajangizni aniq bilmaysizmi?</h3>
                            <p className="text-muted-foreground text-sm mb-6">
                                AI Ustoz sizga 5 ta maxsus savol beradi. Javoblaringizga qarab haqiqiy 
                                {testType === 'jlpt' ? ' JLPT (N5-N1)' : ' IELTS (Band)'} darajangizni aniqlab beradi.
                            </p>
                            <button
                                onClick={startTest}
                                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                            >
                                Testni boshlash <ChevronRight size={18} />
                            </button>
                        </div>
                    )}

                    {step === 'loading_questions' && (
                        <div className="text-center py-12 flex flex-col items-center">
                            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                            <p className="font-medium">Savollar generatsiya qilinmoqda...</p>
                            <p className="text-xs text-muted-foreground mt-2">Bu biroz vaqt olishi mumkin</p>
                        </div>
                    )}

                    {step === 'testing' && questions.length > 0 && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Savol {currentQuestionIndex + 1} / {questions.length}
                                </span>
                                <div className="flex gap-1">
                                    {questions.map((_, i) => (
                                        <div 
                                            key={i} 
                                            className={`w-2 h-2 rounded-full ${i <= currentQuestionIndex ? 'bg-indigo-600' : 'bg-secondary'}`} 
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-6">
                                {questions[currentQuestionIndex].question}
                            </h3>

                            <div className="space-y-3">
                                {questions[currentQuestionIndex].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswerSelect(opt)}
                                        className="w-full text-left p-4 rounded-xl border border-border hover:border-indigo-500 hover:bg-indigo-500/10 transition-colors font-medium flex items-center justify-between group"
                                    >
                                        <span>{opt}</span>
                                        <ChevronRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 'evaluating' && (
                        <div className="text-center py-12 flex flex-col items-center">
                            <Loader2 className="w-10 h-10 text-green-500 animate-spin mb-4" />
                            <p className="font-medium">Natijalar tahlil qilinmoqda...</p>
                            <p className="text-xs text-muted-foreground mt-2">AI darajangizni hisoblamoqda</p>
                        </div>
                    )}

                    {step === 'result' && result && (
                        <div className="text-center py-4">
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-lg font-medium text-muted-foreground mb-1">Sizning taxminiy darajangiz:</h3>
                            <div className="text-5xl font-black text-foreground mb-6">
                                {result.determinedLevel}
                            </div>
                            
                            <div className="bg-secondary/50 p-4 rounded-xl text-sm text-left mb-6 border border-border">
                                <p className="font-medium mb-1">AI Tahlili:</p>
                                <p className="text-muted-foreground leading-relaxed">{result.feedback}</p>
                            </div>

                            <button
                                onClick={handleFinish}
                                className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
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
