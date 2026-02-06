-- Phase 4: Notification System - Database Schema
-- Migration: 20260207000000_notification_system.sql

-- ============================================
-- 1. Create notification_settings table
-- ============================================

CREATE TABLE IF NOT EXISTS public.notification_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    
    -- Timing preferences
    morning_time TIME NOT NULL DEFAULT '09:00:00',
    evening_time TIME NOT NULL DEFAULT '20:00:00',
    timezone TEXT NOT NULL DEFAULT 'Asia/Tashkent',
    
    -- Notification type toggles
    daily_summary BOOLEAN NOT NULL DEFAULT true,
    deadline_reminders BOOLEAN NOT NULL DEFAULT true,
    task_completions BOOLEAN NOT NULL DEFAULT false,
    
    -- Timestamps
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- 2. Update telegram_users table
-- ============================================

-- Add notification tracking columns
ALTER TABLE public.telegram_users 
ADD COLUMN IF NOT EXISTS last_morning_notification TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS last_evening_notification TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS last_deadline_check TIMESTAMPTZ;

-- ============================================
-- 3. Create indexes for performance
-- ============================================

-- Index for quick user lookup
CREATE INDEX IF NOT EXISTS idx_notification_settings_user_id 
    ON public.notification_settings(user_id);

-- Index for finding users with notifications enabled
CREATE INDEX IF NOT EXISTS idx_telegram_users_notifications_enabled 
    ON public.telegram_users(notifications_enabled) 
    WHERE notifications_enabled = true;

-- ============================================
-- 4. Enable Row Level Security (RLS)
-- ============================================

ALTER TABLE public.notification_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own settings
CREATE POLICY "Users can view own notification settings"
    ON public.notification_settings
    FOR SELECT
    USING (auth.uid() = user_id);

-- Policy: Users can insert their own settings
CREATE POLICY "Users can insert own notification settings"
    ON public.notification_settings
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own settings
CREATE POLICY "Users can update own notification settings"
    ON public.notification_settings
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own settings
CREATE POLICY "Users can delete own notification settings"
    ON public.notification_settings
    FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================
-- 5. Create trigger for updated_at
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_notification_settings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger on notification_settings
CREATE TRIGGER update_notification_settings_timestamp
    BEFORE UPDATE ON public.notification_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_notification_settings_updated_at();

-- ============================================
-- 6. Create default settings for existing users
-- ============================================

-- Insert default notification settings for users who have linked Telegram
INSERT INTO public.notification_settings (user_id)
SELECT DISTINCT user_id 
FROM public.telegram_users
WHERE notifications_enabled = true
ON CONFLICT (user_id) DO NOTHING;

-- ============================================
-- 7. Comments for documentation
-- ============================================

COMMENT ON TABLE public.notification_settings IS 
'Stores user preferences for Telegram notification delivery times and types';

COMMENT ON COLUMN public.notification_settings.morning_time IS 
'Time of day for morning summary notification (in user timezone)';

COMMENT ON COLUMN public.notification_settings.evening_time IS 
'Time of day for evening summary notification (in user timezone)';

COMMENT ON COLUMN public.notification_settings.timezone IS 
'User timezone for notification scheduling (IANA timezone)';

COMMENT ON COLUMN public.telegram_users.last_morning_notification IS 
'Timestamp of last successfully sent morning notification';

COMMENT ON COLUMN public.telegram_users.last_evening_notification IS 
'Timestamp of last successfully sent evening notification';

COMMENT ON COLUMN public.telegram_users.last_deadline_check IS 
'Timestamp of last deadline reminder check';
