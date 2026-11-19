// Hand-written lessons: 2015 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2015B16': {
  answer: 'C',
  goal: R`Al, Bill and Cal get distinct numbers from $1$ to $10$. We want the probability that Cal's number divides Bill's and Bill's divides Al's. Count divisibility chains $c\mid b\mid a$ with $c<b<a\le10$.`,
  tools: [
    { name: 'Counting ordered outcomes', fact: R`10\cdot9\cdot8=720`, why: R`Distinct numbers assigned to three named people.` },
    { name: 'Chains by smallest element', fact: R`\text{fix }c,\ \text{list multiples }b,\ \text{then multiples }a\le10`, why: R`Systematic casework avoids misses.` }
  ],
  approach: R`Since the numbers are distinct, "multiple" means a strictly larger multiple. Count chains $c<b<a$ with $c\mid b$ and $b\mid a$, starting from $c=1$, then $c=2$, and so on.`,
  steps: [
    { title: 'Chains starting at $c=1$',
      explain: R`$b=2$: $a\in\{4,6,8,10\}$ ($4$). $b=3$: $a\in\{6,9\}$ ($2$). $b=4$: $a=8$. $b=5$: $a=10$. Larger $b$ have no multiple $\le10$. Total $8$.`,
      check: { q: R`How many multiples of $3$ greater than $3$ are at most $10$?`, opts: [R`2`, R`3`, R`1`, R`4`], ans: 0, why: R`$6$ and $9$.` } },
    { title: 'Other starting values',
      explain: R`$c=2$: $b=4$, $a=8$ ($1$ chain). $c\ge3$: $b\ge2c$ and $a\ge4c>10$: none. Total $9$ chains.`,
      check: { q: R`Why is there no chain starting at $c=3$?`, opts: [R`a\ge12>10`, R`3\text{ is prime}`, R`b\text{ must be }3`, R`\text{There is one}`], ans: 0, why: R`$b\ge6$, so $a\ge12$.` } },
    { title: 'Probability',
      explain: R`$\tfrac{9}{720}=\tfrac1{80}$.`,
      check: { q: R`Simplify $\tfrac{9}{720}$.`, opts: [R`\tfrac1{80}`, R`\tfrac1{90}`, R`\tfrac1{72}`, R`\tfrac1{8}`], ans: 0, why: R`$720/9=80$.` } }
  ],
  bridge: R`Count chains $c\mid b\mid a$ by the smallest number and divide by $720$.`,
  solution: [
    R`There are $720$ equally likely assignments.`,
    R`Chains with $c=1$: $8$; with $c=2$: $1$; none for $c\ge3$.`,
    R`Probability $\tfrac{9}{720}=\tfrac1{80}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac1{80}$.`
  ],
  shortcut: R`Every chain is determined by its numbers, and each set appears in exactly one valid order.`,
  traps: [R`Allowing equal numbers.`, R`Dividing by $1000$ instead of $720$.`],
  recognize: R`Probability of a divisibility chain among distinct picks: count chains by smallest element.`
},

'2015B17': {
  answer: 'B',
  goal: R`Joining the centres of the six faces of a $3\times4\times5$ box makes an octahedron. We want its volume. The octahedron is two pyramids glued along a rhombus.`,
  tools: [
    { name: 'Rhombus area', fact: R`\tfrac12d_1d_2`, why: R`Half the product of the diagonals.` },
    { name: 'Pyramid volume', fact: R`\tfrac13\cdot\text{base}\cdot\text{height}`, why: R`Standard formula.` }
  ],
  approach: R`The four side-face centres form a rhombus in the middle horizontal plane with diagonals equal to the box's length and width. The top and bottom face centres are apexes at height $\tfrac h2$ above and below. Add the two pyramids.`,
  steps: [
    { title: 'The middle rhombus',
      explain: R`The four side-face centres are midpoints of the box's middle cross-section, a rhombus with diagonals $a$ and $b$ (the two horizontal dimensions). Area $\tfrac12ab$.`,
      check: { q: R`A rhombus has diagonals $4$ and $5$. What is its area?`, opts: [R`10`, R`20`, R`9`, R`5`], ans: 0, why: R`$\tfrac12\cdot20$.` } },
    { title: 'Two pyramids',
      explain: R`Each pyramid has height $\tfrac c2$, so the volume is $2\cdot\tfrac13\cdot\tfrac12ab\cdot\tfrac c2=\tfrac{abc}{6}$. For $3\times4\times5$: $\tfrac{60}6=10$.`,
      check: { q: R`What is $\tfrac{abc}6$ for a $2\times3\times4$ box?`, opts: [R`4`, R`24`, R`6`, R`8`], ans: 0, why: R`$24/6$.` } }
  ],
  bridge: R`Split the octahedron into two pyramids on the middle rhombus.`,
  solution: [
    R`The middle rhombus has diagonals equal to two box dimensions: area $\tfrac12ab$.`,
    R`Two pyramids of height $\tfrac c2$: volume $\tfrac{abc}{6}$.`,
    R`For $3\times4\times5$: $10$.`,
    R`The answer is $\textbf{(B)}\ 10$.`
  ],
  shortcut: R`The face-centre octahedron of any box has volume $\tfrac16$ of the box.`,
  traps: [R`Treating it as a regular octahedron.`, R`Using full height $c$ for each pyramid.`],
  recognize: R`Solids formed by face centres: decompose into pyramids whose bases are cross-sections.`
},

'2015B18': {
  answer: 'D',
  goal: R`Each of $64$ coins is tossed up to three times, stopping at heads. We want the expected number of heads at the end. Linearity of expectation lets us handle one coin and multiply.`,
  tools: [
    { name: 'Linearity of expectation', fact: R`E[\text{total}]=\sum E[\text{each coin}]`, why: R`Expectation adds even without independence.` },
    { name: 'Complement', fact: R`P(\text{heads by the end})=1-\left(\tfrac12\right)^3`, why: R`A coin ends tails only if all three tosses are tails.` }
  ],
  approach: R`One coin ends as heads unless it is tails three times. Multiply that probability by $64$.`,
  steps: [
    { title: 'One coin',
      explain: R`$P(\text{tails all three times})=\tfrac18$, so $P(\text{heads})=\tfrac78$.`,
      check: { q: R`With up to $2$ tosses, what is $P(\text{heads at the end})$?`, opts: [R`\tfrac34`, R`\tfrac12`, R`\tfrac78`, R`\tfrac14`], ans: 0, why: R`$1-\tfrac14$.` } },
    { title: 'All coins',
      explain: R`$64\cdot\tfrac78=56$.`,
      check: { q: R`What is $64\cdot\tfrac78$?`, opts: [R`56`, R`48`, R`60`, R`54`], ans: 0, why: R`$8\cdot7$.` } }
  ],
  bridge: R`Find one coin's probability of ending heads and multiply by $64$.`,
  solution: [
    R`A coin ends tails only if it is tails on all three tosses: $\tfrac18$.`,
    R`So each coin is heads with probability $\tfrac78$.`,
    R`Expected heads $=64\cdot\tfrac78=56$.`,
    R`The answer is $\textbf{(D)}\ 56$.`
  ],
  shortcut: R`Expected value of a count = number of items $\times$ probability for one item.`,
  traps: [R`Adding $32+16+8$ and forgetting it equals $56$ only by coincidence of method.`, R`Thinking the tosses must be simulated round by round.`],
  recognize: R`Expected counts: use linearity and compute the probability for a single item.`
},

'2015B19': {
  answer: 'C',
  goal: R`Right triangle $ABC$ (right angle at $C$, $AB=12$) has squares on $AB$ and $AC$, and the four outer corners $X,Y,Z,W$ lie on a circle. We want the perimeter. The concyclic condition forces the triangle to be isosceles.`,
  tools: [
    { name: 'Centre of a circle through a chord', fact: R`\text{centre lies on the perpendicular bisector of every chord}`, why: R`It is equidistant from the chord's ends.` },
    { name: 'Circumcentre of a right triangle', fact: R`\text{midpoint of the hypotenuse}`, why: R`Thales: the hypotenuse is a diameter.` },
    { name: 'Distance formula', fact: R`d^2=(\Delta x)^2+(\Delta y)^2`, why: R`Pythagoras in coordinates.` }
  ],
  approach: R`$XY\parallel AB$ and $ZW\parallel AC$ share perpendicular bisectors with $AB$ and $AC$. These meet at the circumcentre of $ABC$, the midpoint $M$ of $AB$. So $MX=MZ$; express both with legs $a,b$ and solve.`,
  steps: [
    { title: 'Locate the centre',
      explain: R`The perpendicular bisector of $XY$ is that of $AB$; of $ZW$ is that of $AC$. They meet at the circumcentre of $ABC$, which is $M$, the midpoint of $AB$.`,
      check: { q: R`Where is the circumcentre of a right triangle?`, opts: [R`\text{Midpoint of the hypotenuse}`, R`\text{The right-angle vertex}`, R`\text{The centroid}`, R`\text{Outside the triangle}`], ans: 0, why: R`The hypotenuse is a diameter.` } },
    { title: 'Equal distances',
      explain: R`$MX^2=6^2+12^2=180$. With $C=(0,0)$, $A=(a,0)$, $B=(0,b)$ and $Z=(a,-a)$: $MZ^2=\tfrac{a^2}4+\left(\tfrac b2+a\right)^2=36+ab+a^2$. Setting $=180$ with $a^2+b^2=144$ gives $ab=b^2$, so $a=b$.`,
      check: { q: R`If $a^2+ab=144$ and $a^2+b^2=144$, then?`, opts: [R`a=b`, R`a=2b`, R`ab=0`, R`a=-b`], ans: 0, why: R`$ab=b^2$ with $b>0$.` } },
    { title: 'Perimeter',
      explain: R`Isosceles right triangle with hypotenuse $12$: legs $6\sqrt2$. Perimeter $12+12\sqrt2$.`,
      check: { q: R`Legs of an isosceles right triangle with hypotenuse $12$?`, opts: [R`6\sqrt2`, R`6`, R`12\sqrt2`, R`4\sqrt3`], ans: 0, why: R`$\tfrac{12}{\sqrt2}$.` } }
  ],
  bridge: R`Find the circle's centre as the midpoint of $AB$, set $MX=MZ$, and solve.`,
  solution: [
    R`The circle's centre is on the perpendicular bisectors of $AB$ and $AC$, so it is the midpoint $M$ of $AB$.`,
    R`$MX^2=180$ and $MZ^2=36+ab+a^2$; equating gives $a=b$.`,
    R`Legs $6\sqrt2$; perimeter $12+12\sqrt2$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Symmetry suggests the isosceles case; the algebra confirms it is the only one.`,
  traps: [R`Assuming a $30$-$60$-$90$ triangle.`, R`Placing the squares inside the triangle.`],
  recognize: R`Concyclic points built from squares on sides: perpendicular bisectors locate the centre; equate distances.`
},

'2015B20': {
  answer: 'A',
  goal: R`Erin walks $7$ edges on a cube, visiting all $8$ corners once, and cannot return to the start. We count such paths. Colouring corners in two alternating colours decides where she can end.`,
  tools: [
    { name: 'Bipartite colouring', fact: R`\text{Each edge joins corners of opposite colours}`, why: R`Colour by the parity of the number of $1$s in coordinates $(x,y,z)\in\{0,1\}^3$.` },
    { name: 'Where a 7-step path ends', fact: R`\text{after }7\text{ steps the colour has flipped: distance }1\text{ or }3`, why: R`Odd steps change colour; corners of the other colour are the $3$ neighbours and the opposite corner.` }
  ],
  approach: R`"Cannot return along an edge" means the end is not adjacent to the start. By colouring, the end must be the opposite corner. Count paths from a corner to the opposite corner visiting every corner.`,
  steps: [
    { title: 'Where she ends',
      explain: R`After $7$ edges she is on the opposite colour: a neighbour of the start or the opposite corner. Not a neighbour, so the opposite corner.`,
      check: { q: R`How many corners of a cube are at distance $3$ from a given corner?`, opts: [R`1`, R`3`, R`4`, R`0`], ans: 0, why: R`Only the opposite corner.` } },
    { title: 'Count the paths',
      explain: R`First edge: $3$ choices. Second edge: $2$ choices (not back). After that the route is forced: she must save the opposite corner for last. Checking one case: $000\to100\to110\to010\to011\to001\to101\to111$. So $3\cdot2=6$ paths.`,
      check: { q: R`What is $3\cdot2$?`, opts: [R`6`, R`9`, R`5`, R`12`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Use the colouring to show she ends opposite, then count with the first two choices.`,
  solution: [
    R`A $7$-edge path flips colour, so it ends at a neighbour or the opposite corner; not a neighbour, so opposite.`,
    R`Choose the first edge ($3$) and second edge ($2$); the rest is forced.`,
    R`$6$ paths.`,
    R`The answer is $\textbf{(A)}\ 6$.`
  ],
  shortcut: R`Of the $18$ paths through all corners from a fixed start, $12$ end next to it; $18-12=6$.`,
  traps: [R`Counting all $18$ paths.`, R`Forgetting that the end must be the opposite corner.`],
  recognize: R`Paths on grids and cubes: two-colour the vertices to restrict where a path of given length can end.`
},

'2015B21': {
  answer: 'D',
  goal: R`Cozy needs $\lceil\tfrac n2\rceil$ jumps and Dash $\lceil\tfrac n5\rceil$ for $n$ steps; Dash takes $19$ fewer. We find all $n$ and the digit sum of their total.`,
  tools: [
    { name: 'Ceiling for jump counts', fact: R`\text{jumps}=\left\lceil\tfrac{n}{k}\right\rceil`, why: R`The last partial jump still counts.` },
    { name: 'Estimate then check', fact: R`\tfrac n2-\tfrac n5=\tfrac{3n}{10}\approx19\Rightarrow n\approx63`, why: R`Ceilings change the difference by at most about $1$.` }
  ],
  approach: R`Estimate $n$ from $\tfrac{3n}{10}\approx19$, then check a small range of $n$ around $63$ directly.`,
  steps: [
    { title: 'Estimate',
      explain: R`$\tfrac{3n}{10}\approx19$ gives $n\approx63$. Check $n$ from about $60$ to $70$.`,
      check: { q: R`What is $\lceil\tfrac{63}{2}\rceil$?`, opts: [R`32`, R`31`, R`63`, R`30`], ans: 0, why: R`$31.5$ rounds up.` } },
    { title: 'Check values',
      explain: R`$n=63$: $32-13=19$. $n=64$: $32-13=19$. $n=65$: $33-13=20$. $n=66$: $33-14=19$. $n=62$: $31-13=18$. $n\ge67$ gives at least $20$. So $n\in\{63,64,66\}$, $s=193$, digit sum $13$.`,
      check: { q: R`What is $\lceil\tfrac{66}{5}\rceil$?`, opts: [R`14`, R`13`, R`15`, R`66`], ans: 0, why: R`$13.2$ rounds up.` } }
  ],
  bridge: R`Estimate $n$ and test nearby values with ceilings.`,
  solution: [
    R`Jumps: $\lceil n/2\rceil$ and $\lceil n/5\rceil$, difference $19$.`,
    R`$\tfrac{3n}{10}\approx19$ suggests $n\approx63$.`,
    R`Checking: $n=63,64,66$ work.`,
    R`$s=193$, digit sum $13$. The answer is $\textbf{(D)}\ 13$.`
  ],
  shortcut: R`The difference grows by about $0.3$ per step, so only a few $n$ near $63$ can work.`,
  traps: [R`Using floor instead of ceiling.`, R`Missing $n=66$.`],
  recognize: R`Equations with ceilings or floors of linear expressions: estimate with the real-number version, then check a narrow window.`
},

'2015B22': {
  answer: 'D',
  goal: R`In a regular pentagon with its star of diagonals, $AG=1$ is a side of one of the star's points. We want $FG+JH+CD$. Every length in a regular pentagram is one of a few values related by the golden ratio $\varphi=\tfrac{1+\sqrt5}2$.`,
  tools: [
    { name: 'Golden ratio', fact: R`\varphi=\tfrac{1+\sqrt5}{2},\quad\varphi^2=\varphi+1,\quad\tfrac1\varphi=\varphi-1`, why: R`It satisfies $\varphi^2=\varphi+1$.` },
    { name: 'Lengths in a regular pentagram', fact: R`\text{star-point side}:\text{inner side}=\varphi,\quad\text{outer side}=\text{star-point side}+\text{inner side}`, why: R`Similar isosceles $36^\circ$-$72^\circ$-$72^\circ$ triangles appear throughout the figure.` }
  ],
  approach: R`Take the star-point side $AG=1$ as the unit. Then an inner pentagon side is $\tfrac1\varphi=\varphi-1$ and an outer pentagon side is $1+(\varphi-1)=\varphi$. In the figure, $FG$ is an inner side, $JH$ is a star-point side (like $AG$), and $CD$ is an outer side.`,
  steps: [
    { title: 'The three lengths',
      explain: R`A star point is a golden triangle with legs $1$ and base equal to the inner side, $\tfrac1\varphi=\varphi-1$. The outer side is a star-point leg plus an inner side: $\varphi$.`,
      check: { q: R`What is $\tfrac{1}{\varphi}$ in terms of $\varphi$?`, opts: [R`\varphi-1`, R`\varphi+1`, R`\varphi^2`, R`2\varphi`], ans: 0, why: R`From $\varphi^2=\varphi+1$, divide by $\varphi$.` } },
    { title: 'Add them',
      explain: R`$FG+JH+CD=(\varphi-1)+1+\varphi=2\varphi=1+\sqrt5$.`,
      check: { q: R`What is $2\varphi$?`, opts: [R`1+\sqrt5`, R`\tfrac{1+\sqrt5}{2}`, R`2+\sqrt5`, R`\sqrt5`], ans: 0, why: R`$2\cdot\tfrac{1+\sqrt5}2$.` } }
  ],
  bridge: R`Express each segment as a star-point side, inner side, or outer side, using $\varphi$.`,
  solution: [
    R`With $AG=1$ (a star-point side), inner pentagon sides are $\varphi-1$ and outer sides are $\varphi$.`,
    R`$FG$ is an inner side, $JH$ a star-point side, $CD$ an outer side.`,
    R`Sum $(\varphi-1)+1+\varphi=2\varphi=1+\sqrt5$.`,
    R`The answer is $\textbf{(D)}\ 1+\sqrt5$.`
  ],
  shortcut: R`Every pentagram length is a power of $\varphi$ times the smallest piece; identify each piece's type.`,
  traps: [R`Treating all star segments as equal.`, R`Using $\varphi=\tfrac{\sqrt5-1}2$ (that is $\tfrac1\varphi$).`],
  recognize: R`Regular pentagons and pentagrams: golden-ratio relationships from similar $36^\circ$-$72^\circ$-$72^\circ$ triangles.`
},

'2015B23': {
  answer: 'B',
  goal: R`$n!$ ends in $k$ zeros and $(2n)!$ in $3k$ zeros. We want the four smallest $n>4$ and the digit sum of their total. Count zeros with factors of $5$.`,
  tools: [
    { name: 'Trailing zeros of a factorial', fact: R`Z(m)=\left\lfloor\tfrac m5\right\rfloor+\left\lfloor\tfrac m{25}\right\rfloor+\cdots`, why: R`Each zero needs a factor $10$; fives are scarcer than twos.` }
  ],
  approach: R`Doubling $n$ roughly doubles the zero count, so $3k$ needs the jumps at multiples of $5$ to line up favourably. Check $n=5,6,\ldots$ until four work.`,
  steps: [
    { title: 'Check small $n$',
      explain: R`$n=5,6,7$: $Z(n)=1$, $Z(2n)=2$: no. $n=8,9$: $Z(n)=1$, $Z(16)=Z(18)=3$: yes. $n=10,11,12$: $Z=2$, $Z(2n)=4$: no. $n=13,14$: $Z=2$, $Z(26)=Z(28)=6$: yes.`,
      check: { q: R`What is $Z(26)$?`, opts: [R`6`, R`5`, R`4`, R`7`], ans: 0, why: R`$5+1$.` } },
    { title: 'Sum',
      explain: R`$8+9+13+14=44$, digit sum $8$.`,
      check: { q: R`What is $8+9+13+14$?`, opts: [R`44`, R`42`, R`46`, R`40`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Compute $Z(n)$ and $Z(2n)$ for successive $n$ and collect the first four matches.`,
  solution: [
    R`$Z(n)=\lfloor n/5\rfloor+\lfloor n/25\rfloor+\cdots$.`,
    R`$n=8,9$ give $k=1$, $Z(2n)=3$; $n=13,14$ give $k=2$, $Z(2n)=6$.`,
    R`$s=44$, digit sum $8$.`,
    R`The answer is $\textbf{(B)}\ 8$.`
  ],
  shortcut: R`$2n$ must reach $25$ (extra five) while $n$ stays just below a multiple of $5$; that explains $13,14$.`,
  traps: [R`Forgetting the extra factor from $25$.`, R`Including $n\le4$.`],
  recognize: R`Trailing zeros of factorials: count fives (Legendre's formula) and test small cases.`
},

'2015B24': {
  answer: 'D',
  goal: R`Aaron walks a square spiral starting east. We want $p_{2015}$. Find a pattern for the corners of the spiral, then walk the last few steps.`,
  tools: [
    { name: 'Corner positions', fact: R`p_{k(k+1)}=\left(-\tfrac k2,-\tfrac k2\right)\text{ for even }k`, why: R`Check: $p_2=(1,1)$, $p_6=(-1,-1)$, $p_{12}=(2,2)$, $p_{20}=(-2,-2)$.` },
    { name: 'Run lengths', fact: R`\text{After }p_{k(k+1)}\text{ (}k\text{ even), he walks east }k+1\text{ steps}`, why: R`Side lengths of the spiral grow by $1$ every turn.` }
  ],
  approach: R`Spiral side lengths are $1,1,2,2,3,3,\ldots$, so corners occur at $k(k+1)$. Find the largest $k(k+1)\le2015$, locate that corner, and move the remaining steps in the correct direction.`,
  steps: [
    { title: 'Find the corner',
      explain: R`$44\cdot45=1980\le2015<45\cdot46$. With $k=44$ even, $p_{1980}=(-22,-22)$, the lower-left corner.`,
      check: { q: R`What is $44\cdot45$?`, opts: [R`1980`, R`2025`, R`1936`, R`2070`], ans: 0, why: R`Multiply.` } },
    { title: 'Walk the rest',
      explain: R`From the lower-left corner he walks east for $45$ steps. $2015-1980=35$ steps east: $(-22+35,-22)=(13,-22)$.`,
      check: { q: R`From $(-22,-22)$, $35$ steps east lands at?`, opts: [R`(13,-22)`, R`(-22,13)`, R`(-57,-22)`, R`(13,22)`], ans: 0, why: R`Add $35$ to $x$.` } }
  ],
  bridge: R`Locate the corner $p_{1980}$ and walk $35$ steps east.`,
  solution: [
    R`Corners: $p_{k(k+1)}=(-\tfrac k2,-\tfrac k2)$ for even $k$.`,
    R`$p_{1980}=(-22,-22)$.`,
    R`$35$ more steps east: $(13,-22)$.`,
    R`The answer is $\textbf{(D)}\ (13,-22)$.`
  ],
  shortcut: R`Verify the corner formula on the first few points before trusting it.`,
  traps: [R`Using $45^2=2025$ (squares are not the corners here).`, R`Walking north instead of east after the lower-left corner.`],
  recognize: R`Spiral walks: side lengths $1,1,2,2,3,3,\ldots$ make corners at $k(k+1)$; find the nearest corner and walk.`
},

'2015B25': {
  answer: 'B',
  goal: R`Integer boxes $a\le b\le c$ with volume equal to surface area: $abc=2(ab+bc+ca)$. Dividing by $abc$ gives $\tfrac1a+\tfrac1b+\tfrac1c=\tfrac12$. We count solutions.`,
  tools: [
    { name: 'Unit fraction form', fact: R`\frac1a+\frac1b+\frac1c=\frac12`, why: R`Divide both sides by $abc$.` },
    { name: 'Bounding the smallest', fact: R`\tfrac3a\ge\tfrac12\Rightarrow a\le6;\ \tfrac1a<\tfrac12\Rightarrow a\ge3`, why: R`$a$ is the smallest, so $\tfrac1a$ is the largest term.` },
    { name: "Simon's trick", fact: R`\frac1b+\frac1c=\frac1m\iff(b-m)(c-m)=m^2`, why: R`Clear denominators and factor.` }
  ],
  approach: R`Bound $a$ between $3$ and $6$. For each $a$, solve $\tfrac1b+\tfrac1c=\tfrac12-\tfrac1a$ by factoring, counting pairs with $a\le b\le c$.`,
  steps: [
    { title: '$a=3$ and $a=4$',
      explain: R`$a=3$: $\tfrac1b+\tfrac1c=\tfrac16$, so $(b-6)(c-6)=36$: $b-6\in\{1,2,3,4,6\}$: $5$ solutions. $a=4$: $(b-4)(c-4)=16$: $b-4\in\{1,2,4\}$: $3$ solutions.`,
      check: { q: R`How many divisors $d$ of $36$ have $d\le\sqrt{36}$?`, opts: [R`5`, R`9`, R`4`, R`6`], ans: 0, why: R`$1,2,3,4,6$.` } },
    { title: '$a=5$ and $a=6$',
      explain: R`$a=5$: $\tfrac1b+\tfrac1c=\tfrac3{10}$, i.e. $(3b-10)(3c-10)=100$; with $b\ge5$ only $(5,20)$: $(b,c)=(5,10)$. $a=6$: $(b-3)(c-3)=9$ with $b\ge6$: $(6,6)$. One each.`,
      check: { q: R`Check $(5,5,10)$: is $\tfrac15+\tfrac15+\tfrac1{10}=\tfrac12$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only if }c=5`, R`\text{It equals }\tfrac35`], ans: 0, why: R`$\tfrac{2+2+1}{10}$.` } },
    { title: 'Total',
      explain: R`$5+3+1+1=10$.`,
      check: { q: R`What is $5+3+1+1$?`, opts: [R`10`, R`9`, R`11`, R`12`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Rewrite as unit fractions, bound $a$, and factor for each $a$.`,
  solution: [
    R`$abc=2(ab+bc+ca)\iff\tfrac1a+\tfrac1b+\tfrac1c=\tfrac12$, so $3\le a\le6$.`,
    R`$a=3$: $5$ solutions; $a=4$: $3$; $a=5$: $1$; $a=6$: $1$.`,
    R`Total $10$.`,
    R`The answer is $\textbf{(B)}\ 10$.`
  ],
  shortcut: R`Unit fraction equations always bound the smallest variable first.`,
  traps: [R`Forgetting $b\ge a$.`, R`Counting ordered triples without $a\le b\le c$.`],
  recognize: R`"Volume equals surface area" and similar: divide to get unit fractions, then bound and factor.`
}

};
