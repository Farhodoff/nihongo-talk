import { useRef, useCallback, useEffect } from 'react';
import { trackTTSTelemetry } from '../lib/errorTracking';
import { cleanJapaneseTTS } from '../utils/ai';

interface UseTTSOptions {
  language: 'en' | 'ja';
  isLiveSessionRef?: React.MutableRefObject<boolean>;
  isProcessingRef?: React.MutableRefObject<boolean>;
  onSpeakStart: () => void;
  onSpeakEnd: () => void;
}

export interface UseTTSReturn {
  speakText: (text: string) => Promise<void>;
  stopSpeaking: () => void;
  audioPlayerRef: React.MutableRefObject<HTMLAudioElement | null>;
  synthRef: React.MutableRefObject<SpeechSynthesis | null>;
  unlockAudio: () => void;
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

function selectBestVoice(
  voices: SpeechSynthesisVoice[],
  isJa: boolean,
): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null;
  const langPrefix = isJa ? 'ja' : 'en';

  const matchingVoices = voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith(langPrefix) ||
      v.lang.toLowerCase().replace('_', '-').startsWith(langPrefix),
  );

  if (matchingVoices.length === 0) {
    return null;
  }

  if (isJa) {
    // Prefer high-fidelity Japanese voices (macOS Kyoko/Otoya, Chrome Google 日本語, Windows Haruka)
    const naturalJa = matchingVoices.find((v) => {
      const name = v.name.toLowerCase();
      return (
        name.includes('google') ||
        name.includes('natural') ||
        name.includes('neural') ||
        name.includes('kyoko') ||
        name.includes('otoya') ||
        name.includes('haruka') ||
        name.includes('nanami') ||
        name.includes('mei')
      );
    });
    return naturalJa || matchingVoices[0];
  } else {
    // Prefer high-fidelity English voices
    const naturalEn = matchingVoices.find((v) => {
      const name = v.name.toLowerCase();
      return (
        name.includes('google') ||
        name.includes('natural') ||
        name.includes('neural') ||
        name.includes('samantha') ||
        name.includes('daniel') ||
        name.includes('karen') ||
        name.includes('jenny') ||
        name.includes('guy')
      );
    });
    return naturalEn || matchingVoices[0];
  }
}

export const useTTS = ({ language, onSpeakStart, onSpeakEnd }: UseTTSOptions): UseTTSReturn => {
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null,
  );
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const currentObjectUrlRef = useRef<string | null>(null);
  const ttsSafetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const watchdogIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isCancelledRef = useRef<boolean>(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  const languageRef = useRef(language);
  languageRef.current = language;

  // Eager voice cache and voiceschanged listener
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;

    const updateVoices = () => {
      try {
        const available = synth.getVoices();
        if (available && available.length > 0) {
          voicesRef.current = available;
        }
      } catch (e) {
        console.debug('Failed to get voices:', e);
      }
    };

    updateVoices();
    synth.addEventListener('voiceschanged', updateVoices);

    return () => {
      synth.removeEventListener('voiceschanged', updateVoices);
    };
  }, []);

  const unlockAudio = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {
        console.debug('Unlock audio failed:', e);
      }
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;

    if (watchdogIntervalRef.current) {
      clearInterval(watchdogIntervalRef.current);
      watchdogIntervalRef.current = null;
    }

    if (synthRef.current) {
      try {
        synthRef.current.cancel();
      } catch (e) {
        console.debug('Synth cancel failed:', e);
      }
    }
    activeUtteranceRef.current = null;
    if (typeof window !== 'undefined') {
      (window as any).__speakingUtterance = null;
    }

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

      const synth =
        synthRef.current || (typeof window !== 'undefined' ? window.speechSynthesis : null);
      if (!synth) {
        console.warn('SpeechSynthesis is not available in this environment.');
        onSpeakEnd();
        return;
      }

      // Resume if stuck in paused state (Chromium bug)
      try {
        if (synth.paused) {
          synth.resume();
        }
      } catch (e) {
        console.debug('Resume failed:', e);
      }

      const onSpeechFinish = (success: boolean = true, error?: string) => {
        if (watchdogIntervalRef.current) {
          clearInterval(watchdogIntervalRef.current);
          watchdogIntervalRef.current = null;
        }
        if (ttsSafetyTimeoutRef.current) {
          clearTimeout(ttsSafetyTimeoutRef.current);
          ttsSafetyTimeoutRef.current = null;
        }
        activeUtteranceRef.current = null;
        if (typeof window !== 'undefined') {
          (window as any).__speakingUtterance = null;
        }
        trackTTSTelemetry({ durationMs: Date.now() - startTime, success, error });
        onSpeakEnd();
      };

      // Adaptive safety timeout proportional to number of chunks (min 15s, max 60s)
      const safetyTimeoutMs = Math.min(60000, Math.max(15000, chunks.length * 9000));
      ttsSafetyTimeoutRef.current = setTimeout(() => {
        onSpeechFinish(false, `TTS timeout ${safetyTimeoutMs}ms exceeded`);
      }, safetyTimeoutMs);

      // Chrome long-utterance watchdog: resumes synth every 4s if Chrome arbitrarily pauses
      watchdogIntervalRef.current = setInterval(() => {
        if (synth && synth.paused) {
          try {
            synth.resume();
          } catch (e) {
            console.debug('Watchdog resume error:', e);
          }
        }
      }, 4000);

      // Refresh voices list if needed
      let currentVoices = voicesRef.current;
      if (!currentVoices || currentVoices.length === 0) {
        try {
          currentVoices = synth.getVoices() || [];
          voicesRef.current = currentVoices;
        } catch {}
      }

      const selectedVoice = selectBestVoice(currentVoices, isJa);

      // 25ms micro-pause to avoid Chromium's cancel-speak queue race condition
      await new Promise((r) => setTimeout(r, 25));
      if (isCancelledRef.current) return;

      onSpeakStart();

      let chunkIndex = 0;

      const playNextChunk = () => {
        if (isCancelledRef.current) return;

        if (chunkIndex >= chunks.length) {
          onSpeechFinish(true);
          return;
        }

        const chunk = chunks[chunkIndex];
        chunkIndex++;

        try {
          const utterance = new SpeechSynthesisUtterance(chunk);
          utterance.lang = isJa ? 'ja-JP' : 'en-US';
          utterance.rate = isJa ? 0.92 : 0.95;
          utterance.pitch = 1.0;

          if (selectedVoice) {
            utterance.voice = selectedVoice;
          }

          // Guard against garbage collection in V8 / WebKit
          activeUtteranceRef.current = utterance;
          if (typeof window !== 'undefined') {
            (window as any).__speakingUtterance = utterance;
          }

          utterance.onend = () => {
            activeUtteranceRef.current = null;
            if (!isCancelledRef.current) {
              playNextChunk();
            }
          };

          utterance.onerror = (event) => {
            console.warn('[useTTS] Utterance error:', event.error);
            activeUtteranceRef.current = null;
            if (!isCancelledRef.current) {
              playNextChunk();
            }
          };

          synth.speak(utterance);

          // Force resume if paused right after speak
          if (synth.paused) {
            synth.resume();
          }
        } catch (err: any) {
          console.error('[useTTS] speak error:', err);
          activeUtteranceRef.current = null;
          if (!isCancelledRef.current) {
            playNextChunk();
          }
        }
      };

      playNextChunk();
    },
    [onSpeakStart, onSpeakEnd, stopSpeaking],
  );

  return { speakText, stopSpeaking, audioPlayerRef, synthRef, unlockAudio };
};
