-- ══════════════════════════════════════════════════════════
-- DEUTSCH LERNEN — Supabase Setup v2
-- Run this in: Supabase → SQL Editor → New Query
-- ══════════════════════════════════════════════════════════

-- ── 1. DROP old trigger if it exists (from v1) ───────────
DROP TRIGGER IF EXISTS enforce_email_whitelist ON auth.users;
DROP FUNCTION IF EXISTS check_allowed_email();

-- ── 2. ALLOWED EMAILS whitelist ──────────────────────────
CREATE TABLE IF NOT EXISTS public.allowed_emails (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- The two authorised users
INSERT INTO public.allowed_emails (email) VALUES
  ('mariogutierrezlopez@icloud.com'),
  ('majasplete@web.de')
ON CONFLICT DO NOTHING;

-- Anyone can read (so the app can check), nobody can write from client
ALTER TABLE public.allowed_emails ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "read allowed emails" ON public.allowed_emails;
CREATE POLICY "read allowed emails"
  ON public.allowed_emails FOR SELECT TO anon, authenticated USING (true);

-- ── 3. WORD PROGRESS table ───────────────────────────────
-- Stores per-user spaced-repetition data for each word
CREATE TABLE IF NOT EXISTS public.word_progress (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email    TEXT NOT NULL,
  word_de       TEXT NOT NULL,
  seen          INT  DEFAULT 0,   -- times shown
  correct       INT  DEFAULT 0,   -- times answered correctly
  difficulty    INT  DEFAULT 0,   -- 0=normal 1=hard (user-flagged)
  next_review   TIMESTAMPTZ DEFAULT now(), -- spaced repetition next date
  last_seen     TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_email, word_de)
);

ALTER TABLE public.word_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "users manage own progress" ON public.word_progress;
CREATE POLICY "users manage own progress"
  ON public.word_progress FOR ALL TO authenticated
  USING (user_email = auth.jwt() ->> 'email')
  WITH CHECK (user_email = auth.jwt() ->> 'email');

-- ── 4. Re-invite helper: function to check if email allowed ─
-- The app calls this RPC before attempting sign-in/invite
CREATE OR REPLACE FUNCTION public.is_email_allowed(check_email TEXT)
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER AS $$
  SELECT EXISTS (SELECT 1 FROM public.allowed_emails WHERE email = lower(check_email));
$$;

-- ══════════════════════════════════════════════════════════
-- DONE.
--
-- NOW: go to Authentication → Users → Add user (NOT invite)
-- Use "Create new user" with email + temporary password.
-- The user can then change their password from the app.
--
-- Or use the invite flow — but first set Site URL in:
-- Authentication → URL Configuration → Site URL
-- to your GitHub Pages URL, THEN invite.
-- ══════════════════════════════════════════════════════════
