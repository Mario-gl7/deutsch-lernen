-- ══════════════════════════════════════════════════════════
-- MIGRACIÓN 1.07.40 — para la base de datos ya existente
-- Ejecutar por bloques en el SQL Editor. Es seguro repetirla.
-- ══════════════════════════════════════════════════════════

-- 1) Borrar un usuario (o una carpeta) ya no falla por claves foráneas
alter table public.user_words
  drop constraint if exists user_words_user_id_fkey,
  add  constraint user_words_user_id_fkey foreign key (user_id) references auth.users(id) on delete cascade,
  drop constraint if exists user_words_folder_id_fkey,
  add  constraint user_words_folder_id_fkey foreign key (folder_id) references public.user_folders(id) on delete set null;

alter table public.user_progress
  drop constraint if exists user_progress_user_id_fkey,
  add  constraint user_progress_user_id_fkey foreign key (user_id) references auth.users(id) on delete cascade;

alter table public.user_folders
  drop constraint if exists user_folders_user_id_fkey,
  add  constraint user_folders_user_id_fkey foreign key (user_id) references auth.users(id) on delete cascade;

alter table public.user_books
  drop constraint if exists user_books_user_id_fkey,
  add  constraint user_books_user_id_fkey foreign key (user_id) references auth.users(id) on delete cascade;

-- 2) Índices
create index if not exists user_words_user_id_idx   on public.user_words(user_id);
create index if not exists user_words_folder_id_idx on public.user_words(folder_id);
create index if not exists user_folders_user_id_idx on public.user_folders(user_id);

-- 3) Límites de longitud (NOT VALID: se aplican a datos nuevos sin revisar los antiguos)
alter table public.user_words
  add constraint user_words_len_chk check (char_length(de) between 1 and 300 and char_length(es) between 1 and 500
    and char_length(tipo) <= 50 and char_length(articulo) <= 20) not valid;
alter table public.user_folders
  add constraint user_folders_len_chk check (char_length(name) between 1 and 100 and char_length(color) <= 20) not valid;
alter table public.user_books
  add constraint user_books_len_chk check (char_length(book_id) <= 100 and char_length(title) <= 300
    and char_length(storage_path) <= 300) not valid;

-- 4) base_words: solo lectura
revoke insert, update, delete, truncate on public.base_words from anon, authenticated;

-- 5) Políticas de Storage: añadir WITH CHECK al UPDATE
drop policy if exists "books update own" on storage.objects;
create policy "books update own" on storage.objects for update to authenticated
  using (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'books' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- 6) Tablas antiguas sin uso (comprueba antes que están vacías o no te hacen falta)
-- select count(*) from public.word_progress;
-- drop table public.word_progress;
-- drop table public.allowed_emails;
