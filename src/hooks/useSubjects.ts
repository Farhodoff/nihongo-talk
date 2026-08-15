import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Subject, Flashcard } from '../types';
import { DatabaseSubject } from '../types/supabase-types';
import { generateUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export const useSubjects = (setFlashcards?: React.Dispatch<React.SetStateAction<Flashcard[]>>) => {
    const [subjects, setSubjects] = useState<Subject[]>(() => {
        return safeLocalStorage.getJSON<Subject[]>('study_planner_subjects_cache', []);
    });

    const addSubject = useCallback(async (subjectData: Partial<Subject>): Promise<Subject | null> => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const tempId = subjectData.id || generateUUID();
        const optimisticSubject: Subject = {
            id: tempId,
            name: subjectData.name || 'Yangi Fan',
            color: subjectData.color || '#6366f1',
            schedule: subjectData.schedule || [],
            teacherName: subjectData.teacherName,
            roomLocation: subjectData.roomLocation,
            description: subjectData.description,
            icon: subjectData.icon,
            isArchived: subjectData.isArchived || false
        };

        // Optimistic update
        setSubjects(prev => {
            const filtered = prev.filter(s => s.id !== tempId);
            const updated = [...filtered, optimisticSubject];
            safeLocalStorage.setJSON('study_planner_subjects_cache_' + activeUserId, updated);
            safeLocalStorage.setJSON('study_planner_subjects_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const dbSubject: Record<string, any> = {
                id: tempId,
                user_id: activeUserId,
                name: subjectData.name || 'Yangi Fan',
                color: subjectData.color || '#6366f1',
                schedule: subjectData.schedule || [],
            };
            if (subjectData.teacherName) dbSubject.teacher_name = subjectData.teacherName;
            if (subjectData.roomLocation) dbSubject.room_location = subjectData.roomLocation;
            if (subjectData.description) dbSubject.description = subjectData.description;
            if (subjectData.icon) dbSubject.icon = subjectData.icon;
            if (subjectData.isArchived !== undefined) dbSubject.is_archived = subjectData.isArchived;

            try {
                let { data, error } = await supabase.from('subjects').insert(dbSubject).select().single();
                
                // Retry without optional columns if DB schema lacks them
                if (error && (error.code === '42703' || error.message?.includes('column'))) {
                    const minimalDbSubject = {
                        id: tempId,
                        user_id: activeUserId,
                        name: subjectData.name || 'Yangi Fan',
                        color: subjectData.color || '#6366f1',
                        schedule: subjectData.schedule || []
                    };
                    const retry = await supabase.from('subjects').insert(minimalDbSubject).select().single();
                    data = retry.data;
                    error = retry.error;
                }

                if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                    console.warn('[addSubject] Supabase insert warning:', error.message);
                }

                const finalId = data?.id || tempId;
                const finalSubject: Subject = {
                    id: finalId,
                    name: data?.name || optimisticSubject.name,
                    color: data?.color || optimisticSubject.color,
                    schedule: data?.schedule || optimisticSubject.schedule,
                    teacherName: data?.teacher_name || optimisticSubject.teacherName,
                    roomLocation: data?.room_location || optimisticSubject.roomLocation,
                    description: data?.description || optimisticSubject.description,
                    icon: data?.icon || optimisticSubject.icon,
                    isArchived: data?.is_archived ?? optimisticSubject.isArchived
                };

                if (finalId !== tempId && setFlashcards) {
                    setFlashcards(prev => {
                        const updated = prev.map(c => c.subjectId === tempId ? { ...c, subjectId: finalId } : c);
                        safeLocalStorage.setJSON('study_planner_flashcards_cache_' + activeUserId, updated);
                        return updated;
                    });
                }

                setSubjects(prev => {
                    const filtered = prev.filter(s => s.id !== tempId && s.id !== finalId);
                    const updated = [...filtered, finalSubject];
                    safeLocalStorage.setJSON('study_planner_subjects_cache_' + activeUserId, updated);
                    safeLocalStorage.setJSON('study_planner_subjects_cache', updated);
                    return updated;
                });

                return finalSubject;
            } catch (error: any) {
                if (error?.message && !error.message.includes('Offline') && !error.message.includes('Network')) {
                    console.warn("Failed to add subject DB insert, using optimistic subject:", error);
                }
                return optimisticSubject;
            }
        }

        return optimisticSubject;
    }, [setFlashcards]);

    const updateSubject = useCallback(async (id: string, updates: Partial<Subject>) => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        setSubjects(prev => {
            const updated = prev.map(s => s.id === id ? { ...s, ...updates } : s);
            safeLocalStorage.setJSON('study_planner_subjects_cache_' + activeUserId, updated);
            safeLocalStorage.setJSON('study_planner_subjects_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const dbUpdates: Partial<DatabaseSubject> = {};
            if (updates.name) dbUpdates.name = updates.name;
            if (updates.color) dbUpdates.color = updates.color;
            if (updates.teacherName !== undefined) dbUpdates.teacher_name = updates.teacherName;
            if (updates.roomLocation !== undefined) dbUpdates.room_location = updates.roomLocation;
            if (updates.description !== undefined) dbUpdates.description = updates.description;
            if (updates.icon) dbUpdates.icon = updates.icon;
            if (updates.schedule) dbUpdates.schedule = updates.schedule;
            if (updates.isArchived !== undefined) dbUpdates.is_archived = updates.isArchived;

            const { error } = await supabase.from('subjects').update(dbUpdates).eq('id', id);
            if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                console.warn("Update subject warning:", error.message);
            }
        }
    }, []);

    const deleteSubject = useCallback(async (id: string) => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        setSubjects(prev => {
            const updated = prev.filter(s => s.id !== id);
            safeLocalStorage.setJSON('study_planner_subjects_cache_' + activeUserId, updated);
            safeLocalStorage.setJSON('study_planner_subjects_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const { error } = await supabase.from('subjects').delete().eq('id', id);
            if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                console.warn("Delete subject warning:", error.message);
            }
        }
    }, []);

    return {
        subjects,
        setSubjects,
        addSubject,
        updateSubject,
        deleteSubject
    };
};
