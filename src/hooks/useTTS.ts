import { useRef, useCallback, useEffect } from 'react';
import { trackTTSTelemetry } from '../lib/errorTracking';
import { cleanJapaneseTTS } from '../utils/ai';
import { supabase } from '../lib/supabase';

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
  enqueueStreamSentence: (sentence: string) => void;
  endStreamPlayback: () => void;
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

/**
 * Searches available SpeechSynthesis voices for a high-quality native voice.
 * Returns null if no voice is available for the given language.
 */
export function selectBestVoice(
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

/**
 * Fetches high-quality Google TTS audio from the serverless /api/tts endpoint
 */
export async function fetchTTSAudioBlob(text: string, lang: 'ja' | 'en'): Promise<Blob | null> {
  try {
    const sessionRes = await supabase.auth.getSession().catch(() => ({ data: { session: null } }));
    const token =
      sessionRes.data?.session?.access_token ||
      import.meta.env.VITE_SUPABASE_ANON_KEY ||
      'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text,
        lang,
      }),
      signal:
        typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal
          ? AbortSignal.timeout(12000)
          : undefined,
    });

    if (!response.ok) {
      console.warn('[useTTS] /api/tts HTTP error:', response.status);
      return null;
    }

    const contentType = response.headers.get('content-type') || '';
    if (
      !contentType.includes('audio') &&
      !contentType.includes('mpeg') &&
      !contentType.includes('octet-stream')
    ) {
      console.warn('[useTTS] /api/tts invalid content-type:', contentType);
      return null;
    }

    const blob = await response.blob();
    if (!blob || blob.size === 0) return null;
    return blob;
  } catch (err) {
    console.warn('[useTTS] fetchTTSAudioBlob error:', err);
    return null;
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

  // Pipelined Streaming Queue State
  const streamQueueRef = useRef<string[]>([]);
  const isStreamingPlaybackActiveRef = useRef<boolean>(false);
  const isStreamCompletedRef = useRef<boolean>(false);

  const languageRef = useRef(language);
  languageRef.current = language;

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

  const sharedAudioCtxRef = useRef<AudioContext | null>(null);

  const unlockAudio = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {
        console.debug('Unlock audio synth failed:', e);
      }
    }

    try {
      if (typeof window !== 'undefined') {
        // Unlock persistent AudioContext
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          if (!sharedAudioCtxRef.current || sharedAudioCtxRef.current.state === 'closed') {
            sharedAudioCtxRef.current = new AudioCtx();
          }
          if (sharedAudioCtxRef.current.state === 'suspended') {
            sharedAudioCtxRef.current.resume().catch(() => {});
          }
        }

        // Pre-activate audioPlayerRef singleton under active user gesture
        if (!audioPlayerRef.current) {
          audioPlayerRef.current = new Audio();
        }
        const audio = audioPlayerRef.current;
        audio.src =
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        audio.volume = 0.01;
        audio
          .play()
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1.0;
          })
          .catch(() => {});
      }
    } catch (e) {
      console.debug('Unlock audio element failed:', e);
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;
    streamQueueRef.current = [];
    isStreamingPlaybackActiveRef.current = false;
    isStreamCompletedRef.current = true;

    if (watchdogIntervalRef.current) {
      clearInterval(watchdogIntervalRef.current);
      watchdogIntervalRef.current = null;
    }

    if (synthRef.current) {
      try {
        if (synthRef.current.speaking || synthRef.current.pending) {
          synthRef.current.cancel();
        }
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

  const fallbackWebAudio = useCallback(async (blob: Blob, onDone: () => void) => {
    try {
      let ctx = sharedAudioCtxRef.current;
      if (!ctx || ctx.state === 'closed') {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) {
          onDone();
          return;
        }
        ctx = new AudioCtx();
        sharedAudioCtxRef.current = ctx;
      }
      if (ctx.state === 'suspended') {
        await ctx.resume().catch(() => {});
      }
      const arrayBuf = await blob.arrayBuffer();
      const audioBuffer = await ctx.decodeAudioData(arrayBuf);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.onended = () => {
        onDone();
      };
      source.start(0);
    } catch (e) {
      console.warn('[useTTS] Web Audio API fallback failed:', e);
      onDone();
    }
  }, []);

  /**
   * Plays a single clause/sentence via Network Google TTS with Web Audio API fallback.
   */
  const playNetworkClause = useCallback(
    async (clause: string, isJa: boolean): Promise<void> => {
      if (isCancelledRef.current) return;
      const blob = await fetchTTSAudioBlob(clause, isJa ? 'ja' : 'en');
      if (isCancelledRef.current || !blob) return;

      const objectUrl = URL.createObjectURL(blob);
      currentObjectUrlRef.current = objectUrl;

      await new Promise<void>((resolve) => {
        if (isCancelledRef.current) {
          URL.revokeObjectURL(objectUrl);
          if (currentObjectUrlRef.current === objectUrl) {
            currentObjectUrlRef.current = null;
          }
          resolve();
          return;
        }

        if (!audioPlayerRef.current) {
          audioPlayerRef.current = new Audio();
        }
        const audio = audioPlayerRef.current;
        audio.volume = 1.0;
        audio.src = objectUrl;
        try {
          audio.load();
        } catch {}

        const cleanup = () => {
          audio.onended = null;
          audio.onerror = null;
          if (currentObjectUrlRef.current === objectUrl) {
            URL.revokeObjectURL(objectUrl);
            currentObjectUrlRef.current = null;
          }
          resolve();
        };

        audio.onended = cleanup;
        audio.onerror = () => {
          fallbackWebAudio(blob, cleanup);
        };

        audio.play().catch(() => {
          fallbackWebAudio(blob, cleanup);
        });
      });
    },
    [fallbackWebAudio],
  );

  /**
   * Plays a single clause: For Japanese, ALWAYS use Network Google TTS first
   * to guarantee audio works even with active microphone or absent voice packs.
   */
  const playSingleClause = useCallback(
    async (clause: string, isJa: boolean): Promise<void> => {
      if (isCancelledRef.current) return;

      const synth =
        synthRef.current || (typeof window !== 'undefined' ? window.speechSynthesis : null);
      let currentVoices = voicesRef.current;
      if (synth && (!currentVoices || currentVoices.length === 0)) {
        try {
          currentVoices = synth.getVoices() || [];
          voicesRef.current = currentVoices;
        } catch {}
      }

      const selectedVoice = selectBestVoice(currentVoices, isJa);

      // When SpeechSynthesis is unavailable, route directly to network TTS
      if (!synth) {
        try {
          await playNetworkClause(clause, isJa);
          return;
        } catch (netErr) {
          console.warn('[useTTS] Network TTS failed:', netErr);
          return;
        }
      }

      try {
        if (synth && synth.paused) synth.resume();
      } catch {}

      await new Promise<void>((resolve) => {
        if (isCancelledRef.current || !synth) {
          resolve();
          return;
        }

        try {
          const utterance = new SpeechSynthesisUtterance(clause);
          utterance.lang = isJa ? 'ja-JP' : 'en-US';
          utterance.rate = isJa ? 0.92 : 0.95;
          utterance.pitch = 1.0;

          if (selectedVoice) {
            utterance.voice = selectedVoice;
          }

          activeUtteranceRef.current = utterance;
          if (typeof window !== 'undefined') {
            (window as any).__speakingUtterance = utterance;
          }

          let speakStartTime = 0;
          utterance.onstart = () => {
            speakStartTime = Date.now();
          };

          utterance.onend = () => {
            activeUtteranceRef.current = null;
            const elapsed = Date.now() - speakStartTime;
            if (clause.length > 3 && speakStartTime > 0 && elapsed < 120) {
              console.warn(
                `[useTTS] Web Speech skipped (${elapsed}ms), falling back to Network TTS.`,
              );
              playNetworkClause(clause, isJa).then(resolve);
              return;
            }
            resolve();
          };

          utterance.onerror = () => {
            activeUtteranceRef.current = null;
            if (isCancelledRef.current) {
              resolve();
              return;
            }
            playNetworkClause(clause, isJa).then(resolve);
          };

          synth.speak(utterance);
          if (synth.paused) synth.resume();
        } catch {
          playNetworkClause(clause, isJa).then(resolve);
        }
      });
    },
    [playNetworkClause],
  );

  /**
   * Processes the pipelined streaming sentence queue sequentially.
   */
  const processStreamQueue = useCallback(async () => {
    if (isStreamingPlaybackActiveRef.current || isCancelledRef.current) return;
    isStreamingPlaybackActiveRef.current = true;
    onSpeakStart();

    const isJa = languageRef.current === 'ja';

    while (!isCancelledRef.current) {
      if (streamQueueRef.current.length > 0) {
        const nextSentence = streamQueueRef.current.shift()!;
        await playSingleClause(nextSentence, isJa);
      } else {
        if (isStreamCompletedRef.current) {
          break;
        }
        // Micro-wait for the next streamed sentence to arrive
        await new Promise((r) => setTimeout(r, 60));
      }
    }

    isStreamingPlaybackActiveRef.current = false;
    if (!isCancelledRef.current) {
      onSpeakEnd();
    }
  }, [onSpeakStart, onSpeakEnd, playSingleClause]);

  const enqueueStreamSentence = useCallback(
    (sentence: string) => {
      isCancelledRef.current = false;
      const rawClean = (sentence || '').trim();
      if (!rawClean) return;

      const isJa =
        languageRef.current === 'ja' || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(rawClean);
      const textToPlay = isJa
        ? cleanJapaneseTTS(rawClean)
        : rawClean.replace(/[*_#`~]/g, '').trim();

      if (!textToPlay) return;

      const chunks = splitIntoTTSChunks(textToPlay, 170);
      streamQueueRef.current.push(...chunks);

      if (!isStreamingPlaybackActiveRef.current) {
        isStreamCompletedRef.current = false;
        processStreamQueue();
      }
    },
    [processStreamQueue],
  );

  const endStreamPlayback = useCallback(() => {
    isStreamCompletedRef.current = true;
    if (!isStreamingPlaybackActiveRef.current && streamQueueRef.current.length === 0) {
      onSpeakEnd();
    }
  }, [onSpeakEnd]);

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

      const safetyTimeoutMs = Math.min(60000, Math.max(15000, chunks.length * 9000));
      ttsSafetyTimeoutRef.current = setTimeout(() => {
        onSpeechFinish(false, `TTS timeout ${safetyTimeoutMs}ms exceeded`);
      }, safetyTimeoutMs);

      onSpeakStart();

      for (let i = 0; i < chunks.length; i++) {
        if (isCancelledRef.current) break;
        await playSingleClause(chunks[i], isJa);
      }

      onSpeechFinish(true);
    },
    [onSpeakStart, onSpeakEnd, stopSpeaking, playSingleClause],
  );

  return {
    speakText,
    stopSpeaking,
    audioPlayerRef,
    synthRef,
    unlockAudio,
    enqueueStreamSentence,
    endStreamPlayback,
  };
};
