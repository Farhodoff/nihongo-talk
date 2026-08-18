import { createClient } from '@supabase/supabase-js';
import { verifyAuth } from './_auth.js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SERVICE_ROLE) {
    return res.status(500).json({ error: 'SERVICE_ROLE environment variable is not configured on server' });
  }

  // 1. Verify caller identity strictly via Supabase JWT
  const { user, error: authError } = await verifyAuth(req);
  if (!user || !user.id) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Ushbu amalni bajarish uchun tizimga kirish talab etiladi.',
      details: authError,
    });
  }
  const userId = user.id;

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
  const body = req.body || {};
  const pathname = req.url || '';

  const sendJson = (status, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(status).json(data);
  };

  try {
    // POST /api/telegram/generate-code or action=generate-code
    if (pathname.includes('generate-code')) {
      // Check if already linked
      const { data: existing } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        return sendJson(200, { error: 'Telegram allaqachon ulangan', linked: true, account: existing });
      }

      // Delete old unused codes
      await supabase.from('telegram_link_codes').delete().eq('user_id', userId).eq('used', false);

      // Generate and insert
      const code = generateCode();
      const { data, error } = await supabase
        .from('telegram_link_codes')
        .insert({ user_id: userId, code })
        .select()
        .maybeSingle();

      if (error || !data) {
        console.error('Code insert error:', error);
        return sendJson(500, { error: 'Kod yaratishda xatolik', details: error?.message });
      }

      return sendJson(200, { code: data.code, expires_at: data.expires_at });
    }

    // POST /api/telegram/check-link
    if (pathname.includes('check-link')) {
      const { data } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      return sendJson(200, { linked: !!data, account: data });
    }

    // POST /api/telegram/unlink
    if (pathname.includes('unlink')) {
      await supabase.from('telegram_users').delete().eq('user_id', userId);
      return sendJson(200, { success: true });
    }

    // POST /api/telegram/toggle-notifications
    if (pathname.includes('toggle-notifications')) {
      const { enabled } = body;
      await supabase
        .from('telegram_users')
        .update({ notifications_enabled: !!enabled })
        .eq('user_id', userId);

      return sendJson(200, { success: true });
    }

    // POST /api/telegram/send-test
    if (pathname.includes('send-test')) {
      const { text } = body;
      const { data: account } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (!account || !account.chat_id) {
        return sendJson(404, { error: 'Telegram akkaunt topilmadi' });
      }

      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      if (!botToken) {
        return sendJson(500, { error: 'Bot token sozlanmagan' });
      }

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: account.chat_id,
          text: text || '🔔 Test xabarnomasi: Study Planner tizimi muvaffaqiyatli ulandi!',
          parse_mode: 'HTML',
        }),
      });
      const result = await response.json();
      return sendJson(200, { ok: result.ok });
    }

    return sendJson(404, { error: 'Route not found' });
  } catch (err) {
    console.error('Vercel Telegram API error:', err);
    return sendJson(500, { error: 'Internal server error', details: err?.message });
  }
}
