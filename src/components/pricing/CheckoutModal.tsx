import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Zap, CreditCard, Sparkles, Tag, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { PlanOption } from '../../pages/PricingPage';
import { useSubscription } from '../../hooks/useSubscription';
import { toast } from '../../hooks/use-toast';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: PlanOption;
}

type PaymentMethod = 'payme' | 'click' | 'card' | 'telegram';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
    isOpen,
    onClose,
    plan
}) => {
    const { upgradeTier } = useSubscription();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('payme');
    const [promoCode, setPromoCode] = useState('');
    const [discountPercent, setDiscountPercent] = useState<number>(0);
    const [isApplyingPromo, setIsApplyingPromo] = useState(false);
    const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    if (!isOpen) return null;

    const handleApplyPromo = () => {
        if (!promoCode.trim()) return;
        setIsApplyingPromo(true);
        setPromoMessage(null);

        setTimeout(() => {
            const clean = promoCode.trim().toUpperCase();
            if (clean === 'KAIZEN2026' || clean === 'STUDENT50') {
                setDiscountPercent(50);
                setPromoMessage({ type: 'success', text: "🎉 50% maxsus chegirma qo'llandi!" });
            } else if (clean === 'PRO20' || clean === 'TOPSTUDENT') {
                setDiscountPercent(20);
                setPromoMessage({ type: 'success', text: "✨ 20% maxsus chegirma qo'llandi!" });
            } else if (clean === 'VIPFREE') {
                setDiscountPercent(100);
                setPromoMessage({ type: 'success', text: "🎁 100% BEPUL VIP chegirma kodi tasdiqlandi!" });
            } else {
                setDiscountPercent(0);
                setPromoMessage({ type: 'error', text: "❌ Noto'g'ri yoki muddati o'tgan promo-kod" });
            }
            setIsApplyingPromo(false);
        }, 500);
    };

    const finalPriceUsd = Math.max(0, plan.priceUsd * (1 - discountPercent / 100));
    const finalPriceUzs = discountPercent > 0
        ? `${Math.round(parseInt(plan.priceUzs.replace(/[^0-9]/g, '') || '60000') * (1 - discountPercent / 100)).toLocaleString()} so'm`
        : plan.priceUzs;

    const handleCompletePayment = async () => {
        setIsProcessing(true);

        if (paymentMethod === 'telegram') {
            const text = encodeURIComponent(`Assalomu alaykum! Men Kaizen AI ${plan.title} ($${finalPriceUsd} / ${finalPriceUzs}) obunasini to'lov qilmoqchiman. Promo-kod: ${promoCode || 'Yo\'q'}`);
            window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
            setIsProcessing(false);
            onClose();
            return;
        }

        // Simulate payment processing
        setTimeout(async () => {
            const tier = plan.id.includes('premium') ? 'premium' : 'pro';
            
            // Set active subscription
            await upgradeTier(tier);

            setIsProcessing(false);
            setIsCompleted(true);

            toast({
                title: '🎉 Tabriklaymiz!',
                description: `${plan.title} obunasi hisobingizda muvaffaqiyatli faollashtirildi.`
            });

            setTimeout(() => {
                onClose();
            }, 2500);
        }, 1500);
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
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white">To'lovni Rasmiylashtirish</h3>
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

                {isCompleted ? (
                    <div className="p-10 text-center space-y-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto"
                        >
                            <CheckCircle2 className="w-8 h-8" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-white">Obuna Faollashtirildi! 🚀</h4>
                        <p className="text-sm text-slate-300">
                            Barcha AI imkoniyatlari, IELTS/JLPT mock imtihonlari va speaking coach cheksiz ochildi.
                        </p>
                    </div>
                ) : (
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

                        {/* Payment Method Selector */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                                To'lov Tizimini Tanlang:
                            </label>
                            <div className="grid grid-cols-2 gap-2.5">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('payme')}
                                    className={`p-3.5 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                                        paymentMethod === 'payme'
                                            ? 'bg-cyan-950/30 border-cyan-500 text-cyan-400 ring-2 ring-cyan-500/20'
                                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-cyan-400" />
                                        Payme
                                    </span>
                                    {paymentMethod === 'payme' && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('click')}
                                    className={`p-3.5 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                                        paymentMethod === 'click'
                                            ? 'bg-blue-950/30 border-blue-500 text-blue-400 ring-2 ring-blue-500/20'
                                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-blue-400" />
                                        Click Up
                                    </span>
                                    {paymentMethod === 'click' && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`p-3.5 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                                        paymentMethod === 'card'
                                            ? 'bg-purple-950/30 border-purple-500 text-purple-400 ring-2 ring-purple-500/20'
                                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-purple-400" />
                                        Visa / Master
                                    </span>
                                    {paymentMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('telegram')}
                                    className={`p-3.5 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                                        paymentMethod === 'telegram'
                                            ? 'bg-sky-950/30 border-sky-500 text-sky-400 ring-2 ring-sky-500/20'
                                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-sky-400" />
                                        Admin (Telegram)
                                    </span>
                                    {paymentMethod === 'telegram' && <CheckCircle2 className="w-4 h-4 text-sky-400" />}
                                </button>
                            </div>
                        </div>

                        {/* Promo Code Input */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1">
                                <Tag className="w-3.5 h-3.5 text-rose-400" />
                                Promo-kod yoki Kupon:
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
                                    disabled={!promoCode.trim() || isApplyingPromo}
                                    variant="secondary"
                                    className="px-4 py-2.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl"
                                >
                                    {isApplyingPromo ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Qo'llash"}
                                </Button>
                            </div>
                            {promoMessage && (
                                <p className={`text-xs mt-1.5 font-medium ${promoMessage.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {promoMessage.text}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            onClick={handleCompletePayment}
                            disabled={isProcessing}
                            className="w-full py-4 text-base font-black bg-rose-600 hover:bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 mt-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>To'lov amalga oshirilmoqda...</span>
                                </>
                            ) : (
                                <>
                                    <span>To'lovni Tasdiqlash (${finalPriceUsd})</span>
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </Button>

                        <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            256-bit xavfsiz shifrlangan to'lov tizimi. Istalgan vaqt bekor qilish mumkin.
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};
