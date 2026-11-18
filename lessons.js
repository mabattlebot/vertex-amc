// "Teach me how to solve this problem" lessons, generated once and reused.
// Order of lookup for a problem: memory -> Supabase `lessons` table -> generate with the AI, check it, save it.
// Saving to Supabase needs SUPABASE_SECRET_KEY (server only; never sent to the browser). Without it, lessons are
// kept in this server's memory until it restarts, and each browser also keeps its own copy.
const fs = require('fs'), path = require('path');

const L5 = 'ABCDE';
const LESSON_VERSION = 2;

module.exports = function lessons({ askAI, dataDir, sbUrl, sbKey, sbSecret }) {
  const problems = new Map(JSON.parse(fs.readFileSync(path.join(dataDir, 'problems.json'), 'utf8')).map(p => [p.id, p]));
  const mem = new Map(), inflight = new Map();
  let keys = { at: 0, map: {} };

  // Editor-entered answer keys (public table), refreshed every 5 minutes.
  async function answerKeys() {
    if (Date.now() - keys.at < 300000 || !sbUrl) return keys.map;
    try {
      const r = await fetch(`${sbUrl}/rest/v1/answer_keys?select=contest,answers`, { headers: { apikey: sbKey } });
      if (r.ok) keys = { at: Date.now(), map: Object.fromEntries((await r.json()).map(k => [k.contest, k.answers])) };
    } catch (e) { console.warn('Lessons: could not load answer keys:', e.message); }
    return keys.map;
  }
  async function answerOf(p) {
    const k = (await answerKeys())[p.id.slice(0, 5)];
    if (k && /^[A-E]{25}$/.test(k)) return k[p.number - 1];
    return p.answer != null ? L5[p.answer] : null;
  }

  const secretHeaders = () => {
    const h = { apikey: sbSecret, 'Content-Type': 'application/json' };
    if (sbSecret.startsWith('eyJ')) h.Authorization = 'Bearer ' + sbSecret; // legacy service_role JWT
    return h;
  };
  async function loadSaved(id) {
    if (!sbSecret || !sbUrl) return null;
    const r = await fetch(`${sbUrl}/rest/v1/lessons?problem_id=eq.${encodeURIComponent(id)}&select=lesson`, { headers: secretHeaders() });
    if (!r.ok) { console.warn('Lessons: load failed', r.status, (await r.text()).slice(0, 200)); return null; }
    const rows = await r.json();
    return rows[0] ? rows[0].lesson : null;
  }
  async function save(id, lesson, model) {
    if (!sbSecret || !sbUrl) return false;
    const r = await fetch(`${sbUrl}/rest/v1/lessons?on_conflict=problem_id`, {
      method: 'POST', headers: { ...secretHeaders(), Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({ problem_id: id, lesson, model, answer: lesson.answer, version: LESSON_VERSION })
    });
    if (!r.ok) console.warn('Lessons: save failed', r.status, (await r.text()).slice(0, 200));
    return r.ok;
  }

  function prompt(p, ans, extra) {
    const choices = p.choices.map((c, i) => `(${L5[i]}) ${c}`).join('   ');
    return `You are an expert AMC 10 coach writing a lesson that teaches a student how to THINK through one specific problem:
why each idea works and how to recognize problems like it next time, not just the steps to the answer.

PROBLEM (${p.year} ${p.contest}, Problem ${p.number}, difficulty ${p.d} of 5):
${p.text}
CHOICES: ${choices}
CORRECT ANSWER: (${ans}) ${p.choices[L5.indexOf(ans)]}
${p.sol ? 'A SHORT KNOWN SOLUTION: ' + p.sol + '\n' : ''}
Reply with ONE JSON object and nothing else (no code fences). Fields:
{
 "goal": "2-4 sentences restating what is really being asked in plain words, and what makes it hard.",
 "tools": [{"name": "name of a formula, theorem, identity or technique", "fact": "its exact statement in LaTeX", "why": "1-3 sentences on why it is true or why it applies here"}],
 "approach": "How a strong student finds a way in: first observations, what to try, what NOT to do and why. 3-6 sentences.",
 "steps": [{"title": "short step name", "explain": "4-8 sentences teaching this step on THIS problem, saying why each move is valid",
            "check": {"q": "a short question testing this step", "opts": ["", "", "", ""], "ans": 0, "why": "1-2 sentences"}}],
 "bridge": "1-2 sentences said right before the student solves the problem alone. Do not state the final answer.",
 "solution": ["the complete solution as a list of steps, each a sentence or two with the reason for it, ending with the answer"],
 "shortcut": "a faster route or contest shortcut if there is one, else an empty string",
 "traps": ["common mistakes on this problem and how to avoid them (2-4 items)"],
 "recognize": "2-3 sentences: which features of a problem signal that these ideas apply, so the student spots it next time.",
 "answer": "${ans}"
}
Rules: 2-6 tools covering EVERY formula, theorem or identity the solution uses. 3-5 steps; every check has exactly 4 options,
"ans" is the 0-based index of the correct option, and checks use different numbers from the real problem. The solution must be
complete and correct and reach answer (${ans}). Write all math in LaTeX ($...$ inline). Because this is JSON, every backslash
must be doubled: write \\\\frac, \\\\sqrt, \\\\cdot. Currency as \\\\$5. Keep every string on one line: no line breaks inside strings.${extra ? '\n\nYOUR PREVIOUS REPLY WAS REJECTED: ' + extra + ' Fix it.' : ''}`;
  }

  // Parse the model's JSON. LaTeX commands written with a single backslash (\frac, \times, \neq...) would silently become
  // control characters, so double any backslash that starts a 2+ letter command before parsing.
  function parse(text) {
    let t = String(text).trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
    const a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a < 0 || b < a) throw new Error('no JSON object found');
    // A lone backslash before a LaTeX command (2+ letters) or before anything that is not a JSON escape gets doubled.
    t = t.slice(a, b + 1).replace(/(?<!\\)\\(?=[a-zA-Z]{2,}|[^"\\/bfnrtu])/g, '\\\\');
    return JSON.parse(t);
  }
  function validate(L, ans) {
    const s = v => typeof v === 'string' && v.trim().length > 0;
    if (!L || typeof L !== 'object') return 'not an object';
    if (String(L.answer).trim().toUpperCase().replace(/[^A-E]/g, '') !== ans) return `"answer" must be "${ans}"`;
    if (!s(L.goal) || !s(L.approach) || !s(L.recognize)) return 'goal, approach and recognize must be non-empty';
    if (!Array.isArray(L.tools) || L.tools.length < 1 || !L.tools.every(t => s(t.name) && s(t.fact))) return 'tools must list each formula with name and fact';
    if (!Array.isArray(L.steps) || L.steps.length < 2 || !L.steps.every(st => s(st.title) && s(st.explain))) return 'need 2-6 steps with title and explain';
    if (!Array.isArray(L.solution) || L.solution.length < 2 || !L.solution.every(s)) return 'solution must be a list of steps';
    for (const st of L.steps) if (st.check) {
      const c = st.check;
      if (!s(c.q) || !Array.isArray(c.opts) || c.opts.length !== 4 || !c.opts.every(s) || !(c.ans >= 0 && c.ans <= 3)) delete st.check;
    }
    return '';
  }
  function clean(L, p, ans, model) {
    const str = v => (typeof v === 'string' ? v.trim() : '');
    return {
      v: LESSON_VERSION, id: p.id, src: 'ai', model, answer: ans,
      goal: str(L.goal), approach: str(L.approach), bridge: str(L.bridge), shortcut: str(L.shortcut), recognize: str(L.recognize),
      tools: L.tools.slice(0, 8).map(t => ({ name: str(t.name), fact: str(t.fact), why: str(t.why) })),
      steps: L.steps.slice(0, 6).map(st => ({ title: str(st.title), explain: str(st.explain),
        ...(st.check ? { check: { q: str(st.check.q), opts: st.check.opts.map(str), ans: +st.check.ans, why: str(st.check.why) } } : {}) })),
      solution: L.solution.map(str), traps: (Array.isArray(L.traps) ? L.traps : []).map(str).filter(Boolean)
    };
  }

  async function generate(p, ans, model) {
    let why = '';
    for (let attempt = 0; attempt < 2; attempt++) {
      let L;
      try { L = parse(await askAI(prompt(p, ans, why))); } catch (e) { why = 'it was not valid JSON (' + e.message + ').'; continue; }
      why = validate(L, ans);
      if (!why) return clean(L, p, ans, model);
    }
    throw new Error('The AI did not produce a usable lesson (' + why + ')');
  }

  // Returns { lesson, cached } or throws. `model` is only recorded with the lesson.
  async function get(id, model) {
    const p = problems.get(id);
    if (!p || !p.text) { const e = new Error('Unknown problem'); e.status = 404; throw e; }
    const ans = await answerOf(p);
    if (!ans) { const e = new Error('This problem has no answer key yet, so a lesson cannot be checked.'); e.status = 409; throw e; }
    const fresh = L => L && L.v === LESSON_VERSION && L.answer === ans;
    if (fresh(mem.get(id))) return { lesson: mem.get(id), cached: true };
    if (inflight.has(id)) return inflight.get(id);
    const job = (async () => {
      const saved = await loadSaved(id).catch(() => null);
      if (fresh(saved)) { mem.set(id, saved); return { lesson: saved, cached: true }; }
      const lesson = await generate(p, ans, model);
      mem.set(id, lesson);
      await save(id, lesson, model).catch(e => console.warn('Lessons: save failed', e.message));
      return { lesson, cached: false };
    })();
    inflight.set(id, job);
    try { return await job; } finally { inflight.delete(id); }
  }

  if (!sbSecret) console.warn('Lessons: SUPABASE_SECRET_KEY is not set, so generated lessons are kept in memory only (lost on restart).');
  return { get, _test: { parse, validate } };
};
