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

-- ---------------------------------------------------------------------------
-- Answer keys entered by the site's editors, one row per test (e.g. '2004B').
-- Everyone can read them (the app grades with them); only editors can write.
-- ---------------------------------------------------------------------------

-- Accounts allowed to enter answer keys. Add yourself after creating your account:
--   insert into public.key_editors (user_id) select id from auth.users where email = 'you@example.com';
create table if not exists public.key_editors (
  user_id  uuid primary key references auth.users (id) on delete cascade,
  added_at timestamptz not null default now()
);
alter table public.key_editors enable row level security;
drop policy if exists "editors: see own row" on public.key_editors;
create policy "editors: see own row" on public.key_editors for select to authenticated using (user_id = auth.uid());
grant select on public.key_editors to authenticated;
revoke all on public.key_editors from anon;

create or replace function public.is_key_editor() returns boolean
  language sql stable security definer set search_path = ''
  as $$ select exists (select 1 from public.key_editors where user_id = auth.uid()) $$;

create table if not exists public.answer_keys (
  contest    text primary key check (contest ~ '^(200[2-9]|201[0-9]|2020)[AB]$'),
  answers    text not null check (answers ~ '^[A-E]{25}$'),
  updated_by uuid references auth.users (id) on delete set null,
  updated_at timestamptz not null default now()
);
alter table public.answer_keys enable row level security;
drop policy if exists "keys: anyone can read"  on public.answer_keys;
drop policy if exists "keys: editors insert"   on public.answer_keys;
drop policy if exists "keys: editors update"   on public.answer_keys;
create policy "keys: anyone can read" on public.answer_keys for select to anon, authenticated using (true);
create policy "keys: editors insert"  on public.answer_keys for insert to authenticated with check (public.is_key_editor());
create policy "keys: editors update"  on public.answer_keys for update to authenticated using (public.is_key_editor()) with check (public.is_key_editor());
grant select on public.answer_keys to anon, authenticated;
grant insert, update on public.answer_keys to authenticated;

-- Every save is recorded, so a mistaken key can be traced and restored.
create table if not exists public.answer_key_history (
  id         bigint generated always as identity primary key,
  contest    text not null,
  answers    text not null,
  changed_by uuid,
  changed_at timestamptz not null default now()
);
alter table public.answer_key_history enable row level security;
drop policy if exists "key history: editors read" on public.answer_key_history;
create policy "key history: editors read" on public.answer_key_history for select to authenticated using (public.is_key_editor());
grant select on public.answer_key_history to authenticated;
revoke all on public.answer_key_history from anon;

create or replace function public.answer_keys_stamp() returns trigger
  language plpgsql security definer set search_path = ''
  as $$
  begin
    new.updated_by := auth.uid();
    new.updated_at := now();
    insert into public.answer_key_history (contest, answers, changed_by) values (new.contest, new.answers, auth.uid());
    return new;
  end $$;
drop trigger if exists answer_keys_stamp on public.answer_keys;
create trigger answer_keys_stamp before insert or update on public.answer_keys
  for each row execute function public.answer_keys_stamp();

-- ---------------------------------------------------------------------------
-- Saved "Teach me how to solve this problem" lessons, written once by the AI and reused.
-- Only the server (with SUPABASE_SECRET_KEY) reads and writes this table; browsers never touch it directly,
-- so nobody can plant a lesson. A lesson is regenerated if the problem's answer key changes.
-- ---------------------------------------------------------------------------
create table if not exists public.lessons (
  problem_id text primary key check (problem_id ~ '^20[0-2][0-9][AB][0-9]{1,2}$'),
  lesson     jsonb not null,
  answer     text check (answer in ('A','B','C','D','E')),
  version    integer not null default 2,
  model      text,
  created_at timestamptz not null default now()
);
alter table public.lessons enable row level security;
revoke all on public.lessons from anon, authenticated;
