import { useState, useEffect } from 'react';

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

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        } catch (e) {
            console.error('Failed to save JLPT mastery status:', e);
        }
    }, [records]);

    const setItemStatus = (itemId: string, status: MasteryStatus) => {
        setRecords(prev => ({
            ...prev,
            [itemId]: status
        }));
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
