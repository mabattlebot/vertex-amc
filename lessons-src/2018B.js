// Hand-written lessons: 2018 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2018B16': {
  answer: 'E',
  goal: R`We know the sum of $2018$ increasing positive integers is $2018^{2018}$ and want the sum of their cubes mod $6$. We know nothing else about the numbers, so the cubes must be related to the numbers themselves mod $6$.`,
  tools: [
    { name: 'Cubes mod 6', fact: R`n^3\equiv n\pmod6`, why: R`$n^3-n=(n-1)n(n+1)$ is a product of three consecutive integers, divisible by $2$ and by $3$.` },
    { name: 'Powers of 2 mod 6', fact: R`2^1\equiv2,\ 2^2\equiv4,\ 2^3\equiv2,\ldots`, why: R`For $k\ge1$, $2^k\equiv2$ if $k$ is odd and $4$ if $k$ is even.` }
  ],
  approach: R`If cubes behaved like the numbers themselves mod $6$, the sum of cubes would have the same remainder as the sum, which we know. Prove $n^3\equiv n$ with consecutive integers, then reduce $2018^{2018}$ mod $6$.`,
  steps: [
    { title: 'Cubes and numbers agree mod 6',
      explain: R`$n^3-n=(n-1)n(n+1)$, three consecutive integers: one is even and one is a multiple of $3$. So $6\mid n^3-n$. Therefore $\sum a_i^3\equiv\sum a_i\pmod6$.`,
      check: { q: R`What is $7^3-7$ mod $6$?`, opts: [R`0`, R`1`, R`3`, R`4`], ans: 0, why: R`$336=6\cdot56$.` } },
    { title: 'Reduce the sum',
      explain: R`$\sum a_i=2018^{2018}$ and $2018\equiv2\pmod6$, so $2018^{2018}\equiv2^{2018}$. The powers of $2$ mod $6$ alternate $2,4$, and $2018$ is even, so the remainder is $4$.`,
      check: { q: R`What is $2^{6}\bmod6$?`, opts: [R`4`, R`2`, R`0`, R`1`], ans: 0, why: R`$64=60+4$.` } }
  ],
  bridge: R`Use $n^3\equiv n\pmod6$ to replace the cubes by the numbers, then reduce $2018^{2018}$.`,
  solution: [
    R`$n^3-n=(n-1)n(n+1)$ is divisible by $6$, so $\sum a_i^3\equiv\sum a_i\pmod6$.`,
    R`$\sum a_i=2018^{2018}\equiv2^{2018}\pmod6$.`,
    R`Even powers of $2$ are $\equiv4\pmod6$.`,
    R`The remainder is $4$. The answer is $\textbf{(E)}\ 4$.`
  ],
  shortcut: R`Any problem asking for $\sum a_i^3$ mod $6$ given $\sum a_i$ uses $n^3\equiv n$.`,
  traps: [R`Thinking the specific sequence is needed.`, R`Computing $2^{2018}\bmod6$ as $2$ (that is for odd exponents).`],
  recognize: R`A sum of powers known only through the plain sum: look for an identity like $n^3\equiv n\pmod6$ or $n^p\equiv n\pmod p$.`
},

'2018B17': {
  answer: 'B',
  goal: R`An equilateral octagon is cut from an $8\times6$ rectangle by trimming equal right triangles from the corners. We want its side length $s$ in the form $k+m\sqrt n$. The corner triangles have legs $x$ (along the long side) and $y$ (along the short side).`,
  tools: [
    { name: 'Side lengths along the rectangle', fact: R`AB=8-2x=s,\quad CD=6-2y=s`, why: R`The octagon side on each rectangle side is what remains after trimming both corners.` },
    { name: 'Pythagorean theorem for the cut sides', fact: R`x^2+y^2=s^2`, why: R`The slanted sides are hypotenuses of the corner triangles.` },
    { name: 'Quadratic formula', fact: R`s=\frac{-b+\sqrt{b^2-4ac}}{2a}`, why: R`Keep the positive root.` }
  ],
  approach: R`Express $x$ and $y$ in terms of $s$ from the straight sides, substitute into the Pythagorean condition for the slanted sides, and solve the quadratic in $s$.`,
  steps: [
    { title: 'Express $x$ and $y$',
      explain: R`$x=\tfrac{8-s}2$ and $y=\tfrac{6-s}2$.`,
      check: { q: R`If $10-2x=s$, what is $x$?`, opts: [R`\tfrac{10-s}2`, R`10-2s`, R`\tfrac{s-10}2`, R`5-s`], ans: 0, why: R`Solve for $x$.` } },
    { title: 'Slanted sides',
      explain: R`$\left(\tfrac{8-s}2\right)^2+\left(\tfrac{6-s}2\right)^2=s^2$ gives $(8-s)^2+(6-s)^2=4s^2$, i.e. $2s^2+28s-100=0$, or $s^2+14s-50=0$.`,
      check: { q: R`Expand $(8-s)^2+(6-s)^2$.`, opts: [R`100-28s+2s^2`, R`100-14s+2s^2`, R`64+36+s^2`, R`100-28s+s^2`], ans: 0, why: R`$64-16s+s^2+36-12s+s^2$.` } },
    { title: 'Solve',
      explain: R`$s=-7+\sqrt{49+50}=-7+3\sqrt{11}\approx2.95$. Check $x=\tfrac{8-s}2\approx2.5<4$. So $k+m+n=-7+3+11=7$.`,
      check: { q: R`Simplify $\sqrt{99}$.`, opts: [R`3\sqrt{11}`, R`9\sqrt{11}`, R`11\sqrt3`, R`3\sqrt{33}`], ans: 0, why: R`$99=9\cdot11$.` } }
  ],
  bridge: R`Write the trimmed lengths in terms of $s$ and apply Pythagoras to the slanted sides.`,
  solution: [
    R`$AB=8-2x=s$ and $CD=6-2y=s$, so $x=\tfrac{8-s}2$, $y=\tfrac{6-s}2$.`,
    R`$x^2+y^2=s^2$ gives $s^2+14s-50=0$.`,
    R`$s=-7+3\sqrt{11}$.`,
    R`$k+m+n=-7+3+11=7$. The answer is $\textbf{(B)}\ 7$.`
  ],
  shortcut: R`Write the equation directly as $(8-s)^2+(6-s)^2=(2s)^2$.`,
  traps: [R`Assuming the corner triangles are isosceles ($x=y$), which would need a square.`, R`Forgetting $k$ is negative.`],
  recognize: R`Equilateral polygons cut from rectangles: each side condition gives an equation; straight sides give linear ones and cut corners give Pythagorean ones.`
},

'2018B18': {
  answer: 'D',
  goal: R`Six children (three sibling pairs) sit in two rows of three. Siblings may not sit side by side in a row, nor one directly behind the other. We count seating arrangements.`,
  tools: [
    { name: 'Forced structure', fact: R`\text{Each row has one child from each family.}`, why: R`If a row held a sibling pair, they would need the two end seats, forcing the other row to do the same, and the middle children would be siblings one behind the other.` },
    { name: 'Derangements of 3', fact: R`D_3=2`, why: R`Arrangements of $3$ items with none in its own position: $BCA$ and $CAB$.` },
    { name: 'Multiplication principle', fact: R`\text{(who is in front)}\times\text{(front order)}\times\text{(back order)}`, why: R`Independent choices multiply.` }
  ],
  approach: R`First determine what each row must look like: the constraints force one child from each family per row. Then choose which sibling of each family sits in front, arrange the front row, and arrange the back row so no one is behind their sibling (a derangement).`,
  steps: [
    { title: 'Each row has one from each family',
      explain: R`If the front row had siblings $A,a$, they must use the two end seats, with child $B$ in the middle. The back row then holds $C,c$ and $b$; $C,c$ must also use the ends, putting $b$ directly behind $B$. Not allowed. So each row has one child per family.`,
      check: { q: R`In a row of three seats, where can two siblings sit without being adjacent?`, opts: [R`\text{The two end seats}`, R`\text{Middle and an end}`, R`\text{Nowhere}`, R`\text{Any two seats}`], ans: 0, why: R`Only seats $1$ and $3$ are not next to each other.` } },
    { title: 'Front row',
      explain: R`Choose which sibling from each family sits in front: $2^3=8$. Arrange them: $3!=6$. Adjacency is automatic since no two front-row children are siblings.`,
      check: { q: R`How many ways to choose one child from each of three pairs?`, opts: [R`8`, R`6`, R`3`, R`9`], ans: 0, why: R`$2\cdot2\cdot2$.` } },
    { title: 'Back row',
      explain: R`Each back-row child must not sit behind their sibling: a derangement of $3$, $2$ ways. Total $8\cdot6\cdot2=96$.`,
      check: { q: R`How many derangements of $3$ objects?`, opts: [R`2`, R`3`, R`1`, R`6`], ans: 0, why: R`$BCA$ and $CAB$.` } }
  ],
  bridge: R`Show each row has one child per family, then choose front children, arrange them, and derange the back row.`,
  solution: [
    R`A sibling pair in one row forces a sibling pair in the other with the middle children siblings front-to-back, so each row has one child per family.`,
    R`Front row: $2^3$ choices of children and $3!$ orders: $48$.`,
    R`Back row: no one behind their sibling, a derangement: $2$.`,
    R`Total $96$. The answer is $\textbf{(D)}\ 96$.`
  ],
  shortcut: R`Once the "one per family per row" structure is clear, the count is $2^3\cdot3!\cdot D_3$.`,
  traps: [R`Forgetting the case analysis that rules out sibling pairs in a row.`, R`Using $3!$ for the back row.`],
  recognize: R`Seating with forbidden neighbours: first find structural constraints (what each row must contain), then count, often with derangements.`
},

'2018B19': {
  answer: 'E',
  goal: R`Chloe's age is a multiple of Zoe's on exactly $9$ birthdays, starting today when Zoe is $1$. Joey is one year older than Chloe. We want the digit sum of Joey's age the next time it is a multiple of Zoe's age. Age differences stay constant, which turns this into divisibility.`,
  tools: [
    { name: 'Constant age difference', fact: R`\text{Chloe}=z+d,\ \text{Joey}=z+d+1\ \ (z=\text{Zoe's age})`, why: R`Everyone ages one year at a time.` },
    { name: 'Multiple condition', fact: R`z\mid z+d\iff z\mid d`, why: R`$z$ divides $z+d$ exactly when it divides $d$.` },
    { name: 'Number of divisors', fact: R`9\text{ divisors}\iff d=p^8\text{ or }p^2q^2`, why: R`$(e_1+1)(e_2+1)\cdots=9$.` }
  ],
  approach: R`Let $d$ be the age gap between Chloe and Zoe. Chloe's age is a multiple of Zoe's exactly when $z\mid d$, so there are as many such birthdays as $d$ has divisors: $9$. Find a realistic $d$ with $9$ divisors, then find the next $z>1$ dividing Joey's gap $d+1$.`,
  steps: [
    { title: 'Translate to divisors',
      explain: R`Chloe's age $z+d$ is a multiple of $z$ iff $z\mid d$. Today $z=1$, and there are $9$ such birthdays in total, so $d$ has exactly $9$ divisors.`,
      check: { q: R`If $d=12$, on how many of Zoe's birthdays is Chloe's age a multiple of Zoe's?`, opts: [R`6`, R`12`, R`4`, R`3`], ans: 0, why: R`$12$ has $6$ divisors.` } },
    { title: 'Find $d$',
      explain: R`Numbers with $9$ divisors are $p^2q^2$ or $p^8$: $36,100,196,225,256,\ldots$. A realistic parent has $d=36$, so Chloe is $37$ and Joey is $38$.`,
      check: { q: R`How many divisors does $36$ have?`, opts: [R`9`, R`8`, R`6`, R`12`], ans: 0, why: R`$36=2^23^2$: $3\cdot3$.` } },
    { title: 'Joey\'s next multiple',
      explain: R`Joey's age $z+37$ is a multiple of $z$ iff $z\mid37$. Since $37$ is prime, the next time is $z=37$, when Joey is $74$. Digit sum $11$.`,
      check: { q: R`Joey is $37$ years older than Zoe. When is his age next a multiple of hers after she turns $1$?`, opts: [R`\text{When she is }37`, R`\text{When she is }2`, R`\text{Never}`, R`\text{When she is }36`], ans: 0, why: R`$37$ is prime.` } }
  ],
  bridge: R`Turn "age is a multiple" into "$z$ divides the age gap", find the gap with $9$ divisors, and apply the same idea to Joey.`,
  solution: [
    R`With gap $d$, Chloe's age is a multiple of Zoe's iff $z\mid d$, so $d$ has $9$ divisors.`,
    R`The realistic choice is $d=36$ (Chloe $37$, Joey $38$).`,
    R`Joey's gap is $37$, prime, so the next multiple is at $z=37$: Joey is $74$.`,
    R`$7+4=11$. The answer is $\textbf{(E)}\ 11$.`
  ],
  shortcut: R`"Multiple of a child's age" problems always become "divisors of the age difference".`,
  traps: [R`Using Chloe's age instead of the difference.`, R`Picking $d=100$ (a $101$-year-old mother).`],
  recognize: R`When ages keep a fixed difference, conditions like "age is a multiple of another age" turn into divisibility of the difference.`
},

'2018B20': {
  answer: 'B',
  goal: R`$f(n)=f(n-1)-f(n-2)+n$ with $f(1)=f(2)=1$; we want $f(2018)$. Computing $2018$ terms is impossible by hand, so find a pattern that jumps ahead.`,
  tools: [
    { name: 'Unrolling a recursion', fact: R`f(n+3)=-f(n)+2n+5`, why: R`Apply the rule twice and simplify.` },
    { name: 'Periodic shift', fact: R`f(n+6)=f(n)+6`, why: R`Apply the three-step rule twice.` }
  ],
  approach: R`Compute a few terms: $1,1,3,6,8,8,7,7,9,12,\ldots$ Values six apart differ by $6$. Prove this by unrolling the recursion, then jump from $f(2)$ to $f(2018)$.`,
  steps: [
    { title: 'Compute small cases',
      explain: R`$f(3)=1-1+3=3$, $f(4)=6$, $f(5)=8$, $f(6)=8$, $f(7)=7$, $f(8)=7$. Notice $f(8)=f(2)+6$ and $f(7)=f(1)+6$.`,
      check: { q: R`What is $f(5)$?`, opts: [R`8`, R`6`, R`9`, R`5`], ans: 0, why: R`$f(4)-f(3)+5=6-3+5$.` } },
    { title: 'Prove the jump',
      explain: R`$f(n+3)=f(n+2)-f(n+1)+n+3=(f(n+1)-f(n)+n+2)-f(n+1)+n+3=-f(n)+2n+5$. Then $f(n+6)=-f(n+3)+2(n+3)+5=f(n)-2n-5+2n+11=f(n)+6$.`,
      check: { q: R`If $f(n+3)=-f(n)+2n+5$, what is $f(n+6)-f(n)$?`, opts: [R`6`, R`0`, R`2n`, R`11`], ans: 0, why: R`Apply twice.` } },
    { title: 'Jump to 2018',
      explain: R`$2018=2+6\cdot336$, so $f(2018)=f(2)+6\cdot336=1+2016=2017$.`,
      check: { q: R`What is $2018\bmod6$?`, opts: [R`2`, R`0`, R`4`, R`1`], ans: 0, why: R`$2016=6\cdot336$.` } }
  ],
  bridge: R`Find and prove $f(n+6)=f(n)+6$, then jump from $f(2)$.`,
  solution: [
    R`Unrolling: $f(n+3)=-f(n)+2n+5$, so $f(n+6)=f(n)+6$.`,
    R`$2018=2+6\cdot336$.`,
    R`$f(2018)=f(2)+2016=2017$.`,
    R`The answer is $\textbf{(B)}\ 2017$.`
  ],
  shortcut: R`Guess from the table that $f(n)=n-1$ when $n\equiv2\pmod6$, then check.`,
  traps: [R`Assuming period $6$ without the $+6$ shift.`, R`Arithmetic slips in the small cases.`],
  recognize: R`Linear recursions with alternating signs often have a period (here $6$) up to a linear shift; unroll to find it.`
},

'2018B21': {
  answer: 'C',
  goal: R`An even $4$-digit $n$ has $323=17\cdot19$ as a divisor. We want the smallest possible divisor right after $323$. Because $n<10000$, any new prime factors make $n$ too large unless they reuse $17$ or $19$.`,
  tools: [
    { name: 'Factorisation', fact: R`323=17\cdot19,\quad2\cdot323=646`, why: R`$n$ is even and divisible by $323$, so $646\mid n$.` },
    { name: 'lcm bound', fact: R`d\mid n\ \Rightarrow\ \operatorname{lcm}(646,d)\mid n\le9999`, why: R`Any divisor of $n$ forces $n$ to be a multiple of the lcm.` }
  ],
  approach: R`The next divisor $d>323$ must keep $\operatorname{lcm}(646,d)$ below $10000$. If $d$ shares no factor $17$ or $19$, the lcm is at least $646\cdot162$, far too big. So $d$ is a multiple of $17$ or $19$. Check the smallest such numbers above $323$.`,
  steps: [
    { title: 'Why $d$ must share $17$ or $19$',
      explain: R`If $\gcd(d,323)=1$, then $\operatorname{lcm}(646,d)\ge\tfrac{646\cdot d}{2}\ge323\cdot324$, much more than $9999$. So $17\mid d$ or $19\mid d$.`,
      check: { q: R`What is $\operatorname{lcm}(646,324)$ roughly?`, opts: [R`\text{over }100000`, R`\text{about }1000`, R`\text{about }5000`, R`646`], ans: 0, why: R`$646\cdot162=104652$.` } },
    { title: 'Smallest candidates',
      explain: R`Multiples of $17$ above $323$: $340$. Of $19$: $342$. So $d\ge340$. Try $d=340=2^2\cdot5\cdot17$: $\operatorname{lcm}(646,340)=2^2\cdot5\cdot17\cdot19=6460$, a $4$-digit even number.`,
      check: { q: R`What is $17\cdot20$?`, opts: [R`340`, R`323`, R`357`, R`342`], ans: 0, why: R`$17\cdot20$.` } },
    { title: 'Check no divisor in between',
      explain: R`Divisors of $6460$ around $323$: $323$ then $340$ (nothing between, since any divisor between would have to be a multiple of $17$ or $19$ in $(323,340)$, and there is none). So the answer is $340$.`,
      check: { q: R`Is there a multiple of $19$ between $323$ and $340$?`, opts: [R`\text{No}`, R`\text{Yes, }330`, R`\text{Yes, }338`, R`\text{Yes, }336`], ans: 0, why: R`$323+19=342$.` } }
  ],
  bridge: R`Show the next divisor must be a multiple of $17$ or $19$, then test the smallest.`,
  solution: [
    R`$n$ is a multiple of $646=2\cdot17\cdot19$ and less than $10000$.`,
    R`A divisor $d>323$ coprime to $323$ would force $n\ge\operatorname{lcm}(646,d)>10000$, so $17\mid d$ or $19\mid d$.`,
    R`The smallest such $d$ above $323$ is $340$, and $n=6460$ works.`,
    R`The answer is $\textbf{(C)}\ 340$.`
  ],
  shortcut: R`Answer choices: $324$ and $330$ share nothing with $323$; $340=323+17$ is the first that reuses a prime.`,
  traps: [R`Choosing $646$ (that is $n/10$-type thinking, not the next divisor).`, R`Choosing $324$ without checking the size of $n$.`],
  recognize: R`"Next divisor after $k$" with a size bound: new divisors must reuse prime factors of $k$, or $n$ becomes too large.`
},

'2018B22': {
  answer: 'C',
  goal: R`For $x,y$ uniform in $[0,1]$, we want the probability that $x,y,1$ form an obtuse triangle. Since $x,y\le1$, the side $1$ is the longest, so the obtuse angle (if any) is opposite it.`,
  tools: [
    { name: 'Triangle inequality', fact: R`x+y>1`, why: R`The two shorter sides must add to more than the longest.` },
    { name: 'Obtuse test', fact: R`x^2+y^2<1`, why: R`Law of cosines: the angle opposite the longest side is obtuse iff the square of that side exceeds the sum of the other squares.` },
    { name: 'Probability as area', fact: R`P=\text{area of region in the unit square}`, why: R`$(x,y)$ is uniform in the unit square.` }
  ],
  approach: R`Translate both conditions into regions of the unit square: above the line $x+y=1$ and inside the circle $x^2+y^2=1$. The region is a quarter disc minus a triangle.`,
  steps: [
    { title: 'Conditions',
      explain: R`Triangle: $x+y>1$. Obtuse at the angle opposite $1$: $x^2+y^2<1$.`,
      check: { q: R`Is $0.6,0.6,1$ obtuse?`, opts: [R`\text{Yes: }0.72<1`, R`\text{No}`, R`\text{It is right}`, R`\text{Not a triangle}`], ans: 0, why: R`$0.36+0.36<1$ and $1.2>1$.` } },
    { title: 'Area',
      explain: R`Inside the quarter disc ($\tfrac\pi4$) but above the line $x+y=1$ (removing the triangle of area $\tfrac12$): $\tfrac\pi4-\tfrac12\approx0.785-0.5=0.285$.`,
      check: { q: R`What is $\tfrac\pi4$ approximately?`, opts: [R`0.785`, R`0.75`, R`0.8`, R`0.314`], ans: 0, why: R`$3.1416/4$.` } }
  ],
  bridge: R`Write both conditions as regions and subtract the triangle from the quarter disc.`,
  solution: [
    R`Side $1$ is longest, so we need $x+y>1$ and $x^2+y^2<1$.`,
    R`The region is the quarter disc minus the triangle below $x+y=1$.`,
    R`Area $\tfrac\pi4-\tfrac12\approx0.285$.`,
    R`Closest is $0.29$. The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Draw the unit square, the line and the quarter circle: the lens-like region is visibly about $0.29$.`,
  traps: [R`Forgetting the triangle inequality ($x^2+y^2<1$ alone gives $0.79$).`, R`Checking obtuse angles opposite $x$ or $y$, which is impossible since $1$ is longest.`],
  recognize: R`Random side lengths and triangle types: triangle inequality plus the law-of-cosines test, each a region in the unit square.`
},

'2018B23': {
  answer: 'B',
  goal: R`We need positive integer pairs with $ab+63=20\operatorname{lcm}(a,b)+12\gcd(a,b)$. The identity $ab=\gcd\cdot\operatorname{lcm}$ turns this into an equation in $g=\gcd$ and $L=\operatorname{lcm}$ that factors.`,
  tools: [
    { name: 'gcd–lcm product', fact: R`ab=\gcd(a,b)\cdot\operatorname{lcm}(a,b)`, why: R`Each prime's exponents: $\min+\max=$ sum.` },
    { name: "Simon's factoring trick", fact: R`gL-20L-12g+63=0\iff(g-20)(L-12)=177`, why: R`Add $240$ to both sides to complete the product.` },
    { name: 'Coprime parts', fact: R`a=gm,\ b=gn,\ \gcd(m,n)=1,\ L=gmn`, why: R`Divide out the gcd.` }
  ],
  approach: R`Replace $ab$ by $gL$. The equation becomes $gL-20L-12g+63=0$, which factors after adding $240$. List factor pairs of $177=3\cdot59$, keep those with $g\mid L$, and count pairs $(a,b)$ for each.`,
  steps: [
    { title: 'Factor the equation',
      explain: R`$gL+63=20L+12g$ rearranges to $(g-20)(L-12)=240-63=177$.`,
      check: { q: R`Factor $xy-3x-5y+15$.`, opts: [R`(x-5)(y-3)`, R`(x-3)(y-5)`, R`(x+5)(y+3)`, R`(x-15)(y-1)`], ans: 0, why: R`Expand to check.` } },
    { title: 'Try factor pairs',
      explain: R`$177=1\cdot177=3\cdot59$. Since $L\ge g\ge1$: $(1,177)$ gives $g=21$, $L=189$, and $189/21=9$ is an integer. $(3,59)$ gives $g=23$, $L=71$: $23\nmid71$. $(59,3)$ and $(177,1)$ give $L<g$. Negative pairs give negative values.`,
      check: { q: R`What is $189/21$?`, opts: [R`9`, R`8`, R`7`, R`21`], ans: 0, why: R`$21\cdot9=189$.` } },
    { title: 'Count pairs',
      explain: R`$g=21$, $mn=9$ with $\gcd(m,n)=1$: $(1,9)$ or $(9,1)$. So $(a,b)=(21,189)$ or $(189,21)$: $2$ pairs.`,
      check: { q: R`Which coprime ordered pairs have product $9$?`, opts: [R`(1,9),(9,1)`, R`(3,3)`, R`(1,9),(3,3),(9,1)`, R`\text{none}`], ans: 0, why: R`$(3,3)$ is not coprime.` } }
  ],
  bridge: R`Use $ab=gL$, factor with Simon's trick, and test the factor pairs of $177$.`,
  solution: [
    R`With $ab=gL$: $(g-20)(L-12)=177$.`,
    R`Only $g=21$, $L=189$ has $g\mid L$ and positive values.`,
    R`$L/g=9=mn$ with $\gcd(m,n)=1$ gives $(m,n)=(1,9),(9,1)$.`,
    R`So $2$ pairs. The answer is $\textbf{(B)}\ 2$.`
  ],
  shortcut: R`Check: $21\cdot189+63=4032=20\cdot189+12\cdot21$.`,
  traps: [R`Counting $(3,3)$ for $mn=9$.`, R`Forgetting $L$ must be a multiple of $g$.`],
  recognize: R`Equations with $ab$, gcd and lcm: replace $ab$ by $\gcd\cdot\operatorname{lcm}$; the result usually factors.`
},

'2018B24': {
  answer: 'C',
  goal: R`In a regular hexagon of side $1$, triangle $ACE$ and the midpoint triangle $XYZ$ overlap in a hexagon. We need its area. Both triangles are equilateral and centred at the hexagon's centre; the overlap is $XYZ$ with its three corners cut off by the sides of $ACE$.`,
  tools: [
    { name: 'Equilateral triangle area', fact: R`\frac{\sqrt3}{4}s^2`, why: R`Base times height over $2$ with height $\tfrac{\sqrt3}2s$.` },
    { name: '$30$-$60$-$90$ triangles', fact: R`\text{sides }1:\sqrt3:2`, why: R`Half of an equilateral triangle.` },
    { name: 'Coordinates', fact: R`A=(1,0),\ C=(-\tfrac12,\tfrac{\sqrt3}2),\ X=(\tfrac34,\tfrac{\sqrt3}4)`, why: R`Placing the centre at the origin makes every line simple.` }
  ],
  approach: R`Compute the area of $XYZ$, then subtract the three corners that stick out past $ACE$. Find one corner by coordinates: it turns out to be a $30$-$60$-$90$ triangle.`,
  steps: [
    { title: 'Triangle $XYZ$',
      explain: R`$X,Y,Z$ are midpoints of alternate sides, at distance $\tfrac{\sqrt3}2$ from the centre. Side $XY=\tfrac32$ (e.g. $X=(\tfrac34,\tfrac{\sqrt3}4)$, $Y=(-\tfrac34,\tfrac{\sqrt3}4)$). Area $\tfrac{\sqrt3}4\cdot\tfrac94=\tfrac{9\sqrt3}{16}$.`,
      check: { q: R`What is the area of an equilateral triangle with side $\tfrac32$?`, opts: [R`\tfrac{9\sqrt3}{16}`, R`\tfrac{3\sqrt3}{8}`, R`\tfrac{9\sqrt3}{4}`, R`\tfrac{3\sqrt3}{4}`], ans: 0, why: R`$\tfrac{\sqrt3}4\cdot\tfrac94$.` } },
    { title: 'One corner',
      explain: R`Line $AC$ is $x+\sqrt3y=1$. It meets $XY$ ($y=\tfrac{\sqrt3}4$) at $(\tfrac14,\tfrac{\sqrt3}4)$ and meets $XZ$ ($y=\sqrt3x-\tfrac{\sqrt3}2$) at $(\tfrac58,\tfrac{\sqrt3}8)$. Line $AC$ is perpendicular to $XZ$, so the corner is a right triangle with hypotenuse $\tfrac12$ along $XY$ and a $60^\circ$ angle at $X$: legs $\tfrac14$ and $\tfrac{\sqrt3}4$, area $\tfrac{\sqrt3}{32}$.`,
      check: { q: R`A $30$-$60$-$90$ triangle has hypotenuse $\tfrac12$. What is its area?`, opts: [R`\tfrac{\sqrt3}{32}`, R`\tfrac{\sqrt3}{16}`, R`\tfrac18`, R`\tfrac{\sqrt3}{8}`], ans: 0, why: R`Legs $\tfrac14,\tfrac{\sqrt3}4$: $\tfrac12\cdot\tfrac14\cdot\tfrac{\sqrt3}4$.` } },
    { title: 'Subtract',
      explain: R`Three equal corners: $\tfrac{9\sqrt3}{16}-\tfrac{3\sqrt3}{32}=\tfrac{15\sqrt3}{32}$.`,
      check: { q: R`What is $\tfrac{18}{32}-\tfrac3{32}$?`, opts: [R`\tfrac{15}{32}`, R`\tfrac{21}{32}`, R`\tfrac{9}{16}`, R`\tfrac{12}{32}`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Take the area of $XYZ$ and subtract its three corners outside $ACE$.`,
  solution: [
    R`$XYZ$ is equilateral with side $\tfrac32$: area $\tfrac{9\sqrt3}{16}$.`,
    R`Each side of $ACE$ cuts off a $30$-$60$-$90$ corner of $XYZ$ with hypotenuse $\tfrac12$: area $\tfrac{\sqrt3}{32}$.`,
    R`Overlap $=\tfrac{9\sqrt3}{16}-3\cdot\tfrac{\sqrt3}{32}=\tfrac{15\sqrt3}{32}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{15}{32}\sqrt3$.`
  ],
  shortcut: R`Know that $ACE$ has inradius $\tfrac12$ and $XYZ$ has circumradius $\tfrac{\sqrt3}2$; their difference along the vertex direction shows how far each corner sticks out.`,
  traps: [R`Assuming the cut-off corners are equilateral.`, R`Using side $\sqrt3$ for $XYZ$ (that is $ACE$).`],
  recognize: R`Overlap of two concentric equilateral triangles: area of one minus its corners outside the other; coordinates with the centre at the origin make the cuts easy.`
},

'2018B25': {
  answer: 'C',
  goal: R`We count real $x$ with $x^2+10000\lfloor x\rfloor=10000x$. Rearranged, $x^2=10000\{x\}$, where $\{x\}$ is the fractional part. Compare the parabola $\tfrac{x^2}{10000}$ with the sawtooth $\{x\}$.`,
  tools: [
    { name: 'Fractional part', fact: R`\{x\}=x-\lfloor x\rfloor\in[0,1)`, why: R`Definition.` },
    { name: 'Bounding', fact: R`x^2=10000\{x\}<10000\Rightarrow|x|<100`, why: R`The right side is less than $10000$.` },
    { name: 'One crossing per tooth', fact: R`\text{On }[n,n+1),\ \{x\}\text{ rises from }0\text{ to }1`, why: R`If the parabola stays strictly between $0$ and $1$ on that interval, the rising sawtooth crosses it once.` }
  ],
  approach: R`Write the equation as $\tfrac{x^2}{10000}=\{x\}$. The left side is a slowly varying parabola below $1$ for $|x|<100$; the right side rises from $0$ to $1$ on every unit interval. Count the intervals where they cross, being careful at the ends $x\approx\pm100$.`,
  steps: [
    { title: 'Rewrite',
      explain: R`$x^2=10000(x-\lfloor x\rfloor)=10000\{x\}$. So $0\le x^2<10000$ and $-100<x<100$.`,
      check: { q: R`If $\{x\}=0.25$ and $\lfloor x\rfloor=3$, what is $x$?`, opts: [R`3.25`, R`2.75`, R`0.25`, R`3`], ans: 0, why: R`$x=\lfloor x\rfloor+\{x\}$.` } },
    { title: 'Count crossings for $x\ge0$',
      explain: R`On $[n,n+1)$ for $0\le n\le98$, $\{x\}$ starts at $0\le\tfrac{n^2}{10000}$ and approaches $1>\tfrac{(n+1)^2}{10000}$, so there is exactly one solution (for $n=0$ it is $x=0$). On $[99,100)$ the crossing would be at $x=100$, which is excluded. So $99$ solutions with $x\ge0$.`,
      check: { q: R`At $x=100$, is the equation $x^2=10000\{x\}$ satisfied?`, opts: [R`\text{No: }\{100\}=0`, R`\text{Yes}`, R`\text{Only approximately}`, R`\text{It is undefined}`], ans: 0, why: R`$10000\ne0$.` } },
    { title: 'Count crossings for $x<0$',
      explain: R`On $[n,n+1)$ for $-100\le n\le-1$, $\{x\}$ rises from $0$ to $1$ while the parabola is between $0$ and $1$, so each gives one solution: $100$ more. Total $99+100=199$.`,
      check: { q: R`How many integers $n$ satisfy $-100\le n\le-1$?`, opts: [R`100`, R`99`, R`101`, R`50`], ans: 0, why: R`$100$ values.` } }
  ],
  bridge: R`Compare $\tfrac{x^2}{10000}$ with the sawtooth $\{x\}$ interval by interval.`,
  solution: [
    R`The equation is $x^2=10000\{x\}$, forcing $-100<x<100$.`,
    R`On each $[n,n+1)$ the sawtooth rises from $0$ to $1$ and crosses the parabola once, except on $[99,100)$ where the crossing is at the excluded point $100$.`,
    R`Nonnegative solutions: $n=0,\ldots,98$, that is $99$. Negative: $n=-100,\ldots,-1$, that is $100$.`,
    R`Total $199$. The answer is $\textbf{(C)}\ 199$.`
  ],
  shortcut: R`Sketch the sawtooth and the very flat parabola; only the right end at $x=100$ needs care.`,
  traps: [R`Counting a solution on $[99,100)$.`, R`Forgetting $x=0$.`],
  recognize: R`Equations mixing $x$ and $\lfloor x\rfloor$: rewrite with $\{x\}$ and compare graphs interval by interval.`
}

};
