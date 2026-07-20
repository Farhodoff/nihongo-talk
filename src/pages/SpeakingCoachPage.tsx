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
        <div className="p-4 md:p-8 max-w-4xl mx-auto h-full flex flex-col overflow-hidden w-full">
            <div className="mb-4 flex-shrink-0 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                        <Mic className="text-primary" size={32} />
                        Live Speaking Coach
                    </h2>
                    <p className="text-muted-foreground mt-1">
                        Ovozli rejimda AI bilan jonli suhbat quring. U sizni roast qiladi va o'rgatadi!
                    </p>
                </div>
                
                {/* Language Selector */}
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-1.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <Globe size={18} className="text-muted-foreground ml-2" />
                    <select 
                        disabled={isLiveSession}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
                        className="bg-transparent border-none text-sm font-medium text-foreground outline-none cursor-pointer p-2 disabled:opacity-50"
                    >
                        <option value="en">🇬🇧 English</option>
                        <option value="ja">🇯🇵 日本語 (Japanese)</option>
                    </select>
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl mb-4 text-sm text-center flex-shrink-0">
                    {error}
                </div>
            )}

            {/* Chat History Area */}
            <div 
                ref={chatContainerRef}
                className="flex-1 bg-white dark:bg-[#1f2937] rounded-2xl shadow-sm border border-border p-4 mb-4 overflow-y-auto space-y-4"
            >
                {chatHistory.length === 0 && !isLiveSession && (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                        <MessageSquare size={48} className="mb-4" />
                        <p>Jonli suhbatni boshlash uchun qo'ng'iroq tugmasini bosing</p>
                    </div>
                )}
                
                {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground rounded-tr-none' 
                            : 'bg-gray-100 dark:bg-gray-800 text-foreground rounded-tl-none border border-gray-200 dark:border-gray-700'
                        }`}>
                            <p className="text-sm md:text-base leading-relaxed">{msg.content}</p>
                        </div>
                    </div>
                ))}

                {(currentTranscript || isThinking) && (
                    <div className="flex justify-end">
                        <div className="max-w-[80%] p-3 rounded-2xl bg-primary/20 text-foreground rounded-tr-none border border-primary/30">
                            <p className="text-sm md:text-base italic opacity-80">
                                {currentTranscript || "..."}
                            </p>
                        </div>
                    </div>
                )}
                
                {isThinking && (
                    <div className="flex justify-start">
                        <div className="max-w-[80%] p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-foreground rounded-tl-none flex gap-2 items-center">
                            <Activity size={16} className="animate-pulse text-primary" />
                            <span className="text-sm italic text-muted-foreground">O'ylanmoqda...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Controls Area */}
            <div className="flex-shrink-0 bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center">
                
                {/* Status Indicator */}
                <div className="mb-6 h-8 flex items-center justify-center">
                    {isLiveSession ? (
                        isSpeaking ? (
                            <span className="flex items-center gap-2 text-blue-500 font-medium animate-pulse">
                                <Volume2 size={20} /> AI gapirmoqda...
                            </span>
                        ) : isThinking ? (
                            <span className="flex items-center gap-2 text-yellow-500 font-medium animate-pulse">
                                <Activity size={20} /> Tahlil qilinmoqda...
                            </span>
                        ) : isListening ? (
                            <span className="flex items-center gap-2 text-green-500 font-medium animate-pulse">
                                <Mic size={20} /> Sizni eshitmoqda... Gapiring!
                            </span>
                        ) : (
                            <span className="flex items-center gap-2 text-muted-foreground font-medium">
                                Tayyorlanmoqda...
                            </span>
                        )
                    ) : (
                        <span className="text-muted-foreground font-medium">Oflayn rejim</span>
                    )}
                </div>

                {/* Main Call Button */}
                <button
                    onClick={toggleSession}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isLiveSession 
                        ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30 hover:scale-105' 
                        : 'bg-green-500 hover:bg-green-600 shadow-green-500/30 hover:scale-105 animate-bounce'
                    }`}
                >
                    {isLiveSession ? (
                        <PhoneOff fill="white" className="text-white" size={36} />
                    ) : (
                        <PhoneCall fill="white" className="text-white" size={36} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default SpeakingCoachPage;
