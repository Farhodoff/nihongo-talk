import React, { useState } from 'react';
import { X, Sparkles, Calendar, Check, Plus } from 'lucide-react';
import { generateAITimetable, AITimetableScheduleItem } from '../../utils/ai';
import { useStudyData } from '../../context/StudyPlannerContext';

interface AITimetableGeneratorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AITimetableGeneratorModal: React.FC<AITimetableGeneratorModalProps> = ({
    isOpen,
    onClose
}) => {
    const { addEvent } = useStudyData();
    const [goalDescription, setGoalDescription] = useState('');
    const [dailyHours, setDailyHours] = useState(3);
    const [daysCount, setDaysCount] = useState(7);
    const [isLoading, setIsLoading] = useState(false);
    const [scheduleItems, setScheduleItems] = useState<AITimetableScheduleItem[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleGenerate = async () => {
        if (!goalDescription.trim()) return;
        setIsLoading(true);
        setIsSuccess(false);
        const items = await generateAITimetable(goalDescription, dailyHours, daysCount);
        setScheduleItems(items);
        setIsLoading(false);
    };

    const handleImportEvents = async () => {
        for (const item of scheduleItems) {
            await addEvent({
                title: item.title,
                description: item.description,
                eventDate: `${item.date}T${item.startTime}:00`,
                eventType: 'personal',
                notifyBeforeMinutes: 15,
                repetitionType: 'none'
            });
        }
        setIsSuccess(true);
        setTimeout(() => {
            onClose();
            setScheduleItems([]);
            setIsSuccess(false);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                AI Smart Timetable Generator
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Sun'iy intellekt yordamida avtomatik o'quv jadvali tuzish
                            </p>
                        </div>
                    </div>
                    
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto space-y-5 flex-1">
                    {scheduleItems.length === 0 ? (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    O'quv maqsadingiz (nima uchun tayyorlanmoqchisiz?)
                                </label>
                                <textarea
                                    value={goalDescription}
                                    onChange={(e) => setGoalDescription(e.target.value)}
                                    placeholder="Masalan: 3 oydan keyin IELTS topshiraman, Reading va Speaking bo'yicha Band 7.5 kerak..."
                                    rows={3}
                                    className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                                        Kunlik tayyorgarlik vaqti (soat)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="12"
                                        value={dailyHours}
                                        onChange={(e) => setDailyHours(Number(e.target.value))}
                                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                                        Necha kunlik reja tuzilsin?
                                    </label>
                                    <select
                                        value={daysCount}
                                        onChange={(e) => setDaysCount(Number(e.target.value))}
                                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                                    >
                                        <option value={7}>1 Hafta (7 kun)</option>
                                        <option value={14}>2 Hafta (14 kun)</option>
                                        <option value={30}>1 Oy (30 kun)</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Calendar size={16} className="text-indigo-500" />
                                    Tuzilgan Jadval ({scheduleItems.length} ta mashg'ulot)
                                </h4>
                                <button
                                    onClick={() => setScheduleItems([])}
                                    className="text-xs text-indigo-500 hover:underline font-medium"
                                >
                                    Qayta tuzish
                                </button>
                            </div>

                            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                                {scheduleItems.map((item, i) => (
                                    <div key={i} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 flex items-start justify-between gap-3 text-sm">
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">
                                                {item.title}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                {item.description}
                                            </div>
                                        </div>
                                        <div className="text-right whitespace-nowrap text-xs font-mono text-indigo-600 dark:text-indigo-400">
                                            <div>📅 {item.date}</div>
                                            <div>⏰ {item.startTime} ({item.durationMinutes}m)</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 flex items-center justify-end gap-3">
                    {scheduleItems.length === 0 ? (
                        <button
                            disabled={isLoading || !goalDescription.trim()}
                            onClick={handleGenerate}
                            className="w-full py-3 rounded-2xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    AI Jadval Tuzmoqda...
                                </>
                            ) : (
                                <>
                                    <Sparkles size={18} />
                                    AI Jadval Yaratish
                                </>
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={handleImportEvents}
                            disabled={isSuccess}
                            className="w-full py-3 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                        >
                            {isSuccess ? (
                                <>
                                    <Check size={18} />
                                    Jadval Kalendarga Qo'shildi! ✅
                                </>
                            ) : (
                                <>
                                    <Plus size={18} />
                                    Jadvalni Kalendarga Saqlash
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AITimetableGeneratorModal;
