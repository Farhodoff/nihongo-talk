import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Compass, 
    CheckCircle2, 
    AlertTriangle, 
    Clock, 
    Award, 
    ArrowRight, 
    RotateCcw
} from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { DiagnosticService } from '../services/DiagnosticService';
import { 
    DiagnosticQuestion, 
    DiagnosticMode, 
    DiagnosticResult 
} from '../types/diagnostic';
import { CurriculumLessonResolver } from '../services/CurriculumLessonResolver';

export const DiagnosticPage: React.FC = () => {
    const { primaryLanguage, targetLevel, user } = useStudyData();
    const { language } = useLanguage();
    const isUz = language !== 'en';
    const navigate = useNavigate();

    const [mode, setMode] = useState<DiagnosticMode>('standard');
    const claimedLevel = targetLevel || (primaryLanguage === 'ja' ? 'N3' : 'B2');
    const [step, setStep] = useState<'intro' | 'testing' | 'result'>('intro');

    // Testing state
    const [questions, setQuestions] = useState<DiagnosticQuestion[]>([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [answers, setAnswers] = useState<{ questionId: string; selectedOptionIndex: number; isCorrect: boolean }[]>([]);

    // Result state
    const [result, setResult] = useState<DiagnosticResult | null>(null);

    // Check for previous result or existing session
    useEffect(() => {
        const latest = DiagnosticService.getLatestDiagnosticResult(user?.id || 'guest', primaryLanguage);
        if (latest) {
            setResult(latest);
        }
    }, [primaryLanguage, user?.id]);

    const handleStartTest = () => {
        const qList = DiagnosticService.getQuestionsForSession(primaryLanguage, mode);
        setQuestions(qList);
        setCurrentQIndex(0);
        setSelectedOption(null);
        setAnswers([]);
        setStep('testing');
    };

    const handleZeroLevelStart = () => {
        const res = DiagnosticService.getZeroLevelResult(user?.id || 'guest', primaryLanguage);
        setResult(res);
        setStep('result');
    };

    const handleSelectOption = (idx: number) => {
        setSelectedOption(idx);
    };

    const handleNextQuestion = () => {
        if (selectedOption === null) return;

        const currentQ = questions[currentQIndex];
        const isCorrect = selectedOption === currentQ.correctAnswerIndex;

        const updatedAnswers = [
            ...answers,
            {
                questionId: currentQ.id,
                selectedOptionIndex: selectedOption,
                isCorrect
            }
        ];
        setAnswers(updatedAnswers);

        if (currentQIndex + 1 < questions.length) {
            setCurrentQIndex(currentQIndex + 1);
            setSelectedOption(null);
        } else {
            // Test Completed!
            const evalResult = DiagnosticService.evaluateDiagnosticAnswers(
                user?.id || 'guest',
                primaryLanguage,
                mode,
                claimedLevel,
                updatedAnswers
            );
            setResult(evalResult);
            setStep('result');
        }
    };

    const handleStartRecommendedLesson = () => {
        if (!result) return;
        const resolved = CurriculumLessonResolver.resolveLesson(result.recommendedFirstLessonId, primaryLanguage);
        navigate(resolved.route);
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* Step 1: Intro & Mode Selection */}
            {step === 'intro' && (
                <div className="space-y-6">
                    <div className="p-6 md:p-8 rounded-3xl glass-card border border-border space-y-4 shadow-md bg-gradient-to-br from-card via-card to-secondary/30">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}</span>
                            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {primaryLanguage === 'ja' ? 'JLPT Diagnostik Test' : 'CEFR & IELTS Placement'}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-foreground">
                            {isUz ? "Haqiqiy Bilim Darajangizni Aniqlang" : "Discover Your True Language Level"}
                        </h1>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {isUz 
                                ? "Platforma sizning kuchli va zaif tomonlaringizni tahlil qilib, aynan sizga mos boshlang'ich nuqta va shaxsiy o'quv yo'lini shakllantiradi." 
                                : "Our adaptive diagnostic engine evaluates your strengths and weaknesses to create a tailored curriculum starting point."}
                        </p>
                    </div>

                    {/* Quick Zero-Level Option */}
                    <div className="p-6 rounded-3xl glass-card border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/30">
                        <div className="space-y-1 text-center sm:text-left">
                            <h3 className="text-base font-bold text-foreground flex items-center gap-2 justify-center sm:justify-start">
                                <span>🌱</span> {isUz ? "Mutlaqo Yangi Boshlovchimisiz?" : "Complete Beginner?"}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                {isUz 
                                    ? "Test topshirmasdan to'g'ridan-to'g'ri boshlang'ich poydevor darslaridan boshlang." 
                                    : "Skip testing and start directly from foundational A1 / N5 lessons."}
                            </p>
                        </div>
                        <button
                            onClick={handleZeroLevelStart}
                            className="px-5 py-2.5 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-bold transition-all shrink-0"
                        >
                            {isUz ? "Nol Darajadan Boshlash" : "Start from Zero"}
                        </button>
                    </div>

                    {/* Mode Selector */}
                    <div className="p-6 md:p-8 rounded-3xl glass-card border border-border space-y-6">
                        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            {isUz ? "Test Rejimini Tanlang" : "Choose Assessment Mode"}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button
                                onClick={() => setMode('quick')}
                                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                                    mode === 'quick' ? 'bg-primary/10 border-primary shadow-sm' : 'border-border glass-card hover:border-primary/40'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">⚡ {isUz ? 'Tezkor' : 'Quick'}</span>
                                    <span className="text-xs text-muted-foreground">6 savol</span>
                                </div>
                                <p className="text-xs text-muted-foreground">~10 daqiqa, umumiy darajani tezkor baholash.</p>
                            </button>

                            <button
                                onClick={() => setMode('standard')}
                                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                                    mode === 'standard' ? 'bg-primary/10 border-primary shadow-sm' : 'border-border glass-card hover:border-primary/40'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">🎯 {isUz ? 'Standart' : 'Standard'}</span>
                                    <span className="text-xs text-primary font-bold">Tavsiya</span>
                                </div>
                                <p className="text-xs text-muted-foreground">~20 daqiqa, har bir ko'nikmani aniq baholash.</p>
                            </button>

                            <button
                                onClick={() => setMode('deep')}
                                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                                    mode === 'deep' ? 'bg-primary/10 border-primary shadow-sm' : 'border-border glass-card hover:border-primary/40'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">🧠 {isUz ? 'Chuqur' : 'Deep'}</span>
                                    <span className="text-xs text-muted-foreground">To'liq</span>
                                </div>
                                <p className="text-xs text-muted-foreground">~35 daqiqa, to'liq ilmiy diagnostika.</p>
                            </button>
                        </div>

                        <button
                            onClick={handleStartTest}
                            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black text-sm shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                        >
                            <span>🚀 {isUz ? "Diagnostik Testni Boshlash" : "Start Placement Test"}</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Testing Phase */}
            {step === 'testing' && questions.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl glass-card border border-border space-y-6 shadow-lg">
                    {/* Header Progress */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/60">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
                                {questions[currentQIndex].skill}
                            </span>
                            <span className="text-xs font-bold text-muted-foreground">
                                {questions[currentQIndex].level} • {questions[currentQIndex].topic}
                            </span>
                        </div>
                        <span className="text-xs font-black text-foreground">
                            {currentQIndex + 1} / {questions.length}
                        </span>
                    </div>

                    {/* Question Prompt */}
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                            {questions[currentQIndex].prompt}
                        </h3>

                        {/* Options */}
                        <div className="grid grid-cols-1 gap-3 pt-2">
                            {questions[currentQIndex].options.map((opt, oIdx) => {
                                const isSelected = selectedOption === oIdx;
                                return (
                                    <button
                                        key={oIdx}
                                        onClick={() => handleSelectOption(oIdx)}
                                        className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                                            isSelected 
                                                ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.01]' 
                                                : 'glass-card border-border hover:border-primary/40 text-foreground'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold border ${
                                                isSelected ? 'bg-white/20 border-white/40' : 'bg-secondary border-border text-muted-foreground'
                                            }`}>
                                                {String.fromCharCode(65 + oIdx)}
                                            </span>
                                            <span className="text-sm font-semibold">{opt}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="flex items-center justify-end pt-4 border-t border-border/60">
                        <button
                            onClick={handleNextQuestion}
                            disabled={selectedOption === null}
                            className={`px-6 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
                                selectedOption !== null 
                                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md' 
                                    : 'bg-secondary text-muted-foreground cursor-not-allowed opacity-50'
                            }`}
                        >
                            <span>{currentQIndex + 1 === questions.length ? (isUz ? 'Natijani Ko\'rish' : 'View Results') : (isUz ? 'Keyingi Savol' : 'Next Question')}</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Result Dashboard */}
            {step === 'result' && result && (
                <div className="space-y-6">
                    <div className="p-6 md:p-8 rounded-3xl glass-card border border-border space-y-6 shadow-xl bg-gradient-to-br from-card via-card to-secondary/40">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                            <div className="space-y-1">
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {isUz ? 'Diagnostika Natijasi' : 'Placement Assessment Result'}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-1">
                                    {isUz ? 'Tavsiya Etilgan Bosqich:' : 'Recommended Starting Level:'} {result.recommendedStartLevel}
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                    {isUz 
                                        ? `Aniqlik darajasi: ${result.overallScore}%. Tizim ishonchi: ${result.overallConfidence}%.` 
                                        : `Diagnostic accuracy: ${result.overallScore}%. Assessment confidence: ${result.overallConfidence}%.`}
                                </p>
                            </div>

                            <div className="p-4 px-6 rounded-2xl bg-secondary/50 border border-border flex items-center gap-3 shrink-0">
                                <Award size={28} className="text-primary" />
                                <div>
                                    <div className="text-xs text-muted-foreground">{isUz ? 'Umumiy Ball' : 'Overall Score'}</div>
                                    <div className="text-xl font-black text-foreground">{result.overallScore}%</div>
                                </div>
                            </div>
                        </div>

                        {/* Skill Radar / Bars */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                <Compass size={14} />
                                {isUz ? "Ko'nikmalar Kesimida Baholash" : "Skill Profile Breakdown"}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {Object.values(result.skills).map((sk) => sk && (
                                    <div key={sk.skill} className="p-4 rounded-2xl bg-secondary/30 border border-border space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black uppercase tracking-wider text-foreground">
                                                {sk.skill}
                                            </span>
                                            <span className={`text-xs font-bold ${
                                                sk.status === 'strength' ? 'text-emerald-500' : sk.status === 'weakness' ? 'text-rose-500' : 'text-muted-foreground'
                                            }`}>
                                                {sk.score}% ({sk.estimatedLevel})
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all ${
                                                    sk.status === 'strength' ? 'bg-emerald-500' : sk.status === 'weakness' ? 'bg-rose-500' : 'bg-primary'
                                                }`}
                                                style={{ width: `${sk.score}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Strengths & Weaknesses */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {result.strengths.length > 0 && (
                                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <CheckCircle2 size={14} /> {isUz ? "Kuchli Ko'nikmalar" : "Key Strengths"}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {result.strengths.join(', ')}
                                    </div>
                                </div>
                            )}

                            {result.weaknesses.length > 0 && (
                                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                                        <AlertTriangle size={14} /> {isUz ? "Mustahkamlash Kerak" : "Focus Areas"}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {result.weaknesses.join(', ')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Primary Call to Action */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border/60">
                            <button
                                onClick={() => setStep('intro')}
                                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
                            >
                                <RotateCcw size={14} />
                                <span>{isUz ? "Qayta Test Topshirish" : "Retake Assessment"}</span>
                            </button>

                            <button
                                onClick={handleStartRecommendedLesson}
                                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-black text-xs shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                            >
                                <span>🚀 {isUz ? `Darsni Boshlash (${result.recommendedStartLevel})` : `Start Learning (${result.recommendedStartLevel})`}</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiagnosticPage;
