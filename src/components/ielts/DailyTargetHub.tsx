import React from 'react';
import { Target, CheckCircle2, Clock, BookOpen, Mic, BrainCircuit } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { calculateRealMetrics } from '../../utils/realAnalytics';

interface DailyTargetHubProps {
    onOpenReflection: () => void;
}

export const DailyTargetHub: React.FC<DailyTargetHubProps> = ({ onOpenReflection }) => {
    const { flashcards, tasks, sessions } = useStudyData();
    const metrics = calculateRealMetrics(flashcards, tasks, sessions);

    // Target calculation: 2.5 hours focus, 20 flashcards, 2 tasks
    const targetFocusMins = 150; 
    const currentFocusMins = metrics.todayFocusMinutes;
    const focusPercent = Math.min(100, Math.round((currentFocusMins / targetFocusMins) * 100));

    const targetCards = 20;
    const currentCards = Math.min(targetCards, flashcards.filter(f => f.repetitions > 0).length);
    const cardsPercent = Math.min(100, Math.round((currentCards / targetCards) * 100));

    const isDayCompleted = focusPercent >= 60 || metrics.todayCompletedTasks > 0;

    return (
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl text-white space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-500/20 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                        <Target size={26} />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-black">Bugungi Aniqlashtirilgan Maqsad & Yo'nalish 🎯</h2>
                        <p className="text-xs text-indigo-200/80">Platforma sizni bosqichma-bosqich yo'naltiradi — chalg'imasdan dars qiling</p>
                    </div>
                </div>

                <button
                    onClick={onOpenReflection}
                    className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-2xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                    <BrainCircuit size={18} />
                    <span>Bugun nimani o'rgandingiz? (Kunlik Hisobot)</span>
                </button>
            </div>

            {/* Daily Target Progress Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-200">
                        <span className="flex items-center gap-1.5"><Clock size={15} /> Kunlik Dars Vaqti</span>
                        <span>{currentFocusMins} / {targetFocusMins} daqiqa</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-indigo-400 h-full transition-all duration-500 rounded-full" style={{ width: `${focusPercent}%` }} />
                    </div>
                    <p className="text-[11px] text-indigo-300/70">{focusPercent}% bajarildi</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-200">
                        <span className="flex items-center gap-1.5"><BookOpen size={15} /> Lug'at Qotirish</span>
                        <span>{currentCards} / {targetCards} so'z</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-emerald-400 h-full transition-all duration-500 rounded-full" style={{ width: `${cardsPercent}%` }} />
                    </div>
                    <p className="text-[11px] text-indigo-300/70">{cardsPercent}% takrorlandi</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-200">
                        <span className="flex items-center gap-1.5"><Mic size={15} /> Speaking Mashq</span>
                        <span>{metrics.todayCompletedTasks > 0 ? 'Bajarildi' : 'Kutilmoqda'}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-amber-400 h-full transition-all duration-500 rounded-full" style={{ width: metrics.todayCompletedTasks > 0 ? '100%' : '20%' }} />
                    </div>
                    <p className="text-[11px] text-indigo-300/70">AI Coach bilan suhbat</p>
                </div>
            </div>

            {/* Next Step Actionable Guidance Banner */}
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-emerald-400 shrink-0" />
                    <div className="text-xs">
                        <span className="font-extrabold text-indigo-200 uppercase tracking-wider block">Hozirgi Keyingi Qadam:</span>
                        <span className="text-white font-medium">
                            {isDayCompleted
                                ? "Bugungi asosiy bloklar bajarildi! Kunni yakunlash uchun 'Bugun nimani o'rgandingiz?' tugmasini bosing."
                                : "Speaking Coach bo'limida 15 daqiqa AI Examiner bilan muloqot qiling va 20 ta yangi fleshkartani qayta takrorlang."}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
