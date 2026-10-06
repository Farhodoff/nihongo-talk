import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CoachProgressDashboard } from '../CoachProgressDashboard';
import { HistoryService, SpeakingSessionItem } from '../../../services/HistoryService';

vi.mock('../../../services/HistoryService', () => ({
  HistoryService: {
    getSpeakingHistory: vi.fn(),
  },
}));

vi.mock('../../../utils/audioTts', () => ({
  speakJapaneseText: vi.fn(),
  speakText: vi.fn(),
  stopAllAudio: vi.fn(),
}));

describe('CoachProgressDashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockSessions: SpeakingSessionItem[] = [
    {
      id: 'session-alpha',
      language: 'ja',
      persona: 'Yuki-sensei',
      durationSeconds: 300,
      fluencyScore: 8.5,
      pronunciationScore: 8.0,
      transcript: JSON.stringify([
        { role: 'assistant', content: 'こんにちは！' },
        { role: 'user', content: 'こんにちは、先生！' },
      ]),
      feedback: JSON.stringify({
        overall_feedback: "Ajoyib suhbat bo'ldi!",
        grammar_corrections: [],
        better_vocabulary: [],
        strengths: ['Yaxshi tezlik'],
        areas_to_improve: [],
      }),
      createdAt: '2026-10-06T12:00:00.000Z',
    },
  ];

  it('renders stats and recent sessions from HistoryService', async () => {
    vi.mocked(HistoryService.getSpeakingHistory).mockResolvedValue(mockSessions);

    render(<CoachProgressDashboard />);

    expect(screen.getByText('Statistika yuklanmoqda...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Speaking Coach & AI Analytics')).toBeInTheDocument();
    });

    expect(screen.getByText(/Persona: Yuki-sensei/i)).toBeInTheDocument();
    expect(screen.getByText('Fluency 8.5')).toBeInTheDocument();
  });

  it('opens ConversationReviewModal when a session is clicked', async () => {
    vi.mocked(HistoryService.getSpeakingHistory).mockResolvedValue(mockSessions);

    render(<CoachProgressDashboard />);

    await waitFor(() => {
      expect(screen.getByText(/Persona: Yuki-sensei/i)).toBeInTheDocument();
    });

    const sessionCard = screen.getByRole('button', { name: /Sessiyani ko'rish: Yuki-sensei/i });
    fireEvent.click(sessionCard);

    // Modal should now be open
    await waitFor(() => {
      expect(screen.getByText('Suhbat Tahlili & Tarixi')).toBeInTheDocument();
      expect(screen.getByText('こんにちは、先生！')).toBeInTheDocument();
    });

    // Close modal
    const closeBtn = screen.getByRole('button', { name: 'Yopish' });
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('Suhbat Tahlili & Tarixi')).not.toBeInTheDocument();
    });
  });
});
