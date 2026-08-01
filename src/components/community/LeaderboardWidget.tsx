import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Star, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Skeleton from '../ui/Skeleton';

interface CommunityUser {
    id: string;
    full_name: string;
    level: number;
    total_xp: number;
    avatar_url: string;
    isMe?: boolean;
}

const LeaderboardWidget: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<CommunityUser[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        setLoading(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { data } = await supabase
                .from('profiles')
                .select('id, full_name, level, total_xp, avatar_url')
                .order('total_xp', { ascending: false })
                .limit(50);

            let dbUsers: CommunityUser[] = [];
            if (data && data.length > 0) {
                dbUsers = data.map(u => ({
                    id: u.id,
                    full_name: u.full_name || 'Talaba',
                    level: u.level || 1,
                    total_xp: u.total_xp || 0,
                    avatar_url: u.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${u.full_name || u.id}`,
                    isMe: user?.id === u.id
                }));
            }

            const defaultMembers: CommunityUser[] = [
                { id: '99a2f2c1-3fa0-477e-b73c-2ca6537d1721', full_name: 'Farhod Soyilov', level: 10, total_xp: 25400, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Farhod' },
                { id: '02d66fab-68a0-45a6-9493-4984c14eb677', full_name: 'Ibodullayev Dev', level: 8, total_xp: 18900, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ibodullayev' },
                { id: 'b173e27e-01e8-43d1-8a3d-b373e4b71e12', full_name: 'Shohruh Oblakulov', level: 7, total_xp: 15600, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shohruh' },
                { id: 'f2012408-c512-4c16-a984-3639ca8ea516', full_name: 'Shahina Norqulova', level: 6, total_xp: 13200, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shahina' },
                { id: 'e8c4f1e6-d12c-4e9c-a9f3-41cf492b9a54', full_name: 'Dilshodbek Usmonov', level: 6, total_xp: 12100, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshodbek' },
                { id: '92d9dfb1-8e93-47f9-b6f2-c2e40a9de0bf', full_name: 'Mirzayev Jo\'rabek', level: 5, total_xp: 10800, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mirzayev' },
                { id: '8545b7e4-9b85-4a19-a001-45a6f0823844', level: 5, total_xp: 9500, full_name: 'Murodjon Olimjonov', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Murodjon' },
                { id: '2e395f64-4b64-43be-8ce8-a9fc46ca9634', level: 4, total_xp: 8400, full_name: 'Ogabek', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ogabek' },
                { id: 'f76d6c68-bfee-4b5b-91a5-c96a774ec544', level: 4, total_xp: 7600, full_name: 'Sardor Soyilov', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sardor' },
                { id: 'f33bded2-e41f-4bf2-935f-2d3f9546b232', level: 4, total_xp: 6900, full_name: 'Gemini AI Assistant', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gemini' },
                { id: '0ddb46de-b612-42bf-b013-9aeab3d20188', level: 3, total_xp: 5800, full_name: 'Dhan', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dhan' },
                { id: '90e7922f-64d2-4f9a-b522-34a52e24cdd2', level: 3, total_xp: 4900, full_name: 'Oblakulov Shohruh', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oblakulov' },
                { id: '5ef8a391-b523-420c-8c9e-d33ed742759e', level: 2, total_xp: 3800, full_name: 'ggfddrgbvcde', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ggfdd' },
                { id: 'e8f1b6dd-7740-4f1d-b627-d2620beb8743', level: 2, total_xp: 3200, full_name: 'User 13', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User13' },
                { id: 'd767f465-4da1-4cef-81da-6b6c6066aadd', level: 2, total_xp: 2600, full_name: 'Test User', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Test' },
                { id: '9489263a-b23c-47d9-a0d5-157c78547e35', level: 2, total_xp: 2100, full_name: 'Test User 1', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Test1' },
                { id: '3153e276-d72f-4f7c-9cb9-738c22125b73', level: 1, total_xp: 1700, full_name: 'Murodjon 2', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Murodjon2' },
                { id: '4bcd845a-61f9-4565-8ca8-c8289dbcafc8', level: 1, total_xp: 1300, full_name: 'Personal User', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Personal' },
                { id: '89d2d404-f610-4ccf-8ecd-1bea6510ee0a', level: 1, total_xp: 950, full_name: 'Murodjon 3', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Murodjon3' },
                { id: '4b91e127-139d-4ece-8480-bff8d7dda14c', level: 1, total_xp: 600, full_name: 'Oblakulov 3', avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oblakulov3' }
            ];

            const dbUserIds = new Set(dbUsers.map(u => u.id));
            const missingDefault = defaultMembers.filter(m => !dbUserIds.has(m.id));
            const merged = [...dbUsers, ...missingDefault].sort((a, b) => b.total_xp - a.total_xp);

            setLeaderboard(merged);
        } catch (err) {
            console.error('Leaderboard error:', err);
        } finally {
            setLoading(false);
        }
    };

    const getRankIcon = (index: number) => {
        switch (index) {
            case 0: return <Trophy className="text-yellow-500" size={24} />;
            case 1: return <Medal className="text-gray-400" size={24} />;
            case 2: return <Medal className="text-amber-600" size={24} />;
            default: return <span className="text-gray-400 font-bold text-lg">{index + 1}</span>;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Star className="text-yellow-300 fill-yellow-300" size={20} />
                            <h3 className="text-2xl font-bold tracking-tight">Global Reyting</h3>
                        </div>
                        <p className="text-indigo-100 text-sm font-medium">Bu haftaning eng faol bilimdonlari</p>
                    </div>
                    <button 
                        onClick={fetchLeaderboard} 
                        className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-md border border-white/10 group"
                        disabled={loading}
                    >
                        <RefreshCw size={20} className={loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'} />
                    </button>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>

            <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
                {loading ? (
                    <div className="space-y-6 p-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Skeleton width={32} height={32} className="rounded-lg" />
                                <Skeleton circle width={56} height={56} />
                                <div className="flex-1 space-y-3">
                                    <div className="flex justify-between">
                                        <Skeleton width="50%" height={24} />
                                        <Skeleton width="20%" height={20} />
                                    </div>
                                    <Skeleton width="100%" height={8} className="rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    leaderboard.map((user, index) => (
                        <div
                            key={user.id}
                            className={`group flex items-center p-5 md:p-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 ${user.isMe ? 'bg-indigo-50/50 dark:bg-indigo-500/5 border-l-4 border-l-indigo-500' : ''}`}
                        >
                            <div className="w-12 flex justify-center items-center shrink-0">
                                {getRankIcon(index)}
                            </div>
                            
                            <div className="relative shrink-0 mx-4">
                                <img 
                                    src={user.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.full_name}`}
                                    alt="Avatar"
                                    aria-label="Avatar"
                                    className={`w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 object-cover border-2 shadow-sm ${index === 0 ? 'border-yellow-400' : 'border-white dark:border-gray-600'}`}
                                />
                                {index === 0 && (
                                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-1 shadow-lg">
                                        <Star size={12} fill="currentColor" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1.5 gap-2">
                                    <h4 className={`font-bold truncate text-lg ${user.isMe ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                                        {user.full_name || 'Talaba'} {user.isMe && <span className="text-xs font-medium px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 rounded-full ml-1 uppercase tracking-wider">Siz</span>}
                                    </h4>
                                    <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg shrink-0">Lvl {user.level}</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden mb-1.5">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-indigo-500'}`}
                                        style={{ width: `${Math.min((user.total_xp / 10000) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-indigo-600/80 dark:text-indigo-400/80">{user.total_xp.toLocaleString()} XP</span>
                                    {index < 3 && <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Master</span>}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {!loading && leaderboard.length === 0 && (
                    <div className="p-16 text-center">
                        <div className="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                            <RefreshCw size={40} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Ma'lumotlar topilmadi</h3>
                        <p className="text-gray-500 text-sm">Reytingni ko'rish uchun biroz kuting yoki yangilang.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeaderboardWidget;
