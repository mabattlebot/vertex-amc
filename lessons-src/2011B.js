// Hand-written lessons: 2011 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2011B16': {
  answer: 'A',
  goal: R`A regular octagon dartboard is divided into a centre square, four rectangles and four corner triangles. We want the probability of hitting the centre square: its area over the octagon's area.`,
  tools: [
    { name: 'Octagon from a square', fact: R`\text{octagon}=\text{square of side }s(1+\sqrt2)\text{ minus four corner triangles}`, why: R`Each corner triangle is isosceles right with legs $\tfrac{s}{\sqrt2}$.` },
    { name: 'Corner triangle area', fact: R`\tfrac12\left(\tfrac s{\sqrt2}\right)^2=\tfrac{s^2}4`, why: R`Legs $\tfrac s{\sqrt2}$.` }
  ],
  approach: R`Let the octagon's side be $s$; the centre square also has side $s$. Compute the octagon's area as a big square minus corners, then divide.`,
  steps: [
    { title: 'Octagon area',
      explain: R`Enclosing square side $s+2\cdot\tfrac{s}{\sqrt2}=s(1+\sqrt2)$. Area $s^2(1+\sqrt2)^2-4\cdot\tfrac{s^2}4=s^2(3+2\sqrt2-1)=s^2(2+2\sqrt2)$.`,
      check: { q: R`What is $(1+\sqrt2)^2$?`, opts: [R`3+2\sqrt2`, R`3`, R`1+2\sqrt2`, R`2+2\sqrt2`], ans: 0, why: R`$1+2\sqrt2+2$.` } },
    { title: 'Probability',
      explain: R`$\dfrac{s^2}{s^2(2+2\sqrt2)}=\dfrac{1}{2(1+\sqrt2)}=\dfrac{\sqrt2-1}{2}$.`,
      check: { q: R`Rationalise $\tfrac{1}{1+\sqrt2}$.`, opts: [R`\sqrt2-1`, R`\sqrt2+1`, R`\tfrac{\sqrt2}{2}`, R`1-\sqrt2`], ans: 0, why: R`Multiply by $\sqrt2-1$.` } }
  ],
  bridge: R`Find the octagon's area in terms of its side and divide the square's area by it.`,
  solution: [
    R`With side $s$, the octagon's area is $s^2(2+2\sqrt2)$.`,
    R`The centre square has area $s^2$.`,
    R`Probability $\tfrac{1}{2+2\sqrt2}=\tfrac{\sqrt2-1}2$.`,
    R`The answer is $\textbf{(A)}$.`
  ],
  shortcut: R`Regular octagon area: $2(1+\sqrt2)s^2$.`,
  traps: [R`Assuming the nine regions have equal area.`, R`Using leg $s$ for the corner triangles.`],
  recognize: R`Regular octagons: build them from a square with corners cut off at $45^\circ$.`
},

'2011B17': {
  answer: 'C',
  goal: R`In a circle with diameter $EB$, $DC\parallel EB$ and $AB\parallel ED$, and $\angle AEB:\angle ABE=4:5$. We want $\angle BCD$. Inscribed angles and parallel chords do the work.`,
  tools: [
    { name: 'Thales', fact: R`\angle EAB=90^\circ`, why: R`$EB$ is a diameter.` },
    { name: 'Alternate angles', fact: R`AB\parallel ED\Rightarrow\angle DEB=\angle ABE`, why: R`Transversal $EB$ crosses the parallel lines.` },
    { name: 'Cyclic quadrilateral', fact: R`\angle BCD+\angle DEB=180^\circ`, why: R`Opposite angles of a cyclic quadrilateral are supplementary.` }
  ],
  approach: R`From the right angle at $A$ and the ratio, $\angle ABE=50^\circ$. Parallel lines transfer this to $\angle DEB$. Then $EBCD$ is cyclic, so $\angle BCD=180^\circ-50^\circ$.`,
  steps: [
    { title: 'Angles in triangle $ABE$',
      explain: R`$\angle AEB+\angle ABE=90^\circ$ with ratio $4:5$: $40^\circ$ and $50^\circ$.`,
      check: { q: R`Split $90^\circ$ in ratio $4:5$.`, opts: [R`40^\circ,50^\circ`, R`36^\circ,54^\circ`, R`45^\circ,45^\circ`, R`30^\circ,60^\circ`], ans: 0, why: R`$90\cdot\tfrac49$ and $90\cdot\tfrac59$.` } },
    { title: 'Transfer and finish',
      explain: R`$AB\parallel ED$ gives $\angle DEB=\angle ABE=50^\circ$. In cyclic quadrilateral $EBCD$, $\angle BCD=180^\circ-50^\circ=130^\circ$.`,
      check: { q: R`In a cyclic quadrilateral, if one angle is $50^\circ$, what is the opposite angle?`, opts: [R`130^\circ`, R`50^\circ`, R`90^\circ`, R`140^\circ`], ans: 0, why: R`They add to $180^\circ$.` } }
  ],
  bridge: R`Get $\angle ABE$ from the ratio, move it to $\angle DEB$ with parallels, and use the cyclic quadrilateral.`,
  solution: [
    R`$\angle EAB=90^\circ$, so $\angle AEB=40^\circ$, $\angle ABE=50^\circ$.`,
    R`$AB\parallel ED$ gives $\angle DEB=50^\circ$.`,
    R`$EBCD$ is cyclic: $\angle BCD=130^\circ$.`,
    R`The answer is $\textbf{(C)}\ 130$.`
  ],
  shortcut: R`$DC\parallel EB$ makes $EBCD$ an isosceles trapezoid, a quick check of the picture.`,
  traps: [R`Using $\angle AEB$ instead of $\angle ABE$.`, R`Forgetting the right angle at $A$.`],
  recognize: R`Circles with diameters and parallel chords: Thales gives right angles; parallels transfer angles; cyclic quadrilaterals finish.`
},

'2011B18': {
  answer: 'E',
  goal: R`In a $6\times3$ rectangle, $M$ on $AB$ makes $MD$ bisect $\angle AMC$. We want $\angle AMD$. Parallel sides turn the bisector condition into an isosceles triangle.`,
  tools: [
    { name: 'Alternate angles', fact: R`AB\parallel DC\Rightarrow\angle AMD=\angle MDC`, why: R`Transversal $MD$.` },
    { name: 'Isosceles triangle', fact: R`\angle CMD=\angle CDM\Rightarrow CM=CD`, why: R`Equal base angles mean equal sides.` },
    { name: '$\tan75^\circ$', fact: R`\tan75^\circ=2+\sqrt3`, why: R`Angle addition: $\tan(45^\circ+30^\circ)$.` }
  ],
  approach: R`$\angle CMD=\angle AMD=\angle MDC$, so triangle $MCD$ is isosceles with $CM=CD=6$. Find $M$, then $\tan\angle AMD=\tfrac{AD}{AM}$.`,
  steps: [
    { title: 'Isosceles triangle',
      explain: R`$\angle CMD=\angle AMD=\angle MDC$, so $CM=CD=6$.`,
      check: { q: R`If two angles of a triangle are equal, which sides are equal?`, opts: [R`\text{The sides opposite them}`, R`\text{All sides}`, R`\text{None}`, R`\text{The adjacent sides}`], ans: 0, why: R`Isosceles triangle.` } },
    { title: 'Locate $M$',
      explain: R`With $M=(m,0)$ and $C=(6,3)$: $(6-m)^2+9=36$, so $6-m=3\sqrt3$ and $AM=m=6-3\sqrt3$.`,
      check: { q: R`Solve $(6-m)^2=27$ for $m<6$.`, opts: [R`6-3\sqrt3`, R`6+3\sqrt3`, R`3\sqrt3`, R`\sqrt{27}-6`], ans: 0, why: R`$6-m=\sqrt{27}$.` } },
    { title: 'The angle',
      explain: R`$\tan\angle AMD=\tfrac{3}{6-3\sqrt3}=\tfrac{1}{2-\sqrt3}=2+\sqrt3$, so $\angle AMD=75^\circ$.`,
      check: { q: R`What is $\tfrac1{2-\sqrt3}$?`, opts: [R`2+\sqrt3`, R`2-\sqrt3`, R`\sqrt3`, R`\tfrac{1}{2}`], ans: 0, why: R`$(2-\sqrt3)(2+\sqrt3)=1$.` } }
  ],
  bridge: R`Show $CM=CD$, find $AM$, and compute the tangent.`,
  solution: [
    R`$\angle AMD=\angle MDC$ (parallels), so $\triangle MCD$ is isosceles: $CM=6$.`,
    R`$AM=6-3\sqrt3$.`,
    R`$\tan\angle AMD=2+\sqrt3$, so $75^\circ$.`,
    R`The answer is $\textbf{(E)}\ 75$.`
  ],
  shortcut: R`$\angle BMC$: $\sin=\tfrac36=\tfrac12$ gives $30^\circ$, so $\angle AMC=150^\circ$ and its half is $75^\circ$.`,
  traps: [R`Assuming $M$ is the midpoint.`, R`Using $\tan75^\circ=\sqrt3$.`],
  recognize: R`Angle bisectors meeting parallel lines create isosceles triangles.`
},

'2011B19': {
  answer: 'A',
  goal: R`Solve $\sqrt{5|x|+8}=\sqrt{x^2-16}$ and multiply the roots. Square both sides and treat $|x|$ as the variable.`,
  tools: [
    { name: 'Squaring', fact: R`\sqrt u=\sqrt v\iff u=v\ge0`, why: R`Both sides are nonnegative.` },
    { name: 'Quadratic in $|x|$', fact: R`x^2=|x|^2`, why: R`Rewrite $x^2$ as $|x|^2$.` }
  ],
  approach: R`$5|x|+8=x^2-16$ becomes $|x|^2-5|x|-24=0$, so $|x|=8$. Both $x=\pm8$ work. Multiply.`,
  steps: [
    { title: 'Solve for $|x|$',
      explain: R`$|x|^2-5|x|-24=(|x|-8)(|x|+3)=0$, so $|x|=8$.`,
      check: { q: R`Factor $t^2-5t-24$.`, opts: [R`(t-8)(t+3)`, R`(t+8)(t-3)`, R`(t-6)(t+4)`, R`(t-12)(t+2)`], ans: 0, why: R`$-8\cdot3=-24$, $-8+3=-5$.` } },
    { title: 'Check and multiply',
      explain: R`$x=\pm8$: both sides equal $\sqrt{48}$. Product $-64$.`,
      check: { q: R`What is $8\cdot(-8)$?`, opts: [R`-64`, R`64`, R`0`, R`-16`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Square, rewrite as a quadratic in $|x|$, and solve.`,
  solution: [
    R`Squaring: $x^2-5|x|-24=0$.`,
    R`$|x|=8$, so $x=\pm8$ (both valid).`,
    R`Product $-64$.`,
    R`The answer is $\textbf{(A)}\ -64$.`
  ],
  shortcut: R`Equations symmetric in $x\to-x$ have roots in $\pm$ pairs.`,
  traps: [R`Accepting $|x|=-3$.`, R`Forgetting the negative root.`],
  recognize: R`Equations with $|x|$ and $x^2$: treat $|x|$ as the variable.`
},

'2011B20': {
  answer: 'C',
  goal: R`Rhombus $ABCD$ (side $2$, $\angle B=120^\circ$). Region $R$ is the points closer to $B$ than to $A$, $C$, $D$. It is bounded by perpendicular bisectors.`,
  tools: [
    { name: 'Perpendicular bisector', fact: R`\text{points equidistant from }P,Q`, why: R`Closer to $B$ than $Q$ means on $B$'s side of the bisector of $BQ$.` },
    { name: 'Rhombus diagonals', fact: R`BD=2,\ AC=2\sqrt3`, why: R`Triangle $ABD$ is equilateral ($\angle A=60^\circ$).` },
    { name: 'Shoelace formula', fact: R`\text{area from coordinates}`, why: R`For the pentagon $R$.` }
  ],
  approach: R`Coordinates: $B=(0,0)$, $D=(2,0)$, $A=(1,\sqrt3)$, $C=(1,-\sqrt3)$. The bisector of $BD$ is $x=1$ (line $AC$); those of $AB$ and $BC$ are $x\pm\sqrt3y=2$. $R$ is a pentagon; compute half and double.`,
  steps: [
    { title: 'Boundaries',
      explain: R`Bisector of $AB$: through $(\tfrac12,\tfrac{\sqrt3}2)$ perpendicular to $(1,\sqrt3)$: $x+\sqrt3y=2$. It meets $x=1$ at $y=\tfrac1{\sqrt3}$.`,
      check: { q: R`On $x+\sqrt3y=2$, what is $y$ when $x=1$?`, opts: [R`\tfrac{1}{\sqrt3}`, R`\sqrt3`, R`1`, R`\tfrac12`], ans: 0, why: R`$\sqrt3y=1$.` } },
    { title: 'Upper half area',
      explain: R`Upper half of $R$: $(0,0),(\tfrac12,\tfrac{\sqrt3}2),(1,\tfrac1{\sqrt3}),(1,0)$. Shoelace gives $\tfrac1{\sqrt3}$.`,
      check: { q: R`What is $2\cdot\tfrac{1}{\sqrt3}$?`, opts: [R`\tfrac{2\sqrt3}3`, R`\tfrac{\sqrt3}{3}`, R`2\sqrt3`, R`\tfrac{\sqrt3}{2}`], ans: 0, why: R`$\tfrac{2}{\sqrt3}$.` } },
    { title: 'Total',
      explain: R`By symmetry $R$ has area $\tfrac{2}{\sqrt3}=\tfrac{2\sqrt3}3$.`,
      check: { q: R`Is $R$ symmetric about line $BD$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only about }AC`, R`\text{Not determined}`], ans: 0, why: R`$A$ and $C$ are mirror images in $BD$.` } }
  ],
  bridge: R`Draw the three perpendicular bisectors and compute the pentagon's area.`,
  solution: [
    R`$R$ is bounded by $x=1$ and the bisectors $x\pm\sqrt3y=2$ inside the rhombus.`,
    R`Its upper half has area $\tfrac1{\sqrt3}$.`,
    R`Total $\tfrac{2\sqrt3}3$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`$R$ is triangle $ABC$'s part near $B$ cut by the bisectors; it equals $\tfrac13$ of the rhombus area $2\sqrt3$.`,
  traps: [R`Using only the bisector of $BD$ (half the rhombus).`, R`Mixing up which angle is $120^\circ$.`],
  recognize: R`"Closer to one vertex than the others": Voronoi region bounded by perpendicular bisectors.`
},

'2011B21': {
  answer: 'B',
  goal: R`Four integers $w>x>y>z$ sum to $44$ with pairwise differences $1,3,4,5,6,9$. We find all possible $w$. Work with the three consecutive gaps.`,
  tools: [
    { name: 'Gaps', fact: R`a=w-x,\ b=x-y,\ c=y-z;\ \text{differences }a,b,c,a+b,b+c,a+b+c`, why: R`Every pairwise difference is a sum of consecutive gaps.` },
    { name: 'Sum in terms of $w$', fact: R`w+x+y+z=4w-(3a+2b+c)`, why: R`$x=w-a$, $y=w-a-b$, $z=w-a-b-c$.` }
  ],
  approach: R`The largest difference $a+b+c=9$. The gaps $a,b,c$ and the two-gap sums must be $\{1,3,4,5,6\}$. Find the gap triples, then solve for $w$ from the sum.`,
  steps: [
    { title: 'Find the gaps',
      explain: R`Try $b=1$: $(a,c)=(3,5)$ gives sums $4,6$; $(5,3)$ gives $6,4$. Both match $\{1,3,4,5,6\}$. Other choices fail (e.g. $(1,3,5)$ gives $8$).`,
      check: { q: R`For gaps $(3,1,5)$, what are $a+b$ and $b+c$?`, opts: [R`4\text{ and }6`, R`4\text{ and }5`, R`3\text{ and }6`, R`8\text{ and }6`], ans: 0, why: R`$3+1$ and $1+5$.` } },
    { title: 'Solve for $w$',
      explain: R`$(3,1,5)$: $4w-(9+2+5)=44$, $w=15$. $(5,1,3)$: $4w-(15+2+3)=44$, $w=16$. Sum $31$.`,
      check: { q: R`Solve $4w-16=44$.`, opts: [R`15`, R`16`, R`14`, R`12`], ans: 0, why: R`$4w=60$.` } }
  ],
  bridge: R`Find the gap triples that produce the differences, then use the sum.`,
  solution: [
    R`Gaps $(a,b,c)$ with $a+b+c=9$ and differences $\{1,3,4,5,6,9\}$: $(3,1,5)$ or $(5,1,3)$.`,
    R`Then $w=15$ (numbers $15,12,11,6$) or $w=16$ (numbers $16,11,10,7$).`,
    R`Sum $31$.`,
    R`The answer is $\textbf{(B)}\ 31$.`
  ],
  shortcut: R`The two solutions are reverses of each other's gap pattern.`,
  traps: [R`Missing the second gap order.`, R`Forgetting $w-z=9$.`],
  recognize: R`Sets of pairwise differences: work with consecutive gaps; the largest difference is their total.`
},

'2011B22': {
  answer: 'A',
  goal: R`A square pyramid with base $1$ and equilateral side faces contains a cube on its base whose top edges lie on the side faces. We want the cube's volume. The cube's top face equals the pyramid's cross-section at height $s$.`,
  tools: [
    { name: 'Pyramid height', fact: R`h=\sqrt{1-\tfrac12}=\tfrac{1}{\sqrt2}`, why: R`Slant edge $1$, half-diagonal of base $\tfrac{\sqrt2}2$.` },
    { name: 'Cross-section scaling', fact: R`\text{side at height }t=1-\tfrac th`, why: R`Similar squares shrinking linearly to the apex.` }
  ],
  approach: R`At height $s$ the cross-section is a square of side $1-\tfrac sh=1-s\sqrt2$. The cube's top face is that square, so $s=1-s\sqrt2$.`,
  steps: [
    { title: 'Height of the pyramid',
      explain: R`Lateral edges have length $1$; the apex is above the centre, $\tfrac{\sqrt2}2$ from each base corner. $h=\sqrt{1-\tfrac12}=\tfrac1{\sqrt2}$.`,
      check: { q: R`What is half the diagonal of a unit square?`, opts: [R`\tfrac{\sqrt2}2`, R`\tfrac12`, R`\sqrt2`, R`1`], ans: 0, why: R`$\tfrac{\sqrt2}{2}$.` } },
    { title: 'Solve for $s$',
      explain: R`$s=1-s\sqrt2$ gives $s=\tfrac1{1+\sqrt2}=\sqrt2-1$.`,
      check: { q: R`Solve $s(1+\sqrt2)=1$.`, opts: [R`\sqrt2-1`, R`\sqrt2+1`, R`\tfrac12`, R`2-\sqrt2`], ans: 0, why: R`Rationalise.` } },
    { title: 'Volume',
      explain: R`$(\sqrt2-1)^3=(3-2\sqrt2)(\sqrt2-1)=5\sqrt2-7$.`,
      check: { q: R`What is $(\sqrt2-1)^2$?`, opts: [R`3-2\sqrt2`, R`1`, R`3+2\sqrt2`, R`2-\sqrt2`], ans: 0, why: R`$2-2\sqrt2+1$.` } }
  ],
  bridge: R`Use the shrinking cross-section to set up $s=1-s\sqrt2$.`,
  solution: [
    R`The pyramid has height $\tfrac1{\sqrt2}$.`,
    R`At height $s$ its cross-section has side $1-s\sqrt2$, which equals $s$.`,
    R`$s=\sqrt2-1$ and $s^3=5\sqrt2-7$.`,
    R`The answer is $\textbf{(A)}$.`
  ],
  shortcut: R`Side shrinks by $\sqrt2$ per unit height here, since $h=\tfrac{1}{\sqrt2}$.`,
  traps: [R`Using the slant height of a face as the pyramid's height.`, R`Assuming the cube's top corners touch the lateral edges.`],
  recognize: R`Shapes inscribed in pyramids or cones: cross-sections shrink linearly with height.`
},

'2011B23': {
  answer: 'D',
  goal: R`We want the hundreds digit of $2011^{2011}$, i.e. $2011^{2011}\bmod1000$. Since $2011\equiv11$, expand $(10+1)^{2011}$; only three terms matter mod $1000$.`,
  tools: [
    { name: 'Binomial theorem mod 1000', fact: R`(10+1)^n\equiv1+10n+100\binom n2\pmod{1000}`, why: R`Terms with $10^3$ or higher vanish.` },
    { name: 'Reduce the base', fact: R`2011\equiv11\pmod{1000}`, why: R`Only the last three digits matter.` }
  ],
  approach: R`Compute $1+10\cdot2011+100\binom{2011}{2}$ modulo $1000$, using only the needed last digits.`,
  steps: [
    { title: 'The linear term',
      explain: R`$10\cdot2011=20110\equiv110\pmod{1000}$.`,
      check: { q: R`What is $20110\bmod1000$?`, opts: [R`110`, R`10`, R`201`, R`0`], ans: 0, why: R`Last three digits.` } },
    { title: 'The quadratic term',
      explain: R`$\binom{2011}2=2011\cdot1005$, which ends in $5$. So $100\binom{2011}2\equiv500$.`,
      check: { q: R`What is the last digit of $2011\cdot1005$?`, opts: [R`5`, R`1`, R`0`, R`6`], ans: 0, why: R`$1\cdot5$.` } },
    { title: 'Add',
      explain: R`$1+110+500=611$: hundreds digit $6$.`,
      check: { q: R`What is $1+110+500$?`, opts: [R`611`, R`601`, R`511`, R`621`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Expand $(10+1)^{2011}$ mod $1000$ and keep three terms.`,
  solution: [
    R`$2011^{2011}\equiv11^{2011}=(10+1)^{2011}\pmod{1000}$.`,
    R`$\equiv1+10\cdot2011+100\binom{2011}{2}\equiv1+110+500$.`,
    R`$=611$, hundreds digit $6$.`,
    R`The answer is $\textbf{(D)}\ 6$.`
  ],
  shortcut: R`$11^n\bmod1000$: $1+10n+100\binom n2$.`,
  traps: [R`Using Euler's theorem without care (works but longer).`, R`Taking the hundreds digit of $2011$.`],
  recognize: R`Last digits of $(10k+1)^n$: binomial expansion; only the first few terms survive.`
},

'2011B24': {
  answer: 'B',
  goal: R`The line $y=mx+2$ avoids lattice points with $0<x\le100$ for all $m$ in $(\tfrac12,a)$. We want the largest $a$. A lattice point appears exactly when $mx$ is an integer, i.e. $m=\tfrac kx$.`,
  tools: [
    { name: 'Lattice points on the line', fact: R`(x,mx+2)\text{ is a lattice point}\iff mx\in\mathbb Z`, why: R`The $+2$ is already an integer.` },
    { name: 'Closest fraction above $\tfrac12$', fact: R`\tfrac kx-\tfrac12=\tfrac{2k-x}{2x}\ge\tfrac1{2x}`, why: R`The numerator $2k-x$ is a positive integer.` }
  ],
  approach: R`We need no fraction $\tfrac kx$ with $x\le100$ in $(\tfrac12,a)$. The smallest such fraction above $\tfrac12$ has $2k-x=1$ and $x$ as large as possible (odd, $\le100$): $x=99$, giving $\tfrac{50}{99}$.`,
  steps: [
    { title: 'When a lattice point appears',
      explain: R`$y=mx+2$ is an integer at integer $x$ iff $mx$ is an integer, i.e. $m=\tfrac kx$.`,
      check: { q: R`For $m=\tfrac35$, at which $x\le10$ is there a lattice point?`, opts: [R`x=5,10`, R`x=3`, R`\text{none}`, R`x=1`], ans: 0, why: R`$mx$ integer when $5\mid x$.` } },
    { title: 'Smallest fraction above $\tfrac12$',
      explain: R`$\tfrac kx-\tfrac12=\tfrac{2k-x}{2x}$ is smallest with $2k-x=1$ and $x$ large: $x=99$, $k=50$: $\tfrac{50}{99}$. So $a=\tfrac{50}{99}$.`,
      check: { q: R`Which is smaller: $\tfrac{50}{99}$ or $\tfrac{51}{101}$?`, opts: [R`\tfrac{50}{99}`, R`\tfrac{51}{101}`, R`\text{equal}`, R`\text{cannot tell}`], ans: 0, why: R`$\tfrac{51}{101}$ has $x=101>100$ anyway; among valid ones $\tfrac{50}{99}$ is closest.` } }
  ],
  bridge: R`Find the first fraction with denominator at most $100$ just above $\tfrac12$.`,
  solution: [
    R`A lattice point occurs iff $m=\tfrac kx$ for some $x\le100$.`,
    R`The least such fraction above $\tfrac12$ is $\tfrac{50}{99}$.`,
    R`So $a=\tfrac{50}{99}$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Fractions just above $\tfrac12$: $\tfrac{n+1}{2n+1}$; largest allowed denominator $99$.`,
  traps: [R`Choosing $\tfrac{51}{101}$ (denominator too big).`, R`Choosing $\tfrac{51}{100}$ (larger than $\tfrac{50}{99}$).`],
  recognize: R`Lines avoiding lattice points: slopes must avoid fractions with small denominators.`
},

'2011B25': {
  answer: 'D',
  goal: R`Each new triangle has sides equal to the tangent lengths of the previous triangle's incircle. Starting from $2011,2012,2013$, we want the perimeter of the last triangle that exists.`,
  tools: [
    { name: 'Tangent lengths', fact: R`AD=s-a,\ BE=s-b,\ CF=s-c`, why: R`Equal tangents from each vertex; $s$ is the semiperimeter.` },
    { name: 'Perimeter halves', fact: R`(s-a)+(s-b)+(s-c)=s`, why: R`$3s-2s$.` },
    { name: 'Consecutive sides stay consecutive', fact: R`(m-1,m,m+1)\to(\tfrac m2-1,\tfrac m2,\tfrac m2+1)`, why: R`$s=\tfrac{3m}2$.` }
  ],
  approach: R`With sides $m-1,m,m+1$, the next triangle has sides $\tfrac m2\pm1$ and $\tfrac m2$. A triangle exists while $\tfrac m2>2$ (triangle inequality). Halve $m$ from $2012$ until the next step fails.`,
  steps: [
    { title: 'The pattern',
      explain: R`$s=\tfrac{3m}2$, so new sides are $\tfrac m2+1,\tfrac m2,\tfrac m2-1$: the same shape with middle side halved.`,
      check: { q: R`For sides $9,10,11$, what are the new sides?`, opts: [R`6,5,4`, R`5,5,5`, R`4,5,6\text{ halved}`, R`10,9,8`], ans: 0, why: R`$s=15$: $15-9,15-10,15-11$.` } },
    { title: 'When it stops',
      explain: R`Sides $m-1,m,m+1$ form a triangle iff $(m-1)+m>m+1$, i.e. $m>2$. Starting at $2012$: $m=\tfrac{2012}{2^9}\approx3.93$ is the last value above $2$ (the next is $\approx1.96$).`,
      check: { q: R`What is $2012/512$ approximately?`, opts: [R`3.93`, R`1.96`, R`7.86`, R`4.5`], ans: 0, why: R`$512\cdot3.93\approx2012$.` } },
    { title: 'Perimeter',
      explain: R`$3m=\tfrac{3\cdot2012}{512}=\tfrac{1509}{128}$.`,
      check: { q: R`Simplify $\tfrac{6036}{512}$.`, opts: [R`\tfrac{1509}{128}`, R`\tfrac{1509}{256}`, R`\tfrac{3018}{128}`, R`\tfrac{1509}{64}`], ans: 0, why: R`Divide by $4$.` } }
  ],
  bridge: R`Use $s-a$, $s-b$, $s-c$ to halve the middle side each step until the triangle inequality fails.`,
  solution: [
    R`Sides $(m-1,m,m+1)$ become $(\tfrac m2-1,\tfrac m2,\tfrac m2+1)$.`,
    R`A triangle exists while $m>2$; from $2012$, the last is $m=\tfrac{2012}{512}$.`,
    R`Perimeter $3m=\tfrac{1509}{128}$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`Each step halves the perimeter: $6036\to3018\to\cdots$; count halvings until sides fail the triangle inequality.`,
  traps: [R`Halving once too many (giving $\tfrac{1509}{256}$).`, R`Forgetting the new sides are tangent lengths, not midpoints.`],
  recognize: R`Iterated triangle constructions: find what each step does to the side lengths (here: halve the perimeter, keep the shape type).`
}

};
