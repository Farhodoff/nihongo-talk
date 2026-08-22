/**
 * Returns the project's "default" Supabase Secret key (sb_secret_...) from the
 * platform-managed SUPABASE_SECRET_KEYS environment variable.
 *
 * SUPABASE_SECRET_KEYS is a JSON object mapping key names to values, e.g.
 *   {"default":"sb_secret_...","my_secret_key_2026_08_22":"sb_secret_..."}
 *
 * Fails fast when the variable is missing or malformed — callers must never
 * silently fall back to anonymous access. The value is never logged.
 */
export function getSupabaseSecretKey(): string {
    const raw = Deno.env.get('SUPABASE_SECRET_KEYS');
    if (!raw) {
        throw new Error('SUPABASE_SECRET_KEYS is not configured for this function');
    }

    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        // Defensive: accept a bare sb_secret_... string if the platform ever
        // provides the single default key without JSON wrapping.
        if (raw.startsWith('sb_secret_')) {
            return raw;
        }
        throw new Error('SUPABASE_SECRET_KEYS is not valid JSON');
    }

    if (parsed && typeof parsed === 'object' && 'default' in parsed) {
        const key = (parsed as Record<string, unknown>)['default'];
        if (typeof key === 'string' && key.length > 0) {
            return key;
        }
    }
    throw new Error('SUPABASE_SECRET_KEYS has no usable "default" key');
}
