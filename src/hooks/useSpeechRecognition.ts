import { useRef, useState, useEffect, useCallback } from 'react';
import { playConversationChime } from '../utils/audioChime';

interface UseSpeechRecognitionOptions {
    language: 'en' | 'ja';
    isLiveSessionRef: React.MutableRefObject<boolean>;
    isProcessingRef: React.MutableRefObject<boolean>;
    isSpeaking: boolean;
    isThinking: boolean;
    isMuted: boolean;
    onValidSpeech: (text: string) => void;
    onResumeListening: () => void;
}

export interface UseSpeechRecognitionReturn {
    recognitionRef: React.MutableRefObject<any>;
    isListening: boolean;
    setIsListening: React.Dispatch<React.SetStateAction<boolean>>;
    currentTranscript: string;
    setCurrentTranscript: React.Dispatch<React.SetStateAction<string>>;
    transcriptBufferRef: React.MutableRefObject<string>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    isSupported: boolean;
    startListening: () => void;
    commitSpeechNow: () => void;
}

/**
 * Checks if transcript ends with terminal punctuation or sentence-ending grammar pattern
 */
function isSentenceTerminal(text: string, lang: 'en' | 'ja'): boolean {
    const trimmed = text.trim();
    if (!trimmed) return false;

    if (lang === 'ja') {
        return /[。！？\n]$/.test(trimmed) ||
            /(です|ます|した|でした|ません|ね|よ|か|よね|でしょうか|とおもいます|とおもいました|だ|だった|んだ)$/.test(trimmed);
    }

    return /[.!?\n]$/.test(trimmed) ||
        /\b(right|please|thank you|thanks|you know|so yeah)$/i.test(trimmed);
}

export const useSpeechRecognition = ({
    language,
    isLiveSessionRef,
    isProcessingRef,
    isSpeaking,
    isThinking,
    isMuted,
    onValidSpeech,
    onResumeListening,
}: UseSpeechRecognitionOptions): UseSpeechRecognitionReturn => {
    const recognitionRef = useRef<any>(null);
    const transcriptBufferRef = useRef('');
    const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const speechStartTimeRef = useRef<number>(0);
    const lastSpeechTimeRef = useRef<number>(0);
    const isSilenceTimeoutRef = useRef<boolean>(false);

    const [isListening, setIsListening] = useState(false);
    const [currentTranscript, setCurrentTranscript] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSupported, setIsSupported] = useState(true);

    const languageRef = useRef(language);
    useEffect(() => {
        languageRef.current = language;
    }, [language]);

    // Stable references for callbacks
    const isSpeakingRef = useRef(isSpeaking);
    const isThinkingRef = useRef(isThinking);
    const isMutedRef = useRef(isMuted);

    useEffect(() => {
        isSpeakingRef.current = isSpeaking;
        if (isSpeaking) {
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            transcriptBufferRef.current = '';
            setCurrentTranscript('');
            if (recognitionRef.current) {
                try { recognitionRef.current.abort(); } catch {}
            }
            setIsListening(false);
        }
    }, [isSpeaking]);

    useEffect(() => {
        isThinkingRef.current = isThinking;
        if (isThinking) {
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            transcriptBufferRef.current = '';
            setCurrentTranscript('');
            if (recognitionRef.current) {
                try { recognitionRef.current.abort(); } catch {}
            }
            setIsListening(false);
        }
    }, [isThinking]);

    useEffect(() => { isMutedRef.current = isMuted; }, [isMuted]);

    const onValidSpeechRef = useRef(onValidSpeech);
    const onResumeListeningRef = useRef(onResumeListening);
    useEffect(() => { onValidSpeechRef.current = onValidSpeech; }, [onValidSpeech]);
    useEffect(() => { onResumeListeningRef.current = onResumeListening; }, [onResumeListening]);

    const commitSpeechNow = useCallback(() => {
        if (isProcessingRef.current || isSpeakingRef.current || isThinkingRef.current) return;
        const text = transcriptBufferRef.current.trim();
        if (!text) return;

        playConversationChime('commit');
        if (silenceTimerRef.current) {
            clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = null;
        }

        isSilenceTimeoutRef.current = true;
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {
                console.debug('Recognition stop failed:', e);
            }
        }
    }, [isProcessingRef]);

    const startListening = useCallback(() => {
        if (!isLiveSessionRef.current || isMutedRef.current || isSpeakingRef.current || isThinkingRef.current) return;

        // Reset processing flags to unblock microphone
        isProcessingRef.current = false;
        transcriptBufferRef.current = '';
        setCurrentTranscript('');
        setError(null);
        isSilenceTimeoutRef.current = false;
        lastSpeechTimeRef.current = Date.now();

        // Ensure browser mic permission is requested
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
                if (recognitionRef.current && isLiveSessionRef.current && !isSpeakingRef.current && !isThinkingRef.current) {
                    try {
                        recognitionRef.current.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
                        recognitionRef.current.start();
                    } catch (e) {
                        // Recognition might already be running
                    }
                }
            }).catch(() => {
                setError('Mikrofon ruxsati berilmadi. Iltimos brauzeringiz sozlamalaridan mikrofonga ruxsat bering.');
            });
        } else if (recognitionRef.current && !isSpeakingRef.current && !isThinkingRef.current) {
            try {
                recognitionRef.current.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
                recognitionRef.current.start();
            } catch (e) {
                console.debug('Recognition start failed:', e);
            }
        }
    }, [isLiveSessionRef, isProcessingRef]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const win = window as any;
        const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setIsSupported(false);
            setError('Sizning brauzeringiz ovoz yozishni qo\'llab-quvvatlamaydi. Iltimos Chrome yoki Edge brauzeridan foydalaning.');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 3;
        recognitionRef.current = recognition;

        recognition.onstart = () => {
            if (isSpeakingRef.current || isThinkingRef.current) {
                try { recognition.abort(); } catch {}
                setIsListening(false);
                return;
            }
            transcriptBufferRef.current = '';
            setCurrentTranscript('');
            speechStartTimeRef.current = Date.now();
            lastSpeechTimeRef.current = Date.now();
            setIsListening(true);
            setError(null);
            playConversationChime('listen_start');
        };

        recognition.onspeechstart = () => {
            if (isSpeakingRef.current || isThinkingRef.current) return;
            if (!speechStartTimeRef.current) {
                speechStartTimeRef.current = Date.now();
            }
            lastSpeechTimeRef.current = Date.now();
        };

        recognition.onsoundstart = () => {
            if (isSpeakingRef.current || isThinkingRef.current) return;
            if (!speechStartTimeRef.current) {
                speechStartTimeRef.current = Date.now();
            }
            lastSpeechTimeRef.current = Date.now();
        };

        recognition.onresult = (event: any) => {
            if (isMutedRef.current) {
                return;
            }
            if (!speechStartTimeRef.current) {
                speechStartTimeRef.current = Date.now();
            }

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
            const cleanText = (finalTranscript + interimTranscript).replace(/\s+/g, ' ').trim();
            
            if (cleanText) {
                setCurrentTranscript(cleanText);
                transcriptBufferRef.current = cleanText;
                lastSpeechTimeRef.current = Date.now();
            }

            // LOW-LATENCY ADAPTIVE SILENCE TIMEOUT
            // If the user ends the sentence with terminal words/punctuation, submit faster (1200ms)
            // If mid-clause, wait 1800ms for natural pauses
            const isTerminal = isSentenceTerminal(cleanText, languageRef.current);
            const silenceThreshold = isTerminal ? 1200 : 1800;

            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = setTimeout(() => {
                if (isLiveSessionRef.current && !isProcessingRef.current && transcriptBufferRef.current.trim().length > 0) {
                    isSilenceTimeoutRef.current = true;
                    try { recognition.stop(); } catch (e) {
                        console.debug('Recognition stop failed:', e);
                    }
                }
            }, silenceThreshold);
        };

        recognition.onerror = (event: any) => {
            if (event.error === 'not-allowed' || event.error === 'permission-denied') {
                setError('Mikrofon ruxsati berilmadi. Iltimos brauzeringiz sozlamalaridan mikrofonga ruxsat bering.');
                setIsListening(false);
            } else if (event.error !== 'no-speech') {
                console.warn('Speech recognition status:', event.error);
            }
        };

        recognition.onend = () => {
            setIsListening(false);
            
            const spokenText = transcriptBufferRef.current.trim();
            if (spokenText.length >= 2) {
                if (silenceTimerRef.current) {
                    clearTimeout(silenceTimerRef.current);
                    silenceTimerRef.current = null;
                }
                isSilenceTimeoutRef.current = false;
                speechStartTimeRef.current = 0;
                lastSpeechTimeRef.current = 0;

                // Always clear buffers upon submission
                transcriptBufferRef.current = '';
                setCurrentTranscript('');

                if (isLiveSessionRef.current && !isProcessingRef.current && !isMutedRef.current) {
                    onValidSpeechRef.current(spokenText);
                }
            } else if (
                isLiveSessionRef.current && 
                !isProcessingRef.current && 
                !isMutedRef.current && 
                !isSpeakingRef.current && 
                !isThinkingRef.current
            ) {
                // Chrome's SpeechRecognition engine stopped prematurely without speech.
                // Keep listening active so user can speak whenever ready.
                try {
                    recognition.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
                    recognition.start();
                    setIsListening(true);
                } catch (e) {
                    // Recognition may already be starting or active
                }
            }
        };

        return () => {
            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            try { recognition.stop(); } catch (e) {
                console.debug('Cleanup recognition stop failed:', e);
            }
        };
    }, []);

    return {
        recognitionRef,
        isListening,
        setIsListening,
        currentTranscript,
        setCurrentTranscript,
        transcriptBufferRef,
        error,
        setError,
        isSupported,
        startListening,
        commitSpeechNow,
    };
};
