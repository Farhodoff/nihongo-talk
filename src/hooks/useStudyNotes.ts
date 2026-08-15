import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { StudyNote } from '../types';
import { generateUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export const useStudyNotes = () => {
    const [studyNotes, setStudyNotes] = useState<StudyNote[]>(() => {
        return safeLocalStorage.getJSON<StudyNote[]>('study_planner_study_notes_cache', []);
    });

    const addStudyNote = useCallback(async (noteData: Partial<StudyNote>): Promise<void> => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const noteId = noteData.id || generateUUID();
        const dbNote = {
            id: noteId,
            user_id: activeUserId,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
        };

        const newNote: StudyNote = {
            id: noteId,
            subjectId: noteData.subjectId || '',
            userId: activeUserId,
            title: noteData.title || '',
            content: noteData.content || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        setStudyNotes(prev => {
            const updated = [...prev, newNote];
            safeLocalStorage.setJSON('study_planner_study_notes_cache', updated);
            return updated;
        });

        try {
            const { data } = await supabase.from('study_notes').insert(dbNote).select().single();
            if (data) {
                const returnedNote: StudyNote = {
                    id: data.id,
                    subjectId: data.subject_id,
                    userId: data.user_id,
                    title: data.title,
                    content: data.content,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                };
                setStudyNotes(prev => {
                    const updated = prev.map(n => n.id === noteId ? returnedNote : n);
                    safeLocalStorage.setJSON('study_planner_study_notes_cache', updated);
                    return updated;
                });
            }
        } catch (e) {
            console.warn('[addStudyNote] DB insert notice (local study note preserved):', e);
        }
    }, []);

    const addStudyNotesBatch = useCallback(async (notesData: Partial<StudyNote>[]): Promise<StudyNote[]> => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const tempNotes = notesData.map(n => {
            const noteId = n.id || generateUUID();
            return {
                id: noteId,
                user_id: activeUserId,
                subject_id: n.subjectId,
                title: n.title,
                content: n.content
            };
        });

        const newLocalNotes: StudyNote[] = tempNotes.map(dbNote => ({
            id: dbNote.id,
            subjectId: dbNote.subject_id || '',
            userId: activeUserId,
            title: dbNote.title || '',
            content: dbNote.content || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }));

        setStudyNotes(prev => {
            const updated = [...newLocalNotes, ...prev];
            safeLocalStorage.setJSON('study_planner_study_notes_cache', updated);
            return updated;
        });

        try {
            const chunkSize = 100;
            const insertedNotes: StudyNote[] = [];

            for (let i = 0; i < tempNotes.length; i += chunkSize) {
                const chunk = tempNotes.slice(i, i + chunkSize);
                const { data, error } = await supabase
                    .from('study_notes')
                    .insert(chunk)
                    .select();

                if (error || !data) {
                    console.warn('[addStudyNotesBatch] DB insert chunk error:', error);
                    insertedNotes.push(...newLocalNotes.slice(i, i + chunkSize));
                } else {
                    insertedNotes.push(...(data as any[]).map(n => ({
                        id: n.id,
                        subjectId: n.subject_id,
                        userId: n.user_id,
                        title: n.title,
                        content: n.content,
                        createdAt: n.created_at,
                        updatedAt: n.updated_at
                    })));
                }
            }

            setStudyNotes(prev => {
                const next = [...prev];
                insertedNotes.forEach(inserted => {
                    const idx = next.findIndex(n => n.id === inserted.id);
                    if (idx !== -1) {
                        next[idx] = inserted;
                    }
                });
                safeLocalStorage.setJSON('study_planner_study_notes_cache', next);
                return next;
            });

            return insertedNotes;
        } catch (err) {
            console.error('[addStudyNotesBatch] Exception:', err);
            return newLocalNotes;
        }
    }, []);

    const updateStudyNote = useCallback(async (id: string, updates: Partial<StudyNote>) => {
        const dbUpdates: Record<string, any> = {};

        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.title) dbUpdates.title = updates.title;
        if (updates.content) dbUpdates.content = updates.content;
        dbUpdates.updated_at = new Date().toISOString();

        setStudyNotes(prev => {
            const updated = prev.map(n => n.id === id ? { ...n, ...updates } : n);
            safeLocalStorage.setJSON('study_planner_study_notes_cache', updated);
            return updated;
        });

        await supabase.from('study_notes').update(dbUpdates).eq('id', id);
    }, []);

    const deleteStudyNote = useCallback(async (id: string) => {
        setStudyNotes(prev => {
            const updated = prev.filter(n => n.id !== id);
            safeLocalStorage.setJSON('study_planner_study_notes_cache', updated);
            return updated;
        });

        await supabase.from('study_notes').delete().eq('id', id);
    }, []);

    return {
        studyNotes,
        setStudyNotes,
        addStudyNote,
        addStudyNotesBatch,
        updateStudyNote,
        deleteStudyNote
    };
};
