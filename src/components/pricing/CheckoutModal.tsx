import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Sparkles, Tag, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { PlanOption } from '../../pages/PricingPage';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: PlanOption;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
    isOpen,
    onClose,
    plan
}) => {
    const [promoCode, setPromoCode] = useState('');
    const [discountPercent, setDiscountPercent] = useState<number>(0);
    const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    if (!isOpen) return null;

    const handleApplyPromo = () => {
        if (!promoCode.trim()) return;
        const clean = promoCode.trim().toUpperCase();
        if (clean === 'KAIZEN2026' || clean === 'STUDENT50') {
            setDiscountPercent(50);
            setPromoMessage({ type: 'success', text: "🎉 50% maxsus chegirma qo'llandi!" });
        } else if (clean === 'PRO20' || clean === 'TOPSTUDENT') {
            setDiscountPercent(20);
            setPromoMessage({ type: 'success', text: "✨ 20% maxsus chegirma qo'llandi!" });
        } else if (clean === 'VIPFREE') {
            setDiscountPercent(100);
            setPromoMessage({ type: 'success', text: "🎁 100% BEPUL VIP kod tasdiqlandi!" });
        } else {
            setDiscountPercent(0);
            setPromoMessage({ type: 'error', text: "❌ Noto'g'ri yoki muddati o'tgan promo-kod" });
        }
    };

    const finalPriceUsd = Math.max(0, plan.priceUsd * (1 - discountPercent / 100));
    const finalPriceUzs = discountPercent > 0
        ? `${Math.round(parseInt(plan.priceUzs.replace(/[^0-9]/g, '') || '60000') * (1 - discountPercent / 100)).toLocaleString()} so'm`
        : plan.priceUzs;

    const handleContactAdmin = () => {
        const text = encodeURIComponent(
            `Assalomu alaykum! Men Kaizen AI platformasida "${plan.title}" tarifini faollashtirmoqchiman.\n\n` +
            `Tarif: ${plan.title}\n` +
            `Narxi: $${finalPriceUsd} (${finalPriceUzs})\n` +
            `Promo-kod: ${promoCode || 'Mavjud emas'}`
        );
        window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl text-white flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-gradient-to-r from-rose-950/40 via-purple-950/20 to-slate-900">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-rose-600/20 text-rose-400 border border-rose-500/30 rounded-2xl">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white">Obunani Faollashtirish</h3>
                            <p className="text-xs text-slate-400">{plan.title}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-5 flex-1 overflow-y-auto">
                    {/* Plan Summary Box */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <span className="text-xs text-slate-400 block">Tanlangan Tarif:</span>
                            <span className="font-bold text-white text-sm">{plan.title}</span>
                        </div>
                        <div className="text-right">
                            {discountPercent > 0 && (
                                <span className="text-xs line-through text-slate-500 block">
                                    ${plan.priceUsd} ({plan.priceUzs})
                                </span>
                            )}
                            <span className="text-base font-black text-rose-400">
                                ${finalPriceUsd} ({finalPriceUzs})
                            </span>
                        </div>
                    </div>

                    {/* Activation Instructions */}
                    <div className="p-4 bg-sky-950/20 border border-sky-900/40 rounded-2xl space-y-2">
                        <h4 className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                            <Send className="w-4 h-4" />
                            To'g'ridan-to'g'ri Faollashtirish
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            Obunani tezkor va xavfsiz faollashtirish uchun Telegram ma'muri (<span className="text-sky-400 font-bold">@jdu_f</span>) orqali bog'laning. Hisobingiz darhol Premium darajasiga o'tkaziladi.
                        </p>
                    </div>

                    {/* Promo Code Input */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1">
                            <Tag className="w-3.5 h-3.5 text-rose-400" />
                            Promo-kod (Chegirma uchun):
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                placeholder="Masalan: KAIZEN2026, STUDENT50"
                                className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:ring-2 focus:ring-rose-500 outline-none uppercase"
                            />
                            <Button
                                type="button"
                                onClick={handleApplyPromo}
                                disabled={!promoCode.trim()}
                                variant="secondary"
                                className="px-4 py-2.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl"
                            >
                                Qo'llash
                            </Button>
                        </div>
                        {promoMessage && (
                            <p className={`text-xs mt-1.5 font-medium ${promoMessage.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {promoMessage.text}
                            </p>
                        )}
                    </div>

                    {/* Telegram Connect CTA */}
                    <Button
                        onClick={handleContactAdmin}
                        className="w-full py-4 text-base font-black bg-sky-600 hover:bg-sky-500 text-white rounded-2xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 mt-2"
                    >
                        <Send className="w-5 h-5" />
                        <span>Telegram Orqali Faollashtirish (@jdu_f)</span>
                        <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Shaxsiy ma'lumotlar xavfsizligi kafolatlanadi.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
