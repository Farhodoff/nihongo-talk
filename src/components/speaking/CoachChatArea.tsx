import React from 'react';
import { CoachChatMessage, CoachVocabularyItem, CoachPersonaItem } from './speakingTypes';
import { Check, Copy, Volume2, Mic, Plus, Sparkles } from 'lucide-react';
import { extractSpeechAudioText } from '../../utils/ai';

interface CoachChatAreaProps {
    chatHistory: CoachChatMessage[];
    isLiveSession: boolean;
    currentPersona: CoachPersonaItem;
    currentTranscript: string;
    isListening: boolean;
    isThinking: boolean;
    copiedIndex: number | null;
    chatContainerRef: React.RefObject<HTMLDivElement>;
    handleTranslateMessage: (idx: number) => void;
    copyToClipboard: (text: string, index: number) => void;
    speakText: (text: string) => void;
    setChatHistory: React.Dispatch<React.SetStateAction<CoachChatMessage[]>>;
    onAddVocabulary?: (vocab: CoachVocabularyItem) => void;
}

export const CoachChatArea: React.FC<CoachChatAreaProps> = ({
    chatHistory,
    isLiveSession,
    currentPersona,
    currentTranscript,
    isListening,
    isThinking,
    copiedIndex,
    chatContainerRef,
    handleTranslateMessage,
    copyToClipboard,
    speakText,
    setChatHistory,
    onAddVocabulary,
}) => {
    const ActivePersonaIcon = currentPersona?.icon || Sparkles;

    if (chatHistory.length === 0 && !isLiveSession) return null;

    return (
        <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-3 py-3 px-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
            {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                    {/* AI Avatar */}
                    {msg.role === 'assistant' && (
                        <div className={`shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr ${currentPersona.color} flex items-center justify-center mr-2 mt-1 shadow-md`}>
                            <ActivePersonaIcon size={14} className="text-white" />
                        </div>
                    )}

                    <div className="group relative max-w-[85%] sm:max-w-[75%] md:max-w-[70%] transition-all">
                        {/* Message Bubble */}
                        <div className={`p-3 sm:p-3.5 rounded-2xl shadow-sm ${msg.role === 'user'
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md shadow-indigo-500/15'
                                : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-900 dark:text-gray-100 rounded-tl-md border border-gray-200/60 dark:border-gray-700/60 shadow-lg'
                            }`}>
                            {/* Timestamp */}
                            <div className={`flex items-center gap-1.5 mb-1.5 text-[10px] font-semibold ${msg.role === 'user' ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'
                                }`}>
                                <span>{msg.role === 'user' ? 'Siz' : currentPersona.name}</span>
                                <span>•</span>
                                <span>{msg.timestamp}</span>
                            </div>

                            <p className="text-xs sm:text-sm leading-relaxed font-medium whitespace-pre-wrap">
                                {msg.content}
                            </p>

                            {/* Romaji Reading Aid */}
                            {msg.role === 'assistant' && msg.romaji && (
                                <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 italic leading-tight">
                                    {msg.romaji}
                                </p>
                            )}

                            {/* Instant Correction Banner */}
                            {msg.role === 'assistant' && msg.correction && msg.correction.hasError && msg.correction.corrected && (
                                <div className="mt-2.5 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-1">
                                    <div className="flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 text-[11px]">
                                        <span>💡 Grammatika / Iborani yaxshilash:</span>
                                    </div>
                                    {msg.correction.original && (
                                        <div className="text-rose-600 dark:text-rose-400 line-through text-[11px]">
                                            ❌ {msg.correction.original}
                                        </div>
                                    )}
                                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                                        ✅ {msg.correction.corrected}
                                    </div>
                                    {msg.correction.explanation && (
                                        <div className="text-gray-600 dark:text-gray-300 text-[11px] mt-0.5 leading-relaxed">
                                            {msg.correction.explanation}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Vocabulary Recommendations */}
                            {msg.role === 'assistant' && msg.vocabulary && msg.vocabulary.length > 0 && (
                                <div className="mt-2.5 pt-2 border-t border-gray-200/50 dark:border-gray-700/50 space-y-1.5">
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                        <span>🧠 Yangi Lug'atlar:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {msg.vocabulary.map((vocab, vIdx) => (
                                            <div key={vIdx} className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/60 rounded-lg text-xs">
                                                <span className="font-bold text-gray-900 dark:text-gray-100">{vocab.word}</span>
                                                {vocab.reading && <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">({vocab.reading})</span>}
                                                <span className="text-[11px] text-gray-600 dark:text-gray-300">• {vocab.meaning}</span>
                                                {onAddVocabulary && (
                                                    <button
                                                        onClick={() => onAddVocabulary(vocab)}
                                                        className="ml-0.5 p-0.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                                        title="Flashcardga qo'shish"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Uzbek Translation Box */}
                            {msg.role === 'assistant' && (
                                <div className="mt-2.5 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                                    {!msg.showTranslation ? (
                                        <button
                                            onClick={() => handleTranslateMessage(idx)}
                                            disabled={msg.isTranslating}
                                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/30"
                                        >
                                            <span>🇺🇿</span>
                                            <span>{msg.isTranslating ? 'Tarjima qilinmoqda...' : "O'zbekcha tarjimasi"}</span>
                                        </button>
                                    ) : (
                                        <div className="p-2.5 sm:p-3 bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/40 rounded-xl text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed font-medium animate-in fade-in">
                                            <div className="flex justify-between items-center mb-1 font-bold text-[11px] text-indigo-600 dark:text-indigo-400">
                                                <span className="flex items-center gap-1">🇺🇿 O'zbekcha tarjimasi:</span>
                                                <button
                                                    onClick={() => setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, showTranslation: false } : m))}
                                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-[10px]"
                                                >
                                                    Berkitish ✕
                                                </button>
                                            </div>
                                            <p className="whitespace-pre-wrap">{msg.translation}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className={`flex items-center gap-0.5 mt-1 ${msg.role === 'user' ? 'justify-end' : 'justify-start ml-0'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                            <button
                                onClick={() => copyToClipboard(msg.content, idx)}
                                className="p-1 rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-700/60 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                title="Nusxalash"
                            >
                                {copiedIndex === idx ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            </button>
                            {msg.role === 'assistant' && (
                                <button
                                    onClick={() => speakText(msg.ttsText || extractSpeechAudioText(msg.content))}
                                    className="p-1 rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-700/60 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                    title="Qayta O'qib berish"
                                >
                                    <Volume2 size={12} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Live Transcript Bubble */}
            {(currentTranscript || isListening) && (
                <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
                    <div className="max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl rounded-tr-md bg-indigo-500/10 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 border border-indigo-400/20 backdrop-blur-xl">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 dark:text-indigo-400 mb-1.5">
                            <Mic size={12} className="animate-pulse" />
                            <span>Eshitilmoqda...</span>
                        </div>
                        <p className="text-xs sm:text-sm italic font-medium">
                            {currentTranscript || "Gapiring, AI sizni eshitmoqda..."}
                        </p>
                    </div>
                </div>
            )}

            {/* AI Thinking Indicator */}
            {isThinking && (
                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                    <div className={`shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr ${currentPersona.color} flex items-center justify-center mr-2 mt-1 shadow-md`}>
                        <ActivePersonaIcon size={14} className="text-white animate-pulse" />
                    </div>
                    <div className="p-3.5 rounded-2xl rounded-tl-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="flex items-end gap-[3px] h-4">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div
                                        key={i}
                                        className={`w-[3px] rounded-full bg-gradient-to-t ${currentPersona.color} animate-bounce`}
                                        style={{
                                            animationDelay: `${i * 120}ms`,
                                            animationDuration: '0.8s',
                                            height: `${[60, 100, 40, 80, 50][i]}%`
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                                {currentPersona.name} javob tayyorlamoqda...
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoachChatArea;