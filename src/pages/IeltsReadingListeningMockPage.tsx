import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Volume2, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { speakText } from '../utils/audioTts';

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const IeltsReadingListeningMockPage: React.FC = () => {
    const navigate = useNavigate();
    const [testType, setTestType] = useState<'reading' | 'listening'>('reading');
    const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

    // Timer
    const [timeLeft, setTimeLeft] = useState(1200); // 20 mins for sample passage
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // User Answers
    const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});
    const [score, setScore] = useState(0);

    // Sample Academic Reading Passage
    const READING_PASSAGE = {
        title: "The Future of Renewable Energy & Artificial Intelligence",
        text: `As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.

To mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.`
    };

    const READING_QUESTIONS: Question[] = [
        {
            id: 1,
            text: "What is mentioned as a major challenge for solar and wind energy?",
            options: [
                "High installation cost",
                "Intermittent nature and dependence on weather",
                "Lack of trained engineers",
                "High carbon emissions"
            ],
            correctAnswer: 1,
            explanation: "Passage mentions: 'However, their intermittent nature—dependent on weather patterns—poses significant hurdles.'"
        },
        {
            id: 2,
            text: "How far in advance can predictive AI models forecast solar irradiance?",
            options: [
                "Up to 12 hours",
                "Up to 24 hours",
                "Up to 48 hours",
                "Up to 1 week"
            ],
            correctAnswer: 2,
            explanation: "Passage states: 'forecast solar irradiance and wind speeds up to 48 hours in advance.'"
        },
        {
            id: 3,
            text: "By how much can AI optimization reduce operational overhead for power plants?",
            options: [
                "Up to 15%",
                "Up to 25%",
                "Up to 35%",
                "Up to 50%"
            ],
            correctAnswer: 2,
            explanation: "Passage states: 'reducing operational overhead by up to 35%.'"
        }
    ];

    // Timer Effect
    useEffect(() => {
        let timer: any;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && isTimerRunning) {
            handleSubmitTest();
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleStartTest = () => {
        setStep('test');
        setIsTimerRunning(true);
    };

    const handleOptionSelect = (questionId: number, optionIdx: number) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
    };

    const handleSubmitTest = () => {
        setIsTimerRunning(false);
        let correctCount = 0;
        READING_QUESTIONS.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setStep('report');
    };

    // Calculate Band Score
    const getBandScore = (correct: number, total: number) => {
        const ratio = correct / total;
        if (ratio === 1) return 9.0;
        if (ratio >= 0.66) return 7.5;
        if (ratio >= 0.33) return 6.0;
        return 5.0;
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto pb-16 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => navigate('/ielts')}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs rounded-full border border-indigo-500/20">
                        📖 IELTS Academic Reading & Listening Simulator
                    </span>
                </div>
            </div>

            {/* STEP 1: INTRO */}
            {step === 'intro' && (
                <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                        <BookOpen size={40} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-foreground">IELTS Reading & Listening Practice</h2>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            Rasmiy Cambridge matnlari, taymer bilan ishlash ko'nikmasi va avtomatik Band Score baholash.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-left">
                        <button
                            onClick={() => setTestType('reading')}
                            className={`p-4 rounded-2xl border transition-all text-left ${
                                testType === 'reading' ? 'bg-indigo-500/10 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-extrabold' : 'bg-muted/40 border-border text-muted-foreground'
                            }`}
                        >
                            <span className="block text-xs font-bold uppercase">Section 1</span>
                            <span className="text-sm font-black text-foreground block mt-0.5">📖 Academic Reading</span>
                            <span className="text-[11px] text-muted-foreground mt-1 block">Passage + 3 ta savol (20 min)</span>
                        </button>
                        <button
                            onClick={() => setTestType('listening')}
                            className={`p-4 rounded-2xl border transition-all text-left ${
                                testType === 'listening' ? 'bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold' : 'bg-muted/40 border-border text-muted-foreground'
                            }`}
                        >
                            <span className="block text-xs font-bold uppercase">Section 2</span>
                            <span className="text-sm font-black text-foreground block mt-0.5">🎧 Audio Listening</span>
                            <span className="text-[11px] text-muted-foreground mt-1 block">Audio TTS + 3 ta savol</span>
                        </button>
                    </div>

                    <Button
                        onClick={handleStartTest}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-indigo-500/20"
                    >
                        Testni Boshlash <ChevronRight className="ml-2" size={20} />
                    </Button>
                </div>
            )}

            {/* STEP 2: TEST SCREEN */}
            {step === 'test' && (
                <div className="space-y-6">
                    {/* Top Bar with Timer */}
                    <div className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <span className="text-xs font-black uppercase text-indigo-500 tracking-wider">
                            IELTS {testType.toUpperCase()} MOCK
                        </span>
                        <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full font-mono font-extrabold text-sm border border-indigo-500/20">
                            <Clock size={16} />
                            <span>{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    {/* Passage & Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Reading Passage / Listening Audio Card */}
                        <div className="bg-card border border-border p-6 rounded-3xl space-y-4 shadow-sm h-fit">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-extrabold text-foreground">{READING_PASSAGE.title}</h3>
                                {testType === 'listening' && (
                                    <button
                                        onClick={() => speakText(READING_PASSAGE.text, 'en-GB')}
                                        className="px-3 py-1.5 bg-purple-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow"
                                    >
                                        <Volume2 size={15} /> Audioni Tinglash 🎧
                                    </button>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line font-serif">
                                {READING_PASSAGE.text}
                            </p>
                        </div>

                        {/* Questions List */}
                        <div className="space-y-4">
                            {READING_QUESTIONS.map(q => (
                                <div key={q.id} className="bg-card border border-border p-5 rounded-2xl space-y-3 shadow-sm">
                                    <h4 className="text-xs font-black text-foreground">
                                        Q{q.id}. {q.text}
                                    </h4>
                                    <div className="space-y-2">
                                        {q.options.map((opt, idx) => {
                                            const isSelected = userAnswers[q.id] === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleOptionSelect(q.id, idx)}
                                                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                                                        isSelected ? 'bg-indigo-500/20 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'bg-muted/30 border-border text-muted-foreground hover:bg-muted'
                                                    }`}
                                                >
                                                    <span>{opt}</span>
                                                    {isSelected && <CheckCircle2 size={15} className="text-indigo-500" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}

                            <Button
                                onClick={handleSubmitTest}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg"
                            >
                                Testni Yakunlash & Natijani Ko'rish 🎯
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: REPORT SCREEN */}
            {step === 'report' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                        <Award size={40} />
                    </div>

                    <div>
                        <span className="text-xs font-extrabold uppercase text-indigo-500 tracking-wider block">
                            IELTS Academic {testType.toUpperCase()} Report
                        </span>
                        <h2 className="text-4xl font-black text-foreground mt-1">
                            Band {getBandScore(score, READING_QUESTIONS.length).toFixed(1)}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Siz {READING_QUESTIONS.length} ta savoldan <span className="font-extrabold text-indigo-500">{score} ta</span> to'g'ri javob berdingiz.
                        </p>
                    </div>

                    {/* Explanations List */}
                    <div className="text-left space-y-3 border-t border-border pt-4">
                        <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">Javoblar Tahlili:</h4>
                        {READING_QUESTIONS.map(q => {
                            const isCorrect = userAnswers[q.id] === q.correctAnswer;
                            return (
                                <div key={q.id} className={`p-4 rounded-2xl border text-xs space-y-1 ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'}`}>
                                    <div className="font-bold text-foreground flex items-center justify-between">
                                        <span>Q{q.id}. {q.text}</span>
                                        <span>{isCorrect ? '🟢 To\'g\'ri' : '🔴 Xato'}</span>
                                    </div>
                                    <div className="text-muted-foreground text-[11px]">
                                        💡 <b>Tushuntirish:</b> {q.explanation}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <Button
                        onClick={() => {
                            setStep('intro');
                            setUserAnswers({});
                            setTimeLeft(1200);
                        }}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg"
                    >
                        Qayta Topshirish 🔄
                    </Button>
                </div>
            )}
        </div>
    );
};
