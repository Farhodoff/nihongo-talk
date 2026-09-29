import { describe, it, expect } from 'vitest';
import { DokkaiSpeedReaderService } from '../DokkaiSpeedReaderService';

describe('DokkaiSpeedReaderService', () => {
  it('correctly cleans furigana brackets and computes character count', () => {
    const raw = '田中[たなか]さんは 毎朝[まいあさ] 7時[しちじ]に 起[お]きます。';
    const cleaned = DokkaiSpeedReaderService.cleanJapaneseText(raw);
    expect(cleaned).toBe('田中さんは 毎朝 7時に 起きます。');

    const charCount = DokkaiSpeedReaderService.getCharacterCount(raw);
    // Non-whitespace characters: 田中さんは (5) + 毎朝 (2) + 7時に (3) + 起きます。 (5) = 15
    expect(charCount).toBe(15);
  });

  it('splits text into logical paragraphs with individual character counts', () => {
    const raw = `第1[だいいち]の段落[だんらく]です。

第2[だいに]の段落[だんらく]です。内容[ないよう]が続[つづ]きます。`;

    const paragraphs = DokkaiSpeedReaderService.splitIntoParagraphs(raw);
    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].id).toBe(1);
    expect(paragraphs[0].text).toContain('第1');
    expect(paragraphs[1].id).toBe(2);
    expect(paragraphs[1].text).toContain('第2');
  });

  it('calculates CPM, WPM, and speed rating for N5 benchmarks', () => {
    // 120 characters read in 60 seconds = 120 CPM (exact passing benchmark)
    const raw = 'あ'.repeat(120);
    const metrics = DokkaiSpeedReaderService.calculateMetrics({
      rawContent: raw,
      readingDurationSeconds: 60,
      level: 'N5',
      correctAnswers: 2,
      totalQuestions: 2,
    });

    expect(metrics.charCount).toBe(120);
    expect(metrics.cpm).toBe(120);
    expect(metrics.wpm).toBe(60);
    expect(metrics.speedRating).toBe('optimal');
    expect(metrics.comprehensionAccuracy).toBe(100);
    expect(metrics.efficiencyIndex).toBeGreaterThan(60);
  });

  it('detects blazing speed when CPM exceeds high threshold', () => {
    // 300 characters in 60s for N5 (blazing threshold is 240)
    const raw = 'あ'.repeat(300);
    const metrics = DokkaiSpeedReaderService.calculateMetrics({
      rawContent: raw,
      readingDurationSeconds: 60,
      level: 'N5',
      correctAnswers: 2,
      totalQuestions: 2,
    });

    expect(metrics.cpm).toBe(300);
    expect(metrics.speedRating).toBe('blazing');
    expect(metrics.speedRatingLabel.uz).toContain('Chosoku');
  });

  it('detects slow reading pace and offers constructive advice', () => {
    // 60 characters in 60s for N5 (passing is 120) with high accuracy
    const raw = 'あ'.repeat(60);
    const metrics = DokkaiSpeedReaderService.calculateMetrics({
      rawContent: raw,
      readingDurationSeconds: 60,
      level: 'N5',
      correctAnswers: 2,
      totalQuestions: 2,
    });

    expect(metrics.cpm).toBe(60);
    expect(metrics.speedRating).toBe('slow');
    expect(metrics.feedback.uz).toContain('Furigana Hover');
  });
});
