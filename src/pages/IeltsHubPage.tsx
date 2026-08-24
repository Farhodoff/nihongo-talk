import React, { useState, Suspense, lazy } from 'react';
import { Target, BookOpen, GraduationCap, Headphones, PenTool } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { RealWeaknessTracker } from '../components/ielts/RealWeaknessTracker';
import { DailyTargetHub } from '../components/ielts/DailyTargetHub';
import { useSEO } from '../hooks/useSEO';

const PersonalPlanPage = lazy(() => import('./PersonalPlanPage'));
const IeltsGrammarMaster = lazy(() => import('../components/ielts/IeltsGrammarMaster'));
const VocabularyGenerator = lazy(() => import('../components/ielts/VocabularyGenerator').then(m => ({ default: m.VocabularyGenerator })));
const IeltsReadingListeningMockPage = lazy(() => import('./IeltsReadingListeningMockPage').then(m => ({ default: m.IeltsReadingListeningMockPage })));
const IeltsWritingPage = lazy(() => import('./IeltsWritingPage'));
const DailyReflectionModal = lazy(() => import('../components/ielts/DailyReflectionModal').then(m => ({ default: m.DailyReflectionModal })));

export const IeltsHubPage: React.FC = () => {
    useSEO({
        title: "IELTS Master Hub (Shaxsiy Reja, Grammatika, Mocks, Writing)",
        description: "IELTS Band 7.5+ uchun maxsus AI shaxsiy o'quv rejasi. Speaking, Writing Task 1 & 2 baholash, Reading & Listening mock testlari va Band 7.5 Grammatika Akademiyasi.",
        canonical: "/ielts",
        keywords: "IELTS mock exam O'zbekiston, IELTS Speaking AI, IELTS Writing baholash, IELTS Band 7 grammatika, shaxsiy reja"
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'grammar';

    const [isReflectionOpen, setIsReflectionOpen] = useState(false);

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 pb-16">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-indigo-950/80 border border-amber-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 text-amber-400 font-extrabold text-xs rounded-full border border-amber-500/30">
                            <GraduationCap size={14} />
                            <span>IELTS MASTER SUITE & ACADEMY</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            {activeTab === 'plan'
                                ? "IELTS Shaxsiy Rejangiz"
                                : activeTab === 'writing'
                                    ? "IELTS Writing Mock & Examiner"
                                    : activeTab === 'reading_listening'
                                        ? "IELTS Reading & Listening Mock"
                                        : "IELTS Band 7.5 Grammatika Akademiyasi"}
                        </h1>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {activeTab === 'plan'
                                ? "Sizning maqsadli Band ballingiz uchun adaptiv kunlik va haftalik vazifalar taqsimoti."
                                : "Band 7.5+ Grammatika Akademiyasi, Reading/Listening va Writing mock imtihonlari yagona markazda."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Unified IELTS Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-2xl w-fit">
                <button
                    onClick={() => handleTabChange('plan')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'plan'
                            ? 'bg-amber-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Target size={16} /> 🎯 Shaxsiy Rejam & Jadval
                </button>

                <button
                    onClick={() => handleTabChange('grammar')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'grammar'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <BookOpen size={16} /> 📚 Band 7.5 Grammatika
                </button>

                <button
                    onClick={() => handleTabChange('reading_listening')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'reading_listening'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Headphones size={16} /> 🎧 Reading & Listening Mock
                </button>

                <button
                    onClick={() => handleTabChange('writing')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'writing'
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <PenTool size={16} /> ✍️ Writing Mock & Examiner
                </button>
            </div>

            {/* Tab Views */}
            <Suspense fallback={
                <div className="p-12 flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                {/* Tab 1: Personal Learning Plan & Schedule */}
                {activeTab === 'plan' && (
                    <div className="animate-in fade-in">
                        <PersonalPlanPage />
                    </div>
                )}

                {/* Tab 2: Band 7.5 Grammar Academy & Vocab Tools */}
                {activeTab === 'grammar' && (
                    <div className="space-y-8 animate-in fade-in">
                        <IeltsGrammarMaster />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <RealWeaknessTracker />
                            <VocabularyGenerator />
                        </div>
                        <DailyTargetHub onOpenReflection={() => setIsReflectionOpen(true)} />
                    </div>
                )}

                {/* Tab 3: Reading & Listening Mock Exam Simulator */}
                {activeTab === 'reading_listening' && (
                    <div className="animate-in fade-in">
                        <IeltsReadingListeningMockPage />
                    </div>
                )}

                {/* Tab 4: Writing Mock & AI Evaluator */}
                {activeTab === 'writing' && (
                    <div className="animate-in fade-in">
                        <IeltsWritingPage />
                    </div>
                )}
            </Suspense>

            {/* Daily Reflection Modal */}
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
