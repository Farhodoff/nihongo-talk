import React from 'react';
import { Play } from 'lucide-react';
import { LiveAmbientSphere } from './LiveAmbientSphere';

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
                        <div className="absolute -inset-2 rounded-full border border-indigo-400/20 pointer-events-none" />
                        
                        {/* Main orb */}
                        <div className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr ${currentPersona.color} p-[3px] shadow-2xl transition-transform duration-300 group-hover:scale-105`}>
                            <div className="w-full h-full bg-gray-950 rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Inner animated gradient */}
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,transparent_70%)]" />
                                
                                <ActivePersonaIcon size={32} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10" />
                                <span className="mt-1.5 text-[9px] font-extrabold tracking-[0.2em] text-indigo-300/80 uppercase relative z-10">
                                    Boshlash
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-1.5">
                {currentPersona.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6 leading-relaxed">
                {currentPersona.desc}
            </p>

            {/* Quick Prompts — Premium Cards */}
            <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
                {promptSuggestions.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onPromptClick(item.title)}
                        className="group relative p-3 bg-white/70 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/40 hover:border-indigo-300/60 dark:hover:border-indigo-600/40 rounded-2xl transition-all duration-200 text-left shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <div className="flex items-start gap-2.5">
                            <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                            <div className="min-w-0">
                                <div className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-0.5 transition-colors">
                                    {item.title}
                                </div>
                                <div className="text-[10px] text-gray-400 dark:text-gray-500 line-clamp-2 leading-relaxed">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                        <Play size={12} className="absolute top-3 right-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </div>
        </div>
    );
};
