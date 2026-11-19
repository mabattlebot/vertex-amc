// Hand-written lessons: 2003 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2003A16': {
  answer: 'C',
  goal: R`We want the units digit of $13^{2003}$. Only the units digit $3$ matters, and powers of $3$ cycle.`,
  tools: [
    { name: 'Units-digit cycle', fact: R`3,9,7,1\text{ (period }4)`, why: R`$3^4=81$ ends in $1$.` }
  ],
  approach: R`$2003\equiv3\pmod4$, so the units digit is the third in the cycle: $7$.`,
  steps: [
    { title: 'Cycle',
      explain: R`$3^1=3$, $3^2=9$, $3^3=27$, $3^4=81$: $3,9,7,1$.`,
      check: { q: R`What is the units digit of $3^3$?`, opts: [R`7`, R`9`, R`1`, R`3`], ans: 0, why: R`$27$.` } },
    { title: 'Reduce',
      explain: R`$2003=4\cdot500+3$: units digit $7$.`,
      check: { q: R`What is $2003\bmod4$?`, opts: [R`3`, R`1`, R`2`, R`0`], ans: 0, why: R`$2000$ is divisible by $4$.` } }
  ],
  bridge: R`Reduce the exponent mod $4$.`,
  solution: [
    R`Units digit of $13^k$ follows $3,9,7,1$.`,
    R`$2003\equiv3\pmod4$: digit $7$.`,
    R`The answer is $\textbf{(C)}\ 7$.`
  ],
  shortcut: R`Every units-digit cycle divides $4$; reduce exponents mod $4$.`,
  traps: [R`Using $2003\bmod10$.`, R`Counting the cycle from $3^0$.`],
  recognize: R`Units digits of powers: cycle of length dividing $4$.`
},

'2003A17': {
  answer: 'B',
  goal: R`An equilateral triangle's perimeter equals the area of its circumcircle. We want the radius $R$. Relate the side to $R$.`,
  tools: [
    { name: 'Circumradius', fact: R`s=R\sqrt3`, why: R`For an equilateral triangle, $R=\tfrac{s}{\sqrt3}$.` }
  ],
  approach: R`$3s=\pi R^2$ with $s=R\sqrt3$: $3\sqrt3R=\pi R^2$, so $R=\tfrac{3\sqrt3}\pi$.`,
  steps: [
    { title: 'Equation',
      explain: R`$3R\sqrt3=\pi R^2$.`,
      check: { q: R`For an equilateral triangle with circumradius $R$, what is the side?`, opts: [R`R\sqrt3`, R`2R`, R`\tfrac{R}{\sqrt3}`, R`R\sqrt2`], ans: 0, why: R`$R=\tfrac{s}{\sqrt3}$.` } },
    { title: 'Solve',
      explain: R`$R=\tfrac{3\sqrt3}{\pi}$.`,
      check: { q: R`If $3\sqrt3R=\pi R^2$ and $R>0$, what is $R$?`, opts: [R`\tfrac{3\sqrt3}{\pi}`, R`\tfrac{\pi}{3\sqrt3}`, R`3\sqrt3\pi`, R`\sqrt3`], ans: 0, why: R`Divide by $\pi R$.` } }
  ],
  bridge: R`Write the perimeter in terms of $R$.`,
  solution: [
    R`$s=R\sqrt3$, perimeter $3\sqrt3R$.`,
    R`$3\sqrt3R=\pi R^2$.`,
    R`$R=\tfrac{3\sqrt3}{\pi}$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`The units mismatch is deliberate: just set the numbers equal.`,
  traps: [R`Using the inradius.`, R`Using $s=2R$.`],
  recognize: R`Equilateral triangles and circles: $s=R\sqrt3=2r\sqrt3$.`
},

'2003A18': {
  answer: 'B',
  goal: R`Sum of reciprocals of the roots of $\tfrac{2003}{2004}x+1+\tfrac1x=0$. Clear the fraction and use Vieta.`,
  tools: [
    { name: 'Clear denominators', fact: R`ax^2+x+1=0,\ a=\tfrac{2003}{2004}`, why: R`Multiply by $x\ne0$.` },
    { name: 'Vieta', fact: R`\frac1{r_1}+\frac1{r_2}=\frac{r_1+r_2}{r_1r_2}=\frac{-1/a}{1/a}`, why: R`Sum $-\tfrac ba$, product $\tfrac ca$.` }
  ],
  approach: R`$\tfrac{r_1+r_2}{r_1r_2}=\tfrac{-1/a}{1/a}=-1$.`,
  steps: [
    { title: 'Quadratic',
      explain: R`$ax^2+x+1=0$: sum $-\tfrac1a$, product $\tfrac1a$.`,
      check: { q: R`For $ax^2+bx+c$, what is $\tfrac1{r_1}+\tfrac1{r_2}$?`, opts: [R`-\tfrac bc`, R`-\tfrac ba`, R`\tfrac ca`, R`\tfrac bc`], ans: 0, why: R`$\tfrac{-b/a}{c/a}$.` } },
    { title: 'Value',
      explain: R`$-\tfrac11=-1$.`,
      check: { q: R`Here $b=1$, $c=1$. What is $-\tfrac bc$?`, opts: [R`-1`, R`1`, R`-\tfrac{2004}{2003}`, R`0`], ans: 0, why: R`$-\tfrac11$.` } }
  ],
  bridge: R`$\tfrac1{r_1}+\tfrac1{r_2}=-\tfrac bc$.`,
  solution: [
    R`$\tfrac{2003}{2004}x^2+x+1=0$.`,
    R`$\tfrac1{r_1}+\tfrac1{r_2}=-\tfrac{1}{1}=-1$.`,
    R`The answer is $\textbf{(B)}\ -1$.`
  ],
  shortcut: R`Substitute $y=\tfrac1x$: $y^2+y+a=0$, whose root sum is $-1$.`,
  traps: [R`Computing the sum of roots ($-\tfrac{2004}{2003}$).`, R`Sign errors.`],
  recognize: R`Sums of reciprocal roots: $-\tfrac bc$, or substitute $y=1/x$.`
},

'2003A19': {
  answer: 'C',
  goal: R`A semicircle of diameter $1$ sits on a chord of length $1$ at the top of a semicircle of diameter $2$. We want the lune's area. Lune = small semicircle − the big circle's segment cut by that chord.`,
  tools: [
    { name: 'Chord of length 1 in radius 1', fact: R`\text{central angle }60^\circ`, why: R`The chord and radii make an equilateral triangle.` },
    { name: 'Segment', fact: R`\text{sector}-\text{triangle}=\tfrac\pi6-\tfrac{\sqrt3}4`, why: R`$60^\circ$ sector of radius $1$ minus an equilateral triangle of side $1$.` }
  ],
  approach: R`Small semicircle: $\tfrac\pi8$. Segment: $\tfrac\pi6-\tfrac{\sqrt3}4$. Lune $=\tfrac\pi8-\tfrac\pi6+\tfrac{\sqrt3}4=\tfrac{\sqrt3}4-\tfrac\pi{24}$.`,
  steps: [
    { title: 'Segment',
      explain: R`$\tfrac{60}{360}\pi-\tfrac{\sqrt3}4=\tfrac\pi6-\tfrac{\sqrt3}{4}$.`,
      check: { q: R`What is the area of an equilateral triangle with side $1$?`, opts: [R`\tfrac{\sqrt3}4`, R`\tfrac{\sqrt3}2`, R`\tfrac12`, R`\tfrac{1}{4}`], ans: 0, why: R`$\tfrac{\sqrt3}{4}s^2$.` } },
    { title: 'Lune',
      explain: R`$\tfrac\pi8-\left(\tfrac\pi6-\tfrac{\sqrt3}4\right)=\tfrac{\sqrt3}4-\tfrac{\pi}{24}$.`,
      check: { q: R`What is $\tfrac\pi8-\tfrac\pi6$?`, opts: [R`-\tfrac\pi{24}`, R`\tfrac\pi{24}`, R`-\tfrac{\pi}{12}`, R`\tfrac{\pi}{48}`], ans: 0, why: R`$\tfrac{3\pi-4\pi}{24}$.` } }
  ],
  bridge: R`Small semicircle minus the big circle's segment.`,
  solution: [
    R`Small semicircle: $\tfrac\pi8$.`,
    R`Big circle's segment over the chord: $\tfrac\pi6-\tfrac{\sqrt3}4$.`,
    R`Lune $=\tfrac{\sqrt3}4-\tfrac{\pi}{24}$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`The lune is positive and small ($\approx0.30$).`,
  traps: [R`Subtracting the whole sector instead of the segment.`, R`Using a $90^\circ$ angle.`],
  recognize: R`Lunes: one circular region minus a segment of another.`
},

'2003A20': {
  answer: 'E',
  goal: R`A random three-digit number $n$ ($100$–$999$). We want $P(n\text{ is three digits in both base }9\text{ and base }11)$.`,
  tools: [
    { name: 'Three-digit range in base $b$', fact: R`b^2\le n\le b^3-1`, why: R`Smallest is $100_b$, largest $(b-1)(b-1)(b-1)_b$.` }
  ],
  approach: R`Base $9$: $81\le n\le728$. Base $11$: $121\le n\le1330$. Both with $100\le n\le999$: $121\le n\le728$: $608$ numbers. $\tfrac{608}{900}\approx0.68$.`,
  steps: [
    { title: 'Ranges',
      explain: R`Intersect $[100,999]$, $[81,728]$, $[121,1330]$: $[121,728]$.`,
      check: { q: R`What is the largest three-digit base-$9$ number in base $10$?`, opts: [R`728`, R`729`, R`999`, R`648`], ans: 0, why: R`$9^3-1$.` } },
    { title: 'Probability',
      explain: R`$728-121+1=608$; $\tfrac{608}{900}\approx0.68\approx0.7$.`,
      check: { q: R`What is $728-121+1$?`, opts: [R`608`, R`607`, R`609`, R`600`], ans: 0, why: R`Inclusive count.` } }
  ],
  bridge: R`Intersect the three ranges.`,
  solution: [
    R`Valid $n$: $121\le n\le728$.`,
    R`$608$ of $900$.`,
    R`$\approx0.68$, closest to $0.7$.`,
    R`The answer is $\textbf{(E)}\ 0.7$.`
  ],
  shortcut: R`$\tfrac{607}{900}\approx\tfrac23$.`,
  traps: [R`Using $9^3=729$ as included.`, R`Using $11^2=121$ as excluded.`],
  recognize: R`"$k$ digits in base $b$" means $b^{k-1}\le n<b^k$.`
},

'2003A21': {
  answer: 'D',
  goal: R`Choose $6$ cookies from $3$ kinds (plenty of each). Only the counts matter: solutions to $a+b+c=6$ in non-negative integers.`,
  tools: [
    { name: 'Stars and bars', fact: R`\binom{n+k-1}{k-1}`, why: R`$n$ identical items into $k$ types.` }
  ],
  approach: R`$\binom{6+2}{2}=\binom82=28$.`,
  steps: [
    { title: 'Model',
      explain: R`$6$ stars, $2$ bars: arrangements of $8$ symbols choosing bar positions.`,
      check: { q: R`How many bars separate $3$ kinds?`, opts: [R`2`, R`3`, R`6`, R`1`], ans: 0, why: R`One fewer than the number of kinds.` } },
    { title: 'Count',
      explain: R`$\binom82=28$.`,
      check: { q: R`What is $\binom82$?`, opts: [R`28`, R`56`, R`21`, R`36`], ans: 0, why: R`$\tfrac{8\cdot7}{2}$.` } }
  ],
  bridge: R`Stars and bars.`,
  solution: [
    R`Assortments = solutions of $a+b+c=6$, $a,b,c\ge0$.`,
    R`$\binom82=28$.`,
    R`The answer is $\textbf{(D)}\ 28$.`
  ],
  shortcut: R`"At least six of each" just means no upper limits matter.`,
  traps: [R`$3^6=729$ (ordered choices).`, R`$\binom{6}{2}$.`],
  recognize: R`Choosing a multiset of size $n$ from $k$ types: $\binom{n+k-1}{k-1}$.`
},

'2003A22': {
  answer: 'B',
  goal: R`Rectangle $AB=8$, $BC=9$; $BH=6$, $DE=4$; lines $EC$ and $AH$ meet at $G$, and $F$ is the foot from $G$ to line $AD$. We want $GF$. Use coordinates.`,
  tools: [
    { name: 'Coordinates', fact: R`A(0,0),B(8,0),C(8,9),D(0,9),H(8,6),E(0,5)`, why: R`Side $AD$ along the $y$-axis.` },
    { name: 'Distance to a line', fact: R`GF=|x_G|`, why: R`Line $AD$ is $x=0$.` }
  ],
  approach: R`$AH$: $y=\tfrac34x$. $EC$: $y=5+\tfrac12x$. Intersect: $x=20$, so $GF=20$.`,
  steps: [
    { title: 'Lines',
      explain: R`$AH$ through $(0,0),(8,6)$: slope $\tfrac34$. $EC$ through $(0,5),(8,9)$: slope $\tfrac12$.`,
      check: { q: R`What is the slope of $EC$?`, opts: [R`\tfrac12`, R`\tfrac34`, R`\tfrac45`, R`2`], ans: 0, why: R`$\tfrac{9-5}{8}$.` } },
    { title: 'Intersect',
      explain: R`$\tfrac34x=5+\tfrac12x\Rightarrow x=20$, $y=15$. $GF=20$.`,
      check: { q: R`If $\tfrac14x=5$, what is $x$?`, opts: [R`20`, R`5`, R`15`, R`4`], ans: 0, why: R`Multiply by $4$.` } }
  ],
  bridge: R`Coordinates, intersect, read off the distance.`,
  solution: [
    R`$AH$: $y=\tfrac34x$; $EC$: $y=5+\tfrac12x$.`,
    R`$G=(20,15)$.`,
    R`$GF=20$.`,
    R`The answer is $\textbf{(B)}\ 20$.`
  ],
  shortcut: R`Similar triangles: the gap between the lines grows by $\tfrac14$ per unit of $x$, starting at $5$.`,
  traps: [R`Confusing which side $E$ is measured from.`, R`Answering $GF=15$ (the $y$-coordinate).`],
  recognize: R`Lines extended outside a rectangle: coordinates make the intersection easy.`
},

'2003A23': {
  answer: 'C',
  goal: R`A triangle of toothpicks with $2003$ small triangles in its base row. We want the number of toothpicks. Every toothpick is a side of exactly one upward-pointing small triangle.`,
  tools: [
    { name: 'Rows', fact: R`2n-1=2003\Rightarrow n=1002`, why: R`Row $k$ has $2k-1$ small triangles.` },
    { name: 'Upward triangles', fact: R`1+2+\cdots+n=\tfrac{n(n+1)}{2}`, why: R`Row $k$ has $k$ upward triangles.` }
  ],
  approach: R`Toothpicks $=3\times(\text{upward triangles})=3\cdot\tfrac{1002\cdot1003}{2}$.`,
  steps: [
    { title: 'Upward triangles',
      explain: R`$\tfrac{1002\cdot1003}2=502503$.`,
      check: { q: R`With $5$ small triangles in the base, how many upward ones are in that row?`, opts: [R`3`, R`5`, R`2`, R`4`], ans: 0, why: R`$\tfrac{5+1}{2}$.` } },
    { title: 'Toothpicks',
      explain: R`$3\cdot502503=1507509$.`,
      check: { q: R`What is $3\cdot502503$?`, opts: [R`1507509`, R`1005006`, R`1507506`, R`1500509`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Each toothpick belongs to exactly one upward triangle.`,
  solution: [
    R`$1002$ rows; upward triangles $\tfrac{1002\cdot1003}{2}$.`,
    R`Toothpicks $=3\cdot502503=1507509$.`,
    R`The answer is $\textbf{(C)}\ 1507509$.`
  ],
  shortcut: R`Check with the example: $3$ rows, $6$ upward, $18$ toothpicks.`,
  traps: [R`Counting all small triangles × $3$.`, R`Using $2003$ rows.`],
  recognize: R`Triangular grids: edges $=3\times$(upward triangles).`
},

'2003A24': {
  answer: 'E',
  goal: R`Red $1$–$5$ and blue $3$–$6$ alternate (R B R … R), each red dividing its blue neighbours. We want the sum of the middle three cards. Start with the most restricted cards.`,
  tools: [
    { name: 'Restricted reds', fact: R`R5\text{ only beside }B5;\ R4\text{ only beside }B4`, why: R`Their only blue multiples.` },
    { name: 'Ends', fact: R`\text{a card with one possible neighbour sits at an end}`, why: R`Middle reds have two blue neighbours.` }
  ],
  approach: R`$R5$ and $R4$ are the two ends: $R5,B5,\ldots,B4,R4$. $B5$'s other neighbour divides $5$: $R1$. $R4$'s neighbour $B4$ needs another red dividing $4$: $R2$. Then $B6$ next to $R2$, and $R3$ between $B3$ and $B6$.`,
  steps: [
    { title: 'Ends',
      explain: R`Stack: $5,5,1,\_,\_,\_,2,4,4$.`,
      check: { q: R`Which red cards can neighbour blue $5$?`, opts: [R`1,5`, R`5`, R`1,3,5`, R`1`], ans: 0, why: R`Divisors of $5$.` } },
    { title: 'Middle',
      explain: R`$R2$'s other neighbour is $B6$; the remaining $B3$ sits next to $R1$; $R3$ between $B3$ and $B6$. Stack $5,5,1,3,3,6,2,4,4$. Middle three: $3+3+6=12$.`,
      check: { q: R`Which blue card can be next to red $2$ besides $4$?`, opts: [R`6`, R`3`, R`5`, R`\text{none}`], ans: 0, why: R`Even blues.` } }
  ],
  bridge: R`Place the most constrained cards first.`,
  solution: [
    R`Ends: $R5$–$B5$ and $B4$–$R4$.`,
    R`Fill: $5,5,1,3,3,6,2,4,4$.`,
    R`Middle three sum to $12$.`,
    R`The answer is $\textbf{(E)}\ 12$.`
  ],
  shortcut: R`Cards with only one legal neighbour must go at the ends.`,
  traps: [R`Placing $R1$ at an end.`, R`Summing the wrong positions.`],
  recognize: R`Arrangement puzzles: start with the most restricted pieces.`
},

'2003A25': {
  answer: 'B',
  goal: R`$n$ is $5$-digit, $n=100q+r$. Count $n$ with $11\mid q+r$. Note $100\equiv1\pmod{11}$.`,
  tools: [
    { name: 'Mod 11', fact: R`n=100q+r\equiv q+r\pmod{11}`, why: R`$100=99+1$.` },
    { name: 'Counting multiples', fact: R`\lfloor\tfrac{99999}{11}\rfloor-\lfloor\tfrac{9999}{11}\rfloor`, why: R`Five-digit multiples of $11$.` }
  ],
  approach: R`$11\mid q+r\iff11\mid n$. Count: $9090-909=8181$.`,
  steps: [
    { title: 'Reduce',
      explain: R`$n-(q+r)=99q$ is a multiple of $11$.`,
      check: { q: R`What is $100\bmod11$?`, opts: [R`1`, R`0`, R`10`, R`9`], ans: 0, why: R`$99=9\cdot11$.` } },
    { title: 'Count',
      explain: R`$\lfloor99999/11\rfloor=9090$, $\lfloor9999/11\rfloor=909$; difference $8181$.`,
      check: { q: R`What is $9090-909$?`, opts: [R`8181`, R`8180`, R`8191`, R`8281`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Turn the condition into $11\mid n$.`,
  solution: [
    R`$n\equiv q+r\pmod{11}$.`,
    R`Count five-digit multiples of $11$: $8181$.`,
    R`The answer is $\textbf{(B)}\ 8181$.`
  ],
  shortcut: R`Quotient/remainder by $100$ mod $11$: like summing two-digit blocks.`,
  traps: [R`Off-by-one ($8180$ or $8182$).`, R`Answering $9000/11$ rounded.`],
  recognize: R`Splitting a number into blocks: blocks of $2$ digits sum to $n$ mod $99$ (hence mod $11$).`
}

};
