import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc6NzIwNTMxMCwiZXhwIjoyMDgyNzgxMzEwfQ.9nvvhDoiK2E79TQH60Yz5mCf-zTb8iO7Uu9lpQq8sTM';

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
        const enabled = !!body.enabled;

        await supabase
            .from('telegram_users')
            .update({ notifications_enabled: enabled })
            .eq('user_id', userId);

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('toggle-notifications error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
