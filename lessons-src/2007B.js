// Hand-written lessons: 2007 AMC 10B, Difficulty 4 and 5.
// #19 relies on a figure; the wheel numbers (1, 2, 3, 6, 7, 9) are a reconstruction consistent with the answer key.
const R = String.raw;
module.exports = {

'2007B16': {
  answer: 'C',
  goal: R`$10\%$ juniors (all with the same score $J$), $90\%$ seniors averaging $83$, overall average $84$. We want $J$. The overall average is a weighted average.`,
  tools: [
    { name: 'Weighted average', fact: R`0.1J+0.9\cdot83=84`, why: R`Each group's average is weighted by its share.` }
  ],
  approach: R`Solve $0.1J=84-74.7=9.3$.`,
  steps: [
    { title: 'Equation',
      explain: R`$0.9\cdot83=74.7$, so $0.1J=9.3$.`,
      check: { q: R`What is $0.9\cdot83$?`, opts: [R`74.7`, R`75.6`, R`73.7`, R`74.9`], ans: 0, why: R`$83-8.3$.` } },
    { title: 'Solve',
      explain: R`$J=93$.`,
      check: { q: R`If $0.1J=9.3$, what is $J$?`, opts: [R`93`, R`9.3`, R`930`, R`83`], ans: 0, why: R`Multiply by $10$.` } }
  ],
  bridge: R`Weighted average, then solve.`,
  solution: [
    R`$0.1J+0.9(83)=84$.`,
    R`$0.1J=9.3$, $J=93$.`,
    R`The answer is $\textbf{(C)}\ 93$.`
  ],
  shortcut: R`Seniors are $1$ point below average with weight $9$; juniors must be $9$ points above: $84+9=93$.`,
  traps: [R`Using an unweighted average ($85$).`, R`Arithmetic slips with $0.9\cdot83$.`],
  recognize: R`Mixtures of groups: balance the deviations from the overall mean.`
},

'2007B17': {
  answer: 'D',
  goal: R`$P$ is inside equilateral $\triangle ABC$ with perpendicular distances $1,2,3$ to the sides. We want $AB$. The three distances add up to the altitude.`,
  tools: [
    { name: "Viviani's theorem", fact: R`PQ+PR+PS=\text{altitude}`, why: R`Split $\triangle ABC$ into three triangles from $P$: $\tfrac12s(d_1+d_2+d_3)=\tfrac12sh$.` },
    { name: 'Equilateral altitude', fact: R`h=\tfrac{\sqrt3}{2}s`, why: R`30-60-90 triangle.` }
  ],
  approach: R`$h=1+2+3=6$, so $\tfrac{\sqrt3}2s=6$ and $s=\tfrac{12}{\sqrt3}=4\sqrt3$.`,
  steps: [
    { title: 'Altitude',
      explain: R`Areas: $\tfrac12s(1+2+3)=\tfrac12sh$, so $h=6$.`,
      check: { q: R`What is the altitude?`, opts: [R`6`, R`3`, R`2`, R`\sqrt{14}`], ans: 0, why: R`$1+2+3$.` } },
    { title: 'Side',
      explain: R`$s=\tfrac{2h}{\sqrt3}=\tfrac{12}{\sqrt3}=4\sqrt3$.`,
      check: { q: R`What is $\tfrac{12}{\sqrt3}$?`, opts: [R`4\sqrt3`, R`6\sqrt3`, R`2\sqrt3`, R`12\sqrt3`], ans: 0, why: R`$\tfrac{12\sqrt3}{3}$.` } }
  ],
  bridge: R`Sum the distances to get the altitude.`,
  solution: [
    R`By area, $PQ+PR+PS=h=6$.`,
    R`$s=\tfrac{2\cdot6}{\sqrt3}=4\sqrt3$.`,
    R`The answer is $\textbf{(D)}\ 4\sqrt3$.`
  ],
  shortcut: R`Viviani: for any interior point, the distance sum is constant.`,
  traps: [R`Taking $s=6$ (the altitude).`, R`Trying to locate $P$ exactly.`],
  recognize: R`Distances from an interior point to the sides of an equilateral triangle: they sum to the altitude.`
},

'2007B18': {
  answer: 'B',
  goal: R`A unit circle is surrounded by $4$ circles of radius $r$, each tangent to it and to its two neighbours. We want $r$. The outer centres form a square.`,
  tools: [
    { name: 'Square of centres', fact: R`\text{side }2r,\ \text{half-diagonal }r\sqrt2`, why: R`Neighbouring outer circles touch.` },
    { name: 'Tangency to the middle', fact: R`r\sqrt2=1+r`, why: R`The middle-to-outer centre distance is $1+r$.` }
  ],
  approach: R`$r(\sqrt2-1)=1$, so $r=\tfrac{1}{\sqrt2-1}=1+\sqrt2$.`,
  steps: [
    { title: 'Equation',
      explain: R`Distance from the middle to an outer centre: $r\sqrt2$ (half-diagonal) $=1+r$.`,
      check: { q: R`A square with side $2r$ has half-diagonal?`, opts: [R`r\sqrt2`, R`2r\sqrt2`, R`r`, R`\tfrac{r}{\sqrt2}`], ans: 0, why: R`$\tfrac{2r\sqrt2}{2}$.` } },
    { title: 'Solve',
      explain: R`$r=\tfrac{1}{\sqrt2-1}=\sqrt2+1$.`,
      check: { q: R`What is $\tfrac{1}{\sqrt2-1}$?`, opts: [R`\sqrt2+1`, R`\sqrt2-1`, R`\tfrac{\sqrt2}{2}`, R`2+\sqrt2`], ans: 0, why: R`$(\sqrt2-1)(\sqrt2+1)=1$.` } }
  ],
  bridge: R`Half-diagonal equals $1+r$.`,
  solution: [
    R`Outer centres form a square of side $2r$.`,
    R`$r\sqrt2=1+r$.`,
    R`$r=1+\sqrt2$.`,
    R`The answer is $\textbf{(B)}\ 1+\sqrt2$.`
  ],
  shortcut: R`Right isosceles triangle on two outer centres and the middle: legs $1+r$, hypotenuse $2r$.`,
  traps: [R`Using $r=1+r\sqrt2$.`, R`Answering $2+\sqrt2$.`],
  recognize: R`Ring of equal circles around a centre circle: regular polygon of centres.`
},

'2007B19': {
  answer: 'C',
  goal: R`A wheel with six equal sectors ($1,2,3,6,7,9$) is spun twice. The first number mod $4$ picks a column, the second mod $5$ a row, on a checkerboard. We want $P(\text{shaded})$. On a checkerboard, shading depends only on parities.`,
  tools: [
    { name: 'Checkerboard parity', fact: R`\text{shaded}\iff\text{row}+\text{column has a fixed parity}`, why: R`Colours alternate in both directions.` },
    { name: 'A fair parity forces 1/2', fact: R`P(\text{row odd})=\tfrac12\Rightarrow P(\text{shaded})=\tfrac12`, why: R`Whatever the column, exactly one row parity shades it.` }
  ],
  approach: R`Rows: $1,2,3,6,7,9\bmod5=1,2,3,1,2,4$ — odd ($1,3,1$) exactly half the time. Independent of the column, the shaded parity occurs with probability $\tfrac12$.`,
  steps: [
    { title: 'Row parity',
      explain: R`Row remainders $1,2,3,1,2,4$: three odd, three even.`,
      check: { q: R`What is $9\bmod5$?`, opts: [R`4`, R`1`, R`9`, R`0`], ans: 0, why: R`$9=5+4$.` } },
    { title: 'Conclude',
      explain: R`For any fixed column, the shaded squares in it are exactly the rows of one parity, which has probability $\tfrac12$. So $P=\tfrac12$.`,
      check: { q: R`If the row parity is a fair coin independent of the column, what is $P(\text{shaded})$?`, opts: [R`\tfrac12`, R`\tfrac13`, R`\tfrac49`, R`\tfrac23`], ans: 0, why: R`Each column contributes half.` } }
  ],
  bridge: R`Show one coordinate's parity is $50/50$.`,
  solution: [
    R`Row remainders: $1,2,3,1,2,4$, odd half the time.`,
    R`On a checkerboard, each column's shaded rows form one parity class.`,
    R`$P(\text{shaded})=\tfrac12$.`,
    R`The answer is $\textbf{(C)}\ \tfrac12$.`
  ],
  shortcut: R`You never need the column distribution once the row parity is fair.`,
  traps: [R`Assuming remainders are uniform.`, R`Counting shaded squares and dividing by the board size.`],
  recognize: R`Random squares on a checkerboard: look for a coordinate whose parity is exactly $50/50$.`
},

'2007B20': {
  answer: 'C',
  goal: R`Choose $3$ of the $25$ blocks in a $5\times5$ square with no two in the same row or column. Pick the rows, the columns, then match them.`,
  tools: [
    { name: 'Choose rows and columns', fact: R`\binom53\cdot\binom53`, why: R`Three distinct rows and three distinct columns.` },
    { name: 'Matching', fact: R`3!`, why: R`Pair each chosen row with a different chosen column.` }
  ],
  approach: R`$10\cdot10\cdot6=600$.`,
  steps: [
    { title: 'Rows and columns',
      explain: R`$\binom53=10$ choices each.`,
      check: { q: R`What is $\binom53$?`, opts: [R`10`, R`20`, R`60`, R`5`], ans: 0, why: R`$\tfrac{5\cdot4}{2}$.` } },
    { title: 'Match',
      explain: R`$3!=6$ ways to pair rows with columns. Total $600$.`,
      check: { q: R`What is $10\cdot10\cdot6$?`, opts: [R`600`, R`100`, R`3600`, R`125`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Rows × columns × matchings.`,
  solution: [
    R`Rows: $10$. Columns: $10$. Matchings: $6$.`,
    R`$600$ combinations.`,
    R`The answer is $\textbf{(C)}\ 600$.`
  ],
  shortcut: R`Ordered picks $25\cdot16\cdot9=3600$, divided by $3!$: $600$.`,
  traps: [R`Not dividing ordered picks by $3!$ ($3600$).`, R`Forgetting the matching factor ($100$).`],
  recognize: R`Non-attacking rooks: choose rows, choose columns, permute.`
},

'2007B21': {
  answer: 'B',
  goal: R`A square $XYZW$ sits with $XY$ on the hypotenuse $AC$ of a $3$-$4$-$5$ triangle and its top corners on the legs. We want its side $s$. Use the altitude to the hypotenuse and similar triangles.`,
  tools: [
    { name: 'Altitude to hypotenuse', fact: R`h=\tfrac{3\cdot4}{5}=\tfrac{12}5`, why: R`Twice the area over the hypotenuse.` },
    { name: 'Similar top triangle', fact: R`\tfrac{s}{5}=\tfrac{h-s}{h}`, why: R`$WZ\parallel AC$, so the triangle above the square is similar to $ABC$.` }
  ],
  approach: R`The triangle $WBZ$ above the square has base $s$ and height $h-s$, similar to $ABC$ (base $5$, height $h$). So $s=\tfrac{5h}{5+h}$.`,
  steps: [
    { title: 'Set up',
      explain: R`$\tfrac s5=\tfrac{h-s}{h}$ gives $sh=5h-5s$, so $s=\tfrac{5h}{5+h}$.`,
      check: { q: R`What is $h$ for a $3$-$4$-$5$ triangle?`, opts: [R`\tfrac{12}5`, R`\tfrac{5}{2}`, R`3`, R`\tfrac{15}4`], ans: 0, why: R`$\tfrac{12}{5}$.` } },
    { title: 'Compute',
      explain: R`$s=\tfrac{5\cdot12/5}{5+12/5}=\tfrac{12}{37/5}=\tfrac{60}{37}$.`,
      check: { q: R`What is $5+\tfrac{12}5$?`, opts: [R`\tfrac{37}5`, R`\tfrac{17}5`, R`\tfrac{27}5`, R`7`], ans: 0, why: R`$\tfrac{25+12}{5}$.` } }
  ],
  bridge: R`Similar triangles over the square: $s=\tfrac{bh}{b+h}$.`,
  solution: [
    R`$h=\tfrac{12}5$ to the hypotenuse.`,
    R`$s=\tfrac{5h}{5+h}=\tfrac{60}{37}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac{60}{37}$.`
  ],
  shortcut: R`Square on base $b$ with height $h$: $\tfrac1s=\tfrac1b+\tfrac1h$.`,
  traps: [R`Using the square in the right-angle corner ($\tfrac{12}7$).`, R`Using height $3$ or $4$.`],
  recognize: R`Square inscribed with a side on a triangle's base: $s=\tfrac{bh}{b+h}$.`
},

'2007B22': {
  answer: 'B',
  goal: R`Two tetrahedral dice; the player wins $1$ if their number appears once, $2$ if twice, loses $1$ if not at all. We want the expected return.`,
  tools: [
    { name: 'Binomial probabilities', fact: R`P(2)=\tfrac1{16},\ P(1)=\tfrac6{16},\ P(0)=\tfrac9{16}`, why: R`Each die shows the number with probability $\tfrac14$.` },
    { name: 'Expected value', fact: R`E=\sum(\text{payoff})(\text{probability})`, why: R`Weighted average of outcomes.` }
  ],
  approach: R`$E=2\cdot\tfrac1{16}+1\cdot\tfrac6{16}-1\cdot\tfrac9{16}$.`,
  steps: [
    { title: 'Probabilities',
      explain: R`Both: $\tfrac1{16}$. Exactly one: $2\cdot\tfrac14\cdot\tfrac34=\tfrac6{16}$. Neither: $\tfrac9{16}$.`,
      check: { q: R`What is $P(\text{exactly one die shows it})$?`, opts: [R`\tfrac6{16}`, R`\tfrac3{16}`, R`\tfrac14`, R`\tfrac12`], ans: 0, why: R`$2\cdot\tfrac14\cdot\tfrac34$.` } },
    { title: 'Expectation',
      explain: R`$\tfrac{2+6-9}{16}=-\tfrac1{16}$.`,
      check: { q: R`What is $2+6-9$?`, opts: [R`-1`, R`1`, R`-2`, R`0`], ans: 0, why: R`$8-9$.` } }
  ],
  bridge: R`Weight each payoff by its probability.`,
  solution: [
    R`$P(2)=\tfrac1{16}$, $P(1)=\tfrac6{16}$, $P(0)=\tfrac9{16}$.`,
    R`$E=\tfrac{2+6-9}{16}=-\tfrac1{16}$.`,
    R`The answer is $\textbf{(B)}\ -\tfrac1{16}$.`
  ],
  shortcut: R`Over $16$ equally likely outcomes, total winnings $2+6-9=-1$.`,
  traps: [R`Using $\tfrac3{16}$ for exactly one.`, R`Ignoring the loss.`],
  recognize: R`Simple games: list outcomes, multiply payoffs by probabilities.`
},

'2007B23': {
  answer: 'E',
  goal: R`A plane parallel to the base, $2$ above it, cuts off a top pyramid with half the original surface area. We want the original height $h$. The top pyramid is similar to the original.`,
  tools: [
    { name: 'Area scaling', fact: R`\text{area ratio}=k^2`, why: R`Similar solids with length ratio $k$.` },
    { name: 'Heights', fact: R`h-2=kh`, why: R`The top pyramid's height is $k$ times the original's.` }
  ],
  approach: R`$k^2=\tfrac12$, so $k=\tfrac1{\sqrt2}$. Then $h-2=\tfrac h{\sqrt2}$ and $h=\tfrac{2}{1-1/\sqrt2}=\tfrac{2\sqrt2}{\sqrt2-1}$.`,
  steps: [
    { title: 'Scale factor',
      explain: R`Half the surface area: $k=\tfrac1{\sqrt2}$.`,
      check: { q: R`If similar solids have area ratio $\tfrac12$, what is the length ratio?`, opts: [R`\tfrac1{\sqrt2}`, R`\tfrac12`, R`\tfrac14`, R`\tfrac1{\sqrt[3]2}`], ans: 0, why: R`Square root of the area ratio.` } },
    { title: 'Height',
      explain: R`$h\left(1-\tfrac{1}{\sqrt2}\right)=2$: $h=\tfrac{2\sqrt2}{\sqrt2-1}=2\sqrt2(\sqrt2+1)=4+2\sqrt2$.`,
      check: { q: R`What is $2\sqrt2(\sqrt2+1)$?`, opts: [R`4+2\sqrt2`, R`2+2\sqrt2`, R`4+\sqrt2`, R`2\sqrt2+1`], ans: 0, why: R`$2\cdot2+2\sqrt2$.` } }
  ],
  bridge: R`Scale factor from area, then heights.`,
  solution: [
    R`Top pyramid similar with $k=\tfrac1{\sqrt2}$.`,
    R`$h-2=\tfrac{h}{\sqrt2}$.`,
    R`$h=4+2\sqrt2$.`,
    R`The answer is $\textbf{(E)}\ 4+2\sqrt2$.`
  ],
  shortcut: R`Check: $\tfrac{h-2}{h}=\tfrac{2+2\sqrt2}{4+2\sqrt2}=\tfrac{1}{\sqrt2}$. ✓`,
  traps: [R`Using $k=\tfrac12$.`, R`Setting $h=2/k$ (confusing which height is $2$).`],
  recognize: R`Cutting parallel to the base: similar solids; areas scale by $k^2$, volumes by $k^3$.`
},

'2007B24': {
  answer: 'C',
  goal: R`We want the smallest number using only $4$s and $9$s (at least one each) divisible by $4$ and $9$, and its last four digits.`,
  tools: [
    { name: 'Divisible by 4', fact: R`\text{last two digits}\in\{44\}`, why: R`Of $44,49,94,99$ only $44$ is a multiple of $4$.` },
    { name: 'Divisible by 9', fact: R`4a+9b\equiv0\pmod9\Rightarrow9\mid a`, why: R`$a$ = number of $4$s.` }
  ],
  approach: R`Need nine $4$s (fewest), at least one $9$, ending in $44$. Smallest: $10$ digits with the $9$ as far right as allowed: $4444444944$.`,
  steps: [
    { title: 'Counts',
      explain: R`Nine $4$s and one $9$ is the shortest possibility ($10$ digits).`,
      check: { q: R`How many $4$s are needed for divisibility by $9$?`, opts: [R`\text{a multiple of }9`, R`\text{a multiple of }4`, R`\text{any}`, R`\text{exactly }4`], ans: 0, why: R`$4a\equiv0\pmod9$.` } },
    { title: 'Arrange',
      explain: R`The last two digits are $44$, so the $9$ goes in the third-to-last place: $4444444944$. Last four digits $4944$.`,
      check: { q: R`Where should the single $9$ go for the smallest number?`, opts: [R`\text{as far right as possible}`, R`\text{first}`, R`\text{in the middle}`, R`\text{last}`], ans: 0, why: R`Big digits belong in low places.` } }
  ],
  bridge: R`Fix the ending, count the $4$s, push the $9$ right.`,
  solution: [
    R`Ends in $44$; number of $4$s is a multiple of $9$.`,
    R`Smallest: $4444444944$.`,
    R`Last four digits: $4944$.`,
    R`The answer is $\textbf{(C)}\ 4944$.`
  ],
  shortcut: R`Using nine $9$s instead would be longer; nine $4$s plus one $9$ is minimal.`,
  traps: [R`Ending in $9$.`, R`Putting the $9$ at the front.`],
  recognize: R`Restricted-digit multiples: handle each divisibility rule separately, then minimise.`
},

'2007B25': {
  answer: 'A',
  goal: R`Count coprime $(a,b)$ with $\tfrac ab+\tfrac{14b}{9a}=\tfrac{9a^2+14b^2}{9ab}$ an integer. Use divisibility by $a$, by $b$ and by $9$.`,
  tools: [
    { name: 'Divisibility by $a$', fact: R`a\mid14b^2\Rightarrow a\mid14`, why: R`$\gcd(a,b)=1$.` },
    { name: 'Divisibility by $b$', fact: R`b\mid9a^2\Rightarrow b\mid9`, why: R`$\gcd(a,b)=1$.` },
    { name: 'Divisibility by 9', fact: R`9\mid14b^2\Rightarrow3\mid b`, why: R`$9a^2$ is already divisible by $9$.` }
  ],
  approach: R`$a\in\{1,2,7,14\}$, $b\in\{3,9\}$. Test all $8$ pairs in $9ab\mid9a^2+14b^2$.`,
  steps: [
    { title: 'Candidates',
      explain: R`$a\mid14$, $b\mid9$ and $3\mid b$: $b\in\{3,9\}$.`,
      check: { q: R`Why must $3\mid b$?`, opts: [R`9\mid14b^2`, R`b\mid9`, R`a\mid14`, R`\gcd=1`], ans: 0, why: R`The numerator must be divisible by $9$.` } },
    { title: 'Test',
      explain: R`$b=3$: need $3a\mid a^2+14$: $a=1,2,7,14$ all work ($15,18,63,210$). $b=9$: need $9a\mid a^2+126$: none work. Total $4$.`,
      check: { q: R`For $a=14$, $b=3$: is $\tfrac{14^2+14}{42}$ an integer?`, opts: [R`\text{Yes, }5`, R`\text{No}`, R`\text{Yes, }7`, R`\text{Yes, }3`], ans: 0, why: R`$210/42=5$.` } }
  ],
  bridge: R`Bound $a$ and $b$ by divisibility, then test.`,
  solution: [
    R`$a\mid14$, $b\mid9$, $3\mid b$.`,
    R`$b=3$: all four $a$ work; $b=9$: none.`,
    R`$4$ pairs.`,
    R`The answer is $\textbf{(A)}\ 4$.`
  ],
  shortcut: R`With $b=9$, $a^2+126\equiv a^2\pmod9$ needs $3\mid a$, impossible for $a\mid14$.`,
  traps: [R`Forgetting the $9$ in the denominator.`, R`Allowing non-coprime pairs.`],
  recognize: R`Fractions that must be integers with coprime variables: each variable divides the "other" term.`
}

};
