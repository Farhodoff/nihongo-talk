import React, { useState } from 'react';
import { Volume2, BookOpen, CheckCircle2, Info, Lightbulb } from 'lucide-react';
import { LearnContent, SupportedLanguage } from '../../types/lesson';
import { speakText, speakJapaneseText } from '../../utils/audioTts';
import { FuriganaText } from '../jlpt/FuriganaText';

interface LearnStepViewProps {
    content: LearnContent;
    language: SupportedLanguage;
}

export const LearnStepView: React.FC<LearnStepViewProps> = ({ content, language }) => {
    const [activeTab, setActiveTab] = useState<'all' | 'vocab' | 'grammar'>('all');

    const handleSpeak = (text: string) => {
        if (language === 'ja') {
            speakJapaneseText(text);
        } else {
            speakText(text, 'en-US');
        }
    };

    return (
        <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-200">
            {/* Header / Intro Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    <BookOpen size={16} />
                    <span>{content.subtitle || "Dars Mavzusi"}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-3">
                    <FuriganaText text={content.title} />
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    <FuriganaText text={content.explanation} />
                </p>

                {/* Key Takeaways */}
                {content.keyPoints && content.keyPoints.length > 0 && (
                    <div className="mt-5 p-4 rounded-2xl bg-primary/5 border border-primary/15 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                            <Lightbulb size={14} />
                            <span>Muhim Qoidalar:</span>
                        </div>
                        <ul className="space-y-1.5">
                            {content.keyPoints.map((point, idx) => (
                                <li key={idx} className="text-xs text-foreground/90 flex items-start gap-2">
                                    <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                                    <span><FuriganaText text={point} /></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Filter Tabs if both vocab & grammar exist */}
            {content.vocabulary && content.grammarRules && (
                <div className="flex items-center gap-2 border-b border-border pb-2">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'all'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        Barchasi
                    </button>
                    <button
                        onClick={() => setActiveTab('vocab')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'vocab'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        Lug'at ({content.vocabulary.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('grammar')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'grammar'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        Grammatika ({content.grammarRules.length})
                    </button>
                </div>
            )}

            {/* Vocabulary Section */}
            {(activeTab === 'all' || activeTab === 'vocab') && content.vocabulary && content.vocabulary.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-sm font-black text-foreground uppercase tracking-wider flex items-center gap-2">
                        <span>📚 Yangi So'zlar</span>
                        <span className="text-xs font-normal text-muted-foreground">({content.vocabulary.length} ta)</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {content.vocabulary.map((vocab, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-sm group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <div>
                                            <div className="text-lg font-black text-foreground">
                                                <FuriganaText text={vocab.term} />
                                            </div>
                                            {vocab.reading && (
                                                <div className="text-xs text-primary font-medium">
                                                    {vocab.reading}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleSpeak(vocab.term)}
                                            className="p-2 rounded-xl bg-secondary/80 hover:bg-primary/15 text-muted-foreground hover:text-primary transition-all"
                                            title="Talaffuzni eshitish"
                                            aria-label={`Talaffuz: ${vocab.term}`}
                                        >
                                            <Volume2 size={16} />
                                        </button>
                                    </div>
                                    <div className="text-sm text-foreground/80 font-medium mt-1">
                                        {vocab.meaning}
                                    </div>
                                </div>

                                {vocab.exampleSentence && (
                                    <div className="mt-3 pt-2.5 border-t border-border/60 text-xs text-muted-foreground">
                                        <div className="text-foreground/90 font-medium flex items-center justify-between">
                                            <span><FuriganaText text={vocab.exampleSentence} /></span>
                                            <button
                                                onClick={() => handleSpeak(vocab.exampleSentence!)}
                                                className="text-muted-foreground hover:text-primary p-0.5"
                                                title="Jumlani tinglash"
                                            >
                                                <Volume2 size={12} />
                                            </button>
                                        </div>
                                        {vocab.exampleTranslation && (
                                            <div className="text-[11px] text-muted-foreground mt-0.5">
                                                {vocab.exampleTranslation}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Grammar Section */}
            {(activeTab === 'all' || activeTab === 'grammar') && content.grammarRules && content.grammarRules.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-sm font-black text-foreground uppercase tracking-wider flex items-center gap-2">
                        <span>📖 Grammatika Qoidalari</span>
                    </h3>

                    <div className="space-y-3">
                        {content.grammarRules.map((grammar, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-3"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black">
                                        Qolip #{idx + 1}
                                    </span>
                                    <div className="text-base font-bold text-foreground">
                                        <FuriganaText text={grammar.pattern} />
                                    </div>
                                </div>

                                <div className="text-xs font-semibold text-primary/90">
                                    Ma'nosi: <span className="text-foreground font-normal">{grammar.meaning}</span>
                                </div>

                                {grammar.usageNotes && (
                                    <p className="text-xs text-muted-foreground bg-secondary/50 p-2.5 rounded-xl">
                                        <FuriganaText text={grammar.usageNotes} />
                                    </p>
                                )}

                                {grammar.examples && grammar.examples.length > 0 && (
                                    <div className="space-y-2 pt-2 border-t border-border/60">
                                        <div className="text-xs font-bold text-muted-foreground">Misollar:</div>
                                        {grammar.examples.map((ex, exIdx) => (
                                            <div key={exIdx} className="text-xs p-2.5 rounded-xl bg-secondary/30 flex items-start justify-between gap-2">
                                                <div>
                                                    <div className="font-semibold text-foreground"><FuriganaText text={ex.sentence} /></div>
                                                    <div className="text-muted-foreground text-[11px] mt-0.5">{ex.translation}</div>
                                                </div>
                                                <button
                                                    onClick={() => handleSpeak(ex.sentence)}
                                                    className="p-1 text-muted-foreground hover:text-primary transition-all shrink-0"
                                                    title="Tinglash"
                                                >
                                                    <Volume2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Cultural or Practical Note */}
            {content.culturalNotes && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                    <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-foreground/90 leading-relaxed">
                        <span className="font-bold text-amber-500">Muhim eslatma: </span>
                        <FuriganaText text={content.culturalNotes} />
                    </div>
                </div>
            )}
        </div>
    );
};
