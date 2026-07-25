import React, { useState, useEffect } from 'react';
import { Award, Target, FileText, Mic, BookOpen, ArrowRight, GraduationCap, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IeltsOnboardingModal } from '../components/ielts/IeltsOnboardingModal';
import { RealWeaknessTracker } from '../components/ielts/RealWeaknessTracker';
import { DailyTargetHub } from '../components/ielts/DailyTargetHub';
import { DailyReflectionModal } from '../components/ielts/DailyReflectionModal';
import { IeltsStudyPlanResult } from '../utils/ai';

export const IeltsHubPage: React.FC = () => {
    const navigate = useNavigate();
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [isReflectionOpen, setIsReflectionOpen] = useState(false);
    const [userPlanData, setUserPlanData] = useState<{
        currentBand: number;
        targetBand: number;
        durationDays: number;
        generatedPlan: IeltsStudyPlanResult;
    } | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('study_planner_ielts_user_target');
        if (saved) {
            try {
                setUserPlanData(JSON.parse(saved));
            } catch (e) {}
        }
    }, []);

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-16">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white shadow-lg shadow-amber-500/20">
                        <GraduationCap size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                            IELTS Master Suite 🎓
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Reading, Listening, Writing va Speaking bo'yicha sun'iy intellekt darsxonasi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Target & Roadmap Banner */}
            {userPlanData ? (
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl mb-8 border border-indigo-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Award size={180} />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-8 space-y-3">
                            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/30">
                                <Target size={14} />
                                <span>30-Day IELTS Challenge</span>
                            </div>
                            <h2 className="text-2xl font-black">{userPlanData.generatedPlan.headline}</h2>
                            <p className="text-sm text-slate-300 leading-relaxed">{userPlanData.generatedPlan.summary}</p>
                        </div>

                        <div className="lg:col-span-4 flex items-center justify-around lg:justify-end gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                            <div className="text-center">
                                <span className="text-xs text-slate-400 font-medium uppercase block">Joriy Ball</span>
                                <span className="text-2xl font-extrabold text-slate-300">
                                    {userPlanData.currentBand === 0 ? "🌱 0 (Noldan)" : userPlanData.currentBand.toFixed(1)}
                                </span>
                            </div>
                            <ArrowRight size={24} className="text-indigo-400" />
                            <div className="text-center">
                                <span className="text-xs text-amber-400 font-bold uppercase block">Maqsad</span>
                                <span className="text-4xl font-black text-amber-400">{userPlanData.targetBand.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 md:p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/40 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            <Flame size={16} />
                            <span>ielts.gg formatidagi AI Study Plan</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Maqsadli IELTS Ballingiz Uchun Shaxsiy Dars Rejangiz Yo'qmi?
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl">
                            4 ta oddiy savolga javob bering, AI sizning zaif nuqtalaringizga moslangan 30 kunlik intensiv dars va vazifalar jadvalini yaratib beradi.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-indigo-500/25 transition-all whitespace-nowrap"
                    >
                        Reja Tuzishni Boshlash 🎯
                    </button>
                </div>
            )}

            {/* Daily Target Hub */}
            <div className="mb-8">
                <DailyTargetHub onOpenReflection={() => setIsReflectionOpen(true)} />
            </div>

            {/* Real Analytics & Weakness Diagnostic Section */}
            <div className="mb-8">
                <RealWeaknessTracker />
            </div>

            {/* Core Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tool 1: AI Speaking Coach & Roast */}
                <div 
                    onClick={() => navigate('/speaking-coach')}
                    className="group bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-purple-500/10 dark:from-amber-950/40 dark:to-purple-950/40 p-6 rounded-3xl border border-amber-500/30 shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mic size={24} />
                        </div>
                        <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-md">
                            1-on-1 Interactive Coach
                        </span>
                        <h3 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-1 group-hover:text-amber-600 transition-colors">
                            IELTS AI Speaking Coach 🗣️
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Band 5.0 - 9.0 maqsadli darajangiz bo'yicha jonli ovozli muloqot, Strict Roast va Examiner suhbatlari.
                        </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                        <span>Coach bilan Gapirish</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Tool 2: Writing Evaluator */}
                <div 
                    onClick={() => navigate('/ielts-writing')}
                    className="group bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                        <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-md">
                            Task 1 & Task 2
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1 group-hover:text-indigo-600 transition-colors">
                            IELTS Writing Evaluator
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Inshoingizni rasmiy 4 mezon bo'yicha baholatib, Band 8.0/9.0 qayta yozilgan ideal variantini oling.
                        </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        <span>Sinab Ko'rish</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Tool 2: Speaking Full Mock Test */}
                <div 
                    onClick={() => navigate('/ielts/speaking-mock')}
                    className="group bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mic size={24} />
                        </div>
                        <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-md">
                            Official 3-Part Mock Test
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1 group-hover:text-rose-600 transition-colors">
                            IELTS Speaking Full Mock
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Part 1, Part 2 (Cue Card + 60s prep) va Part 3 bo'yicha to'liq imtihon va rasmiy Examiner report oling.
                        </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                        <span>Testni Boshlash</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Tool 3: Reading & Listening Simulator */}
                <div 
                    onClick={() => navigate('/ielts/reading-listening')}
                    className="group bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-md">
                            Reading & Listening
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1 group-hover:text-purple-600 transition-colors">
                            IELTS Reading & Listening Mock
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Rasmiy matnlar, audiolarni eshitish, taymer bilan javob berish hamda avtomatik Band Score bahosi.
                        </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400">
                        <span>Simulatomi Ochish</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Tool 3: Vocabulary & Collocations Builder */}
                <div 
                    onClick={() => navigate('/flashcards')}
                    className="group bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md">
                            Spaced Repetition
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1 group-hover:text-amber-600 transition-colors">
                            Band 7.0+ Vocabulary Builder
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Academic Collocations, sinonimlar va mavzuli so'zlarni aqlli fleshkartalarda o'rganing.
                        </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                        <span>So'zlarni Ko'rish</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Onboarding Modal */}
            <IeltsOnboardingModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                onPlanCreated={() => {
                    const saved = localStorage.getItem('study_planner_ielts_user_target');
                    if (saved) setUserPlanData(JSON.parse(saved));
                }}
            />

            {/* Daily Active Recall Reflection Modal */}
            <DailyReflectionModal
                isOpen={isReflectionOpen}
                onClose={() => setIsReflectionOpen(false)}
            />
        </div>
    );
};

export default IeltsHubPage;
