-- ══════════════════════════════════════════════════════════
-- MIGRACIÓN 1.07.56 — carpetas y enlaces de la biblioteca de Lectura sincronizados
-- Ejecutar en el SQL Editor de Supabase. Es seguro repetirla.
-- Sin esta tabla la app funciona igual, pero carpetas y enlaces solo se guardan en el dispositivo.
-- ══════════════════════════════════════════════════════════
create table if not exists public.user_reading_library (
  user_id    uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb check (pg_column_size(data) < 500000),
  updated_at timestamptz default now()
);

alter table public.user_reading_library enable row level security;
revoke all on public.user_reading_library from anon;
drop policy if exists "own_rows" on public.user_reading_library;
create policy "own_rows" on public.user_reading_library
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
