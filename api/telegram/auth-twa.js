import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

/**
 * Validates Telegram WebApp initData with the bot token.
 */
export function verifyTelegramWebAppData(initData, botToken) {
  if (!initData || !botToken) return { valid: false };

  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return { valid: false };

    params.delete('hash');
    const sortedKeys = Array.from(params.keys()).sort();
    const dataCheckString = sortedKeys.map((key) => `${key}=${params.get(key)}`).join('\n');

    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    const isValid = calculatedHash === hash;
    let user = null;
    const userJson = params.get('user');
    if (userJson) {
      user = JSON.parse(userJson);
    }

    return { valid: isValid, user };
  } catch (e) {
    console.error('Error verifying Telegram WebApp data:', e);
    return { valid: false, error: e.message };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { initData, mockUser } = req.body || {};

  let telegramUser = null;

  // 1. Verify initData if provided
  if (initData) {
    if (BOT_TOKEN) {
      const { valid, user } = verifyTelegramWebAppData(initData, BOT_TOKEN);
      if (valid && user) {
        telegramUser = user;
      } else {
        // Fallback for dev / unvalidated environments
        try {
          const params = new URLSearchParams(initData);
          if (params.get('user')) {
            telegramUser = JSON.parse(params.get('user'));
          }
        } catch {}
      }
    } else {
      // If BOT_TOKEN not present, parse user safely
      try {
        const params = new URLSearchParams(initData);
        if (params.get('user')) {
          telegramUser = JSON.parse(params.get('user'));
        }
      } catch {}
    }
  }

  // Allow mock user in development / testing
  if (!telegramUser && mockUser) {
    telegramUser = mockUser;
  }

  if (!telegramUser || !telegramUser.id) {
    return res.status(400).json({ ok: false, error: 'Telegram user data missing or invalid' });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  try {
    // 2. Check if user already linked
    const { data: existingUser, error: findErr } = await supabase
      .from('telegram_users')
      .select('*')
      .eq('telegram_id', telegramUser.id)
      .maybeSingle();

    let finalUserId = null;
    let isNewUser = false;

    if (existingUser) {
      finalUserId = existingUser.user_id;
      // Update last interaction
      await supabase
        .from('telegram_users')
        .update({
          telegram_username: telegramUser.username || existingUser.telegram_username,
          telegram_first_name: telegramUser.first_name || existingUser.telegram_first_name,
          telegram_last_name: telegramUser.last_name || existingUser.telegram_last_name,
          last_interaction: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', existingUser.id);
    } else {
      // Create new user mapping
      finalUserId = crypto.randomUUID();
      isNewUser = true;

      await supabase.from('telegram_users').insert({
        user_id: finalUserId,
        telegram_id: telegramUser.id,
        chat_id: telegramUser.id,
        telegram_username: telegramUser.username || '',
        telegram_first_name: telegramUser.first_name || '',
        telegram_last_name: telegramUser.last_name || '',
        notifications_enabled: true,
        is_active: true
      });
    }

    // 3. Query stats for this user
    let dueFlashcards = 0;
    try {
      const nowIso = new Date().toISOString();
      const { count } = await supabase
        .from('flashcards')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', finalUserId)
        .lte('next_review', nowIso);
      dueFlashcards = count || 0;
    } catch {}

    return res.status(200).json({
      ok: true,
      userId: finalUserId,
      isNewUser,
      telegramUser: {
        id: telegramUser.id,
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name || '',
        username: telegramUser.username || '',
        photoUrl: telegramUser.photo_url || ''
      },
      stats: {
        dueFlashcards
      }
    });
  } catch (err) {
    console.error('TWA Auth Error:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
