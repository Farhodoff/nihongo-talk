import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Crown, Medal } from 'lucide-react';
import { LeaderboardService, LeaderboardEntry } from '../services/LeaderboardService';
import { useStudyData } from '../context/StudyPlannerContext';


// Avatar gradient palette
const AVATAR_GRADIENTS = [
    'from-violet-500 to-indigo-600',
    'from-rose-500 to-pink-600',
    'from-cyan-500 to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-fuchsia-500 to-purple-600',
    'from-lime-500 to-green-600',
    'from-sky-500 to-indigo-600',
];

function getAvatarGradient(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
}

export const LeaderboardPage: React.FC = () => {
    const { user, settings } = useStudyData();
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const currentUserId = user?.id || '';
    const totalXp = settings?.totalXp || 0;
    const currentStreak = settings?.currentStreak || 1;

    const loadData = async () => {
        setIsLoading(true);
        try {
            const data = await LeaderboardService.getGlobalLeaderboard(user, totalXp, currentStreak);
            setLeaderboard(data);
        } catch (e) {
            console.error('Error loading leaderboard:', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [totalXp, currentStreak]);

    const sorted = [...leaderboard]
        .sort((a, b) => b.total_xp - a.total_xp)
        .map((item, i) => ({ ...item, rank: i + 1 }));

    return (
        <div className="space-y-4 animate-in fade-in">
            {/* Leaderboard List */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <div className="w-7 h-7 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs text-muted-foreground">Yuklanmoqda...</p>
                    </div>
                ) : sorted.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-2">
                        <Trophy size={28} className="text-muted-foreground/30" />
                        <p className="text-sm text-muted-foreground font-medium">Hali hech kim reytingda yo'q</p>
                        <p className="text-xs text-muted-foreground/60">Dars qilib XP to'plang!</p>
                    </div>
                ) : (
                    <div className="divide-y divide-border/50">
                        {sorted.map(item => {
                            const isCurrentUser = item.id === currentUserId;
                            const rank = item.rank ?? 0;

                            return (
                                <div
                                    key={item.id}
                                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                                        isCurrentUser
                                            ? 'bg-primary/5'
                                            : 'hover:bg-muted/40'
                                    }`}
                                >
                                    {/* Rank */}
                                    <div className="w-7 text-center shrink-0">
                                        {rank === 1 ? <Crown size={16} className="text-amber-400 mx-auto" /> :
                                         rank === 2 ? <Medal size={16} className="text-slate-400 mx-auto" /> :
                                         rank === 3 ? <Medal size={16} className="text-amber-600 mx-auto" /> :
                                         <span className="text-xs font-bold text-muted-foreground">{rank}</span>}
                                    </div>

                                    {/* Avatar */}
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${getAvatarGradient(item.display_name)} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                                        {item.display_name.charAt(0).toUpperCase()}
                                    </div>

                                    {/* Name */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-sm font-bold text-foreground truncate">{item.display_name}</span>
                                            {isCurrentUser && (
                                                <span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-[9px] font-extrabold rounded shrink-0">Siz</span>
                                            )}
                                        </div>
                                        <p className="text-[11px] text-muted-foreground">Lvl {item.level} · {item.level_title}</p>
                                    </div>

                                    {/* Streak */}
                                    <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-rose-500 shrink-0">
                                        <Flame size={13} /> {item.streak_days}
                                    </div>

                                    {/* XP */}
                                    <div className="shrink-0">
                                        <span className="text-sm font-black text-amber-500 font-mono tabular-nums">{item.total_xp.toLocaleString()}</span>
                                        <span className="text-[10px] text-muted-foreground ml-0.5">XP</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
