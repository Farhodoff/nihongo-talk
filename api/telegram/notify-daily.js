import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
const CRON_SECRET = process.env.CRON_SECRET;

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramMessage(chatId, text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return { ok: false, error: 'No bot token' };
  const body = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML'
  };
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-cron-secret');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Security check for cron secret if configured
  if (CRON_SECRET) {
    const authHeader = req.headers['authorization'] || '';
    const cronHeader = req.headers['x-cron-secret'] || '';
    const isSecretValid = cronHeader === CRON_SECRET || authHeader === `Bearer ${CRON_SECRET}`;
    if (!isSecretValid) {
      return res.status(401).json({ error: 'Unauthorized: invalid cron secret' });
    }
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

    // Fetch all users with enabled notifications
    const { data: users, error: userErr } = await supabase
      .from('telegram_users')
      .select('*')
      .eq('notifications_enabled', true);

    if (userErr || !users || users.length === 0) {
      return res.status(200).json({ success: true, count: 0, message: 'No notification targets found' });
    }

    let sentCount = 0;

    for (const u of users) {
      if (!u.chat_id) continue;

      // 1. Fetch user's pending tasks
      let { data: tasks } = await supabase
        .from('tasks')
        .select('title, status, completed')
        .eq('user_id', u.user_id)
        .neq('status', 'done')
        .limit(5);

      if (!tasks || tasks.length === 0) {
        const { data: fallbackTasks } = await supabase
          .from('tasks')
          .select('title, status, completed')
          .eq('user_id', u.user_id)
          .eq('completed', false)
          .limit(5);
        tasks = fallbackTasks || [];
      }

      // 2. Fetch subscription status
      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('id', u.user_id)
        .maybeSingle();

      let subAlert = '';
      if (sub?.valid_until) {
        const daysLeft = Math.ceil((new Date(sub.valid_until).getTime() - Date.now()) / (1000 * 3600 * 24));
        if (daysLeft > 0 && daysLeft <= 3) {
          subAlert = `\n⚠️ <i>Eslatma: ${sub.tier.toUpperCase()} obunangiz tugashiga <b>${daysLeft} kun</b> qoldi.</i>`;
        }
      }

      let taskSummary = 'Bugun uchun yangi rejalaringizni belgilang!';
      if (tasks && tasks.length > 0) {
        taskSummary = '📌 <b>Bugungi kutilayotgan vazifalar:</b>\n' + tasks.map((t, i) => `${i + 1}. ⏳ ${escapeHTML(t.title)}`).join('\n');
      }

      const messageText = `☀️ <b>Xayrli kun, ${escapeHTML(u.telegram_first_name || 'talaba')}!</b>\n\n${taskSummary}${subAlert}\n\n🚀 Kunlik mashg'ulotlarni boshlash uchun platformaga kiring:\n👉 <a href="https://task-planner-tau.vercel.app/dashboard">Kaizen AI Dashboard</a>`;

      await sendTelegramMessage(u.chat_id, messageText);
      sentCount++;
    }

    return res.status(200).json({ success: true, sentCount });
  } catch (err) {
    console.error('notify-daily error:', err);
    return res.status(500).json({ error: 'Internal server error', details: err?.message });
  }
}
