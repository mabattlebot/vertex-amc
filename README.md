# Vertex (AMC 10/12 mastery) with Gemini backend (Groq backup)

## Run locally
1. Install Node 18+.
2. Copy `.env.example` to `.env` and put your NEW Gemini key in `GEMINI_API_KEY`. Optionally also set `GROQ_API_KEY` as a backup (see below).
3. `node server.js`, then open http://localhost:3000

## Easiest deploy (no coding): Render.com
1. Put this folder in a GitHub repo (the `.env` file is ignored, so no key is uploaded).
2. On render.com choose New > Blueprint, select the repo. It reads `render.yaml`.
3. When asked for `GEMINI_API_KEY`, paste your NEW key into that field (and `GROQ_API_KEY` if you want the backup). Deploy.
4. Open the URL Render gives you. The status line in the Concept Mastery coach should read "Live AI coach (Gemini)".
Railway, Fly.io and any Node host work the same way: set `GEMINI_API_KEY` (and optionally `GROQ_API_KEY`) as secret environment variables.

## Deploy (general)
Any Node host (Render, Railway, Fly.io, a VPS). Set `GEMINI_API_KEY` in the host's environment/secret settings. The key is read only by `server.js`; the browser only ever calls `/api/ai`.

## Backup AI provider: Groq
Gemini is always the primary provider. If you also set `GROQ_API_KEY`, the server falls back to Groq automatically in two cases: Gemini is not configured at all, or a Gemini call itself fails (quota exceeded, outage, revoked key, etc). Nothing changes if Gemini is working — Groq sits idle as insurance.
- Get a free key at https://console.groq.com/keys.
- Set `GROQ_API_KEY` the same way you set `GEMINI_API_KEY` (never in frontend code — `server.js` is the only place that reads it).
- Default model is `llama-3.3-70b-versatile`; override with `GROQ_MODEL` if you prefer another Groq-hosted model.
- `/api/health` reports which provider is primary (`"provider"`) and whether a backup is configured (`"backup"`), so you can confirm the setup without exposing either key.

## Security notes
- Revoke any key that was ever pasted into a chat, email or repo, and create a new one. This applies to both `GEMINI_API_KEY` and `GROQ_API_KEY`.
- Never commit `.env` (it is in `.gitignore`). `/api/ai` is rate limited (20 requests/min/IP); add auth before putting it on the public internet.
- Keys beginning `AQ.` are treated as Vertex AI Express keys and sent to the aiplatform endpoint; AI Studio keys (`AIza...`) use the generativelanguage endpoint. If a call fails, the app shows the provider's error message (with the key itself redacted).

## AI without an API key
The AI backend is entirely optional. Without `GEMINI_API_KEY` or `GROQ_API_KEY` the lessons, quick checks, timers and written solutions still work; only the live tutor is off. The version published on claude.ai uses Claude through the viewer's own account and needs no key.

## Problems
All 941 AMC 10 problems (2002-2020, A and B) are included. 72 are typeset in LaTeX with checked answers and written solutions; the rest are shown as the original screenshots (public/p/*.json) and need their answer keys added on the Library page before they can be graded.

## Math rendering
All math is written in LaTeX and typeset with MathJax (loaded from cdnjs, with jsDelivr as a fallback).

## Accounts and saved progress (Supabase)
The Profile / Sign in tab lets visitors create an account and keep their progress, solved problems and answer history across devices. Without an account, progress stays in the browser as before.
- Settings live in `public/config.js` (`VERTEX_SUPABASE`). The publishable key is meant to be public; access is enforced by row level security.
- One-time setup in the Supabase dashboard:
  1. **SQL Editor**: run `supabase/schema.sql` (creates the `progress` and `attempts` tables and their security rules).
  2. **Authentication → URL Configuration**: set **Site URL** to `https://mabattlebot.github.io/vertex-amc/` and add `https://mabattlebot.github.io/vertex-amc/**` and `http://localhost:3000/**` to **Redirect URLs**.
  3. **Authentication → Sign In / Providers → Email**: Supabase's built-in email service only sends a few emails per hour, so either turn off **Confirm email** or set up custom SMTP before opening sign-ups to the public.
- Code: `public/cloud.js`. The main app calls `onVertexSave`, `onVertexAttempt` and `onVertexReset` hooks; nothing else in the app depends on Supabase.

## Answer keys and solutions
Grading uses, in order: keys entered by editors (Supabase `answer_keys` table), answers checked by hand (per-problem answers and the notes above `KEYS0` in `public/index.html`), then a key a visitor typed on the Library page (that browser only). Contests with none of these show "No answer key yet".

**Entering keys (editors):** open `#keys` (linked from the Library page). It shows one test at a time, titled by year and session (e.g. "2004 · AMC 10B"), oldest first, starting with the first test without a saved key. Enter or paste the 25 answers and choose **Save and go to next test**. Nothing is prefilled; if an answer differs from one checked by hand, saving needs an extra confirmation. Every save is logged in `answer_key_history`. To make an account an editor, run in the SQL Editor:
```sql
insert into public.key_editors (user_id) select id from auth.users where email = 'you@example.com';
``` After answering, each problem links to its AoPS wiki solutions page.

## AI requires sign-in
Every AI feature (tutor chat, feedback on explanations, mistake explanations) needs a signed-in account. Signed-out visitors see a sign-in / create-account prompt in place of the AI; lessons, checks and written solutions still work without an account.
- Enforced on the server: `/api/ai` only answers requests carrying a valid Supabase access token (`Authorization: Bearer …`). The server checks each token with Supabase (`/auth/v1/user`) and caches valid ones for 60 seconds. Missing, expired or forged tokens get `401`; if Supabase cannot be reached the server answers `503` rather than letting the request through.
- Server settings (Render → Environment): `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` (both in `render.yaml`). If they are missing, AI requests are refused with `503`.
- Rate limits apply per signed-in user as well as per address (20 requests per minute).
- For local development only, `AI_REQUIRE_SIGNIN=false` turns the check off.
