import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { WhiteboardMetadata } from '../types';
import { generateUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export const useWhiteboards = () => {
    const [whiteboards, setWhiteboards] = useState<WhiteboardMetadata[]>(() => {
        return safeLocalStorage.getJSON<WhiteboardMetadata[]>('study_planner_whiteboards_cache', []);
    });

    const addWhiteboard = useCallback(async (subjectId: string, title: string): Promise<string | null> => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const newId = generateUUID();
        const newWb: WhiteboardMetadata = {
            id: newId,
            subjectId: subjectId,
            userId: activeUserId,
            title: title || 'Adsiz Doska',
            updatedAt: new Date().toISOString()
        };

        setWhiteboards(prev => {
            const updated = [...prev, newWb];
            safeLocalStorage.setJSON('study_planner_whiteboards_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            try {
                const { data } = await supabase.from('whiteboards').insert({
                    id: newId,
                    user_id: activeUserId,
                    subject_id: subjectId,
                    title: title,
                    updated_at: new Date().toISOString()
                }).select('id, subject_id, user_id, title, updated_at').single();

                if (data) {
                    setWhiteboards(prev => {
                        const updated = prev.map(w => w.id === newId ? {
                            id: data.id,
                            subjectId: data.subject_id,
                            userId: data.user_id,
                            title: data.title,
                            updatedAt: data.updated_at
                        } : w);
                        safeLocalStorage.setJSON('study_planner_whiteboards_cache', updated);
                        return updated;
                    });
                }
            } catch (error: any) {
                console.warn("addWhiteboard DB notice (local whiteboard preserved):", error);
            }
        }
        return newId;
    }, []);

    const deleteWhiteboard = useCallback(async (id: string): Promise<void> => {
        setWhiteboards(prev => {
            const updated = prev.filter(w => w.id !== id);
            safeLocalStorage.setJSON('study_planner_whiteboards_cache', updated);
            return updated;
        });
        await supabase.from('whiteboards').delete().eq('id', id);
    }, []);

    const updateWhiteboardTitle = useCallback(async (id: string, title: string): Promise<void> => {
        setWhiteboards(prev => {
            const updated = prev.map(w => w.id === id ? { ...w, title } : w);
            safeLocalStorage.setJSON('study_planner_whiteboards_cache', updated);
            return updated;
        });
        await supabase.from('whiteboards').update({ title }).eq('id', id);
    }, []);

    return {
        whiteboards,
        setWhiteboards,
        addWhiteboard,
        deleteWhiteboard,
        updateWhiteboardTitle
    };
};
