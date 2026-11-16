// Zero-dependency backend. Keys live ONLY in process.env (never sent to the browser).
// Gemini is the primary AI provider; Groq is an optional backup used only when Gemini
// is not configured, or when a Gemini call itself fails (quota, outage, bad key, etc).
const http=require('http'),fs=require('fs'),path=require('path');
try{for(const l of fs.readFileSync(path.join(__dirname,'.env'),'utf8').split('\n')){const m=l.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);if(m&&!l.trim().startsWith('#')&&!(m[1] in process.env))process.env[m[1]]=m[2]}}catch(e){}
const KEY=process.env.GEMINI_API_KEY,MODEL=process.env.GEMINI_MODEL||'gemini-2.5-flash',BASE=process.env.GEMINI_BASE_URL||'https://generativelanguage.googleapis.com/v1beta',PORT=process.env.PORT||3000;
const GKEY=process.env.GROQ_API_KEY,GMODEL=process.env.GROQ_MODEL||'llama-3.3-70b-versatile',GBASE=process.env.GROQ_BASE_URL||'https://api.groq.com/openai/v1';
const PUB=path.join(__dirname,'public'),DATA=path.join(__dirname,'data'),MIME={'.html':'text/html; charset=utf-8','.json':'application/json','.js':'text/javascript','.css':'text/css'};
// Other sites allowed to call /api/* from the browser (e.g. the GitHub Pages copy). Comma separated; empty = same site only.
const ORIGINS=(process.env.ALLOWED_ORIGINS||'').split(',').map(o=>o.trim().replace(/[/]+$/,'')).filter(Boolean);
const hits=new Map();const limited=ip=>{const now=Date.now(),a=(hits.get(ip)||[]).filter(t=>now-t<60000);a.push(now);hits.set(ip,a);return a.length>20};
const send=(res,code,obj)=>{res.writeHead(code,{'Content-Type':'application/json'});res.end(JSON.stringify(obj))};
const toContents=input=>(typeof input=='string'?[{role:'user',content:input}]:input).map(t=>({role:t.role=='assistant'?'model':'user',parts:[{text:String(t.content).slice(0,30000)}]}));
const toMessages=input=>(typeof input=='string'?[{role:'user',content:input}]:input).map(t=>({role:t.role=='assistant'?'assistant':'user',content:String(t.content).slice(0,30000)}));
// Key types: Google AI Studio keys (AIza...) use the generativelanguage endpoint with an x-goog-api-key header.
// Vertex AI Express keys (AQ....) use the aiplatform endpoint with ?key=. Auto-detected; override with GEMINI_BASE_URL / GEMINI_EXPRESS_BASE.
const EXPRESS=process.env.GEMINI_EXPRESS_BASE||'https://aiplatform.googleapis.com/v1/publishers/google';
async function gemini(input){const express=KEY.startsWith('AQ.')&&!process.env.GEMINI_BASE_URL;
 const url=express?`${EXPRESS}/models/${MODEL}:generateContent?key=${encodeURIComponent(KEY)}`:`${BASE}/models/${MODEL}:generateContent`;
 const headers={'Content-Type':'application/json'};if(!express)headers['x-goog-api-key']=KEY;
 const r=await fetch(url,{method:'POST',headers,body:JSON.stringify({contents:toContents(input),generationConfig:{temperature:0.4}})});
 const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(((j.error&&j.error.message)||('Gemini error '+r.status)).replace(KEY,'[key]'));
 return(j.candidates&&j.candidates[0]&&j.candidates[0].content.parts||[]).map(p=>p.text||'').join('')}
// Groq's API is OpenAI-compatible: POST {model, messages} with a Bearer token.
async function groq(input){
 const r=await fetch(`${GBASE}/chat/completions`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${GKEY}`},body:JSON.stringify({model:GMODEL,messages:toMessages(input),temperature:0.4})});
 const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(((j.error&&j.error.message)||('Groq error '+r.status)).replace(GKEY,'[key]'));
 return(j.choices&&j.choices[0]&&j.choices[0].message&&j.choices[0].message.content)||''}
// Gemini first (if configured); fall back to Groq only on a Gemini failure or when Gemini isn't configured at all.
async function askAI(input){
 if(KEY){try{return await gemini(input)}catch(e){if(!GKEY)throw e;try{return await groq(input)}catch(e2){throw new Error(`Primary AI (Gemini) failed: ${e.message}. Backup AI (Groq) also failed: ${e2.message}`)}}}
 if(GKEY)return await groq(input);
 throw new Error('No AI key is set on the server.')}
http.createServer(async(req,res)=>{const url=req.url.split('?')[0];
 if(url.startsWith('/api/')){const o=req.headers.origin;if(o&&ORIGINS.includes(o)){res.setHeader('Access-Control-Allow-Origin',o);res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type')}
  if(req.method=='OPTIONS'){res.writeHead(204);return res.end()}}
 if(url=='/api/health')return send(res,200,{ai:!!(KEY||GKEY),provider:KEY?'gemini':(GKEY?'groq':null),backup:!!(KEY&&GKEY),model:KEY?MODEL:(GKEY?GMODEL:null)});
 if(url=='/api/ai'&&req.method=='POST'){if(!KEY&&!GKEY)return send(res,503,{error:'Neither GEMINI_API_KEY nor GROQ_API_KEY is set on the server.'});if(limited(req.socket.remoteAddress))return send(res,429,{error:'Too many requests'});
  let body='';for await(const c of req){body+=c;if(body.length>200000)return send(res,413,{error:'Too large'})}
  try{const{input}=JSON.parse(body);if(!input)throw new Error('Missing input');return send(res,200,{text:await askAI(input)})}catch(e){return send(res,500,{error:String(e.message||e)})}}
 let f=url=='/'?'/index.html':url;const root=f.startsWith('/data/')?DATA:PUB;const file=path.normalize(path.join(root,f.startsWith('/data/')?f.slice(6):f));
 if(!file.startsWith(root))return send(res,403,{error:'Forbidden'});
 fs.readFile(file,(e,d)=>{if(e)return send(res,404,{error:'Not found'});res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream'});res.end(d)})
}).listen(PORT,()=>console.log(`Vertex on http://localhost:${PORT}  (AI ${KEY?'enabled: '+MODEL+(GKEY?' with Groq backup':''):GKEY?'enabled: '+GMODEL+' (Groq only)':'DISABLED: set GEMINI_API_KEY or GROQ_API_KEY'})`));
