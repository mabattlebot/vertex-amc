// Hand-written lessons: 2016 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2016B16': {
  answer: 'E',
  goal: R`An infinite geometric series has positive sum $S$ and second term $1$. We want the least possible $S$. Express $S$ in terms of the ratio $r$ and minimise.`,
  tools: [
    { name: 'Infinite geometric sum', fact: R`S=\frac{a}{1-r},\ |r|<1`, why: R`The partial sums converge to this when $|r|<1$.` },
    { name: 'Maximum of $r(1-r)$', fact: R`r(1-r)\le\tfrac14,\text{ equality at }r=\tfrac12`, why: R`$r(1-r)=\tfrac14-(r-\tfrac12)^2$.` }
  ],
  approach: R`The second term is $ar=1$, so $a=\tfrac1r$ and $S=\tfrac{1}{r(1-r)}$. For $S>0$ we need $0<r<1$. Minimising $S$ means maximising $r(1-r)$.`,
  steps: [
    { title: 'Write $S$ in terms of $r$',
      explain: R`$a=\tfrac1r$, so $S=\dfrac{1/r}{1-r}=\dfrac{1}{r(1-r)}$. If $-1<r<0$, then $r(1-r)<0$ and $S<0$, so $0<r<1$.`,
      check: { q: R`If $ar=1$ and $r=\tfrac14$, what is $S$?`, opts: [R`\tfrac{16}3`, R`4`, R`\tfrac43`, R`5`], ans: 0, why: R`$\tfrac{1}{\frac14\cdot\frac34}$.` } },
    { title: 'Minimise',
      explain: R`$r(1-r)\le\tfrac14$ with equality at $r=\tfrac12$. So $S\ge4$, achieved by $2+1+\tfrac12+\cdots$.`,
      check: { q: R`What is the maximum of $r(1-r)$?`, opts: [R`\tfrac14`, R`\tfrac12`, R`1`, R`\tfrac18`], ans: 0, why: R`At $r=\tfrac12$.` } }
  ],
  bridge: R`Write $S=\tfrac1{r(1-r)}$ and maximise the denominator.`,
  solution: [
    R`$ar=1$ gives $S=\tfrac{1}{r(1-r)}$, with $0<r<1$ for $S>0$.`,
    R`$r(1-r)\le\tfrac14$, so $S\ge4$.`,
    R`Equality at $r=\tfrac12$: $2+1+\tfrac12+\cdots=4$.`,
    R`The answer is $\textbf{(E)}\ 4$.`
  ],
  shortcut: R`AM-GM: $r(1-r)\le\left(\tfrac{r+(1-r)}2\right)^2=\tfrac14$.`,
  traps: [R`Allowing negative $r$ (makes $S$ negative).`, R`Minimising $r(1-r)$ instead of maximising.`],
  recognize: R`Optimising a geometric series under a term condition: express the sum in $r$ and use a quadratic maximum.`
},

'2016B17': {
  answer: 'D',
  goal: R`Numbers $2$–$7$ go on the faces of a cube; each vertex gets the product of its three faces. We maximise the sum of the eight products. The sum factors neatly.`,
  tools: [
    { name: 'Factoring the vertex sum', fact: R`\sum_{\text{vertices}}=(a+b)(c+d)(e+f)`, why: R`With opposite faces $(a,b),(c,d),(e,f)$, each vertex picks one face from each pair; expanding the product gives all $8$ choices.` },
    { name: 'Equal is best (AM-GM)', fact: R`\text{fixed sum }\Rightarrow\text{product largest when factors are equal}`, why: R`$xyz\le\left(\tfrac{x+y+z}3\right)^3$.` }
  ],
  approach: R`Recognise the sum of products as $(a+b)(c+d)(e+f)$, a product of three pair sums totalling $27$. Make the three pair sums equal: $9,9,9$.`,
  steps: [
    { title: 'Factor',
      explain: R`Each vertex uses one face from each opposite pair. Expanding $(a+b)(c+d)(e+f)$ gives exactly the $8$ vertex products.`,
      check: { q: R`How many terms does $(a+b)(c+d)(e+f)$ have when expanded?`, opts: [R`8`, R`6`, R`3`, R`9`], ans: 0, why: R`$2\cdot2\cdot2$.` } },
    { title: 'Maximise',
      explain: R`The three sums add to $2+\cdots+7=27$. The product is largest when they are equal, $9$ each: pairs $(2,7),(3,6),(4,5)$. Value $9^3=729$.`,
      check: { q: R`Which pairing gives three sums of $9$?`, opts: [R`(2,7),(3,6),(4,5)`, R`(2,3),(4,5),(6,7)`, R`(2,6),(3,7),(4,5)`, R`(2,5),(3,4),(6,7)`], ans: 0, why: R`Each sums to $9$.` } }
  ],
  bridge: R`Factor the sum and make the opposite-face sums equal.`,
  solution: [
    R`The sum of vertex products is $(a+b)(c+d)(e+f)$ for opposite pairs.`,
    R`The three sums total $27$; the product is maximised when each is $9$.`,
    R`$(2,7),(3,6),(4,5)$ gives $729$.`,
    R`The answer is $\textbf{(D)}\ 729$.`
  ],
  shortcut: R`"Sum over vertices of face products" always factors into opposite-pair sums.`,
  traps: [R`Putting the largest numbers together at one vertex.`, R`Choosing $1680=2\cdot3\cdots7/3$ style guesses.`],
  recognize: R`Sums of products over all choices factor as a product of sums; then maximise with equal factors.`
},

'2016B18': {
  answer: 'E',
  goal: R`We count ways to write $345$ as a sum of at least two consecutive positive integers. A run of $k$ terms starting at $a$ has sum $\tfrac{k(2a+k-1)}2$, so we need factorisations of $690$.`,
  tools: [
    { name: 'Sum of consecutive integers', fact: R`a+\cdots+(a+k-1)=\frac{k(2a+k-1)}{2}`, why: R`Number of terms times the average.` },
    { name: 'Opposite parity', fact: R`k\text{ and }2a+k-1\text{ have opposite parity}`, why: R`Their difference $2a-1$ is odd.` },
    { name: 'Divisor count', fact: R`690=2\cdot3\cdot5\cdot23\ \Rightarrow\ 16\text{ divisors}`, why: R`$(1+1)^4$.` }
  ],
  approach: R`Set $k(2a+k-1)=690$ with $2\le k<2a+k-1$. Every factor pair $(k,m)$ with $k<m$ gives a valid run (parities automatically differ, since $690$ has exactly one factor $2$). Count pairs and drop $k=1$.`,
  steps: [
    { title: 'Set up',
      explain: R`$k(2a+k-1)=690$. Let $m=2a+k-1$; then $a=\tfrac{m-k+1}2$, a positive integer whenever $m>k$ and they have opposite parity.`,
      check: { q: R`For $k=3$, $m=230$: what is $a$?`, opts: [R`114`, R`115`, R`113`, R`76`], ans: 0, why: R`$\tfrac{230-3+1}2$.` } },
    { title: 'Count factor pairs',
      explain: R`$690$ has $16$ divisors, giving $8$ pairs $k<m$. Since $690=2\times\text{odd}$, one factor of each pair is even and one odd. Exclude $k=1$: $7$ ways.`,
      check: { q: R`How many divisors does $2\cdot3\cdot5\cdot23$ have?`, opts: [R`16`, R`8`, R`4`, R`12`], ans: 0, why: R`$2^4$.` } }
  ],
  bridge: R`Factor $690=k\cdot m$ with $k<m$, excluding $k=1$.`,
  solution: [
    R`A run of $k$ terms from $a$ sums to $\tfrac{k(2a+k-1)}2$, so $k(2a+k-1)=690$.`,
    R`Each factor pair $k<m$ of $690$ gives one run (parities differ automatically).`,
    R`$690$ has $8$ such pairs; excluding $k=1$ leaves $7$.`,
    R`The answer is $\textbf{(E)}\ 7$.`
  ],
  shortcut: R`The number of ways to write $n$ as a sum of consecutive positive integers (including the single term) equals the number of odd divisors of $n$: $345$ has $8$, minus $1$.`,
  traps: [R`Counting $k=1$.`, R`Forgetting that $k$ can be even.`],
  recognize: R`Sums of consecutive integers: $k(2a+k-1)=2n$; count factor pairs with opposite parity (equivalently, odd divisors of $n$).`
},

'2016B19': {
  answer: 'D',
  goal: R`In a $5\times4$ rectangle, segments $AG$ and $AC$ cross $EF$ at $Q$ and $P$. We want $\tfrac{PQ}{EF}$. Parametrising $EF$ gives the positions of $P$ and $Q$ as fractions along it.`,
  tools: [
    { name: 'Coordinates', fact: R`A(0,0),B(5,0),C(5,4),D(0,4),E(4,0),G(5,3),F(2,4)`, why: R`Read from $EB=1$, $CG=1$, $DF=2$.` },
    { name: 'Parametrising $EF$', fact: R`(4-2t,\ 4t),\ 0\le t\le1`, why: R`$t$ is the fraction of the way from $E$ to $F$, so $PQ/EF=|t_P-t_Q|$.` }
  ],
  approach: R`Lines through $A$ are $y=mx$. Intersect each with the parametrised $EF$ to get $t$. The difference of the two $t$-values is the required ratio.`,
  steps: [
    { title: 'Intersect $AG$',
      explain: R`$AG$: $y=\tfrac35x$. $4t=\tfrac35(4-2t)$ gives $20t=12-6t$, $t_Q=\tfrac{6}{13}$.`,
      check: { q: R`Solve $20t=12-6t$.`, opts: [R`\tfrac6{13}`, R`\tfrac35`, R`\tfrac12`, R`\tfrac{12}{14}`], ans: 0, why: R`$26t=12$.` } },
    { title: 'Intersect $AC$',
      explain: R`$AC$: $y=\tfrac45x$. $4t=\tfrac45(4-2t)$ gives $5t=4-2t$, $t_P=\tfrac47$.`,
      check: { q: R`Solve $5t=4-2t$.`, opts: [R`\tfrac47`, R`\tfrac45`, R`\tfrac23`, R`\tfrac57`], ans: 0, why: R`$7t=4$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{PQ}{EF}=\tfrac47-\tfrac6{13}=\tfrac{52-42}{91}=\tfrac{10}{91}$.`,
      check: { q: R`What is $\tfrac47-\tfrac6{13}$?`, opts: [R`\tfrac{10}{91}`, R`\tfrac{2}{91}`, R`\tfrac{1}{9}`, R`\tfrac{10}{81}`], ans: 0, why: R`$\tfrac{52-42}{91}$.` } }
  ],
  bridge: R`Parametrise $EF$ and intersect with both lines through $A$.`,
  solution: [
    R`$EF$: $(4-2t,4t)$.`,
    R`$AG$ ($y=\tfrac35x$) meets it at $t=\tfrac6{13}$; $AC$ ($y=\tfrac45x$) at $t=\tfrac47$.`,
    R`$\tfrac{PQ}{EF}=\tfrac47-\tfrac6{13}=\tfrac{10}{91}$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`Because $t$ measures fraction along $EF$, you never need the length $EF$ itself.`,
  traps: [R`Computing actual distances and dividing (slower, error-prone).`, R`Mixing up $P$ and $Q$ (sign does not matter for the ratio).`],
  recognize: R`Ratios of segments on a line cut by other lines: parametrise and compare parameter values.`
},

'2016B20': {
  answer: 'C',
  goal: R`A dilation sends the circle of radius $2$ at $A(2,2)$ to the circle of radius $3$ at $A'(5,6)$. We want how far the origin moves. A dilation has the form $P\mapsto kP+t$.`,
  tools: [
    { name: 'Dilation formula', fact: R`P'=kP+t\ (k>0)`, why: R`A dilation scales all vectors by $k$ and then translates.` },
    { name: 'Scale factor from radii', fact: R`k=\tfrac32`, why: R`Radius $2$ becomes radius $3$.` }
  ],
  approach: R`Find $k$ from the radii, then $t$ from $A\mapsto A'$. The origin goes to $t$, so the distance moved is $|t|$.`,
  steps: [
    { title: 'Find $t$',
      explain: R`$A'=kA+t$: $(5,6)=\tfrac32(2,2)+t=(3,3)+t$, so $t=(2,3)$.`,
      check: { q: R`If $P'=2P+t$ sends $(1,1)$ to $(5,4)$, what is $t$?`, opts: [R`(3,2)`, R`(4,3)`, R`(2,3)`, R`(5,4)`], ans: 0, why: R`$(5,4)-(2,2)$.` } },
    { title: 'Move the origin',
      explain: R`$O'=k\cdot O+t=(2,3)$. Distance $\sqrt{4+9}=\sqrt{13}$.`,
      check: { q: R`What is the distance from $(0,0)$ to $(2,3)$?`, opts: [R`\sqrt{13}`, R`5`, R`\sqrt5`, R`13`], ans: 0, why: R`$\sqrt{2^2+3^2}$.` } }
  ],
  bridge: R`Write the dilation as $kP+t$, find $t$, and the origin moves to $t$.`,
  solution: [
    R`$k=\tfrac32$ from the radii.`,
    R`$A'=kA+t$ gives $t=(5,6)-(3,3)=(2,3)$.`,
    R`$O\mapsto(2,3)$, a distance of $\sqrt{13}$.`,
    R`The answer is $\textbf{(C)}\ \sqrt{13}$.`
  ],
  shortcut: R`The centre is $(-4,-6)$, but you never need it.`,
  traps: [R`Using $k=\tfrac23$.`, R`Assuming the origin is the centre of dilation.`],
  recognize: R`Dilations and other similarity maps: write $P\mapsto kP+t$ and solve for unknowns from one known point.`
},

'2016B21': {
  answer: 'B',
  goal: R`We need the area enclosed by $x^2+y^2=|x|+|y|$. By symmetry, compute one quadrant and multiply by $4$.`,
  tools: [
    { name: 'Symmetry', fact: R`(x,y)\to(\pm x,\pm y)\text{ leaves the equation unchanged}`, why: R`Only $|x|$, $|y|$, $x^2$, $y^2$ appear.` },
    { name: 'Completing the square', fact: R`x^2-x+y^2-y=0\iff(x-\tfrac12)^2+(y-\tfrac12)^2=\tfrac12`, why: R`Add $\tfrac14+\tfrac14$.` },
    { name: 'Diameter recognition', fact: R`(1,0)\text{ and }(0,1)\text{ are ends of a diameter}`, why: R`Their midpoint is the centre $(\tfrac12,\tfrac12)$ and their distance is $\sqrt2=2r$.` }
  ],
  approach: R`In the first quadrant the curve is a circle through $(0,0)$, $(1,0)$, $(0,1)$. The enclosed piece there is the triangle with vertices $(0,0),(1,0),(0,1)$ plus the half-disc on the diameter from $(1,0)$ to $(0,1)$.`,
  steps: [
    { title: 'First quadrant curve',
      explain: R`$x^2+y^2=x+y$ is $(x-\tfrac12)^2+(y-\tfrac12)^2=\tfrac12$: centre $(\tfrac12,\tfrac12)$, radius $\tfrac1{\sqrt2}$. The points $(1,0)$ and $(0,1)$ are ends of a diameter.`,
      check: { q: R`What is the radius of $(x-\tfrac12)^2+(y-\tfrac12)^2=\tfrac12$?`, opts: [R`\tfrac{1}{\sqrt2}`, R`\tfrac12`, R`\sqrt2`, R`1`], ans: 0, why: R`$\sqrt{1/2}$.` } },
    { title: 'Area in one quadrant',
      explain: R`The region is the right triangle $(0,0),(1,0),(0,1)$ (area $\tfrac12$) plus the outer half-disc on its hypotenuse (area $\tfrac12\pi\cdot\tfrac12=\tfrac\pi4$).`,
      check: { q: R`What is the area of a half-disc of radius $\tfrac1{\sqrt2}$?`, opts: [R`\tfrac\pi4`, R`\tfrac\pi2`, R`\tfrac\pi8`, R`\pi`], ans: 0, why: R`$\tfrac12\pi\cdot\tfrac12$.` } },
    { title: 'Total',
      explain: R`$4\left(\tfrac12+\tfrac\pi4\right)=\pi+2$.`,
      check: { q: R`What is $4(\tfrac12+\tfrac\pi4)$?`, opts: [R`\pi+2`, R`2\pi+2`, R`\pi+1`, R`\pi+4`], ans: 0, why: R`Distribute.` } }
  ],
  bridge: R`Complete the square in one quadrant, split into triangle plus half-disc, and multiply by $4$.`,
  solution: [
    R`By symmetry, work in the first quadrant: $(x-\tfrac12)^2+(y-\tfrac12)^2=\tfrac12$.`,
    R`The enclosed part there is the triangle $(0,0),(1,0),(0,1)$ plus the half-disc on diameter $(1,0)$–$(0,1)$: $\tfrac12+\tfrac\pi4$.`,
    R`Total $4(\tfrac12+\tfrac\pi4)=\pi+2$.`,
    R`The answer is $\textbf{(B)}\ \pi+2$.`
  ],
  shortcut: R`The full region is a square of side $\sqrt2$ (area $2$) with four half-discs (total area $\pi$) on its sides.`,
  traps: [R`Using the whole disc in each quadrant (it extends outside the quadrant).`, R`Forgetting the triangle part.`],
  recognize: R`Equations with $|x|$ and $|y|$: use symmetry and work in one quadrant, completing the square.`
},

'2016B22': {
  answer: 'A',
  goal: R`In a round robin where every team went $10$–$10$, we count "cyclic" triples ($A$ beats $B$ beats $C$ beats $A$). Count the opposite: triples where one team beat both others.`,
  tools: [
    { name: 'Number of teams', fact: R`10+10=20\text{ opponents}\Rightarrow21\text{ teams}`, why: R`Each team plays every other once.` },
    { name: 'Non-cyclic triples', fact: R`\text{exactly one team beats both others}`, why: R`In a triple, either there is a top team or the results form a cycle.` },
    { name: 'Counting by the top team', fact: R`\#\text{non-cyclic}=\sum_{\text{teams}}\binom{\text{wins}}{2}`, why: R`Choose two teams that the top team beat.` }
  ],
  approach: R`Total triples is $\binom{21}{3}$. A non-cyclic triple has a unique team that beat the other two; count such triples by choosing that team and two of its $10$ victims. Subtract.`,
  steps: [
    { title: 'Total',
      explain: R`$21$ teams, $\binom{21}{3}=1330$ triples.`,
      check: { q: R`What is $\binom{21}{3}$?`, opts: [R`1330`, R`1140`, R`7980`, R`210`], ans: 0, why: R`$\tfrac{21\cdot20\cdot19}{6}$.` } },
    { title: 'Non-cyclic',
      explain: R`Each team is the top of $\binom{10}{2}=45$ triples: $21\cdot45=945$.`,
      check: { q: R`What is $21\cdot45$?`, opts: [R`945`, R`905`, R`990`, R`845`], ans: 0, why: R`Multiply.` } },
    { title: 'Cyclic',
      explain: R`$1330-945=385$.`,
      check: { q: R`What is $1330-945$?`, opts: [R`385`, R`395`, R`485`, R`375`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Subtract the triples with a top team from all triples.`,
  solution: [
    R`There are $21$ teams and $\binom{21}3=1330$ triples.`,
    R`Triples with a team beating both others: $21\binom{10}{2}=945$.`,
    R`Cyclic triples: $1330-945=385$.`,
    R`The answer is $\textbf{(A)}\ 385$.`
  ],
  shortcut: R`Cyclic triples $=\binom n3-\sum\binom{w_i}2$ for any tournament.`,
  traps: [R`Using $20$ teams.`, R`Counting each non-cyclic triple more than once.`],
  recognize: R`Counting cyclic triangles in tournaments: subtract transitive triples, counted by their top vertex.`
},

'2016B23': {
  answer: 'C',
  goal: R`In a regular hexagon, lines $AB$, $ZW$, $YX$, $ED$ are parallel and equally spaced. Hexagon $WCXYFZ$ is the middle band of the big hexagon. We want its share of the area.`,
  tools: [
    { name: 'Coordinates for a hexagon', fact: R`A(0,0),B(1,0),C(\tfrac32,\tfrac{\sqrt3}2),D(1,\sqrt3),E(0,\sqrt3),F(-\tfrac12,\tfrac{\sqrt3}2)`, why: R`Side $1$, with $AB$ horizontal.` },
    { name: 'Area by horizontal slices', fact: R`\text{trapezoid area}=\tfrac{(w_1+w_2)}{2}h`, why: R`Between two horizontal lines, the band is a trapezoid when the side boundaries are straight.` },
    { name: 'Hexagon area', fact: R`\tfrac{3\sqrt3}{2}s^2`, why: R`Six equilateral triangles.` }
  ],
  approach: R`The four lines are at heights $0,\tfrac{\sqrt3}3,\tfrac{2\sqrt3}3,\sqrt3$. Find the band's width at its bottom, middle ($C$ and $F$ level) and top, then add two trapezoids.`,
  steps: [
    { title: 'Widths of the band',
      explain: R`At height $\tfrac{\sqrt3}3$: $Z=(-\tfrac13,\tfrac{\sqrt3}3)$, $W=(\tfrac43,\tfrac{\sqrt3}3)$, width $\tfrac53$. At height $\tfrac{\sqrt3}2$ (through $F$ and $C$): width $2$. At height $\tfrac{2\sqrt3}3$: width $\tfrac53$ again.`,
      check: { q: R`How wide is a regular hexagon of side $1$ at the level of $C$ and $F$?`, opts: [R`2`, R`1`, R`\sqrt3`, R`\tfrac32`], ans: 0, why: R`That is the long diagonal $FC$.` } },
    { title: 'Area of the band',
      explain: R`Two trapezoids of height $\tfrac{\sqrt3}2-\tfrac{\sqrt3}3=\tfrac{\sqrt3}6$ with parallel sides $\tfrac53$ and $2$: $2\cdot\tfrac{11/3}{2}\cdot\tfrac{\sqrt3}6=\tfrac{11\sqrt3}{18}$.`,
      check: { q: R`What is $\tfrac{\sqrt3}2-\tfrac{\sqrt3}3$?`, opts: [R`\tfrac{\sqrt3}6`, R`\tfrac{\sqrt3}5`, R`\tfrac{\sqrt3}{3}`, R`\tfrac{1}{6}`], ans: 0, why: R`$\sqrt3(\tfrac36-\tfrac26)$.` } },
    { title: 'Ratio',
      explain: R`Hexagon area $\tfrac{3\sqrt3}2$. Ratio $\tfrac{11\sqrt3/18}{3\sqrt3/2}=\tfrac{22}{54}=\tfrac{11}{27}$.`,
      check: { q: R`Simplify $\tfrac{22}{54}$.`, opts: [R`\tfrac{11}{27}`, R`\tfrac{11}{26}`, R`\tfrac{2}{5}`, R`\tfrac{13}{27}`], ans: 0, why: R`Divide by $2$.` } }
  ],
  bridge: R`Find the band's widths at three heights and add two trapezoids.`,
  solution: [
    R`With side $1$, the lines are at heights $0,\tfrac{\sqrt3}3,\tfrac{2\sqrt3}3,\sqrt3$.`,
    R`The band $WCXYFZ$ has width $\tfrac53$ at its top and bottom and $2$ in the middle.`,
    R`Its area is $2\cdot\tfrac{\frac53+2}{2}\cdot\tfrac{\sqrt3}6=\tfrac{11\sqrt3}{18}$.`,
    R`Ratio to $\tfrac{3\sqrt3}2$: $\tfrac{11}{27}$. The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Each outer band is a trapezoid with parallel sides $1$ and $\tfrac53$ and height $\tfrac{\sqrt3}3$: $\tfrac{4\sqrt3}{9}$ each; subtract both from the hexagon.`,
  traps: [R`Assuming the three bands have equal area ($\tfrac13$).`, R`Using the height between $AB$ and $ED$ as $2$.`],
  recognize: R`Regions cut from regular polygons by parallel lines: coordinates and horizontal widths turn areas into trapezoids.`
},

'2016B24': {
  answer: 'D',
  goal: R`We count four-digit $abcd$ whose two-digit pieces $\overline{ab}<\overline{bc}<\overline{cd}$ form an arithmetic sequence. The arithmetic condition is one linear equation in the digits.`,
  tools: [
    { name: 'Arithmetic sequence', fact: R`2\cdot\overline{bc}=\overline{ab}+\overline{cd}`, why: R`The middle term is the average of its neighbours.` },
    { name: 'Rearranged digit equation', fact: R`19b=10a+8c+d`, why: R`$2(10b+c)=(10a+b)+(10c+d)$.` },
    { name: 'Casework on one digit', fact: R`\text{For each }b,\ \text{list digit solutions}`, why: R`$b$ determines the size of the right side.` }
  ],
  approach: R`Turn the condition into $19b=10a+8c+d$. For each $b$, find digits $a\ge1$, $c$, $d$ satisfying it, and check that the sequence is increasing ($\overline{ab}<\overline{bc}$).`,
  steps: [
    { title: 'Derive the equation',
      explain: R`$2(10b+c)=10a+b+10c+d$ simplifies to $19b=10a+8c+d$.`,
      check: { q: R`Check $4692$: is $19\cdot6=10\cdot4+8\cdot9+2$?`, opts: [R`\text{Yes: }114=114`, R`\text{No}`, R`\text{Only mod }10`, R`\text{Yes: }112=112`], ans: 0, why: R`$40+72+2=114$.` } },
    { title: 'Casework on $b$',
      explain: R`$b=2$: $1234$. $b=3$: $1357,2345$. $b=4$: $1482,2468,2470,3456$. $b=5$: $2593,3579,3581,4567$. $b=6$: $4692,5678,5680$. $b=7$: $6789,6791$. $b=8$: $8890$. $b=9$: none. (For each $b$, try $a$ values and solve $8c+d=19b-10a$ with digits, then check increasing.)`,
      check: { q: R`For $b=7$, $a=6$: solve $8c+d=73$ with digits.`, opts: [R`c=8,d=9\ \text{or}\ c=9,d=1`, R`c=9,d=1\text{ only}`, R`c=8,d=9\text{ only}`, R`\text{none}`], ans: 0, why: R`$64+9=73$ and $72+1=73$.` } },
    { title: 'Total',
      explain: R`$1+2+4+4+3+2+1=17$.`,
      check: { q: R`What is $1+2+4+4+3+2+1$?`, opts: [R`17`, R`16`, R`15`, R`18`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Reduce to $19b=10a+8c+d$ and do casework on $b$.`,
  solution: [
    R`The condition $2\cdot\overline{bc}=\overline{ab}+\overline{cd}$ becomes $19b=10a+8c+d$.`,
    R`Casework on $b$ (checking $\overline{ab}<\overline{bc}$) gives $1,2,4,4,3,2,1$ numbers for $b=2,\ldots,8$.`,
    R`Total $17$.`,
    R`The answer is $\textbf{(D)}\ 17$.`
  ],
  shortcut: R`Many solutions are consecutive digits ($1234$, $2345$, …, $6789$) or "step $2$" patterns; casework catches the rest.`,
  traps: [R`Forgetting solutions where $d$ wraps (like $2470$).`, R`Including non-increasing cases like $2222$.`],
  recognize: R`Digit conditions involving overlapping two-digit numbers: expand into a single linear equation in digits and do casework.`
},

'2016B25': {
  answer: 'A',
  goal: R`$f(x)=\sum_{k=2}^{10}(\lfloor kx\rfloor-k\lfloor x\rfloor)$. We count distinct values for $x\ge0$. Each term depends only on the fractional part of $x$.`,
  tools: [
    { name: 'Floor of a multiple', fact: R`\lfloor kx\rfloor=k\lfloor x\rfloor+\lfloor k\{x\}\rfloor`, why: R`Write $x=\lfloor x\rfloor+\{x\}$.` },
    { name: 'Jump points', fact: R`\lfloor k t\rfloor\text{ jumps at }t=\tfrac jk`, why: R`It increases when $kt$ crosses an integer.` },
    { name: "Euler's totient", fact: R`\#\{\text{reduced fractions in }(0,1)\text{ with denominator }k\}=\varphi(k)`, why: R`Numerators coprime to $k$.` }
  ],
  approach: R`$f(x)=\sum_k\lfloor k\{x\}\rfloor$, a non-decreasing step function of $t=\{x\}\in[0,1)$. It jumps at every fraction $\tfrac jk$ with $2\le k\le10$. The number of values is $1$ plus the number of distinct jump points, which are the reduced fractions with denominators $2$ to $10$.`,
  steps: [
    { title: 'Reduce to the fractional part',
      explain: R`$\lfloor kx\rfloor-k\lfloor x\rfloor=\lfloor k\{x\}\rfloor$. So $f$ depends only on $t=\{x\}\in[0,1)$, and it is non-decreasing in $t$.`,
      check: { q: R`What is $\lfloor3\cdot2.4\rfloor-3\lfloor2.4\rfloor$?`, opts: [R`1`, R`0`, R`2`, R`7`], ans: 0, why: R`$7-6$, equal to $\lfloor3\cdot0.4\rfloor$.` } },
    { title: 'Count jump points',
      explain: R`$f$ jumps exactly at fractions in $(0,1)$ with denominator $\le10$. Distinct ones are reduced fractions $\tfrac jk$, counted by $\varphi(k)$: $\varphi(2..10)=1,2,2,4,2,6,4,6,4$, total $31$.`,
      check: { q: R`What is $\varphi(9)$?`, opts: [R`6`, R`3`, R`8`, R`9`], ans: 0, why: R`$1,2,4,5,7,8$.` } },
    { title: 'Count values',
      explain: R`Starting at $f=0$ for $t=0$, each of the $31$ jumps gives a new value: $32$ values.`,
      check: { q: R`If a step function starts at one value and jumps up $31$ times, how many values does it take?`, opts: [R`32`, R`31`, R`30`, R`62`], ans: 0, why: R`Initial value plus one per jump.` } }
  ],
  bridge: R`Reduce to $\{x\}$, count distinct jump fractions with $\varphi$, and add $1$.`,
  solution: [
    R`$f(x)=\sum_{k=2}^{10}\lfloor k\{x\}\rfloor$, non-decreasing in $\{x\}\in[0,1)$.`,
    R`It jumps exactly at the reduced fractions $\tfrac jk\in(0,1)$ with $2\le k\le10$.`,
    R`There are $\sum_{k=2}^{10}\varphi(k)=31$ of them.`,
    R`So $f$ takes $32$ values. The answer is $\textbf{(A)}\ 32$.`
  ],
  shortcut: R`Count Farey fractions of order $10$ in $(0,1)$: $31$.`,
  traps: [R`Counting all $j/k$ including duplicates like $\tfrac24$.`, R`Thinking $f$ grows without bound (it depends only on $\{x\}$).`],
  recognize: R`Sums like $\lfloor kx\rfloor-k\lfloor x\rfloor$: reduce to the fractional part; values change at fractions with small denominators.`
}

};
