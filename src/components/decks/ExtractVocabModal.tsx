import React, { useState } from 'react';
import { X, Sparkles, Loader2, BookOpen, Plus, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { extractVocabularyFromText, ExtractedVocabItem } from '../../utils/ai';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Subject } from '../../types';

interface ExtractVocabModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
}

export const ExtractVocabModal: React.FC<ExtractVocabModalProps> = ({
  isOpen,
  onClose,
  subjects,
}) => {
  const { addFlashcard } = useStudyData();
  const [rawText, setRawText] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || '');
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<ExtractedVocabItem[]>([]);
  const [savedIndices, setSavedIndices] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExtract = async () => {
    if (!rawText.trim() || isLoading) return;
    setIsLoading(true);
    setError(null);
    setSavedIndices([]);

    try {
      const extracted = await extractVocabularyFromText(rawText);
      setItems(extracted);
    } catch (err) {
      setError("Matndan so'zlarni ajratishda xatolik yuz berdi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveCard = (item: ExtractedVocabItem, index: number) => {
    if (!selectedSubjectId) return;
    addFlashcard({
      subjectId: selectedSubjectId,
      front: item.front,
      back: `${item.back} ${item.phonetic ? `(${item.phonetic})` : ''}`,
      interval: 1,
      repetitions: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString(),
    });
    setSavedIndices((prev) => [...prev, index]);
  };

  const handleSaveAll = () => {
    if (!selectedSubjectId) return;
    items.forEach((item, index) => {
      if (!savedIndices.includes(index)) {
        handleSaveCard(item, index);
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl space-y-6 rounded-3xl border border-border bg-card p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">AI Vocab Extractor</h3>
              <p className="text-xs text-muted-foreground">
                Istalgan Yaponcha matn yoki maqoladan so'zlarni ajratib fleshkarta qiling.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase text-muted-foreground">
              To'plam (Fan) Tanlang:
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-primary"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon || '📚'} {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase text-muted-foreground">
              Matn (Yaponcha maqola / Dialog / NHK News):
            </label>
            <textarea
              rows={5}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Matnni shu yerga joylashtiring..."
              className="w-full resize-none rounded-xl border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>

          <Button
            onClick={handleExtract}
            disabled={isLoading || !rawText.trim()}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-bold text-white shadow-lg shadow-indigo-500/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={18} /> So'zlar Ajratilmoqda...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" size={18} /> So'zlarni Ajratib Olish
              </>
            )}
          </Button>

          {error && <p className="text-center text-sm font-medium text-red-500">{error}</p>}

          {items.length > 0 && (
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <BookOpen size={16} className="text-primary" /> Topilgan So'zlar ({items.length}):
                </h4>
                <Button
                  variant="secondary"
                  onClick={handleSaveAll}
                  className="border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-600 hover:bg-emerald-500/20"
                >
                  Barchasini Qo'shish
                </Button>
              </div>

              <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
                {items.map((item, idx) => {
                  const isSaved = savedIndices.includes(idx);
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-muted/40 p-3"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-extrabold text-foreground">
                            {item.front}
                          </span>
                          {item.phonetic && (
                            <span className="font-mono text-xs text-muted-foreground">
                              {item.phonetic}
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-medium text-primary">{item.back}</p>
                        {item.example && (
                          <p className="text-xs italic text-muted-foreground">"{item.example}"</p>
                        )}
                      </div>
                      <Button
                        variant={isSaved ? 'secondary' : 'default'}
                        disabled={isSaved}
                        onClick={() => handleSaveCard(item, idx)}
                        className={`shrink-0 rounded-lg px-3 py-1.5 text-xs ${isSaved ? 'border-none bg-emerald-500/20 text-emerald-600' : ''}`}
                      >
                        {isSaved ? (
                          <>
                            <Check size={14} className="mr-1" /> Saqlandi
                          </>
                        ) : (
                          <>
                            <Plus size={14} className="mr-1" /> Qo'shish
                          </>
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
