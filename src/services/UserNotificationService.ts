import { supabase } from '../lib/supabase';
import NotificationManager from './NotificationManager';

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
            // Send in-app notification
            await this.sendNotification({
                user_id: userId,
                title,
                message,
                type: 'welcome'
            });

            // Trigger browser native notification if permitted
            NotificationManager.sendNotification(title, {
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
                console.warn('Supabase notification insert warning, caching locally:', error.message);
                this.saveLocalNotification(data);
            }
            return true;
        } catch (e) {
            this.saveLocalNotification(data);
            return true;
        }
    }

    /**
     * Fetches unread notifications for a user
     */
    static async getUnreadNotifications(userId: string): Promise<UserNotificationItem[]> {
        if (!userId) return [];

        try {
            const { data, error } = await supabase
                .from('user_notifications')
                .select('*')
                .eq('user_id', userId)
                .eq('is_read', false)
                .order('created_at', { ascending: false });

            if (!error && data && data.length > 0) {
                return data;
            }
        } catch (e) {}

        // Fallback to local storage notifications
        const local = this.getLocalNotifications(userId).filter(n => !n.is_read);
        return local;
    }

    /**
     * Marks a notification as read
     */
    static async markAsRead(notificationId: string, userId: string): Promise<void> {
        try {
            await supabase
                .from('user_notifications')
                .update({ is_read: true })
                .eq('id', notificationId);
        } catch (e) {}

        // Update local storage state
        const local = this.getLocalNotifications(userId).map(n => 
            n.id === notificationId ? { ...n, is_read: true } : n
        );
        localStorage.setItem(LOCAL_NOTIFS_KEY, JSON.stringify(local));
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
            const list = this.getLocalNotifications(data.user_id);
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
            localStorage.setItem(LOCAL_NOTIFS_KEY, JSON.stringify(list));
        } catch {}
    }
}
