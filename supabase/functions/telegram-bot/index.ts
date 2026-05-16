import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

console.log('Bot initializing...', {
    hasToken: !!BOT_TOKEN,
    hasUrl: !!SUPABASE_URL,
    hasKey: !!SUPABASE_KEY
});

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Send message to Telegram
async function sendMessage(chatId: number, text: string) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
    });
    return response.json();
}

// Handle /start command
async function handleStart(message: any) {
    const chatId = message.chat.id;
    const text = message.text || '';
    const args = text.split(' ')[1]?.trim(); // Get code after /start

    const telegramId = message.from?.id;
    const username = message.from?.username;
    const firstName = message.from?.first_name;
    const lastName = message.from?.last_name;

    console.log('/start received:', { chatId, args, telegramId });

    // Check if user already linked
    if (!args) {
        const { data: existingLink } = await supabase
            .from('telegram_users')
            .select('*')
            .eq('telegram_id', telegramId)
            .single();

        if (existingLink) {
            // Already linked - show status
            return sendMessage(chatId, `✅ Akkauntingiz allaqachon bog'langan!

👤 Ism: ${existingLink.telegram_first_name}
📱 Username: @${existingLink.telegram_username || 'yo\'q'}

🔔 Xabarnomalar: ${existingLink.notifications_enabled ? 'Yoniq' : 'O\'chiq'}

📋 Nima qila olasiz:
• Vazifalar va maqsadlar haqida xabarnomalar olish
• Deadline eslatmalari (24h & 1h oldin)
• Kunlik xulosalar (9:00 va 20:00)

⚙️ Sozlamalar: veb saytda Settings → Telegram

Yordam: /help`);
        }
    }

    if (args && telegramId) {
        // Code linking flow
        console.log('Checking code:', args);

        const { data: linkCode, error } = await supabase
            .from('telegram_link_codes')
            .select('*')
            .eq('code', args)
            .eq('used', false)
            .gt('expires_at', new Date().toISOString())
            .single();

        if (error || !linkCode) {
            console.log('Invalid code:', error);
            return sendMessage(chatId, "Noto'g'ri yoki muddati o'tgan kod!\n\nIltimos, veb saytdan yangi kod oling.");
        }

        // Create link
        const { error: linkError } = await supabase
            .from('telegram_users')
            .insert({
                user_id: linkCode.user_id,
                telegram_id: telegramId,
                telegram_username: username,
                telegram_first_name: firstName,
                telegram_last_name: lastName,
                chat_id: chatId,
            });

        if (linkError) {
            console.error('Link error:', linkError);
            return sendMessage(chatId, "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
        }

        // Mark code used
        await supabase
            .from('telegram_link_codes')
            .update({ used: true })
            .eq('id', linkCode.id);

        console.log('Successfully linked!');
        return sendMessage(chatId, "Muvaffaqiyatli ulandi!\n\nAkkauntingiz Telegram bilan bog'landi.\nEndi vazifalar va maqsadlar haqida xabarnomalar olasiz.");
    } else {
        // Welcome message - not linked yet
        return sendMessage(chatId, "Salom! Study Planner botiga xush kelibsiz!\n\nAkkauntingizni bog'lash uchun:\n1. Veb saytga kiring\n2. Settings → Telegram ga o'ting\n3. Kod oling va /start KOD yuboring\n\nYordam: /help");
    }
}

// Handle /help command
async function handleHelp(message: any) {
    const chatId = message.chat.id;
    return sendMessage(chatId, "Buyruqlar:\n\n/start - Boshlash\n/time HH:MM - Vaqtni sozlash (masalan /time 08:00)\n/done yoki /qilingan - Bajarilgan vazifalarni ko'rish\n/help - Yordam\n\nBoshqa buyruqlar tez orada!");
}

// Handle /done command
async function handleDone(message: any) {
    const chatId = message.chat.id;
    const telegramId = message.from?.id;

    if (!telegramId) return;

    try {
        // 1. Get user_id from telegram_users
        const { data: userLink, error: linkError } = await supabase
            .from('telegram_users')
            .select('user_id')
            .eq('telegram_id', telegramId)
            .single();

        if (linkError || !userLink) {
            return sendMessage(chatId, "❌ Akkauntingiz topilmadi. Iltimos, oldin veb sayt orqali bog'lang (/start KOD).");
        }

        const userId = userLink.user_id;

        // 2. Fetch completed tasks for this user
        // We will fetch tasks where status is 'done' or completed is true, ordered by latest
        const { data: tasks, error: tasksError } = await supabase
            .from('tasks')
            .select('title, updated_at, status, completed')
            .eq('user_id', userId)
            .or('status.eq.done,completed.eq.true')
            .order('updated_at', { ascending: false })
            .limit(10);

        if (tasksError) {
            console.error('Error fetching tasks:', tasksError);
            return sendMessage(chatId, "❌ Vazifalarni yuklashda xatolik yuz berdi.");
        }

        if (!tasks || tasks.length === 0) {
            return sendMessage(chatId, "📭 Hali bajarilgan vazifalar yo'q. Harakatni davom ettiring! 💪");
        }

        // 3. Format the tasks
        let responseText = "✅ **Oxirgi bajarilgan vazifalar:**\n\n";
        tasks.forEach((task: any, index: number) => {
            const date = new Date(task.updated_at).toLocaleDateString('uz-UZ', {
                day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
            });
            responseText += `${index + 1}. ${task.title} _(${date})_\n`;
        });

        return sendMessage(chatId, responseText);

    } catch (err) {
        console.error('handleDone exception:', err);
        return sendMessage(chatId, "❌ Tizimda xatolik yuz berdi.");
    }
}

// Main webhook handler
serve(async (req: Request) => {
    try {
        const url = new URL(req.url);

        // Health check
        if (req.method === 'GET' || url.pathname.includes('health')) {
            return new Response(JSON.stringify({ status: 'ok', timestamp: Date.now() }), {
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Webhook
        if (req.method === 'POST') {
            const update = await req.json();
            console.log('Update received:', JSON.stringify(update));

            const message = update.message;
            if (!message) {
                return new Response('OK', { status: 200 });
            }

            const text = message.text || '';

            if (text.startsWith('/start')) {
                await handleStart(message);
            } else if (text.startsWith('/time')) {
                const time = text.split(' ')[1]?.trim();
                const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

                if (!time || !timeRegex.test(time)) {
                    await sendMessage(message.chat.id, "❌ Noto'g'ri format! \n\nIltimos, vaqtni `HH:MM` formatida kiriting.\nMasalan: `/time 07:00` yoki `/time 21:30`");
                    return new Response('OK', { status: 200 });
                }

                // Update user time
                const { error } = await supabase
                    .from('telegram_users')
                    .update({ notification_time: time })
                    .eq('telegram_id', message.from.id);

                if (error) {
                    console.error('Update time error:', error);
                    await sendMessage(message.chat.id, "❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.");
                } else {
                    await sendMessage(message.chat.id, `✅ Xabarnoma vaqti o'zgartirildi: *${time}* ga.\n\nEndi har kuni shu vaqtda xabar olasiz.`);
                }

            } else if (text.startsWith('/help')) {
                await handleHelp(message);
            } else if (text.startsWith('/done') || text.startsWith('/qilingan')) {
                await handleDone(message);
            } else {
                await sendMessage(message.chat.id, "Tushunmadim. /help dan foydalaning.");
            }

            return new Response('OK', { status: 200 });
        }

        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        console.error('Error:', error);
        return new Response('OK', { status: 200 }); // Always return 200 to Telegram
    }
});

console.log('Bot started successfully');
