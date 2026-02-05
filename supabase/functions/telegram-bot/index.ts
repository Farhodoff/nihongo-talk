import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Bot, webhookCallback } from 'https://deno.land/x/grammy@v1.8.3/mod.ts';

const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
if (!botToken) {
    throw new Error('TELEGRAM_BOT_TOKEN is not set');
}

const bot = new Bot(botToken);

// /start command handler
bot.command('start', async (ctx) => {
    const args = ctx.match; // Gets text after /start

    if (args) {
        // Handle account linking: /start CODE123
        await ctx.reply(
            `🔗 Account Linking\n\n` +
            `Code: ${args}\n\n` +
            `Linking your account... (not implemented yet)`
        );
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
