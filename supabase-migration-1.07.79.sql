-- 1.07.79: el tipo «Adjektive» pasa a llamarse «Adjektiv»
update public.user_words set tipo = 'Adjektiv' where tipo = 'Adjektive';
update public.base_words set "Tipo" = 'Adjektiv' where "Tipo" = 'Adjektive';
