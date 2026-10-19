-- 1.07.76 · Subcarpetas en Vocabulario > Lista
-- Cada carpeta puede estar dentro de otra (parent_id). Si se borra la carpeta padre, la app sube las hijas un nivel;
-- ON DELETE SET NULL es solo la red de seguridad (las hijas pasarían al primer nivel).
alter table public.user_folders
  add column if not exists parent_id uuid references public.user_folders(id) on delete set null;
create index if not exists user_folders_parent_idx on public.user_folders(parent_id);
