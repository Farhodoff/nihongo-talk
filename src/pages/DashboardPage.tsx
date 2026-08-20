import { CheckCircle, Loader2, ListTodo, Trophy, ArrowRight, Clock, Map, Sparkles } from 'lucide-react';
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownWidget from '../components/CountdownWidget';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { calculateMasteryScore } from '../utils/analytics';
import { generateStudyInsight, isAIKeyConfigured } from '../utils/ai';
import { LearningPathEngine } from '../services/LearningPathEngine';
import { LearningOrchestrator } from '../services/LearningOrchestrator';
import { RoadmapService } from '../services/RoadmapService';
import { NextBestAction, DailyLearningPlan, ProgressionState } from '../types/learningPath';
import { RoadmapSummary } from '../types/curriculum';

const DashboardPage: React.FC = () => {
    const { tasks, loading, updateTaskStatus, subjects, sessions, flashcards, settings, primaryLanguage, targetLevel, targetGoal, user } = useStudyData();
    const { language, t } = useLanguage();
    const [aiInsights, setAiInsights] = useState<{ subject: string; advice: string }[]>([]);
    const [isAiInsightsLoading, setIsAiInsightsLoading] = useState(false);
    const [nextAction, setNextAction] = useState<NextBestAction | null>(null);
    const [dailyPlan, setDailyPlan] = useState<DailyLearningPlan | null>(null);
    const [progression, setProgression] = useState<ProgressionState | null>(null);
    const [roadmapSummary, setRoadmapSummary] = useState<RoadmapSummary | null>(null);
    const [loadingState, setLoadingState] = useState<'loading' | 'success' | 'error'>('loading');
    const [retryTrigger, setRetryTrigger] = useState(0);

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

    // Load Next Best Action & Adaptive Daily Plan dynamically
    useEffect(() => {
        let isMounted = true;
        setLoadingState('loading');

        const activeUserId = user?.id || 'default-user';

        // Load learning path state
        const pathPromise = LearningPathEngine.getLearningPathState(activeUserId, { forceLanguage: primaryLanguage })
            .then(pathState => {
                if (isMounted) {
                    setNextAction(pathState.nextAction);
                    setDailyPlan(pathState.todayPlan);
                    setProgression(pathState.progression);
                }
            });

        // Load roadmap summary (parallel, non-blocking)
        const roadmapPromise = LearningOrchestrator.getUserLearningState(activeUserId, { forceLanguage: primaryLanguage, cachedFlashcards: flashcards })
            .then(learningState => {
                if (isMounted) {
                    const rm = RoadmapService.getLearningRoadmap(learningState);
                    setRoadmapSummary(RoadmapService.getRoadmapSummary(rm));
                }
            })
            .catch(err => {
                console.warn('[DashboardPage] Failed to load roadmap summary:', err);
            });

        Promise.all([pathPromise, roadmapPromise])
            .then(() => {
                if (isMounted) setLoadingState('success');
            })
            .catch(err => {
                console.warn('[DashboardPage] Failed to resolve NextAction & DailyPlan from LearningPathEngine:', err);
                if (isMounted) setLoadingState('error');
            });

        return () => { isMounted = false; };
    }, [primaryLanguage, targetLevel, targetGoal, flashcards.length, user?.id, retryTrigger]);

    const isPlanCompleted = useMemo(() => {
        if (!dailyPlan || !dailyPlan.activities || dailyPlan.activities.length === 0) return false;
        return dailyPlan.activities.every(activity => activity.isCompleted || activity.status === 'completed');
    }, [dailyPlan]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" role="status" aria-label="Loading study planner dashboard..." />
            </div>
        );
    }

    if (loadingState === 'error') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 p-6 text-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-2xl" aria-hidden="true">
                    ⚠️
                </div>
                <h2 className="text-xl font-bold text-foreground">
                    {language === 'en' ? 'Failed to load learning path' : "Ma'lumotlarni yuklashda muammo yuz berdi"}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {language === 'en'
                        ? 'Please check your connection and try again.'
                        : "Sessiyani yuklashda xatolik yuz berdi. Iltimos tarmoq ulanishini tekshirib qayta urining."}
                </p>
                <button
                    onClick={() => setRetryTrigger(prev => prev + 1)}
                    className="px-6 py-2.5 bg-primary text-primary-foreground font-black rounded-xl hover:bg-primary/95 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Retry loading data"
                >
                    {language === 'en' ? 'Retry' : 'Qayta urinish'}
                </button>
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
                                    {(nextAction.reason?.description || nextAction.reason?.message || '') + ' ' + (nextAction.description || '')}
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
                                to={nextAction.route || (primaryLanguage === 'ja' ? '/jlpt' : '/ielts')}
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
                            <Link to="/roadmap" className="px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/30 text-primary text-xs font-bold transition-all flex items-center gap-1">
                                <span>🗺️</span> Roadmap
                            </Link>
                            <Link to="/diagnostic" className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold transition-all flex items-center gap-1">
                                <span>🎯</span> Test
                            </Link>
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

            {/* Today's Adaptive Daily Plan */}
            {dailyPlan && dailyPlan.activities && dailyPlan.activities.length > 0 && (
                <div className="p-6 md:p-7 rounded-3xl glass-card border border-border space-y-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                            <span className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                                <Clock size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-bold text-foreground flex items-center gap-2 animate-in fade-in duration-300">
                                    {language === 'en' ? "Today's Adaptive Plan" : "Bugungi Adaptiv Reja"}
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                                        ⏱️ {dailyPlan.totalMinutes} {language === 'en' ? 'mins' : 'daqiqa'}
                                    </span>
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {dailyPlan.summary?.reason || (language === 'en' ? 'Your customized route for today.' : 'Bugungi moslashtirilgan o\'quv rejangiz.')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {isPlanCompleted ? (
                        <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-xl font-bold">
                                🎉
                            </div>
                            <h4 className="text-base font-bold text-green-700 dark:text-green-400">
                                {language === 'en' ? "Today's Plan Completed!" : "Bugungi reja bajarildi!"}
                            </h4>
                            <p className="text-xs text-green-600 dark:text-green-500 max-w-md mx-auto">
                                {language === 'en'
                                    ? "All scheduled tasks for today have been completed. Tomorrow's customized plan will be automatically generated."
                                    : "Bugun uchun rejalashtirilgan barcha dars va takrorlashlar yakunlandi. Ertangi reja avtomatik tayyorlanadi."}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                            {dailyPlan.activities.map((item, idx) => (
                                <Link
                                    key={item.id || idx}
                                    to={item.route || (primaryLanguage === 'ja' ? '/jlpt' : '/ielts')}
                                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 group relative overflow-hidden ${
                                        item.isCompleted || item.status === 'completed'
                                            ? 'bg-green-500/5 border-green-500/20 opacity-70 hover:opacity-90'
                                            : 'bg-secondary/30 hover:bg-secondary/60 border-border/50 hover:border-primary/40'
                                    }`}
                                    aria-label={`Step ${idx + 1}: ${item.title}, ${item.estimatedMinutes} minutes, ${
                                        item.isCompleted || item.status === 'completed' ? 'Completed' : 'Pending'
                                    }`}
                                >
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-card border border-border text-muted-foreground">
                                                {idx + 1}-Qadam
                                            </span>
                                            {item.isCompleted || item.status === 'completed' ? (
                                                <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                                                    ✓ {language === 'en' ? 'Done' : 'Bajarildi'}
                                                </span>
                                            ) : (
                                                <span className="text-xs font-bold text-primary flex items-center gap-1">
                                                    <Clock size={12} /> {item.estimatedMinutes} daq
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-2 leading-snug">
                                            {typeof item.reason === 'string'
                                                ? item.reason
                                                : (item.reason?.description || item.reason?.message || '')}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end text-xs font-bold text-primary gap-1 pt-1">
                                        <span>{language === 'en' ? 'Start' : 'Boshlash'}</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* My Learning Roadmap Widget */}
            {roadmapSummary && (
                <div className="p-6 md:p-7 rounded-3xl glass-card border border-border space-y-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                                <Map size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                                    {language === 'en' ? "My Learning Roadmap" : "Mening O'quv Yo'l Xaritam"}
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                                        {roadmapSummary.currentLevelCode} {language === 'en' ? 'Level' : 'Bosqich'}
                                    </span>
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {language === 'en'
                                        ? `${roadmapSummary.completedCount} of ${roadmapSummary.totalCount} lessons completed (${roadmapSummary.progressPercentage}%)`
                                        : `${roadmapSummary.totalCount} ta darsdan ${roadmapSummary.completedCount} tasi bajarildi (${roadmapSummary.progressPercentage}%)`}
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/roadmap"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-all border border-primary/20 w-fit"
                        >
                            <span>🗺️</span>
                            <span>{language === 'en' ? "View Full Roadmap" : "To'liq Xaritani Ko'rish"}</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                            <span>{language === 'en' ? 'Overall Progress' : 'Umumiy Progress'}</span>
                            <span className="text-foreground font-bold">{roadmapSummary.progressPercentage}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${roadmapSummary.progressPercentage}%` }}
                            />
                        </div>
                    </div>

                    {/* Next & Weak Lesson Cards */}
                    {(roadmapSummary.nextLesson || roadmapSummary.topWeakLesson) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {roadmapSummary.nextLesson && (
                                <Link
                                    to={roadmapSummary.nextLesson.route}
                                    className="p-4 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all flex flex-col justify-between gap-3 group"
                                >
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/15 text-primary">
                                                {language === 'en' ? 'Next Up' : 'Navbatdagi Dars'}
                                            </span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Clock size={12} /> ~{roadmapSummary.nextLesson.estimatedMinutes} daq
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                            {roadmapSummary.nextLesson.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                            {roadmapSummary.nextLesson.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end text-xs font-bold text-primary gap-1 pt-1 border-t border-primary/10">
                                        <span>{language === 'en' ? 'Start Lesson' : 'Darsni Boshlash'}</span>
                                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            )}

                            {roadmapSummary.topWeakLesson && roadmapSummary.topWeakLesson.id !== roadmapSummary.nextLesson?.id && (
                                <Link
                                    to={roadmapSummary.topWeakLesson.route}
                                    className="p-4 rounded-2xl border border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10 transition-all flex flex-col justify-between gap-3 group"
                                >
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-500">
                                                {language === 'en' ? 'Focus Area' : "Zaif Ko'nikma"}
                                            </span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Clock size={12} /> ~{roadmapSummary.topWeakLesson.estimatedMinutes} daq
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-foreground group-hover:text-rose-500 transition-colors line-clamp-1">
                                            {roadmapSummary.topWeakLesson.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                            {roadmapSummary.topWeakLesson.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end text-xs font-bold text-rose-500 gap-1 pt-1 border-t border-rose-500/10">
                                        <span>{language === 'en' ? 'Practice' : 'Mashq Qilish'}</span>
                                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Progression Track Section */}
            {progression && (
                <div className="p-6 md:p-7 rounded-3xl glass-card border border-border space-y-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-base font-bold text-foreground">
                                {language === 'en' ? "Level Progression Status" : "Daraja bo'yicha rivojlanish"}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                {progression.explanation || (language === 'en' ? 'Evidence-based progression tracking.' : 'Bilim va natijalar asosida darajani oshirish.')}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-primary">{progression.currentLevel}</span>
                            <ArrowRight size={16} className="text-muted-foreground" />
                            <span className="text-2xl font-black text-muted-foreground">{progression.nextLevel || 'Max'}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-muted-foreground">Promotion Readiness:</span>
                            <span className={`font-bold ${progression.isReadyForPromotion ? 'text-green-500' : 'text-amber-500'}`}>
                                {progression.readinessScore || 0}% ({progression.isReadyForPromotion ? (language === 'en' ? 'Ready ✓' : 'Tayyor ✓') : (language === 'en' ? 'Not Ready' : 'Tayyor emas')})
                            </span>
                        </div>
                        <div
                            className="w-full h-3 bg-secondary rounded-full overflow-hidden"
                            role="progressbar"
                            aria-valuenow={progression.readinessScore || 0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`Promotion readiness percentage: ${progression.readinessScore || 0}%`}
                        >
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                    progression.isReadyForPromotion ? 'bg-green-500' : 'bg-amber-500'
                                }`}
                                style={{ width: `${progression.readinessScore || 0}%` }}
                            />
                        </div>
                    </div>

                    {progression.advancementBlockers && progression.advancementBlockers.length > 0 && (
                        <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                            <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                                ⚠️ Blockers to {progression.nextLevel}
                            </h4>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                {progression.advancementBlockers.map((blocker: string, index: number) => (
                                    <li key={index}>{blocker}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {progression.recommendedAction && (
                        <div className="text-xs text-muted-foreground flex items-center gap-2 bg-secondary/20 p-3 rounded-xl border border-border">
                            <span className="text-primary font-bold">💡 Next Step:</span>
                            <span>{progression.recommendedAction}</span>
                        </div>
                    )}
                </div>
            )}

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