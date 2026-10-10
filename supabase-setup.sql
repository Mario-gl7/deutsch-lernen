-- ══════════════════════════════════════════════════════════
-- DEUTSCH LERNEN — Supabase Setup (v3, 1.07.40)
-- Estado final de la base de datos. Ejecutar en: Supabase → SQL Editor.
-- Para una base YA existente usa supabase-migration-1.07.40.sql.
--
-- ANTES: Authentication → Sign In / Providers → desactivar
--        "Allow new users to sign up". Los usuarios se crean a mano
--        (Authentication → Users → Add user). Sin registro público
--        no hace falta whitelist de correos.
-- ══════════════════════════════════════════════════════════

-- ── Carpetas ─────────────────────────────────────────────
create table if not exists public.user_folders (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 100),
  color      text not null default '#4ade80' check (color in ('#4ade80','#60a5fa','#f87171','#fb923c','#a78bfa','#f472b6','#34d399','#fbbf24')),
  created_at timestamptz default now()
);

-- ── Palabras del usuario ─────────────────────────────────
create table if not exists public.user_words (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  tipo       text default '' check (char_length(tipo) <= 50),
  articulo   text default '' check (char_length(articulo) <= 20),
  de         text not null check (char_length(de) between 1 and 300),
  es         text not null check (char_length(es) between 1 and 500),
  created_at timestamptz default now(),
  folder_id  uuid references public.user_folders(id) on delete set null
);

-- ── Progreso (repetición espaciada) ──────────────────────
create table if not exists public.user_progress (
  user_id     uuid not null references auth.users(id) on delete cascade,
  word_de     text not null check (char_length(word_de) <= 300),
  seen        integer default 0,
  correct     integer default 0,
  difficulty  integer default 0,
  next_review bigint default 0,
  updated_at  timestamptz default now(),
  primary key (user_id, word_de)
);

-- ── Libros (Lectura) ─────────────────────────────────────
create table if not exists public.user_books (
  user_id      uuid not null default auth.uid() references auth.users(id) on delete cascade,
  book_id      text not null check (char_length(book_id) <= 100),
  title        text check (char_length(title) <= 300),
  total_pages  integer,
  page_idx     integer default 0,
  storage_path text check (char_length(storage_path) <= 300),
  updated_at   timestamptz default now(),
  primary key (user_id, book_id)
);

-- ── Vocabulario base (solo lectura) ──────────────────────
create table if not exists public.base_words (
  id       serial primary key,
  "Tipo"     text default '',
  "Artículo" text default '',
  "Alemán"   text not null,
  "Español"  text not null
);

-- ── Índices (RLS y claves foráneas) ──────────────────────
create index if not exists user_words_user_id_idx    on public.user_words(user_id);
create index if not exists user_words_folder_id_idx  on public.user_words(folder_id);
create index if not exists user_folders_user_id_idx  on public.user_folders(user_id);

-- ── RLS: cada usuario solo ve y modifica sus filas ───────
do $$
declare t text;
begin
  foreach t in array array['user_words','user_progress','user_folders','user_books'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('revoke all on public.%I from anon', t);
    execute format('drop policy if exists "own_rows" on public.%I', t);
    execute format($p$create policy "own_rows" on public.%I
      for all to authenticated
      using ((select auth.uid()) = user_id)
      with check ((select auth.uid()) = user_id)$p$, t);
  end loop;
end $$;

alter table public.base_words enable row level security;
drop policy if exists "read_base_words" on public.base_words;
create policy "read_base_words" on public.base_words for select to anon, authenticated using (true);
revoke insert, update, delete, truncate on public.base_words from anon, authenticated;

-- ── Storage: bucket privado, cada usuario en su carpeta <uid>/ ──
insert into storage.buckets (id, name, public, file_size_limit)
values ('books', 'books', false, 26214400)
on conflict (id) do update set public = false, file_size_limit = 26214400;

drop policy if exists "books select own" on storage.objects;
drop policy if exists "books insert own" on storage.objects;
drop policy if exists "books update own" on storage.objects;
drop policy if exists "books delete own" on storage.objects;
create policy "books select own" on storage.objects for select to authenticated
  using (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "books insert own" on storage.objects for insert to authenticated
  with check (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "books update own" on storage.objects for update to authenticated
  using (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "books delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- ── Actividad diaria (gráfica de Progresión, 1.07.49) ───────
create table if not exists public.user_activity (
  user_id    uuid not null references auth.users(id) on delete cascade,
  day        date not null,
  learned    integer not null default 0 check (learned >= 0),
  practiced  integer not null default 0 check (practiced >= 0),
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

