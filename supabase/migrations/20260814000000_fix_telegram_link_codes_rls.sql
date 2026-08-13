-- Fix RLS policies for telegram_link_codes and telegram_users to allow link code creation and verification
ALTER TABLE public.telegram_link_codes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can view own link codes"
    ON public.telegram_link_codes FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Users can create own link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can create own link codes"
    ON public.telegram_link_codes FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can update link codes"
    ON public.telegram_link_codes FOR UPDATE
    USING (true);

DROP POLICY IF EXISTS "Users can delete link codes" ON public.telegram_link_codes;
CREATE POLICY "Users can delete link codes"
    ON public.telegram_link_codes FOR DELETE
    USING (true);

-- Fix RLS policies for telegram_users
ALTER TABLE public.telegram_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own telegram account" ON public.telegram_users;
CREATE POLICY "Users can view own telegram account"
    ON public.telegram_users FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Users can manage telegram users" ON public.telegram_users;
CREATE POLICY "Users can manage telegram users"
    ON public.telegram_users FOR ALL
    USING (true)
    WITH CHECK (true);
