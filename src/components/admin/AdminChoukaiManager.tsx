import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Upload,
  X,
  CheckCircle2,
  Headphones,
  Play,
  Pause,
  Volume2,
  FileAudio,
} from 'lucide-react';
import { CustomContentService } from '../../services/CustomContentService';
import {
  JlptListeningQuestion,
  JLPT_LISTENING_QUESTIONS,
  parseScriptIntoDialogueLines,
} from '../../data/jlpt/listening_data';
import { CHOUKAI_AUDIO_LIBRARY, ChoukaiAudioTrack } from '../../data/choukaiAudioLibrary';
import { ListeningAudioSyncService } from '../../services/ListeningAudioSyncService';
import { toast } from '../../hooks/use-toast';

export const AdminChoukaiManager: React.FC = () => {
  const [customQuestions, setCustomQuestions] = useState<JlptListeningQuestion[]>([]);
  const [activeTab, setActiveTab] = useState<'custom' | 'base'>('custom');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(
    'ALL',
  );
  const [selectedType, setSelectedType] = useState<'ALL' | 'task' | 'point' | 'quick' | 'summary'>(
    'ALL',
  );

  // Audio Library Modal State
  const [showAudioLibraryModal, setShowAudioLibraryModal] = useState(false);
  const [librarySearch, setLibrarySearch] = useState('');
  const [libraryLevel, setLibraryLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2'>('ALL');
  const [libraryPlayingUrl, setLibraryPlayingUrl] = useState<string | null>(null);
  const libraryAudioRef = useRef<HTMLAudioElement | null>(null);

  // Form State
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [titleUz, setTitleUz] = useState('');
  const [level, setLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N4');
  const [type, setType] = useState<'task' | 'point' | 'quick' | 'summary'>('task');
  const [audioUrl, setAudioUrl] = useState('');
  const [script, setScript] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [questionTextUz, setQuestionTextUz] = useState('');
  const [opt0, setOpt0] = useState('');
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [opt0Uz, setOpt0Uz] = useState('');
  const [opt1Uz, setOpt1Uz] = useState('');
  const [opt2Uz, setOpt2Uz] = useState('');
  const [opt3Uz, setOpt3Uz] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [explanationUzbek, setExplanationUzbek] = useState('');
  const [tipUzbek, setTipUzbek] = useState('');

  // Audio Upload & Playback
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);
  const [previewAudioPlayingId, setPreviewAudioPlayingId] = useState<string | number | null>(null);
  const audioPreviewRef = useRef<HTMLAudioElement | null>(null);
  const audioFileInputRef = useRef<HTMLInputElement | null>(null);
  const scriptTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const reloadQuestions = () => {
    setCustomQuestions(CustomContentService.getCustomChoukaiQuestions());
  };

  useEffect(() => {
    reloadQuestions();
  }, []);

  // Cleanup audio preview on unmount
  useEffect(() => {
    return () => {
      if (audioPreviewRef.current) {
        audioPreviewRef.current.pause();
        audioPreviewRef.current = null;
      }
      if (libraryAudioRef.current) {
        libraryAudioRef.current.pause();
        libraryAudioRef.current = null;
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayLibraryAudio = (url: string) => {
    if (libraryPlayingUrl === url) {
      if (libraryAudioRef.current) {
        libraryAudioRef.current.pause();
        libraryAudioRef.current = null;
      }
      setLibraryPlayingUrl(null);
      return;
    }
    if (libraryAudioRef.current) {
      libraryAudioRef.current.pause();
      libraryAudioRef.current = null;
    }
    const audio = new Audio(url);
    libraryAudioRef.current = audio;
    setLibraryPlayingUrl(url);
    audio.onended = () => {
      setLibraryPlayingUrl(null);
      libraryAudioRef.current = null;
    };
    audio.onerror = () => {
      toast({ variant: 'destructive', title: 'Audio ijro etilmadi' });
      setLibraryPlayingUrl(null);
    };
    audio.play().catch(() => setLibraryPlayingUrl(null));
  };

  const handleSelectLibraryTrack = (track: ChoukaiAudioTrack) => {
    if (libraryAudioRef.current) {
      libraryAudioRef.current.pause();
      libraryAudioRef.current = null;
    }
    setLibraryPlayingUrl(null);
    setAudioUrl(track.url);
    setShowAudioLibraryModal(false);
    toast({
      title: '🎧 Audio biriktirildi',
      description: `${track.name} formaga joylashtirildi.`,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setTitleUz('');
    setLevel('N4');
    setType('task');
    setAudioUrl('');
    setScript('');
    setQuestionText('');
    setQuestionTextUz('');
    setOpt0('');
    setOpt1('');
    setOpt2('');
    setOpt3('');
    setOpt0Uz('');
    setOpt1Uz('');
    setOpt2Uz('');
    setOpt3Uz('');
    setCorrectAnswer(0);
    setExplanationUzbek('');
    setTipUzbek('');
    stopPreviewAudio();
  };

  const handleEditClick = (q: JlptListeningQuestion) => {
    setEditingId(q.id);
    setTitleUz(q.titleUz || '');
    setLevel(q.level);
    setType(q.type);
    setAudioUrl(q.audioUrl || '');
    setScript(q.script);
    setQuestionText(q.questionText);
    setQuestionTextUz(q.questionTextUz || '');
    setOpt0(q.options[0] || '');
    setOpt1(q.options[1] || '');
    setOpt2(q.options[2] || '');
    setOpt3(q.options[3] || '');
    setOpt0Uz(q.optionsUz?.[0] || '');
    setOpt1Uz(q.optionsUz?.[1] || '');
    setOpt2Uz(q.optionsUz?.[2] || '');
    setOpt3Uz(q.optionsUz?.[3] || '');
    setCorrectAnswer(q.correctAnswer ?? 0);
    setExplanationUzbek(q.explanationUzbek || '');
    setTipUzbek(q.tipUzbek || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (id: string | number) => {
    if (!window.confirm('Haqiqatan ham bu Choukai savolini o‘chirmoqchimisiz?')) return;
    const ok = await CustomContentService.deleteCustomChoukaiQuestion(id);
    if (ok) {
      toast({
        title: '🗑️ Savol o‘chirildi',
        description: 'Choukai savoli tizimdan muvaffaqiyatli olib tashlandi.',
      });
      reloadQuestions();
      if (editingId === id) resetForm();
    }
  };

  const insertSpeakerTag = (tag: string) => {
    if (!scriptTextareaRef.current) {
      setScript((prev) => prev + (prev ? '\n' : '') + tag);
      return;
    }
    const el = scriptTextareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const current = script;
    const inserted = tag;
    const nextScript = current.substring(0, start) + inserted + current.substring(end);
    setScript(nextScript);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + inserted.length, start + inserted.length);
    }, 0);
  };

  const handleAudioFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingAudio(true);
    toast({
      title: '🎙️ Audio yuklanmoqda...',
      description: `${file.name} serverga yuklanmoqda...`,
    });

    const res = await CustomContentService.uploadChoukaiAudioFile(file);
    setIsUploadingAudio(false);

    if (res.success && res.url) {
      setAudioUrl(res.url);
      toast({
        title: '✅ Audio muvaffaqiyatli yuklandi',
        description: 'Audio URL avtomatik tarzda kiritildi.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Yuklashda xatolik',
        description: res.error || 'Audio faylni yuklab bo‘lmadi',
      });
    }
  };

  const stopPreviewAudio = () => {
    if (audioPreviewRef.current) {
      audioPreviewRef.current.pause();
      audioPreviewRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setPreviewAudioPlayingId(null);
  };

  const handleTestAudio = (url?: string, scriptText?: string, idKey: string | number = 'form') => {
    if (previewAudioPlayingId === idKey) {
      stopPreviewAudio();
      return;
    }

    stopPreviewAudio();
    const effectiveUrl = url || audioUrl;

    if (effectiveUrl && effectiveUrl.trim()) {
      const audio = new Audio(effectiveUrl);
      audioPreviewRef.current = audio;
      setPreviewAudioPlayingId(idKey);
      audio.onended = () => {
        setPreviewAudioPlayingId(null);
        audioPreviewRef.current = null;
      };
      audio.onerror = () => {
        toast({
          variant: 'destructive',
          title: 'Audio xatoligi',
          description: 'Berilgan audio faylni o‘qib bo‘lmadi. TTS orqali sinab ko‘ring.',
        });
        setPreviewAudioPlayingId(null);
      };
      audio.play().catch(() => {
        setPreviewAudioPlayingId(null);
      });
    } else if (scriptText || script) {
      // Test Multi-Speaker TTS
      const lines = parseScriptIntoDialogueLines(scriptText || script);
      if (lines.length === 0) {
        toast({
          variant: 'destructive',
          title: 'Skript bo‘sh',
          description: 'Ovozni sinash uchun avval dialogni yozing.',
        });
        return;
      }
      setPreviewAudioPlayingId(idKey);
      ListeningAudioSyncService.startSequentialPlayback(lines, {
        onLineStart: () => {},
        onStateChange: (playing) => {
          if (!playing) setPreviewAudioPlayingId(null);
        },
        onComplete: () => {
          setPreviewAudioPlayingId(null);
        },
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Audio yoki skript yo‘q',
        description: 'Audio URL kiriting yoki dialog matnini yozing.',
      });
    }
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!script.trim()) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Dialoq skripti (script) bo‘sh bo‘lishi mumkin emas!',
      });
      return;
    }
    if (!questionText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Savol matni kiritilishi shart!',
      });
      return;
    }

    const options = [opt0.trim(), opt1.trim(), opt2.trim(), opt3.trim()];
    if (options.some((o) => !o)) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Barcha 4 ta variant kiritilishi shart!',
      });
      return;
    }

    const optionsUz = [opt0Uz.trim(), opt1Uz.trim(), opt2Uz.trim(), opt3Uz.trim()];

    const payload: Omit<JlptListeningQuestion, 'id'> = {
      level,
      type,
      titleUz: titleUz.trim() || 'Choukai mashqi',
      audioUrl: audioUrl.trim() || undefined,
      script: script.trim(),
      questionText: questionText.trim(),
      questionTextUz: questionTextUz.trim() || undefined,
      options,
      optionsUz,
      correctAnswer,
      explanationUzbek: explanationUzbek.trim() || 'Tushuntirish kiritilmagan.',
      tipUzbek: tipUzbek.trim() || undefined,
    };

    if (editingId) {
      const ok = await CustomContentService.updateCustomChoukaiQuestion(editingId, payload);
      if (ok) {
        toast({
          title: '✅ Yangilandi',
          description: 'Choukai savoli muvaffaqiyatli saqlandi.',
        });
        reloadQuestions();
        resetForm();
      }
    } else {
      await CustomContentService.addCustomChoukaiQuestion(payload);
      toast({
        title: '🎉 Qo‘shildi',
        description: 'Yangi Choukai savoli muvaffaqiyatli qo‘shildi!',
      });
      reloadQuestions();
      resetForm();
    }
  };

  // Filter questions
  const displayedList = useMemo(() => {
    const sourceList = activeTab === 'custom' ? customQuestions : JLPT_LISTENING_QUESTIONS;
    return sourceList.filter((q) => {
      const matchesLevel = selectedLevel === 'ALL' || q.level === selectedLevel;
      const matchesType = selectedType === 'ALL' || q.type === selectedType;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        q.titleUz?.toLowerCase().includes(query) ||
        q.questionText.toLowerCase().includes(query) ||
        q.script.toLowerCase().includes(query);
      return matchesLevel && matchesType && matchesSearch;
    });
  }, [activeTab, customQuestions, selectedLevel, selectedType, searchQuery]);

  const filteredLibraryTracks = useMemo(() => {
    return CHOUKAI_AUDIO_LIBRARY.filter((track) => {
      if (libraryLevel !== 'ALL' && track.level !== libraryLevel) return false;
      if (librarySearch.trim()) {
        const q = librarySearch.toLowerCase();
        return track.name.toLowerCase().includes(q) || track.url.toLowerCase().includes(q);
      }
      return true;
    });
  }, [libraryLevel, librarySearch]);

  return (
    <div className="space-y-6">
      {/* Header & Sub-Navigation */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-md md:flex-row md:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Headphones className="h-6 w-6 text-primary" />
            Choukai (Eshitish) Boshqaruv Studiyasi
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Haqiqiy MP3 audio fayllarini yuklang, so‘zlashuv skriptlari va savollarni kiriting.
            Foydalanuvchilar to‘g‘ridan-to‘g‘ri saytda mashq qiladilar.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-xl border border-border bg-muted p-1">
            <button
              onClick={() => setActiveTab('custom')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'custom'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Admin Savollari ({customQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab('base')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'base'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Baza Savollari ({JLPT_LISTENING_QUESTIONS.length})
            </button>
          </div>
        </div>
      </div>

      {/* Form Card (Add/Edit) */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
            {editingId ? (
              <>
                <Edit2 className="h-4 w-4 text-amber-500" />
                Choukai Savolini Tahrirlash
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 text-primary" />
                Yangi Choukai Savoli Qo‘shish
              </>
            )}
          </h3>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="flex items-center gap-1 rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" /> Bekor qilish
            </button>
          )}
        </div>

        <form onSubmit={handleSaveQuestion} className="space-y-5">
          {/* Top row: Title, Level, Type */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                Sarlavha / Mavzu (O‘zbekcha) *
              </label>
              <input
                type="text"
                placeholder="masalan: Do‘konda to‘lov qilish"
                value={titleUz}
                onChange={(e) => setTitleUz(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                JLPT Darajasi *
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="N5">JLPT N5 (Boshlang‘ich)</option>
                <option value="N4">JLPT N4 (Quyi o‘rta)</option>
                <option value="N3">JLPT N3 (O‘rta)</option>
                <option value="N2">JLPT N2 (Yuqori o‘rta)</option>
                <option value="N1">JLPT N1 (Mukammal)</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                Savol Turi (Typology) *
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="task">Vazifa (課題理解 / task)</option>
                <option value="point">Asosiy nuqta (ポイント理解 / point)</option>
                <option value="quick">Tezkor javob (即時応答 / quick)</option>
                <option value="summary">Umumiy ma'no (概要理解 / summary)</option>
              </select>
            </div>
          </div>

          {/* Audio Section: Upload / URL / Play */}
          <div className="space-y-3 rounded-xl border border-border/80 bg-muted/40 p-4">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <label className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <FileAudio className="h-4 w-4 text-primary" />
                Haqiqiy Audio (MP3 / WAV / M4A)
              </label>
              <span className="text-[11px] text-muted-foreground">
                Agar MP3 bo‘lmasa, tizim Yaponcha TTS orqali dialog rollarini gapiradi.
              </span>
            </div>

            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
              <input
                type="url"
                placeholder="https://... audio fayl manzili (yoki quyidagi tugma orqali kompyuteringizdan yuklang)"
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="file"
                ref={audioFileInputRef}
                onChange={handleAudioFileUpload}
                accept="audio/*"
                className="hidden"
              />

              <button
                type="button"
                onClick={() => audioFileInputRef.current?.click()}
                disabled={isUploadingAudio}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-primary/20 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20 disabled:opacity-50"
              >
                <Upload className="h-3.5 w-3.5" />
                {isUploadingAudio ? 'Yuklanmoqda...' : 'MP3 Yuklash'}
              </button>

              <button
                type="button"
                onClick={() => setShowAudioLibraryModal(true)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted"
                title="Tizimdagi 259 ta sifatli CD audiolardan tanlash"
              >
                <Headphones className="h-3.5 w-3.5 text-primary" />
                Studiya Kutubxonasi ({CHOUKAI_AUDIO_LIBRARY.length})
              </button>

              {(audioUrl || script) && (
                <button
                  type="button"
                  onClick={() => handleTestAudio(audioUrl, script, 'form')}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-2 text-xs font-bold text-emerald-600 transition-all hover:bg-emerald-500/20 dark:text-emerald-400"
                >
                  {previewAudioPlayingId === 'form' ? (
                    <>
                      <Pause className="h-3.5 w-3.5" /> To‘xtatish
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" /> Eshitib ko‘rish
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Dialogue Script Area */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-semibold text-foreground">
                Dialog Skripti (Yaponcha) *
              </label>
              <div className="flex flex-wrap items-center gap-1 text-[10px]">
                <span className="mr-1 text-muted-foreground">Teglar:</span>
                {['男：', '女：', 'アナウンス：', '店員：', '先生：'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => insertSpeakerTag(tag)}
                    className="rounded border border-border bg-muted px-2 py-0.5 text-foreground hover:bg-muted/80"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              ref={scriptTextareaRef}
              rows={4}
              placeholder="男：明日の 会議は 何時からですか？&#10;女：午後 2時からです。"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Question Text */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                Savol Matni (Yaponcha) *
              </label>
              <input
                type="text"
                placeholder="男の人は この後 まず 何を しますか？"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                Savol Tarjimasi (O‘zbekcha)
              </label>
              <input
                type="text"
                placeholder="Erkak kishi bundan keyin birinchi nima qiladi?"
                value={questionTextUz}
                onChange={(e) => setQuestionTextUz(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* 4 Options */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-foreground">
              4 ta Variant va To‘g‘ri Javobni belgilang *
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { val: opt0, setVal: setOpt0, valUz: opt0Uz, setValUz: setOpt0Uz, idx: 0 },
                { val: opt1, setVal: setOpt1, valUz: opt1Uz, setValUz: setOpt1Uz, idx: 1 },
                { val: opt2, setVal: setOpt2, valUz: opt2Uz, setValUz: setOpt2Uz, idx: 2 },
                { val: opt3, setVal: setOpt3, valUz: opt3Uz, setValUz: setOpt3Uz, idx: 3 },
              ].map(({ val, setVal, valUz, setValUz, idx }) => (
                <div
                  key={idx}
                  className={`flex flex-col items-stretch gap-2 rounded-xl border p-2.5 transition-all sm:flex-row sm:items-center ${
                    correctAnswer === idx
                      ? 'border-primary bg-primary/5 shadow-xs'
                      : 'border-border bg-muted/20'
                  }`}
                >
                  <label className="flex cursor-pointer select-none items-center gap-2 text-xs font-bold text-foreground sm:w-28">
                    <input
                      type="radio"
                      name="correct_answer"
                      checked={correctAnswer === idx}
                      onChange={() => setCorrectAnswer(idx)}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span>
                      {idx + 1}-variant {correctAnswer === idx && '(To‘g‘ri)'}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={`Yaponcha ${idx + 1}-variant`}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    required
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder={`O‘zbekcha tarjimasi (ixtiyoriy)`}
                    value={valUz}
                    onChange={(e) => setValUz(e.target.value)}
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Explanation and Tip */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                To‘g‘ri Javob Tushuntirishi (O‘zbekcha) *
              </label>
              <textarea
                rows={2}
                placeholder="Savol nima uchun ushbu variant to‘g‘riligining batafsil izohi..."
                value={explanationUzbek}
                onChange={(e) => setExplanationUzbek(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground">
                Imtihon Maslahati / Tip (O‘zbekcha)
              </label>
              <textarea
                rows={2}
                placeholder="Eshitish paytida nimalarga e'tibor berish kerakligi bo‘yicha maslahat..."
                value={tipUzbek}
                onChange={(e) => setTipUzbek(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-all hover:bg-muted"
              >
                Bekor qilish
              </button>
            )}
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              <CheckCircle2 className="h-4 w-4" />
              {editingId ? 'O‘zgarishlarni Saqlash' : 'Choukai Savolini Qo‘shish'}
            </button>
          </div>
        </form>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Mavzu, savol yoki skript bo‘yicha qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-background py-2 pl-9 pr-3.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as any)}
            className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="ALL">Barcha Darajalar</option>
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
            <option value="N2">N2</option>
            <option value="N1">N1</option>
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as any)}
            className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="ALL">Barcha Turlar</option>
            <option value="task">Vazifa (task)</option>
            <option value="point">Asosiy nuqta (point)</option>
            <option value="quick">Tezkor javob (quick)</option>
            <option value="summary">Umumiy (summary)</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {displayedList.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card py-12 text-center">
            <Headphones className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
            <p className="text-sm font-semibold text-foreground">
              Hech qanday Choukai savoli topilmadi
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {activeTab === 'custom'
                ? 'Yuqoridagi form orqali birinchi haqiqiy Choukai savolingizni qo‘shing!'
                : 'Qidiruv mezonlariga mos savol mavjud emas.'}
            </p>
          </div>
        ) : (
          displayedList.map((q) => {
            const isPlayingThis = previewAudioPlayingId === q.id;
            return (
              <div
                key={q.id}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-xs transition-all hover:border-primary/40 md:flex-row md:items-center md:p-5"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                      {q.level}
                    </span>
                    <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {q.type}
                    </span>
                    <span className="text-xs font-bold text-foreground">{q.titleUz}</span>
                    {q.audioUrl ? (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <FileAudio className="h-3 w-3" /> MP3 Mavjud
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                        <Volume2 className="h-3 w-3" /> Yapon TTS
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-foreground">{q.questionText}</p>
                  {q.questionTextUz && (
                    <p className="text-xs italic text-muted-foreground">{q.questionTextUz}</p>
                  )}

                  <div className="line-clamp-2 rounded-xl border border-border/60 bg-muted/30 p-2 font-mono text-xs text-muted-foreground">
                    {q.script}
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1 sm:grid-cols-4">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`truncate rounded-lg px-2 py-1 text-xs ${
                          q.correctAnswer === oIdx
                            ? 'border border-primary/30 bg-primary/10 font-bold text-primary'
                            : 'bg-muted/40 text-muted-foreground'
                        }`}
                      >
                        {oIdx + 1}. {opt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-2 self-end md:self-center">
                  <button
                    type="button"
                    onClick={() => handleTestAudio(q.audioUrl, q.script, q.id)}
                    className={`flex items-center gap-1.5 rounded-xl border p-2.5 text-xs font-bold transition-all ${
                      isPlayingThis
                        ? 'border-emerald-600 bg-emerald-500 text-white'
                        : 'border-border bg-muted/60 text-foreground hover:bg-muted'
                    }`}
                    title={isPlayingThis ? 'To‘xtatish' : 'Audioni eshitish'}
                  >
                    {isPlayingThis ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>

                  {activeTab === 'custom' && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleEditClick(q)}
                        className="rounded-xl border border-border bg-muted/60 p-2.5 text-foreground transition-all hover:bg-muted"
                        title="Tahrirlash"
                      >
                        <Edit2 className="h-4 w-4 text-amber-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteClick(q.id)}
                        className="rounded-xl border border-border bg-muted/60 p-2.5 text-rose-500 transition-all hover:border-rose-500/30 hover:bg-rose-500/10"
                        title="O‘chirish"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Audio Library Picker Modal */}
      {showAudioLibraryModal && (
        <div className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-border bg-card shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <Headphones className="text-primary" size={20} />
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Studiya Audiolar Kutubxonasi
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    Tizimdagi 259 ta sifatli CD audiodan birini tanlang yoki tinglab ko‘ring.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (libraryAudioRef.current) {
                    libraryAudioRef.current.pause();
                    libraryAudioRef.current = null;
                  }
                  setLibraryPlayingUrl(null);
                  setShowAudioLibraryModal(false);
                }}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 gap-3 border-b border-border p-4 sm:grid-cols-12">
              <div className="relative sm:col-span-8">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Fayl nomi bo‘yicha qidirish (masalan: Track05, 01 Track, CD-A)..."
                  value={librarySearch}
                  onChange={(e) => setLibrarySearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background py-2 pl-8 pr-3 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div className="sm:col-span-4">
                <select
                  value={libraryLevel}
                  onChange={(e) => setLibraryLevel(e.target.value as any)}
                  className="w-full rounded-xl border border-border bg-background p-2 text-xs font-bold text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="ALL">Barcha Darajalar</option>
                  <option value="N5">N5 (10 ta audio)</option>
                  <option value="N4">N4 (86 ta audio)</option>
                  <option value="N3">N3 (80 ta audio)</option>
                  <option value="N2">N2 (83 ta audio)</option>
                </select>
              </div>
            </div>

            {/* Audio List */}
            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              {filteredLibraryTracks.length === 0 ? (
                <div className="py-12 text-center text-xs text-muted-foreground">
                  Mos audio fayllar topilmadi.
                </div>
              ) : (
                filteredLibraryTracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center justify-between rounded-xl border border-border/80 bg-background p-3 transition-colors hover:border-primary/40 hover:bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handlePlayLibraryAudio(track.url)}
                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                          libraryPlayingUrl === track.url
                            ? 'bg-emerald-500 text-white'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                        title={libraryPlayingUrl === track.url ? 'To‘xtatish' : 'Tinglash'}
                      >
                        {libraryPlayingUrl === track.url ? <Pause size={15} /> : <Play size={15} />}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                            {track.level}
                          </span>
                          <span className="font-mono text-xs font-bold text-foreground">
                            {track.name}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {track.url}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectLibraryTrack(track)}
                      className="rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground hover:bg-primary/90"
                    >
                      Tanlash
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-border bg-muted/20 p-4 text-xs text-muted-foreground">
              <span>Ko‘rsatilmoqda: {filteredLibraryTracks.length} ta audio</span>
              <button
                type="button"
                onClick={() => {
                  if (libraryAudioRef.current) {
                    libraryAudioRef.current.pause();
                    libraryAudioRef.current = null;
                  }
                  setLibraryPlayingUrl(null);
                  setShowAudioLibraryModal(false);
                }}
                className="rounded-lg bg-muted px-3 py-1.5 font-semibold text-foreground hover:bg-muted/80"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
