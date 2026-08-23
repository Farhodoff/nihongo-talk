import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    Calendar,
    Clock,
    CheckCircle2,
    AlertTriangle,
    ChevronDown,
    ChevronUp,
    Loader2,
    Award,
    Play
} from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '../hooks/use-toast';
import { PersonalLearningPlanService, FeasibilityResult } from '../services/PersonalLearningPlanService';
import { PersonalLearningPlanEngine } from '../services/PersonalLearningPlanEngine';
import { WeeklyEvaluationEngine } from '../services/WeeklyEvaluationEngine';
import { LearningProgressionService } from '../services/LearningProgressionService';
import { LearningSignalService } from '../services/LearningSignalService';
import { MasteryEngine } from '../services/MasteryEngine';
import { PersonalLearningGoal, WeeklyLearningPlan, WeeklyEvaluation } from '../types/learningPlan';
import { generateUUID } from '../utils/uuid';

export const PersonalPlanPage: React.FC = () => {
    const { user } = useStudyData();
    const { language } = useLanguage();
    const isUz = language !== 'en';
    const navigate = useNavigate();

    // Wizard States
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedLang, setSelectedLang] = useState<'en' | 'ja'>('en');
    const [selectedGoalType, setSelectedGoalType] = useState<'ielts' | 'jlpt' | 'general_en' | 'general_ja'>('general_en');
    const [targetLevel, setTargetLevel] = useState<string>('A1');
    const [currentLevel, setCurrentLevel] = useState<string>('ZERO');
    const [deadlineMonths, setDeadlineMonths] = useState<number>(6);
    const [dailyMinutes, setDailyMinutes] = useState<number>(60);

    // AI Generation progress states
    const [generationStep, setGenerationStep] = useState<string | null>(null);

    // Active plan states
    const [activeGoal, setActiveGoal] = useState<PersonalLearningGoal | null>(null);
    const [currentPlan, setCurrentPlan] = useState<WeeklyLearningPlan | null>(null);
    const [weeklyEvals, setWeeklyEvals] = useState<WeeklyEvaluation[]>([]);
    const [expandedDay, setExpandedDay] = useState<string>('monday');
    const [evaluating, setEvaluating] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    // Initial load
    useEffect(() => {
        let isMounted = true;
        const loadPlanData = async () => {
            const userId = user?.id || 'guest';
            setLoading(true);
            try {
                // Fetch active goal (with localStorage migration check)
                const goal = await PersonalLearningPlanService.fetchActiveGoalFromServer(userId);
                if (!isMounted) return;

                if (goal) {
                    setActiveGoal(goal);

                    // Fetch plans & evaluations
                    await PersonalLearningPlanService.fetchWeeklyPlansFromServer(userId);
                    if (!isMounted) return;
                    const plan = PersonalLearningPlanService.getLatestWeeklyPlan(userId, goal.id);
                    if (plan) setCurrentPlan(plan);

                    await PersonalLearningPlanService.fetchWeeklyEvaluationsFromServer(userId);
                    if (!isMounted) return;
                    setWeeklyEvals(PersonalLearningPlanService.getWeeklyEvaluations(userId));
                } else {
                    setActiveGoal(null);
                    setCurrentPlan(null);
                    setWeeklyEvals([]);
                }
            } catch (err) {
                console.error('[PersonalPlanPage] Error loading plan data:', err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        loadPlanData();

        const confirmedLevel = LearningProgressionService.getCurrentLevel(
            user?.id || 'guest',
            selectedLang
        );
        setCurrentLevel(confirmedLevel);

        return () => {
            isMounted = false;
        };
    }, [user?.id, selectedLang]);

    // Available target options
    const targetsList = useMemo(() => {
        if (selectedLang === 'ja') {
            return ['N5', 'N4', 'N3', 'N2', 'N1'];
        }
        if (selectedGoalType === 'ielts') {
            return ['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5+'];
        }
        return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    }, [selectedLang, selectedGoalType]);

    // Available current level options
    const currentLevelsList = useMemo(() => {
        if (selectedLang === 'ja') {
            return ['ZERO', 'N5', 'N4', 'N3', 'N2'];
        }
        if (selectedGoalType === 'ielts') {
            return ['ZERO', '4.0', '4.5', '5.0', '5.5', '6.0', '6.5', '7.0'];
        }
        return ['ZERO', 'A1', 'A2', 'B1', 'B2', 'C1'];
    }, [selectedLang, selectedGoalType]);

    // Update defaults when language track changes
    const handleLangSelect = (lang: 'en' | 'ja') => {
        setSelectedLang(lang);
        if (lang === 'ja') {
            setSelectedGoalType('jlpt');
            setTargetLevel('N5');
            setCurrentLevel('ZERO');
        } else {
            setSelectedGoalType('general_en');
            setTargetLevel('A1');
            setCurrentLevel('ZERO');
        }
    };

    // Calculate Feasibility
    const feasibility: FeasibilityResult = useMemo(() => {
        const days = deadlineMonths * 30;
        return PersonalLearningPlanService.checkFeasibility(
            selectedLang,
            selectedGoalType,
            currentLevel,
            targetLevel,
            days,
            dailyMinutes
        );
    }, [selectedLang, selectedGoalType, currentLevel, targetLevel, deadlineMonths, dailyMinutes]);

    // High level Milestone roadmaps
    const roadmapMilestones = useMemo(() => {
        const milestones = [];

        for (let m = 1; m <= deadlineMonths; m++) {
            milestones.push({
                month: m,
                title: isUz ? `${m}-Oy: Progress & Consolidation` : `Month ${m}: Progress & Consolidation`,
                desc: isUz ? `Ushbu oyda ${currentLevel} dan ${targetLevel} sari qadamlar mustahkamlanadi.` : `Focuses on moving from ${currentLevel} towards ${targetLevel}.`
            });
        }
        return milestones;
    }, [currentLevel, targetLevel, deadlineMonths]);

    // Start plan generation wizard
    const handleInitializePlan = async () => {
        if (!PersonalLearningPlanService.isTargetLevelValid(currentLevel, targetLevel, selectedGoalType)) {
            toast({
                variant: 'destructive',
                title: isUz ? "Xatolik" : "Error",
                description: isUz
                    ? "Maqsadli daraja joriy darajadan yuqori bo'lishi shart!"
                    : "Target level must be higher than current level!"
            });
            return;
        }

        setGenerationStep('initializing');
        const userId = user?.id || 'guest';
        const totalWeeks = deadlineMonths * 4;

        const newGoal: PersonalLearningGoal = {
            id: generateUUID(),
            userId,
            language: selectedLang,
            goalType: selectedGoalType,
            currentLevel,
            targetGoal: selectedGoalType === 'ielts' ? `IELTS ${targetLevel}` : `JLPT ${targetLevel}`,
            targetLevel,
            deadline: new Date(Date.now() + deadlineMonths * 30 * 24 * 60 * 60 * 1000).toISOString(),
            dailyMinutes,
            totalWeeks,
            currentWeek: 1,
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        try {
            setGenerationStep('analyzing');
            await new Promise(r => setTimeout(r, 800));
            setGenerationStep('selecting');
            await new Promise(r => setTimeout(r, 800));
            setGenerationStep('generating');

            const result = await PersonalLearningPlanEngine.generateWeeklyPlan(userId, newGoal, 1);

            await PersonalLearningPlanService.saveGoal(userId, newGoal);
            await PersonalLearningPlanService.saveWeeklyPlan(result.plan);

            setActiveGoal(newGoal);
            setCurrentPlan(result.plan);
            setGenerationStep(null);

            if (result.noticeMessage) {
                toast({ title: 'Plan generated', description: result.noticeMessage });
            } else {
                toast({ title: 'Reja tayyor', description: 'Haftalik rejangiz muvaffaqiyatli yaratildi!' });
            }
        } catch (err: any) {
            console.error(err);
            setGenerationStep(null);
            toast({ variant: 'destructive', title: 'Xatolik', description: err.message || 'Plan yaratishda muammo yuz berdi.' });
        }
    };

    // Checkbox checklist toggle logic
    const handleToggleTask = async (dayName: string, taskId: string) => {
        if (!currentPlan) return;

        const updatedDays = currentPlan.days.map(day => {
            if (day.day === dayName) {
                return {
                    ...day,
                    tasks: day.tasks.map(t => {
                        if (t.id === taskId) {
                            const nextCompleted = !t.completed;
                            const nextStatus: any = nextCompleted ? 'completed' : 'pending';

                            const userId = user?.id || 'guest';
                            // Dynamic signals and mastery registration
                            if (nextCompleted) {
                                // Record learning evidence
                                MasteryEngine.recordEvidence(userId, selectedLang, {
                                    id: `plan_task_${taskId}_${Date.now()}`,
                                    skill: t.skill || 'grammar',
                                    score: 100,
                                    timestamp: new Date().toISOString(),
                                    details: `Completed Personal Plan task: ${t.title}`,
                                    type: 'completion'
                                });

                                // Record signal
                                LearningSignalService.recordSignal({
                                    id: `sig_task_${taskId}_${Date.now()}`,
                                    type: 'completed_lesson',
                                    language: selectedLang,
                                    userId,
                                    timestamp: new Date().toISOString(),
                                    lessonId: t.contentId || 'custom_plan_task',
                                    level: activeGoal?.currentLevel || 'A1',
                                    score: 1,
                                    total: 1,
                                    percentage: 100,
                                    newCardsCreated: 0,
                                    mistakesCount: 0
                                }).catch(() => {});
                            }

                            return { ...t, completed: nextCompleted, status: nextStatus };
                        }
                        return t;
                    })
                };
            }
            return day;
        });

        const updatedPlan: WeeklyLearningPlan = {
            ...currentPlan,
            days: updatedDays
        };

        setCurrentPlan(updatedPlan);
        await PersonalLearningPlanService.saveWeeklyPlan(updatedPlan);
    };

    // End week evaluation triggers next week adaptation
    const handleEvaluateWeek = async () => {
        if (!activeGoal || !currentPlan) return;
        setEvaluating(true);
        try {
            const userId = user?.id || 'guest';
            const evaluation = await WeeklyEvaluationEngine.evaluateWeek(userId, activeGoal, currentPlan);

            // Prepare next week plan in background
            const nextWeek = currentPlan.weekNumber + 1;
            const updatedGoal = PersonalLearningPlanService.getActiveGoal(userId);

            if (updatedGoal && updatedGoal.status === 'active') {
                const nextPlanResult = await PersonalLearningPlanEngine.generateWeeklyPlan(userId, updatedGoal, nextWeek, evaluation);
                await PersonalLearningPlanService.saveWeeklyPlan(nextPlanResult.plan);
                setCurrentPlan(nextPlanResult.plan);
            }

            setWeeklyEvals(PersonalLearningPlanService.getWeeklyEvaluations(userId));
            setEvaluating(false);
            toast({ title: 'Hafta Yakunlandi', description: 'Haftalik natijalar tahlil qilindi va keyingi hafta adaptatsiya qilindi!' });
        } catch (e: any) {
            console.error(e);
            setEvaluating(false);
            toast({ variant: 'destructive', title: 'Xatolik', description: e.message || 'Baholashda muammo yuz berdi.' });
        }
    };

    // Diagnostic navigator
    const handleNavigateToDiag = () => {
        navigate('/diagnostic');
    };

    // Reset whole plan (restart wizard)
    const handleResetPlan = async () => {
        if (window.confirm(isUz ? "Haqiqatan ham rejangizni o'chirishni va boshidan boshlashni xohlaysizmi?" : "Are you sure you want to delete this plan and start over?")) {
            const userId = user?.id || 'guest';
            try {
                await PersonalLearningPlanService.resetPlan(userId);
                setActiveGoal(null);
                setCurrentPlan(null);
                setStep(1);
                toast({ title: 'Plan reset', description: isUz ? "Reja to'liq o'chirildi." : "Plan has been successfully reset." });
            } catch (err: any) {
                console.error(err);
                toast({ variant: 'destructive', title: 'Xatolik', description: err.message || 'Plan o\'chirishda xatolik yuz berdi.' });
            }
        }
    };

    // Rendering initial loading spinner
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-gray-500 font-medium">{isUz ? 'Reja yuklanmoqda...' : 'Loading plan data...'}</p>
            </div>
        );
    }

    // Rendering loading indicator
    if (generationStep) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                        {generationStep === 'initializing' && (isUz ? 'Tizim yuklanmoqda...' : 'Initializing planner...')}
                        {generationStep === 'analyzing' && (isUz ? 'Zaif ko\'nikmalaringiz tahlil qilinmoqda...' : 'Analyzing weaknesses and learning profile...')}
                        {generationStep === 'selecting' && (isUz ? 'Haftalik vazifalar saralanmoqda...' : 'Resolving matching curriculum items...')}
                        {generationStep === 'generating' && (isUz ? 'AI shaxsiy haftalik rejangizni tayyorlamoqda...' : 'Generating Week 1 personalized plan...')}
                    </h3>
                    <p className="text-sm text-muted-foreground">Bu bir necha soniya vaqt olishi mumkin.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* WIZARD FLOW */}
            {!activeGoal ? (
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="p-6 md:p-8 rounded-3xl glass-card border border-border bg-gradient-to-br from-card via-card to-primary/10 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={20} className="text-primary animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-wider text-primary">AI-Powered Planning</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                            {isUz ? "Shaxsiy O'quv Rejangizni Yarating" : "Create Your Personalized Study Plan"}
                        </h1>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                            {isUz
                                ? "O'z darajangiz, maqsadlaringiz va deadlinelardan kelib chiqqan holda haftalik adaptive o'quv rejasini tuzing."
                                : "Construct an adaptive study track customized for your level, targets, deadlines, and schedule parameters."}
                        </p>
                    </div>

                    {/* STEP 1: Select Language */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-foreground">{isUz ? '1-Bosqich: Tilni tanlang' : 'Step 1: Select Language'}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleLangSelect('en')}
                                    className={`p-6 rounded-3xl border text-center transition-all ${
                                        selectedLang === 'en' ? 'bg-primary/10 border-primary shadow-sm scale-[1.01]' : 'border-border glass-card hover:border-primary/50'
                                    }`}
                                >
                                    <span className="text-3xl block mb-2">🇬🇧</span>
                                    <span className="font-bold text-base block text-foreground">Ingliz Tili</span>
                                </button>
                                <button
                                    onClick={() => handleLangSelect('ja')}
                                    className={`p-6 rounded-3xl border text-center transition-all ${
                                        selectedLang === 'ja' ? 'bg-primary/10 border-primary shadow-sm scale-[1.01]' : 'border-border glass-card hover:border-primary/50'
                                    }`}
                                >
                                    <span className="text-3xl block mb-2">🇯🇵</span>
                                    <span className="font-bold text-base block text-foreground">Yapon Tili</span>
                                </button>
                            </div>
                            <div className="flex justify-end pt-4">
                                <button onClick={() => setStep(2)} className="px-6 py-3 bg-primary text-primary-foreground font-black text-sm rounded-2xl flex items-center gap-2">
                                    <span>{isUz ? 'Davom etish' : 'Continue'}</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Goal Selection */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-foreground">{isUz ? '2-Bosqich: Maqsadni tanlang' : 'Step 2: Define Goal Type'}</h3>
                            {selectedLang === 'en' ? (
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setSelectedGoalType('ielts')}
                                        className={`p-6 rounded-3xl border text-left transition-all ${
                                            selectedGoalType === 'ielts' ? 'bg-primary/10 border-primary' : 'border-border glass-card'
                                        }`}
                                    >
                                        <h4 className="font-bold text-base text-foreground">IELTS Imtihoni</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Band Score ko'rsatkichlariga yo'naltirilgan intensiv reja.</p>
                                    </button>
                                    <button
                                        onClick={() => setSelectedGoalType('general_en')}
                                        className={`p-6 rounded-3xl border text-left transition-all ${
                                            selectedGoalType === 'general_en' ? 'bg-primary/10 border-primary' : 'border-border glass-card'
                                        }`}
                                    >
                                        <h4 className="font-bold text-base text-foreground">General English</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Muloqot, grammatika va so'z boyligini umumiy oshirish.</p>
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        onClick={() => setSelectedGoalType('jlpt')}
                                        className="p-6 rounded-3xl border border-primary/20 bg-primary/5 text-left"
                                    >
                                        <h4 className="font-bold text-base text-foreground">JLPT Imtihoni (N5 - N1)</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Yapon tili darajasini aniqlash imtihon strategiyalari.</p>
                                    </button>
                                </div>
                            )}

                            <div className="space-y-2 pt-2">
                                <label className="block text-sm font-medium text-foreground">{isUz ? "Maqsadli Daraja (Target)" : "Target Destination Level"}</label>
                                <select
                                    value={targetsList.includes(targetLevel) ? targetLevel : targetsList[0] || ''}
                                    onChange={(e) => setTargetLevel(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground"
                                >
                                    {targetsList.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={() => setStep(1)} className="px-5 py-2.5 bg-secondary text-foreground font-bold text-xs rounded-xl">Orqaga</button>
                                <button onClick={() => setStep(3)} className="px-6 py-3 bg-primary text-primary-foreground font-black text-sm rounded-2xl">Davom etish</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Current Level Assessment */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-foreground">{isUz ? '3-Bosqich: Joriy darajangizni aniqlang' : 'Step 3: Establish Starting Level'}</h3>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-3xl glass-card border border-border space-y-3 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-base text-foreground">{isUz ? "Bilimimni sinab ko'rmoqchiman" : "Unsure of Level?"}</h4>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                            {isUz ? "10-15 ta adaptiv savoldan iborat diagnostik test topshirib, aniq darajangizni hisoblang." : "Conduct a rapid 10-15 question adaptive placement test first."}
                                        </p>
                                    </div>
                                    <button onClick={handleNavigateToDiag} className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
                                        Diagnostik Test Topshirish
                                    </button>
                                </div>

                                <div className="p-6 rounded-3xl glass-card border border-border space-y-3 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-base text-foreground">{isUz ? "Taxminiy darajani kiritish" : "Override Manually"}</h4>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Joriy bilimingizni taxminan belgilang va yo'l xaritasini boshlang.</p>
                                    </div>
                                    <div className="space-y-1">
                                        <select
                                            value={currentLevelsList.includes(currentLevel) ? currentLevel : currentLevelsList[0] || ''}
                                            onChange={(e) => {
                                                setCurrentLevel(e.target.value);
                                                                                    }}
                                            className="w-full px-3 py-2 rounded-xl border border-border bg-background/50 text-foreground text-xs"
                                        >
                                            {currentLevelsList.map(cl => <option key={cl} value={cl}>{cl}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={() => setStep(2)} className="px-5 py-2.5 bg-secondary text-foreground font-bold text-xs rounded-xl">Orqaga</button>
                                <button onClick={() => {
                                    if (!PersonalLearningPlanService.isTargetLevelValid(currentLevel, targetLevel, selectedGoalType)) {
                                        toast({
                                            variant: 'destructive',
                                            title: isUz ? "Noto'g'ri maqsadli daraja" : "Invalid Target Level",
                                            description: isUz
                                                ? "Maqsadli daraja joriy darajangizdan yuqori bo'lishi kerak!"
                                                : "Target level must be higher than your current level!"
                                        });
                                        return;
                                    }
                                    setStep(4);
                                }} className="px-6 py-3 bg-primary text-primary-foreground font-black text-sm rounded-2xl">Davom etish</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: Deadline & Confirmation */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-foreground">{isUz ? '4-Bosqich: Muddat va dars vaqti' : 'Step 4: Milestones & Schedule'}</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider">{isUz ? "Tayyorgarlik muddati" : "Preparation Period"}</label>
                                    <select
                                        value={deadlineMonths}
                                        onChange={(e) => setDeadlineMonths(Number(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground text-sm"
                                    >
                                        <option value={1}>1 Oy (Tezkor)</option>
                                        <option value={3}>3 Oy (Intensiv)</option>
                                        <option value={6}>6 Oy (Standart)</option>
                                        <option value={9}>9 Oy (Batafsil)</option>
                                        <option value={12}>12 Oy (Erkin)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">{isUz ? "Kunlik dars vaqti (daqiqa)" : "Daily Minutes Budget"}</label>
                                        <span className="text-xs text-primary font-bold">{dailyMinutes || 0} daq / kun</span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={dailyMinutes === 0 ? '' : dailyMinutes}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val === '') {
                                                    setDailyMinutes(0);
                                                } else {
                                                    const num = parseInt(val, 10);
                                                    if (!isNaN(num)) {
                                                        setDailyMinutes(num);
                                                    }
                                                }
                                            }}
                                            onBlur={() => {
                                                if (!dailyMinutes || dailyMinutes < 10) setDailyMinutes(15);
                                                if (dailyMinutes > 480) setDailyMinutes(480);
                                            }}
                                            placeholder="Masalan: 45"
                                            min={10} max={480}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none"
                                        />
                                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">
                                            daqiqa
                                        </span>
                                    </div>
                                    {/* Quick Preset Buttons */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {[15, 30, 45, 60, 90, 120].map((preset) => (
                                            <button
                                                key={preset}
                                                type="button"
                                                onClick={() => setDailyMinutes(preset)}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                                                    dailyMinutes === preset
                                                        ? 'bg-primary text-primary-foreground border-primary'
                                                        : 'bg-secondary/50 hover:bg-secondary border-border text-muted-foreground'
                                                }`}
                                            >
                                                {preset} daq
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Feasibility Indicator Warning */}
                            {feasibility.warningMessage && (
                                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <h5 className="text-xs font-black text-amber-600 dark:text-amber-400">{isUz ? "Agressiv Maqsad Ogohlantirishi" : "Highly Ambitious Target"}</h5>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{feasibility.warningMessage}</p>
                                    </div>
                                </div>
                            )}

                            {/* Milestone Roadmap preview */}
                            <div className="p-6 rounded-3xl glass-card border border-border space-y-4">
                                <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                                    <Calendar size={16} className="text-primary" />
                                    {isUz ? "Yuqori darajadagi yo'l xaritasi (High-level Roadmap)" : "High-level Roadmap Milestones"}
                                </h4>
                                <div className="space-y-3">
                                    {roadmapMilestones.map((m, idx) => (
                                        <div key={idx} className="flex gap-3 text-xs leading-relaxed border-l-2 border-primary/20 pl-3">
                                            <div>
                                                <div className="font-bold text-foreground">{m.title}</div>
                                                <div className="text-muted-foreground">{m.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={() => setStep(3)} className="px-5 py-2.5 bg-secondary text-foreground font-bold text-xs rounded-xl">Orqaga</button>
                                <button onClick={handleInitializePlan} className="px-6 py-3.5 bg-primary text-primary-foreground font-black text-sm rounded-2xl shadow-lg flex items-center gap-2">
                                    <Sparkles size={16} />
                                    <span>Shaxsiy Rejani Yaratish</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                /* ACTIVE DASHBOARD VIEW */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT PANEL: Goal Summary & Evaluations */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 rounded-3xl glass-card border border-border space-y-4 bg-gradient-to-br from-card via-card to-primary/5">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {activeGoal.goalType.toUpperCase()} PLAN
                                </span>
                                <button onClick={handleResetPlan} className="text-xs font-medium text-destructive hover:underline">Rejani o'chirish</button>
                            </div>

                            <h2 className="text-xl font-black text-foreground">
                                {activeGoal.currentLevel} → {activeGoal.targetLevel}
                            </h2>

                            <div className="space-y-2 text-xs text-muted-foreground">
                                <div className="flex justify-between">
                                    <span>Kunlik yuklama:</span>
                                    <span className="font-bold text-foreground">{activeGoal.dailyMinutes} daqiqa</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Umumiy muddat:</span>
                                    <span className="font-bold text-foreground">{activeGoal.totalWeeks} hafta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Joriy hafta:</span>
                                    <span className="font-bold text-foreground">{activeGoal.currentWeek}-hafta</span>
                                </div>
                            </div>

                            <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-full transition-all duration-300"
                                    style={{ width: `${Math.round((activeGoal.currentWeek / activeGoal.totalWeeks) * 100)}%` }}
                                />
                            </div>
                        </div>

                        {/* Weekly evaluations history */}
                        <div className="p-6 rounded-3xl glass-card border border-border space-y-4">
                            <h3 className="text-sm font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                <Award size={16} className="text-primary" />
                                <span>Haftalik Natijalar Tahlili</span>
                            </h3>
                            {weeklyEvals.length === 0 ? (
                                <p className="text-xs text-muted-foreground">Hozircha yakunlangan haftalar yo'q. Hafta tugagach darslar natijasi tahlil qilinadi.</p>
                            ) : (
                                <div className="space-y-4">
                                    {weeklyEvals.map((e, idx) => (
                                        <div key={idx} className="p-3.5 rounded-2xl bg-secondary/30 border border-border space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs font-black text-foreground">{e.weekNumber}-Hafta Natijalari</span>
                                                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black">{e.completionRate}% completion</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed italic">"{e.aiFeedback}"</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT PANEL: 7-day checklist and active week view */}
                    <div className="lg:col-span-2 space-y-6">
                        {currentPlan ? (
                            <div className="space-y-4">
                                <div className="p-6 rounded-3xl glass-card border border-border space-y-2">
                                    <h2 className="text-lg font-black text-foreground tracking-tight">{currentPlan.weekNumber}-Haftalik O'quv Rejasi</h2>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        <strong>Sabab/Tahlil:</strong> {currentPlan.reasoning}
                                    </p>
                                    <div className="flex gap-2 pt-1 flex-wrap">
                                        {currentPlan.focusSkills.map(skill => (
                                            <span key={skill} className="px-2.5 py-0.5 rounded-md bg-secondary text-foreground text-[10px] font-bold uppercase tracking-wider">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Monday - Sunday checklist Accordion */}
                                <div className="space-y-3">
                                    {currentPlan.days.map((dayPlan) => {
                                        const isExpanded = expandedDay === dayPlan.day;
                                        const completedCount = dayPlan.tasks.filter(t => t.completed).length;
                                        const totalCount = dayPlan.tasks.length;
                                        const isDayDone = completedCount === totalCount && totalCount > 0;

                                        return (
                                            <div key={dayPlan.day} className={`rounded-3xl border transition-all ${
                                                isExpanded ? 'border-primary/30 shadow-md bg-card' : 'border-border glass-card'
                                            }`}>
                                                <button
                                                    onClick={() => setExpandedDay(isExpanded ? '' : dayPlan.day)}
                                                    className="w-full p-4 flex items-center justify-between gap-4"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black uppercase ${
                                                            isDayDone ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-secondary text-foreground'
                                                        }`}>
                                                            {dayPlan.day.substring(0, 3)}
                                                        </span>
                                                        <span className="font-bold text-sm text-foreground capitalize">{dayPlan.day}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-semibold text-muted-foreground">
                                                            {completedCount} / {totalCount}
                                                        </span>
                                                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                    </div>
                                                </button>

                                                {isExpanded && (
                                                    <div className="p-4 pt-0 border-t border-border/40 space-y-3 animate-in slide-in-from-top-2 duration-200">
                                                        {dayPlan.tasks.map((task) => (
                                                            <div key={task.id} className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-secondary/20 border border-border/80">
                                                                <div className="flex items-start gap-3">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={task.completed}
                                                                        onChange={() => handleToggleTask(dayPlan.day, task.id)}
                                                                        className="w-4.5 h-4.5 rounded border-border text-primary focus:ring-primary mt-0.5 cursor-pointer"
                                                                    />
                                                                    <div>
                                                                        <h4 className={`text-sm font-bold text-foreground ${task.completed ? 'line-through opacity-60' : ''}`}>
                                                                            {task.title}
                                                                        </h4>
                                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                                                            <span className="flex items-center gap-1">
                                                                                <Clock size={11} /> {task.estimatedMinutes} daqiqa
                                                                            </span>
                                                                            {task.skill && (
                                                                                <span className="px-1.5 py-0.5 rounded bg-secondary text-[10px] uppercase font-bold text-foreground">{task.skill}</span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Direct navigation action button */}
                                                                <button
                                                                    onClick={() => navigate(task.route)}
                                                                    className="px-3.5 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-black rounded-xl transition-all flex items-center gap-1"
                                                                >
                                                                    <Play size={10} />
                                                                    <span>Boshlash</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Weekly completion assessment trigger */}
                                <div className="p-6 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="space-y-1 text-center sm:text-left">
                                        <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                                            Haftalik darslarni yakunladingizmi?
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            Haftalik tahlilni bajaring va keyingi haftaning shaxsiy rejasini generatsiya qiling.
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleEvaluateWeek}
                                        disabled={evaluating}
                                        className="px-5 py-2.5 bg-indigo-600 text-white font-black text-xs rounded-xl shadow-md hover:bg-indigo-700 transition-all flex items-center gap-1.5 shrink-0"
                                    >
                                        {evaluating ? (
                                            <>
                                                <Loader2 size={13} className="animate-spin" />
                                                <span>Tahlil qilinmoqda...</span>
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 size={13} />
                                                <span>Haftani Yakunlash</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-8 text-center glass-card border border-border rounded-3xl space-y-4">
                                <AlertTriangle className="mx-auto text-amber-500" size={32} />
                                <h3 className="text-base font-bold text-foreground">Haftalik reja topilmadi</h3>
                                <p className="text-xs text-muted-foreground">Tizimda xatolik yuz bergan ko'rinadi. Iltimos shaxsiy rejangizni qaytadan yarating.</p>
                                <button onClick={handleResetPlan} className="px-5 py-2 bg-primary text-primary-foreground rounded-xl font-bold text-xs">Qayta yaratish</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default PersonalPlanPage;
