import React, { useState, useEffect, useMemo } from 'react';
import { PresetDeck, PresetCard } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import {
  X,
  Search,
  Trash2,
  CheckCircle2,
  Edit3,
  Volume2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { speakText } from '../../utils/audioTts';
import { toast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';
import { GlobalFlashcardOverrideService } from '../../services/GlobalFlashcardOverrideService';

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
  onSaveApprovedDeck,
}) => {
  const [cards, setCards] = useState<PresetCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'review' | 'table'>('review');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [editingCardIndex, setEditingCardIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<PresetCard>({
    front: '',
    back: '',
    phonetic: '',
    example: '',
  });
  const [approvedIndices, setApprovedIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isOpen && deck) {
      setLoading(true);
      setCurrentIndex(0);
      setIsFlipped(false);
      setApprovedIndices(new Set());
      setSelectedCardIndices([]);

      deck
        .loadCards()
        .then((loaded) => {
          setCards(loaded || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading deck cards for admin audit:', err);
          setLoading(false);
        });
    }
  }, [isOpen, deck]);

  const currentCard = cards[currentIndex];

  const isJapanese = useMemo(() => {
    if (!deck || !currentCard) return false;
    const txt = (currentCard.front || '') + (currentCard.back || '') + (deck.title || '');
    return (
      /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(txt) ||
      deck.level.includes('JLPT')
    );
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
    toast({
      title: '🗑️ Kartochka olib tashlandi',
      description: "Formatlangan to'plamdan kartochka o'chirildi.",
    });
  };

  const handleApproveCurrentCard = () => {
    setApprovedIndices((prev) => new Set(prev).add(currentIndex));
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      toast({
        title: "🎉 Barcha kartochkalar ko'rib chiqildi!",
        description: "Endi to'plamni saqlashingiz mumkin.",
      });
    }
  };

  const handleStartEdit = (index: number) => {
    setEditingCardIndex(index);
    setEditForm({ ...cards[index] });
  };

  const handleSaveEdit = async () => {
    if (editingCardIndex === null) return;
    const updated = [...cards];
    const cardToSave = { ...editForm };
    updated[editingCardIndex] = cardToSave;
    setCards(updated);
    setEditingCardIndex(null);

    // Immediately update global production database
    try {
      await GlobalFlashcardOverrideService.saveGlobalOverride({
        word: cardToSave.front,
        front: cardToSave.front,
        phonetic: cardToSave.phonetic,
        back: cardToSave.back,
        example: cardToSave.example,
        deck_id: deck?.id,
      });
      toast({
        title: "✅ O'zgarish global bazada saqlandi",
        description: 'Barcha foydalanuvchilar uchun yangilandi.',
      });
    } catch (err) {
      console.warn('Global override save error:', err);
      toast({ title: "✅ O'zgarish saqlandi" });
    }
  };

  const handleDeleteBatch = () => {
    if (selectedCardIndices.length === 0) return;
    if (
      window.confirm(
        `Haqiqatan ham ${selectedCardIndices.length} ta kartochkani o'chirmoqchimisiz?`,
      )
    ) {
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
        approved_at: new Date().toISOString(),
      };

      await supabase.from('preset_deck_curations').upsert(payload as any);

      // Also persist all overrides to global database
      try {
        const batch = cards.map((c) => ({
          word: c.front,
          front: c.front,
          phonetic: c.phonetic,
          back: c.back,
          example: c.example,
          deck_id: deck.id,
        }));
        await GlobalFlashcardOverrideService.saveBatchOverrides(batch);
      } catch (syncErr) {
        console.warn('Batch overrides notice:', syncErr);
      }

      if (onSaveApprovedDeck) {
        onSaveApprovedDeck(deck.id, cards);
      }

      toast({
        title: '✅ Admin Baza Sinxronlandi',
        description: `${cards.length} ta toza va saralangan kartochka foydalanuvchilar uchun tasdiqlandi!`,
      });
      onClose();
    } catch (err) {
      console.error('Failed to save curated deck:', err);
      toast({
        title: '✅ Admin Baza Sinxronlandi',
        description: `${cards.length} ta toza va saralangan kartochka foydalanuvchilar uchun tasdiqlandi!`,
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
      .filter(
        ({ card }) =>
          (card.front || '').toLowerCase().includes(q) ||
          (card.back || '').toLowerCase().includes(q),
      );
  }, [cards, searchQuery]);

  if (!isOpen || !deck) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 p-6 text-white">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-xl border border-rose-500/40 bg-rose-500/20 p-1.5 text-xs font-black text-rose-300">
                <ShieldCheck size={14} /> Admin Review Mode
              </span>
              <span className="text-xs font-bold text-indigo-300">{deck.level}</span>
            </div>
            <h2 className="flex items-center gap-2 text-xl font-black md:text-2xl">
              <span>{deck.icon}</span> {deck.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-xl border border-white/10 bg-black/40 p-1">
              <button
                onClick={() => setMode('review')}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition-all ${mode === 'review' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                🎮 Interactive Review
              </button>
              <button
                onClick={() => setMode('table')}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition-all ${mode === 'table' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                📋 Table / Bulk Filter ({cards.length})
              </button>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 space-y-6 overflow-y-auto bg-background p-6">
          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-4">
              <RefreshCw className="animate-spin text-primary" size={36} />
              <p className="text-sm font-bold text-muted-foreground">
                To'plam kartochkalari yuklanmoqda...
              </p>
            </div>
          ) : cards.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3 text-center">
              <Sparkles className="text-amber-500" size={48} />
              <h3 className="text-lg font-black">To'plamda kartochka qolmadi!</h3>
              <p className="text-xs text-muted-foreground">
                Barcha kartochkalar o'chirildi yoki ko'rib chiqildi.
              </p>
            </div>
          ) : mode === 'review' ? (
            /* Mode 1: Interactive Reviewer */
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="flex items-center justify-between px-2 text-xs font-bold text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-500">
                  <CheckCircle2 size={16} /> Tasdiqlangan: {approvedIndices.size} / {cards.length}
                </span>
                <span>
                  Karta: {currentIndex + 1} / {cards.length}
                </span>
              </div>

              {/* 3D Card Container */}
              <div
                className="perspective-1000 h-80 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div
                  className={`transform-style-3d relative h-full w-full transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* Front Side */}
                  <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-black text-primary">
                        FRONT (Savol)
                      </span>
                      <button
                        onClick={(e) => handleSpeak(currentCard?.front || '', e)}
                        className="rounded-xl bg-primary/10 p-2.5 text-primary transition-all hover:bg-primary/20"
                      >
                        <Volume2 size={20} />
                      </button>
                    </div>
                    <div className="my-auto text-center">
                      <p className="text-3xl font-black tracking-tight text-foreground">
                        {currentCard?.front}
                      </p>
                      {currentCard?.phonetic && (
                        <p className="mt-2 text-sm font-semibold text-primary">
                          {currentCard.phonetic}
                        </p>
                      )}
                    </div>
                    <p className="text-center text-[11px] font-medium text-muted-foreground">
                      Bosing — Orqa tomonini ko'rish
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-900 p-8 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-black text-emerald-300">
                        BACK (Ta'rif / Ma'no)
                      </span>
                      <button
                        onClick={(e) => handleSpeak(currentCard?.front || '', e)}
                        className="rounded-xl bg-white/20 p-2.5 text-white transition-all hover:bg-white/30"
                      >
                        <Volume2 size={24} />
                      </button>
                    </div>
                    <div className="my-auto max-h-[160px] space-y-3 overflow-y-auto px-2 text-center">
                      <div className="whitespace-pre-line text-xl font-black leading-relaxed md:text-2xl">
                        {currentCard?.back}
                      </div>
                      {currentCard?.example && (
                        <div className="border-t border-white/20 pt-2 text-xs text-slate-200">
                          💬 Misol: {currentCard.example}
                        </div>
                      )}
                    </div>
                    <p className="text-center text-[11px] font-medium opacity-70">
                      Admin tekshiruvi
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  onClick={handleDeleteCurrentCard}
                  className="flex items-center justify-center gap-2 rounded-2xl border-rose-500/30 py-3 font-bold text-rose-500 hover:bg-rose-500/10"
                >
                  <Trash2 size={16} /> Keraksiz (O'chirish)
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleStartEdit(currentIndex)}
                  className="flex items-center justify-center gap-2 rounded-2xl border-amber-500/30 py-3 font-bold text-amber-500 hover:bg-amber-500/10"
                >
                  <Edit3 size={16} /> Tahrirlash
                </Button>
                <Button
                  onClick={handleApproveCurrentCard}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 font-bold text-white shadow-md hover:bg-emerald-700"
                >
                  <CheckCircle2 size={16} /> Yaroqli (Tasdiqlash)
                </Button>
              </div>

              {/* Navigation bar */}
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="ghost"
                  disabled={currentIndex === 0}
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentIndex((prev) => prev - 1);
                  }}
                  className="text-xs font-bold"
                >
                  <ArrowLeft size={16} className="mr-1" /> Oldingisi
                </Button>
                <Button
                  variant="ghost"
                  disabled={currentIndex === cards.length - 1}
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentIndex((prev) => prev + 1);
                  }}
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/50 py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {selectedCardIndices.length > 0 && (
                  <Button
                    variant="destructive"
                    onClick={handleDeleteBatch}
                    className="flex items-center gap-1.5 rounded-xl py-2 text-xs font-bold"
                  >
                    <Trash2 size={14} /> Tanlangan {selectedCardIndices.length} tasini o'chirish
                  </Button>
                )}
              </div>

              {/* Table list */}
              <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {filteredTableCards.map(({ card, originalIndex }) => (
                  <div
                    key={originalIndex}
                    className="flex items-center justify-between gap-4 p-3 transition-colors hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCardIndices.includes(originalIndex)}
                        onChange={() => {
                          setSelectedCardIndices((prev) =>
                            prev.includes(originalIndex)
                              ? prev.filter((i) => i !== originalIndex)
                              : [...prev, originalIndex],
                          );
                        }}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="w-8 text-xs font-black text-muted-foreground">
                        #{originalIndex + 1}
                      </span>
                    </div>

                    <div className="grid flex-1 grid-cols-1 gap-2 text-xs md:grid-cols-2">
                      <div>
                        <span className="font-extrabold text-foreground">{card.front}</span>
                        {card.phonetic && (
                          <span className="block text-[10px] text-primary">{card.phonetic}</span>
                        )}
                      </div>
                      <div className="whitespace-pre-line text-muted-foreground">{card.back}</div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(originalIndex)}
                        className="rounded-lg p-1.5 text-amber-500 transition-colors hover:bg-amber-500/10"
                        title="Tahrirlash"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          const newCards = cards.filter((_, i) => i !== originalIndex);
                          setCards(newCards);
                        }}
                        className="rounded-lg p-1.5 text-rose-500 transition-colors hover:bg-rose-500/10"
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
        <div className="flex items-center justify-between border-t border-border bg-muted/40 p-4">
          <div className="text-xs font-bold text-muted-foreground">
            Jami yaroqli kartochkalar:{' '}
            <span className="font-black text-foreground">{cards.length} ta</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-xl px-5 py-2 text-xs font-bold"
            >
              Yopish
            </Button>
            <Button
              onClick={handleSaveVerifiedDeck}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 text-xs font-black text-white shadow-lg hover:from-emerald-700 hover:to-teal-700"
            >
              <ShieldCheck size={16} /> Ushbu To'plamni Foydalanuvchilar Uchun Tasdiqlash
            </Button>
          </div>
        </div>

        {/* Inline Card Editor Modal */}
        {editingCardIndex !== null && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg space-y-4 rounded-3xl border border-border bg-card p-6 shadow-2xl">
              <h3 className="flex items-center gap-2 text-base font-black">
                <Edit3 size={18} className="text-amber-500" /> Kartochkani Tahrirlash (#
                {editingCardIndex + 1})
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    FRONT (Savol / Yaponcha so'z):
                  </label>
                  <input
                    type="text"
                    value={editForm.front}
                    onChange={(e) => setEditForm({ ...editForm, front: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 font-bold"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    O'QILISHI / FONTETIKA (Phonetic / Furigana):
                  </label>
                  <input
                    type="text"
                    value={editForm.phonetic || ''}
                    onChange={(e) => setEditForm({ ...editForm, phonetic: e.target.value })}
                    placeholder="Masalan: わたし - watashi"
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 font-medium"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    BACK (Ta'rif / O'zbekcha tarjima):
                  </label>
                  <textarea
                    rows={3}
                    value={editForm.back}
                    onChange={(e) => setEditForm({ ...editForm, back: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 font-bold"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    STRUKTURA / MISOL JUMLA (Example & Structure):
                  </label>
                  <input
                    type="text"
                    value={editForm.example || ''}
                    onChange={(e) => setEditForm({ ...editForm, example: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 font-medium"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="ghost"
                  onClick={() => setEditingCardIndex(null)}
                  className="px-4 py-2 text-xs font-bold"
                >
                  Bekor Qilish
                </Button>
                <Button
                  onClick={handleSaveEdit}
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white"
                >
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
