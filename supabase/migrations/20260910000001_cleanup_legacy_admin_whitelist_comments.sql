-- =====================================================================================
-- NIHONGO TALK MIGRATION: 20260910000001_cleanup_legacy_admin_whitelist_comments.sql
-- ARCHITECTURAL SECURITY NOTE & INVARIANT DECLARATION:
-- =====================================================================================
-- 
-- 1. Tarixiy Izoh (Historical Context):
--    Oldingi 20260903000000_sync_admin_roles_and_is_admin.sql va 
--    20260906000000_fix_is_admin_and_rpc_users.sql migratsiyalarida dastlabki sinov va 
--    testlash uchun qo'shilgan vaqtinchalik test emaillar (masalan: fsoyilovv@gmail.com, 
--    testadmin2026@nihon-talk.com) bo'lgan.
-- 
-- 2. Tizimli Qoida (Permanent System Invariant):
--    Loyihada FAQAT VA FAQAT bitta superadmin mavjud: 'fsoyilov@gmail.com'.
--    20260910000000_strictly_single_superadmin_fsoyilov.sql migratsiyasi is_admin() va 
--    get_admin_all_users() funksiyalarini, shuningdek profiles jadvalini to'liq yangilab, 
--    barcha qoldiq test rollarini doimiy ravishda 'user'ga o'tkazdi.
-- 
-- 3. Qayta Ishga Tushirish Bo'yicha Ogohlantirish:
--    Eski migratsiyalardagi sinov emaillari hech qachon qayta tiklanmasligi kerak.
--    Ushbu fayl arxitektura va xavfsizlik auditining xronologik dalili sifatida saqlanadi.
-- =====================================================================================

COMMENT ON FUNCTION public.is_admin() IS 'Checks if the caller is strictly the unique superadmin (fsoyilov@gmail.com)';
COMMENT ON FUNCTION public.get_admin_all_users() IS 'Returns all registered users for admin dashboard strictly authorized for fsoyilov@gmail.com';
