/**
 * ListeningAudioSyncService.ts
 * Real-time Speech-to-Script Audio Synchronization & Karaoke Subtitles Engine for JLPT Choukai.
 * Provides line-by-line playback orchestration, multi-speaker voice pitch control (male/female),
 * sentence jumping, and loop/shadowing capabilities.
 */

import { DialogueLine } from '../data/jlpt/listening_data';
import { cleanJapaneseTTS } from '../utils/ai';
import { stopAllAudio } from '../utils/audioTts';

export type SpeakerGender = 'male' | 'female' | 'neutral';

export interface DialoguePlaybackState {
  isPlaying: boolean;
  currentLineIndex: number;
  totalLines: number;
  speed: number;
  isLoopingLine: boolean;
}

export class ListeningAudioSyncService {
  /**
   * Automatically parses raw script text into structured DialogueLine elements
   */
  static parseScriptToDialogue(script: string): DialogueLine[] {
    const lines: DialogueLine[] = [];
    const rawLines = script.split('\n');
    let idx = 1;

    for (const raw of rawLines) {
      const trimmed = raw.trim();
      if (!trimmed) continue;

      let speaker = 'ナレーション';
      let speakerRoleUz = 'Boshlovchi';
      let gender: SpeakerGender = 'neutral';
      let text = trimmed;

      if (trimmed.includes('：')) {
        const parts = trimmed.split('：');
        speaker = parts[0].trim();
        text = parts.slice(1).join('：').trim();
      } else if (trimmed.includes(':')) {
        const parts = trimmed.split(':');
        speaker = parts[0].trim();
        text = parts.slice(1).join(':').trim();
      }

      if (
        [
          '男',
          '男の人',
          '男性',
          '息子',
          '彼',
          '山田',
          '田中',
          '鈴木',
          '課長',
          '部長',
          '社長',
        ].includes(speaker)
      ) {
        gender = 'male';
        speakerRoleUz = 'Erkak';
      } else if (['女', '女の人', '女性', '母', '母親', '彼女', '佐藤', '住人'].includes(speaker)) {
        gender = 'female';
        speakerRoleUz = 'Ayol';
      } else if (['先生', '教授', '講師', '学者', '有識者', '評論家', '弁護士'].includes(speaker)) {
        gender = 'male';
        speakerRoleUz = "O'qituvchi / Mutaxassis";
      } else if (['学生', '生徒'].includes(speaker)) {
        gender = 'neutral';
        speakerRoleUz = 'Talaba';
      } else if (
        ['店員', '店長', '係員', '係の人', 'フロント', '薬剤師', 'ガイド'].includes(speaker)
      ) {
        gender = 'neutral';
        speakerRoleUz = 'Xodim / Sotuvchi';
      } else if (['アナウンサー', 'アナウンス'].includes(speaker)) {
        gender = 'neutral';
        speakerRoleUz = "E'lon / Diktor";
      } else if (speaker === 'あなた') {
        gender = 'neutral';
        speakerRoleUz = 'Siz';
      }

      lines.push({
        id: `line_${idx++}`,
        speaker,
        speakerRoleUz,
        gender,
        japanese: text,
      });
    }

    return lines;
  }

  /**
   * Returns gender-specific voice pitch for natural multi-speaker dialogues
   */
  static getPitchForGender(gender: SpeakerGender): number {
    switch (gender) {
      case 'male':
        return 0.85; // Deep, masculine pitch
      case 'female':
        return 1.18; // Higher feminine pitch
      default:
        return 1.0; // Standard neutral announcer pitch
    }
  }

  /**
   * Synthesizes and plays a single dialogue line with custom pitch and speed
   */
  static playLine(
    line: DialogueLine,
    speed: number = 1.0,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void,
  ): SpeechSynthesisUtterance | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onError?.();
      return null;
    }

    stopAllAudio();
    window.speechSynthesis.cancel();

    const cleanText = cleanJapaneseTTS(line.japanese);
    if (!cleanText) {
      onEnd?.();
      return null;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = Math.max(0.6, Math.min(1.8, speed));
    utterance.pitch = this.getPitchForGender(line.gender || 'neutral');

    utterance.onstart = () => {
      onStart?.();
    };

    utterance.onend = () => {
      onEnd?.();
    };

    utterance.onerror = (e) => {
      console.warn('[ListeningAudioSyncService] Line utterance error:', e);
      onError?.();
    };

    window.speechSynthesis.speak(utterance);
    return utterance;
  }

  /**
   * Plays the full dialogue sequentially, emitting real-time line index changes
   */
  static startSequentialPlayback(
    lines: DialogueLine[],
    options: {
      startIndex?: number;
      speed?: number;
      isLoopingLine?: boolean;
      onLineStart: (lineIndex: number) => void;
      onStateChange: (isPlaying: boolean) => void;
      onComplete: () => void;
    },
  ): {
    stop: () => void;
    pause: () => void;
    resume: () => void;
  } {
    let currentIndex = options.startIndex ?? 0;
    let isStopped = false;
    let isPaused = false;
    const speed = options.speed ?? 1.0;

    const playNext = () => {
      if (isStopped) return;
      if (currentIndex >= lines.length) {
        options.onStateChange(false);
        options.onComplete();
        return;
      }

      const currentLine = lines[currentIndex];
      options.onLineStart(currentIndex);
      options.onStateChange(true);

      this.playLine(
        currentLine,
        speed,
        () => {},
        () => {
          if (isStopped) return;
          if (options.isLoopingLine) {
            // Replay same line
            setTimeout(playNext, 300);
          } else {
            currentIndex++;
            setTimeout(playNext, 400); // 400ms natural conversational pause between speakers
          }
        },
        () => {
          if (isStopped) return;
          currentIndex++;
          playNext();
        },
      );
    };

    playNext();

    return {
      stop: () => {
        isStopped = true;
        stopAllAudio();
        options.onStateChange(false);
      },
      pause: () => {
        isPaused = true;
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.pause();
        }
        options.onStateChange(false);
      },
      resume: () => {
        if (isPaused && typeof window !== 'undefined' && 'speechSynthesis' in window) {
          isPaused = false;
          window.speechSynthesis.resume();
          options.onStateChange(true);
        } else {
          isPaused = false;
          playNext();
        }
      },
    };
  }
}

export default ListeningAudioSyncService;
