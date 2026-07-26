import React from 'react';
import { CheckCircle2, Star, Zap, Crown, Flame } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSubscription } from '../../hooks/useSubscription';
import { useNavigate } from 'react-router-dom';

const SubscriptionSection: React.FC = () => {
    const { subscription } = useSubscription();
    const navigate = useNavigate();

    const handleSubscribe = (planName: string) => {
        const text = encodeURIComponent(`Assalomu alaykum! Men Study Planner ${planName} obunasini xarid qilmoqchiman.`);
        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
    };

    const isPro = subscription?.tier === 'pro';
    const isPremium = subscription?.tier === 'premium';
    const isPaid = isPro || isPremium;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-in fade-in duration-500 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Crown size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tarif va Obunalar</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Joriy tarifingizni boshqaring</p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/pricing')}
                    className="text-xs font-bold text-rose-500 border-rose-500/30 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                >
                    Tariflarni Taqqoslash ➔
                </Button>
            </div>

            {/* Current Status */}
            <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Joriy tarif:</p>
                    <div className="flex items-center gap-2">
                        {isPremium ? (
                            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-sm flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5" /> PREMIUM / ULTRA VIP
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
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        Sizda barcha AI funksiyalaridan foydalanish huquqi aktivlashtirilgan.
                    </div>
                )}
            </div>

            {/* 3 Pricing Tiers: $5 (1-mo), $12 (1-mo), $50 (6-mo VIP) */}
            {!isPaid && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Pro Tier ($5 / 1 Oy) */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">1 Oylik Pro</div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Pro Plan</h4>
                            <div className="mt-2 flex items-baseline text-3xl font-extrabold text-slate-900 dark:text-white">
                                $5
                                <span className="ml-1 text-xs font-medium text-slate-500">/oy (60,000 so'm)</span>
                            </div>

                            <ul className="space-y-2 mt-4 text-xs text-slate-600 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                    <span>🎙️ IELTS Speaking Examiner (Part 1, 2, 3)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                    <span>✍️ IELTS Writing Evaluator (4 mezon)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                    <span>⚡ Oyiga 500 ta AI so'rovlar</span>
                                </li>
                            </ul>
                        </div>

                        <Button 
                            variant="outline"
                            onClick={() => handleSubscribe('Pro (1 Oy - $5)')}
                            className="w-full py-3 text-xs font-bold border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"
                        >
                            Sotib Olish ($5)
                        </Button>
                    </div>

                    {/* Premium Tier ($12 / 1 Oy) */}
                    <div className="bg-indigo-600 rounded-2xl p-5 border border-indigo-500 shadow-md text-white flex flex-col justify-between space-y-4 relative">
                        <div className="absolute -top-3 right-4">
                            <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                                Ommabop
                            </span>
                        </div>

                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-1">1 Oylik Premium</div>
                            <h4 className="text-xl font-bold text-white flex items-center gap-1.5">
                                Premium <Zap className="w-4 h-4 text-amber-300" />
                            </h4>
                            <div className="mt-2 flex items-baseline text-3xl font-extrabold text-white">
                                $12
                                <span className="ml-1 text-xs font-medium text-indigo-200">/oy (150,000 so'm)</span>
                            </div>

                            <ul className="space-y-2 mt-4 text-xs text-indigo-100">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                                    <span>🚀 Cheksiz AI Mashg'ulotlari</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                                    <span>🇺🇿 Nutqni Real-time O'zbekcha Tarjima</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                                    <span>👑 Gemini 1.5 Pro & DeepSeek V3</span>
                                </li>
                            </ul>
                        </div>

                        <Button 
                            onClick={() => handleSubscribe('Premium (1 Oy - $12)')}
                            className="w-full py-3 text-xs font-bold bg-white text-indigo-700 hover:bg-slate-100 border-none shadow-md"
                        >
                            Sotib Olish ($12)
                        </Button>
                    </div>

                    {/* Ultra VIP Tier ($50 / 6 Oy) */}
                    <div className="bg-rose-950/30 dark:bg-rose-950/40 rounded-2xl p-5 border border-rose-500/50 shadow-md text-white flex flex-col justify-between space-y-4 relative">
                        <div className="absolute -top-3 right-4">
                            <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                                <Flame className="w-3 h-3" /> Save 30%
                            </span>
                        </div>

                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">6 Oylik VIP</div>
                            <h4 className="text-xl font-bold text-white flex items-center gap-1.5">
                                Ultra VIP 💎
                            </h4>
                            <div className="mt-2 flex items-baseline text-3xl font-extrabold text-white">
                                $50
                                <span className="ml-1 text-xs font-medium text-rose-300">/6 oy ($8.33/oy)</span>
                            </div>

                            <ul className="space-y-2 mt-4 text-xs text-rose-100">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                    <span>⭐ 6 Oylik to'liq VIP ruxsat</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                    <span>🤖 Shaxsiy AI Accountability Coach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                    <span>👑 Cheksiz AI + VIP Telegram Bot</span>
                                </li>
                            </ul>
                        </div>

                        <Button 
                            onClick={() => handleSubscribe('Ultra VIP (6 Oy - $50)')}
                            className="w-full py-3 text-xs font-black bg-rose-600 hover:bg-rose-500 text-white border-none shadow-md shadow-rose-600/30"
                        >
                            VIP Sotib Olish ($50)
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscriptionSection;
