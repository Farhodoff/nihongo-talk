import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ActivityLoggingService } from '../ActivityLoggingService';
import { supabase } from '../../lib/supabase';
import { useGamificationStore } from '../../stores/useGamificationStore';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
    },
    from: vi.fn(),
    rpc: vi.fn(),
  },
}));

describe('ActivityLoggingService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    useGamificationStore.getState().resetXP();
  });

  describe('calculateSpeakingXP', () => {
    it('awards 15 XP for conversations under 5 minutes', () => {
      const { xp, badge } = ActivityLoggingService.calculateSpeakingXP(180); // 3 mins
      expect(xp).toBe(15);
      expect(badge).toBeUndefined();
    });

    it('awards 35 XP for conversations between 5 and 10 minutes', () => {
      const { xp, badge } = ActivityLoggingService.calculateSpeakingXP(400); // 6.6 mins
      expect(xp).toBe(35);
      expect(badge).toBeUndefined();
    });

    it('awards 65 XP and Conversationalist badge for 10-20 minutes', () => {
      const { xp, badge } = ActivityLoggingService.calculateSpeakingXP(750); // 12.5 mins
      expect(xp).toBe(65);
      expect(badge).toBe('Conversationalist');
    });

    it('awards 100 XP and Speaking Marathoner badge for 20+ minutes', () => {
      const { xp, badge } = ActivityLoggingService.calculateSpeakingXP(1300); // 21.6 mins
      expect(xp).toBe(100);
      expect(badge).toBe('Speaking Marathoner');
    });

    it('adds +15 fluency bonus when fluency is >= 85', () => {
      const { xp } = ActivityLoggingService.calculateSpeakingXP(600, 90);
      expect(xp).toBe(65 + 15);
    });
  });

  describe('calculateFlashcardMilestoneXP', () => {
    it('awards +50 XP bonus and milestone badge for 100+ cards', () => {
      const { milestoneXp, badge } = ActivityLoggingService.calculateFlashcardMilestoneXP(100);
      expect(milestoneXp).toBe(50);
      expect(badge).toBe("100 So'z Zafari");
    });

    it('awards +50 XP bonus when a completed batch is flagged', () => {
      const { milestoneXp, badge } = ActivityLoggingService.calculateFlashcardMilestoneXP(80, true);
      expect(milestoneXp).toBe(50);
      expect(badge).toBe("100 So'z Zafari");
    });

    it('awards +25 XP bonus for 50-99 cards', () => {
      const { milestoneXp, badge } = ActivityLoggingService.calculateFlashcardMilestoneXP(55);
      expect(milestoneXp).toBe(25);
      expect(badge).toBe("So'z Bilimdoni");
    });

    it('awards +15 XP bonus for 25-49 cards', () => {
      const { milestoneXp } = ActivityLoggingService.calculateFlashcardMilestoneXP(30);
      expect(milestoneXp).toBe(15);
    });

    it('awards 0 bonus for less than 25 cards', () => {
      const { milestoneXp } = ActivityLoggingService.calculateFlashcardMilestoneXP(10);
      expect(milestoneXp).toBe(0);
    });
  });

  describe('logActivity & getActivities', () => {
    it('logs activity locally and awards XP to gamification store', async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const activity = await ActivityLoggingService.logActivity({
        activityType: 'flashcards',
        activityTitle: 'N5 Flashcard 1-qism',
        durationMinutes: 15,
        itemsCount: 100,
        xpEarned: 75,
      });

      expect(activity.id).toBeDefined();
      expect(activity.xpEarned).toBe(75);
      expect(useGamificationStore.getState().totalXp).toBe(75);

      const stored = await ActivityLoggingService.getActivities(null);
      expect(stored.length).toBe(1);
      expect(stored[0].activityTitle).toBe('N5 Flashcard 1-qism');
    });

    it('inserts activity into Supabase when authenticated', async () => {
      const mockInsert = vi.fn().mockResolvedValue({ error: null });
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: { user: { id: 'user-abc-123' } } },
        error: null,
      } as any);
      vi.mocked(supabase.from).mockReturnValue({ insert: mockInsert } as any);
      vi.mocked(supabase.rpc).mockResolvedValue({ data: null, error: null } as any);

      await ActivityLoggingService.logActivity({
        activityType: 'speaking',
        activityTitle: 'AI Coach Dialog',
        durationMinutes: 12,
        itemsCount: 1,
        xpEarned: 65,
      });

      expect(mockInsert).toHaveBeenCalledWith(
        expect.objectContaining({
          user_id: 'user-abc-123',
          activity_type: 'speaking',
          activity_title: 'AI Coach Dialog',
          duration_minutes: 12,
          xp_earned: 65,
        }),
      );
    });
  });

  describe('groupActivitiesByDay', () => {
    it('aggregates activities by date string and computes correct levels', () => {
      const activities = [
        {
          id: '1',
          activityType: 'flashcards' as const,
          activityTitle: 'N5 Part 1',
          durationMinutes: 20,
          itemsCount: 50,
          xpEarned: 50,
          activityDate: '2026-09-12',
          createdAt: '2026-09-12T10:00:00Z',
        },
        {
          id: '2',
          activityType: 'speaking' as const,
          activityTitle: 'Speaking Coach',
          durationMinutes: 15,
          itemsCount: 1,
          xpEarned: 65,
          activityDate: '2026-09-12',
          createdAt: '2026-09-12T12:00:00Z',
        },
      ];

      const grouped = ActivityLoggingService.groupActivitiesByDay(activities);
      const daySummary = grouped.get('2026-09-12');

      expect(daySummary).toBeDefined();
      expect(daySummary?.totalMinutes).toBe(35);
      expect(daySummary?.totalXp).toBe(115);
      expect(daySummary?.totalItems).toBe(51);
      expect(daySummary?.activities.length).toBe(2);
      expect(daySummary?.level).toBeGreaterThanOrEqual(3);
    });
  });
});
