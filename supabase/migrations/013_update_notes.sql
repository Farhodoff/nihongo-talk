-- 1. Study Notes (Konspektlar) jadvali
create table if not exists public.study_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  subject_id uuid references public.subjects not null,
  title text not null,
  content text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 2. Xavfsizlik qoidalari (RLS)
alter table public.study_notes enable row level security;

DROP POLICY IF EXISTS "Users can view their own study notes" ON public.study_notes;
create policy "Users can view their own study notes"
on public.study_notes for select using (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own study notes" ON public.study_notes;
create policy "Users can insert their own study notes"
on public.study_notes for insert with check (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own study notes" ON public.study_notes;
create policy "Users can update their own study notes"
on public.study_notes for update using (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own study notes" ON public.study_notes;
create policy "Users can delete their own study notes"
on public.study_notes for delete using (auth.uid() = user_id);
