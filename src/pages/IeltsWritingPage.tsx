import React, { useState, useEffect, useRef } from 'react';
import { FileText, Sparkles, AlertCircle, Award, BookOpen, RefreshCw, Copy, Check, ArrowRight, Crown, History, Clock, Timer } from 'lucide-react';
import { evaluateIeltsEssay, IeltsEssayEvaluationReport, isAIKeyConfigured } from '../utils/ai';
import { HistoryService, WritingHistoryItem } from '../services/HistoryService';
import { SvgLineChart } from '../components/ui/SvgCharts';
import { useSubscription } from '../hooks/useSubscription';
import { Task1GraphGenerator } from '../components/ielts/Task1GraphGenerator';
import { WritingBandRadarChart } from '../components/ielts/WritingBandRadarChart';
import { useStudyData } from '../context/StudyPlannerContext';

const SAMPLE_PROMPTS = {
    task1: [
        "The chart below shows the percentage of households in different income groups owning various types of consumer goods in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        "The diagram shows the process of recycling plastic bottles into new synthetic fiber products. Describe the main stages of the process.",
        "The maps illustrate the changes that took place in the coastal town of Pentland between 1995 and 2015. Summarise the main differences.",
        "The line graph shows the consumption of four types of meat in a European nation from 1980 to 2010. Summarise the data."
    ],
    task2: [
        "Some people believe that university education should be free for everyone, while others argue that students should pay for their higher education. Discuss both views and give your opinion.",
        "In many countries, traditional skills and ways of life are dying out. Is this a positive or negative development?",
        "Rapid urbanization has led to severe traffic congestion and air pollution in major metropolises. What are the primary causes of this phenomenon, and what measures can governments implement to resolve it?",
        "Some experts argue that the increasing use of artificial intelligence in daily life brings more advantages than disadvantages. To what extent do you agree or disagree?"
    ]
};

const IeltsWritingPage: React.FC = () => {
    const { subscription } = useSubscription();
    const { awardXP } = useStudyData();
    const isPaidUser = subscription?.tier === 'pro' || subscription?.tier === 'premium' || isAIKeyConfigured();

    const [taskType, setTaskType] = useState<'task1' | 'task2'>('task2');
    const [promptQuestion, setPromptQuestion] = useState(SAMPLE_PROMPTS.task2[0]);
    const [essayText, setEssayText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [report, setReport] = useState<IeltsEssayEvaluationReport | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'scores' | 'errors' | 'model'>('scores');
    const [copied, setCopied] = useState(false);

    // Timer States
    const TIMER_DURATION = taskType === 'task1' ? 20 * 60 : 40 * 60; // 20 or 40 minutes in seconds
    const [timerSeconds, setTimerSeconds] = useState<number | null>(null); // null = not started
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isTimerExpired, setIsTimerExpired] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // History States
    const [historyList, setHistoryList] = useState<WritingHistoryItem[]>([]);

    const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;
    const minWords = taskType === 'task1' ? 150 : 250;
    const isWordCountSufficient = wordCount >= minWords;

    const fetchHistory = async () => {
        try {
            const data = await HistoryService.getWritingHistory();
            setHistoryList(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    // Timer countdown logic
    useEffect(() => {
        if (!isTimerRunning || timerSeconds === null) return;
        if (timerSeconds <= 0) {
            setIsTimerRunning(false);
            setIsTimerExpired(true);
            // Auto-submit when timer runs out
            if (essayText.trim()) {
                handleAnalyze();
            }
            return;
        }
        timerRef.current = setInterval(() => {
            setTimerSeconds(prev => (prev !== null ? prev - 1 : null));
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isTimerRunning, timerSeconds]);

    const startTimer = () => {
        setTimerSeconds(TIMER_DURATION);
        setIsTimerRunning(true);
        setIsTimerExpired(false);
    };

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimerSeconds(null);
        setIsTimerRunning(false);
        setIsTimerExpired(false);
    };

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const timerProgress = timerSeconds !== null ? (timerSeconds / TIMER_DURATION) * 100 : 100;

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

            // Save Attempt to History
            await HistoryService.saveWritingAttempt({
                taskType: taskType,
                prompt: promptQuestion,
                essay: essayText,
                score: res.overallBand,
                criteriaBreakdown: {
                    tr: res.taskResponseScore,
                    cc: res.coherenceScore,
                    lr: res.lexicalResourceScore,
                    gra: res.grammarScore
                },
                feedback: res.taskResponseFeedback
            });

            // Award XP
            try {
                if (awardXP) {
                    await awardXP(50);
                }
            } catch (e) {}

            // Refresh history
            fetchHistory();
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

    // Chart Data mapping
    const chartData = [...historyList]
        .reverse()
        .map(item => ({
            date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
            score: item.score
        }));

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-16 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-md shadow-indigo-500/20">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                            IELTS Writing Evaluator ✍️
                        </h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Task 1 va Task 2 insholaringizni AI orqali rasmiy mezonlar bo'yicha baholatib, Band 8.0 namunasini oling.
                        </p>
                    </div>
                </div>

                {/* Task Type Switcher */}
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => {
                            setTaskType('task1');
                            setPromptQuestion(SAMPLE_PROMPTS.task1[0]);
                        }}
                        className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
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
                        className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                            taskType === 'task2'
                                ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                        }`}
                    >
                        Task 2 (Essay)
                    </button>
                </div>
            </div>

            {/* ⏱ Exam Timer Bar */}
            <div className={`rounded-2xl border p-4 flex items-center gap-4 transition-all ${
                isTimerExpired
                    ? 'bg-red-500/10 border-red-500/30'
                    : isTimerRunning
                        ? 'bg-amber-500/5 border-amber-500/20'
                        : 'bg-muted/30 border-border'
            }`}>
                <div className="flex items-center gap-2 shrink-0">
                    <Timer size={18} className={isTimerExpired ? 'text-red-500' : isTimerRunning ? 'text-amber-500' : 'text-muted-foreground'} />
                    <span className={`text-sm font-extrabold tabular-nums ${
                        isTimerExpired ? 'text-red-600 dark:text-red-400'
                        : isTimerRunning && timerSeconds !== null && timerSeconds < 120 ? 'text-red-500 animate-pulse'
                        : 'text-foreground'
                    }`}>
                        {isTimerExpired ? 'VAQT TUGADI!' : timerSeconds !== null ? formatTime(timerSeconds) : `${taskType === 'task1' ? '20:00' : '40:00'}`}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                        ({taskType === 'task1' ? '20 daqiqa' : '40 daqiqa'} limit)
                    </span>
                </div>
                {/* Progress bar */}
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                            isTimerExpired ? 'bg-red-500' : timerProgress < 25 ? 'bg-red-400' : timerProgress < 50 ? 'bg-amber-400' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${timerProgress}%` }}
                    />
                </div>
                <div className="flex gap-2 shrink-0">
                    {!isTimerRunning && !isTimerExpired && (
                        <button
                            onClick={startTimer}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                        >
                            <Clock size={12} /> Boshlash
                        </button>
                    )}
                    {(isTimerRunning || isTimerExpired) && (
                        <button
                            onClick={resetTimer}
                            className="px-3 py-1.5 bg-muted hover:bg-muted/80 text-foreground text-xs font-bold rounded-xl transition-all border border-border"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>

            {/* Analytics & Progression Chart */}
            {chartData.length > 0 && (
                <div className="bg-card border border-border p-5 rounded-3xl space-y-4 shadow-sm">
                    <h3 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <History size={16} className="text-indigo-500" />
                        Writing Progression Dinamikasi (Band Score Tarixi)
                    </h3>
                    <div className="h-44 w-full">
                        <SvgLineChart
                            data={chartData}
                            xKey="date"
                            series={[{ dataKey: 'score', stroke: '#6366f1', fill: '#6366f1' }]}
                            height={160}
                            showArea={true}
                            unit="band"
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Input Form */}
                <div className="lg:col-span-6 space-y-6">
                    {/* Task 1 Graph Generator */}
                    {taskType === 'task1' && (
                        <Task1GraphGenerator
                            onPromptGenerated={(generatedPrompt) => setPromptQuestion(generatedPrompt)}
                        />
                    )}
                    {/* Prompt Selection */}
                    <div className="bg-card border border-border p-6 rounded-3xl shadow-sm">
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Mavzu / Savol (Essay Prompt)
                        </label>
                        <textarea
                            value={promptQuestion}
                            onChange={(e) => setPromptQuestion(e.target.value)}
                            rows={3}
                            placeholder="Mavzuni kiritishingiz yoki quyidagi tayyor savollardan tanlashingiz mumkin..."
                            className="w-full px-4 py-3 bg-muted/40 border border-border rounded-2xl text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
                        />
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-[10px] font-semibold text-gray-400">Namunalar:</span>
                            {SAMPLE_PROMPTS[taskType].map((sample, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setPromptQuestion(sample)}
                                    className="text-[10px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-medium hover:bg-indigo-100 transition-all text-left truncate max-w-xs"
                                >
                                    Mavzu {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Essay Text Area */}
                    <div className="bg-card border border-border p-6 rounded-3xl shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                                Sizning Inshongiz (Your Essay)
                            </label>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                                isWordCountSufficient
                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                             }`}>
                                {wordCount} so'z {isWordCountSufficient ? '✓' : `(min ${minWords})`}
                            </span>
                        </div>
                        <textarea
                            value={essayText}
                            onChange={(e) => !isTimerExpired && setEssayText(e.target.value)}
                            rows={10}
                            disabled={isTimerExpired}
                            placeholder={isTimerExpired ? '⛔ Vaqt tugadi — insho yuborildi.' : 'Inshoni bu yerga yozing...'}
                            className={`w-full px-4 py-3 bg-muted/40 border border-border rounded-2xl text-xs text-gray-900 dark:text-white font-serif leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-y ${
                                isTimerExpired ? 'opacity-60 cursor-not-allowed' : ''
                            }`}
                        />
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={handleAnalyze}
                                disabled={isAnalyzing || !essayText.trim()}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5"
                            >
                                {isAnalyzing ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                                <span>{isAnalyzing ? "Tahlil qilinmoqda..." : "AI Baholash 🚀"}</span>
                            </button>
                        </div>
                        {errorMsg && (
                            <p className="text-xs text-rose-500 mt-2 flex items-center gap-1">
                                <AlertCircle size={14} /> {errorMsg}
                            </p>
                        )}
                    </div>

                    {/* Previous Attempts History List */}
                    {historyList.length > 0 && (
                        <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                            <h3 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                                <History size={16} /> O'tgan urinishlar tarixi
                            </h3>
                            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                                {historyList.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            // Mock evaluation report display from historical data
                                            setReport({
                                                overallBand: item.score,
                                                taskResponseScore: item.criteriaBreakdown.tr,
                                                coherenceScore: item.criteriaBreakdown.cc,
                                                lexicalResourceScore: item.criteriaBreakdown.lr,
                                                grammarScore: item.criteriaBreakdown.gra,
                                                taskResponseFeedback: item.feedback,
                                                coherenceFeedback: 'Historical cohesion overview.',
                                                lexicalResourceFeedback: 'Historical vocabulary overview.',
                                                grammarFeedback: 'Historical grammar overview.',
                                                wordCount: item.essay.split(' ').length,
                                                strengths: [],
                                                weaknesses: [],
                                                grammarErrors: [],
                                                advancedVocabularySuggestions: [],
                                                modelAnswerBand8: 'Obuna yoki eski model hisoboti namunasini yuklang.',
                                                improvementTips: []
                                            });
                                            setEssayText(item.essay);
                                            setPromptQuestion(item.prompt);
                                            setTaskType(item.taskType);
                                        }}
                                        className="w-full p-3 bg-muted/40 hover:bg-muted border border-border rounded-xl transition-all flex items-center justify-between text-left text-xs"
                                    >
                                        <div>
                                            <span className="font-bold text-foreground capitalize block">{item.taskType}</span>
                                            <span className="text-[10px] text-muted-foreground block mt-0.5">
                                                {new Date(item.createdAt).toLocaleDateString()} · {item.essay.split(' ').length} so'z
                                            </span>
                                        </div>
                                        <span className="font-black text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded">
                                            Band {item.score.toFixed(1)}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: AI Report Display */}
                <div className="lg:col-span-6">
                    {report === null ? (
                        <div className="bg-muted/30 border border-dashed border-border rounded-3xl h-full min-h-[350px] flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
                            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-3">
                                <Award size={24} />
                            </div>
                            <h4 className="text-xs font-black text-foreground">AI Baholash Reporti Kutilmoqda</h4>
                            <p className="text-[10px] max-w-xs mt-1 leading-relaxed">
                                Inshoingizni yozib, AI Baholash tugmasini bosing va to'liq tahlilni shu yerda oling.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Live Radar Chart & Paragraph Breakdown */}
                            <WritingBandRadarChart report={report} essayText={essayText} />

                            {/* Score Overview Card */}
                            <div className="bg-card border border-border p-6 rounded-3xl shadow-sm text-center space-y-4">
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase text-indigo-500 tracking-wider block">
                                        Estimated IELTS Writing Band
                                    </span>
                                    <h2 className="text-4xl font-black text-foreground mt-1">
                                        Band {report.overallBand.toFixed(1)}
                                    </h2>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {report.taskResponseFeedback}
                                    </p>
                                </div>

                                {/* Criteria Scores breakdown grid */}
                                <div className="grid grid-cols-4 gap-2 pt-2 text-center">
                                    <div className="p-2.5 bg-muted/40 border border-border rounded-xl">
                                        <span className="text-[9px] text-muted-foreground font-bold block uppercase truncate">TA / TR</span>
                                        <span className="text-sm font-black text-foreground">{report.taskResponseScore.toFixed(1)}</span>
                                    </div>
                                    <div className="p-2.5 bg-muted/40 border border-border rounded-xl">
                                        <span className="text-[9px] text-muted-foreground font-bold block uppercase truncate">C & C</span>
                                        <span className="text-sm font-black text-foreground">{report.coherenceScore.toFixed(1)}</span>
                                    </div>
                                    <div className="p-2.5 bg-muted/40 border border-border rounded-xl">
                                        <span className="text-[9px] text-muted-foreground font-bold block uppercase truncate">LR</span>
                                        <span className="text-sm font-black text-foreground">{report.lexicalResourceScore.toFixed(1)}</span>
                                    </div>
                                    <div className="p-2.5 bg-muted/40 border border-border rounded-xl">
                                        <span className="text-[9px] text-muted-foreground font-bold block uppercase truncate">GRA</span>
                                        <span className="text-sm font-black text-foreground">{report.grammarScore.toFixed(1)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tab Selection */}
                            <div className="flex border-b border-border text-xs">
                                <button
                                    onClick={() => setActiveTab('scores')}
                                    className={`flex-1 py-3 font-bold border-b-2 transition-all ${
                                        activeTab === 'scores' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-muted-foreground'
                                    }`}
                                >
                                    Mezonlar Tahlili
                                </button>
                                <button
                                    onClick={() => setActiveTab('errors')}
                                    className={`flex-1 py-3 font-bold border-b-2 transition-all ${
                                        activeTab === 'errors' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-muted-foreground'
                                    }`}
                                >
                                    Xato & Takliflar ({report.grammarErrors.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab('model')}
                                    className={`flex-1 py-3 font-bold border-b-2 transition-all ${
                                        activeTab === 'model' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-muted-foreground'
                                    }`}
                                >
                                    Model Answer
                                </button>
                            </div>

                            {/* Tab 1: Criteria Details */}
                            {activeTab === 'scores' && (
                                <div className="space-y-4">
                                    <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-xs text-foreground">1. Task Achievement / Response</span>
                                            <span className="font-extrabold text-indigo-500 text-xs">{report.taskResponseScore.toFixed(1)}</span>
                                        </div>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{report.taskResponseFeedback}</p>
                                    </div>

                                    <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-xs text-foreground">2. Coherence & Cohesion</span>
                                            <span className="font-extrabold text-indigo-500 text-xs">{report.coherenceScore.toFixed(1)}</span>
                                        </div>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{report.coherenceFeedback}</p>
                                    </div>

                                    <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-xs text-foreground">3. Lexical Resource</span>
                                            <span className="font-extrabold text-indigo-500 text-xs">{report.lexicalResourceScore.toFixed(1)}</span>
                                        </div>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{report.lexicalResourceFeedback}</p>
                                    </div>

                                    <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-xs text-foreground">4. Grammatical Range & Accuracy</span>
                                            <span className="font-extrabold text-indigo-500 text-xs">{report.grammarScore.toFixed(1)}</span>
                                        </div>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{report.grammarFeedback}</p>
                                    </div>
                                </div>
                            )}

                            {/* Tab 2: Errors & Corrections */}
                            {activeTab === 'errors' && (
                                <div className="space-y-4">
                                    <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                                        <AlertCircle size={16} className="text-rose-500" /> Grammatik va Lug'at Xatolari
                                    </h4>
                                    {report.grammarErrors.length === 0 ? (
                                        <p className="text-xs text-emerald-500 bg-emerald-500/10 p-4 border border-emerald-500/20 rounded-2xl text-center">
                                            Ajoyib! Jiddiy grammatik xatolar topilmadi.
                                        </p>
                                    ) : (
                                        report.grammarErrors.map((err, idx) => (
                                            <div key={idx} className="bg-card border border-border p-4 rounded-xl space-y-2 shadow-xs">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <span className="bg-rose-500/15 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded font-mono line-through">
                                                        {err.original}
                                                    </span>
                                                    <ArrowRight size={14} className="text-muted-foreground" />
                                                    <span className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                                                        {err.corrected}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-muted-foreground">💡 {err.explanation}</p>
                                            </div>
                                        ))
                                    )}

                                    {report.advancedVocabularySuggestions.length > 0 && (
                                        <>
                                            <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider pt-4 flex items-center gap-1.5">
                                                <BookOpen size={16} className="text-indigo-500" /> Band 8.0+ Lug'at Takliflari
                                            </h4>
                                            {report.advancedVocabularySuggestions.map((vocab, idx) => (
                                                <div key={idx} className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl space-y-1">
                                                    <div className="flex items-center justify-between text-xs">
                                                        <span className="text-muted-foreground line-through">{vocab.original}</span>
                                                        <span className="font-bold text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">
                                                            {vocab.band8Alternative}
                                                        </span>
                                                    </div>
                                                    <p className="text-[11px] text-muted-foreground leading-relaxed">{vocab.context}</p>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Tab 3: Model Answer */}
                            {activeTab === 'model' && (
                                <div className="bg-card border border-border p-6 rounded-3xl space-y-4 shadow-sm relative overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                                            <Sparkles size={16} className="text-amber-500" /> Band 8.0/9.0 Model Answer
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
                                        <div className="p-4 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground leading-relaxed font-serif whitespace-pre-wrap">
                                            {report.modelAnswerBand8}
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <div className="p-4 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground leading-relaxed font-serif whitespace-pre-wrap blur-xs select-none">
                                                {report.modelAnswerBand8?.substring(0, 150)}...
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3">
                                                <Crown className="text-amber-500" size={24} />
                                                <h5 className="text-xs font-bold text-foreground">Model Answer Locked</h5>
                                                <p className="text-[10px] text-muted-foreground max-w-xs">
                                                    AI tomonidan yozilgan model inshoni o'qish uchun PRO obunaga o'ting.
                                                </p>
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
