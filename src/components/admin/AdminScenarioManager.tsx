import React, { useState, useEffect } from 'react';
import { ConversationScenario } from '../speaking/scenarioTypes';
import { ScenarioService } from '../../services/ScenarioService';
import { Plus, Edit2, Trash2, X, Sparkles } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

export const AdminScenarioManager: React.FC = () => {
    const [scenarios, setScenarios] = useState<ConversationScenario[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingScenario, setEditingScenario] = useState<Partial<ConversationScenario>>({
        difficulty: 'N4',
        category: 'daily',
        emoji: '💬',
        key_phrases: []
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
            difficulty: 'N4',
            category: 'daily',
            emoji: '🗣️',
            title_ja: '',
            title_uz: '',
            description_uz: '',
            opening_line_ja: '',
            context_prompt: '',
            key_phrases: [],
            is_custom: true
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
        if (!confirm("Ushbu scenarioni o'chirishga ishonchingiz komilmi?")) return;

        try {
            await ScenarioService.deleteScenario(id);
            toast({ title: '✅ Scenario O\'chirildi', description: 'Scenario muvaffaqiyatli o\'chirildi.' });
            loadScenarios();
        } catch (e) {
            toast({ variant: 'destructive', title: '❌ Xatolik', description: 'O\'chirishda xatolik yuz berdi.' });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingScenario.title_ja || !editingScenario.opening_line_ja) {
            toast({ variant: 'destructive', title: '⚠️ Ma\'lumot yetarli emas', description: 'Yaponcha sarlavha va boshlash jumasini kiriting.' });
            return;
        }

        const phrases = keyPhrasesInput
            .split(',')
            .map(p => p.trim())
            .filter(p => p.length > 0);

        const newScenario: ConversationScenario = {
            id: editingScenario.id || `sc-${Date.now()}`,
            title_ja: editingScenario.title_ja || '',
            title_uz: editingScenario.title_uz || '',
            emoji: editingScenario.emoji || '💬',
            difficulty: editingScenario.difficulty || 'N4',
            category: editingScenario.category || 'daily',
            description_uz: editingScenario.description_uz || '',
            opening_line_ja: editingScenario.opening_line_ja || '',
            context_prompt: editingScenario.context_prompt || '',
            key_phrases: phrases,
            is_custom: true,
            created_at: editingScenario.created_at || new Date().toISOString()
        };

        try {
            await ScenarioService.saveScenario(newScenario);
            toast({ title: '✅ Scenario Saqlandi', description: 'Yangi scenario saqlandi va foydalanuvchilarga taqdim etildi.' });
            setIsEditing(false);
            loadScenarios();
        } catch (err) {
            toast({ variant: 'destructive', title: '❌ Saqlashda xatolik', description: 'Scenario saqlanmadi.' });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
                        <Sparkles size={18} className="text-indigo-500" />
                        <span>Japanese Scenarios Boshqaruvi (Admin)</span>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        AI Coach uchun yaponcha rolli muloqot ssenariylarini yaratish va tahrirlash.
                    </p>
                </div>

                <button
                    onClick={handleOpenCreate}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                    <Plus size={14} />
                    <span>Yangi Scenario Qo'shish</span>
                </button>
            </div>

            {/* List Table */}
            {isLoading ? (
                <div className="py-8 text-center text-muted-foreground text-xs">Yuklanmoqda...</div>
            ) : (
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="divide-y divide-border">
                        {scenarios.map(s => (
                            <div key={s.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl p-2 bg-muted rounded-xl">{s.emoji}</div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-xs font-bold text-foreground">{s.title_ja}</h4>
                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-500 rounded-md">
                                                JLPT {s.difficulty}
                                            </span>
                                            {s.is_custom && (
                                                <span className="text-[9px] font-bold px-1.5 py-0.5 bg-amber-500/10 text-amber-500 rounded-md">
                                                    Custom Admin
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[11px] text-muted-foreground mt-0.5">{s.title_uz}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleOpenEdit(s)}
                                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                        title="Tahrirlash"
                                    >
                                        <Edit2 size={14} />
                                    </button>
                                    {s.is_custom && (
                                        <button
                                            onClick={() => handleDelete(s.id)}
                                            className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                                            title="O'chirish"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Create/Edit Form Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-card border border-border rounded-3xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl animate-in zoom-in-95">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <h3 className="text-sm font-extrabold text-foreground">
                                {editingScenario.id ? 'Scenarioni Tahrirlash' : 'Yangi Scenario Qo\'shish'}
                            </h3>
                            <button onClick={() => setIsEditing(false)} className="p-1 text-muted-foreground hover:text-foreground">
                                <X size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-3 text-xs">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-bold mb-1">Emoji</label>
                                    <input
                                        type="text"
                                        value={editingScenario.emoji || ''}
                                        onChange={e => setEditingScenario({ ...editingScenario, emoji: e.target.value })}
                                        placeholder="🍣"
                                        className="w-full p-2 bg-muted border border-border rounded-xl font-bold text-center"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1">JLPT Darajasi</label>
                                    <select
                                        value={editingScenario.difficulty || 'N4'}
                                        onChange={e => setEditingScenario({ ...editingScenario, difficulty: e.target.value as any })}
                                        className="w-full p-2 bg-muted border border-border rounded-xl font-bold"
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
                                <label className="block font-bold mb-1">Yaponcha Sarlavha (Kanji/Kana)</label>
                                <input
                                    type="text"
                                    required
                                    value={editingScenario.title_ja || ''}
                                    onChange={e => setEditingScenario({ ...editingScenario, title_ja: e.target.value })}
                                    placeholder="レストラン (Resutoran)"
                                    className="w-full p-2.5 bg-muted border border-border rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-1">O'zbekcha Sarlavha</label>
                                <input
                                    type="text"
                                    required
                                    value={editingScenario.title_uz || ''}
                                    onChange={e => setEditingScenario({ ...editingScenario, title_uz: e.target.value })}
                                    placeholder="Restoranda buyurtma"
                                    className="w-full p-2.5 bg-muted border border-border rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-1">Qisqacha Tavsif (O'zbekcha)</label>
                                <input
                                    type="text"
                                    value={editingScenario.description_uz || ''}
                                    onChange={e => setEditingScenario({ ...editingScenario, description_uz: e.target.value })}
                                    placeholder="Restoranda menyu va buyurtma berish mashqi"
                                    className="w-full p-2.5 bg-muted border border-border rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-1">AI Coach Boshlanish Jumlasi (Yaponcha)</label>
                                <textarea
                                    required
                                    rows={2}
                                    value={editingScenario.opening_line_ja || ''}
                                    onChange={e => setEditingScenario({ ...editingScenario, opening_line_ja: e.target.value })}
                                    placeholder="いらっしゃいませ！何名様でしょうか？"
                                    className="w-full p-2.5 bg-muted border border-border rounded-xl"
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="font-bold text-foreground">🤖 AI Kontekst Prompt (AI uchun Rol va Instruktsiya)</label>
                                    <span className="text-[10px] text-indigo-500 font-bold">AI shu matnga asosan suhbatlashadi</span>
                                </div>
                                <textarea
                                    rows={4}
                                    required
                                    value={editingScenario.context_prompt || ''}
                                    onChange={e => setEditingScenario({ ...editingScenario, context_prompt: e.target.value })}
                                    placeholder="Masalan: Siz Tokiodagi kiyim do'koni sotuvchisisiz. Mijozdan qaysi rang va o'lcham kerakligini so'rang, narxni tushuntiring..."
                                    className="w-full p-3 bg-muted border border-border rounded-xl font-mono text-xs leading-relaxed focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <p className="text-[10px] text-muted-foreground mt-1">
                                    💡 <b>Maslahat:</b> AI ga kim rolida gapirishi, qanday savollar berishi va foydalanuvchidan nimani so'rashi kerakligini batafsil yozing.
                                </p>
                            </div>

                            <div>
                                <label className="block font-bold mb-1">Kalit Iboralar (Vergul bilan ajratilgan)</label>
                                <input
                                    type="text"
                                    value={keyPhrasesInput}
                                    onChange={e => setKeyPhrasesInput(e.target.value)}
                                    placeholder="おすすめは何ですか, これをお願いします, お会計をお願いします"
                                    className="w-full p-2.5 bg-muted border border-border rounded-xl font-mono text-xs"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-border">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-xl font-bold"
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md"
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
