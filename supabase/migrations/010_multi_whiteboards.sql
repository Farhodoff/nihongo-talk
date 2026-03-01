-- 1. Doska nomini qo'shish (Title)
alter table public.whiteboards 
add column if not exists title text default 'Yangi Doska';

-- 2. Bitta fanda ko'p doska bo'lishiga ruxsat berish
-- (Eski "bitta fan = bitta doska" qoidasini olib tashlaymiz)
alter table public.whiteboards 
drop constraint if exists whiteboards_subject_id_key;

-- 3. Xavfsizlik qoidalari (RLS) ni yangilash (Ehtiyot shart)
alter table public.whiteboards enable row level security;

-- Eski qoidalarni tozalash
drop policy if exists "Users can view their own whiteboards" on public.whiteboards;
drop policy if exists "Users can insert their own whiteboards" on public.whiteboards;
drop policy if exists "Users can update their own whiteboards" on public.whiteboards;
drop policy if exists "Users can delete their own whiteboards" on public.whiteboards;

-- Yangi qoidalar
create policy "Users can view their own whiteboards"
on public.whiteboards for select using (auth.uid() = user_id);

create policy "Users can insert their own whiteboards"
on public.whiteboards for insert with check (auth.uid() = user_id);

create policy "Users can update their own whiteboards"
on public.whiteboards for update using (auth.uid() = user_id);

create policy "Users can delete their own whiteboards"
on public.whiteboards for delete using (auth.uid() = user_id);
