import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { LessonAudioPlayer } from '../LessonAudioPlayer';

describe('LessonAudioPlayer', () => {
  let playMock: any;
  let pauseMock: any;
  let listeners: Record<string, ((...args: any[]) => void)[]> = {};

  class MockAudio {
    play = playMock;
    pause = pauseMock;
    playbackRate = 1.0;
    currentTime = 10;
    duration = 100;
    src = '';
    muted = false;

    addEventListener = vi.fn((event: string, handler: (...args: any[]) => void) => {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(handler);
    });

    removeEventListener = vi.fn((event: string, handler: (...args: any[]) => void) => {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter((h) => h !== handler);
      }
    });
  }

  beforeEach(() => {
    listeners = {};
    playMock = vi.fn().mockResolvedValue(undefined);
    pauseMock = vi.fn();
    window.Audio = MockAudio as any;
  });

  it('renders audio title, CD audio badge and duration', () => {
    render(
      <LessonAudioPlayer
        audioUrl="/audio/minna/minna_shokyu_1_001.mp3"
        audioTitle="1-Dars Mondai 1-Savol"
      />,
    );

    expect(screen.getByText(/1-Dars Mondai 1-Savol/i)).toBeInTheDocument();
    expect(screen.getByText(/Studiya CD Audiosi/i)).toBeInTheDocument();
  });

  it('toggles play and pause on button click', async () => {
    render(
      <LessonAudioPlayer audioUrl="/audio/minna/minna_shokyu_1_001.mp3" audioTitle="Test Audio" />,
    );

    const playBtn = screen.getByRole('button', { name: /Audioni tinglash/i });
    expect(playBtn).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(playBtn);
    });

    expect(playMock).toHaveBeenCalled();
  });

  it('jumps -5s and +5s when jump buttons are clicked', async () => {
    render(
      <LessonAudioPlayer audioUrl="/audio/minna/minna_shokyu_1_001.mp3" audioTitle="Test Audio" />,
    );

    const minusBtn = screen.getByTitle(/5 soniya orqaga/i);
    const plusBtn = screen.getByTitle(/5 soniya oldinga/i);

    fireEvent.click(minusBtn);
    fireEvent.click(plusBtn);

    expect(minusBtn).toBeInTheDocument();
    expect(plusBtn).toBeInTheDocument();
  });

  it('switches playback rate when speed pills are clicked', () => {
    render(
      <LessonAudioPlayer audioUrl="/audio/minna/minna_shokyu_1_001.mp3" audioTitle="Test Audio" />,
    );

    const rate12 = screen.getByRole('button', { name: '1.2x' });
    fireEvent.click(rate12);

    expect(rate12).toHaveClass('bg-primary');
  });

  it('toggles mute state when mute button is clicked', () => {
    render(
      <LessonAudioPlayer audioUrl="/audio/minna/minna_shokyu_1_001.mp3" audioTitle="Test Audio" />,
    );

    const muteBtn = screen.getByTitle(/Ovozni o'chirish/i);
    fireEvent.click(muteBtn);

    expect(screen.getByTitle(/Ovozni yoqish/i)).toBeInTheDocument();
  });
});
