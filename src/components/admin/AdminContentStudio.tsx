import React, { useState, useEffect, useMemo } from 'react';
import {
  Plus,
  Trash2,
  Search,
  Layers,
  CheckCircle2,
  FolderPlus,
  MessageSquare,
} from 'lucide-react';
import { CustomContentService } from '../../services/CustomContentService';
import { JlptKanjiItem, JlptGrammarItem } from '../../data/jlptGrammarKanji';
import { useStudyData } from '../../context/StudyPlannerContext';
import { AdminScenarioManager } from './AdminScenarioManager';
import { toast } from '../../hooks/use-toast';

export const AdminContentStudio: React.FC = () => {
  const { subjects, addSubject, addFlashcardsBatch } = useStudyData();

  const [activeSubTab, setActiveSubTab] = useState<
    'kanji' | 'grammar' | 'flashcards' | 'scenarios'
  >('kanji');

  // === KANJI STATE ===
  const [customKanjiList, setCustomKanjiList] = useState<JlptKanjiItem[]>([]);
  const [kanjiSearch, setKanjiSearch] = useState('');
  const [kanjiForm, setKanjiForm] = useState<{
    kanji: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    onyomi: string;
    kunyomi: string;
    meaningUz: string;
    strokeCount: number;
    exampleWord: string;
    exampleReading: string;
    exampleMeaning: string;
  }>({
    kanji: '',
    level: 'N5',
    onyomi: '',
    kunyomi: '',
    meaningUz: '',
    strokeCount: 4,
    exampleWord: '',
    exampleReading: '',
    exampleMeaning: '',
  });

  // === GRAMMAR STATE ===
  const [customGrammarList, setCustomGrammarList] = useState<JlptGrammarItem[]>([]);
  const [grammarSearch, setGrammarSearch] = useState('');
  const [grammarForm, setGrammarForm] = useState<{
    title: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    romaji: string;
    meaningUz: string;
    structure: string;
    exampleJa: string;
    exampleRomaji: string;
    exampleUz: string;
  }>({
    title: '',
    level: 'N5',
    romaji: '',
    meaningUz: '',
    structure: '',
    exampleJa: '',
    exampleRomaji: '',
    exampleUz: '',
  });

  // === FLASHCARD BATCH STATE ===
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [newSubjectName, setNewSubjectName] = useState('');
  const [isCreatingNewSubject, setIsCreatingNewSubject] = useState(false);
  const [singleFront, setSingleFront] = useState('');
  const [singleBack, setSingleBack] = useState('');
  const [bulkText, setBulkText] = useState('');
  const [bulkSeparator, setBulkSeparator] = useState<'dash' | 'tab' | 'comma'>('dash');

  // Load custom content on mount
  const reloadContent = () => {
    setCustomKanjiList(CustomContentService.getCustomKanji());
    setCustomGrammarList(CustomContentService.getCustomGrammar());
  };

  useEffect(() => {
    reloadContent();
  }, []);

  // Set default subject if available
  useEffect(() => {
    if (subjects.length > 0 && !selectedSubjectId) {
      const active = subjects.find((s) => !s.isArchived);
      if (active) setSelectedSubjectId(active.id);
    }
  }, [subjects, selectedSubjectId]);

  // Handle Kanji submit
  const handleSaveKanji = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kanjiForm.kanji.trim() || !kanjiForm.meaningUz.trim()) {
      toast({
        variant: 'destructive',
        title: 'Maydonlar to‘liq emas',
        description: 'Kamida Kanji belgisi va uning ma‘nosini kiriting.',
      });
      return;
    }

    const newItem: JlptKanjiItem = {
      id: `custom-k-${Date.now()}`,
      kanji: kanjiForm.kanji.trim(),
      level: kanjiForm.level,
      onyomi: kanjiForm.onyomi.trim() || '-',
      kunyomi: kanjiForm.kunyomi.trim() || '-',
      meaningUz: kanjiForm.meaningUz.trim(),
      strokeCount: Number(kanjiForm.strokeCount) || 1,
      examples: kanjiForm.exampleWord.trim()
        ? [
            {
              word: kanjiForm.exampleWord.trim(),
              reading: kanjiForm.exampleReading.trim() || kanjiForm.exampleWord.trim(),
              meaning: kanjiForm.exampleMeaning.trim() || kanjiForm.meaningUz.trim(),
            },
          ]
        : [],
    };

    const success = await CustomContentService.saveCustomKanji(newItem);
    if (success) {
      toast({
        title: '✅ Kanji saqlandi',
        description: `『${newItem.kanji}』muvaffaqiyatli qo‘shildi va JLPT sahifasida ko‘rinadi.`,
      });
      setKanjiForm({
        kanji: '',
        level: kanjiForm.level,
        onyomi: '',
        kunyomi: '',
        meaningUz: '',
        strokeCount: 4,
        exampleWord: '',
        exampleReading: '',
        exampleMeaning: '',
      });
      reloadContent();
    } else {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Kanjini saqlashda muammo yuz berdi.',
      });
    }
  };

  const handleDeleteKanji = async (id: string, kanji: string) => {
    if (!window.confirm(`Haqiqatan ham 『${kanji}』 Kanjisini o'chirmoqchimisiz?`)) return;
    const success = await CustomContentService.deleteCustomKanji(id);
    if (success) {
      toast({ title: '🗑️ Kanji o‘chirildi' });
      reloadContent();
    }
  };

  // Handle Grammar submit
  const handleSaveGrammar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!grammarForm.title.trim() || !grammarForm.meaningUz.trim()) {
      toast({
        variant: 'destructive',
        title: 'Maydonlar to‘liq emas',
        description: 'Kamida grammatika qolipi nomi va uning ma‘nosini kiriting.',
      });
      return;
    }

    const newItem: JlptGrammarItem = {
      id: `custom-g-${Date.now()}`,
      title: grammarForm.title.trim(),
      level: grammarForm.level,
      romaji: grammarForm.romaji.trim() || grammarForm.title.trim(),
      meaningUz: grammarForm.meaningUz.trim(),
      structure: grammarForm.structure.trim() || grammarForm.title.trim(),
      examples: grammarForm.exampleJa.trim()
        ? [
            {
              ja: grammarForm.exampleJa.trim(),
              romaji: grammarForm.exampleRomaji.trim() || '',
              uz: grammarForm.exampleUz.trim() || grammarForm.meaningUz.trim(),
            },
          ]
        : [],
    };

    const success = await CustomContentService.saveCustomGrammar(newItem);
    if (success) {
      toast({
        title: '✅ Grammatika saqlandi',
        description: `『${newItem.title}』muvaffaqiyatli qo‘shildi va JLPT bo‘limida faollashdi.`,
      });
      setGrammarForm({
        title: '',
        level: grammarForm.level,
        romaji: '',
        meaningUz: '',
        structure: '',
        exampleJa: '',
        exampleRomaji: '',
        exampleUz: '',
      });
      reloadContent();
    } else {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Grammatikani saqlashda xatolik yuz berdi.',
      });
    }
  };

  const handleDeleteGrammar = async (id: string, title: string) => {
    if (!window.confirm(`Haqiqatan ham 『${title}』 grammatika qoidasini o'chirmoqchimisiz?`))
      return;
    const success = await CustomContentService.deleteCustomGrammar(id);
    if (success) {
      toast({ title: '🗑️ Grammatika o‘chirildi' });
      reloadContent();
    }
  };

  // Handle Single Flashcard submit
  const handleAddSingleCard = async (e: React.FormEvent) => {
    e.preventDefault();
    let targetSubId = selectedSubjectId;

    if (isCreatingNewSubject) {
      if (!newSubjectName.trim()) {
        toast({ variant: 'destructive', title: 'To‘plam nomini kiriting' });
        return;
      }
      try {
        const newSub = await addSubject({
          name: newSubjectName.trim(),
          color: '#3B82F6',
          schedule: [],
          description: 'Admin tomonidan yaratilgan to‘plam',
        });
        if (newSub?.id) {
          targetSubId = newSub.id;
          setSelectedSubjectId(newSub.id);
          setIsCreatingNewSubject(false);
          setNewSubjectName('');
        }
      } catch (err: any) {
        toast({
          variant: 'destructive',
          title: 'To‘plam yaratishda xato',
          description: err.message,
        });
        return;
      }
    }

    if (!targetSubId) {
      toast({ variant: 'destructive', title: 'To‘plamni tanlang' });
      return;
    }

    if (!singleFront.trim() || !singleBack.trim()) {
      toast({ variant: 'destructive', title: 'Old va orqa tomon ma‘lumotlarini kiriting' });
      return;
    }

    try {
      await addFlashcardsBatch([
        {
          subjectId: targetSubId,
          front: singleFront.trim(),
          back: singleBack.trim(),
        },
      ]);
      toast({
        title: '✅ Karta qo‘shildi',
        description: `『${singleFront}』 to‘plamga biriktirildi.`,
      });
      setSingleFront('');
      setSingleBack('');
    } catch {
      toast({ variant: 'destructive', title: 'Kartani saqlashda xatolik yuz berdi' });
    }
  };

  // Parse bulk text pairs
  const parsedBulkPairs = useMemo(() => {
    if (!bulkText.trim()) return [];
    const lines = bulkText.split('\n');
    const pairs: { front: string; back: string }[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      let parts: string[] = [];
      if (bulkSeparator === 'dash') {
        parts = trimmed.split(/[-—–]/);
      } else if (bulkSeparator === 'tab') {
        parts = trimmed.split('\t');
      } else {
        parts = trimmed.split(',');
      }

      if (parts.length >= 2) {
        const front = parts[0].trim();
        const back = parts.slice(1).join(' - ').trim();
        if (front && back) {
          pairs.push({ front, back });
        }
      }
    }
    return pairs;
  }, [bulkText, bulkSeparator]);

  // Handle Bulk Flashcards submit
  const handleAddBulkCards = async () => {
    let targetSubId = selectedSubjectId;

    if (isCreatingNewSubject) {
      if (!newSubjectName.trim()) {
        toast({ variant: 'destructive', title: 'To‘plam nomini kiriting' });
        return;
      }
      try {
        const newSub = await addSubject({
          name: newSubjectName.trim(),
          color: '#10B981',
          schedule: [],
          description: 'Ommaviy import qilingan to‘plam',
        });
        if (newSub?.id) {
          targetSubId = newSub.id;
          setSelectedSubjectId(newSub.id);
          setIsCreatingNewSubject(false);
          setNewSubjectName('');
        }
      } catch (err: any) {
        toast({
          variant: 'destructive',
          title: 'To‘plam yaratishda xato',
          description: err.message,
        });
        return;
      }
    }

    if (!targetSubId) {
      toast({ variant: 'destructive', title: 'To‘plam tanlanmagan' });
      return;
    }

    if (parsedBulkPairs.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Karta topilmadi',
        description: 'Matn formatini tekshiring (har bir qatorda: So‘z - Tarjima).',
      });
      return;
    }

    try {
      await addFlashcardsBatch(
        parsedBulkPairs.map((p) => ({
          subjectId: targetSubId,
          front: p.front,
          back: p.back,
        })),
      );
      toast({
        title: '🎉 Ommaviy import yakunlandi',
        description: `${parsedBulkPairs.length} ta kartochka to‘plamga muvaffaqiyatli saqlandi.`,
      });
      setBulkText('');
    } catch {
      toast({ variant: 'destructive', title: 'Ommaviy saqlashda xato yuz berdi' });
    }
  };

  // Filtered lists for view
  const filteredKanji = customKanjiList.filter((k) =>
    kanjiSearch
      ? k.kanji.includes(kanjiSearch) ||
        k.meaningUz.toLowerCase().includes(kanjiSearch.toLowerCase())
      : true,
  );

  const filteredGrammar = customGrammarList.filter((g) =>
    grammarSearch
      ? g.title.toLowerCase().includes(grammarSearch.toLowerCase()) ||
        g.meaningUz.toLowerCase().includes(grammarSearch.toLowerCase())
      : true,
  );

  return (
    <div className="space-y-6 duration-200 animate-in fade-in">
      {/* Sub Tab Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-3">
        <button
          onClick={() => setActiveSubTab('kanji')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeSubTab === 'kanji'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'border border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          <span>⛩️ Kanji Qo‘shish</span>
          <span className="py-0.2 rounded-full bg-primary-foreground/20 px-1.5 text-[10px]">
            {customKanjiList.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('grammar')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeSubTab === 'grammar'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'border border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          <span>📝 Grammatika Qo‘shish</span>
          <span className="py-0.2 rounded-full bg-primary-foreground/20 px-1.5 text-[10px]">
            {customGrammarList.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('flashcards')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeSubTab === 'flashcards'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'border border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          <Layers size={14} />
          <span>🃏 Fleshkarta & Ommaviy Lug‘at</span>
        </button>

        <button
          onClick={() => setActiveSubTab('scenarios')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeSubTab === 'scenarios'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'border border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          <MessageSquare size={14} />
          <span>🗣️ Suhbat Ssenariylari</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* 1. KANJI MANAGEMENT */}
      {/* ======================================================== */}
      {activeSubTab === 'kanji' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Add Kanji Form */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm lg:col-span-5">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Plus size={18} />
              </div>
              <div>
                <h3 className="text-sm font-black text-foreground">Yangi Kanji Qo‘shish</h3>
                <p className="text-xs text-muted-foreground">
                  JLPT Hub va mashqlarga darhol qo‘shiladi
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveKanji} className="space-y-3.5">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label className="mb-1 block text-xs font-bold text-foreground">Kanji *</label>
                  <input
                    type="text"
                    required
                    placeholder="例: 車"
                    value={kanjiForm.kanji}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, kanji: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-center text-xl font-black text-foreground focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1 block text-xs font-bold text-foreground">Daraja</label>
                  <select
                    value={kanjiForm.level}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, level: e.target.value as any })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  >
                    <option value="N5">JLPT N5</option>
                    <option value="N4">JLPT N4</option>
                    <option value="N3">JLPT N3</option>
                    <option value="N2">JLPT N2</option>
                    <option value="N1">JLPT N1</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="mb-1 block text-xs font-bold text-foreground">Chiziqlar</label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={kanjiForm.strokeCount}
                    onChange={(e) =>
                      setKanjiForm({ ...kanjiForm, strokeCount: Number(e.target.value) })
                    }
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-bold text-foreground">
                    Onyomi (Xitoycha)
                  </label>
                  <input
                    type="text"
                    placeholder="例: シャ"
                    value={kanjiForm.onyomi}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, onyomi: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-foreground">
                    Kunyomi (Yaponcha)
                  </label>
                  <input
                    type="text"
                    placeholder="例: くるま"
                    value={kanjiForm.kunyomi}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, kunyomi: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">
                  O‘zbekcha Ma‘nosi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="例: Avtomobil, Mashina"
                  value={kanjiForm.meaningUz}
                  onChange={(e) => setKanjiForm({ ...kanjiForm, meaningUz: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Example Word */}
              <div className="space-y-2 rounded-2xl border border-border/70 bg-muted/30 p-3">
                <span className="text-[11px] font-bold uppercase text-muted-foreground">
                  Misol So‘z (Ixtiyoriy)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="So‘z: 電車"
                    value={kanjiForm.exampleWord}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, exampleWord: e.target.value })}
                    className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="O‘qilishi: でんしゃ"
                    value={kanjiForm.exampleReading}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, exampleReading: e.target.value })}
                    className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Ma‘nosi: poyezd"
                    value={kanjiForm.exampleMeaning}
                    onChange={(e) => setKanjiForm({ ...kanjiForm, exampleMeaning: e.target.value })}
                    className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="active:scale-98 w-full rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                + Kanjini Saqlash
              </button>
            </form>
          </div>

          {/* Custom Kanji List */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm lg:col-span-7">
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-black text-foreground">
                  Qo‘shilgan Kanji Ro‘yxati ({customKanjiList.length})
                </h3>
                <p className="text-xs text-muted-foreground">
                  Admin tomonidan kiritilgan barcha Kanji iyerogliflari
                </p>
              </div>

              <div className="relative">
                <Search size={14} className="absolute left-3 top-2.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Kanji yoki ma'nosini qidirish..."
                  value={kanjiSearch}
                  onChange={(e) => setKanjiSearch(e.target.value)}
                  className="rounded-xl border border-border bg-background py-1.5 pl-8 pr-3 text-xs text-foreground"
                />
              </div>
            </div>

            {filteredKanji.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-10 text-center text-muted-foreground">
                <span className="mb-2 text-3xl">⛩️</span>
                <p className="text-xs font-bold">Hozircha maxsus qo‘shilgan Kanji yo‘q</p>
                <p className="text-[11px]">
                  Chap tomondagi formadan yangi Kanji qo‘shishingiz mumkin.
                </p>
              </div>
            ) : (
              <div className="grid max-h-[500px] grid-cols-1 gap-2.5 overflow-y-auto pr-1">
                {filteredKanji.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/60 p-3 transition-all hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl font-black text-primary">
                        {item.kanji}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                            {item.level}
                          </span>
                          <span className="text-xs font-bold text-foreground">
                            {item.meaningUz}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          On: <span className="font-mono text-foreground/80">{item.onyomi}</span> •
                          Kun: <span className="font-mono text-foreground/80">{item.kunyomi}</span>
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteKanji(item.id, item.kanji)}
                      className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-rose-500/10 hover:text-rose-500"
                      title="O‘chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. GRAMMAR MANAGEMENT */}
      {/* ======================================================== */}
      {activeSubTab === 'grammar' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Add Grammar Form */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm lg:col-span-5">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Plus size={18} />
              </div>
              <div>
                <h3 className="text-sm font-black text-foreground">Yangi Grammatika Qo‘shish</h3>
                <p className="text-xs text-muted-foreground">
                  JLPT Bunpou bo‘limiga yangi qoida biriktirish
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveGrammar} className="space-y-3.5">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="mb-1 block text-xs font-bold text-foreground">
                    Qolip Nomi (Pattern) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例: ~てはいけない"
                    value={grammarForm.title}
                    onChange={(e) => setGrammarForm({ ...grammarForm, title: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1 block text-xs font-bold text-foreground">Daraja</label>
                  <select
                    value={grammarForm.level}
                    onChange={(e) =>
                      setGrammarForm({ ...grammarForm, level: e.target.value as any })
                    }
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  >
                    <option value="N5">JLPT N5</option>
                    <option value="N4">JLPT N4</option>
                    <option value="N3">JLPT N3</option>
                    <option value="N2">JLPT N2</option>
                    <option value="N1">JLPT N1</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">Romaji</label>
                <input
                  type="text"
                  placeholder="例: te wa ikenai"
                  value={grammarForm.romaji}
                  onChange={(e) => setGrammarForm({ ...grammarForm, romaji: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">
                  O‘zbekcha Ma‘nosi / Qoidasi *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="例: Taqiqni bildiradi: biror ishni qilish mumkin emas / taqiqlanadi"
                  value={grammarForm.meaningUz}
                  onChange={(e) => setGrammarForm({ ...grammarForm, meaningUz: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">
                  Grammatik Qolip Tuzilishi
                </label>
                <input
                  type="text"
                  placeholder="例: Fe‘l [て shakli] + は + いけません"
                  value={grammarForm.structure}
                  onChange={(e) => setGrammarForm({ ...grammarForm, structure: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Example Sentence */}
              <div className="space-y-2 rounded-2xl border border-border/70 bg-muted/30 p-3">
                <span className="text-[11px] font-bold uppercase text-muted-foreground">
                  Misol Gap
                </span>
                <input
                  type="text"
                  placeholder="Yaponcha: ここでタバコを吸ってはいけません。"
                  value={grammarForm.exampleJa}
                  onChange={(e) => setGrammarForm({ ...grammarForm, exampleJa: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground"
                />
                <input
                  type="text"
                  placeholder="O‘zbekcha: Bu yerda chekish mumkin emas."
                  value={grammarForm.exampleUz}
                  onChange={(e) => setGrammarForm({ ...grammarForm, exampleUz: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground"
                />
              </div>

              <button
                type="submit"
                className="active:scale-98 w-full rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                + Grammatikani Saqlash
              </button>
            </form>
          </div>

          {/* Custom Grammar List */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm lg:col-span-7">
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-black text-foreground">
                  Qo‘shilgan Grammatika Ro‘yxati ({customGrammarList.length})
                </h3>
                <p className="text-xs text-muted-foreground">
                  Admin tomonidan kiritilgan barcha qoidalar
                </p>
              </div>

              <div className="relative">
                <Search size={14} className="absolute left-3 top-2.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Qoidani qidirish..."
                  value={grammarSearch}
                  onChange={(e) => setGrammarSearch(e.target.value)}
                  className="rounded-xl border border-border bg-background py-1.5 pl-8 pr-3 text-xs text-foreground"
                />
              </div>
            </div>

            {filteredGrammar.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-10 text-center text-muted-foreground">
                <span className="mb-2 text-3xl">📝</span>
                <p className="text-xs font-bold">Hozircha maxsus qo‘shilgan grammatika yo‘q</p>
                <p className="text-[11px]">
                  Chap tomondagi formadan yangi grammatika kiritishingiz mumkin.
                </p>
              </div>
            ) : (
              <div className="grid max-h-[500px] grid-cols-1 gap-2.5 overflow-y-auto pr-1">
                {filteredGrammar.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-1.5 rounded-2xl border border-border bg-background/60 p-3.5 transition-all hover:border-primary/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          {item.level}
                        </span>
                        <h4 className="text-xs font-black text-foreground">{item.title}</h4>
                      </div>

                      <button
                        onClick={() => handleDeleteGrammar(item.id, item.title)}
                        className="rounded-xl p-1.5 text-muted-foreground transition-colors hover:bg-rose-500/10 hover:text-rose-500"
                        title="O‘chirish"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <p className="text-xs font-medium text-foreground/90">{item.meaningUz}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      Qolip: {item.structure}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. FLASHCARD BATCH CREATION */}
      {/* ======================================================== */}
      {activeSubTab === 'flashcards' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Controls: Target Subject Selection */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm lg:col-span-12">
            <div className="flex flex-col gap-4 border-b border-border/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-black text-foreground">
                  Fleshkarta To‘plamini Tanlang
                </h3>
                <p className="text-xs text-muted-foreground">
                  Yangi kartochkalar qaysi fanga / to‘plamga qo‘shilishini belgilang
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {!isCreatingNewSubject ? (
                  <>
                    <select
                      value={selectedSubjectId}
                      onChange={(e) => setSelectedSubjectId(e.target.value)}
                      className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                    >
                      {subjects
                        .filter((s) => !s.isArchived)
                        .map((sub) => (
                          <option key={sub.id} value={sub.id}>
                            📁 {sub.name}
                          </option>
                        ))}
                    </select>

                    <button
                      onClick={() => setIsCreatingNewSubject(true)}
                      className="flex items-center gap-1.5 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-3 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/10"
                    >
                      <FolderPlus size={14} /> + Yangi To‘plam
                    </button>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="To‘plam nomi (masalan: JLPT N3 Oziq-ovqat)"
                      value={newSubjectName}
                      onChange={(e) => setNewSubjectName(e.target.value)}
                      className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setIsCreatingNewSubject(false)}
                      className="rounded-xl border border-border bg-muted/60 px-3 py-1.5 text-xs font-bold text-foreground"
                    >
                      Bekor qilish
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Single Add & Bulk Add Split */}
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Option A: Bitta Karta Qo‘shish */}
              <div className="space-y-3 rounded-2xl border border-border/80 bg-background/50 p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    1
                  </span>
                  <h4 className="text-xs font-bold text-foreground">Bittalab Karta Qo‘shish</h4>
                </div>

                <form onSubmit={handleAddSingleCard} className="space-y-3">
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-foreground">
                      Old tomoni (Yaponcha so‘z / ibora)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例: 図書館 (としょかん)"
                      value={singleFront}
                      onChange={(e) => setSingleFront(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-foreground">
                      Orqa tomoni (O‘zbekcha ma‘nosi)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例: Kutubxona"
                      value={singleBack}
                      onChange={(e) => setSingleBack(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
                  >
                    + To‘plamga Qo‘shish
                  </button>
                </form>
              </div>

              {/* Option B: ⚡ Ommaviy Tezkor Qo‘shish (Bulk Paste) */}
              <div className="space-y-3 rounded-2xl border border-border/80 bg-background/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-500">
                      ⚡
                    </span>
                    <h4 className="text-xs font-bold text-foreground">
                      Tezkor Ommaviy Import (Bulk Add)
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-muted-foreground">Ajratuvchi:</span>
                    <select
                      value={bulkSeparator}
                      onChange={(e) => setBulkSeparator(e.target.value as any)}
                      className="rounded-lg border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-foreground"
                    >
                      <option value="dash">Chiziqcha ( - )</option>
                      <option value="tab">Tab probel</option>
                      <option value="comma">Vergul ( , )</option>
                    </select>
                  </div>
                </div>

                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  So‘zlarni nusxalab quyidagi maydonga tashlang (har bir qatorda:{' '}
                  <code className="rounded bg-muted px-1">Yaponcha - O‘zbekcha</code>):
                </p>

                <textarea
                  rows={5}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder="学校 - Maktab&#10;先生 - O'qituvchi&#10;学生 - Talaba&#10;友達 - Do'st"
                  className="w-full rounded-xl border border-border bg-card p-3 font-mono text-xs text-foreground focus:ring-2 focus:ring-primary"
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground">
                    Aniqlandi: <strong className="text-primary">{parsedBulkPairs.length} ta</strong>{' '}
                    karta
                  </span>

                  <button
                    onClick={handleAddBulkCards}
                    disabled={parsedBulkPairs.length === 0}
                    className="active:scale-98 flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-emerald-500 disabled:opacity-50"
                  >
                    <CheckCircle2 size={14} /> {parsedBulkPairs.length} ta Kartani Saqlash
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. SCENARIO MANAGEMENT */}
      {/* ======================================================== */}
      {activeSubTab === 'scenarios' && (
        <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
          <AdminScenarioManager />
        </div>
      )}
    </div>
  );
};
