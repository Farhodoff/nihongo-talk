import React from 'react';
import { Target, CheckCircle2, Clock, BookOpen, Mic, BrainCircuit, ArrowRight, Sparkles } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { calculateRealMetrics } from '../../utils/realAnalytics';
import { PersonalLearningPlanService } from '../../services/PersonalLearningPlanService';
import { useNavigate } from 'react-router-dom';

interface DailyTargetHubProps {
    onOpenReflection: () => void;
}

export const DailyTargetHub: React.FC<DailyTargetHubProps> = ({ onOpenReflection }) => {
    const navigate = useNavigate();
    const { flashcards, tasks, sessions, user } = useStudyData();
    const metrics = calculateRealMetrics(flashcards, tasks, sessions);

    // Fetch active learning goal for dynamic daily targets
    const userId = user?.id || 'guest';
    const activeGoal = PersonalLearningPlanService.getActiveGoal(userId);

    // Target calculation from real user plan
    const targetFocusMins = activeGoal?.dailyMinutes || 60; 
    const currentFocusMins = metrics.todayFocusMinutes;
    const focusPercent = Math.min(100, Math.round((currentFocusMins / targetFocusMins) * 100));

    // Flashcard repetitions
    const targetCards = 20;
    const currentCards = Math.min(targetCards, flashcards.filter(f => f.repetitions > 0).length);
    const cardsPercent = Math.min(100, Math.round((currentCards / targetCards) * 100));

    // Speaking sessions / completed tasks today
    const todayCompletedTasks = tasks.filter(t => t.completed || t.status === 'done').length;

    const isDayCompleted = focusPercent >= 80 || (currentCards >= 10 && todayCompletedTasks > 0);

    return (
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl text-white space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-500/20 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                        <Target size={26} />
                    </div>
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold mb-1">
                            <Sparkles size={11} /> {activeGoal ? `${activeGoal.currentLevel} → ${activeGoal.targetLevel} Shaxsiy Reja` : 'Kunlik O\'quv Maqsadi'}
                        </div>
                        <h2 className="text-xl md:text-2xl font-black">Bugungi Aniqlashtirilgan Dars Maqsadi 🎯</h2>
                        <p className="text-xs text-indigo-200/80">Grammatika, Speaking, Listening va Lug'at bloklari bo'yicha integratsiyalashgan ta'lim</p>
                    </div>
                </div>

                <button
                    onClick={onOpenReflection}
                    className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-2xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                    <BrainCircuit size={18} />
                    <span>Kunlik Hisobot (Xulosa)</span>
                </button>
            </div>

            {/* Daily Target Progress Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric 1: Focus Time */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-indigo-200 mb-1">
                            <span className="flex items-center gap-1.5"><Clock size={15} /> Kunlik Dars Vaqti</span>
                            <span className="font-mono">{currentFocusMins} / {targetFocusMins} daqiqa</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-indigo-400 h-full transition-all duration-500 rounded-full" style={{ width: `${focusPercent}%` }} />
                        </div>
                    </div>
                    <p className="text-[11px] text-indigo-300/70">{focusPercent}% bajarildi</p>
                </div>

                {/* Metric 2: Grammar Theory & Units */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-indigo-200 mb-1">
                            <span className="flex items-center gap-1.5"><BookOpen size={15} /> Grammatika (Murphy)</span>
                            <span className="font-mono">A1 Nazariya</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-blue-400 h-full transition-all duration-500 rounded-full" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <p className="text-[11px] text-indigo-300/70">Formulalar & Testlar</p>
                </div>

                {/* Metric 3: Vocabulary SRS */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-indigo-200 mb-1">
                            <span className="flex items-center gap-1.5"><BookOpen size={15} /> Lug'at Qotirish</span>
                            <span className="font-mono">{currentCards} / {targetCards} so'z</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-emerald-400 h-full transition-all duration-500 rounded-full" style={{ width: `${cardsPercent}%` }} />
                        </div>
                    </div>
                    <p className="text-[11px] text-indigo-300/70">{cardsPercent}% takrorlandi</p>
                </div>

                {/* Metric 4: Speaking Practice */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-indigo-200 mb-1">
                            <span className="flex items-center gap-1.5"><Mic size={15} /> Speaking Mashqi</span>
                            <span className="font-mono">{todayCompletedTasks > 0 ? `${todayCompletedTasks} mashq` : 'Kutilmoqda'}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-amber-400 h-full transition-all duration-500 rounded-full" style={{ width: todayCompletedTasks > 0 ? '100%' : '15%' }} />
                        </div>
                    </div>
                    <p className="text-[11px] text-indigo-300/70">{todayCompletedTasks > 0 ? 'Muvaffaqiyatli o\'tkazildi' : 'AI Murabbiy bilan muloqot'}</p>
                </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-emerald-400 shrink-0" />
                    <div className="text-xs">
                        <span className="font-extrabold text-indigo-200 uppercase tracking-wider block">Bugungi Tavsiya Etilgan Harakat:</span>
                        <span className="text-white font-medium">
                            {isDayCompleted
                                ? "Bugungi barcha asosiy bloklar bajarildi! Kunni yakunlash uchun 'Kunlik Hisobot' tugmasini bosing."
                                : "Murphy A1 Grammatika qoidalarini o'rganing va Scenarios bo'limida 15 daqiqa AI Murabbiy bilan ovozli muloqot qiling."}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onClick={() => navigate('/scenarios')}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow"
                    >
                        <Mic size={14} />
                        <span>Scenarios (Speaking)</span>
                    </button>
                    <button
                        onClick={() => navigate('/vocabulary')}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                    >
                        <BookOpen size={14} />
                        <span>Lug'at</span>
                        <ArrowRight size={13} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DailyTargetHub;
