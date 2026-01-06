# 🔧 Supabase Database Migration - Xatolikni Tuzatish

## ❌ Muammo

Siz oldingi SQL skriptni ishlatganingizda quyidagi xatolik yuzaga keldi:

```
ERROR: 42703: column "task_id" does not exist
```

**Sabab:** `tasks` va `study_sessions` jadvallari allaqachon mavjud edi, lekin yangi SQL skript ularni qayta yaratishga harakat qildi. Mavjud jadvalda `task_id` ustuni yo'q edi.

## ✅ Yechim

Men **migration** (o'zgarishlar) skriptini yaratdim. Bu skript:
- ✅ Mavjud ma'lumotlarni **saqlab qoladi**
- ✅ Faqat **yangi ustunlarni qo'shadi**
- ✅ Mavjud ustunlarni **o'zgartirmaydi**
- ✅ Xavfsiz va qayta ishlatilishi mumkin

## 📝 Qanday Ishlatish

### 1-usul: Migration Skriptini Ishlatish (Tavsiya etiladi)

Bu usul mavjud ma'lumotlaringizni saqlab qoladi:

1. **Supabase Dashboard**ga kiring
2. **SQL Editor**ni oching
3. [`supabase_migration_update.sql`](file:///Users/soyilovfarhod/task_planner/task_planner/supabase_migration_update.sql) faylini oching
4. Barcha kodni nusxalang
5. Supabase SQL Editor'ga joylashtiring
6. **Run** tugmasini bosing

### 2-usul: Jadvallarni Qayta Yaratish (Faqat test uchun)

⚠️ **OGOHLANTIRISH:** Bu usul barcha ma'lumotlarni o'chiradi!

Agar test muhitida ishlayotgan bo'lsangiz va ma'lumotlarni yo'qotish muammo bo'lmasa:

```sql
-- BARCHA MA'LUMOTLARNI O'CHIRADI!
DROP TABLE IF EXISTS study_sessions CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;

-- Keyin supabase_tasks_sessions.sql faylini ishlatishingiz mumkin
```

## 📊 Migration Skripti Nima Qiladi?

### Tasks Jadvaliga Qo'shiladigan Ustunlar:

| Ustun | Turi | Tavsif |
|-------|------|--------|
| `description` | TEXT | Vazifa tavsifi |
| `tags` | JSONB | Teglar ro'yxati |
| `estimated_duration` | INTEGER | Taxminiy davomiylik (daqiqa) |
| `actual_duration` | INTEGER | Haqiqiy davomiylik (daqiqa) |
| `completed_at` | TIMESTAMP | Bajarilgan vaqt |
| `updated_at` | TIMESTAMP | Oxirgi yangilanish vaqti |

### Study Sessions Jadvaliga Qo'shiladigan Ustunlar:

| Ustun | Turi | Tavsif |
|-------|------|--------|
| `task_id` | UUID | Vazifaga havola |
| `end_time` | TIMESTAMP | Tugash vaqti |
| `planned_duration` | INTEGER | Rejalashtirilgan davomiylik |
| `productivity_rating` | INTEGER | Samaradorlik reytingi (1-5) |
| `interrupted` | BOOLEAN | To'xtatilganmi? |
| `interruption_reason` | TEXT | To'xtatish sababi |
| `notes` | TEXT | Qaydlar |
| `topics_covered` | JSONB | O'rganilgan mavzular |
| `breaks_taken` | INTEGER | Tanaffuslar soni |
| `xp_earned` | INTEGER | Olingan XP |
| `updated_at` | TIMESTAMP | Oxirgi yangilanish vaqti |

## 🔍 Tekshirish

Migration bajarilgandan so'ng, quyidagi SQL orqali tekshiring:

```sql
-- Tasks jadvalining barcha ustunlarini ko'rish
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'tasks' 
ORDER BY ordinal_position;

-- Study sessions jadvalining barcha ustunlarini ko'rish
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'study_sessions' 
ORDER BY ordinal_position;
```

## 🎯 Keyingi Qadamlar

Migration muvaffaqiyatli bajarilgandan so'ng:

1. ✅ Dashboard sahifasini yangilang - yangi ustunlar bilan ishlaydi
2. ✅ TasksPage komponentini tekshiring
3. ✅ FocusPage (study sessions) komponentini tekshiring
4. ✅ Ma'lumotlar to'g'ri yuklanayotganini tasdiqlang

## 📚 Qo'shimcha Ma'lumot

### Triggers

Migration skripti avtomatik ravishda `updated_at` ustunini yangilaydigan triggerlarni yaratadi:

- `tasks` jadvali yangilanganda → `updated_at` avtomatik yangilanadi
- `study_sessions` jadvali yangilanganda → `updated_at` avtomatik yangilanadi

### Views

Ikkita foydali view yaratiladi:

1. **today_tasks** - Bugungi vazifalar
2. **recent_sessions** - Oxirgi 7 kunlik sessiyalar

Bu viewlarni quyidagicha ishlatishingiz mumkin:

```sql
-- Bugungi vazifalarni olish
SELECT * FROM today_tasks;

-- Oxirgi sessiyalarni olish
SELECT * FROM recent_sessions;
```

## ❓ Savol-Javoblar

### Q: Migration xavfli emasmi?
**A:** Yo'q, migration skripti `IF NOT EXISTS` va `DO $$ BEGIN ... END $$` bloklaridan foydalanadi. Bu mavjud ma'lumotlarni saqlab qoladi.

### Q: Bir necha marta ishlatish mumkinmi?
**A:** Ha, migration skripti idempotent - uni bir necha marta ishlatishingiz mumkin, xatolik bermaydi.

### Q: Eski ma'lumotlarim yo'qolmaydi?
**A:** Yo'q, migration faqat yangi ustunlar qo'shadi, mavjud ma'lumotlarni o'zgartirmaydi.

### Q: Agar xatolik yuzaga kelsa?
**A:** Xatolik haqida menga xabar bering, men yordam beraman!

## 🚀 Tayyor!

Endi [`supabase_migration_update.sql`](file:///Users/soyilovfarhod/task_planner/task_planner/supabase_migration_update.sql) faylini Supabase'da ishlatishingiz mumkin!
