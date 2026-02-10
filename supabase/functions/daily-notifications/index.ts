
// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';
// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

interface Task {
    title: string;
    due_date: string;
    priority: string;
    status: string;
}

interface TelegramUser {
    user_id: string;
    chat_id: number;
    telegram_first_name: string;
}


// Helper to send message
async function sendMessage(chatId: number, text: string) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'Markdown'
            }),
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

        // 1. Get current time (HH:MM) in Uzbekistan Time (UTC+5)
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Tashkent',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        // Use debug time if provided, otherwise use current time
        const currentTime = debugTime || formatter.format(new Date());

        console.log(`Checking for notifications scheduled at: ${currentTime} (Tashkent Time)`);

        // 2. Get all users with notifications enabled AND matching time
        const { data: users, error: userError } = await supabase
            .from('telegram_users')
            .select('user_id, chat_id, telegram_first_name')
            .eq('notifications_enabled', true)
            .eq('is_active', true)
            .eq('notification_time', currentTime); // Match exact HH:MM


        if (userError) {
            console.error('Error fetching users:', userError);
            return new Response(JSON.stringify({ error: userError.message }), { status: 500 });
        }

        if (!users || users.length === 0) {
            console.log('No users to notify.');
            return new Response(JSON.stringify({ message: 'No users found' }), { status: 200 });
        }

        console.log(`Found ${users.length} users to check.`);

        let sentCount = 0;

        // 2. Iterate users and check for tasks
        for (const user of users) {
            const today = new Date().toISOString().split('T')[0];

            // Get tasks due today or overdue
            const { data: tasks, error: taskError } = await supabase
                .from('tasks')
                .select('title, due_date, priority, status')
                .eq('user_id', user.user_id)
                .neq('status', 'done')
                .lte('due_date', today + 'T23:59:59') // Due today or before
                .order('due_date', { ascending: true });

            if (taskError) {
                console.error(`Error fetching tasks for user ${user.user_id}:`, taskError);
                continue;
            }

            if (!tasks || tasks.length === 0) {
                // Optional: Send "No tasks today!" message or just skip
                continue;
            }

            // 3. Format Message
            const taskList = tasks.map((t: any) => {
                const icon = t.priority === 'urgent' ? '🔴' : t.priority === 'high' ? '🟠' : '🔵';
                return `${icon} *${t.title}*`;
            }).join('\n');

            const message = `🌅 *Xayrli tong, ${user.telegram_first_name || 'Foydalanuvchi'}!*

Bugungi rejalaringiz:

${taskList}

_Unumli kun tilayman!_ ✨`;

            // 4. Send Message
            await sendMessage(user.chat_id, message);
            sentCount++;

            // Basic rate limiting (avoid hitting 30 msg/sec limit for large user bases)
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        return new Response(JSON.stringify({
            message: `Notifications sent to ${sentCount} users`,
            total_users: users.length
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error: any) {
        console.error('Unexpected error:', error);
        return new Response(JSON.stringify({ error: error.message || String(error) }), { status: 500 });
    }
});
