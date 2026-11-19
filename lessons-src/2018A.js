// Hand-written lessons: 2018 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2018A16': {
  answer: 'D',
  goal: R`From the right-angle vertex $B$ of a $20$-$21$ right triangle we draw segments to points on the hypotenuse $AC$. As the endpoint slides from $A$ to $C$, the length changes continuously; we count how many integer lengths occur, counting each segment separately.`,
  tools: [
    { name: 'Pythagorean triple', fact: R`20^2+21^2=29^2`, why: R`$400+441=841$, so $AC=29$.` },
    { name: 'Altitude to the hypotenuse', fact: R`h=\frac{\text{leg}_1\cdot\text{leg}_2}{\text{hypotenuse}}`, why: R`Area two ways: $\tfrac12\cdot20\cdot21=\tfrac12\cdot29\cdot h$.` },
    { name: 'Intermediate value idea', fact: R`\text{A continuously changing length hits every value between its extremes.}`, why: R`As the endpoint moves from $A$ to the foot of the altitude, the length falls from $20$ to $h$; then it rises to $21$.` }
  ],
  approach: R`The shortest segment is the altitude. Going from $A$ to the foot, lengths decrease from $20$ to $h$, hitting each value in between once; from the foot to $C$ they increase from $h$ to $21$. Count integers in each range separately and add.`,
  steps: [
    { title: 'Find the altitude',
      explain: R`$AC=29$ and $h=\tfrac{20\cdot21}{29}=\tfrac{420}{29}\approx14.48$. Since $h$ is not an integer, no integer length occurs exactly at the foot.`,
      check: { q: R`For a $6$-$8$-$10$ right triangle, what is the altitude to the hypotenuse?`, opts: [R`4.8`, R`5`, R`4`, R`6`], ans: 0, why: R`$\tfrac{48}{10}$.` } },
    { title: 'Count on each side',
      explain: R`From $A$ to the foot: integer lengths $15,16,\ldots,20$, that is $6$ segments. From the foot to $C$: $15,16,\ldots,21$, that is $7$ segments. Each length below $20$ appears once on each side.`,
      check: { q: R`How many integers are in $[15,21]$?`, opts: [R`7`, R`6`, R`8`, R`21`], ans: 0, why: R`$21-15+1$.` } },
    { title: 'Add',
      explain: R`$6+7=13$ segments, including $BA=20$ and $BC=21$.`,
      check: { q: R`What is $6+7$?`, opts: [R`13`, R`12`, R`14`, R`11`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Find the altitude, then count integer lengths on each side of its foot.`,
  solution: [
    R`$AC=29$ and the altitude is $\tfrac{420}{29}\approx14.48$.`,
    R`Lengths from $B$ decrease from $20$ to $14.48$ along $A\to$ foot, giving integers $15$–$20$: $6$.`,
    R`They increase from $14.48$ to $21$ along foot $\to C$, giving integers $15$–$21$: $7$.`,
    R`Total $13$. The answer is $\textbf{(D)}\ 13$.`
  ],
  shortcut: R`Count $\lfloor20\rfloor-\lfloor h\rfloor$ plus $\lfloor21\rfloor-\lfloor h\rfloor$: $(20-14)+(21-14)=13$.`,
  traps: [R`Counting each length once instead of once per side.`, R`Starting the count at $14$ (the altitude is greater than $14$).`],
  recognize: R`Distances from a point to points on a segment: the minimum is the perpendicular distance, and values between the min and each endpoint are hit once on each side.`
},

'2018A17': {
  answer: 'C',
  goal: R`We choose $6$ numbers from $1$ to $12$ so that no chosen number divides another. We want the smallest possible least element. Organising numbers by their odd part reveals forced choices.`,
  tools: [
    { name: 'Chains by odd part', fact: R`\{1,2,4,8\},\{3,6,12\},\{5,10\},\{7\},\{9\},\{11\}`, why: R`Every number is $2^k\times(\text{odd})$; within a chain each divides the next.` },
    { name: 'Pigeonhole', fact: R`6\text{ chains, }6\text{ numbers}\Rightarrow\text{exactly one per chain}`, why: R`Two numbers from the same chain would divide each other.` }
  ],
  approach: R`Split $\{1,\ldots,12\}$ into $6$ chains by odd part. Since two numbers in a chain divide each other, we take exactly one from each chain. That forces $7,9,11$, and $9$ then rules out $3$, and so on. Push the smallest element as low as these forced choices allow, and give an example.`,
  steps: [
    { title: 'One from each chain',
      explain: R`The six chains are listed above. We must pick one number from each, so $7$, $9$ and $11$ are in the set.`,
      check: { q: R`Which chain contains $12$?`, opts: [R`\{3,6,12\}`, R`\{1,2,4,8\}`, R`\{5,10\}`, R`\{9\}`], ans: 0, why: R`$12=4\cdot3$, odd part $3$.` } },
    { title: 'Rule out small values',
      explain: R`$3$ divides $9$, so from $\{3,6,12\}$ we take $6$ or $12$, both even. $1$ divides everything. $2$ divides $6$ and $12$, so $2$ is impossible. So the least element is at least $4$.`,
      check: { q: R`Why can't $3$ be in the set?`, opts: [R`3\mid9\text{ and }9\text{ is forced}`, R`3\mid7`, R`3\text{ is prime}`, R`3\mid11`], ans: 0, why: R`$9$ must be chosen.` } },
    { title: 'An example with $4$',
      explain: R`$\{4,5,6,7,9,11\}$: no element divides another ($4\nmid6$, $5,6,7$ are fine, $9$ and $11$ have no divisors in the set). So $4$ is achievable.`,
      check: { q: R`Does $4$ divide any of $5,6,7,9,11$?`, opts: [R`\text{No}`, R`\text{Yes, }6`, R`\text{Yes, }9`, R`\text{Yes, }11`], ans: 0, why: R`None is a multiple of $4$.` } }
  ],
  bridge: R`Use the six odd-part chains, apply the forced choices, and test the smallest candidate.`,
  solution: [
    R`Chains by odd part: $\{1,2,4,8\},\{3,6,12\},\{5,10\},\{7\},\{9\},\{11\}$; exactly one from each.`,
    R`$9$ is forced, so not $3$; the $3$-chain gives $6$ or $12$, so not $2$; and not $1$.`,
    R`$\{4,5,6,7,9,11\}$ works.`,
    R`The least element can be $4$. The answer is $\textbf{(C)}\ 4$.`
  ],
  shortcut: R`Write each number as $2^k\cdot\text{odd}$; the number of chains equals the maximum size of a divisor-free set.`,
  traps: [R`Choosing $3$ without noticing $9$ is forced.`, R`Forgetting $1$ divides everything.`],
  recognize: R`"No element divides another" problems: group numbers into chains by odd part (or by repeated doubling); a set can contain at most one from each chain.`
},

'2018A18': {
  answer: 'D',
  goal: R`We count nonnegative integers of the form $\sum_{i=0}^7a_i3^i$ with each $a_i\in\{-1,0,1\}$. This is "balanced ternary" with $8$ digits.`,
  tools: [
    { name: 'Balanced ternary', fact: R`\text{Every integer in }\left[-\tfrac{3^8-1}2,\tfrac{3^8-1}2\right]\text{ has exactly one 8-digit representation}`, why: R`Add $\sum3^i$ to shift digits $\{-1,0,1\}$ to $\{0,1,2\}$; ordinary base $3$ is unique.` },
    { name: 'Geometric sum', fact: R`1+3+\cdots+3^7=\frac{3^8-1}{2}=3280`, why: R`Sum of a geometric series.` }
  ],
  approach: R`Shift each digit up by $1$: $a_i+1\in\{0,1,2\}$, which is ordinary base $3$. So the values are exactly the integers from $-3280$ to $3280$, each once. Count the nonnegative ones.`,
  steps: [
    { title: 'Shift to ordinary base 3',
      explain: R`$\sum a_i3^i=\sum(a_i+1)3^i-\sum3^i$. As $a_i+1$ ranges over $\{0,1,2\}$, $\sum(a_i+1)3^i$ takes each value $0,\ldots,3^8-1$ exactly once. Subtracting $3280$ gives every integer from $-3280$ to $3280$.`,
      check: { q: R`With $2$ balanced ternary digits, which integers can you make?`, opts: [R`-4\text{ to }4`, R`0\text{ to }8`, R`-8\text{ to }8`, R`-2\text{ to }2`], ans: 0, why: R`$\pm(1+3)$.` } },
    { title: 'Count nonnegative values',
      explain: R`From $0$ to $3280$: $3281$ integers.`,
      check: { q: R`How many integers from $0$ to $3280$?`, opts: [R`3281`, R`3280`, R`6561`, R`1640`], ans: 0, why: R`$3280+1$.` } }
  ],
  bridge: R`Shift the digits to ordinary base $3$ and count the nonnegative values.`,
  solution: [
    R`Shifting digits by $1$ turns the form into base $3$, minus $\sum3^i=3280$.`,
    R`So the representable numbers are exactly $-3280,\ldots,3280$.`,
    R`The nonnegative ones number $3281$.`,
    R`The answer is $\textbf{(D)}\ 3281$.`
  ],
  shortcut: R`By symmetry ($a_i\to-a_i$), half of the $3^8=6561$ values are negative, half positive, plus $0$: $\tfrac{6561+1}2=3281$.`,
  traps: [R`Answering $3^8=6561$ (that counts all values, including negatives).`, R`Forgetting $0$.`],
  recognize: R`Digits from $\{-1,0,1\}$: balanced ternary. Shifting digits by a constant converts to an ordinary base.`
},

'2018A19': {
  answer: 'E',
  goal: R`$m$ is chosen from $\{11,13,15,17,19\}$ and $n$ from $1999$ to $2018$ ($20$ values). We want $P(m^n\text{ ends in }1)$. Only the units digit of $m$ and the cycle of its powers matter.`,
  tools: [
    { name: 'Units digit cycles', fact: R`1:\ 1;\quad3:\ 3,9,7,1;\quad5:\ 5;\quad7:\ 7,9,3,1;\quad9:\ 9,1`, why: R`The units digit of a power depends only on the units digit of the base and repeats in a short cycle.` },
    { name: 'Counting multiples', fact: R`\#\{n\in[1999,2018]:4\mid n\}=5,\quad\#\{\text{even}\}=10`, why: R`$2000,2004,\ldots,2016$ and $2000,2002,\ldots,2018$.` }
  ],
  approach: R`For each $m$, decide which exponents make the units digit $1$, using its cycle. Count those $n$ among the $20$ and add up the favourable pairs.`,
  steps: [
    { title: 'Cycles',
      explain: R`$11^n$ always ends in $1$. $13^n$ and $17^n$ end in $1$ when $4\mid n$. $15^n$ never. $19^n$ ends in $1$ when $n$ is even.`,
      check: { q: R`What is the units digit of $7^{8}$?`, opts: [R`1`, R`7`, R`9`, R`3`], ans: 0, why: R`$8$ is a multiple of $4$.` } },
    { title: 'Count favourable pairs',
      explain: R`$m=11$: $20$. $m=13$: $5$. $m=15$: $0$. $m=17$: $5$. $m=19$: $10$. Total $40$ out of $5\cdot20=100$.`,
      check: { q: R`How many multiples of $4$ are in $1999,\ldots,2018$?`, opts: [R`5`, R`4`, R`6`, R`10`], ans: 0, why: R`$2000,2004,2008,2012,2016$.` } },
    { title: 'Probability',
      explain: R`$\tfrac{40}{100}=\tfrac25$.`,
      check: { q: R`Simplify $\tfrac{40}{100}$.`, opts: [R`\tfrac25`, R`\tfrac15`, R`\tfrac12`, R`\tfrac4{5}`], ans: 0, why: R`Divide by $20$.` } }
  ],
  bridge: R`Use units-digit cycles to count favourable $n$ for each $m$.`,
  solution: [
    R`Units digits cycle: $1$ (always $1$), $3$ and $7$ (period $4$), $5$ (never $1$), $9$ (period $2$).`,
    R`Favourable $n$: $20,5,0,5,10$ for $m=11,13,15,17,19$.`,
    R`Total $40$ of $100$ pairs.`,
    R`Probability $\tfrac25$. The answer is $\textbf{(E)}\ \tfrac25$.`
  ],
  shortcut: R`Average over $m$: $\tfrac{1+\tfrac14+0+\tfrac14+\tfrac12}{5}=\tfrac25$ (the ranges divide evenly).`,
  traps: [R`Using $n\bmod4$ for $19$ instead of $n\bmod2$.`, R`Counting $19$ values of $n$ instead of $20$.`],
  recognize: R`Units digits of large powers: use the cycle of the base's last digit.`
},

'2018A20': {
  answer: 'B',
  goal: R`A $7\times7$ grid coloured black and white must look the same under all rotations by $90^\circ$ and all four reflections, and must use both colours. We count such colourings. Cells that are mapped to each other must share a colour.`,
  tools: [
    { name: 'Orbits of cells', fact: R`\text{Symmetric colourings}=2^{\#\text{orbits}}`, why: R`Each group of cells that symmetries move into each other must be one colour; different groups are independent.` },
    { name: 'Fundamental triangle', fact: R`\#\text{orbits}=1+2+3+4=10\text{ for a }7\times7\text{ grid}`, why: R`Each orbit has exactly one cell in the triangular eighth of the grid between the centre, a side midpoint and a corner.` }
  ],
  approach: R`The symmetries divide the $49$ cells into classes. Pick one representative of each class: a triangular wedge (one eighth of the square) does this. Count its cells, raise $2$ to that power, and remove the two one-colour grids.`,
  steps: [
    { title: 'Find the classes',
      explain: R`Consider the wedge from the centre to the middle of the top edge to the top-right corner. Going outward from the centre, its rows contain $1,2,3,4$ cells: $10$ cells. Every cell of the grid is a rotation or reflection of exactly one of these.`,
      check: { q: R`How many classes does a $3\times3$ grid have under the same symmetries?`, opts: [R`3`, R`4`, R`2`, R`9`], ans: 0, why: R`Centre, edge-middles, corners: $1+2$.` } },
    { title: 'Count colourings',
      explain: R`Each class can be black or white independently: $2^{10}=1024$. Remove all-black and all-white: $1022$.`,
      check: { q: R`What is $2^{10}-2$?`, opts: [R`1022`, R`1024`, R`1020`, R`510`], ans: 0, why: R`$1024-2$.` } }
  ],
  bridge: R`Count the cell classes under the symmetries, then use $2^{\text{classes}}-2$.`,
  solution: [
    R`Symmetric colourings are constant on each class of cells moved into each other by the $8$ symmetries.`,
    R`A one-eighth wedge contains one cell of each class: $1+2+3+4=10$ classes.`,
    R`$2^{10}=1024$ symmetric colourings, minus the $2$ single-colour ones.`,
    R`$1022$. The answer is $\textbf{(B)}\ 1022$.`
  ],
  shortcut: R`For an odd $n=2k+1$ grid with full square symmetry, the classes number $\tfrac{(k+1)(k+2)}2$.`,
  traps: [R`Forgetting to subtract the two one-colour codes.`, R`Using only rotations (that gives more classes).`],
  recognize: R`Colourings invariant under symmetries: count orbits (classes) of cells; each orbit is coloured independently.`
},

'2018A21': {
  answer: 'E',
  goal: R`We want all $a$ for which the circle $x^2+y^2=a^2$ and the parabola $y=x^2-a$ meet in exactly $3$ points. Eliminate $x^2$ to get an equation in $y$ alone, then count the points each solution gives.`,
  tools: [
    { name: 'Substitution', fact: R`x^2=y+a\ \Rightarrow\ y^2+y+a-a^2=0`, why: R`Replace $x^2$ in the circle equation.` },
    { name: 'Factoring', fact: R`y^2+y+a-a^2=(y+a)(y-a+1)`, why: R`Expand: $y^2+y-ay+ay+a-a^2$.` },
    { name: 'Points from a $y$-value', fact: R`x^2=y+a:\ \ 2\text{ points if }y+a>0,\ 1\text{ if }=0,\ 0\text{ if }<0`, why: R`Each $y$ gives $x=\pm\sqrt{y+a}$.` }
  ],
  approach: R`Substitute $x^2=y+a$ into the circle to get a quadratic in $y$, which factors. Each root $y$ gives $0$, $1$ or $2$ points depending on $y+a$. Three points means one root gives $1$ point and the other gives $2$.`,
  steps: [
    { title: 'Reduce to $y$',
      explain: R`$x^2=y+a$, so $y+a+y^2=a^2$, i.e. $(y+a)(y-a+1)=0$. So $y=-a$ or $y=a-1$.`,
      check: { q: R`Factor $y^2+y-6$.`, opts: [R`(y+3)(y-2)`, R`(y-3)(y+2)`, R`(y+6)(y-1)`, R`(y-6)(y+1)`], ans: 0, why: R`$3\cdot(-2)=-6$, $3-2=1$.` } },
    { title: 'Points from each root',
      explain: R`$y=-a$ gives $x^2=0$: one point $(0,-a)$. $y=a-1$ gives $x^2=2a-1$: two points if $a>\tfrac12$. The roots must differ ($a\ne\tfrac12$).`,
      check: { q: R`For $a=1$, how many points does $y=a-1$ give?`, opts: [R`2`, R`1`, R`0`, R`3`], ans: 0, why: R`$x^2=1$.` } },
    { title: 'Conclude',
      explain: R`Exactly $3$ points exactly when $a>\tfrac12$.`,
      check: { q: R`At $a=\tfrac12$, how many intersection points are there?`, opts: [R`1`, R`2`, R`3`, R`0`], ans: 0, why: R`Both roots give $y=-\tfrac12$ with $x=0$.` } }
  ],
  bridge: R`Eliminate $x^2$, factor the quadratic in $y$, and count points from each root.`,
  solution: [
    R`Substituting $x^2=y+a$: $(y+a)(y-a+1)=0$.`,
    R`$y=-a$ gives the single point $(0,-a)$.`,
    R`$y=a-1$ gives $x^2=2a-1$: two more points exactly when $a>\tfrac12$.`,
    R`So exactly $3$ points iff $a>\tfrac12$. The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Sketch: the parabola's vertex $(0,-a)$ is always on the circle; it crosses the circle twice more only if it opens wide enough, $a>\tfrac12$.`,
  traps: [R`Solving for $x$ first and getting a quartic.`, R`Forgetting the tangent point at $x=0$ counts once.`],
  recognize: R`Intersections of a circle and a parabola $y=x^2+\ldots$: substitute $x^2$ to get a quadratic in $y$, then convert each $y$-root into $0$, $1$ or $2$ points.`
},

'2018A22': {
  answer: 'D',
  goal: R`Four positive integers have given pairwise gcds around a cycle, and $\gcd(d,a)$ is between $70$ and $100$. We want a prime that must divide $a$. Track the exact powers of $2$ and $3$ in each number.`,
  tools: [
    { name: 'gcd via exponents', fact: R`v_p(\gcd(x,y))=\min(v_p(x),v_p(y))`, why: R`The gcd takes the smaller power of each prime.` },
    { name: 'Factorisations', fact: R`24=2^33,\ 36=2^23^2,\ 54=2\cdot3^3`, why: R`Reading the gcds as exponent constraints.` }
  ],
  approach: R`Work prime by prime. From the three known gcds, determine the exact $2$-adic and $3$-adic valuations needed for $a$ and $d$. Then $\gcd(d,a)=2^?3^?\cdot k$ with $k$ coprime to $6$, and the range $70$–$100$ pins $k$ down.`,
  steps: [
    { title: 'Powers of 3',
      explain: R`$\gcd(b,c)=36$ has $3^2$, but $c$ also has $3^3$ (from $\gcd(c,d)=54$), so $v_3(b)=2$. Then $\gcd(a,b)=24$ has $3^1$ with $v_3(b)=2$, so $v_3(a)=1$. Since $v_3(d)\ge3$: $v_3(\gcd(d,a))=1$.`,
      check: { q: R`If $v_3(x)=1$ and $v_3(y)=4$, what is $v_3(\gcd(x,y))$?`, opts: [R`1`, R`4`, R`3`, R`0`], ans: 0, why: R`The minimum.` } },
    { title: 'Powers of 2',
      explain: R`$24\mid b$ gives $v_2(b)\ge3$, so $\gcd(b,c)=36$ forces $v_2(c)=2$. Then $\gcd(c,d)=54$ (one $2$) forces $v_2(d)=1$. And $v_2(a)\ge3$. So $v_2(\gcd(d,a))=1$.`,
      check: { q: R`If $v_2(c)=2$ and $v_2(\gcd(c,d))=1$, what is $v_2(d)$?`, opts: [R`1`, R`2`, R`0`, R`3`], ans: 0, why: R`$\min(2,v_2(d))=1$.` } },
    { title: 'Pin down the gcd',
      explain: R`So $\gcd(d,a)=6k$ with $k$ coprime to $6$. $70<6k<100$ gives $k\in\{12,\ldots,16\}$, and only $k=13$ is coprime to $6$. So $13\mid a$.`,
      check: { q: R`Which of $12,13,14,15,16$ is coprime to $6$?`, opts: [R`13`, R`15`, R`14`, R`16`], ans: 0, why: R`The others are divisible by $2$ or $3$.` } }
  ],
  bridge: R`Track $v_2$ and $v_3$ around the cycle, then use the range for $\gcd(d,a)$.`,
  solution: [
    R`$v_3$: $v_3(b)=2$, so $v_3(a)=1$; $v_3(d)\ge3$; so $v_3(\gcd(a,d))=1$.`,
    R`$v_2$: $v_2(c)=2$, so $v_2(d)=1$; $v_2(a)\ge3$; so $v_2(\gcd(a,d))=1$.`,
    R`$\gcd(a,d)=6k$ with $\gcd(k,6)=1$ and $70<6k<100$, so $k=13$.`,
    R`$13\mid a$. The answer is $\textbf{(D)}\ 13$.`
  ],
  shortcut: R`Once you know $\gcd(d,a)=6\times(\text{coprime to }6)$, check $72,78,84,90,96$: only $78=6\cdot13$ works.`,
  traps: [R`Assuming $\gcd(d,a)$ is a multiple of $24$ or $54$.`, R`Choosing $k=15$ (it shares the factor $3$).`],
  recognize: R`Chains of gcd conditions: go prime by prime with valuations; each gcd fixes a minimum, which often forces exact exponents.`
},

'2018A23': {
  answer: 'D',
  goal: R`A $3$-$4$-$5$ right triangle has a square $S$ in its right-angle corner, and the square's far corner is $2$ units from the hypotenuse. We need the planted fraction, i.e. $1-\tfrac{\text{area of }S}{6}$.`,
  tools: [
    { name: 'Distance from a point to a line', fact: R`\text{dist}\big((x_0,y_0),\,Ax+By=C\big)=\frac{|Ax_0+By_0-C|}{\sqrt{A^2+B^2}}`, why: R`The standard formula from projecting onto the line's normal.` },
    { name: 'Hypotenuse as a line', fact: R`3x+4y=12`, why: R`It passes through $(4,0)$ and $(0,3)$.` }
  ],
  approach: R`Put the right angle at the origin with legs along the axes. The square has side $s$ and far corner $(s,s)$, which is the point of the square closest to the hypotenuse. Set its distance to the hypotenuse equal to $2$ and solve for $s$.`,
  steps: [
    { title: 'Coordinates',
      explain: R`Legs: $x$ from $0$ to $4$, $y$ from $0$ to $3$. Hypotenuse: $3x+4y=12$. The square is $[0,s]\times[0,s]$, closest to the hypotenuse at $(s,s)$.`,
      check: { q: R`What line passes through $(4,0)$ and $(0,3)$?`, opts: [R`3x+4y=12`, R`4x+3y=12`, R`x+y=7`, R`3x-4y=12`], ans: 0, why: R`Check both points.` } },
    { title: 'Distance equals 2',
      explain: R`$\tfrac{12-7s}{5}=2$, so $7s=2$ and $s=\tfrac27$. The square's area is $\tfrac4{49}$.`,
      check: { q: R`What is the distance from $(1,1)$ to $3x+4y=12$?`, opts: [R`1`, R`\tfrac75`, R`2`, R`\tfrac{12}5`], ans: 0, why: R`$\tfrac{|3+4-12|}{5}$.` } },
    { title: 'Planted fraction',
      explain: R`$1-\dfrac{4/49}{6}=1-\dfrac{2}{147}=\dfrac{145}{147}$.`,
      check: { q: R`What is $\tfrac{4}{49}\div6$?`, opts: [R`\tfrac2{147}`, R`\tfrac4{294}\cdot2`, R`\tfrac{24}{49}`, R`\tfrac{1}{49}`], ans: 0, why: R`$\tfrac{4}{294}=\tfrac2{147}$.` } }
  ],
  bridge: R`Use coordinates and the point-to-line distance from $(s,s)$ to the hypotenuse.`,
  solution: [
    R`Place the legs on the axes; the hypotenuse is $3x+4y=12$.`,
    R`The square's far corner $(s,s)$ is at distance $\tfrac{12-7s}{5}=2$, so $s=\tfrac27$.`,
    R`The square's area is $\tfrac4{49}$ out of $6$.`,
    R`Planted fraction $1-\tfrac{2}{147}=\tfrac{145}{147}$. The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`Distance from the origin to the hypotenuse is $\tfrac{12}5$; moving the corner to $(s,s)$ reduces it by $\tfrac{7s}{5}$.`,
  traps: [R`Measuring distance along a leg instead of perpendicular to the hypotenuse.`, R`Forgetting to divide by $\sqrt{3^2+4^2}=5$.`],
  recognize: R`"Shortest distance to a line" with right angles: set up coordinates and use the point-to-line distance formula.`
},

'2018A24': {
  answer: 'D',
  goal: R`In triangle $ABC$ ($AB=50$, $AC=10$, area $120$), $D,E$ are midpoints of $AB,AC$, and the angle bisector from $A$ meets $DE$ at $F$ and $BC$ at $G$. We want the area of $FDBG$. Combine the angle bisector ratio with the midline.`,
  tools: [
    { name: 'Angle bisector theorem', fact: R`\frac{BG}{GC}=\frac{AB}{AC}`, why: R`The bisector splits the opposite side in the ratio of the adjacent sides.` },
    { name: 'Triangles with the same height', fact: R`\frac{[ABG]}{[ABC]}=\frac{BG}{BC}`, why: R`They share the height from $A$.` },
    { name: 'Midline', fact: R`DE\parallel BC,\ \ \triangle ADF\sim\triangle ABG\text{ with ratio }\tfrac12`, why: R`$D$ is the midpoint of $AB$ and $DF\parallel BG$.` }
  ],
  approach: R`Quadrilateral $FDBG$ is triangle $ABG$ minus the small triangle $ADF$. The bisector theorem gives $[ABG]$, and the midline makes $ADF$ a half-scale copy of $ABG$.`,
  steps: [
    { title: 'Area of $ABG$',
      explain: R`$BG:GC=50:10=5:1$, so $BG=\tfrac56BC$ and $[ABG]=\tfrac56\cdot120=100$.`,
      check: { q: R`If $AB=6$ and $AC=3$, what fraction of $BC$ is $BG$?`, opts: [R`\tfrac23`, R`\tfrac12`, R`\tfrac13`, R`\tfrac34`], ans: 0, why: R`$BG:GC=2:1$.` } },
    { title: 'Area of $ADF$',
      explain: R`$DE\parallel BC$, so $\triangle ADF\sim\triangle ABG$ with ratio $AD:AB=\tfrac12$. Areas scale by $\tfrac14$: $[ADF]=25$.`,
      check: { q: R`Similar triangles with side ratio $\tfrac12$ have area ratio?`, opts: [R`\tfrac14`, R`\tfrac12`, R`\tfrac18`, R`2`], ans: 0, why: R`Square the ratio.` } },
    { title: 'Subtract',
      explain: R`$[FDBG]=100-25=75$.`,
      check: { q: R`What is $100-25$?`, opts: [R`75`, R`80`, R`70`, R`65`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Get $[ABG]$ from the bisector theorem and subtract the half-scale triangle $ADF$.`,
  solution: [
    R`By the angle bisector theorem $BG:GC=5:1$, so $[ABG]=\tfrac56\cdot120=100$.`,
    R`$DE\parallel BC$ makes $\triangle ADF\sim\triangle ABG$ with ratio $\tfrac12$: $[ADF]=25$.`,
    R`$[FDBG]=[ABG]-[ADF]=75$.`,
    R`The answer is $\textbf{(D)}\ 75$.`
  ],
  shortcut: R`Ratios only: the specific side lengths matter only through $AB:AC$; the area $120$ scales everything.`,
  traps: [R`Using $BG:GC=AC:AB$ (reversed).`, R`Taking the area ratio of the similar triangles as $\tfrac12$ instead of $\tfrac14$.`],
  recognize: R`Angle bisectors with midpoints: the bisector theorem splits areas; midlines create similar triangles at scale $\tfrac12$.`
},

'2018A25': {
  answer: 'D',
  goal: R`$A_n,B_n$ are repdigits of length $n$ (digits $a,b$) and $C_n$ is a repdigit of length $2n$ (digit $c$). We want the largest $a+b+c$ for which $C_n-B_n=A_n^2$ holds for at least two values of $n$. Write repdigits algebraically.`,
  tools: [
    { name: 'Repdigits', fact: R`\underbrace{dd\cdots d}_{n}=d\cdot\frac{10^n-1}{9}`, why: R`$11\cdots1=\tfrac{10^n-1}9$.` },
    { name: 'Polynomial identity', fact: R`\text{A linear equation in }x\text{ true for two values of }x\text{ holds for all }x`, why: R`So the coefficients on both sides must match.` }
  ],
  approach: R`Write all three as fractions in $x=10^n$. Divide out the common factor $\tfrac{10^n-1}{9}$ to get a linear equation in $x$. Holding for two different $n$ means it holds identically, so match coefficients.`,
  steps: [
    { title: 'Translate',
      explain: R`With $x=10^n$: $C_n=c\tfrac{x^2-1}{9}$, $B_n=b\tfrac{x-1}9$, $A_n^2=a^2\tfrac{(x-1)^2}{81}$. Divide the equation by $\tfrac{x-1}9$: $c(x+1)-b=\tfrac{a^2}9(x-1)$.`,
      check: { q: R`What is $777$ as $d\cdot\tfrac{10^n-1}9$?`, opts: [R`7\cdot\tfrac{10^3-1}9`, R`7\cdot\tfrac{10^3}9`, R`7\cdot10^3`, R`\tfrac{7^3-1}9`], ans: 0, why: R`$\tfrac{999}{9}=111$.` } },
    { title: 'Match coefficients',
      explain: R`True for two values of $x$ means it is an identity: $c=\tfrac{a^2}9$ and $c-b=-\tfrac{a^2}9$, so $b=2c$ and $a=3\sqrt c$.`,
      check: { q: R`If $px+q=rx+s$ for two different $x$, then?`, opts: [R`p=r\text{ and }q=s`, R`p=s`, R`p+q=r+s\text{ only}`, R`\text{nothing}`], ans: 0, why: R`Two points determine a line.` } },
    { title: 'Maximise',
      explain: R`$c$ must be a perfect square digit with $b=2c\le9$: $c=1$ gives $(a,b,c)=(3,2,1)$, sum $6$; $c=4$ gives $(6,8,4)$, sum $18$; $c=9$ gives $b=18$, impossible. Maximum $18$.`,
      check: { q: R`For $c=4$, what are $a$ and $b$?`, opts: [R`a=6,\ b=8`, R`a=2,\ b=8`, R`a=6,\ b=4`, R`a=12,\ b=8`], ans: 0, why: R`$a=3\sqrt4$, $b=2\cdot4$.` } }
  ],
  bridge: R`Write the repdigits in terms of $x=10^n$, reduce to a linear identity, and match coefficients.`,
  solution: [
    R`With $x=10^n$ the equation becomes $c(x+1)-b=\tfrac{a^2}{9}(x-1)$ after dividing by $\tfrac{x-1}9$.`,
    R`Holding for two values of $n$, it is an identity: $c=\tfrac{a^2}9$, $b=2c$.`,
    R`Digits: $(3,2,1)$ or $(6,8,4)$; the latter gives $a+b+c=18$.`,
    R`The answer is $\textbf{(D)}\ 18$.`
  ],
  shortcut: R`Check $(6,8,4)$: $44-8=36=6^2$ and $4444-88=4356=66^2$.`,
  traps: [R`Allowing $b=18$ for $c=9$.`, R`Using $C_n$ with $n$ digits instead of $2n$.`],
  recognize: R`Repdigits and "for at least two $n$": write them as $d\tfrac{10^n-1}9$, and two values of $n$ make the relation an identity.`
}

};
