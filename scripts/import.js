// Usage: node scripts/import.js entries.json   (or .csv with header: contest,year,number,topic,difficulty,answer,gist)
// Validates, de-duplicates and merges verified entries into data/problems.json. It never invents data and stores no problem text.
const fs=require('fs'),path=require('path');const file=process.argv[2];if(!file){console.log('Usage: node scripts/import.js entries.json|entries.csv');process.exit(1)}
const out=path.join(__dirname,'..','data','problems.json');const db=JSON.parse(fs.readFileSync(out,'utf8'));
let rows;const raw=fs.readFileSync(file,'utf8');
if(file.endsWith('.csv')){const [h,...ls]=raw.trim().split(/\r?\n/);const cols=h.split(',').map(s=>s.trim());rows=ls.map(l=>{const v=l.split(',');return Object.fromEntries(cols.map((c,i)=>[c,(v[i]||'').trim()]))})}else rows=JSON.parse(raw);
const CONTESTS=['AMC 10A','AMC 10B','AMC 12A','AMC 12B','AMC 10','AMC 12'],TOPICS=['Algebra','Number Theory','Geometry','Counting & Probability'];
const key=r=>`${r.contest}|${r.year}|${r.number}`;const seen=new Set(db.map(key));let added=0,skipped=0;const errors=[];
for(const r of rows){r.year=+r.year;r.number=+r.number;r.difficulty=+r.difficulty;r.answer=String(r.answer).toUpperCase();
 const bad=!CONTESTS.includes(r.contest)?'contest':!(r.year>=2000&&r.year<=2100)?'year':!(r.number>=1&&r.number<=25)?'number':!/^[A-E]$/.test(r.answer)?'answer':!TOPICS.includes(r.topic)?'topic':!(r.difficulty>=1&&r.difficulty<=5)?'difficulty':'';
 if(bad){errors.push(`${key(r)}: bad ${bad}`);continue}
 if(seen.has(key(r))){skipped++;continue}seen.add(key(r));
 db.push({contest:r.contest,year:r.year,number:r.number,topic:r.topic,difficulty:r.difficulty,answer:r.answer,gist:r.gist||'',same_as:r.same_as||'',url:`https://wiki.artofproblemsolving.com/wiki/index.php/${r.year}_${r.contest.replace(/ /g,'_')}_Problems/Problem_${r.number}`});added++}
db.sort((a,b)=>b.year-a.year||a.contest.localeCompare(b.contest)||a.number-b.number);fs.writeFileSync(out,JSON.stringify(db,null,1));
console.log(`added ${added}, duplicates skipped ${skipped}, rejected ${errors.length}, total ${db.length}`);errors.forEach(e=>console.log(' - '+e));
