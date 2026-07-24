import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Send, ArrowLeft, GraduationCap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateAIResponse, analyzeSpeakingSession, SessionAnalysisReport } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import SessionReportModal from '../components/speaking/SessionReportModal';

export type CoachPersona = 'friendly' | 'keigo' | 'roast' | 'examiner';

export const JlptSpeakingCoachPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP, addCoachSession } = useStudyData();

    const [jlptLevel, setJlptLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
    const [persona, setPersona] = useState<CoachPersona>('friendly');
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [inputText, setInputText] = useState('');
    const [isThinking, setIsThinking] = useState(false);

    // Analysis report modal states
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isReportLoading, setIsReportLoading] = useState(false);
    const [reportData, setReportData] = useState<SessionAnalysisReport | null>(null);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
        {
            role: 'assistant',
            content: 'こんにちは！はじめまして。日本語の勉強はどうですか？ (Konnichiwa! Hajimemashite. Nihongo no benkyou wa dou desu ka?) [Salom! Tanishganimdan xursandman. Yapon tili o\'rganish qanday ketyapti?]'
        }
    ]);

    const recognitionRef = useRef<any>(null);
    const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getPersonaInstruction = () => {
        switch (persona) {
            case 'roast':
                return 'Act as a hilarious, super strict Japanese Oni-Sensei (鬼先生). Roast student\'s Japanese grammar with witty sarcasm while keeping it educational!';
            case 'keigo':
                return 'Act as a formal Japanese Keigo Master (敬語/尊敬語/謙譲語). Focus strictly on formal business Japanese and honorific expressions.';
            case 'examiner':
                return 'Act as an official JLPT Oral Test Examiner. Conduct a structured assessment of Japanese speaking ability.';
            default:
                return 'Act as a polite, encouraging native Japanese Kaiwa (会話) Tutor (Ken-sensei).';
        }
    };

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
            alert("Brauzeringizda Yaponcha ovozni aniqlash (ja-JP) qo'llab-quvvatlanmaydi.");
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
        const text = textToSend || inputText || transcript;
        if (!text.trim()) return;

        if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

        const newMessages = [...messages, { role: 'user' as const, content: text }];
        setMessages(newMessages);
        setTranscript('');
        setInputText('');
        setIsThinking(true);

        try {
            const prompt = `
            System Role: ${getPersonaInstruction()}
            Target Student Level: JLPT ${jlptLevel}.
            Instructions:
            1. Respond in natural Japanese tailored to JLPT ${jlptLevel} level.
            2. Include Kanji with Furigana/Romaji in parentheses after Japanese text.
            3. Provide a brief Uzbek translation in brackets [] at the very end.
            4. Be engaging and ask a short follow-up question.
            `;

            const historyForAI: { role: 'user' | 'system'; content: string }[] = [
                { role: 'user', content: prompt },
                ...messages.map(m => ({ role: 'user' as const, content: m.content })),
                { role: 'user', content: text }
            ];

            const aiRes = await generateAIResponse(historyForAI);
            setMessages(prev => [...prev, { role: 'assistant', content: aiRes }]);

            // Award 20 XP for Japanese speech turn
            awardXP(20);

            // Native Japanese TTS
            speakJapanese(aiRes);
        } catch (e) {
            console.warn("AI generation fallback triggered for JLPT coach:", e);
            let fallbackRes = 'いいですね！日本語の練習を続けましょう！ (Ii desu ne! Nihongo no renshuu wo tsudukemashou!) [Juda yaxshi! Yapon tili mashqini davom ettiramiz!]';
            if (text.includes('いいですよ') || text.includes('はい')) {
                fallbackRes = '素晴らしいです！今日の調子はどうですか？ (Subarashii desu! Kyou no choushi wa dou desu ka?) [Ajoyib! Bugungi kayfiyatingiz qanday?]';
            }
            setMessages(prev => [...prev, { role: 'assistant', content: fallbackRes }]);
            speakJapanese(fallbackRes);
        } finally {
            setIsThinking(false);
        }
    };

    const currentAudioRef = useRef<HTMLAudioElement | null>(null);

    const speakJapanese = (text: string) => {
        // Stop any currently playing audio or speech
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }

        // 1. Clean text: remove Romaji (in parentheses), Uzbek translations (in brackets), and markdown
        const cleanText = text
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .replace(/[*_#`~]/g, '')
            .trim();

        if (!cleanText) return;

        // 2. Try High-Definition Natural Google TTS Audio Endpoint
        try {
            const encoded = encodeURIComponent(cleanText.substring(0, 200));
            const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=ja&client=tw-ob`;
            const audio = new Audio(ttsUrl);
            currentAudioRef.current = audio;

            audio.play().catch(() => {
                // If audio playback is blocked by browser policy, fallback to Web Speech API
                fallbackSpeechSynthesis(cleanText);
            });
            audio.onerror = () => {
                fallbackSpeechSynthesis(cleanText);
            };
            return;
        } catch (e) {
            fallbackSpeechSynthesis(cleanText);
        }
    };

    const fallbackSpeechSynthesis = (cleanText: string) => {
        if (!('speechSynthesis' in window)) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.92; // Natural human cadence
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const jpVoices = voices.filter(v => v.lang.toLowerCase().includes('ja'));

        if (jpVoices.length > 0) {
            // Find highest quality natural voice available on OS/Browser
            const naturalVoice = jpVoices.find(v => 
                v.name.toLowerCase().includes('kyoko') || 
                v.name.toLowerCase().includes('otoya') || 
                v.name.toLowerCase().includes('google') || 
                v.name.toLowerCase().includes('natural') || 
                v.name.toLowerCase().includes('nanami') || 
                v.name.toLowerCase().includes('enhanced') || 
                v.name.toLowerCase().includes('premium')
            ) || jpVoices[0];

            if (naturalVoice) {
                utterance.voice = naturalVoice;
            }
        }

        window.speechSynthesis.speak(utterance);
    };

    const handleEndSessionAndAnalyze = async () => {
        if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

        const userSpoke = messages.some(m => m.role === 'user');
        if (!userSpoke) {
            alert("Tahlil olish uchun kamida 1 ta yaponcha jumla gapiring.");
            return;
        }

        setIsReportOpen(true);
        setIsReportLoading(true);
        try {
            const report = await analyzeSpeakingSession(messages, 'ja', persona);
            setReportData(report);

            // Save to statistics in StudyPlannerContext
            await addCoachSession({
                personaTitle: `JLPT ${jlptLevel} (${persona.toUpperCase()})`,
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
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto flex flex-col h-[calc(100vh-5rem)]">
            {/* Header with Level Selector, Persona Selector & Analyze Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <button
                    onClick={() => navigate('/jlpt')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold text-xs"
                >
                    <ArrowLeft size={16} /> JLPT Hub'ga qaytish
                </button>

                {/* Finish & Analyze Session Button */}
                {messages.some(m => m.role === 'user') && (
                    <button
                        onClick={handleEndSessionAndAnalyze}
                        className="px-3 py-1.5 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-rose-500/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                    >
                        <Award size={14} /> Tahlil Olish & Saqlash
                    </button>
                )}

                {/* Persona Selector */}
                <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-xl border border-border">
                    <button
                        onClick={() => setPersona('friendly')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${persona === 'friendly' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        🤝 Do'stona
                    </button>
                    <button
                        onClick={() => setPersona('keigo')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${persona === 'keigo' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        💼 Keigo (Hurmat)
                    </button>
                    <button
                        onClick={() => setPersona('roast')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${persona === 'roast' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        🔥 Roast
                    </button>
                    <button
                        onClick={() => setPersona('examiner')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${persona === 'examiner' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        🎓 Imtihonchi
                    </button>
                </div>

                {/* Level Selector */}
                <div className="flex items-center gap-1.5 bg-muted/50 p-1 rounded-xl border border-border">
                    <GraduationCap size={14} className="text-muted-foreground ml-1.5" />
                    <span className="text-xs font-medium text-muted-foreground mr-1">Daraja:</span>
                    {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setJlptLevel(lvl)}
                            className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${jlptLevel === lvl ? 'bg-rose-500 text-white shadow' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Box */}
            <div className="flex-1 bg-card border border-border rounded-3xl p-4 md:p-6 overflow-y-auto space-y-4 shadow-xl relative">
                {messages.map((m, i) => {
                    const isAssistant = m.role === 'assistant';
                    // Parse Japanese text, Romaji, and Uzbek translation if formatted
                    const romajiMatch = m.content.match(/\((.*?)\)/);
                    const uzbekMatch = m.content.match(/\[(.*?)\]/);
                    
                    const japaneseText = m.content.replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim();
                    const romajiText = romajiMatch ? romajiMatch[1] : null;
                    const uzbekText = uzbekMatch ? uzbekMatch[1] : null;

                    return (
                        <div
                            key={i}
                            className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`p-4 rounded-3xl max-w-[88%] text-sm leading-relaxed shadow-sm transition-all ${
                                    m.role === 'user'
                                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-tr-none'
                                        : 'bg-muted/80 border border-border text-foreground rounded-tl-none space-y-2.5'
                                }`}
                            >
                                {isAssistant && romajiText ? (
                                    <>
                                        {/* Main Japanese Text */}
                                        <div className="text-base font-extrabold tracking-wide text-foreground">
                                            {japaneseText}
                                        </div>

                                        {/* Romaji Pronunciation */}
                                        <div className="text-xs font-mono text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
                                            🗣️ <b>Romaji:</b> {romajiText}
                                        </div>

                                        {/* Uzbek Translation */}
                                        {uzbekText && (
                                            <div className="text-xs text-muted-foreground bg-background/60 p-2.5 rounded-xl border border-border/60">
                                                🇺🇿 <b>Ma'nosi:</b> {uzbekText}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <p className="whitespace-pre-wrap">{m.content}</p>
                                )}

                                {isAssistant && (
                                    <div className="flex items-center gap-3 pt-1 border-t border-border/40 mt-2">
                                        <button
                                            onClick={() => speakJapanese(m.content)}
                                            className="text-xs font-extrabold text-rose-500 hover:text-rose-600 flex items-center gap-1.5 transition-all hover:scale-105"
                                        >
                                            <Volume2 size={15} /> Qayta eshitish 🔊
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
                {isThinking && (
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-500 animate-pulse bg-rose-500/10 p-3 rounded-2xl border border-rose-500/20 w-fit">
                        <Sparkles size={16} className="animate-spin" /> Ken-sensei (JLPT {jlptLevel}) javob tayyorlamoqda...
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="pt-4 space-y-3">
                {transcript && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-xs text-rose-600 dark:text-rose-300 font-medium">
                        <b>Ovozli javob:</b> {transcript}
                    </div>
                )}

                <div className="flex gap-2">
                    <button
                        onClick={toggleListening}
                        className={`px-5 py-3.5 rounded-2xl text-white font-extrabold transition-all flex items-center gap-2 ${
                            isListening
                                ? 'bg-rose-600 animate-pulse shadow-lg shadow-rose-500/40'
                                : 'bg-muted/80 text-foreground border border-border hover:bg-muted'
                        }`}
                        title="Ovoz bilan gapirish"
                    >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                        <span className="text-xs hidden sm:inline">{isListening ? "Eshitilmoqda..." : "Ovozli"}</span>
                    </button>

                    <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Yaponcha yozing (yoki mikrofonni bosing)..."
                        className="flex-1 px-4 py-3.5 bg-muted/50 border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />

                    <button
                        onClick={() => handleSendMessage()}
                        disabled={isThinking || (!inputText.trim() && !transcript.trim())}
                        className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                    >
                        <Send size={18} />
                        <span className="hidden sm:inline">Yuborish</span>
                    </button>
                </div>
            </div>

            {/* Session Analysis Report Modal */}
            <SessionReportModal 
                isOpen={isReportOpen}
                onClose={() => setIsReportOpen(false)}
                report={reportData}
                isLoading={isReportLoading}
                personaTitle={`JLPT ${jlptLevel} (${persona.toUpperCase()})`}
            />
        </div>
    );
};

export default JlptSpeakingCoachPage;
