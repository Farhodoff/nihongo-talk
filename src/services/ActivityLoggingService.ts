import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { useGamificationStore } from '../stores/useGamificationStore';
import { generateUUID } from '../utils/uuid';
import { format } from 'date-fns';

export type ActivityType = 'flashcards' | 'speaking' | 'focus' | 'lesson' | 'quiz' | 'exam';

export interface UserLearningActivity {
  id: string;
  userId?: string;
  activityType: ActivityType;
  activityTitle: string;
  durationMinutes: number;
  itemsCount: number;
  xpEarned: number;
  metadata?: Record<string, any>;
  activityDate: string; // YYYY-MM-DD
  createdAt: string; // ISO string
}

export interface ActivityDaySummary {
  dateStr: string;
  totalMinutes: number;
  totalXp: number;
  totalItems: number;
  activities: UserLearningActivity[];
  level: number; // 0..4 for heatmap
}

const STORAGE_PREFIX = 'nihongo_user_activities';

function getStorageKey(userId?: string | null): string {
  return `${STORAGE_PREFIX}:${userId || 'anon'}`;
}

export class ActivityLoggingService {
  /**
   * Calculate calibrated XP for Speaking Coach based on duration and optional fluency.
   * - < 5 minutes (< 300s): 15 XP
   * - 5 - 10 minutes (300-600s): 35 XP
   * - 10 - 20 minutes (600-1200s): 65 XP
   * - 20+ minutes (>= 1200s): 100 XP
   * - Fluency bonus: +15 XP if fluencyScore >= 85
   */
  static calculateSpeakingXP(
    durationSeconds: number,
    fluencyScore?: number,
  ): {
    xp: number;
    badge?: string;
  } {
    let xp = 15;
    let badge: string | undefined = undefined;

    if (durationSeconds >= 1200) {
      xp = 100;
      badge = 'Speaking Marathoner';
    } else if (durationSeconds >= 600) {
      xp = 65;
      badge = 'Conversationalist';
    } else if (durationSeconds >= 300) {
      xp = 35;
    } else {
      xp = 15;
    }

    if (fluencyScore && fluencyScore >= 85) {
      xp += 15;
    }

    return { xp, badge };
  }

  /**
   * Calculate milestone XP for Flashcards:
   * e.g., completing 100-card batch grants +50 XP bonus as requested.
   */
  static calculateFlashcardMilestoneXP(
    reviewedCount: number,
    isCompletedBatch: boolean = false,
  ): {
    milestoneXp: number;
    badge?: string;
  } {
    if (reviewedCount >= 100 || isCompletedBatch) {
      return { milestoneXp: 50, badge: "100 So'z Zafari" };
    } else if (reviewedCount >= 50) {
      return { milestoneXp: 25, badge: "So'z Bilimdoni" };
    } else if (reviewedCount >= 25) {
      return { milestoneXp: 15 };
    }
    return { milestoneXp: 0 };
  }

  /**
   * Log an activity to Supabase, localStorage, and update Gamification store.
   */
  static async logActivity(
    activityInput: Omit<UserLearningActivity, 'id' | 'createdAt' | 'activityDate'> & {
      id?: string;
      createdAt?: string;
      activityDate?: string;
    },
  ): Promise<UserLearningActivity> {
    let userId: string | null = null;
    try {
      const sessionRes = await supabase.auth.getSession();
      userId = sessionRes?.data?.session?.user?.id || null;
    } catch {
      // Offline or guest
    }

    const now = new Date();
    const id = activityInput.id || generateUUID();
    const createdAt = activityInput.createdAt || now.toISOString();
    const activityDate = activityInput.activityDate || format(now, 'yyyy-MM-dd');

    const activity: UserLearningActivity = {
      id,
      userId: userId || undefined,
      activityType: activityInput.activityType,
      activityTitle: activityInput.activityTitle,
      durationMinutes: Math.max(0, activityInput.durationMinutes),
      itemsCount: Math.max(0, activityInput.itemsCount),
      xpEarned: Math.max(0, activityInput.xpEarned),
      metadata: activityInput.metadata || {},
      activityDate,
      createdAt,
    };

    // 1. Award XP to gamification store in real-time
    if (activity.xpEarned > 0) {
      try {
        useGamificationStore.getState().awardXP(activity.xpEarned);
      } catch (e) {
        console.warn('[ActivityLoggingService] awardXP store warning:', e);
      }
    }

    // 2. Save locally
    this.saveToLocalCache(activity, userId);

    // 3. Persist to Supabase if authenticated
    if (userId && userId !== 'guest' && userId !== 'anon') {
      try {
        const { error } = await supabase.from('user_learning_activities').insert({
          id: activity.id,
          user_id: userId,
          activity_type: activity.activityType,
          activity_title: activity.activityTitle,
          duration_minutes: activity.durationMinutes,
          items_count: activity.itemsCount,
          xp_earned: activity.xpEarned,
          metadata: activity.metadata,
          activity_date: activity.activityDate,
          created_at: activity.createdAt,
        });

        if (error) {
          console.warn('[ActivityLoggingService] Supabase insert warning:', error.message);
        } else if (activity.xpEarned > 0) {
          // Attempt atomic increment if function exists
          try {
            await supabase.rpc('increment_user_xp', {
              user_uuid: userId,
              xp_to_add: activity.xpEarned,
            });
          } catch {
            // Non-critical fallback
          }
        }
      } catch (err) {
        console.warn('[ActivityLoggingService] Supabase network error:', err);
      }
    }

    return activity;
  }

  /**
   * Fetch user activities from Supabase with local cache fallback and legacy synthesis.
   */
  static async getActivities(explicitUserId?: string | null): Promise<UserLearningActivity[]> {
    let userId = explicitUserId;
    if (userId === undefined) {
      try {
        const sessionRes = await supabase.auth.getSession();
        userId = sessionRes?.data?.session?.user?.id || null;
      } catch {
        userId = null;
      }
    }

    const localList = this.getLocalCache(userId);

    if (!userId || userId === 'guest' || userId === 'anon') {
      return localList;
    }

    try {
      const { data, error } = await supabase
        .from('user_learning_activities')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1000);

      if (error) {
        console.warn('[ActivityLoggingService] getActivities warning:', error.message);
        return localList;
      }

      if (data && Array.isArray(data)) {
        const serverActivities: UserLearningActivity[] = data.map((row: any) => ({
          id: row.id,
          userId: row.user_id,
          activityType: row.activity_type as ActivityType,
          activityTitle: row.activity_title,
          durationMinutes: row.duration_minutes || 0,
          itemsCount: row.items_count || 0,
          xpEarned: row.xp_earned || 0,
          metadata: row.metadata || {},
          activityDate: row.activity_date || format(new Date(row.created_at), 'yyyy-MM-dd'),
          createdAt: row.created_at,
        }));

        // Merge server and local without duplicates
        const map = new Map<string, UserLearningActivity>();
        serverActivities.forEach((a) => map.set(a.id, a));
        localList.forEach((a) => {
          if (!map.has(a.id)) {
            map.set(a.id, a);
          }
        });

        const merged = Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        // Update local cache
        try {
          if (typeof window !== 'undefined') {
            safeLocalStorage.setItem(getStorageKey(userId), JSON.stringify(merged.slice(0, 500)));
          }
        } catch {}

        return merged;
      }
    } catch (err) {
      console.warn('[ActivityLoggingService] fetch activities error:', err);
    }

    return localList;
  }

  /**
   * Group activities by date string (YYYY-MM-DD).
   */
  static groupActivitiesByDay(activities: UserLearningActivity[]): Map<string, ActivityDaySummary> {
    const map = new Map<string, ActivityDaySummary>();

    activities.forEach((act) => {
      const dateKey = act.activityDate || format(new Date(act.createdAt), 'yyyy-MM-dd');
      let summary = map.get(dateKey);
      if (!summary) {
        summary = {
          dateStr: dateKey,
          totalMinutes: 0,
          totalXp: 0,
          totalItems: 0,
          activities: [],
          level: 0,
        };
        map.set(dateKey, summary);
      }

      summary.totalMinutes += act.durationMinutes;
      summary.totalXp += act.xpEarned;
      summary.totalItems += act.itemsCount;
      summary.activities.push(act);
    });

    // Compute GitHub heatmap level 0..4 based on combined minutes + items + XP
    map.forEach((summary) => {
      const score = summary.totalMinutes + Math.round(summary.totalXp / 2) + summary.totalItems * 2;
      if (score === 0) {
        summary.level = 0;
      } else if (score < 25) {
        summary.level = 1;
      } else if (score < 60) {
        summary.level = 2;
      } else if (score < 120) {
        summary.level = 3;
      } else {
        summary.level = 4;
      }
    });

    return map;
  }

  /**
   * Get activities for a specific day string.
   */
  static getActivitiesForDay(
    dateStr: string,
    allActivities: UserLearningActivity[],
  ): UserLearningActivity[] {
    return allActivities.filter(
      (a) => a.activityDate === dateStr || a.createdAt.startsWith(dateStr),
    );
  }

  // Local storage helpers
  private static getLocalCache(userId?: string | null): UserLearningActivity[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = safeLocalStorage.getItem(getStorageKey(userId));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return [];
  }

  private static saveToLocalCache(activity: UserLearningActivity, userId?: string | null): void {
    if (typeof window === 'undefined') return;
    try {
      const current = this.getLocalCache(userId);
      const existsIdx = current.findIndex((a) => a.id === activity.id);
      if (existsIdx >= 0) {
        current[existsIdx] = activity;
      } else {
        current.unshift(activity);
      }
      safeLocalStorage.setItem(getStorageKey(userId), JSON.stringify(current.slice(0, 500)));
    } catch {}
  }
}
