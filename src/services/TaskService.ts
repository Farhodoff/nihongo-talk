import { supabase } from '../lib/supabase';
import { Task } from '../types';

export const TaskService = {
    async fetchTasks(userId: string): Promise<Task[]> {
        const { data, error } = await supabase
            .from('tasks')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        if (!data) return [];

        return (data as unknown as import('../types/supabase-types').DatabaseTask[]).map(t => ({
            ...t,
            subjectId: t.subject_id,
            goalId: t.goal_id,
            dueDate: t.due_date,
            deadline: t.due_date,
            createdAt: t.created_at
        })) as Task[];
    },

    async addTask(userId: string, taskData: Partial<Task>): Promise<Task | null> {
        const dbTask = {
            user_id: userId,
            title: taskData.title,
            status: taskData.status,
            priority: taskData.priority,
            completed: taskData.completed,
            due_date: taskData.deadline || taskData.dueDate,
            goal_id: taskData.goalId,
            subject_id: taskData.subjectId
        };

        const { data, error } = await supabase
            .from('tasks')
            .insert(dbTask)
            .select()
            .single();

        if (error) throw error;
        if (!data) return null;

        return {
            ...data,
            subjectId: data.subject_id,
            goalId: data.goal_id,
            dueDate: data.due_date,
            deadline: data.due_date,
            createdAt: data.created_at
        } as any;
    },

    async updateTask(id: string, updates: Partial<Task>): Promise<void> {
        const dbUpdates: import('../types/supabase-types').DatabaseTaskUpdate = {};

        // Map Frontend keys to DB keys
        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.goalId) dbUpdates.goal_id = updates.goalId;
        if (updates.dueDate) dbUpdates.due_date = updates.dueDate;
        if (updates.deadline) dbUpdates.due_date = updates.deadline;

        if (updates.title) dbUpdates.title = updates.title;
        if (updates.status) dbUpdates.status = updates.status as any; // Cast if enum mismatch, but better to be strict
        if (updates.priority) dbUpdates.priority = updates.priority as any;
        if (updates.completed !== undefined) dbUpdates.completed = updates.completed;


        // Explicit construction removes need for deleting keys


        const { error } = await supabase.from('tasks').update(dbUpdates).eq('id', id);
        if (error) throw error;
    },

    async updateTaskStatus(id: string, status: string, completed: boolean): Promise<void> {
        const { error } = await supabase
            .from('tasks')
            .update({ status, completed })
            .eq('id', id);

        if (error) throw error;
    },

    async deleteTask(id: string): Promise<void> {
        const { error } = await supabase.from('tasks').delete().eq('id', id);
        if (error) throw error;
    }
};
