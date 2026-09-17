import { supabase } from '../lib/supabase';
import { PushNotificationService } from './PushNotificationService';
import { isUuid } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { logger } from '../utils/logger';

export interface AdminAnnouncement {
  [key: string]: unknown;
  id: string;
  title: string;
  message: string;
  tag?: string;
  created_at: string;
  is_active?: boolean;
}

export interface UserNotificationItem {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type?: 'welcome' | 'admin' | 'promo' | 'system';
  is_read: boolean;
  created_at: string;
}

const LOCAL_NOTIFS_KEY = 'study_planner_local_notifications';
const GLOBAL_ANNOUNCEMENTS_KEY = 'study_planner_global_announcements';

export class UserNotificationService {
  /**
   * Welcome message is disabled per request.
   */
  static async checkAndSendWelcomeMessage(_userId: string): Promise<void> {
    // Disabled
  }

  /**
   * Sends a notification to a specific user (Used by Admin or System)
   */
  static async sendNotification(data: {
    user_id: string;
    title: string;
    message: string;
    type?: 'welcome' | 'admin' | 'promo' | 'system';
  }): Promise<boolean> {
    if (!data.user_id) return false;

    // 1. Always save to local storage (supports instant cross-tab / offline delivery)
    this.saveLocalNotification(data);

    // 2. Dispatch window custom event for instant UI update in current tab
    try {
      window.dispatchEvent(new CustomEvent('study_planner_new_notification', { detail: data }));
    } catch (e) {}

    // 3. Try inserting into Supabase cloud table
    try {
      const { error } = await supabase.from('user_notifications').insert({
        user_id: data.user_id,
        title: data.title,
        message: data.message,
        type: data.type || 'admin',
        is_read: false,
      });

      if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
        console.warn('Supabase notification insert info:', error.message);
      }
    } catch (e: any) {
      if (e?.message && !e.message.includes('Offline') && !e.message.includes('Network')) {
        console.warn('Supabase notification insert exception:', e);
      }
    }

    return true;
  }

  /**
   * Fetches unread notifications for a user (Combines Supabase & Local storage)
   */
  static async getUnreadNotifications(userId: string): Promise<UserNotificationItem[]> {
    if (!userId || !isUuid(userId)) return [];

    let remoteNotifs: UserNotificationItem[] = [];

    // Faqat onlayn bo'lganda serverga so'rov yuborish
    if (typeof navigator === 'undefined' || navigator.onLine) {
      try {
        const { data, error } = await supabase
          .from('user_notifications')
          .select('*')
          .eq('user_id', userId)
          .eq('is_read', false)
          .order('created_at', { ascending: false })
          .limit(50);

        if (!error && Array.isArray(data)) {
          remoteNotifs = data;
        }
      } catch (e) {}
    }

    // Get local storage unread notifications for this user
    const localList = this.getLocalNotifications(userId);
    const localNotifs = Array.isArray(localList) ? localList.filter((n) => n && !n.is_read) : [];

    // Merge and deduplicate by title + message or ID
    const combined: UserNotificationItem[] = Array.isArray(remoteNotifs) ? [...remoteNotifs] : [];
    for (const loc of localNotifs) {
      if (!loc) continue;
      const exists = combined.some(
        (r) => r.id === loc.id || (r.title === loc.title && r.message === loc.message),
      );
      if (!exists) {
        combined.push(loc);
      }
    }

    return combined.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  }

  /**
   * Marks a notification as read
   */
  static async markAsRead(notificationId: string, userId: string): Promise<void> {
    if (!notificationId || !userId) return;

    // Mark in Supabase if not a local-only ID
    if (!notificationId.startsWith('local_notif_')) {
      try {
        await supabase
          .from('user_notifications')
          .update({ is_read: true })
          .eq('id', notificationId);
      } catch (e) {}
    }

    // Mark in LocalStorage
    try {
      const list = safeLocalStorage.getJSON<UserNotificationItem[]>(LOCAL_NOTIFS_KEY, []);
      if (Array.isArray(list) && list.length > 0) {
        const updated = list.map((n) =>
          n.id === notificationId || (n.user_id === userId && !n.is_read)
            ? { ...n, is_read: true }
            : n,
        );
        safeLocalStorage.setJSON(LOCAL_NOTIFS_KEY, updated);
      }
    } catch (e) {
      logger.warn('UserNotificationService', 'Failed to mark notification as read in storage', e);
    }
  }

  private static getLocalNotifications(userId: string): UserNotificationItem[] {
    try {
      const list = safeLocalStorage.getJSON<UserNotificationItem[]>(LOCAL_NOTIFS_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter((n) => n && n.user_id === userId);
    } catch {
      return [];
    }
  }

  private static saveLocalNotification(data: {
    user_id: string;
    title: string;
    message: string;
    type?: UserNotificationItem['type'];
  }): void {
    try {
      const list = safeLocalStorage.getJSON<UserNotificationItem[]>(LOCAL_NOTIFS_KEY, []);

      const newItem: UserNotificationItem = {
        id: `local_notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        user_id: data.user_id,
        title: data.title,
        message: data.message,
        type: data.type || 'admin',
        is_read: false,
        created_at: new Date().toISOString(),
      };

      list.unshift(newItem);
      // Keep at most 50 recent local notifications
      const trimmed = list.slice(0, 50);
      safeLocalStorage.setJSON(LOCAL_NOTIFS_KEY, trimmed);
    } catch (e) {
      logger.warn('UserNotificationService', 'Failed to save local notification', e);
    }
  }

  /**
   * Broadcasts a global announcement to all users (Admin only feature)
   */
  static async sendGlobalBroadcastAnnouncement(data: {
    title: string;
    message: string;
    tag?: string;
  }): Promise<boolean> {
    try {
      const announcement: AdminAnnouncement = {
        id: `broadcast_${Date.now()}`,
        title: data.title,
        message: data.message,
        tag: data.tag || 'general',
        created_at: new Date().toISOString(),
        is_active: true,
      };

      // Save to Supabase DB
      await supabase.from('admin_announcements').upsert(announcement as Record<string, unknown>);

      // Save to local storage for instant broadcast render
      const list = safeLocalStorage.getJSON<AdminAnnouncement[]>(GLOBAL_ANNOUNCEMENTS_KEY, []);
      list.unshift(announcement);
      safeLocalStorage.setJSON(GLOBAL_ANNOUNCEMENTS_KEY, list.slice(0, 20));

      // Trigger web push notification
      PushNotificationService.sendNotification(`📢 ${data.title}`, {
        body: data.message,
        tag: 'global_broadcast',
      });

      return true;
    } catch (err) {
      logger.error('UserNotificationService', 'Global broadcast error', err);
      return false;
    }
  }

  /**
   * Retrieves active global announcements
   */
  static async getActiveBroadcastAnnouncements(): Promise<
    Array<{ id: string; title: string; message: string; tag?: string; created_at: string }>
  > {
    try {
      const { data, error } = await supabase
        .from('admin_announcements')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(5);

      if (!error && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      logger.warn('UserNotificationService', 'Failed to fetch broadcast announcements from DB', e);
    }

    // Fallback to local storage
    try {
      const list = safeLocalStorage.getJSON<AdminAnnouncement[]>(GLOBAL_ANNOUNCEMENTS_KEY, []);
      if (Array.isArray(list)) return list;
    } catch (e) {
      logger.warn(
        'UserNotificationService',
        'Failed to fetch broadcast announcements from local cache',
        e,
      );
    }

    return [];
  }
}
