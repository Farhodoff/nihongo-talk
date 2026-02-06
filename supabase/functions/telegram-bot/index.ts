import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Bot, webhookCallback } from 'https://esm.sh/grammy@1.8.3';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

console.log('Bot starting...');

if (!botToken || !supabaseUrl || !supabaseKey) {
    throw new Error('Missing required environment variables');
}

const bot = new Bot(botToken);
const supabase = createClient(supabaseUrl, supabaseKey);

// /start command handler
bot.command('start', async (ctx) => {
    try {
        const args = ctx.match?.trim();
        const telegramId = ctx.from?.id;
        const chatId = ctx.chat?.id;
        const username = ctx.from?.username;
        const firstName = ctx.from?.first_name;
        const lastName = ctx.from?.last_name;

        console.log('Received /start command:', { args, telegramId });

        if (args && telegramId && chatId) {
            console.log('Attempting to link account with code:', args);

            const { data: linkCode, error: codeError } = await supabase
                .from('telegram_link_codes')
                .select('*')
                .eq('code', args)
                .eq('used', false)
                .gt('expires_at', new Date().toISOString())
                .single();

            console.log('Code lookup result:', { found: !!linkCode, error: codeError });

            if (codeError || !linkCode) {
                await ctx.reply("Noto'g'ri yoki muddati o'tgan kod!\n\nIltimos, veb saytdan yangi kod oling.");
                return;
            }

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

            console.log('Link insert result:', { error: linkError });

            if (linkError) {
                console.error('Failed to link:', linkError);
                await ctx.reply("Akkaunt ulashda xatolik yuz berdi.\n\nIltimos, qaytadan urinib ko'ring.");
                return;
            }

            await supabase
                .from('telegram_link_codes')
                .update({ used: true })
                .eq('id', linkCode.id);

            console.log('Successfully linked account');

            await ctx.reply("Muvaffaqiyatli ulandi!\n\nAkkauntingiz Telegram bilan bog'landi.\nEndi siz vazifalar va maqsadlar haqida xabarnomalar olasiz.\n\nBuyruqlar ro'yxati: /help");
        } else {
            await ctx.reply("Salom! Study Planner botiga xush kelibsiz!\n\nMen sizning o'quv rejalaringizni boshqarishga yordam beraman.\n\nIshlatish uchun akkauntingizni bog'lash kerak:\n1. Veb saytga kiring\n2. Settings → Telegram Bo'limiga o'ting\n3. Telegram ni bog'lash tugmasini bosing\n\nYordam kerakmi? /help buyrug'ini yuboring.");
        }
    } catch (error) {
        console.error('Error in /start handler:', error);
        await ctx.reply("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    }
});

// /help command
bot.command('help', async (ctx) => {
    try {
        await ctx.reply("Buyruqlar ro'yxati:\n\n/start - Botni ishga tushirish\n/help - Yordam\n/tasks - Vazifalaringizni ko'rish\n/add - Yangi vazifa qo'shish\n/goals - Maqsadlaringizni ko'rish\n/settings - Sozlamalar\n\nHozirda faqat /start va /help ishlaydi.\nBoshqa funksiyalar tez orada qo'shiladi!");
    } catch (error) {
        console.error('Error in /help handler:', error);
    }
});

// Default message handler
bot.on('message', async (ctx) => {
    try {
        await ctx.reply("Men hali bu xabarni tushunmadim\n\nBuyruqlar ro'yxati uchun /help yuboring.");
    } catch (error) {
        console.error('Error in message handler:', error);
    }
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
        if (url.pathname === '/health' || req.method === 'GET') {
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
