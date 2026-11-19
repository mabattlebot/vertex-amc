// Hand-written lessons: 2017 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2017A16': {
  answer: 'B',
  goal: R`Horse $k$ is at the start exactly at multiples of $k$ minutes. We want the first time $T>0$ when at least $5$ horses are at the start together. That is the smallest number with at least $5$ divisors among $1,\ldots,10$.`,
  tools: [
    { name: 'Common return time', fact: R`\text{Horses }k_1,\ldots,k_m\text{ meet at the start at multiples of }\operatorname{lcm}(k_1,\ldots,k_m)`, why: R`Each horse is there exactly at multiples of its lap time.` },
    { name: 'Divisors in a range', fact: R`\#\{k\le10:\ k\mid T\}`, why: R`Horse $k$ is at the start at time $T$ iff $k\mid T$.` }
  ],
  approach: R`Rephrase: find the smallest $T$ with at least $5$ divisors from $\{1,\ldots,10\}$. Check small $T$ by counting such divisors; $T$ needs many small divisors, so try highly composite numbers.`,
  steps: [
    { title: 'Rephrase with divisors',
      explain: R`Horse $k$ is at the start at time $T$ exactly when $k\mid T$. So we need the least $T$ with at least $5$ divisors among $1$–$10$.`,
      check: { q: R`At time $T=8$, which horses are at the start?`, opts: [R`1,2,4,8`, R`1,2,8`, R`2,4,8`, R`1,8`], ans: 0, why: R`The divisors of $8$ up to $10$.` } },
    { title: 'Test small values',
      explain: R`$T=6$: $1,2,3,6$ (four). $T=8$: $1,2,4,8$ (four). $T=10$: $1,2,5,10$ (four). $T=12$: $1,2,3,4,6$ (five). Nothing smaller than $12$ works.`,
      check: { q: R`How many divisors does $12$ have that are at most $10$?`, opts: [R`5`, R`6`, R`4`, R`3`], ans: 0, why: R`$1,2,3,4,6$.` } },
    { title: 'Answer',
      explain: R`$T=12$, digit sum $1+2=3$.`,
      check: { q: R`What is the digit sum of $12$?`, opts: [R`3`, R`12`, R`2`, R`1`], ans: 0, why: R`$1+2$.` } }
  ],
  bridge: R`Find the least $T$ with five divisors among $1$ to $10$.`,
  solution: [
    R`Horse $k$ is at the start at time $T$ iff $k\mid T$.`,
    R`Numbers below $12$ have at most $4$ divisors in $\{1,\ldots,10\}$.`,
    R`$12$ has $1,2,3,4,6$: five.`,
    R`$T=12$, digit sum $3$. The answer is $\textbf{(B)}\ 3$.`
  ],
  shortcut: R`Ignore the given $S=2520$; it is the lcm of all ten and not needed.`,
  traps: [R`Using the given $2520$.`, R`Thinking horse $1$ does not count.`],
  recognize: R`"When are these periodic things together again" means lcm; "at least $m$ of them" means a number with many small divisors.`
},

'2017A17': {
  answer: 'D',
  goal: R`The lattice points on $x^2+y^2=25$ are $(\pm5,0),(0,\pm5),(\pm3,\pm4),(\pm4,\pm3)$. Among irrational chord lengths, we want the largest divided by the smallest.`,
  tools: [
    { name: 'Lattice points on the circle', fact: R`x^2+y^2=25:\ 12\text{ points}`, why: R`$25=0^2+5^2=3^2+4^2$.` },
    { name: 'Chord length formula', fact: R`|P-Q|^2=50-2(P\cdot Q)`, why: R`For points on a circle of radius $5$: $|P-Q|^2=|P|^2+|Q|^2-2P\cdot Q$.` },
    { name: 'Irrational distances', fact: R`\sqrt{m}\text{ is irrational iff }m\text{ is not a perfect square}`, why: R`Distances between lattice points are square roots of integers.` }
  ],
  approach: R`Find the largest non-square value of $|PQ|^2$ and the smallest. Since $|PQ|^2=50-2P\cdot Q$, make the dot product as negative as possible without being $-25$ (the diameter, length $10$, rational), and find the closest pair.`,
  steps: [
    { title: 'Largest irrational distance',
      explain: R`$(3,4)$ and $(-4,-3)$ have dot product $-24$, so $|PQ|^2=98$ and $PQ=7\sqrt2$. Only diameters do better, and they have length $10$.`,
      check: { q: R`What is the squared distance from $(3,4)$ to $(-4,-3)$?`, opts: [R`98`, R`100`, R`50`, R`49`], ans: 0, why: R`$7^2+7^2$.` } },
    { title: 'Smallest irrational distance',
      explain: R`The closest points are neighbours like $(3,4)$ and $(4,3)$: $|RS|^2=2$, $RS=\sqrt2$.`,
      check: { q: R`What is the distance from $(4,3)$ to $(5,0)$?`, opts: [R`\sqrt{10}`, R`\sqrt2`, R`3`, R`\sqrt5`], ans: 0, why: R`$1^2+3^2=10$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{7\sqrt2}{\sqrt2}=7$.`,
      check: { q: R`What is $\tfrac{7\sqrt2}{\sqrt2}$?`, opts: [R`7`, R`7\sqrt2`, R`\sqrt7`, R`14`], ans: 0, why: R`Cancel.` } }
  ],
  bridge: R`List the $12$ lattice points, find the longest and shortest irrational chords.`,
  solution: [
    R`The lattice points are $(\pm5,0),(0,\pm5),(\pm3,\pm4),(\pm4,\pm3)$.`,
    R`Longest irrational chord: $(3,4)$ to $(-4,-3)$, length $7\sqrt2$.`,
    R`Shortest: $(3,4)$ to $(4,3)$, length $\sqrt2$.`,
    R`Ratio $7$. The answer is $\textbf{(D)}\ 7$.`
  ],
  shortcut: R`Points $(a,b)$ and $(-b,-a)$ are nearly opposite: distance $\sqrt2(a+b)=7\sqrt2$ for $a+b=7$.`,
  traps: [R`Using a diameter ($10$ is rational).`, R`Using distance $\sqrt{10}$ as the smallest.`],
  recognize: R`Lattice points on a circle: list them from sums of two squares; chord lengths come from the dot product formula.`
},

'2017A18': {
  answer: 'D',
  goal: R`Amelia (heads with probability $\tfrac13$) and Blaine ($\tfrac25$) alternate, Amelia first; the first head wins. We want Amelia's winning probability. The game "resets" after each full round with no heads.`,
  tools: [
    { name: 'Restart equation', fact: R`P=\tfrac13+\tfrac23\cdot\tfrac35\cdot P`, why: R`Amelia wins now, or both miss and the situation repeats.` },
    { name: 'Geometric series', fact: R`\sum_{k\ge0}ar^k=\frac{a}{1-r}`, why: R`Equivalent to summing Amelia's chances over rounds.` }
  ],
  approach: R`Condition on the first round: either Amelia wins immediately, or both miss and we are back where we started. Solve the resulting linear equation for $P$.`,
  steps: [
    { title: 'One round',
      explain: R`Amelia wins on her first toss with probability $\tfrac13$. Both miss with probability $\tfrac23\cdot\tfrac35=\tfrac25$, and then the game restarts.`,
      check: { q: R`What is the probability both miss in one round?`, opts: [R`\tfrac25`, R`\tfrac{2}{15}`, R`\tfrac35`, R`\tfrac13`], ans: 0, why: R`$\tfrac23\cdot\tfrac35$.` } },
    { title: 'Solve',
      explain: R`$P=\tfrac13+\tfrac25P$, so $\tfrac35P=\tfrac13$ and $P=\tfrac59$. Then $q-p=9-5=4$.`,
      check: { q: R`Solve $P=\tfrac13+\tfrac25P$.`, opts: [R`\tfrac59`, R`\tfrac12`, R`\tfrac49`, R`\tfrac13`], ans: 0, why: R`$P=\tfrac{1/3}{3/5}$.` } }
  ],
  bridge: R`Write the restart equation and solve for $P$.`,
  solution: [
    R`$P=\tfrac13+\left(\tfrac23\cdot\tfrac35\right)P=\tfrac13+\tfrac25P$.`,
    R`So $P=\tfrac59$.`,
    R`$q-p=4$.`,
    R`The answer is $\textbf{(D)}\ 4$.`
  ],
  shortcut: R`$P=\dfrac{p_A}{1-(1-p_A)(1-p_B)}$ for alternating first-to-succeed games.`,
  traps: [R`Comparing $\tfrac13$ and $\tfrac25$ directly.`, R`Forgetting the factor for Blaine missing.`],
  recognize: R`Alternating "first success wins" games: one round plus a restart gives a linear equation.`
},

'2017A19': {
  answer: 'C',
  goal: R`Five people sit in a row; Alice cannot be next to Bob or Carla, and Derek cannot be next to Eric. Alice's restrictions are the strongest, so casework on Alice's seat is natural.`,
  tools: [
    { name: 'Casework on the most constrained person', fact: R`\text{Alice's neighbours must be Derek or Eric}`, why: R`Bob and Carla are forbidden next to her.` },
    { name: 'Multiplication principle', fact: R`\text{(choices for neighbours)}\times\text{(arrangements of the rest)}`, why: R`Once Alice and her neighbours are placed, the rest is independent.` }
  ],
  approach: R`Place Alice first. Her neighbours can only be Derek and Eric. If she is at an end she has one neighbour; in the middle positions she has two, which must be exactly Derek and Eric (who are then not adjacent to each other). Count each case.`,
  steps: [
    { title: 'Alice at an end',
      explain: R`Say seat $1$. Seat $2$ is Derek or Eric ($2$ ways). Say Derek; then Eric cannot be in seat $3$, so Eric is in seat $4$ or $5$ ($2$ ways), and Bob, Carla fill the rest ($2$ ways): $2\cdot2\cdot2=8$. Same for seat $5$: $16$ total.`,
      check: { q: R`Alice in seat $1$, Derek in seat $2$. How many seats can Eric take?`, opts: [R`2`, R`3`, R`1`, R`0`], ans: 0, why: R`Seats $4$ or $5$, not $3$.` } },
    { title: 'Alice not at an end',
      explain: R`Alice in seat $2$, $3$ or $4$ has two neighbours, which must be Derek and Eric ($2$ orders); they sit on opposite sides of Alice, so they are not adjacent. Bob and Carla fill the other two seats ($2$ ways): $4$ for each of $3$ positions, $12$.`,
      check: { q: R`Alice in seat $3$: how many arrangements?`, opts: [R`4`, R`8`, R`2`, R`6`], ans: 0, why: R`$2$ orders of Derek/Eric beside her, $2$ for Bob/Carla.` } },
    { title: 'Total',
      explain: R`$16+12=28$.`,
      check: { q: R`What is $16+12$?`, opts: [R`28`, R`24`, R`32`, R`26`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Case on Alice's seat; her neighbours must be Derek and Eric.`,
  solution: [
    R`Alice's neighbours must come from Derek and Eric.`,
    R`Alice at an end: $2\cdot2\cdot2=8$ per end, $16$ total.`,
    R`Alice in a middle seat: Derek and Eric on either side ($2$), Bob and Carla in the rest ($2$): $4$ each, $12$ total.`,
    R`$28$. The answer is $\textbf{(C)}\ 28$.`
  ],
  shortcut: R`Complementary counting is messier here; casework on the most restricted person is cleanest.`,
  traps: [R`Forgetting Derek and Eric cannot be adjacent when Alice is at an end.`, R`Double-counting by symmetry.`],
  recognize: R`Row seating with "not next to" rules: place the most restricted person first and case on their position.`
},

'2017A20': {
  answer: 'D',
  goal: R`$S(n)=1274$ and we must decide which value $S(n+1)$ could take. Adding $1$ changes digits only at the end: trailing $9$s become $0$s.`,
  tools: [
    { name: 'Digit sum after adding 1', fact: R`S(n+1)=S(n)+1-9k`, why: R`If $n$ ends in $k$ nines, those become zeros ($-9k$) and the next digit goes up by $1$.` },
    { name: 'Digit sum mod 9', fact: R`S(m)\equiv m\pmod9`, why: R`$10\equiv1\pmod9$.` }
  ],
  approach: R`Either use the formula $S(n+1)=1275-9k$, or note $S(n+1)\equiv S(n)+1\equiv1275\equiv6\pmod9$. Check which choice is $6\pmod9$.`,
  steps: [
    { title: 'The rule',
      explain: R`Example: $n=1299$: $S=21$; $n+1=1300$: $S=4=21+1-9\cdot2$. In general $S(n+1)=S(n)+1-9k$.`,
      check: { q: R`If $n$ ends in three $9$s, how does $S(n+1)$ compare with $S(n)$?`, opts: [R`S(n)-26`, R`S(n)+1`, R`S(n)-27`, R`S(n)-8`], ans: 0, why: R`$+1-27$.` } },
    { title: 'Test the choices mod 9',
      explain: R`$S(n+1)\equiv1275\equiv1+2+7+5=15\equiv6\pmod9$. Choices: $1\equiv1$, $3\equiv3$, $12\equiv3$, $1239\equiv6$, $1265\equiv5$. Only $1239$ works ($k=4$).`,
      check: { q: R`What is $1239\bmod9$?`, opts: [R`6`, R`3`, R`0`, R`5`], ans: 0, why: R`$1+2+3+9=15\equiv6$.` } }
  ],
  bridge: R`Use $S(n+1)=S(n)+1-9k$, i.e. $S(n+1)\equiv S(n)+1\pmod9$.`,
  solution: [
    R`Adding $1$ to a number ending in $k$ nines gives $S(n+1)=S(n)+1-9k=1275-9k$.`,
    R`So $S(n+1)\equiv1275\equiv6\pmod9$.`,
    R`Only $1239$ is $\equiv6\pmod9$ ($k=4$).`,
    R`The answer is $\textbf{(D)}\ 1239$.`
  ],
  shortcut: R`Digit sums mod $9$ equal the numbers mod $9$, so $S(n+1)\equiv n+1$.`,
  traps: [R`Thinking $S(n+1)=S(n)+1$ always.`, R`Picking $1265$ because it is "close".`],
  recognize: R`Digit sums before and after adding $1$: trailing nines and the mod-$9$ invariant.`
},

'2017A21': {
  answer: 'D',
  goal: R`Two squares sit in a $3$-$4$-$5$ triangle: one at the right-angle corner (side $x$), one with a side on the hypotenuse (side $y$). We want $\tfrac xy$. Similar triangles give each side.`,
  tools: [
    { name: 'Square at the right angle', fact: R`x=\frac{ab}{a+b}`, why: R`The square's far corner lies on the hypotenuse $\tfrac{X}{a}+\tfrac{Y}{b}=1$ with $X=Y=x$.` },
    { name: 'Square on the hypotenuse', fact: R`y=\frac{ch}{c+h}`, why: R`The triangle above the square is similar to the whole, with height $h-y$ and base $y$: $\tfrac{y}{c}=\tfrac{h-y}{h}$.` },
    { name: 'Altitude to the hypotenuse', fact: R`h=\frac{ab}{c}=\frac{12}5`, why: R`Area two ways.` }
  ],
  approach: R`For $x$, put the corner at the origin: the square's far vertex $(x,x)$ lies on the hypotenuse. For $y$, use the altitude: the small triangle above the square is similar to the whole triangle with ratio $\tfrac{h-y}{h}$, and its base is $y$.`,
  steps: [
    { title: 'Find $x$',
      explain: R`Hypotenuse $\tfrac X4+\tfrac Y3=1$ through $(x,x)$: $\tfrac x4+\tfrac x3=1$, so $x=\tfrac{12}7$.`,
      check: { q: R`For legs $2$ and $2$, what is $x$?`, opts: [R`1`, R`2`, R`\tfrac12`, R`\tfrac43`], ans: 0, why: R`$\tfrac{4}{4}$.` } },
    { title: 'Find $y$',
      explain: R`The altitude is $h=\tfrac{12}5$. The triangle above the square is similar to the whole with height $h-y$ and base $y$: $\tfrac{y}{5}=\tfrac{h-y}{h}$, so $y=\tfrac{5h}{5+h}=\tfrac{12}{37/5}=\tfrac{60}{37}$.`,
      check: { q: R`What is $\tfrac{5\cdot\frac{12}5}{5+\frac{12}5}$?`, opts: [R`\tfrac{60}{37}`, R`\tfrac{12}{7}`, R`\tfrac{60}{35}`, R`\tfrac{37}{60}`], ans: 0, why: R`$\tfrac{12}{37/5}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac xy=\tfrac{12/7}{60/37}=\tfrac{12\cdot37}{7\cdot60}=\tfrac{37}{35}$.`,
      check: { q: R`Simplify $\tfrac{444}{420}$.`, opts: [R`\tfrac{37}{35}`, R`\tfrac{35}{37}`, R`\tfrac{12}{13}`, R`\tfrac{111}{105}`], ans: 0, why: R`Divide by $12$.` } }
  ],
  bridge: R`Use the hypotenuse line for $x$ and similar triangles with the altitude for $y$.`,
  solution: [
    R`$x$: $(x,x)$ on $\tfrac X4+\tfrac Y3=1$ gives $x=\tfrac{12}7$.`,
    R`$y$: with $h=\tfrac{12}5$, similarity gives $y=\tfrac{5h}{5+h}=\tfrac{60}{37}$.`,
    R`$\tfrac xy=\tfrac{37}{35}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{37}{35}$.`
  ],
  shortcut: R`Remember both formulas: corner square $\tfrac{ab}{a+b}$, hypotenuse square $\tfrac{ch}{c+h}$.`,
  traps: [R`Assuming both squares are the same size.`, R`Inverting the ratio.`],
  recognize: R`Squares inscribed in triangles: use similar triangles (or the line equation) with one side of the square along a side of the triangle.`
},

'2017A22': {
  answer: 'E',
  goal: R`A circle is tangent to sides $AB$ and $AC$ of equilateral triangle $ABC$ at $B$ and $C$. We want the fraction of the triangle outside the circle. The part inside is a circular segment cut off by chord $BC$.`,
  tools: [
    { name: 'Tangent ⟂ radius', fact: R`OB\perp AB,\ OC\perp AC`, why: R`Radius to the point of tangency.` },
    { name: 'Central angle', fact: R`\angle BOC=180^\circ-\angle A=120^\circ`, why: R`Quadrilateral $ABOC$ has two right angles.` },
    { name: 'Segment area', fact: R`\text{sector}-\text{triangle}=\tfrac{\theta}{360}\pi r^2-\tfrac12r^2\sin\theta`, why: R`Remove the triangle $OBC$ from the sector.` }
  ],
  approach: R`The circle's centre $O$ is beyond $BC$ (away from $A$). Inside the triangle, the circle covers only the segment between chord $BC$ and the $120^\circ$ arc. Compute $r$ from the tangents, the segment area, and the fraction.`,
  steps: [
    { title: 'Radius',
      explain: R`Let the side be $s$. Triangle $ABO$ has a right angle at $B$ and $\angle BAO=30^\circ$, so $r=OB=s\tan30^\circ=\tfrac{s}{\sqrt3}$.`,
      check: { q: R`What is $\tan30^\circ$?`, opts: [R`\tfrac1{\sqrt3}`, R`\sqrt3`, R`\tfrac12`, R`\tfrac{\sqrt3}2`], ans: 0, why: R`Standard value.` } },
    { title: 'Segment inside the triangle',
      explain: R`$\angle BOC=120^\circ$. The segment area is $\tfrac13\pi r^2-\tfrac{\sqrt3}4r^2=r^2\left(\tfrac\pi3-\tfrac{\sqrt3}4\right)=s^2\left(\tfrac\pi9-\tfrac{\sqrt3}{12}\right)$.`,
      check: { q: R`What is $\tfrac12r^2\sin120^\circ$?`, opts: [R`\tfrac{\sqrt3}4r^2`, R`\tfrac12r^2`, R`\tfrac{\sqrt3}2r^2`, R`\tfrac14r^2`], ans: 0, why: R`$\sin120^\circ=\tfrac{\sqrt3}2$.` } },
    { title: 'Fraction outside',
      explain: R`The triangle has area $\tfrac{\sqrt3}4s^2$. Outside fraction $=1-\dfrac{\pi/9-\sqrt3/12}{\sqrt3/4}=1-\tfrac{4\pi}{9\sqrt3}+\tfrac13=\tfrac43-\tfrac{4\sqrt3\pi}{27}$.`,
      check: { q: R`What is $\tfrac{\sqrt3/12}{\sqrt3/4}$?`, opts: [R`\tfrac13`, R`\tfrac14`, R`3`, R`\tfrac{1}{12}`], ans: 0, why: R`$\tfrac4{12}$.` } }
  ],
  bridge: R`Find $r$ from the tangents, compute the $120^\circ$ segment, and take $1-$ its share of the triangle.`,
  solution: [
    R`$r=s\tan30^\circ=\tfrac{s}{\sqrt3}$ and $\angle BOC=120^\circ$.`,
    R`The circle meets the triangle in the segment of area $r^2(\tfrac\pi3-\tfrac{\sqrt3}4)=s^2(\tfrac\pi9-\tfrac{\sqrt3}{12})$.`,
    R`Fraction outside $=1-\tfrac{\pi/9-\sqrt3/12}{\sqrt3/4}=\tfrac43-\tfrac{4\sqrt3\pi}{27}$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Set $s=\sqrt3$ so $r=1$: segment $\tfrac\pi3-\tfrac{\sqrt3}4$, triangle $\tfrac{3\sqrt3}4$.`,
  traps: [R`Taking the circle as the incircle.`, R`Using the major segment instead of the minor one.`],
  recognize: R`Circles tangent to two sides at their endpoints: the centre lies on the angle bisector, and the central angle is $180^\circ$ minus the vertex angle.`
},

'2017A23': {
  answer: 'B',
  goal: R`We count triangles with vertices among the $25$ points of a $5\times5$ grid. Choose any $3$ points and subtract the collinear triples.`,
  tools: [
    { name: 'Complementary counting', fact: R`\binom{25}3-\#\text{collinear triples}`, why: R`Three points form a triangle unless collinear.` },
    { name: 'Lines in a $5\times5$ grid', fact: R`\text{slopes }0,\infty,\pm1,\pm2,\pm\tfrac12`, why: R`Three collinear grid points need a step $(d_x,d_y)$ fitting twice in a span of $4$.` }
  ],
  approach: R`$\binom{25}3=2300$. Count collinear triples by direction: rows, columns, the two diagonal directions, and the steep/shallow slopes $\pm2,\pm\tfrac12$. Larger steps cannot fit three points.`,
  steps: [
    { title: 'Rows, columns, diagonals',
      explain: R`Each row has $\binom53=10$ triples: $50$ for rows, $50$ for columns. Diagonals of slope $1$ have lengths $5,4,4,3,3$: $10+4+4+1+1=20$; same for slope $-1$: $40$ total.`,
      check: { q: R`How many triples on a line of $4$ points?`, opts: [R`4`, R`6`, R`3`, R`10`], ans: 0, why: R`$\binom43$.` } },
    { title: 'Slopes $\pm2$ and $\pm\tfrac12$',
      explain: R`Slope $2$ needs points $(i,j),(i+1,j+2),(i+2,j+4)$: $j=1$ and $i=1,2,3$, so $3$ triples. Each of the four slopes $\pm2,\pm\tfrac12$ gives $3$: $12$.`,
      check: { q: R`Can three grid points with step $(1,3)$ fit in a $5\times5$ grid?`, opts: [R`\text{No: needs a span of }6`, R`\text{Yes}`, R`\text{Only one}`, R`\text{Two}`], ans: 0, why: R`$2\cdot3=6>4$.` } },
    { title: 'Subtract',
      explain: R`Collinear: $50+50+40+12=152$. Triangles: $2300-152=2148$.`,
      check: { q: R`What is $2300-152$?`, opts: [R`2148`, R`2152`, R`2128`, R`2160`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Total triples minus collinear triples, counted by direction.`,
  solution: [
    R`$\binom{25}{3}=2300$.`,
    R`Collinear: rows $50$, columns $50$, diagonals $40$, slopes $\pm2,\pm\tfrac12$: $12$; total $152$.`,
    R`$2300-152=2148$.`,
    R`The answer is $\textbf{(B)}\ 2148$.`
  ],
  shortcut: R`Remember the diagonal count $2(10+4+4+1+1)=40$ for a $5\times5$ grid.`,
  traps: [R`Forgetting the slopes $\pm2$ and $\pm\tfrac12$.`, R`Counting diagonals of length $1$ or $2$.`],
  recognize: R`Triangles from grid points: total minus collinear triples, organised by the step vector between consecutive points.`
},

'2017A24': {
  answer: 'C',
  goal: R`Every root of the cubic $g$ is a root of the quartic $f$, so $g$ divides $f$: $f(x)=g(x)(x-k)$. Matching coefficients finds $k$, $a$, $b$, $c$, and then $f(1)=g(1)(1-k)$.`,
  tools: [
    { name: 'Factor from shared roots', fact: R`g\text{ has distinct roots, all roots of monic }f\ \Rightarrow\ f=g\cdot(x-k)`, why: R`$f$ has degree $4$ and contains the three linear factors of $g$.` },
    { name: 'Matching coefficients', fact: R`(x^3+ax^2+x+10)(x-k)=x^4+(a-k)x^3+(1-ak)x^2+(10-k)x-10k`, why: R`Expand and compare with $f$.` }
  ],
  approach: R`Write $f=g\cdot(x-k)$. The $x$-coefficient gives $10-k=100$ immediately, so $k=-90$. Then the $x^3$ coefficient gives $a$. Finally evaluate $f(1)=g(1)(1-k)$ without needing $b$ or $c$.`,
  steps: [
    { title: 'Set up the factorisation',
      explain: R`$f(x)=(x^3+ax^2+x+10)(x-k)$. Comparing $x$-coefficients: $10-k=100$, so $k=-90$.`,
      check: { q: R`What is the $x$-coefficient of $(x^3+ax^2+x+10)(x-k)$?`, opts: [R`10-k`, R`1-ak`, R`-10k`, R`a-k`], ans: 0, why: R`$x\cdot(-k)\cdot$... gives $-k$, plus $10x$.` } },
    { title: 'Find $a$',
      explain: R`$x^3$-coefficient: $a-k=1$, so $a=1+k=-89$.`,
      check: { q: R`If $a-k=1$ and $k=-90$, what is $a$?`, opts: [R`-89`, R`-91`, R`91`, R`89`], ans: 0, why: R`$a=1-90$.` } },
    { title: 'Evaluate $f(1)$',
      explain: R`$g(1)=1+a+1+10=12-89=-77$ and $1-k=91$. So $f(1)=-77\cdot91=-7007$.`,
      check: { q: R`What is $77\cdot91$?`, opts: [R`7007`, R`7077`, R`6997`, R`7700`], ans: 0, why: R`$77\cdot91=7\cdot11\cdot7\cdot13=7007$.` } }
  ],
  bridge: R`Write $f=g(x-k)$, match two coefficients, and evaluate at $1$.`,
  solution: [
    R`$f(x)=g(x)(x-k)$ since $g$'s three distinct roots are roots of $f$.`,
    R`$x$-coefficient: $10-k=100\Rightarrow k=-90$; $x^3$-coefficient: $a-k=1\Rightarrow a=-89$.`,
    R`$f(1)=g(1)(1-k)=(-77)(91)=-7007$.`,
    R`The answer is $\textbf{(C)}\ -7007$.`
  ],
  shortcut: R`You never need $b$ or $c$: $f(1)=g(1)\cdot(1-k)$.`,
  traps: [R`Matching the wrong coefficient for $k$.`, R`Computing all of $b$ and $c$ unnecessarily.`],
  recognize: R`"Every root of $g$ is a root of $f$" means $g\mid f$; write the quotient with unknown coefficients and match.`
},

'2017A25': {
  answer: 'A',
  goal: R`We count $3$-digit numbers that can be rearranged into a $3$-digit multiple of $11$. Work from the multiples of $11$: group them by digit multiset, and count all $3$-digit arrangements of each multiset.`,
  tools: [
    { name: 'Divisibility by 11', fact: R`11\mid\overline{abc}\iff a-b+c\in\{0,11\}`, why: R`Alternating digit sum; for $3$ digits it is between $-8$ and $18$.` },
    { name: 'Arrangements of a multiset', fact: R`3\text{ distinct digits}: 6;\ \text{one repeat}: 3;\ \text{minus those with leading }0`, why: R`Standard permutation counts.` },
    { name: 'Avoid double counting', fact: R`\overline{abc}\text{ and }\overline{cba}\text{ are both multiples, same multiset}`, why: R`$a-b+c$ is symmetric in $a$ and $c$.` }
  ],
  approach: R`List multiples of $11$ by type: those with a $0$, those with $b=a+c$, and those with $b=a+c-11$. Each type gives a family of digit multisets. For each multiset, count its $3$-digit arrangements, and add (the multisets are all different).`,
  steps: [
    { title: 'Multiples containing $0$',
      explain: R`$c=0$: $a=b$, giving $110,220,\ldots,990$: multisets $\{a,a,0\}$, each with $2$ valid arrangements ($aa0,a0a$): $18$. $b=0$: $a+c=11$: multisets $\{2,9,0\},\{3,8,0\},\{4,7,0\},\{5,6,0\}$, each with $4$ arrangements: $16$.`,
      check: { q: R`How many $3$-digit arrangements of the digits $3,8,0$?`, opts: [R`4`, R`6`, R`3`, R`2`], ans: 0, why: R`$6$ minus the $2$ starting with $0$.` } },
    { title: 'Nonzero, $b=a+c$',
      explain: R`$a=c$: $121,242,363,484$: multisets $\{a,a,2a\}$ with $3$ arrangements each: $12$. $a\ne c$ with $a+c\le9$: $16$ multisets of three distinct digits, $6$ arrangements each: $96$.`,
      check: { q: R`How many unordered pairs $\{a,c\}$ of distinct positive digits have $a+c\le9$?`, opts: [R`16`, R`32`, R`36`, R`20`], ans: 0, why: R`$36$ ordered pairs minus $4$ with $a=c$, halved.` } },
    { title: 'Nonzero, $b=a+c-11$; total',
      explain: R`$a=c$: $616,737,858,979$: $4\cdot3=12$. $a\ne c$ with $a+c\ge12$: $12$ multisets, $6$ each: $72$. Total $18+16+12+96+12+72=226$.`,
      check: { q: R`What is $18+16+12+96+12+72$?`, opts: [R`226`, R`216`, R`236`, R`243`], ans: 0, why: R`Direct addition.` } }
  ],
  bridge: R`Group multiples of $11$ by digit multiset and count each multiset's $3$-digit arrangements.`,
  solution: [
    R`$3$-digit multiples of $11$ satisfy $a-b+c\in\{0,11\}$.`,
    R`With a zero: $\{a,a,0\}$ gives $9\cdot2=18$; $\{a,11-a,0\}$ gives $4\cdot4=16$.`,
    R`$b=a+c$: $4$ multisets with a repeat ($12$) and $16$ with distinct digits ($96$).`,
    R`$b=a+c-11$: $4$ with a repeat ($12$) and $12$ distinct ($72$).`,
    R`Total $226$. The answer is $\textbf{(A)}\ 226$.`
  ],
  shortcut: R`There are $81$ multiples of $11$; most come in pairs $abc,cba$ sharing a multiset with $6$ arrangements.`,
  traps: [R`Counting the $81$ multiples times $6$.`, R`Forgetting arrangements with a leading zero are not $3$-digit.`],
  recognize: R`"Some permutation has property $P$": count the multisets that have it, then all arrangements of each, avoiding double counting.`
}

};
