import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp, BookOpen, Clock, Target, Sparkles } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { calculateRealMetrics } from '../../utils/realAnalytics';

export const RealWeaknessTracker: React.FC = () => {
    const { flashcards, tasks, sessions } = useStudyData();
    const metrics = calculateRealMetrics(flashcards, tasks, sessions);

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/10 text-indigo-600 rounded-2xl">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold text-foreground">Real O'sish & Diagnostika Tahlili</h3>
                        <p className="text-xs text-muted-foreground">Sizning real o'rganish natijalaringiz va oqsayotgan joylaringiz (No Fake Stats)</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full border border-indigo-500/20">
                    <Sparkles size={16} /> Real-Time Analytics Active
                </div>
            </div>

            {/* Metrics Dashboard Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-muted/40 rounded-2xl border border-border/60 space-y-1">
                    <span className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-1">
                        <BookOpen size={14} /> Jami Lug'at
                    </span>
                    <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{metrics.totalVocabLearned} ta</span>
                    <p className="text-[11px] text-muted-foreground">Tizimga kiritilgan kartochkalar</p>
                </div>

                <div className="p-4 bg-muted/40 rounded-2xl border border-border/60 space-y-1">
                    <span className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-1">
                        <Target size={14} /> Esda Saqlash
                    </span>
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{metrics.vocabRetentionRate}%</span>
                    <p className="text-[11px] text-muted-foreground">SM-2 algoritmi ko'rsatkichi</p>
                </div>

                <div className="p-4 bg-muted/40 rounded-2xl border border-border/60 space-y-1">
                    <span className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-1">
                        <CheckCircle2 size={14} /> Bugungi Topshiriq
                    </span>
                    <span className="text-2xl font-black text-purple-600 dark:text-purple-400">{metrics.todayCompletedTasks} / {metrics.todayTotalTasks}</span>
                    <p className="text-[11px] text-muted-foreground">Kunlik bajarilgan ishlar</p>
                </div>

                <div className="p-4 bg-muted/40 rounded-2xl border border-border/60 space-y-1">
                    <span className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-1">
                        <Clock size={14} /> Focus Vaqti
                    </span>
                    <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{metrics.todayFocusMinutes} daqiqa</span>
                    <p className="text-[11px] text-muted-foreground">Bugungi Pomodoro taymer</p>
                </div>
            </div>

            {/* Diagnostic Alert Box: "Qayerda oqsayotgani" */}
            <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-sm">
                    <AlertTriangle size={18} />
                    <span>Oqsayotgan Nuqta (Weakness Diagnostic): <b>{metrics.weakestArea}</b></span>
                </div>
                <p className="text-xs text-foreground leading-relaxed">{metrics.diagnosticMessage}</p>
                <div className="pt-2 border-t border-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    💡 <b>Amaliy Tavsiya:</b> {metrics.actionableTip}
                </div>
            </div>

            {/* Cambridge Real Hours Countdown Progress */}
            <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-3">
                <div className="flex items-center justify-between font-extrabold text-sm text-indigo-600 dark:text-indigo-400">
                    <span className="flex items-center gap-2">
                        🎓 Cambridge Standart Dars Soatlari Countdown
                    </span>
                    <span>{metrics.todayFocusMinutes > 0 ? (metrics.todayFocusMinutes / 60).toFixed(1) : 0} / 810 soat bajarildi</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full transition-all duration-500 rounded-full"
                        style={{ width: `${Math.min(100, Math.max(2, ((metrics.todayFocusMinutes / 60) / 810) * 100))}%` }}
                    />
                </div>
                <p className="text-[11px] text-muted-foreground">
                    0 Leveldan Band 7.5 gacha yetish uchun ~810 soat sifatli dars talab etiladi. Taymer orqali bajargan har bir daqiqangiz real hisobga o'tib boradi.
                </p>
            </div>
        </div>
    );
};
