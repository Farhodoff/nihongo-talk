import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Infinity as InfinityIcon, ChevronDown, ChevronUp, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export interface PlanOption {
    id: string;
    title: string;
    badge?: string;
    bestValue?: boolean;
    priceUsd: number;
    priceUzs: string;
    effectiveMonthly: string;
    termDescription: string;
    summaryText: string;
    aiLimitsText: string;
    idealFor: string;
    features: string[];
}

export const PricingPage: React.FC = () => {
    const plans: PlanOption[] = [
        {
            id: 'basic',
            title: 'Study Planner Basic',
            priceUsd: 12.99,
            priceUzs: "150,000 so'm / oy",
            effectiveMonthly: '$12.99/month',
            termDescription: 'PER MONTH',
            summaryText: "Kunlik o'quv plan va asosiy AI qurollaridan foydalanish uchun hamyonbop tarif.",
            aiLimitsText: 'Oyiga 100 ta AI so\'rovlar (Gemini Flash model)',
            idealFor: 'Boshlang\'ich darajadagi o\'quvchilar va kunlik dars rejasini tutuvchilar uchun.',
            features: [
                'Barcha kunlik task va o\'quv plan rejalashtirgich',
                'Cheklangan AI lug\'at va fleshkartalar',
                'Asosiy statistika va taymer',
                'Pomodoro fokus taymeri'
            ]
        },
        {
            id: 'pro',
            title: 'Study Planner Pro',
            badge: 'Save 25%',
            priceUsd: 29.99,
            priceUzs: "350,000 so'm / 3 oy",
            effectiveMonthly: '$10.00/month effective',
            termDescription: 'PER 3 MONTHS',
            summaryText: "IELTS va JLPT topshiruvchilar uchun mo'ljallangan to'liq imtihon simulyatsiyasi.",
            aiLimitsText: 'Oyiga 500 ta AI so\'rovlar (Gemini 1.5 Pro & DeepSeek V3)',
            idealFor: 'IELTS Band 6.5 - 8.0 yoki JLPT N3-N2 darajalariga tayyorlanayotganlar uchun.',
            features: [
                'All Cambridge + real-exam IELTS & JLPT mocks',
                'AI Writing rubric feedback (4 mezon) & graph generator',
                'Speaking partner + cue cards (Part 1, 2, 3)',
                'Full progress tracking + analytics',
                'SM-2 Spaced Repetition flashcards',
                'Furigana va Romaji avto-tarjimon'
            ]
        },
        {
            id: 'ultra',
            title: 'Study Planner Ultra',
            badge: 'Save 40%',
            bestValue: true,
            priceUsd: 46.99,
            priceUzs: "490,000 so'm / 6 oy",
            effectiveMonthly: '$7.83/month effective',
            termDescription: 'PER 6 MONTHS',
            summaryText: "Cheksiz AI imkoniyatlari, shaxsiy AI Accountability Coach va eng yuqori darajadagi imtiyozlar.",
            aiLimitsText: 'CHEKSIZ AI so\'rovlar (Gemini Pro, DeepSeek V3 & Ultra Voice Coach)',
            idealFor: 'Maksimal natijaga intiluvchi, cheksiz mashq va shaxsiy AI nazoratini xohlovchilar uchun.',
            features: [
                'All Cambridge + real-exam IELTS & JLPT mocks',
                'AI Writing rubric feedback & graph generator',
                'Speaking partner + cue cards & Real-time voice evaluator',
                'Full progress tracking + analytics & Unlimited flashcards',
                'Cheksiz AI credits & Top DeepSeek/Gemini Pro modellar',
                'Shaxsiy AI accountability coach & Telegram bot integratsiyasi',
                '24/7 VIP Qo\'llab-quvvatlash va barcha yangi funksiyalarga birinchi bo\'lib kirish'
            ]
        }
    ];

    const [selectedPlanId, setSelectedPlanId] = useState<string>('ultra');
    const [expandedPlanId, setExpandedPlanId] = useState<string>('ultra');

    const selectedPlan = plans.find(p => p.id === selectedPlanId) || plans[2];

    const handleSelectPlan = (planId: string) => {
        setSelectedPlanId(planId);
        setExpandedPlanId(planId);
    };

    const toggleExpand = (planId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedPlanId(prev => (prev === planId ? '' : planId));
    };

    const handleCheckout = () => {
        const text = encodeURIComponent(`Assalomu alaykum! Men Study Planner ${selectedPlan.title} (${selectedPlan.effectiveMonthly}) obunasini rasmiylashtirmoqchiman.`);
        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10 flex flex-col items-center justify-center font-sans">
            <div className="max-w-3xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-300">
                {/* Header Section */}
                <div className="text-center space-y-3">
                    <div className="text-xs font-black uppercase tracking-widest text-rose-500 flex items-center justify-center gap-1.5">
                        <Sparkles className="w-4 h-4" /> PRICING & SUBSCRIPTIONS
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Keep your Study plan unlocked
                    </h1>
                    <p className="text-rose-400/90 text-sm md:text-base font-medium">
                        Har bir tarif bo'yicha batafsil ma'lumot olish uchun kartochkani bosing.
                    </p>

                    {/* Skill Badges */}
                    <div className="flex items-center justify-center gap-8 pt-4 text-slate-400 text-xs font-semibold">
                        <div className="flex flex-col items-center">
                            <InfinityIcon className="w-5 h-5 text-rose-400 mb-1" />
                            <span>cheksiz AI mashqlar</span>
                        </div>
                        <div className="w-px h-8 bg-slate-800" />
                        <div className="flex flex-col items-center">
                            <span className="text-base font-bold text-white tracking-widest">L · R · W · S</span>
                            <span>IELTS & JLPT darajalar</span>
                        </div>
                    </div>
                </div>

                {/* Plans Selection List with Accordion Folders */}
                <div className="space-y-4">
                    {plans.map((plan) => {
                        const isSelected = selectedPlanId === plan.id;
                        const isExpanded = expandedPlanId === plan.id;

                        return (
                            <div key={plan.id} className="relative">
                                {/* Best value Floating Badge */}
                                {plan.bestValue && (
                                    <div className="absolute -top-3 left-6 z-10">
                                        <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
                                            <Zap className="w-3 h-3" /> Best value
                                        </span>
                                    </div>
                                )}

                                <div
                                    onClick={() => handleSelectPlan(plan.id)}
                                    className={`cursor-pointer rounded-2xl transition-all duration-200 border ${
                                        isSelected
                                            ? 'bg-rose-950/20 border-rose-500 shadow-xl shadow-rose-950/40 ring-2 ring-rose-500/20'
                                            : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                                    }`}
                                >
                                    {/* Card Main Bar */}
                                    <div className="p-5 md:p-6 flex items-center justify-between">
                                        {/* Left: Radio & Title */}
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                isSelected ? 'border-rose-500 bg-rose-600 text-white' : 'border-slate-600 bg-slate-950'
                                            }`}>
                                                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-white">{plan.title}</span>
                                                    {plan.badge && (
                                                        <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                                                            {plan.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-xs text-slate-400 mt-0.5 font-medium">
                                                    {plan.effectiveMonthly} ({plan.priceUzs})
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Price & Expand Toggle */}
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <div className="text-xl md:text-2xl font-black text-white">
                                                    ${plan.priceUsd}
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                                    {plan.termDescription}
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => toggleExpand(plan.id, e)}
                                                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/60 transition-colors"
                                                title="Tafsilotlarni ko'rish / yopish"
                                            >
                                                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Accordion Content Drawer */}
                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden border-t border-slate-800/80 bg-slate-950/40 p-5 md:p-6 space-y-4 rounded-b-2xl"
                                            >
                                                {/* Summary & Ideal For */}
                                                <div className="space-y-2">
                                                    <p className="text-sm text-slate-300 font-medium">
                                                        {plan.summaryText}
                                                    </p>
                                                    <div className="text-xs text-rose-400 bg-rose-500/10 p-2.5 rounded-xl border border-rose-500/20">
                                                        ⚡ <b>AI Cheklovi:</b> {plan.aiLimitsText}
                                                    </div>
                                                </div>

                                                {/* Detailed Checklist */}
                                                <div className="space-y-2 pt-2">
                                                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                                                        Mavjud Imkoniyatlar:
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {plan.features.map((feat, idx) => (
                                                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                                <span>{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-900">
                                                    🎯 <b>Kimlar uchun:</b> {plan.idealFor}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Selected Plan Summary Box */}
                <div className="bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4">
                    <h3 className="text-sm font-bold text-rose-300 flex items-center justify-between">
                        <span>{selectedPlan.title} gets you:</span>
                        <span className="text-xs font-semibold text-slate-400">{selectedPlan.priceUzs}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedPlan.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Big Action Button */}
                <div className="space-y-3 text-center">
                    <Button
                        onClick={handleCheckout}
                        className="w-full py-6 text-base font-black bg-rose-600 hover:bg-rose-500 text-white rounded-2xl shadow-xl shadow-rose-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-95"
                    >
                        <span>Continue with {selectedPlan.title}</span>
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                    <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Pay with Payme, Click, or International Card. Cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
