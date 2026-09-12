import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DayActivityDetailModal } from '../DayActivityDetailModal';
import { ActivityDaySummary } from '../../../services/ActivityLoggingService';

describe('DayActivityDetailModal Component', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(
      <DayActivityDetailModal
        isOpen={false}
        onClose={vi.fn()}
        daySummary={null}
        selectedDate={new Date(2026, 8, 12)}
      />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders modal with daily activities, total minutes, and XP', () => {
    const summary: ActivityDaySummary = {
      dateStr: '2026-09-12',
      totalMinutes: 45,
      totalXp: 165,
      totalItems: 101,
      level: 4,
      activities: [
        {
          id: 'act-1',
          activityType: 'flashcards',
          activityTitle: "N5 So'z boyligi: 1-qism (100 ta so'z)",
          durationMinutes: 25,
          itemsCount: 100,
          xpEarned: 100,
          metadata: { badge: "100 So'z Zafari" },
          activityDate: '2026-09-12',
          createdAt: '2026-09-12T10:00:00Z',
        },
        {
          id: 'act-2',
          activityType: 'speaking',
          activityTitle: 'AI Coach: Yaponcha suhbat',
          durationMinutes: 20,
          itemsCount: 1,
          xpEarned: 65,
          metadata: { fluencyScore: 88 },
          activityDate: '2026-09-12',
          createdAt: '2026-09-12T14:30:00Z',
        },
      ],
    };

    const onCloseMock = vi.fn();

    render(
      <DayActivityDetailModal
        isOpen={true}
        onClose={onCloseMock}
        daySummary={summary}
        selectedDate={new Date(2026, 8, 12)}
      />,
    );

    // Header & Summary
    expect(screen.getByText(/45 daq/i)).toBeInTheDocument();
    expect(screen.getByText(/\+165 XP/i)).toBeInTheDocument();
    expect(screen.getByText(/2 ta/i)).toBeInTheDocument();

    // Activity Items
    expect(screen.getByText("N5 So'z boyligi: 1-qism (100 ta so'z)")).toBeInTheDocument();
    expect(screen.getByText("100 So'z Zafari")).toBeInTheDocument();
    expect(screen.getByText('AI Coach: Yaponcha suhbat')).toBeInTheDocument();
    expect(screen.getByText(/Ravonlik: 88%/i)).toBeInTheDocument();

    // Close button
    const closeBtn = screen.getByRole('button', { name: /Yopish/i });
    fireEvent.click(closeBtn);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renders friendly empty state when no activities recorded for the date', () => {
    const onStartFlashcards = vi.fn();
    const onStartSpeaking = vi.fn();

    render(
      <DayActivityDetailModal
        isOpen={true}
        onClose={vi.fn()}
        daySummary={null}
        selectedDate={new Date(2026, 8, 12)}
        onStartFlashcards={onStartFlashcards}
        onStartSpeaking={onStartSpeaking}
      />,
    );

    expect(screen.getByText(/Bu kunda o'quv faolligi qayd etilmagan/i)).toBeInTheDocument();

    const flashcardsBtn = screen.getByRole('button', { name: /Fleshkarta Yodlash/i });
    fireEvent.click(flashcardsBtn);
    expect(onStartFlashcards).toHaveBeenCalledTimes(1);
  });
});
