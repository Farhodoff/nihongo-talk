import React from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, BookOpen, Mic } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

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
    const navigate = useNavigate();
    useSEO({
        title: "Barcha Imkoniyatlar Bepul — Nihon Talk",
        description: "Nihon Talk barcha o'quvchilar uchun 100% bepul. Speaking Coach, IELTS & JLPT darslari erkin ochiq.",
        canonical: "/pricing",
    });

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 md:p-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full bg-card border border-border/80 rounded-3xl p-6 md:p-10 shadow-2xl text-center space-y-6 relative overflow-hidden"
            >
                {/* Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <Sparkles size={32} />
                </div>

                <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 inline-flex items-center gap-1.5">
                        <Heart size={12} className="fill-emerald-500" /> 100% OCHIQ TA'LIM
                    </span>
                    <h1 className="text-2xl md:text-4xl font-black text-foreground tracking-tight">
                        Barcha Funksiyalar To'liq Ochiq!
                    </h1>
                    <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                        Nihon Talk platformasida hech qanday to'lov yoki cheklovlar yo'q. Barcha darslar, IELTS Examiner, AI Sensei va Fleshkartalar barcha o'quvchilar uchun bepul.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-2">
                    <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <Mic size={16} className="text-indigo-500" />
                            <span>AI Speaking</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">Cheksiz jonli suhbatlar va tahlillar</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <BookOpen size={16} className="text-emerald-500" />
                            <span>JLPT & IELTS Hub</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">Barcha darajadagi to'liq darslar</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <ShieldCheck size={16} className="text-purple-500" />
                            <span>Cheklovlarsiz</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">Barcha o'quvchilar uchun erkin</p>
                    </div>
                </div>

                <div className="pt-4">
                    <Button 
                        size="lg" 
                        onClick={() => navigate('/dashboard')}
                        className="w-full md:w-auto px-8 py-3.5 rounded-2xl font-black text-sm bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto"
                    >
                        <span>O'qishni Boshlash</span>
                        <ArrowRight size={16} />
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default PricingPage;
