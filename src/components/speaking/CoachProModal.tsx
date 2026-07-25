import React from 'react';
import { Crown, X } from 'lucide-react';

interface CoachProModalProps {
    isOpen: boolean;
    onClose: () => void;
    reason: string;
}

export const CoachProModal: React.FC<CoachProModalProps> = ({ isOpen, onClose, reason }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-center space-y-5">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full"
                >
                    <X size={20} />
                </button>
                
                <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                    <Crown size={32} />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">👑 PRO Obuna Kerak</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                        {reason || "Ushbu eksklyuziv funksiyadan foydalanish uchun PRO yoki Premium obunaga o'ting."}
                    </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 rounded-2xl p-4 text-left space-y-2 text-xs text-orange-900 dark:text-orange-200 font-medium">
                    <div className="flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400">
                        🌟 PRO Obuna Imkoniyatlari:
                    </div>
                    <div>• 🎓 Barcha 6 ta Speaking Personalar (IELTS Examiner, Roast Coach)</div>
                    <div>• 🇺🇿 Real-time O'zbekcha Subtitr va Tarjima</div>
                    <div>• ✍️ IELTS Writing Band 8.0 Model Answers</div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <button
                        onClick={() => {
                            const text = encodeURIComponent('Assalom aleykum. Men PRO obuna sotib olmoqchiman');
                            window.open(`https://t.me/jdu_f?text=${text}`, '_blank');
                        }}
                        className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all"
                    >
                        Sotib Olish ($5 / oy)
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                    >
                        Yopish
                    </button>
                </div>
            </div>
        </div>
    );
};
