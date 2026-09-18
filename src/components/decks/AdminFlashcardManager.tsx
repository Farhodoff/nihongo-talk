import React, { useState, useMemo, useEffect } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Flashcard } from '../../types';
import { Button } from '../ui/Button';
import {
  Search,
  Trash2,
  ShieldAlert,
  CheckSquare,
  Square,
  X,
  AlertCircle,
  Globe,
  Plus,
  Edit3,
  BookOpen,
  Save,
  RefreshCw,
} from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import {
  GlobalFlashcardOverrideService,
  GlobalFlashcardOverride,
} from '../../services/GlobalFlashcardOverrideService';
import { supabase } from '../../lib/supabase';

interface AdminFlashcardManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminFlashcardManager: React.FC<AdminFlashcardManagerProps> = ({
  isOpen,
  onClose,
}) => {
  const { flashcards, subjects, deleteFlashcard, user } = useStudyData();

  const [activeTab, setActiveTab] = useState<'overrides' | 'cleaner'>('overrides');

  // Cleaner state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [onlyGibberish, setOnlyGibberish] = useState(false);
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Overrides state
  const [overridesList, setOverridesList] = useState<GlobalFlashcardOverride[]>([]);
  const [overrideSearch, setOverrideSearch] = useState('');
  const [editingOverride, setEditingOverride] = useState<GlobalFlashcardOverride | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Form state
  const [formFront, setFormFront] = useState('');
  const [formPhonetic, setFormPhonetic] = useState('');
  const [formBack, setFormBack] = useState('');
  const [formExample, setFormExample] = useState('');
  const [isSavingOverride, setIsSavingOverride] = useState(false);
  const [isSyncingJson, setIsSyncingJson] = useState(false);

  const handleSyncJsonFiles = async () => {
    setIsSyncingJson(true);
    try {
      const session = (await supabase.auth.getSession()).data?.session;
      const res = await fetch('/api/admin/update-deck-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
        },
        body: JSON.stringify({ batch: overridesList }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: '✅ JSON Fayllar Yangilandi',
          description: 'Barcha global tuzatishlar mahalliy JSON fayllariga muhrlandi.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Xatolik',
          description: data.error || 'JSON fayllarni yangilashda xatolik yuz berdi.',
        });
      }
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: err?.message || 'Tarmoq xatosi yuz berdi.',
      });
    } finally {
      setIsSyncingJson(false);
    }
  };

  const loadOverrides = () => {
    const map = GlobalFlashcardOverrideService.getLocalOverridesMap();
    const unique = Array.from(new Set(Array.from(map.values())));
    setOverridesList(unique);
  };

  useEffect(() => {
    if (isOpen) {
      loadOverrides();
      GlobalFlashcardOverrideService.fetchGlobalOverrides().then((map) => {
        const unique = Array.from(new Set(Array.from(map.values())));
        setOverridesList(unique);
      });
    }
  }, [isOpen]);

  // Subscribe to changes in override service
  useEffect(() => {
    const unsub = GlobalFlashcardOverrideService.subscribe(() => {
      loadOverrides();
    });
    return unsub;
  }, []);

  // Gibberish / Bad card detection logic
  const isGibberish = (card: Flashcard): boolean => {
    if (!card.front || !card.back) return true;
    if (card.front.trim().length === 0 || card.back.trim().length === 0) return true;

    if (
      card.front.includes('```') ||
      card.back.includes('```') ||
      card.front.includes('{"') ||
      card.back.includes('{"')
    )
      return true;
    if (
      card.front.includes('"front":') ||
      card.back.includes('"back":') ||
      card.front.includes('"word":')
    )
      return true;

    if (card.front.includes('undefined') || card.back.includes('undefined')) return true;
    if (card.front.includes('[object Object]') || card.back.includes('[object Object]'))
      return true;
    if (card.front.includes('null') && card.front.length < 10) return true;

    return false;
  };

  const filteredCards = useMemo(() => {
    return flashcards.filter((c) => {
      const matchesSubject = selectedSubjectId === 'all' || c.subjectId === selectedSubjectId;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q || c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q);
      const matchesGibberish = !onlyGibberish || isGibberish(c);
      return matchesSubject && matchesSearch && matchesGibberish;
    });
  }, [flashcards, selectedSubjectId, searchQuery, onlyGibberish]);

  const filteredOverrides = useMemo(() => {
    const q = overrideSearch.trim().toLowerCase();
    if (!q) return overridesList;
    return overridesList.filter(
      (o) =>
        o.word.toLowerCase().includes(q) ||
        o.front.toLowerCase().includes(q) ||
        o.back.toLowerCase().includes(q) ||
        (o.phonetic && o.phonetic.toLowerCase().includes(q)) ||
        (o.example && o.example.toLowerCase().includes(q)),
    );
  }, [overridesList, overrideSearch]);

  const toggleSelectAll = () => {
    if (selectedCardIds.length === filteredCards.length) {
      setSelectedCardIds([]);
    } else {
      setSelectedCardIds(filteredCards.map((c) => c.id));
    }
  };

  const toggleSelectCard = (id: string) => {
    setSelectedCardIds((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id],
    );
  };

  const handleDeleteSelected = async () => {
    if (selectedCardIds.length === 0) return;
    if (
      !window.confirm(
        `Siz rostdan ham ${selectedCardIds.length} ta kartani BAZADAN BUTKUL O'CHIRMOQCHIMISIZ?`,
      )
    )
      return;

    setIsDeleting(true);
    try {
      for (const id of selectedCardIds) {
        await deleteFlashcard(id, true);
      }
      toast({
        title: 'Muvaffaqiyatli',
        description: `${selectedCardIds.length} ta karta o'chirildi.`,
      });
      setSelectedCardIds([]);
    } catch (err) {
      console.error('Admin batch delete error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "Kartalarni o'chirishda xatolik yuz berdi.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteSingle = async (id: string) => {
    if (!window.confirm("Ushbu kartani bazadan o'chirmoqchimisiz?")) return;
    try {
      await deleteFlashcard(id, true);
      setSelectedCardIds((prev) => prev.filter((cId) => cId !== id));
    } catch (err) {
      console.error('Admin single delete error:', err);
    }
  };

  const handleOpenEditOverride = (override: GlobalFlashcardOverride) => {
    setEditingOverride(override);
    setFormFront(override.front || override.word);
    setFormPhonetic(override.phonetic || '');
    setFormBack(override.back || '');
    setFormExample(override.example || '');
    setIsCreatingNew(false);
  };

  const handleOpenCreateOverride = () => {
    setEditingOverride(null);
    setFormFront('');
    setFormPhonetic('');
    setFormBack('');
    setFormExample('');
    setIsCreatingNew(true);
  };

  const handleSaveOverride = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formFront.trim() || !formBack.trim()) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "Yaponcha so'z va o'zbekcha tarjima majburiy!",
      });
      return;
    }

    setIsSavingOverride(true);
    try {
      const wordKey = editingOverride ? editingOverride.word : formFront.trim();
      const saved = await GlobalFlashcardOverrideService.saveGlobalOverride(
        {
          word: wordKey,
          front: formFront.trim(),
          phonetic: formPhonetic.trim(),
          back: formBack.trim(),
          example: formExample.trim(),
        },
        user?.email || 'admin',
      );

      if (saved) {
        toast({
          title: '✅ Global Karta va JSON Saqlandi',
          description:
            "O'zgarish Supabase bazasida va fayllarda saqlandi hamda barcha foydalanuvchilar uchun amal qiladi.",
        });
      } else {
        toast({
          variant: 'destructive',
          title: '⚠️ Ogohlantirish',
          description:
            "O'zgarish mahalliy keshga saqlandi, ammo serverga yozishda xatolik yuz berdi.",
        });
      }

      setEditingOverride(null);
      setIsCreatingNew(false);
      loadOverrides();
    } catch (err) {
      console.error('Save override error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Tuzatishni saqlashda xatolik yuz berdi.',
      });
    } finally {
      setIsSavingOverride(false);
    }
  };

  const handleDeleteOverride = async (word: string) => {
    if (
      !window.confirm(
        `"${word}" uchun kiritilgan global tuzatishni o'chirib, asl holatiga qaytarmoqchimisiz?`,
      )
    )
      return;

    try {
      await GlobalFlashcardOverrideService.deleteOverride(word);
      toast({ title: "🗑️ Tuzatish o'chirildi" });
      loadOverrides();
    } catch (err) {
      console.error('Delete override error:', err);
    }
  };

  if (!isOpen) return null;

  const gibberishCount = flashcards.filter(isGibberish).length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 text-white">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur-md">
              <ShieldAlert size={14} /> ADMIN FLASHCARD HUB
            </div>
            <h2 className="text-xl font-black md:text-2xl">
              Fleshkartalar, So'zlar va Global Tuzatishlar
            </h2>
            <p className="mt-1 text-xs text-rose-100">
              Adminlar tomonidan kiritilgan tuzatishlar umumiy production bazasiga saqlanadi va
              barcha foydalanuvchilar uchun amal qiladi.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between gap-4 border-b border-border bg-muted/40 px-6 pt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overrides')}
              className={`flex items-center gap-1.5 border-b-2 px-3 pb-3 text-xs font-black transition-all ${
                activeTab === 'overrides'
                  ? 'border-rose-600 text-rose-600 dark:text-rose-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe size={15} /> Global So'zlar & Tuzatishlar ({overridesList.length})
            </button>
            <button
              onClick={() => setActiveTab('cleaner')}
              className={`flex items-center gap-1.5 border-b-2 px-3 pb-3 text-xs font-black transition-all ${
                activeTab === 'cleaner'
                  ? 'border-rose-600 text-rose-600 dark:text-rose-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Trash2 size={15} /> AI Kartalar Tozalagichi ({flashcards.length})
            </button>
          </div>

          {activeTab === 'overrides' && (
            <div className="mb-2 flex items-center gap-2">
              <Button
                variant="outline"
                onClick={handleSyncJsonFiles}
                disabled={isSyncingJson || overridesList.length === 0}
                className="flex items-center gap-1.5 rounded-xl border-border bg-background/80 py-1.5 text-xs font-bold hover:bg-accent"
              >
                <RefreshCw size={14} className={isSyncingJson ? 'animate-spin' : ''} />
                JSON Fayllarni Yangilash
              </Button>
              <Button
                onClick={handleOpenCreateOverride}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                <Plus size={15} /> Yangi So'z / Tuzatish Qo'shish
              </Button>
            </div>
          )}
        </div>

        {/* TAB 1: Global Overrides */}
        {activeTab === 'overrides' && (
          <div className="flex flex-1 flex-col overflow-hidden">
            {/* Search filter */}
            <div className="flex items-center justify-between gap-4 border-b border-border bg-muted/20 p-4">
              <div className="relative max-w-md flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Yaponcha so'z yoki o'zbekcha tarjima bo'yicha qidirish..."
                  value={overrideSearch}
                  onChange={(e) => setOverrideSearch(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-xs text-foreground outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                Jami tuzatishlar:{' '}
                <span className="text-foreground">{filteredOverrides.length} ta</span>
              </span>
            </div>

            {/* Overrides Table / List */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {filteredOverrides.length === 0 ? (
                <div className="space-y-3 py-16 text-center text-muted-foreground">
                  <BookOpen size={40} className="mx-auto opacity-30" />
                  <p className="text-sm font-bold">
                    {overrideSearch
                      ? "Qidiruv bo'yicha tuzatish topilmadi."
                      : "Hozircha global so'z tuzatishlari yo'q."}
                  </p>
                  <p className="mx-auto max-w-md text-xs">
                    Yuqoridagi "+ Yangi So'z / Tuzatish Qo'shish" tugmasini bosib, Minna yoki JLPT
                    lug'atlaridagi har qanday so'z tarjimasini to'g'irlashingiz mumkin.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {filteredOverrides.map((item) => (
                    <div
                      key={item.word}
                      className="flex flex-col justify-between gap-2.5 rounded-2xl border border-border bg-background/80 p-4 shadow-xs transition-all hover:border-primary/40"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-black text-foreground">
                              {item.front || item.word}
                            </span>
                            {item.phonetic && (
                              <span className="text-xs font-semibold text-primary/80">
                                ({item.phonetic})
                              </span>
                            )}
                          </div>
                          <p className="mt-1 whitespace-pre-wrap text-xs font-bold text-muted-foreground">
                            {item.back}
                          </p>
                          {item.example && (
                            <p className="mt-1 border-t border-border/40 pt-1 text-[11px] italic text-muted-foreground/80">
                              💬 {item.example}
                            </p>
                          )}
                        </div>

                        <div className="flex shrink-0 items-center gap-1">
                          <button
                            onClick={() => handleOpenEditOverride(item)}
                            className="rounded-lg p-1.5 text-amber-500 transition-colors hover:bg-amber-500/10"
                            title="Tahrirlash"
                          >
                            <Edit3 size={15} />
                          </button>
                          <button
                            onClick={() => handleDeleteOverride(item.word)}
                            className="rounded-lg p-1.5 text-rose-500 transition-colors hover:bg-rose-500/10"
                            title="O'chirish"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-border/30 pt-1.5 text-[10px] text-muted-foreground/60">
                        <span>Admin: {item.updated_by || 'admin'}</span>
                        <span>
                          {item.updated_at ? new Date(item.updated_at).toLocaleDateString() : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: AI Card Cleaner */}
        {activeTab === 'cleaner' && (
          <div className="flex flex-1 flex-col overflow-hidden">
            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-muted/30 p-4">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search Input */}
                <div className="relative min-w-[200px] flex-1">
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Kartochka matni bo'yicha qidirish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-xs text-foreground outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Subject Filter */}
                <select
                  value={selectedSubjectId}
                  onChange={(e) => setSelectedSubjectId(e.target.value)}
                  className="rounded-xl border border-input bg-background px-3 py-2 text-xs font-bold text-foreground outline-none"
                >
                  <option value="all">Barcha Fanlar ({flashcards.length})</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>

                {/* Gibberish Detector Filter */}
                <button
                  onClick={() => setOnlyGibberish(!onlyGibberish)}
                  className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all ${
                    onlyGibberish
                      ? 'border-rose-500 bg-rose-500 text-white shadow-sm'
                      : 'border-input bg-background text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <AlertCircle size={14} />
                  Faqat Xato / Buzuq Kartalar ({gibberishCount})
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={toggleSelectAll}
                  className="flex items-center gap-1.5 rounded-xl text-xs font-bold"
                >
                  {selectedCardIds.length === filteredCards.length && filteredCards.length > 0 ? (
                    <>
                      <CheckSquare size={14} /> Barchasini bekor qilish
                    </>
                  ) : (
                    <>
                      <Square size={14} /> Barchasini tanlash
                    </>
                  )}
                </Button>

                <Button
                  disabled={selectedCardIds.length === 0 || isDeleting}
                  onClick={handleDeleteSelected}
                  className="flex items-center gap-1.5 rounded-xl bg-rose-600 text-xs font-bold text-white shadow-md hover:bg-rose-700"
                >
                  <Trash2 size={14} />
                  {isDeleting
                    ? "O'chirilmoqda..."
                    : `Tanlanganlarni O'chirish (${selectedCardIds.length})`}
                </Button>
              </div>
            </div>

            {/* Cards List */}
            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              {filteredCards.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground">
                  <p className="text-sm font-bold">Hech qanday kartochka topilmadi.</p>
                </div>
              ) : (
                filteredCards.map((card) => {
                  const subject = subjects.find((s) => s.id === card.subjectId);
                  const isSelected = selectedCardIds.includes(card.id);
                  const cardIsGibberish = isGibberish(card);

                  return (
                    <div
                      key={card.id}
                      className={`flex items-start justify-between gap-4 rounded-2xl border p-4 transition-all ${
                        isSelected
                          ? 'border-rose-500/60 bg-rose-500/10'
                          : cardIsGibberish
                            ? 'border-amber-500/40 bg-amber-500/10'
                            : 'border-border/80 bg-background hover:border-border'
                      }`}
                    >
                      <div className="flex flex-1 items-start gap-3">
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

                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-extrabold text-muted-foreground">
                              {subject?.name || 'Fansiz'}
                            </span>
                            {cardIsGibberish && (
                              <span className="flex items-center gap-1 rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-extrabold text-amber-600 dark:text-amber-400">
                                <AlertCircle size={10} /> Buzuq / Xato AI matni
                              </span>
                            )}
                          </div>

                          <div className="text-sm font-black text-foreground">{card.front}</div>
                          <div className="whitespace-pre-wrap text-xs text-muted-foreground">
                            {card.back}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteSingle(card.id)}
                        className="rounded-xl p-2 text-rose-500 transition-colors hover:bg-rose-500/10"
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
        )}

        {/* Global Override Edit / Create Modal */}
        {(editingOverride || isCreatingNew) && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <form
              onSubmit={handleSaveOverride}
              className="w-full max-w-lg space-y-4 rounded-3xl border border-border bg-card p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-emerald-500" />
                  <h3 className="text-base font-black text-foreground">
                    {isCreatingNew
                      ? "Yangi So'z / Global Tuzatish"
                      : `Tuzatish: ${editingOverride?.word}`}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingOverride(null);
                    setIsCreatingNew(false);
                  }}
                  className="rounded-full p-1 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-bold text-muted-foreground">
                      YAPONCHA SO'Z / KANJI (Front) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formFront}
                      onChange={(e) => setFormFront(e.target.value)}
                      placeholder="Masalan: わたし yoki あの人"
                      className="w-full rounded-xl border border-border bg-muted/60 p-2.5 text-sm font-bold text-foreground outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-bold text-muted-foreground">
                      O'QILISHI / FURIGANA (Phonetic)
                    </label>
                    <input
                      type="text"
                      value={formPhonetic}
                      onChange={(e) => setFormPhonetic(e.target.value)}
                      placeholder="Masalan: わたし - watashi"
                      className="w-full rounded-xl border border-border bg-muted/60 p-2.5 text-xs font-medium text-foreground outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    O'ZBEKCHA TARJIMASI / MA'NOSI (Back) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formBack}
                    onChange={(e) => setFormBack(e.target.value)}
                    placeholder="Masalan: men, o'zim"
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 text-sm font-bold text-foreground outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    STRUKTURA / MISOL JUMLASI (Structure & Example)
                  </label>
                  <textarea
                    rows={2}
                    value={formExample}
                    onChange={(e) => setFormExample(e.target.value)}
                    placeholder="Masalan: わたしは 学生 です。 (Men talabaman.)"
                    className="w-full rounded-xl border border-border bg-muted/60 p-2.5 text-xs font-medium text-foreground outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-[11px] text-emerald-600 dark:text-emerald-400">
                  <span className="font-bold">💡 Eslatma:</span> Ushbu so'z barcha Minna no Nihongo
                  va JLPT darsliklarida, fleshkardlarda va umumiy production bazasida to'liq aks
                  etadi.
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setEditingOverride(null);
                    setIsCreatingNew(false);
                  }}
                  className="px-4 py-2 text-xs font-bold"
                >
                  Bekor qilish
                </Button>
                <Button
                  type="submit"
                  disabled={isSavingOverride}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-700"
                >
                  <Save size={14} />
                  {isSavingOverride ? 'Saqlanmoqda...' : 'Global Bazaga Saqlash'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
