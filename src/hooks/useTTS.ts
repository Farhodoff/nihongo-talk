import { useRef, useCallback } from 'react';
import { fetchOpenAITTS, getAIConfig } from '../utils/ai';

interface UseTTSOptions {
    language: 'en' | 'ja';
    isLiveSessionRef: React.MutableRefObject<boolean>;
    isProcessingRef: React.MutableRefObject<boolean>;
    onSpeakStart: () => void;
    onSpeakEnd: () => void;
}

export interface UseTTSReturn {
    speakText: (text: string) => Promise<void>;
    stopSpeaking: () => void;
    audioPlayerRef: React.MutableRefObject<HTMLAudioElement | null>;
    synthRef: React.MutableRefObject<SpeechSynthesis | null>;
}

export const useTTS = ({
    language,
    onSpeakStart,
    onSpeakEnd,
}: UseTTSOptions): UseTTSReturn => {
    const synthRef = useRef<SpeechSynthesis | null>(
        typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null
    );
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
    const currentObjectUrlRef = useRef<string | null>(null);
    const ttsSafetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const languageRef = useRef(language);
    languageRef.current = language;

    const stopSpeaking = useCallback(() => {
        if (synthRef.current) {
            try { synthRef.current.cancel(); } catch (e) {}
        }
        if (audioPlayerRef.current) {
            audioPlayerRef.current.onended = null;
            audioPlayerRef.current.onerror = null;
            try { audioPlayerRef.current.pause(); } catch (e) {}
            audioPlayerRef.current = null;
        }
        if (currentObjectUrlRef.current) {
            try { URL.revokeObjectURL(currentObjectUrlRef.current); } catch (e) {}
            currentObjectUrlRef.current = null;
        }
        if (ttsSafetyTimeoutRef.current) {
            clearTimeout(ttsSafetyTimeoutRef.current);
            ttsSafetyTimeoutRef.current = null;
        }
    }, []);

    const speakText = useCallback(async (text: string) => {
        onSpeakStart();
        stopSpeaking();

        const onSpeechFinish = () => {
            if (ttsSafetyTimeoutRef.current) {
                clearTimeout(ttsSafetyTimeoutRef.current);
                ttsSafetyTimeoutRef.current = null;
            }
            if (currentObjectUrlRef.current) {
                try { URL.revokeObjectURL(currentObjectUrlRef.current); } catch (e) {}
                currentObjectUrlRef.current = null;
            }
            onSpeakEnd();
        };

        // 10-second safety timeout in case Web Speech or Audio drops end event
        ttsSafetyTimeoutRef.current = setTimeout(() => { onSpeechFinish(); }, 10000);

        const config = getAIConfig();

        // 1. OpenAI TTS (if API key configured)
        if (config.openAIApiKey) {
            try {
                const blob = await fetchOpenAITTS(text, config.coachVoice || 'alloy', config.openAIApiKey);
                const url = URL.createObjectURL(blob);
                currentObjectUrlRef.current = url;
                const audio = new Audio(url);
                audioPlayerRef.current = audio;
                audio.onended = () => onSpeechFinish();
                audio.onerror = () => onSpeechFinish();
                audio.play().catch(() => onSpeechFinish());
                return;
            } catch (error) {
                console.warn('OpenAI TTS fallback to Web Speech', error);
            }
        }

        // 2. Google Translate Free Audio Stream
        try {
            const cleanText = text.replace(/[*_#`~]/g, '').trim();
            const targetLang = languageRef.current === 'ja' ? 'ja' : 'en';
            const gUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(cleanText.substring(0, 200))}&tl=${targetLang}`;
            
            const audio = new Audio(gUrl);
            audioPlayerRef.current = audio;
            audio.onended = () => onSpeechFinish();
            audio.onerror = () => fallbackWebSpeech();
            
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => fallbackWebSpeech());
            }
            return;
        } catch (gErr) {
            console.warn('Google free TTS failed, falling back to Web Speech', gErr);
        }

        // 3. Browser Web Speech fallback
        fallbackWebSpeech();

        function fallbackWebSpeech() {
            const synth = synthRef.current || (typeof window !== 'undefined' ? window.speechSynthesis : null);
            if (!synth) {
                onSpeechFinish();
                return;
            }

            try {
                synth.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
                utterance.rate = 0.95;
                utterance.pitch = 1.0;

                const voices = synth.getVoices() || [];
                const langPrefix = languageRef.current === 'ja' ? 'ja' : 'en';

                const matchingVoices = voices.filter(v =>
                    v.lang.toLowerCase().startsWith(langPrefix) || v.lang.toLowerCase().replace('_', '-').startsWith(langPrefix)
                );

                if (matchingVoices.length > 0) {
                    const naturalVoice = matchingVoices.find(v =>
                        v.name.toLowerCase().includes('natural') ||
                        v.name.toLowerCase().includes('neural') ||
                        v.name.toLowerCase().includes('google')
                    ) || matchingVoices[0];

                    if (naturalVoice) utterance.voice = naturalVoice;
                }

                utterance.onend = () => onSpeechFinish();
                utterance.onerror = () => onSpeechFinish();

                synth.speak(utterance);
            } catch (e) {
                onSpeechFinish();
            }
        }
    }, [onSpeakStart, onSpeakEnd, stopSpeaking]);

    return { speakText, stopSpeaking, audioPlayerRef, synthRef };
};
