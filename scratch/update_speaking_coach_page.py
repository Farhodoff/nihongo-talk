with open('src/pages/SpeakingCoachPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import useSearchParams and Languages
content = content.replace(
    "import React, { useState, useEffect, useRef } from 'react';",
    "import React, { useState, useEffect, useRef } from 'react';\nimport { useSearchParams } from 'react-router-dom';"
)

content = content.replace(
    "Radio, MessageCircle, Crown, GraduationCap",
    "Radio, MessageCircle, Crown, GraduationCap, Languages"
)

# 2. Update SpeakingCoachPage state setup
old_state_setup = """const SpeakingCoachPage: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'ja'>('en');"""

new_state_setup = """const SpeakingCoachPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialLang = searchParams.get('lang') === 'ja' ? 'ja' : 'en';
    const [language, setLanguage] = useState<'en' | 'ja'>(initialLang);

    useEffect(() => {
        const langParam = searchParams.get('lang');
        if (langParam === 'ja' || langParam === 'en') {
            setLanguage(langParam);
        }
    }, [searchParams]);

    const handleLanguageChange = (newLang: 'en' | 'ja') => {
        if (isLiveSession) return;
        setLanguage(newLang);
        setSearchParams({ lang: newLang });
    };"""

content = content.replace(old_state_setup, new_state_setup)

# 3. Add Language Switcher Pill in Top Bar header next to persona dropdown
old_header_right = """                {/* Right: Controls */}
                <div className="flex items-center gap-1.5 shrink-0">"""

new_header_right = """                {/* Right: Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                    {/* Language Switcher Pill */}
                    <div className="flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-1 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <button
                            onClick={() => handleLanguageChange('en')}
                            disabled={isLiveSession}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                language === 'en'
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                        >
                            🇬🇧 EN
                        </button>
                        <button
                            onClick={() => handleLanguageChange('ja')}
                            disabled={isLiveSession}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                language === 'ja'
                                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                        >
                            🇯🇵 JA
                        </button>
                    </div>"""

content = content.replace(old_header_right, new_header_right)

with open('src/pages/SpeakingCoachPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated SpeakingCoachPage.tsx successfully!")
