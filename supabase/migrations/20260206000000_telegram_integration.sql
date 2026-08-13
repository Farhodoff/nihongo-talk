-- Create telegram_link_codes table for temporary linking codes
CREATE TABLE IF NOT EXISTS public.telegram_link_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    code TEXT NOT NULL UNIQUE,
    telegram_id BIGINT,
    used BOOLEAN DEFAULT false,
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '10 minutes'),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Drop strict FK constraint if exists to support all session user IDs
ALTER TABLE public.telegram_link_codes DROP CONSTRAINT IF EXISTS telegram_link_codes_user_id_fkey;

-- Create index for fast code lookup
CREATE INDEX IF NOT EXISTS idx_telegram_link_codes_code ON public.telegram_link_codes(code);
CREATE INDEX IF NOT EXISTS idx_telegram_link_codes_user_id ON public.telegram_link_codes(user_id);

-- Create telegram_users table for linked accounts
CREATE TABLE IF NOT EXISTS public.telegram_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE,
    telegram_id BIGINT NOT NULL UNIQUE,
    telegram_username TEXT,
    telegram_first_name TEXT,
    telegram_last_name TEXT,
    chat_id BIGINT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    notifications_enabled BOOLEAN DEFAULT true,
    last_interaction TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Drop strict FK constraint if exists to support all session user IDs
ALTER TABLE public.telegram_users DROP CONSTRAINT IF EXISTS telegram_users_user_id_fkey;

-- Create indexes for telegram_users
CREATE INDEX IF NOT EXISTS idx_telegram_users_telegram_id ON public.telegram_users(telegram_id);
CREATE INDEX IF NOT EXISTS idx_telegram_users_user_id ON public.telegram_users(user_id);
CREATE INDEX IF NOT EXISTS idx_telegram_users_chat_id ON public.telegram_users(chat_id);

-- Enable RLS on both tables
ALTER TABLE public.telegram_link_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.telegram_users ENABLE ROW LEVEL SECURITY;

-- Permissive RLS policies for telegram_link_codes
DROP POLICY IF EXISTS "Users can view own link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can view own link codes" ON public.telegram_link_codes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can create own link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can create own link codes" ON public.telegram_link_codes FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can update link codes" ON public.telegram_link_codes FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Users can delete link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can delete link codes" ON public.telegram_link_codes FOR DELETE USING (true);

-- Permissive RLS policies for telegram_users
DROP POLICY IF EXISTS "Users can view own telegram account" ON public.telegram_users;
CREATE POLICY "Users can view own telegram account" ON public.telegram_users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage telegram users" ON public.telegram_users;
CREATE POLICY "Users can manage telegram users" ON public.telegram_users FOR ALL USING (true) WITH CHECK (true);

-- Function to cleanup expired codes
CREATE OR REPLACE FUNCTION cleanup_expired_telegram_codes()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    DELETE FROM public.telegram_link_codes
    WHERE expires_at < NOW();
END;
$$;

-- Comments for documentation
COMMENT ON TABLE public.telegram_link_codes IS 'Temporary codes for linking Telegram accounts to user accounts';
COMMENT ON TABLE public.telegram_users IS 'Linked Telegram accounts with notification preferences';
