import { useRef, useCallback } from 'react';
import { trackTTSTelemetry } from '../lib/errorTracking';

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
            try { synthRef.current.cancel(); } catch (e) {
                console.debug('Synth cancel failed:', e);
            }
        }
        if (audioPlayerRef.current) {
            audioPlayerRef.current.onended = null;
            audioPlayerRef.current.onerror = null;
            try { audioPlayerRef.current.pause(); } catch (e) {
                console.debug('Audio pause failed:', e);
            }
            audioPlayerRef.current = null;
        }
        if (currentObjectUrlRef.current) {
            try { URL.revokeObjectURL(currentObjectUrlRef.current); } catch (e) {
                console.debug('Revoke object URL failed:', e);
            }
            currentObjectUrlRef.current = null;
        }
        if (ttsSafetyTimeoutRef.current) {
            clearTimeout(ttsSafetyTimeoutRef.current);
            ttsSafetyTimeoutRef.current = null;
        }
    }, []);

    const speakText = useCallback(async (text: string) => {
        const startTime = Date.now();
        const clean = (text || '').trim();
        if (!clean) {
            onSpeakEnd();
            return;
        }

        onSpeakStart();
        stopSpeaking();

        const onSpeechFinish = (success: boolean = true, error?: string) => {
            if (ttsSafetyTimeoutRef.current) {
                clearTimeout(ttsSafetyTimeoutRef.current);
                ttsSafetyTimeoutRef.current = null;
            }
            if (currentObjectUrlRef.current) {
                try { URL.revokeObjectURL(currentObjectUrlRef.current); } catch (e) {
                    console.debug('Revoke object URL in speech finish failed:', e);
                }
                currentObjectUrlRef.current = null;
            }
            trackTTSTelemetry({ durationMs: Date.now() - startTime, success, error });
            onSpeakEnd();
        };

        // 10-second safety timeout in case Web Speech or Audio drops end event
        ttsSafetyTimeoutRef.current = setTimeout(() => { onSpeechFinish(false, 'TTS timeout 10s exceeded'); }, 10000);

        // 1. Google Translate Free Audio Stream
        try {
            const cleanText = text.replace(/[*_#`~]/g, '').trim();
            const targetLang = languageRef.current === 'ja' ? 'ja' : 'en';
            const gUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(cleanText.substring(0, 200))}&tl=${targetLang}`;
            
            const audio = new Audio(gUrl);
            audioPlayerRef.current = audio;
            audio.onended = () => onSpeechFinish(true);
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
                onSpeechFinish(false, 'Web Speech API not available');
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
