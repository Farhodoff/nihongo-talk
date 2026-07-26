import React, { createContext, useContext, useState } from 'react';
import { uz } from '../i18n/uz';
import { en } from '../i18n/en';

type Language = 'uz' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (keyPath: string) => string;
}

const translations: Record<Language, any> = { uz, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('study_planner_lang');
        return (saved === 'en' || saved === 'uz') ? saved : 'uz';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('study_planner_lang', lang);
    };

    const t = (keyPath: string): string => {
        const keys = keyPath.split('.');
        let current = translations[language];
        for (const k of keys) {
            if (current && current[k] !== undefined) {
                current = current[k];
            } else {
                return keyPath;
            }
        }
        return typeof current === 'string' ? current : keyPath;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
