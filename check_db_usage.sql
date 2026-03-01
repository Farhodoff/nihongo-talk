-- Supabase Database hajmi va qolgan joyni tekshirish uchun SQL so'rov (TUZATILGAN)
-- Bu kodni Supabase Dashboard > SQL Editor qismida ishga tushiring.

SELECT
  pg_size_pretty(pg_database_size(current_database())) AS band_qilingan_joy,
  pg_size_pretty(524288000::bigint) AS umumiy_limit_free_tier,
  pg_size_pretty(524288000::bigint - pg_database_size(current_database())) AS qolgan_joy;

-- Izoh: 
-- 524288000 bayt = 500 MB (Supabase Free Tier limiti)
-- Agar Pro rejasida bo'lsangiz, limit (8GB) kattaroq bo'ladi: 8589934592 bayt.

-- Jadval bo'yicha ma'lumotlarni ko'rish uchun:
SELECT
  relname AS jadval_nomi,
  pg_size_pretty(pg_total_relation_size(relid)) AS hajmi
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC;
