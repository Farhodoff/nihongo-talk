import React, { useState } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Button } from '../ui/Button';

const DailyGoalSection: React.FC = () => {
    const { settings, updateSettings } = useStudyData();
    const [goalHours, setGoalHours] = useState(Math.floor((settings.dailyStudyGoalMinutes || 240) / 60));
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = async () => {
        const clampedHours = Math.max(1, Math.min(24, goalHours || 4));
        setGoalHours(clampedHours);
        const minutes = clampedHours * 60;
        await updateSettings({ dailyStudyGoalMinutes: minutes });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2500);
    };

    return (
        <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/80 dark:border-slate-800/80 shadow-2xl p-6 md:p-8 space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
                <div>
                    <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">NAZORAT & MONTIORING</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">⏱ Kunlik O'qish Maqsadi</h3>
                </div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
                    {goalHours} Soat / Kun
                </span>
            </div>
            
            <div className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-widest mb-2">
                        Kunlik O'qish Vaqti (Soat)
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            min="1"
                            max="24"
                            value={goalHours}
                            onChange={(e) => setGoalHours(Number(e.target.value))}
                            className="w-full px-5 py-4 border-2 border-gray-200 dark:border-slate-800 rounded-2xl bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-bold text-lg focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">Soat</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                        🤖 AI Ustoz ushbu belgilangan maqsadga qarab darslaringizni kuzatib boradi hamda vaqtida bajarmasangiz bildirishnoma beradi.
                    </p>
                </div>
                
                <div className="pt-2">
                    <Button 
                        onClick={handleSave} 
                        className={`w-full py-4 text-base font-bold rounded-2xl transition-all shadow-lg active:scale-95 ${
                            isSaved 
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25' 
                                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-500/25'
                        }`}
                    >
                        {isSaved ? "✅ Maqsad Muvaffaqiyatli Saqlandi!" : "O'zgarishlarni Saqlash"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DailyGoalSection;
