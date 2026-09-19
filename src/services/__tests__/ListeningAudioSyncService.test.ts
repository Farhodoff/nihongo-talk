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
});
