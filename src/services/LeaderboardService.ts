import { supabase } from '../lib/supabase';
import { getLevelInfo } from '../utils/gamification';

export interface LeaderboardEntry {
    id: string;
    user_id?: string | null;
    user_email: string;
    display_name: string;
    avatar_url?: string;
    total_xp: number;
    level: number;
    level_title: string;
    streak_days: number;
    last_active_at: string;
    rank?: number;
}

const LOCAL_LEADERBOARD_KEY = 'kaizen_user_leaderboard_cache';

export class LeaderboardService {
    // 1. Sync User XP & Streak to Supabase Leaderboard
    static async syncUserProgress(xp: number, streakDays: number = 1): Promise<void> {
        try {
            const { data: userData } = await supabase.auth.getUser();
            const email = userData?.user?.email || 'guest_student@kaizen.ai';
            const userId = userData?.user?.id || null;
            const displayName = email.split('@')[0];
            const levelInfo = getLevelInfo(xp);

            const record: Partial<LeaderboardEntry> = {
                id: email,
                user_id: userId,
                user_email: email,
                display_name: displayName,
                total_xp: xp,
                level: levelInfo.level,
                level_title: levelInfo.title,
                streak_days: Math.max(1, streakDays),
                last_active_at: new Date().toISOString()
            };

            // Save to Local Cache
            localStorage.setItem(LOCAL_LEADERBOARD_KEY, JSON.stringify(record));

            // Sync to Supabase table
            await supabase.from('user_leaderboard').upsert(record, { onConflict: 'id' });
        } catch (e) {
            console.warn('Leaderboard sync notice:', e);
        }
    }

    // 2. Fetch Global Top 100 Leaderboard
    static async getGlobalLeaderboard(): Promise<LeaderboardEntry[]> {
        let list: LeaderboardEntry[] = [];

        try {
            const { data, error } = await supabase
                .from('user_leaderboard')
                .select('*')
                .order('total_xp', { ascending: false })
                .limit(100);

            if (!error && data && data.length > 0) {
                list = data.map((item, index) => ({
                    id: item.id || `user-${index}`,
                    user_email: item.user_email || 'Student',
                    display_name: item.display_name || item.user_email?.split('@')[0] || 'Talaba',
                    avatar_url: item.avatar_url,
                    total_xp: item.total_xp || 0,
                    level: item.level || 1,
                    level_title: item.level_title || "Boshlang'ich Talaba",
                    streak_days: item.streak_days || 1,
                    last_active_at: item.last_active_at || new Date().toISOString(),
                    rank: index + 1
                }));
            }
        } catch (e) {
            console.warn('Supabase leaderboard fetch notice:', e);
        }

        // Fallback default student mock entries if DB table has few entries
        if (list.length < 5) {
            const defaultEntries: LeaderboardEntry[] = [
                { id: '1', user_email: 'fsoyilov@gmail.com', display_name: 'Farhod (Super Admin)', total_xp: 15400, level: 7, level_title: 'Grossmeyster', streak_days: 14, last_active_at: new Date().toISOString(), rank: 1 },
                { id: '2', user_email: 'kenji.tanaka@japan.jp', display_name: 'Kenji Tanaka', total_xp: 9800, level: 6, level_title: 'Usta', streak_days: 10, last_active_at: new Date().toISOString(), rank: 2 },
                { id: '3', user_email: 'sakura.yoshida@tokyo.edu', display_name: 'Sakura Yoshida', total_xp: 6200, level: 5, level_title: 'Ekspert', streak_days: 7, last_active_at: new Date().toISOString(), rank: 3 },
                { id: '4', user_email: 'student_pro@planner.app', display_name: 'Azizbek K.', total_xp: 4100, level: 4, level_title: 'Tadqiqotchi', streak_days: 5, last_active_at: new Date().toISOString(), rank: 4 },
                { id: '5', user_email: 'nodira_ja@planner.app', display_name: 'Nodira M.', total_xp: 2800, level: 3, level_title: 'Olim', streak_days: 4, last_active_at: new Date().toISOString(), rank: 5 }
            ];

            for (const d of defaultEntries) {
                if (!list.some(l => l.user_email === d.user_email)) {
                    list.push(d);
                }
            }

            list.sort((a, b) => b.total_xp - a.total_xp);
            list.forEach((item, idx) => { item.rank = idx + 1; });
        }

        return list;
    }
}
