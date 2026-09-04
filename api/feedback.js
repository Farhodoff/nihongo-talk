import { createClient } from '@supabase/supabase-js';
import { verifyAuth } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Default superadmin telegram chat IDs as reliable fallback
const DEFAULT_ADMIN_CHAT_IDS = [6839776532, 6756073816];

function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getRatingStars(rating) {
  const r = Math.min(Math.max(Number(rating) || 5, 1), 5);
  const stars = '⭐️'.repeat(r) + '☆'.repeat(5 - r);
  const labels = {
    5: 'Ajoyib! (5/5)',
    4: 'Yaxshi (4/5)',
    3: "O'rtacha (3/5)",
    2: 'Qoniqarsiz (2/5)',
    1: 'Yomon (1/5)',
  };
  return `${stars} <b>${labels[r] || `${r}/5`}</b>`;
}

async function sendTelegramMessage(chatId, text) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn('[Feedback] TELEGRAM_BOT_TOKEN is missing');
    return { ok: false, error: 'Bot token missing' };
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    return await res.json();
  } catch (err) {
    console.error(`[Feedback] Failed to send Telegram message to chat ${chatId}:`, err?.message);
    return { ok: false, error: err?.message };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Rate limiting check
  const rateLimit = await checkRateLimit(req);
  if (!rateLimit.allowed) {
    return res.status(429).json({
      error: 'Too Many Requests',
      message: 'Iltimos, biroz kutib qayta urinib ko‘ring.',
      retryAfter: rateLimit.retryAfter,
    });
  }

  // 2. Parse and validate input
  const body = req.body || {};
  const rawRating = Number(body.rating);

  if (isNaN(rawRating) || rawRating < 1 || rawRating > 5) {
    return res.status(400).json({ error: 'Baho 1 va 5 oralig‘ida bo‘lishi shart.' });
  }

  const rating = Math.round(rawRating);
  const comment = typeof body.comment === 'string' ? body.comment.trim().substring(0, 2000) : '';
  const category =
    typeof body.category === 'string' ? body.category.trim().substring(0, 50) : 'general';
  const clientUserInfo = body.userInfo && typeof body.userInfo === 'object' ? body.userInfo : {};
  const metadata = body.metadata && typeof body.metadata === 'object' ? body.metadata : {};

  // 3. Optional Auth check
  let authUserId = null;
  let authEmail = null;
  try {
    const { user } = await verifyAuth(req);
    if (user?.id) {
      authUserId = user.id;
      authEmail = user.email;
    }
  } catch {
    // Guest user is permitted to leave feedback
  }

  const userId = authUserId || clientUserInfo.id || null;
  const userEmail = authEmail || clientUserInfo.email || null;
  const userName = clientUserInfo.name || 'Mehmon (Anonim)';
  const telegramUsername = clientUserInfo.telegramUsername || null;

  // 4. Save to Supabase (app_reviews table) if SERVICE_ROLE configured
  if (SERVICE_ROLE) {
    try {
      const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
      await supabase.from('app_reviews').insert({
        user_id: userId,
        rating,
        comment: comment || null,
        category,
        user_name: userName,
        user_email: userEmail,
        telegram_username: telegramUsername,
        metadata: {
          ...metadata,
          submitted_at: new Date().toISOString(),
        },
      });
    } catch (dbErr) {
      console.warn('[Feedback] Could not write to app_reviews table:', dbErr?.message);
    }
  }

  // 5. Gather Telegram Admin Chat IDs
  const targetChatIds = new Set(DEFAULT_ADMIN_CHAT_IDS);

  // If env variable TELEGRAM_ADMIN_CHAT_ID is present, add it
  if (process.env.TELEGRAM_ADMIN_CHAT_ID) {
    const envIds = process.env.TELEGRAM_ADMIN_CHAT_ID.split(',').map((id) => id.trim());
    for (const id of envIds) {
      const numId = Number(id);
      if (!isNaN(numId) && numId !== 0) targetChatIds.add(numId);
    }
  }

  // Query superadmins/admins from database if possible
  if (SERVICE_ROLE) {
    try {
      const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
      const { data: adminProfiles } = await supabase
        .from('profiles')
        .select('id')
        .in('role', ['admin', 'superadmin']);

      if (adminProfiles && adminProfiles.length > 0) {
        const adminUserIds = adminProfiles.map((p) => p.id);
        const { data: telegramAdmins } = await supabase
          .from('telegram_users')
          .select('chat_id')
          .in('user_id', adminUserIds);

        if (telegramAdmins) {
          for (const ta of telegramAdmins) {
            if (ta.chat_id) targetChatIds.add(Number(ta.chat_id));
          }
        }
      }
    } catch (queryErr) {
      console.warn('[Feedback] Admin lookup warning:', queryErr?.message);
    }
  }

  // 6. Format Telegram Notification Message
  const tashkentTime = new Intl.DateTimeFormat('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date());

  const platformStr = metadata.platform || (metadata.isMobile ? '📱 Mobile' : '💻 Desktop Web');
  const pathStr = metadata.url || metadata.path || '/';

  let tgMessage = `🌟 <b>YANGI FOYDALANUVCHI REYTINGI VA FIKRI</b> 🌟\n\n`;
  tgMessage += `⭐️ <b>Baho:</b> ${getRatingStars(rating)}\n`;

  if (comment) {
    tgMessage += `\n💬 <b>Fikr-mulohaza:</b>\n<i>"${escapeHTML(comment)}"</i>\n`;
  } else {
    tgMessage += `\n💬 <b>Fikr-mulohaza:</b> <i>(Matn qoldirilmadi)</i>\n`;
  }

  tgMessage += `\n👤 <b>Foydalanuvchi:</b>`;
  tgMessage += `\n• <b>Ism:</b> ${escapeHTML(userName)}`;
  if (userEmail) tgMessage += `\n• <b>Email:</b> ${escapeHTML(userEmail)}`;
  if (telegramUsername)
    tgMessage += `\n• <b>Telegram:</b> @${escapeHTML(telegramUsername.replace(/^@/, ''))}`;
  if (userId) tgMessage += `\n• <b>ID:</b> <code>${escapeHTML(userId)}</code>`;

  tgMessage += `\n\n📱 <b>Kontekst / Qurilma:</b>`;
  tgMessage += `\n• <b>Platforma:</b> ${escapeHTML(platformStr)}`;
  tgMessage += `\n• <b>Sahifa:</b> ${escapeHTML(pathStr)}`;
  tgMessage += `\n• <b>Vaqt:</b> ${tashkentTime} (Toshkent)`;

  // 7. Dispatch Telegram messages in parallel
  const sendPromises = Array.from(targetChatIds).map((chatId) =>
    sendTelegramMessage(chatId, tgMessage),
  );
  await Promise.allSettled(sendPromises);

  return res.status(200).json({
    success: true,
    message: 'Fikr va bahoingiz uchun katta rahmat!',
  });
}
