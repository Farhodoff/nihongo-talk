import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, Target, Clock, ArrowRight, ArrowLeft, Check
} from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { supabase } from '../../lib/supabase';
import { toast } from '../../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface PersonalizedOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PersonalizedOnboardingModal: React.FC<PersonalizedOnboardingModalProps> = ({
    isOpen,
    onClose
}) => {
    const { user, updateSettings, subjects, addSubject, addFlashcardsBatch } = useStudyData();
    const navigate = useNavigate();

    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedLanguage, setSelectedLanguage] = useState<'ja' | 'en' | 'general'>('ja');
    const [selectedLevel, setSelectedLevel] = useState<string>('JLPT N3');
    const [selectedGoalMinutes, setSelectedGoalMinutes] = useState<number>(30);
    const [isFinalizing, setIsFinalizing] = useState(false);

    if (!isOpen) return null;

    const handleLanguageSelect = (lang: 'ja' | 'en' | 'general') => {
        setSelectedLanguage(lang);
        if (lang === 'ja') setSelectedLevel('JLPT N3');
        else if (lang === 'en') setSelectedLevel('IELTS 7.0');
        else setSelectedLevel('IT & Dasturlash');
        setStep(2);
    };

    const handleFinish = async () => {
        setIsFinalizing(true);
        try {
            // 1. Save settings
            await updateSettings({
                dailyStudyGoalMinutes: selectedGoalMinutes
            });

            // 2. Save target goal
            localStorage.setItem('study_planner_target_goal', `${selectedLevel} (${selectedLanguage.toUpperCase()})`);
            localStorage.setItem('study_planner_personalized_onboarded', 'true');

            if (user) {
                await supabase.auth.updateUser({
                    data: {
                        target_goal: selectedLevel,
                        study_language: selectedLanguage,
                        daily_minutes: selectedGoalMinutes
                    }
                });
            }

            // 3. Auto-seed starter subject and flashcards if user has 0 subjects
            if (subjects.length === 0) {
                if (selectedLanguage === 'ja') {
                    const newSub = await addSubject({
                        name: `${selectedLevel} Asosiy Lug'at`,
                        color: '#6366f1',
                        icon: '🎌',
                        schedule: [],
                        description: `${selectedLevel} darajasi uchun boshlang'ich so'zlar`
                    });
                    if (newSub && newSub.id) {
                        await addFlashcardsBatch([
                            { subjectId: newSub.id, front: '始める', back: 'boshlamoq (to start, begin)' },
                            { subjectId: newSub.id, front: '習慣', back: 'odat, anʼana (habit, custom)' },
                            { subjectId: newSub.id, front: '成長', back: "o'sish, rivojlanish (growth)" },
                            { subjectId: newSub.id, front: '成功', back: 'muvaffaqiyat (success)' },
                            { subjectId: newSub.id, front: '目標', back: 'maqsad (goal, objective)' },
                        ]);
                    }
                } else if (selectedLanguage === 'en') {
                    const newSub = await addSubject({
                        name: `${selectedLevel} High-Frequency Vocab`,
                        color: '#3b82f6',
                        icon: '🎓',
                        schedule: [],
                        description: `${selectedLevel} vocabulary set`
                    });
                    if (newSub && newSub.id) {
                        await addFlashcardsBatch([
                            { subjectId: newSub.id, front: 'Perseverance', back: "matonat, sabr-toqat (persistence in doing something)" },
                            { subjectId: newSub.id, front: 'Eloquent', back: "ravon, fasih gapiruvchi (fluent or persuasive in speaking)" },
                            { subjectId: newSub.id, front: 'Comprehend', back: "tushunmoq, anglamoq (to grasp mentally; understand)" },
                            { subjectId: newSub.id, front: 'Consistency', back: "davomiylik, muntazamlik (conformity in application)" },
                        ]);
                    }
                }
            }

            setStep(4);
        } catch (e) {
            console.error('Onboarding finish error:', e);
            toast({ title: 'Xatolik yuz berdi, lekin sozlamalar saqlandi' });
            setStep(4);
        } finally {
            setIsFinalizing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-lg bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8"
            >
                {/* Progress Indicators */}
                {step < 4 && (
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-2">
                            {[1, 2, 3].map((s) => (
                                <div 
                                    key={s}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        step === s 
                                            ? 'w-8 bg-primary shadow-xs' 
                                            : step > s 
                                            ? 'w-4 bg-primary/40' 
                                            : 'w-4 bg-muted'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                            {step === 1 && "1/3 • Yo'nalish"}
                            {step === 2 && "2/3 • Daraja & Maqsad"}
                            {step === 3 && "3/3 • Kunlik Reja"}
                        </span>
                    </div>
                )}

                {/* STEP 1: Choose Language / Focus */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-xs">
                                <Sparkles size={28} className="animate-pulse" />
                            </div>
                            <h2 className="text-2xl font-black text-foreground tracking-tight">
                                Qaysi yo'nalishni o'rganmoqchisiz?
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                60 soniyada o'zingizga moslashtirilgan o'quv rejasini yarating
                            </p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => handleLanguageSelect('ja')}
                                className="w-full p-4 rounded-2xl border-2 border-border hover:border-primary bg-background hover:bg-primary/5 text-left flex items-center gap-4 transition-all group"
                            >
                                <span className="text-3xl p-2 rounded-xl bg-muted/60 group-hover:bg-primary/10 transition-colors">🎌</span>
                                <div className="flex-1">
                                    <div className="font-extrabold text-sm text-foreground flex items-center justify-between">
                                        <span>Yapon Tili (JLPT)</span>
                                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-primary/10 text-primary">Tavsiya</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Kanji, So'z boyligi, Tinglab tushunish va N5-N1 testlari
                                    </p>
                                </div>
                                <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </button>

                            <button
                                onClick={() => handleLanguageSelect('en')}
                                className="w-full p-4 rounded-2xl border-2 border-border hover:border-blue-500 bg-background hover:bg-blue-500/5 text-left flex items-center gap-4 transition-all group"
                            >
                                <span className="text-3xl p-2 rounded-xl bg-muted/60 group-hover:bg-blue-500/10 transition-colors">🎓</span>
                                <div className="flex-1">
                                    <div className="font-extrabold text-sm text-foreground flex items-center justify-between">
                                        <span>Ingliz Tili (IELTS / General)</span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">Mashhur</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        IELTS Speaking, Writing baholash va Akademik lug'at
                                    </p>
                                </div>
                                <ArrowRight size={18} className="text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </button>

                            <button
                                onClick={() => handleLanguageSelect('general')}
                                className="w-full p-4 rounded-2xl border-2 border-border hover:border-emerald-500 bg-background hover:bg-emerald-500/5 text-left flex items-center gap-4 transition-all group"
                            >
                                <span className="text-3xl p-2 rounded-xl bg-muted/60 group-hover:bg-emerald-500/10 transition-colors">📚</span>
                                <div className="flex-1">
                                    <div className="font-extrabold text-sm text-foreground">
                                        Dasturlash & Umumiy Fanlar
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        IT atamalari, Universitet fanlari va Shaxsiy rejalar
                                    </p>
                                </div>
                                <ArrowRight size={18} className="text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: Choose Level / Goal */}
                {step === 2 && (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20 shadow-xs">
                                <Target size={28} />
                            </div>
                            <h2 className="text-2xl font-black text-foreground tracking-tight">
                                Qaysi darajaga erishmoqchisiz?
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Tizim ushbu darajaga mos lug'at va testlarni tayyorlaydi
                            </p>
                        </div>

                        <div className="space-y-2.5">
                            {selectedLanguage === 'ja' && (
                                [
                                    { level: 'JLPT N5', desc: "Boshlang'ich (Hiragana, Katakana & Oddiy jumlalar)" },
                                    { level: 'JLPT N4', desc: "Boshlang'ich-O'rta (Kundalik suhbat va asosiy Kanji)" },
                                    { level: 'JLPT N3', desc: "O'rta Daraja (Yaponiya hayoti va ishlash uchun)", tag: 'Tavsiya' },
                                    { level: 'JLPT N2', desc: "Yuqori Daraja (Biznes, universitet va erkin muloqot)" },
                                    { level: 'JLPT N1', desc: "Master Daraja (To'liq ona tili darajasida)" },
                                ].map((item) => (
                                    <button
                                        key={item.level}
                                        onClick={() => setSelectedLevel(item.level)}
                                        className={`w-full p-3.5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                                            selectedLevel === item.level
                                                ? 'border-primary bg-primary/10 text-foreground font-bold shadow-xs'
                                                : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div>
                                            <div className="text-sm font-extrabold text-foreground flex items-center gap-2">
                                                <span>{item.level}</span>
                                                {item.tag && (
                                                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-primary text-primary-foreground">
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                                        </div>
                                        {selectedLevel === item.level && (
                                            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                        )}
                                    </button>
                                ))
                            )}

                            {selectedLanguage === 'en' && (
                                [
                                    { level: 'IELTS 5.5 - 6.0', desc: "Foundation & General (Asosiy grammatika va so'zlar)" },
                                    { level: 'IELTS 6.5 - 7.0', desc: "Academic Target (Xorijiy universitetlar uchun)", tag: 'Tavsiya' },
                                    { level: 'IELTS 7.5 - 8.5', desc: "Advanced Mastery (To'liq erkin so'zlashuv va akademik esse)" },
                                ].map((item) => (
                                    <button
                                        key={item.level}
                                        onClick={() => setSelectedLevel(item.level)}
                                        className={`w-full p-3.5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                                            selectedLevel === item.level
                                                ? 'border-blue-500 bg-blue-500/10 text-foreground font-bold shadow-xs'
                                                : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div>
                                            <div className="text-sm font-extrabold text-foreground flex items-center gap-2">
                                                <span>{item.level}</span>
                                                {item.tag && (
                                                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-500 text-white">
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                                        </div>
                                        {selectedLevel === item.level && (
                                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                        )}
                                    </button>
                                ))
                            )}

                            {selectedLanguage === 'general' && (
                                [
                                    { level: 'IT & Dasturlash', desc: "Frontend, Backend, Algoritm va IT atamalari" },
                                    { level: 'Universitet & Fanlar', desc: "Aniq va gumanitar fanlar, imtihonlarga tayyorgarlik" },
                                ].map((item) => (
                                    <button
                                        key={item.level}
                                        onClick={() => setSelectedLevel(item.level)}
                                        className={`w-full p-3.5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                                            selectedLevel === item.level
                                                ? 'border-emerald-500 bg-emerald-500/10 text-foreground font-bold shadow-xs'
                                                : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div>
                                            <div className="text-sm font-extrabold text-foreground">{item.level}</div>
                                            <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                                        </div>
                                        {selectedLevel === item.level && (
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                        )}
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <button
                                onClick={() => setStep(1)}
                                className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Orqaga
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Davom etish
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: Choose Daily Time Intensity */}
                {step === 3 && (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 shadow-xs">
                                <Clock size={28} />
                            </div>
                            <h2 className="text-2xl font-black text-foreground tracking-tight">
                                Kuniga necha daqiqa ajratasiz?
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Kichik, lekin doimiy odat ulkan natijaga olib keladi (Kaizen falsafasi)
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { min: 15, title: "☕ 15 Daqiqa / Kun", badge: "Yengil & Doimiy", desc: "Kuniga 10-15 ta yangi so'z va 1 ta mikro-takrorlash" },
                                { min: 30, title: "🎯 30 Daqiqa / Kun", badge: "Tavsiya etiladi", desc: "Kuniga 20 ta so'z + 1 ta qisqa JLPT/IELTS audio testi", popular: true },
                                { min: 60, title: "🔥 60 Daqiqa / Kun", badge: "Super Fokus", desc: "Kuniga 40+ ta so'z, to'liq testlar va AI Speaking" },
                            ].map((opt) => (
                                <button
                                    key={opt.min}
                                    onClick={() => setSelectedGoalMinutes(opt.min)}
                                    className={`p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                                        selectedGoalMinutes === opt.min
                                            ? 'border-primary bg-primary/10 text-foreground font-bold shadow-xs'
                                            : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-extrabold text-sm text-foreground">{opt.title}</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                                                opt.popular ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                                            }`}>
                                                {opt.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{opt.desc}</p>
                                    </div>
                                    {selectedGoalMinutes === opt.min && (
                                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                                            <Check size={14} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <button
                                onClick={() => setStep(2)}
                                className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Orqaga
                            </button>
                            <button
                                onClick={handleFinish}
                                disabled={isFinalizing}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-black text-xs shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                {isFinalizing ? "Tayyorlanmoqda..." : "Rejani Yaratish 🚀"}
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 4: Celebration / Success */}
                {step === 4 && (
                    <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/25 border-4 border-background">
                            🎉
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                                Shaxsiy Rejangiz Tayyor!
                            </h2>
                            <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                                <strong>{selectedLevel}</strong> darajasi uchun kunlik <strong>{selectedGoalMinutes} daqiqalik</strong> o'quv rejasi va boshlang'ich kartochkalar kutubxonangizga joylandi.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-muted/40 border border-border text-left space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Tanlangan Yo'nalish:</span>
                                <strong className="text-foreground">{selectedLanguage === 'ja' ? '🎌 Yapon tili' : selectedLanguage === 'en' ? '🎓 Ingliz tili' : '📚 Umumiy'}</strong>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Maqsad Darajasi:</span>
                                <strong className="text-primary">{selectedLevel}</strong>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Kunlik Odatiy Vaqt:</span>
                                <strong className="text-foreground">{selectedGoalMinutes} daqiqa / kun</strong>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                onClose();
                                navigate('/dashboard');
                                toast({ title: "🚀 Darsingiz boshlandi! Omad tilaymiz!" });
                            }}
                            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <span>▶️ Bugungi 1-Darsni Boshlash</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};
