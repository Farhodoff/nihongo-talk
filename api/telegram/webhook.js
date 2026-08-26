import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const defaultKeyboard = {
  keyboard: [
    [{ text: '📅 Bugungi reja' }, { text: '👑 Obuna holati' }],
    [{ text: '📊 Mening statistikam' }, { text: '🎯 Maqsadlarim' }],
    [{ text: 'ℹ️ Yordam' }]
  ],
  resize_keyboard: true,
  one_time_keyboard: false
};

async function sendTelegramMessage(chatId, text, replyMarkup = defaultKeyboard) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return { ok: false, error: 'No bot token' };
  const body = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML'
  };
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function answerCallbackQuery(callbackQueryId, text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQueryId, text }),
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Telegram-Bot-Api-Secret-Token');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const update = req.body;
  if (!update) {
    return res.status(200).json({ ok: true, message: 'Empty update' });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  try {
    // 1. Handle Callback Queries (Inline Buttons)
    if (update.callback_query) {
      const cb = update.callback_query;
      const chatId = cb.message?.chat?.id;
      const data = cb.data;

      if (data === 'check_sub' && chatId) {
        await answerCallbackQuery(cb.id, 'Obuna tekshirilmoqda...');
        const { data: userLink } = await supabase
          .from('telegram_users')
          .select('user_id')
          .eq('chat_id', chatId)
          .maybeSingle();

        if (userLink?.user_id) {
          const { data: sub } = await supabase
            .from('user_subscriptions')
            .select('*')
            .eq('id', userLink.user_id)
            .maybeSingle();

          const tier = sub?.tier?.toUpperCase() || 'FREE';
          const credits = sub?.ai_credits ?? 5;
          const validUntil = sub?.valid_until ? new Date(sub.valid_until).toLocaleDateString('uz-UZ') : 'Cheksiz';

          await sendTelegramMessage(chatId, `👑 <b>Sizning Nihon Talk Obunangiz:</b>\n\n💎 Tarif: <b>${tier}</b>\n⚡ AI Kreditlar: <b>${credits} ta</b>\n📅 Amal qilish muddati: <b>${validUntil}</b>\n\n🔗 Web sayt: <a href="https://nihon-talk.vercel.app/pricing">Tariflar sahifasi</a>`);
        }
      } else {
        await answerCallbackQuery(cb.id);
      }
      return res.status(200).json({ ok: true });
    }

    // 2. Handle Messages
    const message = update.message;
    if (!message || !message.text) {
      return res.status(200).json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text.trim();
    const telegramId = message.from?.id;
    const username = message.from?.username || '';
    const firstName = message.from?.first_name || '';
    const lastName = message.from?.last_name || '';

    // A. Handle /start <code> or /start
    if (text.startsWith('/start')) {
      const parts = text.split(' ');
      const code = (parts[1] || '').trim().toUpperCase();

      if (code && code.length === 6) {
        // Find code in telegram_link_codes
        const { data: linkRecord, error: codeErr } = await supabase
          .from('telegram_link_codes')
          .select('*')
          .ilike('code', code)
          .eq('used', false)
          .gt('expires_at', new Date().toISOString())
          .maybeSingle();

        if (codeErr || !linkRecord) {
          await sendTelegramMessage(chatId, `❌ <b>Noto'g'ri yoki muddati o'tgan kod!</b>\n\nIltimos, Nihon Talk saytidagi Sozlamalar sahifasidan yangi kod oling:\n<a href="https://nihon-talk.vercel.app/settings">Sozlamalar sahifasiga o'tish</a>`);
          return res.status(200).json({ ok: true });
        }

        // Link user
        await supabase.from('telegram_users').upsert({
          user_id: linkRecord.user_id,
          telegram_id: telegramId,
          chat_id: chatId,
          telegram_username: username,
          telegram_first_name: firstName,
          telegram_last_name: lastName,
          notifications_enabled: true,
          updated_at: new Date().toISOString()
        });

        // Mark code as used
        await supabase.from('telegram_link_codes').update({ used: true }).eq('id', linkRecord.id);

        await sendTelegramMessage(chatId, `🎉 <b>Tabriklaymiz, ${escapeHTML(firstName)}!</b>\n\nTelegram bot Nihon Talk hisobingizga muvaffaqiyatli ulandi! 🚀\n\nEndi siz:\n• Kunlik darslar va vazifalar eslatmalarini olasiz\n• Obuna muddati va AI kreditlaringizni kuzatib borasiz\n• Speaking va fleshkarta natijalaringizni bilib turasiz!`, defaultKeyboard);
        return res.status(200).json({ ok: true });
      }

      // Check if already linked
      const { data: existingUser } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      if (existingUser) {
        await sendTelegramMessage(chatId, `👋 <b>Assalomu alaykum, ${escapeHTML(firstName)}!</b>\n\nHisobingiz platformaga ulangan.\n\nQuyidagi menyu orqali kerakli bo'limni tanlang:`, defaultKeyboard);
      } else {
        await sendTelegramMessage(chatId, `👋 <b>Assalomu alaykum!</b>\n\nNihon Talk Telegram botiga xush kelibsiz.\n\nBotni akkauntingizga ulash uchun saytning Sozlamalar bo'limidan kod oling:\n<a href="https://nihon-talk.vercel.app/settings">Nihon Talk Sozlamalar</a>`);
      }
      return res.status(200).json({ ok: true });
    }

    // B. Handle /subscription or '👑 Obuna holati'
    if (text === '/subscription' || text.includes('Obuna holati')) {
      const { data: userLink } = await supabase
        .from('telegram_users')
        .select('user_id')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      if (!userLink?.user_id) {
        await sendTelegramMessage(chatId, "⚠️ <i>Avval akkauntingizni botga ulang: /start kod</i>");
        return res.status(200).json({ ok: true });
      }

      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('id', userLink.user_id)
        .maybeSingle();

      const tier = sub?.tier?.toUpperCase() || 'FREE';
      const credits = sub?.ai_credits ?? 5;
      const validUntil = sub?.valid_until ? new Date(sub.valid_until).toLocaleDateString('uz-UZ') : (tier === 'FREE' ? 'Cheklanmagan sinov' : 'Cheksiz');

      await sendTelegramMessage(chatId, `👑 <b>Sizning Nihon Talk Obunangiz:</b>\n\n💎 Joriy Tarif: <b>${tier}</b>\n⚡ Qolgan AI Kreditlar: <b>${credits} ta</b>\n📅 Amal qilish muddati: <b>${validUntil}</b>\n\n🚀 Obunani oshirish yoki yangilash:\n<a href="https://nihon-talk.vercel.app/pricing">Tariflar sahifasi</a>`);
      return res.status(200).json({ ok: true });
    }

    // C. Handle /plan or '📅 Bugungi reja'
    if (text === '/plan' || text.includes('Bugungi reja') || text === '/tasks') {
      const { data: userLink } = await supabase
        .from('telegram_users')
        .select('user_id')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      if (!userLink?.user_id) {
        await sendTelegramMessage(chatId, "⚠️ <i>Avval akkauntingizni botga ulang: /start kod</i>");
        return res.status(200).json({ ok: true });
      }

      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userLink.user_id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (!tasks || tasks.length === 0) {
        await sendTelegramMessage(chatId, `📅 <b>Bugungi rejangiz:</b>\n\nHozircha yangi vazifalar belgilanmagan. Platformaga kirib yangi maqsad qo'shishingiz mumkin:\n<a href="https://nihon-talk.vercel.app/dashboard">Dashboardga o'tish</a>`);
      } else {
        const taskLines = tasks.map((t, idx) => {
          const statusIcon = t.completed ? '✅' : '⏳';
          return `${idx + 1}. ${statusIcon} <b>${escapeHTML(t.title)}</b>`;
        }).join('\n');

        await sendTelegramMessage(chatId, `📋 <b>Sizning vazifalaringiz:</b>\n\n${taskLines}\n\n👉 <a href="https://nihon-talk.vercel.app/tasks">Barcha vazifalarni boshqarish</a>`);
      }
      return res.status(200).json({ ok: true });
    }

    // D. Handle /help or 'ℹ️ Yordam'
    if (text === '/help' || text.includes('Yordam')) {
      await sendTelegramMessage(chatId, `ℹ️ <b>Nihon Talk Bot Yordam Qo'llanmasi:</b>\n\n/start - Akkauntni ulash yoki bosh menyu\n/plan - Bugungi o'quv rejalari va vazifalar\n/subscription - Obuna tarifi va AI kreditlar holati\n/help - Yordam menyusi\n\n🌐 Asosiy veb-sayt: <a href="https://nihon-talk.vercel.app">Nihon Talk Platformasi</a>`);
      return res.status(200).json({ ok: true });
    }

    // Default fallback
    await sendTelegramMessage(chatId, `Tushunarsiz buyruq. Quyidagi tugmalardan birini tanlang yoki /help yozing:`, defaultKeyboard);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram webhook error:', err);
    return res.status(200).json({ ok: false, error: err?.message });
  }
}
