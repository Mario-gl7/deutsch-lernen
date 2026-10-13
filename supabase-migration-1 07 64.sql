-- ══════════════════════════════════════════════════════════
-- MIGRACIÓN 1.07.64 — objetivos sincronizados + progreso de puntos/tiempo
-- Ejecutar en el SQL Editor de Supabase. Es seguro repetirla.
-- Sin esto la app funciona igual, pero objetivos, puntos y minutos solo se guardan en cada dispositivo.
-- ══════════════════════════════════════════════════════════

-- 1) Objetivos y recordatorio (un documento por usuario)
create table if not exists public.user_goals (
  user_id    uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb check (pg_column_size(data) < 20000),
  updated_at timestamptz default now()
);
alter table public.user_goals enable row level security;
revoke all on public.user_goals from anon;
drop policy if exists "own_rows" on public.user_goals;
create policy "own_rows" on public.user_goals
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- 2) Respuestas correctas y segundos de estudio por día (para los objetivos de puntos y minutos)
alter table public.user_activity add column if not exists correct integer not null default 0 check (correct >= 0);
alter table public.user_activity add column if not exists seconds integer not null default 0 check (seconds >= 0);
