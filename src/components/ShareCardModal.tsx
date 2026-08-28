import React, { useRef, useState, useMemo } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { X, Download, Share2, Flame, Clock, CheckCircle, BookOpen, Trophy, Sparkles, Zap } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ShareCardModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const THEMES = [
    {
        id: 'galaxy',
        name: 'Galaxy',
        bg: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        accent: '#a78bfa',
        text: '#f1f5f9',
        muted: '#94a3b8',
        cardBg: 'rgba(255,255,255,0.08)',
        border: 'rgba(167,139,250,0.3)',
        glow: 'rgba(167,139,250,0.15)',
    },
    {
        id: 'sunset',
        name: 'Sunset',
        bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
        accent: '#f97316',
        text: '#fef3c7',
        muted: '#d4a574',
        cardBg: 'rgba(249,115,22,0.08)',
        border: 'rgba(249,115,22,0.25)',
        glow: 'rgba(249,115,22,0.1)',
    },
    {
        id: 'emerald',
        name: 'Emerald',
        bg: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
        accent: '#34d399',
        text: '#ecfdf5',
        muted: '#a7f3d0',
        cardBg: 'rgba(52,211,153,0.08)',
        border: 'rgba(52,211,153,0.25)',
        glow: 'rgba(52,211,153,0.1)',
    },
    {
        id: 'rose',
        name: 'Rose',
        bg: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)',
        accent: '#fb7185',
        text: '#fff1f2',
        muted: '#fda4af',
        cardBg: 'rgba(251,113,133,0.08)',
        border: 'rgba(251,113,133,0.25)',
        glow: 'rgba(251,113,133,0.1)',
    },
];

const ShareCardModal: React.FC<ShareCardModalProps> = ({ isOpen, onClose }) => {
    const { settings, sessions, tasks, subjects, getRank } = useStudyData();
    const cardRef = useRef<HTMLDivElement>(null);
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isExporting, setIsExporting] = useState(false);

    const theme = THEMES[selectedTheme];

    // Stats calculations
    const stats = useMemo(() => {
        const totalMinutes = sessions.reduce((acc, s) => acc + s.duration, 0);
        const totalHours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;
        const completedTasks = tasks.filter(t => t.completed).length;
        const totalSessions = sessions.filter(s => s.type === 'focus' && s.completed).length;

        // This week's study
        const now = new Date();
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekMinutes = sessions
            .filter(s => new Date(s.startTime) >= weekStart)
            .reduce((acc, s) => acc + s.duration, 0);
        const weekHours = (weekMinutes / 60).toFixed(1);

        // Top subjects by time
        const subjectTime: Record<string, number> = {};
        sessions.forEach(s => {
            if (s.subjectId) {
                subjectTime[s.subjectId] = (subjectTime[s.subjectId] || 0) + s.duration;
            }
        });
        const topSubjects = Object.entries(subjectTime)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([id, mins]) => ({
                name: subjects.find(s => s.id === id)?.name || 'Noma\'lum',
                color: subjects.find(s => s.id === id)?.color || '#6366f1',
                hours: (mins / 60).toFixed(1),
            }));

        return {
            totalHours,
            remainingMinutes,
            completedTasks,
            totalSessions,
            weekHours,
            topSubjects,
            streak: settings.currentStreak || 0,
            level: settings.level || 1,
            xp: settings.totalXp || 0,
            rank: getRank(settings.level || 1),
        };
    }, [sessions, tasks, subjects, settings, getRank]);

    const handleExport = async () => {
        if (!cardRef.current) return;
        setIsExporting(true);
        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: null,
                scale: 3, // High quality
                useCORS: true,
                logging: false,
            });
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `study-activity-${new Date().toISOString().split('T')[0]}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Export failed:', error);
        }
        setIsExporting(false);
    };

    const handleShare = async () => {
        if (!cardRef.current) return;
        setIsExporting(true);
        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: null,
                scale: 3,
                useCORS: true,
                logging: false,
            });
            canvas.toBlob(async (blob) => {
                if (!blob) return;
                const file = new File([blob], 'study-activity.png', { type: 'image/png' });
                if (navigator.share && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        title: 'Mening O\'quv Faolligim 📚',
                        text: `🔥 ${stats.streak} kunlik streak | ⏱ ${stats.totalHours} soat o'qidim | 🏆 ${stats.rank}`,
                        files: [file],
                    });
                } else {
                    // Fallback: download
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.download = `study-activity-${new Date().toISOString().split('T')[0]}.png`;
                    link.href = url;
                    link.click();
                    URL.revokeObjectURL(url);
                }
                setIsExporting(false);
            });
        } catch (error) {
            console.error('Share failed:', error);
            setIsExporting(false);
        }
    };

    if (!isOpen) return null;

    const today = new Date();
    const dateStr = today.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-border">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-5 border-b border-border">
                    <div className="flex items-center gap-2">
                        <Share2 className="text-primary" size={20} />
                        <h2 className="text-lg font-bold text-foreground">Faollikni Ulashish</h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-muted transition-colors">
                        <X size={18} className="text-muted-foreground" />
                    </button>
                </div>

                {/* Theme Selector */}
                <div className="px-5 pt-4 pb-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Dizayn tanlang:</p>
                    <div className="flex gap-2">
                        {THEMES.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => setSelectedTheme(i)}
                                className={`w-10 h-10 rounded-xl border-2 transition-all duration-200 ${
                                    selectedTheme === i
                                        ? 'border-primary scale-110 shadow-lg'
                                        : 'border-transparent hover:border-muted-foreground/30'
                                }`}
                                style={{ background: t.bg }}
                                title={t.name}
                            />
                        ))}
                    </div>
                </div>

                {/* Card Preview */}
                <div className="p-5">
                    <div
                        ref={cardRef}
                        style={{
                            background: theme.bg,
                            color: theme.text,
                            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                        }}
                        className="rounded-2xl overflow-hidden relative"
                    >
                        {/* Decorative circles */}
                        <div
                            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20"
                            style={{ background: `radial-gradient(circle, ${theme.accent}, transparent)` }}
                        />
                        <div
                            className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-10"
                            style={{ background: `radial-gradient(circle, ${theme.accent}, transparent)` }}
                        />

                        <div className="relative p-6 space-y-5">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                                        style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                                    >
                                        <Sparkles size={18} style={{ color: theme.accent }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold" style={{ color: theme.text }}>Nihongo Talk</p>
                                        <p className="text-[10px]" style={{ color: theme.muted }}>{dateStr}</p>
                                    </div>
                                </div>
                                {stats.streak > 0 && (
                                    <div
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                                        style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                                    >
                                        <Flame size={16} style={{ color: theme.accent }} />
                                        <span style={{ color: theme.accent }}>{stats.streak}</span>
                                        <span className="text-[10px]" style={{ color: theme.muted }}>kun</span>
                                    </div>
                                )}
                            </div>

                            {/* Main Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                <div
                                    className="p-3 rounded-xl text-center"
                                    style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                                >
                                    <Clock size={18} className="mx-auto mb-1.5" style={{ color: theme.accent }} />
                                    <p className="text-xl font-bold" style={{ color: theme.text }}>
                                        {stats.totalHours}<span className="text-sm font-normal" style={{ color: theme.muted }}>s</span>
                                    </p>
                                    <p className="text-[10px] mt-0.5" style={{ color: theme.muted }}>Jami vaqt</p>
                                </div>

                                <div
                                    className="p-3 rounded-xl text-center"
                                    style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                                >
                                    <CheckCircle size={18} className="mx-auto mb-1.5" style={{ color: theme.accent }} />
                                    <p className="text-xl font-bold" style={{ color: theme.text }}>{stats.completedTasks}</p>
                                    <p className="text-[10px] mt-0.5" style={{ color: theme.muted }}>Vazifalar</p>
                                </div>

                                <div
                                    className="p-3 rounded-xl text-center"
                                    style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                                >
                                    <Zap size={18} className="mx-auto mb-1.5" style={{ color: theme.accent }} />
                                    <p className="text-xl font-bold" style={{ color: theme.text }}>{stats.totalSessions}</p>
                                    <p className="text-[10px] mt-0.5" style={{ color: theme.muted }}>Sessiyalar</p>
                                </div>
                            </div>

                            {/* Level & Rank */}
                            <div
                                className="flex items-center justify-between p-3 rounded-xl"
                                style={{ background: theme.cardBg, border: `1px solid ${theme.border}` }}
                            >
                                <div className="flex items-center gap-2">
                                    <Trophy size={20} style={{ color: theme.accent }} />
                                    <div>
                                        <p className="text-sm font-bold" style={{ color: theme.text }}>{stats.rank}</p>
                                        <p className="text-[10px]" style={{ color: theme.muted }}>Level {stats.level} • {stats.xp} XP</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold" style={{ color: theme.accent }}>{stats.weekHours}s</p>
                                    <p className="text-[10px]" style={{ color: theme.muted }}>Shu hafta</p>
                                </div>
                            </div>

                            {/* Top Subjects */}
                            {stats.topSubjects.length > 0 && (
                                <div>
                                    <p className="text-[10px] font-medium mb-2" style={{ color: theme.muted }}>
                                        <BookOpen size={10} className="inline mr-1" style={{ verticalAlign: 'middle' }} />
                                        ENG KO'P O'QILGAN FANLAR
                                    </p>
                                    <div className="space-y-1.5">
                                        {stats.topSubjects.map((sub, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div
                                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: sub.color }}
                                                />
                                                <span className="text-xs flex-1 truncate" style={{ color: theme.text }}>
                                                    {sub.name}
                                                </span>
                                                <span className="text-xs font-medium" style={{ color: theme.muted }}>
                                                    {sub.hours}s
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Footer watermark */}
                            <div className="pt-2 border-t flex items-center justify-center gap-1.5"
                                 style={{ borderColor: theme.border }}>
                                <Sparkles size={10} style={{ color: theme.muted }} />
                                <p className="text-[9px] tracking-wider" style={{ color: theme.muted }}>
                                    NIHONGO TALK APP
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 px-5 pb-5">
                    <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-all disabled:opacity-50"
                    >
                        <Download size={18} />
                        <span>Yuklab olish</span>
                    </button>
                    <button
                        onClick={handleShare}
                        disabled={isExporting}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all disabled:opacity-50"
                    >
                        <Share2 size={18} />
                        <span>Ulashish</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareCardModal;
