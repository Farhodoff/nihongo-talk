import { Event } from '../types';
import { subMinutes, isBefore, isEqual, isAfter, format } from 'date-fns';

export class NotificationManager {
    private static instance: NotificationManager;
    private checkInterval: number | null = null;

    private constructor() { }

    static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    async requestPermission(): Promise<boolean> {
        if (!('Notification' in window)) {
            console.warn('Bu brauzerda bildirishnomalar qo\'llab-quvvatlanmaydi');
            return false;
        }

        if (Notification.permission === 'granted') {
            return true;
        }

        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        }

        return false;
    }

    sendNotification(title: string, options?: NotificationOptions) {
        if (Notification.permission === 'granted') {
            new Notification(title, {
                icon: '/favicon.svg',
                badge: '/favicon.svg',
                ...options
            });
        }
    }

    startMonitoring(events: Event[], updateEventCallback: (id: string) => void) {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }

        // Check every 60 seconds
        this.checkInterval = window.setInterval(() => {
            this.checkEvents(events, updateEventCallback);
        }, 60000);

        // Initial check
        this.checkEvents(events, updateEventCallback);
    }

    private checkEvents(events: Event[], updateEventCallback: (id: string) => void) {
        const now = new Date();

        events.forEach(event => {
            if (event.isNotified) return;

            const eventTime = new Date(event.eventDate);
            const notifyTime = subMinutes(eventTime, event.notifyBeforeMinutes);

            // Check if we should notify (now is same or after notifyTime AND now is before eventTime)
            if ((isEqual(now, notifyTime) || isAfter(now, notifyTime)) && isBefore(now, eventTime)) {
                this.sendNotification(event.title, {
                    body: `${event.description || ''}\n${format(eventTime, 'HH:mm')} da boshlanadi`,
                    tag: event.id,
                    requireInteraction: event.notifyBeforeMinutes >= 60
                });

                // Mark as notified
                updateEventCallback(event.id);
            }
        });
    }

    stopMonitoring() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    }
}

export default NotificationManager.getInstance();
