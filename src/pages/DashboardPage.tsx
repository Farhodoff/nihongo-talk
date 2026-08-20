import { CheckCircle, Loader2, ListTodo, Trophy, ArrowRight, Clock } from 'lucide-react';
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownWidget from '../components/CountdownWidget';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { calculateMasteryScore } from '../utils/analytics';
import { generateStudyInsight, isAIKeyConfigured } from '../utils/ai';
import { Sparkles } from 'lucide-react';
import { LearningOrchestrator } from '../services/LearningOrchestrator';
import { NextActionService } from '../services/NextActionService';
import { NextLearningAction } from '../types/nextAction';

const DashboardPage: React.FC = () => {
    const { tasks, loading, updateTaskStatus, subjects, sessions, flashcards, settings, primaryLanguage, targetLevel, targetGoal, user } = useStudyData();
    const { language, t } = useLanguage();
    const [aiInsights, setAiInsights] = useState<{ subject: string; advice: string }[]>([]);
    const [isAiInsightsLoading, setIsAiInsightsLoading] = useState(false);
    const [nextAction, setNextAction] = useState<NextLearningAction | null>(null);

    // Sanalarni ajratib olish
    const todayStr = new Date().toISOString().split('T')[0];
    
    const todayTasks = tasks.filter(t => {
        const taskDate = (t.dueDate || t.deadline || '').split('T')[0];
        return taskDate === todayStr;
    }).sort((a, b) => {
        const timeA = new Date(a.dueDate || a.deadline || 0).getTime();
        const timeB = new Date(b.dueDate || b.deadline || 0).getTime();
        return timeA - timeB;
    });

    const overdueTasks = tasks.filter(t => {
        const taskDate = (t.dueDate || t.deadline || '').split('T')[0];
        return taskDate < todayStr && t.status !== 'done';
    }).sort((a, b) => {
        const timeA = new Date(a.dueDate || a.deadline || 0).getTime();
        const timeB = new Date(b.dueDate || b.deadline || 0).getTime();
        return timeA - timeB;
    });

    const todayPendingTasks = todayTasks.filter(t => t.status !== 'done');
    const todayCompletedCount = todayTasks.filter(t => t.status === 'done').length;
    
    const progressPercentage = todayTasks.length > 0 
        ? Math.round((todayCompletedCount / todayTasks.length) * 100) 
        : 0;

    const greeting = useMemo(() => {
        const hour = new Date().getHours();
        if (language === 'en') {
            if (hour < 12) return "Good morning";
            if (hour < 18) return "Good afternoon";
            return "Good evening";
        }
        if (hour < 12) return "Xayrli tong";
        if (hour < 18) return "Xayrli kun";
        return "Xayrli kech";
    }, [language]);

    const subjectsStats = useMemo(() => {
        return subjects.map(subject => {
            const subjectSessions = sessions.filter(s => s.subjectId === subject.id && s.completed);
            const totalMinutes = subjectSessions.reduce((acc, curr) => acc + (curr.duration || 0), 0);
            const hours = Number((totalMinutes / 60).toFixed(1));

            const sessionsWithMood = subjectSessions.filter(s => s.moodAfter !== undefined || s.moodBefore !== undefined);
            const totalMood = sessionsWithMood.reduce((acc, curr) => acc + (curr.moodAfter || curr.moodBefore || 3), 0);
            const avgMood = sessionsWithMood.length > 0 ? Number((totalMood / sessionsWithMood.length).toFixed(1)) : 3;

            const subjectTasks = tasks.filter(t => t.subjectId === subject.id && t.status !== 'done');
            const pendingTasks = subjectTasks.length;

            const subjectCards = flashcards.filter(c => c.subjectId === subject.id);
            const masteryScore = calculateMasteryScore(subjectCards);

            return {
                name: subject.name,
                subject: subject.name,
                hours,
                mood: avgMood,
                pendingTasks,
                masteryScore,
                mastery: masteryScore,
                progress: 50,
            };
        });
    }, [subjects, sessions, tasks, flashcards]);

    useEffect(() => {
        let isMounted = true;
        if (subjectsStats.length > 0 && aiInsights.length === 0 && !isAiInsightsLoading && isAIKeyConfigured()) {
            setIsAiInsightsLoading(true);
            generateStudyInsight(subjectsStats, settings.googleApiKey)
                .then(insights => {
                    if (isMounted && insights && insights.length > 0) {
                        setAiInsights(insights);
                    }
                })
                .catch(() => {})
                .finally(() => {
                    if (isMounted) setIsAiInsightsLoading(false);
                });
        }
        return () => { isMounted = false; };
    }, [subjectsStats.length, settings.googleApiKey]);

    // Load Next Best Action dynamically
    useEffect(() => {
        let isMounted = true;
        LearningOrchestrator.getUserLearningState(user?.id, { forceLanguage: primaryLanguage, cachedFlashcards: flashcards })
            .then(state => {
                if (isMounted) {
                    const action = NextActionService.getNextAction(state);
                    setNextAction(action);
                }
            })
            .catch(err => {
                console.warn('[DashboardPage] Failed to resolve NextAction:', err);
            });

        return () => { isMounted = false; };
    }, [primaryLanguage, targetLevel, targetGoal, flashcards.length, user?.id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* Top Greeting & Quick Stats */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                        {greeting}, <span className="text-gradient">Farhod</span> 👋
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        {todayPendingTasks.length > 0
                            ? (language === 'en' ? `You have ${todayPendingTasks.length} tasks scheduled for today` : `Bugun sizda ${todayPendingTasks.length} ta bajarilishi kerak bo'lgan vazifa bor`)
                            : (language === 'en' ? "Great job! All of today's tasks are completed 🎉" : "Ajoyib! Bugungi barcha vazifalar bajarildi 🎉")
                        }
                    </p>
                </div>
                
                {/* Mini Stats Card */}
                <div className="flex items-center gap-4 glass-card p-3 px-5 rounded-2xl border-border">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <span className="text-sm font-medium text-muted-foreground">{language === 'en' ? 'Daily Progress' : 'Kunlik progress'}</span>
                            <span className="text-sm font-bold text-foreground ml-4">{progressPercentage}%</span>
                        </div>
                        <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Language Focus & Next Best Action Hero Card */}
            <div className={`p-6 md:p-8 rounded-3xl border relative overflow-hidden shadow-xl ${
                primaryLanguage === 'ja'
                    ? 'border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-card to-card'
                    : 'border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-card to-card'
            }`}>
                <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none ${
                    primaryLanguage === 'ja' ? 'bg-rose-500/15' : 'bg-indigo-500/15'
                }`} />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-2xl">{primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}</span>
                            <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                                primaryLanguage === 'ja'
                                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                                    : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                            }`}>
                                {primaryLanguage === 'ja' ? `JLPT ${targetLevel}` : `IELTS (${targetLevel})`} Focus Mode
                            </span>
                            <span className="text-xs text-muted-foreground font-medium">
                                • {targetGoal}
                            </span>
                        </div>

                        {/* Next Best Action Banner */}
                        {nextAction ? (
                            <div className="space-y-1.5 pt-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                                        <Sparkles size={14} className="animate-pulse" />
                                        Hozirgi Eng Muhim Qadam
                                    </span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">
                                        ⏱️ ~{nextAction.estimatedMinutes} daqiqa
                                    </span>
                                </div>
                                <h2 className="text-2xl font-black text-foreground tracking-tight">
                                    {nextAction.title}
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {nextAction.reason} {nextAction.description}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {primaryLanguage === 'ja' ? "Bugungi Yapon Tili Mashg'ulotlari" : "Bugungi IELTS & Akademik Ingliz Tili"}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {primaryLanguage === 'ja' ? "Har kuni 20 ta yangi Kanji, grammatika va AI muloqot." : "Speaking Examiner, Writing tahlili va Oxford Academic lug'at."}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Single Primary Action CTA & Quick Tools */}
                    <div className="flex flex-col gap-3 shrink-0 items-start lg:items-end">
                        {nextAction && (
                            <Link
                                to={nextAction.route}
                                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-white text-sm font-black shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${
                                    primaryLanguage === 'ja'
                                        ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/30'
                                        : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30'
                                }`}
                            >
                                <span>{nextAction.badgeIcon || '🚀'}</span>
                                <span>{nextAction.ctaLabel}</span>
                                <ArrowRight size={16} />
                            </Link>
                        )}

                        {/* Compact Secondary Quick Links */}
                        <div className="flex flex-wrap items-center gap-2">
                            {primaryLanguage === 'ja' ? (
                                <>
                                    <Link to="/jlpt" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-rose-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🈶</span> Kanji
                                    </Link>
                                    <Link to="/jlpt/grammar-quiz" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-rose-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>📖</span> Grammatika
                                    </Link>
                                    <Link to="/speaking-coach?lang=ja" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-rose-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🗣️</span> AI Suhbat
                                    </Link>
                                    <Link to="/jlpt/mock-exam" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-rose-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🎌</span> Mock
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/speaking-coach?lang=en" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-indigo-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🎙️</span> Speaking
                                    </Link>
                                    <Link to="/ielts/writing" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-indigo-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>✍️</span> Writing
                                    </Link>
                                    <Link to="/vocabulary" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-indigo-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🧠</span> Vocab
                                    </Link>
                                    <Link to="/ielts" className="px-3 py-1.5 rounded-xl bg-card border border-border hover:border-indigo-500/40 text-foreground text-xs font-semibold transition-all">
                                        <span>🎓</span> IELTS Hub
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CountdownWidget />

            {/* Tasks and AI Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 columns: Tasks list */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Today's Tasks Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                <ListTodo className="text-primary" size={24} />
                                {t('dashboard.todayTasks')}
                            </h2>
                            <Link to="/tasks" className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                                {t('common.all')} <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid gap-3">
                            {todayPendingTasks.length > 0 ? (
                                todayPendingTasks.map(task => (
                                    <div 
                                        key={task.id} 
                                        className="group p-4 glass-card rounded-2xl hover:border-primary/50 flex justify-between items-center transition-all duration-200 transform hover:-translate-y-0.5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => updateTaskStatus(task.id, 'done')}
                                                className="text-muted-foreground/50 hover:text-green-500 transition-colors"
                                                title="Bajarildi deb belgilash"
                                            >
                                                <CheckCircle size={26} />
                                            </button>
                                            <div className="flex flex-col">
                                                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                                                    {task.title}
                                                </span>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Clock size={12} /> Bugun
                                                    </span>
                                                    {task.subjectId && subjects.find(s => s.id === task.subjectId) && (
                                                        <span 
                                                            className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white shadow-sm"
                                                            style={{ backgroundColor: subjects.find(s => s.id === task.subjectId)?.color || '#6366f1' }}
                                                        >
                                                            {subjects.find(s => s.id === task.subjectId)?.name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 px-4 glass-card rounded-2xl border-dashed border-border">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                                        <Trophy size={32} />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">Bugungi vazifalar yo'q! 🎉</h3>
                                    <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                                        Bugun uchun rejalashtirilgan vazifalar mavjud emas yoki hammasi bajarilgan.
                                    </p>
                                    <Link to="/tasks" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
                                        Yangi vazifa qo'shish
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Overdue Tasks Section */}
                    {overdueTasks.length > 0 && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                                    <Clock className="animate-pulse" size={24} />
                                    O'tib ketgan vazifalar
                                </h2>
                                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">
                                    {overdueTasks.length} ta
                                </span>
                            </div>
                            <div className="grid gap-3">
                                {overdueTasks.map(task => (
                                    <div 
                                        key={task.id} 
                                        className="group p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 flex justify-between items-center transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => updateTaskStatus(task.id, 'done')}
                                                className="text-red-300 dark:text-red-800 hover:text-green-500 transition-colors"
                                            >
                                                <CheckCircle size={26} />
                                            </button>
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 dark:text-white font-medium">
                                                    {task.title}
                                                </span>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                                                        <Clock size={12} /> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Muddat o\'tib ketgan'}
                                                    </span>
                                                    {task.subjectId && subjects.find(s => s.id === task.subjectId) && (
                                                        <span 
                                                            className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white shadow-sm opacity-90"
                                                            style={{ backgroundColor: subjects.find(s => s.id === task.subjectId)?.color || '#6366f1' }}
                                                        >
                                                            {subjects.find(s => s.id === task.subjectId)?.name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right column: AI Insights Panel */}
                <div className="space-y-6">
                    <div className="glass-card rounded-[2rem] p-6 flex flex-col space-y-4">
                        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <Sparkles size={22} className="text-primary animate-pulse" />
                            AI Aqlli Panel
                        </h2>
                        
                        {isAiInsightsLoading ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-3">
                                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                <p className="text-xs text-muted-foreground">AI maslahatlar tayyorlanmoqda...</p>
                            </div>
                        ) : aiInsights.length > 0 ? (
                            <div className="space-y-4">
                                {aiInsights.map((insight, idx) => (
                                    <div key={idx} className="p-4 bg-primary/5 border border-primary/20 rounded-2xl space-y-1">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wide">
                                            📘 {insight.subject}
                                        </span>
                                        <p className="text-sm text-foreground/80 font-medium leading-relaxed">
                                            {insight.advice}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground text-sm">
                                Shaxsiy maslahatlar olish uchun fanlar ostida dars sessiyalari va flashcardlarni yakunlang. 📈
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;