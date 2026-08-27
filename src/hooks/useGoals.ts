import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Goal } from '../types';
import { generateUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export const useGoals = () => {
    const [goals, setGoals] = useState<Goal[]>(() => {
        return safeLocalStorage.getJSON<Goal[]>('study_planner_goals_cache', []);
    });

    const addGoal = useCallback(async (goalData: Partial<Goal>): Promise<Goal | null> => {
        let activeUserId = 'local_user';
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user?.id) activeUserId = session.user.id;
        } catch {}

        const goalId = goalData.id || generateUUID();
        const fullGoalData: Goal = {
            id: goalId,
            title: goalData.title || '',
            description: goalData.description || '',
            deadline: goalData.deadline || new Date().toISOString(),
            progress: goalData.progress || 0,
            color: goalData.color || '#6366f1',
            priority: goalData.priority || 'medium',
            createdAt: new Date().toISOString(),
            completed: goalData.completed || false
        };

        setGoals(prev => {
            const updated = [...prev, fullGoalData];
            safeLocalStorage.setJSON('study_planner_goals_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            try {
                const { error } = await supabase.from('goals').insert({
                    id: goalId,
                    user_id: activeUserId,
                    title: fullGoalData.title,
                    description: fullGoalData.description,
                    target_date: fullGoalData.deadline.split('T')[0],
                    progress: fullGoalData.progress,
                    color: fullGoalData.color,
                    priority: fullGoalData.priority,
                    completed: fullGoalData.completed,
                    created_at: fullGoalData.createdAt
                });
                if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                    console.warn("Insert goal warning:", error.message);
                }
            } catch (e) {
                console.warn("[addGoal] DB sync error:", e);
            }
        }
        return fullGoalData;
    }, []);

    const updateGoal = useCallback(async (id: string, updates: Partial<Goal>) => {
        let activeUserId = 'local_user';
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user?.id) activeUserId = session.user.id;
        } catch {}

        setGoals(prev => {
            const updated = prev.map(g => g.id === id ? { ...g, ...updates } : g);
            safeLocalStorage.setJSON('study_planner_goals_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const dbUpdates: any = { ...updates };
            if (updates.deadline) {
                dbUpdates.target_date = updates.deadline.split('T')[0];
            }
            await supabase.from('goals').update(dbUpdates).eq('id', id);
        }
    }, []);

    const deleteGoal = useCallback(async (id: string) => {
        setGoals(prev => {
            const updated = prev.filter(g => g.id !== id);
            safeLocalStorage.setJSON('study_planner_goals_cache', updated);
            return updated;
        });

        await supabase.from('goals').delete().eq('id', id);
    }, []);

    return {
        goals,
        setGoals,
        addGoal,
        updateGoal,
        deleteGoal
    };
};
