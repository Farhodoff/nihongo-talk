import { useEffect, useState } from 'react';

export type FontType = 'sans' | 'serif' | 'mono';

export const useFontPreference = () => {
    const [font, setFont] = useState<FontType>(() => {
        const saved = localStorage.getItem('noteFont');
        return (saved as FontType) || 'sans';
    });

    const changeFont = (newFont: FontType) => {
        setFont(newFont);
        localStorage.setItem('noteFont', newFont);
    };

    useEffect(() => {
        // Sync with localStorage changes from other tabs
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'noteFont' && e.newValue) {
                setFont(e.newValue as FontType);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return { font, changeFont };
};
