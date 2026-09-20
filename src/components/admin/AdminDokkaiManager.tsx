import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  Copy,
  Download,
  Upload,
  Eye,
  RefreshCw,
  X,
  Sparkles,
} from 'lucide-react';
import { Button } from '../ui/Button';
import FuriganaText from '../jlpt/FuriganaText';
import { CustomContentService } from '../../services/CustomContentService';
import {
  JLPT_READING_PASSAGES,
  JlptReadingPassage,
  JlptReadingQuestion,
} from '../../data/jlptReadingData';
import { toast } from '../../hooks/use-toast';

export const AdminDokkaiManager: React.FC = () => {
  const [customPassages, setCustomPassages] = useState<JlptReadingPassage[]>([]);
  const [activeTab, setActiveTab] = useState<'custom' | 'base'>('custom');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(
    'ALL',
  );
  const [selectedType, setSelectedType] = useState<
    'ALL' | 'short' | 'medium' | 'information_retrieval'
  >('ALL');

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N4');
  const [passageType, setPassageType] = useState<'short' | 'medium' | 'information_retrieval'>(
    'medium',
  );
  const [recommendedTimeMinutes, setRecommendedTimeMinutes] = useState<number>(5);
  const [japaneseContent, setJapaneseContent] = useState('');
  const [uzbekTranslation, setUzbekTranslation] = useState('');
  const [questions, setQuestions] = useState<JlptReadingQuestion[]>([
    {
      id: 'q_1',
      questionText: '',
      options: ['', '', '', ''],
      correctIndex: 0,
      explanation: '',
    },
  ]);

  // Preview tab state: 'form' vs 'preview'
  const [showLivePreview, setShowLivePreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const japaneseTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const reloadPassages = () => {
    setCustomPassages(CustomContentService.getCustomReadingPassages());
  };

  useEffect(() => {
    reloadPassages();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setLevel('N4');
    setPassageType('medium');
    setRecommendedTimeMinutes(5);
    setJapaneseContent('');
    setUzbekTranslation('');
    setQuestions([
      {
        id: `q_${Date.now()}_1`,
        questionText: '',
        options: ['', '', '', ''],
        correctIndex: 0,
        explanation: '',
      },
    ]);
  };

  const handleEditClick = (p: JlptReadingPassage) => {
    setEditingId(p.id);
    setTitle(p.title);
    setLevel(p.level);
    setPassageType(p.passageType);
    setRecommendedTimeMinutes(p.recommendedTimeMinutes || 5);
    setJapaneseContent(p.japaneseContent);
    setUzbekTranslation(p.uzbekTranslation);
    setQuestions(
      p.questions && p.questions.length > 0
        ? JSON.parse(JSON.stringify(p.questions))
        : [
            {
              id: `q_${Date.now()}_1`,
              questionText: '',
              options: ['', '', '', ''],
              correctIndex: 0,
              explanation: '',
            },
          ],
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloneBasePassage = (p: JlptReadingPassage) => {
    setEditingId(null); // Create new custom copy
    setTitle(`${p.title} (Nusxa)`);
    setLevel(p.level);
    setPassageType(p.passageType);
    setRecommendedTimeMinutes(p.recommendedTimeMinutes || 5);
    setJapaneseContent(p.japaneseContent);
    setUzbekTranslation(p.uzbekTranslation);
    setQuestions(
      p.questions.map((q, idx) => ({
        ...q,
        id: `q_custom_${Date.now()}_${idx + 1}`,
      })),
    );
    toast({
      title: '📋 Matn nusxalandi',
      description: 'Matn formaga yuklandi. O‘zgartirishlar kiritib saqlashingiz mumkin.',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (id: string) => {
    if (!window.confirm('Haqiqatan ham ushbu Dokkai matnini o‘chirmoqchimisiz?')) return;
    const ok = await CustomContentService.deleteCustomReadingPassage(id);
    if (ok) {
      toast({
        title: '🗑️ Matn o‘chirildi',
        description: 'Dokkai matni muvaffaqiyatli olib tashlandi.',
      });
      reloadPassages();
      if (editingId === id) resetForm();
    }
  };

  // Helper to insert Furigana template into Japanese content textarea
  const insertFuriganaTemplate = () => {
    if (!japaneseTextareaRef.current) {
      setJapaneseContent((prev) => prev + '漢字[かんじ]');
      return;
    }
    const el = japaneseTextareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = japaneseContent.substring(start, end);
    const template = selected ? `${selected}[${selected}]` : '漢字[かんじ]';
    const nextContent =
      japaneseContent.substring(0, start) + template + japaneseContent.substring(end);
    setJapaneseContent(nextContent);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + template.length, start + template.length);
    }, 0);
  };

  // Question manipulation
  const handleAddQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: `q_${Date.now()}_${prev.length + 1}`,
        questionText: '',
        options: ['', '', '', ''],
        correctIndex: 0,
        explanation: '',
      },
    ]);
  };

  const handleRemoveQuestion = (idx: number) => {
    if (questions.length <= 1) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Kamida 1 ta savol bo‘lishi shart.',
      });
      return;
    }
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleQuestionTextChange = (idx: number, text: string) => {
    setQuestions((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], questionText: text };
      return next;
    });
  };

  const handleOptionChange = (qIdx: number, optIdx: number, val: string) => {
    setQuestions((prev) => {
      const next = [...prev];
      const opts = [...next[qIdx].options];
      opts[optIdx] = val;
      next[qIdx] = { ...next[qIdx], options: opts };
      return next;
    });
  };

  const handleCorrectIndexChange = (qIdx: number, correctIdx: number) => {
    setQuestions((prev) => {
      const next = [...prev];
      next[qIdx] = { ...next[qIdx], correctIndex: correctIdx };
      return next;
    });
  };

  const handleExplanationChange = (qIdx: number, exp: string) => {
    setQuestions((prev) => {
      const next = [...prev];
      next[qIdx] = { ...next[qIdx], explanation: exp };
      return next;
    });
  };

  // Save submit
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast({ variant: 'destructive', title: 'Matn sarlavhasi kiritilishi shart' });
      return;
    }
    if (!japaneseContent.trim()) {
      toast({ variant: 'destructive', title: 'Yaponcha matn kiritilishi shart' });
      return;
    }
    if (!uzbekTranslation.trim()) {
      toast({ variant: 'destructive', title: 'O‘zbekcha tarjima kiritilishi shart' });
      return;
    }

    // Validate questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.questionText.trim()) {
        toast({
          variant: 'destructive',
          title: `Savol #${i + 1} matni kiritilmagan`,
        });
        return;
      }
      if (q.options.some((opt) => !opt.trim())) {
        toast({
          variant: 'destructive',
          title: `Savol #${i + 1} barcha variantlari to‘ldirilishi kerak`,
        });
        return;
      }
    }

    const passageId = editingId || `custom_read_${Date.now()}`;
    const newPassage: JlptReadingPassage = {
      id: passageId,
      level,
      title: title.trim(),
      passageType,
      japaneseContent: japaneseContent.trim(),
      uzbekTranslation: uzbekTranslation.trim(),
      recommendedTimeMinutes: Number(recommendedTimeMinutes) || 5,
      questions: questions.map((q, idx) => ({
        ...q,
        id: q.id || `q_${passageId}_${idx + 1}`,
        questionText: q.questionText.trim(),
        options: q.options.map((o) => o.trim()),
        explanation: q.explanation.trim(),
      })),
    };

    const ok = await CustomContentService.saveCustomReadingPassage(newPassage);
    if (ok) {
      toast({
        title: editingId ? '✅ Matn yangilandi' : '✅ Yangi Dokkai matni saqlandi',
        description: `"${newPassage.title}" o‘quvchilar JLPT Dokkai sahifasida ko‘rinadi.`,
      });
      reloadPassages();
      resetForm();
    } else {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Matnni saqlashda xatolik yuz berdi.',
      });
    }
  };

  // Export custom passages JSON
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(customPassages, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dokkai_custom_passages_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: '📥 Dokkai to‘plami yuklab olindi' });
  };

  // Import custom passages JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (!Array.isArray(json)) {
          throw new Error('Fayl formati massiv (array) bo‘lishi kerak');
        }
        const res = await CustomContentService.bulkImportReadingPassages(json);
        toast({
          title: '⚡ Ommaviy matnlar yuklandi',
          description: `Qo‘shildi: ${res.added} ta, Yangilandi: ${res.updated} ta, Xatolar: ${res.failed}`,
        });
        reloadPassages();
      } catch (err: any) {
        toast({
          variant: 'destructive',
          title: 'Import xatosi',
          description: err.message || 'JSON faylni o‘qib bo‘lmadi',
        });
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Filtered passages
  const displayedPassages = useMemo(() => {
    const sourceList = activeTab === 'custom' ? customPassages : JLPT_READING_PASSAGES;
    return sourceList.filter((p) => {
      if (selectedLevel !== 'ALL' && p.level !== selectedLevel) return false;
      if (selectedType !== 'ALL' && p.passageType !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchJa = p.japaneseContent.toLowerCase().includes(q);
        const matchUz = p.uzbekTranslation.toLowerCase().includes(q);
        if (!matchTitle && !matchJa && !matchUz) return false;
      }
      return true;
    });
  }, [activeTab, customPassages, selectedLevel, selectedType, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <BookOpen className="text-primary" size={22} />
            <span>Dokkai (O‘qish) Matnlari Muharriri</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              {customPassages.length} ta maxsus
            </span>
          </h2>
          <p className="text-xs text-muted-foreground">
            JLPT N5–N1 rasmiy darslik matnlarini ko‘ring, nusxalang yoki o‘zbekcha tahlili bilan
            yangi o‘qish matnlarini yarating.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportJSON}
            accept=".json"
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="gap-1 text-xs"
          >
            <Upload size={14} /> Import JSON
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportJSON}
            disabled={customPassages.length === 0}
            className="gap-1 text-xs"
          >
            <Download size={14} /> Eksport JSON
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              reloadPassages();
              toast({ title: '🔄 Ro‘yxat yangilandi' });
            }}
            className="gap-1 text-xs"
          >
            <RefreshCw size={14} />
          </Button>
        </div>
      </div>

      {/* Main Grid: Form / Live Preview (Left) and Passage List (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN: Visual Editor Form */}
        <div className="space-y-4 rounded-2xl border border-border bg-card p-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
              {editingId ? (
                <>
                  <Edit2 size={16} className="text-amber-500" /> Matnni Tahrirlash
                </>
              ) : (
                <>
                  <Plus size={16} className="text-primary" /> Yangi Dokkai Matni
                </>
              )}
            </h3>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowLivePreview(!showLivePreview)}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                  showLivePreview
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Eye size={13} /> {showLivePreview ? 'Formaga qaytish' : 'Jonli Ko‘rinish'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg bg-muted p-1 text-muted-foreground hover:text-foreground"
                  title="Tahrirlashni bekor qilish"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* If Live Preview Mode is on */}
          {showLivePreview ? (
            <div className="space-y-4 rounded-xl border border-border/80 bg-background/50 p-4">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                  {level} • {passageType.toUpperCase()}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} /> {recommendedTimeMinutes} daqiqa
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-foreground">
                  {title ? <FuriganaText text={title} /> : '(Sarlavha kiritilmagan)'}
                </h4>
              </div>

              <div className="rounded-xl border border-border/60 bg-card p-4 text-sm leading-relaxed text-foreground">
                {japaneseContent ? (
                  <div className="font-japanese whitespace-pre-wrap">
                    <FuriganaText text={japaneseContent} />
                  </div>
                ) : (
                  <span className="italic text-muted-foreground">Yaponcha matn kiritilmagan</span>
                )}
              </div>

              {uzbekTranslation && (
                <div className="rounded-xl border border-border/60 bg-muted/20 p-3 text-xs leading-relaxed text-muted-foreground">
                  <span className="mb-1 block font-bold text-foreground">
                    🇺🇿 O‘zbekcha tarjima:
                  </span>
                  <div className="whitespace-pre-wrap">{uzbekTranslation}</div>
                </div>
              )}

              {/* Questions Preview */}
              <div className="space-y-3 pt-2">
                <h5 className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <HelpCircle size={14} className="text-primary" /> Savollar ({questions.length}{' '}
                  ta):
                </h5>
                {questions.map((q, qIdx) => (
                  <div
                    key={q.id || qIdx}
                    className="space-y-2 rounded-xl border border-border bg-card p-3 text-xs"
                  >
                    <div className="font-bold text-foreground">
                      {qIdx + 1}.{' '}
                      {q.questionText ? (
                        <FuriganaText text={q.questionText} />
                      ) : (
                        '(Savol matni kiritilmagan)'
                      )}
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`flex items-center gap-2 rounded-lg border p-2 ${
                            oIdx === q.correctIndex
                              ? 'border-emerald-500/40 bg-emerald-500/10 font-medium text-emerald-600 dark:text-emerald-400'
                              : 'border-border/60 bg-background text-foreground'
                          }`}
                        >
                          <span className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold">
                            {oIdx + 1}
                          </span>
                          <span className="flex-1">
                            {opt ? <FuriganaText text={opt} /> : `Variant ${oIdx + 1}`}
                          </span>
                          {oIdx === q.correctIndex && (
                            <CheckCircle2 size={13} className="text-emerald-500" />
                          )}
                        </div>
                      ))}
                    </div>
                    {q.explanation && (
                      <div className="text-[11px] text-muted-foreground">
                        <span className="font-semibold text-foreground">Sharh: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* FORM MODE */
            <form onSubmit={handleSave} className="space-y-4 text-xs">
              {/* Row: Level, Type, Time */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="mb-1 block font-bold text-foreground">JLPT Darajasi</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value as any)}
                    className="w-full rounded-xl border border-border bg-background p-2 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="N5">N5</option>
                    <option value="N4">N4</option>
                    <option value="N3">N3</option>
                    <option value="N2">N2</option>
                    <option value="N1">N1</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-bold text-foreground">Matn Turi</label>
                  <select
                    value={passageType}
                    onChange={(e) => setPassageType(e.target.value as any)}
                    className="w-full rounded-xl border border-border bg-background p-2 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="short">Qisqa (Short)</option>
                    <option value="medium">O‘rta (Medium)</option>
                    <option value="information_retrieval">E‘lon / Jadval (Retrieval)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-bold text-foreground">Vaqt (Daqiqa)</label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={recommendedTimeMinutes}
                    onChange={(e) => setRecommendedTimeMinutes(Number(e.target.value))}
                    className="w-full rounded-xl border border-border bg-background p-2 font-bold text-foreground focus:border-primary focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="mb-1 block font-bold text-foreground">
                  Sarlavha (Furigana sintaksisi bilan: 漢字[かんじ])
                </label>
                <input
                  type="text"
                  placeholder="Masalan: 日本[にほん]の リサイクル 習慣[しゅうかん]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs font-medium text-foreground focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Japanese Content */}
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="font-bold text-foreground">
                    Yaponcha Matn (Furigana: 漢字[かんじ])
                  </label>
                  <button
                    type="button"
                    onClick={insertFuriganaTemplate}
                    className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary hover:bg-primary/20"
                  >
                    <Sparkles size={11} /> Furigana Qo‘shish
                  </button>
                </div>
                <textarea
                  ref={japaneseTextareaRef}
                  rows={6}
                  placeholder="Yaponcha matnni kiriting. Furigana uchun so'zni belgilab yuqoridagi tugmani bosing..."
                  value={japaneseContent}
                  onChange={(e) => setJapaneseContent(e.target.value)}
                  className="font-japanese w-full rounded-xl border border-border bg-background p-2.5 text-xs leading-relaxed text-foreground focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Uzbek Translation */}
              <div>
                <label className="mb-1 block font-bold text-foreground">
                  O‘zbekcha Tabiiy Tarjima
                </label>
                <textarea
                  rows={4}
                  placeholder="Matnning to‘liq va ravon o‘zbekcha tarjimasi..."
                  value={uzbekTranslation}
                  onChange={(e) => setUzbekTranslation(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs leading-relaxed text-foreground focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Dynamic Questions Builder */}
              <div className="space-y-3 border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">
                    Savollar Konstruktori ({questions.length} ta)
                  </span>
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 px-2 py-1 text-[11px] font-bold text-foreground hover:bg-muted"
                  >
                    <Plus size={12} /> Savol Qo‘shish
                  </button>
                </div>

                {questions.map((q, qIdx) => (
                  <div
                    key={q.id || qIdx}
                    className="space-y-2.5 rounded-xl border border-border/80 bg-muted/20 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">Savol #{qIdx + 1}</span>
                      {questions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(qIdx)}
                          className="text-destructive hover:opacity-80"
                          title="Savolni o‘chirish"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Savol matni (masalan: この文章で筆者が言いたいことは何か。)"
                      value={q.questionText}
                      onChange={(e) => handleQuestionTextChange(qIdx, e.target.value)}
                      className="w-full rounded-lg border border-border bg-background p-2 font-medium text-foreground focus:border-primary focus:outline-none"
                      required
                    />

                    {/* 4 Options */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-muted-foreground">
                        Variantlar (To‘g‘ri variantni tanlang):
                      </span>
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={`correct_radio_${qIdx}`}
                            checked={q.correctIndex === optIdx}
                            onChange={() => handleCorrectIndexChange(qIdx, optIdx)}
                            className="cursor-pointer text-primary"
                            title="To‘g‘ri javob qilib belgilash"
                          />
                          <input
                            type="text"
                            placeholder={`Variant ${optIdx + 1}`}
                            value={opt}
                            onChange={(e) => handleOptionChange(qIdx, optIdx, e.target.value)}
                            className="w-full rounded-lg border border-border bg-background p-1.5 font-medium text-foreground focus:border-primary focus:outline-none"
                            required
                          />
                        </div>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div>
                      <input
                        type="text"
                        placeholder="O‘zbekcha sharh (Nima uchun bu variant to‘g‘ri ekani izohi)..."
                        value={q.explanation}
                        onChange={(e) => handleExplanationChange(qIdx, e.target.value)}
                        className="w-full rounded-lg border border-border bg-background p-1.5 text-[11px] text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit / Reset buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Button type="submit" className="flex-1 gap-1.5 py-2 font-bold">
                  <CheckCircle2 size={15} />
                  {editingId ? 'O‘zgarishlarni Saqlash' : 'Dokkai Matnini Yaratish'}
                </Button>
                {editingId && (
                  <Button type="button" variant="outline" onClick={resetForm} className="py-2">
                    Bekor qilish
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: Passages List */}
        <div className="space-y-4 rounded-2xl border border-border bg-card p-5 lg:col-span-6">
          {/* Tabs: Custom vs Base */}
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('custom')}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === 'custom'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/40 text-muted-foreground hover:bg-muted'
                }`}
              >
                Maxsus Matnlar ({customPassages.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('base')}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === 'base'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/40 text-muted-foreground hover:bg-muted'
                }`}
              >
                Asosiy 58 ta Matn ({JLPT_READING_PASSAGES.length})
              </button>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-12">
            <div className="relative sm:col-span-6">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Matn nomi yoki mazmunidan qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2 pl-8 pr-3 text-xs text-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-background p-2 text-xs font-bold text-foreground focus:border-primary focus:outline-none"
              >
                <option value="ALL">Barcha Daraja</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-background p-2 text-xs font-bold text-foreground focus:border-primary focus:outline-none"
              >
                <option value="ALL">Barcha Turlar</option>
                <option value="short">Qisqa</option>
                <option value="medium">O‘rta</option>
                <option value="information_retrieval">E‘lon</option>
              </select>
            </div>
          </div>

          {/* List of Passages */}
          <div className="max-h-[640px] space-y-3 overflow-y-auto pr-1">
            {displayedPassages.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border py-12 text-center text-xs text-muted-foreground">
                Hech qanday Dokkai matni topilmadi.
              </div>
            ) : (
              displayedPassages.map((p) => (
                <div
                  key={p.id}
                  className={`space-y-2 rounded-xl border p-3.5 transition-all ${
                    editingId === p.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-background hover:border-border/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          {p.level}
                        </span>
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                          {p.passageType}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Clock size={11} /> {p.recommendedTimeMinutes} daqiqa
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-foreground">
                        <FuriganaText text={p.title} />
                      </h4>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1">
                      {activeTab === 'custom' ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleEditClick(p)}
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                            title="Tahrirlash"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteClick(p.id)}
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                            title="O‘chirish"
                          >
                            <Trash2 size={13} />
                          </button>
                        </>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCloneBasePassage(p)}
                          className="h-7 gap-1 px-2 text-[11px]"
                          title="Ushbu matndan nusxa olib o‘zgartirish"
                        >
                          <Copy size={11} /> Nusxalash
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="font-japanese line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                    {p.japaneseContent.replace(/\[.*?\]/g, '')}
                  </p>

                  <div className="flex items-center justify-between border-t border-border/40 pt-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <HelpCircle size={12} className="text-primary" /> {p.questions.length} ta
                      savol
                    </span>
                    <span className="line-clamp-1 max-w-[200px] italic">
                      {p.uzbekTranslation.slice(0, 50)}...
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
