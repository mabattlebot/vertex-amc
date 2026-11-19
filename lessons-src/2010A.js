// Hand-written lessons: 2010 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2010A16': {
  answer: 'B',
  goal: R`In $\triangle ABC$ with integer sides, the bisector $BD$ splits $AC$ into $AD=3$, $DC=8$. We want the smallest possible perimeter. The angle bisector theorem fixes the ratio $AB:BC$.`,
  tools: [
    { name: 'Angle bisector theorem', fact: R`\frac{AB}{BC}=\frac{AD}{DC}=\frac38`, why: R`The bisector divides the opposite side in the ratio of the adjacent sides.` },
    { name: 'Triangle inequality', fact: R`AB+BC>AC,\ AB+AC>BC`, why: R`Nondegenerate triangle.` }
  ],
  approach: R`Write $AB=3k$, $BC=8k$, $AC=11$. Integer sides force $k$ to be an integer. Use the triangle inequalities to find the smallest valid $k$.`,
  steps: [
    { title: 'Set up',
      explain: R`$AB=3k$, $BC=8k$ with $k$ a positive integer (since $\gcd(3,8)=1$), and $AC=11$.`,
      check: { q: R`If $AB:BC=3:8$ with integer sides, which could they be?`, opts: [R`6\text{ and }16`, R`4\text{ and }10`, R`3\text{ and }7`, R`9\text{ and }20`], ans: 0, why: R`$3\cdot2$ and $8\cdot2$.` } },
    { title: 'Triangle inequalities',
      explain: R`$11k>11$ gives $k>1$; $3k+11>8k$ gives $k<2.2$. So $k=2$: sides $6,16,11$, perimeter $33$.`,
      check: { q: R`What is $6+16+11$?`, opts: [R`33`, R`30`, R`35`, R`36`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Use the bisector ratio and triangle inequalities.`,
  solution: [
    R`$AB:BC=3:8$, so $AB=3k$, $BC=8k$, $AC=11$.`,
    R`Triangle inequalities give $1<k<2.2$, so $k=2$.`,
    R`Perimeter $6+16+11=33$.`,
    R`The answer is $\textbf{(B)}\ 33$.`
  ],
  shortcut: R`$k=1$ is degenerate ($3+8=11$), so try $k=2$ immediately.`,
  traps: [R`Using $k=1$ (degenerate).`, R`Reversing the ratio.`],
  recognize: R`Angle bisectors with given segments: the bisector theorem gives side ratios; triangle inequalities pick the scale.`
},

'2010A17': {
  answer: 'A',
  goal: R`A $3\times3\times3$ cube has a $2\times2$ square tunnel drilled through the centre of each face pair (three tunnels). We want the remaining volume: $27$ minus the union of the tunnels.`,
  tools: [
    { name: 'Inclusion–exclusion for volumes', fact: R`|A\cup B\cup C|=\sum|A|-\sum|A\cap B|+|A\cap B\cap C|`, why: R`Add, subtract pairwise overlaps, add back the triple overlap.` },
    { name: 'Tunnel overlaps', fact: R`\text{any two tunnels share the central }2\times2\times2\text{ cube}`, why: R`They cross in the middle.` }
  ],
  approach: R`Each tunnel is $2\times2\times3=12$. Every pair, and all three together, overlap in the same central $2\times2\times2$ cube.`,
  steps: [
    { title: 'Union of tunnels',
      explain: R`$3\cdot12-3\cdot8+8=20$.`,
      check: { q: R`What is $3\cdot12-3\cdot8+8$?`, opts: [R`20`, R`12`, R`28`, R`36`], ans: 0, why: R`$36-24+8$.` } },
    { title: 'Remaining',
      explain: R`$27-20=7$.`,
      check: { q: R`What is $27-20$?`, opts: [R`7`, R`8`, R`10`, R`12`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Inclusion–exclusion on the three tunnels, then subtract from $27$.`,
  solution: [
    R`Each tunnel has volume $12$; every overlap is the central $2\times2\times2$ cube ($8$).`,
    R`Union $=36-24+8=20$.`,
    R`Remaining $27-20=7$.`,
    R`The answer is $\textbf{(A)}\ 7$.`
  ],
  shortcut: R`Each hole leaves a $\tfrac12$-inch border, so what remains is a frame: $8$ corner cubes of side $\tfrac12$ and $12$ edge bars $\tfrac12\times\tfrac12\times2$. Volume $8\cdot\tfrac18+12\cdot\tfrac12=7$.`,
  traps: [R`Subtracting $3\cdot12$ without overlaps.`, R`Using overlap $2\times2\times3$.`],
  recognize: R`Drilled cubes: inclusion–exclusion on tunnels; overlaps are the central blocks.`
},

'2010A18': {
  answer: 'B',
  goal: R`Bernardo's digits come from $1$–$9$, Silvia's from $1$–$8$; each forms the largest number from three distinct digits. We want $P(\text{Bernardo}>\text{Silvia})$. Split on whether Bernardo picks $9$.`,
  tools: [
    { name: 'Conditioning on the 9', fact: R`P(9\text{ chosen})=\frac{\binom82}{\binom93}=\frac13`, why: R`Choose the other two digits from eight.` },
    { name: 'Symmetry when no 9', fact: R`P(B>S)=\tfrac12(1-P(B=S))`, why: R`Both then pick from $\{1..8\}$ the same way.` }
  ],
  approach: R`If Bernardo picks $9$, his number starts with $9$ and beats Silvia. Otherwise both choose three digits from $1$–$8$, identically distributed; use symmetry with ties.`,
  steps: [
    { title: 'Bernardo picks 9',
      explain: R`Probability $\tfrac{28}{84}=\tfrac13$; then he always wins.`,
      check: { q: R`What is $\binom93$?`, opts: [R`84`, R`72`, R`56`, R`36`], ans: 0, why: R`$\tfrac{9\cdot8\cdot7}6$.` } },
    { title: 'No 9',
      explain: R`Both pick from $\binom83=56$ equally likely sets; ties have probability $\tfrac1{56}$. So $P(B>S)=\tfrac12\cdot\tfrac{55}{56}=\tfrac{55}{112}$.`,
      check: { q: R`What is $\tfrac12\left(1-\tfrac1{56}\right)$?`, opts: [R`\tfrac{55}{112}`, R`\tfrac{55}{56}`, R`\tfrac12`, R`\tfrac{27}{56}`], ans: 0, why: R`$\tfrac{55}{112}$.` } },
    { title: 'Combine',
      explain: R`$\tfrac13+\tfrac23\cdot\tfrac{55}{112}=\tfrac{56+55}{168}=\tfrac{111}{168}=\tfrac{37}{56}$.`,
      check: { q: R`Simplify $\tfrac{111}{168}$.`, opts: [R`\tfrac{37}{56}`, R`\tfrac{47}{72}`, R`\tfrac{2}{3}`, R`\tfrac{39}{56}`], ans: 0, why: R`Divide by $3$.` } }
  ],
  bridge: R`Condition on Bernardo picking $9$, then use symmetry.`,
  solution: [
    R`With probability $\tfrac13$ Bernardo has a $9$ and wins.`,
    R`Otherwise both choose from $1$–$8$: $P(B>S)=\tfrac12(1-\tfrac1{56})=\tfrac{55}{112}$.`,
    R`Total $\tfrac13+\tfrac23\cdot\tfrac{55}{112}=\tfrac{37}{56}$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Descending arrangement means each number corresponds to a $3$-element set; compare sets.`,
  traps: [R`Forgetting ties.`, R`Treating the numbers as ordered picks (permutations).`],
  recognize: R`Comparisons with a slight asymmetry: condition on the asymmetric part; the rest is symmetric.`
},

'2010A19': {
  answer: 'E',
  goal: R`An equiangular hexagon has sides alternating $1$ and $r$; triangle $ACE$ has $70\%$ of its area. We want the sum of possible $r$. Express both areas in terms of $r$.`,
  tools: [
    { name: 'Law of cosines', fact: R`AC^2=1^2+r^2-2r\cos120^\circ=r^2+r+1`, why: R`Interior angles are $120^\circ$.` },
    { name: 'Equiangular hexagon as a cut triangle', fact: R`\text{extend the sides of length }1\text{: big triangle of side }2r+1\text{ minus three triangles of side }r`, why: R`All angles are $60^\circ$ or $120^\circ$.` },
    { name: 'Vieta', fact: R`\text{sum of roots}=-\tfrac ba`, why: R`For the resulting quadratic.` }
  ],
  approach: R`$\triangle ACE$ is equilateral with side$^2=r^2+r+1$. The hexagon equals an equilateral triangle of side $2r+1$ with three corner triangles of side $r$ removed. Set the ratio to $0.7$ and use Vieta.`,
  steps: [
    { title: 'Areas',
      explain: R`$[ACE]=\tfrac{\sqrt3}4(r^2+r+1)$. Hexagon $=\tfrac{\sqrt3}4\left((2r+1)^2-3r^2\right)=\tfrac{\sqrt3}4(r^2+4r+1)$.`,
      check: { q: R`Expand $(2r+1)^2-3r^2$.`, opts: [R`r^2+4r+1`, R`r^2+2r+1`, R`4r^2+4r+1`, R`r^2-4r+1`], ans: 0, why: R`$4r^2+4r+1-3r^2$.` } },
    { title: 'Equation',
      explain: R`$r^2+r+1=0.7(r^2+4r+1)$ gives $3r^2-18r+3=0$, i.e. $r^2-6r+1=0$. Both roots are positive; their sum is $6$.`,
      check: { q: R`What is the sum of the roots of $r^2-6r+1=0$?`, opts: [R`6`, R`1`, R`-6`, R`3`], ans: 0, why: R`Vieta.` } }
  ],
  bridge: R`Write both areas in $r$, set the ratio, and add the roots with Vieta.`,
  solution: [
    R`$[ACE]=\tfrac{\sqrt3}4(r^2+r+1)$ and the hexagon is $\tfrac{\sqrt3}4(r^2+4r+1)$.`,
    R`$r^2+r+1=\tfrac7{10}(r^2+4r+1)$ gives $r^2-6r+1=0$.`,
    R`Sum of roots $6$.`,
    R`The answer is $\textbf{(E)}\ 6$.`
  ],
  shortcut: R`Vieta gives the sum without solving.`,
  traps: [R`Using $\cos120^\circ=+\tfrac12$.`, R`Computing the hexagon area as six equilateral triangles (it is not regular).`],
  recognize: R`Equiangular hexagons: extend alternate sides to a big equilateral triangle and subtract corners.`
},

'2010A20': {
  answer: 'D',
  goal: R`A fly tours all $8$ corners of a unit cube in a closed loop of straight segments. We want the longest possible loop. Each segment is $1$, $\sqrt2$ or $\sqrt3$.`,
  tools: [
    { name: 'Segment lengths', fact: R`\text{edge }1,\ \text{face diagonal }\sqrt2,\ \text{space diagonal }\sqrt3`, why: R`Distances between cube corners.` },
    { name: 'Matching bound', fact: R`\text{at most }4\text{ space diagonals}`, why: R`Each corner lies on exactly one space diagonal, and space diagonals in the loop cannot share a corner... each corner has only one, so at most $8/2=4$.` }
  ],
  approach: R`The loop has $8$ segments. Space diagonals pair up corners, so at most $4$ segments are $\sqrt3$; the rest are at most $\sqrt2$. Show $4\sqrt3+4\sqrt2$ is achievable.`,
  steps: [
    { title: 'Upper bound',
      explain: R`$8$ segments; each corner has only one space diagonal and two segments of the loop touch it, so at most $4$ space diagonals. Bound: $4\sqrt3+4\sqrt2$.`,
      check: { q: R`How many space diagonals does a cube have?`, opts: [R`4`, R`8`, R`6`, R`12`], ans: 0, why: R`One per pair of opposite corners.` } },
    { title: 'Achieve it',
      explain: R`Alternate: space diagonal, then face diagonal. Example: $000\to111\to100\to011\to010\to101\to001\to110\to000$, which alternates $\sqrt3$ and $\sqrt2$.`,
      check: { q: R`What is the distance from $(1,1,1)$ to $(1,0,0)$?`, opts: [R`\sqrt2`, R`\sqrt3`, R`1`, R`2`], ans: 0, why: R`Differences $0,1,1$.` } }
  ],
  bridge: R`Bound the number of space diagonals by $4$ and fill the rest with face diagonals.`,
  solution: [
    R`At most $4$ of the $8$ segments can be space diagonals ($\sqrt3$); the others are at most $\sqrt2$.`,
    R`An alternating loop achieves $4\sqrt3+4\sqrt2$.`,
    R`The answer is $\textbf{(D)}\ 4\sqrt2+4\sqrt3$.`
  ],
  shortcut: R`Space diagonals form a perfect matching of the corners.`,
  traps: [R`Using $8$ space diagonals.`, R`Assuming the fly must travel along edges.`],
  recognize: R`Longest tours through cube vertices: bound how often the longest segment can be used.`
},

'2010A21': {
  answer: 'A',
  goal: R`$x^3-ax^2+bx-2010$ has three positive integer roots. By Vieta, $a$ is their sum and $2010$ their product. We minimise the sum of three positive integers with product $2010$.`,
  tools: [
    { name: 'Vieta', fact: R`r_1+r_2+r_3=a,\ r_1r_2r_3=2010`, why: R`For a monic cubic.` },
    { name: 'Factorisation', fact: R`2010=2\cdot3\cdot5\cdot67`, why: R`Prime factors to distribute.` },
    { name: 'Balance factors', fact: R`\text{sums are smaller when factors are close}`, why: R`AM–GM intuition.` }
  ],
  approach: R`$67$ is in one root. The other two roots multiply to $30$ (if the $67$-root is just $67$); keep them close: $5$ and $6$.`,
  steps: [
    { title: 'Place 67',
      explain: R`One root contains $67$. Making it exactly $67$ keeps it smallest; the other two multiply to $30$.`,
      check: { q: R`What is $2010/67$?`, opts: [R`30`, R`32`, R`28`, R`35`], ans: 0, why: R`$67\cdot30=2010$.` } },
    { title: 'Split 30',
      explain: R`Pairs with product $30$: $(1,30),(2,15),(3,10),(5,6)$; smallest sum $11$. So $a=67+11=78$.`,
      check: { q: R`Which pair with product $30$ has the smallest sum?`, opts: [R`(5,6)`, R`(3,10)`, R`(2,15)`, R`(1,30)`], ans: 0, why: R`Closest factors.` } }
  ],
  bridge: R`Use Vieta and split $2010$ into three balanced factors.`,
  solution: [
    R`$a$ is the sum of three positive integers with product $2010=2\cdot3\cdot5\cdot67$.`,
    R`Best: $67$, $5$, $6$.`,
    R`$a=78$.`,
    R`The answer is $\textbf{(A)}\ 78$.`
  ],
  shortcut: R`The large prime dominates; balance the remaining factors.`,
  traps: [R`Combining $67$ with another factor (e.g. $134$).`, R`Confusing $a$ with $b$.`],
  recognize: R`Roots with fixed product: minimise the sum by balancing factors (Vieta).`
},

'2010A22': {
  answer: 'A',
  goal: R`Eight points on a circle, all chords drawn, no three concurrent inside. We count triangles whose three vertices are all interior intersection points. Each such triangle comes from three chords that pairwise cross.`,
  tools: [
    { name: 'Three pairwise-crossing chords', fact: R`\text{they use }6\text{ distinct endpoints}`, why: R`Chords sharing an endpoint meet on the circle, not inside.` },
    { name: 'Six points give one triangle', fact: R`\text{the three "long" diagonals of the hexagon cross pairwise}`, why: R`Among the chords on $6$ points, only the three connecting opposite points all cross each other.` }
  ],
  approach: R`An interior triangle's sides lie on three chords that pairwise cross inside, so they use $6$ endpoints. Conversely, any $6$ points give exactly one such triple. Count $\binom86$.`,
  steps: [
    { title: 'Triangles to 6-point sets',
      explain: R`Each side of the triangle lies on a chord; the three chords cross pairwise inside, so their $6$ endpoints are distinct.`,
      check: { q: R`Can two chords that share an endpoint cross inside the circle?`, opts: [R`\text{No}`, R`\text{Yes}`, R`\text{Only if perpendicular}`, R`\text{Only diameters}`], ans: 0, why: R`They already meet at the shared endpoint.` } },
    { title: 'Count',
      explain: R`For $6$ points labelled in order $1$–$6$, the chords $14$, $25$, $36$ cross pairwise; no other triple does. So the count is $\binom86=28$.`,
      check: { q: R`What is $\binom86$?`, opts: [R`28`, R`56`, R`70`, R`8`], ans: 0, why: R`$\binom82$.` } }
  ],
  bridge: R`Match interior triangles with sets of $6$ points.`,
  solution: [
    R`An interior triangle is formed by three chords crossing pairwise, using $6$ distinct points.`,
    R`Each $6$-point set gives exactly one such triple (the "long diagonals").`,
    R`$\binom86=28$.`,
    R`The answer is $\textbf{(A)}\ 28$.`
  ],
  shortcut: R`Interior intersection points $\leftrightarrow\binom n4$; interior triangles $\leftrightarrow\binom n6$.`,
  traps: [R`Counting all triangles in the figure (many use circle points).`, R`Using $\binom83$.`],
  recognize: R`Points and figures formed by chords of a circle in general position: count by choosing endpoint sets.`
},

'2010A23': {
  answer: 'A',
  goal: R`Box $k$ has $1$ red and $k$ white marbles. Isabella draws one from each box until red. $P(n)$ is the chance she stops at box $n$. We want the smallest $n$ with $P(n)<\tfrac1{2010}$. The product telescopes.`,
  tools: [
    { name: 'Telescoping product', fact: R`\prod_{k=1}^{n-1}\frac{k}{k+1}=\frac1n`, why: R`Each numerator cancels the previous denominator.` },
    { name: 'Stopping probability', fact: R`P(n)=\frac1n\cdot\frac1{n+1}`, why: R`White from boxes $1$ to $n-1$, then red from box $n$ (probability $\tfrac1{n+1}$).` }
  ],
  approach: R`Compute $P(n)=\tfrac{1}{n(n+1)}$, then find the smallest $n$ with $n(n+1)>2010$.`,
  steps: [
    { title: 'Formula',
      explain: R`White from box $k$ has probability $\tfrac{k}{k+1}$. Product for $k<n$: $\tfrac1n$. Red from box $n$: $\tfrac1{n+1}$.`,
      check: { q: R`What is $\tfrac12\cdot\tfrac23\cdot\tfrac34$?`, opts: [R`\tfrac14`, R`\tfrac13`, R`\tfrac18`, R`\tfrac{6}{24}\cdot2`], ans: 0, why: R`Telescopes.` } },
    { title: 'Solve',
      explain: R`$44\cdot45=1980<2010$, $45\cdot46=2070>2010$. So $n=45$.`,
      check: { q: R`What is $45\cdot46$?`, opts: [R`2070`, R`1980`, R`2025`, R`2116`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Telescope the product to get $P(n)=\tfrac1{n(n+1)}$ and solve.`,
  solution: [
    R`$P(n)=\prod_{k<n}\tfrac{k}{k+1}\cdot\tfrac1{n+1}=\tfrac{1}{n(n+1)}$.`,
    R`$n(n+1)>2010$ first at $n=45$.`,
    R`The answer is $\textbf{(A)}\ 45$.`
  ],
  shortcut: R`$\sqrt{2010}\approx44.8$; check $44$ and $45$.`,
  traps: [R`Using $\tfrac1{n+1}$ alone.`, R`Off-by-one: $n=44$.`],
  recognize: R`Products of $\tfrac{k}{k+1}$: telescope.`
},

'2010A24': {
  answer: 'A',
  goal: R`We want the last two nonzero digits of $90!$, i.e. $N=\tfrac{90!}{10^{21}}\bmod100$ (there are $21$ factors of $5$). Work mod $4$ and mod $25$ separately.`,
  tools: [
    { name: 'Counting fives and twos', fact: R`v_5(90!)=18+3=21,\quad v_2(90!)=86`, why: R`Legendre's formula.` },
    { name: 'Runs of four mod 25', fact: R`(5m+1)(5m+2)(5m+3)(5m+4)\equiv24\equiv-1\pmod{25}`, why: R`Expanding, the extra terms are multiples of $5m\cdot50$, which are multiples of $25$.` },
    { name: 'Chinese remainder theorem', fact: R`N\bmod100\text{ from }N\bmod4\text{ and }N\bmod25`, why: R`$4$ and $25$ are coprime.` }
  ],
  approach: R`$N$ still has $86-21=65$ factors of $2$, so $N\equiv0\pmod4$. For mod $25$: $\tfrac{90!}{5^{21}}=(\text{product of non-multiples of }5\text{ up to }90)\times\tfrac{18!}{5^3}$. Use runs of four to evaluate each part, then divide by $2^{21}$.`,
  steps: [
    { title: 'Non-multiples of 5 up to 90',
      explain: R`They form $18$ runs of four, each $\equiv-1\pmod{25}$: product $(-1)^{18}=1$.`,
      check: { q: R`What is $1\cdot2\cdot3\cdot4\bmod25$?`, opts: [R`24`, R`1`, R`0`, R`4`], ans: 0, why: R`$24$.` } },
    { title: 'The multiples of 5',
      explain: R`$5,10,\ldots,90$ contribute $5^{18}\cdot18!$, and $18!$ has $3$ more fives: $\tfrac{18!}{5^3}=(\text{runs }1..4,6..9,11..14)\cdot16\cdot17\cdot18\cdot3!\equiv(-1)^3\cdot21\cdot6\equiv(-1)(-4)(6)=24\pmod{25}$.`,
      check: { q: R`What is $16\cdot17\cdot18\bmod25$?`, opts: [R`21`, R`4`, R`16`, R`24`], ans: 0, why: R`$4896=195\cdot25+21$.` } },
    { title: 'Divide by $2^{21}$ and combine',
      explain: R`So $\tfrac{90!}{5^{21}}\equiv24\equiv-1$. $2^{21}\equiv2\pmod{25}$ (since $2^{10}\equiv-1$), so $N\equiv-\tfrac12\equiv12\pmod{25}$. With $N\equiv0\pmod4$: $N\equiv12\pmod{100}$.`,
      check: { q: R`Which number in $0$–$99$ is $\equiv12\pmod{25}$ and $\equiv0\pmod4$?`, opts: [R`12`, R`37`, R`62`, R`87`], ans: 0, why: R`$12=4\cdot3$.` } }
  ],
  bridge: R`Remove the $21$ tens; find the result mod $4$ and mod $25$, then combine.`,
  solution: [
    R`$N=\tfrac{90!}{10^{21}}\equiv0\pmod4$.`,
    R`Mod $25$: $\tfrac{90!}{5^{21}}\equiv1\cdot24\equiv-1$, and $2^{21}\equiv2$, so $N\equiv12$.`,
    R`Hence $N\equiv12\pmod{100}$.`,
    R`The answer is $\textbf{(A)}\ 12$.`
  ],
  shortcut: R`The runs-of-four fact makes long factorial products mod $25$ quick.`,
  traps: [R`Forgetting the extra fives in $18!$.`, R`Dividing by $2^{21}$ incorrectly mod $25$.`],
  recognize: R`Last nonzero digits of factorials: strip the tens, then work mod $4$ and mod $25$.`
},

'2010A25': {
  answer: 'B',
  goal: R`Jim repeatedly subtracts the largest square. We want the smallest start giving a sequence of $8$ numbers (seven subtractions). Build the smallest starts backwards.`,
  tools: [
    { name: 'Greedy step', fact: R`N=s^2+r,\ 0\le r<2s+1`, why: R`$s^2$ is the largest square at most $N$ exactly when $r<(s+1)^2-s^2$.` },
    { name: 'Smallest predecessor', fact: R`\text{smallest }N\text{ with remainder }r:\ s=\lceil\tfrac r2\rceil\text{ (so }2s+1>r)`, why: R`Smaller $s$ gives smaller $N$.` }
  ],
  approach: R`Let $f(k)$ be the smallest number needing $k$ subtractions. Then $f(k+1)=s^2+f(k)$ with the smallest $s$ satisfying $f(k)<2s+1$. Start from $f(1)=1$.`,
  steps: [
    { title: 'Small cases',
      explain: R`$f(1)=1$, $f(2)=2$, $f(3)=3$, $f(4)=7$ ($7\to3\to2\to1\to0$).`,
      check: { q: R`How many subtractions does $7$ need?`, opts: [R`4`, R`3`, R`5`, R`2`], ans: 0, why: R`$7,3,2,1,0$.` } },
    { title: 'Build up',
      explain: R`$f(5)=4^2+7=23$ (need $2s+1>7$, $s=4$). $f(6)=12^2+23=167$ ($s=12$). $f(7)=84^2+167=7223$ ($s=84$).`,
      check: { q: R`What is $84^2$?`, opts: [R`7056`, R`7104`, R`6889`, R`7225`], ans: 0, why: R`$84\cdot84$.` } },
    { title: 'Answer',
      explain: R`$7223\to167\to23\to7\to3\to2\to1\to0$: $8$ numbers. Units digit $3$.`,
      check: { q: R`What is $7223-84^2$?`, opts: [R`167`, R`166`, R`223`, R`176`], ans: 0, why: R`$7223-7056$.` } }
  ],
  bridge: R`Build the smallest starts backwards using $N=s^2+r$ with $r<2s+1$.`,
  solution: [
    R`$f(k+1)=s^2+f(k)$ with the least $s$ having $2s+1>f(k)$.`,
    R`$1,2,3,7,23,167,7223$.`,
    R`$N=7223$, units digit $3$.`,
    R`The answer is $\textbf{(B)}\ 3$.`
  ],
  shortcut: R`Each step needs $s\approx\tfrac{f(k)}{2}$, so values grow roughly like squares of halves.`,
  traps: [R`Using $s$ too small, so $s^2$ is not the largest square.`, R`Counting $7$ numbers instead of $8$.`],
  recognize: R`Greedy processes: reverse them, choosing the smallest valid predecessor at each step.`
}

};
