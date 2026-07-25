import React, { useEffect, useState } from 'react';
import { HistoryService, MockExamItem, SpeakingSessionItem } from '../../services/HistoryService';
import { Sparkles, Trophy, Flame, BookOpen, Volume2, History, Award } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const JlptProgressAnalytics: React.FC = () => {
    const [jlptExams, setJlptExams] = useState<MockExamItem[]>([]);
    const [jlptSpeaking, setJlptSpeaking] = useState<SpeakingSessionItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const [exams, speaking] = await Promise.all([
                    HistoryService.getMockExamsHistory(),
                    HistoryService.getSpeakingHistory()
                ]);

                setJlptExams(exams.filter(e => e.examType === 'jlpt'));
                setJlptSpeaking(speaking.filter(s => s.language === 'ja'));
            } catch (e) {
                console.error('[JlptProgressAnalytics] Error loading history:', e);
            } finally {
                setLoading(false);
            }
        };

        loadHistory();
    }, []);

    // Stored target plan
    const savedTarget = localStorage.getItem('study_planner_jlpt_user_target');
    const targetPlan = savedTarget ? JSON.parse(savedTarget) : null;

    const chartData = [...jlptExams]
        .reverse()
        .map(item => ({
            date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
            score: Math.round((item.score / item.totalQuestions) * 180),
            level: item.level || 'JLPT'
        }));

    if (loading) return null;

    return (
        <div className="bg-card border border-border p-6 rounded-3xl shadow-sm mb-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-2xl border border-rose-500/20">
                        <Sparkles size={22} />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                            JLPT & Kaiwa Japanese Progress 🎌
                        </h3>
                        <p className="text-xs text-muted-foreground">
                            Yapon tili darajangiz, imtihon sinovlari va so'zlashuv statistikasi
                        </p>
                    </div>
                </div>

                {targetPlan && (
                    <div className="px-3.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                        <Flame size={14} /> Target: {targetPlan.currentLevel || 'N5'} ➔ {targetPlan.targetLevel || 'N2'}
                    </div>
                )}
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-muted/30 border border-border rounded-2xl">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">Topshirilgan Imtihonlar</span>
                    <div className="text-2xl font-black text-foreground flex items-center gap-1.5">
                        <Trophy size={18} className="text-amber-500" />
                        {jlptExams.length} <span className="text-xs font-normal text-muted-foreground">ta</span>
                    </div>
                </div>

                <div className="p-4 bg-muted/30 border border-border rounded-2xl">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">Kaiwa Suhbatlar (JA)</span>
                    <div className="text-2xl font-black text-foreground flex items-center gap-1.5">
                        <Volume2 size={18} className="text-rose-500" />
                        {jlptSpeaking.length} <span className="text-xs font-normal text-muted-foreground">seans</span>
                    </div>
                </div>

                <div className="p-4 bg-muted/30 border border-border rounded-2xl">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">Eng Yuqori Ball</span>
                    <div className="text-2xl font-black text-foreground flex items-center gap-1.5">
                        <Award size={18} className="text-emerald-500" />
                        {jlptExams.length > 0 ? Math.max(...jlptExams.map(e => Math.round((e.score / e.totalQuestions) * 180))) : 0}
                        <span className="text-xs font-normal text-muted-foreground">/ 180</span>
                    </div>
                </div>

                <div className="p-4 bg-muted/30 border border-border rounded-2xl">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">Suhbat Ravonligi Avg</span>
                    <div className="text-2xl font-black text-foreground flex items-center gap-1.5">
                        <BookOpen size={18} className="text-indigo-500" />
                        {jlptSpeaking.length > 0
                            ? (jlptSpeaking.reduce((a, s) => a + s.fluencyScore, 0) / jlptSpeaking.length).toFixed(1)
                            : '-'}/10
                    </div>
                </div>
            </div>

            {/* Score History Progression Chart */}
            {chartData.length > 0 ? (
                <div className="space-y-2">
                    <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <History size={14} className="text-rose-500" />
                        JLPT Imtihon Natijalari Dinamikasi (180 ballik shkala)
                    </h4>
                    <div className="h-44 w-full pt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} />
                                <YAxis domain={[0, 180]} ticks={[0, 50, 100, 140, 180]} stroke="var(--muted-foreground)" fontSize={10} tickLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                                <Line type="monotone" dataKey="score" stroke="#f43f5e" strokeWidth={3} activeDot={{ r: 6 }} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ) : (
                <div className="p-6 text-center bg-muted/20 border border-dashed border-border rounded-2xl">
                    <p className="text-xs text-muted-foreground font-medium">
                        Hozircha JLPT imtihon sinovlari tarixi mavjud emas. JLPT Hub sahifasiga o'tib sinov topshiring! 🎌
                    </p>
                </div>
            )}
        </div>
    );
};

export default JlptProgressAnalytics;
