import { Brain, Lightbulb, Loader2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useStudyData } from '../context/StudyPlannerContext';
import { generateStudyInsights } from '../utils/aiAnalytics';
import { Button } from './ui/Button';

const SmartInsight: React.FC = () => {
    const { sessions, subjects, settings } = useStudyData();
    const [insight, setInsight] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!settings.googleApiKey) {
            alert("Iltimos, avval Sozlamalar sahifasida Google API kalitini kiriting.");
            return;
        }

        if (sessions.length < 5) {
            alert("Tahlil uchun kamida 5 ta o'qish sessiyasi kerak. Ko'proq shug'ullaning! 📚");
            return;
        }

        setLoading(true);
        try {
            const result = await generateStudyInsights(sessions, subjects, settings.googleApiKey);
            setInsight(result);
        } catch (e: any) {
            console.error(e);
            alert("Tahlil qilishda xatolik: " + (e.message || "Noma'lum xato"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white shadow-2xl mb-8 relative overflow-hidden border border-white/10">
            {/* Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain size={150} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Sparkles className="text-yellow-300 animate-pulse" size={28} />
                            AI Aqlli Tahlil
                        </h2>
                        <p className="text-indigo-100 mt-2 text-lg max-w-xl leading-relaxed">
                            Sun'iy intellekt sizning o'qish odatlaringizni o'rganib, samaradorlikni oshirish bo'yicha shaxsiy maslahatlar beradi.
                        </p>
                    </div>
                    {!insight && (
                        <Button
                            onClick={handleAnalyze}
                            disabled={loading}
                            className="bg-white text-indigo-700 hover:bg-gray-100 border-none shadow-xl px-8 py-4 text-lg font-semibold rounded-2xl transition-all transform hover:scale-105 active:scale-95"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" /> Tahlil qilinmoqda...
                                </span>
                            ) : (
                                '🔍 Tahlilni Boshlash'
                            )}
                        </Button>
                    )}
                </div>

                {insight && (
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 animate-in fade-in slide-in-from-bottom-6 shadow-inner">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-400/20 rounded-2xl text-yellow-300 shrink-0">
                                <Lightbulb size={32} />
                            </div>
                            <div className="prose prose-invert prose-lg max-w-none">
                                <ReactMarkdown>{insight}</ReactMarkdown>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Button
                                onClick={() => setInsight(null)}
                                variant="ghost"
                                className="text-indigo-200 hover:text-white hover:bg-white/10"
                            >
                                Yopish
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SmartInsight;
