import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  splitIntoTTSChunks,
  selectBestVoice,
  fetchTTSAudioBlob,
  clearTTSAudioCache,
} from '../useTTS';

describe('useTTS & Audio Chunking Resiliency Tests', () => {
  beforeEach(() => {
    clearTTSAudioCache();
    vi.restoreAllMocks();
  });

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

  it('11. fetchTTSAudioBlob returns cached audio without calling network again', async () => {
    const fakeBlob = new Blob(['cached audio'], { type: 'audio/mpeg' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(fakeBlob, {
        status: 200,
        headers: { 'Content-Type': 'audio/mpeg' },
      }),
    );

    const firstBlob = await fetchTTSAudioBlob('おはようございます', 'ja');
    expect(firstBlob).not.toBeNull();
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    // Second call with same text should hit cache with 0ms network calls
    const secondBlob = await fetchTTSAudioBlob('おはようございます', 'ja');
    expect(secondBlob).not.toBeNull();
    expect(fetchSpy).toHaveBeenCalledTimes(1); // Not called again!
  });

  it('12. fetchTTSAudioBlob deduplicates concurrent in-flight requests for same text', async () => {
    const fakeBlob = new Blob(['concurrent audio'], { type: 'audio/mpeg' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
      await new Promise((r) => setTimeout(r, 20));
      return new Response(fakeBlob, {
        status: 200,
        headers: { 'Content-Type': 'audio/mpeg' },
      });
    });

    // Fire 2 parallel requests simultaneously
    const [blob1, blob2] = await Promise.all([
      fetchTTSAudioBlob('自己紹介をしましょう', 'ja'),
      fetchTTSAudioBlob('自己紹介をしましょう', 'ja'),
    ]);

    expect(blob1).not.toBeNull();
    expect(blob2).not.toBeNull();
    expect(fetchSpy).toHaveBeenCalledTimes(1); // Exact deduplication!
  });

  it('13. splitIntoTTSChunks keeps typical 3-sentence dialogue under 185 chars as 1 single cohesive chunk', () => {
    const dialog = 'こんにちは！お元気ですか？今日はあなたの自己紹介について話しましょう。';
    const chunks = splitIntoTTSChunks(dialog);
    // Preserved as exactly 1 cohesive audio clip so Google TTS produces zero silence gaps
    expect(chunks).toEqual([dialog]);
    expect(chunks.length).toBe(1);
  });

  it('14. splitIntoTTSChunks splits longer text into at most 2 chunks (first sentence + cohesive body)', () => {
    const longerSpeech =
      'こんにちは！今日は日本語の勉強をしましょう。文法と語彙の練習をしっかり行います。もしわからないことがあれば、いつでも質問してくださいね。一緒に頑張りましょう！';
    const chunks = splitIntoTTSChunks(longerSpeech, 75);
    // First sentence for instant <150ms start, second chunk is cohesive body
    expect(chunks.length).toBe(2);
    expect(chunks[0]).toBe('こんにちは！');
    expect(chunks[1]).toBe(
      '今日は日本語の勉強をしましょう。文法と語彙の練習をしっかり行います。もしわからないことがあれば、いつでも質問してくださいね。一緒に頑張りましょう！',
    );
  });

  it('15. fetchTTSAudioBlob instantly caches multiple persona greetings without network roundtrip', async () => {
    const fakeBlob = new Blob(['persona audio'], { type: 'audio/mpeg' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
      return new Response(fakeBlob, {
        status: 200,
        headers: { 'Content-Type': 'audio/mpeg' },
      });
    });

    const greetings = [
      'こんにちは！鬼先生です。遠慮せずに日本語で話してください！',
      'こんにちは！日本語の先生です。いつでもお話ししてくださいね。',
      'こんにちは！JLPTスピーキングの練習を始めましょう！',
    ];

    // Warm-cache all greetings
    await Promise.all(greetings.map((g) => fetchTTSAudioBlob(g, 'ja')));
    expect(fetchSpy).toHaveBeenCalledTimes(3);

    // Retrieve again - MUST be 0 network calls (instant cache hits)
    const cachedBlobs = await Promise.all(greetings.map((g) => fetchTTSAudioBlob(g, 'ja')));
    expect(cachedBlobs.length).toBe(3);
    cachedBlobs.forEach((b) => expect(b).not.toBeNull());
    expect(fetchSpy).toHaveBeenCalledTimes(3); // Still 3! Zero extra network calls!
  });
});
