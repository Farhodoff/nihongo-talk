import { describe, it, expect, vi, beforeEach } from 'vitest';
import { speakJapaneseText, stopAllAudio } from '../audioTts';
import * as useTTSModule from '../../hooks/useTTS';

describe('audioTts Offline Resilient Speech Engine', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('falls back to window.speechSynthesis when fetchTTSAudioBlob returns null (offline mode)', async () => {
    vi.spyOn(useTTSModule, 'fetchTTSAudioBlob').mockResolvedValue(null);

    const mockSpeak = vi.fn();
    const mockCancel = vi.fn();
    const mockGetVoices = vi.fn().mockReturnValue([{ name: 'Kyoko', lang: 'ja-JP' }]);

    class MockUtterance {
      text: string;
      lang = '';
      rate = 1;
      pitch = 1;
      voice: any = null;
      constructor(text: string) {
        this.text = text;
      }
    }
    (window as any).SpeechSynthesisUtterance = MockUtterance;
    (globalThis as any).SpeechSynthesisUtterance = MockUtterance;

    Object.defineProperty(window, 'speechSynthesis', {
      value: {
        speak: mockSpeak,
        cancel: mockCancel,
        getVoices: mockGetVoices,
      },
      writable: true,
      configurable: true,
    });

    speakJapaneseText('こんにちは');

    // Wait microtask for async playNetworkFallback to resolve
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(mockSpeak).toHaveBeenCalled();
    const utterance = mockSpeak.mock.calls[0][0];
    expect(utterance.text).toBe('こんにちは');
    expect(utterance.lang).toBe('ja-JP');
  });

  it('stops all audio cleanly', () => {
    const mockCancel = vi.fn();
    Object.defineProperty(window, 'speechSynthesis', {
      value: { cancel: mockCancel, speak: vi.fn(), getVoices: vi.fn().mockReturnValue([]) },
      writable: true,
      configurable: true,
    });

    stopAllAudio();
    expect(mockCancel).toHaveBeenCalled();
  });
});
