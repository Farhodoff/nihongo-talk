import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type FontType = 'sans' | 'serif' | 'mono';

export const useFontPreference = () => {
    const [font, setFont] = useState<FontType>(() => {
        const saved = localStorage.getItem('noteFont');
        return (saved as FontType) || 'sans';
    });

    useEffect(() => {
        // Load font preference from DB on mount
        const fetchDbFont = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                const user = session?.user;
                if (user?.user_metadata?.font_preference) {
                    const dbFont = user.user_metadata.font_preference as FontType;
                    setFont(dbFont);
                    localStorage.setItem('noteFont', dbFont);
                }
            } catch (e) {
                console.warn('Failed to fetch font preference from DB:', e);
            }
        };
        fetchDbFont();
    }, []);

    const changeFont = (newFont: FontType) => {
        setFont(newFont);
        try {
            localStorage.setItem('noteFont', newFont);
        } catch (e) { console.warn(e); }

        supabase.auth.getSession().then(({ data: { session } }) => {
            const user = session?.user;
            if (user) {
                supabase.auth.updateUser({
                    data: { font_preference: newFont }
                }).catch(err => console.warn('Failed to sync font preference to DB:', err));
            }
        });
    };

    useEffect(() => {
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
