// Hand-written lessons: 2005 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2005A16': {
  answer: 'D',
  goal: R`Subtract a two-digit number's digit sum from it; the result ends in $6$. Count such numbers. Write the number as $10a+b$.`,
  tools: [
    { name: 'Place value', fact: R`(10a+b)-(a+b)=9a`, why: R`The units digit $b$ cancels.` }
  ],
  approach: R`The result is $9a$, which ends in $6$ only for $a=4$ ($36$). Then $b$ is free: $40$–$49$.`,
  steps: [
    { title: 'Simplify',
      explain: R`$10a+b-a-b=9a$.`,
      check: { q: R`Which $a\in\{1,\ldots,9\}$ makes $9a$ end in $6$?`, opts: [R`4`, R`6`, R`2`, R`8`], ans: 0, why: R`$9\cdot4=36$.` } },
    { title: 'Count',
      explain: R`$b$ can be $0$–$9$: $10$ numbers.`,
      check: { q: R`How many two-digit numbers have tens digit $4$?`, opts: [R`10`, R`9`, R`1`, R`19`], ans: 0, why: R`$40$ through $49$.` } }
  ],
  bridge: R`The result depends only on $a$.`,
  solution: [
    R`Number minus digit sum $=9a$.`,
    R`$9a$ ends in $6$ iff $a=4$.`,
    R`$10$ numbers ($40$–$49$).`,
    R`The answer is $\textbf{(D)}\ 10$.`
  ],
  shortcut: R`A number minus its digit sum is always a multiple of $9$.`,
  traps: [R`Thinking the units digit matters.`, R`Counting only one number.`],
  recognize: R`Number minus digit sum: place value makes the units digit vanish.`
},

'2005A17': {
  answer: 'D',
  goal: R`The star's five segment sums use the numbers $3,5,6,7,9$, each at two segment ends. The sums form an arithmetic sequence; we want its middle term.`,
  tools: [
    { name: 'Double counting', fact: R`\text{sum of segment sums}=2(3+5+6+7+9)=60`, why: R`Each letter is on exactly two of the listed segments.` },
    { name: 'AP middle term', fact: R`\text{middle}=\tfrac{\text{sum}}{5}`, why: R`A 5-term arithmetic sequence is symmetric about its middle.` }
  ],
  approach: R`The five sums total $60$, so the middle term is $12$.`,
  steps: [
    { title: 'Total',
      explain: R`Each letter appears in two of $AB,BC,CD,DE,EA$. Total $=2\cdot30=60$.`,
      check: { q: R`What is $3+5+6+7+9$?`, opts: [R`30`, R`25`, R`35`, R`60`], ans: 0, why: R`Add.` } },
    { title: 'Middle',
      explain: R`$\tfrac{60}5=12$.`,
      check: { q: R`Five terms of an AP sum to $60$. What is the middle term?`, opts: [R`12`, R`10`, R`15`, R`6`], ans: 0, why: R`Average.` } }
  ],
  bridge: R`Double-count, then divide by $5$.`,
  solution: [
    R`Sum of the five segment sums $=60$.`,
    R`Middle term $=12$.`,
    R`The answer is $\textbf{(D)}\ 12$.`
  ],
  shortcut: R`No need to find the actual arrangement.`,
  traps: [R`Trying to place the numbers.`, R`Using $30$ instead of $60$.`],
  recognize: R`Sums over a cycle: each element counted the same number of times.`
},

'2005A18': {
  answer: 'A',
  goal: R`Best of five (first to $3$). Given B won game $2$ and A won the series, we want $P(\text{B won game 1})$. Use conditional probability.`,
  tools: [
    { name: 'Conditional probability', fact: R`P(X\mid Y)=\frac{P(X\cap Y)}{P(Y)}`, why: R`Compare the two cases for game $1$.` },
    { name: 'Symmetry', fact: R`\text{from }1\text{–}1,\ P(\text{A wins})=\tfrac12`, why: R`The teams are evenly matched.` }
  ],
  approach: R`Case B won game $1$: A must win the next $3$: $\tfrac18$. Case A won game $1$: from $1$–$1$, A wins with $\tfrac12$. Ratio $\tfrac{1/8}{1/8+1/2}$.`,
  steps: [
    { title: 'Cases',
      explain: R`B 2–0: A needs $3$ straight: $\tfrac18$. Tied 1–1: A wins with $\tfrac12$.`,
      check: { q: R`If B leads $2$–$0$, what is $P(\text{A wins the series})$?`, opts: [R`\tfrac18`, R`\tfrac14`, R`\tfrac12`, R`\tfrac1{16}`], ans: 0, why: R`A must win three straight.` } },
    { title: 'Condition',
      explain: R`$\tfrac{1/8}{1/8+1/2}=\tfrac{1}{5}$.`,
      check: { q: R`What is $\tfrac{1/8}{5/8}$?`, opts: [R`\tfrac15`, R`\tfrac14`, R`\tfrac58`, R`\tfrac18`], ans: 0, why: R`Cancel $\tfrac18$.` } }
  ],
  bridge: R`Compare the two cases' probabilities of A winning.`,
  solution: [
    R`$P(\text{B won 1 and A wins})\propto\tfrac18$; $P(\text{A won 1 and A wins})\propto\tfrac12$.`,
    R`$P=\tfrac{1/8}{1/8+1/2}=\tfrac15$.`,
    R`The answer is $\textbf{(A)}\ \tfrac15$.`
  ],
  shortcut: R`Game $1$ was a fair coin, so both cases have the same prior weight; compare only the follow-up chances.`,
  traps: [R`Answering $\tfrac12$ (ignoring the condition).`, R`Answering $\tfrac14$.`],
  recognize: R`"Given the outcome, what was likely earlier?": Bayes with simple case weights.`
},

'2005A19': {
  answer: 'D',
  goal: R`The middle of three unit squares is rotated $45^\circ$ and lowered until it touches the neighbours' top inner corners at $(\pm\tfrac12,1)$. We want the height of its top vertex $B$.`,
  tools: [
    { name: '45° edges', fact: R`\text{lower edges have slope }\pm1`, why: R`The square is rotated by $45^\circ$.` },
    { name: 'Diagonal', fact: R`\sqrt2`, why: R`Bottom vertex to top vertex.` }
  ],
  approach: R`Bottom vertex at height $h$; its edges rise $\tfrac12$ over $\tfrac12$ horizontally, reaching the corners at height $1$: $h=\tfrac12$. Top vertex: $\tfrac12+\sqrt2$.`,
  steps: [
    { title: 'Bottom vertex',
      explain: R`The lower edges pass through $(\pm\tfrac12,1)$ with slope $\pm1$, so the bottom vertex is $\tfrac12$ lower: $h=\tfrac12$.`,
      check: { q: R`A line of slope $1$ through $(\tfrac12,1)$ meets $x=0$ at what height?`, opts: [R`\tfrac12`, R`0`, R`1`, R`\tfrac32`], ans: 0, why: R`$1-\tfrac12$.` } },
    { title: 'Top vertex',
      explain: R`$B=h+\sqrt2=\sqrt2+\tfrac12$.`,
      check: { q: R`What is the diagonal of a unit square?`, opts: [R`\sqrt2`, R`1`, R`2`, R`\tfrac{\sqrt2}{2}`], ans: 0, why: R`$\sqrt{1+1}$.` } }
  ],
  bridge: R`Find the bottom vertex from the contact points, then add the diagonal.`,
  solution: [
    R`Contact points $(\pm\tfrac12,1)$ on edges of slope $\pm1$.`,
    R`Bottom vertex at height $\tfrac12$.`,
    R`$B$ at height $\tfrac12+\sqrt2$.`,
    R`The answer is $\textbf{(D)}\ \sqrt2+\tfrac12$.`
  ],
  shortcut: R`The rotated square's lower half is a right isosceles triangle; it sinks until its width at height $1$ is $1$.`,
  traps: [R`Assuming it rests on the line (bottom at $0$).`, R`Using side length instead of the diagonal.`],
  recognize: R`Tilted squares resting on corners: use the $45^\circ$ slopes.`
},

'2005A20': {
  answer: 'A',
  goal: R`An equiangular octagon alternates sides $1$ and $\tfrac{\sqrt2}{2}$. We want its area. Extend the short sides to see a square with corners cut off.`,
  tools: [
    { name: 'Corner triangles', fact: R`\text{hypotenuse }\tfrac{\sqrt2}2\Rightarrow\text{legs }\tfrac12`, why: R`All angles are $135^\circ$, so the short sides are $45^\circ$ cuts.` },
    { name: 'Subtraction', fact: R`\text{area}=\text{square}-4\text{ triangles}`, why: R`The octagon is a square with corners removed.` }
  ],
  approach: R`Square side $1+\tfrac12+\tfrac12=2$, area $4$. Each corner triangle has area $\tfrac18$. Octagon: $4-\tfrac12=\tfrac72$.`,
  steps: [
    { title: 'Bounding square',
      explain: R`Each side of the square is a long side plus two legs: $2$.`,
      check: { q: R`What are the legs of a right isosceles triangle with hypotenuse $\tfrac{\sqrt2}2$?`, opts: [R`\tfrac12`, R`\tfrac{\sqrt2}{4}`, R`1`, R`\tfrac{\sqrt2}{2}`], ans: 0, why: R`Divide by $\sqrt2$.` } },
    { title: 'Area',
      explain: R`$4-4\cdot\tfrac12\cdot\tfrac12\cdot\tfrac12=4-\tfrac12=\tfrac72$.`,
      check: { q: R`What is the area of one corner triangle?`, opts: [R`\tfrac18`, R`\tfrac14`, R`\tfrac12`, R`\tfrac1{16}`], ans: 0, why: R`$\tfrac12\cdot\tfrac12\cdot\tfrac12$.` } }
  ],
  bridge: R`Square minus four small triangles.`,
  solution: [
    R`Bounding square: side $2$, area $4$.`,
    R`Four corners of area $\tfrac18$ each.`,
    R`Octagon: $\tfrac72$.`,
    R`The answer is $\textbf{(A)}\ \tfrac72$.`
  ],
  shortcut: R`Equiangular octagons always fit in a rectangle with $45^\circ$ corners cut off.`,
  traps: [R`Using legs $\tfrac{\sqrt2}2$.`, R`Treating it as a regular octagon.`],
  recognize: R`Equiangular octagons: box them in and subtract corner triangles.`
},

'2005A21': {
  answer: 'B',
  goal: R`For how many $n$ does $\tfrac{n(n+1)}2$ divide $6n$? Simplify the ratio.`,
  tools: [
    { name: 'Simplify', fact: R`\frac{6n}{n(n+1)/2}=\frac{12}{n+1}`, why: R`Cancel $n$.` },
    { name: 'Divisors', fact: R`n+1\mid12,\ n+1\ge2`, why: R`$n\ge1$.` }
  ],
  approach: R`$n+1\in\{2,3,4,6,12\}$: $5$ values.`,
  steps: [
    { title: 'Ratio',
      explain: R`$\tfrac{6n\cdot2}{n(n+1)}=\tfrac{12}{n+1}$.`,
      check: { q: R`What is $\tfrac{6n}{n(n+1)/2}$?`, opts: [R`\tfrac{12}{n+1}`, R`\tfrac{6}{n+1}`, R`\tfrac{12}{n}`, R`12(n+1)`], ans: 0, why: R`Multiply by $\tfrac{2}{n(n+1)}$.` } },
    { title: 'Count',
      explain: R`Divisors of $12$ at least $2$: $2,3,4,6,12$. So $n=1,2,3,5,11$.`,
      check: { q: R`How many divisors does $12$ have?`, opts: [R`6`, R`5`, R`4`, R`12`], ans: 0, why: R`$1,2,3,4,6,12$; exclude $1$.` } }
  ],
  bridge: R`Reduce to $n+1\mid12$.`,
  solution: [
    R`$\tfrac{6n}{n(n+1)/2}=\tfrac{12}{n+1}$.`,
    R`$n+1\in\{2,3,4,6,12\}$.`,
    R`$5$ values.`,
    R`The answer is $\textbf{(B)}\ 5$.`
  ],
  shortcut: R`Divisor count of $12$ minus one (for $n+1=1$).`,
  traps: [R`Including $n=0$.`, R`Forgetting the factor $2$.`],
  recognize: R`Divisibility of expressions: simplify the quotient to a fraction in one variable.`
},

'2005A22': {
  answer: 'D',
  goal: R`$S$: first $2005$ multiples of $4$ (up to $8020$). $T$: first $2005$ multiples of $6$ (up to $12030$). Common elements are multiples of $12$ that lie in both.`,
  tools: [
    { name: 'LCM', fact: R`\text{lcm}(4,6)=12`, why: R`Common multiples of $4$ and $6$.` },
    { name: 'Tighter bound', fact: R`\le\min(8020,12030)=8020`, why: R`Must be in $S$.` }
  ],
  approach: R`Count multiples of $12$ up to $8020$: $\lfloor\tfrac{8020}{12}\rfloor=668$.`,
  steps: [
    { title: 'Bounds',
      explain: R`$S$ ends at $4\cdot2005=8020$; $T$ ends at $12030$. Common elements are multiples of $12$ at most $8020$.`,
      check: { q: R`What is the largest element of $S$?`, opts: [R`8020`, R`12030`, R`2005`, R`8016`], ans: 0, why: R`$4\cdot2005$.` } },
    { title: 'Count',
      explain: R`$12\cdot668=8016\le8020<12\cdot669$. So $668$.`,
      check: { q: R`What is $\lfloor8020/12\rfloor$?`, opts: [R`668`, R`667`, R`669`, R`670`], ans: 0, why: R`$12\cdot668=8016$.` } }
  ],
  bridge: R`Multiples of $12$ up to the smaller maximum.`,
  solution: [
    R`Common elements: multiples of $12$ up to $8020$.`,
    R`$\lfloor8020/12\rfloor=668$.`,
    R`The answer is $\textbf{(D)}\ 668$.`
  ],
  shortcut: R`Every third multiple of $4$ is a multiple of $12$: $\lfloor2005/3\rfloor=668$.`,
  traps: [R`Using multiples of $24$.`, R`Using $12030$ as the bound.`],
  recognize: R`Intersections of arithmetic progressions: lcm, with the tighter upper bound.`
},

'2005A23': {
  answer: 'C',
  goal: R`Diameter $AB$, point $C$ with $BC=2AC$, $DC\perp AB$, and $DE$ a diameter. We want $\tfrac{[DCE]}{[ABD]}$. Both areas share the factor $DC$.`,
  tools: [
    { name: 'Median halves area', fact: R`[DCE]=2[DCO]`, why: R`$O$ is the midpoint of $DE$.` },
    { name: 'Distance from centre', fact: R`OC=r-\tfrac{2r}{3}=\tfrac r3`, why: R`$AC=\tfrac13\cdot2r$.` }
  ],
  approach: R`$[ABD]=\tfrac12\cdot2r\cdot DC=r\cdot DC$. $[DCE]=2\cdot\tfrac12\cdot OC\cdot DC=\tfrac r3DC$. Ratio $\tfrac13$.`,
  steps: [
    { title: 'Locate $C$',
      explain: R`$AC=\tfrac{2r}3$, so $OC=\tfrac r3$.`,
      check: { q: R`If $AC+BC=2r$ and $BC=2AC$, what is $AC$?`, opts: [R`\tfrac{2r}3`, R`\tfrac r3`, R`\tfrac r2`, R`r`], ans: 0, why: R`$3AC=2r$.` } },
    { title: 'Areas',
      explain: R`$[DCE]=2[DCO]=OC\cdot DC=\tfrac r3DC$, and $[ABD]=r\cdot DC$. Ratio $\tfrac13$.`,
      check: { q: R`Why is $[DCE]=2[DCO]$?`, opts: [R`O\text{ is the midpoint of }DE`, R`DC\perp AB`, R`C\text{ is the midpoint of }AB`, R`\text{They are congruent}`], ans: 0, why: R`$CO$ is a median of $\triangle DCE$.` } }
  ],
  bridge: R`Both areas are multiples of $DC$; compare $OC$ with $r$.`,
  solution: [
    R`$OC=\tfrac r3$.`,
    R`$[DCE]=OC\cdot DC$, $[ABD]=r\cdot DC$.`,
    R`Ratio $\tfrac13$.`,
    R`The answer is $\textbf{(C)}\ \tfrac13$.`
  ],
  shortcut: R`No need to compute $DC$ — it cancels.`,
  traps: [R`Computing $DC$ and making arithmetic errors.`, R`Taking $OC=\tfrac{2r}{3}$.`],
  recognize: R`Area ratios with a shared height: compare the bases.`
},

'2005A24': {
  answer: 'B',
  goal: R`$P(n)=\sqrt n$ means $n=p^2$ for a prime $p$. We need $n=p^2$ and $n+48=q^2$ with $p,q$ prime. So $q^2-p^2=48$.`,
  tools: [
    { name: 'Difference of squares', fact: R`(q-p)(q+p)=48`, why: R`Factor pairs of $48$.` },
    { name: 'Same parity', fact: R`\text{both factors even}`, why: R`Their sum $2q$ is even, and the product is even.` }
  ],
  approach: R`Even pairs: $(2,24),(4,12),(6,8)$ give $(p,q)=(11,13),(4,8),(1,7)$. Only $(11,13)$ are both prime.`,
  steps: [
    { title: 'Factor pairs',
      explain: R`$(q-p,q+p)\in\{(2,24),(4,12),(6,8)\}$.`,
      check: { q: R`For $(q-p,q+p)=(2,24)$, what is $(p,q)$?`, opts: [R`(11,13)`, R`(12,14)`, R`(10,12)`, R`(13,11)`], ans: 0, why: R`$q=13$, $p=11$.` } },
    { title: 'Check primes',
      explain: R`$(4,8)$ and $(1,7)$ fail. Only $n=121$.`,
      check: { q: R`Is $121+48$ a prime square?`, opts: [R`\text{Yes, }13^2`, R`\text{No}`, R`\text{Yes, }12^2`, R`\text{Yes, }11^2`], ans: 0, why: R`$169=13^2$.` } }
  ],
  bridge: R`Factor $q^2-p^2=48$ and test primality.`,
  solution: [
    R`$n=p^2$, $n+48=q^2$ with $p,q$ prime.`,
    R`$(q-p)(q+p)=48$: only $p=11$, $q=13$ works.`,
    R`One value: $n=121$.`,
    R`The answer is $\textbf{(B)}\ 1$.`
  ],
  shortcut: R`$P(n)=\sqrt n$ forces $n$ to be the square of a prime.`,
  traps: [R`Thinking $n$ could be $p^2\cdot(\text{smaller primes})$.`, R`Accepting $p=1$.`],
  recognize: R`"Largest prime factor equals $\sqrt n$": $n=p^2$.`
},

'2005A25': {
  answer: 'D',
  goal: R`$AB=25$, $AC=42$, $AD=19$, $AE=14$. We want $\tfrac{[ADE]}{[BCED]}$. Triangles sharing angle $A$ have areas proportional to the products of the sides around $A$.`,
  tools: [
    { name: 'Shared-angle area ratio', fact: R`\frac{[ADE]}{[ABC]}=\frac{AD\cdot AE}{AB\cdot AC}`, why: R`$[XYZ]=\tfrac12XY\cdot XZ\sin X$.` }
  ],
  approach: R`$\tfrac{19\cdot14}{25\cdot42}=\tfrac{19}{75}$. The quadrilateral is the rest: $\tfrac{56}{75}$. Ratio $\tfrac{19}{56}$.`,
  steps: [
    { title: 'Fraction of $ABC$',
      explain: R`$\tfrac{19}{25}\cdot\tfrac{14}{42}=\tfrac{19}{25}\cdot\tfrac13=\tfrac{19}{75}$.`,
      check: { q: R`What is $\tfrac{14}{42}$?`, opts: [R`\tfrac13`, R`\tfrac12`, R`\tfrac27`, R`\tfrac14`], ans: 0, why: R`Divide by $14$.` } },
    { title: 'Ratio',
      explain: R`$[BCED]=\tfrac{75-19}{75}[ABC]$, so the ratio is $\tfrac{19}{56}$.`,
      check: { q: R`What is $75-19$?`, opts: [R`56`, R`54`, R`66`, R`46`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Fraction of the big triangle, then compare to the remainder.`,
  solution: [
    R`$\tfrac{[ADE]}{[ABC]}=\tfrac{19\cdot14}{25\cdot42}=\tfrac{19}{75}$.`,
    R`$\tfrac{[ADE]}{[BCED]}=\tfrac{19}{75-19}=\tfrac{19}{56}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{19}{56}$.`
  ],
  shortcut: R`$BC=39$ is a distractor.`,
  traps: [R`Comparing to $[ABC]$ instead of the quadrilateral ($\tfrac{19}{75}$).`, R`Computing areas with Heron's formula unnecessarily.`],
  recognize: R`Sub-triangles sharing a vertex angle: ratio of the products of adjacent sides.`
}

};
