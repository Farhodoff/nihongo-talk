export const LEVELS = [
    { level: 1, minXp: 0, title: "Boshlang'ich Talaba" },
    { level: 2, minXp: 500, title: 'Shogird' },
    { level: 3, minXp: 1500, title: 'Olim' },
    { level: 4, minXp: 3000, title: 'Tadqiqotchi' },
    { level: 5, minXp: 5000, title: 'Ekspert' },
    { level: 6, minXp: 8000, title: 'Usta' },
    { level: 7, minXp: 12000, title: 'Grossmeyster' },
    { level: 8, minXp: 20000, title: 'Professor' },
];

export const getLevelInfo = (xp: number) => {
    // Find the highest level where xp >= minXp
    const current = LEVELS.slice().reverse().find(l => xp >= l.minXp) || LEVELS[0];
    const nextIndex = LEVELS.findIndex(l => l.level === current.level + 1);
    const next = LEVELS[nextIndex];

    let progress = 0;
    let xpForNext = 0;
    let xpInCurrent = 0;

    if (next) {
        xpForNext = next.minXp - current.minXp;
        xpInCurrent = xp - current.minXp;
        progress = (xpInCurrent / xpForNext) * 100;
    } else {
        progress = 100; // Max level
    }

    return {
        level: current.level,
        title: current.title,
        progress: Math.min(100, Math.max(0, progress)),
        currentXp: xp,
        nextLevelXp: next ? next.minXp : xp,
        xpToNext: next ? next.minXp - xp : 0
    };
};
