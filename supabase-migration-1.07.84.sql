-- 1.07.84 · OPCIONAL: aviso en tiempo real directo desde la base de datos.
-- La app ya avisa entre dispositivos sin esto (canal "broadcast"); esto añade una segunda señal
-- que salta aunque el cambio se haga fuera de la app (p. ej. desde el panel de Supabase).
-- Ejecutar una sola vez en Supabase → SQL Editor.
alter table public.user_words   replica identity full;
alter table public.user_folders replica identity full;

do $$
begin
  begin alter publication supabase_realtime add table public.user_words;   exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.user_folders; exception when duplicate_object then null; end;
end $$;
