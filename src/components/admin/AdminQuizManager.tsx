import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Upload,
  Download,
  X,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { CustomContentService } from '../../services/CustomContentService';
import { JlptGrammarQuestion } from '../../data/jlpt/grammar_data';
import { toast } from '../../hooks/use-toast';

export const AdminQuizManager: React.FC = () => {
  const [questions, setQuestions] = useState<JlptGrammarQuestion[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(
    'ALL',
  );
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkInputText, setBulkInputText] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Form State
  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N2');
  const [pattern, setPattern] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [opt0, setOpt0] = useState('');
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [explanationUzbek, setExplanationUzbek] = useState('');

  const reloadQuestions = () => {
    setQuestions(CustomContentService.getCustomQuizQuestions());
  };

  useEffect(() => {
    reloadQuestions();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setLevel('N2');
    setPattern('');
    setQuestionText('');
    setOpt0('');
    setOpt1('');
    setOpt2('');
    setOpt3('');
    setCorrectAnswer(0);
    setExplanationUzbek('');
  };

  const handleEditClick = (q: JlptGrammarQuestion) => {
    setEditingId(q.id);
    setLevel(q.level);
    setPattern(q.pattern || '');
    setQuestionText(q.questionText);
    setOpt0(q.options[0] || '');
    setOpt1(q.options[1] || '');
    setOpt2(q.options[2] || '');
    setOpt3(q.options[3] || '');
    setCorrectAnswer(q.correctAnswer ?? 0);
    setExplanationUzbek(q.explanationUzbek || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (id: string | number) => {
    if (!window.confirm('Haqiqatan ham bu test savolini o‘chirmoqchimisiz?')) return;
    const ok = await CustomContentService.deleteCustomQuizQuestion(id);
    if (ok) {
      toast({
        title: '🗑️ Savol o‘chirildi',
        description: 'Test savoli muvaffaqiyatli olib tashlandi.',
      });
      reloadQuestions();
      if (editingId === id) resetForm();
    }
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Savol matnini kiritish majburiy!',
      });
      return;
    }

    const options = [opt0.trim(), opt1.trim(), opt2.trim(), opt3.trim()].filter(Boolean);
    if (options.length < 2) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Kamida 2 ta javob varianti kiritilishi shart!',
      });
      return;
    }

    const item: JlptGrammarQuestion = {
      id: editingId || `custom-q-${Date.now()}`,
      level,
      pattern: pattern.trim(),
      questionText: questionText.trim(),
      options,
      correctAnswer: correctAnswer < options.length ? correctAnswer : 0,
      explanationUzbek: explanationUzbek.trim(),
    };

    const success = await CustomContentService.saveCustomQuizQuestion(item);
    if (success) {
      toast({
        title: editingId ? '✅ Savol yangilandi' : '✨ Yangi savol qo‘shildi',
        description: `JLPT ${level} bo‘yicha test savoli saqlandi.`,
      });
      reloadQuestions();
      resetForm();
    } else {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Savolni saqlashda xatolik yuz berdi.',
      });
    }
  };

  const handleBulkImport = async () => {
    if (!bulkInputText.trim()) return;
    const parsed = CustomContentService.parseQuizInput(bulkInputText);
    if (parsed.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Import xatosi',
        description: 'Yaroqli savollar topilmadi. Formatni tekshiring.',
      });
      return;
    }

    const result = await CustomContentService.bulkImportQuizQuestions(parsed);
    toast({
      title: '⚡ Ommaviy import yakunlandi',
      description: `Qo‘shildi: ${result.added}, Yangilandi: ${result.updated}, Xato: ${result.failed}`,
    });

    reloadQuestions();
    setShowBulkModal(false);
    setBulkInputText('');
  };

  const handleExportJson = () => {
    const data = CustomContentService.getCustomQuizQuestions();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jlpt_custom_quiz_questions_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = CustomContentService.parseQuizInput(text);
      if (parsed.length === 0) {
        toast({
          variant: 'destructive',
          title: 'Import xatosi',
          description: 'Faylda yaroqli savollar topilmadi.',
        });
        return;
      }
      const result = await CustomContentService.bulkImportQuizQuestions(parsed);
      toast({
        title: '📁 Fayldan yuklandi',
        description: `Qo‘shildi: ${result.added}, Yangilandi: ${result.updated}, Xatolar: ${result.failed}`,
      });
      reloadQuestions();
    } catch {
      toast({
        variant: 'destructive',
        title: 'Fayl o‘qishda xatolik',
        description: 'JSON yoki matn formatidagi to‘g‘ri faylni tanlang.',
      });
    }
  };

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchLevel = selectedLevel === 'ALL' || q.level === selectedLevel;
      if (!matchLevel) return false;
      if (!searchQuery.trim()) return true;

      const qLow = searchQuery.toLowerCase();
      return (
        q.questionText.toLowerCase().includes(qLow) ||
        (q.pattern && q.pattern.toLowerCase().includes(qLow)) ||
        (q.explanationUzbek && q.explanationUzbek.toLowerCase().includes(qLow)) ||
        q.options.some((opt) => opt.toLowerCase().includes(qLow))
      );
    });
  }, [questions, selectedLevel, searchQuery]);

  const levelBadges: Record<string, string> = {
    N5: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    N4: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    N3: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    N2: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    N1: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-foreground">⚡ JLPT Test & Savollar Boshqaruvi</h3>
          <p className="text-xs text-muted-foreground">
            Kiritilgan har bir test savoli darhol asosiy{' '}
            <span className="font-bold text-foreground">/jlpt</span> test bankida faollashadi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json,.txt"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Upload size={13} /> Fayldan yuklash
          </button>
          <button
            onClick={handleExportJson}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Download size={13} /> JSON Eksport ({questions.length})
          </button>
          <button
            onClick={() => setShowBulkModal(true)}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-600 transition-colors hover:bg-amber-500/20 dark:text-amber-400"
          >
            <Sparkles size={13} /> ⚡ Ommaviy Import (Bulk)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* ================= FORM (LEFT) ================= */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs lg:col-span-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
              {editingId ? (
                <>
                  <Edit2 size={16} className="text-amber-500" /> Savolni Tahrirlash
                </>
              ) : (
                <>
                  <Plus size={16} className="text-primary" /> Yangi Test Savoli Qo‘shish
                </>
              )}
            </h3>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X size={14} /> Bekor qilish
              </button>
            )}
          </div>

          <form onSubmit={handleSaveQuestion} className="mt-4 space-y-3.5 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-muted-foreground">Daraja (Level) *</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="focus:outline-hidden mt-1 w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary"
                >
                  <option value="N5">JLPT N5</option>
                  <option value="N4">JLPT N4</option>
                  <option value="N3">JLPT N3</option>
                  <option value="N2">JLPT N2</option>
                  <option value="N1">JLPT N1</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-muted-foreground">Grammatik Qolip</label>
                <input
                  type="text"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  placeholder="~わけにはいかない"
                  className="focus:outline-hidden mt-1 w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-muted-foreground">
                Savol Matni (Bo‘sh joy bilan) *
              </label>
              <textarea
                rows={2}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="明日は大切な試験があるので、休む（　）にはいかない。"
                className="focus:outline-hidden mt-1 w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary"
                required
              />
            </div>

            {/* Options */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block font-medium text-muted-foreground">
                  Variantlar & To‘g‘ri Javob (Tugma orqali belgilang) *
                </label>
              </div>

              <div className="mt-2 space-y-2">
                {[
                  { val: opt0, setVal: setOpt0, idx: 0, placeholder: '1-variant (masalan: わけ)' },
                  { val: opt1, setVal: setOpt1, idx: 1, placeholder: '2-variant (masalan: こと)' },
                  { val: opt2, setVal: setOpt2, idx: 2, placeholder: '3-variant (masalan: はず)' },
                  { val: opt3, setVal: setOpt3, idx: 3, placeholder: '4-variant (masalan: もの)' },
                ].map(({ val, setVal, idx, placeholder }) => (
                  <div key={idx} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCorrectAnswer(idx)}
                      className={`flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border text-xs font-bold transition-all ${
                        correctAnswer === idx
                          ? 'border-emerald-500 bg-emerald-500 text-white shadow-xs'
                          : 'border-border bg-background text-muted-foreground hover:border-muted-foreground'
                      }`}
                      title={
                        correctAnswer === idx ? "To'g'ri javob" : "To'g'ri javob qilib belgilash"
                      }
                    >
                      {correctAnswer === idx ? <CheckCircle2 size={14} /> : idx + 1}
                    </button>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      placeholder={placeholder}
                      className="focus:outline-hidden w-full rounded-xl border border-border bg-background p-2 font-medium text-foreground focus:border-primary"
                      required={idx < 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div>
              <label className="block font-medium text-muted-foreground">
                🇺🇿 O‘zbekcha Grammatik Izoh / Tushuntirish
              </label>
              <textarea
                rows={3}
                value={explanationUzbek}
                onChange={(e) => setExplanationUzbek(e.target.value)}
                placeholder="Qolip: [Fe'lning lug'at formasi] + わけにはいかない. Muhim imtihon sababli qoldirib bo‘lmasligini ifodalaydi."
                className="focus:outline-hidden mt-1 w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-2.5 font-bold text-primary-foreground shadow-xs transition-all hover:opacity-90"
              >
                {editingId ? <Edit2 size={15} /> : <Plus size={15} />}
                {editingId ? 'Savolni Yangilash' : 'Savolni Saqlash'}
              </button>
            </div>
          </form>
        </div>

        {/* ================= LIST (RIGHT) ================= */}
        <div className="space-y-4 lg:col-span-7">
          {/* Filter and Search */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Savol, qolip yoki izoh bo‘yicha qidiruv..."
                className="focus:outline-hidden w-full rounded-xl border border-border bg-card py-2 pl-9 pr-3 text-xs text-foreground focus:border-primary"
              />
            </div>

            <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto">
              {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => {
                const count =
                  lvl === 'ALL'
                    ? questions.length
                    : questions.filter((q) => q.level === lvl).length;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {lvl} {count > 0 && `(${count})`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards List */}
          {filteredQuestions.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              <BookOpen size={36} className="mb-2 text-muted-foreground/60" />
              <p className="text-sm font-semibold text-foreground">Savollar topilmadi</p>
              <p className="text-xs">
                {searchQuery || selectedLevel !== 'ALL'
                  ? 'Filtr parametrlariga mos savol mavjud emas.'
                  : 'Chap tarafdagi forma yoki ommaviy yuklash orqali test savollarini qo‘shing.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  className={`relative rounded-2xl border bg-card p-4 transition-all hover:border-primary/40 ${
                    editingId === q.id
                      ? 'border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                      : 'border-border shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[11px] font-bold ${
                          levelBadges[q.level] || 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {q.level}
                      </span>
                      {q.pattern && (
                        <span className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground">
                          {q.pattern}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleEditClick(q)}
                        className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        title="Tahrirlash"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(q.id)}
                        className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        title="O‘chirish"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <h4 className="mt-2.5 text-sm font-semibold leading-relaxed text-foreground">
                    {q.questionText}
                  </h4>

                  {/* Options */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-2 rounded-xl border px-2.5 py-1.5 ${
                            isCorrect
                              ? 'border-emerald-500/30 bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-400'
                              : 'border-border bg-background text-muted-foreground'
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                              isCorrect
                                ? 'bg-emerald-500 text-white'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {optIdx + 1}
                          </span>
                          <span className="truncate">{opt}</span>
                          {isCorrect && (
                            <CheckCircle2 size={12} className="ml-auto shrink-0 text-emerald-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {q.explanationUzbek && (
                    <div className="mt-3 flex items-start gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 p-2.5 text-xs text-blue-900 dark:text-blue-200">
                      <HelpCircle size={14} className="mt-0.5 shrink-0 text-blue-500" />
                      <div className="leading-relaxed">
                        <span className="font-semibold text-blue-600 dark:text-blue-300">
                          Izoh:{' '}
                        </span>
                        {q.explanationUzbek}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= BULK IMPORT MODAL ================= */}
      {showBulkModal && (
        <div className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 duration-200 animate-in fade-in">
          <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <Sparkles className="text-amber-500" size={18} /> Ommaviy Test Savollari Importi
              </h3>
              <button
                onClick={() => setShowBulkModal(false)}
                className="cursor-pointer rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <p className="text-muted-foreground">
                Savollarni <b>JSON formatida</b> yoki har bir qatorda{' '}
                <b>| (pipe) ajratgich bilan</b> kiriting:
              </p>
              <div className="rounded-xl border border-border bg-background p-2.5 font-mono text-[11px] text-muted-foreground">
                Savol matni | Variant1, Variant2, Variant3, Variant4 | To‘g‘riVariantRaqami (1-4) |
                O‘zbekcha izoh | Daraja (N5..N1) | Qolip
              </div>
              <textarea
                rows={9}
                value={bulkInputText}
                onChange={(e) => setBulkInputText(e.target.value)}
                placeholder={`私は日本へ行ったこと（　）あります。 | が, を, に, で | 1 | Qolip: fe'l ta shakli + koto ga aru | N5 | ~たことがある\n音楽を（　）ながら勉強します。 | 聞き, 聞く, 聞いて, 聞こえ | 1 | Fe'l stem + nagara | N4 | ~ながら`}
                className="focus:outline-hidden w-full rounded-xl border border-border bg-background p-3 font-mono text-xs text-foreground focus:border-primary"
              />
            </div>

            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowBulkModal(false)}
                className="cursor-pointer rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={handleBulkImport}
                className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-90"
              >
                <Upload size={14} /> Import qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
