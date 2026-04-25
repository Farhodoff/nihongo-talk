import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Task } from '../types';
import { TaskService } from '../services/TaskService';

export const useTasks = (onTaskCompleted?: (amount: number) => Promise<void>) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = async (taskData: Partial<Task>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Optimistic update
        const tempId = `temp-${Date.now()}`;
        const optimisticTask: Task = {
            id: tempId,
            userId: user.id,
            title: taskData.title || '',
            status: taskData.status || 'todo',
            priority: taskData.priority || 'medium',
            dueDate: taskData.dueDate || new Date().toISOString(),
            completed: false,
            createdAt: new Date().toISOString(),
            ...taskData
        } as Task;

        setTasks(prev => [...prev, optimisticTask]);

        try {
            const newTask = await TaskService.addTask(user.id, taskData);
            if (newTask) {
                // Replace temp task with real one
                setTasks(prev => prev.map(t => t.id === tempId ? newTask : t));
            }
        } catch (error) {
            console.error("Failed to add task:", error);
            // Revert on failure
            setTasks(prev => prev.filter(t => t.id !== tempId));
        }
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
        try {
            await TaskService.updateTask(id, updates);
        } catch (error) {
            console.error("Failed to update task:", error);
            // Optionally revert state here if needed
        }
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        const newCompleted = !task.completed;

        // Optimistic update
        setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: newCompleted, status: newCompleted ? 'done' : 'todo' } : t));

        try {
            await TaskService.updateTaskStatus(id, newCompleted ? 'done' : 'todo', newCompleted);

            // Award XP only if newly completed (not if unchecking)
            if (newCompleted && onTaskCompleted) {
                await onTaskCompleted(50);
            }
        } catch (error) {
            console.error("Failed to toggle task:", error);
            // Revert on failure
            setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !newCompleted, status: !newCompleted ? 'done' : 'todo' } : t));
        }
    };

    const updateTaskStatus = async (id: string, status: string) => {
        const completed = status === 'done' || status === 'completed';

        // Optimistic update
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: status as any, completed } : t));

        try {
            await TaskService.updateTaskStatus(id, status, completed);
            if (completed && onTaskCompleted) {
                await onTaskCompleted(50);
            }
        } catch (error) {
            console.error("Failed to update task status:", error);
        }
    };

    const deleteTask = async (id: string) => {
        setTasks(prev => prev.filter(t => t.id !== id));
        try {
            await TaskService.deleteTask(id);
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
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
