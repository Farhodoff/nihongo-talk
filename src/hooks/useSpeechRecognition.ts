import { useRef, useState, useEffect } from 'react';
import { validateSpeechInput } from '../utils/ai';

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
    useEffect(() => { isSpeakingRef.current = isSpeaking; }, [isSpeaking]);
    useEffect(() => { isThinkingRef.current = isThinking; }, [isThinking]);
    useEffect(() => { isMutedRef.current = isMuted; }, [isMuted]);

    const onValidSpeechRef = useRef(onValidSpeech);
    const onResumeListeningRef = useRef(onResumeListening);
    useEffect(() => { onValidSpeechRef.current = onValidSpeech; }, [onValidSpeech]);
    useEffect(() => { onResumeListeningRef.current = onResumeListening; }, [onResumeListening]);

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
            speechStartTimeRef.current = 0;
            setIsListening(true);
        };

        recognition.onspeechstart = () => {
            if (!speechStartTimeRef.current) {
                speechStartTimeRef.current = Date.now();
            }
        };

        recognition.onsoundstart = () => {
            if (!speechStartTimeRef.current) {
                speechStartTimeRef.current = Date.now();
            }
        };

        recognition.onresult = (event: any) => {
            if (isProcessingRef.current || isSpeakingRef.current || isThinkingRef.current) return;
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
            setCurrentTranscript(cleanText);
            transcriptBufferRef.current = cleanText;

            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = setTimeout(() => {
                if (isLiveSessionRef.current && !isProcessingRef.current && transcriptBufferRef.current.trim().length > 0) {
                    try { recognition.stop(); } catch (e) {}
                }
            }, 3000);
        };

        recognition.onerror = (event: any) => {
            if (event.error === 'not-allowed' || event.error === 'permission-denied') {
                setError('Mikrofon ruxsati berilmadi. Iltimos brauzeringiz sozlamalaridan mikrofonga ruxsat bering.');
            } else if (event.error !== 'no-speech') {
                console.error('Speech recognition error:', event.error);
            }
            setIsListening(false);
        };

        recognition.onend = () => {
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
                    onValidSpeechRef.current(spokenText);
                } else {
                    transcriptBufferRef.current = '';
                    setCurrentTranscript('');
                    setTimeout(() => { onResumeListeningRef.current(); }, 300);
                }
            }
        };

        return () => {
            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            try { recognition.stop(); } catch (e) {}
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
    };
};
