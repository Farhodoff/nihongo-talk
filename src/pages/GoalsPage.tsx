import { Calendar, Plus, Sparkles, Target } from 'lucide-react';
import React, { useState } from 'react';
import moment from 'moment';
import AIPlanModal from '../components/AIPlanModal';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useStudyData } from '../context/StudyPlannerContext';

const GoalsPage: React.FC = () => {
    const { goals, addGoal, deleteGoal, updateGoal } = useStudyData();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAIModalOpen, setAIModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDeadline, setNewDeadline] = useState(moment().add(1, 'week').format('YYYY-MM-DDTHH:mm'));

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        addGoal({
            title: newTitle,
            description: '',
            deadline: moment(newDeadline).toISOString(),
            priority: 'medium',
            progress: 0
        });
        setNewTitle('');
        setNewDeadline(moment().add(1, 'week').format('YYYY-MM-DDTHH:mm'));
        setModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Maqsadlar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Akademik maqsadlaringizni qo'ying va kuzatib boring</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setAIModalOpen(true)} className="text-indigo-600 bg-indigo-50 border-indigo-100">
                        <Sparkles size={20} className="mr-2" /> AI Reja
                    </Button>
                    <Button onClick={() => setModalOpen(true)}>
                        <Plus size={20} className="mr-2" /> Yangi Maqsad
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map(goal => (
                    <div key={goal.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: (goal.color || '#6366f1') + '20', color: goal.color || '#6366f1' }}>
                                    <Target size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{goal.title}</h3>
                            </div>
                            <Button
                                variant="secondary"
                                onClick={() => deleteGoal(goal.id)}
                                className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1 text-sm h-8"
                            >
                                O'chirish
                            </Button>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-500">Jarayon</span>
                                <span className="font-medium text-gray-900 dark:text-white">{Math.round(goal.progress)}%</span>
                            </div>
                            <ProgressBar progress={goal.progress} color={goal.color || '#6366f1'} />
                            <input
                                type="range"
                                min="0" max="100"
                                value={goal.progress}
                                onChange={(e) => updateGoal(goal.id, { progress: Number(e.target.value) })}
                                className="w-full mt-2 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <p className="text-xs text-center text-gray-400 mt-1">Suring va o'z progressingizni belgilang</p>
                        </div>

                        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mt-4">
                            <div className="flex items-center">
                                <Calendar size={14} className="mr-2" />
                                {new Date(goal.createdAt || Date.now()).toLocaleDateString()}
                            </div>
                            <div className="text-xs font-medium">
                                Tugash: {moment(goal.deadline).format('DD.MM.YYYY HH:mm')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Yangi Maqsad</h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Maqsad Nomi *
                                </label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="Nimalarga erishmoqchisiz?"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tugash Vaqti *
                                </label>
                                <input
                                    type="datetime-local"
                                    value={newDeadline}
                                    onChange={(e) => setNewDeadline(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
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
