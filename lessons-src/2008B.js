// Hand-written lessons: 2008 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2008B16': {
  answer: 'A',
  goal: R`Two coins are tossed; each head earns one die roll. We want $P(\text{sum of dice is odd})$, with no dice meaning sum $0$. Split by the number of heads.`,
  tools: [
    { name: 'Law of total probability', fact: R`P=\sum_h P(h\text{ heads})\,P(\text{odd}\mid h)`, why: R`The number of dice depends on the coins.` },
    { name: 'Parity of dice sums', fact: R`P(\text{odd})=\tfrac12\text{ for }\ge1\text{ die}`, why: R`One die is odd half the time; adding another fair die keeps it at $\tfrac12$.` }
  ],
  approach: R`$0$ heads ($\tfrac14$): sum $0$, even. $1$ head ($\tfrac12$): odd with $\tfrac12$. $2$ heads ($\tfrac14$): odd with $\tfrac12$.`,
  steps: [
    { title: 'Cases',
      explain: R`$P(0)=\tfrac14$, $P(1)=\tfrac12$, $P(2)=\tfrac14$.`,
      check: { q: R`What is $P(\text{exactly one head in two tosses})$?`, opts: [R`\tfrac12`, R`\tfrac14`, R`\tfrac34`, R`\tfrac13`], ans: 0, why: R`HT or TH.` } },
    { title: 'Combine',
      explain: R`$\tfrac14\cdot0+\tfrac12\cdot\tfrac12+\tfrac14\cdot\tfrac12=\tfrac14+\tfrac18=\tfrac38$.`,
      check: { q: R`What is $\tfrac14+\tfrac18$?`, opts: [R`\tfrac38`, R`\tfrac12`, R`\tfrac5{8}`, R`\tfrac14`], ans: 0, why: R`$\tfrac{2+1}{8}$.` } }
  ],
  bridge: R`Condition on the number of heads.`,
  solution: [
    R`No heads: sum $0$ (even).`,
    R`One or two heads: odd with probability $\tfrac12$.`,
    R`$P=\tfrac12\left(1-\tfrac14\right)=\tfrac38$.`,
    R`The answer is $\textbf{(A)}\ \tfrac38$.`
  ],
  shortcut: R`$P(\text{at least one die})\cdot\tfrac12=\tfrac34\cdot\tfrac12$.`,
  traps: [R`Treating "no dice" as odd or ignoring it ($\tfrac12$).`, R`Computing two-dice parity incorrectly.`],
  recognize: R`Random number of random trials: condition on how many trials happen.`
},

'2008B17': {
  answer: 'B',
  goal: R`Each of $3$ independent random voters approves with probability $0.7$. We want $P(\text{exactly one approves})$. This is a binomial probability.`,
  tools: [
    { name: 'Binomial formula', fact: R`\binom nk p^k(1-p)^{n-k}`, why: R`Choose which trials succeed; multiply independent probabilities.` }
  ],
  approach: R`$\binom31(0.7)(0.3)^2=3\cdot0.7\cdot0.09$.`,
  steps: [
    { title: 'One pattern',
      explain: R`Approve, no, no: $0.7\cdot0.3\cdot0.3=0.063$.`,
      check: { q: R`What is $0.7\cdot0.09$?`, opts: [R`0.063`, R`0.63`, R`0.0063`, R`0.21`], ans: 0, why: R`$7\cdot9=63$, three decimal places.` } },
    { title: 'All patterns',
      explain: R`The approver can be any of $3$ occasions: $3\cdot0.063=0.189$.`,
      check: { q: R`How many ways can exactly one of three be the approver?`, opts: [R`3`, R`1`, R`6`, R`2`], ans: 0, why: R`$\binom31$.` } }
  ],
  bridge: R`Multiply one pattern's probability by the number of patterns.`,
  solution: [
    R`One specific order: $0.7\cdot0.3^2=0.063$.`,
    R`Three orders: $0.189$.`,
    R`The answer is $\textbf{(B)}\ 0.189$.`
  ],
  shortcut: R`Answer (A) is the trap of a single order.`,
  traps: [R`Forgetting the factor $3$.`, R`Using $0.7^2\cdot0.3$ (two approve).`],
  recognize: R`"Exactly $k$ of $n$ independent trials": binomial coefficient times the pattern probability.`
},

'2008B18': {
  answer: 'B',
  goal: R`Brenda alone takes $9$ h, Brandon $10$ h; together their rate drops by $10$ bricks/h, and they finish in $5$ h. We want the number of bricks $N$.`,
  tools: [
    { name: 'Work rates', fact: R`\text{rate}=\tfrac{N}{\text{time}}`, why: R`Bricks per hour.` },
    { name: 'Combined rate', fact: R`\tfrac N9+\tfrac N{10}-10=\tfrac N5`, why: R`Combined output equals the job over $5$ hours.` }
  ],
  approach: R`Solve $\tfrac{19N}{90}-10=\tfrac{18N}{90}$, so $\tfrac{N}{90}=10$.`,
  steps: [
    { title: 'Equation',
      explain: R`$\tfrac N9+\tfrac N{10}=\tfrac{19N}{90}$ and $\tfrac N5=\tfrac{18N}{90}$.`,
      check: { q: R`What is $\tfrac19+\tfrac1{10}$?`, opts: [R`\tfrac{19}{90}`, R`\tfrac2{19}`, R`\tfrac1{19}`, R`\tfrac{1}{90}`], ans: 0, why: R`$\tfrac{10+9}{90}$.` } },
    { title: 'Solve',
      explain: R`$\tfrac N{90}=10$, so $N=900$.`,
      check: { q: R`If $\tfrac{N}{90}=10$, what is $N$?`, opts: [R`900`, R`90`, R`9000`, R`100`], ans: 0, why: R`Multiply by $90$.` } }
  ],
  bridge: R`Set the reduced combined rate equal to $N/5$.`,
  solution: [
    R`$\tfrac N9+\tfrac N{10}-10=\tfrac N5$.`,
    R`$\tfrac{19N-18N}{90}=10$.`,
    R`$N=900$.`,
    R`The answer is $\textbf{(B)}\ 900$.`
  ],
  shortcut: R`Test choices: $900$ gives rates $100$ and $90$, combined $180$, and $180\cdot5=900$. ✓`,
  traps: [R`Subtracting $10$ bricks total instead of per hour.`, R`Adding times instead of rates.`],
  recognize: R`Work problems: add rates, not times.`
},

'2008B19': {
  answer: 'E',
  goal: R`A cylinder (radius $4$, length $9$) lies on its side with water $2$ ft deep. Volume = (area of the circular segment) × $9$. The water surface is a chord $2$ below the centre.`,
  tools: [
    { name: 'Segment area', fact: R`\text{sector}-\text{triangle}`, why: R`The water cross-section is the region below a chord.` },
    { name: 'Central angle', fact: R`\cos\theta=\tfrac{2}{4}\Rightarrow\theta=60^\circ`, why: R`The chord is $2$ from the centre; half-angle $60^\circ$, full $120^\circ$.` }
  ],
  approach: R`Central angle $120^\circ$. Sector: $\tfrac13\cdot16\pi$. Triangle: $\tfrac12\cdot4\cdot4\sin120^\circ=4\sqrt3$. Segment $\tfrac{16\pi}3-4\sqrt3$; multiply by $9$.`,
  steps: [
    { title: 'Angle',
      explain: R`Distance from centre to chord $=4-2=2$; $\cos\tfrac\theta2=\tfrac24$, so $\theta=120^\circ$.`,
      check: { q: R`If the half-angle has cosine $\tfrac12$, what is the full central angle?`, opts: [R`120^\circ`, R`60^\circ`, R`90^\circ`, R`150^\circ`], ans: 0, why: R`$2\cdot60^\circ$.` } },
    { title: 'Volume',
      explain: R`Segment $=\tfrac{16\pi}3-4\sqrt3$. Times $9$: $48\pi-36\sqrt3$.`,
      check: { q: R`What is $\tfrac12\cdot4\cdot4\cdot\sin120^\circ$?`, opts: [R`4\sqrt3`, R`8\sqrt3`, R`4`, R`2\sqrt3`], ans: 0, why: R`$8\cdot\tfrac{\sqrt3}2$.` } }
  ],
  bridge: R`Segment area (sector minus triangle) times length.`,
  solution: [
    R`Central angle $120^\circ$.`,
    R`Segment: $\tfrac{16\pi}3-4\sqrt3$.`,
    R`Volume: $9\left(\tfrac{16\pi}3-4\sqrt3\right)=48\pi-36\sqrt3$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Sanity check: $48\pi-36\sqrt3\approx88.4$, about $20\%$ of the full $144\pi$.`,
  traps: [R`Using a $60^\circ$ sector.`, R`Adding the triangle instead of subtracting.`],
  recognize: R`Liquid in a horizontal cylinder: circular segment area times length.`
},

'2008B20': {
  answer: 'B',
  goal: R`Die 1: $1,2,2,3,3,4$. Die 2: $1,3,4,5,6,8$. We want $P(\text{sum}\in\{5,7,9\})$. Count over the $36$ face pairs.`,
  tools: [
    { name: 'Count by first die', fact: R`\text{for each face, list matching faces}`, why: R`Repeated faces count separately.` }
  ],
  approach: R`For each value $v$ on die 1, count die-2 faces in $\{5-v,7-v,9-v\}$.`,
  steps: [
    { title: 'Count',
      explain: R`$v=1$: need $4,6,8$ → $3$. $v=2$ (×2): need $3,5,7$ → $2$ each, $4$. $v=3$ (×2): need $2,4,6$ → $2$ each, $4$. $v=4$: need $1,3,5$ → $3$. Total $14$.`,
      check: { q: R`For $v=2$, which faces of die 2 work?`, opts: [R`3,5`, R`3,5,7`, R`5`, R`1,3,5`], ans: 0, why: R`There's no $7$ on die 2.` } },
    { title: 'Probability',
      explain: R`$\tfrac{14}{36}=\tfrac7{18}$.`,
      check: { q: R`Simplify $\tfrac{14}{36}$.`, opts: [R`\tfrac7{18}`, R`\tfrac{7}{16}`, R`\tfrac5{18}`, R`\tfrac{11}{18}`], ans: 0, why: R`Divide by $2$.` } }
  ],
  bridge: R`Count favourable face pairs, dividing by $36$.`,
  solution: [
    R`Favourable pairs: $3+4+4+3=14$.`,
    R`$P=\tfrac{14}{36}=\tfrac7{18}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac7{18}$.`
  ],
  shortcut: R`Only odd sums qualify; the only odd sums that fail are $3$ and $11$, rarer to count.`,
  traps: [R`Counting the repeated $2$ and $3$ only once.`, R`Including sums like $8$.`],
  recognize: R`Non-standard dice: count face pairs directly.`
},

'2008B21': {
  answer: 'C',
  goal: R`Five couples sit at $10$ numbered chairs, alternating men and women, with nobody next to or across from their spouse. Seat the men first, then count the ways to seat the women.`,
  tools: [
    { name: 'Across is opposite parity', fact: R`\text{chair }i+5\text{ has the other parity}`, why: R`$5$ is odd, so the across seat is a woman's seat.` },
    { name: 'Allowed-seat graph', fact: R`\text{each wife has }5-3=2\text{ allowed seats}`, why: R`Two neighbours and the across seat are banned.` }
  ],
  approach: R`Men take odd or even chairs ($2$) in $5!$ orders. Each wife then has exactly $2$ allowed chairs; those choices link up into one $10$-cycle, which has exactly $2$ perfect matchings.`,
  steps: [
    { title: 'Men',
      explain: R`$2\cdot5!=240$ ways to seat the men.`,
      check: { q: R`What is $2\cdot5!$?`, opts: [R`240`, R`120`, R`720`, R`60`], ans: 0, why: R`$2\cdot120$.` } },
    { title: 'Women',
      explain: R`With men in chairs $1,3,5,7,9$: wife of chair $1$ may use $4,8$; of $3$: $6,10$; of $5$: $2,8$; of $7$: $4,10$; of $9$: $2,6$. These form one cycle, so there are $2$ ways. Total $240\cdot2=480$.`,
      check: { q: R`How many perfect matchings does a single cycle of length $10$ (alternating wives and chairs) have?`, opts: [R`2`, R`1`, R`5`, R`10`], ans: 0, why: R`Pick alternate edges in one of two ways.` } }
  ],
  bridge: R`Seat men, then match wives to allowed chairs.`,
  solution: [
    R`Men: $2\cdot5!=240$.`,
    R`Each wife has $2$ allowed chairs; the constraints form one cycle with $2$ matchings.`,
    R`Total $480$.`,
    R`The answer is $\textbf{(C)}\ 480$.`
  ],
  shortcut: R`Once the first wife chooses between her $2$ chairs, everything else is forced.`,
  traps: [R`Forgetting the factor $2$ for which parity the men use.`, R`Forgetting that across seats are women's seats.`],
  recognize: R`Restricted seatings: fix one group, then each restriction becomes an allowed-seat graph.`
},

'2008B22': {
  answer: 'C',
  goal: R`Beads $RRRWWB$ in a random line. We want $P(\text{no two neighbours match})$. Place the three reds first: no two adjacent.`,
  tools: [
    { name: 'Distinct arrangements', fact: R`\tfrac{6!}{3!\,2!\,1!}=60`, why: R`Equally likely colour patterns.` },
    { name: 'Non-adjacent positions', fact: R`\binom{n-k+1}{k}`, why: R`$3$ non-adjacent spots among $6$: $\binom43=4$.` }
  ],
  approach: R`Red positions: $\{1,3,5\},\{2,4,6\},\{1,3,6\},\{1,4,6\}$. Fill the other three spots with $W,W,B$ keeping the whites apart.`,
  steps: [
    { title: 'Red placements',
      explain: R`$\{1,3,5\}$ and $\{2,4,6\}$ leave three separated spots: $3$ ways each (where $B$ goes). $\{1,3,6\}$ leaves $2,4,5$ and $\{1,4,6\}$ leaves $2,3,5$: one adjacent pair, so $B$ must go in it: $2$ ways each.`,
      check: { q: R`Reds at $1,3,6$: spots $2,4,5$ remain. In how many ways can $W,W,B$ go without adjacent whites?`, opts: [R`2`, R`3`, R`1`, R`0`], ans: 0, why: R`$B$ at $4$ or $5$.` } },
    { title: 'Probability',
      explain: R`$3+3+2+2=10$ good patterns out of $60$: $\tfrac16$.`,
      check: { q: R`What is $\tfrac{10}{60}$?`, opts: [R`\tfrac16`, R`\tfrac1{10}`, R`\tfrac13`, R`\tfrac1{12}`], ans: 0, why: R`Simplify.` } }
  ],
  bridge: R`Place the most common colour first, then fill.`,
  solution: [
    R`$60$ equally likely patterns.`,
    R`Good patterns: $3+3+2+2=10$.`,
    R`$P=\tfrac16$.`,
    R`The answer is $\textbf{(C)}\ \tfrac16$.`
  ],
  shortcut: R`Place the most frequent colour first — it is the hardest to separate.`,
  traps: [R`Using $6!$ with identical beads unadjusted inconsistently.`, R`Forgetting the white–white restriction.`],
  recognize: R`"No two adjacent alike": place the most common item first in non-adjacent spots.`
},

'2008B23': {
  answer: 'B',
  goal: R`An $a\times b$ floor ($b>a$, integers) has a painted rectangle with a $1$-ft border, and the border is half the floor. Count the pairs $(a,b)$. The painted part is $(a-2)(b-2)=\tfrac{ab}2$.`,
  tools: [
    { name: "Simon's factoring trick", fact: R`ab-4a-4b+8=0\iff(a-4)(b-4)=8`, why: R`Add $16-8$ to both sides to factor.` },
    { name: 'Factor pairs', fact: R`8=1\cdot8=2\cdot4`, why: R`Positive pairs with the smaller first.` }
  ],
  approach: R`$2(a-2)(b-2)=ab$ expands to $ab-4a-4b+8=0$, i.e. $(a-4)(b-4)=8$. Check positive and negative factor pairs.`,
  steps: [
    { title: 'Factor',
      explain: R`$ab-4a-4b+16=8$, so $(a-4)(b-4)=8$.`,
      check: { q: R`Expand $2(a-2)(b-2)$.`, opts: [R`2ab-4a-4b+8`, R`2ab-2a-2b+4`, R`2ab-4a-4b+4`, R`ab-4a-4b+8`], ans: 0, why: R`$2(ab-2a-2b+4)$.` } },
    { title: 'Pairs',
      explain: R`$(1,8)\to(5,12)$; $(2,4)\to(6,8)$. Negative pairs give a side $\le0$. So $2$ pairs.`,
      check: { q: R`Why does $(a-4,b-4)=(-2,-4)$ fail?`, opts: [R`b=0`, R`a=b`, R`a>b`, R`\text{It works}`], ans: 0, why: R`$b-4=-4$.` } }
  ],
  bridge: R`Factor with Simon's trick and list factor pairs.`,
  solution: [
    R`$(a-2)(b-2)=\tfrac{ab}{2}$ gives $(a-4)(b-4)=8$.`,
    R`$b>a$: $(5,12)$ and $(6,8)$.`,
    R`$2$ possibilities.`,
    R`The answer is $\textbf{(B)}\ 2$.`
  ],
  shortcut: R`Check: $5\cdot12=60$, $3\cdot10=30$ ✓; $6\cdot8=48$, $4\cdot6=24$ ✓.`,
  traps: [R`Using border width $1$ as $(a-1)(b-1)$.`, R`Counting $(a,b)$ with $a>b$ too.`],
  recognize: R`Equations like $xy+px+qy=r$: Simon's favourite factoring trick.`
},

'2008B24': {
  answer: 'C',
  goal: R`$AB=BC=CD$, $\angle ABC=70^\circ$, $\angle BCD=170^\circ$; we want $\angle BAD$. Complete $BCD$ to a rhombus and spot an equilateral triangle.`,
  tools: [
    { name: 'Rhombus', fact: R`E=B+D-C\Rightarrow BCDE\text{ rhombus}`, why: R`$BC=CD$, so the parallelogram has equal sides.` },
    { name: 'Equilateral triangle', fact: R`\angle ABE=70^\circ-10^\circ=60^\circ,\ AB=BE`, why: R`$\angle CBE=180^\circ-170^\circ=10^\circ$.` },
    { name: 'Isosceles triangle', fact: R`EA=ED`, why: R`Both equal the common side length.` }
  ],
  approach: R`Build rhombus $BCDE$. Then $\angle CBE=10^\circ$, so $\angle ABE=60^\circ$ and $ABE$ is equilateral. Triangle $AED$ has $EA=ED$ and $\angle AED=360^\circ-60^\circ-170^\circ=130^\circ$, so $\angle EAD=25^\circ$.`,
  steps: [
    { title: 'Equilateral triangle',
      explain: R`In rhombus $BCDE$, $\angle CBE=180^\circ-\angle BCD=10^\circ$. So $\angle ABE=60^\circ$ with $AB=BE$: equilateral.`,
      check: { q: R`In a rhombus with one angle $170^\circ$, what is the adjacent angle?`, opts: [R`10^\circ`, R`170^\circ`, R`20^\circ`, R`85^\circ`], ans: 0, why: R`Adjacent angles are supplementary.` } },
    { title: 'Isosceles triangle $AED$',
      explain: R`Around $E$: $\angle AEB=60^\circ$, $\angle BED=170^\circ$, so $\angle AED=130^\circ$. Base angles $25^\circ$. $\angle BAD=60^\circ+25^\circ=85^\circ$.`,
      check: { q: R`An isosceles triangle with apex $130^\circ$ has base angles of?`, opts: [R`25^\circ`, R`50^\circ`, R`65^\circ`, R`30^\circ`], ans: 0, why: R`$\tfrac{50^\circ}{2}$.` } }
  ],
  bridge: R`Complete to a rhombus, find the equilateral triangle, then the isosceles one.`,
  solution: [
    R`Let $BCDE$ be a rhombus; $\angle CBE=10^\circ$.`,
    R`$\angle ABE=60^\circ$ and $AB=BE$: $\triangle ABE$ equilateral, $AE=ED$.`,
    R`$\angle AED=130^\circ$, so $\angle EAD=25^\circ$.`,
    R`$\angle BAD=85^\circ$.`,
    R`The answer is $\textbf{(C)}\ 85$.`
  ],
  shortcut: R`Coordinates also work: $A=(\cos70^\circ,\sin70^\circ)$, $D=(1+\cos10^\circ,\sin10^\circ)$ give $\cos\angle BAD\approx0.087$.`,
  traps: [R`Assuming $ABCD$ is cyclic.`, R`Assuming $AD\parallel BC$.`],
  recognize: R`Several equal sides with awkward angles: add a point to make a rhombus or equilateral triangle.`
},

'2008B25': {
  answer: 'B',
  goal: R`Michael walks at $5$ ft/s; a truck drives at $10$ ft/s and stops $30$ s at each pail ($200$ ft apart). At $t=0$ Michael is at a pail and the truck is leaving the next one. We count meetings by tracking the gap.`,
  tools: [
    { name: 'Gap per phase', fact: R`\text{drive }20\text{ s}:+100;\quad\text{stop }30\text{ s}:-150`, why: R`Relative speed $+5$ while driving, $-5$ while stopped.` },
    { name: 'Sign changes', fact: R`\text{a meeting = the gap reaching }0`, why: R`They meet whenever the gap hits zero.` }
  ],
  approach: R`Start gap $200$. Each $50$-s cycle: $+100$ then $-150$. Track the gap at the end of each phase until it stays negative.`,
  steps: [
    { title: 'Approach',
      explain: R`Gaps: $200\to300\to150\to250\to100\to200\to50\to150\to0$. First meeting at the end of the 4th stop.`,
      check: { q: R`After each full cycle, how much does the gap shrink?`, opts: [R`50`, R`100`, R`150`, R`200`], ans: 0, why: R`$+100-150$.` } },
    { title: 'Count crossings',
      explain: R`$0\to100\to-50$ (meet 2), $\to50$ (meet 3), $\to-100$ (meet 4), $\to0$ (meet 5), $\to-150\to-50\to-200$: never $0$ again. Total $5$.`,
      check: { q: R`From gap $-150$, can a $+100$ drive phase bring the gap to $0$?`, opts: [R`\text{No}`, R`\text{Yes}`, R`\text{Only with a stop}`, R`\text{Exactly}`], ans: 0, why: R`$-150+100=-50<0$.` } }
  ],
  bridge: R`Record the gap after every phase and count zeros.`,
  solution: [
    R`Gap changes $+100$ (drive) and $-150$ (stop).`,
    R`$200,300,150,250,100,200,50,150,0,100,-50,50,-100,0,-150,-50,-200,\ldots$`,
    R`Zeros or sign changes: $5$ meetings.`,
    R`The answer is $\textbf{(B)}\ 5$.`
  ],
  shortcut: R`Once the gap is below $-100$ after a stop, a drive phase can't catch up again.`,
  traps: [R`Counting the touch at $0$ followed by moving apart twice.`, R`Ignoring meetings while the truck drives.`],
  recognize: R`Stop-and-go chases: track the gap phase by phase.`
}

};
