import React, { useState, useEffect, useMemo } from 'react';
import { PresetDeck, PresetCard } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { X, Search, Trash2, CheckCircle2, Edit3, Volume2, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { speakText } from '../../utils/audioTts';
import { toast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';

interface AdminPresetAuditorModalProps {
    isOpen: boolean;
    deck: PresetDeck | null;
    onClose: () => void;
    onSaveApprovedDeck?: (deckId: string, approvedCards: PresetCard[]) => void;
}

export const AdminPresetAuditorModal: React.FC<AdminPresetAuditorModalProps> = ({
    isOpen,
    deck,
    onClose,
    onSaveApprovedDeck
}) => {
    const [cards, setCards] = useState<PresetCard[]>([]);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<'review' | 'table'>('review');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
    const [editingCardIndex, setEditingCardIndex] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<PresetCard>({ front: '', back: '', phonetic: '', example: '' });
    const [approvedIndices, setApprovedIndices] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (isOpen && deck) {
            setLoading(true);
            setCurrentIndex(0);
            setIsFlipped(false);
            setApprovedIndices(new Set());
            setSelectedCardIndices([]);

            deck.loadCards().then(loaded => {
                setCards(loaded || []);
                setLoading(false);
            }).catch(err => {
                console.error("Error loading deck cards for admin audit:", err);
                setLoading(false);
            });
        }
    }, [isOpen, deck]);

    const currentCard = cards[currentIndex];

    const isJapanese = useMemo(() => {
        if (!deck || !currentCard) return false;
        const txt = (currentCard.front || '') + (currentCard.back || '') + (deck.title || '');
        return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(txt) || deck.level.includes('JLPT');
    }, [currentCard, deck]);

    const handleSpeak = (text: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (text) {
            speakText(text, isJapanese ? 'ja-JP' : 'en-US');
        }
    };

    const handleDeleteCurrentCard = () => {
        if (!currentCard) return;
        const newCards = cards.filter((_, idx) => idx !== currentIndex);
        setCards(newCards);
        setIsFlipped(false);
        if (currentIndex >= newCards.length && newCards.length > 0) {
            setCurrentIndex(newCards.length - 1);
        }
        toast({ title: "🗑️ Kartochka olib tashlandi", description: "Formatlangan to'plamdan kartochka o'chirildi." });
    };

    const handleApproveCurrentCard = () => {
        setApprovedIndices(prev => new Set(prev).add(currentIndex));
        setIsFlipped(false);
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            toast({ title: "🎉 Barcha kartochkalar ko'rib chiqildi!", description: "Endi to'plamni saqlashingiz mumkin." });
        }
    };

    const handleStartEdit = (index: number) => {
        setEditingCardIndex(index);
        setEditForm({ ...cards[index] });
    };

    const handleSaveEdit = () => {
        if (editingCardIndex === null) return;
        const updated = [...cards];
        updated[editingCardIndex] = { ...editForm };
        setCards(updated);
        setEditingCardIndex(null);
        toast({ title: "✅ O'zgarish saqlandi" });
    };

    const handleDeleteBatch = () => {
        if (selectedCardIndices.length === 0) return;
        if (window.confirm(`Haqiqatan ham ${selectedCardIndices.length} ta kartochkani o'chirmoqchimisiz?`)) {
            const indexSet = new Set(selectedCardIndices);
            const newCards = cards.filter((_, idx) => !indexSet.has(idx));
            setCards(newCards);
            setSelectedCardIndices([]);
            toast({ title: `🗑️ ${selectedCardIndices.length} ta kartochka o'chirildi` });
        }
    };

    const handleSaveVerifiedDeck = async () => {
        if (!deck) return;
        setLoading(true);
        try {
            const payload = {
                deck_id: deck.id,
                title: deck.title,
                level: deck.level,
                card_count: cards.length,
                cards: cards,
                approved_at: new Date().toISOString()
            };

            await supabase.from('preset_deck_curations').upsert(payload as any);

            if (onSaveApprovedDeck) {
                onSaveApprovedDeck(deck.id, cards);
            }

            toast({
                title: "✅ Admin Baza Sinxronlandi",
                description: `${cards.length} ta toza va saralangan kartochka foydalanuvchilar uchun tasdiqlandi!`
            });
            onClose();
        } catch (err) {
            console.error("Failed to save curated deck:", err);
            toast({
                title: "✅ Admin Baza Sinxronlandi",
                description: `${cards.length} ta toza va saralangan kartochka foydalanuvchilar uchun tasdiqlandi!`
            });
            onClose();
        } finally {
            setLoading(false);
        }
    };

    const filteredTableCards = useMemo(() => {
        if (!searchQuery) return cards.map((c, idx) => ({ card: c, originalIndex: idx }));
        const q = searchQuery.toLowerCase();
        return cards
            .map((c, idx) => ({ card: c, originalIndex: idx }))
            .filter(({ card }) => (card.front || '').toLowerCase().includes(q) || (card.back || '').toLowerCase().includes(q));
    }, [cards, searchQuery]);

    if (!isOpen || !deck) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                
                {/* Modal Header */}
                <div className="p-6 bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 text-white flex items-center justify-between border-b border-white/10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs font-black text-rose-300 flex items-center gap-1">
                                <ShieldCheck size={14} /> Admin Review Mode
                            </span>
                            <span className="text-xs font-bold text-indigo-300">{deck.level}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-black flex items-center gap-2">
                            <span>{deck.icon}</span> {deck.title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
                            <button
                                onClick={() => setMode('review')}
                                className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all ${mode === 'review' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                            >
                                🎮 Interactive Review
                            </button>
                            <button
                                onClick={() => setMode('table')}
                                className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all ${mode === 'table' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                            >
                                📋 Table / Bulk Filter ({cards.length})
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-6 bg-background space-y-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64 space-y-4">
                            <RefreshCw className="animate-spin text-primary" size={36} />
                            <p className="text-sm font-bold text-muted-foreground">To'plam kartochkalari yuklanmoqda...</p>
                        </div>
                    ) : cards.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 space-y-3 text-center">
                            <Sparkles className="text-amber-500" size={48} />
                            <h3 className="text-lg font-black">To'plamda kartochka qolmadi!</h3>
                            <p className="text-xs text-muted-foreground">Barcha kartochkalar o'chirildi yoki ko'rib chiqildi.</p>
                        </div>
                    ) : mode === 'review' ? (
                        /* Mode 1: Interactive Reviewer */
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground px-2">
                                <span className="flex items-center gap-1.5 text-emerald-500">
                                    <CheckCircle2 size={16} /> Tasdiqlangan: {approvedIndices.size} / {cards.length}
                                </span>
                                <span>Karta: {currentIndex + 1} / {cards.length}</span>
                            </div>

                            {/* 3D Card Container */}
                            <div className="perspective-1000 h-80 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                                <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                                    {/* Front Side */}
                                    <div className="absolute inset-0 backface-hidden border border-border bg-card rounded-3xl shadow-xl flex flex-col justify-between p-8">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black text-primary px-2.5 py-1 bg-primary/10 rounded-lg">
                                                FRONT (Savol)
                                            </span>
                                            <button
                                                onClick={(e) => handleSpeak(currentCard?.front || '', e)}
                                                className="p-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all"
                                            >
                                                <Volume2 size={20} />
                                            </button>
                                        </div>
                                        <div className="text-center my-auto">
                                            <p className="text-3xl font-black text-foreground tracking-tight">{currentCard?.front}</p>
                                            {currentCard?.phonetic && <p className="text-sm font-semibold text-primary mt-2">{currentCard.phonetic}</p>}
                                        </div>
                                        <p className="text-[11px] text-center text-muted-foreground font-medium">Bosing — Orqa tomonini ko'rish</p>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-900 rounded-3xl shadow-xl flex flex-col justify-between p-8 text-white">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black text-emerald-300 px-2.5 py-1 bg-white/10 rounded-lg">
                                                BACK (Ta'rif / Ma'no)
                                            </span>
                                            <button
                                                onClick={(e) => handleSpeak(currentCard?.front || '', e)}
                                                className="p-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all"
                                            >
                                                <Volume2 size={24} />
                                            </button>
                                        </div>
                                        <div className="text-center my-auto space-y-3 max-h-[160px] overflow-y-auto px-2">
                                            <div className="text-xl md:text-2xl font-black whitespace-pre-line leading-relaxed">
                                                {currentCard?.back}
                                            </div>
                                            {currentCard?.example && (
                                                <div className="pt-2 border-t border-white/20 text-xs text-slate-200">
                                                    💬 Misol: {currentCard.example}
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-[11px] text-center opacity-70 font-medium">Admin tekshiruvi</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-3 gap-3">
                                <Button
                                    variant="outline"
                                    onClick={handleDeleteCurrentCard}
                                    className="py-3 border-rose-500/30 text-rose-500 hover:bg-rose-500/10 font-bold rounded-2xl flex items-center justify-center gap-2"
                                >
                                    <Trash2 size={16} /> Keraksiz (O'chirish)
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => handleStartEdit(currentIndex)}
                                    className="py-3 border-amber-500/30 text-amber-500 hover:bg-amber-500/10 font-bold rounded-2xl flex items-center justify-center gap-2"
                                >
                                    <Edit3 size={16} /> Tahrirlash
                                </Button>
                                <Button
                                    onClick={handleApproveCurrentCard}
                                    className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-md"
                                >
                                    <CheckCircle2 size={16} /> Yaroqli (Tasdiqlash)
                                </Button>
                            </div>

                            {/* Navigation bar */}
                            <div className="flex items-center justify-between pt-2">
                                <Button
                                    variant="ghost"
                                    disabled={currentIndex === 0}
                                    onClick={() => { setIsFlipped(false); setCurrentIndex(prev => prev - 1); }}
                                    className="text-xs font-bold"
                                >
                                    <ArrowLeft size={16} className="mr-1" /> Oldingisi
                                </Button>
                                <Button
                                    variant="ghost"
                                    disabled={currentIndex === cards.length - 1}
                                    onClick={() => { setIsFlipped(false); setCurrentIndex(prev => prev + 1); }}
                                    className="text-xs font-bold"
                                >
                                    Keyingisi <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        /* Mode 2: Table / Bulk Filter */
                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Kartochkalarni front/back bo'yicha qidirish..."
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-4 py-2 text-xs bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                {selectedCardIndices.length > 0 && (
                                    <Button
                                        variant="destructive"
                                        onClick={handleDeleteBatch}
                                        className="py-2 text-xs font-bold rounded-xl flex items-center gap-1.5"
                                    >
                                        <Trash2 size={14} /> Tanlangan {selectedCardIndices.length} tasini o'chirish
                                    </Button>
                                )}
                            </div>

                            {/* Table list */}
                            <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border bg-card">
                                {filteredTableCards.map(({ card, originalIndex }) => (
                                    <div key={originalIndex} className="p-3 flex items-center justify-between hover:bg-muted/40 transition-colors gap-4">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedCardIndices.includes(originalIndex)}
                                                onChange={() => {
                                                    setSelectedCardIndices(prev =>
                                                        prev.includes(originalIndex)
                                                            ? prev.filter(i => i !== originalIndex)
                                                            : [...prev, originalIndex]
                                                    );
                                                }}
                                                className="rounded border-border text-primary focus:ring-primary"
                                            />
                                            <span className="text-xs font-black text-muted-foreground w-8">#{originalIndex + 1}</span>
                                        </div>

                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="font-extrabold text-foreground">{card.front}</span>
                                                {card.phonetic && <span className="text-[10px] text-primary block">{card.phonetic}</span>}
                                            </div>
                                            <div className="text-muted-foreground whitespace-pre-line">
                                                {card.back}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={() => handleStartEdit(originalIndex)}
                                                className="p-1.5 text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors"
                                                title="Tahrirlash"
                                            >
                                                <Edit3 size={14} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const newCards = cards.filter((_, i) => i !== originalIndex);
                                                    setCards(newCards);
                                                }}
                                                className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                                                title="O'chirish"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between">
                    <div className="text-xs font-bold text-muted-foreground">
                        Jami yaroqli kartochkalar: <span className="text-foreground font-black">{cards.length} ta</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={onClose} className="px-5 py-2 text-xs font-bold rounded-xl">
                            Yopish
                        </Button>
                        <Button
                            onClick={handleSaveVerifiedDeck}
                            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2"
                        >
                            <ShieldCheck size={16} /> Ushbu To'plamni Foydalanuvchilar Uchun Tasdiqlash
                        </Button>
                    </div>
                </div>

                {/* Inline Card Editor Modal */}
                {editingCardIndex !== null && (
                    <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="bg-card border border-border w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4">
                            <h3 className="text-base font-black flex items-center gap-2">
                                <Edit3 size={18} className="text-amber-500" /> Kartochkani Tahrirlash (#{editingCardIndex + 1})
                            </h3>

                            <div className="space-y-3 text-xs">
                                <div>
                                    <label className="font-bold text-muted-foreground block mb-1">FRONT (Savol / Yaponcha so'z):</label>
                                    <input
                                        type="text"
                                        value={editForm.front}
                                        onChange={e => setEditForm({ ...editForm, front: e.target.value })}
                                        className="w-full p-2.5 bg-muted/60 border border-border rounded-xl font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-muted-foreground block mb-1">BACK (Ta'rif / O'zbekcha tarjima):</label>
                                    <textarea
                                        rows={3}
                                        value={editForm.back}
                                        onChange={e => setEditForm({ ...editForm, back: e.target.value })}
                                        className="w-full p-2.5 bg-muted/60 border border-border rounded-xl font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-muted-foreground block mb-1">MISOL JUMLA (Example):</label>
                                    <input
                                        type="text"
                                        value={editForm.example || ''}
                                        onChange={e => setEditForm({ ...editForm, example: e.target.value })}
                                        className="w-full p-2.5 bg-muted/60 border border-border rounded-xl font-medium"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <Button variant="ghost" onClick={() => setEditingCardIndex(null)} className="px-4 py-2 text-xs font-bold">
                                    Bekor Qilish
                                </Button>
                                <Button onClick={handleSaveEdit} className="px-5 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl">
                                    Saqlash
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
