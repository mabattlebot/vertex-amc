// Hand-written lessons: 2019 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2019A16': {
  answer: 'A',
  goal: R`Thirteen unit circles are packed inside a big circle, all touching where they meet. We need the area inside the big circle but outside the small ones: big area minus $13\pi$. Everything comes down to the big circle's radius.`,
  tools: [
    { name: 'Centres of tangent circles', fact: R`\text{Tangent unit circles have centres }2\text{ apart.}`, why: R`The distance between centres is the sum of the radii.` },
    { name: 'Hexagonal packing', fact: R`\text{Centres form equilateral triangles of side }2`, why: R`Three mutually tangent unit circles have centres forming an equilateral triangle.` },
    { name: 'Height of an equilateral triangle', fact: R`h=\tfrac{\sqrt3}{2}s`, why: R`Split it into two $30$-$60$-$90$ triangles.` }
  ],
  approach: R`Find the small circle whose centre is farthest from the middle; the big circle touches it, so the big radius is that distance plus $1$. In the hexagonal arrangement the outer six circles sit in the gaps of the first ring, and their centres are at distance $2\sqrt3$ from the centre.`,
  steps: [
    { title: 'Locate the outer centres',
      explain: R`The middle circle is surrounded by six circles whose centres are $2$ from the middle, forming a regular hexagon of side $2$. Each outer circle touches two neighbouring circles of that ring, so its centre is the far vertex of an equilateral triangle of side $2$ built on a hexagon side. Its distance from the middle is twice the height of an equilateral triangle of side $2$: $2\cdot\sqrt3=2\sqrt3$.`,
      check: { q: R`What is the height of an equilateral triangle with side $2$?`, opts: [R`\sqrt3`, R`2\sqrt3`, R`1`, R`\tfrac{\sqrt3}{2}`], ans: 0, why: R`$\tfrac{\sqrt3}2\cdot2=\sqrt3$.` } },
    { title: 'Big radius and area',
      explain: R`The big circle touches the outer circles, so its radius is $2\sqrt3+1$ and its area is $\pi(2\sqrt3+1)^2=\pi(13+4\sqrt3)$.`,
      check: { q: R`Expand $(2\sqrt3+1)^2$.`, opts: [R`13+4\sqrt3`, R`12+4\sqrt3`, R`13+2\sqrt3`, R`7+4\sqrt3`], ans: 0, why: R`$12+4\sqrt3+1$.` } },
    { title: 'Subtract the small circles',
      explain: R`The shaded area is $\pi(13+4\sqrt3)-13\pi=4\pi\sqrt3$.`,
      check: { q: R`What is $\pi(13+4\sqrt3)-13\pi$?`, opts: [R`4\pi\sqrt3`, R`13\pi`, R`4\sqrt3`, R`\pi(4\sqrt3-13)`], ans: 0, why: R`The $13\pi$ cancels.` } }
  ],
  bridge: R`Find the distance to the farthest small centre, add $1$, and subtract $13\pi$ from the big area.`,
  solution: [
    R`The six inner-ring centres form a hexagon of side $2$ around the middle centre.`,
    R`Each outer centre is the apex of an equilateral triangle of side $2$ on a hexagon side, at distance $2\sqrt3$ from the middle.`,
    R`So the big radius is $2\sqrt3+1$ and its area is $\pi(13+4\sqrt3)$.`,
    R`Shaded area $=\pi(13+4\sqrt3)-13\pi=4\pi\sqrt3$. The answer is $\textbf{(A)}\ 4\pi\sqrt3$.`
  ],
  shortcut: R`Once you see the outer centres at $2\sqrt3$, the $13\pi$ from the small circles cancels the $13\pi$ in the expansion.`,
  traps: [R`Taking the big radius as $3$ or $4$ (stacking circles in a straight line).`, R`Forgetting to add the small radius $1$ to the centre distance.`],
  recognize: R`Packings of equal circles: connect centres to get triangles and hexagons with side $2r$; the bounding circle's radius is the farthest centre distance plus $r$.`
},

'2019A17': {
  answer: 'D',
  goal: R`We build towers of $8$ cubes using at most $2$ red, $3$ blue and $4$ green cubes, so exactly one cube is left out. We count distinct colour sequences of length $8$.`,
  tools: [
    { name: 'Arrangements with repeats', fact: R`\frac{n!}{a!\,b!\,c!}`, why: R`Swapping identical cubes gives the same tower, so divide out those swaps.` },
    { name: 'A bijection with a longer object', fact: R`\text{8-tower}\ \longleftrightarrow\ \text{9-tower (add the leftover cube on top)}`, why: R`Each $8$-tower plus its unique leftover cube on top gives a $9$-tower, and removing the top cube of a $9$-tower gives back the $8$-tower.` }
  ],
  approach: R`Casework on which colour is left out works, but there is a cleaner view: put the leftover cube on top. Every $8$-cube tower becomes exactly one $9$-cube tower using all cubes, and vice versa. So count arrangements of all $9$ cubes.`,
  steps: [
    { title: 'See the correspondence',
      explain: R`Given an $8$-tower, exactly one cube remains, and its colour is determined. Put it on top to make a $9$-tower. Conversely, removing the top cube of any $9$-tower gives a valid $8$-tower. This pairs the two kinds of towers one to one.`,
      check: { q: R`With $1$ red and $2$ blue cubes, how many $2$-cube towers are there?`, opts: [R`3`, R`2`, R`4`, R`6`], ans: 0, why: R`$RB, BR, BB$; matches $\tfrac{3!}{1!2!}=3$ three-cube towers.` } },
    { title: 'Count the $9$-towers',
      explain: R`Arranging $2$ red, $3$ blue, $4$ green in a row: $\dfrac{9!}{2!\,3!\,4!}=\dfrac{362880}{2\cdot6\cdot24}=1260$.`,
      check: { q: R`What is $\dfrac{6!}{2!\,2!\,2!}$?`, opts: [R`90`, R`720`, R`120`, R`45`], ans: 0, why: R`$720/8=90$.` } },
    { title: 'Check by casework',
      explain: R`Leaving out red: $\tfrac{8!}{1!3!4!}=280$; blue: $\tfrac{8!}{2!2!4!}=420$; green: $\tfrac{8!}{2!3!3!}=560$. Total $1260$, as expected.`,
      check: { q: R`What is $280+420+560$?`, opts: [R`1260`, R`1160`, R`1360`, R`1240`], ans: 0, why: R`Direct addition.` } }
  ],
  bridge: R`Put the leftover cube on top and count arrangements of all nine cubes.`,
  solution: [
    R`Adding the unused cube on top turns each $8$-tower into a unique $9$-tower using all cubes, and removing the top cube reverses this.`,
    R`So the count equals the number of arrangements of $2$ red, $3$ blue, $4$ green cubes.`,
    R`$\tfrac{9!}{2!3!4!}=1260$.`,
    R`The answer is $\textbf{(D)}\ 1260$.`
  ],
  shortcut: R`Remember the trick: "use all but one" arrangements equal arrangements of all of them.`,
  traps: [R`Using $8!$ divided by the factorials of the original counts (not valid, since one cube is missing).`, R`Forgetting that the colour left out can be any of the three.`],
  recognize: R`Arrangements that use all but one of a multiset: append the leftover item to make a full arrangement. Bijections often turn messy casework into one formula.`
},

'2019A18': {
  answer: 'D',
  goal: R`In base $k$, the repeating expansion $0.\overline{23}_k$ equals $\tfrac7{51}$. We convert the repeating base-$k$ number into a fraction in $k$ and solve.`,
  tools: [
    { name: 'Repeating expansion as a fraction', fact: R`0.\overline{ab}_k=\frac{a k+b}{k^2-1}`, why: R`Multiply $x=0.\overline{ab}_k$ by $k^2$: $k^2x=ab.\overline{ab}_k$, subtract to get $(k^2-1)x=ak+b$.` },
    { name: 'Factoring the quadratic', fact: R`7k^2-102k-160=0`, why: R`Cross-multiplying gives a quadratic with an integer root.` }
  ],
  approach: R`Turn the repeating number into a fraction exactly as in base ten: shifting by two places multiplies by $k^2$. Set it equal to $\tfrac7{51}$ and solve the quadratic, keeping the positive integer root (and $k>3$ since digit $3$ appears).`,
  steps: [
    { title: 'Convert the repeating number',
      explain: R`Let $x=0.\overline{23}_k$. Then $k^2x=23.\overline{23}_k$, so $k^2x-x=2k+3$ and $x=\dfrac{2k+3}{k^2-1}$.`,
      check: { q: R`What is $0.\overline{12}_{10}$ as a fraction?`, opts: [R`\tfrac{12}{99}`, R`\tfrac{12}{100}`, R`\tfrac{1}{12}`, R`\tfrac{12}{90}`], ans: 0, why: R`$\tfrac{10+2}{10^2-1}$.` } },
    { title: 'Set up the equation',
      explain: R`$\dfrac{2k+3}{k^2-1}=\dfrac7{51}$ gives $51(2k+3)=7(k^2-1)$, i.e. $7k^2-102k-160=0$.`,
      check: { q: R`Cross-multiply $\tfrac{a}{b}=\tfrac{c}{d}$.`, opts: [R`ad=bc`, R`ab=cd`, R`ac=bd`, R`a+d=b+c`], ans: 0, why: R`Multiply both sides by $bd$.` } },
    { title: 'Solve',
      explain: R`The discriminant is $102^2+4\cdot7\cdot160=10404+4480=14884=122^2$. So $k=\tfrac{102\pm122}{14}$, and the positive root is $\tfrac{224}{14}=16$. Check: $\tfrac{35}{255}=\tfrac7{51}$.`,
      check: { q: R`What is $\sqrt{14884}$?`, opts: [R`122`, R`121`, R`124`, R`118`], ans: 0, why: R`$122^2=14884$.` } }
  ],
  bridge: R`Write $0.\overline{23}_k=\tfrac{2k+3}{k^2-1}$, set it equal to $\tfrac7{51}$, and solve.`,
  solution: [
    R`$0.\overline{23}_k=\tfrac{2k+3}{k^2-1}$ (multiply by $k^2$ and subtract).`,
    R`$\tfrac{2k+3}{k^2-1}=\tfrac7{51}$ gives $7k^2-102k-160=0$.`,
    R`$k=\tfrac{102+122}{14}=16$ (the other root is negative).`,
    R`The answer is $\textbf{(D)}\ 16$.`
  ],
  shortcut: R`Test the choices: $k^2-1$ must make $\tfrac{2k+3}{k^2-1}$ reduce to sevenths over $51=3\cdot17$; $k=16$ gives $\tfrac{35}{255}$ immediately.`,
  traps: [R`Dividing by $k^2$ instead of $k^2-1$.`, R`Reading $23_k$ as twenty-three instead of $2k+3$.`],
  recognize: R`Repeating expansions in any base convert like repeating decimals: shift by the period length and subtract.`
},

'2019A19': {
  answer: 'B',
  goal: R`We minimise $(x+1)(x+2)(x+3)(x+4)+2019$ over real $x$. A degree-$4$ product looks hard, but pairing factors turns it into a quadratic in a new variable.`,
  tools: [
    { name: 'Pair outer and inner factors', fact: R`(x+1)(x+4)=x^2+5x+4,\quad(x+2)(x+3)=x^2+5x+6`, why: R`Both pairs have the same $x^2+5x$ part, so a single substitution handles both.` },
    { name: 'Difference of squares', fact: R`(u-1)(u+1)=u^2-1`, why: R`Centre the substitution between the two pairs.` },
    { name: 'Minimum of a square', fact: R`u^2\ge0,\ \text{with equality at }u=0`, why: R`Squares are never negative.` }
  ],
  approach: R`Do not expand the product. Notice that the factors are symmetric about $-2.5$, so pair the outer two and the inner two: both become $x^2+5x+\text{constant}$. Substitute $u=x^2+5x+5$ (the average of the two pairs) and the product becomes $u^2-1$.`,
  steps: [
    { title: 'Pair the factors',
      explain: R`$(x+1)(x+4)=x^2+5x+4$ and $(x+2)(x+3)=x^2+5x+6$. Let $u=x^2+5x+5$; then the product is $(u-1)(u+1)=u^2-1$.`,
      check: { q: R`What is $(x+1)(x+3)$ paired with $(x+2)^2$ in terms of $v=x^2+4x$?`, opts: [R`(v+3)(v+4)`, R`(v+1)(v+2)`, R`(v+3)(v+2)`, R`v^2`], ans: 0, why: R`$x^2+4x+3$ and $x^2+4x+4$.` } },
    { title: 'Minimise',
      explain: R`$u^2-1\ge-1$, with equality when $u=0$. We need $x^2+5x+5=0$ to have real solutions: its discriminant is $25-20=5>0$, so yes.`,
      check: { q: R`Does $x^2+5x+5=0$ have real roots?`, opts: [R`\text{Yes, discriminant }5`, R`\text{No, discriminant }-5`, R`\text{Only }x=0`, R`\text{Yes, discriminant }45`], ans: 0, why: R`$5^2-4\cdot5=5$.` } },
    { title: 'Add the constant',
      explain: R`The least value of the expression is $-1+2019=2018$.`,
      check: { q: R`If the minimum of $f$ is $-1$, what is the minimum of $f+2019$?`, opts: [R`2018`, R`2019`, R`2020`, R`-2019`], ans: 0, why: R`Adding a constant shifts the minimum.` } }
  ],
  bridge: R`Pair the factors into $(u-1)(u+1)$ and minimise $u^2-1$.`,
  solution: [
    R`$(x+1)(x+4)(x+2)(x+3)=(x^2+5x+4)(x^2+5x+6)$.`,
    R`With $u=x^2+5x+5$ this is $u^2-1\ge-1$.`,
    R`$u=0$ is achievable since $x^2+5x+5=0$ has real roots.`,
    R`Minimum $=-1+2019=2018$. The answer is $\textbf{(B)}\ 2018$.`
  ],
  shortcut: R`For four equally spaced linear factors, pair the outer and inner ones and centre the substitution; the minimum of the product is always $-1\cdot(\text{spacing})^4$ here.`,
  traps: [R`Plugging in $x=-2.5$ (the centre): that gives $\tfrac{9}{16}$, not the minimum.`, R`Expanding to a quartic and trying calculus.`],
  recognize: R`Products of evenly spaced factors: pair them symmetrically so a common quadratic appears, then substitute.`
},

'2019A20': {
  answer: 'B',
  goal: R`Placing $1$–$9$ in a $3\times3$ grid at random, we want the probability that every row sum and every column sum is odd. Only which cells hold odd numbers matters.`,
  tools: [
    { name: 'Parity of a sum', fact: R`\text{A sum is odd}\iff\text{it has an odd number of odd terms}`, why: R`Even terms do not change parity; each odd term flips it.` },
    { name: 'Counting positions', fact: R`\binom95=126\text{ equally likely sets of cells for the }5\text{ odd numbers}`, why: R`By symmetry each choice of $5$ cells for the odds is equally likely.` }
  ],
  approach: R`Forget the actual numbers: there are $5$ odd numbers ($1,3,5,7,9$) and $4$ even ones. A row sum is odd iff the row contains $1$ or $3$ odd numbers. Find all placements of the $5$ odds that make every row and column have an odd count, and divide by $\binom95$.`,
  steps: [
    { title: 'Row counts',
      explain: R`Each row has $1$ or $3$ odds, and the three rows total $5$. The only option is $3+1+1$ in some order. Same for columns.`,
      check: { q: R`Three odd numbers from $\{1,3\}$ add to $5$. Which multiset works?`, opts: [R`\{3,1,1\}`, R`\{1,1,1\}`, R`\{3,3,1\}`, R`\{3,1,3\}`], ans: 0, why: R`$3+1+1=5$; the others sum to $3$ or $7$.` } },
    { title: 'The pattern',
      explain: R`One row is all odd and one column is all odd. That is already $3+3-1=5$ cells (they share one cell), using all five odds. The other cells are even, and each row and column then has $1$ or $3$ odds. So the odds form a "cross" of a full row and a full column: $3\cdot3=9$ patterns.`,
      check: { q: R`How many cells are in a full row together with a full column of a $3\times3$ grid?`, opts: [R`5`, R`6`, R`4`, R`9`], ans: 0, why: R`$3+3-1$, since they overlap in one cell.` } },
    { title: 'Probability',
      explain: R`$\dfrac{9}{\binom95}=\dfrac9{126}=\dfrac1{14}$.`,
      check: { q: R`What is $\binom95$?`, opts: [R`126`, R`84`, R`252`, R`120`], ans: 0, why: R`$\tfrac{9\cdot8\cdot7\cdot6}{24}=126$.` } }
  ],
  bridge: R`Reduce to placing $5$ odd numbers; find the cross patterns and divide by $\binom95$.`,
  solution: [
    R`Only parity matters; the $5$ odd numbers occupy a uniformly random set of $5$ cells.`,
    R`Each row and column needs an odd number of odds, so the counts are $3,1,1$ for rows and for columns.`,
    R`That forces one full row and one full column of odds: $3\cdot3=9$ patterns.`,
    R`Probability $\tfrac9{126}=\tfrac1{14}$. The answer is $\textbf{(B)}\ \tfrac1{14}$.`
  ],
  shortcut: R`Probability problems about sums being odd or even: replace numbers by parities and count patterns.`,
  traps: [R`Counting arrangements of all $9!$ numbers without noticing the parities are what matter (fine, but much longer).`, R`Missing that the full row and column overlap in one cell.`],
  recognize: R`Conditions on parity of row and column sums reduce to placing the odd entries; small grids then allow a direct pattern count.`
},

'2019A21': {
  answer: 'D',
  goal: R`A triangle with sides $15,15,24$ has all three sides tangent to a sphere of radius $6$. We want the distance from the sphere's centre to the triangle's plane.`,
  tools: [
    { name: 'Plane section of a sphere', fact: R`\text{A plane at distance }h\text{ from the centre cuts a circle of radius }\sqrt{R^2-h^2}`, why: R`Pythagoras on the radius to any point of the circle.` },
    { name: 'The incircle', fact: R`\text{The circle tangent to all three sides in the triangle's plane is the incircle.}`, why: R`The sphere touches each side at one point, and those points lie on the circle where the sphere meets the plane.` },
    { name: 'Inradius', fact: R`r=\frac{\text{Area}}{s}`, why: R`Split the triangle into three triangles from the incentre, each with height $r$.` }
  ],
  approach: R`The sphere meets the triangle's plane in a circle, and that circle touches all three sides, so it is the incircle. Find the inradius from area and semiperimeter, then use Pythagoras with the sphere's radius.`,
  steps: [
    { title: 'Area and semiperimeter',
      explain: R`The isosceles triangle with base $24$ has height $\sqrt{15^2-12^2}=9$, so area $\tfrac12\cdot24\cdot9=108$. The semiperimeter is $\tfrac{15+15+24}2=27$.`,
      check: { q: R`What is the height to the base of a triangle with sides $10,10,12$?`, opts: [R`8`, R`6`, R`\sqrt{136}`, R`10`], ans: 0, why: R`$\sqrt{100-36}=8$.` } },
    { title: 'Inradius',
      explain: R`$r=\tfrac{108}{27}=4$. This is the radius of the circle in which the sphere meets the plane.`,
      check: { q: R`A triangle has area $24$ and semiperimeter $12$. What is its inradius?`, opts: [R`2`, R`3`, R`4`, R`6`], ans: 0, why: R`$24/12$.` } },
    { title: 'Distance to the plane',
      explain: R`By Pythagoras, $h=\sqrt{6^2-4^2}=\sqrt{20}=2\sqrt5$.`,
      check: { q: R`A sphere of radius $5$ meets a plane in a circle of radius $3$. How far is the plane from the centre?`, opts: [R`4`, R`2`, R`\sqrt{34}`, R`8`], ans: 0, why: R`$\sqrt{25-9}=4$.` } }
  ],
  bridge: R`The sphere cuts the plane in the incircle; find its radius and use Pythagoras.`,
  solution: [
    R`The triangle has height $9$ on base $24$: area $108$, semiperimeter $27$.`,
    R`Its inradius is $\tfrac{108}{27}=4$.`,
    R`The sphere meets the plane in a circle tangent to all three sides, which is the incircle, radius $4$.`,
    R`Distance $=\sqrt{6^2-4^2}=2\sqrt5$. The answer is $\textbf{(D)}\ 2\sqrt5$.`
  ],
  shortcut: R`$15$-$15$-$24$ is two $9$-$12$-$15$ right triangles glued together, so the area is immediate.`,
  traps: [R`Using the circumradius instead of the inradius.`, R`Answering $4$ (the inradius) instead of the distance.`],
  recognize: R`A sphere tangent to a polygon's sides: its intersection with the plane is the polygon's incircle. Then sphere radius, circle radius and distance form a right triangle.`
},

'2019A22': {
  answer: 'B',
  goal: R`Each of $x,y$ is $0$ with probability $\tfrac14$, $1$ with probability $\tfrac14$, or uniform on $[0,1]$ with probability $\tfrac12$. We want $P(|x-y|>\tfrac12)$. Split by what kind each number is.`,
  tools: [
    { name: 'Law of total probability', fact: R`P(E)=\sum P(E\mid\text{case})\,P(\text{case})`, why: R`The cases (endpoint/endpoint, endpoint/uniform, uniform/uniform) cover everything without overlap.` },
    { name: 'Probability as area', fact: R`P(|x-y|>\tfrac12)\text{ for two uniforms}=\tfrac14`, why: R`In the unit square the region is two corner triangles with legs $\tfrac12$, total area $2\cdot\tfrac18$.` }
  ],
  approach: R`Each number is "$0$", "$1$" or "uniform". List the type combinations with their probabilities, find the conditional probability of $|x-y|>\tfrac12$ for each, and add.`,
  steps: [
    { title: 'Both endpoints',
      explain: R`$|x-y|>\tfrac12$ only if one is $0$ and the other is $1$: probability $2\cdot\tfrac14\cdot\tfrac14=\tfrac18$. (Both $0$ or both $1$ gives difference $0$.)`,
      check: { q: R`What is $P(x=0\text{ and }y=1)$?`, opts: [R`\tfrac1{16}`, R`\tfrac18`, R`\tfrac14`, R`\tfrac12`], ans: 0, why: R`$\tfrac14\cdot\tfrac14$.` } },
    { title: 'One endpoint, one uniform',
      explain: R`This happens with probability $2\cdot\tfrac12\cdot\tfrac12=\tfrac12$. If the endpoint is $0$, we need the uniform number $>\tfrac12$: probability $\tfrac12$; similarly for $1$. Contribution $\tfrac12\cdot\tfrac12=\tfrac14$.`,
      check: { q: R`If $x=0$ and $y$ is uniform on $[0,1]$, what is $P(|x-y|>\tfrac12)$?`, opts: [R`\tfrac12`, R`\tfrac14`, R`1`, R`0`], ans: 0, why: R`Need $y>\tfrac12$.` } },
    { title: 'Both uniform',
      explain: R`Probability $\tfrac14$ that both are uniform; then $P(|x-y|>\tfrac12)=\tfrac14$ (two corner triangles of the unit square). Contribution $\tfrac1{16}$. Total $\tfrac18+\tfrac14+\tfrac1{16}=\tfrac{7}{16}$.`,
      check: { q: R`What is $\tfrac18+\tfrac14+\tfrac1{16}$?`, opts: [R`\tfrac7{16}`, R`\tfrac38`, R`\tfrac12`, R`\tfrac5{16}`], ans: 0, why: R`$\tfrac{2+4+1}{16}$.` } }
  ],
  bridge: R`Split by the type of each number, find each conditional probability, and add.`,
  solution: [
    R`Each number is $0$ (prob $\tfrac14$), $1$ (prob $\tfrac14$) or uniform (prob $\tfrac12$).`,
    R`One $0$ and one $1$: probability $\tfrac18$, always works.`,
    R`One endpoint and one uniform: probability $\tfrac12$, works half the time: $\tfrac14$.`,
    R`Both uniform: probability $\tfrac14$, works $\tfrac14$ of the time: $\tfrac1{16}$.`,
    R`Total $\tfrac7{16}$. The answer is $\textbf{(B)}\ \tfrac7{16}$.`
  ],
  shortcut: R`Draw the unit square once for the uniform–uniform case: the region $|x-y|>\tfrac12$ is two triangles of area $\tfrac18$.`,
  traps: [R`Treating the endpoint cases as continuous (they have positive probability).`, R`Forgetting the factor $2$ for which of $x,y$ is the endpoint.`],
  recognize: R`Mixed discrete/continuous random variables: condition on the type, use counting for the discrete parts and area for the continuous parts.`
},

'2019A23': {
  answer: 'C',
  goal: R`The children say $1,2,3,\ldots$ in turns of lengths $1,2,3,\ldots$, rotating Tadd, Todd, Tucker. We want the $2019$th number Tadd says. Tadd speaks on turns $1,4,7,\ldots$, saying $1,4,7,\ldots$ numbers.`,
  tools: [
    { name: 'Arithmetic series', fact: R`1+4+7+\cdots+(3m-2)=\frac{m(3m-1)}{2}`, why: R`Average of first and last term times the number of terms.` },
    { name: 'Triangular numbers', fact: R`1+2+\cdots+t=\frac{t(t+1)}2`, why: R`After $t$ turns in total, the last number said is $\tfrac{t(t+1)}2$.` }
  ],
  approach: R`Count how many numbers Tadd has said after his $m$th turn. Find which of Tadd's turns contains his $2019$th number. Then find where that turn ends overall and count back.`,
  steps: [
    { title: 'Tadd\'s running total',
      explain: R`Tadd's $m$th turn is overall turn $3m-2$, of length $3m-2$. After $m$ turns he has said $\tfrac{m(3m-1)}2$ numbers. For $m=36$: $\tfrac{36\cdot107}{2}=1926$; for $m=37$: $\tfrac{37\cdot110}2=2035$. So the $2019$th is in his $37$th turn.`,
      check: { q: R`What is $1+4+7+10$?`, opts: [R`22`, R`20`, R`24`, R`18`], ans: 0, why: R`$\tfrac{4\cdot11}{2}=22$.` } },
    { title: 'Where that turn ends',
      explain: R`Tadd's $37$th turn is overall turn $3\cdot37-2=109$. After $109$ turns the last number said is $\tfrac{109\cdot110}2=5995$. So Tadd's $2035$th number is $5995$.`,
      check: { q: R`After $10$ turns in total, what is the last number said?`, opts: [R`55`, R`45`, R`50`, R`100`], ans: 0, why: R`$\tfrac{10\cdot11}2$.` } },
    { title: 'Count back',
      explain: R`The $2019$th is $2035-2019=16$ numbers earlier within the same turn: $5995-16=5979$.`,
      check: { q: R`If the $50$th item is $300$ and items are consecutive, what is the $45$th?`, opts: [R`295`, R`305`, R`245`, R`290`], ans: 0, why: R`Five back.` } }
  ],
  bridge: R`Find which of Tadd's turns contains his $2019$th number, where that turn ends, and count back.`,
  solution: [
    R`After $m$ turns Tadd has said $\tfrac{m(3m-1)}2$ numbers; $m=37$ gives $2035\ge2019>1926$.`,
    R`His $37$th turn is turn $109$ overall, ending at $\tfrac{109\cdot110}2=5995$.`,
    R`His $2019$th number is $5995-(2035-2019)=5979$.`,
    R`The answer is $\textbf{(C)}\ 5979$.`
  ],
  shortcut: R`Estimate $\tfrac{3m^2}{2}\approx2019$ to get $m\approx37$ directly.`,
  traps: [R`Off-by-one when counting back within the turn.`, R`Using Tadd's turn number $37$ instead of the overall turn $109$ for the triangular number.`],
  recognize: R`"The $N$th item said by a player" in a growing-turn game: sum the player's turn lengths to locate the turn, then use the global count to find the value.`
},

'2019A24': {
  answer: 'B',
  goal: R`$\tfrac1{f(s)}$ for the cubic $f$ with roots $p,q,r$ is split into partial fractions $\tfrac{A}{s-p}+\cdots$. We need $\tfrac1A+\tfrac1B+\tfrac1C$. Find each coefficient in terms of the roots, then use Vieta.`,
  tools: [
    { name: 'Cover-up rule for partial fractions', fact: R`A=\frac{1}{(p-q)(p-r)}`, why: R`Multiply by $s-p$ and let $s\to p$: the other terms vanish and $\tfrac{s-p}{f(s)}\to\tfrac1{(p-q)(p-r)}$.` },
    { name: 'Vieta for a cubic', fact: R`p+q+r=22,\quad pq+qr+rp=80`, why: R`For $x^3-ax^2+bx-c$ the roots satisfy $\sum p=a$, $\sum pq=b$.` },
    { name: 'Symmetric expression', fact: R`p^2+q^2+r^2-(pq+qr+rp)=(p+q+r)^2-3(pq+qr+rp)`, why: R`Expand $(p+q+r)^2=\sum p^2+2\sum pq$.` }
  ],
  approach: R`You never need the actual roots. Use the cover-up rule to write $\tfrac1A=(p-q)(p-r)$ and similarly for $B$ and $C$. Add the three, simplify into a symmetric expression, and evaluate with Vieta.`,
  steps: [
    { title: 'Find $\tfrac1A$',
      explain: R`$f(s)=(s-p)(s-q)(s-r)$. Multiply the identity by $s-p$ and set $s=p$: $A=\tfrac1{(p-q)(p-r)}$, so $\tfrac1A=(p-q)(p-r)$. Similarly $\tfrac1B=(q-p)(q-r)$ and $\tfrac1C=(r-p)(r-q)$.`,
      check: { q: R`For $\tfrac{1}{(s-1)(s-3)}=\tfrac{A}{s-1}+\tfrac{B}{s-3}$, what is $A$?`, opts: [R`-\tfrac12`, R`\tfrac12`, R`1`, R`-1`], ans: 0, why: R`Cover-up at $s=1$: $\tfrac1{1-3}$.` } },
    { title: 'Add and simplify',
      explain: R`Expanding, $(p-q)(p-r)+(q-p)(q-r)+(r-p)(r-q)=p^2+q^2+r^2-pq-qr-rp$.`,
      check: { q: R`Expand $(p-q)(p-r)$.`, opts: [R`p^2-pq-pr+qr`, R`p^2+qr`, R`p^2-qr`, R`p^2-pq-pr-qr`], ans: 0, why: R`FOIL.` } },
    { title: 'Use Vieta',
      explain: R`$p^2+q^2+r^2-\sum pq=(p+q+r)^2-3\sum pq=22^2-3\cdot80=484-240=244$.`,
      check: { q: R`If $p+q+r=5$ and $pq+qr+rp=6$, what is $p^2+q^2+r^2$?`, opts: [R`13`, R`19`, R`25`, R`7`], ans: 0, why: R`$25-12$.` } }
  ],
  bridge: R`Use the cover-up rule for each coefficient, add the reciprocals, and evaluate with Vieta.`,
  solution: [
    R`By the cover-up rule $\tfrac1A=(p-q)(p-r)$, $\tfrac1B=(q-p)(q-r)$, $\tfrac1C=(r-p)(r-q)$.`,
    R`Their sum is $p^2+q^2+r^2-(pq+qr+rp)$.`,
    R`By Vieta, this is $(p+q+r)^2-3(pq+qr+rp)=22^2-3\cdot80=244$.`,
    R`The answer is $\textbf{(B)}\ 244$.`
  ],
  shortcut: R`$\tfrac1A=f'(p)$ (derivative of the cubic at the root), so the sum is $\sum f'(p)=3\sum p^2-44\sum p+240$, which also gives $244$.`,
  traps: [R`Trying to find the roots numerically.`, R`Sign errors in $(q-p)(q-r)$.`],
  recognize: R`Expressions in roots you cannot find: rewrite them as symmetric polynomials and use Vieta.`
},

'2019A25': {
  answer: 'D',
  goal: R`For $1\le n\le50$, when is $\dfrac{(n^2-1)!}{(n!)^n}$ an integer? Relate it to a quantity that is known to be an integer, and find exactly when the leftover factor causes trouble.`,
  tools: [
    { name: 'Splitting objects into groups', fact: R`\frac{(n^2)!}{(n!)^n\,n!}\in\mathbb Z`, why: R`It counts the ways to split $n^2$ objects into $n$ unlabelled groups of $n$.` },
    { name: 'Rewriting the expression', fact: R`\frac{(n^2-1)!}{(n!)^n}=\frac{(n^2)!}{(n!)^{n+1}}\cdot\frac{n!}{n^2}`, why: R`Multiply and divide by $n^2$ and by $n!$.` },
    { name: 'Powers of a prime in a factorial (Legendre)', fact: R`v_p(m!)=\sum_{i\ge1}\left\lfloor\tfrac{m}{p^i}\right\rfloor`, why: R`Count multiples of $p$, of $p^2$, and so on.` }
  ],
  approach: R`The given fraction is an integer times $\tfrac{n!}{n^2}$. When $n^2\mid n!$, it is certainly an integer. For the remaining $n$ (primes and $n=4$), check directly with prime powers that it fails.`,
  steps: [
    { title: 'When is $n^2\mid n!$?',
      explain: R`For composite $n=ab$ with $1<a<b<n$, both $a,b$ and $n$ itself appear in $n!$, giving $n^2\mid n!$. For $n=p^2$ with $p>2$, $p$ and $2p$ both appear, so $p^4\mid n!$ too. It fails for $n$ prime ($n!$ has only one factor $n$) and for $n=4$ ($4!=24$). It holds for $n=1$.`,
      check: { q: R`Does $6^2$ divide $6!=720$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only }6\mid720`, R`\text{Cannot tell}`], ans: 0, why: R`$720=36\cdot20$.` } },
    { title: 'Primes fail',
      explain: R`For $n=p$ prime, $(p^2-1)!$ contains the multiples $p,2p,\ldots,(p-1)p$: exactly $p-1$ factors of $p$. The denominator $(p!)^p$ has $p$ factors of $p$. So it is not an integer.`,
      check: { q: R`How many factors of $5$ are in $24!$?`, opts: [R`4`, R`5`, R`3`, R`6`], ans: 0, why: R`$\lfloor24/5\rfloor=4$.` } },
    { title: '$n=4$ fails; count',
      explain: R`$\tfrac{15!}{(4!)^4}$: $15!$ has $7+3+1=11$ factors of $2$, while $24^4$ has $12$. Not an integer. So the failures are the $15$ primes up to $50$ and $n=4$: $16$ values, leaving $50-16=34$.`,
      check: { q: R`How many primes are at most $50$?`, opts: [R`15`, R`14`, R`16`, R`13`], ans: 0, why: R`$2,3,5,7,11,13,17,19,23,29,31,37,41,43,47$.` } }
  ],
  bridge: R`Write the fraction as an integer times $\tfrac{n!}{n^2}$, then check the exceptions $n$ prime and $n=4$.`,
  solution: [
    R`$\tfrac{(n^2-1)!}{(n!)^n}=\tfrac{(n^2)!}{(n!)^{n+1}}\cdot\tfrac{n!}{n^2}$, and the first factor is an integer (group-splitting count).`,
    R`So it is an integer whenever $n^2\mid n!$, which holds for $n=1$ and every composite $n\ne4$.`,
    R`For prime $p$, the numerator has $p-1$ factors of $p$ but the denominator has $p$: not an integer.`,
    R`For $n=4$: $11$ factors of $2$ versus $12$: not an integer.`,
    R`$50-15-1=34$. The answer is $\textbf{(D)}\ 34$.`
  ],
  shortcut: R`Guess "fails exactly for primes and $4$" from small cases, then subtract: $50-16=34$.`,
  traps: [R`Forgetting $n=4$, the one composite with $n^2\nmid n!$.`, R`Counting $1$ as prime.`],
  recognize: R`Integrality of factorial ratios: compare with a known combinatorial count, then handle leftover factors with prime-power counting.`
}

};
