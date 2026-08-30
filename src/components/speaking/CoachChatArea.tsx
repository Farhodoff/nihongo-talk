import React, { useState } from 'react';
import { CoachChatMessage, CoachVocabularyItem, CoachPersonaItem } from './speakingTypes';
import { Check, Copy, Volume2, Mic, Plus, Sparkles } from 'lucide-react';
import { extractSpeechAudioText } from '../../utils/ai';
import { UzbekistanFlag } from '../common/FlagIcons';

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
    onAddVocabulary?: (vocab: CoachVocabularyItem) => Promise<boolean | void> | void;
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
    const [addedVocabs, setAddedVocabs] = useState<Set<string>>(new Set());
    const ActivePersonaIcon = currentPersona?.icon || Sparkles;

    const handleVocabClick = async (vocab: CoachVocabularyItem) => {
        if (!onAddVocabulary) return;
        setAddedVocabs(prev => new Set(prev).add(vocab.word));
        try {
            await onAddVocabulary(vocab);
        } catch {
            // Keep state as marked or handle gracefully
        }
    };

    if (chatHistory.length === 0 && !isLiveSession) return null;

    return (
        <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-3 py-3 px-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
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
                                ? 'bg-primary text-primary-foreground rounded-tr-md shadow-md shadow-primary/20'
                                : 'bg-card border border-border text-foreground rounded-tl-md shadow-sm'
                            }`}>
                            {/* Timestamp */}
                            <div className={`flex items-center gap-1.5 mb-1.5 text-[10px] font-semibold ${msg.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
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
                                <p className="text-[11px] font-mono text-muted-foreground mt-1 italic leading-tight">
                                    {msg.romaji}
                                </p>
                            )}

                            {/* Instant Correction Banner */}
                            {msg.role === 'assistant' && msg.correction && msg.correction.hasError && msg.correction.corrected && (
                                <div className="mt-2.5 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-1">
                                    <div className="flex items-center gap-1 font-bold text-[#C9A961] text-[11px]">
                                        <span>💡 Grammatika / Iborani yaxshilash:</span>
                                    </div>
                                    {msg.correction.original && (
                                        <div className="text-rose-400 line-through text-[11px]">
                                            ❌ {msg.correction.original}
                                        </div>
                                    )}
                                    <div className="text-emerald-400 font-semibold text-xs">
                                        ✅ {msg.correction.corrected}
                                    </div>
                                    {msg.correction.explanation && (
                                        <div className="text-muted-foreground text-[11px] mt-0.5 leading-relaxed">
                                            {msg.correction.explanation}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Vocabulary Recommendations */}
                            {msg.role === 'assistant' && msg.vocabulary && msg.vocabulary.length > 0 && (
                                <div className="mt-2.5 pt-2 border-t border-border/50 space-y-1.5">
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                                        <span>🧠 Yangi Lug'atlar (Fleshkarta):</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {msg.vocabulary.map((vocab, vIdx) => {
                                            const isSaved = addedVocabs.has(vocab.word);
                                            return (
                                                <div 
                                                    key={vIdx} 
                                                    className={`inline-flex items-center gap-2 px-2.5 py-1.5 border rounded-xl text-xs transition-all ${
                                                        isSaved
                                                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-xs'
                                                            : 'bg-muted/80 border-border hover:border-primary/50 text-foreground shadow-xs'
                                                    }`}
                                                >
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-bold text-foreground">{vocab.word}</span>
                                                        {vocab.reading && (
                                                            <span className="text-[10px] text-muted-foreground font-mono">({vocab.reading})</span>
                                                        )}
                                                    </div>
                                                    <span className="text-[11px] text-muted-foreground">• {vocab.meaning}</span>
                                                    
                                                    {onAddVocabulary && (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleVocabClick(vocab)}
                                                            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                                                isSaved
                                                                    ? 'bg-emerald-600 text-white cursor-default'
                                                                    : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs active:scale-95'
                                                            }`}
                                                            title={isSaved ? "Fleshkartaga saqlangan" : "Fleshkartaga qo'shish"}
                                                        >
                                                            {isSaved ? (
                                                                <>
                                                                    <Check size={12} className="shrink-0" />
                                                                    <span>Saqlandi</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Plus size={12} className="shrink-0" />
                                                                    <span>Qo'shish</span>
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Uzbek Translation Box */}
                            {msg.role === 'assistant' && (
                                <div className="mt-2.5 pt-2 border-t border-border/50">
                                    {!msg.showTranslation ? (
                                        <button
                                            onClick={() => handleTranslateMessage(idx)}
                                            disabled={msg.isTranslating}
                                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20 cursor-pointer"
                                        >
                                            <UzbekistanFlag className="w-3.5 h-2.5" />
                                            <span>{msg.isTranslating ? 'Tarjima qilinmoqda...' : "O'zbekcha tarjimasi"}</span>
                                        </button>
                                    ) : (
                                        <div className="p-2.5 sm:p-3 bg-muted/80 border border-border rounded-xl text-xs text-foreground leading-relaxed font-medium animate-in fade-in">
                                            <div className="flex justify-between items-center mb-1 font-bold text-[11px] text-primary">
                                                <span className="flex items-center gap-1.5">
                                                    <UzbekistanFlag className="w-3.5 h-2.5" />
                                                    <span>O'zbekcha tarjimasi:</span>
                                                </span>
                                                <button
                                                    onClick={() => setChatHistory(prev => prev.map((m, i) => i === idx ? { ...m, showTranslation: false } : m))}
                                                    className="text-muted-foreground hover:text-foreground text-[10px] cursor-pointer"
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
                                className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                title="Nusxalash"
                            >
                                {copiedIndex === idx ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            </button>
                            {msg.role === 'assistant' && (
                                <button
                                    onClick={() => speakText(msg.ttsText || extractSpeechAudioText(msg.content))}
                                    className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
                    <div className="max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl rounded-tr-md bg-primary/10 text-foreground border border-primary/30 backdrop-blur-xl">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary mb-1.5">
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
                    <div className="p-3.5 rounded-2xl rounded-tl-md bg-card border border-border shadow-sm">
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
                            <span className="text-xs font-medium text-muted-foreground">
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