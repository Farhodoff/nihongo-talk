import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ListeningAudioSyncService } from '../ListeningAudioSyncService';
import {
  JLPT_LISTENING_QUESTIONS,
  parseScriptIntoDialogueLines,
  getQuestionsByLevel,
} from '../../data/jlpt/listening_data';

describe('ListeningAudioSyncService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('correctly parses raw script into dialogue lines with speaker and gender detection', () => {
    const script = `男の人と女の人が話しています。\n男：あ、雨が降ってきましたね。\n女：傘を持っていますか？\n先生：静かにしてください。`;
    const lines = ListeningAudioSyncService.parseScriptToDialogue(script);

    expect(lines.length).toBe(4);

    expect(lines[0].speaker).toBe('ナレーション');
    expect(lines[0].gender).toBe('neutral');

    expect(lines[1].speaker).toBe('男');
    expect(lines[1].gender).toBe('male');
    expect(lines[1].japanese).toBe('あ、雨が降ってきましたね。');

    expect(lines[2].speaker).toBe('女');
    expect(lines[2].gender).toBe('female');
    expect(lines[2].japanese).toBe('傘を持っていますか？');

    expect(lines[3].speaker).toBe('先生');
    expect(lines[3].gender).toBe('male');
  });

  it('provides different pitch levels for male, female, and neutral speakers', () => {
    const malePitch = ListeningAudioSyncService.getPitchForGender('male');
    const femalePitch = ListeningAudioSyncService.getPitchForGender('female');
    const neutralPitch = ListeningAudioSyncService.getPitchForGender('neutral');

    expect(malePitch).toBeLessThan(1.0);
    expect(femalePitch).toBeGreaterThan(1.0);
    expect(neutralPitch).toBe(1.0);
  });

  it('verifies all 46 JLPT listening questions have valid dialogue lines and options', () => {
    expect(JLPT_LISTENING_QUESTIONS.length).toBeGreaterThanOrEqual(45);

    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
    levels.forEach((lvl) => {
      const qList = getQuestionsByLevel(lvl);
      expect(qList.length).toBeGreaterThanOrEqual(9);

      qList.forEach((q) => {
        expect(q.options.length).toBe(4);
        expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswer).toBeLessThan(4);
        expect(q.script.length).toBeGreaterThan(15);
        expect(q.explanationUzbek.length).toBeGreaterThan(15);

        // Every question should have or be able to parse dialogue lines
        const parsed = q.dialogueLines || parseScriptIntoDialogueLines(q.script);
        expect(parsed.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  it('orchestrates sequential dialogue playback with speed, jump, and loop controls', () => {
    const mockSpeak = vi.fn();
    const mockCancel = vi.fn();
    const mockPause = vi.fn();
    const mockResume = vi.fn();

    vi.stubGlobal('speechSynthesis', {
      speak: mockSpeak,
      cancel: mockCancel,
      pause: mockPause,
      resume: mockResume,
    });
    vi.stubGlobal(
      'SpeechSynthesisUtterance',
      class {
        lang = '';
        rate = 1.0;
        pitch = 1.0;
        onstart: any;
        onend: any;
        onerror: any;
        constructor(public text: string) {}
      },
    );

    const testLines = [
      { id: '1', speaker: '男', japanese: 'こんにちは' },
      { id: '2', speaker: '女', japanese: 'さようなら' },
      { id: '3', speaker: 'ナレーション', japanese: '終わりです' },
    ];

    const onLineStart = vi.fn();
    const onStateChange = vi.fn();
    const onComplete = vi.fn();

    const controller = ListeningAudioSyncService.startSequentialPlayback(testLines, {
      startIndex: 0,
      speed: 1.0,
      onLineStart,
      onStateChange,
      onComplete,
    });

    expect(controller).toBeDefined();
    expect(controller.getCurrentIndex()).toBe(0);
    expect(onLineStart).toHaveBeenCalledWith(0);
    expect(onStateChange).toHaveBeenCalledWith(true);

    // Test speed control
    controller.setSpeed(1.5);

    // Test jump to line
    controller.jumpToLine(2);
    expect(controller.getCurrentIndex()).toBe(2);
    expect(onLineStart).toHaveBeenCalledWith(2);

    // Test prevLine
    controller.prevLine();
    expect(controller.getCurrentIndex()).toBe(1);
    expect(onLineStart).toHaveBeenCalledWith(1);

    // Test nextLine
    controller.nextLine();
    expect(controller.getCurrentIndex()).toBe(2);

    // Test loop setting
    controller.setLooping(true);

    // Test pause and resume
    controller.pause();
    expect(mockPause).toHaveBeenCalled();

    controller.resume();

    // Test stop
    controller.stop();
    expect(onStateChange).toHaveBeenCalledWith(false);
  });

  describe('Karaoke Time-Sync & Segment Calculation', () => {
    const sampleLines = [
      { id: '1', speaker: '男', japanese: 'あ、雨が降ってきましたね。' },
      { id: '2', speaker: '女', japanese: 'そうですね。傘を持っていますか？' },
      { id: '3', speaker: '男', japanese: 'いいえ、持っていません。コンビニで買ってきます。' },
    ];

    it('calculates proportional time segments based on audio duration and text length', () => {
      const segments = ListeningAudioSyncService.calculateLineTimeSegments(sampleLines, 30);

      expect(segments.length).toBe(3);
      expect(segments[0].start).toBeGreaterThanOrEqual(0);
      expect(segments[0].end).toBeGreaterThan(segments[0].start);
      expect(segments[1].start).toBeGreaterThanOrEqual(segments[0].end);
      expect(segments[2].start).toBeGreaterThanOrEqual(segments[1].end);
      expect(segments[2].end).toBeLessThanOrEqual(30);

      // Line 3 has longer text than line 1, so its duration should be greater
      const dur0 = segments[0].end - segments[0].start;
      const dur2 = segments[2].end - segments[2].start;
      expect(dur2).toBeGreaterThan(dur0);
    });

    it('respects explicit timestamps when provided on dialogue lines', () => {
      const explicitLines = [
        { id: '1', speaker: '男', japanese: 'こんにちは', startTime: 2.5, endTime: 5.0 },
        { id: '2', speaker: '女', japanese: 'さようなら', startTime: 5.8, endTime: 9.2 },
      ];

      const segments = ListeningAudioSyncService.calculateLineTimeSegments(explicitLines, 15);
      expect(segments).toEqual([
        { start: 2.5, end: 5.0 },
        { start: 5.8, end: 9.2 },
      ]);
    });

    it('accurately identifies active line index throughout audio playback', () => {
      const segments = [
        { id: '1', speaker: '男', japanese: 'Line 1', startTime: 2.0, endTime: 6.0 },
        { id: '2', speaker: '女', japanese: 'Line 2', startTime: 7.0, endTime: 12.0 },
        { id: '3', speaker: '男', japanese: 'Line 3', startTime: 13.0, endTime: 18.0 },
      ];

      // Before first segment starts
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 1.0, 20)).toBe(0);

      // During Line 1
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 4.0, 20)).toBe(0);

      // During inter-line gap between Line 1 and Line 2
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 6.2, 20)).toBe(0);
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 6.9, 20)).toBe(1);

      // During Line 2
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 9.5, 20)).toBe(1);

      // During Line 3
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 15.0, 20)).toBe(2);

      // After last segment
      expect(ListeningAudioSyncService.getActiveLineIndex(segments, 19.5, 20)).toBe(2);
    });

    it('retrieves line start time for seeking', () => {
      const lines = [
        { id: '1', speaker: '男', japanese: 'Line 1', startTime: 3.5, endTime: 7.0 },
        { id: '2', speaker: '女', japanese: 'Line 2', startTime: 8.0, endTime: 12.0 },
      ];

      expect(ListeningAudioSyncService.getLineStartTime(lines, 0, 15)).toBe(3.5);
      expect(ListeningAudioSyncService.getLineStartTime(lines, 1, 15)).toBe(8.0);
      expect(ListeningAudioSyncService.getLineStartTime(lines, 5, 15)).toBe(0);
    });

    it('formats seconds into MM:SS format correctly', () => {
      expect(ListeningAudioSyncService.formatTime(0)).toBe('00:00');
      expect(ListeningAudioSyncService.formatTime(9)).toBe('00:09');
      expect(ListeningAudioSyncService.formatTime(65)).toBe('01:05');
      expect(ListeningAudioSyncService.formatTime(125)).toBe('02:05');
      expect(ListeningAudioSyncService.formatTime(-5)).toBe('00:00');
    });
  });
});
