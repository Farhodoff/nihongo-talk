import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CoachPersona, PERSONAS_BY_LANG } from './speakingTypes';
import {
  Check,
  GraduationCap,
  Settings as SettingsIcon,
  ArrowLeft,
  Maximize2,
  Minimize2,
  Layers,
} from 'lucide-react';

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
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
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
  isFullscreen = false,
  onToggleFullscreen,
  onOpenSettings,
  formatTimer,
  activeScenario,
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
    <div className="relative z-10 flex flex-shrink-0 flex-wrap items-center justify-between gap-2 px-3 pb-2 pt-3 sm:flex-nowrap md:px-5">
      {/* Left: Exit/Back button + Title + Status */}
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="shrink-0 cursor-pointer rounded-2xl border border-border bg-card/90 p-2 text-muted-foreground shadow-xs backdrop-blur-xl transition-all hover:bg-muted hover:text-foreground sm:p-2.5"
          title="Chiqish / Orqaga"
        >
          <ArrowLeft size={17} />
        </button>
        <div
          className={`relative bg-gradient-to-tr p-2 sm:p-2.5 ${currentPersona.color} flex shrink-0 items-center justify-center rounded-2xl text-white shadow-md`}
        >
          {activeScenario ? (
            <span className="text-lg">{activeScenario.emoji}</span>
          ) : (
            <ActivePersonaIcon size={18} />
          )}
          {isLiveSession && (
            <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full border-2 border-background bg-emerald-400" />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="truncate text-sm font-bold tracking-tight text-foreground sm:text-base md:text-lg">
              {displayName}
            </h2>
            {isLiveSession && (
              <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                LIVE
              </span>
            )}
          </div>
          <p className="truncate text-[10px] font-medium text-muted-foreground sm:text-[11px]">
            {isLiveSession
              ? `⏱ ${formatTimer(sessionSeconds)} • ${chatHistoryLength} xabar`
              : displayDesc}
          </p>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:ml-0">
        {/* Language Switcher Pill */}
        <div className="flex items-center rounded-xl border border-border bg-card/90 p-0.5 backdrop-blur-xl sm:p-1">
          {isSuper && (
            <button
              onClick={() => handleLanguageChange('en')}
              disabled={isLiveSession}
              className={`flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-all sm:text-xs ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              🇬🇧 EN
            </button>
          )}
          <button
            onClick={() => handleLanguageChange('ja')}
            disabled={isLiveSession}
            className={`flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-all sm:text-xs ${
              language === 'ja'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            🎌 JA
          </button>
        </div>

        {/* Persona Toggle Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowPersonaSelector(!showPersonaSelector)}
            disabled={isLiveSession}
            className="cursor-pointer rounded-xl border border-border bg-card/90 p-1.5 text-muted-foreground backdrop-blur-xl transition-all hover:border-primary/40 hover:text-primary hover:shadow-md disabled:opacity-40 sm:p-2"
            title="Persona tanlash"
          >
            <span className="text-sm">{currentPersona.emoji}</span>
          </button>

          {showPersonaSelector && !isLiveSession && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowPersonaSelector(false)} />
              <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-border bg-card/95 p-2 shadow-2xl backdrop-blur-2xl duration-200 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {language === 'ja' ? 'パートナーを えらぶ' : 'Persona tanlang'}
                </div>
                {(Object.keys(PERSONAS) as CoachPersona[])
                  .filter((pKey) => !(pKey === 'interview' && language === 'ja' && !isAdmin))
                  .map((pKey) => {
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
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl p-2.5 text-left transition-all ${
                          isSelected
                            ? `bg-gradient-to-r ${p.color} text-white shadow-md`
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        <div
                          className={`rounded-lg p-1.5 ${isSelected ? 'bg-white/20' : 'bg-muted'}`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 truncate text-xs font-bold">
                            {p.name}
                          </div>
                          <div
                            className={`truncate text-[10px] ${isSelected ? 'text-white/70' : 'text-muted-foreground'}`}
                          >
                            {p.desc}
                          </div>
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
          <div className="hidden items-center rounded-xl border border-border bg-card/90 px-2 py-1 backdrop-blur-xl sm:flex">
            <GraduationCap size={13} className="mr-1.5 text-[#C9A961]" />
            <span className="mr-1 text-[10px] font-bold text-muted-foreground">Band:</span>
            {(['6.0', '7.0', '8.0', '9.0'] as const).map((b) => (
              <button
                key={b}
                disabled={isLiveSession}
                onClick={() => setTargetBand(b)}
                className={`cursor-pointer rounded-md px-1.5 py-0.5 text-[10px] font-extrabold transition-all ${targetBand === b ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {b}
              </button>
            ))}
          </div>
        )}

        {/* Speaking Flashcards Quick Access */}
        <button
          type="button"
          onClick={() => navigate('/decks')}
          className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-amber-500/20 bg-amber-500/10 px-2.5 py-1.5 text-xs font-bold text-amber-500 transition-all hover:bg-amber-500/20 hover:shadow-xs"
          title="Speaking Coach lug'atlari va fleshkartalari"
        >
          <Layers size={14} className="shrink-0" />
          <span className="hidden sm:inline">Lug'atlarim</span>
        </button>

        {/* Fullscreen Toggle (⛶ Zoom/Fullscreen mode) */}
        {onToggleFullscreen && (
          <button
            onClick={onToggleFullscreen}
            className={`cursor-pointer rounded-xl border p-1.5 backdrop-blur-xl transition-all hover:shadow-md sm:p-2 ${
              isFullscreen
                ? 'border-primary bg-primary text-primary-foreground shadow-primary/25'
                : 'border-border bg-card/90 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            title={
              isFullscreen
                ? 'Oddiy rejimga qaytish (Exit Fullscreen)'
                : "To'liq ekran rejimi (Fullscreen)"
            }
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        )}

        {/* Settings */}
        <button
          onClick={onOpenSettings}
          className="cursor-pointer rounded-xl border border-border bg-card/90 p-1.5 text-muted-foreground backdrop-blur-xl transition-all hover:bg-muted hover:text-foreground hover:shadow-md sm:p-2"
          title="Coach AI Sozlamalari"
        >
          <SettingsIcon size={16} />
        </button>
      </div>
    </div>
  );
};
