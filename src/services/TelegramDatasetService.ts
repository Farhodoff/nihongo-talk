/**
 * TelegramDatasetService
 * Handles automated daily dispatch of speech transcripts, error telemetry,
 * and audio datasets to a private Telegram channel or group.
 */

import { supabase } from '../lib/supabase';

const TELEGRAM_VAULT_TOKEN_KEY = 'nihon_talk_telegram_dataset_bot_token';
const TELEGRAM_VAULT_CHAT_ID_KEY = 'nihon_talk_telegram_dataset_chat_id';

export interface DailySpeechSummary {
    date: string;
    totalSessions: number;
    totalDurationMinutes: number;
    activeUsersCount: number;
    topTopics: { topic: string; count: number }[];
    topMistakes: { mistake: string; correction: string; count: number }[];
    sessions: Array<{
        id: string;
        anonymousUserId: string;
        userEmail?: string;
        language: string;
        topic: string;
        durationSeconds: number;
        score: number;
        createdAt: string;
        audioUrl?: string;
        transcript: Array<{ role: string; content: string }>;
    }>;
}

export function toAnonymousUserId(userIdOrEmail?: string): string {
    if (!userIdOrEmail) return 'anon_user';
    if (userIdOrEmail.includes('-') && userIdOrEmail.length >= 8) {
        return `user_${userIdOrEmail.split('-')[0]}`;
    }
    let hash = 0;
    for (let i = 0; i < userIdOrEmail.length; i++) {
        hash = ((hash << 5) - hash) + userIdOrEmail.charCodeAt(i);
        hash |= 0;
    }
    return `user_${Math.abs(hash).toString(16).padStart(8, '0').slice(0, 8)}`;
}

export class TelegramDatasetService {
    static getStoredConfig(): { botToken: string; chatId: string } {
        if (typeof window === 'undefined') {
            return {
                botToken: (import.meta as any).env?.VITE_TELEGRAM_DATASET_BOT_TOKEN || '',
                chatId: (import.meta as any).env?.VITE_TELEGRAM_DATASET_CHAT_ID || ''
            };
        }
        return {
            botToken: localStorage.getItem(TELEGRAM_VAULT_TOKEN_KEY) || (import.meta as any).env?.VITE_TELEGRAM_DATASET_BOT_TOKEN || '',
            chatId: localStorage.getItem(TELEGRAM_VAULT_CHAT_ID_KEY) || (import.meta as any).env?.VITE_TELEGRAM_DATASET_CHAT_ID || ''
        };
    }

    static saveConfig(botToken: string, chatId: string): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(TELEGRAM_VAULT_TOKEN_KEY, botToken.trim());
        localStorage.setItem(TELEGRAM_VAULT_CHAT_ID_KEY, chatId.trim());
    }

    /**
     * Aggregates speech sessions for a specific date ('YYYY-MM-DD'), '7DAYS', or 'ALL'
     */
    static async getDailySummary(targetDate?: string): Promise<DailySpeechSummary> {
        const todayStr = targetDate || new Date().toISOString().split('T')[0];
        
        let allSessions: any[] = [];
        try {
            // 1. Try fetching via get_admin_all_sessions RPC
            const { data: rpcData, error: rpcErr } = await supabase.rpc('get_admin_all_sessions');
            if (!rpcErr && rpcData) {
                const sp = Array.isArray(rpcData.speaking_sessions) ? rpcData.speaking_sessions : [];
                const sc = Array.isArray(rpcData.speaking_coach_sessions) ? rpcData.speaking_coach_sessions : [];
                const ai = Array.isArray(rpcData.ai_coach_sessions) ? rpcData.ai_coach_sessions : [];
                
                const merged = [...sp];
                for (const item of [...sc, ...ai]) {
                    if (!merged.some(s => s.id === item.id)) merged.push(item);
                }

                if (todayStr === 'ALL') {
                    allSessions = merged;
                } else if (todayStr === '7DAYS') {
                    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
                    allSessions = merged.filter(s => (s.created_at || '') >= cutoff);
                } else {
                    allSessions = merged.filter(s => (s.created_at || '').startsWith(todayStr));
                }
            }
        } catch (e) {
            console.warn('RPC session fetch notice:', e);
        }

        // 2. Direct table fallback if RPC didn't populate sessions
        if (allSessions.length === 0) {
            try {
                let spQuery = supabase.from('speaking_sessions').select('*').order('created_at', { ascending: false });
                let scQuery = supabase.from('speaking_coach_sessions').select('*').order('created_at', { ascending: false });
                let aiQuery = supabase.from('ai_coach_sessions').select('*').order('created_at', { ascending: false });

                if (todayStr === 'ALL') {
                    // No date filter
                } else if (todayStr === '7DAYS') {
                    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
                    spQuery = spQuery.gte('created_at', cutoff);
                    scQuery = scQuery.gte('created_at', cutoff);
                    aiQuery = aiQuery.gte('created_at', cutoff);
                } else {
                    spQuery = spQuery.gte('created_at', `${todayStr}T00:00:00.000Z`).lte('created_at', `${todayStr}T23:59:59.999Z`);
                    scQuery = scQuery.gte('created_at', `${todayStr}T00:00:00.000Z`).lte('created_at', `${todayStr}T23:59:59.999Z`);
                    aiQuery = aiQuery.gte('created_at', `${todayStr}T00:00:00.000Z`).lte('created_at', `${todayStr}T23:59:59.999Z`);
                }

                const [spRes, scRes, aiRes] = await Promise.allSettled([spQuery, scQuery, aiQuery]);

                if (spRes.status === 'fulfilled' && Array.isArray(spRes.value.data)) {
                    allSessions.push(...spRes.value.data);
                }
                if (scRes.status === 'fulfilled' && Array.isArray(scRes.value.data)) {
                    for (const item of scRes.value.data) {
                        if (!allSessions.some(s => s.id === item.id)) allSessions.push(item);
                    }
                }
                if (aiRes.status === 'fulfilled' && Array.isArray(aiRes.value.data)) {
                    for (const item of aiRes.value.data) {
                        if (!allSessions.some(s => s.id === item.id)) allSessions.push(item);
                    }
                }
            } catch (e) {
                console.warn('Speech sessions direct fetch warning:', e);
            }
        }

        // 3. Fallback to local storage history if Supabase is offline
        if (allSessions.length === 0 && typeof window !== 'undefined') {
            try {
                const localHistory = JSON.parse(localStorage.getItem('nihon_talk_scenario_history') || '[]');
                allSessions = localHistory.filter((s: any) => {
                    const d = s.created_at || s.timestamp || new Date().toISOString();
                    if (todayStr === 'ALL') return true;
                    if (todayStr === '7DAYS') {
                        const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
                        return d >= cutoff;
                    }
                    return d.startsWith(todayStr);
                });
            } catch {}
        }

        let totalDurationSec = 0;
        const userSet = new Set<string>();
        const topicCounts = new Map<string, number>();
        const mistakesMap = new Map<string, { mistake: string; correction: string; count: number }>();

        const formattedSessions = allSessions.map(s => {
            const dur = s.duration_seconds || (s.duration || 0);
            totalDurationSec += dur;
            const anonUid = toAnonymousUserId(s.user_id || s.user_email);
            userSet.add(anonUid);

            const topic = s.persona_title || s.scenario_title || s.topic || 'Umumiy suhbat';
            topicCounts.set(topic, (topicCounts.get(topic) || 0) + 1);

            // Collect mistakes if available in transcript / feedback
            if (Array.isArray(s.grammar_corrections)) {
                s.grammar_corrections.forEach((c: any) => {
                    if (c.original && c.corrected) {
                        const key = `${c.original}->${c.corrected}`;
                        const existing = mistakesMap.get(key) || { mistake: c.original, correction: c.corrected, count: 0 };
                        existing.count++;
                        mistakesMap.set(key, existing);
                    }
                });
            }

            return {
                id: s.id,
                anonymousUserId: anonUid,
                userEmail: s.user_email, // for admin telegram internal summary only
                language: s.language || (topic.includes('Yapon') || /[\u3040-\u30ff\u4e00-\u9faf]/.test(topic) ? 'ja' : 'en'),
                topic,
                durationSeconds: dur,
                score: s.overall_score || s.fluency_score || 80,
                createdAt: s.created_at || new Date().toISOString(),
                audioUrl: s.audio_url || s.recorded_url || undefined,
                transcript: Array.isArray(s.transcript) ? s.transcript : []
            };
        });

        const topTopics = Array.from(topicCounts.entries())
            .map(([topic, count]) => ({ topic, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

        const topMistakes = Array.from(mistakesMap.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

        return {
            date: todayStr,
            totalSessions: formattedSessions.length,
            totalDurationMinutes: Math.round(totalDurationSec / 60),
            activeUsersCount: userSet.size,
            topTopics,
            topMistakes,
            sessions: formattedSessions
        };
    }

    /**
     * Send daily summary & transcripts report to private Telegram chat/channel
     */
    static async sendDailyReportToTelegram(customSummary?: DailySpeechSummary): Promise<{ success: boolean; message: string }> {
        const { botToken, chatId } = this.getStoredConfig();
        if (!botToken || !chatId) {
            return {
                success: false,
                message: "Telegram Bot Token yoki Chat ID kiritilmagan. Iltimos, maxfiy paneldan sozlamalarni to'ldiring."
            };
        }

        const summary = customSummary || await this.getDailySummary();

        // 1. Build Header & High-level Stats Message
        let messageText = `📊 <b>Nihon Talk — KUNLIK OVOZLI SUHBATLAR HISOBOTI (${summary.date})</b>\n`;
        messageText += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        messageText += `🗣 <b>Jami suhbatlar:</b> ${summary.totalSessions} ta\n`;
        messageText += `⏱ <b>Umumiy suhbat vaqti:</b> ${summary.totalDurationMinutes} daqiqa\n`;
        messageText += `👥 <b>Faol foydalanuvchilar:</b> ${summary.activeUsersCount} nafar\n\n`;

        // Top Topics
        if (summary.topTopics.length > 0) {
            messageText += `🔥 <b>Eng ko'p gaplashilgan mavzular:</b>\n`;
            summary.topTopics.forEach((t, i) => {
                messageText += `  ${i + 1}. <b>${t.topic}</b> (${t.count} ta suhbat)\n`;
            });
            messageText += `\n`;
        }

        // Top Mistakes
        if (summary.topMistakes.length > 0) {
            messageText += `⚠️ <b>Eng ko'p uchragan grammatik xatolar:</b>\n`;
            summary.topMistakes.forEach((m, i) => {
                messageText += `  ${i + 1}. <s>${m.mistake}</s> ➔ <b>${m.correction}</b> (${m.count}x)\n`;
            });
            messageText += `\n`;
        }

        // Transcripts Snippets
        if (summary.sessions.length > 0) {
            messageText += `📝 <b>SO'NGGI TRANSKRIPTLAR (Namuna):</b>\n`;
            summary.sessions.slice(0, 3).forEach((s) => {
                messageText += `\n━━━━━━━━━━━━━━━━\n`;
                messageText += `👤 <b>${s.userEmail}</b> [${s.language.toUpperCase()}] • ${s.topic} (${Math.round(s.durationSeconds)}s, Ball: ${s.score}%)\n`;
                
                const userTurns = s.transcript.filter(t => t.role === 'user');
                userTurns.slice(0, 3).forEach(t => {
                    messageText += `🗣 <i>"${t.content}"</i>\n`;
                });
            });
        } else {
            messageText += `<i>Bugun hali yangi suhbatlar yozilmadi.</i>\n`;
        }

        messageText += `\n🤖 <i>Nihon Talk Speech Dataset Engine</i>`;

        try {
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
            const resp = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: messageText,
                    parse_mode: 'HTML'
                })
            });

            const result = await resp.json();
            if (!result.ok) {
                throw new Error(result.description || 'Telegram API xatoligi');
            }

            return {
                success: true,
                message: `Hisobot Telegram guruhiga muvaffaqiyatli yuborildi! (${summary.totalSessions} ta suhbat)`
            };
        } catch (err: any) {
            console.error('Telegram dispatch error:', err);
            return {
                success: false,
                message: err.message || 'Telegramga yuborishda xatolik yuz berdi.'
            };
        }
    }

    /**
     * Optional: Send ZIP file directly to Telegram channel as a document
     */
    static async sendZipDocumentToTelegram(zipBlob: Blob, filename: string, caption?: string): Promise<{ success: boolean; message: string }> {
        const { botToken, chatId } = this.getStoredConfig();
        if (!botToken || !chatId) {
            return { success: false, message: 'Telegram sozlamalari topilmadi.' };
        }

        try {
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('document', zipBlob, filename);
            if (caption) {
                formData.append('caption', caption);
                formData.append('parse_mode', 'HTML');
            }

            const url = `https://api.telegram.org/bot${botToken}/sendDocument`;
            const resp = await fetch(url, {
                method: 'POST',
                body: formData
            });

            const result = await resp.json();
            if (!result.ok) {
                throw new Error(result.description || 'Telegram Document yuborishda xatolik');
            }

            return { success: true, message: 'Dataset ZIP fayli Telegram guruhiga yuborildi!' };
        } catch (err: any) {
            console.error('Send document error:', err);
            return { success: false, message: err.message || 'Hujjatni yuborishda xatolik' };
        }
    }

    /**
     * Start background timer checking if 22:00 has arrived today
     */
    static startDaily22PmScheduler(): void {
        if (typeof window === 'undefined') return;

        const checkAndDispatch = async () => {
            const now = new Date();
            const currentHour = now.getHours();
            const todayStr = now.toISOString().split('T')[0];
            const lastDispatched = localStorage.getItem('nihon_talk_telegram_last_dispatched_date');

            // Agar kechki soat 22:00 (yoki keyinroq) bo'lsa va bugun hali yuborilmagan bo'lsa
            if (currentHour >= 22 && lastDispatched !== todayStr) {
                try {
                    const result = await TelegramDatasetService.sendDailyReportToTelegram();
                    if (result.success) {
                        localStorage.setItem('nihon_talk_telegram_last_dispatched_date', todayStr);
                        console.log('✅ Nihon Talk Daily 22:00 Telegram Telemetry Dispatched Successfully');
                    }
                } catch (e) {
                    console.warn('Auto 22:00 dispatch warning:', e);
                }
            }
        };

        // Check on boot and every 15 minutes
        checkAndDispatch();
        setInterval(checkAndDispatch, 15 * 60 * 1000);
    }
}
