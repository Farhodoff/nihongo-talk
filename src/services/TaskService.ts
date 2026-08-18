import { supabase } from '../lib/supabase';
import { Task, TaskStatus, Priority } from '../types';
import { DatabaseTask, DatabaseTaskUpdate } from '../types/supabase-types';
import { GoogleCalendarService } from './GoogleCalendarService';
import { isUuid, generateUUID } from '../utils/uuid';

const sanitizeSubjectId = (id?: string | null): string | null => {
    if (!id) return null;
    if (isUuid(id)) return id;
    if (id === 'sub_jlpt_master') return '00000000-0000-4000-8000-000000000001';
    if (id === 'sub_ielts_master') return '00000000-0000-4000-8000-000000000002';
    if (id === 'sub_it_programming') return '00000000-0000-4000-8000-000000000003';
    if (id === 'sub_general_notes') return '00000000-0000-4000-8000-000000000004';
    return null;
};

export const TaskService = {
    async fetchTasks(userId: string): Promise<Task[]> {
        if (!userId || !isUuid(userId)) {
            try {
                const local = localStorage.getItem('study_planner_tasks');
                if (local) {
                    const parsed = JSON.parse(local);
                    if (Array.isArray(parsed)) return parsed;
                }
            } catch (e) {}
            return [];
        }

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

            const dbTasks = (data || []).map(t => ({
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

            // Merge with local tasks so newly created or offline tasks are never lost
            let localTasks: Task[] = [];
            try {
                const local = localStorage.getItem('study_planner_tasks');
                if (local) {
                    const parsed = JSON.parse(local);
                    if (Array.isArray(parsed)) localTasks = parsed;
                }
            } catch {}

            const dbTaskIds = new Set(dbTasks.map(t => t.id));
            const missingLocalTasks = localTasks.filter(t => !dbTaskIds.has(t.id));
            const allMergedTasks = [...dbTasks, ...missingLocalTasks];

            try {
                localStorage.setItem('study_planner_tasks', JSON.stringify(allMergedTasks));
            } catch {}

            return allMergedTasks;
        } catch (error: any) {
            if (error?.message && !error.message.includes('Offline') && !error.message.includes('Network')) {
                console.warn('Fetch tasks warning:', error.message);
            }
            try {
                const local = localStorage.getItem('study_planner_tasks');
                if (local) return JSON.parse(local);
            } catch { }
            return [];
        }
    },

    async addTask(userId: string, taskData: Partial<Task>): Promise<Task | null> {
        const validSubjectId = sanitizeSubjectId(taskData.subjectId) || undefined;
        const validGoalId = (isUuid(taskData.goalId) ? taskData.goalId : undefined) || undefined;

        const dbTask: Omit<DatabaseTask, 'id' | 'created_at'> & { id?: string } = {
            user_id: userId,
            title: taskData.title || '',
            status: taskData.status || 'todo',
            priority: taskData.priority || 'medium',
            completed: !!taskData.completed,
            due_date: taskData.deadline || taskData.dueDate,
            goal_id: validGoalId,
            subject_id: validSubjectId
        };

        // 1. Google Calendar Integration
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.provider_token && (taskData.dueDate || taskData.deadline)) {
                const googleEventId = await GoogleCalendarService.createEvent(session.provider_token, taskData);
                if (googleEventId) {
                    dbTask.google_event_id = googleEventId;
                }
            }
        } catch {}

        try {
            let { data, error } = await supabase
                .from('tasks')
                .insert(dbTask)
                .select()
                .single();

            if (error) {
                // Retry without subject/goal if foreign key constraint triggered
                const minimalDbTask = {
                    user_id: userId,
                    title: taskData.title || '',
                    status: taskData.status || 'todo',
                    priority: taskData.priority || 'medium',
                    completed: !!taskData.completed,
                    due_date: taskData.deadline || taskData.dueDate
                };
                const retry = await supabase.from('tasks').insert(minimalDbTask).select().single();
                data = retry.data;
                error = retry.error;
            }

            if (error) throw error;
            
            const returnedData = data as DatabaseTask;
            return {
                id: returnedData.id,
                title: returnedData.title,
                completed: returnedData.completed,
                status: returnedData.status as TaskStatus,
                priority: returnedData.priority as Priority,
                goalId: returnedData.goal_id,
                subjectId: returnedData.subject_id || taskData.subjectId,
                dueDate: returnedData.due_date,
                deadline: returnedData.due_date,
                createdAt: returnedData.created_at,
                googleEventId: returnedData.google_event_id,
                deletedAt: returnedData.deleted_at || undefined
            };
        } catch (error) {
            console.warn('Add task notice (local fallback retained):', error);
            return {
                id: taskData.id || generateUUID(),
                title: taskData.title || '',
                completed: !!taskData.completed,
                status: (taskData.status || 'todo') as TaskStatus,
                priority: (taskData.priority || 'medium') as Priority,
                goalId: taskData.goalId,
                subjectId: taskData.subjectId,
                dueDate: taskData.deadline || taskData.dueDate || new Date().toISOString(),
                createdAt: new Date().toISOString()
            };
        }
    },

    async addTasksBatch(userId: string, tasksData: Partial<Task>[]): Promise<Task[]> {
        const dbTasks = tasksData.map(taskData => {
            const dbTask: Omit<DatabaseTask, 'id' | 'created_at'> & { id?: string } = {
                user_id: userId,
                title: taskData.title || '',
                status: taskData.status || 'todo',
                priority: taskData.priority || 'medium',
                completed: !!taskData.completed,
                due_date: taskData.deadline || taskData.dueDate,
                goal_id: (isUuid(taskData.goalId) ? taskData.goalId : undefined) || undefined,
                subject_id: sanitizeSubjectId(taskData.subjectId) || undefined
            };
            return dbTask;
        });

        try {
            const { data, error } = await supabase
                .from('tasks')
                .insert(dbTasks)
                .select();

            if (error) throw error;
            if (!data) return [];

            return (data as DatabaseTask[]).map(returnedData => ({
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
            })) as Task[];
        } catch (error) {
            console.warn('Add tasks batch notice:', error);
            return [];
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
