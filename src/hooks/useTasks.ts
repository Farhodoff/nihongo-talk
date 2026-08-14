import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Task, TaskStatus } from '../types';
import { TaskService } from '../services/TaskService';

const LOCAL_STORAGE_KEY = 'study_planner_tasks';

const saveTasksToLocalStorage = (taskList: Task[]) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
    } catch (e) {
        console.warn('Failed to sync tasks to localStorage:', e);
    }
};

export const useTasks = (onTaskCompleted?: (amount: number) => Promise<void>) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        try {
            const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {
            console.warn('Failed to load initial tasks from localStorage:', e);
        }
        return [];
    });

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    const addTask = async (taskData: Partial<Task>) => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        // Optimistic update
        const tempId = taskData.id || `temp-${Date.now()}`;
        const optimisticTask: Task = {
            id: tempId,
            userId: activeUserId,
            title: taskData.title || '',
            status: taskData.status || 'todo',
            priority: taskData.priority || 'medium',
            dueDate: taskData.dueDate || new Date().toISOString(),
            completed: false,
            createdAt: new Date().toISOString(),
            ...taskData
        } as Task;

        setTasks(prev => {
            const updated = [...prev, optimisticTask];
            saveTasksToLocalStorage(updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            try {
                const newTask = await TaskService.addTask(activeUserId, taskData);
                if (newTask) {
                    // Replace temp task with real one
                    setTasks(prev => {
                        const updated = prev.map(t => t.id === tempId ? newTask : t);
                        saveTasksToLocalStorage(updated);
                        return updated;
                    });
                }
            } catch (error) {
                console.error("Failed to add task:", error);
            }
        }
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
        setTasks(prev => {
            const updated = prev.map(t => t.id === id ? { ...t, ...updates } : t);
            saveTasksToLocalStorage(updated);
            return updated;
        });
        try {
            await TaskService.updateTask(id, updates);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        const newCompleted = !task.completed;

        // Optimistic update
        setTasks(prev => {
            const updated = prev.map(t => t.id === id ? { ...t, completed: newCompleted, status: (newCompleted ? 'done' : 'todo') as TaskStatus } : t);
            saveTasksToLocalStorage(updated);
            return updated;
        });

        try {
            await TaskService.updateTaskStatus(id, newCompleted ? 'done' : 'todo', newCompleted);

            // Award XP only if newly completed (not if unchecking)
            if (newCompleted && onTaskCompleted) {
                await onTaskCompleted(50);
            }
        } catch (error) {
            console.error("Failed to toggle task:", error);
            // Revert on failure
            setTasks(prev => {
                const updated = prev.map(t => t.id === id ? { ...t, completed: !newCompleted, status: (!newCompleted ? 'done' : 'todo') as TaskStatus } : t);
                saveTasksToLocalStorage(updated);
                return updated;
            });
        }
    };

    const updateTaskStatus = async (id: string, status: string) => {
        const completed = status === 'done' || status === 'completed';

        // Optimistic update
        setTasks(prev => {
            const updated = prev.map(t => t.id === id ? { ...t, status: status as TaskStatus, completed } : t);
            saveTasksToLocalStorage(updated);
            return updated;
        });

        try {
            await TaskService.updateTaskStatus(id, status, completed);
            if (completed && onTaskCompleted) {
                await onTaskCompleted(50);
            }
        } catch (error) {
            console.error("Failed to update task status:", error);
        }
    };

    const deleteTask = async (id: string, permanent = false) => {
        setTasks(prev => {
            const updated = prev.filter(t => t.id !== id);
            saveTasksToLocalStorage(updated);
            return updated;
        });
        try {
            await TaskService.deleteTask(id, permanent);
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    };

    const restoreTask = async (id: string) => {
        try {
            await TaskService.restoreTask(id);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const updatedTasks = await TaskService.fetchTasks(user.id);
                setTasks(updatedTasks);
                saveTasksToLocalStorage(updatedTasks);
            }
        } catch (error) {
            console.error("Failed to restore task:", error);
        }
    };

    const addTasksBatch = async (tasksData: Partial<Task>[]) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return [];

        try {
            const newTasks = await TaskService.addTasksBatch(user.id, tasksData);
            if (newTasks.length > 0) {
                setTasks(prev => {
                    const existingIds = new Set(prev.map(t => t.id));
                    const filteredNew = newTasks.filter(t => !existingIds.has(t.id));
                    const updated = [...prev, ...filteredNew];
                    saveTasksToLocalStorage(updated);
                    return updated;
                });
            }
            return newTasks;
        } catch (error) {
            console.error("Failed to add tasks batch:", error);
            return [];
        }
    };

    const setTasksState = useCallback((newTasks: Task[]) => {
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
    }, []);

    return {
        tasks,
        setTasks: setTasksState,
        addTask,
        addTasksBatch,
        updateTask,
        toggleTask,
        updateTaskStatus,
        deleteTask,
        restoreTask
    };
};
