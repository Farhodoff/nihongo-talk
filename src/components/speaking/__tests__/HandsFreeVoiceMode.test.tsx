import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RealtimeVoiceOverlay } from '../RealtimeVoiceOverlay';
import { CoachControlBar } from '../CoachControlBar';
import { playConversationChime } from '../../../utils/audioChime';

describe('Hands-Free Full-Duplex Voice Mode Tests', () => {
  it('playConversationChime executes without error for all sound cue types', () => {
    expect(() => playConversationChime('listen_start')).not.toThrow();
    expect(() => playConversationChime('commit')).not.toThrow();
    expect(() => playConversationChime('barge_in')).not.toThrow();
  });

  it('RealtimeVoiceOverlay renders Barge-In button when AI is speaking', () => {
    const handleBargeIn = vi.fn();

    render(
      <RealtimeVoiceOverlay
        isRecording={false}
        isAiSpeaking={true}
        transcript=""
        errors={[]}
        onToggleRecording={() => {}}
        onBargeIn={handleBargeIn}
      />,
    );

    expect(screen.getByText(/AI Coach Gapirmoqda/i)).toBeDefined();

    const stopBtn = screen.getByRole('button', { name: /To'xtatish/i });
    expect(stopBtn).toBeDefined();
    fireEvent.click(stopBtn);
    expect(handleBargeIn).toHaveBeenCalledTimes(1);
  });

  it('CoachControlBar renders Barge-in stop button during live AI speech', () => {
    const handleBargeIn = vi.fn();

    render(
      <CoachControlBar
        isLiveSession={true}
        isSpeaking={true}
        isThinking={false}
        isListening={false}
        isMuted={false}
        setIsMuted={() => {}}
        sessionSeconds={45}
        chatHistoryLength={4}
        toggleSession={() => {}}
        onClearHistory={() => {}}
        formatTimer={(s) => `00:${s}`}
        onBargeIn={handleBargeIn}
      />,
    );

    expect(screen.getByText(/AI Gapirmoqda/i)).toBeDefined();
    const bargeBtn = screen.getByTitle(/AI ni to'xtatish va gapirish/i);
    expect(bargeBtn).toBeDefined();
    fireEvent.click(bargeBtn);
    expect(handleBargeIn).toHaveBeenCalledTimes(1);
  });
});
