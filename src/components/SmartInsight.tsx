import { Brain, Lightbulb, Loader2, Sparkles, TrendingDown } from 'lucide-react';
import React, { useState } from 'react';
import { useStudyPlanner } from '../context/StudyPlannerContext';
import { generateStudyInsight } from '../utils/ai';
import { calculateMasteryScore } from '../utils/analytics';
import { Button } from './ui/Button';

const SmartInsight: React.FC = () => {
    const { sessions, subjects, tasks, settings, flashcards } = useStudyPlanner();
    const [insights, setInsights] = useState<{ subject: string; advice: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        setLoading(true);
        try {
            // 1. Prepare Stats
            const stats = subjects.map(sub => {
                const subSessions = sessions.filter(s => s.subjectId === sub.id);
                const subTasks = tasks.filter(t => t.subjectId === sub.id && !t.completed);

                const totalHours = subSessions.reduce((acc, s) => acc + s.duration, 0) / 60;
                const avgMood = subSessions.length > 0
                    ? subSessions.reduce((acc, s) => acc + (s.moodAfter || 0), 0) / subSessions.length
                    : 0;

                const subjectCards = flashcards.filter(c => c.subjectId === sub.id);
                const masteryScore = calculateMasteryScore(subjectCards);

                return {
                    subject: sub.name,
                    hours: Number(totalHours.toFixed(1)),
                    mood: Number(avgMood.toFixed(1)),
                    pendingTasks: subTasks.length,
                    masteryScore
                };
            });

            // 2. Call AI
            const result = await generateStudyInsight(stats, settings.googleApiKey);
            setInsights(result);

        } catch (e) {
            alert("Tahlil qilishda xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg mb-8 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain size={120} />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Sparkles className="text-yellow-300" /> Aqlli Analitika
                        </h2>
                        <p className="text-indigo-100 mt-1 max-w-lg">
                            Sun'iy Intellekt yordamida o'zlashtirish darajangizni tahlil qiling va qaysi mavzularda oqsayotganingizni aniqlang.
                        </p>
                    </div>
                    <Button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="bg-white text-indigo-600 hover:bg-gray-100 border-none shadow-md"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : 'Tahlilni Boshlash'}
                    </Button>
                </div>

                {insights.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 animate-in fade-in slide-in-from-bottom-4">
                        {insights.map((insight, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-2 mb-2 font-bold text-yellow-300">
                                    <TrendingDown size={18} />
                                    <span>{insight.subject}</span>
                                </div>
                                {/** Display Mastery Score if available in the text or maybe just rely on the AI text? 
                                     The AI text serves as the qualitative feedback. 
                                     But we can also visualize it if we mapped it back. 
                                     For now, let's trust the AI advice. 
                                 **/}
                                <p className="text-white/90 text-sm leading-relaxed">
                                    <Lightbulb size={14} className="inline mr-1" />
                                    {insight.advice}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SmartInsight;
