// Builds public/lessons/<test>.json from the hand-written lessons in lessons-src/<test>.js.
// Every lesson is checked for structure, and its answer is checked against the answer key
// (editor-entered keys in Supabase, else the checked answers built into data/problems.json).
// Usage: node scripts/build-lessons.js            (fails on any problem)
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), src = path.join(root, 'lessons-src'), out = path.join(root, 'public', 'lessons');
const L5 = 'ABCDE';
const problems = new Map(JSON.parse(fs.readFileSync(path.join(root, 'data', 'problems.json'), 'utf8')).map(p => [p.id, p]));

function config() {
  const c = fs.readFileSync(path.join(root, 'public', 'config.js'), 'utf8');
  return { url: (c.match(/url:\s*'([^']+)'/) || [])[1], key: (c.match(/key:\s*'([^']+)'/) || [])[1] };
}
async function keys() {
  const { url, key } = config();
  if (!url) return {};
  const r = await fetch(`${url}/rest/v1/answer_keys?select=contest,answers`, { headers: { apikey: key } });
  if (!r.ok) throw new Error('Could not load answer keys: ' + r.status);
  return Object.fromEntries((await r.json()).map(k => [k.contest, k.answers]));
}

function check(id, L, keyLetter) {
  const errs = [], s = v => typeof v === 'string' && v.trim().length > 0;
  const p = problems.get(id);
  if (!p) return ['unknown problem id'];
  if (!/^[A-E]$/.test(L.answer)) errs.push('answer must be a letter A-E');
  if (!keyLetter) errs.push('no answer key for this problem, so the lesson cannot be checked');
  else if (L.answer !== keyLetter) errs.push(`answer ${L.answer} does not match the answer key (${keyLetter})`);
  for (const f of ['goal', 'approach', 'recognize']) if (!s(L[f])) errs.push(f + ' is empty');
  if (!Array.isArray(L.tools) || !L.tools.length || !L.tools.every(t => s(t.name) && s(t.fact) && s(t.why))) errs.push('each tool needs name, fact and why');
  if (!Array.isArray(L.steps) || L.steps.length < 2) errs.push('need at least 2 steps');
  else L.steps.forEach((st, i) => {
    if (!s(st.title) || !s(st.explain)) errs.push(`step ${i + 1} needs title and explain`);
    if (st.check) {
      const c = st.check;
      if (!s(c.q) || !Array.isArray(c.opts) || c.opts.length !== 4 || !c.opts.every(s) || !(c.ans >= 0 && c.ans <= 3) || !s(c.why)) errs.push(`step ${i + 1} check needs q, 4 opts, ans 0-3 and why`);
      if (new Set(c.opts).size !== 4) errs.push(`step ${i + 1} check has duplicate options`);
    }
  });
  if (!Array.isArray(L.solution) || L.solution.length < 2 || !L.solution.every(s)) errs.push('solution must be a list of steps');
  else if (!L.solution[L.solution.length - 1].includes(`(${L.answer})`)) errs.push(`last solution step should state the answer (${L.answer})`);
  if (!Array.isArray(L.traps)) errs.push('traps must be a list');
  return errs;
}

// Put the options of each check in a fixed but varied order so the correct one is not always first.
function shuffleChecks(id, L) {
  let seed = [...id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const rnd = () => (seed = (seed * 1103515245 + 12345) >>> 0) / 2 ** 32;
  for (const st of L.steps) if (st.check) {
    const correct = st.check.opts[st.check.ans], o = st.check.opts.slice();
    for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; }
    st.check.opts = o; st.check.ans = o.indexOf(correct);
  }
}

(async () => {
  const K = await keys();
  fs.mkdirSync(out, { recursive: true });
  let total = 0, bad = 0;
  for (const file of fs.readdirSync(src).filter(f => /^20\d\d[AB]\.js$/.test(f)).sort()) {
    const test = file.slice(0, 5), lessons = require(path.join(src, file)), built = {};
    for (const [id, L] of Object.entries(lessons)) {
      const p = problems.get(id), k = K[test];
      const keyLetter = k && /^[A-E]{25}$/.test(k) && p ? k[p.number - 1] : p && p.answer != null ? L5[p.answer] : null;
      const errs = id.startsWith(test) ? check(id, L, keyLetter) : ['lesson is in the wrong file'];
      if (errs.length) { bad++; console.error(`${id}: ${errs.join('; ')}`); continue; }
      const copy = JSON.parse(JSON.stringify(L));
      shuffleChecks(id, copy);
      built[id] = { v: 2, id, src: 'curated', ...copy };
      total++;
    }
    fs.writeFileSync(path.join(out, test + '.json'), JSON.stringify(built));
    console.log(`${test}: ${Object.keys(built).length} lessons`);
  }
  console.log(`${total} lessons built${bad ? `, ${bad} rejected` : ''}.`);
  if (bad) process.exit(1);
})().catch(e => { console.error(e.message); process.exit(1); });
