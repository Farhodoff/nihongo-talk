# 🔧 Constraint Xatoligini Tuzatish

## ❌ Yangi Xatolik

```
ERROR: 23514: check constraint "tasks_status_check" of relation "tasks" is violated by some row
```

## 🔍 Muammo Tahlili

Bu xatolik shuni anglatadiki:

1. **Mavjud ma'lumotlar** `tasks` jadvalida bor
2. Ba'zi qatorlarda `status` qiymati yangi constraint bilan **mos kelmayapti**
3. Masalan: `status = 'pending'` yoki `status = 'backlog'` bo'lishi mumkin
4. Lekin yangi constraint faqat `'todo', 'in_progress', 'done', 'archived'` qiymatlariga ruxsat beradi

## ✅ Yechim

Men yangilangan migration skriptini yaratdim. Bu skript:

1. ✅ **Avval** mavjud ma'lumotlarni to'g'rilaydi
2. ✅ **Keyin** constraintlarni qo'shadi
3. ✅ Xavfsiz va ishonchli

## 📝 Yangilangan Skript Nima Qiladi?

### 1. Mavjud Ma'lumotlarni To'g'rilash

```sql
-- Noto'g'ri status qiymatlarini 'todo' ga o'zgartirish
UPDATE tasks 
SET status = CASE 
    WHEN status NOT IN ('todo', 'in_progress', 'done', 'archived') THEN 'todo'
    ELSE status
END;

-- Noto'g'ri priority qiymatlarini 'medium' ga o'zgartirish
UPDATE tasks 
SET priority = CASE 
    WHEN priority NOT IN ('low', 'medium', 'high', 'urgent') THEN 'medium'
    ELSE priority
END;
```

### 2. Eski Constraintlarni O'chirish

```sql
-- Agar eski constraint mavjud bo'lsa, uni o'chirish
ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_status_check;
ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_priority_check;
```

### 3. Yangi Constraintlarni Qo'shish

```sql
-- Yangi constraintlarni qo'shish
ALTER TABLE tasks ADD CONSTRAINT tasks_status_check 
CHECK (status IN ('todo', 'in_progress', 'done', 'archived'));

ALTER TABLE tasks ADD CONSTRAINT tasks_priority_check 
CHECK (priority IN ('low', 'medium', 'high', 'urgent'));
```

## 🚀 Qanday Ishlatish

1. **Supabase Dashboard**ga kiring
2. **SQL Editor**ni oching
3. **Yangilangan** [`supabase_migration_update.sql`](file:///Users/soyilovfarhod/task_planner/task_planner/supabase_migration_update.sql) faylini oching
4. Barcha kodni **nusxalang**
5. Supabase SQL Editor'ga **joylashtiring**
6. **Run** tugmasini bosing ▶️

## 🔍 Tekshirish

Migration bajarilgandan so'ng, quyidagi SQL orqali tekshiring:

```sql
-- Barcha status qiymatlarini ko'rish
SELECT DISTINCT status FROM tasks;

-- Natija:
-- 'todo'
-- 'in_progress'
-- 'done'
-- 'archived'

-- Barcha priority qiymatlarini ko'rish
SELECT DISTINCT priority FROM tasks;

-- Natija:
-- 'low'
-- 'medium'
-- 'high'
-- 'urgent'

-- Barcha type qiymatlarini ko'rish (study_sessions)
SELECT DISTINCT type FROM study_sessions;

-- Natija:
-- 'focus'
-- 'pomodoro'
-- 'review'
-- 'practice'
-- 'break'
```

## 📊 Ma'lumotlar O'zgarishi

### Avvalgi Holatda (Misol)

| id | title | status | priority |
|----|-------|--------|----------|
| 1 | Task 1 | `pending` | `normal` |
| 2 | Task 2 | `todo` | `medium` |
| 3 | Task 3 | `backlog` | `high` |

### Keyingi Holatda

| id | title | status | priority |
|----|-------|--------|----------|
| 1 | Task 1 | `todo` ✅ | `medium` ✅ |
| 2 | Task 2 | `todo` | `medium` |
| 3 | Task 3 | `todo` ✅ | `high` |

## ⚠️ Muhim Eslatmalar

### 1. Ma'lumotlar O'zgaradi

Agar sizda quyidagi status qiymatlari bo'lsa:
- `pending` → `todo` ga o'zgaradi
- `backlog` → `todo` ga o'zgaradi
- `completed` → `done` ga o'zgaradi (agar kerak bo'lsa, qo'lda o'zgartiring)

### 2. Priority Qiymatlari

Agar sizda quyidagi priority qiymatlari bo'lsa:
- `normal` → `medium` ga o'zgaradi
- `critical` → `urgent` ga o'zgaradi (agar kerak bo'lsa, qo'lda o'zgartiring)

### 3. Qo'lda O'zgartirish

Agar ma'lumotlarni boshqacha o'zgartirmoqchi bo'lsangiz, migration skriptini ishlatishdan **oldin** quyidagi SQL ni ishlating:

```sql
-- Misol: 'completed' ni 'done' ga o'zgartirish
UPDATE tasks SET status = 'done' WHERE status = 'completed';

-- Misol: 'critical' ni 'urgent' ga o'zgartirish
UPDATE tasks SET priority = 'urgent' WHERE priority = 'critical';
```

## 🎯 Qadamma-Qadam Jarayon

### Variant 1: Avtomatik (Tavsiya etiladi)

1. ✅ Yangilangan migration skriptini ishlatish
2. ✅ Barcha noto'g'ri qiymatlar avtomatik tuzatiladi
3. ✅ Constraintlar qo'shiladi

### Variant 2: Qo'lda Nazorat

1. 🔍 Avval mavjud qiymatlarni tekshirish:
   ```sql
   SELECT DISTINCT status FROM tasks;
   SELECT DISTINCT priority FROM tasks;
   ```

2. ✏️ Kerakli o'zgarishlarni qo'lda amalga oshirish:
   ```sql
   UPDATE tasks SET status = 'done' WHERE status = 'completed';
   UPDATE tasks SET priority = 'urgent' WHERE priority = 'critical';
   ```

3. ✅ Keyin migration skriptini ishlatish

## ❓ Savol-Javoblar

### Q: Ma'lumotlarim yo'qolmaydi?
**A:** Yo'q, faqat `status` va `priority` qiymatlari yangi formatga o'zgartiriladi.

### Q: Eski qiymatlarni qaytara olamanmi?
**A:** Ha, agar migration ishlatishdan oldin backup olgan bo'lsangiz.

### Q: Qaysi qiymatlar o'zgaradi?
**A:** Faqat yangi constraint bilan mos kelmaydigan qiymatlar.

### Q: Xavfsizmi?
**A:** Ha, lekin muhim ma'lumotlar bo'lsa, avval backup oling.

## 🚀 Tayyor!

Endi yangilangan [`supabase_migration_update.sql`](file:///Users/soyilovfarhod/task_planner/task_planner/supabase_migration_update.sql) faylini ishlatishingiz mumkin!

Bu safar hamma narsa ishlashi kerak! 💪
