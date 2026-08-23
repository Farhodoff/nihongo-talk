import React, { useMemo, memo } from 'react';
import { SvgBarChart, SvgPieChart } from '../ui/SvgCharts';
import { Smile, TrendingUp } from 'lucide-react';
import { Subject, StudySession, Flashcard } from '../../types';
import { calculateMasteryScore } from '../../utils/analytics';

interface SubjectAnalyticsProps {
    subjects: Subject[];
    sessions: StudySession[];
    flashcards: Flashcard[];
}

const SubjectAnalytics: React.FC<SubjectAnalyticsProps> = memo(({ subjects, sessions, flashcards }) => {
    // Subject Mood Data
    const subjectMoodData = useMemo(() => {
        const data: { name: string; mood: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subjectId === subject.id && s.moodAfter);
            if (subjectSessions.length > 0) {
                const totalMood = subjectSessions.reduce((acc, s) => acc + (s.moodAfter || 0), 0);
                const avgMood = totalMood / subjectSessions.length;
                data.push({
                    name: subject.name,
                    mood: Number(avgMood.toFixed(1)),
                    color: subject.color
                });
            }
        });
        return data;
    }, [subjects, sessions]);

    // Subject Mastery Data
    const subjectMasteryData = useMemo(() => {
        const data: { name: string; score: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectCards = flashcards.filter(c => c.subjectId === subject.id);
            if (subjectCards.length > 0) {
                const score = calculateMasteryScore(subjectCards);
                data.push({
                    name: subject.name,
                    score: score,
                    color: subject.color
                });
            }
        });
        return data;
    }, [subjects, flashcards]);

    // Subject Distribution Data
    const subjectDistributionData = useMemo(() => {
        const data: { name: string; value: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subjectId === subject.id);
            const totalMinutes = subjectSessions.reduce((acc, s) => acc + s.duration, 0);
            if (totalMinutes > 0) {
                data.push({
                    name: subject.name,
                    value: totalMinutes,
                    color: subject.color || '#6366f1'
                });
            }
        });
        return data;
    }, [subjects, sessions]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subject Mood Analysis */}
            <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                <h3 className="text-sm font-extrabold text-foreground mb-4 flex items-center gap-2">
                    <Smile size={16} className="text-yellow-500" /> Fanlar bo'yicha O'rtacha Kayfiyat
                </h3>
                <div className="h-64 w-full">
                    <SvgBarChart
                        data={subjectMoodData}
                        xKey="name"
                        series={[{ dataKey: 'mood', fill: '#f59e0b' }]}
                        height={240}
                        unit="ball"
                    />
                </div>
                <p className="text-[11px] text-center text-muted-foreground mt-2">Shkala: 1 (Yomon) - 5 (A'lo)</p>
            </div>

            {/* Subject Mastery */}
            <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                <h3 className="text-sm font-extrabold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp size={16} className="text-indigo-500" /> Fanlar O'zlashtirish Darajasi (%)
                </h3>
                <div className="h-64 w-full">
                    <SvgBarChart
                        data={subjectMasteryData}
                        xKey="name"
                        series={[{ dataKey: 'score', fill: '#6366f1' }]}
                        height={240}
                        unit="%"
                    />
                </div>
            </div>

            {/* Subject Distribution */}
            <div className="bg-card p-6 rounded-3xl shadow-sm border border-border lg:col-span-2">
                <h3 className="text-sm font-extrabold text-foreground mb-4">Fanlar bo'yicha Jami Vaqt Taqsimoti (Daqiqalar)</h3>
                <div className="h-64 w-full flex items-center justify-center">
                    <SvgPieChart
                        data={subjectDistributionData}
                        height={220}
                        innerRadius={0.55}
                    />
                </div>
            </div>
        </div>
    );
});

export default SubjectAnalytics;
