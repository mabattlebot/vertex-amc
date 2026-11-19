// Hand-written lessons: 2006 AMC 10B, Difficulty 4 and 5.
// #23 relies on a figure; the placement of the areas (7 next to both cevians) is the only one consistent with the key.
const R = String.raw;
module.exports = {

'2006B16': {
  answer: 'E',
  goal: R`Feb 29, 2004 was a Sunday; we want the weekday of Feb 29, 2020. Count days between them mod $7$.`,
  tools: [
    { name: 'Days in a year', fact: R`365\equiv1\pmod7`, why: R`Each ordinary year shifts the weekday by $1$.` },
    { name: 'Leap days in between', fact: R`2008,2012,2016,2020`, why: R`Each adds one more day.` }
  ],
  approach: R`$16$ years: $16\cdot365+4$ days. Mod $7$: $16+4=20\equiv6$. Sunday $+6$ = Saturday.`,
  steps: [
    { title: 'Count days',
      explain: R`From Feb 29, 2004 to Feb 29, 2020: $16\cdot365$ plus the $4$ leap days $2008,2012,2016,2020$.`,
      check: { q: R`What is $365\bmod7$?`, opts: [R`1`, R`0`, R`2`, R`5`], ans: 0, why: R`$364=52\cdot7$.` } },
    { title: 'Shift',
      explain: R`$16+4=20\equiv6\pmod7$. Sunday $+6$ days = Saturday.`,
      check: { q: R`What day is $6$ days after Sunday?`, opts: [R`\text{Saturday}`, R`\text{Friday}`, R`\text{Monday}`, R`\text{Thursday}`], ans: 0, why: R`One day before the next Sunday.` } }
  ],
  bridge: R`Count total days mod $7$.`,
  solution: [
    R`Days: $16\cdot365+4\equiv16+4=20\equiv6\pmod7$.`,
    R`Sunday $+6$: Saturday.`,
    R`The answer is $\textbf{(E)}$ Saturday.`
  ],
  shortcut: R`Each leap-to-leap span of $4$ years shifts by $5$: $4\cdot5=20\equiv6$.`,
  traps: [R`Forgetting a leap day.`, R`Counting $2004$'s leap day twice.`],
  recognize: R`Day-of-week jumps: days mod $7$, with $365\equiv1$ and $366\equiv2$.`
},

'2006B17': {
  answer: 'D',
  goal: R`Alice moves a random ball to Bob; Bob returns a random ball from his $6$. We want $P(\text{bags end the same})$. That happens exactly when Bob returns a ball of the colour Alice sent.`,
  tools: [
    { name: 'Conditioning', fact: R`\text{fix Alice's colour}`, why: R`By symmetry any colour behaves the same.` },
    { name: 'Counting matches', fact: R`2\text{ balls of that colour among }6`, why: R`Bob's original plus the one Alice sent.` }
  ],
  approach: R`After Alice's move, Bob has $6$ balls, $2$ of the colour she sent. He must return one of those: $\tfrac26=\tfrac13$.`,
  steps: [
    { title: 'Condition',
      explain: R`The bags match iff Bob sends back the same colour Alice gave.`,
      check: { q: R`How many balls of Alice's colour does Bob have after her move?`, opts: [R`2`, R`1`, R`0`, R`6`], ans: 0, why: R`His own plus hers.` } },
    { title: 'Probability',
      explain: R`$\tfrac26=\tfrac13$.`,
      check: { q: R`What is $\tfrac26$?`, opts: [R`\tfrac13`, R`\tfrac16`, R`\tfrac12`, R`\tfrac15`], ans: 0, why: R`Simplify.` } }
  ],
  bridge: R`Bob must return the duplicated colour.`,
  solution: [
    R`Bob has $6$ balls with $2$ of Alice's colour.`,
    R`$P=\tfrac26=\tfrac13$.`,
    R`The answer is $\textbf{(D)}\ \tfrac13$.`
  ],
  shortcut: R`Alice's choice doesn't matter: only Bob's single draw does.`,
  traps: [R`Answering $\tfrac16$ (only the exact same ball).`, R`Answering $\tfrac15$.`],
  recognize: R`Exchange problems: condition on the first move and count what restores the original state.`
},

'2006B18': {
  answer: 'E',
  goal: R`$a_1=2$, $a_2=3$, $a_n=\tfrac{a_{n-1}}{a_{n-2}}$. We want $a_{2006}$. Compute terms until they repeat.`,
  tools: [
    { name: 'Periodicity', fact: R`\text{the recursion depends on two terms; a repeated pair repeats forever}`, why: R`So find when $(2,3)$ comes back.` }
  ],
  approach: R`$2,3,\tfrac32,\tfrac12,\tfrac13,\tfrac23,2,3,\ldots$: period $6$. $2006\equiv2\pmod6$, so $a_{2006}=a_2=3$.`,
  steps: [
    { title: 'Terms',
      explain: R`$a_3=\tfrac32$, $a_4=\tfrac{3/2}{3}=\tfrac12$, $a_5=\tfrac{1/2}{3/2}=\tfrac13$, $a_6=\tfrac{1/3}{1/2}=\tfrac23$, $a_7=2$, $a_8=3$.`,
      check: { q: R`What is $a_5=\tfrac{a_4}{a_3}$?`, opts: [R`\tfrac13`, R`\tfrac34`, R`3`, R`\tfrac23`], ans: 0, why: R`$\tfrac{1/2}{3/2}$.` } },
    { title: 'Reduce',
      explain: R`$2006=6\cdot334+2$, so $a_{2006}=a_2=3$.`,
      check: { q: R`What is $2006\bmod6$?`, opts: [R`2`, R`0`, R`4`, R`1`], ans: 0, why: R`$2004=6\cdot334$.` } }
  ],
  bridge: R`Find the period, reduce the index.`,
  solution: [
    R`Sequence: $2,3,\tfrac32,\tfrac12,\tfrac13,\tfrac23$, then repeats.`,
    R`$2006\equiv2\pmod6$.`,
    R`$a_{2006}=3$.`,
    R`The answer is $\textbf{(E)}\ 3$.`
  ],
  shortcut: R`$a_{n+3}=\tfrac{1}{a_n}$ here, so the period is $6$.`,
  traps: [R`Off-by-one in the remainder.`, R`Assuming period $3$.`],
  recognize: R`Recurrences with division: usually periodic — compute until a pair repeats.`
},

'2006B19': {
  answer: 'A',
  goal: R`Unit square $OABC$ at the centre of a radius-$2$ circle; $AB$ and $CB$ extended past $B$ hit the circle at $D$ and $E$. We want the area between $BD$, $BE$ and the arc $DE$. Use coordinates: it's a sector minus two triangles.`,
  tools: [
    { name: 'Coordinates', fact: R`B=(1,1),\ D=(1,\sqrt3),\ E=(\sqrt3,1)`, why: R`$x=1$ and $y=1$ meet $x^2+y^2=4$.` },
    { name: 'Sector', fact: R`\angle DOE=60^\circ-30^\circ=30^\circ`, why: R`$D$ is at $60^\circ$, $E$ at $30^\circ$.` }
  ],
  approach: R`Region $=$ sector $DOE$ minus triangles $ODB$ and $OBE$. Sector $=\tfrac{30}{360}\cdot4\pi=\tfrac\pi3$. Each triangle has area $\tfrac{\sqrt3-1}{2}$.`,
  steps: [
    { title: 'Sector',
      explain: R`$D$ at angle $60^\circ$, $E$ at $30^\circ$: sector $\tfrac{1}{12}\cdot4\pi=\tfrac\pi3$.`,
      check: { q: R`What angle does $(1,\sqrt3)$ make with the $x$-axis?`, opts: [R`60^\circ`, R`30^\circ`, R`45^\circ`, R`90^\circ`], ans: 0, why: R`$\tan=\sqrt3$.` } },
    { title: 'Triangles',
      explain: R`$\triangle ODB$: base $BD=\sqrt3-1$ on $x=1$, height $1$: area $\tfrac{\sqrt3-1}2$. Same for $\triangle OBE$. Region $=\tfrac\pi3-(\sqrt3-1)$.`,
      check: { q: R`What is $2\cdot\tfrac{\sqrt3-1}{2}$?`, opts: [R`\sqrt3-1`, R`\sqrt3+1`, R`\tfrac{\sqrt3-1}{4}`, R`2\sqrt3-2`], ans: 0, why: R`Cancel the $2$.` } }
  ],
  bridge: R`Sector minus quadrilateral $ODBE$.`,
  solution: [
    R`$D=(1,\sqrt3)$, $E=(\sqrt3,1)$; sector $DOE$ is $30^\circ$, area $\tfrac\pi3$.`,
    R`$[ODBE]=\sqrt3-1$.`,
    R`Region $=\tfrac\pi3+1-\sqrt3$.`,
    R`The answer is $\textbf{(A)}$.`
  ],
  shortcut: R`Sanity: the region is small, $\approx0.315$, matching (A).`,
  traps: [R`Using a $60^\circ$ sector.`, R`Subtracting the whole square.`],
  recognize: R`Region between two segments and an arc: sector minus the polygon joining the centre.`
},

'2006B20': {
  answer: 'E',
  goal: R`Rectangle with $A=(6,-22)$, $B=(2006,178)$, $D=(8,y)$. We want the area. $AD\perp AB$ fixes $y$.`,
  tools: [
    { name: 'Perpendicular vectors', fact: R`\vec{AB}\cdot\vec{AD}=0`, why: R`Adjacent sides of a rectangle.` },
    { name: 'Area', fact: R`|AB|\cdot|AD|`, why: R`Rectangle.` }
  ],
  approach: R`$\vec{AB}=(2000,200)$, $\vec{AD}=(2,y+22)$. $4000+200(y+22)=0$ gives $y+22=-20$. Then $|AB|=200\sqrt{101}$, $|AD|=\sqrt{404}=2\sqrt{101}$.`,
  steps: [
    { title: 'Find $y$',
      explain: R`$2000\cdot2+200(y+22)=0\Rightarrow y+22=-20$.`,
      check: { q: R`What is $\vec{AD}$?`, opts: [R`(2,-20)`, R`(2,20)`, R`(-2,20)`, R`(2,-22)`], ans: 0, why: R`$y+22=-20$.` } },
    { title: 'Area',
      explain: R`$200\sqrt{101}\cdot2\sqrt{101}=400\cdot101=40400$.`,
      check: { q: R`What is $\sqrt{2000^2+200^2}$?`, opts: [R`200\sqrt{101}`, R`2200`, R`20\sqrt{101}`, R`2010`], ans: 0, why: R`$200\sqrt{100+1}$.` } }
  ],
  bridge: R`Dot product gives $y$; multiply the side lengths.`,
  solution: [
    R`$\vec{AB}=(2000,200)$, $\vec{AD}=(2,-20)$.`,
    R`Area $=200\sqrt{101}\cdot2\sqrt{101}=40400$.`,
    R`The answer is $\textbf{(E)}\ 40400$.`
  ],
  shortcut: R`$\vec{AD}$ is $\tfrac{1}{100}$ of $\vec{AB}$ rotated, so area $=\tfrac{|AB|^2}{100}=\tfrac{4040000}{100}$.`,
  traps: [R`Using $y$ as a length directly.`, R`Dropping a factor of $10$.`],
  recognize: R`Rectangles from coordinates: perpendicularity via the dot product.`
},

'2006B21': {
  answer: 'C',
  goal: R`Each die shows $k$ with probability $\tfrac{k}{21}$. We want $P(\text{total }7)$. Sum over the six pairs $(k,7-k)$.`,
  tools: [
    { name: 'Normalising', fact: R`1+2+\cdots+6=21`, why: R`Probabilities $\tfrac{k}{21}$ sum to $1$.` },
    { name: 'Independent dice', fact: R`P(k,7-k)=\tfrac{k(7-k)}{441}`, why: R`Multiply.` }
  ],
  approach: R`$\sum_{k=1}^6k(7-k)=6+10+12+12+10+6=56$. So $P=\tfrac{56}{441}=\tfrac8{63}$.`,
  steps: [
    { title: 'Sum',
      explain: R`$k(7-k)$ for $k=1..6$: $6,10,12,12,10,6$; total $56$.`,
      check: { q: R`What is $3\cdot4$?`, opts: [R`12`, R`7`, R`10`, R`14`], ans: 0, why: R`$k=3$.` } },
    { title: 'Simplify',
      explain: R`$\tfrac{56}{441}=\tfrac{8}{63}$.`,
      check: { q: R`Simplify $\tfrac{56}{441}$.`, opts: [R`\tfrac8{63}`, R`\tfrac{4}{63}`, R`\tfrac18`, R`\tfrac{7}{63}`], ans: 0, why: R`Divide by $7$.` } }
  ],
  bridge: R`Weight each pair by the product of probabilities.`,
  solution: [
    R`$P(k)=\tfrac{k}{21}$.`,
    R`$P(7)=\tfrac{1}{441}\sum k(7-k)=\tfrac{56}{441}$.`,
    R`$=\tfrac{8}{63}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac8{63}$.`
  ],
  shortcut: R`Pairs come in equal mirror pairs: $2(6+10+12)=56$.`,
  traps: [R`Using $\tfrac16$ (fair dice).`, R`Dividing by $21$ instead of $21^2$.`],
  recognize: R`Weighted dice: write $P(k)$ explicitly and sum products.`
},

'2006B22': {
  answer: 'D',
  goal: R`$N$ sandwiches, each with $B$ globs ($4$¢) and $J$ blobs ($5$¢), cost $253$¢ total. With $N>1$ and all positive integers, we want the jam cost $5NJ$. Factor $253$.`,
  tools: [
    { name: 'Factor', fact: R`N(4B+5J)=253=11\cdot23`, why: R`Both factors are positive integers.` },
    { name: 'Minimum per sandwich', fact: R`4B+5J\ge9`, why: R`$B,J\ge1$.` }
  ],
  approach: R`$N\in\{11,23,253\}$. $N=23$ needs $4B+5J=11$ (impossible), $N=253$ needs $1$. So $N=11$, $4B+5J=23$: $B=2$, $J=3$.`,
  steps: [
    { title: 'Find $N$',
      explain: R`$4B+5J=11$ has no positive solutions ($9$ is the minimum, next values $13,14,\ldots$). So $N=11$.`,
      check: { q: R`What is $253$ factored?`, opts: [R`11\cdot23`, R`13\cdot19`, R`7\cdot37`, R`3\cdot83`], ans: 0, why: R`$11\cdot23=253$.` } },
    { title: 'Jam cost',
      explain: R`$4B+5J=23$: $J=3$, $B=2$. Jam $=11\cdot3\cdot5=165$¢.`,
      check: { q: R`Which positive $(B,J)$ solves $4B+5J=23$?`, opts: [R`(2,3)`, R`(3,2)`, R`(1,4)`, R`(4,1)`], ans: 0, why: R`$8+15=23$.` } }
  ],
  bridge: R`Factor the total; test the per-sandwich cost.`,
  solution: [
    R`$N(4B+5J)=253=11\cdot23$, $N>1$.`,
    R`Only $N=11$, $4B+5J=23$ works: $B=2,J=3$.`,
    R`Jam: $11\cdot15=165$¢ $=\$1.65$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`$4B+5J=23$: $J$ must be odd ($23-5J$ divisible by $4$), so $J=3$.`,
  traps: [R`Answering the total or peanut-butter cost.`, R`Allowing $N=1$.`],
  recognize: R`Integer totals with a product structure: factor the total.`
},

'2006B23': {
  answer: 'D',
  goal: R`Two cevians $BE$ and $CF$ meet at $P$; $[PFB]=3$, $[PBC]=7$, $[PCE]=7$, and quadrilateral $AFPE$ is unknown. Draw $AP$ to split it into $x=[AFP]$ and $y=[APE]$, then use ratios along each side.`,
  tools: [
    { name: 'Ratio along a side', fact: R`\frac{[AFP]}{[PFB]}=\frac{AF}{FB}=\frac{[AFC]}{[FBC]}`, why: R`Triangles with the same apex and bases on $AB$.` },
    { name: 'Same on the other side', fact: R`\frac{[APE]}{[PCE]}=\frac{AE}{EC}=\frac{[ABE]}{[EBC]}`, why: R`Bases on $AC$.` }
  ],
  approach: R`$\tfrac x3=\tfrac{x+y+7}{10}$ and $\tfrac y7=\tfrac{x+y+3}{14}$. Solve the linear system.`,
  steps: [
    { title: 'Equations',
      explain: R`$10x=3x+3y+21\Rightarrow7x=3y+21$. $14y=7x+7y+21\Rightarrow y=x+3$.`,
      check: { q: R`From $\tfrac y7=\tfrac{x+y+3}{14}$, what follows?`, opts: [R`y=x+3`, R`y=x-3`, R`y=2x`, R`x=y+3`], ans: 0, why: R`$2y=x+y+3$.` } },
    { title: 'Solve',
      explain: R`$7x=3x+9+21$: $x=7.5$, $y=10.5$. Quadrilateral $=18$.`,
      check: { q: R`What is $7.5+10.5$?`, opts: [R`18`, R`17`, R`17.5`, R`15`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Split by $AP$ and write two ratio equations.`,
  solution: [
    R`Let $x=[AFP]$, $y=[APE]$.`,
    R`$7x=3y+21$ and $y=x+3$.`,
    R`$x=\tfrac{15}2$, $y=\tfrac{21}2$, so the quadrilateral is $18$.`,
    R`The answer is $\textbf{(D)}\ 18$.`
  ],
  shortcut: R`Formula: quad $=\tfrac{ac(a+2b+c)}{b^2-ac}=\tfrac{21\cdot24}{28}=18$.`,
  traps: [R`Assuming the quadrilateral equals the sum of the triangles.`, R`Using a ratio with the wrong pair of triangles.`],
  recognize: R`Cevian area puzzles: draw the third segment from the vertex to the intersection and set up ratios.`
},

'2006B24': {
  answer: 'B',
  goal: R`Externally tangent circles ($r=2$ at $O$, $R=4$ at $P$, $OP=6$) with common external tangents $AD$ and $BC$. We want the area of hexagon $AOBCPD$. It is two congruent right trapezoids $AOPD$ and $BOPC$.`,
  tools: [
    { name: 'External tangent length', fact: R`AD=\sqrt{OP^2-(R-r)^2}`, why: R`Drop a perpendicular from $O$ to $PD$.` },
    { name: 'Trapezoid area', fact: R`\tfrac{(OA+PD)}{2}\cdot AD`, why: R`$OA\parallel PD$, both perpendicular to $AD$.` }
  ],
  approach: R`$AD=\sqrt{36-4}=4\sqrt2$. Trapezoid $AOPD$: $\tfrac{2+4}{2}\cdot4\sqrt2=12\sqrt2$. Double it.`,
  steps: [
    { title: 'Tangent length',
      explain: R`$AD=\sqrt{6^2-2^2}=\sqrt{32}=4\sqrt2$.`,
      check: { q: R`What is $\sqrt{36-4}$?`, opts: [R`4\sqrt2`, R`2\sqrt2`, R`4\sqrt3`, R`6`], ans: 0, why: R`$\sqrt{32}$.` } },
    { title: 'Area',
      explain: R`One trapezoid: $3\cdot4\sqrt2=12\sqrt2$. Hexagon: $24\sqrt2$.`,
      check: { q: R`What is $\tfrac{2+4}{2}\cdot4\sqrt2$?`, opts: [R`12\sqrt2`, R`24\sqrt2`, R`6\sqrt2`, R`8\sqrt2`], ans: 0, why: R`$3\cdot4\sqrt2$.` } }
  ],
  bridge: R`Split along $OP$ into two right trapezoids.`,
  solution: [
    R`$AD=4\sqrt2$.`,
    R`$[AOPD]=12\sqrt2$, and $[BOPC]$ is the same.`,
    R`Hexagon $=24\sqrt2$.`,
    R`The answer is $\textbf{(B)}\ 24\sqrt2$.`
  ],
  shortcut: R`Tangent length between circles: external uses $R-r$, internal uses $R+r$.`,
  traps: [R`Using $R+r$ (internal tangent).`, R`Forgetting the second trapezoid.`],
  recognize: R`Shapes made from radii and tangents: right trapezoids.`
},

'2006B25': {
  answer: 'B',
  goal: R`A $4$-digit number with two digits each appearing twice is divisible by all eight children's ages. The oldest is $9$, so the ages are $1$–$9$ with exactly one of $1$–$8$ missing. We want the age that is not there. Test whether $5$ can be an age.`,
  tools: [
    { name: 'Evenness is forced', fact: R`\text{at least one of }4,6,8\text{ is an age}`, why: R`Only one age from $1$–$8$ is missing.` },
    { name: 'Divisible by 9', fact: R`2(a+b)\equiv0\pmod9\Rightarrow a+b=9`, why: R`The digit sum is $2a+2b$.` }
  ],
  approach: R`If $5$ were an age, the number (even) would end in $0$, so its digits are $0$ and $9$. The father's age is the last two digits, so the number is $9090$, which fails $4$ and $8$ — two missing ages. So $5$ is missing; check with $5544=2^3\cdot3^2\cdot7\cdot11$.`,
  steps: [
    { title: 'Rule out 5',
      explain: R`Even and divisible by $5$ means it ends in $0$. With $a+b=9$ the digits are $0,9$; ending in $90$ gives $9090$, not divisible by $4$ or $8$.`,
      check: { q: R`Why must the number be even?`, opts: [R`\text{Some even age }4,6,8\text{ is present}`, R`\text{It has 4 digits}`, R`\text{Ages are even}`, R`\text{The father is even}`], ans: 0, why: R`Only one age is missing.` } },
    { title: 'Confirm',
      explain: R`$5544=8\cdot693=8\cdot9\cdot7\cdot11$ is divisible by $1,2,3,4,6,7,8,9$ but not $5$; father is $44$.`,
      check: { q: R`Is $5544$ divisible by $7$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only by 77}`, R`\text{Only by 11}`], ans: 0, why: R`$5544=7\cdot792$.` } }
  ],
  bridge: R`Show $5$ forces a contradiction, then exhibit a working plate.`,
  solution: [
    R`The number is even (some of $4,6,8$ are ages).`,
    R`If $5$ divided it, it would be $9090$, which fails $4$ and $8$.`,
    R`So $5$ is not an age; $5544$ works.`,
    R`The answer is $\textbf{(B)}\ 5$.`
  ],
  shortcut: R`$5$ and $2$ together force a final $0$, which is very restrictive.`,
  traps: [R`Trying to find the plate by brute force without the digit-sum rule.`, R`Forgetting the father's age must be a sensible two-digit number.`],
  recognize: R`"Divisible by all but one of $1$–$9$": check which single divisor causes a contradiction.`
}

};
