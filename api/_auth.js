import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

/**
 * Extract bearer token from either Fetch Request (Edge) or Node IncomingMessage (Vercel serverless)
 */
export function getBearerToken(req) {
  let authHeader = null;
  if (req && typeof req.headers?.get === 'function') {
    authHeader = req.headers.get('Authorization') || req.headers.get('authorization');
  } else if (req && req.headers) {
    authHeader = req.headers['authorization'] || req.headers['Authorization'];
  }

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.substring(7).trim();
  return token.length > 0 ? token : null;
}

/**
 * Verifies Supabase JWT access token.
 * Returns { user, error }
 */
export async function verifyAuth(req) {
  const token = getBearerToken(req);
  if (!token) {
    return { user: null, error: 'Missing or malformed Authorization header. Expected Bearer token.' };
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false }
    });
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return { user: null, error: error?.message || 'Invalid or expired authentication session.' };
    }
    return { user, error: null };
  } catch (err) {
    return { user: null, error: err?.message || 'Authentication verification failed.' };
  }
}
