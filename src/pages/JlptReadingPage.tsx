import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle2, XCircle, HelpCircle, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import FuriganaText from '../components/jlpt/FuriganaText';
import { JLPT_READING_PASSAGES, JlptReadingPassage } from '../data/jlptReadingData';
import { useStudyData } from '../context/StudyPlannerContext';

export const JlptReadingPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP } = useStudyData();

    const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
    const [currentPassageIndex, setCurrentPassageIndex] = useState(0);

    const levelPassages = JLPT_READING_PASSAGES.filter(p => p.level === selectedLevel);
    const currentPassage: JlptReadingPassage | undefined = levelPassages[currentPassageIndex] || levelPassages[0];

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
            timer = setTimeout(() => setTimeLeftSeconds(prev => prev - 1), 1000);
        } else if (isTimerActive && timeLeftSeconds === 0 && !isSubmitted) {
            setIsSubmitted(true);
        }
        return () => clearTimeout(timer);
    }, [isTimerActive, timeLeftSeconds, isSubmitted]);

    const handleSelectAnswer = (questionId: string, optionIndex: number) => {
        if (isSubmitted) return;
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
    };

    const handleSubmit = () => {
        if (!currentPassage || isSubmitted) return;
        setIsSubmitted(true);
        setIsTimerActive(false);

        // Calculate score
        let correctCount = 0;
        currentPassage.questions.forEach(q => {
            if (userAnswers[q.id] === q.correctIndex) {
                correctCount++;
            }
        });

        if (correctCount > 0 && awardXP) {
            awardXP(correctCount * 15);
        }
    };

    const formatTime = (totalSec: number) => {
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate('/jlpt')}
                        className="text-slate-400 hover:text-white"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                            📖 JLPT Reading (読解) Master
                        </h1>
                        <p className="text-sm text-slate-400">
                            N5–N1 darajasidagi yaponcha o'qish matnlari va savollar
                        </p>
                    </div>
                </div>

                {/* Level Selectors */}
                <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                    {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => {
                                setSelectedLevel(lvl);
                                setCurrentPassageIndex(0);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                                selectedLevel === lvl
                                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                            }`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>

            {currentPassage ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Passage */}
                    <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-rose-500" />
                                {currentPassage.title}
                            </h2>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowTranslation(!showTranslation)}
                                    className="text-xs border-slate-700 hover:bg-slate-800"
                                >
                                    {showTranslation ? <EyeOff className="w-3.5 h-3.5 mr-1" /> : <Eye className="w-3.5 h-3.5 mr-1" />}
                                    {showTranslation ? "Tarjimani Yashirish" : "O'zbekcha Tarjima"}
                                </Button>
                            </div>
                        </div>

                        {/* Passage Japanese Text */}
                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-slate-100 text-lg leading-relaxed space-y-3 font-medium min-h-[200px]">
                            {currentPassage.japaneseContent.split('\n').map((line, idx) => (
                                <p key={idx}>
                                    <FuriganaText text={line} />
                                </p>
                            ))}
                        </div>

                        {/* Uzbek Translation Toggle */}
                        {showTranslation && (
                            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-amber-200/90 text-sm leading-relaxed">
                                <div className="font-semibold mb-1 text-amber-400">🇺🇿 O'zbekcha Tarjimasi:</div>
                                {currentPassage.uzbekTranslation}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Questions & Timer */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Timer Card */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`p-2.5 rounded-xl ${isTimerActive ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-400'}`}>
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 font-medium">Tavsiya Etilgan Vaqt</div>
                                    <div className="text-xl font-bold font-mono text-white">
                                        {formatTime(timeLeftSeconds)}
                                    </div>
                                </div>
                            </div>

                            {!isSubmitted && (
                                <Button
                                    variant={isTimerActive ? "destructive" : "secondary"}
                                    size="sm"
                                    onClick={() => setIsTimerActive(!isTimerActive)}
                                >
                                    {isTimerActive ? "Vaqtni To'xtatish" : "Taymerni Boshlash"}
                                </Button>
                            )}
                        </div>

                        {/* Questions List */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                                <HelpCircle className="w-4 h-4 text-sky-400" />
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

                                                let btnStyle = "border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-300";

                                                if (isSubmitted) {
                                                    if (isCorrect) {
                                                        btnStyle = "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 font-semibold";
                                                    } else if (isSelected && !isCorrect) {
                                                        btnStyle = "border-rose-500/50 bg-rose-500/10 text-rose-300";
                                                    }
                                                } else if (isSelected) {
                                                    btnStyle = "border-rose-500 bg-rose-500/20 text-white font-medium";
                                                }

                                                return (
                                                    <button
                                                        key={oIdx}
                                                        disabled={isSubmitted}
                                                        onClick={() => handleSelectAnswer(q.id, oIdx)}
                                                        className={`w-full text-left p-3 rounded-xl border text-sm transition-all flex items-center justify-between ${btnStyle}`}
                                                    >
                                                        <span><FuriganaText text={opt} /></span>
                                                        {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />}
                                                        {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Explanation when submitted */}
                                        {isSubmitted && (
                                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400">
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
                                    className="w-full bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-rose-600/30"
                                >
                                    Javoblarni Tekshirish 🚀
                                </Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setUserAnswers({});
                                        setIsSubmitted(false);
                                        if (currentPassage) setTimeLeftSeconds(currentPassage.recommendedTimeMinutes * 60);
                                    }}
                                    className="w-full border-slate-700 hover:bg-slate-800 text-slate-300"
                                >
                                    <RotateCcw className="w-4 h-4 mr-2" /> Qayta O'rinib Ko'rish
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-3">
                    <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
                    <p>Ushbu daraja uchun o'qish matnlari tez orada qo'shiladi.</p>
                </div>
            )}
        </div>
    );
};
export default JlptReadingPage;
