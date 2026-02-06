import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Bot, webhookCallback } from 'https://esm.sh/grammy@1.8.3';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!botToken || !supabaseUrl || !supabaseKey) {
    throw new Error('Missing required environment variables');
}

const bot = new Bot(botToken);
const supabase = createClient(supabaseUrl, supabaseKey);

// /start command handler
bot.command('start', async (ctx) => {
    const args = ctx.match?.trim(); // Gets text after /start
    const telegramId = ctx.from?.id;
    const chatId = ctx.chat?.id;
    const username = ctx.from?.username;
    const firstName = ctx.from?.first_name;
    const lastName = ctx.from?.last_name;

    if (args && telegramId && chatId) {
        // Handle account linking: /start CODE123
        try {
            // Find valid code
            const { data: linkCode, error: codeError } = await supabase
                .from('telegram_link_codes')
                .select('*')
                .eq('code', args)
                .eq('used', false)
                .gt('expires_at', new Date().toISOString())
                .single();

            if (codeError || !linkCode) {
                await ctx.reply(
                    `❌ Noto'g'ri yoki muddati o'tgan kod!\n\n` +
                    `Iltimos, veb saytdan yangi kod oling.`
                );
                return;
            }

            // Create telegram_users record
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
                await ctx.reply(
                    `⚠️ Akkaunt ulashda xatolik yuz berdi.\n\n` +
                    `Iltimos, qaytadan urinib ko'ring.`
                );
                return;
            }

            // Mark code as used
            await supabase
                .from('telegram_link_codes')
                .update({ used: true })
                .eq('id', linkCode.id);

            await ctx.reply(
                `✅ Muvaffaqiyatli ulandi!\n\n` +
                `Akkauntingiz Telegram bilan bog'landi.\n` +
                `Endi siz vazifalar va maqsadlar haqida xabarnomalar olasiz.\n\n` +
                `Buyruqlar ro'yxati: /help`
            );
        } catch (error) {
            console.error('Linking error:', error);
            await ctx.reply(
                `⚠️ Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.`
            );
        }
    } else {
        // Normal /start - welcome message
        await ctx.reply(
            `👋 Salom! Study Planner botiga xush kelibsiz! 🎓\n\n` +
            `Men sizning o'quv rejalaringizni boshqarishga yordam beraman.\n\n` +
            `Ishlatish uchun akkauntingizni bog'lash kerak:\n` +
            `1. Veb saytga kiring: study-planner.uz\n` +
            `2. Settings → Telegram Bo'limiga o'ting\n` +
            `3. "Telegram ni bog'lash" tugmasini bosing\n\n` +
            `Yordam kerakmi? /help buyrug'ini yuboring.`
        );
    }
});

// /help command
bot.command('help', async (ctx) => {
    await ctx.reply(
        `📖 Buyruqlar ro'yxati:\n\n` +
        `/start - Botni ishga tushirish\n` +
        `/help - Yordam\n` +
        `/tasks - Vazifalaringizni ko'rish\n` +
        `/add - Yangi vazifa qo'shish\n` +
        `/goals - Maqsadlaringizni ko'rish\n` +
        `/settings - Sozlamalar\n\n` +
        `❗ Hozirda faqat /start va /help ishlaydi.\n` +
        `Boshqa funksiyalar tez orada qo'shiladi!`
    );
});

// Default message handler
bot.on('message', async (ctx) => {
    await ctx.reply(
        `Men hali bu xabarni tushunmadim 😅\n\n` +
        `Buyruqlar ro'yxati uchun /help yuboring.`
    );
});

// Error handler
bot.catch((err) => {
    console.error('Bot error:', err);
});

// Start webhook server
const handleUpdate = webhookCallback(bot, 'std/http');

serve(async (req) => {
    try {
        const url = new URL(req.url);

        // Health check endpoint
        if (url.pathname === '/health') {
            return new Response(JSON.stringify({ status: 'ok' }), {
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Webhook endpoint
        if (req.method === 'POST') {
            return await handleUpdate(req);
        }

        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        console.error('Request error:', error);
        return new Response('Internal server error', { status: 500 });
    }
});
