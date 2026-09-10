import React, { useState, useEffect } from 'react';
import { ConversationScenario } from '../speaking/scenarioTypes';
import { ScenarioService } from '../../services/ScenarioService';
import { Plus, Edit2, Trash2, X, Sparkles } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

export const AdminScenarioManager: React.FC = () => {
  const [scenarios, setScenarios] = useState<ConversationScenario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [filterLang, setFilterLang] = useState<'all' | 'en' | 'ja'>('all');
  const [editingScenario, setEditingScenario] = useState<Partial<ConversationScenario>>({
    language: 'en',
    difficulty: 'B1',
    category: 'daily',
    emoji: '💬',
    key_phrases: [],
  });

  const [keyPhrasesInput, setKeyPhrasesInput] = useState('');

  const loadScenarios = async () => {
    setIsLoading(true);
    try {
      const list = await ScenarioService.getScenarios();
      setScenarios(list);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadScenarios();
  }, []);

  const handleOpenCreate = () => {
    setEditingScenario({
      id: `sc-${Date.now()}`,
      language: filterLang === 'ja' ? 'ja' : 'en',
      difficulty: filterLang === 'ja' ? 'N4' : 'B1',
      category: 'daily',
      emoji: '🗣️',
      title_en: '',
      title_ja: '',
      title_uz: '',
      description_uz: '',
      opening_line_en: '',
      opening_line_ja: '',
      context_prompt: '',
      key_phrases: [],
      is_custom: true,
    });
    setKeyPhrasesInput('');
    setIsEditing(true);
  };

  const handleOpenEdit = (scenario: ConversationScenario) => {
    setEditingScenario({ ...scenario });
    setKeyPhrasesInput(scenario.key_phrases.join(', '));
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Ushbu ssenariyni o'chirishga ishonchingiz komilmi?")) return;

    try {
      await ScenarioService.deleteScenario(id);
      toast({
        title: "✅ Ssenariy O'chirildi",
        description: "Ssenariy muvaffaqiyatli o'chirildi.",
      });
      loadScenarios();
    } catch (e) {
      toast({
        variant: 'destructive',
        title: '❌ Xatolik',
        description: "O'chirishda xatolik yuz berdi.",
      });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const isJa = editingScenario.language === 'ja';

    if (isJa && (!editingScenario.title_ja || !editingScenario.opening_line_ja)) {
      toast({
        variant: 'destructive',
        title: "⚠️ Ma'lumot yetarli emas",
        description: 'Yaponcha sarlavha va ochilish jumlasi shart.',
      });
      return;
    }

    if (!isJa && (!editingScenario.title_en || !editingScenario.opening_line_en)) {
      toast({
        variant: 'destructive',
        title: "⚠️ Ma'lumot yetarli emas",
        description: 'Inglizcha sarlavha va ochilish jumlasi shart.',
      });
      return;
    }

    if (!editingScenario.title_uz || !editingScenario.description_uz) {
      toast({
        variant: 'destructive',
        title: "⚠️ Ma'lumot yetarli emas",
        description: "O'zbekcha sarlavha va tavsifni kiriting.",
      });
      return;
    }

    const phrases = keyPhrasesInput
      .split(',')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const newScenario: ConversationScenario = {
      id: editingScenario.id || `sc-${Date.now()}`,
      language: 'ja',
      title_ja: editingScenario.title_ja || '',
      title_en: editingScenario.title_en || '',
      title_uz: editingScenario.title_uz || '',
      emoji: editingScenario.emoji || '💬',
      difficulty: editingScenario.difficulty || 'N4',
      category: editingScenario.category || 'daily',
      description_uz: editingScenario.description_uz || '',
      opening_line_ja: editingScenario.opening_line_ja || '',
      opening_line_en: editingScenario.opening_line_en || '',
      context_prompt: editingScenario.context_prompt || '',
      key_phrases: phrases,
      is_custom: true,
      created_at: editingScenario.created_at || new Date().toISOString(),
    };

    try {
      await ScenarioService.saveScenario(newScenario);
      toast({
        title: '✅ Ssenariy Saqlandi',
        description: 'Yangi ssenariy saqlandi va foydalanuvchilarga taqdim etildi.',
      });
      setIsEditing(false);
      loadScenarios();
    } catch (err) {
      toast({
        variant: 'destructive',
        title: '❌ Saqlashda xatolik',
        description: 'Ssenariy saqlanmadi.',
      });
    }
  };

  const filteredScenarios =
    filterLang === 'all'
      ? scenarios
      : scenarios.filter((s) => (s.language || (s.title_en ? 'en' : 'ja')) === filterLang);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="flex items-center gap-2 font-display text-base font-black text-foreground">
            <Sparkles size={18} className="text-primary" />
            <span>Rolli Muloqot Ssenariylari Boshqaruvi (Admin)</span>
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            AI Coach uchun inglizcha va yaponcha real hayotiy muloqot ssenariylarini yaratish va
            tahrirlash.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Filter */}
          <div className="flex rounded-2xl border border-border bg-muted/60 p-1 text-xs">
            <button
              onClick={() => setFilterLang('all')}
              className={`cursor-pointer rounded-xl px-3 py-1.5 font-bold transition-all ${filterLang === 'all' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setFilterLang('en')}
              className={`cursor-pointer rounded-xl px-3 py-1.5 font-bold transition-all ${filterLang === 'en' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setFilterLang('ja')}
              className={`cursor-pointer rounded-xl px-3 py-1.5 font-bold transition-all ${filterLang === 'ja' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
            >
              🎌 日本語
            </button>
          </div>

          <button
            onClick={handleOpenCreate}
            className="flex cursor-pointer items-center gap-1.5 rounded-2xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90"
          >
            <Plus size={14} />
            <span>Yangi Ssenariy</span>
          </button>
        </div>
      </div>

      {/* List Table */}
      {isLoading ? (
        <div className="py-8 text-center text-xs text-muted-foreground">Yuklanmoqda...</div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="divide-y divide-border">
            {filteredScenarios.map((s) => {
              const isJa = (s.language || (s.title_en ? 'en' : 'ja')) === 'ja';
              const title = isJa ? s.title_ja || s.title_uz : s.title_en || s.title_uz;

              return (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-border bg-muted p-2 text-2xl">
                      {s.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold text-foreground">{title}</h4>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${isJa ? 'border-[#C9A961]/30 bg-[#C9A961]/15 text-[#C9A961]' : 'border-border bg-muted text-foreground'}`}
                        >
                          {isJa ? '🎌 JLPT ' : '🇬🇧 '}
                          {s.difficulty}
                        </span>
                        {s.is_custom && (
                          <span className="rounded-md border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold text-primary">
                            Custom Admin
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{s.title_uz}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEdit(s)}
                      className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="Tahrirlash"
                    >
                      <Edit2 size={14} />
                    </button>
                    {s.is_custom && (
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="cursor-pointer rounded-lg p-2 text-rose-500 transition-colors hover:bg-rose-500/10"
                        title="O'chirish"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="max-h-[90vh] w-full max-w-xl space-y-4 overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="flex items-center gap-2 font-display text-sm font-black text-foreground">
                <Sparkles size={16} className="text-primary" />
                <span>
                  {editingScenario.id?.startsWith('sc-')
                    ? 'Yangi Ssenariy Yaratish'
                    : 'Ssenariyni Tahrirlash'}
                </span>
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1 text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              {/* Language & Emoji */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    Til (Language)
                  </label>
                  <select
                    value={editingScenario.language || 'ja'}
                    onChange={(e) =>
                      setEditingScenario({
                        ...editingScenario,
                        language: e.target.value as 'en' | 'ja',
                      })
                    }
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  >
                    <option value="ja">🎌 日本語 (Japanese)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    Emoji Belgisi
                  </label>
                  <input
                    type="text"
                    value={editingScenario.emoji || ''}
                    onChange={(e) =>
                      setEditingScenario({ ...editingScenario, emoji: e.target.value })
                    }
                    placeholder="🇺🇸, 🍣, 💼..."
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  />
                </div>
              </div>

              {/* Titles */}
              {editingScenario.language === 'ja' ? (
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    Yaponcha Sarlavha (Kanji/Kana)
                  </label>
                  <input
                    type="text"
                    value={editingScenario.title_ja || ''}
                    onChange={(e) =>
                      setEditingScenario({ ...editingScenario, title_ja: e.target.value })
                    }
                    placeholder="例: レストランで注文"
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  />
                </div>
              ) : (
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    Inglizcha Sarlavha
                  </label>
                  <input
                    type="text"
                    value={editingScenario.title_en || ''}
                    onChange={(e) =>
                      setEditingScenario({ ...editingScenario, title_en: e.target.value })
                    }
                    placeholder="e.g. US Embassy Visa Interview"
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  />
                </div>
              )}

              <div>
                <label className="mb-1 block font-bold text-muted-foreground">O'zbekcha Nomi</label>
                <input
                  type="text"
                  value={editingScenario.title_uz || ''}
                  onChange={(e) =>
                    setEditingScenario({ ...editingScenario, title_uz: e.target.value })
                  }
                  placeholder="Masalan: Elchixonada viza suhbati"
                  className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                />
              </div>

              {/* Level and Category */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">
                    Daraja (Difficulty)
                  </label>
                  <select
                    value={
                      editingScenario.difficulty ||
                      (editingScenario.language === 'ja' ? 'N4' : 'B1')
                    }
                    onChange={(e) =>
                      setEditingScenario({ ...editingScenario, difficulty: e.target.value as any })
                    }
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  >
                    <option value="N5">JLPT N5 (Boshlang'ich)</option>
                    <option value="N4">JLPT N4 (O'rta-quyi)</option>
                    <option value="N3">JLPT N3 (O'rta)</option>
                    <option value="N2">JLPT N2 (Yuqori)</option>
                    <option value="N1">JLPT N1 (Mukammal)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-bold text-muted-foreground">Kategoriya</label>
                  <select
                    value={editingScenario.category || 'daily'}
                    onChange={(e) =>
                      setEditingScenario({ ...editingScenario, category: e.target.value as any })
                    }
                    className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                  >
                    <option value="daily">Kundalik Hayot (Daily)</option>
                    <option value="travel">Sayohat (Travel)</option>
                    <option value="business">Biznes va Ish (Business)</option>
                    <option value="social">Ijtimoiy (Social)</option>
                    <option value="academic">Akademik / Imtihon (Academic)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-1 block font-bold text-muted-foreground">
                  O'zbekcha Tavsif
                </label>
                <textarea
                  value={editingScenario.description_uz || ''}
                  onChange={(e) =>
                    setEditingScenario({ ...editingScenario, description_uz: e.target.value })
                  }
                  placeholder="Ssenariy maqsadi va qanday vaziyat ekanligi..."
                  rows={2}
                  className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                />
              </div>

              {/* Opening line */}
              <div>
                <label className="mb-1 block font-bold text-muted-foreground">
                  AI Murabbiyning Birinchi Ochilish Gapi (
                  {editingScenario.language === 'ja' ? 'Yaponcha' : 'Inglizcha'})
                </label>
                <input
                  type="text"
                  value={
                    editingScenario.language === 'ja'
                      ? editingScenario.opening_line_ja || ''
                      : editingScenario.opening_line_en || ''
                  }
                  onChange={(e) => {
                    if (editingScenario.language === 'ja') {
                      setEditingScenario({ ...editingScenario, opening_line_ja: e.target.value });
                    } else {
                      setEditingScenario({ ...editingScenario, opening_line_en: e.target.value });
                    }
                  }}
                  placeholder={
                    editingScenario.language === 'ja'
                      ? '例: いらっしゃいませ！何名様でしょうか？'
                      : 'e.g. Good morning! How can I assist you today?'
                  }
                  className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                />
              </div>

              {/* Context Prompt */}
              <div>
                <label className="mb-1 block font-bold text-muted-foreground">
                  AI Xulq-atvori va Qoidalari (Context Prompt)
                </label>
                <textarea
                  value={editingScenario.context_prompt || ''}
                  onChange={(e) =>
                    setEditingScenario({ ...editingScenario, context_prompt: e.target.value })
                  }
                  placeholder="AI kim rolida bo'lishi va suhbat maqsadi..."
                  rows={3}
                  className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                />
              </div>

              {/* Key Phrases */}
              <div>
                <label className="mb-1 block font-bold text-muted-foreground">
                  Kalit Iboralar (Vergul bilan ajrating)
                </label>
                <input
                  type="text"
                  value={keyPhrasesInput}
                  onChange={(e) => setKeyPhrasesInput(e.target.value)}
                  placeholder="purpose of travel, sponsor, return ticket..."
                  className="w-full rounded-xl border border-border bg-muted p-2.5 font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 font-bold text-muted-foreground hover:text-foreground"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-2xl bg-primary px-5 py-2 font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
