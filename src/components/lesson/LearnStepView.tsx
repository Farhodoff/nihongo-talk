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
    <div className="mx-auto max-w-3xl space-y-6 duration-200 animate-in fade-in">
      {/* Header / Intro Card */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-4 shadow-sm sm:rounded-3xl sm:p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <BookOpen size={16} />
          <span>{content.subtitle || 'Dars Mavzusi'}</span>
        </div>
        <h2 className="mb-2 break-words text-xl font-black tracking-tight text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
          <FuriganaText text={content.title} />
        </h2>
        <p className="break-words text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <FuriganaText text={content.explanation} />
        </p>

        {/* Key Takeaways */}
        {content.keyPoints && content.keyPoints.length > 0 && (
          <div className="mt-4 space-y-2 rounded-xl border border-primary/15 bg-primary/5 p-3.5 sm:mt-5 sm:rounded-2xl sm:p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Lightbulb size={14} />
              <span>Muhim Qoidalar:</span>
            </div>
            <ul className="space-y-1.5">
              {content.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary" />
                  <span className="break-words">
                    <FuriganaText text={point} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Filter Tabs if both vocab & grammar exist */}
      {content.vocabulary && content.grammarRules && (
        <div className="scrollbar-none flex touch-pan-x items-center gap-1.5 overflow-x-auto border-b border-border pb-2 sm:gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`shrink-0 cursor-pointer touch-manipulation select-none rounded-xl px-3 py-1.5 text-xs font-bold transition-all sm:px-3.5 ${
              activeTab === 'all'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`shrink-0 cursor-pointer touch-manipulation select-none rounded-xl px-3 py-1.5 text-xs font-bold transition-all sm:px-3.5 ${
              activeTab === 'vocab'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            Lug'at ({content.vocabulary.length})
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`shrink-0 cursor-pointer touch-manipulation select-none rounded-xl px-3 py-1.5 text-xs font-bold transition-all sm:px-3.5 ${
              activeTab === 'grammar'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            Grammatika ({content.grammarRules.length})
          </button>
        </div>
      )}

      {/* Vocabulary Section */}
      {(activeTab === 'all' || activeTab === 'vocab') &&
        content.vocabulary &&
        content.vocabulary.length > 0 && (
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-foreground">
              <span>📚 Yangi So'zlar</span>
              <span className="text-xs font-normal text-muted-foreground">
                ({content.vocabulary.length} ta)
              </span>
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.vocabulary.map((vocab, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/40"
                >
                  <div>
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <div>
                        <div className="text-lg font-black text-foreground">
                          <FuriganaText text={vocab.term} />
                        </div>
                        {vocab.reading && (
                          <div className="text-xs font-medium text-primary">{vocab.reading}</div>
                        )}
                      </div>
                      <button
                        onClick={() => handleSpeak(vocab.term)}
                        className="rounded-xl bg-secondary/80 p-2 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary"
                        title="Talaffuzni eshitish"
                        aria-label={`Talaffuz: ${vocab.term}`}
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground/80">
                      {vocab.meaning}
                    </div>
                  </div>

                  {vocab.exampleSentence && (
                    <div className="mt-3 border-t border-border/60 pt-2.5 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between font-medium text-foreground/90">
                        <span>
                          <FuriganaText text={vocab.exampleSentence} />
                        </span>
                        <button
                          onClick={() => handleSpeak(vocab.exampleSentence!)}
                          className="p-0.5 text-muted-foreground hover:text-primary"
                          title="Jumlani tinglash"
                        >
                          <Volume2 size={12} />
                        </button>
                      </div>
                      {vocab.exampleTranslation && (
                        <div className="mt-0.5 text-[11px] text-muted-foreground">
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
      {(activeTab === 'all' || activeTab === 'grammar') &&
        content.grammarRules &&
        content.grammarRules.length > 0 && (
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-foreground">
              <span>📖 Grammatika Qoidalari</span>
            </h3>

            <div className="space-y-3">
              {content.grammarRules.map((grammar, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-black text-primary">
                      Qolip #{idx + 1}
                    </span>
                    <div className="text-base font-bold text-foreground">
                      <FuriganaText text={grammar.pattern} />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-primary/90">
                    Ma'nosi: <span className="font-normal text-foreground">{grammar.meaning}</span>
                  </div>

                  {grammar.usageNotes && (
                    <p className="rounded-xl bg-secondary/50 p-2.5 text-xs text-muted-foreground">
                      <FuriganaText text={grammar.usageNotes} />
                    </p>
                  )}

                  {grammar.examples && grammar.examples.length > 0 && (
                    <div className="space-y-2 border-t border-border/60 pt-2">
                      <div className="text-xs font-bold text-muted-foreground">Misollar:</div>
                      {grammar.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="flex items-start justify-between gap-2 rounded-xl bg-secondary/30 p-2.5 text-xs"
                        >
                          <div>
                            <div className="font-semibold text-foreground">
                              <FuriganaText text={ex.sentence} />
                            </div>
                            <div className="mt-0.5 text-[11px] text-muted-foreground">
                              {ex.translation}
                            </div>
                          </div>
                          <button
                            onClick={() => handleSpeak(ex.sentence)}
                            className="shrink-0 p-1 text-muted-foreground transition-all hover:text-primary"
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
        <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
          <Info size={18} className="mt-0.5 shrink-0 text-amber-500" />
          <div className="text-xs leading-relaxed text-foreground/90">
            <span className="font-bold text-amber-500">Muhim eslatma: </span>
            <FuriganaText text={content.culturalNotes} />
          </div>
        </div>
      )}
    </div>
  );
};
