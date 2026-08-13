import React, { useState, useEffect } from 'react';
import { 
    Trophy, Flame, Award, Crown, Search, RefreshCw, 
    Zap, ShieldCheck 
} from 'lucide-react';
import { LeaderboardService, LeaderboardEntry } from '../services/LeaderboardService';
import { useStudyData } from '../context/StudyPlannerContext';
import { getLevelInfo } from '../utils/gamification';

export const LeaderboardPage: React.FC = () => {
    const { settings, user } = useStudyData();
    const totalXp = settings?.totalXp || 0;
    const currentStreak = settings?.currentStreak || 1;
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTab, setFilterTab] = useState<'all' | 'streak'>('all');

    const currentUserEmail = user?.email || 'guest_student@kaizen.ai';

    const loadData = async () => {
        setIsLoading(true);
        try {
            // First sync current user score
            await LeaderboardService.syncUserProgress(totalXp, currentStreak);
            const data = await LeaderboardService.getGlobalLeaderboard();
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

    const userLevelInfo = getLevelInfo(totalXp);
    const userRankItem = leaderboard.find(l => l.user_email === currentUserEmail);
    const userRankNumber = userRankItem?.rank || leaderboard.length + 1;

    const filteredLeaderboard = leaderboard.filter(item => {
        const matchesSearch = item.display_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.user_email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    }).sort((a, b) => {
        if (filterTab === 'streak') {
            return b.streak_days - a.streak_days;
        }
        return b.total_xp - a.total_xp;
    });

    const top1 = filteredLeaderboard[0];
    const top2 = filteredLeaderboard[1];
    const top3 = filteredLeaderboard[2];

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 pb-20 animate-in fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-500/20 text-amber-500 rounded-xl">
                            <Trophy size={24} />
                        </div>
                        <h1 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                            🏆 Kaizen AI Global Reyting (Leaderboard)
                        </h1>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                        Talabalarning kunlik streak kunlari, mashg'ulotlardan to'plagan XP ballari va umumiy reytingi.
                    </p>
                </div>

                <button
                    onClick={loadData}
                    className="px-3.5 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-xl text-xs font-bold transition-all flex items-center gap-2 border border-border self-start sm:self-auto"
                >
                    <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                    <span>Yangilash</span>
                </button>
            </div>

            {/* Current User Summary Banner */}
            <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
                <div className="flex items-center gap-4 min-w-0">
                    <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-gray-950 font-black text-xl shadow-lg shrink-0">
                        #{userRankNumber}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-extrabold text-white truncate">
                                {user?.email?.split('@')[0] || 'Sizning Profilingiz'}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                                <Award size={11} /> Level {userLevelInfo.level} • {userLevelInfo.title}
                            </span>
                        </div>
                        <p className="text-xs text-gray-300 mt-1 font-medium flex items-center gap-3">
                            <span className="flex items-center gap-1 text-amber-400 font-bold">
                                <Zap size={14} /> {totalXp.toLocaleString()} XP
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-rose-400 font-bold">
                                <Flame size={14} /> {currentStreak} Kunlik Streak
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    <div className="text-right text-xs">
                        <div className="text-gray-400 font-bold">Keyingi levelgacha:</div>
                        <div className="text-amber-300 font-black font-mono">{userLevelInfo.xpToNext} XP</div>
                    </div>
                    <div className="w-24 bg-white/10 rounded-full h-2 overflow-hidden border border-white/20">
                        <div 
                            className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-500" 
                            style={{ width: `${userLevelInfo.progress}%` }} 
                        />
                    </div>
                </div>
            </div>

            {/* TOP 3 CHAMPIONS PODIUM */}
            {filteredLeaderboard.length >= 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* 2nd Place (Silver) */}
                    {top2 && (
                        <div className="bg-card border border-slate-400/30 rounded-3xl p-5 text-center shadow-md relative overflow-hidden flex flex-col items-center justify-between space-y-3 order-2 md:order-1">
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-400/20 text-slate-300 text-[10px] font-black rounded-full border border-slate-400/30">
                                🥈 2-O'RIN
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-tr from-slate-300 to-slate-400 rounded-2xl flex items-center justify-center text-gray-900 font-black text-2xl shadow-lg mt-4">
                                🥈
                            </div>
                            <div>
                                <h4 className="font-extrabold text-foreground text-sm truncate max-w-[160px]">
                                    {top2.display_name}
                                </h4>
                                <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                                    {top2.level_title}
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-muted rounded-xl text-xs font-black font-mono text-slate-400 border border-border">
                                ⚡ {top2.total_xp.toLocaleString()} XP
                            </div>
                        </div>
                    )}

                    {/* 1st Place (Gold Champion) */}
                    {top1 && (
                        <div className="bg-gradient-to-b from-amber-500/15 via-card to-card border border-amber-500/50 rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-between space-y-3 order-1 md:order-2 scale-105 z-10">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-amber-500/20 text-amber-500 text-[10px] font-black rounded-full border border-amber-500/40 flex items-center gap-1 shadow-sm">
                                <Crown size={12} /> 🥇 CHAMPION
                            </div>
                            <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center text-gray-950 font-black text-3xl shadow-xl mt-4 border-2 border-amber-300 animate-pulse">
                                👑
                            </div>
                            <div>
                                <h4 className="font-black text-foreground text-base truncate max-w-[180px]">
                                    {top1.display_name}
                                </h4>
                                <div className="text-xs text-amber-500 font-extrabold mt-0.5 flex items-center justify-center gap-1">
                                    <ShieldCheck size={13} /> {top1.level_title}
                                </div>
                            </div>
                            <div className="px-4 py-1.5 bg-amber-500 text-gray-950 rounded-xl text-sm font-black font-mono shadow-md">
                                ⚡ {top1.total_xp.toLocaleString()} XP
                            </div>
                        </div>
                    )}

                    {/* 3rd Place (Bronze) */}
                    {top3 && (
                        <div className="bg-card border border-amber-700/30 rounded-3xl p-5 text-center shadow-md relative overflow-hidden flex flex-col items-center justify-between space-y-3 order-3">
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-amber-700/20 text-amber-600 dark:text-amber-400 text-[10px] font-black rounded-full border border-amber-700/30">
                                🥉 3-O'RIN
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-tr from-amber-700 to-amber-800 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg mt-4">
                                🥉
                            </div>
                            <div>
                                <h4 className="font-extrabold text-foreground text-sm truncate max-w-[160px]">
                                    {top3.display_name}
                                </h4>
                                <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                                    {top3.level_title}
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-muted rounded-xl text-xs font-black font-mono text-amber-700 dark:text-amber-400 border border-border">
                                ⚡ {top3.total_xp.toLocaleString()} XP
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center bg-muted p-1 rounded-2xl border border-border w-full sm:w-auto">
                    <button
                        onClick={() => setFilterTab('all')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                            filterTab === 'all'
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <Zap size={14} className="text-amber-500" />
                        <span>Barcha XP Ballar</span>
                    </button>
                    <button
                        onClick={() => setFilterTab('streak')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                            filterTab === 'streak'
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <Flame size={14} className="text-rose-500" />
                        <span>Kunlik Streaklar</span>
                    </button>
                </div>

                <div className="relative w-full sm:w-72">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Talabalar bo'yicha qidiruv..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-xl text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                </div>
            </div>

            {/* TOP 100 LEADERBOARD TABLE */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-muted/60 text-[11px] uppercase text-muted-foreground font-bold border-b border-border">
                            <tr>
                                <th className="p-4 text-center">O'rin</th>
                                <th className="p-4">Talaba</th>
                                <th className="p-4 text-center">Daraja & Unvon</th>
                                <th className="p-4 text-center">Streak</th>
                                <th className="p-4 text-right">Umumiy XP</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-xs text-muted-foreground">
                                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-amber-500 border-t-transparent mb-2" />
                                        <p>Global reyting yuklanmoqda...</p>
                                    </td>
                                </tr>
                            ) : filteredLeaderboard.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-xs text-muted-foreground">
                                        Qidiruv bo'yicha talabalar topilmadi.
                                    </td>
                                </tr>
                            ) : (
                                filteredLeaderboard.map(item => {
                                    const isCurrentUser = item.user_email === currentUserEmail;
                                    return (
                                        <tr 
                                            key={item.id} 
                                            className={`transition-colors ${
                                                isCurrentUser 
                                                    ? 'bg-amber-500/10 font-bold border-l-4 border-l-amber-500' 
                                                    : 'hover:bg-muted/30'
                                            }`}
                                        >
                                            <td className="p-4 text-center">
                                                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-xl font-black text-xs ${
                                                    item.rank === 1 ? 'bg-amber-500 text-gray-950 shadow-md' :
                                                    item.rank === 2 ? 'bg-slate-300 dark:bg-slate-700 text-foreground' :
                                                    item.rank === 3 ? 'bg-amber-700 text-white' :
                                                    'bg-muted text-muted-foreground'
                                                }`}>
                                                    {item.rank}
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm shrink-0">
                                                        {item.display_name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-bold text-foreground truncate flex items-center gap-1.5">
                                                            <span>{item.display_name}</span>
                                                            {isCurrentUser && (
                                                                <span className="px-1.5 py-0.5 bg-indigo-500 text-white text-[9px] font-extrabold rounded">
                                                                    Siz
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="text-[10px] text-muted-foreground truncate">
                                                            {item.user_email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="p-4 text-center">
                                                <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-muted border border-border text-foreground inline-flex items-center gap-1">
                                                    Lvl {item.level} • {item.level_title}
                                                </span>
                                            </td>

                                            <td className="p-4 text-center font-mono font-bold text-rose-500">
                                                <span className="inline-flex items-center gap-1 bg-rose-500/10 px-2 py-0.5 rounded-md">
                                                    🔥 {item.streak_days} kun
                                                </span>
                                            </td>

                                            <td className="p-4 text-right font-mono font-black text-amber-500 text-sm">
                                                ⚡ {item.total_xp.toLocaleString()} XP
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
