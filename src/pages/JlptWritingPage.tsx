import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Send, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateAIResponse } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import { toast } from '../hooks/use-toast';
export const JlptWritingPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP } = useStudyData();

    const [essayText, setEssayText] = useState('');
    const [targetLevel, setTargetLevel] = useState('N3');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [result, setResult] = useState<{
        score: number;
        kanjiRating: string;
        grammarFeedback: string;
        correctedText: string;
        suggestions: string[];
    } | null>(null);

    const handleEvaluate = async () => {
        if (!essayText.trim()) return;
        setIsEvaluating(true);

        try {
            const prompt = `
            Act as an expert JLPT Japanese Essay (Sakubun 作文) Examiner.
            Evaluate this Japanese text written for target level ${targetLevel}:
            "${essayText}"

            Output ONLY a JSON response in Uzbek:
            {
                "score": number (0-100),
                "kanjiRating": "A'lo / Qoniqarli / Ko'proq Kanji ishlatish kerak",
                "grammarFeedback": "Desu/Masu va grammatik shakllar haqida batafsil o'zbekcha baho",
                "correctedText": "Tog'rilangan ideal yaponcha shakli (Furigana bilan)",
                "suggestions": ["Tavsiya 1", "Tavsiya 2"]
            }
            `;

            const rawRes = await generateAIResponse([{ role: 'user', content: prompt }]);
            const cleaned = rawRes.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleaned);

            setResult({
                score: parsed.score || 85,
                kanjiRating: parsed.kanjiRating || "Qoniqarli Kanji qo'llangan",
                grammarFeedback: parsed.grammarFeedback || "Grammatik konstruksiyalar to'g'ri tanlangan.",
                correctedText: parsed.correctedText || essayText,
                suggestions: parsed.suggestions || ["Desu/Masu shakllarini bir maromda saqlang."]
            });

            await awardXP(100);
        } catch (e: any) {
            toast({
                variant: 'destructive',
                title: '❌ Xatolik yuz berdi',
                description: e?.message || 'Inshoni baholashda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.'
            });
        } finally {
            setIsEvaluating(false);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 pb-16">
            <div className="flex items-center justify-between">
                <button
                    onClick={() => navigate('/jlpt')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold text-xs"
                >
                    <ArrowLeft size={16} /> JLPT Hub'ga qaytish
                </button>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 font-extrabold text-xs rounded-full border border-amber-500/20">
                    📝 Sakubun (作文) Evaluator
                </span>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                        <h2 className="text-xl font-black text-foreground">Sakubun (作文) Insho va Grammatika Tahlili</h2>
                        <p className="text-xs text-muted-foreground">Yaponcha insho yoki matningizni kiriting va AI bahosini oling</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">Target:</span>
                        <div className="flex gap-1">
                            {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                                <button
                                    key={lvl}
                                    onClick={() => setTargetLevel(lvl)}
                                    className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                                        targetLevel === lvl
                                            ? 'bg-amber-500 text-white shadow'
                                            : 'bg-muted text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {lvl}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <textarea
                    rows={8}
                    value={essayText}
                    onChange={(e) => setEssayText(e.target.value)}
                    placeholder="Yaponcha insho yoki matningizni shu yerga kiritasiz... (Masalan: わたしの名前は... 日本語の勉強が好きです。)"
                    className="w-full p-4 rounded-2xl border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-amber-500 outline-none leading-relaxed"
                />

                <button
                    onClick={handleEvaluate}
                    disabled={isEvaluating || !essayText.trim()}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isEvaluating ? <Sparkles size={18} className="animate-spin" /> : <Send size={18} />}
                    <span>{isEvaluating ? "Sakubun AI Tahlil Qilmoqda..." : "Inshoni Tekshirish 📝"}</span>
                </button>
            </div>

            {/* Result Display */}
            {result && (
                <div className="bg-card border border-border rounded-3xl p-6 shadow-2xl space-y-5 animate-in fade-in">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <div className="flex items-center gap-2 font-black text-lg text-foreground">
                            <Award className="text-amber-500" size={24} /> Sakubun Natijasi: <span className="text-amber-500">{result.score} / 100</span>
                        </div>
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-500 font-bold text-xs rounded-full">
                            Kanji: {result.kanjiRating}
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-muted-foreground uppercase">Grammatika va Stilistika Tahlili:</h4>
                        <p className="text-sm text-foreground bg-muted/40 p-4 rounded-2xl border border-border/60 leading-relaxed">
                            {result.grammarFeedback}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-muted-foreground uppercase">Tavsiya etilgan Mukammal Varianti:</h4>
                        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-sm font-medium text-amber-700 dark:text-amber-300 leading-relaxed whitespace-pre-wrap">
                            {result.correctedText}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JlptWritingPage;
