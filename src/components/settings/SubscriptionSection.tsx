import React from 'react';
import { CheckCircle2, Star, Zap, Crown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSubscription } from '../../hooks/useSubscription';

const SubscriptionSection: React.FC = () => {
    const { subscription } = useSubscription();

    const handleSubscribe = () => {
        const text = encodeURIComponent('Assalom aleykum. Men obuna xarid qilmoqchiman');
        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
    };

    const isPro = subscription?.tier === 'pro';
    const isPremium = subscription?.tier === 'premium';
    const isPaid = isPro || isPremium;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-in fade-in duration-500">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Crown size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tarif va Obunalar</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Joriy tarifingizni boshqaring</p>
                </div>
            </div>

            {/* Current Status */}
            <div className="mb-8 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Joriy tarif:</p>
                    <div className="flex items-center gap-2">
                        {isPremium ? (
                            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-sm flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5" /> PREMIUM
                            </span>
                        ) : isPro ? (
                            <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-sm flex items-center gap-1">
                                <Star className="w-3.5 h-3.5" /> PRO
                            </span>
                        ) : (
                            <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                                Bepul (BYOK)
                            </span>
                        )}
                    </div>
                </div>
                {isPaid && (
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        Sizda barcha AI funksiyalaridan cheksiz foydalanish huquqi mavjud.
                    </div>
                )}
            </div>

            {/* Pricing Options (Only for Free users) */}
            {!isPaid && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Pro Tier */}
                    <div className="bg-indigo-600 rounded-2xl p-6 border border-indigo-500 shadow-md relative flex flex-col">
                        <div className="absolute top-0 right-4 transform -translate-y-1/2">
                            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-sm flex items-center gap-1">
                                <Star className="w-3 h-3" /> Ommabop
                            </span>
                        </div>

                        <div className="mb-6 mt-2">
                            <h3 className="text-lg font-bold text-white mb-1">Pro Tarif</h3>
                            <div className="mt-2 flex items-baseline text-3xl font-extrabold text-white">
                                $5
                                <span className="ml-1 text-sm font-medium text-indigo-200">/oy</span>
                            </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6 flex-1">
                            <li className="flex items-start gap-2 text-sm text-white">
                                <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                                <span>🎙️ <b>IELTS Speaking Examiner</b> (Part 1, 2, 3 simulyatsiyasi)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white">
                                <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                                <span>✍️ <b>IELTS Writing Evaluator</b> (4 mezon & Band 8.0 namuna)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white">
                                <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                                <span>🎯 <b>30 Kunlik Shaxsiy IELTS AI Study Plan</b></span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white">
                                <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                                <span>⚡️ <b>Oyiga 500 ta AI Mashg'ulot So'rovlari</b></span>
                            </li>
                        </ul>

                        <Button 
                            onClick={handleSubscribe}
                            className="w-full py-5 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold border-none"
                        >
                            Sotib Olish ($5)
                        </Button>
                    </div>

                    {/* Premium Tier */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative flex flex-col">
                        <div className="mb-6 mt-2">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">Premium <Zap className="w-4 h-4 text-fuchsia-500" /></h3>
                            <div className="mt-2 flex items-baseline text-3xl font-extrabold text-slate-900 dark:text-white">
                                $12
                                <span className="ml-1 text-sm font-medium text-slate-500">/oy</span>
                            </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6 flex-1">
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                                <span>🚀 <b>Cheksiz AI Mashg'ulotlari</b> (Hech qanday cheklovsiz)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                                <span>🇺🇿 <b>Nutqni Real-time O'zbekcha Tarjima Qilish</b></span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                                <span>🧠 <b>Smart Academic Vocabulary & Flashcards Builder</b></span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                                <span>👑 <b>Gemini 1.5 Pro va DeepSeek Top Modellariga Kirish</b></span>
                            </li>
                        </ul>

                        <Button 
                            variant="outline"
                            onClick={handleSubscribe}
                            className="w-full py-5 rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                            Sotib Olish ($12)
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscriptionSection;
