import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, Menu, Moon, Sun, X,
    Target, Map, Brain, Mic
} from 'lucide-react';
import { AppLogo } from '../components/AppLogo';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../context/LanguageContext';

/* ------------------------------------------------------------------ */
/*  Animated section wrapper                                          */
/* ------------------------------------------------------------------ */
const FadeIn: React.FC<{ children: React.ReactNode; className?: string; delay?: number; offsetY?: number; direction?: 'y' | 'x' }> = ({
    children,
    className = '',
    delay = 0,
    offsetY = 24,
    direction = 'y',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const initial = direction === 'y' ? { opacity: 0, y: offsetY } : { opacity: 0, x: offsetY };
    const animate = direction === 'y' ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? animate : initial}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ------------------------------------------------------------------ */
/*  Dashboard Preview Mockup                                          */
/* ------------------------------------------------------------------ */
const DashboardPreview: React.FC<{ t: (k: string) => string }> = ({ t }) => (
    <div className="relative w-full max-w-md mx-auto">
        {/* Glow behind */}
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/10 rounded-3xl blur-2xl -z-10" />

        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground ml-2">nihon-talk.vercel.app/jlpt</span>
            </div>

            {/* Dashboard content */}
            <div className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">{t('landing.dashToday')}</p>
                        <p className="text-sm font-bold text-foreground">{t('landing.dashRoadmap')}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-black text-primary">68%</p>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                    <FadeIn offsetY={10} delay={0.1}>
                        <div className="p-3 rounded-xl bg-muted/50 border border-border">
                            <p className="text-[10px] text-muted-foreground mb-1">{t('landing.dashVocab')}</p>
                            <p className="text-lg font-black text-foreground">15 <span className="text-xs font-normal text-muted-foreground">/ 15</span></p>
                        </div>
                    </FadeIn>
                    <FadeIn offsetY={10} delay={0.2}>
                        <div className="p-3 rounded-xl bg-muted/50 border border-border">
                            <p className="text-[10px] text-muted-foreground mb-1">{t('landing.dashGrammar')}</p>
                            <p className="text-lg font-black text-foreground">1 <span className="text-xs font-normal text-muted-foreground">/ 1</span></p>
                        </div>
                    </FadeIn>
                    <FadeIn offsetY={10} delay={0.3}>
                        <div className="p-3 rounded-xl bg-muted/50 border border-border">
                            <p className="text-[10px] text-muted-foreground mb-1">{t('landing.dashSpeaking')}</p>
                            <p className="text-lg font-black text-foreground">08:24</p>
                        </div>
                    </FadeIn>
                    <FadeIn offsetY={10} delay={0.4}>
                        <div className="p-3 rounded-xl bg-muted/50 border border-border">
                            <p className="text-[10px] text-muted-foreground mb-1">{t('landing.dashKanji')}</p>
                            <ruby className="text-lg font-black text-foreground">
                                <span>継続</span><rt className="text-[8px] text-primary font-semibold">けいぞく</rt>
                            </ruby>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </div>
);

/* ------------------------------------------------------------------ */
/*  Speaking Coach Mockup                                             */
/* ------------------------------------------------------------------ */
const SpeakingMockup: React.FC<{ t: (k: string) => string }> = ({ t }) => (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
        {/* Chat messages */}
        <div className="p-5 space-y-3">
            <FadeIn offsetY={10} delay={0} direction="x">
                <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold text-primary">AI</div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-muted text-sm text-foreground max-w-[85%]">
                    {t('landing.speakingAiMessage1')}
                </div>
            </div>
            </FadeIn>
                            {/* User message */}
            <FadeIn offsetY={10} delay={0.1} direction="x">
                            <div className="flex gap-2.5 justify-end">
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tr-sm bg-primary text-sm text-primary-foreground max-w-[85%]">
                    {t('landing.speakingUserMessage')}
                </div>
            </div>
</FadeIn>
            <FadeIn offsetY={10} delay={0.2} direction="x">
                <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold text-primary">AI</div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-muted text-sm text-foreground max-w-[85%]">
                    {t('landing.speakingAiMessage2')}
                </div>
            </div>
        </FadeIn>
        </div>

        {/* Score bars */}
        <div className="px-5 pb-5 grid grid-cols-2 gap-2.5">
            {[
                { label: t('landing.speakingFluency'), score: 82, color: 'bg-emerald-500' },
                { label: t('landing.speakingGrammar'), score: 76, color: 'bg-blue-500' },
                { label: t('landing.speakingVocabulary'), score: 84, color: 'bg-purple-500' },
                { label: t('landing.speakingPronunciation'), score: 79, color: 'bg-amber-500' },
            ].map(s => (
                <div key={s.label} className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground font-medium">{s.label}</span>
                        <span className="font-bold text-foreground">{s.score}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

/* ------------------------------------------------------------------ */
/*  Main Landing Page                                                 */
/* ------------------------------------------------------------------ */
const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { language, setLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('study_planner_theme');
            if (saved) return saved === 'dark';
            return document.documentElement.classList.contains('dark');
        }
        return true;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => {
            const next = !prev;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('study_planner_theme', next ? 'dark' : 'light');
            }
            if (typeof document !== 'undefined') {
                if (next) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
            return next;
        });
    };

    const toggleLang = () => {
        const next = language === 'uz' ? 'ja' : 'uz';
        setLanguage(next);
    };

    useSEO({
        title: t('landing.seoTitle'),
        description: t('landing.seoDescription'),
        canonical: '/',
        keywords: t('landing.seoKeywords')
    });

    const isJa = language === 'ja';
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { label: t('landing.navFeatures'), target: 'features' },
        { label: t('landing.navRoadmap'), target: 'roadmap' },
        { label: t('landing.navSpeaking'), target: 'speaking' },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-200">
            {/* ======== NAVBAR ======== */}
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Left: Logo */}
                    <AppLogo size="md" />

                    {/* Center: Nav links (desktop) */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(link => (
                            <button
                                key={link.target}
                                onClick={() => scrollTo(link.target)}
                                className="px-3.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/60"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-2">
                        {/* Language switch */}
                        <button
                            onClick={toggleLang}
                            className="px-2.5 py-1.5 text-xs font-bold rounded-lg border border-border hover:bg-muted transition-colors text-foreground flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                            title="Tilni almashtirish / 言語切替"
                            aria-label="Switch language"
                        >
                            <span>{isJa ? '🇺🇿' : '🇯🇵'}</span>
                            <span>{isJa ? 'Oʻzbekcha' : '日本語'}</span>
                        </button>

                        {/* Theme switch */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-foreground cursor-pointer shadow-sm active:scale-95"
                            title={isDark ? "Kunduzgi rejim" : "Tungi rejim"}
                            aria-label={isDark ? 'Light mode' : 'Dark mode'}
                        >
                            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
                        </button>

                        {/* Login (desktop) */}
                        <button
                            onClick={() => navigate('/login')}
                            className="hidden md:block px-3.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/60"
                        >
                            {t('landing.navLogin')}
                        </button>

                        {/* CTA (desktop) */}
                        <button
                            onClick={() => navigate('/register')}
                            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 hover:scale-[1.03] active:scale-95"
                        >
                            <span>{t('landing.navCta')}</span>
                            <ArrowRight size={15} />
                        </button>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map(link => (
                                <button
                                    key={link.target}
                                    onClick={() => scrollTo(link.target)}
                                    className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:bg-muted"
                                >
                                    {link.label}
                                </button>
                            ))}
                            
                            {/* Mobile Lang & Theme Row */}
                            <div className="flex items-center justify-between pt-2 pb-1 border-t border-border gap-2">
                                <button
                                    onClick={toggleLang}
                                    className="flex-1 px-3 py-2 text-xs font-bold rounded-lg border border-border bg-card hover:bg-muted transition-colors text-foreground flex items-center justify-center gap-1.5"
                                >
                                    <span>{isJa ? '🇺🇿' : '🇯🇵'}</span>
                                    <span>{isJa ? 'Oʻzbekcha' : '日本語'}</span>
                                </button>

                                <button
                                    onClick={toggleTheme}
                                    className="flex-1 px-3 py-2 text-xs font-bold rounded-lg border border-border bg-card hover:bg-muted transition-colors text-foreground flex items-center justify-center gap-1.5"
                                >
                                    {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-indigo-600" />}
                                    <span>{isDark ? 'Kunduzgi' : 'Tungi'}</span>
                                </button>
                            </div>

                            <hr className="border-border" />
                            <button
                                onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                                className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:bg-muted"
                            >
                                {t('landing.navLogin')}
                            </button>
                            <button
                                onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                                className="w-full px-4 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center gap-2"
                            >
                                {t('landing.navCta')} <ArrowRight size={15} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* ======== HERO ======== */}
            <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8">
                {/* Background accents */}
                <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl -z-10 float-glow" />
                <div className="absolute top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10 float-glow" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Eyebrow */}
                        <FadeIn offsetY={14} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                                                {t('landing.eyebrow')}
                                            </FadeIn>
                        

                        {/* Headline */}<FadeIn offsetY={22} delay={0.1} className={`text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-black tracking-tight ${isJa ? 'leading-[1.2]' : 'leading-[1.08]'}`}>
                            {t('landing.headline')}
                        </FadeIn>

                        {/* Description */}
                        <FadeIn offsetY={18} delay={0.2} className={`text-base sm:text-lg text-muted-foreground max-w-lg ${isJa ? 'leading-relaxed' : 'leading-relaxed'}`}>
                            {t('landing.description')}
                        </FadeIn>

                        {/* CTAs */}
                        <FadeIn offsetY={12} delay={0.4} className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-7 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
                            >
                                {t('landing.ctaPrimary')} <ArrowRight size={18} />
                            </button>
                            <button
                                onClick={() => scrollTo('features')}
                                className="px-7 py-3.5 text-base font-semibold text-foreground rounded-xl border border-border bg-card hover:bg-muted transition-all duration-200 hover:scale-[1.02] active:scale-95"
                            >
                                {t('landing.ctaSecondary')}
                            </button>
                        </FadeIn>
                        <FadeIn offsetY={12} delay={0.45} className="flex flex-wrap gap-3 pt-2">
                            {[t('landing.trustJlpt'), t('landing.trustSrs'), t('landing.trustSpeaking')].map(badge => (
                                <span key={badge} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-muted border border-border text-muted-foreground">
                                    {badge}
                                </span>
                            ))}
                        </FadeIn>
                    </div>

                    {/* Right column: Dashboard preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:pl-8"
                    >
                        <FadeIn offsetY={25} delay={0.35} direction="y">
                                                <DashboardPreview t={t} />
                                            </FadeIn>
                    </motion.div>
                </div>
            </section>

            {/* ======== FEATURES ======== */}
            <section id="features" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn className="text-center mb-14 space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                            {t('landing.featuresTitle')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: Target, title: t('landing.featureDiagTitle'), desc: t('landing.featureDiagDesc'), accent: 'text-rose-500 bg-rose-500/10' },
                            { icon: Map, title: t('landing.featurePlanTitle'), desc: t('landing.featurePlanDesc'), accent: 'text-blue-500 bg-blue-500/10' },
                            { icon: Brain, title: t('landing.featureSrsTitle'), desc: t('landing.featureSrsDesc'), accent: 'text-purple-500 bg-purple-500/10' },
                            { icon: Mic, title: t('landing.featureSpeakingTitle'), desc: t('landing.featureSpeakingDesc'), accent: 'text-emerald-500 bg-emerald-500/10' },
                        ].map((card, idx) => (
                            <FadeIn key={card.title} delay={idx * 0.1}>
                                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 space-y-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.accent}`}>
                                        <card.icon size={20} />
                                    </div>
                                    <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== 4-STEP FLOW ======== */}
            <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn className="text-center mb-14 space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                            {t('landing.stepsTitle')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { num: '01', icon: '🎯', title: t('landing.step1Title'), desc: t('landing.step1Desc') },
                            { num: '02', icon: '📊', title: t('landing.step2Title'), desc: t('landing.step2Desc') },
                            { num: '03', icon: '📋', title: t('landing.step3Title'), desc: t('landing.step3Desc') },
                            { num: '04', icon: '🎌', title: t('landing.step4Title'), desc: t('landing.step4Desc') },
                        ].map((step, idx) => (
                            <FadeIn offsetY={20} delay={idx * 0.07} direction="x">
                                <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl">{step.icon}</span>
                                        <span className="text-2xl font-black text-muted-foreground/20 font-mono">{step.num}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== JLPT ROADMAP ======== */}
            <section id="roadmap" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <FadeIn className="text-center mb-14 space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                            {t('landing.roadmapTitle')}
                        </h2>
                    </FadeIn>

                    <div className="flex items-center justify-between gap-0 overflow-x-auto pb-2">
                        {['N5', 'N4', 'N3', 'N2', 'N1'].map((level, idx) => {
                            const isCompleted = idx === 0;
                            const isActive = idx === 1;

                            return (
                                <FadeIn key={level} offsetY={30} delay={idx * 0.07} direction="y">
                                    <div className="flex flex-col items-center gap-2 shrink-0">
                                        <div
                                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-base sm:text-lg font-black border-2 transition-all ${
                                                isActive
                                                    ? 'bg-accent-red-dark border-accent-red-dark text-white shadow-lg shadow-accent-red-dark/25'
                                                    : isCompleted
                                                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                                                    : 'bg-muted border-border text-muted-foreground'
                                            }`}
                                        >
                                            {level}
                                        </div>
                                        <span className={`text-[10px] font-bold ${
                                            isActive ? 'text-accent-red-dark' : isCompleted ? 'text-emerald-500' : 'text-muted-foreground'
                                        }`}>
                                            {isCompleted ? '✓' : isActive ? (isJa ? '学習中' : 'Aktiv') : ''}
                                        </span>
                                    </div>
                                    {idx < 4 && (
                                        <div className={`flex-1 h-0.5 min-w-[24px] sm:min-w-[40px] mx-1 rounded-full ${
                                            isCompleted ? 'bg-emerald-500/40' : 'bg-border'
                                        }`} />
                                    )}
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ======== SPEAKING COACH ======== */}
            <section id="speaking" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/60">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left */}
                    <FadeIn className="space-y-6">
                        <FadeIn offsetY={12} delay={0.05} direction="x">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red-dark/10 text-accent-red-dark text-xs font-bold">
                            <Mic size={14} /> AI Speaking
                        </div>
                    </FadeIn>
                        <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-foreground ${isJa ? 'leading-[1.3]' : 'leading-tight'}`}>
                            {t('landing.speakingTitle')}
                        </h2>
                        <div className="space-y-3 pt-2">
                            {[t('landing.speakingFluency'), t('landing.speakingGrammar'), t('landing.speakingVocabulary'), t('landing.speakingPronunciation')].map(item => (
                                <div key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Right */}
                    <FadeIn delay={0.15}>
                        <SpeakingMockup t={t} />
                    </FadeIn>
                </div>
            </section>

            {/* ======== FINAL CTA ======== */}
            <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <FadeIn offsetY={25} delay={0.5} className="space-y-6">
                        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground ${isJa ? 'leading-[1.3]' : 'leading-tight'}`}>
                            {t('landing.finalCtaTitle')}
                        </h2>
                        <div className="pt-2">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2"
                            >
                                {t('landing.finalCtaButton')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ======== FOOTER ======== */}
            <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <AppLogo size="sm" />
                    <div className="text-center sm:text-right">
                        <p className="text-xs text-muted-foreground">{t('landing.footerCopy')}</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">{t('landing.footerSub')}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
