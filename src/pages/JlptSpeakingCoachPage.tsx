import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateAIResponse } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';

export const JlptSpeakingCoachPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP } = useStudyData();

    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; romaji?: string }[]>([
        {
            role: 'assistant',
            content: 'こんにちは！はじめまして。日本語の勉強はどうですか？(Konnichiwa! Hajimemashite. Nihongo no benkyou wa dou desu ka?)',
            romaji: 'Konnichiwa! Hajimemashite. Nihongo no benkyou wa dou desu ka?'
        }
    ]);

    const recognitionRef = useRef<any>(null);
    const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Initialize Web Speech Recognition for Japanese (ja-JP)
    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'ja-JP';

            recognition.onresult = (event: any) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = 0; i < event.results.length; i++) {
                    const transcriptChunk = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcriptChunk + ' ';
                    } else {
                        interimTranscript += transcriptChunk;
                    }
                }

                const currentText = (finalTranscript + interimTranscript).replace(/\s+/g, ' ').trim();
                setTranscript(currentText);

                // Reset 3.0s silence timer
                if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = setTimeout(() => {
                    if (currentText.trim()) {
                        handleSendMessage(currentText);
                    }
                }, 3000);
            };

            recognition.onerror = (e: any) => console.error("Japanese speech recognition error", e);
            recognitionRef.current = recognition;
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Brauzeringizda Yaponcha ovozni aniqlash mos emas.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        } else {
            setTranscript('');
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const handleSendMessage = async (textToSend?: string) => {
        const text = textToSend || transcript;
        if (!text.trim()) return;

        if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

        const newMessages = [...messages, { role: 'user' as const, content: text }];
        setMessages(newMessages);
        setTranscript('');
        setIsThinking(true);

        try {
            const prompt = `
            Act as a polite native Japanese Kaiwa (会話) Tutor (Ken-sensei).
            Respond to the student in natural Japanese (using Kanji with Hiragana/Romaji in parentheses).
            Keep it encouraging and polite (Desu/Masu form).
            Provide a short Uzbek translation at the end in brackets [].
            Student input: "${text}"
            `;

            const aiRes = await generateAIResponse([{ role: 'user', content: prompt }]);
            setMessages(prev => [...prev, { role: 'assistant', content: aiRes }]);

            // Award 20 XP for Japanese speech turn
            awardXP(20);

            // Native Japanese TTS
            speakJapanese(aiRes);
        } catch (e) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'すみません、もう一度言っていただけますか？ (Sumimasen, mou ichido itte itadakemasu ka?) [Kechirasiz, qaytadan ayta olasizmi?]' }]);
        } finally {
            setIsThinking(false);
        }
    };

    const speakJapanese = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const cleanText = text.replace(/\[.*?\]/g, '').trim(); // Remove Uzbek brackets for TTS
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.9; // Slightly slower for clear Japanese pronunciation
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto flex flex-col h-[calc(100vh-5rem)]">
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate('/jlpt')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold text-xs"
                >
                    <ArrowLeft size={16} /> JLPT Hub'ga qaytish
                </button>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-500 font-extrabold text-xs rounded-full border border-rose-500/20">
                    🎌 Nihongo Kaiwa Examiner (3.0s VAD Pause)
                </span>
            </div>

            {/* Chat Box */}
            <div className="flex-1 bg-card border border-border rounded-3xl p-6 overflow-y-auto space-y-4 shadow-xl">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                                m.role === 'user'
                                    ? 'bg-rose-600 text-white rounded-tr-none'
                                    : 'bg-muted border border-border text-foreground rounded-tl-none'
                            }`}
                        >
                            <p className="whitespace-pre-wrap">{m.content}</p>
                            {m.role === 'assistant' && (
                                <button
                                    onClick={() => speakJapanese(m.content)}
                                    className="mt-2 text-xs font-bold text-rose-500 flex items-center gap-1 hover:underline"
                                >
                                    <Volume2 size={14} /> Qayta eshitish
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                {isThinking && (
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-500">
                        <Sparkles size={16} className="animate-spin" /> Ken-sensei javob tayyorlamoqda...
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="pt-4 space-y-3">
                {transcript && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-xs text-rose-600 dark:text-rose-300 font-medium">
                        <b>Eshitilmoqda:</b> {transcript}
                    </div>
                )}

                <div className="flex gap-3">
                    <button
                        onClick={toggleListening}
                        className={`p-4 rounded-2xl text-white font-extrabold transition-all flex items-center gap-2 ${
                            isListening
                                ? 'bg-rose-600 animate-pulse shadow-lg shadow-rose-500/40'
                                : 'bg-muted/80 text-foreground border border-border hover:bg-muted'
                        }`}
                    >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                        <span className="text-xs">{isListening ? "Eshitilmoqda (3.0s pauza)..." : "Mikrofonni Yoqish"}</span>
                    </button>

                    <button
                        onClick={() => handleSendMessage()}
                        disabled={isThinking || !transcript.trim()}
                        className="flex-1 py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                    >
                        <Send size={18} />
                        <span>Yuborish</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JlptSpeakingCoachPage;
