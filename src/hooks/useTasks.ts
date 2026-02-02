import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Task } from '../types';

export const useTasks = (onTaskCompleted?: (amount: number) => Promise<void>) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = async (taskData: Partial<Task>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const dbTask = {
            user_id: user.id,
            title: taskData.title,
            status: taskData.status,
            priority: taskData.priority,
            completed: taskData.completed,
            due_date: taskData.deadline || taskData.dueDate,
            goal_id: taskData.goalId,
            subject_id: taskData.subjectId
        };
        const { data } = await supabase.from('tasks').insert(dbTask).select().single();
        if (data) {
            const newTask: Task = {
                ...data,
                subjectId: data.subject_id,
                goalId: data.goal_id,
                dueDate: data.due_date,
                deadline: data.due_date,
                createdAt: data.created_at
            } as any;
            setTasks(prev => [...prev, newTask]);
        }
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));

        const dbUpdates: any = { ...updates };
        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.goalId) dbUpdates.goal_id = updates.goalId;
        if (updates.dueDate) dbUpdates.due_date = updates.dueDate;
        if (updates.deadline) dbUpdates.due_date = updates.deadline;

        delete dbUpdates.subjectId;
        delete dbUpdates.goalId;
        delete dbUpdates.dueDate;
        delete dbUpdates.deadline;

        await supabase.from('tasks').update(dbUpdates).eq('id', id);
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        const newCompleted = !task.completed;

        // Update task - use 'done' status as per database constraint
        await updateTask(id, { completed: newCompleted, status: newCompleted ? 'done' : 'todo' });

        // Award XP only if newly completed (not if unchecking)
        if (newCompleted && onTaskCompleted) {
            await onTaskCompleted(50);
        }
    };

    const updateTaskStatus = async (id: string, status: string) => {
        const completed = status === 'done' || status === 'completed';

        // Optimistic update
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: status as any, completed } : t));

        await supabase.from('tasks').update({ status: status, completed }).eq('id', id);

        if (completed && onTaskCompleted) {
            await onTaskCompleted(50);
        }
    };

    const deleteTask = async (id: string) => {
        setTasks(prev => prev.filter(t => t.id !== id));
        await supabase.from('tasks').delete().eq('id', id);
    };

    const setTasksState = useCallback((newTasks: Task[]) => {
        setTasks(newTasks);
    }, []);

    return {
        tasks,
        setTasks: setTasksState,
        addTask,
        updateTask,
        toggleTask,
        updateTaskStatus,
        deleteTask
    };
};
