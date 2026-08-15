import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, BarChart3, CheckCircle2,
    Clock, Copy, GraduationCap, Moon, Sparkles,
    Sun, Users, Zap, Brain,
    Rocket, Shield, Play, Volume2, Award
} from 'lucide-react';
import { AppLogo } from '../components/AppLogo';
import { useSEO } from '../hooks/useSEO';

/* ------------------------------------------------------------------ */
/*  Animated section wrapper – fades in when scrolled into view        */
/* ------------------------------------------------------------------ */
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
    children,
    className = '',
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ------------------------------------------------------------------ */
/*  Interactive Live Mockup Component                                 */
/* ------------------------------------------------------------------ */
const LiveAppShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'jlpt' | 'ielts' | 'focus' | 'flashcards'>('jlpt');
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPlayingSound, setIsPlayingSound] = useState(false);

    return (
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/20 dark:border-white/10 bg-card/60 backdrop-blur-2xl shadow-2xl overflow-hidden p-4 sm:p-8">
            {/* Top Mockup Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 text-xs font-mono text-muted-foreground hidden sm:inline">
                        app.kaizen-ai.uz/dashboard
                    </span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1.5 p-1 bg-muted/80 rounded-2xl border border-border">
                    <button
                        onClick={() => setActiveTab('jlpt')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'jlpt'
                                ? 'bg-primary text-primary-foreground shadow-xs'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        🎌 Yapon Tili & JLPT
                    </button>
                    <button
                        onClick={() => setActiveTab('ielts')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'ielts'
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        🎓 IELTS & Writing
                    </button>
                    <button
                        onClick={() => setActiveTab('focus')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'focus'
                                ? 'bg-orange-500 text-white shadow-xs'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        ⏱️ Fokus Pomodoro
                    </button>
                    <button
                        onClick={() => setActiveTab('flashcards')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'flashcards'
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        🎴 SRS Flashcards
                    </button>
                </div>
            </div>

            {/* Tab Contents */}
            <div className="pt-6 min-h-[380px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeTab === 'jlpt' && (
                        <motion.div
                            key="jlpt"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                        >
                            <div className="md:col-span-6 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">
                                    <Sparkles size={14} /> JLPT N3 Smart Flashcard
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                                    Kanji, Furigana & Audio bir teginishda
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Yapon tili lug'atini SM-2 takrorlash algoritmi bilan o'rganing. Furigana va Romaji avtomatik ko'rsatiladi.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground pt-2">
                                    <span className="flex items-center gap-1.5 text-emerald-500">
                                        <CheckCircle2 size={16} /> 2,500+ N5-N1 So'zlar
                                    </span>
                                    <span className="flex items-center gap-1.5 text-indigo-500">
                                        <CheckCircle2 size={16} /> Ovozli Talaffuz
                                    </span>
                                </div>
                            </div>

                            {/* Interactive Card */}
                            <div className="md:col-span-6 flex justify-center">
                                <div 
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="w-full max-w-sm h-64 cursor-pointer rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-rose-500/10 border-2 border-indigo-500/30 p-6 flex flex-col justify-between shadow-xl hover:scale-102 transition-all relative overflow-hidden group"
                                >
                                    <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                                        <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-black">JLPT N3</span>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsPlayingSound(true);
                                                setTimeout(() => setIsPlayingSound(false), 1200);
                                            }}
                                            className="p-2 rounded-xl bg-muted/80 hover:bg-primary/20 text-primary transition-colors"
                                        >
                                            <Volume2 size={18} className={isPlayingSound ? "animate-ping" : ""} />
                                        </button>
                                    </div>

                                    <div className="text-center space-y-1">
                                        <ruby className="text-4xl sm:text-5xl font-black text-foreground">
                                            継続
                                            <rt className="text-sm font-semibold text-primary">けいぞく</rt>
                                        </ruby>
                                        <div className="text-xs text-muted-foreground font-mono">[keizoku]</div>
                                    </div>

                                    <div className="text-center">
                                        {isFlipped ? (
                                            <div className="animate-in fade-in zoom-in-95 duration-200">
                                                <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                                                    Davomiylik, to'xtovsiz harakat
                                                </div>
                                                <div className="text-xs text-muted-foreground mt-1 italic">
                                                    "継続は力なり" (Davomiylik — bu kuchdir)
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-xs font-bold text-primary flex items-center justify-center gap-1.5 group-hover:underline">
                                                <span>Tarjimani ko'rish uchun bosing</span>
                                                <ArrowRight size={14} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'ielts' && (
                        <motion.div
                            key="ielts"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                        >
                            <div className="md:col-span-6 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs">
                                    <GraduationCap size={14} /> IELTS AI Examiner
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                                    Writing va Speaking uchun 8.0+ Band Tahlili
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Esseingizni yuklang va 5 soniyada rasmiy 4 ta IELTS mezoni bo'yicha batafsil fikr-mulohaza oling.
                                </p>
                                <div className="space-y-2 pt-2">
                                    <div className="flex items-center justify-between text-xs font-bold">
                                        <span>Task Achievement & Coherence</span>
                                        <span className="text-emerald-500">Band 8.0</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-6 p-6 rounded-3xl bg-card border border-border shadow-xl space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-extrabold uppercase text-muted-foreground">AI Baholash Natijasi</span>
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black text-sm">
                                        Overall: 7.5
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-muted/50 text-xs text-foreground space-y-1.5 border border-border">
                                    <div className="font-bold text-primary flex items-center gap-1.5">
                                        <Sparkles size={14} /> Kengaytirilgan So'z Boyligi (Lexical Resource):
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        "substantial increase" va "dramatic surge" iboralaridan foydalanilgani balingizni 7.5 dan 8.0 ga ko'taradi.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold pt-1">
                                    <span>Grammar Accuracy: 96%</span>
                                    <span className="text-blue-500 font-bold">Speaking Mock Tayyor 🎙️</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'focus' && (
                        <motion.div
                            key="focus"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                        >
                            <div className="md:col-span-6 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs">
                                    <Clock size={14} /> Pomodoro & Lo-Fi Studio
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                                    Chalg'imasdan dars qilish va Ovoz Mikseri
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Yomg'ir, o'rmon, qahvaxona va Lo-Fi ohanglari bilan to'liq diqqatni jamlang. Har bir dars uchun XP va streak oling.
                                </p>
                            </div>

                            <div className="md:col-span-6 flex justify-center">
                                <div className="w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br from-orange-500/10 via-card to-amber-500/10 border border-orange-500/30 shadow-2xl text-center space-y-4">
                                    <span className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                                        🔥 25 Daqiqa Fokus Sessiyasi
                                    </span>
                                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-foreground font-mono">
                                        24:59
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground">
                                        <span>🎧 Yomg'ir ovozi faol</span>
                                        <span>•</span>
                                        <span>+50 XP mukofot</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'flashcards' && (
                        <motion.div
                            key="flashcards"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                        >
                            <div className="md:col-span-6 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                                    <Brain size={14} /> Interval Takrorlash (SRS)
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                                    Unutish egri chizig'ini yenguvchi xotira
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    SM-2 algoritmi so'zni aynan siz unutish arafasida bo'lganingizda qayta takrorlatadi. Natija — 3 barobar mustahkam xotira!
                                </p>
                            </div>

                            <div className="md:col-span-6 p-6 rounded-3xl bg-card border border-border shadow-xl space-y-3">
                                <div className="flex items-center justify-between text-xs font-bold">
                                    <span className="text-foreground font-extrabold">Bugungi Takrorlash: 18 ta so'z</span>
                                    <span className="text-emerald-500">98% Eslab qolish</span>
                                </div>
                                <div className="space-y-2">
                                    {['Perseverance — Matonat', 'Kanji 成長 — Rivojlanish', 'Eloquent — Notiq, ravon'].map((w, idx) => (
                                        <div key={idx} className="p-3 rounded-xl bg-muted/50 border border-border flex items-center justify-between text-xs font-semibold">
                                            <span>{w}</span>
                                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold">Ertaga</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/*  Main Landing Page Component                                       */
/* ------------------------------------------------------------------ */
const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    useSEO({
        title: "Kaizen AI — Aqlli O'quv Platformasi | IELTS & JLPT",
        description: "IELTS Band 7+ va JLPT N3 ga 60 kunda tayyorlaning. AI Speaking Examiner, Writing Evaluator, Anki SM-2 Fleshkartalar va shaxsiy o'quv rejalashtiruvchi.",
        canonical: "/",
        keywords: "Kaizen AI, IELTS O'zbekiston, JLPT tayyorgarlik, Anki SM-2, fleshkartalar, AI Speaking Coach, IELTS Mock Exam, Pomodoro timer"
    });

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20 selection:text-primary">
            {/* ======== NAVBAR ======== */}
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <AppLogo size="md" />

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            aria-label="Rejim o'zgartirish"
                        >
                            {isDark ? <Sun size={19} /> : <Moon size={19} />}
                        </button>

                        <button
                            onClick={() => navigate('/auth')}
                            className="px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-colors rounded-xl hover:bg-muted"
                        >
                            Kirish
                        </button>

                        <button
                            onClick={() => navigate('/auth')}
                            className="px-5 py-2.5 text-sm font-black text-white rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span>Boshlash</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ======== HERO SECTION ======== */}
            <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background Glows */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-indigo-500/15 rounded-full blur-3xl -z-10" />

                <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-bold"
                    >
                        <Sparkles size={16} className="animate-spin text-primary" />
                        <span>🚀 60 Soniyada Shaxsiy O'quv Rejangizni Yarating</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]"
                    >
                        Yapon va Ingliz tilini <br />
                        <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            AI Ustoz bilan 3x Tezroq
                        </span>{' '}
                        O'rganing
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        <strong>JLPT (N5-N1)</strong>, <strong>IELTS (8.0+)</strong>, Spaced Repetition fleshkartalar, jonli Speaking Coach va Lo-Fi Fokus taymer — barchasi bitta ixcham platformada.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <button
                            onClick={() => navigate('/auth')}
                            className="w-full sm:w-auto px-8 py-4 text-base font-black text-white rounded-2xl bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
                        >
                            <Zap size={20} />
                            <span>60 Soniyada Bepul Boshlash</span>
                            <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => {
                                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-foreground rounded-2xl border border-border bg-card/80 hover:bg-muted transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Play size={18} className="text-primary fill-primary" />
                            <span>Imkoniyatlarni Ko'rish</span>
                        </button>
                    </motion.div>

                    {/* Social Proof Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-semibold"
                    >
                        <div className="flex items-center gap-1.5">
                            <span className="text-amber-500 font-black">★★★★★</span>
                            <span>4.9/5 O'quvchilar bahosi</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Shield size={15} className="text-emerald-500" />
                            <span>100% Bepul Boshlash</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Award size={15} className="text-indigo-500" />
                            <span>JLPT & IELTS Rasmiy formatida</span>
                        </div>
                    </motion.div>
                </div>

                {/* Live Showcase */}
                <div id="demo" className="w-full mt-16">
                    <LiveAppShowcase />
                </div>
            </section>

            {/* ======== 3-STEP EASY ONBOARDING SECTION ======== */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="text-center mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                            <Rocket size={16} /> Tez & Sodda
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
                            Qanday qilib 60 soniyada boshlaysiz?
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
                            Murakkab sozlamalarsiz, 3 ta oddiy savol orqali shaxsiy o'quv yo'lingizni tanlang:
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                icon: '🎌',
                                title: "Til & Yo'nalishni Tanlang",
                                desc: "Yapon tili (JLPT), Ingliz tili (IELTS) yoki Dasturlash fanlaridan birini belgilang."
                            },
                            {
                                step: '02',
                                icon: '🎯',
                                title: 'Darajangizni Belgilang',
                                desc: "Boshlang'ich (N5/5.5) dan tortib, Master (N1/8.0+) gacha bo'lgan maqsadni tanlang."
                            },
                            {
                                step: '03',
                                icon: '🚀',
                                title: 'Kunlik Rejani Boshlang',
                                desc: "Tizim darhol sizga mos dars to'plamini kutubxonangizga yuklaydi va dars boshlanadi."
                            }
                        ].map((s, idx) => (
                            <AnimatedSection key={s.step} delay={idx * 0.15}>
                                <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-4xl p-3 rounded-2xl bg-muted/60">{s.icon}</span>
                                        <span className="text-3xl font-black text-muted-foreground/30 font-mono">{s.step}</span>
                                    </div>
                                    <h3 className="text-lg font-black text-foreground">{s.title}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== CORE MODULES BENTO GRID ======== */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-16 space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                        <Brain size={16} /> Barcha Qurollar
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
                        Barcha Zaruriy Qurollar Bitta Joyda
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Sparkles,
                            title: 'JLPT N5-N1 Hub 🎌',
                            desc: 'Kanji, Grammatika testlari, Listening Mock va Furigana o\'qish qurollari.',
                            badge: 'Mashhur',
                            color: 'from-rose-500 to-pink-600'
                        },
                        {
                            icon: GraduationCap,
                            title: 'IELTS AI Examiner 🎓',
                            desc: 'Writing Task 1 & 2 baholovchi, Speaking Mock imtihon va Akademik lug\'at.',
                            badge: 'AI Powered',
                            color: 'from-blue-500 to-indigo-600'
                        },
                        {
                            icon: Copy,
                            title: 'Spaced Repetition Fleshkartalar 🎴',
                            desc: 'SM-2 algoritmi asosida tuzilgan aqlli kartochkalar va tayyor albomlar.',
                            badge: 'Samarali',
                            color: 'from-purple-500 to-indigo-600'
                        },
                        {
                            icon: Clock,
                            title: 'Fokus Taymer & Pomodoro ⏱️',
                            desc: 'Lo-Fi sokin musiqa mikseri va chalg\'imasdan ishlash taymeri.',
                            badge: 'Lo-Fi Audio',
                            color: 'from-orange-500 to-amber-600'
                        },
                        {
                            icon: Users,
                            title: 'Hamjamiyat & Study Room 👥',
                            desc: 'Jonli ovozli/video xonalar, ekran ulashish va do\'stlar bilan o\'qish.',
                            badge: 'Jonli',
                            color: 'from-emerald-500 to-teal-600'
                        },
                        {
                            icon: BarChart3,
                            title: 'Statistika & O\'quv Tahlili 📊',
                            desc: 'Kunlik progress, streak grafigi, XP reytingi va qobiliyat xaritasi.',
                            badge: 'Gamifikatsiya',
                            color: 'from-cyan-500 to-blue-600'
                        },
                    ].map((card, idx) => (
                        <AnimatedSection key={card.title} delay={idx * 0.1}>
                            <div className="h-full p-6 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md`}>
                                        <card.icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-muted text-foreground border border-border">
                                        {card.badge}
                                    </span>
                                </div>
                                <h3 className="text-base font-extrabold text-foreground">{card.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ======== FINAL CTA SECTION ======== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                <AnimatedSection className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-primary via-indigo-600 to-purple-600 text-white shadow-2xl space-y-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white_0%,transparent_60%)] opacity-15" />

                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight relative z-10">
                        O'qishingizda bugun yangi bosqichga chiqing!
                    </h2>
                    <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed relative z-10">
                        Bir necha daqiqa ichida o'z yo'nalishingizni belgilang va Kaizen falsafasi bilan har kuni 1% yaxshiroq bo'ling.
                    </p>

                    <div className="pt-4 relative z-10">
                        <button
                            onClick={() => navigate('/auth')}
                            className="px-10 py-4 rounded-2xl bg-white text-indigo-700 font-black text-base shadow-xl hover:bg-white/95 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                        >
                            <span>🚀 Hoziroq Bepul Boshlash</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </AnimatedSection>
            </section>

            {/* ======== FOOTER ======== */}
            <footer className="border-t border-border bg-card/50 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <AppLogo size="sm" />
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Kaizen AI Study Planner. Barcha huquqlar himoyalangan.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                        <button onClick={() => navigate('/auth')} className="hover:text-primary transition-colors">
                            Kirish
                        </button>
                        <span>•</span>
                        <button onClick={() => navigate('/auth')} className="hover:text-primary transition-colors">
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
