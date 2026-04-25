import { describe, it, expect } from 'vitest';
import { getLevelInfo, LEVELS } from './gamification';

describe('Gamification Logic', () => {
    it('Darajani to\'g\'ri hisoblashi kerak', () => {
        // Level 1: 0 - 499 XP
        expect(getLevelInfo(0).level).toBe(1);
        expect(getLevelInfo(499).level).toBe(1);
        
        // Level 2: 500 - 1499 XP
        expect(getLevelInfo(500).level).toBe(2);
        expect(getLevelInfo(1499).level).toBe(2);
        
        // Level 3: 1500+ XP
        expect(getLevelInfo(1500).level).toBe(3);
    });

    it('Progressni to\'g\'ri hisoblashi kerak', () => {
        // Level 1 (0 XP) dan Level 2 (500 XP) ga o'tish
        // 250 XP bo'lganda progress 50% bo'lishi kerak
        const info = getLevelInfo(250);
        expect(info.progress).toBe(50);
        expect(info.xpToNext).toBe(250);
    });

    it('Maksimal darajaga yetganda progress 100% bo\'lishi kerak', () => {
        const maxLevelXp = LEVELS[LEVELS.length - 1].minXp;
        const info = getLevelInfo(maxLevelXp + 1000);
        expect(info.level).toBe(LEVELS[LEVELS.length - 1].level);
        expect(info.progress).toBe(100);
        expect(info.xpToNext).toBe(0);
    });

    it('Daraja unvonini (title) to\'g\'ri qaytarishi kerak', () => {
        expect(getLevelInfo(0).title).toBe("Boshlang'ich Talaba");
        expect(getLevelInfo(500).title).toBe('Shogird');
    });
});
