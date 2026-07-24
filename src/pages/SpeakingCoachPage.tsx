import React, { useState, useEffect, useRef } from 'react';
import { 
    Mic, MicOff, PhoneOff, PhoneCall, Volume2, Activity, Globe, 
    Settings as SettingsIcon, X, 
    Play, Cpu, ShieldAlert, Check, Copy, HeartPulse, RotateCcw,
    Radio, MessageCircle, Crown
} from 'lucide-react';
import { converseWithCoach, getAIConfig, fetchOpenAITTS, analyzeSpeakingSession, SessionAnalysisReport, AIProvider, validateSpeechInput, translateTextToUzbek, isAIKeyConfigured } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import { useSubscription } from '../hooks/useSubscription';
import { isAdminEmail } from '../utils/admin';
import AudioVisualizer from '../components/speaking/AudioVisualizer';
import SessionReportModal from '../components/speaking/SessionReportModal';
import { LiveAmbientSphere } from '../components/speaking/LiveAmbientSphere';
import { PERSONAS_BY_LANG, CoachPersona } from '../components/speaking/PersonaSelector';

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
    translation?: string;
    isTranslating?: boolean;
    showTranslation?: boolean;
    isEditing?: boolean;
}



const PROMPT_SUGGESTIONS_BY_LANG: Record<'en' | 'ja', { title: string; text: string; icon: string }[]> = {
    en: [
        { title: "O'zingni tanishtir", text: "Hello! Can you introduce yourself and tell me how you can help my English?", icon: "👋" },
        { title: "Roast rejimini yoq", text: "I'm ready for your toughest roast. Test my English speaking right now!", icon: "🔥" },
        { title: "IELTS Part 2 amaliyoti", text: "Let's do IELTS Speaking Part 2. Give me a cue card topic to talk about.", icon: "📝" },
        { title: "Intervyu savol-javob", text: "Act as a tech recruiter and ask me top 3 interview questions.", icon: "💼" }
    ],
    ja: [
        { title: "自己紹介 (Jikoshoukai)", text: "はじめまして。自己紹介の練習をしたいです。", icon: "🙋" },
        { title: "IT面接 (IT Mock Interview)", text: "日本のIT企業の面接練習をお願いします。自己紹介からスタートしてください。", icon: "💻" },
        { title: "敬語チェック (Keigo Check)", text: "私の敬語の使い方をチェックしてアドバイスをください。", icon: "📖" },
        { title: "日常会話 (Daily Japanese)", text: "日本語で楽しい日常会話をしましょう！", icon: "🗣️" }
    ]
};

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
    const [showPersonaSelector, setShowPersonaSelector] = useState(false);

    // Session Analysis Report Modal state
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isReportLoading, setIsReportLoading] = useState(false);
    const [reportData, setReportData] = useState<SessionAnalysisReport | null>(null);

    const { subscription } = useSubscription();
    const isPaidUser = subscription?.tier === 'pro' || subscription?.tier === 'premium' || isAIKeyConfigured();
    const [showProModal, setShowProModal] = useState(false);
    const [proModalReason, setProModalReason] = useState('');

    const { user, settings, updateSettings, addCoachSession } = useStudyData();
    const isAdmin = isAdminEmail(user?.email);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [coachAiModel, setCoachAiModel] = useState<AIProvider>((settings.coachAiModel as AIProvider) || 'gemini');
    const [coachApiKey, setCoachApiKey] = useState(settings.coachApiKey || '');

    const recognitionRef = useRef<any>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
    const transcriptBufferRef = useRef('');
    const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const speechStartTimeRef = useRef<number>(0);
    const isProcessingRef = useRef(false);
    const isLiveSessionRef = useRef(false);
    const chatHistoryRef = useRef<ChatMessage[]>([]);
    const languageRef = useRef(language);
    const personaRef = useRef(persona);

    useEffect(() => {
        chatHistoryRef.current = chatHistory;
    }, [chatHistory]);

    useEffect(() => {
        languageRef.current = language;
        personaRef.current = persona;
    }, [language, persona]);

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
        // Initialize speech synthesis safely (not during SSR)
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            synthRef.current = window.speechSynthesis;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.maxAlternatives = 3;

            recognitionRef.current.onstart = () => {
                speechStartTimeRef.current = 0;
                setIsListening(true);
            };

            recognitionRef.current.onspeechstart = () => {
                if (!speechStartTimeRef.current) {
                    speechStartTimeRef.current = Date.now();
                }
            };

            recognitionRef.current.onsoundstart = () => {
                if (!speechStartTimeRef.current) {
                    speechStartTimeRef.current = Date.now();
                }
            };

            recognitionRef.current.onresult = (event: any) => {
                if (!speechStartTimeRef.current) {
                    speechStartTimeRef.current = Date.now();
                }
                let interimTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    interimTranscript += event.results[i][0].transcript;
                }
                setCurrentTranscript(interimTranscript);
                transcriptBufferRef.current = interimTranscript;

                // Debounce turn submission: wait 3000ms (3s) after user stops speaking before ending speech turn
                if (silenceTimerRef.current) {
                    clearTimeout(silenceTimerRef.current);
                }
                silenceTimerRef.current = setTimeout(() => {
                    if (isLiveSessionRef.current && !isProcessingRef.current && transcriptBufferRef.current.trim().length > 0) {
                        try {
                            recognitionRef.current?.stop();
                        } catch (e) {}
                    }
                }, 3000);
            };

            recognitionRef.current.onerror = (event: any) => {
                if (event.error === 'not-allowed' || event.error === 'permission-denied') {
                    setError('Mikrofon ruxsati berilmadi. Iltimos brauzeringiz sozlamalaridan mikrofonga ruxsat bering.');
                } else if (event.error !== 'no-speech') {
                    console.error('Speech recognition error:', event.error);
                }
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
                if (silenceTimerRef.current) {
                    clearTimeout(silenceTimerRef.current);
                    silenceTimerRef.current = null;
                }
                const spokenText = transcriptBufferRef.current.trim();
                const duration = speechStartTimeRef.current > 0 ? Date.now() - speechStartTimeRef.current : 0;
                speechStartTimeRef.current = 0;

                const isValid = validateSpeechInput(spokenText, duration);

                if (isLiveSessionRef.current && !isProcessingRef.current) {
                    if (isValid) {
                        transcriptBufferRef.current = '';
                        setCurrentTranscript('');
                        handleSendUserText(spokenText);
                    } else {
                        transcriptBufferRef.current = '';
                        setCurrentTranscript('');
                        setTimeout(() => {
                            resumeListening();
                        }, 300);
                    }
                }
            };
        } else {
            setError('Sizning brauzeringiz ovoz yozishni qo\'llab-quvvatlamaydi. Iltimos Chrome yoki Edge brauzeridan foydalaning.');
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

    const handleSendUserText = async (text: string) => {
        if (!text.trim() || isThinking) return;
        
        // Interrupt previous speech if still playing
        if (isSpeaking) {
            synthRef.current?.cancel();
            if (audioPlayerRef.current) {
                audioPlayerRef.current.onended = null;
                audioPlayerRef.current.onerror = null;
                audioPlayerRef.current.pause();
                audioPlayerRef.current = null;
            }
            setIsSpeaking(false);
        }

        isProcessingRef.current = true;
        setIsThinking(true);
        setError(null);
        setCurrentTranscript('');

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const updatedHistory: ChatMessage[] = [...chatHistoryRef.current, { role: 'user', content: text, timestamp: timeStr }];
        setChatHistory(updatedHistory);
        chatHistoryRef.current = updatedHistory;

        try {
            // 45-second safety timeout to prevent stuck O'YLAMOQDA state while allowing LLM response time
            const timeoutPromise = new Promise<string>((_, reject) => {
                setTimeout(() => reject(new Error("AI javob berish vaqti tugadi. Qayta urinib ko'ring.")), 45000);
            });

            const aiResponse = await Promise.race([
                converseWithCoach(text, updatedHistory, languageRef.current, personaRef.current),
                timeoutPromise
            ]);
            
            const resTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const finalHistory: ChatMessage[] = [...updatedHistory, { role: 'assistant', content: aiResponse, timestamp: resTimeStr }];
            setChatHistory(finalHistory);
            chatHistoryRef.current = finalHistory;

            setIsThinking(false);
            speakText(aiResponse);
        } catch (err: any) {
            console.error("Coach response error:", err);
            let errorMessage = err.message || 'Tahlil qilishda xatolik yuz berdi.';
            if (errorMessage.startsWith('RATE_LIMIT: ')) {
                errorMessage = errorMessage.substring('RATE_LIMIT: '.length);
            }
            synthRef.current?.cancel();
            if (audioPlayerRef.current) {
                audioPlayerRef.current.pause();
                audioPlayerRef.current = null;
            }
            setIsSpeaking(false);
            setError(errorMessage);
            setIsThinking(false);
            isProcessingRef.current = false;
            resumeListening();
        }
    };

    const currentObjectUrlRef = useRef<string | null>(null);
    const ttsSafetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const speakText = async (text: string) => {
        setIsSpeaking(true);
        synthRef.current?.cancel();

        if (currentObjectUrlRef.current) {
            URL.revokeObjectURL(currentObjectUrlRef.current);
            currentObjectUrlRef.current = null;
        }

        if (audioPlayerRef.current) {
            audioPlayerRef.current.pause();
            audioPlayerRef.current.onended = null;
            audioPlayerRef.current.onerror = null;
            audioPlayerRef.current = null;
        }

        if (ttsSafetyTimeoutRef.current) {
            clearTimeout(ttsSafetyTimeoutRef.current);
            ttsSafetyTimeoutRef.current = null;
        }

        const onSpeechFinish = () => {
            if (ttsSafetyTimeoutRef.current) {
                clearTimeout(ttsSafetyTimeoutRef.current);
                ttsSafetyTimeoutRef.current = null;
            }
            if (currentObjectUrlRef.current) {
                URL.revokeObjectURL(currentObjectUrlRef.current);
                currentObjectUrlRef.current = null;
            }
            setIsSpeaking(false);
            isProcessingRef.current = false;
            resumeListening();
        };

        // 15-second safety timer in case Web Speech Synthesis drops onend event
        ttsSafetyTimeoutRef.current = setTimeout(() => {
            onSpeechFinish();
        }, 15000);

        const config = getAIConfig();
        
        if (config.openAIApiKey) {
            try {
                const blob = await fetchOpenAITTS(text, config.coachVoice || 'alloy', config.openAIApiKey);
                const url = URL.createObjectURL(blob);
                currentObjectUrlRef.current = url;

                const audio = new Audio(url);
                audioPlayerRef.current = audio;
                
                audio.onended = () => {
                    onSpeechFinish();
                };
                
                audio.onerror = () => {
                    onSpeechFinish();
                };
                
                audio.play().catch(() => {
                    onSpeechFinish();
                });
                return;
            } catch (error) {
                console.error("OpenAI TTS error fallback to browser voice", error);
            }
        }
        
        // Try Google Free High-Quality Neural Audio Stream first (No API Key required, fluent human voice)
        try {
            const cleanText = text.replace(/[*_#`~]/g, '').trim();
            const targetLang = languageRef.current === 'ja' ? 'ja' : 'en';
            const sentences = cleanText.match(/[^.!?。！？]+[.!?。！？]+/g) || [cleanText];
            const chunks: string[] = [];
            let currentChunk = '';

            for (const sentence of sentences) {
                if ((currentChunk + ' ' + sentence).length <= 180) {
                    currentChunk = (currentChunk + ' ' + sentence).trim();
                } else {
                    if (currentChunk) chunks.push(currentChunk);
                    currentChunk = sentence.substring(0, 180).trim();
                }
            }
            if (currentChunk) chunks.push(currentChunk);

            if (chunks.length > 0) {
                let chunkIdx = 0;
                const playNextChunk = () => {
                    if (chunkIdx >= chunks.length) {
                        onSpeechFinish();
                        return;
                    }
                    const chunk = chunks[chunkIdx++];
                    const gUrl = `/api/tts?text=${encodeURIComponent(chunk)}&lang=${targetLang}`;
                    const audio = new Audio(gUrl);
                    audioPlayerRef.current = audio;
                    audio.onended = () => playNextChunk();
                    audio.onerror = () => fallbackWebSpeech();
                    audio.play().catch(() => fallbackWebSpeech());
                };
                playNextChunk();
                return;
            }
        } catch (gErr) {
            console.warn("Google free TTS audio failed, falling back to Web Speech", gErr);
        }

        fallbackWebSpeech();

        function fallbackWebSpeech() {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
            
            const voices = synthRef.current?.getVoices() || window.speechSynthesis?.getVoices() || [];
            const langPrefix = languageRef.current === 'ja' ? 'ja' : 'en';
            
            // Exclude robotic/novelty voices (Fred, Albert, Ralph, Zarvox, etc.)
            const isRobotic = (name: string) => {
                const l = name.toLowerCase();
                return ['fred', 'albert', 'ralph', 'zarvox', 'bad news', 'bells', 'cellos', 'junior', 'organ', 'trinoids', 'whisper', 'wons', 'bruce', 'boing', 'bubbles', 'hysterical'].some(r => l.includes(r));
            };

            const matchingVoices = voices.filter(v => 
                (v.lang.toLowerCase().startsWith(langPrefix) || v.lang.toLowerCase().replace('_', '-').startsWith(langPrefix)) &&
                !isRobotic(v.name)
            );

            if (matchingVoices.length > 0) {
                const naturalVoice = matchingVoices.find(v => 
                    v.name.toLowerCase().includes('natural') || 
                    v.name.toLowerCase().includes('online') || 
                    v.name.toLowerCase().includes('neural')
                ) || matchingVoices.find(v => 
                    v.name.toLowerCase().includes('enhanced') || 
                    v.name.toLowerCase().includes('premium') || 
                    v.name.toLowerCase().includes('siri')
                ) || matchingVoices.find(v => 
                    v.name.toLowerCase().includes('google') || 
                    v.name.toLowerCase().includes('samantha') || 
                    v.name.toLowerCase().includes('victoria') || 
                    v.name.toLowerCase().includes('karen') || 
                    v.name.toLowerCase().includes('kyoko') || 
                    v.name.toLowerCase().includes('aria') || 
                    v.name.toLowerCase().includes('jenny')
                ) || matchingVoices[0];

                if (naturalVoice) {
                    utterance.voice = naturalVoice;
                }
            }
            
            utterance.onend = () => {
                onSpeechFinish();
            };
            
            utterance.onerror = () => {
                onSpeechFinish();
            };

            synthRef.current?.speak(utterance);
        }
    };

    const resumeListening = () => {
        if (isLiveSessionRef.current && recognitionRef.current && !isSpeaking && !isThinking && !isMuted) {
            try {
                recognitionRef.current.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
                recognitionRef.current.start();
                setIsListening(true);
            } catch (e) {
                // If recognition was already active or in starting state
                setIsListening(true);
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

    const getInitialGreeting = (lang: 'en' | 'ja', p: CoachPersona): string => {
        if (lang === 'ja') {
            switch (p) {
                case 'roast': return 'こんにちは！鬼先生です。遠慮せずに日本語で話してください！';
                case 'gentle': return 'こんにちは！日本語の先生です。いつでもお話ししてくださいね。';
                case 'ielts': return 'こんにちは！JLPTスピーキングの練習を始めましょう！';
                case 'interview': return 'こんにちは。本日のIT面接を担当いたします。自己紹介をお願いします。';
                case 'travel': return 'いらっしゃいませ！成田空港へようこそ。どのようなご要件でしょうか？';
                case 'casual': return 'やあ！元気？今日は何について話そうか！';
            }
        } else {
            switch (p) {
                case 'roast': return "Hey there! Strict Roast Coach here. Speak up and let's hear your English!";
                case 'gentle': return "Hello! I'm your tutor. Feel free to start talking whenever you're ready!";
                case 'ielts': return "Good day! Welcome to your IELTS Speaking test practice. Shall we begin?";
                case 'interview': return "Hello! Welcome to your Tech Mock Interview. Tell me a bit about yourself when you're ready.";
                case 'travel': return "Hello! Welcome to the airport information & concierge desk. How can I help your journey today?";
                case 'casual': return "Hey friend! Great to see you. What's on your mind today?";
            }
        }
    };

    const startSession = () => {
        setIsLiveSession(true);
        isLiveSessionRef.current = true;
        setCurrentTranscript('');
        setError(null);

        const greeting = getInitialGreeting(language, persona);
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const initHistory: ChatMessage[] = [{ role: 'assistant', content: greeting, timestamp: timeStr }];
        
        setChatHistory(initHistory);
        chatHistoryRef.current = initHistory;

        speakText(greeting);
    };

    const endSession = async () => {
        const historyToAnalyze = [...chatHistoryRef.current];
        setIsLiveSession(false);
        isLiveSessionRef.current = false;
        isProcessingRef.current = false;
        setIsListening(false);
        setIsSpeaking(false);
        setIsThinking(false);
        setCurrentTranscript('');
        transcriptBufferRef.current = '';
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {}
        }
        synthRef.current?.cancel();

        // Trigger AI analysis report if user sent any messages
        const userSpoke = historyToAnalyze.some(h => h.role === 'user');
        if (userSpoke) {
            setIsReportOpen(true);
            setIsReportLoading(true);
            try {
                const report = await analyzeSpeakingSession(historyToAnalyze, languageRef.current, personaRef.current);
                setReportData(report);
                
                // Bazaga saqlash
                await addCoachSession({
                    personaTitle: PERSONAS[personaRef.current].name,
                    fluencyScore: report.fluency_score || 0,
                    vocabularyScore: Math.max(0, 100 - (report.better_vocabulary?.length || 0) * 5),
                    grammarScore: Math.max(0, 100 - (report.grammar_corrections?.length || 0) * 5),
                    pronunciationScore: report.fluency_score || 0,
                    feedback: report.overall_feedback || ''
                });
            } catch (err) {
                console.error("Report generation error:", err);
            } finally {
                setIsReportLoading(false);
            }
        }
    };

    const handleTranslateMessage = async (idx: number) => {
        const msg = chatHistory[idx];
        if (!msg || msg.role !== 'assistant') return;

        if (!isPaidUser) {
            setProModalReason("🇺🇿 Real-time O'zbekcha tarjima va subtitr funksiyasidan foydalanish uchun PRO yoki Premium obunaga o'ting.");
            setShowProModal(true);
            return;
        }

        if (msg.translation) {
            setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, showTranslation: !m.showTranslation } : m));
            return;
        }

        setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, isTranslating: true } : m));

        try {
            const trans = await translateTextToUzbek(msg.content);
            setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, translation: trans, showTranslation: true, isTranslating: false } : m));
        } catch (err) {
            console.error("Translation failed:", err);
            setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, isTranslating: false } : m));
        }
    };

    const handlePromptClick = (text: string) => {
        if (!isLiveSession) {
            startSession();
        }
        setTimeout(() => {
            handleSendUserText(text);
        }, 500);
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    useEffect(() => {
        if (!isAdmin && language === 'ja' && persona === 'interview') {
            setPersona('casual');
        }
    }, [isAdmin, language, persona]);

    const PERSONAS = PERSONAS_BY_LANG[language];
    const PROMPT_SUGGESTIONS = PROMPT_SUGGESTIONS_BY_LANG[language];
    const ActivePersonaIcon = PERSONAS[persona].icon;
    const currentPersona = PERSONAS[persona];

    // Get status info
    const getStatusInfo = () => {
        if (isSpeaking) return { label: 'AI Gapirmoqda', color: 'text-blue-400', icon: Volume2, pulseColor: 'bg-blue-500' };
        if (isThinking) return { label: "O'ylamoqda...", color: 'text-purple-400', icon: Activity, pulseColor: 'bg-purple-500' };
        if (isListening) return { label: 'Eshitmoqda', color: 'text-emerald-400', icon: Mic, pulseColor: 'bg-emerald-500' };
        return { label: 'Tayyor', color: 'text-gray-400', icon: Radio, pulseColor: 'bg-gray-500' };
    };
    const status = getStatusInfo();

    return (
        <div className="relative h-[calc(100vh-4rem)] flex flex-col overflow-hidden w-full select-none">
            
            {/* Dynamic Ambient Background - More cinematic */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPersona.gradientBg} transition-all duration-1000 pointer-events-none`} />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px]" style={{ animationDelay: '2s' }} />
                {isLiveSession && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" />
                )}
            </div>

            {/* === COMPACT TOP BAR === */}
            <div className="relative z-10 px-3 md:px-5 pt-3 pb-2 flex items-center justify-between gap-3 flex-shrink-0">
                {/* Left: Title + Status */}
                <div className="flex items-center gap-3 min-w-0">
                    <div className={`relative p-2.5 bg-gradient-to-tr ${currentPersona.color} text-white rounded-2xl shadow-lg flex items-center justify-center`}>
                        <ActivePersonaIcon size={20} />
                        {isLiveSession && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                        )}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-base md:text-lg font-extrabold tracking-tight text-gray-900 dark:text-white truncate">
                                {currentPersona.name}
                            </h2>
                            {isLiveSession && (
                                <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    LIVE
                                </span>
                            )}
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">
                            {isLiveSession ? `⏱ ${formatTimer(sessionSeconds)} • ${chatHistory.length} xabar` : currentPersona.desc}
                        </p>
                    </div>
                </div>

                {/* Right: Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                    {/* Persona Toggle Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setShowPersonaSelector(!showPersonaSelector)}
                            disabled={isLiveSession}
                            className="p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all disabled:opacity-40 hover:shadow-md"
                            title="Persona tanlash"
                        >
                            <span className="text-sm">{currentPersona.emoji}</span>
                        </button>
                        
                        {showPersonaSelector && !isLiveSession && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowPersonaSelector(false)} />
                                <div className="absolute right-0 top-full mt-2 z-50 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Persona tanlang</div>
                                    {(Object.keys(PERSONAS) as CoachPersona[])
                                        .filter(pKey => !(pKey === 'interview' && language === 'ja' && !isAdmin))
                                        .map(pKey => {
                                            const p = PERSONAS[pKey];
                                            const Icon = p.icon;
                                            const isSelected = persona === pKey;
                                            const isLocked = !isPaidUser && pKey !== 'casual';
                                            
                                            return (
                                                <button
                                                    key={pKey}
                                                    onClick={() => {
                                                        if (isLocked) {
                                                            setProModalReason(`"${p.name}" rejimi va IELTS Examiner Imtihonchi personasidan foydalanish uchun PRO yoki Premium obunaga o'ting.`);
                                                            setShowProModal(true);
                                                            setShowPersonaSelector(false);
                                                            return;
                                                        }
                                                        setPersona(pKey);
                                                        setShowPersonaSelector(false);
                                                    }}
                                                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left ${
                                                        isSelected 
                                                        ? `bg-gradient-to-r ${p.color} text-white shadow-md` 
                                                        : isLocked
                                                        ? 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 opacity-80'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                    }`}
                                                >
                                                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                                        <Icon size={16} />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="text-xs font-bold truncate flex items-center gap-1.5">
                                                            {p.name}
                                                            {isLocked && (
                                                                <span className="bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[9px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                                                    <Crown size={10} /> PRO
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className={`text-[10px] truncate ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>{p.desc}</div>
                                                    </div>
                                                    {isSelected && <Check size={14} className="ml-auto shrink-0" />}
                                                </button>
                                            );
                                        })}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Language */}
                    <div className="flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl px-2 py-1.5 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all">
                        <Globe size={14} className="text-indigo-500 mr-1" />
                        <select 
                            disabled={isLiveSession}
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
                            className="bg-transparent border-none text-[11px] font-bold text-gray-700 dark:text-gray-200 outline-none cursor-pointer disabled:opacity-40"
                        >
                            <option value="en">🇬🇧 EN</option>
                            <option value="ja">🇯🇵 JP</option>
                        </select>
                    </div>

                    {/* Settings */}
                    <button 
                        onClick={() => setIsSettingsOpen(true)}
                        className="p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        title="Coach AI Sozlamalari"
                    >
                        <SettingsIcon size={16} />
                    </button>
                </div>
            </div>

            {/* Error Banner */}
            {error && (
                <div className="mx-3 md:mx-5 mb-2 p-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 rounded-xl text-xs text-center flex items-center justify-center gap-2 backdrop-blur-sm animate-in fade-in">
                    <ShieldAlert size={14} />
                    <span className="font-medium">{error}</span>
                    <button onClick={() => setError(null)} className="ml-2 p-0.5 hover:bg-rose-500/20 rounded-md">
                        <X size={12} />
                    </button>
                </div>
            )}

            {/* === MAIN CONTENT AREA === */}
            <div className="flex-1 min-h-0 mx-3 md:mx-5 mb-2 flex flex-col overflow-hidden relative">
                
                {/* ===  HERO / WELCOME SCREEN  === */}
                {chatHistory.length === 0 && !isLiveSession && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 overflow-y-auto scrollbar-hide">
                        
                        {/* Dynamic Live Ambient Neon Sphere */}
                        <div className="relative mb-6 group cursor-pointer" onClick={startSession}>
                            {isLiveSession ? (
                                <LiveAmbientSphere
                                    status={isSpeaking ? 'speaking' : isThinking ? 'thinking' : isListening ? 'listening' : 'idle'}
                                    size={240}
                                />
                            ) : (
                                <>
                                    {/* Outer glow rings */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${currentPersona.color} opacity-20 blur-2xl scale-150 animate-pulse`} />
                                    <div className={`absolute inset-0 rounded-full border-2 border-indigo-400/20 scale-[1.4] animate-ping`} style={{ animationDuration: '3s' }} />
                                    <div className={`absolute inset-0 rounded-full border border-purple-400/15 scale-[1.7] animate-ping`} style={{ animationDuration: '4s' }} />
                                    
                                    {/* Main orb */}
                                    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr ${currentPersona.color} p-[3px] shadow-2xl transition-transform duration-500 group-hover:scale-110`}>
                                        <div className="w-full h-full bg-gray-950 rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                                            {/* Inner animated gradient */}
                                            <div className="absolute inset-0 animate-spin" style={{ background: 'conic-gradient(from 0deg, rgba(99,102,241,0.3), transparent 40%, rgba(168,85,247,0.3), transparent 80%)', animationDuration: '8s' }} />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
                                            
                                            <ActivePersonaIcon size={32} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10" />
                                            <span className="mt-1.5 text-[9px] font-extrabold tracking-[0.2em] text-indigo-300/80 uppercase relative z-10">
                                                Boshlash
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-1.5">
                            {currentPersona.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6 leading-relaxed">
                            {currentPersona.desc}
                        </p>

                        {/* Quick Prompts — Premium Cards */}
                        <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {PROMPT_SUGGESTIONS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handlePromptClick(item.text)}
                                    className="group relative p-3 bg-white/70 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/40 hover:border-indigo-300/60 dark:hover:border-indigo-600/40 rounded-2xl transition-all duration-200 text-left shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-0.5 transition-colors">
                                                {item.title}
                                            </div>
                                            <div className="text-[10px] text-gray-400 dark:text-gray-500 line-clamp-2 leading-relaxed">
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                    <Play size={12} className="absolute top-3 right-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ===  CHAT AREA  === */}
                {(chatHistory.length > 0 || isLiveSession) && (
                    <div 
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto space-y-3 py-3 px-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
                    >
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                                {/* AI Avatar */}
                                {msg.role === 'assistant' && (
                                    <div className={`shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr ${currentPersona.color} flex items-center justify-center mr-2 mt-1 shadow-md`}>
                                        <ActivePersonaIcon size={14} className="text-white" />
                                    </div>
                                )}
                                
                                <div className={`group relative max-w-[80%] sm:max-w-[70%] transition-all ${
                                    msg.role === 'user' 
                                    ? '' 
                                    : ''
                                }`}>
                                    {/* Message Bubble */}
                                    <div className={`p-3.5 rounded-2xl shadow-sm ${
                                        msg.role === 'user' 
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md shadow-indigo-500/15' 
                                        : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-900 dark:text-gray-100 rounded-tl-md border border-gray-200/60 dark:border-gray-700/60 shadow-lg'
                                    }`}>
                                        {/* Timestamp */}
                                        <div className={`flex items-center gap-1.5 mb-1.5 text-[10px] font-semibold ${
                                            msg.role === 'user' ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'
                                        }`}>
                                            <span>{msg.role === 'user' ? 'Siz' : currentPersona.name}</span>
                                            <span>•</span>
                                            <span>{msg.timestamp}</span>
                                        </div>
                                        
                                        <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">
                                            {msg.content}
                                        </p>

                                        {/* Uzbek Translation Box */}
                                        {msg.role === 'assistant' && (
                                            <div className="mt-2.5 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                                                {!msg.showTranslation ? (
                                                    <button
                                                        onClick={() => handleTranslateMessage(idx)}
                                                        disabled={msg.isTranslating}
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/30"
                                                    >
                                                        <span>🇺🇿</span>
                                                        <span>{msg.isTranslating ? 'Tarjima qilinmoqda...' : "O'zbekcha tarjimasi"}</span>
                                                    </button>
                                                ) : (
                                                    <div className="p-3 bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/40 rounded-xl text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed font-medium animate-in fade-in">
                                                        <div className="flex justify-between items-center mb-1 font-bold text-[11px] text-indigo-600 dark:text-indigo-400">
                                                            <span className="flex items-center gap-1">🇺🇿 O'zbekcha tarjimasi:</span>
                                                            <button 
                                                                onClick={() => setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, showTranslation: false } : m))}
                                                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-[10px]"
                                                            >
                                                                Berkitish ✕
                                                            </button>
                                                        </div>
                                                        <p className="whitespace-pre-wrap">{msg.translation}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons - Floating */}
                                    <div className={`flex items-center gap-0.5 mt-1 ${msg.role === 'user' ? 'justify-end' : 'justify-start ml-0'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                        <button
                                            onClick={() => copyToClipboard(msg.content, idx)}
                                            className="p-1 rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-700/60 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                            title="Nusxalash"
                                        >
                                            {copiedIndex === idx ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                        </button>
                                        {msg.role === 'assistant' && (
                                            <button
                                                onClick={() => speakText(msg.content)}
                                                className="p-1 rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-700/60 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                title="Qayta O'qib berish"
                                            >
                                                <Volume2 size={12} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Live Transcript Bubble */}
                        {(currentTranscript || isListening) && (
                            <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
                                <div className="max-w-[80%] p-3.5 rounded-2xl rounded-tr-md bg-indigo-500/10 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 border border-indigo-400/20 backdrop-blur-xl">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 dark:text-indigo-400 mb-1.5">
                                        <Mic size={12} className="animate-pulse" />
                                        <span>Eshitilmoqda...</span>
                                    </div>
                                    <p className="text-sm italic font-medium">
                                        {currentTranscript || "Gapiring, AI sizni eshitmoqda..."}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* AI Thinking Indicator */}
                        {isThinking && (
                            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                                <div className={`shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr ${currentPersona.color} flex items-center justify-center mr-2 mt-1 shadow-md`}>
                                    <ActivePersonaIcon size={14} className="text-white animate-pulse" />
                                </div>
                                <div className="p-3.5 rounded-2xl rounded-tl-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-4">
                                            {[0, 1, 2, 3, 4].map(i => (
                                                <div 
                                                    key={i}
                                                    className={`w-[3px] rounded-full bg-gradient-to-t ${currentPersona.color} animate-bounce`}
                                                    style={{ 
                                                        animationDelay: `${i * 120}ms`, 
                                                        animationDuration: '0.8s',
                                                        height: `${[60, 100, 40, 80, 50][i]}%`
                                                    }} 
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                                            {currentPersona.name} javob tayyorlamoqda...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* === BOTTOM CONTROL DOCK === */}
            <div className="relative z-20 px-3 md:px-5 pb-3 pt-1 flex-shrink-0">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/60 dark:border-gray-800/60 p-2.5 md:p-3">
                    
                    {/* Audio Visualizer Row — Only during live session */}
                    {isLiveSession && (
                        <div className="mb-2.5 px-2">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${status.pulseColor} animate-pulse`} />
                                    <span className={`text-[11px] font-bold uppercase tracking-wider ${status.color}`}>
                                        {status.label}
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                                    {formatTimer(sessionSeconds)}
                                </span>
                            </div>
                            <AudioVisualizer 
                                isActive={isSpeaking || isListening || isThinking}
                                mode={isSpeaking ? 'speaking' : isThinking ? 'thinking' : isListening ? 'listening' : 'idle'}
                                barCount={32}
                            />
                        </div>
                    )}

                    {/* Controls Row */}
                    <div className="flex items-center justify-between gap-2">
                        
                        {/* Left: Status or Info */}
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            {!isLiveSession ? (
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                    <HeartPulse size={14} />
                                    <span>Suhbat boshlash uchun qo'ng'iroq qiling</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                    <MessageCircle size={14} />
                                    <span>{chatHistory.length} ta xabar</span>
                                </div>
                            )}
                        </div>

                        {/* Right: Action Buttons */}
                        <div className="flex items-center gap-2 shrink-0">
                            {/* Clear History */}
                            {chatHistory.length > 0 && !isLiveSession && (
                                <button
                                    onClick={() => setChatHistory([])}
                                    className="p-2.5 bg-gray-100 hover:bg-rose-100 dark:bg-gray-800 dark:hover:bg-rose-950/40 text-gray-500 dark:text-gray-400 hover:text-rose-500 rounded-xl transition-all"
                                    title="Chatni tozalash"
                                >
                                    <RotateCcw size={16} />
                                </button>
                            )}

                            {/* Mute Mic Toggle */}
                            {isLiveSession && (
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className={`p-2.5 rounded-xl transition-all ${
                                        isMuted 
                                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' 
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                    title={isMuted ? "Mikrofonni yoqish" : "Mikrofonni o'chirish"}
                                >
                                    {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
                                </button>
                            )}

                            {/* PRIMARY CALL BUTTON */}
                            <button
                                onClick={toggleSession}
                                className={`relative group px-5 py-2.5 md:px-7 md:py-3 rounded-xl flex items-center gap-2.5 font-extrabold text-white transition-all duration-300 shadow-xl overflow-hidden active:scale-95 ${
                                    isLiveSession 
                                    ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-rose-500/25' 
                                    : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 shadow-emerald-500/25 hover:scale-[1.02] hover:shadow-2xl'
                                }`}
                            >
                                {/* Shimmer effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                
                                {isLiveSession && (
                                    <span className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping pointer-events-none" />
                                )}
                                {isLiveSession ? (
                                    <>
                                        <PhoneOff size={18} className="group-hover:rotate-12 transition-transform relative z-10" />
                                        <span className="text-xs tracking-wide relative z-10">TUGATISH</span>
                                    </>
                                ) : (
                                    <>
                                        <PhoneCall size={18} className="group-hover:-rotate-12 transition-transform relative z-10" />
                                        <span className="text-xs tracking-wide relative z-10">QO'NG'IROQ</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* === SETTINGS MODAL === */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-md shadow-2xl border border-gray-200/60 dark:border-gray-800/60 overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent">
                            <h3 className="font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                                <div className="p-2 bg-indigo-500/10 rounded-xl">
                                    <Cpu size={18} className="text-indigo-500" />
                                </div>
                                Coach AI Sozlamalari
                            </h3>
                            <button onClick={() => setIsSettingsOpen(false)} className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                                <X size={18} />
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-5 text-sm">
                            <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 rounded-2xl text-indigo-700 dark:text-indigo-300 text-xs leading-relaxed">
                                💡 <strong>Alohida Token Rejimi:</strong> Speaking Coach uchun Gemini kabi tezkor model va alohida kalit o'rnatishingiz mumkin.
                            </div>

                            <div>
                                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-xs">
                                    AI Model (Coach uchun)
                                </label>
                                <select
                                    value={coachAiModel}
                                    onChange={(e) => setCoachAiModel(e.target.value as AIProvider)}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                >
                                    <option value="gemini">Google Gemini (Tavsiya etiladi)</option>
                                    <option value="deepseek">DeepSeek</option>
                                    <option value="ollama">Ollama (Local)</option>
                                </select>
                            </div>

                            {isAdminEmail(user?.email) && (
                                <div>
                                    <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-xs">
                                        Coach uchun Alohida API Key (Admin Only)
                                    </label>
                                    <input
                                        type="password"
                                        value={coachApiKey}
                                        onChange={(e) => setCoachApiKey(e.target.value)}
                                        placeholder="AI Studio'dan olingan kalit..."
                                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    />
                                    <p className="text-[11px] text-gray-400 mt-1.5">
                                        Bo'sh qoldirsangiz, ilovaning umumiy API kaliti ishlatiladi.
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={handleSaveSettings}
                                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl active:scale-[0.98]"
                            >
                                Sozlamalarni Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Session Analysis Report Modal */}
            <SessionReportModal 
                isOpen={isReportOpen}
                onClose={() => setIsReportOpen(false)}
                report={reportData}
                isLoading={isReportLoading}
                personaTitle={PERSONAS[persona].name}
            />

            {/* PRO Upgrade Modal */}
            {showProModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-center space-y-5">
                        <button 
                            onClick={() => setShowProModal(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full"
                        >
                            <X size={20} />
                        </button>
                        
                        <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                            <Crown size={32} />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">👑 PRO Obuna Kerak</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                {proModalReason || "Ushbu eksklyuziv funksiyadan foydalanish uchun PRO yoki Premium obunaga o'ting."}
                            </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 rounded-2xl p-4 text-left space-y-2 text-xs text-orange-900 dark:text-orange-200 font-medium">
                            <div className="flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400">
                                🌟 PRO Obuna Imkoniyatlari:
                            </div>
                            <div>• 🎓 Barcha 6 ta Speaking Personalar (IELTS Examiner, Roast Coach)</div>
                            <div>• 🇺🇿 Real-time O'zbekcha Subtitr va Tarjima</div>
                            <div>• ✍️ IELTS Writing Band 8.0 Model Answers</div>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <button
                                onClick={() => {
                                    const text = encodeURIComponent('Assalom aleykum. Men PRO obuna sotib olmoqchiman');
                                    window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
                                }}
                                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all"
                            >
                                Sotib Olish ($5 / oy)
                            </button>
                            <button
                                onClick={() => setShowProModal(false)}
                                className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                            >
                                Yopish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakingCoachPage;
