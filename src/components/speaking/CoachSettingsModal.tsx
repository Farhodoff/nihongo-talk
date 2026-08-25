import React, { useState } from 'react';
import { Cpu, ShieldCheck, X, Clock, Check } from 'lucide-react';

interface CoachSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    isAdmin?: boolean;
    userEmail?: string;
    onSave?: () => void;
}

export const CoachSettingsModal: React.FC<CoachSettingsModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [pauseDelay, setPauseDelay] = useState<string>(() => {
        return localStorage.getItem('speaking_coach_pause_delay') || '2800';
    });

    if (!isOpen) return null;

    const handleSelectDelay = (val: string) => {
        setPauseDelay(val);
        localStorage.setItem('speaking_coach_pause_delay', val);
    };

    const pauseOptions = [
        { value: '2000', label: '2.0 soniya', desc: 'Tezkor suhbatlar uchun' },
        { value: '2800', label: '2.8 soniya (Tavsiya)', desc: 'Fikrni jamlash va tabiiy pauza uchun qulay' },
        { value: '3500', label: '3.5 soniya', desc: 'O\'ylab, sekinroq gapiruvchilar uchun' },
        { value: '4500', label: '4.5 soniya', desc: 'Keng mulohaza vaqti' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-md shadow-2xl border border-gray-200/60 dark:border-gray-800/60 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent">
                    <h3 className="font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                        <div className="p-2 bg-indigo-500/10 rounded-xl">
                            <Cpu size={18} className="text-indigo-500" />
                        </div>
                        Speaking Coach Sozlamalari
                    </h3>
                    <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                        <X size={18} />
                    </button>
                </div>
                
                <div className="p-6 space-y-5 text-sm">
                    {/* Pause Delay Setting */}
                    <div className="space-y-2.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                            <Clock size={14} className="text-primary" />
                            Nutq orasidagi pauza vaqti (Jimlik sezgirligi):
                        </label>
                        <p className="text-[11px] text-muted-foreground">
                            Gapirish davomida to'xtab qolsangiz, AI sizni bo'lmasdan shu vaqt davomida kutadi:
                        </p>

                        <div className="grid grid-cols-1 gap-2 pt-1">
                            {pauseOptions.map(opt => {
                                const isSelected = pauseDelay === opt.value;
                                return (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => handleSelectDelay(opt.value)}
                                        className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                                            isSelected 
                                                ? 'border-primary bg-primary/10 text-primary shadow-xs font-bold' 
                                                : 'border-border bg-card hover:bg-muted/50 text-foreground'
                                        }`}
                                    >
                                        <div>
                                            <div className="text-xs font-extrabold flex items-center gap-2">
                                                <span>{opt.label}</span>
                                            </div>
                                            <div className="text-[10px] text-muted-foreground font-normal mt-0.5">
                                                {opt.desc}
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 rounded-2xl text-indigo-700 dark:text-indigo-300 text-[11px] leading-relaxed flex items-start gap-2.5">
                        <ShieldCheck size={18} className="shrink-0 text-indigo-500 mt-0.5" />
                        <div>
                            <strong>DeepSeek AI Core:</strong> Speaking Coach to‘g‘ridan-to‘g‘ri markaziy DeepSeek neyrotarmog‘i orqali cheklovlarsiz ishlaydi.
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl active:scale-[0.98] text-xs"
                    >
                        Saqlash va Yopish
                    </button>
                </div>
            </div>
        </div>
    );
};
