// Hand-written lessons: 2020 AMC 10A, Difficulty 4 and 5 (problems 16-25).
// Build with: node scripts/build-lessons.js   (checks every answer against the answer key)
const R = String.raw;
module.exports = {

'2020A16': {
  answer: 'B',
  goal: R`We pick a random point in a huge $2020\times2020$ square and want the chance that it is within distance $d$ of some lattice point to be exactly $\tfrac12$. The size $2020$ is a distraction: the real question is what fraction of a single $1\times1$ cell lies within $d$ of a corner of that cell.`,
  tools: [
    { name: 'Probability as area', fact: R`P(\text{point lands in region }A)=\dfrac{\text{area of }A}{\text{total area}}`, why: R`A point chosen uniformly at random is equally likely to be anywhere, so probability is proportion of area.` },
    { name: 'Periodicity (one cell is enough)', fact: R`\text{The pattern of lattice points repeats in every unit square.}`, why: R`The big square is tiled by $2020^2$ identical unit cells, and each cell looks exactly the same relative to its four corners. So the fraction for one cell equals the fraction for the whole square.` },
    { name: 'Area of a circle and of quarter circles', fact: R`\text{Area}=\pi d^2;\quad 4\times\tfrac14\pi d^2=\pi d^2`, why: R`Inside one cell, the points within $d$ of a corner form four quarter-discs of radius $d$, one at each corner. If $d<\tfrac12$ they do not overlap, and together they make one full disc.` },
    { name: 'Estimating with $\pi$', fact: R`\tfrac{1}{2\pi}\approx\tfrac{1}{6.28}\approx0.159,\quad 0.4^2=0.16`, why: R`Squaring the answer choices is faster than taking a square root of $\tfrac1{2\pi}$.` }
  ],
  approach: R`Do not try to think about the whole $2020\times2020$ square; that number is there to scare you. Look at one unit square and ask: which points of it are close to a lattice point? Only its four corners can be close, so the region is four quarter-circles. Before writing an equation, check that the quarter-circles do not overlap for the sizes in the answer choices (they would overlap only if $d>\tfrac12$). Then set the area equal to $\tfrac12$ and estimate.`,
  steps: [
    { title: 'Reduce to one unit square',
      explain: R`The lattice points form a grid, and every unit square of the grid is an exact copy of every other one. A point in the big square lies in some unit cell, and its distance to the nearest lattice point depends only on where it sits inside that cell. So the probability over the big square is the same as the probability for a point chosen at random in one unit cell. This turns a $2020^2$-sized problem into a $1$-sized one, and the denominator of our probability becomes just $1$.`,
      check: { q: R`A point is chosen at random in a $10\times10$ square with corners on lattice points. Which region has the same probability of "within $0.2$ of a lattice point"?`, opts: [R`Any single $1\times1$ cell of the grid`, R`Only the corner cells`, R`Only the centre cell`, R`None: the answer depends on the size $10$`], ans: 0, why: R`Every cell is identical relative to its corners, so one cell already gives the full answer.` } },
    { title: 'Describe the close region in a cell',
      explain: R`Inside a unit cell, a point can only be within distance $d<\tfrac12$ of the cell's own four corners: any other lattice point is at least $1$ away. Around each corner the close points form a quarter of a disc of radius $d$. When $d<\tfrac12$ the quarter-discs do not reach each other, because neighbouring corners are $1$ apart. Four quarter-discs make one whole disc, so the close region has area $\pi d^2$.`,
      check: { q: R`In a unit cell with $d=0.3$, what is the area of the points within $d$ of some corner?`, opts: [R`0.09\pi`, R`0.36\pi`, R`0.0225\pi`, R`0.3\pi`], ans: 0, why: R`Four quarter-discs of radius $0.3$ make one disc: $\pi(0.3)^2=0.09\pi$.` } },
    { title: 'Set up the equation and estimate',
      explain: R`The probability is $\dfrac{\pi d^2}{1}$, and we need it to equal $\tfrac12$. So $d^2=\dfrac{1}{2\pi}$. Rather than computing a square root, compare with the choices: $\tfrac1{2\pi}\approx0.159$. Squaring the choices gives $0.09,\,0.16,\,0.25,\ldots$, and $0.16=0.4^2$ is extremely close. Finally confirm the assumption: $0.4<\tfrac12$, so the quarter-discs really do not overlap and the formula was valid.`,
      check: { q: R`If $\pi d^2=\tfrac14$, which value is $d$ closest to?`, opts: [R`0.28`, R`0.18`, R`0.40`, R`0.50`], ans: 0, why: R`$d^2=\tfrac1{4\pi}\approx0.0796$, and $0.28^2=0.0784$.` } }
  ],
  bridge: R`Work in one unit cell, find the area within $d$ of its corners, set it equal to $\tfrac12$, and compare $d^2$ with the squares of the choices.`,
  solution: [
    R`By symmetry the probability is the same as for a random point in a single unit square, whose area is $1$.`,
    R`A point of the unit square is within $d$ of a lattice point exactly when it is within $d$ of one of the square's four corners (other lattice points are at least $1$ away).`,
    R`For $d<\tfrac12$ these regions are four non-overlapping quarter-discs, total area $\pi d^2$.`,
    R`Setting $\pi d^2=\tfrac12$ gives $d^2=\tfrac1{2\pi}\approx0.159$.`,
    R`Since $0.4^2=0.16$, $d\approx0.4$ to the nearest tenth, which also satisfies $d<\tfrac12$. The answer is $\textbf{(B)}\ 0.4$.`
  ],
  shortcut: R`Square the answer choices instead of taking $\sqrt{1/(2\pi)}$: only $0.4^2=0.16$ is near $0.159$.`,
  traps: [R`Using the whole square: $\pi d^2\cdot(\text{number of lattice points})/2020^2$ works too, but it is easy to miscount the lattice points on the edges. One cell avoids that.`, R`Forgetting that the formula $\pi d^2$ assumes the quarter-discs do not overlap ($d<\tfrac12$); always check.`],
  recognize: R`A random point in a large region with a repeating pattern (lattice points, tiles, a grid of circles) is a signal to study one repeating cell. Probability for a continuous random point is always a ratio of areas.`
},

'2020A17': {
  answer: 'E',
  goal: R`$P(x)$ is a product of $100$ factors $(x-k^2)$. We need to count the integers $n$ where this product is zero or negative. A product is negative exactly when an odd number of its factors are negative, so the question is really about counting negative factors as $n$ moves along the number line.`,
  tools: [
    { name: 'Sign of a product', fact: R`\text{A product of nonzero numbers is negative} \iff \text{an odd number of the factors are negative.}`, why: R`Each negative factor flips the sign once; two flips cancel.` },
    { name: 'Zeros of a factored polynomial', fact: R`P(n)=0 \iff n=k^2\text{ for some }1\le k\le100`, why: R`A product is zero exactly when one factor is zero.` },
    { name: 'Integers strictly between consecutive squares', fact: R`\#\{n: k^2<n<(k+1)^2\}=(k+1)^2-k^2-1=2k`, why: R`There are $(k+1)^2-k^2=2k+1$ steps from $k^2$ to $(k+1)^2$, and the integers strictly inside number one less.` },
    { name: 'Sum of the first $m$ odd numbers', fact: R`1+3+5+\cdots+(2m-1)=m^2`, why: R`Pair the first and last terms: each pair sums to $2m$, and there are $\tfrac m2$ pairs.` }
  ],
  approach: R`Do not try to evaluate $P(n)$; it is astronomically large. Instead track only its sign. Mark the $100$ zeros $1,4,9,\ldots,10000$ on a number line. Between two consecutive zeros the sign cannot change, so decide the sign on each gap by counting how many factors are negative there. The zeros themselves are already included in "$\le0$", so count them separately.`,
  steps: [
    { title: 'Count the zeros',
      explain: R`$P(n)=0$ exactly when $n$ is one of $1^2,2^2,\ldots,100^2$. That is $100$ integers, and they all satisfy $P(n)\le0$. Everything else depends on the sign of $P(n)$ at non-square integers.`,
      check: { q: R`How many integers $n$ make $Q(n)=(n-1)(n-4)(n-9)(n-16)$ equal to $0$?`, opts: [R`4`, R`16`, R`3`, R`0`], ans: 0, why: R`One zero per factor: $n=1,4,9,16$.` } },
    { title: 'Find the sign between two squares',
      explain: R`Take an integer $n$ with $k^2<n<(k+1)^2$. Then $n-j^2>0$ for $j\le k$ and $n-j^2<0$ for $j\ge k+1$. So exactly $100-k$ factors are negative. The product is negative when $100-k$ is odd, which happens when $k$ is odd. For $n<1$ all $100$ factors are negative (even count, positive), and for $n>10000$ none are (positive).`,
      check: { q: R`For $Q(n)=(n-1)(n-4)(n-9)(n-16)$, what is the sign of $Q(6)$?`, opts: [R`\text{positive}`, R`\text{negative}`, R`\text{zero}`, R`\text{cannot tell}`], ans: 0, why: R`At $n=6$ the factors $n-9$ and $n-16$ are negative: two negatives, so positive.` } },
    { title: 'Count the negative gaps',
      explain: R`The gap between $k^2$ and $(k+1)^2$ contains $2k$ integers. We need the gaps with $k$ odd: $k=1,3,5,\ldots,99$. Their total is $2(1+3+5+\cdots+99)=2\cdot50^2=5000$, using the sum of the first $50$ odd numbers.`,
      check: { q: R`What is $2(1+3+5+\cdots+19)$?`, opts: [R`200`, R`100`, R`190`, R`400`], ans: 0, why: R`$1+3+\cdots+19$ is the sum of the first $10$ odd numbers, $10^2=100$; doubled, $200$.` } }
  ],
  bridge: R`Add the integers where $P$ is zero to the integers where it is negative, using the sign rule on each gap between squares.`,
  solution: [
    R`$P(n)=0$ for the $100$ perfect squares $n=1^2,\ldots,100^2$.`,
    R`If $k^2<n<(k+1)^2$, the negative factors are $n-j^2$ for $j=k+1,\ldots,100$: that is $100-k$ of them, so $P(n)<0$ exactly when $k$ is odd.`,
    R`For $n<1$ there are $100$ negative factors and for $n>100^2$ there are none, so $P(n)>0$ there.`,
    R`The gap above $k^2$ holds $(k+1)^2-k^2-1=2k$ integers, so the negative values number $\sum_{k\text{ odd}\le99}2k=2(1+3+\cdots+99)=2\cdot2500=5000$.`,
    R`Total: $5000+100=5100$. The answer is $\textbf{(E)}\ 5100$.`
  ],
  shortcut: R`Pair the gaps: the gap above $(2m-1)^2$ has $2(2m-1)=4m-2$ integers, and $\sum_{m=1}^{50}(4m-2)=5000$. Either way, remember to add the $100$ zeros.`,
  traps: [R`Forgetting the $100$ values where $P(n)=0$ (the question says $\le0$).`, R`Getting the parity backwards: on the first gap $(1,4)$ there are $99$ negative factors, which is odd, so $P$ is negative there.`, R`Counting $2k+1$ integers in a gap instead of $2k$ (the endpoints are squares, not inside the gap).`],
  recognize: R`"How many integers make this product positive / negative" with a factored polynomial is a sign-chart problem: mark the roots and count negative factors on each interval instead of computing values.`
},

'2020A18': {
  answer: 'C',
  goal: R`Each of $a,b,c,d$ is chosen from $\{0,1,2,3\}$, so there are $4^4=256$ quadruples. We must count those for which $ad-bc$ is odd. Only parity (odd or even) matters, so we can think about which entries are odd.`,
  tools: [
    { name: 'Parity of a difference', fact: R`x-y\text{ is odd} \iff \text{exactly one of }x,y\text{ is odd}`, why: R`odd$-$even and even$-$odd are odd; odd$-$odd and even$-$even are even.` },
    { name: 'Parity of a product', fact: R`xy\text{ is odd} \iff x\text{ and }y\text{ are both odd}`, why: R`One even factor makes the product even.` },
    { name: 'Multiplication principle', fact: R`\#(\text{choices for }(a,d))\times\#(\text{choices for }(b,c))`, why: R`$(a,d)$ and $(b,c)$ are chosen independently, so the counts multiply.` },
    { name: 'Complement within a small set', fact: R`\#(\text{even products})=16-\#(\text{odd products})`, why: R`There are $4\cdot4=16$ ordered pairs in all.` }
  ],
  approach: R`Listing $256$ cases is hopeless. The key realisation is that $ad-bc$ is odd exactly when one of the two products is odd and the other is even. So split the quadruple into the pair $(a,d)$ and the pair $(b,c)$, count how many pairs give an odd product, and combine. The set $\{0,1,2,3\}$ has exactly two odd values ($1$ and $3$), which keeps every count tiny.`,
  steps: [
    { title: 'Turn the condition into parities',
      explain: R`A difference is odd exactly when one term is odd and the other is even. So $ad-bc$ is odd when either ($ad$ odd and $bc$ even) or ($ad$ even and $bc$ odd). These two cases cannot happen together, so we can add their counts.`,
      check: { q: R`Which makes $xy-zw$ odd?`, opts: [R`xy=15,\ zw=4`, R`xy=15,\ zw=9`, R`xy=6,\ zw=4`, R`xy=0,\ zw=2`], ans: 0, why: R`$15$ is odd and $4$ is even, so the difference $11$ is odd.` } },
    { title: 'Count pairs with an odd product',
      explain: R`$ad$ is odd only when both $a$ and $d$ are odd. Each can be $1$ or $3$, so there are $2\cdot2=4$ such pairs out of $4\cdot4=16$. The remaining $16-4=12$ pairs give an even product. The same counts hold for $(b,c)$.`,
      check: { q: R`If $x,y\in\{1,2,3,4,5,6\}$, how many ordered pairs make $xy$ odd?`, opts: [R`9`, R`18`, R`27`, R`6`], ans: 0, why: R`Both must be odd: $3\cdot3=9$.` } },
    { title: 'Combine the two cases',
      explain: R`Case 1, $ad$ odd and $bc$ even: $4\cdot12=48$. Case 2, $ad$ even and $bc$ odd: $12\cdot4=48$. Total $96$. As a check, $96$ out of $256$ is $\tfrac38$, which matches the probability $2\cdot\tfrac14\cdot\tfrac34$ that exactly one of two independent products is odd.`,
      check: { q: R`If an event has probability $\tfrac14$ in each of two independent trials, what is the probability it happens in exactly one?`, opts: [R`\tfrac38`, R`\tfrac14`, R`\tfrac12`, R`\tfrac{1}{16}`], ans: 0, why: R`$2\cdot\tfrac14\cdot\tfrac34=\tfrac38$.` } }
  ],
  bridge: R`Split into $(a,d)$ and $(b,c)$, count odd and even products for each, and combine the two cases where exactly one product is odd.`,
  solution: [
    R`$ad-bc$ is odd exactly when exactly one of $ad$ and $bc$ is odd.`,
    R`$ad$ is odd iff $a$ and $d$ are both odd; with two odd values available ($1,3$) that is $2\cdot2=4$ of the $16$ pairs, leaving $12$ even.`,
    R`The same holds for $bc$.`,
    R`Count: $4\cdot12+12\cdot4=96$. The answer is $\textbf{(C)}\ 96$.`
  ],
  shortcut: R`Probability view: $P(ad\text{ odd})=\tfrac14$, so $P(\text{exactly one odd})=2\cdot\tfrac14\cdot\tfrac34=\tfrac38$, and $\tfrac38\cdot256=96$.`,
  traps: [R`Counting only $ad$ odd, $bc$ even and forgetting the reverse case (giving $48$).`, R`Thinking $0$ is odd or forgetting that $0$ is allowed (it is even).`],
  recognize: R`When a condition asks whether an expression is odd or even, reduce every variable to its parity first. Expressions like $ad-bc$ split naturally into independent pieces you can count separately.`
},

'2020A19': {
  answer: 'E',
  goal: R`We walk on the faces of a dodecahedron from the top face to the bottom face, never revisiting a face, and never stepping from the bottom ring back up to the top ring. We need the number of such routes. The structure is: top face, a ring of $5$ faces, a second ring of $5$ faces, bottom face.`,
  tools: [
    { name: 'Multiplication principle for stages', fact: R`\text{total}=\prod(\text{choices at each stage})`, why: R`If every route passes through the same stages in order, and the number of choices at each stage does not depend on earlier choices, the counts multiply.` },
    { name: 'Walking around a cycle without repeats', fact: R`\text{Paths in an }n\text{-cycle starting at a given vertex}=1+2(n-1)`, why: R`You may stop immediately ($1$ way) or walk $1,2,\ldots,n-1$ steps clockwise or counterclockwise ($2(n-1)$ ways). Going further would repeat a face.` },
    { name: 'Adjacency of the two rings', fact: R`\text{Each top-ring face touches exactly }2\text{ bottom-ring faces.}`, why: R`The two rings interlock like a zigzag crown, so every face in one ring shares an edge with two faces of the other.` }
  ],
  approach: R`Break the route into stages: enter the top ring, move around the top ring, drop to the bottom ring, move around the bottom ring, finish. Because moves from the bottom ring back up are forbidden and faces cannot repeat, each stage is self-contained. Count each stage carefully, including the option of moving zero steps around a ring, and multiply.`,
  steps: [
    { title: 'Enter the top ring',
      explain: R`From the top face you can step to any of the $5$ faces of the top ring: $5$ choices.`,
      check: { q: R`A cube sits on a table. From the top face, how many faces can you step to directly?`, opts: [R`4`, R`5`, R`3`, R`1`], ans: 0, why: R`The top face of a cube shares an edge with each of the four side faces.` } },
    { title: 'Move around a ring',
      explain: R`Once in a ring of $5$ faces, you may stay put, or walk around clockwise $1,2,3$ or $4$ steps, or counterclockwise $1,2,3$ or $4$ steps. Walking $5$ steps would return to the start (a repeat), and turning back would also repeat a face. That gives $1+4+4=9$ possible walks, each ending on some face of the ring.`,
      check: { q: R`On a ring of $6$ faces, starting from one face and never repeating, how many ways can you walk along the ring (including not moving)?`, opts: [R`11`, R`6`, R`12`, R`10`], ans: 0, why: R`$1+2\cdot5=11$.` } },
    { title: 'Drop down and finish',
      explain: R`From whichever top-ring face you stop on, you can step down to $2$ adjacent faces of the bottom ring. There you again have $9$ walks around the ring, and then exactly $1$ step into the bottom face. The bottom ring is never connected back to the top ring in our rules, so nothing else can happen.`,
      check: { q: R`With stages $5$, $9$, $2$, $9$, $1$, what is the total?`, opts: [R`810`, R`26`, R`405`, R`90`], ans: 0, why: R`Multiply the stages: $5\cdot9\cdot2\cdot9\cdot1=810$.` } }
  ],
  bridge: R`Count each stage of the route — top ring entry, walk, drop, walk, exit — and multiply.`,
  solution: [
    R`Step from the top face to the top ring: $5$ ways.`,
    R`Walk around the top ring without repeating: stay, or go $1$–$4$ steps either way: $9$ ways.`,
    R`Step down to the bottom ring: each top-ring face borders $2$ bottom-ring faces: $2$ ways.`,
    R`Walk around the bottom ring: $9$ ways; then step to the bottom face: $1$ way.`,
    R`Total $5\cdot9\cdot2\cdot9=810$. The answer is $\textbf{(E)}\ 810$.`
  ],
  shortcut: R`The ring count $1+2(n-1)$ is worth memorising for any "walk around a cycle without repeats" problem.`,
  traps: [R`Forgetting the zero-step option when walking a ring (giving $8$ instead of $9$).`, R`Counting $5$ or $10$ ways to walk a ring by allowing a full loop back to the start.`, R`Thinking each top-ring face touches only one bottom-ring face.`],
  recognize: R`Paths through layered structures (rings, levels, floors) where you cannot go back up are counted stage by stage. Look for a fixed sequence of stages and multiply.`
},

'2020A20': {
  answer: 'D',
  goal: R`Quadrilateral $ABCD$ has right angles at $B$ (in triangle $ABC$) and at $C$ (between $AC$ and $CD$), with $AC=20$, $CD=30$, and the diagonals cross at $E$ with $AE=5$. We want the area. The area of triangle $ACD$ is immediate; the challenge is pinning down where $B$ is.`,
  tools: [
    { name: 'Thales: right angle in a semicircle', fact: R`\angle ABC=90^\circ \iff B\text{ lies on the circle with diameter }AC`, why: R`An inscribed angle that subtends a diameter is half of $180^\circ$.` },
    { name: 'Area of a quadrilateral split by a diagonal', fact: R`[ABCD]=[ABC]+[ACD]`, why: R`Diagonal $AC$ cuts the quadrilateral into two triangles.` },
    { name: 'Coordinates for a line through two points', fact: R`\text{slope}=\dfrac{y_2-y_1}{x_2-x_1}`, why: R`$B$ is on line $DE$, so finding that line's equation narrows $B$ to one line.` },
    { name: 'Circle equation', fact: R`(x-h)^2+(y-k)^2=r^2`, why: R`Intersecting line $DE$ with the circle on diameter $AC$ locates $B$.` }
  ],
  approach: R`Two right angles that both involve $AC$ suggest putting $AC$ on the $x$-axis. Then $D$ is directly above or below $C$, and $E$ is a known point on $AC$. The condition $\angle ABC=90^\circ$ puts $B$ on a known circle, and $B$ is also on line $DE$ (because $E$ is on diagonal $BD$). Intersecting a line with a circle gives $B$, and then the area of $ABC$ needs only $B$'s height above $AC$.`,
  steps: [
    { title: 'Set up coordinates',
      explain: R`Put $A=(0,0)$ and $C=(20,0)$. Since $CD\perp AC$ and $CD=30$, take $D=(20,-30)$. Point $E$ is on $AC$ with $AE=5$, so $E=(5,0)$. Triangle $ACD$ already has area $\tfrac12\cdot20\cdot30=300$.`,
      check: { q: R`With $A=(0,0)$, $C=(8,0)$ and $D=(8,6)$, what is the area of triangle $ACD$?`, opts: [R`24`, R`48`, R`14`, R`12`], ans: 0, why: R`Right triangle with legs $8$ and $6$: $\tfrac12\cdot8\cdot6=24$.` } },
    { title: 'Line $DE$ and the circle',
      explain: R`Line $DE$ goes from $(20,-30)$ to $(5,0)$: slope $\dfrac{0-(-30)}{5-20}=-2$, so $y=-2(x-5)=10-2x$. Because $\angle ABC=90^\circ$, $B$ lies on the circle with diameter $AC$: centre $(10,0)$, radius $10$, equation $(x-10)^2+y^2=100$. $B$ is on the other side of $AC$ from $D$, so $y>0$.`,
      check: { q: R`What is the equation of the circle with diameter from $(0,0)$ to $(6,0)$?`, opts: [R`(x-3)^2+y^2=9`, R`x^2+y^2=36`, R`(x-6)^2+y^2=9`, R`(x-3)^2+y^2=36`], ans: 0, why: R`Centre is the midpoint $(3,0)$ and radius is half of $6$.` } },
    { title: 'Find $B$ and finish',
      explain: R`Substitute $y=10-2x$: $(x-10)^2+(10-2x)^2=100$ becomes $5x^2-60x+100=0$, i.e. $x^2-12x+20=0$, so $x=2$ or $x=10$. At $x=10$, $y=-10$ (below $AC$, wrong side). At $x=2$, $y=6$, so $B=(2,6)$. The height of $B$ above $AC$ is $6$, so $[ABC]=\tfrac12\cdot20\cdot6=60$, and the total is $60+300=360$.`,
      check: { q: R`Solve $x^2-12x+20=0$.`, opts: [R`x=2\text{ or }10`, R`x=4\text{ or }5`, R`x=-2\text{ or }-10`, R`x=1\text{ or }20`], ans: 0, why: R`$(x-2)(x-10)=0$.` } }
  ],
  bridge: R`Place $AC$ on an axis, write line $DE$ and the circle with diameter $AC$, intersect them to find $B$, and add the two triangle areas.`,
  solution: [
    R`Let $A=(0,0)$, $C=(20,0)$, $D=(20,-30)$ (since $CD\perp AC$), and $E=(5,0)$.`,
    R`$\angle ABC=90^\circ$ means $B$ is on the circle $(x-10)^2+y^2=100$; $E$ on $BD$ means $B$ is on line $DE$: $y=10-2x$.`,
    R`Substituting: $x^2-12x+20=0$, so $x=2$ (giving $B=(2,6)$ above $AC$) or $x=10$ (below $AC$, rejected).`,
    R`$[ABC]=\tfrac12\cdot20\cdot6=60$ and $[ACD]=\tfrac12\cdot20\cdot30=300$.`,
    R`Area $=360$. The answer is $\textbf{(D)}\ 360$.`
  ],
  shortcut: R`Ratio idea: $E$ divides $BD$ so that $\dfrac{[ABC]}{[ACD]}=\dfrac{BE}{ED}=\dfrac{\text{dist}(B,AC)}{30}$. You still need $B$'s height, which the coordinates give quickly.`,
  traps: [R`Taking the intersection $B=(10,-10)$, which is on the same side as $D$ and does not make a convex quadrilateral.`, R`Assuming $B$ is directly above $E$ (it is not; $BE$ is along the slanted diagonal).`],
  recognize: R`A right angle "looking at" a known segment means the vertex is on the circle with that segment as diameter. Combined with a second condition (here, lying on a line), coordinates locate the point exactly.`
},

'2020A21': {
  answer: 'C',
  goal: R`We need to write $\dfrac{2^{289}+1}{2^{17}+1}$ as a sum of distinct powers of $2$ (its binary representation) and count how many powers appear. Noticing $289=17^2$ is the key: the number is $\dfrac{x^{17}+1}{x+1}$ with $x=2^{17}$.`,
  tools: [
    { name: 'Sum of odd powers factorisation', fact: R`x^{n}+1=(x+1)(x^{n-1}-x^{n-2}+\cdots-x+1)\ \text{ for odd }n`, why: R`Multiply out the right side: the terms telescope and only $x^n+1$ survives.` },
    { name: 'A difference of two powers of 2 in binary', fact: R`2^{m+k}-2^{m}=2^{m}(2^{k}-1)=2^{m}+2^{m+1}+\cdots+2^{m+k-1}`, why: R`$2^k-1=1+2+\cdots+2^{k-1}$ is a string of $k$ ones in binary; multiplying by $2^m$ shifts it.` },
    { name: 'Uniqueness of binary representation', fact: R`\text{Every positive integer has exactly one representation as a sum of distinct powers of }2.`, why: R`This is why the problem can ask for "the" number of terms $k$.` }
  ],
  approach: R`Huge exponents with a quotient suggest a factorisation. Spot that $289=17\cdot17$ and substitute $x=2^{17}$. The quotient becomes an alternating sum of powers of $x$. Alternating signs are not allowed in binary, so group the terms in pairs "$x^{2j}-x^{2j-1}$" and turn each pair into a block of consecutive powers of $2$.`,
  steps: [
    { title: 'Factor with $x=2^{17}$',
      explain: R`Since $2^{289}=(2^{17})^{17}=x^{17}$, the expression is $\dfrac{x^{17}+1}{x+1}$. For odd $n$, $x+1$ divides $x^n+1$, with quotient $x^{16}-x^{15}+x^{14}-\cdots-x+1$. Check with $n=3$: $(x+1)(x^2-x+1)=x^3+1$.`,
      check: { q: R`What is $\dfrac{x^5+1}{x+1}$?`, opts: [R`x^4-x^3+x^2-x+1`, R`x^4+x^3+x^2+x+1`, R`x^4-1`, R`x^4+1`], ans: 0, why: R`The quotient alternates signs; multiplying by $x+1$ telescopes to $x^5+1$.` } },
    { title: 'Pair up the alternating terms',
      explain: R`Group the quotient as $(x^{16}-x^{15})+(x^{14}-x^{13})+\cdots+(x^2-x)+1$. There are $8$ pairs plus the final $1$. Each pair is $x^{2j-1}(x-1)=2^{17(2j-1)}(2^{17}-1)$, which is a positive number, so the grouping is legitimate.`,
      check: { q: R`How many pairs $(x^{2j}-x^{2j-1})$ appear in $x^{10}-x^9+\cdots-x+1$?`, opts: [R`5`, R`10`, R`4`, R`11`], ans: 0, why: R`The terms $x^{10}$ down to $x^1$ form $5$ pairs, plus the constant $1$.` } },
    { title: 'Count binary digits per pair',
      explain: R`$2^{17}-1$ is $17$ ones in binary: $2^0+2^1+\cdots+2^{16}$. Multiplying by $2^{17(2j-1)}$ shifts these $17$ ones without overlapping other pairs, because the pairs live in separate blocks of $34$ exponents. So each pair contributes $17$ powers of $2$, and the final $1=2^0$ contributes one more: $8\cdot17+1=137$.`,
      check: { q: R`How many ones are in the binary representation of $2^{12}-2^{7}$?`, opts: [R`5`, R`7`, R`12`, R`6`], ans: 0, why: R`$2^7(2^5-1)$ is five consecutive ones.` } }
  ],
  bridge: R`Substitute $x=2^{17}$, factor, pair the alternating terms, and count the powers of $2$ in each pair.`,
  solution: [
    R`With $x=2^{17}$: $\dfrac{2^{289}+1}{2^{17}+1}=\dfrac{x^{17}+1}{x+1}=x^{16}-x^{15}+\cdots-x+1$.`,
    R`Group into $8$ pairs $x^{2j}-x^{2j-1}=2^{17(2j-1)}(2^{17}-1)$ for $j=1,\ldots,8$, plus $1$.`,
    R`Each $2^{17}-1$ is $17$ consecutive powers of $2$, so each pair gives $17$ distinct powers, in disjoint ranges.`,
    R`The constant $1=2^0$ adds one more power.`,
    R`$k=8\cdot17+1=137$. The answer is $\textbf{(C)}\ 137$.`
  ],
  shortcut: R`Try the small case $\dfrac{2^{9}+1}{2^{3}+1}=57=111001_2$: four ones $=1\cdot3+1$ pairs-times-length plus one. The same pattern gives $8\cdot17+1$.`,
  traps: [R`Counting $17$ terms (the number of terms in the alternating quotient) instead of converting to binary.`, R`Forgetting the final $+1$.`],
  recognize: R`Exponents that are products (like $289=17^2$, $2^{15}=(2^5)^3$) and sums like $a^n+1$ over $a+1$ call for the odd-power factorisation. Binary-digit questions turn differences $2^a-2^b$ into blocks of ones.`
},

'2020A22': {
  answer: 'A',
  goal: R`For each $n$ from $1$ to $1000$ we add three floor values with numerators $998,999,1000$ and ask whether the sum fails to be a multiple of $3$. Three nearly equal floors: if they are all equal, the sum is $3$ times something. So the question is really: for which $n$ are the three floors not all equal?`,
  tools: [
    { name: 'When the floor jumps', fact: R`\left\lfloor\tfrac{m}{n}\right\rfloor-\left\lfloor\tfrac{m-1}{n}\right\rfloor=\begin{cases}1&n\mid m\\0&n\nmid m\end{cases}`, why: R`Increasing the numerator by $1$ raises the quotient by $\tfrac1n$, which crosses an integer exactly when the new numerator is a multiple of $n$.` },
    { name: 'Sum of three nearly equal integers', fact: R`q+q+q=3q,\quad q+q+(q+1)=3q+1,\quad q+(q+1)+(q+1)=3q+2`, why: R`Only the all-equal case gives a multiple of $3$.` },
    { name: 'Counting divisors', fact: R`n=p^aq^b\Rightarrow d(n)=(a+1)(b+1)`, why: R`Each divisor picks an exponent for each prime.` },
    { name: 'Coprime consecutive integers', fact: R`\gcd(999,1000)=1`, why: R`Consecutive integers share no factor except $1$, so only $n=1$ divides both.` }
  ],
  approach: R`Avoid computing floors for $1000$ values of $n$. Instead ask how the floor changes as the numerator goes $998\to999\to1000$: it goes up by $1$ only when $n$ divides the new numerator. So the three values are equal unless $n\mid999$ or $n\mid1000$. Then check what happens to the sum in each case, including the special case $n=1$, which divides both.`,
  steps: [
    { title: 'Understand floor jumps',
      explain: R`$\lfloor\tfrac{999}{n}\rfloor$ is one more than $\lfloor\tfrac{998}{n}\rfloor$ exactly when $n\mid999$; otherwise they are equal. Similarly $\lfloor\tfrac{1000}{n}\rfloor$ jumps above $\lfloor\tfrac{999}{n}\rfloor$ exactly when $n\mid1000$. For example $n=10$: $99,99,100$ — one jump at $1000$.`,
      check: { q: R`For $n=7$, what are $\lfloor\tfrac{20}{7}\rfloor,\lfloor\tfrac{21}{7}\rfloor,\lfloor\tfrac{22}{7}\rfloor$?`, opts: [R`2,3,3`, R`2,2,3`, R`3,3,3`, R`2,3,4`], ans: 0, why: R`$7\mid21$, so the floor jumps from $2$ to $3$ at $21$ and stays at $3$.` } },
    { title: 'When is the sum divisible by $3$?',
      explain: R`If no jump happens, the floors are $q,q,q$, sum $3q$: divisible. One jump gives $3q+1$ or $3q+2$: not divisible. Two jumps give $q,q+1,q+2$, sum $3q+3$: divisible again. Two jumps need $n\mid999$ and $n\mid1000$, which only $n=1$ does.`,
      check: { q: R`What is $\lfloor\tfrac{998}{1}\rfloor+\lfloor\tfrac{999}{1}\rfloor+\lfloor\tfrac{1000}{1}\rfloor$ modulo $3$?`, opts: [R`0`, R`1`, R`2`, R`\text{undefined}`], ans: 0, why: R`$998+999+1000=2997=3\cdot999$.` } },
    { title: 'Count the divisors',
      explain: R`$999=3^3\cdot37$ has $(3+1)(1+1)=8$ divisors and $1000=2^3\cdot5^3$ has $(3+1)(3+1)=16$. Exclude $n=1$ from each (two jumps, divisible). All other divisors are at most $1000$, so they count: $7+15=22$.`,
      check: { q: R`How many positive divisors does $2^3\cdot5^3$ have?`, opts: [R`16`, R`9`, R`8`, R`6`], ans: 0, why: R`$(3+1)(3+1)=16$.` } }
  ],
  bridge: R`The sum fails to be a multiple of $3$ exactly when one floor jumps — that is, when $n>1$ divides $999$ or $1000$.`,
  solution: [
    R`$\lfloor\tfrac{m}{n}\rfloor$ increases by $1$ from $m-1$ to $m$ exactly when $n\mid m$.`,
    R`So the three floors are $q,q,q$ unless $n\mid999$ or $n\mid1000$.`,
    R`With exactly one jump the sum is $3q+1$ or $3q+2$; with no jump or with two jumps ($n=1$ only) it is a multiple of $3$.`,
    R`$999=3^3\cdot37$ has $8$ divisors and $1000=2^3\cdot5^3$ has $16$; removing $n=1$ from each leaves $7+15$.`,
    R`There are $22$ such $n$. The answer is $\textbf{(A)}\ 22$.`
  ],
  shortcut: R`Once you see "floors of consecutive numerators", go straight to divisors of the numerators that cause jumps.`,
  traps: [R`Counting $n=1$ (it divides both $999$ and $1000$, and the sum $2997$ is divisible by $3$).`, R`Adding $8+16=24$ without removing $n=1$.`, R`Thinking a divisor of $998$ matters: the first value is the baseline, so jumps only come at $999$ and $1000$.`],
  recognize: R`Sums or differences of $\lfloor m/n\rfloor$ for consecutive $m$ are controlled by divisibility of $m$ by $n$. Questions mixing floors and "divisible by" usually reduce to counting divisors.`
},

'2020A23': {
  answer: 'A',
  goal: R`We apply three transformations from a list of five (three rotations about the origin and two reflections) and count the ordered sequences that put the $3$-$4$-$5$ triangle $T$ back exactly where it started. Because $T$ has no symmetry of its own, "back where it started" means the combined transformation must be the identity.`,
  tools: [
    { name: 'Orientation', fact: R`\text{Rotations preserve orientation; each reflection reverses it.}`, why: R`The identity preserves orientation, so the number of reflections used must be even: $0$ or $2$.` },
    { name: 'Composing rotations', fact: R`\text{Rotations by }\alpha,\beta,\gamma\text{ compose to rotation by }\alpha+\beta+\gamma`, why: R`Rotations about the same point add their angles; the result is the identity exactly when the total is a multiple of $360^\circ$.` },
    { name: 'Two reflections', fact: R`r_x\circ r_y=r_y\circ r_x=\text{rotation by }180^\circ;\quad r_x\circ r_x=\text{identity}`, why: R`Reflecting across two perpendicular lines through the origin sends $(x,y)\to(-x,-y)$.` },
    { name: 'The $180^\circ$ rotation commutes', fact: R`R_{180}(x,y)=(-x,-y)\text{ commutes with every reflection through the origin}`, why: R`Negating both coordinates can be done before or after swapping a sign.` }
  ],
  approach: R`Do not try all $125$ sequences. Use orientation first: an odd number of reflections can never give the identity. That leaves two cases — three rotations, or two reflections with one rotation — each small enough to count by reasoning about angles. $T$ being asymmetric is what lets us demand the exact identity.`,
  steps: [
    { title: 'Use orientation to cut the cases',
      explain: R`A reflection turns a clockwise labelling of the vertices into a counterclockwise one; a rotation keeps it. The original triangle has its original orientation, so the sequence must contain an even number of reflections: zero or two. Sequences with one or three reflections are impossible.`,
      check: { q: R`A sequence uses three reflections and no rotation. Can it return an asymmetric shape to its exact starting position?`, opts: [R`\text{No}`, R`\text{Yes, always}`, R`\text{Only if they are all the same reflection}`, R`\text{Only if two are equal}`], ans: 0, why: R`Three reflections reverse orientation, so the result is never the identity.` } },
    { title: 'Three rotations',
      explain: R`With rotations of $90^\circ,180^\circ,270^\circ$, call them $1,2,3$ quarter-turns. We need ordered triples from $\{1,2,3\}$ with sum divisible by $4$. Sum $4$: arrangements of $(1,1,2)$, which is $3$. Sum $8$: arrangements of $(2,3,3)$, which is $3$. Sum $12$ would need $(4,4,4)$, not allowed. So $6$ sequences.`,
      check: { q: R`How many ordered triples from $\{1,2,3\}$ sum to $4$?`, opts: [R`3`, R`1`, R`6`, R`2`], ans: 0, why: R`Only $\{1,1,2\}$ in some order: $3$ positions for the $2$.` } },
    { title: 'Two reflections and one rotation',
      explain: R`Two identical reflections cancel, leaving a lone rotation that is not the identity: no good. One reflection of each kind multiplies to a $180^\circ$ rotation, so the third move must be the $180^\circ$ rotation to cancel it. Because $R_{180}$ commutes with both reflections, every order of $\{R_{180},r_x,r_y\}$ works: $3!=6$ sequences. With $R_{90}$ or $R_{270}$ the total would be a $90^\circ$ turn, not the identity.`,
      check: { q: R`What single transformation is "reflect across the $x$-axis, then across the $y$-axis"?`, opts: [R`\text{Rotation by }180^\circ`, R`\text{Rotation by }90^\circ`, R`\text{The identity}`, R`\text{Reflection across }y=x`], ans: 0, why: R`$(x,y)\to(x,-y)\to(-x,-y)$, which is the $180^\circ$ rotation.` } }
  ],
  bridge: R`Count the rotation-only sequences and the two-reflection sequences separately, then add.`,
  solution: [
    R`$T$ has no symmetry, so the composition must be the identity, which preserves orientation; hence the number of reflections is $0$ or $2$.`,
    R`Three rotations: quarter-turn counts from $\{1,2,3\}$ summing to a multiple of $4$: $(1,1,2)$ and $(2,3,3)$ in any order, $3+3=6$ sequences.`,
    R`Two equal reflections cancel and leave a nonzero rotation, so they fail.`,
    R`$r_x$ and $r_y$ together give $R_{180}$, so the rotation must be $R_{180}$; it commutes with both, so all $3!=6$ orders work.`,
    R`Total $6+6=12$. The answer is $\textbf{(A)}\ 12$.`
  ],
  shortcut: R`Think of each move as a $2\times2$ sign/rotation matrix; orientation (the determinant's sign) rules out odd reflection counts instantly.`,
  traps: [R`Forgetting that order matters (the problem counts ordered sequences).`, R`Assuming $r_x$, rotation, $r_x$ might work: $r_xRr_x=R^{-1}$, which is not the identity.`, R`Counting $(4,4,4)$ quarter-turns: a $360^\circ$ rotation is not on the list.`],
  recognize: R`Counting sequences of rotations and reflections that return a shape to itself: first use orientation (even number of reflections), then reduce rotations to angle sums modulo $360^\circ$.`
},

'2020A24': {
  answer: 'C',
  goal: R`We want the least $n>1000$ meeting two gcd conditions, then its digit sum. Each gcd condition is really two divisibility facts: one thing must divide, and a bigger thing must not. Translate both into congruences and combine them.`,
  tools: [
    { name: 'gcd as "divides but not more"', fact: R`\gcd(a,m)=g \Rightarrow g\mid a,\ \text{and } a\text{ shares no larger factor of }m`, why: R`$\gcd(63,a)=21$ means $21\mid a$ but $63\nmid a$; $\gcd(a,120)=60$ means $60\mid a$ but $120\nmid a$.` },
    { name: 'Linear congruences', fact: R`a\equiv r\pmod m \iff m\mid a-r`, why: R`Divisibility conditions on $n+c$ become congruences on $n$.` },
    { name: 'Combining congruences (CRT idea)', fact: R`n\equiv r_1\!\!\pmod{m_1},\ n\equiv r_2\!\!\pmod{m_2}\ \Rightarrow\ n\equiv r\!\!\pmod{\operatorname{lcm}(m_1,m_2)}`, why: R`Write $n=r_1+m_1t$ and solve for $t$ in the second congruence.` }
  ],
  approach: R`Start with the condition that pins $n$ down the most: $\gcd(n+63,120)=60$ forces $n+63$ to be an odd multiple of $60$, which is a single congruence mod $120$. Then add the mod-$21$ condition from the first gcd, list candidates above $1000$ in order, and test the remaining "not divisible by $63$" condition on each.`,
  steps: [
    { title: 'Translate $\gcd(n+63,120)=60$',
      explain: R`We need $60\mid n+63$ but $120\nmid n+63$. Multiples of $60$ alternate between multiples of $120$ and not, so $n+63\equiv60\pmod{120}$. Subtracting $63$: $n\equiv-3\equiv117\pmod{120}$.`,
      check: { q: R`If $\gcd(k,40)=20$, which is true?`, opts: [R`k\equiv20\pmod{40}`, R`k\equiv0\pmod{40}`, R`k\equiv20\pmod{20}`, R`k\equiv10\pmod{40}`], ans: 0, why: R`$20\mid k$ but $40\nmid k$, so $k$ is an odd multiple of $20$.` } },
    { title: 'Translate $\gcd(63,n+120)=21$',
      explain: R`We need $21\mid n+120$ but $63\nmid n+120$. Since $120=5\cdot21+15$, $21\mid n+120$ means $n\equiv-15\equiv6\pmod{21}$. We will test the "not $63$" part on each candidate at the end.`,
      check: { q: R`Solve $n+50\equiv0\pmod 7$.`, opts: [R`n\equiv6\pmod7`, R`n\equiv1\pmod7`, R`n\equiv0\pmod7`, R`n\equiv3\pmod7`], ans: 0, why: R`$50=7\cdot7+1$, so $n\equiv-1\equiv6\pmod7$.` } },
    { title: 'Combine and test',
      explain: R`Write $n=117+120t$. Mod $21$: $117\equiv12$ and $120\equiv15$, so $12+15t\equiv6$, i.e. $15t\equiv15\pmod{21}$, so $5t\equiv5\pmod7$ and $t\equiv1\pmod7$. Then $n=237+840s$. Above $1000$: $1077$, then $1917$. Test $63$: $1077+120=1197=63\cdot19$, rejected. $1917+120=2037=21\cdot97$ and $97$ is not a multiple of $3$, so $63\nmid2037$. So $n=1917$, digit sum $18$.`,
      check: { q: R`Is $2037$ divisible by $63$?`, opts: [R`\text{No: }2037=21\cdot97`, R`\text{Yes: }2037=63\cdot32`, R`\text{Yes: }2037=63\cdot33`, R`\text{No: it is not divisible by }21`], ans: 0, why: R`$2037/21=97$, and $97$ is not divisible by $3$.` } }
  ],
  bridge: R`Turn each gcd into "divides, but not the next multiple up", combine the congruences, and test candidates above $1000$ in order.`,
  solution: [
    R`$\gcd(n+63,120)=60$ gives $n+63\equiv60\pmod{120}$, so $n\equiv117\pmod{120}$.`,
    R`$\gcd(63,n+120)=21$ gives $21\mid n+120$, so $n\equiv6\pmod{21}$, and also $63\nmid n+120$.`,
    R`$n=117+120t$ with $12+15t\equiv6\pmod{21}$ gives $t\equiv1\pmod7$, so $n\equiv237\pmod{840}$.`,
    R`Candidates above $1000$: $1077$ fails ($1197=63\cdot19$); $1917$ works ($2037=21\cdot97$, not a multiple of $63$).`,
    R`Digit sum of $1917$ is $1+9+1+7=18$. The answer is $\textbf{(C)}\ 18$.`
  ],
  shortcut: R`Use $n\equiv117\pmod{120}$ to list $1077,1197,1317,\ldots$ and test each directly: $1917$ is the first with $21\mid n+120$ and $63\nmid n+120$. Listing eight candidates is fast at contest speed.`,
  traps: [R`Using only "$21\mid n+120$" and forgetting "$63\nmid$", which wrongly gives $1077$.`, R`Reading $\gcd(n+63,120)=60$ as just $60\mid n+63$ (that allows $120\mid n+63$).`],
  recognize: R`Exact gcd values are always two conditions: divisibility by the gcd and non-divisibility by a larger factor. Problems like "least $n$ with $\gcd(\ldots)=g$" become congruence systems.`
},

'2020A25': {
  answer: 'A',
  goal: R`Jason sees three dice, may reroll any subset, and wins only if the final sum is $7$. He plays optimally. We want the probability that his best move is to reroll exactly two dice. So we must first work out the best strategy for every roll, then count the rolls where that strategy is "keep one die".`,
  tools: [
    { name: 'Ways to roll a sum with two dice', fact: R`\#\{\text{two dice summing to }s\}=s-1\ \ (2\le s\le7)`, why: R`For a target $s\le7$, the first die can be $1$ to $s-1$ and the second is forced.` },
    { name: 'Ways to roll $7$ with three dice', fact: R`\#=\binom{6}{2}=15\ \text{ out of }216`, why: R`Stars and bars: positive solutions of $a+b+c=7$ number $\binom{6}{2}$, and no die exceeds $6$.` },
    { name: 'Comparing strategies by win probability', fact: R`\tfrac16=\tfrac{6}{36}>\tfrac{6-a}{36}\ (a\ge1)>\tfrac{15}{216}\text{ when }a\le3`, why: R`Optimal play means choosing the option with the highest chance of winning.` },
    { name: 'Counting ordered rolls from sorted ones', fact: R`(x,x,x):1,\quad(x,x,y):3,\quad(x,y,z):6`, why: R`The dice are distinguishable, so each multiset is counted by its number of orderings.` }
  ],
  approach: R`First compute the win probability of each type of move: keep all three, keep two, keep one, keep none. Then decide which move is best for any given roll. Keeping two is best whenever some pair sums to at most $6$. Keeping one is best only when no pair works and the smallest die is small enough. Finally count those rolls.`,
  steps: [
    { title: 'Win probability of each move',
      explain: R`Keep two dice with sum $s\le6$ and reroll one: you need exactly $7-s$, probability $\tfrac16$. Keep one die showing $a$ and reroll two: you need the two to sum to $7-a$, which happens in $6-a$ of $36$ ways. Reroll all three: $\tfrac{15}{216}$. If the sum is already $7$, keep everything and win for sure.`,
      check: { q: R`You keep one die showing $2$ and reroll the other two. What is your chance of a total of $7$?`, opts: [R`\tfrac{4}{36}`, R`\tfrac{5}{36}`, R`\tfrac16`, R`\tfrac{6}{36}`], ans: 0, why: R`You need the two rerolled dice to sum to $5$: $4$ ways out of $36$.` } },
    { title: 'When is "reroll two" optimal?',
      explain: R`$\tfrac16=\tfrac6{36}$ beats any keep-one option, so if any pair of dice sums to $6$ or less, Jason keeps that pair. Keep-one is only considered when every pair sums to at least $7$ (then the total is not $7$ either). Keeping the smallest die $a$ gives $\tfrac{6-a}{36}$, versus $\tfrac{15}{216}=\tfrac{2.5}{36}$ for rerolling all. So he rerolls exactly two when $6-a>2.5$, i.e. $a\le3$.`,
      check: { q: R`The roll is $(4,5,6)$. What is the best move?`, opts: [R`\text{Reroll all three}`, R`\text{Keep the }4\text{, reroll two}`, R`\text{Keep two}`, R`\text{Keep all}`], ans: 0, why: R`Every pair sums to $\ge9$; keeping $4$ gives $\tfrac2{36}<\tfrac{2.5}{36}$.` } },
    { title: 'Count the rolls',
      explain: R`Sort the roll as $a\le b\le c$ with $a\le3$ and $a+b\ge7$. If $a=1$: $(1,6,6)$, $3$ orderings. If $a=2$: $(2,5,5),(2,5,6),(2,6,6)$: $3+6+3=12$. If $a=3$: $(3,4,4),(3,4,5),(3,4,6),(3,5,5),(3,5,6),(3,6,6)$: $3+6+6+3+6+3=27$. Total $42$, and $\tfrac{42}{216}=\tfrac{7}{36}$.`,
      check: { q: R`How many ordered rolls of three dice are the multiset $\{2,5,6\}$?`, opts: [R`6`, R`3`, R`1`, R`9`], ans: 0, why: R`Three different values can be arranged in $3!=6$ ways.` } }
  ],
  bridge: R`Find when keeping two beats keeping one, when keeping one beats rerolling all, and count the rolls where keeping one die is best.`,
  solution: [
    R`Keeping a pair with sum $\le6$ wins with probability $\tfrac16$; keeping one die $a$ wins with $\tfrac{6-a}{36}$; rerolling all wins with $\tfrac{15}{216}$.`,
    R`Since $\tfrac16$ beats every keep-one option, Jason keeps a pair whenever some pair sums to at most $6$.`,
    R`Otherwise (all pairs $\ge7$), keeping the smallest die $a$ beats rerolling all exactly when $\tfrac{6-a}{36}>\tfrac{15}{216}$, i.e. $a\le3$.`,
    R`Counting ordered rolls with smallest die $\le3$ and two smallest summing to $\ge7$: $3+12+27=42$.`,
    R`Probability $\tfrac{42}{216}=\tfrac7{36}$. The answer is $\textbf{(A)}\ \tfrac{7}{36}$.`
  ],
  shortcut: R`Once you know the condition (smallest $a\le3$, second-smallest $\ge7-a$), count by the smallest die: $3+12+27$.`,
  traps: [R`Assuming keeping one die is always better than rerolling all three (it is not for $a=4$ or $5$).`, R`Forgetting that a pair with small sum beats keeping one die.`, R`Counting unordered rolls instead of the $216$ ordered outcomes.`],
  recognize: R`"Plays optimally" problems: compute the value of every option, decide the best choice for each case, then count the cases where a particular choice wins. Compare options by probability before counting anything.`
}

};
