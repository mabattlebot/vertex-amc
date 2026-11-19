// Hand-written lessons: 2014 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2014A16': {
  answer: 'E',
  goal: R`In a $1\times2$ rectangle (width $AB=1$, height $BC=2$), the figure draws segments from the top corners $A,B$ to the bottom midpoint $F$, and from the bottom corners $D,C$ to the centre $H$. The shaded region is the kite enclosed by these four segments. We want its area.`,
  tools: [
    { name: 'Coordinates', fact: R`A(0,2),B(1,2),C(1,0),D(0,0),F(\tfrac12,0),H(\tfrac12,1)`, why: R`Midpoints are averages of coordinates.` },
    { name: 'Intersecting two lines', fact: R`y=2-4x\ \text{and}\ y=2x\Rightarrow x=\tfrac13`, why: R`Set the two expressions equal.` },
    { name: 'Kite area', fact: R`\tfrac12d_1d_2`, why: R`Perpendicular diagonals split it into triangles.` }
  ],
  approach: R`Put the rectangle in coordinates. The kite has vertices $H$ and $F$ on the vertical centre line, and two side vertices where $AF$ meets $DH$ and $BF$ meets $CH$. Its diagonals are $HF$ (vertical) and the segment between the side vertices (horizontal).`,
  steps: [
    { title: 'Lines',
      explain: R`$AF$: from $(0,2)$ to $(\tfrac12,0)$, $y=2-4x$. $DH$: $y=2x$. By symmetry $BF$ and $CH$ are mirror images in $x=\tfrac12$.`,
      check: { q: R`What is the slope of the line from $(0,0)$ to $(\tfrac12,1)$?`, opts: [R`2`, R`\tfrac12`, R`1`, R`-2`], ans: 0, why: R`$\tfrac{1}{1/2}$.` } },
    { title: 'Side vertices',
      explain: R`$2-4x=2x$ gives $x=\tfrac13$, $y=\tfrac23$. The mirror vertex is $(\tfrac23,\tfrac23)$. So the horizontal diagonal is $\tfrac13$.`,
      check: { q: R`Solve $2-4x=2x$.`, opts: [R`\tfrac13`, R`\tfrac12`, R`\tfrac23`, R`\tfrac14`], ans: 0, why: R`$6x=2$.` } },
    { title: 'Area',
      explain: R`$HF=1$ (from $y=0$ to $y=1$). Area $=\tfrac12\cdot1\cdot\tfrac13=\tfrac16$.`,
      check: { q: R`A kite has diagonals $1$ and $\tfrac13$. Its area?`, opts: [R`\tfrac16`, R`\tfrac13`, R`\tfrac12`, R`\tfrac1{12}`], ans: 0, why: R`$\tfrac12\cdot\tfrac13$.` } }
  ],
  bridge: R`Set up coordinates, find the kite's side vertices, and use half the product of the diagonals.`,
  solution: [
    R`With $D$ at the origin, $AF$ is $y=2-4x$ and $DH$ is $y=2x$; they meet at $(\tfrac13,\tfrac23)$.`,
    R`By symmetry the other side vertex is $(\tfrac23,\tfrac23)$; the kite's diagonals are $HF=1$ and $\tfrac13$.`,
    R`Area $\tfrac12\cdot1\cdot\tfrac13=\tfrac16$.`,
    R`The answer is $\textbf{(E)}\ \tfrac16$.`
  ],
  shortcut: R`Symmetry about the vertical centre line halves the work: find one side vertex only.`,
  traps: [R`Using $G$ or $E$ as vertices of the kite.`, R`Mixing up width and height ($AB=1$ is the short side).`],
  recognize: R`Shaded regions formed by lines from corners to midpoints: coordinates and symmetry give the vertices; kites use $\tfrac12d_1d_2$.`
},

'2014A17': {
  answer: 'D',
  goal: R`Rolling three dice, we want the probability that two of them add up to the third. Count ordered outcomes by choosing which die is the sum.`,
  tools: [
    { name: 'Ordered sums of two dice', fact: R`\#\{(a,b):a+b=s\}=s-1\ (2\le s\le7)`, why: R`$a$ ranges from $1$ to $s-1$.` },
    { name: 'No double counting', fact: R`a+b=c\text{ and }a+c=b\text{ cannot both hold}`, why: R`They would force $a=0$.` }
  ],
  approach: R`Choose which die shows the sum ($3$ ways). The other two must add to at most $6$. Count ordered pairs with sum $2$ to $6$, multiply by $3$, and divide by $216$.`,
  steps: [
    { title: 'Pairs with small sums',
      explain: R`Sums $2,3,4,5,6$ have $1,2,3,4,5$ ordered pairs: $15$ in all.`,
      check: { q: R`How many ordered pairs of dice sum to $5$?`, opts: [R`4`, R`5`, R`3`, R`6`], ans: 0, why: R`$(1,4),(2,3),(3,2),(4,1)$.` } },
    { title: 'Count and divide',
      explain: R`$3\cdot15=45$ favourable outcomes; no outcome is counted twice. Probability $\tfrac{45}{216}=\tfrac{5}{24}$.`,
      check: { q: R`Simplify $\tfrac{45}{216}$.`, opts: [R`\tfrac5{24}`, R`\tfrac{15}{72}\cdot2`, R`\tfrac{1}{5}`, R`\tfrac{5}{27}`], ans: 0, why: R`Divide by $9$.` } }
  ],
  bridge: R`Pick the "sum" die, count pairs below $7$, and divide by $216$.`,
  solution: [
    R`Choose the die that equals the sum of the other two: $3$ ways.`,
    R`The other two form an ordered pair with sum at most $6$: $15$ pairs.`,
    R`$45$ outcomes, no overlaps; probability $\tfrac{45}{216}=\tfrac5{24}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac5{24}$.`
  ],
  shortcut: R`Check overlaps quickly: two different "sum" dice would require a zero.`,
  traps: [R`Using unordered pairs.`, R`Allowing sums of $7$ or more.`],
  recognize: R`Dice relations like "one equals the sum of the others": choose roles, count ordered pairs, check for overlaps.`
},

'2014A18': {
  answer: 'B',
  goal: R`A square's vertices have $y$-coordinates $0,1,4,5$. We want its area. A square's consecutive sides are perpendicular vectors $(a,b)$ and $(-b,a)$, which constrains the $y$-values.`,
  tools: [
    { name: 'Rotating a vector $90^\circ$', fact: R`(a,b)\to(-b,a)`, why: R`Perpendicular and the same length.` },
    { name: 'Square vertices', fact: R`P,\ P+(a,b),\ P+(a-b,b+a),\ P+(-b,a)`, why: R`Walk along the two side vectors.` }
  ],
  approach: R`Starting at the vertex with $y=0$, the other $y$-coordinates are $b$, $a+b$, and $a$. These must be $\{1,4,5\}$, so $\{a,b\}=\{1,4\}$, and the area is $a^2+b^2$.`,
  steps: [
    { title: 'Match $y$-coordinates',
      explain: R`The $y$-values are $0,b,a+b,a$. So $a+b=5$ and $\{a,b\}=\{1,4\}$.`,
      check: { q: R`If $y$-values are $0,b,a+b,a$ and equal $\{0,1,4,5\}$, what is $a+b$?`, opts: [R`5`, R`4`, R`1`, R`9`], ans: 0, why: R`It is the largest.` } },
    { title: 'Area',
      explain: R`Side length squared is $1^2+4^2=17$.`,
      check: { q: R`What is $1^2+4^2$?`, opts: [R`17`, R`25`, R`16`, R`5`], ans: 0, why: R`$1+16$.` } }
  ],
  bridge: R`Write the vertices with perpendicular side vectors and match the $y$-values.`,
  solution: [
    R`With side vectors $(a,b)$ and $(-b,a)$, the $y$-coordinates are $0,b,a+b,a$.`,
    R`Matching $\{0,1,4,5\}$ gives $\{a,b\}=\{1,4\}$.`,
    R`Area $=a^2+b^2=17$.`,
    R`The answer is $\textbf{(B)}\ 17$.`
  ],
  shortcut: R`A tilted square's side vector has components equal to the two "gaps" you see: here $1$ and $4$.`,
  traps: [R`Assuming the square is axis-aligned (area $25$).`, R`Using side $5$.`],
  recognize: R`Squares with given coordinate lists: use perpendicular side vectors $(a,b),(-b,a)$.`
},

'2014A19': {
  answer: 'A',
  goal: R`Cubes of edges $4,3,2,1$ are stacked from the bottom up, lined up at one vertical corner edge. $X$ is the top corner of the small cube on that shared edge, and $Y$ is the bottom corner of the big cube diagonally opposite it. We want the length of $XY$ inside the edge-$3$ cube.`,
  tools: [
    { name: 'Space diagonal length', fact: R`\sqrt{\Delta x^2+\Delta y^2+\Delta z^2}`, why: R`Pythagoras in three dimensions.` },
    { name: 'Proportional pieces of a segment', fact: R`\text{length in a height range}=\tfrac{\text{height range}}{\text{total height}}\cdot XY`, why: R`Along a straight segment, length is proportional to the change in height.` }
  ],
  approach: R`Place the shared corner edge on the $z$-axis: $X=(0,0,10)$ and $Y=(4,4,0)$. The edge-$3$ cube occupies heights $4$ to $7$. Check that the segment stays inside that cube for the whole height range, then take $\tfrac{3}{10}$ of $XY$.`,
  steps: [
    { title: 'Length of $XY$',
      explain: R`$XY=\sqrt{4^2+4^2+10^2}=\sqrt{132}=2\sqrt{33}$.`,
      check: { q: R`What is $\sqrt{132}$?`, opts: [R`2\sqrt{33}`, R`4\sqrt{33}`, R`11\sqrt{12}`, R`\sqrt{66}`], ans: 0, why: R`$132=4\cdot33$.` } },
    { title: 'Inside the edge-3 cube',
      explain: R`At height $z$ the point is $\left(\tfrac{4(10-z)}{10},\tfrac{4(10-z)}{10},z\right)$. For $4\le z\le7$, the $x,y$ values run from $1.2$ to $2.4$, within $[0,3]$. So the segment is inside the cube for the whole height range of $3$.`,
      check: { q: R`At $z=4$, what is $x=\tfrac{4(10-z)}{10}$?`, opts: [R`2.4`, R`1.2`, R`4`, R`1.6`], ans: 0, why: R`$\tfrac{24}{10}$.` } },
    { title: 'Proportion',
      explain: R`$\tfrac{3}{10}\cdot2\sqrt{33}=\tfrac{3\sqrt{33}}{5}$.`,
      check: { q: R`What is $\tfrac3{10}\cdot2\sqrt{33}$?`, opts: [R`\tfrac{3\sqrt{33}}{5}`, R`\tfrac{6\sqrt{33}}{5}`, R`\tfrac{\sqrt{33}}{5}`, R`3\sqrt{33}`], ans: 0, why: R`$\tfrac{6}{10}=\tfrac35$.` } }
  ],
  bridge: R`Use coordinates, confirm the segment crosses the whole edge-$3$ cube, and take the height fraction.`,
  solution: [
    R`$X=(0,0,10)$, $Y=(4,4,0)$, $XY=2\sqrt{33}$.`,
    R`The edge-$3$ cube spans heights $4$ to $7$, and the segment stays inside it there.`,
    R`Its share is $\tfrac{3}{10}$ of $XY$: $\tfrac{3\sqrt{33}}5$.`,
    R`The answer is $\textbf{(A)}$.`
  ],
  shortcut: R`Length along a straight segment is proportional to any one coordinate's change.`,
  traps: [R`Taking the space diagonal of the edge-$3$ cube ($3\sqrt3$).`, R`Forgetting to check the segment does not exit the cube's side.`],
  recognize: R`Portion of a segment inside a slab or cube: parametrise by one coordinate and use proportions.`
},

'2014A20': {
  answer: 'D',
  goal: R`$8\times\underbrace{88\cdots8}_{k}$ has digit sum $1000$. We need $k$. Compute small cases to find the digit pattern of the product.`,
  tools: [
    { name: 'Pattern from small cases', fact: R`8\cdot8=64,\ 8\cdot88=704,\ 8\cdot888=7104,\ 8\cdot8888=71104`, why: R`Each extra $8$ inserts one more $1$.` },
    { name: 'Digit sum of the pattern', fact: R`7+(k-2)\cdot1+0+4=k+9`, why: R`One $7$, $k-2$ ones, then $0$ and $4$.` }
  ],
  approach: R`Multiply a few small cases to see the structure "$7$, then $k-2$ ones, then $04$". Its digit sum is $k+9$; set that equal to $1000$.`,
  steps: [
    { title: 'Find the pattern',
      explain: R`$8\cdot88\cdots8=\tfrac{64}{9}(10^k-1)$, and the small cases show $711\cdots104$ with $k-2$ ones.`,
      check: { q: R`What is $8\cdot88888$?`, opts: [R`711104`, R`711112`, R`701104`, R`7111104`], ans: 0, why: R`$5$ digits: $7$, three $1$s, $04$.` } },
    { title: 'Solve',
      explain: R`$k+9=1000$ gives $k=991$.`,
      check: { q: R`If the digit sum is $k+9$, what $k$ gives $1000$?`, opts: [R`991`, R`1009`, R`999`, R`901`], ans: 0, why: R`$1000-9$.` } }
  ],
  bridge: R`Find the digit pattern of the product and solve $k+9=1000$.`,
  solution: [
    R`$8\times\underbrace{8\cdots8}_k=7\underbrace{1\cdots1}_{k-2}04$.`,
    R`Digit sum $7+(k-2)+4=k+9$.`,
    R`$k+9=1000\Rightarrow k=991$.`,
    R`The answer is $\textbf{(D)}\ 991$.`
  ],
  shortcut: R`Try $k=4$ and $k=5$ to confirm the pattern before generalising.`,
  traps: [R`Assuming the digit sum is $8\cdot8k$.`, R`Miscounting the ones as $k$ or $k-1$.`],
  recognize: R`Products of repdigits: compute small cases to reveal a stable digit pattern.`
},

'2014A21': {
  answer: 'E',
  goal: R`The lines $y=ax+5$ and $y=3x+b$ ($a,b$ positive integers) have the same $x$-intercept. We sum all possible such intercepts.`,
  tools: [
    { name: 'x-intercept', fact: R`y=mx+c\text{ meets }y=0\text{ at }x=-\tfrac cm`, why: R`Set $y=0$.` },
    { name: 'Integer factor pairs', fact: R`ab=15\Rightarrow(a,b)\in\{(1,15),(3,5),(5,3),(15,1)\}`, why: R`Positive divisors of $15$.` }
  ],
  approach: R`Set $-\tfrac5a=-\tfrac b3$, so $ab=15$. List the factor pairs and add the intercepts $-\tfrac5a$.`,
  steps: [
    { title: 'Equal intercepts',
      explain: R`$\tfrac5a=\tfrac b3$ gives $ab=15$.`,
      check: { q: R`Where does $y=5x+10$ cross the $x$-axis?`, opts: [R`x=-2`, R`x=2`, R`x=-10`, R`x=-\tfrac12`], ans: 0, why: R`$-\tfrac{10}5$.` } },
    { title: 'Sum',
      explain: R`$a=1,3,5,15$ give $x=-5,-\tfrac53,-1,-\tfrac13$. Sum $-8$.`,
      check: { q: R`What is $-5-\tfrac53-1-\tfrac13$?`, opts: [R`-8`, R`-7`, R`-9`, R`-6`], ans: 0, why: R`$-6-2$.` } }
  ],
  bridge: R`Set intercepts equal to get $ab=15$, list pairs, and add.`,
  solution: [
    R`Intercepts $-\tfrac5a$ and $-\tfrac b3$ are equal iff $ab=15$.`,
    R`$a\in\{1,3,5,15\}$.`,
    R`Sum of $-\tfrac5a$: $-8$.`,
    R`The answer is $\textbf{(E)}\ -8$.`
  ],
  shortcut: R`$\sum\tfrac5a=5\cdot\tfrac{\sigma(15)}{15}=5\cdot\tfrac{24}{15}=8$.`,
  traps: [R`Summing $a$ values instead of intercepts.`, R`Forgetting $(15,1)$.`],
  recognize: R`Equal intercepts or equal ratios with integer parameters: cross-multiply to a product and list factor pairs.`
},

'2014A22': {
  answer: 'E',
  goal: R`In a $20\times10$ rectangle, $E$ on $CD$ makes $\angle CBE=15^\circ$. We want $AE$. Find $CE$ with $\tan15^\circ$, then $DE$, then Pythagoras.`,
  tools: [
    { name: 'tan 15°', fact: R`\tan15^\circ=2-\sqrt3`, why: R`$\tan(45^\circ-30^\circ)=\tfrac{1-\frac1{\sqrt3}}{1+\frac1{\sqrt3}}$.` },
    { name: 'Pythagoras', fact: R`AE^2=AD^2+DE^2`, why: R`Right angle at $D$.` }
  ],
  approach: R`In right triangle $BCE$, $CE=BC\tan15^\circ$. Then $DE=20-CE$, and $AE=\sqrt{AD^2+DE^2}$.`,
  steps: [
    { title: 'Find $CE$',
      explain: R`$CE=10(2-\sqrt3)=20-10\sqrt3$.`,
      check: { q: R`What is $\tan15^\circ$?`, opts: [R`2-\sqrt3`, R`2+\sqrt3`, R`\tfrac{\sqrt3}3`, R`\sqrt3-1`], ans: 0, why: R`Subtraction formula.` } },
    { title: 'Find $DE$ and $AE$',
      explain: R`$DE=20-CE=10\sqrt3$. $AE=\sqrt{10^2+(10\sqrt3)^2}=\sqrt{400}=20$.`,
      check: { q: R`What is $\sqrt{100+300}$?`, opts: [R`20`, R`10\sqrt3`, R`\sqrt{300}`, R`10\sqrt4`], ans: 0, why: R`$\sqrt{400}$.` } }
  ],
  bridge: R`Use $\tan15^\circ$ for $CE$, subtract for $DE$, then Pythagoras.`,
  solution: [
    R`$CE=10\tan15^\circ=20-10\sqrt3$.`,
    R`$DE=10\sqrt3$.`,
    R`$AE=\sqrt{100+300}=20$.`,
    R`The answer is $\textbf{(E)}\ 20$.`
  ],
  shortcut: R`Triangle $ADE$ is $30$-$60$-$90$ ($AD=10$, $DE=10\sqrt3$), so $AE=20$.`,
  traps: [R`Using $\tan15^\circ\approx0.25$ and estimating.`, R`Measuring $DE$ as $CE$.`],
  recognize: R`Angles like $15^\circ$ and $75^\circ$: use $\tan15^\circ=2-\sqrt3$; results often form $30$-$60$-$90$ triangles.`
},

'2014A23': {
  answer: 'C',
  goal: R`A $\sqrt3\times1$ sheet is folded along a line from one third-mark on the bottom edge to the two-thirds mark on the top edge. The new shape's area is the original minus the overlapping double layer. Find the overlap.`,
  tools: [
    { name: 'Fold line angle', fact: R`\text{direction }(\tfrac{\sqrt3}{3},1)\Rightarrow60^\circ`, why: R`Slope $\sqrt3$.` },
    { name: 'Reflection', fact: R`\text{Folding reflects one part across the fold line}`, why: R`Lengths and angles are preserved.` },
    { name: 'Area after folding', fact: R`B=A-(\text{overlap area})`, why: R`The overlap is counted once in the new shape.` }
  ],
  approach: R`Use coordinates $[0,\sqrt3]\times[0,1]$ with fold from $P(\tfrac{\sqrt3}3,0)$ to $Q(\tfrac{2\sqrt3}3,1)$. Reflect the bottom-right corner $(\sqrt3,0)$ across the fold: it lands exactly on the top-left corner $D=(0,1)$. The overlap is triangle $PDQ$.`,
  steps: [
    { title: 'Reflect the corner',
      explain: R`Relative to $P$, the corner $(\sqrt3,0)$ is the vector $(\tfrac{2\sqrt3}3,0)$ at angle $0^\circ$. Reflecting across the $60^\circ$ line sends it to angle $120^\circ$: $(-\tfrac{\sqrt3}3,1)$. Adding $P$ gives $(0,1)=D$.`,
      check: { q: R`Reflecting direction $0^\circ$ across a line at $60^\circ$ gives which direction?`, opts: [R`120^\circ`, R`60^\circ`, R`180^\circ`, R`90^\circ`], ans: 0, why: R`$2\cdot60^\circ-0^\circ$.` } },
    { title: 'The overlap',
      explain: R`The folded part covers triangle $PDQ$ on the left part (the rest of the folded flap sticks out above the paper). Its area is $\tfrac12\cdot DQ\cdot1=\tfrac12\cdot\tfrac{2\sqrt3}3=\tfrac{\sqrt3}3=\tfrac A3$.`,
      check: { q: R`What is $\tfrac12\cdot\tfrac{2\sqrt3}{3}\cdot1$?`, opts: [R`\tfrac{\sqrt3}3`, R`\tfrac{2\sqrt3}3`, R`\tfrac{\sqrt3}6`, R`\sqrt3`], ans: 0, why: R`Multiply.` } },
    { title: 'Ratio',
      explain: R`$B=A-\tfrac A3=\tfrac23A$.`,
      check: { q: R`What is $1-\tfrac13$?`, opts: [R`\tfrac23`, R`\tfrac13`, R`\tfrac34`, R`\tfrac12`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Reflect one corner across the fold to find the overlapping triangle.`,
  solution: [
    R`The fold runs at $60^\circ$ from $P(\tfrac{\sqrt3}3,0)$ to $Q(\tfrac{2\sqrt3}3,1)$.`,
    R`The bottom-right corner reflects onto $D=(0,1)$, so the overlap is triangle $PDQ$ with area $\tfrac{\sqrt3}3=\tfrac A3$.`,
    R`$B=\tfrac23A$.`,
    R`The answer is $\textbf{(C)}\ \tfrac23$.`
  ],
  shortcut: R`The fold passes through the centre of the rectangle, and the $60^\circ$ angle makes the reflected corner land on a corner.`,
  traps: [R`Assuming the whole right part overlaps.`, R`Forgetting that part of the flap sticks out past the edge.`],
  recognize: R`Folding problems: the folded shape's area is the original minus the overlap; reflect key corners to find the overlap.`
},

'2014A24': {
  answer: 'A',
  goal: R`The sequence lists $n+3$ numbers then skips $n$, for $n=1,2,\ldots$. We want the $500{,}000$th listed number. Track how many numbers are listed and how far along we are after $n$ rounds.`,
  tools: [
    { name: 'Listed after $n$ rounds', fact: R`\sum_{k=1}^n(k+3)=\frac{n(n+7)}{2}`, why: R`Arithmetic series.` },
    { name: 'Position after $n$ rounds', fact: R`\sum_{k=1}^n(2k+3)=n^2+4n`, why: R`Listed plus skipped.` }
  ],
  approach: R`Find the largest $n$ with $\tfrac{n(n+7)}2\le500000$; the target is inside round $n+1$. The last number passed after $n$ rounds is $n^2+4n$; add the remaining count.`,
  steps: [
    { title: 'Find the round',
      explain: R`$\tfrac{n(n+7)}2\approx500000$ gives $n\approx996$. Check: $\tfrac{996\cdot1003}{2}=499494$, and round $997$ lists $1000$ numbers, enough to reach $500000$.`,
      check: { q: R`What is $\tfrac{996\cdot1003}{2}$?`, opts: [R`499494`, R`499500`, R`500000`, R`498996`], ans: 0, why: R`$498\cdot1003$.` } },
    { title: 'Locate the number',
      explain: R`After $996$ rounds we have passed $996^2+4\cdot996=996000$. We need $500000-499494=506$ more listed numbers: $996000+506=996506$.`,
      check: { q: R`What is $996^2+4\cdot996$?`, opts: [R`996000`, R`992016`, R`995000`, R`997000`], ans: 0, why: R`$996\cdot1000$.` } }
  ],
  bridge: R`Find the round containing the target, the starting point of that round, and count in.`,
  solution: [
    R`After $n$ rounds, $\tfrac{n(n+7)}2$ numbers are listed and we are at $n^2+4n$.`,
    R`$n=996$: $499494$ listed, at position $996000$.`,
    R`The next $506$ listed numbers end at $996506$.`,
    R`The answer is $\textbf{(A)}\ 996{,}506$.`
  ],
  shortcut: R`$n^2+4n=n(n+4)$ is a neat round number at $n=996$.`,
  traps: [R`Mixing up listed and skipped counts.`, R`Off-by-one when adding $506$.`],
  recognize: R`Sequences built from growing blocks: sum the block sizes to find which block contains the target.`
},

'2014A25': {
  answer: 'B',
  goal: R`Between consecutive powers of $5$ there are either $2$ or $3$ powers of $2$. The condition $5^n<2^m<2^{m+2}<5^{n+1}$ says the interval contains three consecutive powers of $2$. Count intervals with three.`,
  tools: [
    { name: 'Powers of 2 between powers of 5', fact: R`\log_25\approx2.32\Rightarrow2\text{ or }3\text{ per interval}`, why: R`Each interval multiplies by $5$, which is between $2^2$ and $2^3$.` },
    { name: 'Counting', fact: R`2\cdot(\#\text{intervals})+(\#\text{with }3)=\#\text{powers of }2`, why: R`Each interval has at least $2$.` }
  ],
  approach: R`The $867$ intervals $(5^n,5^{n+1})$ for $n=0,\ldots,866$ contain the powers $2^1,\ldots,2^{2013}$ (since $5^{867}$ is between $2^{2013}$ and $2^{2014}$). Each holds $2$ or $3$; let $x$ hold $3$. Then $2\cdot867+x=2013$.`,
  steps: [
    { title: 'Each interval holds 2 or 3',
      explain: R`From $5^n$ to $5^{n+1}$ is a factor of $5$, between $4$ and $8$, so it contains $2$ or $3$ powers of $2$. A valid $m$ exists exactly when it contains $3$, and then $m$ is unique.`,
      check: { q: R`How many powers of $2$ lie strictly between $25$ and $125$?`, opts: [R`2`, R`3`, R`1`, R`4`], ans: 0, why: R`$32,64$.` } },
    { title: 'Count',
      explain: R`$867$ intervals hold $2013$ powers of $2$: $1734+x=2013$, $x=279$.`,
      check: { q: R`What is $2013-2\cdot867$?`, opts: [R`279`, R`280`, R`278`, R`297`], ans: 0, why: R`$2013-1734$.` } }
  ],
  bridge: R`Count intervals with three powers of $2$ using the total count.`,
  solution: [
    R`Each interval $(5^n,5^{n+1})$ contains $2$ or $3$ powers of $2$; a valid $(m,n)$ needs $3$.`,
    R`The $867$ intervals for $n=0,\ldots,866$ contain $2^1,\ldots,2^{2013}$.`,
    R`$2\cdot867+x=2013$, so $x=279$.`,
    R`The answer is $\textbf{(B)}\ 279$.`
  ],
  shortcut: R`Count the "extras" above the guaranteed $2$ per interval.`,
  traps: [R`Using $2014$ powers.`, R`Thinking each interval gives several $m$.`],
  recognize: R`Interleaving powers of two bases: each interval holds $\lfloor\log\rfloor$ or $\lceil\log\rceil$; total counts give how many of each.`
}

};
