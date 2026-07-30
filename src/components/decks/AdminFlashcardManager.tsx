import React, { useState, useMemo } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Flashcard } from '../../types';
import { Button } from '../ui/Button';
import { Search, Trash2, ShieldAlert, CheckSquare, Square, X, AlertCircle, Filter } from 'lucide-react';

interface AdminFlashcardManagerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AdminFlashcardManager: React.FC<AdminFlashcardManagerProps> = ({ isOpen, onClose }) => {
    const { flashcards, subjects, deleteFlashcard } = useStudyData();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
    const [onlyGibberish, setOnlyGibberish] = useState(false);
    const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);

    // Gibberish / Bad card detection logic
    const isGibberish = (card: Flashcard): boolean => {
        if (!card.front || !card.back) return true;
        if (card.front.trim().length === 0 || card.back.trim().length === 0) return true;
        
        // Detect JSON code leaks or raw response strings
        if (card.front.includes('```') || card.back.includes('```') || card.front.includes('{"') || card.back.includes('{"')) return true;

        // Detect weird html or unparsed tags
        if (card.front.includes('undefined') || card.back.includes('undefined')) return true;

        return false;
    };

    const filteredCards = useMemo(() => {
        return flashcards.filter(c => {
            const matchesSubject = selectedSubjectId === 'all' || c.subjectId === selectedSubjectId;
            const q = searchQuery.toLowerCase();
            const matchesSearch = !q || c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q);
            const matchesGibberish = !onlyGibberish || isGibberish(c);
            return matchesSubject && matchesSearch && matchesGibberish;
        });
    }, [flashcards, selectedSubjectId, searchQuery, onlyGibberish]);

    const toggleSelectAll = () => {
        if (selectedCardIds.length === filteredCards.length) {
            setSelectedCardIds([]);
        } else {
            setSelectedCardIds(filteredCards.map(c => c.id));
        }
    };

    const toggleSelectCard = (id: string) => {
        setSelectedCardIds(prev => 
            prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
        );
    };

    const handleDeleteSelected = async () => {
        if (selectedCardIds.length === 0) return;
        if (!window.confirm(`Siz rostdan ham ${selectedCardIds.length} ta kartani BAZADAN BUTKUL O'CHIRMOQCHIMISIZ?`)) return;

        setIsDeleting(true);
        try {
            for (const id of selectedCardIds) {
                await deleteFlashcard(id, true); // permanent delete
            }
            setSelectedCardIds([]);
        } catch (err) {
            console.error("Admin batch delete error:", err);
            alert("Kartalarni o'chirishda xatolik yuz berdi.");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleDeleteSingle = async (id: string) => {
        if (!window.confirm("Ushbu kartani bazadan o'chirmoqchimisiz?")) return;
        try {
            await deleteFlashcard(id, true);
            setSelectedCardIds(prev => prev.filter(cId => cId !== id));
        } catch (err) {
            console.error("Admin single delete error:", err);
        }
    };

    if (!isOpen) return null;

    const gibberishCount = flashcards.filter(isGibberish).length;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                {/* Modal Header */}
                <div className="p-6 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white flex items-center justify-between">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md mb-2">
                            <ShieldAlert size={14} /> ADMIN FLASHCARD MANAGER
                        </div>
                        <h2 className="text-2xl font-black">Fleshkartalarni Saralash va O'chirish</h2>
                        <p className="text-xs text-rose-100 mt-1">
                            AI tomonidan noto'g'ri yaratilgan yoki buzuq kartalarni qidirish hamda bazadan butkul o'chirish.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Controls Bar */}
                <div className="p-4 border-b border-border bg-muted/30 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3 flex-1">
                        {/* Search Input */}
                        <div className="relative flex-1 min-w-[200px]">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Kartochka matni bo'yicha qidirish..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-xl text-xs text-foreground focus:ring-2 focus:ring-rose-500 outline-none"
                            />
                        </div>

                        {/* Subject Filter */}
                        <select
                            value={selectedSubjectId}
                            onChange={(e) => setSelectedSubjectId(e.target.value)}
                            className="py-2 px-3 bg-background border border-input rounded-xl text-xs font-bold text-foreground outline-none"
                        >
                            <option value="all">Barcha Fanlar ({flashcards.length})</option>
                            {subjects.map(s => (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            ))}
                        </select>

                        {/* Gibberish Detector Filter */}
                        <button
                            onClick={() => setOnlyGibberish(!onlyGibberish)}
                            className={`px-3 py-2 text-xs font-bold rounded-xl border flex items-center gap-1.5 transition-all ${
                                onlyGibberish
                                    ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                                    : 'bg-background text-muted-foreground border-input hover:text-foreground'
                            }`}
                        >
                            <AlertCircle size={14} />
                            <span>Buzuq kartalar ({gibberishCount})</span>
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleSelectAll}
                            className="px-3 py-2 bg-background border border-input rounded-xl text-xs font-bold text-foreground hover:bg-muted flex items-center gap-1.5"
                        >
                            {selectedCardIds.length === filteredCards.length && filteredCards.length > 0 ? (
                                <CheckSquare size={14} className="text-rose-500" />
                            ) : (
                                <Square size={14} />
                            )}
                            <span>Barchasini Tanlash ({filteredCards.length})</span>
                        </button>

                        {selectedCardIds.length > 0 && (
                            <Button
                                onClick={handleDeleteSelected}
                                disabled={isDeleting}
                                className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md"
                            >
                                <Trash2 size={14} />
                                <span>{isDeleting ? "O'chirilmoqda..." : `${selectedCardIds.length} ta kartani O'chirish`}</span>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Cards Grid / List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {filteredCards.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                            <Filter size={40} className="mb-2 opacity-50" />
                            <p className="font-bold text-sm">Hech qanday kartochka topilmadi</p>
                        </div>
                    ) : (
                        filteredCards.map(card => {
                            const isSelected = selectedCardIds.includes(card.id);
                            const cardIsGibberish = isGibberish(card);
                            const subject = subjects.find(s => s.id === card.subjectId);

                            return (
                                <div
                                    key={card.id}
                                    className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                                        isSelected 
                                            ? 'bg-rose-500/10 border-rose-500/60' 
                                            : cardIsGibberish 
                                            ? 'bg-amber-500/10 border-amber-500/40' 
                                            : 'bg-background border-border/80 hover:border-border'
                                    }`}
                                >
                                    <div className="flex items-start gap-3 flex-1">
                                        <button
                                            onClick={() => toggleSelectCard(card.id)}
                                            className="mt-1 text-muted-foreground hover:text-foreground"
                                        >
                                            {isSelected ? (
                                                <CheckSquare size={18} className="text-rose-500" />
                                            ) : (
                                                <Square size={18} />
                                            )}
                                        </button>

                                        <div className="space-y-1 flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 bg-muted text-muted-foreground font-extrabold text-[10px] rounded-md">
                                                    {subject?.name || 'Fansiz'}
                                                </span>
                                                {cardIsGibberish && (
                                                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 font-extrabold text-[10px] rounded-md flex items-center gap-1">
                                                        <AlertCircle size={10} /> Buzuq / Xato AI matni
                                                    </span>
                                                )}
                                            </div>

                                            <div className="font-black text-sm text-foreground">
                                                {card.front}
                                            </div>
                                            <div className="text-xs text-muted-foreground whitespace-pre-wrap">
                                                {card.back}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDeleteSingle(card.id)}
                                        className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-colors"
                                        title="Bazadan o'chirish"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};
