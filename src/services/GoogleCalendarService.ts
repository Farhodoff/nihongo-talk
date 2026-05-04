import { Task, Event } from '../types';

export const GoogleCalendarService = {
    /**
     * Google API orqali kalendarga yangi tadbir qo'shish
     */
    async createEvent(accessToken: string, item: Partial<Task> | Partial<Event>): Promise<string | null> {
        try {
            const title = item.title || (item as any).name || 'Sarlavhasiz';
            const description = (item as any).description || 'Study Planner orqali yaratilgan';
            
            // Task uchun dueDate, Event uchun eventDate ishlatiladi
            const date = (item as any).dueDate || (item as any).eventDate || (item as any).date;

            if (!date) return null;

            const event = {
                'summary': title,
                'description': description,
                'start': {
                    'dateTime': new Date(date).toISOString(),
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                'end': {
                    'dateTime': new Date(new Date(date).getTime() + 3600000).toISOString(), // +1 soat default
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                }
            };

            const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            });

            const data = await response.json();
            if (data.id) {
                console.log('Google Calendar tadbiri yaratildi:', data.id);
                return data.id;
            }
            return null;
        } catch (error) {
            console.error('Google Calendar Error:', error);
            return null;
        }
    },

    /**
     * Mavjud tadbirni yangilash
     */
    async updateEvent(accessToken: string, eventId: string, updates: Partial<Task> | Partial<Event>): Promise<boolean> {
        try {
            const title = updates.title || (updates as any).name;
            const date = (updates as any).dueDate || (updates as any).eventDate || (updates as any).date;

            const event: any = {};
            if (title) event.summary = title;
            if ((updates as any).description) event.description = (updates as any).description;
            if (date) {
                event.start = { 'dateTime': new Date(date).toISOString(), 'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone };
                event.end = { 'dateTime': new Date(new Date(date).getTime() + 3600000).toISOString(), 'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone };
            }

            const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            });

            return response.ok;
        } catch (error) {
            console.error('Google Calendar Update Error:', error);
            return false;
        }
    },

    /**
     * Tadbirni o'chirish
     */
    async deleteEvent(accessToken: string, eventId: string): Promise<boolean> {
        try {
            const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            return response.ok;
        } catch (error) {
            console.error('Google Calendar Delete Error:', error);
            return false;
        }
    }
};
