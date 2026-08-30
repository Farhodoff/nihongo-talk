import React from 'react';
import { Play } from 'lucide-react';
import { LiveAmbientSphere } from './LiveAmbientSphere';

import { useLanguage } from '../../context/LanguageContext';

interface PromptSuggestion {
    title: string;
    text: string;
    icon: string;
}

interface CoachWelcomeScreenProps {
    currentPersona: any;
    isLiveSession: boolean;
    isSpeaking: boolean;
    isThinking: boolean;
    isListening: boolean;
    promptSuggestions: PromptSuggestion[];
    onStartSession: () => void;
    onPromptClick: (text: string) => void;
}

export const CoachWelcomeScreen: React.FC<CoachWelcomeScreenProps> = ({
    currentPersona,
    isLiveSession,
    isSpeaking,
    isThinking,
    isListening,
    promptSuggestions,
    onStartSession,
    onPromptClick,
}) => {
    const ActivePersonaIcon = currentPersona.icon;
    const { language } = useLanguage();

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 overflow-y-auto scrollbar-hide py-6">
            
            {/* Dynamic Live Ambient Neon Sphere */}
            <div className="relative mb-6 group cursor-pointer" onClick={onStartSession}>
                {isLiveSession ? (
                    <LiveAmbientSphere
                        status={isSpeaking ? 'speaking' : isThinking ? 'thinking' : isListening ? 'listening' : 'idle'}
                        size={240}
                    />
                ) : (
                    <>
                        {/* Outer glow rings (fixed bounds, zero overflow jitter) */}
                        <div className={`absolute -inset-4 rounded-full bg-gradient-to-tr ${currentPersona.color} opacity-20 blur-xl animate-pulse pointer-events-none`} />
                        <div className="absolute -inset-2 rounded-full border border-primary/20 pointer-events-none" />
                        
                        {/* Main orb */}
                        <div className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr ${currentPersona.color} p-[3px] shadow-2xl transition-transform duration-300 group-hover:scale-105`}>
                            <div className="w-full h-full bg-card rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Inner animated gradient */}
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(232,72,58,0.25)_0%,transparent_70%)]" />
                                
                                <ActivePersonaIcon size={32} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10" />
                                <span className="mt-1.5 text-[9px] font-extrabold tracking-[0.2em] text-[#C9A961] uppercase relative z-10">
                                    {language === 'ja' ? '開始' : 'Boshlash'}
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-foreground mb-1.5">
                {currentPersona.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
                {currentPersona.desc}
            </p>

            {/* Quick Prompts — Premium Cards */}
            <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {promptSuggestions.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onPromptClick(item.title)}
                        className="group relative p-3.5 bg-card/90 hover:bg-card backdrop-blur-xl border border-border hover:border-primary/50 rounded-2xl transition-all duration-200 text-left shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-95"
                    >
                        <div className="flex items-start gap-2.5">
                            <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                            <div className="min-w-0">
                                <div className="text-xs font-bold text-foreground group-hover:text-primary mb-0.5 transition-colors">
                                    {item.title}
                                </div>
                                <div className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                        <Play size={12} className="absolute top-3.5 right-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                    </button>
                ))}
            </div>
        </div>
    );
};
