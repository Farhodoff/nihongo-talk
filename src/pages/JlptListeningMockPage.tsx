import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, Clock, Volume2, CheckCircle2, Award, 
    Play, Pause, RotateCcw, BookOpen 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { JLPT_LISTENING_QUESTIONS, JlptListeningQuestion } from '../data/jlpt/listening_data';
import { HistoryService } from '../services/HistoryService';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';

export const JlptListeningMockPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP, addSession } = useStudyData();
    const { language } = useLanguage();
    const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
    const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

    // Timer & Status
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Questions State
    const [activeQuestions, setActiveQuestions] = useState<JlptListeningQuestion[]>([]);
    const [currentQIdx, setCurrentQIdx] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});
    const [score, setScore] = useState(0);

    // Audio Playback
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [audioProgress, setAudioProgress] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // TTS Fallback
    const [isUsingTts, setIsUsingTts] = useState(false);

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

    useEffect(() => {
        return () => {
            stopAudio();
        };
    }, []);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // --- Start JLPT Listening Test ---
    const handleStartTest = () => {
        let filtered = JLPT_LISTENING_QUESTIONS.filter(q => q.level === level);
        if (filtered.length === 0) {
            filtered = JLPT_LISTENING_QUESTIONS.filter(q => q.level === 'N5');
        }

        stopAudio();
        setActiveQuestions(filtered);
        setCurrentQIdx(0);
        setUserAnswers({});
        setStep('test');
        setIsTimerRunning(true);
        setTimeLeft(1800);
    };

    // --- Audio Logic ---
    const handlePlayPause = () => {
        const activeQ = activeQuestions[currentQIdx];
        if (!activeQ) return;

        if (isPlaying) {
            stopAudio();
        } else {
            playAudio(activeQ);
        }
    };

    const playAudio = (q: JlptListeningQuestion) => {
        stopAudio();
        setIsPlaying(true);

        if (q.audioUrl) {
            const audio = new Audio(q.audioUrl);
            audio.playbackRate = playbackSpeed;
            audioRef.current = audio;

            audio.onloadedmetadata = () => {
                setAudioDuration(audio.duration);
            };

            audio.ontimeupdate = () => {
                setAudioProgress(audio.currentTime);
            };

            audio.onended = () => {
                setIsPlaying(false);
                setAudioProgress(0);
            };

            audio.onerror = () => {
                console.warn("Audio file failed to load, falling back to Web Speech TTS");
                setIsUsingTts(true);
                playTtsFallback(q.script);
            };

            audio.play().catch(e => {
                console.warn("Audio play rejected, using TTS:", e);
                setIsUsingTts(true);
                playTtsFallback(q.script);
            });
        } else {
            setIsUsingTts(true);
            playTtsFallback(q.script);
        }
    };

    const playTtsFallback = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = playbackSpeed;
            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = () => setIsPlaying(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopAudio = () => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
        window.speechSynthesis.cancel();
    };

    const handleSpeedChange = (speed: number) => {
        setPlaybackSpeed(speed);
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setAudioProgress(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const skipTime = (amount: number) => {
        if (audioRef.current) {
            let next = audioRef.current.currentTime + amount;
            if (next < 0) next = 0;
            if (next > audioRef.current.duration) next = audioRef.current.duration;
            audioRef.current.currentTime = next;
            setAudioProgress(next);
        }
    };

    const handleOptionSelect = (optionIdx: number) => {
        const activeQ = activeQuestions[currentQIdx];
        if (!activeQ) return;
        setUserAnswers(prev => ({ ...prev, [activeQ.id]: optionIdx }));
    };

    const handleNext = () => {
        stopAudio();
        setIsUsingTts(false);
        setAudioDuration(0);
        setAudioProgress(0);

        if (currentQIdx < activeQuestions.length - 1) {
            setCurrentQIdx(prev => prev + 1);
        } else {
            handleSubmitTest();
        }
    };

    const handleSubmitTest = async () => {
        stopAudio();
        setIsTimerRunning(false);

        let correctCount = 0;
        activeQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        setScore(correctCount);
        setStep('report');

        // Award XP
        try {
            if (awardXP && correctCount > 0) {
                await awardXP(correctCount * 25);
            }
        } catch (e) {}

        // Add study session to public.study_sessions
        if (addSession) {
            try {
                await addSession({
                    duration: 20,
                    type: 'focus',
                    completed: true,
                    startTime: new Date().toISOString()
                });
            } catch (e) {}
        }

        // Save mock exam to history
        try {
            await HistoryService.saveMockExam({
                examType: 'jlpt',
                level: level,
                score: correctCount,
                totalQuestions: activeQuestions.length,
                bandScore: Math.round((correctCount / (activeQuestions.length || 1)) * 180)
            });
        } catch (e) {
            console.error("Failed to save JLPT score:", e);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto pb-16 space-y-6">
            {/* Top Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => {
                        stopAudio();
                        navigate('/jlpt');
                    }}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs rounded-full border border-rose-500/20">
                    🎌 {language === 'ja' ? 'JLPT ちょうかい（きく）れんしゅう' : 'JLPT Listening Practice (聴解)'}
                </span>
            </div>

            {/* STEP 1: INTRO LEVEL SELECTION */}
            {step === 'intro' && (
                <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-rose-500/10 text-rose-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                        <Volume2 size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-foreground">
                            {language === 'ja' ? 'JLPT ちょうかい（きく）れんしゅう' : 'JLPT Choukail (聴解) Practice'}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            {language === 'ja'
                                ? 'N5からN1までの ちょうかい れんしゅうもんだい。'
                                : "N5 dan N1 gacha bo'lgan darajalar bo'yicha Yapon tili tinglab tushunish mashqlari."}
                        </p>
                    </div>

                    {/* Level Buttons Grid */}
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

                    <Button
                        onClick={handleStartTest}
                        className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-rose-500/20"
                    >
                        {language === 'ja' ? 'れんしゅうを スタート 🎌' : 'Imtihonni Boshlash 🎌'}
                    </Button>
                </div>
            )}

            {/* STEP 2: ACTIVE TEST */}
            {step === 'test' && activeQuestions[currentQIdx] && (
                <div className="space-y-6">
                    {/* Progress Bar & Timer */}
                    <div className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <span className="text-xs font-black text-rose-500">
                            {level} tinglash testi · Savol {currentQIdx + 1} / {activeQuestions.length}
                        </span>
                        <div className="flex items-center gap-2 bg-rose-500/10 text-rose-600 dark:text-rose-400 px-4 py-1.5 rounded-full font-mono font-extrabold text-sm border border-rose-500/20">
                            <Clock size={16} />
                            <span>{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* LEFT: Audio Player & Instruction */}
                        <div className="bg-card border border-border p-6 rounded-3xl space-y-4 shadow-sm h-fit">
                            <div className="border-b border-border pb-3">
                                <h3 className="text-sm font-extrabold text-foreground">
                                    {activeQuestions[currentQIdx].type === 'task' && "課題理解 (Vazifa tushunish)"}
                                    {activeQuestions[currentQIdx].type === 'point' && "ポイント理解 (Kalit nuqtalarni tushunish)"}
                                    {activeQuestions[currentQIdx].type === 'quick' && "即時応答 (Tezkor javob qaytarish)"}
                                </h3>
                            </div>

                            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 rounded-2xl text-center space-y-3">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full animate-pulse">
                                        <Volume2 size={32} />
                                    </div>
                                </div>
                                <h4 className="text-xs font-bold text-foreground">
                                    {isUsingTts ? "TTS Audio Track (AI Ovoz)" : "Listening Audio Track"}
                                </h4>
                            </div>

                            {/* Audio Progress Slider */}
                            <div className="space-y-3 bg-muted/40 p-4 border border-border rounded-2xl">
                                <div className="flex items-center gap-2 text-xs font-mono">
                                    <span>{formatTime(Math.round(audioProgress))}</span>
                                    <input
                                        type="range"
                                        min={0}
                                        max={audioDuration || 60}
                                        value={audioProgress}
                                        onChange={handleSeek}
                                        className="flex-1 accent-rose-600"
                                    />
                                    <span>{formatTime(Math.round(audioDuration || 60))}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => skipTime(-10)} className="p-2 hover:bg-muted rounded-xl"><RotateCcw size={16} /></button>
                                        <Button
                                            onClick={handlePlayPause}
                                            className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center shadow hover:bg-rose-700"
                                        >
                                            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                                        </Button>
                                        <button onClick={() => skipTime(10)} className="p-2 hover:bg-muted rounded-xl"><Play size={16} className="rotate-180" /></button>
                                    </div>

                                    {/* Speed */}
                                    <div className="flex gap-1.5 text-[10px] font-bold">
                                        {[0.8, 1.0, 1.2].map(speed => (
                                            <button
                                                key={speed}
                                                onClick={() => handleSpeedChange(speed)}
                                                className={`px-2 py-1 rounded-md border ${
                                                    playbackSpeed === speed ? 'bg-rose-500 text-white border-rose-500' : 'bg-background border-border text-muted-foreground'
                                                }`}
                                            >
                                                {speed}x
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Questions */}
                        <div className="space-y-4">
                            <div className="bg-card border border-border p-5 rounded-2xl space-y-4 shadow-sm">
                                <h4 className="text-xs font-black text-foreground">
                                    {activeQuestions[currentQIdx].questionText}
                                </h4>

                                <div className="space-y-2">
                                    {activeQuestions[currentQIdx].options.map((opt, idx) => {
                                        const isSelected = userAnswers[activeQuestions[currentQIdx].id] === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionSelect(idx)}
                                                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                                                    isSelected ? 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400' : 'bg-muted/30 border-border text-muted-foreground hover:bg-muted'
                                                }`}
                                            >
                                                <span>{opt}</span>
                                                {isSelected && <CheckCircle2 size={15} className="text-rose-500" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <Button
                                onClick={handleNext}
                                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-2xl shadow-lg"
                            >
                                {currentQIdx === activeQuestions.length - 1 ? "Natijani Ko'rish 🎯" : "Keyingi Savol ➔"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: REPORT & SCRIPT EXPLANATIONS */}
            {step === 'report' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-rose-500/10 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <Award size={32} />
                    </div>

                    <div>
                        <span className="text-xs font-extrabold uppercase text-rose-500 tracking-wider block">
                            JLPT {level} Listening report
                        </span>
                        <h2 className="text-4xl font-black text-foreground mt-1">
                            {score} / {activeQuestions.length} To'g'ri
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Natijangiz muvaffaqiyatli saqlandi.
                        </p>
                    </div>

                    <div className="text-left space-y-3 border-t border-border pt-4">
                        <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                            <BookOpen size={16} /> Savollar va Skript tahlili:
                        </h4>

                        {activeQuestions.map((q, idx) => {
                            const isCorrect = userAnswers[q.id] === q.correctAnswer;
                            return (
                                <div key={q.id} className={`p-4 rounded-2xl border text-xs space-y-3 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'}`}>
                                    <div className="font-bold text-foreground flex items-center justify-between">
                                        <span>Savol {idx + 1}. {q.questionText}</span>
                                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${isCorrect ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}>
                                            {isCorrect ? "To'g'ri" : "Xato"}
                                        </span>
                                    </div>

                                    {/* Text script */}
                                    <div className="bg-muted/40 p-3 rounded-lg border border-border/50 text-[11px] font-serif leading-relaxed whitespace-pre-wrap">
                                        <b>Audio Skript (台本):</b>\n{q.script}
                                    </div>

                                    <p className="text-[11px] text-muted-foreground">
                                        To'g'ri javob: <span className="font-bold text-rose-500">{q.options[q.correctAnswer]}</span>
                                    </p>

                                    <div className="text-muted-foreground text-[10px] bg-muted/40 p-2 rounded-lg border border-border/50">
                                        💡 <b>O'zbekcha tushuntirish:</b> {q.explanationUzbek}
                                    </div>
                                </div>
                            );
                        })}
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

export default JlptListeningMockPage;
