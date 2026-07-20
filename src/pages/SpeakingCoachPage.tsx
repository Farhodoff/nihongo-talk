import React, { useState, useEffect, useRef } from 'react';
import { Mic, PhoneOff, PhoneCall, Volume2, MessageSquare, Activity, Globe } from 'lucide-react';
import { converseWithCoach, getAIConfig, fetchOpenAITTS } from '../utils/ai';

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

const SpeakingCoachPage: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'ja'>('en');
    const [isLiveSession, setIsLiveSession] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [currentTranscript, setCurrentTranscript] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    const recognitionRef = useRef<any>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false; // Stop when they pause
            recognitionRef.current.interimResults = true;
            // The language is set dynamically in startSession/resumeListening

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
            setError('Sizning brauzeringiz ovoz yozishni qo\'llab-quvvatlamaydi. Iltimos, Chrome dan foydalaning.');
        }

        return () => {
            endSession();
        };
    }, []);

    // Scroll to bottom of chat
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, currentTranscript]);

    // Handle what happens when listening stops
    useEffect(() => {
        const processSpeech = async () => {
            if (isLiveSession && !isListening && currentTranscript.trim() && !isSpeaking && !isThinking) {
                const userText = currentTranscript.trim();
                setCurrentTranscript('');
                
                // Add to history
                const updatedHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: userText }];
                setChatHistory(updatedHistory);
                
                // Stop recognition entirely while thinking/speaking
                if (recognitionRef.current) recognitionRef.current.stop();
                
                setIsThinking(true);
                try {
                    const aiResponse = await converseWithCoach(userText, chatHistory, language);
                    
                    setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
                    setIsThinking(false);
                    
                    // Speak the response
                    speakText(aiResponse);
                } catch (err: any) {
                    setError(err.message || "Tahlil qilishda xatolik yuz berdi.");
                    setIsThinking(false);
                    // Try to resume listening if it failed
                    resumeListening();
                }
            } else if (isLiveSession && !isListening && !isSpeaking && !isThinking && !currentTranscript.trim()) {
                // If they stopped but said nothing, just restart listening
                resumeListening();
            }
        };
        
        processSpeech();
    }, [isListening, isLiveSession, isSpeaking, isThinking, language]);

    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    const speakText = async (text: string) => {
        setIsSpeaking(true);
        synthRef.current.cancel(); // Stop any previous speech
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
                
                audio.onerror = (e) => {
                    console.error("OpenAI audio playback error", e);
                    setIsSpeaking(false);
                    URL.revokeObjectURL(url);
                    resumeListening();
                };
                
                audio.play().catch(e => {
                    console.error("Audio play failed:", e);
                    setIsSpeaking(false);
                    resumeListening();
                });
                return; // Return early, don't use synthesis
            } catch (error) {
                console.error("Failed to fetch OpenAI TTS, falling back to synthesis", error);
                // Fallback to synthesis below if this fails
            }
        }
        
        // Fallback: Browser native text-to-speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'ja' ? 'ja-JP' : 'en-US';
        
        // Find a native voice for the selected language
        const voices = synthRef.current.getVoices();
        
        if (language === 'ja') {
            const jpVoice = voices.find(v => v.lang.includes('ja') && (v.name.includes('Google') || v.name.includes('Kyoko')));
            if (jpVoice) utterance.voice = jpVoice;
        } else {
            const engVoice = voices.find(v => v.lang.startsWith('en-') && v.name.includes('Google'));
            if (engVoice) utterance.voice = engVoice;
        }
        
        utterance.onend = () => {
            setIsSpeaking(false);
            // Resume listening after coach finishes speaking
            resumeListening();
        };
        
        utterance.onerror = (e) => {
            console.error("Speech synthesis error", e);
            setIsSpeaking(false);
            resumeListening();
        };

        synthRef.current.speak(utterance);
    };

    const resumeListening = () => {
        if (isLiveSession && recognitionRef.current && !isSpeaking && !isThinking) {
            try {
                recognitionRef.current.lang = language === 'ja' ? 'ja-JP' : 'en-US';
                recognitionRef.current.start();
                setIsListening(true);
            } catch (e) {
                // Ignore already started errors
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
        setChatHistory([]);
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

    // Load voices proactively
    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);

    return (
        <div className="relative p-4 md:p-8 max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col overflow-hidden w-full">
            
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="mb-6 flex-shrink-0 flex items-center justify-between z-10">
                <div>
                    <h2 className="text-3xl font-extrabold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="p-2 bg-indigo-500/10 rounded-xl">
                            <Mic className="text-indigo-500" size={28} />
                        </div>
                        Live Speaking Coach
                    </h2>
                    <p className="text-muted-foreground mt-2 font-medium">
                        Ovozli rejimda AI bilan jonli suhbat quring. U sizni roast qiladi va o'rgatadi!
                    </p>
                </div>
                
                {/* Language Selector - Glassmorphic */}
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-1.5 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-all hover:shadow-md">
                    <Globe size={18} className="text-indigo-500 ml-2" />
                    <select 
                        disabled={isLiveSession}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
                        className="bg-transparent border-none text-sm font-semibold text-foreground outline-none cursor-pointer p-2 disabled:opacity-50"
                    >
                        <option value="en">🇬🇧 English</option>
                        <option value="ja">🇯🇵 日本語 (Japanese)</option>
                    </select>
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-2xl mb-4 text-sm text-center flex-shrink-0 backdrop-blur-sm shadow-sm animate-in fade-in slide-in-from-top-4">
                    {error}
                </div>
            )}

            {/* Chat History Area */}
            <div 
                ref={chatContainerRef}
                className="flex-1 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 p-6 mb-6 overflow-y-auto space-y-6 relative"
            >
                {chatHistory.length === 0 && !isLiveSession && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                        <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 flex items-center justify-center border border-indigo-200/50 dark:border-indigo-700/30 shadow-inner">
                            <MessageSquare size={48} className="text-indigo-400 opacity-80" />
                        </div>
                        <p className="font-medium text-lg text-gray-500 dark:text-gray-400">Jonli suhbatni boshlash uchun qo'ng'iroq qiling</p>
                    </div>
                )}
                
                {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                        <div className={`max-w-[85%] p-4 rounded-3xl shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-tr-sm' 
                            : 'bg-white dark:bg-gray-800 text-foreground rounded-tl-sm border border-gray-100 dark:border-gray-700'
                        }`}>
                            <p className="text-[15px] md:text-base leading-relaxed font-medium">{msg.content}</p>
                        </div>
                    </div>
                ))}

                {(currentTranscript || isThinking) && (
                    <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
                        <div className="max-w-[85%] p-4 rounded-3xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-tr-sm border border-indigo-500/20 shadow-sm">
                            <p className="text-[15px] md:text-base italic font-medium">
                                {currentTranscript || (
                                    <span className="flex items-center gap-2">
                                        <Mic size={16} className="animate-pulse" /> Eshitilmoqda...
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                )}
                
                {isThinking && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                        <div className="max-w-[85%] p-4 rounded-3xl bg-white dark:bg-gray-800 text-foreground rounded-tl-sm border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3 items-center">
                            <div className="flex gap-1 items-center">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span className="text-[15px] font-medium text-gray-500 dark:text-gray-400">Murabbiy o'ylamoqda...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Controls Area - Floating Pill */}
            <div className="flex-shrink-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 rounded-[2rem] shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
                
                {/* Status Indicator */}
                <div className="h-12 px-6 flex items-center justify-center bg-gray-100/50 dark:bg-gray-900/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 w-full md:w-auto">
                    {isLiveSession ? (
                        isSpeaking ? (
                            <span className="flex items-center gap-3 text-blue-500 font-bold tracking-wide">
                                <Volume2 size={20} className="animate-pulse" /> AI GAPIRMOQDA
                            </span>
                        ) : isThinking ? (
                            <span className="flex items-center gap-3 text-purple-500 font-bold tracking-wide">
                                <Activity size={20} className="animate-spin-slow" /> TAHLIL QILINMOQDA
                            </span>
                        ) : isListening ? (
                            <span className="flex items-center gap-3 text-emerald-500 font-bold tracking-wide">
                                <Mic size={20} className="animate-pulse" /> GAPIRING
                            </span>
                        ) : (
                            <span className="flex items-center gap-3 text-gray-500 font-bold tracking-wide">
                                TAYYORLANMOQDA...
                            </span>
                        )
                    ) : (
                        <span className="text-gray-500 font-bold tracking-wide">OFLAYN REJIM</span>
                    )}
                </div>

                {/* Main Call Button */}
                <button
                    onClick={toggleSession}
                    className={`relative group w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden ${
                        isLiveSession 
                        ? 'bg-red-500 hover:bg-red-600 shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] hover:scale-105' 
                        : 'bg-emerald-500 hover:bg-emerald-600 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] hover:scale-105'
                    }`}
                >
                    {/* Ripple effect when active */}
                    {isLiveSession && (
                        <>
                            <div className="absolute inset-0 rounded-full border-[3px] border-white/20 animate-ping" />
                            <div className="absolute inset-0 rounded-full border-[2px] border-white/10 animate-ping" style={{ animationDelay: '300ms' }} />
                        </>
                    )}
                    
                    {isLiveSession ? (
                        <PhoneOff fill="white" className="text-white relative z-10 transition-transform group-hover:rotate-12" size={28} />
                    ) : (
                        <PhoneCall fill="white" className="text-white relative z-10 transition-transform group-hover:-rotate-12" size={28} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default SpeakingCoachPage;
