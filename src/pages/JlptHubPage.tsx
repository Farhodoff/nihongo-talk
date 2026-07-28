import React, { useState, useEffect } from 'react';
import { Target, FileText, Mic, BookOpen, Sparkles, ArrowRight, Flame, Volume2, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JlptOnboardingModal } from '../components/jlpt/JlptOnboardingModal';
import { JlptGrammarKanjiMaster } from '../components/jlpt/JlptGrammarKanjiMaster';
import { useStudyData } from '../context/StudyPlannerContext';
import { KanjiCanvasPractice } from '../components/jlpt/KanjiCanvasPractice';

export const JlptHubPage: React.FC = () => {
    const navigate = useNavigate();
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const { flashcards, settings, updateSettings } = useStudyData();

    const [userPlanData, setUserPlanData] = useState<{
        finalGoalTitle?: string;
        currentLevel?: string;
        targetLevel?: string;
        durationDays?: number;
        generatedPlan?: {
            headline: string;
            summary: string;
        };
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
                            <Sparkles size={14} /> JLPT & KAIWA JAPANESE MASTER 🎌
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-foreground">
                        Yapon Tili Master Hub (Kaiwa & JLPT)
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Kaiwa (会話) muloqot, Mensetsu suhbat, Sakubun insho va Kanji bilimi
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {/* Furigana / Romaji toggle */}
                    <button
                        onClick={() => updateSettings({ showFurigana: !settings.showFurigana })}
                        title={settings.showFurigana ? 'Furiganani o\'chirish' : 'Furiganani yoqish'}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                            settings.showFurigana
                                ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30'
                                : 'bg-muted text-muted-foreground border-border hover:border-rose-500/30'
                        }`}
                    >
                        あ<span className="text-[8px] leading-none align-super">ふり</span>
                        {settings.showFurigana ? ' ON' : ' OFF'}
                    </button>
                    <button
                        onClick={() => updateSettings({ showRomaji: !settings.showRomaji })}
                        title={settings.showRomaji ? 'Romajini o\'chirish' : 'Romajini yoqish'}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                            settings.showRomaji
                                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30'
                                : 'bg-muted text-muted-foreground border-border hover:border-amber-500/30'
                        }`}
                    >
                        Romaji {settings.showRomaji ? 'ON' : 'OFF'}
                    </button>
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="px-6 py-3.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-rose-500/20 transition-all flex items-center gap-2"
                    >
                        <Target size={18} />
                        <span>{userPlanData ? "Maqsadni Yangilash" : "Shaxsiy Reja Tuzish 🎌"}</span>
                    </button>
                </div>
            </div>

            {/* Target Roadmap Banner */}
            {userPlanData ? (
                <div className="bg-gradient-to-r from-rose-950 via-purple-950 to-slate-900 border border-rose-500/30 rounded-3xl p-6 md:p-8 mb-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Award size={180} />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-8 space-y-3">
                            <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 text-xs font-bold px-3 py-1 rounded-full border border-rose-500/30">
                                <Flame size={14} />
                                <span>{userPlanData.durationDays || 90}-Kunlik Yapon Tili Challenge</span>
                            </div>
                            <h2 className="text-2xl font-black">
                                {userPlanData.generatedPlan?.headline || userPlanData.finalGoalTitle || `${userPlanData.currentLevel} ➔ ${userPlanData.targetLevel}`}
                            </h2>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {userPlanData.generatedPlan?.summary || "Yapon tilini samarali o'zlashtirish va imtihonlarni topshirish uchun sun'iy intellekt tomonidan shakllantirilgan dars jadvali."}
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex items-center justify-around lg:justify-end gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                            <div className="text-center">
                                <span className="text-xs text-slate-400 font-medium uppercase block">Boshlang'ich</span>
                                <span className="text-xl font-extrabold text-slate-300">
                                    {userPlanData.currentLevel === '0' ? "🌱 0 Level" : userPlanData.currentLevel}
                                </span>
                            </div>
                            <ArrowRight size={20} className="text-rose-400" />
                            <div className="text-center">
                                <span className="text-xs text-amber-400 font-bold uppercase block">Maqsad</span>
                                <span className="text-3xl font-black text-amber-400">{userPlanData.targetLevel}</span>
                            </div>
                        </div>
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

            {/* AI Generated Study Plan (Roadmap) */}
            {userPlanData && (userPlanData as any).generatedPlan?.dailyPlan && (userPlanData as any).generatedPlan.dailyPlan.length > 0 && (
                <div className="mb-8 bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <FileText className="text-rose-500" /> AI Kunlik Dars Rejasi (Yo'l Xaritasi)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(userPlanData as any).generatedPlan.dailyPlan.map((dayPlan: any, idx: number) => (
                            <div key={idx} className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="font-bold text-foreground">
                                        <span className="text-rose-500 mr-1">Kun {dayPlan.day}:</span> {dayPlan.title}
                                    </h4>
                                    <span className="text-[10px] font-bold px-2 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg whitespace-nowrap ml-2">
                                        {dayPlan.focusArea || dayPlan.focusSkill}
                                    </span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted-foreground">
                                    {dayPlan.tasks.map((t: string, i: number) => <li key={i}>{t}</li>)}
                                </ul>
                                <div className="mt-4 pt-3 border-t border-rose-500/20 flex items-center gap-1.5 text-xs text-rose-500 font-semibold">
                                    <Target size={14} /> Vaqt maqsadi: {dayPlan.pomodoroTargetMinutes} min
                                </div>
                            </div>
                        ))}
                    </div>
                    {(userPlanData as any).generatedPlan.recommendedTips && (userPlanData as any).generatedPlan.recommendedTips.length > 0 && (
                        <div className="mt-6 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                            <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-3 flex items-center gap-2">
                                <Award size={18} className="text-amber-500" /> AI Tavsiyalari
                            </h4>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-amber-700 dark:text-amber-400/90">
                                {(userPlanData as any).generatedPlan.recommendedTips.map((tip: string, i: number) => <li key={i}>{tip}</li>)}
                            </ul>
                        </div>
                    )}
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

                {/* JLPT Grammar Quiz */}
                <div
                    onClick={() => navigate('/jlpt/grammar')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Bunpou (文法) Grammar Quiz ⛩️</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5-N1 darajalari bo'yicha grammatika qoliplari va predloglarni interaktiv testlar yordamida tekshirish.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-amber-500">
                        <span>Testni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Reading (Dokkai) */}
                <div
                    onClick={() => navigate('/jlpt/reading')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Dokkai (読解) Reading Master 📖</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5-N1 darajasidagi taymerli yaponcha o'qish matnlari va savollarga javob berish mashqi.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-500">
                        <span>O'qishni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Listening Mock */}
                <div
                    onClick={() => navigate('/jlpt/listening')}
                    className="group bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Volume2 size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">Choukai (聴解) Listening Mock 🎧</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5-N1 Yapon tili tinglab tushunish mock imtihonlari va skript tahlili.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Mashq qilish</span>
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

                {/* JLPT Mock Exam */}
                <div
                    onClick={() => navigate('/jlpt/mock-exam')}
                    className="group bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-purple-500/10 p-6 rounded-3xl border border-rose-500/30 shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Award size={24} />
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">JLPT Full Mock Exam 🏆</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Barcha bo'limlardan iborat to'liq 180 ballik rasmiy JLPT darajasidagi mock imtihoni.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Imtihonni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Kanji Canvas Practice Section */}
            <div className="mt-8">
                <KanjiCanvasPractice />
            </div>

            {/* JLPT Grammar & Kanji Master Library */}
            <div className="mt-8">
                <JlptGrammarKanjiMaster />
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
