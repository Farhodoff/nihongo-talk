import React, { useState } from 'react';
import { FileText, Sparkles, AlertCircle, Award, BookOpen, RefreshCw, Copy, Check, ArrowRight, Crown } from 'lucide-react';
import { evaluateIeltsEssay, IeltsEssayEvaluationReport, isAIKeyConfigured } from '../utils/ai';
import { useSubscription } from '../hooks/useSubscription';

const SAMPLE_PROMPTS = {
    task1: [
        "The chart below shows the percentage of households in different income groups owning various types of consumer goods in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        "The diagram shows the process of recycling plastic bottles into new products. Describe the main stages of the process."
    ],
    task2: [
        "Some people believe that university education should be free for everyone, while others argue that students should pay for their higher education. Discuss both views and give your opinion.",
        "In many countries, traditional skills and ways of life are dying out. Is this a positive or negative development?"
    ]
};

const IeltsWritingPage: React.FC = () => {
    const { subscription } = useSubscription();
    const isPaidUser = subscription?.tier === 'pro' || subscription?.tier === 'premium' || isAIKeyConfigured();

    const [taskType, setTaskType] = useState<'task1' | 'task2'>('task2');
    const [promptQuestion, setPromptQuestion] = useState(SAMPLE_PROMPTS.task2[0]);
    const [essayText, setEssayText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [report, setReport] = useState<IeltsEssayEvaluationReport | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'scores' | 'errors' | 'model'>('scores');
    const [copied, setCopied] = useState(false);

    const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;
    const minWords = taskType === 'task1' ? 150 : 250;
    const isWordCountSufficient = wordCount >= minWords;

    const handleAnalyze = async () => {
        if (!essayText.trim()) {
            setErrorMsg("Iltimos, insho matnini kiriting!");
            return;
        }
        setErrorMsg(null);
        setIsAnalyzing(true);
        try {
            const res = await evaluateIeltsEssay(taskType, promptQuestion, essayText);
            setReport(res);
        } catch (err: any) {
            setErrorMsg(err?.message || "Xatolik yuz berdi");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleCopyModelAnswer = () => {
        if (!report?.modelAnswerBand8) return;
        navigator.clipboard.writeText(report.modelAnswerBand8);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-md shadow-indigo-500/20">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                                IELTS Writing Evaluator ✍️
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Task 1 va Task 2 insholaringizni AI orqali rasmiy mezonlar bo'yicha baholatib, Band 8.0 namunasini oling.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Task Type Switcher */}
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => {
                            setTaskType('task1');
                            setPromptQuestion(SAMPLE_PROMPTS.task1[0]);
                        }}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                            taskType === 'task1'
                                ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                        }`}
                    >
                        Task 1 (Report / Graph)
                    </button>
                    <button
                        onClick={() => {
                            setTaskType('task2');
                            setPromptQuestion(SAMPLE_PROMPTS.task2[0]);
                        }}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                            taskType === 'task2'
                                ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                        }`}
                    >
                        Task 2 (Essay)
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Input Form */}
                <div className="lg:col-span-6 space-y-6">
                    {/* Prompt Selection */}
                    <div className="bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Mavzu / Savol (Essay Prompt)
                        </label>
                        <textarea
                            value={promptQuestion}
                            onChange={(e) => setPromptQuestion(e.target.value)}
                            rows={3}
                            placeholder="Mavzuni kiritishingiz yoki quyidagi tayyor savollardan tanlashingiz mumkin..."
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
                        />
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-xs font-semibold text-gray-400">Namunalar:</span>
                            {SAMPLE_PROMPTS[taskType].map((sample, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setPromptQuestion(sample)}
                                    className="text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-medium hover:bg-indigo-100 transition-all text-left truncate max-w-xs"
                                >
                                    Mavzu {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Essay Text Area */}
                    <div className="bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                Sizning Inshongiz (Your Essay)
                            </label>
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                isWordCountSufficient
                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                            }`}>
                                {wordCount} so'z {isWordCountSufficient ? '✓' : `(min ${minWords})`}
                            </span>
                        </div>

                        <textarea
                            value={essayText}
                            onChange={(e) => setEssayText(e.target.value)}
                            rows={12}
                            placeholder="Inshoingizni shu yerga yozing yoki nusxalab tashlang..."
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all leading-relaxed"
                        />

                        {errorMsg && (
                            <div className="mt-3 p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs rounded-xl flex items-center gap-2">
                                <AlertCircle size={16} />
                                {errorMsg}
                            </div>
                        )}

                        <button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing}
                            className="w-full mt-4 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
                        >
                            {isAnalyzing ? (
                                <>
                                    <RefreshCw className="animate-spin" size={20} />
                                    <span>AI Inshoni Tekshirmoqda...</span>
                                </>
                            ) : (
                                <>
                                    <Sparkles size={20} />
                                    <span>Inshoni AI Bilan Baholash</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Column: AI Feedback Report */}
                <div className="lg:col-span-6">
                    {!report && !isAnalyzing && (
                        <div className="h-full bg-white dark:bg-[#1f2937] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center text-center min-h-[400px]">
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl mb-4">
                                <Award size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Natijani Ko'rish Uchun Inshoni Yuboring
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                                Chap tomondagi maydonga inshoyingizni kiriting va "AI Bilan Baholash" tugmasini bosing. AI sizga rasmiy 4 mezon bo'yicha ball va takomillashtirilgan namuna beradi.
                            </p>
                        </div>
                    )}

                    {isAnalyzing && (
                        <div className="h-full bg-white dark:bg-[#1f2937] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center text-center min-h-[400px]">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
                                <Sparkles className="absolute inset-0 m-auto text-indigo-600 animate-pulse" size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                AI Examiner Inshoni Tahlil Qilmoqda...
                            </h3>
                            <p className="text-xs text-gray-400 max-w-xs">
                                Grammatika, Lug'at boyligi (Lexical Resource) hamda Coherence mezonlari baholanmoqda.
                            </p>
                        </div>
                    )}

                    {report && !isAnalyzing && (
                        <div className="space-y-6">
                            {/* Overall Band Banner */}
                            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-6 rounded-3xl text-white shadow-xl flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                                        Overall IELTS Band Score
                                    </span>
                                    <div className="text-5xl font-black mt-1 flex items-baseline gap-2">
                                        {report.overallBand.toFixed(1)}
                                        <span className="text-base font-normal text-indigo-200">/ 9.0</span>
                                    </div>
                                    <p className="text-xs text-indigo-200 mt-2">
                                        Total words: {report.wordCount} {report.wordCount < minWords && '(Vaqt/Soni kam)'}
                                    </p>
                                </div>
                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center min-w-[100px]">
                                    <Award size={32} className="mx-auto text-amber-300 mb-1" />
                                    <span className="text-xs font-semibold block">Official Rating</span>
                                </div>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={() => setActiveTab('scores')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                        activeTab === 'scores'
                                            ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400'
                                    }`}
                                >
                                    📊 Mezonlar Balli
                                </button>
                                <button
                                    onClick={() => setActiveTab('errors')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                        activeTab === 'errors'
                                            ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400'
                                    }`}
                                >
                                    🔍 Xatolar & Lug'at ({report.grammarErrors.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab('model')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                        activeTab === 'model'
                                            ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400'
                                    }`}
                                >
                                    ✨ Band 8.0 Namuna
                                </button>
                            </div>

                            {/* Tab 1: Scores & Criteria Breakdown */}
                            {activeTab === 'scores' && (
                                <div className="space-y-4">
                                    {/* Criteria 1 */}
                                    <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                                1. Task {taskType === 'task1' ? 'Achievement' : 'Response'} (TR)
                                            </span>
                                            <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">
                                                {report.taskResponseScore.toFixed(1)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {report.taskResponseFeedback}
                                        </p>
                                    </div>

                                    {/* Criteria 2 */}
                                    <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                                2. Coherence & Cohesion (CC)
                                            </span>
                                            <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">
                                                {report.coherenceScore.toFixed(1)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {report.coherenceFeedback}
                                        </p>
                                    </div>

                                    {/* Criteria 3 */}
                                    <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                                3. Lexical Resource (LR)
                                            </span>
                                            <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">
                                                {report.lexicalResourceScore.toFixed(1)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {report.lexicalResourceFeedback}
                                        </p>
                                    </div>

                                    {/* Criteria 4 */}
                                    <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                                4. Grammatical Range & Accuracy (GRA)
                                            </span>
                                            <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">
                                                {report.grammarScore.toFixed(1)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {report.grammarFeedback}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Tab 2: Error Corrections */}
                            {activeTab === 'errors' && (
                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                        <AlertCircle size={16} className="text-rose-500" />
                                        Grammatik va Lug'at Xatolari
                                    </h4>

                                    {report.grammarErrors.length === 0 ? (
                                        <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 text-emerald-700 dark:text-emerald-400 text-xs text-center">
                                            Ajoyib! Jiddiy grammatik xatolar topilmadi.
                                        </div>
                                    ) : (
                                        report.grammarErrors.map((err, idx) => (
                                            <div key={idx} className="bg-white dark:bg-[#1f2937] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <span className="bg-rose-100 dark:bg-rose-950/50 text-rose-600 px-2 py-0.5 rounded font-mono line-through">
                                                        {err.original}
                                                    </span>
                                                    <ArrowRight size={14} className="text-gray-400" />
                                                    <span className="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                                                        {err.corrected}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    💡 {err.explanation}
                                                </p>
                                            </div>
                                        ))
                                    )}

                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 pt-4 flex items-center gap-2">
                                        <BookOpen size={16} className="text-indigo-500" />
                                        Band 8.0+ Lug'at Takliflari
                                    </h4>

                                    {report.advancedVocabularySuggestions.map((vocab, idx) => (
                                        <div key={idx} className="bg-indigo-50/50 dark:bg-indigo-950/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 space-y-1">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-gray-500 line-through">{vocab.original}</span>
                                                <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-2 py-0.5 rounded">
                                                    {vocab.band8Alternative}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {vocab.context}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Tab 3: Model Answer */}
                            {activeTab === 'model' && (
                                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                            <Sparkles size={16} className="text-amber-500" />
                                            Band 8.0/9.0 Model Answer
                                            {!isPaidUser && (
                                                <span className="bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                                                    <Crown size={12} /> PRO Exclusive
                                                </span>
                                            )}
                                        </h4>
                                        {isPaidUser && (
                                            <button
                                                onClick={handleCopyModelAnswer}
                                                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-xl hover:bg-indigo-100 transition-all"
                                            >
                                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                                <span>{copied ? "Nusxalandi!" : "Nusxalash"}</span>
                                            </button>
                                        )}
                                    </div>

                                    {isPaidUser ? (
                                        <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-wrap border border-gray-100 dark:border-gray-800">
                                            {report.modelAnswerBand8}
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <div className="p-6 bg-gray-50 dark:bg-gray-900/60 rounded-2xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-wrap border border-gray-100 dark:border-gray-800 blur-sm select-none">
                                                {report.modelAnswerBand8.substring(0, 150)}...
                                                {"\n\n"}This high-band model answer demonstrates advanced lexical resource, cohesive devices, complex grammatical structures, and expert paragraph planning tailored specifically for your target IELTS Band score...
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent dark:from-slate-900/95 dark:via-slate-900/80 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3">
                                                <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/30">
                                                    <Crown size={24} />
                                                </div>
                                                <h5 className="text-base font-bold text-gray-900 dark:text-white">Band 8.0 Model Answer Bekindi</h5>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm">
                                                    AI yaratgan ekspert namuna inshoni to'liq o'qish va nusxalash uchun PRO yoki Premium tarifga o'ting.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        const text = encodeURIComponent('Assalom aleykum. Men IELTS Writing Band 8.0 Model Answer uchun PRO obuna olmoqchiman');
                                                        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
                                                    }}
                                                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-orange-500/25 hover:from-amber-600 hover:to-orange-600 transition-all"
                                                >
                                                    PRO Obunaga O'tish ($5 / oy)
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IeltsWritingPage;
