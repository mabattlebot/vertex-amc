// Hand-written lessons: 2019 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2019B16': {
  answer: 'A',
  goal: R`In right triangle $ABC$ (right angle at $C$), $D$ on $AB$ and $E$ on $BC$ satisfy $AC=CD$, $DE=EB$, and $AC:DE=4:3$. We want $AD:DB$. Two isosceles triangles hide a right angle at $D$, which unlocks the lengths.`,
  tools: [
    { name: 'Base angles of an isosceles triangle', fact: R`AC=CD\Rightarrow\angle CAD=\angle CDA;\quad DE=EB\Rightarrow\angle EDB=\angle EBD`, why: R`Equal sides face equal angles.` },
    { name: 'Angles in a right triangle', fact: R`\angle A+\angle B=90^\circ`, why: R`The right angle at $C$ uses up $90^\circ$ of the $180^\circ$.` },
    { name: 'Pythagorean triple $3$-$4$-$5$', fact: R`CD=4,\ DE=3,\ \angle CDE=90^\circ\Rightarrow CE=5`, why: R`Recognise the triple instead of computing.` },
    { name: 'Coordinates for ratios on a segment', fact: R`D=A+t(B-A)\Rightarrow AD:DB=t:(1-t)`, why: R`A point on a segment is determined by the fraction of the way along it.` }
  ],
  approach: R`Name the angle at $B$ as $\beta$ and chase angles around $D$: the two isosceles triangles force $\angle CDE=90^\circ$. With $CD=4$ and $DE=3$, the $3$-$4$-$5$ triangle gives $CE=5$, so $BC=CE+EB=8$. Then the whole triangle is known and $D$ is found by $CD=4$.`,
  steps: [
    { title: 'Angle chase at $D$',
      explain: R`Let $\angle B=\beta$, so $\angle A=90^\circ-\beta$. Since $AC=CD$, $\angle CDA=\angle A=90^\circ-\beta$. Since $DE=EB$, $\angle EDB=\beta$. The angles at $D$ along line $AB$ sum to $180^\circ$: $\angle CDE=180^\circ-(90^\circ-\beta)-\beta=90^\circ$.`,
      check: { q: R`If $\angle CDA=50^\circ$ and $\angle EDB=40^\circ$ on a straight line through $D$, what is $\angle CDE$?`, opts: [R`90^\circ`, R`80^\circ`, R`100^\circ`, R`45^\circ`], ans: 0, why: R`$180-50-40$.` } },
    { title: 'Find the side lengths',
      explain: R`Scale so $AC=CD=4$ and $DE=EB=3$. Right triangle $CDE$ has legs $4,3$, so $CE=5$ and $BC=5+3=8$. Then $AB=\sqrt{4^2+8^2}=4\sqrt5$.`,
      check: { q: R`What is $\sqrt{4^2+8^2}$?`, opts: [R`4\sqrt5`, R`12`, R`2\sqrt5`, R`8\sqrt2`], ans: 0, why: R`$\sqrt{80}=4\sqrt5$.` } },
    { title: 'Locate $D$',
      explain: R`Put $C=(0,0)$, $A=(0,4)$, $B=(8,0)$. A point on $AB$ is $(8t,4-4t)$. $CD=4$ gives $64t^2+(4-4t)^2=16$, i.e. $80t^2-32t=0$, so $t=\tfrac25$. Then $AD:DB=\tfrac25:\tfrac35=2:3$.`,
      check: { q: R`If $D$ is $\tfrac25$ of the way from $A$ to $B$, what is $AD:DB$?`, opts: [R`2:3`, R`2:5`, R`3:2`, R`3:5`], ans: 0, why: R`$\tfrac25:\tfrac35$.` } }
  ],
  bridge: R`Chase angles to find the right angle at $D$, use $3$-$4$-$5$ to get $BC$, then locate $D$.`,
  solution: [
    R`With $\angle B=\beta$, the isosceles triangles give $\angle CDA=90^\circ-\beta$ and $\angle EDB=\beta$, so $\angle CDE=90^\circ$.`,
    R`Taking $CD=4$, $DE=EB=3$: $CE=5$ and $BC=8$, $AC=4$.`,
    R`In coordinates $D=(8t,4-4t)$ with $CD=4$ gives $t=\tfrac25$.`,
    R`$AD:DB=2:3$. The answer is $\textbf{(A)}\ 2:3$.`
  ],
  shortcut: R`Once $BC=8$ and $AC=4$, $AD=2\cdot AC\cos A=8\cdot\tfrac{4}{4\sqrt5}=\tfrac{8}{\sqrt5}$ and $AB=4\sqrt5$, so $AD:DB=\tfrac85:\tfrac{12}5$.`,
  traps: [R`Assuming $D$ is the foot of the altitude.`, R`Forgetting that $BC=CE+EB$, not $CE$.`],
  recognize: R`Several isosceles triangles sharing a vertex on a line: chase base angles; the angles at that vertex often add to a right angle.`
},

'2019B17': {
  answer: 'C',
  goal: R`Two balls land independently in bin $k$ with probability $2^{-k}$. We want $P(\text{red}>\text{green})$. Symmetry between the two balls does most of the work once we know the chance they tie.`,
  tools: [
    { name: 'Symmetry', fact: R`P(R>G)=P(G>R)`, why: R`The two balls have identical, independent distributions.` },
    { name: 'Complement', fact: R`P(R>G)+P(G>R)+P(R=G)=1`, why: R`Exactly one of the three happens.` },
    { name: 'Geometric series', fact: R`\sum_{k\ge1}r^k=\frac{r}{1-r}`, why: R`Sum of an infinite geometric series with $|r|<1$.` }
  ],
  approach: R`Directly summing $P(R=j)P(G=k)$ over $j>k$ is a double series. Instead compute the easier event "same bin", then split the rest evenly by symmetry.`,
  steps: [
    { title: 'Probability of a tie',
      explain: R`$P(R=G)=\sum_k2^{-k}\cdot2^{-k}=\sum_k4^{-k}=\tfrac{1/4}{1-1/4}=\tfrac13$.`,
      check: { q: R`What is $\sum_{k\ge1}9^{-k}$?`, opts: [R`\tfrac18`, R`\tfrac19`, R`\tfrac1{10}`, R`\tfrac89`], ans: 0, why: R`$\tfrac{1/9}{8/9}$.` } },
    { title: 'Use symmetry',
      explain: R`The remaining probability $1-\tfrac13=\tfrac23$ splits equally between "red higher" and "green higher". So $P(R>G)=\tfrac13$.`,
      check: { q: R`If $P(\text{tie})=\tfrac25$ in a symmetric game, what is $P(\text{player 1 wins})$?`, opts: [R`\tfrac3{10}`, R`\tfrac35`, R`\tfrac15`, R`\tfrac12`], ans: 0, why: R`$\tfrac12(1-\tfrac25)$.` } }
  ],
  bridge: R`Find the probability of a tie and split the rest evenly.`,
  solution: [
    R`$P(R=G)=\sum_k4^{-k}=\tfrac13$.`,
    R`By symmetry $P(R>G)=P(G>R)$.`,
    R`So $P(R>G)=\tfrac12(1-\tfrac13)=\tfrac13$.`,
    R`The answer is $\textbf{(C)}\ \tfrac13$.`
  ],
  shortcut: R`"Which of two identical independent quantities is bigger" is always $\tfrac12(1-P(\text{tie}))$.`,
  traps: [R`Answering $\tfrac12$ by forgetting ties.`, R`Summing the double series and making an index error.`],
  recognize: R`Comparisons between two independent, identically distributed random values: compute the tie probability and use symmetry.`
},

'2019B18': {
  answer: 'C',
  goal: R`Henry repeatedly walks $\tfrac34$ of the way toward the gym (at $2$ km) or home (at $0$). In the long run he bounces between two points $A$ and $B$. We need $|A-B|$. The limiting points must be "fixed" by the walking rule.`,
  tools: [
    { name: 'Moving a fraction of the way', fact: R`\text{From }x\text{ toward }g:\ x+\tfrac34(g-x)=\tfrac14x+\tfrac34g`, why: R`He covers three quarters of the remaining gap.` },
    { name: 'Steady state (fixed points)', fact: R`b=\tfrac14a+\tfrac34\cdot2,\quad a=\tfrac14b+\tfrac34\cdot0`, why: R`In the limit, walking toward the gym from $a$ lands at $b$, and walking home from $b$ lands at $a$.` }
  ],
  approach: R`Do not follow the walk step by step. Assume it settles into bouncing between $a$ (near home) and $b$ (near the gym). Each must be what the rule produces from the other. That gives two linear equations.`,
  steps: [
    { title: 'Write the rule',
      explain: R`Walking $\tfrac34$ of the way from $x$ to the gym at $2$ lands at $\tfrac14x+\tfrac32$. Walking $\tfrac34$ of the way from $x$ toward home at $0$ lands at $\tfrac14x$.`,
      check: { q: R`From $1$ km, walking $\tfrac34$ of the way to the gym at $2$ km lands where?`, opts: [R`1.75`, R`1.5`, R`0.75`, R`2`], ans: 0, why: R`$1+\tfrac34\cdot1$.` } },
    { title: 'Solve for the limits',
      explain: R`$a=\tfrac14b$ and $b=\tfrac14a+\tfrac32$. Substitute: $b=\tfrac1{16}b+\tfrac32$, so $\tfrac{15}{16}b=\tfrac32$, $b=\tfrac85$, and $a=\tfrac25$. So $|A-B|=\tfrac65$.`,
      check: { q: R`Solve $b=\tfrac1{16}b+\tfrac32$.`, opts: [R`\tfrac85`, R`\tfrac32`, R`\tfrac{24}{15}\cdot\tfrac12`, R`2`], ans: 0, why: R`$b=\tfrac32\cdot\tfrac{16}{15}=\tfrac85$.` } }
  ],
  bridge: R`Set up the two fixed-point equations and solve.`,
  solution: [
    R`Toward the gym from $x$: $\tfrac14x+\tfrac32$; toward home: $\tfrac14x$.`,
    R`The limit points satisfy $a=\tfrac14b$, $b=\tfrac14a+\tfrac32$.`,
    R`Solving: $b=\tfrac85$, $a=\tfrac25$.`,
    R`$|A-B|=\tfrac65$. The answer is $\textbf{(C)}\ \tfrac65$.`
  ],
  shortcut: R`The gap shrinks to the fixed distance $d$ with $d=\tfrac34(2-a)-\ldots$; solving the pair of linear equations is fastest.`,
  traps: [R`Following many steps numerically and rounding.`, R`Using $\tfrac34$ of the total distance $2$ each time instead of $\tfrac34$ of the remaining distance.`],
  recognize: R`"In the long run it oscillates between two points" or "approaches a value": write the equations the limit must satisfy instead of iterating.`
},

'2019B19': {
  answer: 'C',
  goal: R`$S$ is the set of divisors of $100000=2^55^5$. We count distinct numbers that equal a product of two different elements of $S$. Every such product has the form $2^a5^b$; we must find which exponent pairs are reachable.`,
  tools: [
    { name: 'Divisors of $2^55^5$', fact: R`2^x5^y,\ 0\le x,y\le5`, why: R`A divisor takes each prime to a power at most its power in $n$.` },
    { name: 'Exponents add under multiplication', fact: R`2^{x_1}5^{y_1}\cdot2^{x_2}5^{y_2}=2^{x_1+x_2}5^{y_1+y_2}`, why: R`Multiplying powers of the same base adds exponents.` },
    { name: 'Counting by complement', fact: R`\#\text{reachable}=121-\#\text{only reachable with equal factors}`, why: R`Products of any two divisors (allowing equal) give all $11\times11$ exponent pairs.` }
  ],
  approach: R`Allowing the two divisors to be equal, products give $2^a5^b$ with $0\le a,b\le10$: $121$ numbers. Then remove those that can only be made by multiplying a divisor by itself. That happens only at the extreme corners of the exponent grid.`,
  steps: [
    { title: 'All products (equal allowed)',
      explain: R`Any $0\le a,b\le10$ can be split as $a=x_1+x_2$, $b=y_1+y_2$ with each part between $0$ and $5$. So there are $11\cdot11=121$ products.`,
      check: { q: R`How many values of $a=x_1+x_2$ with $0\le x_i\le5$?`, opts: [R`11`, R`10`, R`6`, R`36`], ans: 0, why: R`$a$ ranges from $0$ to $10$.` } },
    { title: 'Which need equal factors?',
      explain: R`A pair $(a,b)$ needs $x_1=x_2$ and $y_1=y_2$ only if every split is forced to be equal. $a=0$ forces $0+0$; $a=10$ forces $5+5$; any other $a$ has a split with unequal parts. So the forced cases are $a\in\{0,10\}$ and $b\in\{0,10\}$: $1,\ 2^{10},\ 5^{10},\ 10^{10}$. That is $4$ numbers.`,
      check: { q: R`Can $2^{10}$ be written as a product of two distinct divisors of $2^55^5$?`, opts: [R`\text{No: only }2^5\cdot2^5`, R`\text{Yes: }2^4\cdot2^6`, R`\text{Yes: }2^{10}\cdot1`, R`\text{Yes: }2^8\cdot2^2`], ans: 0, why: R`$2^6$ and $2^{10}$ are not divisors.` } },
    { title: 'Count',
      explain: R`$121-4=117$.`,
      check: { q: R`What is $121-4$?`, opts: [R`117`, R`119`, R`115`, R`121`], ans: 0, why: R`Direct subtraction.` } }
  ],
  bridge: R`Count all exponent pairs, then remove the four corners that force equal factors.`,
  solution: [
    R`Products of two divisors are $2^a5^b$ with $0\le a,b\le10$: $121$ possibilities.`,
    R`Unless $a\in\{0,10\}$ and $b\in\{0,10\}$, there is a split into two distinct divisors.`,
    R`The four corner values $1,2^{10},5^{10},10^{10}$ need equal factors.`,
    R`$121-4=117$. The answer is $\textbf{(C)}\ 117$.`
  ],
  shortcut: R`Think of the exponent grid $0..10\times0..10$ and remove the corners.`,
  traps: [R`Removing all perfect squares (most squares have other factorizations, e.g. $2^2\cdot5^2=2^1\cdot2^15^2$).`, R`Counting pairs of divisors instead of distinct products.`],
  recognize: R`Products of divisors: work with exponent vectors; sums of exponents form a grid, and only the extremes are forced.`
},

'2019B20': {
  answer: 'E',
  goal: R`A circle of radius $2$ centred at $F$ (the top of the middle semicircle) covers part of three unit semicircles on $AD$. The shaded region is inside the circle and outside the semicircles. We must express its area as $\tfrac ab\pi-\sqrt c+d$.`,
  tools: [
    { name: 'Coordinates', fact: R`B=(-1,0),\ C=(1,0),\ F=(0,1),\ \text{circle: }x^2+(y-1)^2=4`, why: R`Placing $AD$ on the $x$-axis makes every circle easy to write.` },
    { name: 'Sector area', fact: R`\tfrac{\theta}{360^\circ}\pi r^2`, why: R`A sector is the fraction $\theta/360^\circ$ of the disc.` },
    { name: 'Area by decomposition', fact: R`\text{shaded}=4\pi-\tfrac{\pi}{2}-2X`, why: R`The middle semicircle lies entirely inside the circle, and each outer semicircle overlaps it in a region of area $X$.` }
  ],
  approach: R`The whole middle semicircle is inside the radius-$2$ circle (its farthest points $B,C$ are only $\sqrt2$ from $F$). The outer semicircles are only partly inside, so the work is finding $X$, the overlap of one outer semicircle with the circle. Note the circle passes through $E=(-2,1)$ and crosses $AD$ at $x=-\sqrt3$.`,
  steps: [
    { title: 'Where the circle meets the left semicircle',
      explain: R`The circle $x^2+(y-1)^2=4$ passes through $E=(-2,1)$ (top of the left semicircle) and meets the $x$-axis at $x=\pm\sqrt3$. The overlap $X$ is the quarter of the left semicircle to the right of $x=-2$ (area $\tfrac\pi4$) minus a small corner region $W$ near $(-2,0)$ that lies outside the big circle.`,
      check: { q: R`Where does $x^2+(y-1)^2=4$ meet the $x$-axis?`, opts: [R`x=\pm\sqrt3`, R`x=\pm2`, R`x=\pm1`, R`x=\pm\sqrt5`], ans: 0, why: R`$x^2+1=4$.` } },
    { title: 'Area of the corner region $W$',
      explain: R`Take the rectangle $[-2,0]\times[0,1]$, area $2$. The part of the big disc inside it is a $30^\circ$ sector from $F$ (between directions to $E$ and to $(-\sqrt3,0)$), area $\tfrac{30}{360}\cdot4\pi=\tfrac\pi3$, plus the triangle $F,(-\sqrt3,0),(0,0)$, area $\tfrac{\sqrt3}2$. So $W=2-\tfrac\pi3-\tfrac{\sqrt3}2$ and $X=\tfrac\pi4-W=\tfrac{7\pi}{12}+\tfrac{\sqrt3}2-2$.`,
      check: { q: R`What is the area of a $30^\circ$ sector of a circle of radius $2$?`, opts: [R`\tfrac\pi3`, R`\tfrac\pi6`, R`\tfrac{2\pi}3`, R`\pi`], ans: 0, why: R`$\tfrac1{12}\cdot4\pi$.` } },
    { title: 'Assemble',
      explain: R`Shaded $=4\pi-\tfrac\pi2-2X=4\pi-\tfrac\pi2-\tfrac{7\pi}6-\sqrt3+4=\tfrac{7\pi}3-\sqrt3+4$. So $a+b+c+d=7+3+3+4=17$.`,
      check: { q: R`What is $4\pi-\tfrac\pi2-\tfrac{7\pi}{6}$?`, opts: [R`\tfrac{7\pi}3`, R`\tfrac{5\pi}3`, R`\tfrac{8\pi}3`, R`2\pi`], ans: 0, why: R`$\tfrac{24-3-7}{6}\pi=\tfrac{14}6\pi$.` } }
  ],
  bridge: R`Subtract the middle semicircle and twice the overlap $X$ of an outer semicircle with the circle.`,
  solution: [
    R`Coordinates: $F=(0,1)$, circle $x^2+(y-1)^2=4$; the middle semicircle lies inside it.`,
    R`The left semicircle's overlap is $X=\tfrac\pi4-W$, where $W=2-\tfrac\pi3-\tfrac{\sqrt3}2$ is the corner of the rectangle $[-2,0]\times[0,1]$ outside the circle.`,
    R`So $X=\tfrac{7\pi}{12}+\tfrac{\sqrt3}2-2$, and the right side is the same by symmetry.`,
    R`Shaded $=4\pi-\tfrac\pi2-2X=\tfrac{7\pi}3-\sqrt3+4$.`,
    R`$7+3+3+4=17$. The answer is $\textbf{(E)}\ 17$.`
  ],
  shortcut: R`Find where the big circle crosses the line through $E$ and $G$ (exactly at $E$ and $G$) and the $x$-axis ($\pm\sqrt3$); those points give the $30^\circ$ and $\sqrt3$ pieces.`,
  traps: [R`Assuming the outer semicircles lie entirely inside the circle.`, R`Forgetting the part of the circle below $AD$, which is also shaded.`],
  recognize: R`Areas between overlapping circles: use coordinates to find intersection points, then build each piece from sectors and triangles.`
},

'2019B21': {
  answer: 'B',
  goal: R`Debra flips until she gets $HH$ or $TT$. We want the probability that she ends with $HH$ and she saw her second tail before her second head. With no two equal flips in a row before stopping, her flips alternate.`,
  tools: [
    { name: 'Alternating sequences', fact: R`\text{Before stopping, flips alternate }HTHT\ldots\text{ or }THTH\ldots`, why: R`Any repeat ends the game.` },
    { name: 'First-step equations', fact: R`p=\tfrac12\cdot\text{(stop)}+\tfrac12\cdot p'`, why: R`Condition on the next flip and write the probability recursively.` }
  ],
  approach: R`For the second tail to come before the second head, the start must be $T,H,T$ (starting with $H$ would let the second head arrive first; $TT$ would end with tails). After $THT$ we need to eventually end with $HH$. Set up a small recursion for "ending with $HH$ from a position where the last flip was $T$".`,
  steps: [
    { title: 'The forced start',
      explain: R`The first flip must be $T$ (if it were $H$, the next head would be the second head before any second tail). Then $H$ (otherwise $TT$ ends with tails). Then $T$, so the second tail appears while there is only one head. Probability $\tfrac18$.`,
      check: { q: R`What is the probability the first three flips are exactly $T,H,T$?`, opts: [R`\tfrac18`, R`\tfrac14`, R`\tfrac38`, R`\tfrac1{16}`], ans: 0, why: R`$(\tfrac12)^3$.` } },
    { title: 'Recursion after a $T$',
      explain: R`Let $p$ be the chance of eventually ending with $HH$ when the last flip was $T$. Next flip $T$: ends with $TT$ (fail). Next flip $H$: then $H$ again wins, or $T$ returns to the same state. So $p=\tfrac12\left(\tfrac12+\tfrac12p\right)$, giving $p=\tfrac13$.`,
      check: { q: R`Solve $p=\tfrac14+\tfrac14p$.`, opts: [R`\tfrac13`, R`\tfrac14`, R`\tfrac12`, R`\tfrac15`], ans: 0, why: R`$\tfrac34p=\tfrac14$.` } },
    { title: 'Combine',
      explain: R`$\tfrac18\cdot\tfrac13=\tfrac1{24}$.`,
      check: { q: R`What is $\tfrac18\cdot\tfrac13$?`, opts: [R`\tfrac1{24}`, R`\tfrac1{11}`, R`\tfrac3{8}`, R`\tfrac1{12}`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Force the start $THT$, then use a one-state recursion for finishing with $HH$.`,
  solution: [
    R`The sequence must begin $T,H,T$: probability $\tfrac18$.`,
    R`From a state ending in $T$, let $p=P(\text{finish with }HH)$; $p=\tfrac12(\tfrac12+\tfrac12p)$, so $p=\tfrac13$.`,
    R`Total $\tfrac18\cdot\tfrac13=\tfrac1{24}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac1{24}$.`
  ],
  shortcut: R`After $THT$ the rest is $(HT)^kHH$ with probability $\sum_k(\tfrac14)^k\tfrac14=\tfrac13$.`,
  traps: [R`Allowing the sequence to start with $H$.`, R`Forgetting that after $THT$ another $T$ ends the game with $TT$.`],
  recognize: R`Coin games that stop at a pattern: identify the forced prefix, then use first-step (Markov) equations for the rest.`
},

'2019B22': {
  answer: 'B',
  goal: R`Three players each start with $\$1$ and pass money at random each ring. We want the probability all three have $\$1$ after $2019$ rings. Only two kinds of states exist, which makes a tiny Markov chain.`,
  tools: [
    { name: 'State reduction', fact: R`\text{States: }(1,1,1)\text{ or a permutation of }(2,1,0)`, why: R`Money is conserved ($\$3$ total) and someone with $\$0$ cannot give.` },
    { name: 'Transition probabilities', fact: R`P\big((1,1,1)\to(1,1,1)\big)=\tfrac28,\quad P\big((2,1,0)\to(1,1,1)\big)=\tfrac14`, why: R`Count the equally likely choices that lead back to everyone having $\$1$.` }
  ],
  approach: R`Find the probability of being at $(1,1,1)$ after the next ring from each state. If both give the same number, the history does not matter and the answer is that number.`,
  steps: [
    { title: 'From $(1,1,1)$',
      explain: R`Each of three players chooses one of two others: $8$ outcomes. Everyone ends with $\$1$ only if the gifts form a cycle ($A\to B\to C\to A$ or reverse): $2$ outcomes. Probability $\tfrac14$.`,
      check: { q: R`How many ways can three people each give to one of the other two?`, opts: [R`8`, R`6`, R`3`, R`9`], ans: 0, why: R`$2^3$.` } },
    { title: 'From $(2,1,0)$',
      explain: R`Only the $\$2$ player and the $\$1$ player give: $4$ outcomes. They end at $(1,1,1)$ only if the rich player gives to the $\$1$ player and the $\$1$ player gives to the broke player: $1$ outcome. Probability $\tfrac14$.`,
      check: { q: R`With holdings $(2,1,0)$, how many equally likely giving outcomes are there?`, opts: [R`4`, R`8`, R`2`, R`6`], ans: 0, why: R`Two givers, each with $2$ choices.` } },
    { title: 'Conclude',
      explain: R`Whatever the state before the last ring, the chance of ending at $(1,1,1)$ is $\tfrac14$. So after $2019$ rings the probability is $\tfrac14$.`,
      check: { q: R`If every state leads to state $X$ with probability $\tfrac14$, what is $P(X)$ after the next step?`, opts: [R`\tfrac14`, R`\tfrac12`, R`\text{depends on history}`, R`\tfrac1{16}`], ans: 0, why: R`Average of $\tfrac14$'s is $\tfrac14$.` } }
  ],
  bridge: R`Reduce to two states and compute the chance of reaching $(1,1,1)$ from each.`,
  solution: [
    R`The only possible holdings are $(1,1,1)$ and permutations of $(2,1,0)$.`,
    R`From $(1,1,1)$: $2$ of $8$ outcomes keep $(1,1,1)$: $\tfrac14$.`,
    R`From $(2,1,0)$: $1$ of $4$ outcomes gives $(1,1,1)$: $\tfrac14$.`,
    R`So after any ring the probability is $\tfrac14$. The answer is $\textbf{(B)}\ \tfrac14$.`
  ],
  shortcut: R`When every state transitions to the target with the same probability, that probability is the answer for any number of steps.`,
  traps: [R`Trying to track $2019$ steps.`, R`Letting the broke player give money.`],
  recognize: R`Long repeated random processes with few states: compute transition probabilities; often one step's structure decides everything.`
},

'2019B23': {
  answer: 'C',
  goal: R`Points $A$ and $B$ lie on a circle whose tangents at $A$ and $B$ meet on the $x$-axis. We need the circle's area, i.e. $r^2$.`,
  tools: [
    { name: 'Equal tangents', fact: R`PA=PB\text{ for tangents from }P`, why: R`So $P$ is on the perpendicular bisector of $AB$.` },
    { name: 'Tangent ⟂ radius', fact: R`OA\perp PA`, why: R`A tangent is perpendicular to the radius at the point of contact.` },
    { name: 'Altitude to the hypotenuse', fact: R`AM^2=PM\cdot MO`, why: R`In right triangle $PAO$ with altitude $AM$, the altitude squared equals the product of the hypotenuse pieces.` }
  ],
  approach: R`Find $P$ first: it is on the $x$-axis and on the perpendicular bisector of $AB$. The centre $O$ is also on that bisector, and triangle $PAO$ has a right angle at $A$ with $M$ (midpoint of $AB$) the foot of the altitude. Then $r^2=AM^2+MO^2$.`,
  steps: [
    { title: 'Find $P$',
      explain: R`$M=(9,12)$, and $AB$ has slope $\tfrac{11-13}{12-6}=-\tfrac13$, so the bisector has slope $3$: $y-12=3(x-9)$. At $y=0$, $x=5$: $P=(5,0)$.`,
      check: { q: R`A line through $(9,12)$ with slope $3$ meets the $x$-axis where?`, opts: [R`x=5`, R`x=4`, R`x=6`, R`x=13`], ans: 0, why: R`$0-12=3(x-9)$.` } },
    { title: 'Right triangle $PAO$',
      explain: R`$PM=\sqrt{4^2+12^2}=\sqrt{160}$ and $AM=\tfrac12AB=\tfrac12\sqrt{40}=\sqrt{10}$. Since $\angle PAO=90^\circ$ and $AM\perp PO$: $AM^2=PM\cdot MO$, so $MO=\tfrac{10}{\sqrt{160}}$.`,
      check: { q: R`In a right triangle, the altitude to the hypotenuse is $6$ and one piece is $4$. What is the other piece?`, opts: [R`9`, R`8`, R`3`, R`10`], ans: 0, why: R`$36=4\cdot9$.` } },
    { title: 'Radius',
      explain: R`$r^2=AM^2+MO^2=10+\tfrac{100}{160}=\tfrac{85}{8}$. Area $\tfrac{85\pi}8$.`,
      check: { q: R`What is $10+\tfrac{100}{160}$?`, opts: [R`\tfrac{85}8`, R`\tfrac{81}8`, R`\tfrac{87}8`, R`\tfrac{43}4`], ans: 0, why: R`$10+\tfrac58$.` } }
  ],
  bridge: R`Find $P$ on the bisector, then use the right triangle $PAO$ and its altitude $AM$.`,
  solution: [
    R`$P$ is on the perpendicular bisector of $AB$ ($y-12=3(x-9)$) and the $x$-axis: $P=(5,0)$.`,
    R`$PM=\sqrt{160}$, $AM=\sqrt{10}$; triangle $PAO$ is right-angled at $A$ with altitude $AM$.`,
    R`$MO=\tfrac{AM^2}{PM}=\tfrac{10}{\sqrt{160}}$, so $r^2=10+\tfrac{100}{160}=\tfrac{85}8$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{85\pi}8$.`
  ],
  shortcut: R`$r^2=AM^2\cdot\tfrac{PA^2}{PM^2}$ since $r=AO=\tfrac{PA\cdot AM}{PM}$; with $PA^2=170$: $r^2=\tfrac{170\cdot10}{160}=\tfrac{85}8$.`,
  traps: [R`Taking $P$ as the centre.`, R`Using $AB$ instead of $AM=\tfrac12AB$.`],
  recognize: R`Two tangents from one point: the point, the centre and the chord's midpoint are collinear on the perpendicular bisector, and similar right triangles relate everything.`
},

'2019B24': {
  answer: 'C',
  goal: R`The sequence $x_{n+1}=\tfrac{x_n^2+5x_n+4}{x_n+6}$ starts at $5$ and decreases toward $4$. We need roughly how many steps until it is within $2^{-20}$ of $4$, only to choose an interval.`,
  tools: [
    { name: 'Shift to the limit', fact: R`y_n=x_n-4\Rightarrow y_{n+1}=y_n\cdot\frac{y_n+9}{y_n+10}`, why: R`Subtracting the limit turns the recursion into a multiplication by a factor slightly below $1$.` },
    { name: 'Geometric decay estimate', fact: R`\left(\tfrac{9}{10}\right)^m\le\cdots\le\left(\tfrac{10}{11}\right)^m`, why: R`For $0<y\le1$, the factor $\tfrac{y+9}{y+10}$ lies between $\tfrac9{10}$ and $\tfrac{10}{11}$.` },
    { name: 'Logarithm estimate', fact: R`m\approx\frac{20\ln2}{\ln(1+\tfrac1{10})}\approx\frac{13.9}{0.095}`, why: R`Solve $r^m=2^{-20}$ for $m$.` }
  ],
  approach: R`Find the limit ($4$) and study the distance $y_n=x_n-4$. The recursion becomes $y_{n+1}=y_n\cdot(\text{a factor near }0.9)$. Bound the factor above and below, so $y$ shrinks geometrically, and estimate how many multiplications reach $2^{-20}$.`,
  steps: [
    { title: 'Shift by $4$',
      explain: R`$x_{n+1}-4=\tfrac{x_n^2+5x_n+4-4x_n-24}{x_n+6}=\tfrac{x_n^2+x_n-20}{x_n+6}=\tfrac{(x_n-4)(x_n+5)}{x_n+6}$. With $y=x-4$: $y_{n+1}=y_n\cdot\tfrac{y_n+9}{y_n+10}$.`,
      check: { q: R`Factor $x^2+x-20$.`, opts: [R`(x-4)(x+5)`, R`(x+4)(x-5)`, R`(x-2)(x+10)`, R`(x-4)(x-5)`], ans: 0, why: R`$-4\cdot5=-20$, $-4+5=1$.` } },
    { title: 'Bound the factor',
      explain: R`$y_0=1$ and $y$ decreases, so $0<y\le1$ and the factor $\tfrac{y+9}{y+10}$ is between $\tfrac9{10}$ and $\tfrac{10}{11}$. So $(\tfrac9{10})^m\le y_m\le(\tfrac{10}{11})^m$.`,
      check: { q: R`For $y=1$, what is $\tfrac{y+9}{y+10}$?`, opts: [R`\tfrac{10}{11}`, R`\tfrac9{10}`, R`1`, R`\tfrac12`], ans: 0, why: R`$\tfrac{10}{11}$.` } },
    { title: 'Estimate $m$',
      explain: R`We need $y_m\le2^{-20}$. With ratio $\tfrac9{10}$: $m\ge\tfrac{20\ln2}{\ln(10/9)}\approx\tfrac{13.86}{0.105}\approx132$; with $\tfrac{10}{11}$: $m\le\tfrac{13.86}{0.0953}\approx146$ (plus one). Either way $m$ is in $[81,242]$.`,
      check: { q: R`Approximately, what is $\ln2$?`, opts: [R`0.693`, R`0.301`, R`1.0`, R`0.5`], ans: 0, why: R`$e^{0.693}\approx2$.` } }
  ],
  bridge: R`Shift by the limit, bound the shrinking factor, and estimate the number of steps with logarithms.`,
  solution: [
    R`With $y_n=x_n-4$: $y_{n+1}=y_n\cdot\tfrac{y_n+9}{y_n+10}$ and $y_0=1$.`,
    R`For $0<y\le1$ the factor is between $\tfrac9{10}$ and $\tfrac{10}{11}$.`,
    R`Reaching $2^{-20}$ takes between about $132$ and $147$ steps.`,
    R`So $m\in[81,242]$. The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Since $(0.9)^{7}\approx\tfrac12$, halving takes about $7$ steps, so $20$ halvings take about $140$ steps.`,
  traps: [R`Thinking convergence is fast (quadratic) like Newton's method.`, R`Using $\log_{10}$ and $\ln$ inconsistently.`],
  recognize: R`Recursive sequences approaching a limit: subtract the limit and look at the ratio $y_{n+1}/y_n$; a ratio near a constant means geometric decay.`
},

'2019B25': {
  answer: 'C',
  goal: R`We count $0$–$1$ strings of length $19$ that start and end with $0$, have no $00$, and no $111$. Between consecutive $0$s there must be one or two $1$s, so the string is built from blocks.`,
  tools: [
    { name: 'Block decomposition', fact: R`0\,(1\text{ or }11)\,0\,(1\text{ or }11)\,0\cdots0`, why: R`No $00$ means at least one $1$ between zeros; no $111$ means at most two.` },
    { name: 'Counting arrangements of blocks', fact: R`\binom{p+q}{p}`, why: R`Arrange $p$ blocks of one type and $q$ of another in a row.` }
  ],
  approach: R`After the first $0$, the rest of the string is a sequence of blocks "$10$" (length $2$) or "$110$" (length $3$) filling $18$ positions. Count solutions of $2p+3q=18$ and arrangements for each.`,
  steps: [
    { title: 'Set up blocks',
      explain: R`Write the string as $0$ followed by blocks, each block being $10$ or $110$ (ones then the next zero). The blocks fill the remaining $18$ characters, so $2p+3q=18$ with $p$ short and $q$ long blocks.`,
      check: { q: R`Which string uses blocks correctly after a leading $0$: $0\,10\,110$?`, opts: [R`010110`, R`011010`, R`001110`, R`010011`], ans: 0, why: R`Concatenate: $0,10,110$.` } },
    { title: 'Solve $2p+3q=18$',
      explain: R`$q$ must be even: $(p,q)=(9,0),(6,2),(3,4),(0,6)$.`,
      check: { q: R`For $2p+3q=12$, which $(p,q)$ pairs work with $p,q\ge0$?`, opts: [R`(6,0),(3,2),(0,4)`, R`(6,0),(0,4)`, R`(3,2)`, R`(4,1),(1,3)`], ans: 0, why: R`$q$ even.` } },
    { title: 'Count arrangements',
      explain: R`$\binom90+\binom82+\binom74+\binom66=1+28+35+1=65$.`,
      check: { q: R`What is $\binom74$?`, opts: [R`35`, R`21`, R`28`, R`70`], ans: 0, why: R`$\tfrac{7\cdot6\cdot5}{6}$.` } }
  ],
  bridge: R`Decompose into blocks $10$ and $110$, solve $2p+3q=18$, and count arrangements.`,
  solution: [
    R`After the initial $0$, the string is a sequence of blocks $10$ or $110$ totalling $18$ characters.`,
    R`$2p+3q=18$: $(9,0),(6,2),(3,4),(0,6)$.`,
    R`Arrangements: $1+\binom82+\binom74+1=1+28+35+1$.`,
    R`Total $65$. The answer is $\textbf{(C)}\ 65$.`
  ],
  shortcut: R`A recursion $a_n=a_{n-2}+a_{n-3}$ (Padovan-like) also works if you build up from short lengths.`,
  traps: [R`Forgetting the leading $0$ when counting length.`, R`Allowing blocks of three $1$s.`],
  recognize: R`Strings with "no two/three in a row" constraints: split at a forced symbol into blocks of limited lengths, then count compositions.`
}

};
