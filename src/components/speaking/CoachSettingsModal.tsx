import React from 'react';
import { Cpu, X } from 'lucide-react';
import { AIProvider } from '../../utils/ai';

interface CoachSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    coachAiModel: AIProvider;
    setCoachAiModel: (m: AIProvider) => void;
    coachApiKey: string;
    setCoachApiKey: (key: string) => void;
    isAdmin: boolean;
    userEmail?: string;
    onSave: () => void;
}

export const CoachSettingsModal: React.FC<CoachSettingsModalProps> = ({
    isOpen,
    onClose,
    coachAiModel,
    setCoachAiModel,
    coachApiKey,
    setCoachApiKey,
    isAdmin,
    onSave,
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
                        Coach AI Sozlamalari
                    </h3>
                    <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                        <X size={18} />
                    </button>
                </div>
                
                <div className="p-6 space-y-5 text-sm">
                    <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 rounded-2xl text-indigo-700 dark:text-indigo-300 text-xs leading-relaxed">
                        💡 <strong>Alohida Token Rejimi:</strong> Speaking Coach uchun Gemini kabi tezkor model va alohida kalit o'rnatishingiz mumkin.
                    </div>

                    <div>
                        <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-xs">
                            AI Model (Coach uchun)
                        </label>
                        <select
                            value={coachAiModel}
                            onChange={(e) => setCoachAiModel(e.target.value as AIProvider)}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        >
                            <option value="deepseek">DeepSeek (Tavsiya etiladi)</option>
                            <option value="gemini">Google Gemini</option>
                            <option value="ollama">Ollama (Local)</option>
                        </select>
                    </div>

                    {isAdmin && (
                        <div>
                            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-xs">
                                Coach uchun Alohida API Key (Admin Only)
                            </label>
                            <input
                                type="password"
                                value={coachApiKey}
                                onChange={(e) => setCoachApiKey(e.target.value)}
                                placeholder="AI Studio'dan olingan kalit..."
                                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                            <p className="text-[11px] text-gray-400 mt-1.5">
                                Bo'sh qoldirsangiz, ilovaning umumiy API kaliti ishlatiladi.
                            </p>
                        </div>
                    )}

                    <button
                        onClick={onSave}
                        className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl active:scale-[0.98]"
                    >
                        Sozlamalarni Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};
