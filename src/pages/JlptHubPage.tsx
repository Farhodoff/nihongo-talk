import React, { useState, useEffect } from 'react';
import { Target, FileText, Mic, BookOpen, Sparkles, ArrowRight, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JlptOnboardingModal } from '../components/jlpt/JlptOnboardingModal';
import { useStudyData } from '../context/StudyPlannerContext';

export const JlptHubPage: React.FC = () => {
    const navigate = useNavigate();
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const { flashcards } = useStudyData();

    const [userPlanData, setUserPlanData] = useState<{
        currentLevel: string;
        targetLevel: string;
        durationDays: number;
    } | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('study_planner_jlpt_user_target');
        if (saved) {
            try {
                setUserPlanData(JSON.parse(saved));
            } catch (e) {}
        }
    }, []);

    const jlptCards = flashcards.filter(f => f.front.includes('[N') || f.front.includes('漢字') || f.front.includes('語彙'));

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs rounded-full flex items-center gap-1.5 border border-rose-500/20">
                            <Sparkles size={14} /> JLPT JAPANESE MASTER 🎌
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-foreground">
                        JLPT Yapon Tili Hub (N5 ➔ N1)
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Kanji (漢字), Sakubun (作文) insho va Yaponiyalik AI Examiner bilan jonli muloqot
                    </p>
                </div>

                <button
                    onClick={() => setIsQuizOpen(true)}
                    className="px-6 py-3.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-rose-500/20 transition-all flex items-center gap-2"
                >
                    <Target size={18} />
                    <span>{userPlanData ? "Maqsadni Yangilash" : "JLPT Rejasini Tuzish 🎌"}</span>
                </button>
            </div>

            {/* Target Roadmap Banner */}
            {userPlanData ? (
                <div className="bg-gradient-to-r from-rose-900 via-purple-950 to-slate-900 border border-rose-500/30 rounded-3xl p-6 mb-8 text-white shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-rose-500/20 rounded-2xl border border-rose-500/30 text-rose-400">
                                <Flame size={24} />
                            </div>
                            <div>
                                <span className="text-xs text-rose-300 font-bold uppercase tracking-wider">Joriy Reja Targeti</span>
                                <h3 className="text-xl font-black">{userPlanData.currentLevel} ➔ {userPlanData.targetLevel} Band ({userPlanData.durationDays} Kun)</h3>
                            </div>
                        </div>
                        <span className="px-3.5 py-1.5 bg-emerald-500/20 text-emerald-400 font-extrabold text-xs rounded-full border border-emerald-500/30">
                            🟢 JLPT Master Active
                        </span>
                    </div>
                </div>
            ) : (
                <div className="bg-muted/40 border border-border rounded-3xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-black text-foreground mb-1">Noldan N1 gacha Shaxsiy Yapon Tili Rejasi</h3>
                        <p className="text-xs text-muted-foreground">Kanji va so'z boyligingizga moslangan reja yaratish uchun tugmani bosing.</p>
                    </div>
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-2xl shadow transition-all"
                    >
                        JLPT Reja Yaratish 🎌
                    </button>
                </div>
            )}

            {/* Core Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Speaking Kaiwa Coach */}
                <div
                    onClick={() => navigate('/jlpt-speaking')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mic size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Kaiwa AI Speaking Coach 🗣️</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Yaponiyalik AI O'qituvchi bilan jonli audiomuloqot (Romaji va Furigana qo'llab-quvvatlanadi).
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Sakubun Writing Evaluator */}
                <div
                    onClick={() => navigate('/jlpt-writing')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Sakubun (作文) Insho Tekshiruvi 📝</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Yaponcha insho va matnlaringizni Desu/Masu va Kanji qoidalariga ko'ra tekshirish.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-amber-500">
                        <span>Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Kanji Flashcards */}
                <div
                    onClick={() => navigate('/flashcards')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Kanji (漢字) & Vocab Decks ⛩️</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5-N1 Kanji va so'zlarni SM-2 takrorlash algoritmi orqali yodlash ({jlptCards.length} ta kartochka).
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-purple-500">
                        <span>Kartochkalarni ko'rish</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Onboarding Modal */}
            <JlptOnboardingModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                onPlanCreated={() => {
                    const saved = localStorage.getItem('study_planner_jlpt_user_target');
                    if (saved) setUserPlanData(JSON.parse(saved));
                }}
            />
        </div>
    );
};

export default JlptHubPage;
