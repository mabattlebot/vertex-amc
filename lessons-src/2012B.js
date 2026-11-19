// Hand-written lessons: 2012 AMC 10B, Difficulty 4 and 5.
// 2012B25 (hexagonal lattice paths) is not included: its answer depends on the arrows in the figure,
// which is not available here, so it keeps the saved AI lesson until the figure can be checked.
const R = String.raw;
module.exports = {

'2012B16': {
  answer: 'A',
  goal: R`Three mutually tangent circles of radius $2$; we want the total area of the circles together with the curved triangle between them. That is the union of the three discs and the gap.`,
  tools: [
    { name: 'Centres of tangent circles', fact: R`\text{equilateral triangle of side }4`, why: R`Each pair of centres is $2+2$ apart.` },
    { name: 'Equilateral triangle area', fact: R`\tfrac{\sqrt3}{4}\cdot4^2=4\sqrt3`, why: R`Standard formula.` },
    { name: 'Sector outside the triangle', fact: R`360^\circ-60^\circ=300^\circ`, why: R`Each circle has a $60^\circ$ sector inside the centre triangle.` }
  ],
  approach: R`The region is exactly the triangle of centres plus, for each circle, the $300^\circ$ part of the disc outside the triangle.`,
  steps: [
    { title: 'Triangle of centres',
      explain: R`Side $4$, area $4\sqrt3$. It contains the gap and a $60^\circ$ sector of each circle.`,
      check: { q: R`What is the area of an equilateral triangle with side $4$?`, opts: [R`4\sqrt3`, R`8\sqrt3`, R`2\sqrt3`, R`16`], ans: 0, why: R`$\tfrac{\sqrt3}{4}\cdot16$.` } },
    { title: 'Outside parts',
      explain: R`Each circle contributes a $300^\circ$ sector: $\tfrac56\cdot4\pi=\tfrac{10\pi}3$. Three of them: $10\pi$. Total $10\pi+4\sqrt3$.`,
      check: { q: R`What is $\tfrac56\cdot4\pi$?`, opts: [R`\tfrac{10\pi}3`, R`\tfrac{5\pi}{3}`, R`\tfrac{20\pi}{3}`, R`4\pi`], ans: 0, why: R`$\tfrac{20\pi}6$.` } }
  ],
  bridge: R`Triangle of centres plus three $300^\circ$ sectors.`,
  solution: [
    R`The centres form an equilateral triangle of side $4$, area $4\sqrt3$.`,
    R`Outside it, each circle contributes a $300^\circ$ sector: $3\cdot\tfrac{10\pi}{3}=10\pi$.`,
    R`Total $10\pi+4\sqrt3$.`,
    R`The answer is $\textbf{(A)}$.`
  ],
  shortcut: R`Union of the discs and the gap $=$ triangle $+\ 3\times300^\circ$ sectors.`,
  traps: [R`Adding three full discs ($12\pi$) plus the gap separately and double counting.`, R`Using side $2$ for the triangle.`],
  recognize: R`Regions around mutually tangent circles: connect centres; the triangle plus sectors decomposes everything.`
},

'2012B17': {
  answer: 'C',
  goal: R`A radius-$12$ disc is cut into $120^\circ$ and $240^\circ$ sectors, each rolled into a cone. We want the ratio of the cones' volumes. The disc's radius becomes the slant height; the arc becomes the base circumference.`,
  tools: [
    { name: 'Sector to cone', fact: R`\text{slant}=12,\ \ 2\pi r=\text{arc length}`, why: R`Rolling the sector puts its arc around the base.` },
    { name: 'Cone height', fact: R`h=\sqrt{\ell^2-r^2}`, why: R`Right triangle with slant $\ell$.` },
    { name: 'Cone volume', fact: R`\tfrac13\pi r^2h`, why: R`Standard formula.` }
  ],
  approach: R`Find each cone's base radius from its arc, then its height from the slant $12$, then compare $r^2h$.`,
  steps: [
    { title: 'Radii',
      explain: R`Small: arc $\tfrac13\cdot24\pi=8\pi$, so $r=4$. Large: $16\pi$, so $r=8$.`,
      check: { q: R`A sector of angle $90^\circ$ from a radius-$12$ disc makes a cone with base radius?`, opts: [R`3`, R`4`, R`6`, R`12`], ans: 0, why: R`$\tfrac14\cdot12$.` } },
    { title: 'Heights',
      explain: R`Small: $\sqrt{144-16}=8\sqrt2$. Large: $\sqrt{144-64}=4\sqrt5$.`,
      check: { q: R`What is $\sqrt{144-64}$?`, opts: [R`4\sqrt5`, R`8`, R`4\sqrt{10}`, R`\sqrt{80}+1`], ans: 0, why: R`$\sqrt{80}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{16\cdot8\sqrt2}{64\cdot4\sqrt5}=\tfrac{\sqrt2}{2\sqrt5}=\tfrac{\sqrt{10}}{10}$.`,
      check: { q: R`Simplify $\tfrac{\sqrt2}{2\sqrt5}$.`, opts: [R`\tfrac{\sqrt{10}}{10}`, R`\tfrac{\sqrt{10}}{5}`, R`\tfrac{1}{\sqrt{10}}\cdot2`, R`\tfrac{\sqrt5}{5}`], ans: 0, why: R`Multiply by $\tfrac{\sqrt5}{\sqrt5}$.` } }
  ],
  bridge: R`Convert each sector to base radius and height, then compare volumes.`,
  solution: [
    R`Base radii $4$ and $8$ (arcs $8\pi$ and $16\pi$); slant $12$.`,
    R`Heights $8\sqrt2$ and $4\sqrt5$.`,
    R`Volume ratio $\tfrac{4^2\cdot8\sqrt2}{8^2\cdot4\sqrt5}=\tfrac{\sqrt{10}}{10}$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Base radius $=12\times$ (fraction of the circle).`,
  traps: [R`Using $12$ as the base radius.`, R`Comparing areas instead of volumes.`],
  recognize: R`Sectors rolled into cones: slant = sector radius, base circumference = arc length.`
},

'2012B18': {
  answer: 'C',
  goal: R`A rare disease ($1$ in $500$), a perfect positive test for the sick, and a $2\%$ false positive rate. We want $P(\text{sick}\mid\text{positive})$. Bayes' rule, or simply counting a population.`,
  tools: [
    { name: "Bayes' rule", fact: R`P(S\mid+)=\frac{P(+\mid S)P(S)}{P(+)}`, why: R`Conditional probability.` },
    { name: 'Natural frequencies', fact: R`\text{imagine }500\text{ people}`, why: R`Counting is easier than formulas.` }
  ],
  approach: R`Picture $500$ people: $1$ sick (tests positive) and $499$ healthy, of whom about $10$ test positive. So about $1$ in $11$ positives is sick.`,
  steps: [
    { title: 'Count positives',
      explain: R`Sick positives: $1$. Healthy positives: $0.02\cdot499\approx9.98$. Total about $10.98$.`,
      check: { q: R`What is $2\%$ of $499$?`, opts: [R`9.98`, R`9.8`, R`10.2`, R`4.99`], ans: 0, why: R`$0.02\cdot499$.` } },
    { title: 'Probability',
      explain: R`$p=\tfrac{1}{10.98}\approx\tfrac1{11}$.`,
      check: { q: R`Which is closest to $\tfrac{1}{10.98}$?`, opts: [R`\tfrac1{11}`, R`\tfrac19`, R`\tfrac1{98}`, R`\tfrac{49}{99}`], ans: 0, why: R`$10.98\approx11$.` } }
  ],
  bridge: R`Count positives in a population of $500$.`,
  solution: [
    R`Out of $500$ people: $1$ sick positive, about $9.98$ healthy positives.`,
    R`$p=\tfrac{1}{1+9.98}\approx\tfrac1{11}$.`,
    R`Closest choice $\tfrac1{11}$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Rare condition + imperfect test: positives are dominated by false positives.`,
  traps: [R`Answering $\tfrac{98}{99}$ (confusing $P(+\mid S)$ with $P(S\mid+)$).`, R`Ignoring the base rate.`],
  recognize: R`"Probability a positive test is correct": Bayes' rule with the base rate; count an imagined population.`
},

'2012B19': {
  answer: 'C',
  goal: R`In a $6\times30$ rectangle, $E$ extends $AB$ by $2$, and $ED$ meets $BC$ at $F$. We want the area of $BFDG$ ($G$ the midpoint of $AD$). Coordinates give $F$, then shoelace.`,
  tools: [
    { name: 'Coordinates', fact: R`A(0,0),B(6,0),C(6,30),D(0,30),G(0,15),E(8,0)`, why: R`Read off from the lengths.` },
    { name: 'Line intersection', fact: R`ED:\ (8-8t,\ 30t)`, why: R`Parametrise from $E$ to $D$.` },
    { name: 'Shoelace formula', fact: R`\tfrac12\left|\sum(x_iy_{i+1}-x_{i+1}y_i)\right|`, why: R`Polygon area from coordinates.` }
  ],
  approach: R`Find $F$ where $ED$ crosses $x=6$. Then apply the shoelace formula to $B,F,D,G$.`,
  steps: [
    { title: 'Find $F$',
      explain: R`$8-8t=6$ gives $t=\tfrac14$, so $F=(6,7.5)$.`,
      check: { q: R`On the segment from $(8,0)$ to $(0,30)$, what is $y$ when $x=6$?`, opts: [R`7.5`, R`6`, R`10`, R`22.5`], ans: 0, why: R`$t=\tfrac14$.` } },
    { title: 'Shoelace',
      explain: R`$B(6,0),F(6,7.5),D(0,30),G(0,15)$: terms $45$, $180$, $0$, $-90$; sum $135$; area $\tfrac{135}2$.`,
      check: { q: R`What is $\tfrac12(45+180+0-90)$?`, opts: [R`\tfrac{135}2`, R`135`, R`\tfrac{133}{2}`, R`68`], ans: 0, why: R`$\tfrac{135}{2}$.` } }
  ],
  bridge: R`Coordinates, find $F$, shoelace.`,
  solution: [
    R`$E=(8,0)$; line $ED$ meets $x=6$ at $F=(6,7.5)$.`,
    R`Shoelace on $B,F,D,G$ gives $\tfrac{135}2$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{135}2$.`
  ],
  shortcut: R`$[BFDG]=[ABD]$-style decompositions also work: trapezoid $BFDG$ has parallel sides $BF=7.5$ and $GD=15$ at distance $6$: $\tfrac{7.5+15}2\cdot6=67.5$.`,
  traps: [R`Putting $E$ on the wrong side of $B$.`, R`Ordering the vertices incorrectly in the shoelace.`],
  recognize: R`Areas of quadrilaterals in rectangles: coordinates and either shoelace or trapezoid area.`
},

'2012B20': {
  answer: 'A',
  goal: R`Bernardo doubles, Silvia adds $50$; whoever last produces a number below $1000$ wins. We want the smallest starting $N$ for which Bernardo wins. Write each step's number in terms of $N$.`,
  tools: [
    { name: 'Tracking the sequence', fact: R`2N,\ 2N+50,\ 4N+100,\ 4N+150,\ 8N+300,\ 8N+350,\ 16N+700,\ 16N+750,\ 32N+1500`, why: R`Alternate doubling and adding $50$.` },
    { name: 'Who wins', fact: R`\text{Bernardo wins iff Silvia's number is the first to reach }1000`, why: R`Then Bernardo produced the last number below $1000$.` }
  ],
  approach: R`Bernardo wins exactly when one of his numbers is below $1000$ and Silvia's next is at least $1000$. For small $N$, the game lasts longer; find the stage and the smallest $N$.`,
  steps: [
    { title: 'Find the deciding stage',
      explain: R`$32N+1500\ge1000$ always, so if the game reaches Bernardo's fifth move he loses. Bernardo wins at the stage $16N+700<1000\le16N+750$, i.e. $15.625\le N<18.75$.`,
      check: { q: R`Solve $16N+750\ge1000$.`, opts: [R`N\ge15.625`, R`N\ge16`, R`N\ge18.75`, R`N\ge15`], ans: 0, why: R`$16N\ge250$.` } },
    { title: 'Smallest $N$',
      explain: R`$N=16$ (digit sum $7$). Check: $32,82,164,214,428,478,956,1006$: Silvia's $1006$ is the first over $1000$.`,
      check: { q: R`What is $16\cdot16+750$?`, opts: [R`1006`, R`956`, R`1016`, R`996`], ans: 0, why: R`$256+750$.` } }
  ],
  bridge: R`Write the numbers in terms of $N$ and find the stage where Silvia first crosses $1000$.`,
  solution: [
    R`The sequence is $2N,2N+50,4N+100,\ldots,16N+700,16N+750,32N+1500$.`,
    R`Bernardo wins iff $16N+700<1000\le16N+750$ (earlier stages require larger $N$).`,
    R`Smallest $N=16$, digit sum $7$.`,
    R`The answer is $\textbf{(A)}\ 7$.`
  ],
  shortcut: R`The last stage before an automatic Bernardo loss gives the smallest winning $N$.`,
  traps: [R`Confusing who produces the last number below $1000$.`, R`Stopping at an earlier stage with larger $N$.`],
  recognize: R`Alternating operation games: express each step in terms of the start and find threshold crossings.`
},

'2012B21': {
  answer: 'A',
  goal: R`Four points have pairwise distances $a,a,a,a,2a,b$. We want $\tfrac ba$. The length $2a$ is very restrictive: by the triangle inequality, a point at distance $a$ from both its ends must be the midpoint.`,
  tools: [
    { name: 'Triangle inequality (equality case)', fact: R`PA+PB=AB\iff P\text{ lies on segment }AB`, why: R`Equality holds only for collinear points.` },
    { name: 'Equilateral triangle', fact: R`\text{three points pairwise }a\text{ apart}`, why: R`All sides equal.` }
  ],
  approach: R`Let $AB=2a$. The four $a$-length segments must connect the other points $C,D$ to $A,B$ or to each other. Every point $P$ has $PA+PB\ge2a$, so a point with $PA=PB=a$ is the midpoint of $AB$. Find the arrangement that uses four $a$'s, then compute $b$.`,
  steps: [
    { title: 'Place the midpoint',
      explain: R`Four segments of length $a$ among $CA,CB,DA,DB,CD$ means some point, say $C$, has $CA=CB=a$ (otherwise there are too few $a$'s). Then $C$ is the midpoint of $AB$.`,
      check: { q: R`If $PA=PB=a$ and $AB=2a$, where is $P$?`, opts: [R`\text{The midpoint of }AB`, R`\text{Anywhere on a circle}`, R`\text{Above }AB`, R`\text{At }A`], ans: 0, why: R`Equality in the triangle inequality.` } },
    { title: 'Place $D$',
      explain: R`$D$ needs two more $a$'s. $D$ cannot also be the midpoint, so $DC=a$ and one of $DA,DB$ equals $a$, say $DA=a$. Then $ADC$ is equilateral with side $a$.`,
      check: { q: R`Triangle $ADC$ has $DA=DC=AC=a$. What kind of triangle is it?`, opts: [R`\text{Equilateral}`, R`\text{Right}`, R`\text{Degenerate}`, R`\text{Isosceles but not equilateral}`], ans: 0, why: R`All sides equal.` } },
    { title: 'Compute $b=DB$',
      explain: R`With $A=(0,0)$, $C=(a,0)$, $B=(2a,0)$, $D=(\tfrac a2,\tfrac{\sqrt3}2a)$: $DB^2=\tfrac94a^2+\tfrac34a^2=3a^2$, so $b=\sqrt3a$.`,
      check: { q: R`What is $\tfrac94+\tfrac34$?`, opts: [R`3`, R`\tfrac{3}{2}`, R`4`, R`\tfrac{12}{8}`], ans: 0, why: R`$\tfrac{12}4$.` } }
  ],
  bridge: R`Force the midpoint, build an equilateral triangle, and compute the last distance.`,
  solution: [
    R`With $AB=2a$, a point at distance $a$ from both $A$ and $B$ is the midpoint $C$.`,
    R`The fourth point $D$ has $DA=DC=a$, making $ADC$ equilateral.`,
    R`Then $DB=\sqrt3a$.`,
    R`The answer is $\textbf{(A)}\ \sqrt3$.`
  ],
  shortcut: R`Triangle $ADB$ is right-angled at $D$ (Thales, since $C$ is the centre), so $b=\sqrt{(2a)^2-a^2}$.`,
  traps: [R`Assuming no three points are collinear.`, R`Trying a rhombus (it has no $2a$ length).`],
  recognize: R`Given distance multisets: the longest length plus the triangle inequality often forces collinearity.`
},

'2012B22': {
  answer: 'B',
  goal: R`We count orderings of $1$–$10$ where each number after the first has a neighbour value ($\pm1$) already listed. Such lists grow a block of consecutive integers one step at a time.`,
  tools: [
    { name: 'Block structure', fact: R`\text{after }k\text{ terms, the listed numbers are }k\text{ consecutive integers}`, why: R`Each new number extends the current block at one end.` },
    { name: 'Binary choices', fact: R`2^9=512`, why: R`Each of the last $9$ numbers is "extend down" or "extend up".` }
  ],
  approach: R`Show by induction the listed set is always an interval. Each new term extends it down or up. Conversely, any sequence of $9$ "down/up" choices determines the list (the first number is $1+$ number of downs).`,
  steps: [
    { title: 'Always an interval',
      explain: R`If the first $k$ numbers form an interval $[s,s+k-1]$, the next must be adjacent to some listed number but not already listed: $s-1$ or $s+k$. So the set stays an interval.`,
      check: { q: R`If $3,4,5$ are listed so far, which numbers may come next?`, opts: [R`2\text{ or }6`, R`1\text{ or }7`, R`\text{any}`, R`6\text{ only}`], ans: 0, why: R`They must touch the block.` } },
    { title: 'Count',
      explain: R`Each of positions $2$–$10$ is a choice of down or up: $2^9$ sequences. Each sequence gives exactly one valid list, since the first number must be $1$ plus the number of downs. So $512$.`,
      check: { q: R`If the choices are D,D,U,U,U,U,U,U,U, what is the first number?`, opts: [R`3`, R`2`, R`1`, R`8`], ans: 0, why: R`$1+2$ downs.` } }
  ],
  bridge: R`Show the listed set is always an interval and count down/up choices.`,
  solution: [
    R`The listed numbers always form a block of consecutive integers.`,
    R`Each new number extends it down or up: $2^9$ choice sequences.`,
    R`Each sequence corresponds to exactly one list.`,
    R`$512$. The answer is $\textbf{(B)}\ 512$.`
  ],
  shortcut: R`Lists where each new element touches previous ones grow intervals; count the directions.`,
  traps: [R`Multiplying by $10$ for the starting number (it is determined).`, R`Answering $10!$.`],
  recognize: R`"Each new element adjacent to an earlier one": the set grows as an interval; count left/right extensions.`
},

'2012B23': {
  answer: 'D',
  goal: R`A plane through a face diagonal and the far vertex of the opposite face cuts a corner tetrahedron off a unit cube. The rest sits on the triangular cut. We want its height: the distance from the cut plane to the farthest vertex.`,
  tools: [
    { name: 'The cut plane', fact: R`x+y+z=1\text{ through }(1,0,0),(0,1,0),(0,0,1)`, why: R`These are the three cut vertices around the corner $(0,0,0)$.` },
    { name: 'Point-to-plane distance', fact: R`\frac{|x_0+y_0+z_0-1|}{\sqrt3}`, why: R`Normal vector $(1,1,1)$.` }
  ],
  approach: R`Place the removed corner at the origin; the cut plane is $x+y+z=1$. The remaining solid's highest point above that plane is the opposite vertex $(1,1,1)$.`,
  steps: [
    { title: 'Identify the plane',
      explain: R`The three vertices $(1,0,0)$, $(0,1,0)$, $(0,0,1)$ are pairwise non-adjacent across faces as described; the plane through them is $x+y+z=1$.`,
      check: { q: R`Does $(0,1,0)$ satisfy $x+y+z=1$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only if }z=1`, R`\text{It gives }0`], ans: 0, why: R`$0+1+0=1$.` } },
    { title: 'Height',
      explain: R`Distance from $(1,1,1)$: $\tfrac{|3-1|}{\sqrt3}=\tfrac{2}{\sqrt3}=\tfrac{2\sqrt3}3$.`,
      check: { q: R`What is $\tfrac{2}{\sqrt3}$ rationalised?`, opts: [R`\tfrac{2\sqrt3}3`, R`\tfrac{\sqrt3}{2}`, R`2\sqrt3`, R`\tfrac{\sqrt3}{3}`], ans: 0, why: R`Multiply by $\tfrac{\sqrt3}{\sqrt3}$.` } }
  ],
  bridge: R`Use the plane $x+y+z=1$ and the distance to $(1,1,1)$.`,
  solution: [
    R`The cut plane is $x+y+z=1$.`,
    R`The farthest vertex of the remaining solid is $(1,1,1)$.`,
    R`Height $\tfrac{2}{\sqrt3}=\tfrac{2\sqrt3}3$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`The space diagonal $\sqrt3$ is split by the two parallel planes $x+y+z=1,2$ into thirds; the remaining height is $\tfrac23\sqrt3$.`,
  traps: [R`Answering $\tfrac{\sqrt3}3$ (the removed tetrahedron's height).`, R`Using the edge length $1$.`],
  recognize: R`Cutting corners off cubes: the cut is $x+y+z=1$; heights are point-to-plane distances along $(1,1,1)$.`
},

'2012B24': {
  answer: 'B',
  goal: R`Each of $4$ songs is liked by some subset of the three girls, never all three. Each pair of girls must share at least one song the third dislikes. Count the possibilities with inclusion–exclusion.`,
  tools: [
    { name: 'Options per song', fact: R`7\text{ liker-sets (all subsets except the full set)}`, why: R`$2^3-1$.` },
    { name: 'Inclusion–exclusion', fact: R`|\text{all three pairs used}|=7^4-3\cdot6^4+3\cdot5^4-4^4`, why: R`Subtract sequences missing a pair type, add back double-missing, subtract triple-missing.` }
  ],
  approach: R`Each song's liker-set is one of $7$ options. The condition says each of the three "exactly two" sets ($AB$, $AJ$, $BJ$) appears at least once among the $4$ songs. Count with inclusion–exclusion.`,
  steps: [
    { title: 'Total and exclusions',
      explain: R`All: $7^4=2401$. Missing a given pair set: $6^4=1296$. Missing two given ones: $5^4=625$. Missing all three: $4^4=256$.`,
      check: { q: R`What is $6^4$?`, opts: [R`1296`, R`1024`, R`216`, R`1196`], ans: 0, why: R`$36^2$.` } },
    { title: 'Combine',
      explain: R`$2401-3\cdot1296+3\cdot625-256=2401-3888+1875-256=132$.`,
      check: { q: R`What is $2401-3888+1875-256$?`, opts: [R`132`, R`142`, R`122`, R`152`], ans: 0, why: R`Compute step by step.` } }
  ],
  bridge: R`Each song has $7$ options; require each pair set to appear, via inclusion–exclusion.`,
  solution: [
    R`Each song's set of fans is one of $7$ subsets.`,
    R`We need the three two-person sets each to appear.`,
    R`$7^4-3\cdot6^4+3\cdot5^4-4^4=132$.`,
    R`The answer is $\textbf{(B)}\ 132$.`
  ],
  shortcut: R`Casework also works: one pair set twice ($3\cdot\tfrac{4!}{2!}=36$... ) but inclusion–exclusion is cleaner.`,
  traps: [R`Allowing all three to like a song.`, R`Treating songs as identical.`],
  recognize: R`"Each type appears at least once" among choices: inclusion–exclusion on the missing types.`
}

};
