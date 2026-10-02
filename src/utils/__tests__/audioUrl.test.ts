import { describe, it, expect } from 'vitest';
import { resolveAudioUrl } from '../audioUrl';

describe('resolveAudioUrl', () => {
  it('returns empty string for undefined or null or empty input', () => {
    expect(resolveAudioUrl(undefined)).toBe('');
    expect(resolveAudioUrl(null)).toBe('');
    expect(resolveAudioUrl('')).toBe('');
    expect(resolveAudioUrl('   ')).toBe('');
  });

  it('preserves absolute URLs (http, https, blob, data)', () => {
    expect(resolveAudioUrl('https://example.com/audio.mp3')).toBe('https://example.com/audio.mp3');
    expect(resolveAudioUrl('http://example.com/audio.mp3')).toBe('http://example.com/audio.mp3');
    expect(resolveAudioUrl('blob:http://localhost/123')).toBe('blob:http://localhost/123');
    expect(resolveAudioUrl('data:audio/mp3;base64,ABC')).toBe('data:audio/mp3;base64,ABC');
  });

  it('returns local relative audio path when no CDN is configured', () => {
    expect(resolveAudioUrl('/audio/minna/001.mp3')).toBe('/audio/minna/001.mp3');
    expect(resolveAudioUrl('/audio/choukai/n2/Track01.mp3')).toBe('/audio/choukai/n2/Track01.mp3');
  });
});
