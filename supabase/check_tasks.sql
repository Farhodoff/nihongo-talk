-- Foydalanuvchining vazifalarini tekshirish
SELECT 
    id, 
    title, 
    status, 
    priority, 
    due_date, 
    user_id 
FROM 
    public.tasks 
WHERE 
    user_id = '58c2560c-cdf2-4cb4-8b8d-54e06e69b5f8'; -- User ID from previous screenshot
