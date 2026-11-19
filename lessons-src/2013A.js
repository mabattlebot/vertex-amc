// Hand-written lessons: 2013 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2013A16': {
  answer: 'E',
  goal: R`A triangle and its mirror image in the line $x=8$ overlap. We want the area of their union: twice one triangle minus the overlap.`,
  tools: [
    { name: 'Shoelace formula', fact: R`\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|`, why: R`Area from coordinates.` },
    { name: 'Union of two regions', fact: R`[A\cup B]=[A]+[B]-[A\cap B]`, why: R`The overlap is counted twice in $[A]+[B]$.` },
    { name: 'Reflection in $x=8$', fact: R`(x,y)\mapsto(16-x,y)`, why: R`Distances to the line are preserved.` }
  ],
  approach: R`Compute the triangle's area. Reflect the vertices. Notice two sides of the original lie along sides of the image (same slopes through $(8,-3)$), so the overlap is a kite symmetric about $x=8$.`,
  steps: [
    { title: 'Area of one triangle',
      explain: R`$\tfrac12|6(-3-1)+8(1-5)+9(5+3)|=\tfrac12|{-24}-32+72|=8$.`,
      check: { q: R`What is $\tfrac12|{-24}-32+72|$?`, opts: [R`8`, R`16`, R`64`, R`4`], ans: 0, why: R`$\tfrac12\cdot16$.` } },
    { title: 'The overlap',
      explain: R`The image has vertices $(10,5),(8,-3),(7,1)$. Side $(8,-3)$–$(9,1)$ of the original lies on the image's side $(8,-3)$–$(10,5)$ (both slope $4$), and similarly on the left. Sides $(6,5)$–$(9,1)$ and $(10,5)$–$(7,1)$ cross at $(8,\tfrac73)$. Overlap: kite $(8,-3),(9,1),(8,\tfrac73),(7,1)$ with diagonals $\tfrac{16}3$ and $2$: area $\tfrac{16}3$.`,
      check: { q: R`A kite has diagonals $\tfrac{16}3$ and $2$. Its area?`, opts: [R`\tfrac{16}3`, R`\tfrac{32}3`, R`\tfrac83`, R`8`], ans: 0, why: R`$\tfrac12\cdot\tfrac{16}3\cdot2$.` } },
    { title: 'Union',
      explain: R`$8+8-\tfrac{16}3=\tfrac{32}3$.`,
      check: { q: R`What is $16-\tfrac{16}3$?`, opts: [R`\tfrac{32}3`, R`\tfrac{28}3`, R`10`, R`\tfrac{31}{3}`], ans: 0, why: R`$\tfrac{48-16}3$.` } }
  ],
  bridge: R`Find the area, the overlap kite, and subtract.`,
  solution: [
    R`The triangle has area $8$.`,
    R`The overlap is the kite $(8,-3),(9,1),(8,\tfrac73),(7,1)$ with area $\tfrac{16}3$.`,
    R`Union $=16-\tfrac{16}3=\tfrac{32}3$.`,
    R`The answer is $\textbf{(E)}\ \tfrac{32}3$.`
  ],
  shortcut: R`Symmetry about $x=8$ means the overlap is symmetric; compute half and double.`,
  traps: [R`Answering $16$ (forgetting the overlap).`, R`Assuming the overlap is a triangle.`],
  recognize: R`A shape and its reflection: union $=2\times$ area $-$ overlap; the overlap is symmetric about the mirror line.`
},

'2013A17': {
  answer: 'B',
  goal: R`Friends visit every $3$, $4$, $5$ days, all together yesterday. We count days in the next $365$ with exactly two visitors. The pattern repeats every $\operatorname{lcm}(3,4,5)=60$ days.`,
  tools: [
    { name: 'Common multiples', fact: R`\text{both }a\text{ and }b\text{ visit on multiples of }\operatorname{lcm}(a,b)`, why: R`A day is a multiple of both periods.` },
    { name: 'Exactly two', fact: R`\#\text{exactly two}=\sum\#(\text{pair})-3\cdot\#(\text{all three})`, why: R`All-three days are counted in each of the three pairs.` }
  ],
  approach: R`In one $60$-day cycle count days that are multiples of $12$, $15$, $20$, and subtract the all-three day ($60$) from each. Then handle $365=6\cdot60+5$.`,
  steps: [
    { title: 'One cycle',
      explain: R`Multiples in $1..60$: of $12$: $5$; of $15$: $4$; of $20$: $3$. Each includes day $60$ (all three). Exactly two: $(5-1)+(4-1)+(3-1)=9$.`,
      check: { q: R`How many multiples of $15$ are in $1..60$?`, opts: [R`4`, R`3`, R`5`, R`6`], ans: 0, why: R`$15,30,45,60$.` } },
    { title: 'Whole period',
      explain: R`$6$ full cycles give $54$. The last $5$ days (days $361$–$365$, i.e. $1$–$5$ mod $60$) contain none. Total $54$.`,
      check: { q: R`What is $6\cdot9$?`, opts: [R`54`, R`60`, R`45`, R`63`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Count exactly-two days in one $60$-day cycle and scale.`,
  solution: [
    R`The pattern repeats every $60$ days.`,
    R`Per cycle: $4+3+2=9$ days with exactly two visitors.`,
    R`$365=6\cdot60+5$; the extra $5$ days add none.`,
    R`$54$. The answer is $\textbf{(B)}\ 54$.`
  ],
  shortcut: R`Exactly-two days are pair-lcm multiples that are not multiples of $60$.`,
  traps: [R`Forgetting to remove the all-three days.`, R`Counting the leftover $5$ days incorrectly.`],
  recognize: R`Periodic events: find the lcm period, count one period with inclusion–exclusion, then scale.`
},

'2013A18': {
  answer: 'B',
  goal: R`A line through $A$ splits quadrilateral $ABCD$ into equal areas and meets $CD$ at $P$. We want $P$. Triangle $APD$ must have half the area.`,
  tools: [
    { name: 'Shoelace formula', fact: R`[ABCD]=\tfrac12\left|\sum(x_iy_{i+1}-x_{i+1}y_i)\right|`, why: R`Area from coordinates.` },
    { name: 'Triangle on the $x$-axis', fact: R`[APD]=\tfrac12\cdot AD\cdot y_P`, why: R`$A$ and $D$ lie on the $x$-axis, so the height is $P$'s $y$-coordinate.` }
  ],
  approach: R`Find $[ABCD]=\tfrac{15}2$. The piece $APD$ is a triangle with base $AD=4$ on the $x$-axis, so its area is $2y_P$. Set $2y_P=\tfrac{15}4$, then find $x_P$ on line $CD$.`,
  steps: [
    { title: 'Total area',
      explain: R`Shoelace for $(0,0),(1,2),(3,3),(4,0)$: $\tfrac12|0+(3-6)+(0-12)+0|=\tfrac{15}2$.`,
      check: { q: R`Half of $\tfrac{15}2$ is?`, opts: [R`\tfrac{15}4`, R`\tfrac{15}{8}`, R`\tfrac72`, R`4`], ans: 0, why: R`Divide by $2$.` } },
    { title: 'Height of $P$',
      explain: R`$[APD]=\tfrac12\cdot4\cdot y_P=2y_P=\tfrac{15}4$, so $y_P=\tfrac{15}8$.`,
      check: { q: R`If $2y=\tfrac{15}4$, what is $y$?`, opts: [R`\tfrac{15}8`, R`\tfrac{15}2`, R`\tfrac{8}{15}`, R`\tfrac{15}{4}`], ans: 0, why: R`Divide by $2$.` } },
    { title: 'Find $x_P$',
      explain: R`$CD$: from $(3,3)$ to $(4,0)$: $y=3-3(x-3)$. $\tfrac{15}8=12-3x$ gives $x=\tfrac{27}8$. So $p+q+r+s=27+8+15+8=58$.`,
      check: { q: R`Solve $\tfrac{15}8=12-3x$.`, opts: [R`\tfrac{27}8`, R`\tfrac{81}{8}`, R`\tfrac{9}{8}`, R`\tfrac{25}{8}`], ans: 0, why: R`$3x=\tfrac{81}8$.` } }
  ],
  bridge: R`Get the total area, use $[APD]=2y_P$, and locate $P$ on $CD$.`,
  solution: [
    R`$[ABCD]=\tfrac{15}2$.`,
    R`$[APD]=2y_P=\tfrac{15}4$ gives $y_P=\tfrac{15}8$.`,
    R`On $CD$: $x_P=\tfrac{27}8$.`,
    R`$27+8+15+8=58$. The answer is $\textbf{(B)}\ 58$.`
  ],
  shortcut: R`Choose the piece that is a triangle with a base on an axis; its area is one coordinate times a constant.`,
  traps: [R`Using the other piece (quadrilateral $ABCP$), which is harder.`, R`Not reducing the fractions.`],
  recognize: R`Area-bisecting lines from a vertex: make one piece a triangle with an easy base and solve for the height.`
},

'2013A19': {
  answer: 'C',
  goal: R`For how many bases $b$ does $2013$ end in digit $3$? The last digit in base $b$ is the remainder mod $b$.`,
  tools: [
    { name: 'Last digit = remainder', fact: R`\text{last digit of }n\text{ in base }b=n\bmod b`, why: R`$n=b\cdot q+r$ with $0\le r<b$.` },
    { name: 'Divisor count', fact: R`2010=2\cdot3\cdot5\cdot67\Rightarrow16\text{ divisors}`, why: R`$(1+1)^4$.` }
  ],
  approach: R`$2013\bmod b=3$ means $b\mid2010$ and $b>3$ (the digit $3$ must be allowed). Count divisors of $2010$ greater than $3$.`,
  steps: [
    { title: 'Translate',
      explain: R`$2013\equiv3\pmod b$ with $b>3$ means $b\mid2010$, $b\ge4$.`,
      check: { q: R`In base $7$, what is the last digit of $45$?`, opts: [R`3`, R`6`, R`4`, R`5`], ans: 0, why: R`$45=6\cdot7+3$.` } },
    { title: 'Count',
      explain: R`$2010$ has $16$ divisors; remove $1,2,3$: $13$.`,
      check: { q: R`How many divisors does $2\cdot3\cdot5\cdot67$ have?`, opts: [R`16`, R`8`, R`15`, R`4`], ans: 0, why: R`$2^4$.` } }
  ],
  bridge: R`Last digit $3$ means $b\mid2010$ with $b>3$.`,
  solution: [
    R`$2013$ ends in $3$ in base $b$ iff $b\mid2010$ and $b>3$.`,
    R`$2010=2\cdot3\cdot5\cdot67$ has $16$ divisors.`,
    R`Excluding $1,2,3$: $13$.`,
    R`The answer is $\textbf{(C)}\ 13$.`
  ],
  shortcut: R`"Ends in digit $d$ in base $b$" $\iff b\mid n-d$ and $b>d$.`,
  traps: [R`Including $b=2$ or $3$ (digit $3$ is not allowed).`, R`Including $b=1$.`],
  recognize: R`Last digits in other bases are remainders; count divisors of $n-d$.`
},

'2013A20': {
  answer: 'C',
  goal: R`A unit square rotates $45^\circ$ about its centre. We want the area of all points it passes over. Split by direction from the centre: in some directions the farthest point is a moving corner (a circular arc), in others a side of the start or end square.`,
  tools: [
    { name: 'Corner path', fact: R`\text{corners trace arcs of radius }\tfrac{\sqrt2}2\text{ through }45^\circ`, why: R`Distance from centre to a corner of a unit square.` },
    { name: 'Sector area', fact: R`\tfrac{\theta}{360^\circ}\pi r^2`, why: R`Fraction of a disc.` },
    { name: '$\tan22.5^\circ$', fact: R`\tan22.5^\circ=\sqrt2-1`, why: R`Half-angle formula.` }
  ],
  approach: R`Work in one quarter (by $90^\circ$ symmetry). Directions from $45^\circ$ to $90^\circ$ are reached by a moving corner, giving a $45^\circ$ sector. Directions from $0^\circ$ to $45^\circ$ are bounded by the start or end square's side, giving two thin triangles.`,
  steps: [
    { title: 'The corner sector',
      explain: R`A corner starts at angle $45^\circ$ and moves to $90^\circ$ at distance $\tfrac{\sqrt2}2$. That sweeps a sector of area $\tfrac18\pi\cdot\tfrac12=\tfrac{\pi}{16}$.`,
      check: { q: R`What is $\tfrac18\pi\left(\tfrac{\sqrt2}2\right)^2$?`, opts: [R`\tfrac\pi{16}`, R`\tfrac\pi8`, R`\tfrac{\pi}{4}`, R`\tfrac\pi{32}`], ans: 0, why: R`$\tfrac18\pi\cdot\tfrac12$.` } },
    { title: 'The two triangles',
      explain: R`For directions $22.5^\circ$–$45^\circ$ the original square's side $x=\tfrac12$ is farthest; for $0^\circ$–$22.5^\circ$ the final square's side is. Each gives a triangle with legs $\tfrac12$ and $\tfrac12(1-\tan22.5^\circ)=\tfrac{2-\sqrt2}{2}$: area $\tfrac{2-\sqrt2}{8}$.`,
      check: { q: R`What is $1-\tan22.5^\circ$?`, opts: [R`2-\sqrt2`, R`\sqrt2-1`, R`1-\sqrt2`, R`\tfrac{\sqrt2}2`], ans: 0, why: R`$1-(\sqrt2-1)$.` } },
    { title: 'Total',
      explain: R`One quarter: $\tfrac\pi{16}+\tfrac{2-\sqrt2}{4}$. Times $4$: $2-\sqrt2+\tfrac\pi4$.`,
      check: { q: R`What is $4\cdot\tfrac{2-\sqrt2}{4}$?`, opts: [R`2-\sqrt2`, R`8-4\sqrt2`, R`\tfrac{2-\sqrt2}{4}`, R`1`], ans: 0, why: R`Cancel.` } }
  ],
  bridge: R`Divide one quarter into a corner sector and two side triangles, then multiply by $4$.`,
  solution: [
    R`In each quarter, a corner sweeps a $45^\circ$ sector of radius $\tfrac{\sqrt2}2$: $\tfrac\pi{16}$.`,
    R`The rest of the quarter is two triangles bounded by the start and end squares' sides: $2\cdot\tfrac{2-\sqrt2}8$.`,
    R`Total $4\left(\tfrac\pi{16}+\tfrac{2-\sqrt2}4\right)=2-\sqrt2+\tfrac\pi4$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Swept region = union of start and end squares plus the four corner "caps" between arcs and the star's points.`,
  traps: [R`Using only the union of the start and end squares.`, R`Using a full quarter circle for each corner.`],
  recognize: R`Regions swept by rotating shapes: split by direction; corners trace arcs, sides give straight boundaries.`
},

'2013A21': {
  answer: 'D',
  goal: R`Pirate $k$ takes $\tfrac k{12}$ of what remains. With the smallest starting amount giving whole shares, we want the $12$th pirate's share. Track what remains as a product of fractions.`,
  tools: [
    { name: 'Remainder after $k$ pirates', fact: R`R_k=N\prod_{j=1}^{k}\frac{12-j}{12}`, why: R`Each pirate leaves $\tfrac{12-k}{12}$ of the remainder.` },
    { name: 'Prime powers', fact: R`12^{11}=2^{22}3^{11},\quad11!=2^83^45^2\cdot7\cdot11`, why: R`Needed to clear denominators.` }
  ],
  approach: R`The last pirate gets $R_{11}=N\cdot\tfrac{11!}{12^{11}}$. For this to be a whole number, $N$ must be a multiple of $\tfrac{12^{11}}{\gcd(12^{11},11!)}=2^{14}3^7$. Check earlier shares are whole for this $N$; then compute $R_{11}$.`,
  steps: [
    { title: 'Last share formula',
      explain: R`$R_{11}=N\cdot\tfrac{11\cdot10\cdots1}{12^{11}}=N\cdot\tfrac{11!}{12^{11}}$.`,
      check: { q: R`After pirate $1$ takes $\tfrac1{12}$, what fraction remains?`, opts: [R`\tfrac{11}{12}`, R`\tfrac1{12}`, R`\tfrac{10}{12}`, R`\tfrac12`], ans: 0, why: R`$1-\tfrac1{12}$.` } },
    { title: 'Smallest $N$',
      explain: R`$\tfrac{12^{11}}{11!}$ in lowest terms has denominator part $2^{22-8}3^{11-4}=2^{14}3^7$. So $N=2^{14}3^7$; one can check all earlier remainders are whole too.`,
      check: { q: R`How many factors of $2$ are in $11!$?`, opts: [R`8`, R`7`, R`10`, R`5`], ans: 0, why: R`$5+2+1$.` } },
    { title: 'The share',
      explain: R`$R_{11}=\tfrac{11!}{2^83^4}=5^2\cdot7\cdot11=1925$.`,
      check: { q: R`What is $25\cdot7\cdot11$?`, opts: [R`1925`, R`1825`, R`1975`, R`1725`], ans: 0, why: R`$175\cdot11$.` } }
  ],
  bridge: R`Write the last share as $N\cdot\tfrac{11!}{12^{11}}$, choose the smallest $N$, and simplify.`,
  solution: [
    R`The $12$th pirate gets $N\cdot\tfrac{11!}{12^{11}}$.`,
    R`The smallest $N$ making every share whole is $2^{14}3^7$.`,
    R`Then the share is $\tfrac{11!}{2^83^4}=1925$.`,
    R`The answer is $\textbf{(D)}\ 1925$.`
  ],
  shortcut: R`The answer is the part of $11!$ not divisible by $2$ or $3$: $5^2\cdot7\cdot11$.`,
  traps: [R`Computing $N$ itself as the answer.`, R`Forgetting to cancel the $2$s and $3$s in $11!$.`],
  recognize: R`Successive fractional shares: the remainder is a product of fractions; integrality means clearing a fixed denominator.`
},

'2013A22': {
  answer: 'B',
  goal: R`Six unit spheres sit at the vertices of a hexagon of side $2$, inside a big sphere centred at the hexagon's centre. An eighth sphere touches all six and the big sphere. We find its radius.`,
  tools: [
    { name: 'Tangent spheres', fact: R`\text{external: }d=r_1+r_2;\quad\text{internal: }d=R-r`, why: R`Centres and the point of tangency are collinear.` },
    { name: 'Regular hexagon', fact: R`\text{circumradius}=\text{side}=2`, why: R`It is made of equilateral triangles.` }
  ],
  approach: R`The big sphere has radius $2+1=3$. The eighth sphere's centre lies on the axis through the centre, at height $h$. Tangency to a small sphere: $\sqrt{4+h^2}=r+1$; to the big sphere: $h+r=3$.`,
  steps: [
    { title: 'Big sphere',
      explain: R`Small centres are $2$ from the middle; internal tangency gives $R=2+1=3$.`,
      check: { q: R`What is the distance from a regular hexagon's centre to a vertex if the side is $2$?`, opts: [R`2`, R`\sqrt3`, R`1`, R`4`], ans: 0, why: R`Equals the side.` } },
    { title: 'Equations',
      explain: R`$h=3-r$ and $4+h^2=(r+1)^2$. Substituting: $4+9-6r+r^2=r^2+2r+1$, so $8r=12$ and $r=\tfrac32$.`,
      check: { q: R`Solve $13-6r=2r+1$.`, opts: [R`\tfrac32`, R`2`, R`\tfrac43`, R`1`], ans: 0, why: R`$12=8r$.` } }
  ],
  bridge: R`Use one tangency for height and another for distance to a small centre.`,
  solution: [
    R`The big sphere has radius $3$.`,
    R`The eighth centre is at height $h=3-r$ on the axis, with $\sqrt{4+h^2}=r+1$.`,
    R`Solving gives $r=\tfrac32$.`,
    R`The answer is $\textbf{(B)}\ \tfrac32$.`
  ],
  shortcut: R`Set up a right triangle: horizontal $2$, vertical $3-r$, hypotenuse $r+1$.`,
  traps: [R`Placing the eighth sphere in the hexagon's plane.`, R`Using internal tangency with the small spheres.`],
  recognize: R`Mutually tangent spheres with symmetry: put the unknown centre on the axis and use two tangency equations.`
},

'2013A23': {
  answer: 'D',
  goal: R`The circle centred at $A$ through $B$ meets $BC$ again at $X$; $BX$ and $CX$ are integers. We want $BC$. Power of the point $C$ gives a product equal to a fixed number.`,
  tools: [
    { name: 'Power of a point', fact: R`CX\cdot CB=CA^2-r^2`, why: R`For a point outside a circle, the product of distances to the two intersections on any line is constant.` },
    { name: 'Triangle inequality', fact: R`AC-AB<BC<AB+AC`, why: R`Sides of a genuine triangle.` }
  ],
  approach: R`Power of $C$: $CX\cdot CB=97^2-86^2=11\cdot183=2013$. So $CX$ and $CB$ are complementary factors of $2013=3\cdot11\cdot61$. Pick the pair satisfying the triangle inequality.`,
  steps: [
    { title: 'Power of the point',
      explain: R`$CX\cdot CB=97^2-86^2=(97-86)(97+86)=2013$.`,
      check: { q: R`What is $97^2-86^2$?`, opts: [R`2013`, R`2023`, R`1913`, R`121`], ans: 0, why: R`$11\cdot183$.` } },
    { title: 'Choose the factor pair',
      explain: R`$2013=3\cdot11\cdot61$: $(CX,CB)\in\{(1,2013),(3,671),(11,183),(33,61)\}$. We need $11<CB<183$, so $CB=61$.`,
      check: { q: R`Which of $2013,671,183,61$ is strictly between $11$ and $183$?`, opts: [R`61`, R`183`, R`671`, R`2013`], ans: 0, why: R`$183$ would be degenerate.` } }
  ],
  bridge: R`Use power of the point $C$ and the triangle inequality.`,
  solution: [
    R`Power of $C$: $CX\cdot CB=97^2-86^2=2013$.`,
    R`Factor pairs give $CB\in\{2013,671,183,61\}$.`,
    R`The triangle inequality $11<CB<183$ leaves $61$.`,
    R`The answer is $\textbf{(D)}\ 61$.`
  ],
  shortcut: R`Difference of squares makes $97^2-86^2$ instant.`,
  traps: [R`Using $BX\cdot CX$ instead of $CX\cdot CB$.`, R`Accepting $CB=183$ (degenerate triangle).`],
  recognize: R`A circle centred at a vertex through another vertex: power of a point from the third vertex.`
},

'2013A24': {
  answer: 'E',
  goal: R`Each of $3$ Central players plays each of $3$ Northern players twice, in $6$ rounds of $3$ simultaneous games. Each round pairs the players up, which is a permutation of $3$. We count schedules.`,
  tools: [
    { name: 'Rounds as permutations', fact: R`\text{each round}=\text{one of the }6\text{ permutations of }\{1,2,3\}`, why: R`Each Central player faces exactly one Northern player per round.` },
    { name: 'Two families', fact: R`\text{even perms }\{e,(123),(132)\};\ \text{odd perms: the }3\text{ transpositions}`, why: R`Within each family, every Central–Northern pair occurs exactly once.` },
    { name: 'Multiset arrangements', fact: R`\frac{6!}{2!2!2!}=90`, why: R`Three rounds each used twice.` }
  ],
  approach: R`Every pair (Central $i$, Northern $j$) is covered by exactly one even and one odd permutation. If even ones are used $e_1,e_2,e_3$ times and odd ones $o_1,o_2,o_3$ times, each pair needs $e_a+o_b=2$ for all $a,b$. That forces all $e$ equal and all $o$ equal: $(1,1)$, $(2,0)$ or $(0,2)$.`,
  steps: [
    { title: 'The counting equations',
      explain: R`Each pair is in one even and one odd permutation, and every combination of an even and an odd permutation shares exactly one pair. So $e_a+o_b=2$ for every $a,b$, forcing $e_1=e_2=e_3=e$ and $o_1=o_2=o_3=o$ with $e+o=2$.`,
      check: { q: R`If $e_a+o_b=2$ for all $a,b$, must all $e_a$ be equal?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only if }o=0`, R`\text{Only if }e=1`], ans: 0, why: R`$e_a=2-o_b$ for any fixed $b$.` } },
    { title: 'Count each case',
      explain: R`$e=o=1$: all six permutations once each, in any order: $6!=720$. $e=2,o=0$: three rounds each twice: $\tfrac{6!}{2!2!2!}=90$; same for $e=0,o=2$: $90$.`,
      check: { q: R`What is $\tfrac{720}{8}$?`, opts: [R`90`, R`120`, R`80`, R`60`], ans: 0, why: R`Divide.` } },
    { title: 'Total',
      explain: R`$720+90+90=900$.`,
      check: { q: R`What is $720+180$?`, opts: [R`900`, R`810`, R`880`, R`920`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Model rounds as permutations, use the two families, and count arrangements.`,
  solution: [
    R`Each round is a permutation of $3$; pairs are covered once by each family (even, odd).`,
    R`Covering each pair exactly twice forces equal use within families: $(1,1)$, $(2,0)$ or $(0,2)$.`,
    R`Counts: $720+90+90$.`,
    R`$900$. The answer is $\textbf{(E)}\ 900$.`
  ],
  shortcut: R`Latin squares: the even and odd permutations of $3$ each form one.`,
  traps: [R`Counting only the case using all six permutations ($720$).`, R`Treating rounds as unordered.`],
  recognize: R`Round-robin scheduling between two teams: rounds are permutations; coverage conditions give equations on usage counts.`
},

'2013A25': {
  answer: 'A',
  goal: R`All $20$ diagonals of a regular octagon are drawn. We count interior points where two or more meet. Generic counting gives one point per choice of $4$ vertices, but regular octagons have points where three or four diagonals meet, which are over-counted.`,
  tools: [
    { name: 'Quadruples give crossings', fact: R`\binom84=70`, why: R`Each $4$ vertices form a convex quadrilateral whose diagonals cross once.` },
    { name: 'Correcting for concurrency', fact: R`\text{a point where }m\text{ diagonals meet is counted }\binom m2\text{ times}`, why: R`Each pair of those diagonals comes from a quadruple.` }
  ],
  approach: R`Start with $70$. The centre has $4$ long diagonals meeting, counted $\binom42=6$ times instead of once: subtract $5$. There are $8$ points, arranged symmetrically around the centre, where exactly $3$ diagonals meet; each is counted $3$ times instead of once: subtract $16$.`,
  steps: [
    { title: 'Generic count',
      explain: R`Any $4$ vertices form a quadrilateral whose two diagonals cross inside: $\binom84=70$ crossings counted with multiplicity.`,
      check: { q: R`What is $\binom84$?`, opts: [R`70`, R`56`, R`28`, R`35`], ans: 0, why: R`$\tfrac{8\cdot7\cdot6\cdot5}{24}$.` } },
    { title: 'The centre',
      explain: R`The $4$ long diagonals all pass through the centre: $\binom42=6$ counts for $1$ point. Subtract $5$.`,
      check: { q: R`How many pairs among $4$ concurrent lines?`, opts: [R`6`, R`4`, R`3`, R`8`], ans: 0, why: R`$\binom42$.` } },
    { title: 'Triple points',
      explain: R`By the octagon's symmetry there are $8$ interior points where exactly three diagonals meet; each is counted $3$ times instead of once. Subtract $16$. Total $70-5-16=49$.`,
      check: { q: R`What is $70-5-16$?`, opts: [R`49`, R`54`, R`51`, R`45`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Count quadruples, then correct for the centre and the triple points.`,
  solution: [
    R`Each $4$-vertex set gives one crossing: $70$ with multiplicity.`,
    R`The centre (4 diagonals) is counted $6$ times: subtract $5$.`,
    R`The $8$ triple points are counted $3$ times each: subtract $16$.`,
    R`$49$ distinct points. The answer is $\textbf{(A)}\ 49$.`
  ],
  shortcut: R`For regular polygons, always look for concurrency at the centre and at symmetric interior points.`,
  traps: [R`Answering $70$ (ignores concurrency).`, R`Forgetting the triple points.`],
  recognize: R`Counting diagonal intersections: $\binom n4$ for general position, then correct for concurrent diagonals in regular polygons.`
}

};
