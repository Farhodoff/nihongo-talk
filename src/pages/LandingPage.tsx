import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, BarChart3, Bot, Calendar, CheckCircle2,
    Clock, Copy, FileText, GraduationCap, Mic, Moon, Sparkles,
    Sun, Target, Users, Zap, ChevronRight, Globe, Brain,
    Rocket, Star, Shield, BookMarked
} from 'lucide-react';
import { AppLogo } from '../components/AppLogo';

/* ------------------------------------------------------------------ */
/*  Animated section wrapper – fades in when scrolled into view        */
/* ------------------------------------------------------------------ */
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
    children,
    className = '',
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ------------------------------------------------------------------ */
/*  Feature card data                                                   */
/* ------------------------------------------------------------------ */
interface Feature {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    gradient: string;
    iconColor: string;
}

const features: Feature[] = [
    {
        icon: BarChart3,
        title: 'Dashboard & Statistika',
        description: "Kunlik progress, vazifalar holati va AI aqlli tahlil paneli bilan o'quv samarangizni kuzating.",
        gradient: 'from-blue-500/20 to-cyan-500/20',
        iconColor: 'text-blue-500',
    },
    {
        icon: GraduationCap,
        title: 'IELTS Hub',
        description: "Writing baholash, Speaking Mock imtihon, Reading & Listening mashqlari — barchasi AI yordamida.",
        gradient: 'from-emerald-500/20 to-teal-500/20',
        iconColor: 'text-emerald-500',
    },
    {
        icon: Globe,
        title: 'JLPT Hub',
        description: "N5 dan N1 gacha — Grammar Quiz, Mock Exam, Listening, Reading va Writing mashqlari.",
        gradient: 'from-rose-500/20 to-pink-500/20',
        iconColor: 'text-rose-500',
    },
    {
        icon: Mic,
        title: 'AI Speaking Coach',
        description: "Sun'iy intellekt bilan jonli suhbat — talaffuz va grammatikangizni real vaqtda yaxshilang.",
        gradient: 'from-violet-500/20 to-purple-500/20',
        iconColor: 'text-violet-500',
    },
    {
        icon: Calendar,
        title: 'Kalendar & Vazifalar',
        description: "Darslar, deadlinelar va vazifalarni rejalashtiring. Hech narsa esdan chiqmaydi.",
        gradient: 'from-orange-500/20 to-amber-500/20',
        iconColor: 'text-orange-500',
    },
    {
        icon: Clock,
        title: 'Fokus Timer',
        description: "Pomodoro texnikasi bilan diqqatni jamla. Mini-timer har doim ko'rinib turadi.",
        gradient: 'from-red-500/20 to-rose-500/20',
        iconColor: 'text-red-500',
    },
    {
        icon: FileText,
        title: 'Qaydlar & Konspektlar',
        description: "Boy matn muharriri bilan dars qaydlarini yarating, tashkil qiling va tez toping.",
        gradient: 'from-sky-500/20 to-blue-500/20',
        iconColor: 'text-sky-500',
    },
    {
        icon: Copy,
        title: 'Fleshkartalar',
        description: "SM-2 Spaced Repetition algoritmi bilan eslab qolishni 3 barobar oshiring.",
        gradient: 'from-indigo-500/20 to-violet-500/20',
        iconColor: 'text-indigo-500',
    },
    {
        icon: BookMarked,
        title: "Aqlli Lug'at",
        description: "Akademik so'z boyligini kengaytiring — kontekstli misollar va mashqlar bilan.",
        gradient: 'from-teal-500/20 to-emerald-500/20',
        iconColor: 'text-teal-500',
    },
    {
        icon: Bot,
        title: 'AI Yordamchi',
        description: "Shaxsiy AI tyutor — savollaringizga javob beradi, tushuntiradi va yo'l ko'rsatadi.",
        gradient: 'from-purple-500/20 to-fuchsia-500/20',
        iconColor: 'text-purple-500',
    },
    {
        icon: Users,
        title: 'Jamoa & Study Room',
        description: "Virtual xonalarda birga o'qing, do'stlar bilan motivatsiyani oshiring.",
        gradient: 'from-cyan-500/20 to-sky-500/20',
        iconColor: 'text-cyan-500',
    },
    {
        icon: FileText,
        title: 'CV Creator',
        description: "Professional rezyume yarating — tayyor shablonlar va AI tavsiyalari bilan.",
        gradient: 'from-amber-500/20 to-yellow-500/20',
        iconColor: 'text-amber-500',
    },
];

/* ------------------------------------------------------------------ */
/*  How-it-works step data                                              */
/* ------------------------------------------------------------------ */
const steps = [
    {
        number: '01',
        icon: Rocket,
        title: "Ro'yxatdan o'ting",
        description: "Bir daqiqada bepul akkaunt oching va barcha imkoniyatlardan foydalaning.",
        color: 'from-indigo-500 to-purple-600',
    },
    {
        number: '02',
        icon: Target,
        title: 'Rejangizni tuzing',
        description: "Fanlar, maqsadlar va kunlik vazifalarni belgilang. AI sizga optimal reja tuzib beradi.",
        color: 'from-purple-500 to-pink-600',
    },
    {
        number: '03',
        icon: Star,
        title: 'Natijaga erishing',
        description: "Har kuni oz-ozdan rivojlaning. Statistikangiz sizni rag'batlantiradi.",
        color: 'from-pink-500 to-rose-600',
    },
];

/* ------------------------------------------------------------------ */
/*  Stats data                                                          */
/* ------------------------------------------------------------------ */
const stats = [
    { value: '15+', label: "O'quv qurollari" },
    { value: 'AI', label: 'Aqlli yordamchi' },
    { value: '24/7', label: 'Doim tayyor' },
    { value: '100%', label: 'Bepul boshlash' },
];

/* ------------------------------------------------------------------ */
/*  Landing Page Component                                              */
/* ------------------------------------------------------------------ */
const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const [isDark, setIsDark] = React.useState(() => {
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
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
            {/* ======== NAVBAR ======== */}
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <AppLogo size="md" />

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            aria-label="Rejim o'zgartirish"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => navigate('/auth')}
                            className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors rounded-xl hover:bg-muted"
                        >
                            Kirish
                        </button>

                        <button
                            onClick={() => navigate('/auth')}
                            className="px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Boshlash
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ======== HERO SECTION ======== */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

                {/* Floating blobs */}
                <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        AI bilan quvvatlangan o'quv platformasi
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6"
                    >
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            O'qishni
                        </span>{' '}
                        osonlashtiring,{' '}
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                            natijani
                        </span>{' '}
                        ko'paytiring
                    </motion.h1>

                    {/* Sub-heading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        IELTS, JLPT va umumiy fanlar uchun AI yordamchi, fokus timer, fleshkartalar, 
                        statistika va yana 15+ qurol — barchasi bir joyda.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => navigate('/auth')}
                            className="group relative px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <Zap size={20} />
                            Bepul boshlash
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => {
                                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 text-base font-semibold text-foreground rounded-2xl border border-border hover:bg-muted transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            Ko'proq bilish
                            <ChevronRight size={18} />
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ======== FEATURES SECTION ======== */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

                <div className="max-w-7xl mx-auto relative">
                    <AnimatedSection className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
                            <Brain size={16} />
                            Barcha imkoniyatlar
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                            Nima qila{' '}
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                olasiz?
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Bir platformada barcha kerakli o'quv qurollari — IELTS va JLPT imtihonlaridan tortib, kundalik o'qish rejasigacha.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {features.map((feature, index) => (
                            <AnimatedSection key={feature.title} delay={index * 0.05}>
                                <div className="group relative h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-default">
                                    {/* Gradient background on hover */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                                        >
                                            <feature.icon size={24} className={feature.iconColor} strokeWidth={2} />
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-foreground transition-colors">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== HOW IT WORKS ======== */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

                <div className="max-w-5xl mx-auto relative">
                    <AnimatedSection className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
                            <Rocket size={16} />
                            Oson boshlang
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                            Qanday{' '}
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                ishlaydi?
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Uch oddiy qadamda o'quv rejangizni tuzing va natijaga erishing.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <AnimatedSection key={step.number} delay={index * 0.15}>
                                <div className="relative text-center group">
                                    {/* Connector line (not on last) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
                                    )}

                                    {/* Step number circle */}
                                    <div className="relative inline-flex mb-6">
                                        <div
                                            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                                        >
                                            <step.icon size={36} className="text-white" strokeWidth={2} />
                                        </div>

                                        {/* Number badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center text-xs font-black text-foreground shadow">
                                            {step.number}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== TRUST / WHY US SECTION ======== */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500" />
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                                    backgroundSize: '30px 30px',
                                }}
                            />

                            <div className="relative z-10 p-10 sm:p-16 text-center text-white">
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    Nima uchun Kaizen AI?
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                                    {[
                                        {
                                            icon: Brain,
                                            title: 'AI quvvatli',
                                            desc: "Sun'iy intellekt sizga moslashtirilgan tavsiyalar va mashqlar beradi.",
                                        },
                                        {
                                            icon: Shield,
                                            title: "Barchasi bir joyda",
                                            desc: "15+ o'quv qurolini alohida-alohida izlash shart emas — barchasi shu yerda.",
                                        },
                                        {
                                            icon: Zap,
                                            title: 'Tez va qulay',
                                            desc: "Mobil va desktop — istalgan qurilmadan foydalaning, offlayda ham ishlaydi.",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                                                <item.icon size={28} className="text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                            <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ======== FINAL CTA ======== */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />

                <AnimatedSection className="max-w-3xl mx-auto text-center relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        <CheckCircle2 size={16} />
                        Bepul boshlash mumkin
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
                        Hoziroq{' '}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            boshlang!
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                        Minglab talabalar allaqachon Kaizen AI bilan o'qishmoqda. Siz ham jamoaga qo'shiling!
                    </p>

                    <button
                        onClick={() => navigate('/auth')}
                        className="group relative px-10 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3"
                    >
                        <Sparkles size={22} className="animate-pulse" />
                        Bepul ro'yxatdan o'tish
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </AnimatedSection>
            </section>

            {/* ======== FOOTER ======== */}
            <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <AppLogo size="sm" />
                        </div>

                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Kaizen AI. Barcha huquqlar himoyalangan.
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/auth')}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                Kirish
                            </button>
                            <span className="text-border">|</span>
                            <button
                                onClick={() => navigate('/auth')}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                Ro'yxatdan o'tish
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
