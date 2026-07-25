import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, Award, Sparkles, BookOpen, AlertCircle, 
    CheckCircle2, RefreshCw, XCircle, ChevronRight 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateAIResponse } from '../utils/ai/aiCore';
import { JLPT_GRAMMAR_QUESTIONS, JlptGrammarQuestion } from '../data/jlpt/grammar_data';

export const JlptGrammarQuizPage: React.FC = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
    const [step, setStep] = useState<'intro' | 'quiz' | 'report'>('intro');

    // AI States
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);

    // Active Quiz State
    const [questions, setQuestions] = useState<JlptGrammarQuestion[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    // --- Start Quiz with Sample Data ---
    const handleStartSampleQuiz = () => {
        const filtered = JLPT_GRAMMAR_QUESTIONS.filter(q => q.level === level);
        if (filtered.length === 0) {
            alert("Ushbu daraja uchun tayyor testlar hozircha yo'q. Iltimos, AI rejimini sinab ko'ring!");
            return;
        }
        setQuestions(filtered);
        setCurrentIdx(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setStep('quiz');
    };

    // --- Start Quiz with DeepSeek AI ---
    const handleStartAIQuiz = async () => {
        setIsGenerating(true);
        setAiError(null);

        const prompt = `
          Act as an expert JLPT Grammar Constructor.
          Generate exactly 5 advanced multiple-choice grammar questions for JLPT Level: "${level}".
          Focus on particle usage, verb conjugations, and level-specific patterns.
          You MUST explain why the correct option is correct in the Uzbek language.
          
          Return ONLY a valid JSON array matching this exact format (DO NOT write markdown, HTML, or backticks):
          [
            {
              "id": 1,
              "level": "${level}",
              "pattern": "~ことになっている",
              "questionText": "明日、先生に会うこと（　）なっています。",
              "options": ["に", "が", "を", "で"],
              "correctAnswer": 0,
              "explanationUzbek": "Qolip: [Feyl joriy shakli] + ことになっている (rejalashtirilgan). Bu yerda 'こと' otidan so'ng 'に' predlogi ishlatiladi."
            }
          ]
        `;

        try {
            const rawResponse = await generateAIResponse([
                { role: 'system', content: 'You are a JSON only provider.' },
                { role: 'user', content: prompt }
            ]);
            const cleanJson = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
            const data: JlptGrammarQuestion[] = JSON.parse(cleanJson);
            
            if (Array.isArray(data) && data.length > 0) {
                // Ensure IDs are present
                const formatted = data.map((item, idx) => ({ ...item, id: idx + 1 }));
                setQuestions(formatted);
                setCurrentIdx(0);
                setSelectedAnswer(null);
                setShowExplanation(false);
                setStep('quiz');
            } else {
                throw new Error("Invalid array received.");
            }
        } catch (e) {
            console.error(e);
            setAiError("AI savollarini yaratishda xatolik yuz berdi. Qayta urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleOptionSelect = (optionIdx: number) => {
        if (showExplanation) return; // disable selection after submission
        setSelectedAnswer(optionIdx);
    };

    const handleAnswerSubmit = () => {
        if (selectedAnswer === null) return;
        const currentQ = questions[currentIdx];
        setShowExplanation(true);

        if (selectedAnswer === currentQ.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(prev => prev + 1);
        } else {
            setStep('report');
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto pb-16 space-y-6">
            {/* Top Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => navigate('/jlpt')}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs rounded-full border border-rose-500/20">
                    ⛩️ JLPT Grammar Quiz (文法テスト)
                </span>
            </div>

            {/* STEP 1: INTRO / CONFIG */}
            {step === 'intro' && (
                <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-rose-500/10 text-rose-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                        <BookOpen size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-foreground">JLPT Bunpou (文法) Quiz</h2>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            N5 dan N1 gacha grammatika qoliplari va predloglarni tushunish bo'yicha interaktiv testlar.
                        </p>
                    </div>

                    {/* Level Selector */}
                    <div className="grid grid-cols-5 gap-2">
                        {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                            <button
                                key={lvl}
                                onClick={() => setLevel(lvl)}
                                className={`py-3 rounded-xl border text-xs font-black transition-all ${
                                    level === lvl
                                        ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-500/20'
                                        : 'bg-muted/40 border-border text-muted-foreground hover:bg-muted'
                                }`}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>

                    {/* Mode Selections */}
                    <div className="space-y-3 text-left pt-3">
                        <Button
                            onClick={handleStartSampleQuiz}
                            className="w-full py-4 bg-muted/50 hover:bg-muted text-foreground border border-border rounded-2xl font-bold text-xs transition-all flex items-center justify-between"
                        >
                            <span>1. Standart Mashq testi</span>
                            <ChevronRight size={16} />
                        </Button>

                        <div className="p-4 bg-gradient-to-br from-rose-500/5 via-amber-500/5 to-transparent border border-rose-500/20 rounded-2xl space-y-3">
                            <div>
                                <h4 className="text-xs font-black text-foreground flex items-center gap-1">
                                    <Sparkles size={14} className="text-rose-500" />
                                    AI Cheksiz Generator (DeepSeek)
                                </h4>
                                <p className="text-[10px] text-muted-foreground">DeepSeek sizning darajangizga mos 5 ta ekspert savollarini yaratib beradi.</p>
                            </div>
                            <Button
                                onClick={handleStartAIQuiz}
                                disabled={isGenerating}
                                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
                            >
                                {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                                <span>{isGenerating ? "Test yaratilmoqda..." : "AI Testni Boshlash"}</span>
                            </Button>
                            {aiError && (
                                <p className="text-[10px] text-rose-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {aiError}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 2: ACTIVE QUIZ */}
            {step === 'quiz' && questions[currentIdx] && (
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <span className="text-xs font-black text-rose-500">
                            Savol {currentIdx + 1} / {questions.length} · {questions[currentIdx].pattern}
                        </span>
                        <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs rounded-full">
                            Level {level}
                        </span>
                    </div>

                    <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                        <h3 className="text-base font-black text-foreground text-center py-6 font-serif">
                            {questions[currentIdx].questionText}
                        </h3>

                        {/* Option buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            {questions[currentIdx].options.map((opt, idx) => {
                                const isSelected = selectedAnswer === idx;
                                const isCorrectAnswer = questions[currentIdx].correctAnswer === idx;
                                
                                let btnStyle = "bg-muted/30 border-border text-muted-foreground hover:bg-muted";
                                if (showExplanation) {
                                    if (isCorrectAnswer) {
                                        btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-black";
                                    } else if (isSelected) {
                                        btnStyle = "bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-black";
                                    }
                                } else if (isSelected) {
                                    btnStyle = "bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-black";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        className={`p-4 rounded-xl border text-center text-xs font-bold transition-all ${btnStyle}`}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation block */}
                        {showExplanation && (
                            <div className="p-4 bg-muted/40 border border-border rounded-2xl space-y-2 mt-4">
                                <div className="flex items-center gap-1.5 text-xs font-bold">
                                    {selectedAnswer === questions[currentIdx].correctAnswer ? (
                                        <span className="text-emerald-500 flex items-center gap-1">
                                            <CheckCircle2 size={16} /> To'g'ri!
                                        </span>
                                    ) : (
                                        <span className="text-rose-500 flex items-center gap-1">
                                            <XCircle size={16} /> Xato.
                                        </span>
                                    )}
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">
                                    💡 <b>Tahlil (O'zbekcha):</b> {questions[currentIdx].explanationUzbek}
                                </p>
                            </div>
                        )}

                        <div className="pt-4">
                            {!showExplanation ? (
                                <Button
                                    onClick={handleAnswerSubmit}
                                    disabled={selectedAnswer === null}
                                    className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-xl shadow-lg disabled:opacity-50"
                                >
                                    Tekshirish 🎯
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-lg"
                                >
                                    {currentIdx === questions.length - 1 ? "Natijalarni ko'rish" : "Keyingi savol ➔"}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: REPORT */}
            {step === 'report' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-rose-500/10 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <Award size={32} />
                    </div>

                    <div>
                        <span className="text-xs font-extrabold uppercase text-rose-500 tracking-wider block">
                            JLPT {level} Bunpou (Grammar) Report
                        </span>
                        <h2 className="text-4xl font-black text-foreground mt-1">
                            {score} / {questions.length} To'g'ri
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Grammatika bo'yicha baholash yakunlandi.
                        </p>
                    </div>

                    <Button
                        onClick={() => {
                            setStep('intro');
                        }}
                        className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-2xl shadow-lg"
                    >
                        Qayta Topsherish 🔄
                    </Button>
                </div>
            )}
        </div>
    );
};

export default JlptGrammarQuizPage;
