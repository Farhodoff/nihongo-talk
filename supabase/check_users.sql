-- Bazadagi bor-yo'g'ini tekshirish uchun so'rov
SELECT 
    id, 
    telegram_first_name, 
    telegram_username, 
    notification_time, 
    notifications_enabled, 
    is_active 
FROM 
    public.telegram_users;
