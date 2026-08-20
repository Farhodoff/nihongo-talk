import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, Clock, BookOpen, Volume2, CheckCircle2, ChevronRight, Award, 
    Play, Pause, RotateCcw, Sparkles, AlertCircle, RefreshCw, BarChart2 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateAIResponse } from '../utils/ai/aiCore';
import { IELTS_LISTENING_EXAMS } from '../data/ielts/listening_data';
import { IELTS_READING_EXAMS } from '../data/ielts/reading_data';
import { HistoryService } from '../services/HistoryService';
import { useStudyData } from '../context/StudyPlannerContext';

interface Question {
    id: number;
    text: string;
    options?: string[];
    correctAnswer: string;
    type: 'choice' | 'fill';
    explanation: string;
}

interface PassageData {
    title: string;
    text: string;
    questions: Question[];
    audioUrl?: string;
}

export const IeltsReadingListeningMockPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP } = useStudyData();
    const [testType, setTestType] = useState<'reading' | 'listening'>('reading');
    const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

    // AI Generation States
    const [aiTopic, setAiTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);

    // Timer & Session
    const [timeLeft, setTimeLeft] = useState(1200); // 20 mins for reading/listening
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Active Passage/Questions Data
    const [currentPassage, setCurrentPassage] = useState<PassageData>({
        title: "The Future of Renewable Energy & Artificial Intelligence",
        text: `As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.\n\nTo mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.`,
        questions: [
            {
                id: 1,
                text: "What is mentioned as a major challenge for solar and wind energy?",
                options: [
                    "High installation cost",
                    "Intermittent nature and dependence on weather",
                    "Lack of trained engineers",
                    "High carbon emissions"
                ],
                correctAnswer: "1",
                type: "choice",
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
                correctAnswer: "2",
                type: "choice",
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
                correctAnswer: "2",
                type: "choice",
                explanation: "Passage states: 'reducing operational overhead by up to 35%.'"
            }
        ]
    });

    // User Answers State
    const [userAnswers, setUserAnswers] = useState<{ [qId: number]: string }>({});
    const [score, setScore] = useState(0);

    // Audio Playback States (Listening Section)
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [audioProgress, setAudioProgress] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // TTS Fallback SpeechSynthesis state
    const [isUsingTts, setIsUsingTts] = useState(false);
    const ttsUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

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

    // Cleanup audio & TTS on unmount or view change
    useEffect(() => {
        return () => {
            stopAudioPlayback();
        };
    }, []);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // --- Audio Player Logic ---
    const handlePlayPause = () => {
        if (testType !== 'listening') return;

        // If audioUrl is missing or is using TTS fallback
        if (!currentPassage.audioUrl || isUsingTts) {
            triggerTtsPlayback();
            return;
        }

        if (!audioRef.current) {
            const audio = new Audio(currentPassage.audioUrl);
            audioRef.current = audio;
            audio.playbackRate = playbackSpeed;

            audio.addEventListener('loadedmetadata', () => {
                setAudioDuration(audio.duration);
            });
            audio.addEventListener('timeupdate', () => {
                setAudioProgress(audio.currentTime);
            });
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setAudioProgress(0);
            });
            audio.addEventListener('error', () => {
                console.warn("Audio loading failed. Switching to TTS fallback.");
                setIsUsingTts(true);
                triggerTtsPlayback();
            });
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(() => {
                setIsUsingTts(true);
                triggerTtsPlayback();
            });
            setIsPlaying(true);
        }
    };

    const triggerTtsPlayback = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            const utterance = new SpeechSynthesisUtterance(currentPassage.text);
            utterance.lang = 'en-GB';
            utterance.rate = playbackSpeed;
            utterance.onend = () => {
                setIsPlaying(false);
            };
            utterance.onerror = () => {
                setIsPlaying(false);
            };
            ttsUtteranceRef.current = utterance;
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopAudioPlayback = () => {
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
        if (isPlaying && (isUsingTts || !currentPassage.audioUrl)) {
            // Restart TTS with new speed rate
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setTimeout(() => {
                setIsPlaying(true);
                const utterance = new SpeechSynthesisUtterance(currentPassage.text);
                utterance.lang = 'en-GB';
                utterance.rate = speed;
                utterance.onend = () => setIsPlaying(false);
                utterance.onerror = () => setIsPlaying(false);
                window.speechSynthesis.speak(utterance);
            }, 100);
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

    // --- Dynamic AI Generator ---
    const generatePassageWithAI = async () => {
        const topic = aiTopic.trim() || "Artificial Intelligence & Global Warming";
        setIsGenerating(true);
        setAiError(null);

        const prompt = `
          Act as an expert IELTS Academic Test Maker.
          Generate one complete IELTS practice task on the topic: "${topic}".
          The task type is: "${testType}" (either "reading" or "listening").
          
          Guidelines for "reading":
          Provide an Academic Reading passage of approximately 300 words, a title, and exactly 3 questions.
          
          Guidelines for "listening":
          Provide a listening script of approximately 200 words (which will be read aloud by TTS fallback), a title, and exactly 3 questions.
          
          Each question can be 'choice' (multiple choice, options index 0-3) or 'fill' (note/sentence completion with short text).
          
          Return ONLY a valid JSON object matching this structure (DO NOT wrap in markdown, backticks, or write other explanations):
          {
            "title": "Passage/Audio Title",
            "text": "The full reading passage text or listening script...",
            "questions": [
              {
                "id": 1,
                "text": "Question text...",
                "type": "choice",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": "0",
                "explanation": "Explanation for why this is correct..."
              },
              {
                "id": 2,
                "text": "Sentence completion question: The primary element is ________.",
                "type": "fill",
                "correctAnswer": "hydrogen",
                "explanation": "Explanation citation..."
              }
            ]
          }
        `;

        try {
            const rawResponse = await generateAIResponse([
                { role: 'system', content: 'You are a JSON only provider.' },
                { role: 'user', content: prompt }
            ]);
            const cleanJson = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
            const data: PassageData = JSON.parse(cleanJson);
            
            if (data.title && data.text && Array.isArray(data.questions)) {
                setCurrentPassage({
                    title: data.title,
                    text: data.text,
                    questions: data.questions
                });
                setUserAnswers({});
                setStep('test');
                setIsTimerRunning(true);
                setTimeLeft(testType === 'reading' ? 1200 : 900);
            } else {
                throw new Error("Invalid response format received from AI.");
            }
        } catch (err: any) {
            console.error(err);
            setAiError("Mashq yaratishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    // --- Load Practice Test ---
    const handleStartTest = (mode: 'sample' | 'ai' | 'cambridge') => {
        stopAudioPlayback();
        setUserAnswers({});
        setAiError(null);

        if (mode === 'sample') {
            setCurrentPassage({
                title: testType === 'reading' 
                    ? "The Future of Renewable Energy & Artificial Intelligence" 
                    : "IELTS Academic Listening: Customer Booking",
                text: testType === 'reading'
                    ? `As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.\n\nTo mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.`
                    : `Good morning. Welcome to the Sea View Hotel and Conference Center. How can I help you today? Yes, I'd like to make a room reservation for next week. I'll be attending the annual medical symposium. Excellent. What is your full name, please? It's Dr. Andrew Harrison. That's H-A-R-R-I-S-O-N. Thank you. And what room type would you prefer? We have standard deluxe rooms and executive suites. An executive suite would be perfect, as I need space to work. Perfect. And when will you be checking in? I'll arrive on Monday, the 21st of June, and leave on Friday, the 25th of June. So, that is four nights in total.`,
                questions: testType === 'reading' 
                    ? [
                        {
                            id: 1,
                            text: "What is mentioned as a major challenge for solar and wind energy?",
                            options: ["High installation cost", "Intermittent nature and dependence on weather", "Lack of trained engineers", "High carbon emissions"],
                            correctAnswer: "1",
                            type: "choice",
                            explanation: "Passage mentions: 'However, their intermittent nature—dependent on weather patterns—poses significant hurdles.'"
                        },
                        {
                            id: 2,
                            text: "How far in advance can predictive AI models forecast solar irradiance?",
                            options: ["Up to 12 hours", "Up to 24 hours", "Up to 48 hours", "Up to 1 week"],
                            correctAnswer: "2",
                            type: "choice",
                            explanation: "Passage states: 'forecast solar irradiance and wind speeds up to 48 hours in advance.'"
                        },
                        {
                            id: 3,
                            text: "By how much can AI optimization reduce operational overhead for power plants?",
                            options: ["Up to 15%", "Up to 25%", "Up to 35%", "Up to 50%"],
                            correctAnswer: "2",
                            type: "choice",
                            explanation: "Passage states: 'reducing operational overhead by up to 35%.'"
                        }
                    ]
                    : [
                        {
                            id: 1,
                            text: "Write the guest's surname spelling: ________",
                            correctAnswer: "Harrison",
                            type: "fill",
                            explanation: "The guest spells it: H-A-R-R-I-S-O-N."
                        },
                        {
                            id: 2,
                            text: "What room type did the guest reserve?",
                            options: ["Standard room", "Deluxe room", "Executive suite"],
                            correctAnswer: "2",
                            type: "choice",
                            explanation: "The guest explicitly requests: 'An executive suite would be perfect...'"
                        },
                        {
                            id: 3,
                            text: "Number of nights the guest will stay: ________",
                            correctAnswer: "4",
                            type: "fill",
                            explanation: "The receptionist confirms: 'So, that is four nights in total.'"
                        }
                    ]
            });
            setStep('test');
            setIsTimerRunning(true);
            setTimeLeft(testType === 'reading' ? 1200 : 900);
        } else if (mode === 'cambridge') {
            if (testType === 'reading') {
                const readingTest = IELTS_READING_EXAMS[0];
                setCurrentPassage({
                    title: readingTest.title,
                    text: readingTest.text,
                    questions: readingTest.questions
                });
                setStep('test');
                setIsTimerRunning(true);
                setTimeLeft(1200); // 20 mins
            } else {
                // Load Section 1 of Cambridge 18 Test 1
                const test = IELTS_LISTENING_EXAMS[0];
                const section = test.sections[0];
                setCurrentPassage({
                    title: section.title,
                    text: section.script || "Complete the questions while listening to the audio track.",
                    audioUrl: section.audioUrl,
                    questions: section.questions
                });
                setStep('test');
                setIsTimerRunning(true);
                setTimeLeft(900); // 15 mins
            }
        }
    };

    const handleOptionSelect = (questionId: number, answer: string) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleSubmitTest = async () => {
        stopAudioPlayback();
        setIsTimerRunning(false);

        let correctCount = 0;
        currentPassage.questions.forEach(q => {
            const userAns = (userAnswers[q.id] || '').trim().toLowerCase();
            const correctAns = q.correctAnswer.trim().toLowerCase();
            
            if (userAns === correctAns) {
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

        // Calculate band score
        const band = getBandScore(correctCount, currentPassage.questions.length);

        // Save Attempt to History
        try {
            await HistoryService.saveMockExam({
                examType: testType === 'reading' ? 'ielts_reading' : 'ielts_listening',
                score: correctCount,
                totalQuestions: currentPassage.questions.length,
                bandScore: band
            });
        } catch (err) {
            console.error("Failed to save mock test score history:", err);
        }
    };

    const getBandScore = (correct: number, total: number) => {
        const ratio = correct / total;
        if (ratio === 1) return 9.0;
        if (ratio >= 0.66) return 7.0;
        if (ratio >= 0.33) return 5.5;
        return 4.0;
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto pb-16 space-y-6">
            {/* Top Bar Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => {
                        stopAudioPlayback();
                        navigate('/ielts');
                    }}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs rounded-full border border-indigo-500/20">
                    📖 IELTS Academic Reading & Listening Simulator
                </span>
            </div>

            {/* STEP 1: INTRO / SELECTION */}
            {step === 'intro' && (
                <div className="space-y-6">
                    <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-indigo-500/10 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                            <BookOpen size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-foreground">IELTS Practice Simulator</h2>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                Shaxsiy AI rejimlaridan yoki klassik Cambridge IELTS listening testlaridan foydalanib o'z mahoratingizni oshiring.
                            </p>
                        </div>

                        {/* Test Type Selectors */}
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <button
                                onClick={() => setTestType('reading')}
                                className={`p-4 rounded-2xl border transition-all text-left ${
                                    testType === 'reading' ? 'bg-indigo-500/10 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-extrabold shadow-sm' : 'bg-muted/40 border-border text-muted-foreground'
                                }`}
                            >
                                <span className="block text-xs font-bold uppercase">Section 1</span>
                                <span className="text-sm font-black text-foreground block mt-0.5">📖 Academic Reading</span>
                                <span className="text-[10px] text-muted-foreground mt-1 block">Matnli Reading va savollar</span>
                            </button>
                            <button
                                onClick={() => setTestType('listening')}
                                className={`p-4 rounded-2xl border transition-all text-left ${
                                    testType === 'listening' ? 'bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold shadow-sm' : 'bg-muted/40 border-border text-muted-foreground'
                                }`}
                            >
                                <span className="block text-xs font-bold uppercase">Section 2</span>
                                <span className="text-sm font-black text-foreground block mt-0.5">🎧 Audio Listening</span>
                                <span className="text-[10px] text-muted-foreground mt-1 block">Audio pleyer va savollar</span>
                            </button>
                        </div>

                        {/* Practice Mode Options */}
                        <div className="space-y-3 pt-2 text-left">
                            <h4 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider mb-2">Mashq rejimini tanlang:</h4>
                            
                            {/* Option 1: Sample Quick Test */}
                            <button
                                onClick={() => handleStartTest('sample')}
                                className="w-full p-4 bg-muted/40 hover:bg-muted border border-border hover:border-indigo-500/50 rounded-2xl transition-all flex items-center justify-between"
                            >
                                <div>
                                    <h5 className="text-xs font-black text-foreground">1. Standart Mashq testi</h5>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">Tezkor baholash uchun tayyor variantlar</p>
                                </div>
                                <ChevronRight size={18} className="text-muted-foreground" />
                            </button>

                            {/* Option 2: Cambridge IELTS Test (Listening only) */}
                            {testType === 'listening' && (
                                <button
                                    onClick={() => handleStartTest('cambridge')}
                                    className="w-full p-4 bg-muted/40 hover:bg-muted border border-border hover:border-purple-500/50 rounded-2xl transition-all flex items-center justify-between"
                                >
                                    <div>
                                        <h5 className="text-xs font-black text-foreground">2. Cambridge 18 Test 1 (Audio)</h5>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">Haqiqiy IELTS audio oqimi bilan ishlash</p>
                                    </div>
                                    <ChevronRight size={18} className="text-muted-foreground" />
                                </button>
                            )}

                            {/* Option 3: DeepSeek AI dynamic Generator */}
                            <div className="p-4 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent border border-indigo-500/20 rounded-2xl space-y-3">
                                <div>
                                    <h5 className="text-xs font-black text-foreground flex items-center gap-1.5">
                                        <Sparkles size={14} className="text-indigo-500" />
                                        Mavzuli AI Generator (DeepSeek v4)
                                    </h5>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">Siz xohlagan har qanday mavzuda matn va IELTS savollarini yaratadi.</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={aiTopic}
                                        onChange={(e) => setAiTopic(e.target.value)}
                                        placeholder="Mavzu: e.g. Space Exploration, History..."
                                        disabled={isGenerating}
                                        className="flex-1 px-3.5 py-2 text-xs border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <Button
                                        onClick={generatePassageWithAI}
                                        disabled={isGenerating}
                                        className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center gap-1 shadow hover:bg-indigo-700"
                                    >
                                        {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                                        Yaratish
                                    </Button>
                                </div>
                                {aiError && (
                                    <p className="text-[10px] text-rose-500 flex items-center gap-1">
                                        <AlertCircle size={12} /> {aiError}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 2: ACTIVE TEST SCREEN */}
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
                        
                        {/* LEFT: Passage / Audio Player Card */}
                        <div className="bg-card border border-border p-6 rounded-3xl space-y-4 shadow-sm h-fit">
                            <div className="border-b border-border pb-3">
                                <h3 className="text-base font-extrabold text-foreground">{currentPassage.title}</h3>
                            </div>

                            {testType === 'listening' ? (
                                <div className="space-y-5 py-4">
                                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 rounded-2xl text-center space-y-3">
                                        <div className="flex justify-center">
                                            <div className="p-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full animate-pulse">
                                                <Volume2 size={32} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-foreground">Listening Audio Track</h4>
                                            <p className="text-[10px] text-muted-foreground mt-0.5">
                                                {currentPassage.audioUrl ? "Rasmiy MP3 fayl yuklangan" : "Brauzer TTS yordamida eshittiriladi"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Audio Controller Panel */}
                                    <div className="space-y-3 bg-muted/40 p-4 border border-border rounded-2xl">
                                        {/* Seek slider */}
                                        <div className="flex items-center gap-2 text-xs font-mono">
                                            <span>{formatTime(Math.round(audioProgress))}</span>
                                            <input
                                                type="range"
                                                min={0}
                                                max={audioDuration || 300} // default 5 mins if metadata not loaded
                                                value={audioProgress}
                                                onChange={handleSeek}
                                                className="flex-1 accent-indigo-600"
                                            />
                                            <span>{formatTime(Math.round(audioDuration || 300))}</span>
                                        </div>

                                        {/* Play controls */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => skipTime(-10)}
                                                    className="p-2 hover:bg-muted rounded-xl transition-all"
                                                    title="10s orqaga"
                                                >
                                                    <RotateCcw size={16} />
                                                </button>
                                                <Button
                                                    onClick={handlePlayPause}
                                                    className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow hover:bg-indigo-700"
                                                >
                                                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                                                </Button>
                                                <button
                                                    onClick={() => skipTime(10)}
                                                    className="p-2 hover:bg-muted rounded-xl transition-all"
                                                    title="10s oldinga"
                                                >
                                                    <Play size={16} className="rotate-180" />
                                                </button>
                                            </div>

                                            {/* Speed controls */}
                                            <div className="flex gap-1.5 text-[10px] font-bold">
                                                {[0.8, 1.0, 1.2, 1.5].map(speed => (
                                                    <button
                                                        key={speed}
                                                        onClick={() => handleSpeedChange(speed)}
                                                        className={`px-2 py-1 rounded-md border ${
                                                            playbackSpeed === speed ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-background border-border text-muted-foreground'
                                                        }`}
                                                    >
                                                        {speed}x
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground text-center italic">
                                        Eslatma: IELTS Listening paytida savollarga javob yozib boring. Matn pastda yashirilgan.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line font-serif">
                                    {currentPassage.text}
                                </p>
                            )}
                        </div>

                        {/* RIGHT: Questions List */}
                        <div className="space-y-4">
                            {currentPassage.questions.map(q => (
                                <div key={q.id} className="bg-card border border-border p-5 rounded-2xl space-y-3 shadow-sm">
                                    <h4 className="text-xs font-black text-foreground">
                                        Q{q.id}. {q.text}
                                    </h4>

                                    {/* Question Type: Choice */}
                                    {q.type === 'choice' && q.options && (
                                        <div className="space-y-2">
                                            {q.options.map((opt, idx) => {
                                                const isSelected = userAnswers[q.id] === idx.toString();
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleOptionSelect(q.id, idx.toString())}
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
                                    )}

                                    {/* Question Type: Fill in the blank */}
                                    {q.type === 'fill' && (
                                        <input
                                            type="text"
                                            value={userAnswers[q.id] || ''}
                                            onChange={(e) => handleOptionSelect(q.id, e.target.value)}
                                            placeholder="Javobingizni yozing..."
                                            className="w-full px-4 py-2 text-xs border border-border rounded-xl bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    )}
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

            {/* STEP 3: REPORT & EXPLANATION */}
            {step === 'report' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <Award size={32} />
                    </div>

                    <div>
                        <span className="text-xs font-extrabold uppercase text-indigo-500 tracking-wider block">
                            IELTS Academic {testType.toUpperCase()} Report
                        </span>
                        <h2 className="text-4xl font-black text-foreground mt-1">
                            Band {getBandScore(score, currentPassage.questions.length).toFixed(1)}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Siz {currentPassage.questions.length} ta savoldan <span className="font-extrabold text-indigo-500">{score} ta</span> to'g'ri javob berdingiz.
                        </p>
                    </div>

                    {/* Explanations List */}
                    <div className="text-left space-y-3 border-t border-border pt-4">
                        <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1">
                            <BarChart2 size={16} /> Javoblar Tahlili:
                        </h4>
                        {currentPassage.questions.map(q => {
                            const isCorrect = (userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                            return (
                                <div key={q.id} className={`p-4 rounded-2xl border text-xs space-y-2 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'}`}>
                                    <div className="font-bold text-foreground flex items-center justify-between">
                                        <span>Q{q.id}. {q.text}</span>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${isCorrect ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}>
                                            {isCorrect ? "To'g'ri" : "Xato"}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground">
                                        Sizning javobingiz: <span className="font-bold text-foreground">{userAnswers[q.id] || '(Bo\'sh)'}</span>
                                    </p>
                                    <p className="text-[11px] text-muted-foreground">
                                        To'g'ri javob: <span className="font-bold text-indigo-500">{q.type === 'choice' && q.options ? q.options[parseInt(q.correctAnswer)] : q.correctAnswer}</span>
                                    </p>
                                    <div className="text-muted-foreground text-[10px] bg-muted/40 p-2 rounded-lg border border-border/50">
                                        💡 <b>Tahlil:</b> {q.explanation}
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
                        Bosh sahifaga qaytish 🔄
                    </Button>
                </div>
            )}
        </div>
    );
};

export default IeltsReadingListeningMockPage;
