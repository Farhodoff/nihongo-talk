import { createClient } from '@supabase/supabase-js';
import { verifyAuth } from '../_auth.js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;

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

  const { user, error: authError } = await verifyAuth(req);
  let userId = user?.id;
  if (!userId && req.body?.userId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(req.body.userId)) {
    userId = req.body.userId;
  }

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized', details: authError });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
    const { enabled } = req.body || {};
    await supabase
      .from('telegram_users')
      .update({ notifications_enabled: !!enabled })
      .eq('user_id', userId);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('toggle-notifications error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
