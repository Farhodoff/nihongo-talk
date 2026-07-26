-- ============================================================================
-- SUPABASE SECURITY ADVISOR FIX SCRIPT
-- Copy & paste this complete script into Supabase SQL Editor and click "Run"
-- ============================================================================

-- 1. Fix Security Definer View: public.today_tasks
DROP VIEW IF EXISTS public.today_tasks;
CREATE VIEW public.today_tasks WITH (security_invoker = true) AS
SELECT 
  t.*,
  s.name as subject_name,
  s.color as subject_color
FROM public.tasks t
LEFT JOIN public.subjects s ON t.subject_id = s.id
WHERE t.due_date = CURRENT_DATE
  AND t.completed = false
  AND t.user_id = auth.uid();

-- 2. Fix Security Definer View: public.recent_sessions
DROP VIEW IF EXISTS public.recent_sessions;
CREATE VIEW public.recent_sessions WITH (security_invoker = true) AS
SELECT 
  ss.*,
  s.name as subject_name,
  s.color as subject_color
FROM public.study_sessions ss
LEFT JOIN public.subjects s ON ss.subject_id = s.id
WHERE ss.start_time >= NOW() - INTERVAL '7 days'
  AND ss.user_id = auth.uid()
ORDER BY ss.start_time DESC;

-- 3. Enable RLS on RateLimit table
DO $$ 
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'RateLimit') THEN
        ALTER TABLE public."RateLimit" ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow authenticated full access to RateLimit" ON public."RateLimit";
        CREATE POLICY "Allow authenticated full access to RateLimit" ON public."RateLimit" FOR ALL USING (true);
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'rate_limit') THEN
        ALTER TABLE public.rate_limit ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow authenticated full access to rate_limit" ON public.rate_limit;
        CREATE POLICY "Allow authenticated full access to rate_limit" ON public.rate_limit FOR ALL USING (true);
    END IF;
END $$;

-- 4. Ensure user_notifications table exists & RLS configured properly
CREATE TABLE IF NOT EXISTS public.user_notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'admin',
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.user_notifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own notifications" ON public.user_notifications;
CREATE POLICY "Users can view own notifications" ON public.user_notifications
    FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Users can update own notifications" ON public.user_notifications;
CREATE POLICY "Users can update own notifications" ON public.user_notifications
    FOR UPDATE USING (auth.uid() = user_id OR auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Anyone can insert notifications" ON public.user_notifications;
CREATE POLICY "Anyone can insert notifications" ON public.user_notifications
    FOR INSERT WITH CHECK (true);
