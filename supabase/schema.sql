-- Vertex accounts: saved progress and answer history.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste this file -> Run.
-- Safe to run again; it only creates what is missing and replaces the policies.

-- One row per user: the app's whole progress object and any answer keys they typed in.
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  state      jsonb not null default '{}'::jsonb,
  keys       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- One row per answered problem, for the performance history on the profile page.
create table if not exists public.attempts (
  id         bigint generated always as identity primary key,
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  problem_id text not null check (char_length(problem_id) <= 16),
  choice     text check (choice in ('A','B','C','D','E')),
  correct    boolean,
  seconds    integer check (seconds >= 0 and seconds < 86400),
  created_at timestamptz not null default now()
);
create index if not exists attempts_user_time on public.attempts (user_id, created_at desc);

-- Row level security: every signed-in user can see and change only their own rows.
-- Visitors who are not signed in can read and write nothing.
alter table public.progress enable row level security;
alter table public.attempts enable row level security;

drop policy if exists "own progress: read"   on public.progress;
drop policy if exists "own progress: insert" on public.progress;
drop policy if exists "own progress: update" on public.progress;
create policy "own progress: read"   on public.progress for select to authenticated using (user_id = auth.uid());
create policy "own progress: insert" on public.progress for insert to authenticated with check (user_id = auth.uid());
create policy "own progress: update" on public.progress for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "own attempts: read"   on public.attempts;
drop policy if exists "own attempts: insert" on public.attempts;
drop policy if exists "own attempts: delete" on public.attempts;
create policy "own attempts: read"   on public.attempts for select to authenticated using (user_id = auth.uid());
create policy "own attempts: insert" on public.attempts for insert to authenticated with check (user_id = auth.uid());
create policy "own attempts: delete" on public.attempts for delete to authenticated using (user_id = auth.uid());

grant select, insert, update on public.progress to authenticated;
grant select, insert, delete on public.attempts to authenticated;
revoke all on public.progress, public.attempts from anon;
