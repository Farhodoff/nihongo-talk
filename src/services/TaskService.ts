import { supabase } from '../lib/supabase';
import { Task, TaskStatus, Priority } from '../types';
import { DatabaseTask, DatabaseTaskUpdate } from '../types/supabase-types';
import { GoogleCalendarService } from './GoogleCalendarService';

export const TaskService = {
    async fetchTasks(userId: string): Promise<Task[]> {
        try {
            let { data, error } = await supabase
                .from('tasks')
                .select('*')
                .eq('user_id', userId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false });

            if (error && (error.code === '42703' || error.message?.includes('deleted_at'))) {
                const retry = await supabase
                    .from('tasks')
                    .select('*')
                    .eq('user_id', userId)
                    .order('created_at', { ascending: false });
                data = retry.data;
                error = retry.error;
            }

            if (error) throw error;
            if (!data) return [];

            const tasks = (data as DatabaseTask[]).map(t => ({
                id: t.id,
                title: t.title,
                completed: t.completed,
                status: t.status as TaskStatus,
                priority: t.priority as Priority,
                subjectId: t.subject_id,
                goalId: t.goal_id,
                dueDate: t.due_date,
                deadline: t.due_date,
                createdAt: t.created_at,
                googleEventId: t.google_event_id,
                deletedAt: t.deleted_at || undefined
            })) as Task[];

            

            return tasks;
        } catch (error) {
            console.error('Fetch tasks error:', error);
            throw error;
        }
    },

    async addTask(userId: string, taskData: Partial<Task>): Promise<Task | null> {
        
        const dbTask: Omit<DatabaseTask, 'id' | 'created_at'> & { id?: string } = {
            user_id: userId,
            title: taskData.title || '',
            status: taskData.status || 'todo',
            priority: taskData.priority || 'medium',
            completed: !!taskData.completed,
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

        

        try {
            const { data, error } = await supabase
                .from('tasks')
                .insert(dbTask)
                .select()
                .single();

            if (error) throw error;
            
            const returnedData = data as DatabaseTask;
            const newTask: Task = {
                id: returnedData.id,
                title: returnedData.title,
                completed: returnedData.completed,
                status: returnedData.status as TaskStatus,
                priority: returnedData.priority as Priority,
                goalId: returnedData.goal_id,
                subjectId: returnedData.subject_id,
                dueDate: returnedData.due_date,
                deadline: returnedData.due_date,
                createdAt: returnedData.created_at,
                googleEventId: returnedData.google_event_id,
                deletedAt: returnedData.deleted_at || undefined
            };

            

            return newTask;
        } catch (error) {
            console.error('Add task error:', error);
            throw error;
        }
    },

    async updateTask(id: string, updates: Partial<Task>): Promise<void> {
        try {
            const { data: taskData } = await supabase.from('tasks').select('google_event_id').eq('id', id).maybeSingle();
            if (taskData?.google_event_id) {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.provider_token) {
                    await GoogleCalendarService.updateEvent(session.provider_token, taskData.google_event_id, updates).catch(() => {});
                }
            }
        } catch {
            // Ignore optional google_event_id query failures in offline/anonymous mode
        }

        try {
            const dbUpdates: DatabaseTaskUpdate = {};
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
            console.error('Update task error:', error);
            throw error;
        }
    },

    async updateTaskStatus(id: string, status: string, completed: boolean): Promise<void> {
        await this.updateTask(id, { status: status as TaskStatus, completed });
    },

    async deleteTask(id: string, permanent = false): Promise<void> {
        let googleEventId: string | null = null;
        try {
            const { data: taskData } = await supabase.from('tasks').select('google_event_id').eq('id', id).maybeSingle();
            googleEventId = taskData?.google_event_id || null;
        } catch {
            // Ignore optional google_event_id fetch error
        }

        if (permanent) {
            // Google Calendar Sync
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.provider_token && googleEventId) {
                await GoogleCalendarService.deleteEvent(session.provider_token, googleEventId).catch(() => {});
            }

            try {
                const { error } = await supabase.from('tasks').delete().eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Delete task error:', error);
                throw error;
            }
        } else {
            

            try {
                const { error } = await supabase.from('tasks').update({ deleted_at: new Date().toISOString() }).eq('id', id);
                if (error) throw error;
            } catch (error) {
                console.error('Soft delete task error:', error);
                throw error;
            }
        }
    },

    async restoreTask(id: string): Promise<void> {
        

        try {
            const { error } = await supabase.from('tasks').update({ deleted_at: null }).eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Restore task error:', error);
            throw error;
        }
    }
};
