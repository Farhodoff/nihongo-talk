import React from 'react';
import { Cpu, ShieldCheck, X } from 'lucide-react';

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
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-md shadow-2xl border border-gray-200/60 dark:border-gray-800/60 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent">
                    <h3 className="font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                        <div className="p-2 bg-indigo-500/10 rounded-xl">
                            <Cpu size={18} className="text-indigo-500" />
                        </div>
                        Coach AI Engine
                    </h3>
                    <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                        <X size={18} />
                    </button>
                </div>
                
                <div className="p-6 space-y-5 text-sm">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 rounded-2xl text-indigo-700 dark:text-indigo-300 text-xs leading-relaxed flex items-start gap-3">
                        <ShieldCheck size={20} className="shrink-0 text-indigo-500 mt-0.5" />
                        <div>
                            <strong>DeepSeek AI Core:</strong> Speaking Coach to‘g‘ridan-to‘g‘ri markaziy DeepSeek V3/R1 neyrotarmog‘i orqali ishlaydi. Hech qanday shaxsiy API kalit talab etilmaydi.
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl active:scale-[0.98]"
                    >
                        Tushunarli
                    </button>
                </div>
            </div>
        </div>
    );
};
