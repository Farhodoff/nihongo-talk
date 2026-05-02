import { supabase } from '../lib/supabase';
import { Task } from '../types';
import { dbOps } from '../utils/db';
import { GoogleCalendarService } from './GoogleCalendarService';

export const TaskService = {
    async fetchTasks(userId: string): Promise<Task[]> {
        try {
            const { data, error } = await supabase
                .from('tasks')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (!data) return [];

            const tasks = (data as any[]).map(t => ({
                ...t,
                subjectId: t.subject_id,
                goalId: t.goal_id,
                dueDate: t.due_date,
                deadline: t.due_date,
                createdAt: t.created_at,
                googleEventId: t.google_event_id
            })) as Task[];

            // Lokal bazani yangilash
            await dbOps.clear('tasks');
            await dbOps.putAll('tasks', tasks);

            return tasks;
        } catch (error) {
            console.error('Fetch tasks error, falling back to local:', error);
            return await dbOps.getAll('tasks') as Task[];
        }
    },

    async addTask(userId: string, taskData: Partial<Task>): Promise<Task | null> {
        const tempId = taskData.id || `temp-${Date.now()}`;
        const dbTask: any = {
            user_id: userId,
            title: taskData.title,
            status: taskData.status,
            priority: taskData.priority,
            completed: taskData.completed,
            due_date: taskData.deadline || taskData.dueDate,
            goal_id: taskData.goalId,
            subject_id: taskData.subjectId
        };

        // 1. Google Calendar Integration
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.provider_token && (taskData.dueDate || taskData.deadline)) {
            const googleEventId = await GoogleCalendarService.createEvent(session.provider_token, taskData);
            if (googleEventId) {
                dbTask.google_event_id = googleEventId;
            }
        }

        // 2. Lokal bazaga yozish
        const localTask = { ...taskData, id: tempId, userId, createdAt: new Date().toISOString(), googleEventId: dbTask.google_event_id } as Task;
        await dbOps.put('tasks', localTask);

        try {
            const { data, error } = await supabase
                .from('tasks')
                .insert(dbTask)
                .select()
                .single();

            if (error) throw error;
            
            const newTask = {
                ...data,
                subjectId: data.subject_id,
                goalId: data.goal_id,
                dueDate: data.due_date,
                deadline: data.due_date,
                createdAt: data.created_at,
                googleEventId: data.google_event_id
            } as any;

            // Lokal bazani yangi ID bilan yangilash
            await dbOps.delete('tasks', tempId);
            await dbOps.put('tasks', newTask);

            return newTask;
        } catch (error) {
            console.error('Add task error, queued for sync:', error);
            await dbOps.addToQueue('CREATE', 'tasks', dbTask);
            return localTask;
        }
    },

    async updateTask(id: string, updates: Partial<Task>): Promise<void> {
        // 1. Lokal yangilash
        const localTasks = await dbOps.getAll('tasks') as Task[];
        const task = localTasks.find(t => t.id === id);
        if (task) {
            const updatedTask = { ...task, ...updates };
            await dbOps.put('tasks', updatedTask);

            // Google Calendar Sync
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.provider_token && task.googleEventId) {
                await GoogleCalendarService.updateEvent(session.provider_token, task.googleEventId, updates);
            }
        }

        try {
            const dbUpdates: any = {};
            if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
            if (updates.goalId) dbUpdates.goal_id = updates.goalId;
            if (updates.dueDate) dbUpdates.due_date = updates.dueDate;
            if (updates.deadline) dbUpdates.due_date = updates.deadline;
            if (updates.title) dbUpdates.title = updates.title;
            if (updates.status) dbUpdates.status = updates.status;
            if (updates.priority) dbUpdates.priority = updates.priority;
            if (updates.completed !== undefined) dbUpdates.completed = updates.completed;

            const { error } = await supabase.from('tasks').update(dbUpdates).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Update task error, queued for sync:', error);
            await dbOps.addToQueue('UPDATE', 'tasks', { id, updates });
        }
    },

    async updateTaskStatus(id: string, status: string, completed: boolean): Promise<void> {
        await this.updateTask(id, { status: status as any, completed });
    },

    async deleteTask(id: string): Promise<void> {
        // 1. Lokal o'chirish
        const localTasks = await dbOps.getAll('tasks') as Task[];
        const task = localTasks.find(t => t.id === id);
        await dbOps.delete('tasks', id);

        // Google Calendar Sync
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.provider_token && task?.googleEventId) {
            await GoogleCalendarService.deleteEvent(session.provider_token, task.googleEventId);
        }

        try {
            const { error } = await supabase.from('tasks').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Delete task error, queued for sync:', error);
            await dbOps.addToQueue('DELETE', 'tasks', { id });
        }
    }
};
