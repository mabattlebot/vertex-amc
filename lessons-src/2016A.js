// Hand-written lessons: 2016 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2016A16': {
  answer: 'D',
  goal: R`A triangle is reflected in the $x$-axis and then rotated $90^\circ$ counterclockwise about the origin. We need the single transformation that undoes both. Track what happens to a general point $(x,y)$.`,
  tools: [
    { name: 'Reflection in the $x$-axis', fact: R`(x,y)\mapsto(x,-y)`, why: R`The $y$-coordinate changes sign.` },
    { name: 'Rotation by $90^\circ$ counterclockwise', fact: R`(x,y)\mapsto(-y,x)`, why: R`For example $(1,0)\mapsto(0,1)$.` },
    { name: 'Inverse of a reflection', fact: R`\text{A reflection undoes itself}`, why: R`Reflecting twice returns every point.` }
  ],
  approach: R`Compose the two maps on $(x,y)$ to see what the combined transformation is. If it is a reflection, it is its own inverse.`,
  steps: [
    { title: 'Compose',
      explain: R`$(x,y)\to(x,-y)\to(-(-y),x)=(y,x)$. So the combined move swaps coordinates: reflection in $y=x$.`,
      check: { q: R`Where does $(2,5)$ go under $(x,y)\mapsto(y,x)$?`, opts: [R`(5,2)`, R`(-5,2)`, R`(2,-5)`, R`(-2,-5)`], ans: 0, why: R`Swap coordinates.` } },
    { title: 'Undo it',
      explain: R`Reflection in $y=x$ undoes itself, so reflecting $\triangle A''B''C''$ in $y=x$ returns $\triangle ABC$.`,
      check: { q: R`What is the inverse of reflection in $y=x$?`, opts: [R`\text{Itself}`, R`\text{Rotation }90^\circ`, R`\text{Reflection in }x\text{-axis}`, R`\text{Rotation }180^\circ`], ans: 0, why: R`Applying it twice gives the identity.` } }
  ],
  bridge: R`Compose the two maps on a general point and recognise the result.`,
  solution: [
    R`Reflect: $(x,y)\to(x,-y)$. Rotate: $(x,-y)\to(y,x)$.`,
    R`The combination is reflection in $y=x$, which is its own inverse.`,
    R`The answer is $\textbf{(D)}$ reflection about $y=x$.`
  ],
  shortcut: R`Test one vertex: $A(0,2)\to(0,-2)\to(2,0)$; swapping coordinates returns it.`,
  traps: [R`Answering "rotate clockwise $90^\circ$" (that undoes only the rotation).`, R`Using the clockwise rotation formula.`],
  recognize: R`Compositions of reflections and rotations: compute the effect on $(x,y)$; a reflection followed by a rotation is another reflection.`
},

'2016A17': {
  answer: 'A',
  goal: R`One red ball and $N$ green balls are arranged at random. The red ball's position decides how many greens are on each side. We want the least $N$ (a multiple of $5$) with $P(N)<\tfrac{321}{400}$, where $P$ is the chance that at least $\tfrac35$ of the greens are on one side.`,
  tools: [
    { name: 'Uniform position', fact: R`\#\text{greens to the left}\in\{0,1,\ldots,N\}\text{ each with probability }\tfrac1{N+1}`, why: R`The red ball is equally likely to be in any of the $N+1$ positions.` },
    { name: 'Counting the bad middle', fact: R`\tfrac{2N}5<k<\tfrac{3N}5\ \Rightarrow\ \tfrac N5-1\text{ values}`, why: R`With $N=5m$, $2m<k<3m$ gives $m-1$ integers.` }
  ],
  approach: R`Let $k$ be the number of greens left of red. The condition fails only when $k$ is strictly between $\tfrac{2N}{5}$ and $\tfrac{3N}{5}$. Count those $k$, write $P(N)$, and solve the inequality.`,
  steps: [
    { title: 'Write $P(N)$',
      explain: R`With $N=5m$, the condition fails for $k=2m+1,\ldots,3m-1$: $m-1$ values. So $P(N)=1-\tfrac{m-1}{5m+1}$.`,
      check: { q: R`For $N=10$, how many $k$ fail?`, opts: [R`1`, R`2`, R`0`, R`3`], ans: 0, why: R`$m=2$: only $k=5$.` } },
    { title: 'Solve the inequality',
      explain: R`$P<\tfrac{321}{400}$ means $\tfrac{m-1}{5m+1}>\tfrac{79}{400}$: $400m-400>395m+79$, so $m>95.8$, $m=96$, $N=480$. Digit sum $12$.`,
      check: { q: R`Solve $400m-400>395m+79$.`, opts: [R`m>95.8`, R`m>79`, R`m>96.8`, R`m>80`], ans: 0, why: R`$5m>479$.` } }
  ],
  bridge: R`Count the failing positions of the red ball and solve for $N$.`,
  solution: [
    R`With $N=5m$, the condition fails exactly for $2m<k<3m$: $m-1$ of the $5m+1$ equally likely positions.`,
    R`$P(N)=1-\tfrac{m-1}{5m+1}<\tfrac{321}{400}\iff m>95.8$.`,
    R`So $N=480$, digit sum $12$.`,
    R`The answer is $\textbf{(A)}\ 12$.`
  ],
  shortcut: R`Check the given facts: $P(5)=1$ ($m=1$) and $P\to\tfrac45$; this confirms the formula before solving.`,
  traps: [R`Including the endpoints $k=2m$ or $3m$ in the failing set.`, R`Answering $N=480$ instead of its digit sum.`],
  recognize: R`One special object among many: its uniformly random position determines everything.`
},

'2016A18': {
  answer: 'C',
  goal: R`We label a cube's vertices $1$–$8$ so every face has the same sum, counting labellings up to rotation. First the common sum is forced; then the structure is very rigid.`,
  tools: [
    { name: 'Double counting', fact: R`6S=3(1+\cdots+8)\Rightarrow S=18`, why: R`Each vertex lies on $3$ faces.` },
    { name: 'Neighbour relation', fact: R`\text{For the vertex labelled }L:\ (\text{sum of neighbours})-(\text{opposite})=18-2L`, why: R`Add the three faces through it and compare with the total $36-L$.` }
  ],
  approach: R`Find the face sum. Then show $1$ must be adjacent to $8$ using the neighbour relation. With $8$ and $1$ on an edge, the face equations force the three parallel edges to be $\{2,7\},\{3,6\},\{4,5\}$ with $2,3,5$ on $8$'s side. Count the ways and handle rotations.`,
  steps: [
    { title: 'Face sum and the neighbour relation',
      explain: R`$S=\tfrac{3\cdot36}{6}=18$. For a vertex labelled $L$, its three faces give (twice its neighbours) $+$ (its face-diagonal vertices) $=3(18-L)$, while all other vertices total $36-L$. Subtracting: neighbours $-$ opposite $=18-2L$. For $L=8$: neighbours $=$ opposite $+2$.`,
      check: { q: R`What is the face sum?`, opts: [R`18`, R`36`, R`12`, R`9`], ans: 0, why: R`$3\cdot36/6$.` } },
    { title: '$1$ is next to $8$',
      explain: R`If $1$ were opposite $8$, $8$'s neighbours would sum to $3$: impossible. If $1$ were face-diagonal to $8$, combining the relations for $8$ and for $1$ (neighbours $=$ opposite $+16$) forces a label of at least $9$: impossible. So $1$ shares an edge with $8$.`,
      check: { q: R`If $1$ is opposite $8$, what would $8$'s three neighbours sum to?`, opts: [R`3`, R`10`, R`2`, R`16`], ans: 0, why: R`Opposite $+2=3$.` } },
    { title: 'Count',
      explain: R`Put $8$ on top and $1$ below it. The two side faces through edge $8$–$1$ force the parallel edges to sum to $9$: pairs $\{2,7\},\{3,6\},\{4,5\}$. The top face needs $8+(\text{three top ends})=18$, so the top ends are $2,3,5$. Assign the three pairs to the three edges: $3!=6$ ways. Placing $8$ and $1$ used up all rotational freedom, so there are $6$ arrangements.`,
      check: { q: R`Which choice of one number from each of $\{2,7\},\{3,6\},\{4,5\}$ sums to $10$?`, opts: [R`2,3,5`, R`2,6,4`, R`7,3,...`, R`2,3,4`], ans: 0, why: R`$2+3+5=10$; the others are too big or too small.` } }
  ],
  bridge: R`Get $S=18$, show $1$ is adjacent to $8$, then count assignments of the pairs summing to $9$.`,
  solution: [
    R`Each vertex is on $3$ faces, so $6S=108$ and $S=18$.`,
    R`The relation (neighbours) $-$ (opposite) $=18-2L$ rules out $1$ opposite or face-diagonal to $8$, so they share an edge.`,
    R`The faces through that edge force the three parallel edges to be $\{2,7\},\{3,6\},\{4,5\}$ with $2,3,5$ on $8$'s face.`,
    R`$3!=6$ assignments, and no rotations remain once $8$ and $1$ are placed.`,
    R`The answer is $\textbf{(C)}\ 6$.`
  ],
  shortcut: R`Guess the structure "$1$–$8$, $2$–$7$, $3$–$6$, $4$–$5$ on parallel edges" from one example, then count $3!$.`,
  traps: [R`Counting $8!$ labellings divided by $24$ without the face condition.`, R`Forgetting that fixing $8$'s vertex and $1$'s vertex uses all rotations.`],
  recognize: R`Equal-sum labellings of a solid: double count to get the common sum, then derive local relations (neighbours vs opposite) that force the structure.`
},

'2016A19': {
  answer: 'E',
  goal: R`In a $6\times3$ rectangle, $E$ and $F$ trisect $BC$; lines $AE$ and $AF$ cut the diagonal $BD$ at $P$ and $Q$. We want $BP:PQ:QD$. Coordinates make the intersections a matter of solving two linear equations.`,
  tools: [
    { name: 'Coordinates', fact: R`A=(0,0),\ B=(6,0),\ C=(6,3),\ D=(0,3),\ E=(6,1),\ F=(6,2)`, why: R`Axis-aligned rectangle.` },
    { name: 'Parametrise a segment', fact: R`BD:\ (6-6t,\ 3t),\ \ 0\le t\le1`, why: R`$t$ is the fraction of the way from $B$ to $D$.` }
  ],
  approach: R`Parametrise $BD$ by $t$ (fraction from $B$). Find $t$ where it meets $AE$ and $AF$. The ratio $BP:PQ:QD$ is then $t_P:(t_Q-t_P):(1-t_Q)$.`,
  steps: [
    { title: 'Meet $AE$',
      explain: R`$AE$ is $y=\tfrac x6$. On $BD$: $3t=\tfrac{6-6t}{6}=1-t$, so $t_P=\tfrac14$.`,
      check: { q: R`Solve $3t=1-t$.`, opts: [R`\tfrac14`, R`\tfrac13`, R`\tfrac12`, R`\tfrac15`], ans: 0, why: R`$4t=1$.` } },
    { title: 'Meet $AF$',
      explain: R`$AF$ is $y=\tfrac x3$. $3t=\tfrac{6-6t}{3}=2-2t$, so $t_Q=\tfrac25$.`,
      check: { q: R`Solve $3t=2-2t$.`, opts: [R`\tfrac25`, R`\tfrac23`, R`\tfrac12`, R`\tfrac35`], ans: 0, why: R`$5t=2$.` } },
    { title: 'Ratio',
      explain: R`$BP:PQ:QD=\tfrac14:\tfrac3{20}:\tfrac35=5:3:12$, sum $20$.`,
      check: { q: R`Scale $\tfrac14:\tfrac3{20}:\tfrac35$ by $20$.`, opts: [R`5:3:12`, R`5:3:15`, R`4:3:12`, R`1:3:12`], ans: 0, why: R`Multiply each by $20$.` } }
  ],
  bridge: R`Parametrise $BD$, intersect with $AE$ and $AF$, and read off the ratio.`,
  solution: [
    R`On $BD$ use $(6-6t,3t)$.`,
    R`$AE$ ($y=x/6$) gives $t=\tfrac14$; $AF$ ($y=x/3$) gives $t=\tfrac25$.`,
    R`$BP:PQ:QD=\tfrac14:\tfrac3{20}:\tfrac35=5:3:12$.`,
    R`$r+s+t=20$. The answer is $\textbf{(E)}\ 20$.`
  ],
  shortcut: R`Similar triangles: $BP:PD=BE:AD=1:3$ and $BQ:QD=BF:AD=2:3$.`,
  traps: [R`Assuming $P$ and $Q$ trisect $BD$.`, R`Reducing the ratio incorrectly.`],
  recognize: R`Ratios along a diagonal cut by lines from a corner: parametrise the diagonal, or use similar triangles with the parallel sides.`
},

'2016A20': {
  answer: 'B',
  goal: R`In the expansion of $(a+b+c+d+1)^N$, we count terms $a^ib^jc^kd^l$ with all exponents positive. Each term is determined by its exponents, with the "$1$" absorbing the remaining degree.`,
  tools: [
    { name: 'Terms of a multinomial', fact: R`a^ib^jc^kd^l\cdot1^m\text{ with }i+j+k+l+m=N`, why: R`Each distinct exponent vector is one term.` },
    { name: 'Stars and bars', fact: R`\#\{i,j,k,l\ge1,\ m\ge0\}=\binom{N}{4}`, why: R`Subtract $1$ from $i,j,k,l$: $5$ nonnegative variables summing to $N-4$: $\binom{N}{4}$.` }
  ],
  approach: R`Count solutions of $i+j+k+l+m=N$ with $i,j,k,l\ge1$, $m\ge0$. Stars and bars gives $\binom N4$. Find $N$ with $\binom N4=1001$.`,
  steps: [
    { title: 'Count the terms',
      explain: R`Write $i=i'+1$ etc. Then $i'+j'+k'+l'+m=N-4$ with all $\ge0$: $\binom{(N-4)+4}{4}=\binom N4$.`,
      check: { q: R`How many nonnegative solutions to $x_1+\cdots+x_5=2$?`, opts: [R`15`, R`10`, R`5`, R`21`], ans: 0, why: R`$\binom{6}{4}$.` } },
    { title: 'Solve $\binom N4=1001$',
      explain: R`$1001=7\cdot11\cdot13$ and $\binom{14}{4}=\tfrac{14\cdot13\cdot12\cdot11}{24}=1001$. So $N=14$.`,
      check: { q: R`What is $\binom{14}{4}$?`, opts: [R`1001`, R`364`, R`2002`, R`715`], ans: 0, why: R`$24024/24$.` } }
  ],
  bridge: R`Count exponent vectors with stars and bars and match $\binom N4=1001$.`,
  solution: [
    R`Terms with all four variables correspond to $i,j,k,l\ge1$, $m\ge0$ with sum $N$.`,
    R`There are $\binom N4$ of them.`,
    R`$\binom{14}{4}=1001$, so $N=14$.`,
    R`The answer is $\textbf{(B)}\ 14$.`
  ],
  shortcut: R`Recognise $1001=\binom{14}4$ (also $\binom{14}{10}$).`,
  traps: [R`Using $\binom{N-1}{3}$ (forgetting the constant term).`, R`Counting coefficients instead of terms.`],
  recognize: R`"How many terms in the expansion": count exponent vectors with stars and bars.`
},

'2016A21': {
  answer: 'D',
  goal: R`Three circles of radii $1,2,3$ sit on line $l$; the middle one touches both others. We need the area of the triangle of centres. The centres have heights $1,2,3$, so we need their horizontal positions.`,
  tools: [
    { name: 'Horizontal distance between tangent circles on a line', fact: R`d=2\sqrt{r_1r_2}`, why: R`Centres differ by $r_1+r_2$ in distance and $|r_1-r_2|$ in height: $d^2=(r_1+r_2)^2-(r_1-r_2)^2=4r_1r_2$.` },
    { name: 'Shoelace formula', fact: R`[\triangle]=\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|`, why: R`Area from coordinates.` }
  ],
  approach: R`Put $l$ on the $x$-axis and $P$ above the origin. Compute the horizontal gaps $P'Q'$ and $Q'R'$ from the tangency, then use the shoelace formula.`,
  steps: [
    { title: 'Horizontal gaps',
      explain: R`$P'Q'=2\sqrt{1\cdot2}=2\sqrt2$, $Q'R'=2\sqrt{2\cdot3}=2\sqrt6$. So $P=(0,1)$, $Q=(2\sqrt2,2)$, $R=(2\sqrt2+2\sqrt6,3)$.`,
      check: { q: R`Circles of radii $1$ and $4$ on a line touch. How far apart are their contact points?`, opts: [R`4`, R`5`, R`3`, R`2`], ans: 0, why: R`$2\sqrt{4}$.` } },
    { title: 'Shoelace',
      explain: R`$\tfrac12|0\cdot(2-3)+2\sqrt2(3-1)+(2\sqrt2+2\sqrt6)(1-2)|=\tfrac12|2\sqrt2-2\sqrt6|=\sqrt6-\sqrt2$.`,
      check: { q: R`What is $4\sqrt2-(2\sqrt2+2\sqrt6)$?`, opts: [R`2\sqrt2-2\sqrt6`, R`2\sqrt6-2\sqrt2`, R`6\sqrt2`, R`0`], ans: 0, why: R`Combine like terms.` } }
  ],
  bridge: R`Find the horizontal gaps with $2\sqrt{r_1r_2}$, then use the shoelace formula.`,
  solution: [
    R`Gaps: $P'Q'=2\sqrt2$, $Q'R'=2\sqrt6$; centres $(0,1)$, $(2\sqrt2,2)$, $(2\sqrt2+2\sqrt6,3)$.`,
    R`Shoelace: $\tfrac12|4\sqrt2-2\sqrt2-2\sqrt6|$.`,
    R`Area $\sqrt6-\sqrt2$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`Memorise $2\sqrt{r_1r_2}$ for circles tangent to each other and to a common line.`,
  traps: [R`Using $r_1+r_2$ as the horizontal distance.`, R`Assuming the centres are collinear (area $0$).`],
  recognize: R`Circles resting on a line and touching: horizontal gap $2\sqrt{r_1r_2}$.`
},

'2016A22': {
  answer: 'D',
  goal: R`$110n^3$ has exactly $110$ divisors. We must find the prime factorisation of $n$, then count the divisors of $81n^4$. The divisor-count formula turns this into a factorisation puzzle.`,
  tools: [
    { name: 'Divisor count', fact: R`d(p_1^{e_1}\cdots p_k^{e_k})=(e_1+1)\cdots(e_k+1)`, why: R`Choose each prime's exponent independently.` },
    { name: 'Exponent forms', fact: R`110n^3:\ \text{exponents }3a+1\text{ for }2,5,11;\ 3k\text{ for other primes}`, why: R`$110=2\cdot5\cdot11$ contributes one of each.` }
  ],
  approach: R`Let $n=2^a5^b11^c\cdot(\text{other primes})$. Then $d(110n^3)=(3a+2)(3b+2)(3c+2)\prod(3k+1)=110=2\cdot5\cdot11$. Match factors of the form $3x+2$ to $2,5,11$, and show no other primes fit.`,
  steps: [
    { title: 'Match the factors',
      explain: R`$2=3\cdot0+2$, $5=3\cdot1+2$, $11=3\cdot3+2$. So $\{a,b,c\}=\{0,1,3\}$ in some order, and there is no room for other primes (a factor $3k+1\ge4$ would leave too little for three factors $\ge2$).`,
      check: { q: R`Which of $2,5,11$ equals $3x+2$ with $x=3$?`, opts: [R`11`, R`5`, R`2`, R`\text{none}`], ans: 0, why: R`$9+2$.` } },
    { title: 'Count divisors of $81n^4$',
      explain: R`$81n^4=3^4\cdot2^{4a}5^{4b}11^{4c}$. Divisors: $5\cdot(4a+1)(4b+1)(4c+1)=5\cdot1\cdot5\cdot13=325$.`,
      check: { q: R`For exponents $\{0,1,3\}$, what is $(4a+1)(4b+1)(4c+1)$?`, opts: [R`65`, R`60`, R`13`, R`325`], ans: 0, why: R`$1\cdot5\cdot13$.` } }
  ],
  bridge: R`Write $d(110n^3)$ in terms of $n$'s exponents, match to $2\cdot5\cdot11$, then count for $81n^4$.`,
  solution: [
    R`$d(110n^3)=(3a+2)(3b+2)(3c+2)\prod(3k+1)=110$.`,
    R`So $\{a,b,c\}=\{0,1,3\}$ and $n$ has no other primes.`,
    R`$d(81n^4)=5\cdot1\cdot5\cdot13=325$.`,
    R`The answer is $\textbf{(D)}\ 325$.`
  ],
  shortcut: R`The order of $a,b,c$ does not matter for the final count.`,
  traps: [R`Forgetting the $3^4$ from $81$.`, R`Allowing $n$ to have other primes.`],
  recognize: R`Divisor-count equations: express the count via exponents, factor the target, and match forms like $3x+2$.`
},

'2016A23': {
  answer: 'A',
  goal: R`A mystery operation satisfies $a\diamondsuit(b\diamondsuit c)=(a\diamondsuit b)c$ and $a\diamondsuit a=1$. We solve $2016\diamondsuit(6\diamondsuit x)=100$. First find a formula for $a\diamondsuit b$ by plugging in clever values.`,
  tools: [
    { name: 'Special substitutions', fact: R`b=c\ \Rightarrow\ a\diamondsuit1=(a\diamondsuit b)\,b`, why: R`$b\diamondsuit b=1$.` },
    { name: 'Finding $a\diamondsuit1$', fact: R`a=b=c\ \Rightarrow\ a\diamondsuit1=(a\diamondsuit a)\,a=a`, why: R`Set all three equal.` }
  ],
  approach: R`Use $a\diamondsuit a=1$ to simplify the rule: setting $b=c$ relates $a\diamondsuit b$ to $a\diamondsuit1$, and setting $a=b=c$ gives $a\diamondsuit1=a$. So $a\diamondsuit b=\tfrac ab$.`,
  steps: [
    { title: 'Find $a\diamondsuit1$',
      explain: R`With $a=b=c$: $a\diamondsuit(a\diamondsuit a)=(a\diamondsuit a)a$, i.e. $a\diamondsuit1=a$.`,
      check: { q: R`What is $5\diamondsuit1$?`, opts: [R`5`, R`1`, R`\tfrac15`, R`0`], ans: 0, why: R`$a\diamondsuit1=a$.` } },
    { title: 'Find $a\diamondsuit b$',
      explain: R`With $b=c$: $a\diamondsuit1=(a\diamondsuit b)b$, so $a\diamondsuit b=\tfrac ab$.`,
      check: { q: R`What is $12\diamondsuit3$?`, opts: [R`4`, R`36`, R`\tfrac14`, R`9`], ans: 0, why: R`$12/3$.` } },
    { title: 'Solve',
      explain: R`$2016\diamondsuit\tfrac6x=\tfrac{2016x}{6}=336x=100$, so $x=\tfrac{25}{84}$ and $p+q=109$.`,
      check: { q: R`Simplify $\tfrac{100}{336}$.`, opts: [R`\tfrac{25}{84}`, R`\tfrac{50}{168}`, R`\tfrac{25}{86}`, R`\tfrac{5}{17}`], ans: 0, why: R`Divide by $4$.` } }
  ],
  bridge: R`Plug in equal arguments to find $a\diamondsuit b=\tfrac ab$, then solve.`,
  solution: [
    R`$a=b=c$ gives $a\diamondsuit1=a$.`,
    R`$b=c$ gives $a\diamondsuit b=\tfrac{a\diamondsuit1}{b}=\tfrac ab$.`,
    R`$2016\diamondsuit\tfrac6x=336x=100$, so $x=\tfrac{25}{84}$.`,
    R`$p+q=109$. The answer is $\textbf{(A)}\ 109$.`
  ],
  shortcut: R`Guess $a\diamondsuit b=\tfrac ab$ and verify both rules: $\tfrac{a}{b/c}=\tfrac ab\cdot c$ and $\tfrac aa=1$.`,
  traps: [R`Assuming the operation is subtraction or multiplication.`, R`Inverting the fraction.`],
  recognize: R`Functional rules for a strange operation: substitute equal arguments to find a closed form.`
},

'2016A24': {
  answer: 'E',
  goal: R`A cyclic quadrilateral in a circle of radius $200\sqrt2$ has three sides of length $200$. We want the fourth side. Equal chords subtend equal central angles, and the fourth chord's angle is what is left.`,
  tools: [
    { name: 'Chord length', fact: R`\text{chord}=2R\sin\tfrac{\theta}{2}`, why: R`Split the isosceles triangle from the centre into two right triangles.` },
    { name: 'Triple-angle formula', fact: R`\sin3x=3\sin x-4\sin^3x`, why: R`From angle-addition formulas.` },
    { name: 'Central angles add to $360^\circ$', fact: R`3\theta+\varphi=360^\circ`, why: R`The four chords go once around the circle.` }
  ],
  approach: R`Find $\sin\tfrac\theta2$ for the side $200$. The fourth chord has central angle $360^\circ-3\theta$, so its length is $2R\sin\tfrac{3\theta}{2}$. Use the triple-angle formula.`,
  steps: [
    { title: 'Half-angle for the side 200',
      explain: R`$200=2\cdot200\sqrt2\sin\tfrac\theta2$, so $\sin\tfrac\theta2=\tfrac{1}{2\sqrt2}=\tfrac{\sqrt2}4$.`,
      check: { q: R`A chord of length $6$ in a circle of radius $5$ has $\sin\tfrac\theta2=$?`, opts: [R`\tfrac35`, R`\tfrac45`, R`\tfrac65`, R`\tfrac12`], ans: 0, why: R`$6=10\sin\tfrac\theta2$.` } },
    { title: 'Fourth chord',
      explain: R`Its central angle is $360^\circ-3\theta$, so its length is $2R\sin(180^\circ-\tfrac{3\theta}2)=2R\sin\tfrac{3\theta}2$. With $x=\tfrac\theta2$: $\sin3x=3\cdot\tfrac{\sqrt2}4-4\cdot\tfrac{2\sqrt2}{64}=\tfrac{3\sqrt2}4-\tfrac{\sqrt2}8=\tfrac{5\sqrt2}8$.`,
      check: { q: R`What is $\left(\tfrac{\sqrt2}4\right)^3$?`, opts: [R`\tfrac{2\sqrt2}{64}`, R`\tfrac{\sqrt2}{64}`, R`\tfrac{\sqrt2}{16}`, R`\tfrac{2}{64}`], ans: 0, why: R`$\tfrac{2\sqrt2}{64}$.` } },
    { title: 'Length',
      explain: R`$2\cdot200\sqrt2\cdot\tfrac{5\sqrt2}{8}=\tfrac{400\cdot2\cdot5}{8}=500$.`,
      check: { q: R`What is $400\sqrt2\cdot\tfrac{5\sqrt2}8$?`, opts: [R`500`, R`250`, R`1000`, R`500\sqrt2`], ans: 0, why: R`$\tfrac{4000}{8}$.` } }
  ],
  bridge: R`Get $\sin\tfrac\theta2$, use the leftover central angle and the triple-angle formula.`,
  solution: [
    R`$\sin\tfrac\theta2=\tfrac{200}{2R}=\tfrac{\sqrt2}4$.`,
    R`The fourth side is $2R\sin\tfrac{3\theta}2$.`,
    R`$\sin\tfrac{3\theta}2=3\cdot\tfrac{\sqrt2}4-4\left(\tfrac{\sqrt2}4\right)^3=\tfrac{5\sqrt2}8$.`,
    R`Length $=400\sqrt2\cdot\tfrac{5\sqrt2}8=500$. The answer is $\textbf{(E)}\ 500$.`
  ],
  shortcut: R`Ptolemy on a trapezoid also works, but the triple-angle formula is one line.`,
  traps: [R`Using $\sin3\theta$ instead of $\sin\tfrac{3\theta}{2}$.`, R`Assuming the quadrilateral is a square.`],
  recognize: R`Equal chords in a circle: equal central angles; the remaining chord uses the leftover angle.`
},

'2016A25': {
  answer: 'A',
  goal: R`We count positive triples with $\operatorname{lcm}(x,y)=72$, $\operatorname{lcm}(x,z)=600$, $\operatorname{lcm}(y,z)=900$. lcm conditions split prime by prime into conditions on exponents.`,
  tools: [
    { name: 'lcm via exponents', fact: R`v_p(\operatorname{lcm}(x,y))=\max(v_p(x),v_p(y))`, why: R`The lcm takes the larger power of each prime.` },
    { name: 'Factorisations', fact: R`72=2^33^2,\ 600=2^33\cdot5^2,\ 900=2^23^25^2`, why: R`Read off each prime's required maxima.` },
    { name: 'Independence', fact: R`\text{total}=\prod_p(\#\text{exponent choices for }p)`, why: R`Different primes do not interact.` }
  ],
  approach: R`For each prime $2,3,5$, find the number of exponent triples $(p,q,r)$ for $(x,y,z)$ satisfying the three max conditions. Multiply.`,
  steps: [
    { title: 'Prime 2',
      explain: R`$\max(p,q)=3$, $\max(p,r)=3$, $\max(q,r)=2$. So $q,r\le2$, forcing $p=3$, and at least one of $q,r$ is $2$: $9-4=5$ choices.`,
      check: { q: R`How many pairs $(q,r)$ from $\{0,1,2\}$ have $\max=2$?`, opts: [R`5`, R`4`, R`3`, R`9`], ans: 0, why: R`$9$ total minus $4$ with both $\le1$.` } },
    { title: 'Prime 3',
      explain: R`$\max(p,q)=2$, $\max(p,r)=1$, $\max(q,r)=2$. So $p,r\le1$, forcing $q=2$, and $\max(p,r)=1$: $4-1=3$ choices.`,
      check: { q: R`How many pairs from $\{0,1\}$ have $\max=1$?`, opts: [R`3`, R`2`, R`4`, R`1`], ans: 0, why: R`All except $(0,0)$.` } },
    { title: 'Prime 5 and total',
      explain: R`$\max(p,q)=0$ forces $p=q=0$, then $r=2$: $1$ way. Total $5\cdot3\cdot1=15$.`,
      check: { q: R`What is $5\cdot3\cdot1$?`, opts: [R`15`, R`16`, R`24`, R`8`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Handle each prime separately with max conditions on exponents and multiply.`,
  solution: [
    R`Prime $2$: $p=3$ and $\max(q,r)=2$: $5$ ways.`,
    R`Prime $3$: $q=2$ and $\max(p,r)=1$: $3$ ways.`,
    R`Prime $5$: $p=q=0$, $r=2$: $1$ way.`,
    R`$5\cdot3\cdot1=15$. The answer is $\textbf{(A)}\ 15$.`
  ],
  shortcut: R`Whenever one lcm lacks a prime, both of its arguments lack it entirely.`,
  traps: [R`Forgetting that $\operatorname{lcm}(x,y)=72$ has no factor $5$.`, R`Counting $(q,r)$ pairs with max $\le2$ instead of exactly $2$.`],
  recognize: R`Systems of lcm (or gcd) conditions: go prime by prime with max (or min) conditions on exponents, then multiply.`
}

};
