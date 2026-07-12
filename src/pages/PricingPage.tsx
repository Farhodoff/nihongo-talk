import React from 'react';
import { CheckCircle2, Star, Zap, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const PricingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubscribe = () => {
        const text = encodeURIComponent('Assalom aleykum. Men obuna xarid qilmoqchiman');
        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    O'qishingizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Yangi Bosqichga</span> Olib Chiqing
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    O'zingizga mos tarifni tanlang va AI imkoniyatlaridan to'liq foydalaning. Yoki o'z API kalitingizni (BYOK) bepul ishlating.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Free Tier */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative flex flex-col hover:border-indigo-500/30 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">BYOK (Bepul)</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">O'z API kalitingizni o'zingiz bilan olib keling.</p>
                        <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900 dark:text-white">
                            $0
                            <span className="ml-1 text-lg font-medium text-slate-500">/oy</span>
                        </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                            <span>Cheksiz foydalanish (o'z kalitingiz limiti bo'yicha)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                            <span>Barcha platforma funksiyalari</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                            <span>Lokal Ollama qo'llab-quvvatlashi</span>
                        </li>
                    </ul>

                    <Button variant="outline" className="w-full py-6 rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => navigate('/settings')}>
                        Kalitni Kiritish (Settings)
                    </Button>
                </div>

                {/* Pro Tier */}
                <div className="bg-indigo-600 rounded-3xl p-8 border border-indigo-500 shadow-xl relative flex flex-col transform md:-translate-y-4">
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" /> Eng Ommabop
                        </span>
                    </div>

                    <div className="mb-8 mt-2">
                        <h3 className="text-xl font-bold text-white mb-2">Pro Tarif</h3>
                        <p className="text-sm text-indigo-200 min-h-[40px]">API kalit izlash bilan ovora bo'lmang, hamma narsa tayyor.</p>
                        <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                            $5
                            <span className="ml-1 text-lg font-medium text-indigo-200">/oy</span>
                        </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                            <span>Oyiga 500 ta gacha AI so'rovlari</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                            <span>DeepSeek-V4 Pro modeliga kirish</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                            <span>Tezkor javob tezligi (High Priority)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                            <span>Yangi funksiyalarni birinchi bo'lib sinash</span>
                        </li>
                    </ul>

                    <Button 
                        onClick={() => handleSubscribe()}
                        className="w-full py-6 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold border-none"
                    >
                        Sotib Olish ($5)
                    </Button>
                </div>

                {/* Premium Tier */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative flex flex-col hover:border-fuchsia-500/30 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">Premium <Zap className="w-5 h-5 text-fuchsia-500" /></h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">Intensiv o'rganuvchilar va professionallar uchun.</p>
                        <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900 dark:text-white">
                            $12
                            <span className="ml-1 text-lg font-medium text-slate-500">/oy</span>
                        </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                            <span>Cheksiz AI so'rovlari (Fair use)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                            <span>Eng so'nggi va eng kuchli modellar (Gemini 1.5 Pro)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                            <span>Shaxsiy ustoz maslahatlari</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                            <span>Premium ustunlik va qo'llab-quvvatlash</span>
                        </li>
                    </ul>

                    <Button 
                        variant="outline"
                        onClick={() => handleSubscribe()}
                        className="w-full py-6 rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                        Sotib Olish ($12)
                    </Button>
                </div>
            </div>

            {/* FAQ or Security Trust Badge */}
            <div className="mt-20 flex justify-center text-center">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                    <Shield className="w-5 h-5" />
                    <span>To'lovlar Stripe/Payme orqali xavfsiz himoyalangan. Istalgan payt bekor qilishingiz mumkin.</span>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
