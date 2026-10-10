-- ══════════════════════════════════════════════════════════
-- MIGRACIÓN 1.07.49 — registro diario de actividad (gráfica de Progresión)
-- Ejecutar en el SQL Editor de Supabase. Es seguro repetirla.
-- Sin esta tabla la app funciona igual, pero la gráfica solo se guarda en el dispositivo.
-- ══════════════════════════════════════════════════════════
create table if not exists public.user_activity (
  user_id    uuid not null references auth.users(id) on delete cascade,
  day        date not null,
  learned    integer not null default 0 check (learned >= 0),   -- palabras que pasaron a "dominadas" ese día
  practiced  integer not null default 0 check (practiced >= 0), -- respuestas dadas ese día
  updated_at timestamptz default now(),
  primary key (user_id, day)
);

alter table public.user_activity enable row level security;
revoke all on public.user_activity from anon;
drop policy if exists "own_rows" on public.user_activity;
create policy "own_rows" on public.user_activity
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
