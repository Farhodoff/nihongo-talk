import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export type MasteryStatus = 'unlearned' | 'learned' | 'hard' | 'mastered';

export interface MasteryRecord {
    [itemId: string]: MasteryStatus;
}

const STORAGE_KEY = 'jlpt_mastery_status_v1';

export const useJlptMastery = () => {
    const [records, setRecords] = useState<MasteryRecord>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });

    // Load from DB on mount
    useEffect(() => {
        const fetchDbMastery = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user?.user_metadata?.jlpt_mastery) {
                    const dbRecords = user.user_metadata.jlpt_mastery as MasteryRecord;
                    setRecords(prev => {
                        const merged = { ...dbRecords, ...prev };
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
                        return merged;
                    });
                }
            } catch (e) {
                console.warn('Failed to fetch DB JLPT mastery:', e);
            }
        };
        fetchDbMastery();
    }, []);

    const setItemStatus = (itemId: string, status: MasteryStatus) => {
        setRecords(prev => {
            const updated = {
                ...prev,
                [itemId]: status
            };
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch (e) {
                console.error('Failed to save JLPT mastery status to localStorage:', e);
            }

            // Sync to DB
            supabase.auth.getUser().then(({ data: { user } }) => {
                if (user) {
                    supabase.auth.updateUser({
                        data: { jlpt_mastery: updated }
                    }).catch(err => console.warn('Failed to sync JLPT mastery to DB:', err));
                }
            });

            return updated;
        });
    };

    const getItemStatus = (itemId: string): MasteryStatus => {
        return records[itemId] || 'unlearned';
    };

    const getStatsForLevel = (items: { id: string; level: string }[]) => {
        const total = items.length;
        if (total === 0) return { learned: 0, hard: 0, mastered: 0, unlearned: 0, percentage: 0 };

        let learned = 0;
        let hard = 0;
        let mastered = 0;

        items.forEach(item => {
            const st = getItemStatus(item.id);
            if (st === 'learned') learned++;
            else if (st === 'hard') hard++;
            else if (st === 'mastered') mastered++;
        });

        const completed = learned + mastered;
        const percentage = Math.round((completed / total) * 100);

        return {
            total,
            learned,
            hard,
            mastered,
            unlearned: total - (learned + hard + mastered),
            percentage
        };
    };

    return {
        records,
        setItemStatus,
        getItemStatus,
        getStatsForLevel
    };
};
