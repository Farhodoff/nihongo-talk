export class PushNotificationService {
    /**
     * Checks if Notifications API is supported in current browser/device
     */
    public static isSupported(): boolean {
        return typeof window !== 'undefined' && 'Notification' in window;
    }

    /**
     * Gets current notification permission status ('granted', 'denied', 'default')
     */
    public static getPermission(): NotificationPermission {
        if (!this.isSupported()) return 'denied';
        return Notification.permission;
    }

    /**
     * Requests push notification permission from the user
     */
    public static async requestPermission(): Promise<NotificationPermission> {
        if (!this.isSupported()) return 'denied';
        try {
            const permission = await Notification.requestPermission();
            return permission;
        } catch (e) {
            console.error('Notification permission request error:', e);
            return 'denied';
        }
    }

    /**
     * Triggers a live Push Notification immediately
     */
    public static sendNotification(title: string, options?: NotificationOptions): boolean {
        if (!this.isSupported() || this.getPermission() !== 'granted') {
            console.warn('Notifications not granted or supported.');
            return false;
        }

        try {
            const notification = new Notification(title, {
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-192x192.png',
                ...options
            });

            notification.onclick = () => {
                window.focus();
                notification.close();
            };

            return true;
        } catch (e) {
            console.error('Error triggering notification:', e);
            return false;
        }
    }

    /**
     * Triggers a Test Notification for user verification
     */
    public static sendTestNotification(): boolean {
        return this.sendNotification("Study Planner 🔔 Test Bildirishnomasi", {
            body: "Tabriklaymiz! Mobil va brauzer bildirishnomalari muvaffaqiyatli ulindi. 🔥",
            tag: 'test-notification'
        });
    }

    /**
     * Sends Daily Streak Reminder (e.g. at 19:00)
     */
    public static sendStreakReminder(streakDays: number): boolean {
        return this.sendNotification("Kunlik O'quv Zanjiri (Streak) 🔥", {
            body: `Sizning joriy zanjiringiz: ${streakDays} kun! Bugungi darslaringizni bajarib zanjirni uzmang! 📚`,
            tag: 'streak-reminder'
        });
    }

    /**
     * Sends Upcoming Task Reminder
     */
    public static sendTaskReminder(taskTitle: string, minutesLeft: number = 15): boolean {
        return this.sendNotification("⚠️ Yaqinlashayotgan Dars Eslatmasi", {
            body: `"${taskTitle}" topshirig'i boshlanishiga ${minutesLeft} daqiqa qoldi!`,
            tag: 'task-reminder'
        });
    }
}
