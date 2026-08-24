import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export type GrammarMasteryStatus = 'unlearned' | 'learned' | 'hard' | 'mastered';

export interface GrammarMasteryRecord {
    [topicId: string]: GrammarMasteryStatus;
}

const STORAGE_KEY = 'english_grammar_mastery_v2';

export const useEnglishGrammarMastery = () => {
    const [records, setRecords] = useState<GrammarMasteryRecord>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        const fetchDbMastery = async () => {
            try {
                const { data: sessionData } = await supabase.auth.getSession();
                const userId = sessionData?.session?.user?.id;
                if (!userId) return;

                const { data: dbRows, error: dbErr } = await supabase
                    .from('english_grammar_progress')
                    .select('*')
                    .eq('user_id', userId);

                if (!dbErr && dbRows && dbRows.length > 0) {
                    const dbMap: GrammarMasteryRecord = {};
                    dbRows.forEach((r: any) => {
                        dbMap[r.lesson_slug || r.topic_id] = r.mastery_status || (r.completed ? 'mastered' : 'learned');
                    });
                    setRecords(prev => {
                        const merged = { ...prev, ...dbMap };
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
                        return merged;
                    });
                }
            } catch (e) {
                console.debug('Failed to fetch DB English grammar mastery:', e);
            }
        };
        fetchDbMastery();
    }, []);

    const getItemStatus = (id: string): GrammarMasteryStatus => {
        return records[id] || 'unlearned';
    };

    const setItemStatus = async (id: string, status: GrammarMasteryStatus) => {
        const updated = { ...records, [id]: status };
        setRecords(updated);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {}

        try {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData?.session?.user?.id;
            if (userId) {
                await supabase.from('english_grammar_progress').upsert({
                    user_id: userId,
                    lesson_slug: id,
                    completed: status === 'mastered' || status === 'learned',
                    mastery_status: status,
                    updated_at: new Date().toISOString()
                });
            }
        } catch {}
    };

    const getStatsForLevel = (items: { id: string }[]) => {
        const total = items.length;
        if (total === 0) return { total: 0, mastered: 0, learned: 0, hard: 0, unlearned: 0, progressPercent: 0 };

        let mastered = 0;
        let learned = 0;
        let hard = 0;
        let unlearned = 0;

        items.forEach(i => {
            const s = getItemStatus(i.id);
            if (s === 'mastered') mastered++;
            else if (s === 'learned') learned++;
            else if (s === 'hard') hard++;
            else unlearned++;
        });

        const progressPercent = Math.round(((mastered + learned) / total) * 100);
        return { total, mastered, learned, hard, unlearned, progressPercent };
    };

    return {
        records,
        getItemStatus,
        setItemStatus,
        getStatsForLevel
    };
};
