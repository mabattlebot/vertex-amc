// Accounts and cloud-saved progress, using Supabase (https://supabase.com).
// Loaded after the main app script, so it can use the app's globals: S (progress), KEYS (typed answer keys),
// save, render, go, views, route, esc, byId, cite, mmss, L5.
// Without an account everything works as before: progress stays in this browser only.
(function () {
  const CFG = window.VERTEX_SUPABASE || {};
  const LINK = document.getElementById('navProfile');
  const blank = () => ({ solved: 0, correct: 0, fast: 0, time: 0, ad: 2, topics: {}, seen: {}, speed: {},
    cm: { done: {}, cur: null, stage: 'intro', step: 0, li: 0, pq: [], pi: 0, miss: 0 } });

  if (!CFG.url || !CFG.key || !window.supabase) {
    views.profile = () => `<div class="ov">Profile</div><h1>Accounts are not available</h1>
      <div class="card mt"><p class="t2">${window.supabase ? 'This copy of Vertex has no account service configured.' : 'The account service could not be loaded. Check your connection and reload the page.'}
      Your progress is still saved in this browser.</p></div>`;
    if (location.hash === '#profile') go();
    return;
  }

  const sb = supabase.createClient(CFG.url, CFG.key, {
    auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  const here = () => location.origin + location.pathname;

  // UI state for the profile page.
  const P = { user: null, ready: false, mode: 'signin', msg: '', err: false, busy: false, recovery: false,
    status: '', lastSync: null, history: null };
  let timer = null, pushing = null;

  const hasProgress = s => !!s && ((s.solved || 0) > 0 || Object.keys(s.seen || {}).length > 0 ||
    Object.keys((s.cm || {}).done || {}).length > 0);

  // Combine progress saved in this browser with progress saved in the account.
  // The copy with more answered problems is the base; solved problems and finished lessons from the other are added.
  function merge(cloud, local) {
    const base = (local.solved || 0) > (cloud.solved || 0) ? local : cloud, other = base === local ? cloud : local;
    const m = JSON.parse(JSON.stringify(base));
    m.seen = m.seen || {};
    for (const [id, v] of Object.entries(other.seen || {})) {
      const c = m.seen[id];
      if (c == null || (v === 1 && c !== 1) || (c === 3 && v === 2)) m.seen[id] = v;
    }
    m.cm = m.cm || {};
    m.cm.done = Object.assign({}, (other.cm || {}).done || {}, m.cm.done || {});
    m.speed = Object.assign({}, other.speed || {}, m.speed || {});
    return m;
  }
  function useState(next) {
    const b = blank();
    S = Object.assign(b, next || {});
    S.cm = Object.assign(b.cm, (next && next.cm) || {});
  }

  async function push() {
    if (!P.user) return;
    clearTimeout(timer);
    const row = { user_id: P.user.id, state: S, keys: KEYS, updated_at: new Date().toISOString() };
    pushing = sb.from('progress').upsert(row).then(({ error }) => {
      if (error) { P.status = 'Not saved to your account: ' + error.message; console.warn('Vertex sync:', error); }
      else { P.status = 'Saved to your account'; P.lastSync = new Date(); }
      pushing = null; if (route === 'profile') render();
    });
    return pushing;
  }
  function schedule() {
    if (!P.user) return;
    P.status = 'Saving…';
    clearTimeout(timer);
    timer = setTimeout(push, 1500);
  }

  // Hooks the main app calls.
  window.onVertexSave = schedule;
  window.onVertexAttempt = a => {
    if (!P.user) return;
    sb.from('attempts').insert(a).then(({ error }) => { if (error) console.warn('Vertex history:', error); });
    P.history = null;
  };
  window.onVertexReset = async () => {
    if (!P.user) return;
    useState(blank());
    await push();
    await sb.from('attempts').delete().eq('user_id', P.user.id);
  };
  addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && timer) push(); });

  // After sign-in: bring the account's progress into the app.
  async function adopt() {
    P.status = 'Loading your saved progress…'; if (route === 'profile') render();
    const { data, error } = await sb.from('progress').select('state, keys').eq('user_id', P.user.id).maybeSingle();
    if (error) {
      P.status = 'Could not load your saved progress: ' + error.message;
      console.warn('Vertex sync:', error); render(); return;
    }
    if (!data) { await push(); render(); return; }
    const cloud = data.state || {}, local = S;
    let next;
    if (!hasProgress(local)) next = cloud;
    else if (!hasProgress(cloud) || JSON.stringify(cloud) === JSON.stringify(local)) next = local;
    else next = merge(cloud, local);
    useState(next);
    KEYS = Object.assign({}, data.keys || {}, KEYS);
    try { localStorage.setItem('vertex-keys', JSON.stringify(KEYS)); } catch (e) {}
    save();
    P.status = 'Saved to your account'; P.lastSync = new Date();
    render();
  }

  function setUser(u) {
    const was = P.user && P.user.id;
    P.user = u || null;
    if (LINK) LINK.textContent = P.user ? 'Profile' : 'Sign in';
    if (P.user && P.user.id !== was) adopt();
  }
  sb.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') { P.recovery = true; location.hash = 'profile'; }
    P.ready = true;
    // Run outside the auth callback (Supabase advises against awaiting other calls inside it).
    setTimeout(() => { setUser(session && session.user); if (route === 'profile') render(); }, 0);
  });

  // ---------- actions ----------
  const raw = id => String((document.getElementById(id) || {}).value || ''), val = id => raw(id).trim();
  function say(msg, err) { P.msg = msg; P.err = !!err; P.busy = false; render(); }
  // Read the form before re-rendering (rendering rebuilds the inputs).
  async function run(fn) {
    if (P.busy) return;
    const F = { email: val('pfEmail'), pass: raw('pfPass'), name: val('pfName') };
    P.email = F.email; P.name = F.name;
    P.busy = true; P.msg = ''; render();
    try { await fn(F); } catch (e) { say(e.message || String(e), true); }
  }

  window.VX = {
    mode(m) { P.mode = m; P.msg = ''; render(); },
    signIn: () => run(async F => {
      const { error } = await sb.auth.signInWithPassword({ email: F.email, password: F.pass });
      if (error) throw error;
      say('');
    }),
    signUp: () => run(async F => {
      const email = F.email, password = F.pass, name = F.name;
      if (password.length < 8) throw new Error('Use a password of at least 8 characters.');
      const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: here(), data: name ? { name } : {} } });
      if (error) throw error;
      if (data.session) say('');
      else say('Account created. Check your email for a confirmation link, then sign in here.');
    }),
    forgot: () => run(async F => {
      const email = F.email;
      if (!email) throw new Error('Type your email address first, then choose "Forgot password".');
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: here() });
      if (error) throw error;
      say('If an account exists for that address, a reset link is on its way.');
    }),
    newPassword: () => run(async F => {
      const password = F.pass;
      if (password.length < 8) throw new Error('Use a password of at least 8 characters.');
      const { error } = await sb.auth.updateUser({ password });
      if (error) throw error;
      P.recovery = false; say('Password updated.');
    }),
    signOut: () => run(async () => {
      if (timer || pushing) await (pushing || push());
      await sb.auth.signOut();
      // Clear this browser's copy so the next person on this computer starts fresh. It stays in the account.
      try { localStorage.removeItem('vertex-v3'); localStorage.removeItem('vertex-keys'); } catch (e) {}
      useState(blank()); KEYS = {}; P.history = null; P.status = ''; P.lastSync = null;
      say('Signed out. Your progress is saved in your account.');
    }),
    syncNow: () => run(async () => { await push(); say(''); })
  };

  async function loadHistory() {
    P.history = 'loading';
    const { data, error } = await sb.from('attempts').select('problem_id, choice, correct, seconds, created_at')
      .order('created_at', { ascending: false }).limit(25);
    P.history = error ? { error: error.message } : data;
    if (route === 'profile') render();
  }

  // ---------- page ----------
  const note = () => P.msg ? `<p class="mono" role="status" style="color:var(${P.err ? '--not' : '--t2'})">${esc(P.msg)}</p>` : '';
  const field = (id, label, type, ac, v) => `<label class="pf-l" for="${id}">${label}</label>
    <input id="${id}" type="${type}" autocomplete="${ac}" class="pf-i"${v ? ` value="${esc(v)}"` : ''}>`;

  function signedOut() {
    if (P.recovery) return `<div class="card mt pf"><h2>Choose a new password</h2>
      ${field('pfPass', 'New password (at least 8 characters)', 'password', 'new-password')}
      <p class="mt"><button class="btn pri" ${P.busy ? 'disabled' : ''} onclick="VX.newPassword()">Save password</button></p>${note()}</div>`;
    const up = P.mode === 'signup';
    return `<div class="card mt pf">
      <div class="row" role="tablist">
        <button class="btn sm ${up ? 'gh' : 'pri'}" role="tab" aria-selected="${!up}" onclick="VX.mode('signin')">Sign in</button>
        <button class="btn sm ${up ? 'pri' : 'gh'}" role="tab" aria-selected="${up}" onclick="VX.mode('signup')">Create account</button>
      </div>
      <form onsubmit="event.preventDefault();VX.${up ? 'signUp' : 'signIn'}()">
        ${up ? field('pfName', 'Name (optional)', 'text', 'name', P.name) : ''}
        ${field('pfEmail', 'Email', 'email', 'email', P.email)}
        ${field('pfPass', up ? 'Password (at least 8 characters)' : 'Password', 'password', up ? 'new-password' : 'current-password')}
        <p class="mt"><button class="btn pri" type="submit" ${P.busy ? 'disabled' : ''}>${up ? 'Create account' : 'Sign in'}</button>
        ${up ? '' : '<button class="btn gh" type="button" onclick="VX.forgot()">Forgot password?</button>'}</p>
      </form>${note()}
      <p class="t2 mt">With an account, your progress, solved problems and answer history are saved and follow you to any device.
      Without one, progress is kept in this browser only.</p></div>`;
  }

  function signedIn() {
    if (P.history == null) loadHistory();
    const u = P.user, name = (u.user_metadata && u.user_metadata.name) || '';
    const seen = Object.values(S.seen || {}), solved = seen.filter(v => v === 1).length, missed = seen.filter(v => v === 2).length;
    const acc = S.solved ? Math.round(100 * S.correct / S.solved) : 0;
    const h = P.history;
    const rows = Array.isArray(h) ? (h.length ? h.map(a => {
      const p = byId(a.problem_id);
      const res = a.correct == null ? '<span class="chip">Not graded</span>' : a.correct ? '<span class="chip o">Correct</span>' : '<span class="chip r">Missed</span>';
      return `<tr><td>${esc(p ? cite(p) : a.problem_id)}</td><td>${res}</td><td class="mono">${a.choice || ''}</td><td class="mono">${a.seconds != null ? mmss(a.seconds) : ''}</td><td class="mono">${new Date(a.created_at).toLocaleDateString()}</td></tr>`;
    }).join('') : '<tr><td colspan="5" class="t2">No answers yet. Problems you answer while signed in appear here.</td></tr>')
      : `<tr><td colspan="5" class="t2">${h && h.error ? 'Could not load history: ' + esc(h.error) : 'Loading…'}</td></tr>`;
    return `<div class="card mt"><h2>${esc(name || u.email)}</h2>${name ? `<p class="t2">${esc(u.email)}</p>` : ''}
      <p class="mono">${esc(P.status || '')}${P.lastSync ? ' · ' + P.lastSync.toLocaleTimeString() : ''}</p>
      <p class="mt"><button class="btn sm" ${P.busy ? 'disabled' : ''} onclick="VX.syncNow()">Save now</button>
      <button class="btn sm gh" ${P.busy ? 'disabled' : ''} onclick="VX.signOut()">Sign out</button></p>${note()}</div>
      <div class="g g4 mt">
        <div class="card"><div class="ov">Answered</div><h2>${S.solved || 0}</h2></div>
        <div class="card"><div class="ov">Accuracy</div><h2>${acc}%</h2></div>
        <div class="card"><div class="ov">Problems solved</div><h2>${solved}</h2></div>
        <div class="card"><div class="ov">Still to fix</div><h2>${missed}</h2></div>
      </div>
      <div class="card mt"><h3>Recent answers</h3><div style="overflow-x:auto"><table class="pf-t">
        <thead><tr><th>Problem</th><th>Result</th><th>Choice</th><th>Time</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
  }

  views.profile = () => `<div class="ov">Profile</div><h1>${P.user ? 'Your profile' : 'Sign in to save your progress'}</h1>
    ${!P.ready ? '<div class="card mt"><p class="t2">Checking your sign-in…</p></div>' : P.user && !P.recovery ? signedIn() : signedOut()}`;

  const css = document.createElement('style');
  css.textContent = `.side a.pf-nav{margin-top:auto}@media (max-width:900px){.side a.pf-nav{margin-top:0}}
    .pf{max-width:460px}.pf-l{display:block;margin-top:12px;font-size:14px;color:var(--t2)}
    .pf-i{width:100%;font:15px var(--body);padding:10px 12px;border:1px solid var(--bd);border-radius:10px;background:var(--sf);color:var(--ink);margin-top:4px}
    .pf-t{width:100%;border-collapse:collapse;margin-top:8px;font-size:14px}.pf-t th{text-align:left;color:var(--t3);font-weight:500;padding:6px 8px;border-bottom:1px solid var(--bd)}
    .pf-t td{padding:8px;border-bottom:1px solid var(--bd);white-space:nowrap}`;
  document.head.appendChild(css);
  if (location.hash === '#profile') go();
})();
