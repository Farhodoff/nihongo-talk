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
        synthRef.current?.cancel();
        if (audioPlayerRef.current) {
            audioPlayerRef.current.onended = null;
            audioPlayerRef.current.onerror = null;
            audioPlayerRef.current.pause();
            audioPlayerRef.current = null;
        }
        if (currentObjectUrlRef.current) {
            URL.revokeObjectURL(currentObjectUrlRef.current);
            currentObjectUrlRef.current = null;
        }
        if (ttsSafetyTimeoutRef.current) {
            clearTimeout(ttsSafetyTimeoutRef.current);
            ttsSafetyTimeoutRef.current = null;
        }
    }, []);

    const speakText = useCallback(async (text: string) => {
        onSpeakStart();
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
            onSpeakEnd();
        };

        // 15-second safety timer in case Web Speech Synthesis drops onend event
        ttsSafetyTimeoutRef.current = setTimeout(() => { onSpeechFinish(); }, 15000);

        const config = getAIConfig();

        // 1. OpenAI TTS (if key configured)
        if (config.openAIApiKey) {
            try {
                const blob = await fetchOpenAITTS(text, config.coachVoice || 'alloy', config.openAIApiKey);
                const url = URL.createObjectURL(blob);
                currentObjectUrlRef.current = url;
                const audio = new Audio(url);
                audioPlayerRef.current = audio;
                audio.onended = () => { onSpeechFinish(); };
                audio.onerror = () => { onSpeechFinish(); };
                audio.play().catch(() => { onSpeechFinish(); });
                return;
            } catch (error) {
                console.error('OpenAI TTS error fallback to browser voice', error);
            }
        }

        // 2. Google Free Neural Audio Stream
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
                    if (chunkIdx >= chunks.length) { onSpeechFinish(); return; }
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
            console.warn('Google free TTS failed, falling back to Web Speech', gErr);
        }

        // 3. Browser Web Speech fallback
        fallbackWebSpeech();

        function fallbackWebSpeech() {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = languageRef.current === 'ja' ? 'ja-JP' : 'en-US';
            utterance.rate = 0.95;
            utterance.pitch = 1.0;

            const synth = synthRef.current || window.speechSynthesis;
            const voices = synth?.getVoices() || [];
            const langPrefix = languageRef.current === 'ja' ? 'ja' : 'en';

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
                    ['google', 'samantha', 'victoria', 'karen', 'kyoko', 'aria', 'jenny'].some(n => v.name.toLowerCase().includes(n))
                ) || matchingVoices[0];

                if (naturalVoice) utterance.voice = naturalVoice;
            }

            utterance.onend = () => { onSpeechFinish(); };
            utterance.onerror = () => { onSpeechFinish(); };
            synth?.speak(utterance);
        }
    }, [onSpeakStart, onSpeakEnd]);

    return { speakText, stopSpeaking, audioPlayerRef, synthRef };
};
