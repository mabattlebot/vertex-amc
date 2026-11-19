// Hand-written lessons: 2008 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2008A16': {
  answer: 'B',
  goal: R`A small circle sits in the $60^\circ$ sector $AOB$, tangent to both radii and internally tangent to the big circle (radius $R$). We want the area ratio, i.e. $\left(\tfrac rR\right)^2$. Its centre lies on the bisector of the angle.`,
  tools: [
    { name: 'Distance to the sides', fact: R`r=d\sin30^\circ`, why: R`The centre is at distance $d$ from $O$ along the bisector, which makes $30^\circ$ with each side.` },
    { name: 'Internal tangency', fact: R`d+r=R`, why: R`The circles touch on the far side along the bisector.` }
  ],
  approach: R`$r=\tfrac d2$, so $d=2r$. Then $R=d+r=3r$ and the ratio is $\tfrac19$.`,
  steps: [
    { title: 'Centre distance',
      explain: R`The radius to a tangent point is perpendicular to $OA$; with the $30^\circ$ angle, $r=\tfrac d2$.`,
      check: { q: R`A point at distance $d$ from $O$ on the bisector of a $60^\circ$ angle is how far from each side?`, opts: [R`\tfrac d2`, R`\tfrac{d\sqrt3}{2}`, R`d`, R`\tfrac{d}{\sqrt3}`], ans: 0, why: R`$d\sin30^\circ$.` } },
    { title: 'Ratio',
      explain: R`$R=2r+r=3r$, so the areas are in ratio $\tfrac19$.`,
      check: { q: R`If $R=3r$, what is $\tfrac{\pi r^2}{\pi R^2}$?`, opts: [R`\tfrac19`, R`\tfrac13`, R`\tfrac16`, R`\tfrac1{16}`], ans: 0, why: R`$\left(\tfrac13\right)^2$.` } }
  ],
  bridge: R`Express $R$ in terms of $r$ using the bisector.`,
  solution: [
    R`The small centre is $d=2r$ from $O$ (since $\sin30^\circ=\tfrac12$).`,
    R`Internal tangency: $R=d+r=3r$.`,
    R`Area ratio $\tfrac19$.`,
    R`The answer is $\textbf{(B)}\ \tfrac19$.`
  ],
  shortcut: R`For a sector of angle $2\theta$: $\tfrac rR=\tfrac{\sin\theta}{1+\sin\theta}$; here $\tfrac{1/2}{3/2}=\tfrac13$.`,
  traps: [R`Using $d=r$ or $\cos30^\circ$.`, R`Giving the radius ratio $\tfrac13$.`],
  recognize: R`Circle inscribed in a sector: centre on the bisector, distance from $O$ is $r/\sin(\text{half-angle})$.`
},

'2008A17': {
  answer: 'B',
  goal: R`We want the area of all points outside an equilateral triangle (side $6$) within distance $3$ of it. This band is three rectangles on the sides plus round corners.`,
  tools: [
    { name: 'Band along a side', fact: R`6\times3`, why: R`Points whose nearest point is on that side.` },
    { name: 'Corner sectors', fact: R`\text{exterior angles add to }360^\circ`, why: R`The three corner pieces together make one full circle of radius $3$.` }
  ],
  approach: R`Three rectangles $6\times3$ give $54$. At each vertex a sector of radius $3$ fills the gap; their angles are the exterior angles, totalling $360^\circ$, so together they are a full circle: $9\pi$.`,
  steps: [
    { title: 'Rectangles',
      explain: R`$3\cdot6\cdot3=54$.`,
      check: { q: R`What is the area of the band along one side?`, opts: [R`18`, R`9`, R`36`, R`6`], ans: 0, why: R`$6\times3$.` } },
    { title: 'Sectors',
      explain: R`Each sector has angle $360^\circ-90^\circ-90^\circ-60^\circ=120^\circ$; three of them make $360^\circ$, area $9\pi$.`,
      check: { q: R`What is the angle of each corner sector?`, opts: [R`120^\circ`, R`60^\circ`, R`90^\circ`, R`180^\circ`], ans: 0, why: R`$360-180-60$.` } }
  ],
  bridge: R`Rectangles on sides plus one full circle at the corners.`,
  solution: [
    R`Rectangles: $3\cdot18=54$.`,
    R`Corner sectors: $3\cdot120^\circ=360^\circ$, area $\pi\cdot3^2=9\pi$.`,
    R`Total $54+9\pi$.`,
    R`The answer is $\textbf{(B)}\ 54+9\pi$.`
  ],
  shortcut: R`For any convex shape: band area $=\text{perimeter}\times r+\pi r^2$.`,
  traps: [R`Using $60^\circ$ sectors.`, R`Including the triangle itself.`],
  recognize: R`Points within $r$ of a convex polygon (outside it): perimeter times $r$ plus a full circle.`
},

'2008A19': {
  answer: 'C',
  goal: R`Rectangle $PQRS$ ($PQ=2$, $QR=6$) is rotated $90^\circ$ about $R$, then $90^\circ$ about the new $S$. We want the length of $P$'s path: two quarter-circle arcs.`,
  tools: [
    { name: 'Arc length', fact: R`\tfrac{\pi}{2}\cdot\text{radius}`, why: R`A $90^\circ$ rotation moves a point along a quarter circle.` },
    { name: 'Distances in a rectangle', fact: R`PR=\sqrt{2^2+6^2},\ PS=6`, why: R`The radius is the distance from $P$ to the centre of rotation.` }
  ],
  approach: R`First rotation: radius $PR=\sqrt{40}=2\sqrt{10}$. Second: radius $PS=6$ (distances are preserved by the first rotation).`,
  steps: [
    { title: 'First arc',
      explain: R`$PR=2\sqrt{10}$; arc $\tfrac\pi2\cdot2\sqrt{10}=\sqrt{10}\pi$.`,
      check: { q: R`What is the diagonal of a $2\times6$ rectangle?`, opts: [R`2\sqrt{10}`, R`\sqrt{10}`, R`8`, R`4\sqrt2`], ans: 0, why: R`$\sqrt{40}$.` } },
    { title: 'Second arc',
      explain: R`$PS=6$; arc $\tfrac\pi2\cdot6=3\pi$. Total $(3+\sqrt{10})\pi$.`,
      check: { q: R`What is a quarter circle's length with radius $6$?`, opts: [R`3\pi`, R`6\pi`, R`12\pi`, R`\tfrac{3\pi}{2}`], ans: 0, why: R`$\tfrac{2\pi\cdot6}{4}$.` } }
  ],
  bridge: R`Each rotation contributes a quarter circle with radius = distance from $P$ to the pivot.`,
  solution: [
    R`About $R$: radius $PR=2\sqrt{10}$, arc $\sqrt{10}\pi$.`,
    R`About $S$: radius $PS=6$, arc $3\pi$.`,
    R`Total $(3+\sqrt{10})\pi$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Rotations preserve distances inside the rectangle, so just use the original $PR$ and $PS$.`,
  traps: [R`Using $PQ=2$ as a radius.`, R`Using full half-circles.`],
  recognize: R`Rolling or pivoting shapes: each pivot gives an arc whose radius is the distance to the pivot.`
},

'2008A20': {
  answer: 'D',
  goal: R`Trapezoid with bases $AB=9$, $DC=12$, diagonals meeting at $K$, and $[AKD]=24$. We want the area. The diagonals cut each other in ratio $9:12=3:4$.`,
  tools: [
    { name: 'Similar triangles', fact: R`\triangle ABK\sim\triangle CDK,\ \tfrac{AK}{KC}=\tfrac{BK}{KD}=\tfrac34`, why: R`$AB\parallel CD$.` },
    { name: 'Same height', fact: R`\text{areas on one line}\propto\text{bases}`, why: R`Triangles sharing a vertex and a line of bases.` },
    { name: 'Side triangles equal', fact: R`[AKD]=[BKC]`, why: R`$[ABD]=[ABC]$; subtract $[ABK]$.` }
  ],
  approach: R`$[ABK]=\tfrac34\cdot24=18$, $[CDK]=\tfrac43\cdot24=32$, $[BKC]=24$. Add.`,
  steps: [
    { title: 'Neighbours of $AKD$',
      explain: R`$[ABK]:[AKD]=BK:KD=3:4$, so $[ABK]=18$. $[CDK]:[AKD]=KC:AK=4:3$, so $[CDK]=32$.`,
      check: { q: R`If $BK:KD=3:4$ and $[AKD]=24$, what is $[ABK]$?`, opts: [R`18`, R`32`, R`24`, R`12`], ans: 0, why: R`$24\cdot\tfrac34$.` } },
    { title: 'Total',
      explain: R`$[BKC]=[AKD]=24$. Sum $18+24+24+32=98$.`,
      check: { q: R`What is $18+24+24+32$?`, opts: [R`98`, R`96`, R`94`, R`100`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Scale $24$ by $\tfrac34$ and $\tfrac43$, double the side triangle.`,
  solution: [
    R`$AK:KC=BK:KD=3:4$.`,
    R`$[ABK]=18$, $[CDK]=32$, $[BKC]=[AKD]=24$.`,
    R`Total $98$.`,
    R`The answer is $\textbf{(D)}\ 98$.`
  ],
  shortcut: R`With base ratio $a:b$ and side triangle $S$: total $=S\cdot\tfrac{(a+b)^2}{ab}=24\cdot\tfrac{441}{108}=98$.`,
  traps: [R`Assuming $K$ bisects the diagonals.`, R`Swapping $18$ and $32$.`],
  recognize: R`Trapezoid diagonals: four triangles with areas $a^2,ab,ab,b^2$ (scaled).`
},

'2008A21': {
  answer: 'A',
  goal: R`A plane through opposite cube vertices $A,C$ and midpoints $B,D$ of two opposite edges cuts a quadrilateral. We want its area. It is a rhombus, so use its diagonals.`,
  tools: [
    { name: 'Coordinates', fact: R`A=(0,0,0),\ C=(1,1,1),\ B=(1,0,\tfrac12),\ D=(0,1,\tfrac12)`, why: R`$B,D$ are midpoints of opposite vertical edges not touching $A,C$.` },
    { name: 'Rhombus area', fact: R`\tfrac12 d_1d_2`, why: R`All sides equal and diagonals perpendicular.` }
  ],
  approach: R`All four sides are $\sqrt{1+\tfrac14}=\tfrac{\sqrt5}2$, so $ABCD$ is a rhombus. Diagonals: $AC=\sqrt3$ (space diagonal), $BD=\sqrt2$.`,
  steps: [
    { title: 'Diagonals',
      explain: R`$AC=\sqrt3$. $BD=\sqrt{1^2+1^2+0^2}=\sqrt2$.`,
      check: { q: R`What is the length of a unit cube's space diagonal?`, opts: [R`\sqrt3`, R`\sqrt2`, R`2`, R`\tfrac{\sqrt5}2`], ans: 0, why: R`$\sqrt{1+1+1}$.` } },
    { title: 'Area',
      explain: R`$\tfrac12\cdot\sqrt3\cdot\sqrt2=\tfrac{\sqrt6}2$.`,
      check: { q: R`What is $\tfrac12\sqrt3\sqrt2$?`, opts: [R`\tfrac{\sqrt6}2`, R`\sqrt6`, R`\tfrac{\sqrt5}{2}`, R`\tfrac54`], ans: 0, why: R`$\sqrt3\sqrt2=\sqrt6$.` } }
  ],
  bridge: R`Rhombus: half the product of the diagonals.`,
  solution: [
    R`Every side is $\tfrac{\sqrt5}{2}$, so $ABCD$ is a rhombus.`,
    R`Diagonals $\sqrt3$ and $\sqrt2$.`,
    R`Area $\tfrac{\sqrt6}2$.`,
    R`The answer is $\textbf{(A)}\ \tfrac{\sqrt6}2$.`
  ],
  shortcut: R`$BD$ is a face-diagonal-length segment parallel to a face diagonal, so it's $\sqrt2$ without coordinates.`,
  traps: [R`Treating it as a square of side $\tfrac{\sqrt5}2$ ($\tfrac54$).`, R`Using $BD=1$.`],
  recognize: R`Cross-sections through opposite cube vertices: often rhombi; find the diagonals.`
},

'2008A22': {
  answer: 'D',
  goal: R`Starting at $6$, each step is $2x-1$ (heads) or $\tfrac x2-1$ (tails). We want $P(\text{fourth term is an integer})$. Only $3$ flips, so draw the tree.`,
  tools: [
    { name: 'Probability tree', fact: R`2^3=8\text{ equally likely paths}`, why: R`Three fair flips.` },
    { name: 'Integers stay integers under heads', fact: R`2x-1`, why: R`Once a term is a fraction, can it recover? $2\cdot4.5-1=8$, yes. So compute every path.` }
  ],
  approach: R`Term 2: $11$ or $2$. Term 3: $21,4.5,3,0$. Term 4 from each: $41,9.5;\ 8,1.25;\ 5,0.5;\ -1,-1$. Count integers.`,
  steps: [
    { title: 'Terms 2 and 3',
      explain: R`$6\to11$ or $2$. $11\to21$ or $4.5$; $2\to3$ or $0$.`,
      check: { q: R`What is $\tfrac{11}{2}-1$?`, opts: [R`4.5`, R`5.5`, R`21`, R`5`], ans: 0, why: R`$5.5-1$.` } },
    { title: 'Term 4',
      explain: R`$41,9.5,8,1.25,5,0.5,-1,-1$: integers $41,8,5,-1,-1$ — five of eight.`,
      check: { q: R`What is $2\cdot4.5-1$?`, opts: [R`8`, R`9`, R`7.5`, R`3.5`], ans: 0, why: R`$9-1$.` } }
  ],
  bridge: R`Compute all $8$ fourth terms.`,
  solution: [
    R`Second terms: $11,2$. Third: $21,4.5,3,0$.`,
    R`Fourth: $41,9.5,8,1.25,5,0.5,-1,-1$.`,
    R`Integers: $5$ of $8$.`,
    R`The answer is $\textbf{(D)}\ \tfrac58$.`
  ],
  shortcut: R`Small trees: just enumerate; don't hunt for a pattern.`,
  traps: [R`Assuming a non-integer term stays non-integer.`, R`Computing the fifth term.`],
  recognize: R`Few random steps with simple rules: enumerate the tree.`
},

'2008A23': {
  answer: 'B',
  goal: R`Two subsets of $\{a,b,c,d,e\}$ with union $S$ and intersection of size exactly $2$, unordered. Each element is in both, only the first, or only the second.`,
  tools: [
    { name: 'Element-by-element choices', fact: R`\text{both / first only / second only}`, why: R`The union is $S$, so every element is somewhere.` },
    { name: 'Unordered pairs', fact: R`\text{divide ordered count by }2`, why: R`The two subsets are never equal here.` }
  ],
  approach: R`Choose the $2$ shared elements: $\binom52=10$. Each of the other $3$ goes to exactly one subset: $2^3=8$. Ordered: $80$; unordered: $40$.`,
  steps: [
    { title: 'Ordered count',
      explain: R`$\binom52\cdot2^3=10\cdot8=80$.`,
      check: { q: R`In how many ways can $3$ elements each be put into exactly one of two sets?`, opts: [R`8`, R`6`, R`3`, R`9`], ans: 0, why: R`$2^3$.` } },
    { title: 'Unordered',
      explain: R`The two sets always differ (three elements are in only one of them), so each pair is counted twice: $40$.`,
      check: { q: R`What is $80/2$?`, opts: [R`40`, R`80`, R`20`, R`160`], ans: 0, why: R`Divide by $2$.` } }
  ],
  bridge: R`Pick the overlap, distribute the rest, halve.`,
  solution: [
    R`Intersection: $\binom52=10$ ways.`,
    R`Remaining $3$ elements: $2^3=8$ ways.`,
    R`Ordered $80$, unordered $40$.`,
    R`The answer is $\textbf{(B)}\ 40$.`
  ],
  shortcut: R`$\binom52\cdot2^{3-1}=40$: fix which set gets one particular remaining element.`,
  traps: [R`Forgetting to halve ($80$).`, R`Allowing elements in neither set.`],
  recognize: R`Pairs of sets with conditions on union/intersection: decide each element's status.`
},

'2008A24': {
  answer: 'D',
  goal: R`$k=2008^2+2^{2008}$; we want the units digit of $k^2+2^k$. Find $k\bmod10$ for $k^2$ and $k\bmod4$ for $2^k$.`,
  tools: [
    { name: 'Units digits of powers of 2', fact: R`2,4,8,6\text{ repeating with period }4`, why: R`So $2^n$ depends on $n\bmod4$.` },
    { name: 'Mod 4 of $k$', fact: R`2008^2\equiv0,\ 2^{2008}\equiv0\pmod4`, why: R`Both are multiples of $4$.` }
  ],
  approach: R`$2008^2$ ends in $4$; $2^{2008}$ ends in $6$ ($2008\equiv0\pmod4$). So $k$ ends in $0$ and $k^2$ ends in $0$. $k\equiv0\pmod4$, so $2^k$ ends in $6$.`,
  steps: [
    { title: 'Units digit of $k$',
      explain: R`$8^2=64\to4$; $2^{2008}\to6$. $4+6\to0$.`,
      check: { q: R`What is the units digit of $2^{2008}$?`, opts: [R`6`, R`2`, R`4`, R`8`], ans: 0, why: R`$2008\equiv0\pmod4$.` } },
    { title: 'Units digit of $2^k$',
      explain: R`$k$ is divisible by $4$, so $2^k$ ends in $6$. Total $0+6=6$.`,
      check: { q: R`If $4\mid n$, what is the units digit of $2^n$ ($n>0$)?`, opts: [R`6`, R`2`, R`4`, R`8`], ans: 0, why: R`$2^4=16$.` } }
  ],
  bridge: R`$k\bmod10$ gives $k^2$; $k\bmod4$ gives $2^k$.`,
  solution: [
    R`$k\equiv4+6\equiv0\pmod{10}$, so $k^2$ ends in $0$.`,
    R`$k\equiv0\pmod4$, so $2^k$ ends in $6$.`,
    R`$k^2+2^k$ ends in $6$.`,
    R`The answer is $\textbf{(D)}\ 6$.`
  ],
  shortcut: R`Units digits of $2^n$ cycle with period $4$; always reduce the exponent mod $4$.`,
  traps: [R`Reducing the exponent mod $10$.`, R`Thinking $2^k$ ends in $0$ because $k$ does.`],
  recognize: R`Units digit of a tower: work mod $10$ for the base and mod $4$ for the exponent.`
},

'2008A25': {
  answer: 'C',
  goal: R`Six $1\times x$ mats on a round table of radius $4$: each mat's outer side of length $x$ is a chord of the table, and adjacent mats share inner corners. We want $x$. The inner sides form a regular hexagon of side $x$.`,
  tools: [
    { name: 'Regular hexagon', fact: R`\text{apothem}=\tfrac{\sqrt3}{2}x`, why: R`The distance from the centre to a side of a regular hexagon with side $x$.` },
    { name: 'Chord condition', fact: R`\left(\tfrac x2\right)^2+(\text{distance})^2=4^2`, why: R`An outer corner lies on the table's edge.` }
  ],
  approach: R`Each mat's outer side is parallel to its inner side, $1$ farther out: at distance $\tfrac{\sqrt3}2x+1$ from the centre. Its endpoints are $\tfrac x2$ to either side, on the circle.`,
  steps: [
    { title: 'Equation',
      explain: R`$\tfrac{x^2}4+\left(\tfrac{\sqrt3}2x+1\right)^2=16$ gives $x^2+\sqrt3x+1=16$.`,
      check: { q: R`What is $\tfrac{x^2}{4}+\tfrac{3x^2}{4}$?`, opts: [R`x^2`, R`\tfrac{x^2}2`, R`2x^2`, R`\tfrac{3x^2}{2}`], ans: 0, why: R`$\tfrac{4x^2}{4}$.` } },
    { title: 'Solve',
      explain: R`$x^2+\sqrt3x-15=0$: $x=\tfrac{-\sqrt3+\sqrt{3+60}}2=\tfrac{3\sqrt7-\sqrt3}2$.`,
      check: { q: R`What is $\sqrt{63}$?`, opts: [R`3\sqrt7`, R`7\sqrt3`, R`9\sqrt7`, R`\sqrt7+6`], ans: 0, why: R`$63=9\cdot7$.` } }
  ],
  bridge: R`Inner corners make a hexagon; the outer corner is on the circle.`,
  solution: [
    R`Inner sides form a regular hexagon of side $x$, apothem $\tfrac{\sqrt3}2x$.`,
    R`Outer corner: $\left(\tfrac x2\right)^2+\left(\tfrac{\sqrt3}2x+1\right)^2=16$.`,
    R`$x^2+\sqrt3x-15=0$, so $x=\tfrac{3\sqrt7-\sqrt3}2$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Estimate: $x\approx3.1$; only (C) fits.`,
  traps: [R`Forgetting the width $1$.`, R`Taking the negative root.`],
  recognize: R`Symmetric arrangements of $n$ pieces around a circle: the inner corners form a regular $n$-gon.`
}

};
