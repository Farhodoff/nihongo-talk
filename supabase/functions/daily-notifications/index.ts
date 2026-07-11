// @ts-expect-error: Deno imports
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';
// @ts-expect-error: Deno imports
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);



// Helper to escape HTML characters
function escapeHTML(str: string): string {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Helper to send message
async function sendMessage(chatId: number, text: string, reply_markup?: any) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const body: any = {
            chat_id: chatId,
            text,
            parse_mode: 'HTML'
        };
        if (reply_markup) {
            body.reply_markup = reply_markup;
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        if (!data.ok) {
            console.error(`Failed to send message to ${chatId}:`, data);
        }
        return data;
    } catch (error) {
        console.error(`Error sending message to ${chatId}:`, error);
        return null;
    }
}

serve(async (req: Request) => {
    try {
        const url = new URL(req.url);
        const debugTime = url.searchParams.get('time');

        // 1. Get current time in Uzbekistan Time (UTC+5)
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Tashkent',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const dateFormatter = new Intl.DateTimeFormat('en-CA', { // YYYY-MM-DD format
            timeZone: 'Asia/Tashkent',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        const now = new Date();
        const currentTime = (debugTime || timeFormatter.format(now)).trim();
        const todayDate = dateFormatter.format(now); // Local YYYY-MM-DD

        console.log(`Checking notifications at: "${currentTime}" (Tashkent Time), Date: ${todayDate}`);

        // Default: Do nothing if not 09:00 or 21:00
        if (currentTime !== '09:00' && currentTime !== '21:00' && !debugTime) {
            return new Response(JSON.stringify({ message: `No scheduled notifications for ${currentTime}` }), { status: 200 });
        }

        // 2. Get ALL active users with notifications enabled
        const { data: users, error: userError } = await supabase
            .from('telegram_users')
            .select('user_id, chat_id, telegram_first_name')
            .eq('notifications_enabled', true)
            .eq('is_active', true);

        if (userError) {
            console.error('Error fetching users:', userError);
            return new Response(JSON.stringify({ error: userError.message }), { status: 500 });
        }

        if (!users || users.length === 0) {
            return new Response(JSON.stringify({ message: 'No active users found' }), { status: 200 });
        }

        console.log(`Found ${users.length} users to notify`);
        let sentCount = 0;

        for (const user of users) {
            // Fetch tasks for TODAY (Local Date)
            const { data: tasks, error: taskError } = await supabase
                .from('tasks')
                .select('title, due_date, priority, status')
                .eq('user_id', user.user_id)
                .lte('due_date', todayDate + 'T23:59:59') // Tasks due today or earlier
                .order('due_date', { ascending: true });

            if (taskError) {
                console.error(`Error fetching tasks for user ${user.user_id}:`, taskError);
                continue;
            }

            const pendingTasks = tasks?.filter((t: { status: string }) => t.status !== 'done') || [];
            const completedTasks = tasks?.filter((t: { status: string; due_date?: string }) => t.status === 'done' && t.due_date?.startsWith(todayDate)) || [];

            let message = '';

            // --- MORNING NOTIFICATION (09:00) ---
            if (currentTime === '09:00') {
                if (pendingTasks.length === 0) {
                    message = `🌅 <b>Xayrli tong, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        `Bugungi kun uchun rejalashtirilgan vazifalar yo'q.\n` +
                        `Yangi vazifa qo'shish uchun saytga kiring! 🚀\n\n` +
                        `<i>Unumli kun tilayman!</i> ✨`;
                } else {
                    const taskList = pendingTasks.map((t: { priority: string; title: string }) => {
                        const icon = t.priority === 'urgent' ? '🔴' : t.priority === 'high' ? '🟠' : '🔵';
                        return `${icon} <b>${escapeHTML(t.title)}</b>`;
                    }).join('\n');

                    message = `🌅 <b>Xayrli tong, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        `Bugungi rejalaringiz (${pendingTasks.length} ta):\n\n` +
                        `${taskList}\n\n` +
                        `<i>Unumli kun tilayman!</i> ✨`;
                }
                if (message) {
                    await sendMessage(user.chat_id, message);
                    sentCount++;
                }
            }

            // --- EVENING NOTIFICATION (21:00) ---
            else if (currentTime === '21:00') {
                const isSunday = now.getDay() === 0;

                if (isSunday) {
                    // WEEKLY REPORT
                    const weekAgoDate = new Date(now);
                    weekAgoDate.setDate(weekAgoDate.getDate() - 7);
                    const weekAgoStr = dateFormatter.format(weekAgoDate);

                    // Fetch weekly tasks
                    const { data: weeklyTasks } = await supabase
                        .from('tasks')
                        .select('status')
                        .eq('user_id', user.user_id)
                        .eq('status', 'done')
                        .gte('due_date', weekAgoStr + 'T00:00:00')
                        .lte('due_date', todayDate + 'T23:59:59');

                    // Fetch weekly study sessions
                    const { data: weeklySessions } = await supabase
                        .from('study_sessions')
                        .select('duration')
                        .eq('user_id', user.user_id)
                        .eq('completed', true)
                        .eq('type', 'focus')
                        .gte('start_time', weekAgoStr + 'T00:00:00')
                        .lte('start_time', todayDate + 'T23:59:59');

                    const totalWeeklyTasks = weeklyTasks?.length || 0;
                    const totalDurationMinutes = weeklySessions?.reduce((acc: number, s: { duration: number }) => acc + (s.duration || 0), 0) || 0;
                    const hours = Math.floor(totalDurationMinutes / 60);
                    const minutes = totalDurationMinutes % 60;
                    const durationStr = hours > 0 ? `${hours} soat ${minutes} daqiqa` : `${minutes} daqiqa`;

                    message = `📊 <b>Haftalik Hisobotingiz tayyor, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        `O'tgan 7 kun ichida siz:\n` +
                        `✅ <b>${totalWeeklyTasks}</b> ta vazifani yakunladingiz.\n` +
                        `⏱ <b>${durationStr}</b> diqqat (fokus) qildingiz.\n\n` +
                        `Kelgusi haftada ham shu ruhda davom eting! 💪\n` +
                        `<i>Yaxshi dam oling!</i> 🌙`;
                    await sendMessage(user.chat_id, message);
                    sentCount++;

                } else {
                    // REGULAR DAILY REPORT + ACCOUNTABILITY
                    const { data: todaySessions } = await supabase
                        .from('study_sessions')
                        .select('duration')
                        .eq('user_id', user.user_id)
                        .eq('completed', true)
                        .gte('start_time', todayDate + 'T00:00:00')
                        .lte('start_time', todayDate + 'T23:59:59');

                    const todayDuration = todaySessions?.reduce((acc: number, s: { duration: number }) => acc + (s.duration || 0), 0) || 0;
                    const totalToday = pendingTasks.length + completedTasks.length;

                    if (completedTasks.length === 0 && todayDuration === 0) {
                        // User did NOTHING today
                        message = `⚠️ <b>Sizni sog'indik, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                                  `Bugun hech qanday vazifa yopilmadi va taymer ham ishlatilmadi.\n` +
                                  `Dangasalik qildikmi yoki jiddiy sabab bormi? Iltimos, pastdan tanlang:\n`;

                        const replyMarkup = {
                            inline_keyboard: [
                                [{ text: "😴 Charchadim", callback_data: `excuse_tired_${todayDate}` }],
                                [{ text: "⏳ Vaqtim bo'lmadi", callback_data: `excuse_notime_${todayDate}` }],
                                [{ text: "📉 Chalg'ib ketdim", callback_data: `excuse_distracted_${todayDate}` }],
                                [{ text: "✍️ Boshqa sabab", callback_data: `excuse_other_${todayDate}` }]
                            ]
                        };
                        await sendMessage(user.chat_id, message, replyMarkup);
                        sentCount++;
                    } else if (totalToday === 0 && todayDuration === 0) {
                        message = `🌙 <b>Xayrli kech, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                            `Bugun hech qanday vazifa belgilanmagan edi va dars qilinmadi.\n` +
                            `Ertangi kunni rejalashtirishni unutmang! 📅\n\n` +
                            `<i>Tinch osuda tun tilayman!</i> 😴`;
                        await sendMessage(user.chat_id, message);
                        sentCount++;
                    } else {
                        const progress = totalToday > 0 ? Math.round((completedTasks.length / totalToday) * 100) : 0;

                        message = `🌙 <b>Xayrli kech, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                            `📊 <b>Bugungi hisobot:</b>\n` +
                            `✅ Bajarildi: <b>${completedTasks.length}</b> ta\n` +
                            `⏳ Qoldi: <b>${pendingTasks.length}</b> ta\n` +
                            `⏱ Fokus vaqti: <b>${todayDuration} daqiqa</b>\n` +
                            `📈 Samardorlik: <b>${progress}%</b>\n\n` +
                            `${pendingTasks.length > 0 ? `<i>Ertaga qolgan vazifalarni bajarishni unutmang!</i> 💪` : `<i>Barchasini uddaladingiz! Barakalla!</i> 🎉`}\n\n` +
                            `<i>Tinch osuda tun tilayman!</i> 😴`;
                        await sendMessage(user.chat_id, message);
                        sentCount++;
                    }
                }
            }

            // Since we moved sendMessage inside the blocks to handle inline keyboards conditionally:
            await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
        }

        return new Response(JSON.stringify({
            message: `Notifications sent to ${sentCount} users at ${currentTime}`,
            total_users: users.length
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error: unknown) {
        console.error('Unexpected error:', error);
        const err = error as { message?: string };
        return new Response(JSON.stringify({ error: err.message || String(error) }), { status: 500 });
    }
});
