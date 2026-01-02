import { Loader2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';
import { generateStudyPlanWithAI } from '../utils/ai';

interface AIPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AIPlanModal: React.FC<AIPlanModalProps> = ({ isOpen, onClose }) => {
    const { subjects, addTask, awardXP, settings } = useStudyPlanner();
    const [topic, setTopic] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [examDate, setExamDate] = useState('');
    const [hoursPerDay, setHoursPerDay] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const [previewTasks, setPreviewTasks] = useState<any[]>([]);

    if (!isOpen) return null;

    const handleGenerate = async () => {
        if (!topic && !selectedSubject) return;

        const effectiveTopic = topic || subjects.find(s => s.id === selectedSubject)?.name || '';
        if (!effectiveTopic) return;

        const days = examDate
            ? Math.ceil((new Date(examDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
            : 7;

        if (days <= 0) {
            alert("Imtihon sanasi kelajakda bo'lishi kerak!");
            return;
        }

        setIsLoading(true);
        try {
            const plan = await generateStudyPlanWithAI(effectiveTopic, days, hoursPerDay, settings.googleApiKey);
            setPreviewTasks(plan);
        } catch (error: any) {
            console.error(error);
            alert(`Xatolik: ${error.message || 'AI xizmatida muammo yuz berdi'}. Iltimos, birozdan so'ng urinib ko'ring.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleConfirm = () => {
        previewTasks.forEach(item => {
            const date = new Date();
            date.setDate(date.getDate() + item.dayOffset);

            addTask({
                title: item.description ? `${item.title}: ${item.description}` : item.title,
                priority: 'medium',
                status: 'todo',
                subjectId: selectedSubject || undefined,
                deadline: date.toISOString(), // Use deadline for scheduling
                completed: false
            });
        });

        // Bonus XP for using AI Planner
        awardXP(100);

        onClose();
        setPreviewTasks([]);
        setTopic('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1f2937] rounded-3xl w-full max-w-lg shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden max-h-[90vh] flex flex-col">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                    <div className="flex items-center gap-2">
                        <Sparkles size={24} className="text-yellow-300" />
                        <h2 className="text-xl font-bold">AI O'quv Rejalashtiruvchisi</h2>
                    </div>
                    <p className="text-white/80 text-sm mt-1">Imtihongacha bo'lgan dars jadvalini yarating.</p>
                </div>

                <div className="p-6 overflow-y-auto flex-1">
                    {previewTasks.length === 0 ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fan (Ixtiyoriy)</label>
                                <select
                                    value={selectedSubject}
                                    onChange={e => setSelectedSubject(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                >
                                    <option value="">-- Boshqa Mavzu --</option>
                                    {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                </select>
                            </div>

                            {!selectedSubject && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Yoki Mavzu Kiriting</label>
                                    <input
                                        type="text"
                                        value={topic}
                                        onChange={e => setTopic(e.target.value)}
                                        placeholder="masalan, Oliy Matematika"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Imtihon Sanasi</label>
                                <input
                                    type="date"
                                    value={examDate}
                                    onChange={e => setExamDate(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Kunlik O'qish Soati</label>
                                <input
                                    type="number"
                                    value={hoursPerDay}
                                    onChange={e => setHoursPerDay(Number(e.target.value))}
                                    min={1} max={12}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <Button onClick={handleGenerate} disabled={isLoading || (!topic && !selectedSubject)} className="w-full py-4 mt-4 bg-indigo-600 hover:bg-indigo-700">
                                {isLoading ? <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> O'ylanmoqda...</span> : 'Reja Yaratish'}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 dark:text-white">Rejani Ko'rish ({previewTasks.length} vazifalar)</h3>
                            <div className="space-y-4">
                                {previewTasks.map((t, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 transition-colors">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-semibold text-gray-900 dark:text-white">{t.title}</span>
                                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                                                Kun {t.dayOffset + 1}
                                            </span>
                                        </div>
                                        {t.description && (
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                                {t.description}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                            <span>⏱ {t.duration} daqiqa</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-4">
                                <Button variant="secondary" onClick={() => setPreviewTasks([])} className="flex-1">Orqaga</Button>
                                <Button onClick={handleConfirm} className="flex-1 bg-green-600 hover:bg-green-700">Rejani Qabul Qilish</Button>
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">✕</button>
            </div>
        </div>
    );
};

export default AIPlanModal;
