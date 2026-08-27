import React, { createContext, useContext, useState, useEffect } from 'react';
import { uz } from '../i18n/uz';
import { ja } from '../i18n/ja';
import { en } from '../i18n/en';

export type Language = 'uz' | 'ja' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (keyPath: string) => string;
}

const translations: Record<Language, any> = { uz, ja, en };

const defaultT = (keyPath: string, lang: Language = 'uz'): string => {
    const keys = keyPath.split('.');
    let current = translations[lang] || translations.uz;
    for (const k of keys) {
        if (current && current[k] !== undefined) {
            current = current[k];
        } else {
            // Fallback to Uzbek if translation missing in Japanese
            let fallback = translations.uz;
            for (const fbKey of keys) {
                if (fallback && fallback[fbKey] !== undefined) {
                    fallback = fallback[fbKey];
                } else {
                    return keyPath;
                }
            }
            return typeof fallback === 'string' ? fallback : keyPath;
        }
    }
    return typeof current === 'string' ? current : keyPath;
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'uz',
    setLanguage: () => {},
    t: (keyPath: string) => defaultT(keyPath, 'uz')
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Check URL query parameter first
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');
            if (langParam === 'ja' || langParam === 'uz') {
                return langParam as Language;
            }
        }
        
        // Fallback to localStorage
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('study_planner_lang') : null;
        return (saved === 'ja' || saved === 'uz') ? (saved as Language) : 'uz';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('study_planner_lang', lang);
        }
        
        // Update URL query parameter
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            window.history.replaceState({}, '', url.toString());
        }
    };

    // Handle query parameter changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const handlePopState = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');
            if (langParam === 'ja' || langParam === 'uz') {
                setLanguageState(langParam as Language);
            }
        };
        
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const t = (keyPath: string): string => defaultT(keyPath, language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    return useContext(LanguageContext);
};
