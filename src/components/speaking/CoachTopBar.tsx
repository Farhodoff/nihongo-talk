import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CoachPersona, PERSONAS_BY_LANG } from './speakingTypes';
import { Check, GraduationCap, Settings as SettingsIcon, ArrowLeft } from 'lucide-react';

interface CoachTopBarProps {
    language: 'en' | 'ja';
    persona: CoachPersona;
    isLiveSession: boolean;
    sessionSeconds: number;
    chatHistoryLength: number;
    showPersonaSelector: boolean;
    setShowPersonaSelector: (show: boolean) => void;
    handleLanguageChange: (lang: 'en' | 'ja') => void;
    setPersona: (p: CoachPersona) => void;
    targetBand: string;
    setTargetBand: (band: any) => void;
    isPaidUser?: boolean;
    isAdmin: boolean;
    isSuperAdmin?: boolean;
    onOpenSettings: () => void;
    formatTimer: (sec: number) => string;
    activeScenario?: any;
}

export const CoachTopBar: React.FC<CoachTopBarProps> = ({
    language,
    persona,
    isLiveSession,
    sessionSeconds,
    chatHistoryLength,
    showPersonaSelector,
    setShowPersonaSelector,
    handleLanguageChange,
    setPersona,
    targetBand,
    setTargetBand,
    isPaidUser: _isPaidUser,
    isAdmin,
    isSuperAdmin: isSuper,
    onOpenSettings,
    formatTimer,
    activeScenario
}) => {
    const navigate = useNavigate();
    const PERSONAS = PERSONAS_BY_LANG[language];
    const currentPersona = PERSONAS[persona];
    const ActivePersonaIcon = currentPersona.icon;

    const displayName = activeScenario
        ? `${activeScenario.emoji} ${activeScenario.title_ja}`
        : currentPersona.name;

    const displayDesc = activeScenario
        ? `JLPT ${activeScenario.difficulty} • ${activeScenario.title_uz}`
        : currentPersona.desc;

    return (
        <div className="relative z-10 px-3 md:px-5 pt-3 pb-2 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap flex-shrink-0">
            {/* Left: Exit/Back button + Title + Status */}
            <div className="flex items-center gap-2.5 min-w-0">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="p-2 sm:p-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-white dark:hover:bg-gray-800 transition-all shadow-xs shrink-0"
                    title="Chiqish / Orqaga"
                >
                    <ArrowLeft size={17} />
                </button>
                <div className={`relative p-2 sm:p-2.5 bg-gradient-to-tr ${currentPersona.color} text-white rounded-2xl shadow-lg flex items-center justify-center shrink-0`}>
                    {activeScenario ? (
                        <span className="text-lg">{activeScenario.emoji}</span>
                    ) : (
                        <ActivePersonaIcon size={18} />
                    )}
                    {isLiveSession && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                    )}
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                        <h2 className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-gray-900 dark:text-white truncate">
                            {displayName}
                        </h2>
                        {isLiveSession && (
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                LIVE
                            </span>
                        )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">
                        {isLiveSession ? `⏱ ${formatTimer(sessionSeconds)} • ${chatHistoryLength} xabar` : displayDesc}
                    </p>
                </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-1.5 shrink-0 ml-auto sm:ml-0">
                {/* Language Switcher Pill */}
                <div className="flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-0.5 sm:p-1 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    {isSuper && (
                        <button
                            onClick={() => handleLanguageChange('en')}
                            disabled={isLiveSession}
                            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                                language === 'en'
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                        >
                            🇬🇧 EN
                        </button>
                    )}
                    <button
                        onClick={() => handleLanguageChange('ja')}
                        disabled={isLiveSession}
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                            language === 'ja'
                            ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm'
                            : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                    >
                        🇯🇵 JA
                    </button>
                </div>

                {/* Persona Toggle Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setShowPersonaSelector(!showPersonaSelector)}
                        disabled={isLiveSession}
                        className="p-1.5 sm:p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all disabled:opacity-40 hover:shadow-md"
                        title="Persona tanlash"
                    >
                        <span className="text-sm">{currentPersona.emoji}</span>
                    </button>
                    
                    {showPersonaSelector && !isLiveSession && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowPersonaSelector(false)} />
                            <div className="absolute right-0 top-full mt-2 z-50 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    {language === 'ja' ? 'パートナーを えらぶ' : 'Persona tanlang'}
                                </div>
                                {(Object.keys(PERSONAS) as CoachPersona[])
                                    .filter(pKey => !(pKey === 'interview' && language === 'ja' && !isAdmin))
                                    .map(pKey => {
                                        const p = PERSONAS[pKey];
                                        const Icon = p.icon;
                                        const isSelected = persona === pKey;
                                        return (
                                            <button
                                                key={pKey}
                                                onClick={() => {
                                                    setPersona(pKey);
                                                    setShowPersonaSelector(false);
                                                }}
                                                className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left ${
                                                    isSelected 
                                                    ? `bg-gradient-to-r ${p.color} text-white shadow-md` 
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                            >
                                                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                                    <Icon size={16} />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="text-xs font-bold truncate flex items-center gap-1.5">
                                                        {p.name}
                                                    </div>
                                                    <div className={`text-[10px] truncate ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>{p.desc}</div>
                                                </div>
                                                {isSelected && <Check size={14} className="ml-auto shrink-0" />}
                                            </button>
                                        );
                                    })}
                            </div>
                        </>
                    )}
                </div>

                {/* Target Band Level Selector (Desktop & Tablet) */}
                {language === 'en' && (
                    <div className="hidden sm:flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl px-2 py-1 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <GraduationCap size={13} className="text-amber-500 mr-1.5" />
                        <span className="text-[10px] font-bold text-gray-400 mr-1">Band:</span>
                        {(['6.0', '7.0', '8.0', '9.0'] as const).map(b => (
                            <button
                                key={b}
                                disabled={isLiveSession}
                                onClick={() => setTargetBand(b)}
                                className={`px-1.5 py-0.5 text-[10px] font-extrabold rounded-md transition-all ${targetBand === b ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>
                )}

                {/* Settings */}
                <button 
                    onClick={onOpenSettings}
                    className="p-1.5 sm:p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    title="Coach AI Sozlamalari"
                >
                    <SettingsIcon size={16} />
                </button>
            </div>
        </div>
    );
};
