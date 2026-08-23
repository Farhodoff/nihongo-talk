import { useState, useCallback, useEffect, useRef } from 'react';
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
    const onTaskCompletedRef = useRef(onTaskCompleted);
    useEffect(() => {
        onTaskCompletedRef.current = onTaskCompleted;
    }, [onTaskCompleted]);

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

    const addTask = useCallback(async (taskData: Partial<Task>) => {
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
            const exists = prev.some(t => t.id === tempId);
            const updated = exists ? prev.map(t => t.id === tempId ? optimisticTask : t) : [...prev, optimisticTask];
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
    }, []);

    const updateTask = useCallback(async (id: string, updates: Partial<Task>) => {
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
    }, []);

    const toggleTask = useCallback(async (id: string) => {
        let isNowCompleted = false;
        setTasks(prev => {
            const task = prev.find(t => t.id === id);
            if (!task) return prev;
            isNowCompleted = !task.completed;
            const updated = prev.map(t => t.id === id ? { ...t, completed: isNowCompleted, status: (isNowCompleted ? 'done' : 'todo') as TaskStatus } : t);
            saveTasksToLocalStorage(updated);
            return updated;
        });

        try {
            await TaskService.updateTaskStatus(id, isNowCompleted ? 'done' : 'todo', isNowCompleted);
            if (isNowCompleted && onTaskCompletedRef.current) {
                await onTaskCompletedRef.current(50);
            }
        } catch (error) {
            console.error("Failed to toggle task:", error);
        }
    }, []);

    const updateTaskStatus = useCallback(async (id: string, status: string) => {
        const completed = status === 'done' || status === 'completed';

        setTasks(prev => {
            const updated = prev.map(t => t.id === id ? { ...t, status: status as TaskStatus, completed } : t);
            saveTasksToLocalStorage(updated);
            return updated;
        });

        try {
            await TaskService.updateTaskStatus(id, status, completed);
            if (completed && onTaskCompletedRef.current) {
                await onTaskCompletedRef.current(50);
            }

            // Bidirectional sync with Personal Learning Plan
            if (id.startsWith('plan_task_') || id.includes('plan_')) {
                const cleanTaskId = id.replace('plan_task_', '');
                // Check all cached plans for this task
                const rawPlans = localStorage.getItem('study_planner_weekly_plans');
                if (rawPlans) {
                    try {
                        const parsedPlans = JSON.parse(rawPlans);
                        if (Array.isArray(parsedPlans)) {
                            let modified = false;
                            const updatedPlans = parsedPlans.map(plan => {
                                const dayMatch = plan.days?.some((d: any) => d.tasks?.some((t: any) => t.id === cleanTaskId || t.id === id));
                                if (!dayMatch) return plan;
                                modified = true;
                                return {
                                    ...plan,
                                    days: plan.days.map((d: any) => ({
                                        ...d,
                                        tasks: d.tasks.map((t: any) => {
                                            if (t.id === cleanTaskId || t.id === id) {
                                                return { ...t, completed, status: completed ? 'completed' : 'pending' };
                                            }
                                            return t;
                                        })
                                    }))
                                };
                            });
                            if (modified) {
                                localStorage.setItem('study_planner_weekly_plans', JSON.stringify(updatedPlans));
                            }
                        }
                    } catch {}
                }
            }
        } catch (error) {
            console.error("Failed to update task status:", error);
        }
    }, []);

    const deleteTask = useCallback(async (id: string, permanent = false) => {
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
    }, []);

    const restoreTask = useCallback(async (id: string) => {
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
    }, []);

    const addTasksBatch = useCallback(async (tasksData: Partial<Task>[]) => {
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
    }, []);

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
