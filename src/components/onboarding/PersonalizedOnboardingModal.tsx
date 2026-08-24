import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, Target, Clock, ArrowRight, ArrowLeft, X
} from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { isSuperAdmin } from '../../utils/admin';

interface PersonalizedOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PersonalizedOnboardingModal: React.FC<PersonalizedOnboardingModalProps> = ({
    isOpen,
    onClose
}) => {
    const { user, updateSettings, subjects, addSubject, addFlashcardsBatch, setPrimaryFocus } = useStudyData();
    const navigate = useNavigate();
    const isSuper = isSuperAdmin(user?.email);

    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedLanguage, setSelectedLanguage] = useState<'ja' | 'en'>('ja');
    const [selectedLevel, setSelectedLevel] = useState<string>('N3');
    const [selectedGoal, setSelectedGoal] = useState<string>('🎯 JLPT Imtihoni (N5-N1)');
    const [selectedGoalMinutes, setSelectedGoalMinutes] = useState<number>(30);
    const [isFinalizing, setIsFinalizing] = useState(false);

    if (!isOpen) return null;

    const handleDismiss = () => {
        localStorage.setItem('study_planner_personalized_onboarded', 'true');
        onClose();
    };

    const handleLanguageSelect = (lang: 'ja' | 'en') => {
        setSelectedLanguage(lang);
        if (lang === 'ja') {
            setSelectedLevel('N3');
            setSelectedGoal('🎯 JLPT Imtihoni (N5-N1)');
        } else {
            setSelectedLevel('B2');
            setSelectedGoal('🎯 IELTS Imtihoni (Band 7+)');
        }
        setStep(2);
    };

    const handleFinish = async () => {
        setIsFinalizing(true);
        try {
            // 1. Save settings
            await updateSettings({
                dailyStudyGoalMinutes: selectedGoalMinutes
            });

            // 2. Save primary focus through unified context & Supabase
            await setPrimaryFocus(selectedLanguage, selectedLevel, `${selectedGoal} (${selectedLevel})`);

            // 3. Auto-seed starter subject and flashcards if user has 0 subjects
            if (subjects.length === 0) {
                if (selectedLanguage === 'ja') {
                    const newSub = await addSubject({
                        name: `JLPT ${selectedLevel} Asosiy Lug'at`,
                        color: '#f43f5e',
                        icon: '🎌',
                        schedule: [],
                        description: `JLPT ${selectedLevel} darajasi uchun boshlang'ich so'zlar`
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
                        name: `IELTS (${selectedLevel}) High-Frequency Vocab`,
                        color: '#6366f1',
                        icon: '🎓',
                        schedule: [],
                        description: `${selectedLevel} vocabulary set for IELTS & Academic English`
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
                {/* Top Header with Close Button */}
                <div className="flex items-center justify-between mb-4">
                    {step < 4 ? (
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
                            <span className="ml-2 text-xs font-black uppercase tracking-wider text-muted-foreground">
                                {step === 1 && "1/3 • Yo'nalish"}
                                {step === 2 && "2/3 • Daraja"}
                                {step === 3 && "3/3 • Reja"}
                            </span>
                        </div>
                    ) : <div />}

                    <button
                        onClick={handleDismiss}
                        className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Yopish"
                    >
                        <X size={18} />
                    </button>
                </div>

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

                        <div className="grid grid-cols-1 gap-3.5">
                            {isSuper && (
                                <button
                                    onClick={() => handleLanguageSelect('en')}
                                    className="w-full p-5 rounded-2xl border-2 border-border hover:border-indigo-500 bg-background hover:bg-indigo-500/5 text-left flex items-center gap-4 transition-all group shadow-sm hover:shadow-md"
                                >
                                    <span className="text-4xl p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">🇬🇧</span>
                                    <div className="flex-1">
                                        <div className="font-extrabold text-base text-foreground flex items-center justify-between">
                                            <span>Ingliz Tili (IELTS Track)</span>
                                            <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">Super Admin Preview</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                            IELTS Examiner Speaking, Writing baholash, Reading/Listening testlari va Anki lug'at
                                        </p>
                                    </div>
                                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                </button>
                            )}

                            <button
                                onClick={() => handleLanguageSelect('ja')}
                                className="w-full p-5 rounded-2xl border-2 border-rose-500/80 hover:border-rose-500 bg-rose-950/10 hover:bg-rose-500/10 text-left flex items-center gap-4 transition-all group shadow-sm hover:shadow-md"
                            >
                                <span className="text-4xl p-2.5 rounded-2xl bg-rose-500/10 text-rose-400 group-hover:scale-105 transition-transform">🇯🇵</span>
                                <div className="flex-1">
                                    <div className="font-extrabold text-base text-foreground flex items-center justify-between">
                                        <span>Yapon Tili (JLPT Track)</span>
                                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">★ ASOSIY FOKUS • N5 – N1</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                        Kanji eslash, Grammatika testi, AI Yaponcha suhbat senariylari va Minna no Nihongo
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-muted-foreground group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: Choose Current / Target Level */}
                {step === 2 && (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20 shadow-xs">
                                <Target size={28} />
                            </div>
                            <h2 className="text-2xl font-black text-foreground tracking-tight">
                                Hozirgi yoki maqsad darajangiz qanday?
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Tizim aynan ushbu darajaga mos lug'at, testlar va o'quv rejasini tayyorlaydi
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                            {selectedLanguage === 'ja' && (
                                [
                                    { level: 'Beginner', title: '🌱 Boshlang\'ich (N5)', desc: "Hiragana, Katakana & asosiy iboralar" },
                                    { level: 'N4', title: '🎌 JLPT N4', desc: "Kundalik suhbat va 300 ta Kanji" },
                                    { level: 'N3', title: '🎌 JLPT N3', desc: "O'rta daraja, ishlash & 650 Kanji", tag: 'Tavsiya' },
                                    { level: 'N2', title: '🎌 JLPT N2', desc: "Biznes & Universitet darajasi" },
                                    { level: 'N1', title: '🎌 JLPT N1', desc: "Ona tili darajasida erkin" },
                                ].map((item) => (
                                    <button
                                        key={item.level}
                                        onClick={() => setSelectedLevel(item.level)}
                                        className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                                            selectedLevel === item.level
                                                ? 'border-rose-500 bg-rose-500/10 text-foreground font-bold shadow-xs'
                                                : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-sm font-extrabold text-foreground">{item.title}</span>
                                            {item.tag && (
                                                <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-rose-500 text-white">
                                                    {item.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[11px] text-muted-foreground mt-1">{item.desc}</div>
                                    </button>
                                ))
                            )}

                            {selectedLanguage === 'en' && (
                                [
                                    { level: 'A1-A2', title: '🌱 Beginner (A1-A2)', desc: "Asosiy grammatika & tayanch so'zlar" },
                                    { level: 'B1', title: '🎓 Intermediate (B1)', desc: "IELTS 4.5 - 5.5 bazasi" },
                                    { level: 'B2', title: '🎓 Upper-Int (B2)', desc: "IELTS 6.0 - 7.0 akademik tayyorgarlik", tag: 'Tavsiya' },
                                    { level: 'C1', title: '🎓 Advanced (C1)', desc: "IELTS 7.5 - 8.5 & Karyera" },
                                    { level: 'C2', title: '🎓 Mastery (C2)', desc: "Ona tili darajasidagi ravonlik" },
                                ].map((item) => (
                                    <button
                                        key={item.level}
                                        onClick={() => setSelectedLevel(item.level)}
                                        className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                                            selectedLevel === item.level
                                                ? 'border-indigo-500 bg-indigo-500/10 text-foreground font-bold shadow-xs'
                                                : 'border-border bg-background hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-sm font-extrabold text-foreground">{item.title}</span>
                                            {item.tag && (
                                                <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-indigo-600 text-white">
                                                    {item.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[11px] text-muted-foreground mt-1">{item.desc}</div>
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

                {/* STEP 3: Choose Primary Goal & Daily Intensity */}
                {step === 3 && (
                    <div className="space-y-5">
                        <div className="text-center space-y-1.5">
                            <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 shadow-xs">
                                <Clock size={24} />
                            </div>
                            <h2 className="text-xl font-black text-foreground tracking-tight">
                                Asosiy maqsadingiz va kunlik rejangiz
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                O'qishingiz uchun optimal yuklamani belgilang
                            </p>
                        </div>

                        {/* Goal Choices */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Asosiy Maqsad:
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {(selectedLanguage === 'ja' ? [
                                    '🎯 JLPT Imtihon topshirish',
                                    '💬 Erkin Yaponcha Suhbat',
                                    '🗾 Yaponiyada Yashash & Ishlash',
                                    '📚 Umumiy Qiziqish & Anime'
                                ] : [
                                    '🎯 IELTS 7.0+ Imtihoni',
                                    '💬 Erkin Speaking & Muloqot',
                                    '🎓 Xorijiy Universitetga Kirish',
                                    '💼 Xalqaro Karyera & Ish'
                                ]).map((g) => (
                                    <button
                                        key={g}
                                        type="button"
                                        onClick={() => setSelectedGoal(g)}
                                        className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                                            selectedGoal === g
                                                ? 'border-primary bg-primary/10 text-primary shadow-xs'
                                                : 'border-border bg-background text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Daily Time Goal */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Kunlik O'qish Vaqti:
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { min: 15, title: "15 daqiqa", desc: "Yengil" },
                                    { min: 30, title: "30 daqiqa", desc: "Tavsiya", popular: true },
                                    { min: 60, title: "60 daqiqa", desc: "Super Fokus" },
                                ].map((opt) => (
                                    <button
                                        key={opt.min}
                                        type="button"
                                        onClick={() => setSelectedGoalMinutes(opt.min)}
                                        className={`p-3 rounded-xl border text-center transition-all ${
                                            selectedGoalMinutes === opt.min
                                                ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs'
                                                : 'border-border bg-background text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <div className="text-xs font-extrabold">{opt.title}</div>
                                        <div className="text-[10px] text-muted-foreground">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
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
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-black text-xs shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                            >
                                {isFinalizing ? 'Tayyorlanmoqda...' : 'Rejani Yaratish 🚀'}
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
