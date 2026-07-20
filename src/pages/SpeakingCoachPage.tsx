import React, { useState, useEffect, useRef } from 'react';
import { 
    Mic, MicOff, PhoneOff, PhoneCall, Volume2, Activity, Globe, 
    Settings as SettingsIcon, X, Sparkles, Flame, GraduationCap, Briefcase, 
    RotateCcw, Copy, Check, Zap, Play, ShieldAlert, Cpu, HeartPulse
} from 'lucide-react';
import { converseWithCoach, getAIConfig, fetchOpenAITTS, AIProvider } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: string;
}

export type CoachPersona = 'roast' | 'gentle' | 'ielts' | 'interview';

const PERSONAS: Record<CoachPersona, { name: string; icon: any; color: string; desc: string; badge: string }> = {
    roast: {
        name: 'Strict Roast Coach',
        icon: Flame,
        color: 'from-orange-500 to-rose-600',
        desc: 'Kamchiliklaringizni shafqatsiz va hazil aralash roast qiladi',
        badge: '🌶️ Shiddatli & Roast'
    },
    gentle: {
        name: 'Sabrli Tutor',
        icon: Sparkles,
        color: 'from-emerald-400 to-teal-600',
        desc: 'Yumshoq va xushmuomala tarzda xatolaringizni tushuntiradi',
        badge: '🌿 Muloyim & Sabrli'
    },
    ielts: {
        name: 'IELTS Examiner',
        icon: GraduationCap,
        color: 'from-blue-500 to-indigo-600',
        desc: 'IELTS Speaking standarti bo\'yicha savol-javob qiladi',
        badge: '🎓 IELTS Imtihonchi'
    },
    interview: {
        name: 'Tech Interviewer',
        icon: Briefcase,
        color: 'from-purple-500 to-violet-700',
        desc: 'Ishga kirish suhbatlariga ingliz tilida tayyorlaydi',
        badge: '💼 HR & Intervyuer'
    }
};

const PROMPT_SUGGESTIONS = [
    { title: "O'zingni tanishtir", text: "Hello! Can you introduce yourself and tell me how you can help my English?" },
    { title: "Roast rejimini yoq", text: "I'm ready for your toughest roast. Test my English speaking right now!" },
    { title: "IELTS Part 2 amaliyoti", text: "Let's do IELTS Speaking Part 2. Give me a cue card topic to talk about." },
    { title: "Intervyu savol-javob", text: "Act as a tech recruiter and ask me top 3 interview questions." }
];

const SpeakingCoachPage: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'ja'>('en');
    const [persona, setPersona] = useState<CoachPersona>('roast');
    const [isLiveSession, setIsLiveSession] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTranscript, setCurrentTranscript] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [sessionSeconds, setSessionSeconds] = useState(0);

    const { settings, updateSettings } = useStudyData();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [coachAiModel, setCoachAiModel] = useState<AIProvider>((settings.coachAiModel as AIProvider) || 'gemini');
    const [coachApiKey, setCoachApiKey] = useState(settings.coachApiKey || '');

    const recognitionRef = useRef<any>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    // Live session timer
    useEffect(() => {
        let interval: any;
        if (isLiveSession) {
            interval = setInterval(() => {
                setSessionSeconds(prev => prev + 1);
            }, 1000);
        } else {
            setSessionSeconds(0);
        }
        return () => clearInterval(interval);
    }, [isLiveSession]);

    const formatTimer = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSaveSettings = () => {
        updateSettings({
            coachAiModel,
            coachApiKey
        });
        setIsSettingsOpen(false);
    };

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = true;

            recognitionRef.current.onresult = (event: any) => {
                let interimTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    interimTranscript += event.results[i][0].transcript;
                }
                setCurrentTranscript(interimTranscript);
            };

            recognitionRef.current.onerror = (event: any) => {
                if (event.error !== 'no-speech') {
                    console.error('Speech recognition error', event.error);
                }
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        } else {
            setError('Sizning brauzeringiz ovoz yozishni qo\'llab-quvvatlamaydi. Iltimos, Chrome brauzeridan foydalaning.');
        }

        return () => {
            endSession();
        };
    }, []);

    // Scroll to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, currentTranscript, isThinking]);

    // Speech process queue
    useEffect(() => {
        const processSpeech = async () => {
            if (isLiveSession && !isListening && currentTranscript.trim() && !isSpeaking && !isThinking && !isMuted) {
                const userText = currentTranscript.trim();
                setCurrentTranscript('');
                
                const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const updatedHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: userText, timestamp: timeStr }];
                setChatHistory(updatedHistory);
                
                if (recognitionRef.current) recognitionRef.current.stop();
                
                setIsThinking(true);
                try {
                    const aiResponse = await converseWithCoach(userText, chatHistory, language);
                    
                    const resTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponse, timestamp: resTimeStr }]);
                    setIsThinking(false);
                    
                    speakText(aiResponse);
                } catch (err: any) {
                    setError(err.message || "Tahlil qilishda xatolik yuz berdi.");
                    setIsThinking(false);
                    resumeListening();
                }
            } else if (isLiveSession && !isListening && !isSpeaking && !isThinking && !currentTranscript.trim() && !isMuted) {
                resumeListening();
            }
        };
        
        processSpeech();
    }, [isListening, isLiveSession, isSpeaking, isThinking, isMuted, language]);

    const speakText = async (text: string) => {
        setIsSpeaking(true);
        synthRef.current.cancel();
        if (audioPlayerRef.current) {
            audioPlayerRef.current.pause();
            audioPlayerRef.current = null;
        }

        const config = getAIConfig();
        
        if (config.openAIApiKey) {
            try {
                const blob = await fetchOpenAITTS(text, config.coachVoice || 'alloy', config.openAIApiKey);
                const url = URL.createObjectURL(blob);
                const audio = new Audio(url);
                audioPlayerRef.current = audio;
                
                audio.onended = () => {
                    setIsSpeaking(false);
                    URL.revokeObjectURL(url);
                    resumeListening();
                };
                
                audio.onerror = () => {
                    setIsSpeaking(false);
                    URL.revokeObjectURL(url);
                    resumeListening();
                };
                
                audio.play().catch(() => {
                    setIsSpeaking(false);
                    resumeListening();
                });
                return;
            } catch (error) {
                console.error("OpenAI TTS error fallback to browser voice", error);
            }
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'ja' ? 'ja-JP' : 'en-US';
        
        const voices = synthRef.current.getVoices();
        if (language === 'ja') {
            const jpVoice = voices.find(v => v.lang.includes('ja') && (v.name.includes('Google') || v.name.includes('Kyoko')));
            if (jpVoice) utterance.voice = jpVoice;
        } else {
            const engVoice = voices.find(v => v.lang.startsWith('en-') && (v.name.includes('Natural') || v.name.includes('Google')));
            if (engVoice) utterance.voice = engVoice;
        }
        
        utterance.onend = () => {
            setIsSpeaking(false);
            resumeListening();
        };
        
        utterance.onerror = () => {
            setIsSpeaking(false);
            resumeListening();
        };

        synthRef.current.speak(utterance);
    };

    const resumeListening = () => {
        if (isLiveSession && recognitionRef.current && !isSpeaking && !isThinking && !isMuted) {
            try {
                recognitionRef.current.lang = language === 'ja' ? 'ja-JP' : 'en-US';
                recognitionRef.current.start();
                setIsListening(true);
            } catch (e) {
                // Already started
            }
        }
    };

    const toggleSession = () => {
        if (!recognitionRef.current) return;
        if (isLiveSession) {
            endSession();
        } else {
            startSession();
        }
    };

    const startSession = () => {
        setIsLiveSession(true);
        setCurrentTranscript('');
        setError(null);
        try {
            recognitionRef.current.lang = language === 'ja' ? 'ja-JP' : 'en-US';
            recognitionRef.current.start();
            setIsListening(true);
        } catch (e) {
            console.error(e);
        }
    };

    const endSession = () => {
        setIsLiveSession(false);
        setIsListening(false);
        setIsSpeaking(false);
        setIsThinking(false);
        setCurrentTranscript('');
        if (recognitionRef.current) recognitionRef.current.stop();
        synthRef.current.cancel();
    };

    const handlePromptClick = (text: string) => {
        if (!isLiveSession) {
            startSession();
        }
        setCurrentTranscript(text);
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const ActivePersonaIcon = PERSONAS[persona].icon;

    return (
        <div className="relative p-3 md:p-6 max-w-5xl mx-auto h-[calc(100vh-4rem)] flex flex-col overflow-hidden w-full select-none">
            
            {/* Ambient Background Blur Elements */}
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />

            {/* Header Section */}
            <header className="mb-4 flex-shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-3 z-10">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                        <Mic size={26} className="animate-bounce-slow" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                                Live Speaking Coach
                            </h2>
                            <span className="px-2.5 py-0.5 text-xs font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800 flex items-center gap-1">
                                <Zap size={12} className="text-amber-500 fill-amber-500" /> AI Voice 2.0
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                            Sun'iy intellekt bilan real-vaqt rejimida suhbatlashing va talaffuzingizni oshiring!
                        </p>
                    </div>
                </div>
                
                {/* Header Controls */}
                <div className="flex items-center gap-2 self-end md:self-auto">
                    {/* Persona Selector Pill */}
                    <div className="flex items-center gap-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-1 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
                        {(Object.keys(PERSONAS) as CoachPersona[]).map(pKey => {
                            const p = PERSONAS[pKey];
                            const Icon = p.icon;
                            const isSelected = persona === pKey;
                            return (
                                <button
                                    key={pKey}
                                    onClick={() => setPersona(pKey)}
                                    title={p.name}
                                    className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                        isSelected 
                                        ? 'bg-gradient-to-r ' + p.color + ' text-white shadow-md scale-105' 
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                                    }`}
                                >
                                    <Icon size={14} />
                                    <span className="hidden sm:inline">{p.name.split(' ')[0]}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md px-2 py-1 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
                        <Globe size={16} className="text-indigo-500 mr-1" />
                        <select 
                            disabled={isLiveSession}
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
                            className="bg-transparent border-none text-xs font-bold text-gray-800 dark:text-gray-200 outline-none cursor-pointer p-1 disabled:opacity-50"
                        >
                            <option value="en">🇬🇧 English</option>
                            <option value="ja">🇯🇵 日本語</option>
                        </select>
                    </div>

                    {/* Settings Modal Button */}
                    <button 
                        onClick={() => setIsSettingsOpen(true)}
                        className="p-2.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        title="Coach AI Sozlamalari"
                    >
                        <SettingsIcon size={18} />
                    </button>
                </div>
            </header>

            {error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 rounded-2xl mb-3 text-xs md:text-sm text-center flex items-center justify-center gap-2 backdrop-blur-sm animate-in fade-in">
                    <ShieldAlert size={16} />
                    <span>{error}</span>
                </div>
            )}

            {/* Main Interactive Stage & Chat */}
            <div className="flex-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-200/60 dark:border-gray-800/60 p-4 md:p-6 mb-4 flex flex-col justify-between overflow-hidden relative">
                
                {/* Active Session Status Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/40 dark:border-gray-800/40 text-xs font-medium text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${isLiveSession ? 'bg-emerald-500 animate-ping' : 'bg-gray-400'}`} />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {isLiveSession ? 'JONLI SEANSI FAOLLASHTIRILDI' : 'SEANSI BOSHLASHGA TAYYOR'}
                        </span>
                        <span className="hidden sm:inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[10px] text-gray-500">
                            {PERSONAS[persona].badge}
                        </span>
                    </div>

                    {isLiveSession && (
                        <div className="flex items-center gap-3">
                            <span className="font-mono bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg border border-indigo-200/50 dark:border-indigo-800/50 text-xs font-bold">
                                ⏱️ {formatTimer(sessionSeconds)}
                            </span>
                            <span className="text-[11px] text-gray-400">
                                {chatHistory.length} ta xabar
                            </span>
                        </div>
                    )}
                </div>

                {/* Empty State / Welcome AI Visualizer */}
                {chatHistory.length === 0 && !isLiveSession && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-4 animate-in fade-in duration-500">
                        {/* 3D Pulsating Visual Orb */}
                        <div className="relative mb-6 group cursor-pointer" onClick={startSession}>
                            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr ${PERSONAS[persona].color} p-1 shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative`}>
                                <div className="w-full h-full bg-gray-900 rounded-full flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
                                    {/* Orbiting particles */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent animate-spin-slow" />
                                    <ActivePersonaIcon size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse" />
                                    <span className="mt-2 text-[11px] font-extrabold tracking-widest text-indigo-300 uppercase">
                                        Tap to Start
                                    </span>
                                </div>
                            </div>
                            {/* Expanding Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ping pointer-events-none" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {PERSONAS[persona].name} bilan gaplashishga tayyormisiz?
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-md mb-6 leading-relaxed">
                            {PERSONAS[persona].desc}. Qo'ng'iroq tugmasini bosing va ingliz tilida erkin gapirishni boshlang!
                        </p>

                        {/* Quick Prompts */}
                        <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                            {PROMPT_SUGGESTIONS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handlePromptClick(item.text)}
                                    className="p-3 bg-white/60 dark:bg-gray-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-gray-200/60 dark:border-gray-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-2xl transition-all text-xs group flex items-start justify-between shadow-sm"
                                >
                                    <div>
                                        <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-0.5">
                                            {item.title}
                                        </div>
                                        <div className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                                            "{item.text}"
                                        </div>
                                    </div>
                                    <Play size={14} className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Chat Stream Area */}
                {(chatHistory.length > 0 || isLiveSession) && (
                    <div 
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin scrollbar-thumb-indigo-300 dark:scrollbar-thumb-indigo-900"
                    >
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                                <div className={`group relative max-w-[85%] sm:max-w-[75%] p-4 rounded-3xl shadow-sm transition-all ${
                                    msg.role === 'user' 
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-xs shadow-indigo-500/10' 
                                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-xs border border-gray-200/80 dark:border-gray-700/80 shadow-md'
                                }`}>
                                    <div className="flex items-center justify-between gap-2 mb-1 opacity-80 text-[10px] font-semibold">
                                        <span className="flex items-center gap-1">
                                            {msg.role === 'user' ? 'Siz (Foydalanuvchi)' : PERSONAS[persona].name}
                                        </span>
                                        <span>{msg.timestamp}</span>
                                    </div>
                                    <p className="text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                                        {msg.content}
                                    </p>

                                    {/* Action Buttons on Message */}
                                    <div className="mt-2 flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => copyToClipboard(msg.content, idx)}
                                            className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-xs transition-colors"
                                            title="Nusxalash"
                                        >
                                            {copiedIndex === idx ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                        </button>
                                        {msg.role === 'assistant' && (
                                            <button
                                                onClick={() => speakText(msg.content)}
                                                className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-xs transition-colors"
                                                title="Qayta O'qib berish"
                                            >
                                                <Volume2 size={14} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Live Speaking / Transcript Box */}
                        {(currentTranscript || isListening) && (
                            <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
                                <div className="max-w-[85%] p-4 rounded-3xl bg-indigo-500/15 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200 rounded-tr-xs border border-indigo-400/30 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                                        <Mic size={14} className="animate-pulse" /> Eshitilmoqda...
                                    </div>
                                    <p className="text-sm md:text-base italic font-medium">
                                        {currentTranscript || "Gapiring, AI sizni eshitmoqda..."}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* AI Thinking Animation */}
                        {isThinking && (
                            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                                <div className="max-w-[85%] p-4 rounded-3xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-xs border border-gray-200/80 dark:border-gray-700/80 shadow-sm flex items-center gap-3">
                                    {/* Equalizer Bars */}
                                    <div className="flex items-end gap-1 h-5">
                                        <div className="w-1 bg-indigo-500 rounded-full animate-bounce h-3" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1 bg-purple-500 rounded-full animate-bounce h-5" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1 bg-pink-500 rounded-full animate-bounce h-2" style={{ animationDelay: '300ms' }} />
                                        <div className="w-1 bg-amber-500 rounded-full animate-bounce h-4" style={{ animationDelay: '450ms' }} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                                        {PERSONAS[persona].name} tahlil qilmoqda va javob tayyorlamoqda...
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Futuristic Call Floating Control Pill */}
            <div className="flex-shrink-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl p-3 md:p-4 rounded-3xl shadow-2xl border border-gray-200/80 dark:border-gray-800/80 flex items-center justify-between gap-4 z-20">
                
                {/* Audio Waves / Status Pill */}
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-100/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    {isLiveSession ? (
                        isSpeaking ? (
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs">
                                <Volume2 size={18} className="animate-pulse" />
                                <span className="hidden sm:inline">AI GAPIRMOQDA</span>
                                {/* Mini Sound Equalizer */}
                                <div className="flex items-end gap-0.5 h-3 ml-1">
                                    <span className="w-0.5 bg-blue-500 animate-pulse h-full" />
                                    <span className="w-0.5 bg-blue-500 animate-pulse h-2/3" style={{ animationDelay: '100ms' }} />
                                    <span className="w-0.5 bg-blue-500 animate-pulse h-full" style={{ animationDelay: '200ms' }} />
                                </div>
                            </div>
                        ) : isThinking ? (
                            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs">
                                <Activity size={18} className="animate-spin" />
                                <span className="hidden sm:inline">O'YLAMOQDA</span>
                            </div>
                        ) : isListening ? (
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                                <Mic size={18} className="animate-pulse" />
                                <span className="hidden sm:inline">GAPIRISHINGIZNI KUTMOQDA</span>
                            </div>
                        ) : (
                            <span className="text-xs font-bold text-gray-400">TAYYOR...</span>
                        )
                    ) : (
                        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs">
                            <HeartPulse size={16} />
                            <span>OFLAYN REJIM</span>
                        </div>
                    )}
                </div>

                {/* Main Action Buttons */}
                <div className="flex items-center gap-3">
                    {/* Clear History */}
                    {chatHistory.length > 0 && (
                        <button
                            onClick={() => setChatHistory([])}
                            className="p-3 bg-gray-100 hover:bg-rose-100 dark:bg-gray-800 dark:hover:bg-rose-950/40 text-gray-600 dark:text-gray-300 hover:text-rose-600 rounded-2xl transition-all"
                            title="Chatni tozalash"
                        >
                            <RotateCcw size={18} />
                        </button>
                    )}

                    {/* Mute Mic Toggle */}
                    {isLiveSession && (
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-3 rounded-2xl transition-all ${
                                isMuted 
                                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                            }`}
                            title={isMuted ? "Mikrofonni yoqish" : "Mikrofonni o'chirish"}
                        >
                            {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                        </button>
                    )}

                    {/* Primary Call Button */}
                    <button
                        onClick={toggleSession}
                        className={`relative group px-6 py-3.5 md:px-8 md:py-4 rounded-2xl flex items-center gap-3 font-extrabold text-white transition-all duration-300 shadow-xl overflow-hidden active:scale-95 ${
                            isLiveSession 
                            ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-rose-500/30' 
                            : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 shadow-emerald-500/30 hover:scale-102'
                        }`}
                    >
                        {isLiveSession && (
                            <span className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping pointer-events-none" />
                        )}
                        {isLiveSession ? (
                            <>
                                <PhoneOff size={22} className="group-hover:rotate-12 transition-transform" />
                                <span className="text-sm tracking-wide">TUGATISH</span>
                            </>
                        ) : (
                            <>
                                <PhoneCall size={22} className="group-hover:-rotate-12 transition-transform" />
                                <span className="text-sm tracking-wide">QO'NG'IROQ QILISH</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Coach AI Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                                <Cpu size={18} className="text-indigo-500" />
                                Coach AI Sozlamalari
                            </h3>
                            <button onClick={() => setIsSettingsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-4 text-xs md:text-sm">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl text-indigo-800 dark:text-indigo-300">
                                💡 <strong>Alohida Token Rejimi:</strong> Asosiy sahifalarda DeepSeek ishlatilayotgan bo'lsa ham, Speaking Coach uchun Gemini kabi tezkor model va alohida kalit o'rnatishingiz mumkin.
                            </div>

                            <div>
                                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                                    AI Model (Coach uchun)
                                </label>
                                <select
                                    value={coachAiModel}
                                    onChange={(e) => setCoachAiModel(e.target.value as AIProvider)}
                                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="gemini">Google Gemini (Tavsiya etiladi - Tez va Tabiiy)</option>
                                    <option value="deepseek">DeepSeek</option>
                                    <option value="ollama">Ollama (Local)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                                    Coach uchun Alohida API Key (Optional)
                                </label>
                                <input
                                    type="password"
                                    value={coachApiKey}
                                    onChange={(e) => setCoachApiKey(e.target.value)}
                                    placeholder="AI Studio'dan olingan kalit (AI Studio key...)"
                                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <p className="text-[11px] text-gray-400 mt-1">
                                    Agar bo'sh qoldirsangiz, ilovaning umumiy API kaliti ishlatiladi.
                                </p>
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={handleSaveSettings}
                                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all"
                                >
                                    Sozlamalarni Saqlash
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakingCoachPage;
