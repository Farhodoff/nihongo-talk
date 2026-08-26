import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

const AIProviderSection: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 p-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl text-indigo-600 dark:text-indigo-400 shrink-0">
                    <ShieldCheck size={28} />
                </div>
                <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Cpu size={18} className="text-indigo-600 dark:text-indigo-400" />
                            Nihon Talk Engine
                        </h3>
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/50">
                            DeepSeek V3 / R1
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        Barcha AI xizmatlari (Shaxsiy Reja, Speaking Coach, Lug‘at va Tahlillar) Nihon Talk markaziy serveri orqali xavfsiz va barqaror ishlaydi.
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>AI Xizmati Faol va Ulanishga Tayyor</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIProviderSection;
