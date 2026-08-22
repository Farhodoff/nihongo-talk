import React, { useState, Suspense, lazy } from 'react';
import { Target, Mic, BookOpen, ArrowRight, GraduationCap, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RealWeaknessTracker } from '../components/ielts/RealWeaknessTracker';
import { DailyTargetHub } from '../components/ielts/DailyTargetHub';
import { useSEO } from '../hooks/useSEO';

const DailyReflectionModal = lazy(() => import('../components/ielts/DailyReflectionModal').then(m => ({ default: m.DailyReflectionModal })));
const IeltsGrammarMaster = lazy(() => import('../components/ielts/IeltsGrammarMaster'));
const VocabularyGenerator = lazy(() => import('../components/ielts/VocabularyGenerator').then(m => ({ default: m.VocabularyGenerator })));

export const IeltsHubPage: React.FC = () => {
    useSEO({
        title: "IELTS Tayyorgarlik Markazi (Mock Exams, AI Speaking, Writing)",
        description: "IELTS Band 7.5+ uchun maxsus AI o'quv rejasi. Speaking Simulyatori, Writing Task 1 & 2 baholovchisi va Reading/Listening mock testlari.",
        canonical: "/ielts",
        keywords: "IELTS mock exam O'zbekiston, IELTS Speaking AI, IELTS Writing baholash, IELTS Band 7 tayyorgarlik"
    });

    const navigate = useNavigate();
    const [isReflectionOpen, setIsReflectionOpen] = useState(false);

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
                            IELTS Master Suite
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Reading, Listening, Writing va Speaking bo'yicha sun'iy intellekt darsxonasi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Direct Link to Central Personal Learning Plan */}
            <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 p-5 md:p-6 rounded-3xl border border-indigo-500/20 shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-300 border border-indigo-500/30 shrink-0">
                        <Target size={24} />
                    </div>
                    <div>
                        <h2 className="text-base md:text-lg font-black text-white flex items-center gap-2">
                            <span>IELTS Shaxsiy Rejangiz & Darslar</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                AI Adaptive
                            </span>
                        </h2>
                        <p className="text-xs text-slate-300 mt-0.5">
                            Kunlik va haftalik vazifalar, Speaking, Lug'at va Mock imtihonlar taqsimotini boshqarish
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/personal-plan')}
                    className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95"
                >
                    <span>Shaxsiy Rejamga O'tish</span>
                    <ArrowRight size={14} />
                </button>
            </div>


            {/* Daily Target Hub */}
            <div className="mb-8">
                <DailyTargetHub onOpenReflection={() => setIsReflectionOpen(true)} />
            </div>

            {/* Real Analytics & Weakness Diagnostic Section */}
            <div className="mb-8">
                <RealWeaknessTracker />
            </div>

            {/* AI Vocabulary Generator & Grammar Master Section */}
            <Suspense fallback={<div className="p-8 flex justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
                <div className="mb-8">
                    <VocabularyGenerator />
                </div>

                <div className="mb-8">
                    <IeltsGrammarMaster />
                </div>
            </Suspense>

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
                    onClick={() => navigate('/ielts/writing')}
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

            {/* Lazy Modals */}
            <Suspense fallback={null}>
                {isReflectionOpen && (
                    <DailyReflectionModal
                        isOpen={isReflectionOpen}
                        onClose={() => setIsReflectionOpen(false)}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default IeltsHubPage;
