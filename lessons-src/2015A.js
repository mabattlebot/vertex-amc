// Hand-written lessons: 2015 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2015A16': {
  answer: 'B',
  goal: R`Two symmetric equations link $x$ and $y$, with $x\ne y$. We want $x^2+y^2$ without solving for $x$ and $y$. Subtracting the equations gives $x+y$; adding them brings in $x^2+y^2$.`,
  tools: [
    { name: 'Difference of squares', fact: R`(x-2)^2-(y-2)^2=(x-y)(x+y-4)`, why: R`$A^2-B^2=(A-B)(A+B)$ with $A=x-2$, $B=y-2$.` },
    { name: 'Dividing by $x-y$', fact: R`x\ne y\Rightarrow\text{we may cancel }x-y`, why: R`That is why the condition $x\ne y$ is given.` }
  ],
  approach: R`Subtract the second equation from the first: the left side gives $y-x$ and the right side factors with $x-y$. Cancel to get $x+y$. Then add the equations and expand to reach $x^2+y^2$.`,
  steps: [
    { title: 'Subtract',
      explain: R`$(y+4)-(x+4)=(x-2)^2-(y-2)^2$, so $y-x=(x-y)(x+y-4)$. Since $x\ne y$, divide by $x-y$: $-1=x+y-4$, so $x+y=3$.`,
      check: { q: R`If $-(x-y)=(x-y)(s-4)$ and $x\ne y$, what is $s$?`, opts: [R`3`, R`4`, R`5`, R`-3`], ans: 0, why: R`$s-4=-1$.` } },
    { title: 'Add',
      explain: R`$x+y+8=(x-2)^2+(y-2)^2=x^2+y^2-4(x+y)+8$. With $x+y=3$: $11=x^2+y^2-12+8$, so $x^2+y^2=15$.`,
      check: { q: R`Expand $(x-2)^2+(y-2)^2$.`, opts: [R`x^2+y^2-4x-4y+8`, R`x^2+y^2-4`, R`x^2+y^2+8`, R`x^2+y^2-2x-2y+4`], ans: 0, why: R`Each square gives $-4\cdot$ and $+4$.` } }
  ],
  bridge: R`Subtract to get $x+y$, add to get $x^2+y^2$.`,
  solution: [
    R`Subtracting: $y-x=(x-y)(x+y-4)$; since $x\ne y$, $x+y=3$.`,
    R`Adding: $x+y+8=x^2+y^2-4(x+y)+8$.`,
    R`So $x^2+y^2=3+8+12-8=15$.`,
    R`The answer is $\textbf{(B)}\ 15$.`
  ],
  shortcut: R`For symmetric systems, subtracting kills the symmetric part and adding keeps it.`,
  traps: [R`Solving the quartic directly.`, R`Ignoring $x\ne y$ and getting $x=y$ solutions.`],
  recognize: R`Symmetric pairs of equations with $x\ne y$: subtract and factor out $x-y$.`
},

'2015A17': {
  answer: 'D',
  goal: R`A line through the origin, the vertical line $x=1$, and the line $y=1+\tfrac{\sqrt3}3x$ form an equilateral triangle. We want its perimeter. Angles decide which line through the origin works.`,
  tools: [
    { name: 'Angle of a line', fact: R`\text{slope }\tfrac{\sqrt3}3\Rightarrow30^\circ;\ \text{vertical}\Rightarrow90^\circ`, why: R`$\tan30^\circ=\tfrac{\sqrt3}{3}$.` },
    { name: 'Equilateral triangle angles', fact: R`\text{each pair of sides meets at }60^\circ`, why: R`All angles are $60^\circ$.` }
  ],
  approach: R`The given lines meet at $60^\circ$ ($90^\circ-30^\circ$). The third line must make $60^\circ$ with both: direction $150^\circ$, i.e. $y=-\tfrac{\sqrt3}3x$. Then one side lies on $x=1$ and its length is easy.`,
  steps: [
    { title: 'Find the third line',
      explain: R`Directions $90^\circ$ and $30^\circ$. A direction making $60^\circ$ with both is $150^\circ$: slope $\tan150^\circ=-\tfrac{\sqrt3}3$. It passes through the origin: $y=-\tfrac{\sqrt3}3x$.`,
      check: { q: R`What is $\tan150^\circ$?`, opts: [R`-\tfrac{\sqrt3}3`, R`\tfrac{\sqrt3}3`, R`-\sqrt3`, R`\sqrt3`], ans: 0, why: R`$-\tan30^\circ$.` } },
    { title: 'Side on $x=1$',
      explain: R`At $x=1$ the lines give $y=1+\tfrac{\sqrt3}3$ and $y=-\tfrac{\sqrt3}3$. The side length is $1+\tfrac{2\sqrt3}3$.`,
      check: { q: R`What is $\left(1+\tfrac{\sqrt3}3\right)-\left(-\tfrac{\sqrt3}3\right)$?`, opts: [R`1+\tfrac{2\sqrt3}3`, R`1`, R`\tfrac{2\sqrt3}3`, R`2`], ans: 0, why: R`Add.` } },
    { title: 'Perimeter',
      explain: R`$3\left(1+\tfrac{2\sqrt3}3\right)=3+2\sqrt3$.`,
      check: { q: R`What is $3\cdot\tfrac{2\sqrt3}{3}$?`, opts: [R`2\sqrt3`, R`6\sqrt3`, R`\sqrt3`, R`\tfrac{2\sqrt3}{9}`], ans: 0, why: R`Cancel $3$.` } }
  ],
  bridge: R`Find the third line by angles, then measure the side on $x=1$.`,
  solution: [
    R`The given lines have directions $90^\circ$ and $30^\circ$; the third must be at $150^\circ$: $y=-\tfrac{\sqrt3}3x$.`,
    R`On $x=1$ the triangle's side runs from $-\tfrac{\sqrt3}3$ to $1+\tfrac{\sqrt3}3$: length $1+\tfrac{2\sqrt3}3$.`,
    R`Perimeter $3+2\sqrt3$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`A vertical side makes the length a simple difference of $y$-values.`,
  traps: [R`Choosing $y=\sqrt3x$ (direction $60^\circ$): it makes only $30^\circ$ with each given line, so the triangle is not equilateral.`, R`Measuring a slanted side with only $y$-differences.`],
  recognize: R`Lines forming an equilateral triangle: think in directions; each pair must differ by $60^\circ$ (mod $180^\circ$).`
},

'2015A18': {
  answer: 'E',
  goal: R`Among $1$ to $1000$, count numbers whose base-$16$ form uses only the digits $0$–$9$. Convert $1000$ to hex to see how many hex digits we need.`,
  tools: [
    { name: 'Base conversion', fact: R`1000=3\cdot256+14\cdot16+8=3E8_{16}`, why: R`Repeated division by $16$.` },
    { name: 'Counting digit strings', fact: R`\text{first digit }0\text{–}3,\ \text{others }0\text{–}9`, why: R`$399_{16}=921<1000$, so every such string is in range.` }
  ],
  approach: R`$1000=3E8_{16}$, so numbers up to $1000$ have at most three hex digits with leading digit at most $3$. Any string $h_2h_1h_0$ with $h_2\in\{0..3\}$ and $h_1,h_0\in\{0..9\}$ is at most $399_{16}=921$, so all are in range. Count and remove zero.`,
  steps: [
    { title: 'Convert 1000',
      explain: R`$1000=3\cdot256+232$, and $232=14\cdot16+8$. So $1000=3E8_{16}$.`,
      check: { q: R`What is $100$ in base $16$?`, opts: [R`64_{16}`, R`46_{16}`, R`A0_{16}`, R`100_{16}`], ans: 0, why: R`$6\cdot16+4$.` } },
    { title: 'Count',
      explain: R`$4\cdot10\cdot10=400$ strings, all $\le399_{16}=921$. Remove $000$: $n=399$, digit sum $21$.`,
      check: { q: R`What is $399_{16}$ in decimal?`, opts: [R`921`, R`399`, R`1017`, R`873`], ans: 0, why: R`$768+144+9$.` } }
  ],
  bridge: R`Convert $1000$ to hex and count strings with digits $0$–$9$.`,
  solution: [
    R`$1000=3E8_{16}$.`,
    R`Valid numbers are $h_2h_1h_0$ with $h_2\le3$, $h_1,h_0\le9$, all at most $399_{16}=921<1000$.`,
    R`$4\cdot10\cdot10-1=399$.`,
    R`Digit sum of $399$ is $21$. The answer is $\textbf{(E)}\ 21$.`
  ],
  shortcut: R`Check the largest candidate ($399_{16}$) is below $1000$, so no partial counting is needed.`,
  traps: [R`Counting up to $3E8_{16}$ with letter digits.`, R`Forgetting to exclude $0$.`],
  recognize: R`"Only certain digits in base $b$": convert the bound to base $b$ and count digit strings.`
},

'2015A19': {
  answer: 'D',
  goal: R`An isosceles right triangle with area $12.5$ has its right angle trisected; the trisectors meet the hypotenuse at $D$ and $E$. We want $[CDE]$. Coordinates make each trisector a simple line.`,
  tools: [
    { name: 'Legs from area', fact: R`\tfrac12s^2=12.5\Rightarrow s=5`, why: R`Isosceles right triangle.` },
    { name: 'Trisector lines', fact: R`y=\tfrac{x}{\sqrt3}\ (30^\circ),\quad y=\sqrt3x\ (60^\circ)`, why: R`Rays at $30^\circ$ and $60^\circ$ from the right angle.` },
    { name: 'Rationalising', fact: R`\frac{1}{4+2\sqrt3}=\frac{4-2\sqrt3}{4}`, why: R`Multiply by the conjugate.` }
  ],
  approach: R`Put $C$ at the origin with legs on the axes, hypotenuse $x+y=5$. Find $D$ on the $30^\circ$ ray; $E$ is its mirror image in $y=x$. Then $[CDE]=\tfrac12|x_Dy_E-x_Ey_D|$.`,
  steps: [
    { title: 'Find $D$',
      explain: R`$x+\tfrac{x}{\sqrt3}=5$, so $x_D=\tfrac{5\sqrt3}{\sqrt3+1}$ and $y_D=\tfrac{x_D}{\sqrt3}$. By symmetry $E=(y_D,x_D)$.`,
      check: { q: R`On the line $x+y=5$, where does $y=x$ hit?`, opts: [R`(2.5,2.5)`, R`(5,5)`, R`(5,0)`, R`(1,4)`], ans: 0, why: R`$2x=5$.` } },
    { title: 'Area formula',
      explain: R`$[CDE]=\tfrac12|x_D\cdot x_D-y_D\cdot y_D|=\tfrac12x_D^2\left(1-\tfrac13\right)=\tfrac{x_D^2}{3}$.`,
      check: { q: R`For $C$ at the origin, $D=(p,q)$, $E=(q,p)$, what is $[CDE]$?`, opts: [R`\tfrac12|p^2-q^2|`, R`\tfrac12pq`, R`p^2+q^2`, R`|p-q|`], ans: 0, why: R`$\tfrac12|p\cdot p-q\cdot q|$.` } },
    { title: 'Compute',
      explain: R`$x_D^2=\tfrac{75}{4+2\sqrt3}=\tfrac{75(4-2\sqrt3)}{4}$. Dividing by $3$: $\tfrac{25(4-2\sqrt3)}{4}=\tfrac{50-25\sqrt3}{2}$.`,
      check: { q: R`What is $(\sqrt3+1)^2$?`, opts: [R`4+2\sqrt3`, R`4`, R`3+\sqrt3`, R`2+2\sqrt3`], ans: 0, why: R`$3+2\sqrt3+1$.` } }
  ],
  bridge: R`Coordinates with the hypotenuse $x+y=5$; intersect the $30^\circ$ ray and use symmetry.`,
  solution: [
    R`Legs $5$; hypotenuse $x+y=5$ with $C$ at the origin.`,
    R`$D$ is on $y=\tfrac{x}{\sqrt3}$: $x_D=\tfrac{5\sqrt3}{\sqrt3+1}$; $E$ is the mirror image.`,
    R`$[CDE]=\tfrac{x_D^2}3=\tfrac{25(4-2\sqrt3)}{4}=\tfrac{50-25\sqrt3}{2}$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`$[CDE]=[CAB]-2[CAD]$, with $[CAD]=\tfrac12\cdot5\cdot y_D$.`,
  traps: [R`Assuming $D,E$ trisect the hypotenuse.`, R`Rationalising incorrectly.`],
  recognize: R`Angle trisectors from a right angle: rays at $30^\circ$ and $60^\circ$; coordinates turn them into lines.`
},

'2015A20': {
  answer: 'B',
  goal: R`For a rectangle with integer sides $l,w$, which listed value cannot be $A+P=lw+2l+2w$? Adding $4$ makes it factor.`,
  tools: [
    { name: "Simon's factoring trick", fact: R`lw+2l+2w+4=(l+2)(w+2)`, why: R`Expand the right side.` },
    { name: 'Factor restrictions', fact: R`l+2\ge3,\ w+2\ge3`, why: R`Sides are positive integers.` }
  ],
  approach: R`$A+P+4=(l+2)(w+2)$, a product of two integers each at least $3$. Check which choice $+4$ cannot be written that way.`,
  steps: [
    { title: 'Factor',
      explain: R`$A+P=(l+2)(w+2)-4$.`,
      check: { q: R`For a $3\times5$ rectangle, what is $A+P$?`, opts: [R`31`, R`35`, R`15`, R`16`], ans: 0, why: R`$15+16$, and $5\cdot7-4=31$.` } },
    { title: 'Test the choices',
      explain: R`$104=8\cdot13$, $106=2\cdot53$, $108=4\cdot27$, $110=10\cdot11$, $112=4\cdot28$. Only $106$ has no factorisation into two factors both $\ge3$ ($53$ is prime). So $A+P=102$ is impossible.`,
      check: { q: R`Can $106$ be written as a product of two integers both at least $3$?`, opts: [R`\text{No}`, R`\text{Yes: }2\cdot53`, R`\text{Yes: }4\cdot26.5`, R`\text{Yes: }1\cdot106`], ans: 0, why: R`$106=2\cdot53$ only.` } }
  ],
  bridge: R`Write $A+P+4=(l+2)(w+2)$ and check factorisations.`,
  solution: [
    R`$A+P+4=(l+2)(w+2)$ with both factors $\ge3$.`,
    R`$102+4=106=2\cdot53$ has no such factorisation.`,
    R`The other choices do ($104,108,110,112$).`,
    R`The answer is $\textbf{(B)}\ 102$.`
  ],
  shortcut: R`Look for the choice where (choice $+4$) is $2\times$ prime.`,
  traps: [R`Allowing a side of length $0$.`, R`Checking $A+P$ instead of $A+P+4$.`],
  recognize: R`Expressions like $xy+ax+by$: add $ab$ to factor (Simon's trick), then reason about factor pairs.`
},

'2015A21': {
  answer: 'C',
  goal: R`Tetrahedron $ABCD$ has two faces that are $3$-$4$-$5$ right triangles sharing the hypotenuse $AB$, and a given $CD$. We want the volume. The key is that the two altitudes to $AB$ meet at the same point and are perpendicular.`,
  tools: [
    { name: 'Altitude to the hypotenuse', fact: R`h=\tfrac{3\cdot4}5=\tfrac{12}5,\quad\text{foot at }\tfrac{3^2}{5}=\tfrac95\text{ from }A`, why: R`Area two ways, and the leg squared equals hypotenuse times adjacent segment.` },
    { name: 'Converse of Pythagoras', fact: R`CH^2+DH^2=CD^2\Rightarrow\angle CHD=90^\circ`, why: R`$(\tfrac{12}5)^2\cdot2=(\tfrac{12}5\sqrt2)^2$.` },
    { name: 'Volume', fact: R`V=\tfrac13\cdot\text{base area}\cdot\text{height}`, why: R`Pyramid formula.` }
  ],
  approach: R`Both $ABC$ and $ABD$ are right triangles with legs $3,4$ on hypotenuse $AB=5$, so the feet of their altitudes to $AB$ coincide at $H$. With $CH=DH=\tfrac{12}5$ and $CD=\tfrac{12}5\sqrt2$, angle $CHD=90^\circ$. Then $CH$ is perpendicular to the whole plane $ABD$ and is the height.`,
  steps: [
    { title: 'Same foot',
      explain: R`In $ABC$ (right at $C$), the foot $H$ of the altitude from $C$ is $\tfrac{AC^2}{AB}=\tfrac95$ from $A$. In $ABD$ (right at $D$, $AD=3$), the foot is also $\tfrac95$ from $A$. So both altitudes meet $AB$ at $H$, each of length $\tfrac{12}5$.`,
      check: { q: R`In a right triangle with legs $6,8$, how far from the end of leg $6$ is the altitude's foot on the hypotenuse?`, opts: [R`3.6`, R`6.4`, R`4.8`, R`5`], ans: 0, why: R`$\tfrac{36}{10}$.` } },
    { title: 'Perpendicular altitudes',
      explain: R`$CH^2+DH^2=2\cdot\tfrac{144}{25}=\tfrac{288}{25}=CD^2$, so $\angle CHD=90^\circ$. $CH\perp AB$ and $CH\perp HD$, so $CH$ is perpendicular to plane $ABD$.`,
      check: { q: R`What is $\left(\tfrac{12}5\sqrt2\right)^2$?`, opts: [R`\tfrac{288}{25}`, R`\tfrac{144}{25}`, R`\tfrac{24}{5}`, R`\tfrac{576}{25}`], ans: 0, why: R`$\tfrac{144}{25}\cdot2$.` } },
    { title: 'Volume',
      explain: R`$V=\tfrac13\cdot[ABD]\cdot CH=\tfrac13\cdot6\cdot\tfrac{12}5=\tfrac{24}5$.`,
      check: { q: R`What is $\tfrac13\cdot6\cdot\tfrac{12}{5}$?`, opts: [R`\tfrac{24}5`, R`\tfrac{72}{5}`, R`\tfrac{12}5`, R`\tfrac{36}5`], ans: 0, why: R`$2\cdot\tfrac{12}{5}$.` } }
  ],
  bridge: R`Show the two altitudes to $AB$ share a foot and are perpendicular; use one as the height.`,
  solution: [
    R`$ABC$ and $ABD$ are $3$-$4$-$5$ right triangles on hypotenuse $AB$; their altitudes to $AB$ both have length $\tfrac{12}5$ and foot $H$ at $\tfrac95$ from $A$.`,
    R`$CH^2+DH^2=CD^2$, so $CH\perp DH$; with $CH\perp AB$, $CH$ is perpendicular to plane $ABD$.`,
    R`$V=\tfrac13\cdot6\cdot\tfrac{12}5=\tfrac{24}5$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{24}{5}$.`
  ],
  shortcut: R`The given $CD=\tfrac{12}5\sqrt2$ is exactly $\sqrt2$ times the altitude: a hint that the two altitudes are perpendicular.`,
  traps: [R`Assuming the faces are perpendicular without checking.`, R`Using $CD$ as the height.`],
  recognize: R`Tetrahedra built from known triangles: look for a point where two altitudes meet at a right angle; that altitude is the height.`
},

'2015A22': {
  answer: 'A',
  goal: R`Eight people around a table flip coins; we want the probability no two neighbours both get heads. Count circular arrangements of $8$ bits with no two adjacent $1$s, then divide by $2^8$.`,
  tools: [
    { name: 'Linear count (Fibonacci)', fact: R`\#\{\text{length-}n\text{ strings, no }11\}=F_{n+2}`, why: R`Condition on the first bit: $0$ then any valid $n-1$ string, or $10$ then any valid $n-2$ string.` },
    { name: 'Breaking the circle', fact: R`\text{Case on person 1}`, why: R`If person $1$ sits, the rest form a line; if person $1$ stands, both neighbours sit.` }
  ],
  approach: R`Fix person $1$. If tails, persons $2$–$8$ form a line of $7$ with no adjacent heads. If heads, persons $2$ and $8$ must be tails, and persons $3$–$7$ form a free line of $5$. Use the Fibonacci counts.`,
  steps: [
    { title: 'Linear counts',
      explain: R`Lines of length $1,2,3,\ldots$ have $2,3,5,8,13,21,34$ valid strings. So length $5$: $13$; length $7$: $34$.`,
      check: { q: R`How many length-$4$ strings have no two adjacent $1$s?`, opts: [R`8`, R`5`, R`7`, R`16`], ans: 0, why: R`$F_6=8$.` } },
    { title: 'Circle',
      explain: R`Person $1$ tails: $34$. Person $1$ heads: $13$. Total $47$. Probability $\tfrac{47}{256}$.`,
      check: { q: R`What is $34+13$?`, opts: [R`47`, R`45`, R`49`, R`51`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Case on person $1$ and use Fibonacci counts for the remaining lines.`,
  solution: [
    R`Person $1$ seated: the other $7$ form a line: $34$ ways.`,
    R`Person $1$ standing: persons $2$ and $8$ sit; persons $3$–$7$ form a line: $13$ ways.`,
    R`Total $47$ out of $256$.`,
    R`The answer is $\textbf{(A)}\ \tfrac{47}{256}$.`
  ],
  shortcut: R`The circular count is the Lucas number $L_8=47$.`,
  traps: [R`Using the linear count $F_{10}=55$ (forgets the circle).`, R`Forgetting the case where person $1$ stands.`],
  recognize: R`"No two adjacent" on a circle: break the circle by casework on one position, then use the linear Fibonacci count.`
},

'2015A23': {
  answer: 'C',
  goal: R`$x^2-ax+2a$ has integer roots; we sum all possible $a$. Vieta gives two equations in the roots; eliminating $a$ leaves a factorable equation.`,
  tools: [
    { name: 'Vieta', fact: R`r+s=a,\quad rs=2a`, why: R`For $x^2-ax+2a$.` },
    { name: "Simon's factoring trick", fact: R`rs-2r-2s=0\iff(r-2)(s-2)=4`, why: R`Add $4$ to both sides.` }
  ],
  approach: R`Eliminate $a$: $rs=2(r+s)$, which factors as $(r-2)(s-2)=4$. List integer factor pairs of $4$ (including negatives), find $(r,s)$, then $a=r+s$, and add distinct values.`,
  steps: [
    { title: 'Factor',
      explain: R`$rs=2(r+s)$ gives $(r-2)(s-2)=4$.`,
      check: { q: R`Expand $(r-2)(s-2)$.`, opts: [R`rs-2r-2s+4`, R`rs-4`, R`rs+2r+2s+4`, R`rs-2r-2s`], ans: 0, why: R`FOIL.` } },
    { title: 'Factor pairs',
      explain: R`$(1,4)\to(r,s)=(3,6)$, $a=9$. $(2,2)\to(4,4)$, $a=8$. $(-1,-4)\to(1,-2)$, $a=-1$. $(-2,-2)\to(0,0)$, $a=0$. Order does not change $a$.`,
      check: { q: R`If $r-2=-1$ and $s-2=-4$, what is $a=r+s$?`, opts: [R`-1`, R`-5`, R`3`, R`1`], ans: 0, why: R`$r=1$, $s=-2$.` } },
    { title: 'Sum',
      explain: R`$9+8-1+0=16$.`,
      check: { q: R`What is $9+8-1+0$?`, opts: [R`16`, R`17`, R`18`, R`15`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Use Vieta to get $(r-2)(s-2)=4$ and list factor pairs.`,
  solution: [
    R`Vieta: $r+s=a$, $rs=2a$, so $(r-2)(s-2)=4$.`,
    R`Factor pairs give $(r,s)=(3,6),(4,4),(1,-2),(0,0)$.`,
    R`$a=9,8,-1,0$; sum $16$.`,
    R`The answer is $\textbf{(C)}\ 16$.`
  ],
  shortcut: R`Don't forget negative factor pairs of $4$.`,
  traps: [R`Missing the negative pairs.`, R`Counting $a=9$ twice for $(3,6)$ and $(6,3)$.`],
  recognize: R`Integer roots with a parameter: Vieta plus Simon's trick to factor.`
},

'2015A24': {
  answer: 'B',
  goal: R`A quadrilateral with right angles at $B$ and $C$, $AB=2$, and $CD=AD$ has integer sides and perimeter $p<2015$. We count possible $p$. Drop a perpendicular to turn $CD=AD$ into a Pythagorean condition.`,
  tools: [
    { name: 'Right trapezoid', fact: R`AD^2=BC^2+(CD-AB)^2`, why: R`Drop a perpendicular from $A$ to $CD$; the horizontal leg is $BC$ and the vertical leg is $CD-2$.` },
    { name: 'Parity', fact: R`x^2=4y-4\Rightarrow x\text{ even}`, why: R`$x^2$ is a multiple of $4$.` }
  ],
  approach: R`Let $BC=x$, $CD=AD=y$. Pythagoras gives $x^2+(y-2)^2=y^2$, i.e. $x^2=4y-4$. So $x=2m$ and $y=m^2+1$. Write $p$ in terms of $m$ and count $m$.`,
  steps: [
    { title: 'Pythagoras',
      explain: R`$x^2+(y-2)^2=y^2$ gives $x^2=4y-4$. So $x=2m$ and $y=m^2+1$ for a positive integer $m$.`,
      check: { q: R`If $x=6$, what is $y$?`, opts: [R`10`, R`9`, R`8`, R`37`], ans: 0, why: R`$m=3$: $9+1$.` } },
    { title: 'Perimeter',
      explain: R`$p=2+x+2y=2+2m+2m^2+2=2m^2+2m+4$.`,
      check: { q: R`For $m=1$, what is $p$?`, opts: [R`8`, R`6`, R`10`, R`4`], ans: 0, why: R`$2+2+4$.` } },
    { title: 'Count',
      explain: R`$2m^2+2m+4<2015$ means $m(m+1)<1005.5$. $31\cdot32=992$ works; $32\cdot33=1056$ does not. So $m=1,\ldots,31$: $31$ values.`,
      check: { q: R`What is $31\cdot32$?`, opts: [R`992`, R`1024`, R`961`, R`1056`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Use Pythagoras to get $x=2m$, $y=m^2+1$, then bound $p$.`,
  solution: [
    R`With $BC=x$, $CD=AD=y$: $x^2+(y-2)^2=y^2$, so $x=2m$, $y=m^2+1$.`,
    R`$p=2m^2+2m+4$.`,
    R`$p<2015\iff m\le31$.`,
    R`$31$ values. The answer is $\textbf{(B)}\ 31$.`
  ],
  shortcut: R`Each $m$ gives a distinct $p$ since $p$ increases with $m$.`,
  traps: [R`Allowing odd $x$.`, R`Off-by-one at $m=31$ versus $32$.`],
  recognize: R`Right trapezoids with a slanted side equal to a base: drop a perpendicular and use Pythagoras; parity often forces a parametrisation.`
},

'2015A25': {
  answer: 'A',
  goal: R`Two random points on the boundary of a unit square; we want $P(\text{distance}\ge\tfrac12)$. By symmetry, put the first point on the bottom side and case on which side the second lands.`,
  tools: [
    { name: 'Symmetry', fact: R`\text{First point on the bottom side, }(x,0),\ x\sim U[0,1]`, why: R`All four sides are alike.` },
    { name: 'Probability as area', fact: R`P=\text{area in the unit square of parameters}`, why: R`Two uniform parameters on a side give a uniform point in $[0,1]^2$.` },
    { name: 'Quarter disc', fact: R`x^2+v^2<\tfrac14\text{ has area }\tfrac{\pi}{16}\text{ in }[0,1]^2`, why: R`A quarter of a disc of radius $\tfrac12$.` }
  ],
  approach: R`Second point on the same side, the opposite side, or one of the two adjacent sides (each probability $\tfrac14$). Compute the conditional probability in each case and average.`,
  steps: [
    { title: 'Same side',
      explain: R`$P(|x-u|\ge\tfrac12)=\tfrac14$ (two corner triangles of area $\tfrac18$).`,
      check: { q: R`For $x,u$ uniform on $[0,1]$, what is $P(|x-u|\ge\tfrac12)$?`, opts: [R`\tfrac14`, R`\tfrac12`, R`\tfrac34`, R`\tfrac18`], ans: 0, why: R`Two triangles with legs $\tfrac12$.` } },
    { title: 'Opposite and adjacent sides',
      explain: R`Opposite side: distance $\ge1$, probability $1$. Adjacent side, e.g. $(0,v)$: distance$^2=x^2+v^2$; it is less than $\tfrac14$ on a quarter disc of area $\tfrac\pi{16}$, so probability $1-\tfrac\pi{16}$.`,
      check: { q: R`What is the area of a quarter disc of radius $\tfrac12$?`, opts: [R`\tfrac{\pi}{16}`, R`\tfrac\pi4`, R`\tfrac\pi8`, R`\tfrac{\pi}{2}`], ans: 0, why: R`$\tfrac14\pi\cdot\tfrac14$.` } },
    { title: 'Average',
      explain: R`$\tfrac14\left(\tfrac14+1+2\left(1-\tfrac\pi{16}\right)\right)=\tfrac{13}{16}-\tfrac{\pi}{32}=\tfrac{26-\pi}{32}$. So $a+b+c=26+1+32=59$.`,
      check: { q: R`What is $\tfrac14\left(\tfrac{13}4-\tfrac{\pi}8\right)$?`, opts: [R`\tfrac{26-\pi}{32}`, R`\tfrac{13-\pi}{16}`, R`\tfrac{26-\pi}{16}`, R`\tfrac{13-\pi}{32}`], ans: 0, why: R`$\tfrac{13}{16}-\tfrac{\pi}{32}$.` } }
  ],
  bridge: R`Fix the first point on one side and average over the four sides for the second.`,
  solution: [
    R`Put the first point on the bottom side.`,
    R`Same side: $\tfrac14$. Opposite: $1$. Each adjacent side: $1-\tfrac{\pi}{16}$.`,
    R`Average: $\tfrac14\left(\tfrac14+1+2-\tfrac\pi8\right)=\tfrac{26-\pi}{32}$.`,
    R`$a+b+c=59$. The answer is $\textbf{(A)}\ 59$.`
  ],
  shortcut: R`Only the adjacent-side case involves $\pi$; the rest are simple.`,
  traps: [R`Forgetting the factor $2$ for two adjacent sides.`, R`Using a full disc instead of a quarter.`],
  recognize: R`Random points on a polygon's boundary: fix one side by symmetry and case on the other point's side; each case is an area problem.`
}

};
