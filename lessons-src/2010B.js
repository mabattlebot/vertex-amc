// Hand-written lessons: 2010 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2010B16': {
  answer: 'B',
  goal: R`A unit square and a circle of radius $\tfrac{\sqrt3}{3}$ share a centre. The circle pokes out past each side in four equal circular segments. We want their total area.`,
  tools: [
    { name: 'Segment angle', fact: R`\cos\theta=\tfrac{d}{r}=\tfrac{1/2}{1/\sqrt3}=\tfrac{\sqrt3}2\Rightarrow\theta=30^\circ`, why: R`$d$ is the distance from the centre to a side; the segment's central angle is $2\theta=60^\circ$.` },
    { name: 'Segment area', fact: R`\tfrac{60}{360}\pi r^2-\tfrac12r^2\sin60^\circ`, why: R`Sector minus triangle.` }
  ],
  approach: R`Each side is $\tfrac12$ from the centre, less than $r\approx0.577$, while the corners are $0.707$ away, outside the circle. So the circle sticks out past each side in a segment, with central angle $60^\circ$.`,
  steps: [
    { title: 'Central angle',
      explain: R`$\cos\theta=\tfrac{1/2}{\sqrt3/3}=\tfrac{\sqrt3}2$, so $\theta=30^\circ$ and the segment spans $60^\circ$.`,
      check: { q: R`If $\cos\theta=\tfrac{\sqrt3}2$, what is $\theta$?`, opts: [R`30^\circ`, R`60^\circ`, R`45^\circ`, R`90^\circ`], ans: 0, why: R`Standard value.` } },
    { title: 'One segment',
      explain: R`$r^2=\tfrac13$: sector $\tfrac16\pi\cdot\tfrac13=\tfrac\pi{18}$; triangle $\tfrac12\cdot\tfrac13\cdot\tfrac{\sqrt3}2=\tfrac{\sqrt3}{12}$. Segment $\tfrac\pi{18}-\tfrac{\sqrt3}{12}$.`,
      check: { q: R`What is $\tfrac16\pi\cdot\tfrac13$?`, opts: [R`\tfrac{\pi}{18}`, R`\tfrac\pi9`, R`\tfrac\pi6`, R`\tfrac{\pi}{3}`], ans: 0, why: R`Multiply.` } },
    { title: 'Four segments',
      explain: R`$4\left(\tfrac\pi{18}-\tfrac{\sqrt3}{12}\right)=\tfrac{2\pi}9-\tfrac{\sqrt3}3$.`,
      check: { q: R`What is $4\cdot\tfrac{\sqrt3}{12}$?`, opts: [R`\tfrac{\sqrt3}3`, R`\tfrac{\sqrt3}{4}`, R`\sqrt3`, R`\tfrac{\sqrt3}{6}`], ans: 0, why: R`Simplify.` } }
  ],
  bridge: R`Find the $60^\circ$ segments and add four of them.`,
  solution: [
    R`Each side is $\tfrac12$ from the centre, giving a $60^\circ$ segment of radius $\tfrac{\sqrt3}{3}$.`,
    R`Each segment has area $\tfrac\pi{18}-\tfrac{\sqrt3}{12}$.`,
    R`Total $\tfrac{2\pi}9-\tfrac{\sqrt3}3$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Circle area minus the part inside the square also works, but segments are direct.`,
  traps: [R`Using a $90^\circ$ segment.`, R`Assuming the corners are inside the circle.`],
  recognize: R`A circle and a polygon with the same centre: the circle sticks out in segments; find each segment's central angle from $\cos\theta=\tfrac dr$.`
},

'2010B17': {
  answer: 'B',
  goal: R`Each school sends $3$ students; Andrea is the median and the best on her team, whose others placed $37$th and $64$th. We want the number of schools $n$. Bounds from her rank pin $n$ down.`,
  tools: [
    { name: 'Median rank', fact: R`\text{median of }3n\text{ (odd) scores is rank }\tfrac{3n+1}2`, why: R`Middle position.` },
    { name: 'Inequalities from teammates', fact: R`\tfrac{3n+1}2<37,\quad3n\ge64`, why: R`Andrea beat Beth; Carla's rank exists.` }
  ],
  approach: R`$3n$ must be odd (a single median), so $n$ is odd. Andrea's rank $\tfrac{3n+1}2$ is better than $37$, and there are at least $64$ students.`,
  steps: [
    { title: 'Bounds',
      explain: R`$\tfrac{3n+1}2<37$ gives $n<24.3$. $3n\ge64$ gives $n\ge22$.`,
      check: { q: R`Solve $3n+1<74$.`, opts: [R`n<24.33`, R`n<24`, R`n<73`, R`n<25`], ans: 0, why: R`$3n<73$.` } },
    { title: 'Parity',
      explain: R`$n\in\{22,23,24\}$ and $n$ odd: $n=23$. Andrea is $35$th of $69$.`,
      check: { q: R`What is the median rank among $69$ students?`, opts: [R`35`, R`34`, R`36`, R`23`], ans: 0, why: R`$\tfrac{70}2$.` } }
  ],
  bridge: R`Use the median position, the teammates' ranks, and parity.`,
  solution: [
    R`Andrea's rank $\tfrac{3n+1}2$ is less than $37$, so $n\le24$.`,
    R`Carla's $64$th place needs $3n\ge64$, so $n\ge22$.`,
    R`$n$ must be odd: $n=23$.`,
    R`The answer is $\textbf{(B)}\ 23$.`
  ],
  shortcut: R`Parity of the total decides between the bounds.`,
  traps: [R`Forgetting the median requires an odd number of students.`, R`Using $\le$ instead of $<$.`],
  recognize: R`Ranking problems: translate each statement into an inequality on the total; parity often finishes.`
},

'2010B18': {
  answer: 'E',
  goal: R`$a,b,c$ are random from $1$–$2010$; we want $P(3\mid abc+ab+a)$. Factor out $a$ and work mod $3$ (residues are uniform since $3\mid2010$).`,
  tools: [
    { name: 'Factoring', fact: R`abc+ab+a=a(bc+b+1)=a(b(c+1)+1)`, why: R`Pull out $a$, then $b$.` },
    { name: 'Uniform residues', fact: R`2010\text{ is a multiple of }3`, why: R`Each residue mod $3$ has probability $\tfrac13$.` }
  ],
  approach: R`Divisible by $3$ iff $3\mid a$ or $b(c+1)\equiv2\pmod3$. Compute the second probability by listing residue pairs.`,
  steps: [
    { title: 'Case $3\mid a$',
      explain: R`Probability $\tfrac13$.`,
      check: { q: R`What fraction of $1..2010$ are multiples of $3$?`, opts: [R`\tfrac13`, R`\tfrac12`, R`\tfrac23`, R`\tfrac14`], ans: 0, why: R`$670$ of $2010$.` } },
    { title: 'Case $b(c+1)\equiv2$',
      explain: R`$(b,c+1)\equiv(1,2)$ or $(2,1)$: $2$ of $9$ residue pairs, probability $\tfrac29$.`,
      check: { q: R`Which pairs of residues multiply to $2\pmod3$?`, opts: [R`(1,2),(2,1)`, R`(1,1),(2,2)`, R`(0,2)`, R`(2,2)\text{ only}`], ans: 0, why: R`$1\cdot2=2$, $2\cdot1=2$.` } },
    { title: 'Combine',
      explain: R`$\tfrac13+\tfrac23\cdot\tfrac29=\tfrac9{27}+\tfrac4{27}=\tfrac{13}{27}$.`,
      check: { q: R`What is $\tfrac13+\tfrac4{27}$?`, opts: [R`\tfrac{13}{27}`, R`\tfrac{11}{27}`, R`\tfrac{5}{27}`, R`\tfrac12`], ans: 0, why: R`$\tfrac{9+4}{27}$.` } }
  ],
  bridge: R`Factor, then split into $3\mid a$ or the other factor $\equiv0$.`,
  solution: [
    R`$abc+ab+a=a(b(c+1)+1)$.`,
    R`$P(3\mid a)=\tfrac13$; otherwise need $b(c+1)\equiv2$: $\tfrac29$.`,
    R`Total $\tfrac13+\tfrac23\cdot\tfrac29=\tfrac{13}{27}$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Factor first; probabilities of "either factor divisible" combine with a complement.`,
  traps: [R`Adding the two cases without the $\tfrac23$ factor.`, R`Assuming residues are not uniform.`],
  recognize: R`Divisibility probabilities: factor the expression and use residues.`
},

'2010B19': {
  answer: 'B',
  goal: R`A circle has $r^2=156$; equilateral triangle $ABC$ has $BC$ as a chord, $OA=4\sqrt3$, with $O$ outside the triangle. Both $O$ and $A$ lie on the perpendicular bisector of $BC$.`,
  tools: [
    { name: 'Perpendicular bisector', fact: R`OB=OC,\ AB=AC\Rightarrow O,A\text{ on the bisector of }BC`, why: R`Points equidistant from $B$ and $C$.` },
    { name: 'Distances along the bisector', fact: R`OM=\sqrt{156-\tfrac{s^2}4},\quad AM=\tfrac{\sqrt3}2s`, why: R`Right triangles with half-chord $\tfrac s2$.` }
  ],
  approach: R`With $M$ the midpoint of $BC$, $OA$ is $OM-AM$ or $OM+AM$ depending on sides. Test the choices; $s=6$ gives $OM=7\sqrt3$, $AM=3\sqrt3$, difference $4\sqrt3$ with $O$ beyond $A$ (outside the triangle).`,
  steps: [
    { title: 'Set up',
      explain: R`$OM=\sqrt{156-\tfrac{s^2}{4}}$, $AM=\tfrac{\sqrt3}{2}s$, and $OA=4\sqrt3$.`,
      check: { q: R`For $s=6$, what is $AM$?`, opts: [R`3\sqrt3`, R`6\sqrt3`, R`3`, R`2\sqrt3`], ans: 0, why: R`$\tfrac{\sqrt3}2\cdot6$.` } },
    { title: 'Check $s=6$',
      explain: R`$OM=\sqrt{156-9}=\sqrt{147}=7\sqrt3$. $OM-AM=4\sqrt3=OA$: $O$ is beyond $A$, outside the triangle.`,
      check: { q: R`Simplify $\sqrt{147}$.`, opts: [R`7\sqrt3`, R`3\sqrt7`, R`12`, R`7\sqrt2`], ans: 0, why: R`$147=49\cdot3$.` } }
  ],
  bridge: R`Put $O$ and $A$ on the bisector of $BC$ and compare distances.`,
  solution: [
    R`$O$ and $A$ lie on the perpendicular bisector of $BC$.`,
    R`For side $s$: $OM=\sqrt{156-s^2/4}$, $AM=\tfrac{\sqrt3}2s$, and $OA=|OM-AM|$ with $O$ outside.`,
    R`$s=6$: $7\sqrt3-3\sqrt3=4\sqrt3$. ✓`,
    R`The answer is $\textbf{(B)}\ 6$.`
  ],
  shortcut: R`Solve $\sqrt{156-s^2/4}=\tfrac{\sqrt3}2s+4\sqrt3$ by squaring, or test the choices.`,
  traps: [R`Placing $O$ inside the triangle.`, R`Using $r=156$.`],
  recognize: R`Isosceles/equilateral triangles on a chord: the apex and centre are on the chord's perpendicular bisector.`
},

'2010B20': {
  answer: 'D',
  goal: R`Two circles outside a regular hexagon are tangent to lines $BC$ and $FA$; one also touches $AB$, the other $DE$. We want the ratio of their areas. Lines $BC$ and $FA$ meet at a point $P$, and both circles sit in the same $60^\circ$ angle at $P$.`,
  tools: [
    { name: 'Circle in an angle', fact: R`\text{centre on the bisector at distance }d\text{ from }P\Rightarrow r=d\sin30^\circ=\tfrac d2`, why: R`Tangent to both sides of a $60^\circ$ angle.` },
    { name: 'Hexagon distances', fact: R`P\text{ to }AB=\tfrac{\sqrt3}2,\quad AB\text{ to }DE=\sqrt3`, why: R`$PAB$ is equilateral with side $1$; the hexagon's height is $\sqrt3$.` }
  ],
  approach: R`Take side $1$. $P$ is the apex of the equilateral triangle on $AB$. The first circle is the incircle of $\triangle PAB$. The second is in the same angle but just beyond $DE$, which is $\tfrac{3\sqrt3}2$ from $P$. Use $r=\tfrac d2$ for both.`,
  steps: [
    { title: 'First circle',
      explain: R`Incircle of equilateral $\triangle PAB$ (side $1$): $r_1=\tfrac{\sqrt3}6$.`,
      check: { q: R`What is the inradius of an equilateral triangle with side $1$?`, opts: [R`\tfrac{\sqrt3}6`, R`\tfrac{\sqrt3}3`, R`\tfrac12`, R`\tfrac{\sqrt3}{2}`], ans: 0, why: R`$\tfrac13$ of the height $\tfrac{\sqrt3}2$.` } },
    { title: 'Second circle',
      explain: R`Its centre is at distance $d$ from $P$ with $r_2=\tfrac d2$, and it touches $DE$ from beyond: $d-r_2=\tfrac{3\sqrt3}{2}$. So $\tfrac d2=\tfrac{3\sqrt3}2$, $r_2=\tfrac{3\sqrt3}2$.`,
      check: { q: R`Solve $d-\tfrac d2=\tfrac{3\sqrt3}2$.`, opts: [R`d=3\sqrt3`, R`d=\tfrac{3\sqrt3}{4}`, R`d=\sqrt3`, R`d=6\sqrt3`], ans: 0, why: R`$\tfrac d2=\tfrac{3\sqrt3}{2}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{r_2}{r_1}=\tfrac{3\sqrt3/2}{\sqrt3/6}=9$, so areas are in ratio $81$.`,
      check: { q: R`If radii are in ratio $9$, areas are in ratio?`, opts: [R`81`, R`9`, R`27`, R`3`], ans: 0, why: R`Square it.` } }
  ],
  bridge: R`Both circles are inscribed in the angle at $P$; compare their distances from $P$.`,
  solution: [
    R`Lines $BC$ and $FA$ meet at $P$, forming equilateral $\triangle PAB$.`,
    R`$r_1=\tfrac{\sqrt3}6$ (incircle of $PAB$).`,
    R`The second circle has $d-\tfrac d2=\tfrac{3\sqrt3}2$, so $r_2=\tfrac{3\sqrt3}2$.`,
    R`Area ratio $9^2=81$. The answer is $\textbf{(D)}\ 81$.`
  ],
  shortcut: R`Circles in the same angle are similar from $P$; the ratio of radii equals the ratio of distances to their tangent lines on the far side.`,
  traps: [R`Placing the second circle between $AB$ and $DE$.`, R`Answering $9$ (radius ratio).`],
  recognize: R`Circles tangent to two fixed lines: they are dilations from the lines' intersection.`
},

'2010B21': {
  answer: 'E',
  goal: R`A random $4$-digit palindrome $abba$; we want $P(7\mid abba)$. Write it as $1001a+110b$ and note $1001=7\cdot11\cdot13$.`,
  tools: [
    { name: 'Palindrome form', fact: R`\overline{abba}=1001a+110b`, why: R`$1000a+100b+10b+a$.` },
    { name: '1001 is divisible by 7', fact: R`1001=7\cdot11\cdot13`, why: R`A famous factorisation.` }
  ],
  approach: R`$7\mid1001a$ always, so we need $7\mid110b$. Since $110\equiv5\pmod7$, that means $7\mid b$: $b\in\{0,7\}$.`,
  steps: [
    { title: 'Reduce',
      explain: R`$7\mid1001a+110b\iff7\mid110b\iff7\mid b$ (as $\gcd(110,7)=1$).`,
      check: { q: R`What is $110\bmod7$?`, opts: [R`5`, R`6`, R`4`, R`0`], ans: 0, why: R`$105+5$.` } },
    { title: 'Probability',
      explain: R`$b$ is $0$ or $7$: $2$ of $10$ choices. Probability $\tfrac15$.`,
      check: { q: R`Is $7007$ divisible by $7$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only by }11`, R`\text{Only by }13`], ans: 0, why: R`$7007=7\cdot1001$.` } }
  ],
  bridge: R`Write $abba=1001a+110b$ and use $7\mid1001$.`,
  solution: [
    R`$\overline{abba}=1001a+110b$ with $7\mid1001$.`,
    R`So $7\mid\overline{abba}\iff7\mid b\iff b\in\{0,7\}$.`,
    R`Probability $\tfrac2{10}=\tfrac15$.`,
    R`The answer is $\textbf{(E)}\ \tfrac15$.`
  ],
  shortcut: R`Remember $1001=7\cdot11\cdot13$: every $abba$ is $a\cdot1001+b\cdot110$.`,
  traps: [R`Assuming $\tfrac17$ by "randomness".`, R`Forgetting $b=0$.`],
  recognize: R`Palindromes: expand by place value; factors like $1001$, $11$ appear.`
},

'2010B22': {
  answer: 'C',
  goal: R`Seven distinct candies go into red, blue and white bags; red and blue each need at least one. Count with complementary counting.`,
  tools: [
    { name: 'Distributions', fact: R`3^7\text{ ways to assign each candy to a bag}`, why: R`Each distinct candy chooses a bag.` },
    { name: 'Inclusion–exclusion', fact: R`3^7-2\cdot2^7+1^7`, why: R`Remove red-empty and blue-empty, add back both empty.` }
  ],
  approach: R`Count all assignments, subtract those with red empty and those with blue empty, add back those with both empty.`,
  steps: [
    { title: 'Count',
      explain: R`$3^7=2187$; red empty: $2^7=128$; blue empty: $128$; both empty: $1$. So $2187-256+1=1932$.`,
      check: { q: R`What is $3^7$?`, opts: [R`2187`, R`729`, R`2048`, R`6561`], ans: 0, why: R`$729\cdot3$.` } }
  ],
  bridge: R`Inclusion–exclusion on the empty bags.`,
  solution: [
    R`All assignments: $3^7=2187$.`,
    R`Subtract red-empty ($128$) and blue-empty ($128$); add back both empty ($1$).`,
    R`$1932$.`,
    R`The answer is $\textbf{(C)}\ 1932$.`
  ],
  shortcut: R`"At least one in each of some bags": inclusion–exclusion over those bags only.`,
  traps: [R`Forgetting to add back the all-white case.`, R`Requiring the white bag to be nonempty too.`],
  recognize: R`Distributing distinct objects with "nonempty" conditions: inclusion–exclusion.`
},

'2010B23': {
  answer: 'D',
  goal: R`Fill a $3\times3$ grid with $1$–$9$ so rows and columns increase. We count such arrays (standard Young tableaux of a $3\times3$ shape).`,
  tools: [
    { name: 'Hook length formula', fact: R`\frac{9!}{\prod\text{hook lengths}}`, why: R`Counts standard Young tableaux.` },
    { name: 'Hook lengths of $3\times3$', fact: R`5,4,3;\ 4,3,2;\ 3,2,1`, why: R`Cells to the right plus below plus itself.` }
  ],
  approach: R`Use the hook length formula: product of hooks is $5\cdot4\cdot3\cdot4\cdot3\cdot2\cdot3\cdot2\cdot1=8640$, and $\tfrac{9!}{8640}=42$. (A casework check: $1$ is top-left, $9$ bottom-right, and the centre must be $4$, $5$ or $6$.)`,
  steps: [
    { title: 'Hook lengths',
      explain: R`Top row: $5,4,3$; middle: $4,3,2$; bottom: $3,2,1$. Product $60\cdot24\cdot6=8640$.`,
      check: { q: R`What is the hook length of the top-left cell?`, opts: [R`5`, R`9`, R`3`, R`6`], ans: 0, why: R`$2$ right $+2$ below $+1$.` } },
    { title: 'Count',
      explain: R`$\tfrac{362880}{8640}=42$.`,
      check: { q: R`What is $\tfrac{362880}{8640}$?`, opts: [R`42`, R`36`, R`48`, R`24`], ans: 0, why: R`Divide.` } }
  ],
  bridge: R`Apply the hook length formula.`,
  solution: [
    R`Hook lengths of the $3\times3$ grid multiply to $8640$.`,
    R`$\tfrac{9!}{8640}=42$.`,
    R`The answer is $\textbf{(D)}\ 42$.`
  ],
  shortcut: R`Casework on the centre ($4$, $5$ or $6$) gives $12+18+12=42$.`,
  traps: [R`Assuming the grid is forced.`, R`Counting only symmetric fillings.`],
  recognize: R`Increasing rows and columns: Young tableaux; use the hook length formula or casework on the centre.`
},

'2010B24': {
  answer: 'E',
  goal: R`Raiders score a geometric sequence $a,ar,ar^2,ar^3$; Wildcats an arithmetic one $a,a+d,a+2d,a+3d$ (same first quarter). Raiders win by $1$, each total at most $100$. We want the first-half total.`,
  tools: [
    { name: 'Totals', fact: R`a(1+r+r^2+r^3)=4a+6d+1`, why: R`Raiders total equals Wildcats total plus $1$.` },
    { name: 'Divisibility by 6', fact: R`r=3:\ 36a-6d=1\text{ impossible}`, why: R`The left side is a multiple of $6$.` }
  ],
  approach: R`Try small ratios. $r=2$: $15a=4a+6d+1$, so $11a=6d+1$; $a=5$, $d=9$ works with totals $75$ and $74$. Other ratios fail divisibility or the $100$ bound.`,
  steps: [
    { title: 'Try $r=2$',
      explain: R`$11a=6d+1$ needs $11a\equiv1\pmod6$, i.e. $a\equiv5\pmod6$. $a=5$: $d=9$. Raiders $5,10,20,40$ (total $75$); Wildcats $5,14,23,32$ (total $74$).`,
      check: { q: R`What is $5+10+20+40$?`, opts: [R`75`, R`74`, R`70`, R`80`], ans: 0, why: R`Add.` } },
    { title: 'First half',
      explain: R`$(5+10)+(5+14)=34$.`,
      check: { q: R`What is $15+19$?`, opts: [R`34`, R`33`, R`30`, R`32`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Set totals equal (plus one), try $r=2$, and add the first-half scores.`,
  solution: [
    R`$a(1+r+r^2+r^3)=4a+6d+1$.`,
    R`$r=2$, $a=5$, $d=9$ works: $75$ vs $74$.`,
    R`First half: $5+10+5+14=34$.`,
    R`The answer is $\textbf{(E)}\ 34$.`
  ],
  shortcut: R`$r=3$ fails mod $6$; larger $r$ exceeds $100$.`,
  traps: [R`Using full-game totals.`, R`Allowing non-integer scores.`],
  recognize: R`Geometric vs arithmetic sequences with integer constraints: test small ratios and use divisibility.`
},

'2010B25': {
  answer: 'B',
  goal: R`An integer-coefficient polynomial equals $a$ at $1,3,5,7$ and $-a$ at $2,4,6,8$. We want the smallest $a>0$. Factor out the known roots of $P(x)-a$ and see what the other values force.`,
  tools: [
    { name: 'Factor theorem', fact: R`P(x)-a=(x-1)(x-3)(x-5)(x-7)Q(x)`, why: R`$1,3,5,7$ are roots of $P(x)-a$.` },
    { name: 'Integer coefficients', fact: R`Q\text{ has integer coefficients, so }Q(k)\in\mathbb Z`, why: R`Dividing by monic factors keeps integer coefficients.` }
  ],
  approach: R`At $x=2,4,6,8$: $-2a=(\text{product})\cdot Q(x)$. The products are $-15$, $9$, $-15$, $105$. So $\tfrac{2a}{15}$, $\tfrac{2a}{9}$, $\tfrac{2a}{105}$ must be integers: $a$ is a multiple of $\operatorname{lcm}(9,15,105)=315$.`,
  steps: [
    { title: 'The products',
      explain: R`At $2$: $(1)(-1)(-3)(-5)=-15$. At $4$: $(3)(1)(-1)(-3)=9$. At $6$: $(5)(3)(1)(-1)=-15$. At $8$: $(7)(5)(3)(1)=105$.`,
      check: { q: R`What is $(x-1)(x-3)(x-5)(x-7)$ at $x=4$?`, opts: [R`9`, R`-9`, R`15`, R`-15`], ans: 0, why: R`$3\cdot1\cdot(-1)\cdot(-3)$.` } },
    { title: 'Divisibility',
      explain: R`$Q(2)=\tfrac{2a}{15}$, $Q(4)=-\tfrac{2a}{9}$, $Q(8)=-\tfrac{2a}{105}$ must be integers. So $a$ is a multiple of $\operatorname{lcm}(15,9,105)=315$. With $a=315$ the needed values are $Q(2)=42$, $Q(4)=-70$, $Q(6)=42$, $Q(8)=-6$, and $Q(x)=42-56(x-2)+28(x-2)(x-4)-8(x-2)(x-4)(x-6)$ has integer coefficients and hits all four.`,
      check: { q: R`What is $\operatorname{lcm}(9,15,105)$?`, opts: [R`315`, R`105`, R`945`, R`135`], ans: 0, why: R`$3^2\cdot5\cdot7$.` } }
  ],
  bridge: R`Factor $P(x)-a$, evaluate at the even points, and require integer values of $Q$.`,
  solution: [
    R`$P(x)-a=(x-1)(x-3)(x-5)(x-7)Q(x)$ with $Q$ integral.`,
    R`At $2,4,6,8$: $-2a=-15Q(2)=9Q(4)=-15Q(6)=105Q(8)$.`,
    R`So $315\mid a$, and $a=315$ is achievable.`,
    R`The answer is $\textbf{(B)}\ 315$.`
  ],
  shortcut: R`The lcm of the four products' absolute values (ignoring the factor $2$) gives the answer.`,
  traps: [R`Using $8!$ or $7!$ without analysis.`, R`Forgetting the factor $2$ in $-2a$ (it does not change the lcm here since the products are odd).`],
  recognize: R`Polynomials with integer coefficients taking given values: factor out known roots; integrality of the quotient constrains parameters.`
}

};
