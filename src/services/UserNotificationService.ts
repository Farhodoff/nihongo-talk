import { supabase } from '../lib/supabase';
import { PushNotificationService } from './PushNotificationService';

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

export class UserNotificationService {
    /**
     * Ensures an automatic welcome message is sent to a newly registered/first-time user.
     */
    static async checkAndSendWelcomeMessage(userId: string): Promise<void> {
        if (!userId) return;

        const welcomeKey = `study_planner_welcome_sent_${userId}`;
        if (localStorage.getItem(welcomeKey)) return;

        const title = '🎉 Study Planner AI ga xush kelibsiz!';
        const message = `Assalomu alaykum! Platformamizga muvaffaqiyatli ro'yxatdan o'tdingiz.\n\n` +
            `O'quv samaradorligingizni oshirish uchun IELTS & JLPT Hub, AI Speaking Coach hamda Kunlik dars rejalashtirgichini sinab ko'ring. Savollaringiz bo'lsa, AI Yordamchi har doim xizmatda! 🚀`;

        try {
            await this.sendNotification({
                user_id: userId,
                title,
                message,
                type: 'welcome'
            });

            PushNotificationService.sendNotification(title, {
                body: "Platformadan unumli foydalanishingiz uchun qo'llanma tayyor!",
                tag: 'welcome_notice'
            });

            localStorage.setItem(welcomeKey, 'true');
        } catch (e) {
            console.warn('Welcome notification error:', e);
        }
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
            const { error } = await supabase
                .from('user_notifications')
                .insert({
                    user_id: data.user_id,
                    title: data.title,
                    message: data.message,
                    type: data.type || 'admin',
                    is_read: false
                });

            if (error) {
                console.warn('Supabase notification insert info (using local fallback):', error.message);
            }
        } catch (e) {
            console.warn('Supabase notification insert exception (using local fallback):', e);
        }

        return true;
    }

    /**
     * Fetches unread notifications for a user (Combines Supabase & Local storage)
     */
    static async getUnreadNotifications(userId: string): Promise<UserNotificationItem[]> {
        if (!userId) return [];

        let remoteNotifs: UserNotificationItem[] = [];

        // Faqat onlayn bo'lganda serverga so'rov yuborish (network xatoliklarini kamaytirish)
        if (typeof navigator === 'undefined' || navigator.onLine) {
            try {
                const { data, error } = await supabase
                    .from('user_notifications')
                    .select('*')
                    .eq('user_id', userId)
                    .eq('is_read', false)
                    .order('created_at', { ascending: false });

                if (!error && data) {
                    remoteNotifs = data;
                }
            } catch (e) {}
        }

        // Get local storage unread notifications for this user
        const localNotifs = this.getLocalNotifications(userId).filter(n => !n.is_read);

        // Merge and deduplicate by title + message or ID
        const combined = [...remoteNotifs];
        for (const loc of localNotifs) {
            const exists = combined.some(r => r.id === loc.id || (r.title === loc.title && r.message === loc.message));
            if (!exists) {
                combined.push(loc);
            }
        }

        return combined.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
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
            const raw = localStorage.getItem(LOCAL_NOTIFS_KEY);
            if (raw) {
                const list: UserNotificationItem[] = JSON.parse(raw);
                const updated = list.map(n => 
                    (n.id === notificationId || (n.user_id === userId && !n.is_read))
                        ? { ...n, is_read: true }
                        : n
                );
                localStorage.setItem(LOCAL_NOTIFS_KEY, JSON.stringify(updated));
            }
        } catch (e) {}
    }

    private static getLocalNotifications(userId: string): UserNotificationItem[] {
        try {
            const raw = localStorage.getItem(LOCAL_NOTIFS_KEY);
            if (!raw) return [];
            const list: UserNotificationItem[] = JSON.parse(raw);
            return list.filter(n => n.user_id === userId);
        } catch {
            return [];
        }
    }

    private static saveLocalNotification(data: { user_id: string; title: string; message: string; type?: any }): void {
        try {
            const raw = localStorage.getItem(LOCAL_NOTIFS_KEY);
            const list: UserNotificationItem[] = raw ? JSON.parse(raw) : [];

            const newItem: UserNotificationItem = {
                id: `local_notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
                user_id: data.user_id,
                title: data.title,
                message: data.message,
                type: data.type || 'admin',
                is_read: false,
                created_at: new Date().toISOString()
            };

            list.unshift(newItem);
            // Keep at most 50 recent local notifications
            const trimmed = list.slice(0, 50);
            localStorage.setItem(LOCAL_NOTIFS_KEY, JSON.stringify(trimmed));
        } catch (e) {}
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
            const announcement = {
                id: `broadcast_${Date.now()}`,
                title: data.title,
                message: data.message,
                tag: data.tag || 'general',
                created_at: new Date().toISOString(),
                is_active: true
            };

            // Save to Supabase DB
            await supabase.from('admin_announcements').upsert(announcement as any);

            // Save to local storage for instant broadcast render
            const raw = localStorage.getItem('study_planner_global_announcements');
            const list = raw ? JSON.parse(raw) : [];
            list.unshift(announcement);
            localStorage.setItem('study_planner_global_announcements', JSON.stringify(list.slice(0, 20)));

            // Trigger web push notification
            PushNotificationService.sendNotification(`📢 ${data.title}`, {
                body: data.message,
                tag: 'global_broadcast'
            });

            return true;
        } catch (err) {
            console.error("Global broadcast error:", err);
            return false;
        }
    }

    /**
     * Retrieves active global announcements
     */
    static async getActiveBroadcastAnnouncements(): Promise<Array<{ id: string; title: string; message: string; tag?: string; created_at: string }>> {
        try {
            const { data, error } = await supabase
                .from('admin_announcements')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(5);

            if (!error && data && data.length > 0) {
                return data;
            }
        } catch (e) {}

        // Fallback to local storage
        try {
            const raw = localStorage.getItem('study_planner_global_announcements');
            if (raw) return JSON.parse(raw);
        } catch (e) {}

        return [];
    }
}

