import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

function ensureValidUuid(id) {
    const defaultUuid = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    if (!id || typeof id !== 'string') return defaultUuid;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (uuidRegex.test(id)) return id;
    return defaultUuid;
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    try {
        const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
        const body = req.body || {};
        const userId = ensureValidUuid(body.userId);
        const text = body.text || '🔔 Test xabarnomasi';

        const { data: account } = await supabase
            .from('telegram_users')
            .select('*')
            .eq('user_id', userId)
            .maybeSingle();

        if (!account || !account.chat_id) {
            return res.status(404).json({ error: 'Telegram akkaunt topilmadi' });
        }

        const botToken = process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
        if (!botToken) {
            return res.status(500).json({ error: 'Bot token sozlanmagan' });
        }

        const telegramBody = {
            chat_id: account.chat_id,
            text: text,
            parse_mode: 'HTML',
        };
        if (body.reply_markup) {
            telegramBody.reply_markup = body.reply_markup;
        }

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(telegramBody),
        });
        const result = await response.json();
        return res.status(200).json({ ok: result.ok, result });
    } catch (err) {
        console.error('send-test error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
