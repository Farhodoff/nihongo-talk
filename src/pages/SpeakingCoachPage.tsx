import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldAlert, X } from 'lucide-react';
import { converseWithCoachStructured, CoachVocabularyItem, analyzeSpeakingSession, SessionAnalysisReport, translateTextToUzbek, parseMicroErrors, extractSpeechAudioText } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import { ErrorVaultService } from '../services/ErrorVaultService';
import { MasteryEngine } from '../services/MasteryEngine';
import { isAdminEmail, isSuperAdmin } from '../utils/admin';
import { toast } from '../hooks/use-toast';
import SessionReportModal from '../components/speaking/SessionReportModal';
import { PERSONAS_BY_LANG, CoachPersona, CoachChatMessage } from '../components/speaking/speakingTypes';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useTTS } from '../hooks/useTTS';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';
import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import { evaluateScenarioSession } from '../utils/ai/aiScenarioEval';
import { ScenarioReportModal } from '../components/speaking/ScenarioReportModal';
import { CoachTopBar } from '../components/speaking/CoachTopBar';
import { CoachWelcomeScreen } from '../components/speaking/CoachWelcomeScreen';
import { CoachChatArea } from '../components/speaking/CoachChatArea';
import { CoachControlBar } from '../components/speaking/CoachControlBar';
import { CoachSettingsModal } from '../components/speaking/CoachSettingsModal';
import { CoachProgressDashboard } from '../components/speaking/CoachProgressDashboard';
import { RealtimeVoiceOverlay, ErrorTag } from '../components/speaking/RealtimeVoiceOverlay';
import { playConversationChime } from '../utils/audioChime';
import { isAcousticEcho } from '../utils/echoFilter';
import { SpeakingVocabularyService } from '../services/SpeakingVocabularyService';
import { AudioStorageService } from '../services/AudioStorageService';
import { getOrEnsureLanguageSubject } from '../utils/subjectResolver';


const PROMPT_SUGGESTIONS_BY_LANG: Record<'en' | 'ja', { title: string; text: string; icon: string }[]> = {
    en: [
        { title: "Introduce Yourself", text: "Hajimemashite. Let's practice self-introduction in Japanese. Can you ask me questions to prompt my self-intro?", icon: "👋" },
        { title: "Roast My Japanese", text: "I want you to be a strict Japanese teacher. Correct every grammatical or pronunciation mistake I make in Japanese!", icon: "🔥" },
        { title: "JLPT Speaking Mock", text: "Let's practice for JLPT speaking. Give me a daily conversation topic to talk about.", icon: "📝" },
        { title: "IT Mock Interview", text: "Act as a Japanese IT recruiter and ask me 3 interview questions in Japanese.", icon: "💼" }
    ],
    ja: [
        { title: "自己紹介 (Jikoshoukai)", text: "はじめまして。自己紹介の練習をしたいです。", icon: "🙋" },
        { title: "IT面接 (IT Mock Interview)", text: "日本のIT企業の面接練習をお願いします。自己紹介からスタートしてください。", icon: "💻" },
        { title: "敬語チェック (Keigo Check)", text: "私の敬語の使い方をチェックしてアドバイスをください。", icon: "📖" },
        { title: "日常会話 (Daily Japanese)", text: "日本語で楽しい日常会話をしましょう！", icon: "🗣️" }
    ]
};

const SpeakingCoachPage: React.FC = () => {
    const { primaryLanguage } = useStudyData();
    const [searchParams, setSearchParams] = useSearchParams();
    const { user, addCoachSession, addFlashcardsBatch, subjects, addSubject } = useStudyData();
    const isAdmin = isAdminEmail(user?.email);
    const isSuper = isSuperAdmin(user?.email);

    const urlLang = searchParams.get('lang');
    const scenarioIdParam = searchParams.get('scenario');

    const initialLang: 'en' | 'ja' = (isSuper && urlLang === 'en') ? 'en' : 'ja';
    const [language, setLanguage] = useState<'en' | 'ja'>(initialLang);

    useEffect(() => {
        if (!isSuper) {
            setLanguage('ja');
            return;
        }
        if (urlLang === 'ja' || urlLang === 'en') {
            setLanguage(prev => prev !== urlLang ? urlLang : prev);
        } else if (primaryLanguage === 'ja' || primaryLanguage === 'en') {
            setLanguage(prev => prev !== primaryLanguage ? primaryLanguage : prev);
        }
    }, [urlLang, primaryLanguage, isSuper]);

    // Scenario & Voice Recorder state
    const [activeScenario, setActiveScenario] = useState<ConversationScenario | null>(null);
    const [isScenarioReportOpen, setIsScenarioReportOpen] = useState(false);
    const [isScenarioEvalLoading, setIsScenarioEvalLoading] = useState(false);
    const [scenarioEvalResult, setScenarioEvalResult] = useState<ScenarioSessionResult | null>(null);

    const voiceRecorder = useVoiceRecorder();

    useEffect(() => {
        if (scenarioIdParam) {
            const normalizedParam = scenarioIdParam.trim().replace(/\s+/g, '_');
            if (activeScenarioRef.current?.id === scenarioIdParam || activeScenarioRef.current?.id === normalizedParam) return;
            ScenarioService.getScenarios().then(scenarios => {
                const found = scenarios.find(s => s.id === scenarioIdParam || s.id === normalizedParam);
                if (found) {
                    setActiveScenario(found);
                    const sLang = found.language || (found.title_en ? 'en' : 'ja');
                    setLanguage(prev => prev !== sLang ? sLang : prev);
                }
            }).catch(err => {
                console.error("Scenario load error:", err);
            });
        } else {
            setActiveScenario(prev => prev !== null ? null : prev);
        }
    }, [scenarioIdParam]);


    const handleLanguageChange = (newLang: 'en' | 'ja') => {
        if (isLiveSession) return;
        setLanguage(newLang);
        setSearchParams({ lang: newLang });
    };

    const [persona, setPersona] = useState<CoachPersona>('roast');
    const [targetBand, setTargetBand] = useState<'5.0' | '6.0' | '7.0' | '7.5' | '8.0' | '9.0'>('7.5');
    const [isLiveSession, setIsLiveSession] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [chatHistory, setChatHistory] = useState<CoachChatMessage[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [sessionSeconds, setSessionSeconds] = useState(0);
    const [showPersonaSelector, setShowPersonaSelector] = useState(false);
    const [liveErrors, setLiveErrors] = useState<ErrorTag[]>([]);

    // Session Analysis Report Modal state
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isReportLoading, setIsReportLoading] = useState(false);
    const [reportData, setReportData] = useState<SessionAnalysisReport | null>(null);

    // Open access for all users
    const isPaidUser = true;
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const activeScenarioRef = useRef(activeScenario);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const isProcessingRef = useRef(false);
    const isLiveSessionRef = useRef(false);
    const chatHistoryRef = useRef<CoachChatMessage[]>([]);
    const languageRef = useRef(language);
    const personaRef = useRef(persona);

    useEffect(() => {
        activeScenarioRef.current = activeScenario;
    }, [activeScenario]);

    useEffect(() => {
        chatHistoryRef.current = chatHistory;
    }, [chatHistory]);

    useEffect(() => {
        languageRef.current = language;
        personaRef.current = persona;
    }, [language, persona]);

    // Timer logic
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

    // Voice Mode: Click-to-Talk (default: user presses to speak) & optional Hands-Free
    const [isHandsFree, setIsHandsFree] = useState(false);
    const isHandsFreeRef = useRef(false);
    useEffect(() => { isHandsFreeRef.current = isHandsFree; }, [isHandsFree]);

    // Fullscreen Toggle Support (⛶ Zoom/Fullscreen mode)
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            if (containerRef.current?.requestFullscreen) {
                containerRef.current.requestFullscreen().catch(() => {
                    setIsFullscreen(prev => !prev);
                });
            } else if ((containerRef.current as any)?.webkitRequestFullscreen) {
                (containerRef.current as any).webkitRequestFullscreen();
            } else {
                setIsFullscreen(true);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {
                    setIsFullscreen(false);
                });
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else {
                setIsFullscreen(false);
            }
        }
    }, []);

    const isSpeakingRef = useRef(isSpeaking);
    useEffect(() => { isSpeakingRef.current = isSpeaking; }, [isSpeaking]);

    const lastCoachSpokenTextRef = useRef<string>('');

    // TTS Hook
    const { speakText, stopSpeaking } = useTTS({
        language,
        isLiveSessionRef,
        isProcessingRef,
        onSpeakStart: () => {
            setIsSpeaking(true);
            if (recognitionRef.current) {
                try { recognitionRef.current.abort(); } catch {}
            }
            transcriptBufferRef.current = '';
            setCurrentTranscript('');
        },
        onSpeakEnd: () => {
            setIsSpeaking(false);
            isProcessingRef.current = false;
            // In Click-to-Talk mode (default), mic stays off so user can press "Gapirish" when ready.
            if (isLiveSessionRef.current && isHandsFreeRef.current && !isMuted) {
                setTimeout(() => {
                    if (isLiveSessionRef.current && isHandsFreeRef.current && !isSpeakingRef.current && !isProcessingRef.current) {
                        startListening();
                    }
                }, 1000);
            }
        },
    });

    // Speech Recognition Hook
    const {
        recognitionRef,
        isListening,
        currentTranscript,
        setCurrentTranscript,
        transcriptBufferRef,
        error,
        setError,
        startListening,
        commitSpeechNow,
    } = useSpeechRecognition({
        language,
        isLiveSessionRef,
        isProcessingRef,
        isSpeaking,
        isThinking,
        isMuted,
        onValidSpeech: (spokenText) => {
            handleSendUserText(spokenText);
        },
        onResumeListening: () => {},
    });

    const handleBargeIn = useCallback(() => {
        if (isSpeaking) {
            playConversationChime('barge_in');
            stopSpeaking();
            setIsSpeaking(false);
            isProcessingRef.current = false;
            setTimeout(() => {
                startListening();
            }, 100);
        }
    }, [isSpeaking, stopSpeaking, startListening]);

    const toggleMic = () => {
        if (isSpeaking) {
            handleBargeIn();
            return;
        }
        if (isListening) {
            if (recognitionRef.current) {
                try { recognitionRef.current.stop(); } catch (e) {}
            }
        } else {
            startListening();
        }
    };

    const handleAddVocabToFlashcards = async (vocab: CoachVocabularyItem): Promise<boolean> => {
        try {
            const isJa = language === 'ja' || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(vocab.word);
            const activeLang = isJa ? 'ja' : 'en';
            const front = isJa
                ? `${vocab.word}${vocab.reading ? ` (${vocab.reading})` : ''}`
                : vocab.word;
            const back = `📌 Ma'nosi: ${vocab.meaning}${vocab.example ? `\n\n💬 Misol: ${vocab.example}` : ''}`;

            // 1. Direct PostgreSQL DB Persist into `speaking_vocabularies`
            const userId = user?.id || 'local_user';
            const personaName = PERSONAS_BY_LANG[activeLang]?.[persona]?.name;
            const scenarioName = activeScenario ? (activeScenario.title_uz || activeScenario.title_en || activeScenario.title_ja) : undefined;
            await SpeakingVocabularyService.saveVocabulary(
                userId,
                vocab,
                activeLang,
                personaName || scenarioName || 'AI Speaking Coach'
            );

            // 2. Resolve proper subject ID and sync to `flashcards` table (Anki SM-2)
            const targetSubjectId = await getOrEnsureLanguageSubject(subjects, addSubject, isJa ? 'ja' : 'en');

            await addFlashcardsBatch([{
                front,
                back,
                subjectId: targetSubjectId || undefined
            }]);

            toast({
                title: '🎴 So\'z Saqlandi!',
                description: `"${vocab.word}" so'zlar bazasi (DB) va Fleshkartalaringizga muvaffaqiyatli saqlandi.`
            });
            return true;
        } catch (err) {
            console.error('handleAddVocabToFlashcards error:', err);
            toast({
                variant: 'destructive',
                title: 'Xatolik',
                description: 'So\'zni saqlashda xatolik yuz berdi.'
            });
            return false;
        }
    };

    const handleSendUserText = async (text: string) => {
        const cleanText = (text || '').trim();
        if (!cleanText || cleanText.length < 2) return;

        // Acoustic Echo Suppression: Discard microphone loopback of coach's own audio
        if (isAcousticEcho(cleanText, lastCoachSpokenTextRef.current)) {
            console.warn('[SpeakingCoach] Discarded acoustic speaker echo loopback:', cleanText);
            isProcessingRef.current = false;
            setIsThinking(false);
            setCurrentTranscript('');
            transcriptBufferRef.current = '';
            if (isLiveSessionRef.current && isHandsFreeRef.current && !isMuted) {
                setTimeout(() => {
                    startListening();
                }, 500);
            }
            return;
        }

        isProcessingRef.current = true;
        setIsThinking(true);
        setError(null);

        stopSpeaking();
        setIsSpeaking(false);

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const userMsg: CoachChatMessage = { role: 'user', content: cleanText, timestamp: timeStr };
        const updatedHistory = [...chatHistoryRef.current, userMsg];
        
        setChatHistory(updatedHistory);
        chatHistoryRef.current = updatedHistory;

        try {
            const structured = await converseWithCoachStructured(
                cleanText,
                updatedHistory.map(h => ({ role: h.role, content: h.content })),
                languageRef.current,
                personaRef.current,
                undefined,
                activeScenarioRef.current
            );

            const aiMsg: CoachChatMessage = {
                role: 'assistant',
                content: structured.reply,
                romaji: structured.romaji,
                ttsText: structured.ttsText,
                correction: structured.correction,
                vocabulary: structured.vocabulary,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            const finalHistory = [...updatedHistory, aiMsg];
            
            // Record structured micro-error for real-time live overlay & persist immediately to ErrorVault/MasteryEngine
            if (structured.correction && structured.correction.hasError && structured.correction.corrected) {
                const errorTag: ErrorTag = {
                    id: Math.random().toString(36).substring(2, 9),
                    type: 'grammar',
                    originalText: structured.correction?.original || cleanText,
                    correction: structured.correction?.corrected || '',
                    explanation: structured.correction?.explanation || ''
                };
                setLiveErrors(prev => [errorTag, ...prev].slice(0, 10));

                ErrorVaultService.logErrors([{
                    verbatim: structured.correction.original || cleanText,
                    correction: structured.correction.corrected,
                    explanation: structured.correction.explanation || '',
                    category: 'grammar',
                    language: languageRef.current
                }]);

                const activeUserId = user?.id || 'default-user';
                MasteryEngine.recordEvidence(activeUserId, languageRef.current, {
                    id: `ev_spk_err_${Date.now()}`,
                    skill: 'speaking',
                    timestamp: new Date().toISOString(),
                    score: 40,
                    activityType: 'speaking',
                    details: `Speaking error corrected: ${structured.correction.corrected}`
                });
            } else {
                const extractedErrs = parseMicroErrors(structured.rawText || structured.reply);
                if (extractedErrs.length > 0) {
                    setLiveErrors(prev => [...extractedErrs, ...prev].slice(0, 10));
                } else {
                    const activeUserId = user?.id || 'default-user';
                    MasteryEngine.recordEvidence(activeUserId, languageRef.current, {
                        id: `ev_spk_turn_${Date.now()}`,
                        skill: 'speaking',
                        timestamp: new Date().toISOString(),
                        score: 90,
                        activityType: 'speaking',
                        details: `Clean speaking turn with ${personaRef.current} persona`
                    });
                }
            }

            setChatHistory(finalHistory);
            chatHistoryRef.current = finalHistory;

            setIsThinking(false);
            isProcessingRef.current = false;

            // STRICT TTS: Speak ONLY canonical Japanese/English TTS text (never Romaji or visual notes)
            const speechToPlay = structured.ttsText || extractSpeechAudioText(structured.reply);
            lastCoachSpokenTextRef.current = speechToPlay;
            speakText(speechToPlay);
        } catch (err: any) {
            console.error("Coach response error:", err);
            let errorMessage = err.message || 'Tahlil qilishda xatolik yuz berdi.';
            if (errorMessage.startsWith('RATE_LIMIT: ')) {
                errorMessage = errorMessage.substring('RATE_LIMIT: '.length);
            }
            stopSpeaking();
            setIsSpeaking(false);
            setError(errorMessage);
            toast({ variant: 'destructive', title: '❌ AI Xatosi', description: errorMessage });
            setIsThinking(false);
            isProcessingRef.current = false;
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
                case 'roast': return "Hello! Strict Japanese Roast Coach here. Speak in Japanese and prepare for corrections!";
                case 'gentle': return "Hello! I'm your Japanese language tutor. Feel free to start talking in Japanese whenever you're ready!";
                case 'ielts': return "Good day! Let's practice Japanese JLPT Speaking. Shall we begin?";
                case 'interview': return "Hello! Welcome to your Japanese IT Job Mock Interview. Let's start with a self-introduction in Japanese.";
                case 'travel': return "Konnichiwa! Welcome to Narita Airport. Let's practice travel Japanese.";
                case 'casual': return "Hey friend! Let's chat in casual Japanese. What's on your mind today?";
            }
        }
    };

    const startSession = (topicTitle?: unknown) => {
        setIsLiveSession(true);
        isLiveSessionRef.current = true;
        setCurrentTranscript('');
        setError(null);

        // Start voice recorder for student self-audio recording
        voiceRecorder.startRecording();

        const cleanTopic = typeof topicTitle === 'string' && topicTitle.trim().length > 0 && !topicTitle.includes('[object')
            ? topicTitle.trim()
            : undefined;

        let greeting = getInitialGreeting(language, persona);
        if (activeScenario) {
            greeting = (language === 'en' ? activeScenario.opening_line_en : activeScenario.opening_line_ja)
                || activeScenario.opening_line_en
                || activeScenario.opening_line_ja
                || "Hello! Let's start our conversation practice.";
        } else if (cleanTopic) {
            if (language === 'ja') {
                greeting = `こんにちは！「${cleanTopic}」ですね。準備ができたら話しかけてください！`;
            } else {
                greeting = `Hello! Let's practice with "${cleanTopic}". Feel free to speak whenever you are ready!`;
            }
        }

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const initHistory: CoachChatMessage[] = [{ role: 'assistant', content: greeting, timestamp: timeStr }];
        
        setChatHistory(initHistory);
        chatHistoryRef.current = initHistory;

        const speechAudio = extractSpeechAudioText(greeting);
        lastCoachSpokenTextRef.current = speechAudio;
        speakText(speechAudio);
    };

    const endSession = async () => {
        const historyToAnalyze = [...chatHistoryRef.current];
        const durSecs = sessionSeconds;

        // Stop voice recording and retrieve recorded Blob
        const audioBlob = await voiceRecorder.stopRecording();

        setIsLiveSession(false);
        isLiveSessionRef.current = false;
        isProcessingRef.current = false;
        setIsSpeaking(false);
        setIsThinking(false);
        setCurrentTranscript('');
        transcriptBufferRef.current = '';
        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch (e) {}
        }
        stopSpeaking();

        // Generate valid UUID for session record
        const sessionUuid: string = (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
            ? crypto.randomUUID()
            : `${Date.now().toString(16).padStart(8, '0')}-0000-4000-8000-000000000000`;

        // Upload audio file to Supabase Storage in the background (100% non-blocking)
        let uploadedAudioPath: string | undefined;
        if (audioBlob && audioBlob.size > 0 && user?.id) {
            try {
                const uploadResult = await AudioStorageService.uploadSpeakingAudio(
                    user.id,
                    sessionUuid || `rec_${Date.now()}`,
                    audioBlob
                );
                if (uploadResult) {
                    uploadedAudioPath = uploadResult;
                }
            } catch (storageErr) {
                console.warn('[SpeakingCoachPage] Audio upload skipped (non-blocking):', storageErr);
            }
        }

        // Trigger AI analysis report if user sent any messages
        const userSpoke = historyToAnalyze.some(h => h.role === 'user');
        if (userSpoke) {
            if (activeScenario) {
                // Scenario Evaluation Flow
                setIsScenarioReportOpen(true);
                setIsScenarioEvalLoading(true);
                try {
                    const evalResult = await evaluateScenarioSession({
                        scenario: activeScenario,
                        chatHistory: historyToAnalyze.map(h => ({ role: h.role, content: h.content })),
                        durationSeconds: durSecs,
                        recordedUrl: voiceRecorder.recordedUrl
                    });
                    
                    evalResult.transcript = historyToAnalyze.map(h => ({
                        role: h.role,
                        content: h.content,
                        timestamp: h.timestamp,
                        translation: h.translation
                    }));
                    evalResult.audio_path = uploadedAudioPath;
                    evalResult.audio_url = uploadedAudioPath;
                    if (sessionUuid) {
                        evalResult.id = sessionUuid;
                    }

                    setScenarioEvalResult(evalResult);
                    await ScenarioService.saveSessionResult(evalResult, user?.id);
                } catch (err) {
                    console.error("Scenario evaluation error:", err);
                } finally {
                    setIsScenarioEvalLoading(false);
                }
            } else {
                // Standard Speaking Coach Report Flow
                setIsReportOpen(true);
                setIsReportLoading(true);
                try {
                    const report = await analyzeSpeakingSession(
                        historyToAnalyze.map(h => ({ role: h.role, content: h.content })),
                        languageRef.current,
                        personaRef.current
                    );
                    setReportData(report);

                    if (report.grammar_corrections && report.grammar_corrections.length > 0) {
                        ErrorVaultService.logErrors(
                            report.grammar_corrections.map(c => ({
                                verbatim: c.original,
                                correction: c.corrected,
                                category: 'grammar',
                                explanation: c.explanation,
                                language: languageRef.current
                            }))
                        );
                    }
                    
                    const personaTitle = PERSONAS_BY_LANG[languageRef.current][personaRef.current].name;
                    const fluency = report.fluency_score || 75;
                    const vocab = Math.max(0, 100 - (report.better_vocabulary?.length || 0) * 5);
                    const grammar = Math.max(0, 100 - (report.grammar_corrections?.length || 0) * 5);
                    const overall = Math.round((fluency + vocab + grammar) / 3);

                    await addCoachSession({
                        personaTitle,
                        fluencyScore: fluency,
                        vocabularyScore: vocab,
                        grammarScore: grammar,
                        pronunciationScore: fluency,
                        feedback: report.overall_feedback || ''
                    });

                    // Save session with transcript into Supabase speaking_sessions
                    await ScenarioService.saveSessionResult({
                        id: sessionUuid,
                        scenario_id: 'general_speaking',
                        scenario_title: personaTitle,
                        fluency_score: fluency,
                        vocabulary_score: vocab,
                        grammar_score: grammar,
                        pronunciation_score: fluency,
                        overall_score: overall,
                        duration_seconds: durSecs,
                        audio_path: uploadedAudioPath,
                        audio_url: uploadedAudioPath,
                        ai_feedback: report.overall_feedback || 'Bajarildi',
                        key_phrases_used: [],
                        key_phrases_missed: [],
                        transcript: historyToAnalyze.map(h => ({
                            role: h.role,
                            content: h.content,
                            timestamp: h.timestamp,
                            translation: h.translation
                        })),
                        created_at: new Date().toISOString()
                    }, user?.id);
                } catch (err) {
                    console.error("Report generation error:", err);
                } finally {
                    setIsReportLoading(false);
                }
            }
        }
    };

    const toggleSession = () => {
        if (isLiveSession) {
            endSession();
        } else {
            startSession();
        }
    };

    const handleTranslateMessage = async (idx: number) => {
        const msg = chatHistory[idx];
        if (!msg || msg.role !== 'assistant') return;

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

    const handlePromptClick = (topicTitle: string) => {
        startSession(topicTitle);
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

    // Auto-scroll chat container to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, currentTranscript, isThinking]);

    const PERSONAS = PERSONAS_BY_LANG[language];
    const PROMPT_SUGGESTIONS = PROMPT_SUGGESTIONS_BY_LANG[language];
    const currentPersona = PERSONAS[persona];

    return (
        <div 
            ref={containerRef}
            className={`relative h-full flex flex-col overflow-hidden w-full select-none ${
                isFullscreen 
                    ? 'fixed inset-0 z-50 bg-background h-screen w-screen p-0 m-0' 
                    : ''
            }`}
        >
            {/* Dynamic Ambient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPersona.gradientBg} transition-all duration-1000 pointer-events-none`} />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px]" style={{ animationDelay: '2s' }} />
                {isLiveSession && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" />
                )}
            </div>

            {/* TOP BAR */}
            <CoachTopBar 
                language={language}
                persona={persona}
                isLiveSession={isLiveSession}
                sessionSeconds={sessionSeconds}
                chatHistoryLength={chatHistory.length}
                showPersonaSelector={showPersonaSelector}
                setShowPersonaSelector={setShowPersonaSelector}
                handleLanguageChange={handleLanguageChange}
                setPersona={setPersona}
                targetBand={targetBand}
                setTargetBand={setTargetBand}
                isPaidUser={isPaidUser}
                isAdmin={isAdmin}
                isSuperAdmin={isSuper}
                isFullscreen={isFullscreen}
                onToggleFullscreen={toggleFullscreen}
                onOpenSettings={() => setIsSettingsOpen(true)}
                formatTimer={formatTimer}
                activeScenario={activeScenario}
            />

            {/* Active Conversation Scenario Banner */}
            {activeScenario && (
                <div className="mx-3 md:mx-5 mt-1.5 p-3 bg-gradient-to-r from-indigo-950/90 via-purple-950/90 to-slate-900/90 border border-indigo-500/30 rounded-2xl text-white shadow-lg backdrop-blur-md flex items-center justify-between gap-4 z-10 animate-in fade-in shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="text-xl p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30 shrink-0">
                            {activeScenario.emoji}
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-black text-white tracking-tight truncate">
                                    {(activeScenario.language === 'en' ? activeScenario.title_en : activeScenario.title_ja) || activeScenario.title_en || activeScenario.title_ja} ({activeScenario.title_uz})
                                </span>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-500/30 text-indigo-200 border border-indigo-500/40">
                                    {activeScenario.language === 'en' ? 'CEFR / ' : 'JLPT '}{activeScenario.difficulty}
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-300 truncate mt-0.5">
                                {activeScenario.description_uz}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setSearchParams({ lang: language });
                        }}
                        className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-gray-200 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 shrink-0"
                        title="Ssenariydan chiqish"
                    >
                        <X size={13} />
                        <span className="hidden sm:inline">Chiqish</span>
                    </button>
                </div>
            )}

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

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 min-h-0 mx-3 md:mx-5 mb-2 flex flex-col overflow-hidden relative">
                {chatHistory.length === 0 && !isLiveSession ? (
                    <div className="flex-1 overflow-y-auto space-y-6 pr-1">
                        <CoachWelcomeScreen 
                            currentPersona={currentPersona}
                            isLiveSession={isLiveSession}
                            isSpeaking={isSpeaking}
                            isThinking={isThinking}
                            isListening={isListening}
                            promptSuggestions={PROMPT_SUGGESTIONS}
                            onStartSession={() => startSession()}
                            onPromptClick={handlePromptClick}
                        />
                        <div className="max-w-2xl mx-auto pb-8">
                            <CoachProgressDashboard />
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                        {!activeScenario && (
                            <RealtimeVoiceOverlay
                                isRecording={isListening}
                                isAiSpeaking={isSpeaking}
                                transcript={currentTranscript}
                                errors={liveErrors}
                                activeCefrLevel="B2"
                                activeJlptLevel={language === 'ja' ? 'N3' : undefined}
                                isHandsFree={isHandsFree}
                                onToggleHandsFree={() => setIsHandsFree(prev => !prev)}
                                onBargeIn={handleBargeIn}
                                onToggleRecording={toggleMic}
                                onCommitNow={commitSpeechNow}
                            />
                        )}
                        <CoachChatArea 
                            chatHistory={chatHistory}
                            isLiveSession={isLiveSession}
                            currentPersona={currentPersona}
                            currentTranscript={currentTranscript}
                            isListening={isListening}
                            isThinking={isThinking}
                            copiedIndex={copiedIndex}
                            chatContainerRef={chatContainerRef}
                            handleTranslateMessage={handleTranslateMessage}
                            copyToClipboard={copyToClipboard}
                            speakText={speakText}
                            setChatHistory={setChatHistory}
                            onAddVocabulary={handleAddVocabToFlashcards}
                        />
                    </div>
                )}
            </div>

            {/* BOTTOM CONTROL DOCK */}
            <CoachControlBar 
                isLiveSession={isLiveSession}
                isSpeaking={isSpeaking}
                isThinking={isThinking}
                isListening={isListening}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                sessionSeconds={sessionSeconds}
                chatHistoryLength={chatHistory.length}
                toggleSession={toggleSession}
                onClearHistory={() => setChatHistory([])}
                formatTimer={formatTimer}
                onForceStartListening={toggleMic}
                isHandsFree={isHandsFree}
                onToggleHandsFree={() => setIsHandsFree(prev => !prev)}
                onBargeIn={handleBargeIn}
            />

            {/* SETTINGS MODAL */}
            <CoachSettingsModal 
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />

            {/* SESSION REPORT MODAL */}
            <SessionReportModal 
                isOpen={isReportOpen}
                onClose={() => setIsReportOpen(false)}
                report={reportData}
                isLoading={isReportLoading}
                personaTitle={PERSONAS[persona].name}
            />

            {/* SCENARIO EVALUATION REPORT MODAL */}
            <ScenarioReportModal
                isOpen={isScenarioReportOpen}
                onClose={() => setIsScenarioReportOpen(false)}
                result={scenarioEvalResult}
                isLoading={isScenarioEvalLoading}
                recordedUrl={voiceRecorder.recordedUrl}
                durationSeconds={voiceRecorder.durationSeconds}
                isPlayingRecorded={voiceRecorder.isPlaying}
                audioProgressRecorded={voiceRecorder.audioProgress}
                onPlayRecorded={voiceRecorder.playRecorded}
                onPauseRecorded={voiceRecorder.pauseRecorded}
                onRetry={() => startSession()}
            />
        </div>
    );
};

export default SpeakingCoachPage;
