import { Calendar, Plus, Sparkles, Target } from 'lucide-react';
import React, { useState } from 'react';
import { format, addWeeks } from 'date-fns';
import AIPlanModal from '../components/AIPlanModal';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';

const GoalsPage: React.FC = () => {
    const { goals, addGoal, deleteGoal, updateGoal } = useStudyData();
    const { t } = useLanguage();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAIModalOpen, setAIModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDeadline, setNewDeadline] = useState(format(addWeeks(new Date(), 1), "yyyy-MM-dd'T'HH:mm"));

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        try {
            await addGoal({
                title: newTitle.trim(),
                description: '',
                deadline: new Date(newDeadline).toISOString(),
                priority: 'medium',
                progress: 0
            });
            setNewTitle('');
            setNewDeadline(format(addWeeks(new Date(), 1), "yyyy-MM-dd'T'HH:mm"));
            setModalOpen(false);
        } catch (err) {
            console.error("Add goal error:", err);
            alert(t('common.error'));
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">{t('goals.title')}</h2>
                    <p className="text-muted-foreground mt-1">{t('goals.subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setAIModalOpen(true)} className="text-indigo-600 bg-indigo-50 border-indigo-100">
                        <Sparkles size={20} className="mr-2" /> {t('goals.aiPlan')}
                    </Button>
                    <Button onClick={() => setModalOpen(true)}>
                        <Plus size={20} className="mr-2" /> {t('goals.addGoal')}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map(goal => (
                    <div key={goal.id} className="glass-card p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: (goal.color || '#6366f1') + '20', color: goal.color || '#6366f1' }}>
                                    <Target size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-foreground">{goal.title}</h3>
                            </div>
                            <Button
                                variant="secondary"
                                onClick={() => deleteGoal(goal.id)}
                                className="text-destructive hover:bg-destructive/10 px-3 py-1 text-sm h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                O'chirish
                            </Button>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Jarayon</span>
                                <span className="font-medium text-foreground">{Math.round(goal.progress)}%</span>
                            </div>
                            <ProgressBar progress={goal.progress} color={goal.color || '#6366f1'} />
                            <input
                                type="range"
                                min="0" max="100"
                                value={goal.progress}
                                onChange={(e) => updateGoal(goal.id, { progress: Number(e.target.value) })}
                                className="w-full mt-2 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
                            />
                            <p className="text-xs text-center text-muted-foreground mt-1">Suring va o'z progressingizni belgilang</p>
                        </div>

                        <div className="flex items-center justify-between text-muted-foreground text-sm mt-4">
                            <div className="flex items-center">
                                <Calendar size={14} className="mr-2" />
                                {new Date(goal.createdAt || Date.now()).toLocaleDateString()}
                            </div>
                            <div className="text-xs font-medium">
                                Tugash: {goal.deadline ? (isNaN(new Date(goal.deadline).getTime()) ? goal.deadline : format(new Date(goal.deadline), 'dd.MM.yyyy HH:mm')) : '—'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-background/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="glass-card border-none ring-1 ring-border shadow-2xl p-6 rounded-2xl w-full max-w-md backdrop-blur-xl">
                        <h3 className="text-xl font-bold mb-4 text-foreground">Yangi Maqsad</h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Maqsad Nomi *
                                </label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="Nimalarga erishmoqchisiz?"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary backdrop-blur-sm"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Tugash Vaqti *
                                </label>
                                <input
                                    type="datetime-local"
                                    value={newDeadline}
                                    onChange={(e) => setNewDeadline(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary backdrop-blur-sm"
                                    required
                                />
                            </div>
                            <div className="flex gap-3 justify-end pt-2">
                                <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Bekor qilish</Button>
                                <Button type="submit">Maqsad Yaratish</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <AIPlanModal isOpen={isAIModalOpen} onClose={() => setAIModalOpen(false)} />
        </div>
    );
};

export default GoalsPage;
