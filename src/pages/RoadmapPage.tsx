import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    CheckCircle2, 
    Lock, 
    Play, 
    AlertTriangle, 
    FastForward, 
    Trophy, 
    BookOpen, 
    Clock, 
    Compass,
    ArrowRight,
    X
} from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { LearningOrchestrator } from '../services/LearningOrchestrator';
import { RoadmapService } from '../services/RoadmapService';
import { LearningRoadmap, RoadmapLevelNode, RoadmapLessonNode } from '../types/curriculum';

const RoadmapPage: React.FC = () => {
    const { primaryLanguage, targetLevel, targetGoal, flashcards, user } = useStudyData();
    const { language } = useLanguage();
    const isUz = language !== 'en';

    const [roadmap, setRoadmap] = useState<LearningRoadmap | null>(null);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [lockedModalLesson, setLockedModalLesson] = useState<RoadmapLessonNode | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        LearningOrchestrator.getUserLearningState(user?.id, { forceLanguage: primaryLanguage, cachedFlashcards: flashcards })
            .then(state => {
                if (isMounted) {
                    const rm = RoadmapService.getLearningRoadmap(state);
                    setRoadmap(rm);
                    setSelectedLevel(rm.currentLevelCode);
                }
            })
            .catch(err => {
                console.warn('[RoadmapPage] Error loading roadmap:', err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [primaryLanguage, targetLevel, targetGoal, flashcards.length, user?.id]);

    if (loading || !roadmap) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
            </div>
        );
    }

    const activeLevelData: RoadmapLevelNode | undefined = roadmap.levels.find(l => l.code === selectedLevel) || roadmap.activeLevelNode || roadmap.levels[0];

    const getStatusBadge = (status: string, score?: number) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={13} />
                        {score ? `${score}%` : (isUz ? 'Tugatilgan' : 'Completed')}
                    </span>
                );
            case 'in_progress':
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 flex items-center gap-1 animate-pulse">
                        <Play size={13} />
                        {isUz ? 'Jarayonda' : 'In Progress'}
                    </span>
                );
            case 'current':
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                        <Compass size={13} />
                        {isUz ? 'Joriy Dars' : 'Current'}
                    </span>
                );
            case 'weak':
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 flex items-center gap-1">
                        <AlertTriangle size={13} />
                        {isUz ? 'Zaif Ko\'nikma' : 'Needs Practice'}
                    </span>
                );
            case 'skipped':
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-secondary text-muted-foreground border border-border flex items-center gap-1">
                        <FastForward size={13} />
                        {isUz ? 'O\'tkazilgan' : 'Skipped'}
                    </span>
                );
            case 'locked':
            default:
                return (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-secondary/50 text-muted-foreground border border-border/60 flex items-center gap-1">
                        <Lock size={13} />
                        {isUz ? 'Qulflangan' : 'Locked'}
                    </span>
                );
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* Header Hero Banner */}
            <div className="p-6 md:p-8 rounded-3xl glass-card border border-border relative overflow-hidden shadow-lg bg-gradient-to-r from-card via-card to-secondary/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-2xl">{roadmap.language === 'ja' ? '🇯🇵' : '🇬🇧'}</span>
                            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {roadmap.language === 'ja' ? 'Japanese JLPT Roadmap' : 'English CEFR & IELTS Roadmap'}
                            </span>
                            <span className="text-xs font-semibold text-muted-foreground">
                                • {roadmap.targetGoal}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                            {isUz ? "Shaxsiy O'quv Yo'l Xaritasi" : "Personalized Learning Roadmap"}
                        </h1>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {isUz 
                                ? `Hozirgi bosqichingiz: ${roadmap.currentLevelCode}. Maqsadingiz: ${roadmap.targetLevelCode}.` 
                                : `Current level: ${roadmap.currentLevelCode}. Target destination: ${roadmap.targetLevelCode}.`}
                        </p>
                        <div className="pt-1">
                            <Link
                                to="/diagnostic"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold hover:bg-amber-500/25 transition-all"
                            >
                                <span>🎯</span>
                                <span>{isUz ? "Diagnostik Test Topshirish" : "Take Placement Test"}</span>
                            </Link>
                        </div>
                    </div>

                    {/* Progress Badge */}
                    <div className="p-4 px-6 rounded-2xl bg-secondary/50 border border-border flex items-center gap-4 shrink-0">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <div className="text-xs font-medium text-muted-foreground">
                                {isUz ? "Umumiy O'quv Dasturi" : "Overall Curriculum"}
                            </div>
                            <div className="text-2xl font-black text-foreground">
                                {roadmap.overallProgressPercentage}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Milestones Timeline */}
            <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Compass size={16} />
                    {isUz ? "Bosqichlar (Levels)" : "Curriculum Milestones"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {roadmap.levels.map((lvl) => {
                        const isSelected = lvl.code === selectedLevel;
                        return (
                            <button
                                key={lvl.id}
                                onClick={() => setSelectedLevel(lvl.code)}
                                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                                    isSelected 
                                        ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]' 
                                        : 'glass-card border-border hover:border-primary/50 text-foreground'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-black">{lvl.code}</span>
                                    {lvl.status === 'completed' && <CheckCircle2 size={16} className={isSelected ? 'text-white' : 'text-emerald-500'} />}
                                    {lvl.status === 'current' && <Compass size={16} className={isSelected ? 'text-white animate-spin' : 'text-amber-500'} />}
                                    {lvl.status === 'locked' && <Lock size={14} className={isSelected ? 'text-white/60' : 'text-muted-foreground'} />}
                                </div>
                                <div>
                                    <div className="text-xs font-bold line-clamp-1 opacity-90">{lvl.title}</div>
                                    <div className="text-[11px] opacity-75">{lvl.progressPercentage}% complete</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Selected Level Deep View */}
            {activeLevelData && (
                <div className="p-6 md:p-8 rounded-3xl glass-card border border-border space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-black text-foreground">
                                    {activeLevelData.code} — {activeLevelData.title}
                                </span>
                                {getStatusBadge(activeLevelData.status)}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {activeLevelData.description}
                            </p>
                        </div>
                    </div>

                    {/* Active Units & Lessons Tree */}
                    <div className="space-y-6">
                        {activeLevelData.units.map((unit) => (
                            <div key={unit.id} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                        <BookOpen size={16} className="text-primary" />
                                        {unit.title}
                                    </h4>
                                    <span className="text-xs font-semibold text-muted-foreground">
                                        {unit.progressPercentage}%
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {unit.lessons.map((lesson) => {
                                        const isLocked = lesson.status === 'locked';
                                        return (
                                            <div
                                                key={lesson.id}
                                                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-4 ${
                                                    lesson.status === 'current' || lesson.status === 'in_progress'
                                                        ? 'border-primary bg-primary/5 shadow-sm'
                                                        : isLocked
                                                        ? 'border-border/40 bg-secondary/20 opacity-70'
                                                        : 'border-border glass-card hover:border-primary/40'
                                                }`}
                                            >
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                                                            {lesson.skill}
                                                        </span>
                                                        {getStatusBadge(lesson.status, lesson.score)}
                                                    </div>
                                                    <h5 className="text-sm font-bold text-foreground line-clamp-1">
                                                        {lesson.title}
                                                    </h5>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                        {lesson.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between pt-2 border-t border-border/40">
                                                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                                        <Clock size={12} /> ~{lesson.estimatedMinutes} daq
                                                    </span>

                                                    {isLocked ? (
                                                        <button
                                                            onClick={() => setLockedModalLesson(lesson)}
                                                            className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 p-1"
                                                        >
                                                            <Lock size={12} /> {isUz ? 'Qulflangan' : 'Locked'}
                                                        </button>
                                                    ) : lesson.isContentAvailable === false ? (
                                                        <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-secondary text-muted-foreground">
                                                            {isUz ? 'Tez orada' : 'Coming soon'}
                                                        </span>
                                                    ) : (
                                                        <Link
                                                            to={lesson.route}
                                                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                                                                lesson.status === 'current' || lesson.status === 'in_progress'
                                                                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm'
                                                                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                                                            }`}
                                                        >
                                                            <span>{lesson.status === 'completed' ? (isUz ? 'Qayta Ko\'rish' : 'Review') : (isUz ? 'Boshlash' : 'Start')}</span>
                                                            <ArrowRight size={12} />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Locked Lesson Explanation Modal */}
            {lockedModalLesson && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="p-6 rounded-3xl glass-card border border-border max-w-md w-full space-y-4 shadow-2xl animate-in zoom-in-95">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-amber-500">
                                <Lock size={20} />
                                <h3 className="text-base font-bold text-foreground">
                                    {isUz ? "Ushbu Dars Qulflangan" : "Lesson Locked"}
                                </h3>
                            </div>
                            <button 
                                onClick={() => setLockedModalLesson(null)}
                                className="p-1 rounded-lg hover:bg-secondary text-muted-foreground"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {lockedModalLesson.lockReason || (isUz 
                                ? "Ushbu darsni ochish uchun avval oldingi mavzular va testlarni muvaffaqiyatli yakunlashingiz kerak." 
                                : "You must complete prerequisite topics before accessing this lesson.")}
                        </p>

                        <button
                            onClick={() => setLockedModalLesson(null)}
                            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all"
                        >
                            {isUz ? "Tushundim" : "Got it"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoadmapPage;
