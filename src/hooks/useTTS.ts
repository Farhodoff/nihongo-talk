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

  /**
   * Unlocks both Web Speech and HTMLAudioElement autoplay restrictions
   * on mobile browsers (iOS Safari, Android Chrome).
   */
  const unlockAudio = useCallback(() => {
    // 1. Resume SpeechSynthesis if paused
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {
        console.debug('Unlock audio synth failed:', e);
      }
    }

    // 2. Prime Web Audio / HTMLAudioElement so iOS Safari & Chrome allow async audio playback
    try {
      if (typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const dummyCtx = new AudioCtx();
          if (dummyCtx.state === 'suspended') {
            dummyCtx.resume().catch(() => {});
          }
          setTimeout(() => {
            try {
              if (dummyCtx.state !== 'closed') dummyCtx.close().catch(() => {});
            } catch {}
          }, 300);
        }

        // Prime a silent 1-sample audio buffer via HTMLAudioElement
        const silentAudio = new Audio(
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
        );
        silentAudio.volume = 0.01;
        silentAudio
          .play()
          .then(() => {
            silentAudio.pause();
          })
          .catch(() => {});
      }
    } catch (e) {
      console.debug('Unlock audio element failed:', e);
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

      // -------------------------------------------------------------
      // 1. Network TTS Playback Helper (Google TTS via /api/tts)
      // -------------------------------------------------------------
      const playWithNetworkTTS = async (chunksToPlay: string[]) => {
        if (isCancelledRef.current || chunksToPlay.length === 0) {
          onSpeechFinish(true);
          return;
        }

        onSpeakStart();

        for (let i = 0; i < chunksToPlay.length; i++) {
          if (isCancelledRef.current) break;
          const chunk = chunksToPlay[i];
          const blob = await fetchTTSAudioBlob(chunk, isJa ? 'ja' : 'en');
          if (isCancelledRef.current) break;

          if (!blob) {
            console.warn('[useTTS] Failed to retrieve network audio chunk:', chunk);
            continue;
          }

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
            audio.src = objectUrl;

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
            audio.onerror = (e) => {
              console.warn('[useTTS] HTMLAudioElement error:', e);
              cleanup();
            };

            audio.play().catch((playErr) => {
              console.warn(
                '[useTTS] audio.play() rejected, trying Web Audio API fallback:',
                playErr,
              );
              try {
                const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
                if (AudioCtx) {
                  const ctx = new AudioCtx();
                  blob
                    .arrayBuffer()
                    .then((ab) => ctx.decodeAudioData(ab))
                    .then((buf) => {
                      const src = ctx.createBufferSource();
                      src.buffer = buf;
                      src.connect(ctx.destination);
                      src.onended = () => {
                        ctx.close().catch(() => {});
                        cleanup();
                      };
                      src.start(0);
                    })
                    .catch(() => cleanup());
                  return;
                }
              } catch {}
              cleanup();
            });
          });
        }

        onSpeechFinish(true);
      };

      // -------------------------------------------------------------
      // 2. Web Speech API Voice Check & Routing
      // -------------------------------------------------------------
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

      // If no native Japanese voice exists locally, or Web Speech API is unavailable,
      // route to Network Google TTS immediately so user ALWAYS hears crystal-clear voice!
      if (!synth || (isJa && !selectedVoice)) {
        console.info(
          `[useTTS] Native ${isJa ? 'Japanese' : 'English'} voice not found locally. Routing to Network Google TTS.`,
        );
        await playWithNetworkTTS(chunks);
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

      onSpeakStart();

      let chunkIndex = 0;

      const playNextWebSpeechChunk = () => {
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
            // Silent drop detector: if chunk has text but finished suspiciously fast (< 120ms),
            // Chrome skipped speaking it! Fallback to Network TTS.
            const elapsed = Date.now() - speakStartTime;
            if (chunk.length > 3 && speakStartTime > 0 && elapsed < 120) {
              console.warn(
                `[useTTS] Web Speech finished suspiciously fast (${elapsed}ms for "${chunk}"). Falling back to Network TTS!`,
              );
              const remaining = [chunk, ...chunks.slice(chunkIndex)];
              playWithNetworkTTS(remaining);
              return;
            }
            if (!isCancelledRef.current) {
              playNextWebSpeechChunk();
            }
          };

          utterance.onerror = (event) => {
            console.warn('[useTTS] Web Speech Utterance error:', event.error);
            activeUtteranceRef.current = null;
            if (isCancelledRef.current) return;

            // If Web Speech API fails with fatal errors, seamlessly fallback to Network TTS
            if (
              event.error === 'language-unavailable' ||
              event.error === 'voice-unavailable' ||
              event.error === 'not-allowed' ||
              event.error === 'interrupted' ||
              event.error === 'audio-busy'
            ) {
              console.warn(
                `[useTTS] Web Speech failed (${event.error}). Seamlessly falling back to Network Google TTS.`,
              );
              const remaining = [chunk, ...chunks.slice(chunkIndex)];
              playWithNetworkTTS(remaining);
              return;
            }

            playNextWebSpeechChunk();
          };

          synth.speak(utterance);

          if (synth.paused) {
            synth.resume();
          }
        } catch (err: any) {
          console.error('[useTTS] Web Speech speak exception, falling back to Network TTS:', err);
          activeUtteranceRef.current = null;
          if (!isCancelledRef.current) {
            const remaining = [chunk, ...chunks.slice(chunkIndex)];
            playWithNetworkTTS(remaining);
          }
        }
      };

      playNextWebSpeechChunk();
    },
    [onSpeakStart, onSpeakEnd, stopSpeaking],
  );

  return { speakText, stopSpeaking, audioPlayerRef, synthRef, unlockAudio };
};
