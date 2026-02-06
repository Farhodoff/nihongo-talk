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
        // Welcome message
        return sendMessage(chatId, "Salom! Study Planner botiga xush kelibsiz!\n\nAkkauntingizni bog'lash uchun:\n1. Veb saytga kiring\n2. Settings → Telegram ga o'ting\n3. Kod oling va /start KOD yuboring\n\nYordam: /help");
    }
}

// Handle /help command
async function handleHelp(message: any) {
    const chatId = message.chat.id;
    return sendMessage(chatId, "Buyruqlar:\n\n/start - Boshlash\n/help - Yordam\n\nBoshqa buyruqlar tez orada!");
}

// Main webhook handler
serve(async (req) => {
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
            } else if (text.startsWith('/help')) {
                await handleHelp(message);
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
