// Zero-dependency backend. Keys live ONLY in process.env (never sent to the browser).
// Gemini is the primary AI provider; Groq is an optional backup used only when Gemini
// is not configured, or when a Gemini call itself fails (quota, outage, bad key, etc).
const http=require('http'),fs=require('fs'),path=require('path'),crypto=require('crypto');
try{for(const l of fs.readFileSync(path.join(__dirname,'.env'),'utf8').split('\n')){const m=l.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);if(m&&!l.trim().startsWith('#')&&!(m[1] in process.env))process.env[m[1]]=m[2]}}catch(e){}
const KEY=process.env.GEMINI_API_KEY,MODEL=process.env.GEMINI_MODEL||'gemini-2.5-flash',BASE=process.env.GEMINI_BASE_URL||'https://generativelanguage.googleapis.com/v1beta',PORT=process.env.PORT||3000;
const GKEY=process.env.GROQ_API_KEY,GMODEL=process.env.GROQ_MODEL||'llama-3.3-70b-versatile',GBASE=process.env.GROQ_BASE_URL||'https://api.groq.com/openai/v1';
const PUB=path.join(__dirname,'public'),DATA=path.join(__dirname,'data'),MIME={'.html':'text/html; charset=utf-8','.json':'application/json','.js':'text/javascript','.css':'text/css'};
// Other sites allowed to call /api/* from the browser (e.g. the GitHub Pages copy). Comma separated; empty = same site only.
const ORIGINS=(process.env.ALLOWED_ORIGINS||'').split(',').map(o=>o.trim().replace(/[/]+$/,'')).filter(Boolean);
const hits=new Map();const limited=ip=>{const now=Date.now(),a=(hits.get(ip)||[]).filter(t=>now-t<60000);a.push(now);hits.set(ip,a);return a.length>20};
// Behind a host's proxy (Render) every request arrives from the proxy, so use the address it forwards.
// The proxy appends the real client address last, so take the last entry (earlier ones can be faked by the client).
const clientIp=req=>{const x=String(req.headers['x-forwarded-for']||'').split(',').map(s=>s.trim()).filter(Boolean);return x.length?x[x.length-1]:req.socket.remoteAddress};
// AI requests must come from a signed-in Supabase user. The browser sends the user's access token; the server asks
// Supabase whether it is valid (so expired, forged or signed-out tokens are refused) and caches the answer briefly.
// Set AI_REQUIRE_SIGNIN=false only for local development.
const SB_URL=(process.env.SUPABASE_URL||'').replace(/[/]+$/,''),SB_KEY=process.env.SUPABASE_PUBLISHABLE_KEY||process.env.SUPABASE_ANON_KEY||'';
const AUTH_REQUIRED=process.env.AI_REQUIRE_SIGNIN!=='false',authCache=new Map();
async function verifyUser(req){
 const m=/^Bearer[ ]+([A-Za-z0-9._~+/=-]{20,4096})$/.exec(String(req.headers.authorization||''));if(!m)return null;
 const h=crypto.createHash('sha256').update(m[1]).digest('hex'),c=authCache.get(h);if(c&&c.exp>Date.now())return c.user;
 const r=await fetch(SB_URL+'/auth/v1/user',{headers:{apikey:SB_KEY,Authorization:'Bearer '+m[1]}});
 if(!r.ok){if(r.status>=500)throw new Error('Sign-in service unavailable ('+r.status+')');return null}
 const u=await r.json().catch(()=>null);if(!u||!u.id)return null;
 if(authCache.size>5000)authCache.clear();authCache.set(h,{user:{id:u.id},exp:Date.now()+60000});return{id:u.id}}
const send=(res,code,obj)=>{res.writeHead(code,{'Content-Type':'application/json'});res.end(JSON.stringify(obj))};
const toContents=input=>(typeof input=='string'?[{role:'user',content:input}]:input).map(t=>({role:t.role=='assistant'?'model':'user',parts:[{text:String(t.content).slice(0,30000)}]}));
const toMessages=input=>(typeof input=='string'?[{role:'user',content:input}]:input).map(t=>({role:t.role=='assistant'?'assistant':'user',content:String(t.content).slice(0,30000)}));
// Key types: Google AI Studio keys (AIza...) use the generativelanguage endpoint with an x-goog-api-key header.
// Vertex AI Express keys (AQ....) use the aiplatform endpoint with ?key=. Auto-detected; override with GEMINI_BASE_URL / GEMINI_EXPRESS_BASE.
const EXPRESS=process.env.GEMINI_EXPRESS_BASE||'https://aiplatform.googleapis.com/v1/publishers/google';
const redact=(s,k)=>k?String(s).split(k).join('[key]'):String(s);
// One Gemini call against one endpoint. kind: 'express' (aiplatform, ?key=) or 'studio' (generativelanguage, x-goog-api-key).
async function geminiCall(input,kind){
 const url=kind=='express'?`${EXPRESS}/models/${MODEL}:generateContent?key=${encodeURIComponent(KEY)}`:`${BASE}/models/${MODEL}:generateContent`;
 const headers={'Content-Type':'application/json'};if(kind!='express')headers['x-goog-api-key']=KEY;
 const r=await fetch(url,{method:'POST',headers,body:JSON.stringify({contents:toContents(input),generationConfig:{temperature:0.4}})});
 const j=await r.json().catch(()=>({}));if(!r.ok){const e=new Error(redact((j.error&&j.error.message)||('Gemini error '+r.status),KEY));e.status=r.status;throw e}
 return(j.candidates&&j.candidates[0]&&j.candidates[0].content&&j.candidates[0].content.parts||[]).map(p=>p.text||'').join('')}
// AQ. keys normally belong to Vertex AI (aiplatform). If that endpoint refuses the key (API disabled, wrong
// project type, permission), try the AI Studio endpoint before giving up, and remember whichever one worked.
let geminiKind=null;
async function gemini(input){
 if(geminiKind)return geminiCall(input,geminiKind);
 const order=KEY.startsWith('AQ.')&&!process.env.GEMINI_BASE_URL?['express','studio']:['studio'];let first;
 for(const kind of order){try{const t=await geminiCall(input,kind);geminiKind=kind;return t}catch(e){first=first||e;if(e.status&&e.status<500&&e.status!=429)continue;throw e}}
 throw first}
// Groq's API is OpenAI-compatible: POST {model, messages} with a Bearer token.
// If the configured model is retired or not enabled for this account, pick an available chat model automatically.
const GPREF=['llama-3.3-70b-versatile','openai/gpt-oss-120b','meta-llama/llama-4-maverick-17b-128e-instruct','meta-llama/llama-4-scout-17b-16e-instruct','openai/gpt-oss-20b','llama-3.1-8b-instant'];
let groqModel=GMODEL;
async function groqCall(input,model){
 const r=await fetch(`${GBASE}/chat/completions`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${GKEY}`},body:JSON.stringify({model,messages:toMessages(input),temperature:0.4})});
 const j=await r.json().catch(()=>({}));if(!r.ok){const e=new Error(redact((j.error&&j.error.message)||('Groq error '+r.status),GKEY));e.status=r.status;e.code=j.error&&j.error.code;throw e}
 return(j.choices&&j.choices[0]&&j.choices[0].message&&j.choices[0].message.content)||''}
async function groqModels(){const r=await fetch(`${GBASE}/models`,{headers:{Authorization:`Bearer ${GKEY}`}});const j=await r.json().catch(()=>({}));
 return(j.data||[]).filter(m=>m.active!==false).map(m=>m.id).filter(id=>!/whisper|tts|guard|playai|orpheus|compound|prompt/i.test(id))}
async function groq(input){
 try{return await groqCall(input,groqModel)}catch(e){
  if(!(e.code=='model_not_found'||e.code=='model_decommissioned'||/does not exist|do not have access|decommissioned/i.test(e.message)))throw e;
  const avail=await groqModels().catch(()=>[]);const pick=[...GPREF.filter(m=>avail.includes(m)),...avail].find(m=>m!=groqModel);
  if(!pick)throw e;console.warn(`Groq model ${groqModel} unavailable; switching to ${pick}. Set GROQ_MODEL=${pick} to make this permanent.`);
  groqModel=pick;return await groqCall(input,pick)}}
// Gemini first (if configured); fall back to Groq only on a Gemini failure or when Gemini isn't configured at all.
async function askAI(input){
 if(KEY){try{return await gemini(input)}catch(e){console.error('Gemini failed:',e.message);if(!GKEY)throw e;try{return await groq(input)}catch(e2){console.error('Groq failed:',e2.message);throw new Error(`Primary AI (Gemini) failed: ${e.message}. Backup AI (Groq) also failed: ${e2.message}`)}}}
 if(GKEY)return await groq(input);
 throw new Error('No AI key is set on the server.')}
// Sign-in check shared by the AI endpoints. Returns the user (or {} when sign-in is off), or null after sending the error.
async function gate(req,res){
 if(!KEY&&!GKEY){send(res,503,{error:'Neither GEMINI_API_KEY nor GROQ_API_KEY is set on the server.'});return null}
 if(AUTH_REQUIRED&&(!SB_URL||!SB_KEY)){send(res,503,{error:'AI sign-in is not configured on the server (set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY).'});return null}
 let who={};if(AUTH_REQUIRED){try{who=await verifyUser(req)}catch(e){console.error('Auth check failed:',e.message);send(res,503,{error:'Could not check your sign-in right now. Try again shortly.'});return null}
  if(!who){send(res,401,{error:'Sign in to use the AI tutor.'});return null}}
 if(limited(clientIp(req))||(who.id&&limited('user:'+who.id))){send(res,429,{error:'Too many requests'});return null}
 return who}
async function readJson(req,res,max){let body='';for await(const c of req){body+=c;if(body.length>max){send(res,413,{error:'Too large'});return null}}
 try{return JSON.parse(body||'{}')}catch(e){send(res,400,{error:'Bad JSON'});return null}}
const LESSONS=require('./lessons.js')({askAI,dataDir:DATA,sbUrl:SB_URL,sbKey:SB_KEY,sbSecret:process.env.SUPABASE_SECRET_KEY||''});
http.createServer(async(req,res)=>{const url=req.url.split('?')[0];
 if(url.startsWith('/api/')){const o=req.headers.origin;if(o&&ORIGINS.includes(o)){res.setHeader('Access-Control-Allow-Origin',o);res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')}
  if(req.method=='OPTIONS'){res.writeHead(204);return res.end()}}
 if(url=='/api/health')return send(res,200,{ai:!!(KEY||GKEY),provider:KEY?'gemini':(GKEY?'groq':null),backup:!!(KEY&&GKEY),model:KEY?MODEL:(GKEY?groqModel:null),auth:AUTH_REQUIRED});
 if(url=='/api/ai'&&req.method=='POST'){const who=await gate(req,res);if(!who)return;const b=await readJson(req,res,200000);if(!b)return;
  try{if(!b.input)throw new Error('Missing input');return send(res,200,{text:await askAI(b.input)})}catch(e){return send(res,500,{error:String(e.message||e)})}}
 // Saved lessons: returns the stored lesson for a problem, or writes, checks and stores one (one AI call per problem).
 if(url=='/api/lesson'&&req.method=='POST'){const who=await gate(req,res);if(!who)return;const b=await readJson(req,res,2000);if(!b)return;
  if(!/^20[0-2][0-9][AB][0-9]{1,2}$/.test(String(b.id||'')))return send(res,400,{error:'Bad problem id'});
  try{return send(res,200,await LESSONS.get(b.id,KEY?MODEL:groqModel))}catch(e){console.error('Lesson failed:',b.id,e.message);return send(res,e.status||502,{error:String(e.message||e)})}}
 let f=url=='/'?'/index.html':url;const root=f.startsWith('/data/')?DATA:PUB;const file=path.normalize(path.join(root,f.startsWith('/data/')?f.slice(6):f));
 if(!file.startsWith(root))return send(res,403,{error:'Forbidden'});
 fs.readFile(file,(e,d)=>{if(e)return send(res,404,{error:'Not found'});res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream'});res.end(d)})
}).listen(PORT,()=>console.log(`Vertex on http://localhost:${PORT}  (AI ${KEY?'enabled: '+MODEL+(GKEY?' with Groq backup':''):GKEY?'enabled: '+GMODEL+' (Groq only)':'DISABLED: set GEMINI_API_KEY or GROQ_API_KEY'})`));
