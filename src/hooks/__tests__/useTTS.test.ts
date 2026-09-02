import { describe, it, expect } from 'vitest';
import { splitIntoTTSChunks } from '../useTTS';

describe('useTTS & Audio Chunking Resiliency Tests', () => {
  it('1. returns single item array when text is shorter than maxChunkLen', () => {
    const text = 'こんにちは、元気ですか？';
    const chunks = splitIntoTTSChunks(text, 170);
    expect(chunks).toEqual(['こんにちは、元気ですか？']);
  });

  it('2. splits long Japanese dialogue into sentences <= 170 chars without breaking sentences midway', () => {
    const longJa =
      'こんにちは！今日は日本語の勉強をしましょう。文法と語彙の練習をしっかり行います。もしわからないことがあれば、いつでも質問してくださいね。一緒に頑張りましょう！';
    const chunks = splitIntoTTSChunks(longJa, 50);
    expect(chunks.length).toBeGreaterThan(1);
    chunks.forEach((chunk) => {
      expect(chunk.length).toBeLessThanOrEqual(50);
    });
    // Full text reconstructed preserves all words
    expect(chunks.join('')).toBe(longJa);
  });

  it('3. splits English text cleanly along punctuation marks', () => {
    const longEn =
      'Hello and welcome to IELTS Speaking practice! Today we will focus on Part 2 cue cards. Make sure to structure your answers with clear introduction, body, and conclusion.';
    const chunks = splitIntoTTSChunks(longEn, 60);
    expect(chunks.length).toBeGreaterThan(1);
    chunks.forEach((chunk) => {
      expect(chunk.length).toBeLessThanOrEqual(60);
    });
  });

  it('4. handles empty or whitespace text gracefully without crashing', () => {
    expect(splitIntoTTSChunks('')).toEqual([]);
    expect(splitIntoTTSChunks('   ')).toEqual([]);
  });

  it('5. handles single very long continuous string without punctuation', () => {
    const longNoPunct = 'A'.repeat(300);
    const chunks = splitIntoTTSChunks(longNoPunct, 100);
    expect(chunks.length).toBe(3);
    expect(chunks[0].length).toBe(100);
    expect(chunks[1].length).toBe(100);
    expect(chunks[2].length).toBe(100);
  });
});
