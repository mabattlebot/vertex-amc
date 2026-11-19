// Hand-written lessons: 2012 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2012A16': {
  answer: 'C',
  goal: R`Three runners on a $500$ m loop run at $4.4$, $4.8$ and $5.0$ m/s. They stop when all three are together again. Being together means each pair's distance difference is a whole number of laps.`,
  tools: [
    { name: 'Relative speed', fact: R`\text{two runners meet when }(\Delta v)\,t\text{ is a multiple of }500`, why: R`The faster one must gain whole laps.` },
    { name: 'Common time', fact: R`\text{all pairs meet}\iff t\text{ works for each relative speed}`, why: R`Being together means every pair coincides.` }
  ],
  approach: R`The relative speeds are $0.4$, $0.6$ and $0.2$ m/s. Each pair is together when (relative speed)$\times t$ is a multiple of $500$. Since $0.4$ and $0.6$ are multiples of $0.2$, the binding condition is $0.2t$ being a multiple of $500$.`,
  steps: [
    { title: 'Relative speeds',
      explain: R`$4.8-4.4=0.4$, $5.0-4.4=0.6$, $5.0-4.8=0.2$ m/s.`,
      check: { q: R`How long until the $5.0$ and $4.8$ m/s runners first meet again?`, opts: [R`2500\text{ s}`, R`1250\text{ s}`, R`500\text{ s}`, R`100\text{ s}`], ans: 0, why: R`$500/0.2$.` } },
    { title: 'First common time',
      explain: R`$0.2t=500k$ first at $t=2500$; then $0.4t=1000$ and $0.6t=1500$ are also multiples of $500$. So $t=2500$.`,
      check: { q: R`At $t=2500$, how far ahead is the fastest runner of the slowest?`, opts: [R`1500\text{ m}`, R`1000\text{ m}`, R`500\text{ m}`, R`2500\text{ m}`], ans: 0, why: R`$0.6\cdot2500$.` } }
  ],
  bridge: R`Use relative speeds and find the first time every gap is a whole number of laps.`,
  solution: [
    R`Relative speeds $0.4$, $0.6$, $0.2$ m/s.`,
    R`All gaps are multiples of $500$ first when $0.2t=500$, i.e. $t=2500$.`,
    R`The other gaps ($1000$, $1500$) are then multiples of $500$ too.`,
    R`The answer is $\textbf{(C)}\ 2500$.`
  ],
  shortcut: R`Only the smallest relative speed (if the others are multiples of it) matters.`,
  traps: [R`Using absolute speeds and lap times ($500/4.4$ etc.).`, R`Taking $1250$ (only one pair meets).`],
  recognize: R`Runners on a loop meeting again: work with relative speeds; meetings happen when gains are whole laps.`
},

'2012A17': {
  answer: 'C',
  goal: R`For coprime $a>b>0$, $\tfrac{a^3-b^3}{(a-b)^3}=\tfrac{73}3$. We want $a-b$. Factor the numerator and rewrite in terms of $d=a-b$.`,
  tools: [
    { name: 'Difference of cubes', fact: R`a^3-b^3=(a-b)(a^2+ab+b^2)`, why: R`Standard factorisation.` },
    { name: 'Rewrite in $d$', fact: R`a^2+ab+b^2=(a-b)^2+3ab`, why: R`Expand $(a-b)^2=a^2-2ab+b^2$.` },
    { name: 'Coprimality', fact: R`\gcd(a,b)=1\Rightarrow\gcd(ab,a-b)=1`, why: R`A prime dividing $a-b$ and $a$ would divide $b$.` }
  ],
  approach: R`Reduce to $\tfrac{d^2+3ab}{d^2}=\tfrac{73}{3}$, i.e. $9ab=70d^2$. Since $ab$ and $d$ are coprime, $d^2$ must divide $9$. Test $d=1,3$.`,
  steps: [
    { title: 'Simplify',
      explain: R`$\tfrac{a^2+ab+b^2}{(a-b)^2}=1+\tfrac{3ab}{d^2}=\tfrac{73}3$, so $\tfrac{3ab}{d^2}=\tfrac{70}3$ and $9ab=70d^2$.`,
      check: { q: R`What is $\tfrac{73}{3}-1$?`, opts: [R`\tfrac{70}3`, R`\tfrac{72}3`, R`24`, R`\tfrac{73}{2}`], ans: 0, why: R`$\tfrac{73-3}3$.` } },
    { title: 'Use coprimality',
      explain: R`$\gcd(ab,d)=1$, so $d^2\mid9$: $d\in\{1,3\}$. $d=1$: $9ab=70$, impossible. $d=3$: $ab=70$ with $a-b=3$: $a=10$, $b=7$, coprime.`,
      check: { q: R`Which pair has product $70$ and difference $3$?`, opts: [R`(10,7)`, R`(14,5)`, R`(35,2)`, R`(70,1)`], ans: 0, why: R`$10\cdot7$, $10-7$.` } }
  ],
  bridge: R`Rewrite as $1+\tfrac{3ab}{d^2}$ and use that $ab$ and $d$ are coprime.`,
  solution: [
    R`$\tfrac{a^3-b^3}{(a-b)^3}=1+\tfrac{3ab}{(a-b)^2}=\tfrac{73}{3}$, so $9ab=70d^2$.`,
    R`$\gcd(ab,d)=1$ forces $d^2\mid9$.`,
    R`$d=3$ works with $(a,b)=(10,7)$.`,
    R`The answer is $\textbf{(C)}\ 3$.`
  ],
  shortcut: R`Test the choices: $d=3$ needs $ab=70$, and $10\cdot7$ fits.`,
  traps: [R`Expanding $(a-b)^3$ fully.`, R`Ignoring the coprime condition.`],
  recognize: R`Ratios involving $a^3-b^3$ and $(a-b)^n$: factor, rewrite $a^2+ab+b^2$ in terms of $a-b$, and use gcd arguments.`
},

'2012A18': {
  answer: 'E',
  goal: R`A closed curve is made of $9$ arcs of length $\tfrac{2\pi}3$, centred at vertices of a regular hexagon with side $2$. We want the enclosed area. Compare the region with the hexagon itself.`,
  tools: [
    { name: 'Arc radius and angle', fact: R`\text{radius }1,\ \text{angle }120^\circ\Rightarrow\text{length }\tfrac{2\pi}3`, why: R`Neighbouring arcs meet at side midpoints, so the radius is half the side.` },
    { name: 'Sector area', fact: R`\tfrac{120}{360}\pi\cdot1^2=\tfrac\pi3`, why: R`A third of a unit disc.` },
    { name: 'Hexagon area', fact: R`\tfrac{3\sqrt3}2s^2=6\sqrt3\ (s=2)`, why: R`Six equilateral triangles.` }
  ],
  approach: R`Each arc, together with its centre, bounds a $120^\circ$ sector of area $\tfrac\pi3$. In the figure, six arcs bulge outside the hexagon (adding a sector each) and three cut into it (removing a sector each). So the area is the hexagon plus a net three sectors.`,
  steps: [
    { title: 'Arc size',
      explain: R`Radius $1$ and angle $120^\circ$ give arc length $\tfrac{2\pi}3$ and sector area $\tfrac\pi3$.`,
      check: { q: R`What is the length of a $120^\circ$ arc of radius $1$?`, opts: [R`\tfrac{2\pi}3`, R`\tfrac\pi3`, R`\pi`, R`\tfrac{4\pi}{3}`], ans: 0, why: R`$\tfrac13\cdot2\pi$.` } },
    { title: 'Add and subtract sectors',
      explain: R`Starting from the hexagon ($6\sqrt3$): six outward arcs add $6\cdot\tfrac\pi3=2\pi$; three inward arcs remove $3\cdot\tfrac\pi3=\pi$. Net $+\pi$.`,
      check: { q: R`What is $6\cdot\tfrac\pi3-3\cdot\tfrac\pi3$?`, opts: [R`\pi`, R`2\pi`, R`3\pi`, R`0`], ans: 0, why: R`$2\pi-\pi$.` } },
    { title: 'Total',
      explain: R`$6\sqrt3+\pi$.`,
      check: { q: R`What is the area of a regular hexagon with side $2$?`, opts: [R`6\sqrt3`, R`3\sqrt3`, R`12\sqrt3`, R`4\sqrt3`], ans: 0, why: R`$\tfrac{3\sqrt3}{2}\cdot4$.` } }
  ],
  bridge: R`Start from the hexagon and add or subtract one $\tfrac\pi3$ sector per arc.`,
  solution: [
    R`Each arc has radius $1$ and angle $120^\circ$, a sector of area $\tfrac\pi3$.`,
    R`Relative to the hexagon (area $6\sqrt3$), six arcs add a sector and three remove one.`,
    R`Area $=6\sqrt3+2\pi-\pi=\pi+6\sqrt3$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Count outward minus inward arcs; each net arc is worth $\tfrac\pi3$.`,
  traps: [R`Using radius $2$.`, R`Adding all nine sectors.`],
  recognize: R`Curves made of circular arcs around a polygon: area = polygon $\pm$ sectors.`
},

'2012A19': {
  answer: 'D',
  goal: R`Paula and her helpers paint at constant rates with the same lunch break $L$ each day. Three days give three equations; we solve for $L$.`,
  tools: [
    { name: 'Work = rate × time', fact: R`(\text{hours}-L)\times(\text{combined rate})=\text{fraction painted}`, why: R`Lunch time is not working time.` },
    { name: 'Testing choices', fact: R`\text{plug in each }L\text{ and check consistency}`, why: R`Three equations, three unknowns; testing is fast.` }
  ],
  approach: R`Let $p$ be Paula's rate and $h$ the helpers' combined rate (houses per hour). Monday: $(8-L)(p+h)=0.5$. Tuesday: $(6.2-L)h=0.24$. Wednesday: $(11.2-L)p=0.26$. Test the choices for $L$.`,
  steps: [
    { title: 'Equations',
      explain: R`Monday 8:00–4:00 is $8$ h; Tuesday to 2:12 is $6.2$ h; Wednesday to 7:12 is $11.2$ h. Wednesday finishes the remaining $26\%$.`,
      check: { q: R`How many hours from 8:00 AM to 2:12 PM?`, opts: [R`6.2`, R`6.12`, R`6.5`, R`5.2`], ans: 0, why: R`$6$ h $12$ min $=6.2$ h.` } },
    { title: 'Test $L=0.8$ h',
      explain: R`$p=\tfrac{0.26}{10.4}=0.025$, $h=\tfrac{0.24}{5.4}=\tfrac{2}{45}$. Then $(7.2)(0.025+\tfrac2{45})=0.18+0.32=0.5$. It works: $L=48$ minutes.`,
      check: { q: R`What is $7.2\cdot\tfrac{2}{45}$?`, opts: [R`0.32`, R`0.18`, R`0.5`, R`0.24`], ans: 0, why: R`$\tfrac{14.4}{45}$.` } }
  ],
  bridge: R`Write the three daily equations and find the lunch length that makes them consistent.`,
  solution: [
    R`$(8-L)(p+h)=0.5$, $(6.2-L)h=0.24$, $(11.2-L)p=0.26$.`,
    R`With $L=0.8$: $p=0.025$, $h=\tfrac2{45}$, and Monday checks: $7.2(p+h)=0.5$.`,
    R`$L=48$ minutes.`,
    R`The answer is $\textbf{(D)}\ 48$.`
  ],
  shortcut: R`Test choices that make $11.2-L$ and $6.2-L$ divide nicely ($10.4$ and $5.4$).`,
  traps: [R`Forgetting Wednesday's share is $26\%$, not $50\%$.`, R`Converting $12$ minutes to $0.12$ h.`],
  recognize: R`Work-rate problems with a shared break: subtract the break from each day's hours and set up rate equations.`
},

'2012A20': {
  answer: 'A',
  goal: R`A random black/white $3\times3$ grid is rotated $90^\circ$; any white square that lands where a black one was becomes black. We want the probability the grid ends all black. Rotation moves squares in cycles: the centre alone, the four corners, the four edge squares.`,
  tools: [
    { name: 'Cycles of the rotation', fact: R`\text{centre};\ \text{corners (4-cycle)};\ \text{edges (4-cycle)}`, why: R`A $90^\circ$ turn moves each corner to the next corner, and each edge square to the next edge square.` },
    { name: 'No two adjacent whites in a 4-cycle', fact: R`7\text{ of the }16\text{ colourings}`, why: R`A position ends black unless it and the square rotating into it were both white.` }
  ],
  approach: R`The centre must start black ($\tfrac12$). In each $4$-cycle, a position ends white only if it and its predecessor were both white, so we need no two cyclically adjacent whites. Count those patterns and multiply the three independent parts.`,
  steps: [
    { title: 'The centre',
      explain: R`The centre maps to itself, so it must already be black: probability $\tfrac12$.`,
      check: { q: R`What is the probability a given square is black?`, opts: [R`\tfrac12`, R`\tfrac14`, R`1`, R`\tfrac13`], ans: 0, why: R`Each colour equally likely.` } },
    { title: 'A 4-cycle',
      explain: R`Patterns of $4$ around a cycle with no two adjacent whites: all black ($1$), one white ($4$), two opposite whites ($2$): $7$ of $16$.`,
      check: { q: R`How many ways to choose two non-adjacent positions on a $4$-cycle?`, opts: [R`2`, R`4`, R`6`, R`1`], ans: 0, why: R`Only the two opposite pairs.` } },
    { title: 'Combine',
      explain: R`$\tfrac12\cdot\left(\tfrac7{16}\right)^2=\tfrac{49}{512}$.`,
      check: { q: R`What is $\tfrac12\cdot\tfrac{49}{256}$?`, opts: [R`\tfrac{49}{512}`, R`\tfrac{49}{256}`, R`\tfrac{7}{64}`, R`\tfrac{49}{1024}`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Split into the centre and two $4$-cycles; require no two adjacent whites in each cycle.`,
  solution: [
    R`The centre must be black: $\tfrac12$.`,
    R`Each $4$-cycle needs no two cyclically adjacent whites: $\tfrac7{16}$.`,
    R`The parts are independent: $\tfrac12\cdot\tfrac{49}{256}=\tfrac{49}{512}$.`,
    R`The answer is $\textbf{(A)}\ \tfrac{49}{512}$.`
  ],
  shortcut: R`"No two adjacent" on a $4$-cycle: the Lucas number $L_4=7$.`,
  traps: [R`Treating the corners and edges as one cycle of $8$.`, R`Forgetting the centre.`],
  recognize: R`Rotation problems on grids: decompose into cycles of the rotation and handle each cycle independently.`
},

'2012A21': {
  answer: 'C',
  goal: R`$E,F,G,H$ are midpoints of $BD,AB,AC,DC$ in a tetrahedron with $A$ at the origin. They form a rectangle; we want its area. Midsegments are parallel to opposite edges and half as long.`,
  tools: [
    { name: 'Midsegment theorem', fact: R`EF\parallel AD,\ EF=\tfrac12AD;\quad FG\parallel BC,\ FG=\tfrac12BC`, why: R`In triangles $ABD$ and $ABC$.` },
    { name: 'Perpendicular edges', fact: R`AD\perp BC`, why: R`$AD$ is along the $z$-axis and $BC$ lies in the $xy$-plane.` }
  ],
  approach: R`$EFGH$ has sides parallel to $AD$ and $BC$, each half as long. Since $AD\perp BC$, it is a rectangle with sides $\tfrac32$ and $\tfrac{\sqrt5}{2}$.`,
  steps: [
    { title: 'Side lengths',
      explain: R`$AD=3$, so $EF=\tfrac32$. $BC=\sqrt{1+4}=\sqrt5$, so $FG=\tfrac{\sqrt5}2$.`,
      check: { q: R`What is the distance from $(1,0,0)$ to $(0,2,0)$?`, opts: [R`\sqrt5`, R`3`, R`\sqrt3`, R`2`], ans: 0, why: R`$\sqrt{1+4}$.` } },
    { title: 'Area',
      explain: R`$\tfrac32\cdot\tfrac{\sqrt5}2=\tfrac{3\sqrt5}4$.`,
      check: { q: R`What is $\tfrac32\cdot\tfrac{\sqrt5}{2}$?`, opts: [R`\tfrac{3\sqrt5}4`, R`\tfrac{3\sqrt5}{2}`, R`\tfrac{\sqrt5}{4}`, R`\tfrac{5}{4}`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Use midsegments: sides are half of $AD$ and half of $BC$.`,
  solution: [
    R`$EF\parallel AD$ with $EF=\tfrac32$; $FG\parallel BC$ with $FG=\tfrac{\sqrt5}2$.`,
    R`$AD\perp BC$, so $EFGH$ is a rectangle.`,
    R`Area $\tfrac{3\sqrt5}4$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Midpoints of four edges of a tetrahedron always form a parallelogram with sides half of the two remaining edges.`,
  traps: [R`Computing all coordinates when midsegments suffice.`, R`Using full edge lengths.`],
  recognize: R`Midpoints of tetrahedron edges: midsegment theorem in the faces.`
},

'2012A22': {
  answer: 'A',
  goal: R`$1+3+\cdots$ ($m$ terms) exceeds $2+4+\cdots$ ($n$ terms) by $212$. We sum all possible $n$. Both sums have closed forms, and completing squares gives a factoring.`,
  tools: [
    { name: 'Odd and even sums', fact: R`1+\cdots+(2m-1)=m^2,\quad2+\cdots+2n=n(n+1)`, why: R`Standard formulas.` },
    { name: 'Completing the square', fact: R`4n^2+4n=(2n+1)^2-1`, why: R`Make a perfect square.` },
    { name: 'Difference of squares', fact: R`(2m)^2-(2n+1)^2=(2m-2n-1)(2m+2n+1)`, why: R`Factor.` }
  ],
  approach: R`$m^2-n(n+1)=212$. Multiply by $4$ and complete the square: $(2m)^2-(2n+1)^2=847=7\cdot11^2$. Factor pairs give $(m,n)$.`,
  steps: [
    { title: 'Factor',
      explain: R`$4m^2-4n^2-4n=848$ gives $(2m)^2-(2n+1)^2=847$.`,
      check: { q: R`What is $4\cdot212-1$?`, opts: [R`847`, R`848`, R`849`, R`843`], ans: 0, why: R`$848-1$.` } },
    { title: 'Factor pairs',
      explain: R`$847=1\cdot847=7\cdot121=11\cdot77$. $(1,847)$: $m-n=1$, $m+n=423$, $n=211$. $(7,121)$: $m-n=4$, $m+n=60$, $n=28$. $(11,77)$: $m-n=6$, $m+n=38$, $n=16$.`,
      check: { q: R`If $2m-2n-1=7$ and $2m+2n+1=121$, what is $n$?`, opts: [R`28`, R`32`, R`30`, R`24`], ans: 0, why: R`$m-n=4$, $m+n=60$.` } },
    { title: 'Sum',
      explain: R`$211+28+16=255$.`,
      check: { q: R`What is $211+28+16$?`, opts: [R`255`, R`256`, R`245`, R`257`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Use the sum formulas, complete the square, and factor $847$.`,
  solution: [
    R`$m^2-n(n+1)=212$ becomes $(2m)^2-(2n+1)^2=847$.`,
    R`Factor pairs of $847=7\cdot11^2$ give $n=211,28,16$.`,
    R`Sum $255$.`,
    R`The answer is $\textbf{(A)}\ 255$.`
  ],
  shortcut: R`Multiplying by $4$ to complete the square is the standard move for $n(n+1)$.`,
  traps: [R`Using $n^2$ for the even sum.`, R`Missing a factor pair.`],
  recognize: R`Equations like $m^2-n(n+1)=k$: complete squares and factor a difference of squares.`
},

'2012A23': {
  answer: 'B',
  goal: R`Six people, each with the same number of friends among the group, not nobody and not everybody. We count such friendship networks: labelled regular graphs on $6$ vertices of degree $1,2,3,4$.`,
  tools: [
    { name: 'Complements', fact: R`\text{degree }k\leftrightarrow\text{degree }5-k`, why: R`Swapping friends and non-friends.` },
    { name: 'Perfect matchings', fact: R`5\cdot3\cdot1=15`, why: R`Pair the first person ($5$ ways), the next unpaired ($3$), the last ($1$).` },
    { name: '2-regular graphs', fact: R`\text{a 6-cycle }\left(\tfrac{5!}2=60\right)\text{ or two triangles }\left(\tfrac12\binom63=10\right)`, why: R`Each person has two friends, so the graph is a union of cycles.` }
  ],
  approach: R`Degree $1$ graphs are perfect matchings; degree $4$ are their complements. Degree $2$ graphs are unions of cycles (a hexagon or two triangles); degree $3$ are their complements. Add.`,
  steps: [
    { title: 'Degree 1 and 4',
      explain: R`Perfect matchings: $15$. Complements give degree $4$: another $15$.`,
      check: { q: R`How many perfect matchings on $4$ people?`, opts: [R`3`, R`2`, R`4`, R`6`], ans: 0, why: R`$3\cdot1$.` } },
    { title: 'Degree 2 and 3',
      explain: R`A $6$-cycle: $\tfrac{5!}{2}=60$. Two triangles: $\tfrac12\binom63=10$. Total $70$; complements give $70$ more.`,
      check: { q: R`How many ways to split $6$ people into two groups of $3$?`, opts: [R`10`, R`20`, R`15`, R`6`], ans: 0, why: R`$\tfrac{20}2$.` } },
    { title: 'Total',
      explain: R`$15+15+70+70=170$.`,
      check: { q: R`What is $2(15+70)$?`, opts: [R`170`, R`160`, R`180`, R`85`], ans: 0, why: R`$2\cdot85$.` } }
  ],
  bridge: R`Count regular friendship graphs by degree, using complements.`,
  solution: [
    R`Degree $1$: $15$ matchings; degree $4$: $15$ complements.`,
    R`Degree $2$: $60$ hexagons $+10$ triangle pairs $=70$; degree $3$: $70$.`,
    R`Total $170$.`,
    R`The answer is $\textbf{(B)}\ 170$.`
  ],
  shortcut: R`Complementation halves the casework.`,
  traps: [R`Including degree $0$ or $5$.`, R`Counting the $6$-cycle as $5!$ (double counts direction).`],
  recognize: R`"Everyone has the same number of friends": count regular graphs; use complements and cycle structures.`
},

'2012A24': {
  answer: 'E',
  goal: R`Two quadratic equations in $a\ge b\ge c$ are given. Adding them gives a sum of squared differences, which pins down the gaps between $a,b,c$. Then one equation finds $a$.`,
  tools: [
    { name: 'Sum of squared differences', fact: R`2(a^2+b^2+c^2-ab-bc-ca)=(a-b)^2+(b-c)^2+(c-a)^2`, why: R`Expand the right side.` },
    { name: 'Small integer solutions', fact: R`x^2+xy+y^2=7\Rightarrow(x,y)=(1,2)\text{ or }(2,1)`, why: R`Check small nonnegative values.` }
  ],
  approach: R`Add the equations: $(a-b)^2+(b-c)^2+(c-a)^2=14$. With gaps $x=a-b$, $y=b-c$: $x^2+xy+y^2=7$. Try both gap pairs in the first equation.`,
  steps: [
    { title: 'Add the equations',
      explain: R`Adding: $2a^2+2b^2+2c^2-2ab-2bc-2ca=14$, so the three squared differences sum to $14$, i.e. $x^2+y^2+(x+y)^2=14$, or $x^2+xy+y^2=7$.`,
      check: { q: R`What is $2011+(-1997)$?`, opts: [R`14`, R`4008`, R`-14`, R`28`], ans: 0, why: R`Subtract.` } },
    { title: 'Try the gaps',
      explain: R`$(x,y)=(2,1)$: $b=a-2$, $c=a-3$. First equation: $a^2-(a-2)^2-(a-3)^2+a(a-2)=8a-13=2011$, so $a=253$. $(x,y)=(1,2)$ gives $7a-10=2011$, not an integer solution.`,
      check: { q: R`Solve $8a-13=2011$.`, opts: [R`253`, R`252`, R`254`, R`250`], ans: 0, why: R`$8a=2024$.` } }
  ],
  bridge: R`Add the equations to get the gaps, then substitute into the first equation.`,
  solution: [
    R`Adding: $(a-b)^2+(b-c)^2+(c-a)^2=14$.`,
    R`Gaps $x=a-b$, $y=b-c$ satisfy $x^2+xy+y^2=7$: $(1,2)$ or $(2,1)$.`,
    R`$(2,1)$ gives $8a-13=2011$, $a=253$; $(1,2)$ gives no integer.`,
    R`The answer is $\textbf{(E)}\ 253$.`
  ],
  shortcut: R`When two messy equations have coefficients that sum nicely, add (or subtract) them first.`,
  traps: [R`Trying to solve for $a,b,c$ directly.`, R`Forgetting to check both gap orders.`],
  recognize: R`Symmetric quadratic forms: look for combinations that become sums of squares.`
},

'2012A25': {
  answer: 'D',
  goal: R`Three random reals in $[0,n]$; we want the smallest $n$ with $P(\text{all pairwise gaps}\ge1)>\tfrac12$. The "spread out" region has a neat volume formula.`,
  tools: [
    { name: 'Gap transformation', fact: R`P=\left(\frac{n-2}{n}\right)^3`, why: R`Sort the numbers; subtracting $0,1,2$ from them maps the valid region onto a cube-like region of side $n-2$, scaling volume by $(n-2)^3/n^3$.` },
    { name: 'Cube roots', fact: R`\sqrt[3]{0.5}\approx0.794`, why: R`$0.794^3\approx0.5$.` }
  ],
  approach: R`Use $P=\left(1-\tfrac2n\right)^3$ and solve $\left(1-\tfrac2n\right)^3>\tfrac12$. Check the boundary values.`,
  steps: [
    { title: 'The probability',
      explain: R`For sorted $x<y<z$ with gaps at least $1$, set $y'=y-1$, $z'=z-2$: then $x\le y'\le z'$ in $[0,n-2]$. Volume ratio $\tfrac{(n-2)^3}{n^3}$.`,
      check: { q: R`For $n=4$, what is $\left(\tfrac{n-2}{n}\right)^3$?`, opts: [R`\tfrac18`, R`\tfrac12`, R`\tfrac14`, R`\tfrac{1}{64}`], ans: 0, why: R`$(\tfrac12)^3$.` } },
    { title: 'Solve',
      explain: R`$n=9$: $(\tfrac79)^3=\tfrac{343}{729}<\tfrac12$. $n=10$: $(0.8)^3=0.512>\tfrac12$. So $n=10$.`,
      check: { q: R`What is $0.8^3$?`, opts: [R`0.512`, R`0.64`, R`0.48`, R`0.8`], ans: 0, why: R`$0.64\cdot0.8$.` } }
  ],
  bridge: R`Use $P=(1-\tfrac2n)^3$ and test values near the cube-root bound.`,
  solution: [
    R`Shifting sorted values gives $P=\left(\tfrac{n-2}n\right)^3$.`,
    R`$n=9$: $0.47$; $n=10$: $0.512$.`,
    R`Smallest $n=10$.`,
    R`The answer is $\textbf{(D)}\ 10$.`
  ],
  shortcut: R`$(1-\tfrac2n)^3>\tfrac12$ means $\tfrac2n<0.206$, so $n>9.7$.`,
  traps: [R`Using $\left(\tfrac{n-1}{n}\right)^3$.`, R`Picking $n=9$ by rounding.`],
  recognize: R`"No two within distance $d$" for random points on an interval: shift sorted values to get $\left(\tfrac{n-(k-1)d}{n}\right)^k$.`
}

};
