import { useRef, useCallback } from 'react';
import { trackTTSTelemetry } from '../lib/errorTracking';
import { cleanJapaneseTTS } from '../utils/ai';

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

/**
 * Splits text into natural sentence-based chunks of <= maxChunkLen characters
 * so that Google TTS (max 200 chars) and mobile speech engines never truncate speech.
 */
export function splitIntoTTSChunks(text: string, maxChunkLen: number = 170): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (trimmed.length <= maxChunkLen) return [trimmed];

  // Split on natural sentence endings: Japanese (。！？\n) and Latin (.!?\n)
  const sentenceRegex = /([^。！？.!?\n]+[。！？.!?\n]+)/g;
  const rawMatches = trimmed.match(sentenceRegex);

  if (!rawMatches || rawMatches.length === 0) {
    // Fallback: chunk by word boundaries or slice
    const chunks: string[] = [];
    let current = '';
    const words = trimmed.split(/(\s+)/);
    for (const word of words) {
      if (word.length > maxChunkLen) {
        if (current.trim()) {
          chunks.push(current.trim());
          current = '';
        }
        for (let i = 0; i < word.length; i += maxChunkLen) {
          chunks.push(word.slice(i, i + maxChunkLen));
        }
      } else if ((current + word).length > maxChunkLen) {
        if (current.trim()) chunks.push(current.trim());
        current = word;
      } else {
        current += word;
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks.length > 0 ? chunks : [trimmed.slice(0, maxChunkLen)];
  }

  const chunks: string[] = [];
  let currentChunk = '';

  for (const match of rawMatches) {
    if ((currentChunk + match).length <= maxChunkLen) {
      currentChunk += match;
    } else {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      if (match.length <= maxChunkLen) {
        currentChunk = match;
      } else {
        chunks.push(match.slice(0, maxChunkLen).trim());
        currentChunk = match.slice(maxChunkLen);
      }
    }
  }

  const matchedLen = rawMatches.join('').length;
  if (matchedLen < trimmed.length) {
    const remaining = trimmed.slice(matchedLen).trim();
    if (remaining) {
      if ((currentChunk + ' ' + remaining).length <= maxChunkLen) {
        currentChunk += ' ' + remaining;
      } else {
        if (currentChunk.trim()) chunks.push(currentChunk.trim());
        chunks.push(remaining.slice(0, maxChunkLen));
        currentChunk = '';
      }
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks.filter((c) => c.length > 0);
}

export const useTTS = ({ language, onSpeakStart, onSpeakEnd }: UseTTSOptions): UseTTSReturn => {
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null,
  );
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const currentObjectUrlRef = useRef<string | null>(null);
  const ttsSafetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isCancelledRef = useRef<boolean>(false);

  const languageRef = useRef(language);
  languageRef.current = language;

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;

    if (synthRef.current) {
      try {
        synthRef.current.cancel();
      } catch (e) {
        console.debug('Synth cancel failed:', e);
      }
    }
    activeUtteranceRef.current = null;

    if (audioPlayerRef.current) {
      audioPlayerRef.current.onended = null;
      audioPlayerRef.current.onerror = null;
      try {
        audioPlayerRef.current.pause();
      } catch (e) {
        console.debug('Audio pause failed:', e);
      }
      audioPlayerRef.current = null;
    }

    if (currentObjectUrlRef.current) {
      try {
        URL.revokeObjectURL(currentObjectUrlRef.current);
      } catch (e) {
        console.debug('Revoke object URL failed:', e);
      }
      currentObjectUrlRef.current = null;
    }

    if (ttsSafetyTimeoutRef.current) {
      clearTimeout(ttsSafetyTimeoutRef.current);
      ttsSafetyTimeoutRef.current = null;
    }
  }, []);

  const speakText = useCallback(
    async (text: string) => {
      const startTime = Date.now();
      const rawClean = (text || '').trim();
      if (!rawClean) {
        onSpeakEnd();
        return;
      }

      stopSpeaking();
      isCancelledRef.current = false;
      onSpeakStart();

      const isJa =
        languageRef.current === 'ja' || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(rawClean);
      const textToPlay = isJa
        ? cleanJapaneseTTS(rawClean)
        : rawClean.replace(/[*_#`~]/g, '').trim();

      if (!textToPlay) {
        onSpeakEnd();
        return;
      }

      const chunks = splitIntoTTSChunks(textToPlay, 170);
      if (chunks.length === 0) {
        onSpeakEnd();
        return;
      }

      const onSpeechFinish = (success: boolean = true, error?: string) => {
        if (ttsSafetyTimeoutRef.current) {
          clearTimeout(ttsSafetyTimeoutRef.current);
          ttsSafetyTimeoutRef.current = null;
        }
        if (currentObjectUrlRef.current) {
          try {
            URL.revokeObjectURL(currentObjectUrlRef.current);
          } catch (e) {
            console.debug('Revoke object URL in speech finish failed:', e);
          }
          currentObjectUrlRef.current = null;
        }
        activeUtteranceRef.current = null;
        trackTTSTelemetry({ durationMs: Date.now() - startTime, success, error });
        onSpeakEnd();
      };

      // Adaptive safety timeout proportional to number of chunks (min 12s, max 45s)
      const safetyTimeoutMs = Math.min(45000, Math.max(12000, chunks.length * 8000));
      ttsSafetyTimeoutRef.current = setTimeout(() => {
        onSpeechFinish(false, `TTS timeout ${safetyTimeoutMs}ms exceeded`);
      }, safetyTimeoutMs);

      // Sequential Chunk Playback via Audio or Web Speech API
      let currentChunkIndex = 0;

      const playNextChunk = async () => {
        if (isCancelledRef.current) return;

        if (currentChunkIndex >= chunks.length) {
          onSpeechFinish(true);
          return;
        }

        const chunk = chunks[currentChunkIndex];
        currentChunkIndex++;

        try {
          const targetLang = isJa ? 'ja' : 'en';
          const gUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(chunk)}&tl=${targetLang}`;

          const audio = new Audio(gUrl);
          audioPlayerRef.current = audio;

          audio.onended = () => {
            if (!isCancelledRef.current) {
              playNextChunk();
            }
          };

          audio.onerror = () => {
            if (!isCancelledRef.current) {
              fallbackWebSpeechChunk(chunk, playNextChunk);
            }
          };

          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              if (!isCancelledRef.current) {
                fallbackWebSpeechChunk(chunk, playNextChunk);
              }
            });
          }
        } catch {
          if (!isCancelledRef.current) {
            fallbackWebSpeechChunk(chunk, playNextChunk);
          }
        }
      };

      const fallbackWebSpeechChunk = (chunkText: string, onChunkDone: () => void) => {
        if (isCancelledRef.current) return;

        const synth =
          synthRef.current || (typeof window !== 'undefined' ? window.speechSynthesis : null);
        if (!synth) {
          onSpeechFinish(false, 'Web Speech API not available');
          return;
        }

        try {
          synth.cancel();
          const utterance = new SpeechSynthesisUtterance(chunkText);
          activeUtteranceRef.current = utterance; // iOS GC fix: hold reference in ref
          utterance.lang = isJa ? 'ja-JP' : 'en-US';
          utterance.rate = 0.95;
          utterance.pitch = 1.0;

          const voices = synth.getVoices() || [];
          const langPrefix = isJa ? 'ja' : 'en';

          const matchingVoices = voices.filter(
            (v) =>
              v.lang.toLowerCase().startsWith(langPrefix) ||
              v.lang.toLowerCase().replace('_', '-').startsWith(langPrefix),
          );

          if (matchingVoices.length > 0) {
            const naturalVoice =
              matchingVoices.find(
                (v) =>
                  v.name.toLowerCase().includes('natural') ||
                  v.name.toLowerCase().includes('neural') ||
                  v.name.toLowerCase().includes('google') ||
                  v.name.toLowerCase().includes('kyoko') ||
                  v.name.toLowerCase().includes('otoya'),
              ) || matchingVoices[0];

            if (naturalVoice) utterance.voice = naturalVoice;
          }

          utterance.onend = () => {
            activeUtteranceRef.current = null;
            if (!isCancelledRef.current) onChunkDone();
          };

          utterance.onerror = () => {
            activeUtteranceRef.current = null;
            if (!isCancelledRef.current) onChunkDone();
          };

          synth.speak(utterance);
        } catch (e) {
          activeUtteranceRef.current = null;
          if (!isCancelledRef.current) onChunkDone();
        }
      };

      // Start playback with first chunk
      playNextChunk();
    },
    [onSpeakStart, onSpeakEnd, stopSpeaking],
  );

  return { speakText, stopSpeaking, audioPlayerRef, synthRef };
};
