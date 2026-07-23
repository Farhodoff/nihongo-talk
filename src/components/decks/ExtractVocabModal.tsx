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

export const ExtractVocabModal: React.FC<ExtractVocabModalProps> = ({ isOpen, onClose, subjects }) => {
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
            nextReviewDate: new Date().toISOString()
        });
        setSavedIndices(prev => [...prev, index]);
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
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-card border border-border w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                            <Sparkles size={22} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">AI Vocab Extractor</h3>
                            <p className="text-xs text-muted-foreground">Istalgan IELTS matni yoki maqoladan akademik so'zlarni ajratib fleshkarta qiling.</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground rounded-lg">
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase mb-1.5">To'plam (Fan) Tanlang:</label>
                        <select
                            value={selectedSubjectId}
                            onChange={(e) => setSelectedSubjectId(e.target.value)}
                            className="w-full p-3 rounded-xl border border-border bg-background text-foreground text-sm outline-none focus:border-primary"
                        >
                            {subjects.map(s => (
                                <option key={s.id} value={s.id}>{s.icon || '📚'} {s.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase mb-1.5">Matn (IELTS Reading / Essay / Article):</label>
                        <textarea
                            rows={5}
                            value={rawText}
                            onChange={(e) => setRawText(e.target.value)}
                            placeholder="Matnni shu yerga joylashtiring..."
                            className="w-full p-3 rounded-xl border border-border bg-background text-foreground text-sm outline-none focus:border-primary resize-none"
                        />
                    </div>

                    <Button
                        onClick={handleExtract}
                        disabled={isLoading || !rawText.trim()}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20"
                    >
                        {isLoading ? (
                            <><Loader2 className="animate-spin mr-2" size={18} /> So'zlar Ajratilmoqda...</>
                        ) : (
                            <><Sparkles className="mr-2" size={18} /> So'zlarni Ajratib Olish</>
                        )}
                    </Button>

                    {error && <p className="text-sm text-red-500 text-center font-medium">{error}</p>}

                    {items.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                                    <BookOpen size={16} className="text-primary" /> Topilgan So'zlar ({items.length}):
                                </h4>
                                <Button
                                    variant="secondary"
                                    onClick={handleSaveAll}
                                    className="text-xs py-1.5 px-3 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/30"
                                >
                                    Barchasini Qo'shish
                                </Button>
                            </div>

                            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                                {items.map((item, idx) => {
                                    const isSaved = savedIndices.includes(idx);
                                    return (
                                        <div key={idx} className="p-3 bg-muted/40 border border-border/60 rounded-xl flex items-center justify-between gap-4">
                                            <div className="space-y-0.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-extrabold text-sm text-foreground">{item.front}</span>
                                                    {item.phonetic && <span className="text-xs text-muted-foreground font-mono">{item.phonetic}</span>}
                                                </div>
                                                <p className="text-xs text-primary font-medium">{item.back}</p>
                                                {item.example && <p className="text-xs text-muted-foreground italic">"{item.example}"</p>}
                                            </div>
                                            <Button
                                                variant={isSaved ? "secondary" : "default"}
                                                disabled={isSaved}
                                                onClick={() => handleSaveCard(item, idx)}
                                                className={`text-xs px-3 py-1.5 rounded-lg shrink-0 ${isSaved ? 'bg-emerald-500/20 text-emerald-600 border-none' : ''}`}
                                            >
                                                {isSaved ? <><Check size={14} className="mr-1" /> Saqlandi</> : <><Plus size={14} className="mr-1" /> Qo'shish</>}
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
