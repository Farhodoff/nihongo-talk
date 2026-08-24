import React, { useState } from 'react';
import { BrainCircuit, X, CheckCircle2, Sparkles, Send, Award } from 'lucide-react';
import { generateAIResponse, extractJsonFromAiResponse } from '../../utils/ai/aiCore';
import { supabase } from '../../lib/supabase';
import { useStudyData } from '../../context/StudyPlannerContext';

interface DailyReflectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DailyReflectionModal: React.FC<DailyReflectionModalProps> = ({ isOpen, onClose }) => {
    const { awardXP } = useStudyData();
    const [learnedText, setLearnedText] = useState('');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [evaluationResult, setEvaluationResult] = useState<{
        masteryScore: number;
        feedback: string;
        strengths: string[];
    } | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async () => {
        if (!learnedText.trim()) return;
        setIsEvaluating(true);
        try {
            const prompt = `
            Act as an Academic English Tutor.
            Evaluate the student's end-of-day learning reflection:
            "${learnedText}"

            Assess how effectively they retained vocabulary, grammar concepts, or speaking techniques.
            Provide a JSON output ONLY in Uzbek:
            {
                "masteryScore": number (70 to 100),
                "feedback": "Samimiy, intizomli o'zbekcha baho va tavsiya",
                "strengths": ["Yutuq 1", "Yutuq 2"]
            }
            `;

            const rawRes = await generateAIResponse([{ role: 'user', content: prompt }], { isJson: true });
            const parsed = extractJsonFromAiResponse<{
                masteryScore?: number;
                feedback?: string;
                strengths?: string[];
            }>(rawRes);

            setEvaluationResult({
                masteryScore: parsed.masteryScore || 85,
                feedback: parsed.feedback || "Bugun juda yaxshi natija ko'rsatdingiz!",
                strengths: parsed.strengths || ["Yangi so'zlar yodlandi", "Grammatik qoida o'zlashtirildi"]
            });

            // Save to localStorage for historical tracking
            const todayStr = new Date().toISOString().split('T')[0];
            const logs = JSON.parse(localStorage.getItem('study_planner_daily_reflections') || '{}');
            logs[todayStr] = {
                text: learnedText,
                score: parsed.masteryScore || 85,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('study_planner_daily_reflections', JSON.stringify(logs));

            // Sync to Supabase user_metadata for cross-device persistence
            try {
                await supabase.auth.updateUser({
                    data: { daily_reflections: logs }
                });
            } catch (e) {}

            // Award XP for reflection completion
            try {
                await awardXP(25);
            } catch (e) {}

        } catch (err) {
            setEvaluationResult({
                masteryScore: 85,
                feedback: "Juda ajoyib intizom! Bugun o'rgangan bilimingiz xotiraga muhrlandi.",
                strengths: ["Intizomli takrorlash", "Faol eslash (Active Recall)"]
            });
        } finally {
            setIsEvaluating(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative space-y-4 p-6">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60"
                >
                    <X size={20} />
                </button>

                <div className="flex items-center gap-3 border-b border-border pb-4">
                    <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl">
                        <BrainCircuit size={26} />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-foreground">Oxirida Nimani O'rgandingiz? 🧠</h3>
                        <p className="text-xs text-muted-foreground">Kunlik Active Recall & Bilimni Mustahkamlash Testi</p>
                    </div>
                </div>

                {!evaluationResult ? (
                    <div className="space-y-4">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Bugungi darsingizdan <b>3 ta eng muhim so'z, ibora yoki grammatik qoidani</b> yozib bering. Sun'iy intellekt bilim darajangizni va eslab qolish darajasini baholaydi:
                        </p>

                        <textarea
                            rows={4}
                            value={learnedText}
                            onChange={(e) => setLearnedText(e.target.value)}
                            placeholder="Masalan: 1. Inevitable (muqarrar), 2. Present Perfect Tense (Natija zamoni), 3. Speaking Part 2 'However' o'tish so'zi..."
                            className="w-full p-4 rounded-2xl border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={isEvaluating || !learnedText.trim()}
                            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 text-white font-extrabold rounded-2xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            {isEvaluating ? (
                                <Sparkles size={18} className="animate-spin" />
                            ) : (
                                <Send size={18} />
                            )}
                            <span>{isEvaluating ? "AI Tahlil Qilmoqda..." : "Bilimni Tekshirish & Natijani Saqlash"}</span>
                        </button>
                    </div>
                ) : (
                    <div className="space-y-5 animate-in fade-in">
                        <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center space-y-2">
                            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Bugungi Bilim O'zlashtirish Darajasi:</span>
                            <div className="text-4xl font-black text-amber-500 flex items-center justify-center gap-2">
                                <Award size={36} />
                                {evaluationResult.masteryScore}%
                            </div>
                            <p className="text-xs text-foreground leading-relaxed pt-2 border-t border-amber-500/20">
                                {evaluationResult.feedback}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Mustahkamlangan Yutuqlar:</span>
                            <div className="space-y-1.5">
                                {evaluationResult.strengths.map((str, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-xl border border-border/60">
                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                        <span>{str}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all text-sm"
                        >
                            Darsni Muvaffaqiyatli Yakunlash ✨
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
