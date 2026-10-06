import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ConversationReviewModal } from '../ConversationReviewModal';
import { SpeakingSessionItem } from '../../../services/HistoryService';
import * as audioTts from '../../../utils/audioTts';

vi.mock('../../../utils/audioTts', () => ({
  speakJapaneseText: vi.fn(),
  speakText: vi.fn(),
  stopAllAudio: vi.fn(),
}));

describe('ConversationReviewModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockSession: SpeakingSessionItem = {
    id: 'test-session-1',
    language: 'ja',
    persona: 'Yuki-sensei (Gentle)',
    durationSeconds: 180,
    fluencyScore: 8.0,
    pronunciationScore: 7.5,
    transcript: JSON.stringify([
      { id: '1', role: 'assistant', content: 'こんにちは！お元気ですか？' },
      { id: '2', role: 'user', content: '元気です。今日日本語を勉強しました。' },
    ]),
    feedback: JSON.stringify({
      overall_score: 8.0,
      fluency_score: 8.0,
      pronunciation_score: 7.5,
      grammar_score: 8.5,
      overall_feedback: "Juda yaxshi suhbat bo'ldi! Talaffuz ustida yana ozroq ishlang.",
      grammar_corrections: [
        {
          original: '今日日本語を勉強しました',
          corrected: '今日は日本語を勉強しました',
          explanation: "'は' yuklamasi mavzuni ajratish uchun zarur.",
        },
      ],
      better_vocabulary: [
        {
          original: '元気です',
          suggested: 'おかげさまで元気です',
          context: 'Kattalarga nisbatan muloyimroq shakl.',
        },
      ],
      strengths: ["So'z boyligi yaxshi", 'Tez javob berish'],
      areas_to_improve: ["Yuklamalarni (は/が) to'g'ri ishlatish"],
    }),
    createdAt: '2026-10-06T10:00:00.000Z',
  };

  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <ConversationReviewModal isOpen={false} session={mockSession} onClose={vi.fn()} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when session is null', () => {
    const { container } = render(
      <ConversationReviewModal isOpen={true} session={null} onClose={vi.fn()} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders session header, scores and dialog turns when open', () => {
    render(<ConversationReviewModal isOpen={true} session={mockSession} onClose={vi.fn()} />);

    expect(screen.getByText('Suhbat Tahlili & Tarixi')).toBeInTheDocument();
    expect(screen.getAllByText('Yuki-sensei (Gentle)').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('8.0 / 9.0')).toBeInTheDocument();
    expect(screen.getByText('7.5 / 9.0')).toBeInTheDocument();

    // Dialog messages
    expect(screen.getByText('こんにちは！お元気ですか？')).toBeInTheDocument();
    expect(screen.getByText('元気です。今日日本語を勉強しました。')).toBeInTheDocument();
  });

  it('calls speakJapaneseText when speaker button on a turn is clicked', () => {
    render(<ConversationReviewModal isOpen={true} session={mockSession} onClose={vi.fn()} />);

    const speakButtons = screen.getAllByRole('button', { name: "Ovoz chiqarib o'qish" });
    expect(speakButtons.length).toBeGreaterThan(0);

    fireEvent.click(speakButtons[0]);
    expect(audioTts.speakJapaneseText).toHaveBeenCalledWith('こんにちは！お元気ですか？');
  });

  it('switches to feedback tab and displays corrections, suggestions, and strengths', () => {
    render(<ConversationReviewModal isOpen={true} session={mockSession} onClose={vi.fn()} />);

    const feedbackTabBtn = screen.getByText('AI Tahlili & Xatolar');
    fireEvent.click(feedbackTabBtn);

    expect(screen.getByText(/Juda yaxshi suhbat bo'ldi!/i)).toBeInTheDocument();
    expect(screen.getByText('今日日本語を勉強しました')).toBeInTheDocument();
    expect(screen.getByText('今日は日本語を勉強しました')).toBeInTheDocument();
    expect(screen.getByText(/おかげさまで元気です/i)).toBeInTheDocument();
    expect(screen.getByText("So'z boyligi yaxshi")).toBeInTheDocument();
    expect(screen.getByText("Yuklamalarni (は/が) to'g'ri ishlatish")).toBeInTheDocument();
  });

  it('parses plain text transcripts gracefully', () => {
    const plainSession: SpeakingSessionItem = {
      ...mockSession,
      transcript: 'User: Konnichiwa\nCoach: Konnichiwa! Ogenki desu ka?',
      feedback: 'Yaxshi mashq bajarildi.',
    };

    render(<ConversationReviewModal isOpen={true} session={plainSession} onClose={vi.fn()} />);

    expect(screen.getByText('Konnichiwa')).toBeInTheDocument();
    expect(screen.getByText('Konnichiwa! Ogenki desu ka?')).toBeInTheDocument();
  });

  it('calls onClose and stops all audio when close buttons are clicked', () => {
    const handleClose = vi.fn();
    render(<ConversationReviewModal isOpen={true} session={mockSession} onClose={handleClose} />);

    const closeBtn = screen.getByRole('button', { name: 'Yopish' });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
    expect(audioTts.stopAllAudio).toHaveBeenCalled();

    const understandBtn = screen.getByText('Tushunarli');
    fireEvent.click(understandBtn);
    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});
