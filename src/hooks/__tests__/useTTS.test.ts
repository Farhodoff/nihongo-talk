import { describe, it, expect, vi } from 'vitest';
import { splitIntoTTSChunks, selectBestVoice, fetchTTSAudioBlob } from '../useTTS';

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

  it('6. selectBestVoice returns null when no Japanese voice exists on device', () => {
    const englishOnlyVoices = [
      { name: 'Microsoft David - English (United States)', lang: 'en-US' },
      { name: 'Microsoft Zira - English (United States)', lang: 'en-US' },
    ] as unknown as SpeechSynthesisVoice[];

    const bestJa = selectBestVoice(englishOnlyVoices, true);
    expect(bestJa).toBeNull();
  });

  it('7. selectBestVoice prioritizes high-fidelity Japanese voices when available', () => {
    const mixedVoices = [
      { name: 'Generic Japanese Voice', lang: 'ja-JP' },
      { name: 'Google 日本語', lang: 'ja-JP' },
      { name: 'Microsoft David', lang: 'en-US' },
    ] as unknown as SpeechSynthesisVoice[];

    const bestJa = selectBestVoice(mixedVoices, true);
    expect(bestJa).not.toBeNull();
    expect(bestJa?.name).toBe('Google 日本語');
  });

  it('8. selectBestVoice selects English voice properly when isJa is false', () => {
    const mixedVoices = [
      { name: 'Kyoko', lang: 'ja-JP' },
      { name: 'Google US English', lang: 'en-US' },
    ] as unknown as SpeechSynthesisVoice[];

    const bestEn = selectBestVoice(mixedVoices, false);
    expect(bestEn).not.toBeNull();
    expect(bestEn?.name).toBe('Google US English');
  });

  it('9. fetchTTSAudioBlob retrieves audio blob from /api/tts endpoint', async () => {
    const fakeBlob = new Blob(['fake audio buffer'], { type: 'audio/mpeg' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(fakeBlob, {
        status: 200,
        headers: { 'Content-Type': 'audio/mpeg' },
      }),
    );

    const blob = await fetchTTSAudioBlob('こんにちは', 'ja');
    expect(blob).not.toBeNull();
    expect(fetchSpy).toHaveBeenCalledWith(
      '/api/tts',
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });

  it('10. fetchTTSAudioBlob handles upstream failure gracefully returning null', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network offline'));

    const blob = await fetchTTSAudioBlob('こんにちは', 'ja');
    expect(blob).toBeNull();
  });
});
