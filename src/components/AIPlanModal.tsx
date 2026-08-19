import { BookOpen, Loader2, Sparkles, Youtube } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { generateFullStudyPlan, SmartResource, FullStudyPlan, isAIKeyConfigured } from '../utils/ai';
import { toast } from '../hooks/use-toast';

interface AIPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AIPlanModal: React.FC<AIPlanModalProps> = ({ isOpen, onClose }) => {
    const { subjects, addTask, awardXP, settings, addGoal, addNote } = useStudyData();
    const [topic, setTopic] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [examDate, setExamDate] = useState('');
    const [hoursPerDay, setHoursPerDay] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const [previewTasks, setPreviewTasks] = useState<FullStudyPlan['schedule']>([]);
    const [resources, setResources] = useState<SmartResource[]>([]);
    const [createGoal, setCreateGoal] = useState(true);
    const [activeTab, setActiveTab] = useState<'plan' | 'resources'>('plan');
    const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
    const [learningStyle, setLearningStyle] = useState<'visual' | 'reading' | 'practical'>('visual');

    if (!isOpen) return null;

    const handleGenerate = async () => {
        if (!isAIKeyConfigured()) {
            toast({ variant: 'destructive', title: 'API Kalit Kerak', description: 'AI funksiyalar uchun API kalit kerak. Sozlamalar → AI bo\'limida kiriting.' });
            return;
        }
        if (!topic && !selectedSubject) return;

        const effectiveTopic = topic || subjects.find(s => s.id === selectedSubject)?.name || '';
        if (!effectiveTopic) return;

        const days = examDate
            ? Math.ceil((new Date(examDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
            : 7;

        if (days <= 0) {
            toast({ variant: 'destructive', title: 'Xatolik', description: "Imtihon sanasi kelajakda bo'lishi kerak!" });
            return;
        }

        setIsLoading(true);
        try {
            // Optimized: Single API call for both Plan and Resources
            const fullPlan = await generateFullStudyPlan(
                effectiveTopic, 
                days, 
                hoursPerDay, 
                level,
                learningStyle,
                settings.googleApiKey
            );

            setPreviewTasks(fullPlan.schedule || []);
            setResources(fullPlan.resources || []);
            setActiveTab('plan');
        } catch (error: unknown) {
            console.error('AI Plan Generation Error:', error);
            const errorMessage = (error as Error).message || 'Noma\'lum xato';
            const isRateLimit = errorMessage.includes('429') || errorMessage.includes('quota');
            const message = isRateLimit
                ? "AI hozir band. Iltimos keyinroq urinib ko'ring."
                : `Reja yaratishda xatolik: ${errorMessage}`;
            toast({ variant: 'destructive', title: 'Xatolik', description: message });
        } finally {
            setIsLoading(false);
        }
    };

    const handleConfirm = async () => {
        const effectiveTopic = topic || subjects.find(s => s.id === selectedSubject)?.name || 'Study Plan';
        let goalId: string | undefined = undefined;
        const subjectId = selectedSubject || undefined;

        // 1. Create Goal if requested
        if (createGoal) {
            const newGoal = await addGoal({
                title: effectiveTopic,
                description: `AI Generated Plan for ${effectiveTopic}`,
                deadline: examDate || new Date().toISOString(), // Fallback if no date
                progress: 0,
                color: '#6366f1' // Default indigo
            });
            if (newGoal) {
                goalId = newGoal.id;
            }
        }

        // 2. Save Tasks (Linked to Goal if created)
        // Sort previewTasks by dayOffset to ensure they are added in order
        const sortedTasks = [...previewTasks].sort((a, b) => a.dayOffset - b.dayOffset);

        sortedTasks.forEach((item, index) => {
            const date = new Date();
            date.setDate(date.getDate() + item.dayOffset);
            // Har bir vazifaga ketma-ketlikni saqlash uchun kichik vaqt farqi (sekund) qo'shamiz
            date.setSeconds(date.getSeconds() + index);
            const isoDate = date.toISOString();

            addTask({
                title: item.description ? `${item.title}: ${item.description}` : item.title,
                priority: 'medium',
                status: 'todo',
                subjectId: subjectId,
                goalId: goalId, // Now properly linked!
                dueDate: isoDate, // Use dueDate as per schema
                deadline: isoDate, // Also set deadline for UI compatibility
                completed: false
            });
        });

        // 3. Save Resources as Note
        if (resources.length > 0) {
            const content = resources.map(r => `## ${r.title} (${r.type})\n${r.description}\n[Link](${r.link})`).join('\n\n');
            addNote({
                title: `📚 Resources: ${effectiveTopic}`,
                content: content,
                subjectId: subjectId || undefined,
            });
        }

        // Bonus XP for using AI Planner
        awardXP(100);

        onClose();
        setPreviewTasks([]);
        setResources([]);
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
                                    {subjects.filter(s => !s.isArchived).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
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

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Kunlik O'qish (Soat)</label>
                                    <input
                                        type="number"
                                        value={hoursPerDay}
                                        onChange={e => setHoursPerDay(Number(e.target.value))}
                                        min={1} max={12}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sizning Darajangiz</label>
                                    <select
                                        value={level}
                                        onChange={e => setLevel(e.target.value as any)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    >
                                        <option value="beginner">Boshlang'ich</option>
                                        <option value="intermediate">O'rta</option>
                                        <option value="advanced">Kuchli</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Asosiy O'rganish Uslubi</label>
                                <select
                                    value={learningStyle}
                                    onChange={e => setLearningStyle(e.target.value as any)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                >
                                    <option value="visual">Ko'proq Videolar ko'rish</option>
                                    <option value="practical">Ko'proq Amaliyot/Kod yozish</option>
                                    <option value="reading">Ko'proq Maqola/Kitob o'qish</option>
                                </select>
                            </div>

                            <Button onClick={handleGenerate} disabled={isLoading || (!topic && !selectedSubject)} className="w-full py-4 mt-4 bg-indigo-600 hover:bg-indigo-700">
                                {isLoading ? <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Sun'iy Intellekt Ishlamoqda...</span> : 'Reja Yaratish'}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4 h-full flex flex-col">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-gray-900 dark:text-white">Natija ({previewTasks.length} vazifa)</h3>
                                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                                    <button
                                        onClick={() => setActiveTab('plan')}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${activeTab === 'plan' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Reja
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('resources')}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${activeTab === 'resources' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Resurslar
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                                {activeTab === 'plan' ? (
                                    previewTasks.map((t, idx) => (
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
                                        </div>
                                    ))
                                ) : (
                                    <div className="grid gap-3">
                                        {resources.map((r, idx) => (
                                            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded-lg ${r.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                                        {r.type === 'video' ? <Youtube size={20} /> : <BookOpen size={20} />}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{r.title}</h4>
                                                        <p className="text-xs text-gray-500 mt-1 mb-2">{r.description}</p>
                                                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-500 hover:underline">
                                                            Ko'rish &rarr;
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                <label className="flex items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={createGoal}
                                        onChange={(e) => setCreateGoal(e.target.checked)}
                                        className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white text-sm">Avtomatik Maqsad Yaratish</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Yangi maqsad ochib, barcha vazifalarni unga bog'laydi</div>
                                    </div>
                                </label>

                                <div className="flex gap-4">
                                    <Button variant="secondary" onClick={() => setPreviewTasks([])} className="flex-1">Orqaga</Button>
                                    <Button onClick={handleConfirm} className="flex-1 bg-green-600 hover:bg-green-700">Rejani Qabul Qilish</Button>
                                </div>
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
