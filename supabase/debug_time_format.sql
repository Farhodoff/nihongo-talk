-- Check what time format is stored in the database
SELECT 
    telegram_first_name,
    notification_time,
    LENGTH(notification_time) as time_length,
    is_active,
    notifications_enabled
FROM telegram_users 
WHERE user_id = '58c2560c-cdf2-4cb4-8b8d-54e06e69b5f8';

-- Also check what the current time would be formatted as
-- This helps us understand if there's a formatting mismatch
