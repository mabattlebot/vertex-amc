// Hand-written lessons: 2011 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2011A16': {
  answer: 'B',
  goal: R`Simplify $\sqrt{9-6\sqrt2}+\sqrt{9+6\sqrt2}$. Square the whole sum: the cross term becomes a single nice square root.`,
  tools: [
    { name: 'Squaring a sum', fact: R`(\sqrt u+\sqrt v)^2=u+v+2\sqrt{uv}`, why: R`Expand.` },
    { name: 'Difference of squares', fact: R`(9-6\sqrt2)(9+6\sqrt2)=81-72=9`, why: R`$(a-b)(a+b)=a^2-b^2$.` }
  ],
  approach: R`Let $S$ be the sum. $S^2=18+2\sqrt{9}=24$, and $S>0$, so $S=2\sqrt6$.`,
  steps: [
    { title: 'Square the sum',
      explain: R`$S^2=(9-6\sqrt2)+(9+6\sqrt2)+2\sqrt{(9-6\sqrt2)(9+6\sqrt2)}=18+2\sqrt9=24$.`,
      check: { q: R`What is $(9-6\sqrt2)(9+6\sqrt2)$?`, opts: [R`9`, R`81`, R`153`, R`-63`], ans: 0, why: R`$81-72$.` } },
    { title: 'Take the root',
      explain: R`$S=\sqrt{24}=2\sqrt6$.`,
      check: { q: R`Simplify $\sqrt{24}$.`, opts: [R`2\sqrt6`, R`4\sqrt6`, R`6\sqrt2`, R`2\sqrt{12}`], ans: 0, why: R`$24=4\cdot6$.` } }
  ],
  bridge: R`Square the sum, simplify the cross term, take the square root.`,
  solution: [
    R`$S^2=18+2\sqrt{81-72}=24$.`,
    R`$S=2\sqrt6$.`,
    R`The answer is $\textbf{(B)}\ 2\sqrt6$.`
  ],
  shortcut: R`Denesting: $9\pm6\sqrt2=(\sqrt6\pm\sqrt3)^2$, so the sum is $2\sqrt6$.`,
  traps: [R`Adding inside the roots: $\sqrt{18}$.`, R`Forgetting the factor $2$ in the cross term.`],
  recognize: R`Sums of conjugate square roots: square the sum; the product under the cross term simplifies.`
},

'2011A17': {
  answer: 'C',
  goal: R`In $A,\ldots,H$, every three consecutive terms sum to $30$ and $C=5$. We want $A+H$. The condition makes the sequence repeat every $3$ terms.`,
  tools: [
    { name: 'Period from overlapping sums', fact: R`A+B+C=B+C+D\Rightarrow A=D`, why: R`Subtract consecutive triple sums.` }
  ],
  approach: R`Subtracting overlapping triples shows terms three apart are equal: $A=D=G$, $B=E=H$, $C=F$. Then $A+H=A+B=30-C$.`,
  steps: [
    { title: 'Period 3',
      explain: R`$A+B+C=B+C+D$ gives $A=D$; similarly $B=E$, $C=F$, $D=G$, $E=H$. So $H=B$.`,
      check: { q: R`If $x_1+x_2+x_3=x_2+x_3+x_4$, then?`, opts: [R`x_1=x_4`, R`x_1=x_2`, R`x_4=0`, R`x_3=x_4`], ans: 0, why: R`Cancel $x_2+x_3$.` } },
    { title: 'Compute',
      explain: R`$A+H=A+B=30-C=25$.`,
      check: { q: R`What is $30-5$?`, opts: [R`25`, R`20`, R`35`, R`15`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Show the sequence has period $3$, so $H=B$.`,
  solution: [
    R`Consecutive triple sums are equal, so terms three apart are equal.`,
    R`$H=B$, so $A+H=A+B=30-C$.`,
    R`$=25$.`,
    R`The answer is $\textbf{(C)}\ 25$.`
  ],
  shortcut: R`Equal sliding-window sums force periodicity with the window length.`,
  traps: [R`Assuming all terms equal $10$ (then $C$ would be $10$).`, R`Answering $A+B+C$.`],
  recognize: R`Sliding-window sum conditions: subtract consecutive windows to get periodicity.`
},

'2011A18': {
  answer: 'C',
  goal: R`Unit circles $A$ and $B$ touch at $M$; circle $C$ (radius $1$) touches $AB$ at $M$. We want the area inside $C$ but outside $A$ and $B$. Subtract the two lens-shaped overlaps from $C$.`,
  tools: [
    { name: 'Coordinates', fact: R`A(-1,0),\ B(1,0),\ C(0,1)`, why: R`$M$ is the origin; $C$ is $1$ above it.` },
    { name: 'Lens between two unit circles at distance $\sqrt2$', fact: R`2\left(\tfrac{\pi}{4}-\tfrac12\right)=\tfrac\pi2-1`, why: R`Each half is a $90^\circ$ sector minus a right triangle.` }
  ],
  approach: R`Centres $A$ and $C$ are $\sqrt2$ apart, so the circles meet at right angles from each centre. Each overlap lens is two $90^\circ$ segments. Subtract both lenses from $\pi$.`,
  steps: [
    { title: 'One overlap',
      explain: R`$AC=\sqrt2$; the intersection points subtend $90^\circ$ at each centre. One segment: $\tfrac\pi4-\tfrac12$. Lens: $\tfrac\pi2-1$.`,
      check: { q: R`What is the area of a $90^\circ$ segment of a unit circle?`, opts: [R`\tfrac\pi4-\tfrac12`, R`\tfrac\pi4`, R`\tfrac\pi2-1`, R`\tfrac12`], ans: 0, why: R`Sector minus triangle.` } },
    { title: 'Subtract',
      explain: R`$\pi-2\left(\tfrac\pi2-1\right)=2$.`,
      check: { q: R`What is $\pi-(\pi-2)$?`, opts: [R`2`, R`\pi`, R`\pi-2`, R`1`], ans: 0, why: R`Simplify.` } }
  ],
  bridge: R`Find each lens area and subtract from circle $C$.`,
  solution: [
    R`$C$ is centred $\sqrt2$ from $A$ and from $B$.`,
    R`Each overlap lens is $\tfrac\pi2-1$.`,
    R`Area $=\pi-2(\tfrac\pi2-1)=2$.`,
    R`The answer is $\textbf{(C)}\ 2$.`
  ],
  shortcut: R`The region is exactly a $2\times1$ rectangle's worth of area: cut-and-paste the lens pieces.`,
  traps: [R`Using semicircles for the overlaps.`, R`Subtracting only one lens.`],
  recognize: R`Overlapping unit circles with centres $\sqrt2$ apart: lenses are made of $90^\circ$ segments.`
},

'2011A19': {
  answer: 'E',
  goal: R`Population $p^2$ in $1991$, $p^2+150=q^2+9$ in $2001$, and $p^2+300=r^2$ in $2011$. We find $p$ and the percent growth. Difference of squares factors the conditions.`,
  tools: [
    { name: 'Difference of squares', fact: R`q^2-p^2=(q-p)(q+p)=141`, why: R`From $p^2+150=q^2+9$.` },
    { name: 'Factor pairs', fact: R`141=1\cdot141=3\cdot47`, why: R`Both factors have the same parity.` }
  ],
  approach: R`Solve $(q-p)(q+p)=141$ for the two candidate $p$'s, then check which makes $p^2+300$ a perfect square.`,
  steps: [
    { title: 'Candidates',
      explain: R`$(1,141)$: $q=71$, $p=70$. $(3,47)$: $q=25$, $p=22$.`,
      check: { q: R`If $q-p=3$ and $q+p=47$, what is $p$?`, opts: [R`22`, R`25`, R`44`, R`20`], ans: 0, why: R`$(47-3)/2$.` } },
    { title: 'Check 2011',
      explain: R`$70^2+300=5200$ is not a square. $22^2+300=784=28^2$. So $p=22$.`,
      check: { q: R`What is $28^2$?`, opts: [R`784`, R`729`, R`841`, R`676`], ans: 0, why: R`$28\cdot28$.` } },
    { title: 'Growth',
      explain: R`$\tfrac{300}{484}\approx62\%$.`,
      check: { q: R`Approximately, what is $300/484$?`, opts: [R`0.62`, R`0.52`, R`0.42`, R`0.72`], ans: 0, why: R`$484\cdot0.62\approx300$.` } }
  ],
  bridge: R`Factor $q^2-p^2=141$, then test $p^2+300$.`,
  solution: [
    R`$q^2-p^2=141$ gives $p=70$ or $22$.`,
    R`Only $p=22$ makes $p^2+300=784=28^2$.`,
    R`Growth $\tfrac{300}{484}\approx62\%$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`$r^2-p^2=300$ also factors: $(r-p)(r+p)=300$, consistent with $p=22$, $r=28$.`,
  traps: [R`Using $p=70$ without checking the 2011 condition.`, R`Computing growth over $784$.`],
  recognize: R`Populations "a perfect square plus $k$": difference of squares and factor pairs.`
},

'2011A20': {
  answer: 'D',
  goal: R`Two random points on a circle each start a chord of length $r$ going clockwise. We want the probability the chords cross. A chord of length $r$ spans a $60^\circ$ arc.`,
  tools: [
    { name: 'Chord of length $r$', fact: R`\text{central angle }60^\circ`, why: R`It forms an equilateral triangle with the centre.` },
    { name: 'When chords cross', fact: R`\text{exactly one endpoint of one chord lies inside the other's arc}`, why: R`Interleaved endpoints around the circle.` }
  ],
  approach: R`Fix the first point at $0^\circ$; its chord spans $[0^\circ,60^\circ]$. The second chord spans $[\theta,\theta+60^\circ]$. They cross when the arcs partially overlap: $\theta\in(0^\circ,60^\circ)$ or $\theta\in(300^\circ,360^\circ)$.`,
  steps: [
    { title: 'Chord arcs',
      explain: R`Each chord connects its starting point to the point $60^\circ$ clockwise.`,
      check: { q: R`What central angle does a chord equal to the radius subtend?`, opts: [R`60^\circ`, R`30^\circ`, R`90^\circ`, R`120^\circ`], ans: 0, why: R`Equilateral triangle.` } },
    { title: 'Crossing condition',
      explain: R`The chords cross iff the second start is within $60^\circ$ of the first on either side: $120^\circ$ out of $360^\circ$, probability $\tfrac13$.`,
      check: { q: R`What is $\tfrac{120}{360}$?`, opts: [R`\tfrac13`, R`\tfrac16`, R`\tfrac12`, R`\tfrac14`], ans: 0, why: R`Simplify.` } }
  ],
  bridge: R`Fix one chord and find which starting angles for the other give interleaved endpoints.`,
  solution: [
    R`Each chord spans a $60^\circ$ arc.`,
    R`They cross iff the arcs partially overlap: the second start is within $60^\circ$ of the first.`,
    R`Probability $\tfrac{120}{360}=\tfrac13$.`,
    R`The answer is $\textbf{(D)}\ \tfrac13$.`
  ],
  shortcut: R`Crossing needs interleaved endpoints; with equal $60^\circ$ arcs that is a window of $\pm60^\circ$.`,
  traps: [R`Counting the case where one arc contains the other (impossible here: equal lengths).`, R`Using $\tfrac16$ (only one side).`],
  recognize: R`Random chords of fixed length: reduce to the angle between starting points.`
},

'2011A21': {
  answer: 'D',
  goal: R`Two counterfeit coins (equal weight, different from genuine) among $10$. Two pairs are drawn; their weights are equal. We want the probability all four are genuine: a conditional probability.`,
  tools: [
    { name: 'Pair weights', fact: R`GG:2g,\ GC:g+c,\ CC:2c`, why: R`Only these three totals are possible.` },
    { name: 'Conditional probability', fact: R`P(\text{all genuine}\mid\text{equal})=\frac{P(GG,GG)}{P(GG,GG)+P(GC,GC)}`, why: R`Equal weights happen only for matching types (and $CC,CC$ is impossible).` }
  ],
  approach: R`Equal weights mean both pairs are $GG$ or both are $GC$. Compute each probability and take the ratio.`,
  steps: [
    { title: 'Both $GG$',
      explain: R`$\tfrac{\binom82}{\binom{10}2}\cdot\tfrac{\binom62}{\binom82}=\tfrac{28}{45}\cdot\tfrac{15}{28}=\tfrac{15}{45}$.`,
      check: { q: R`What is $\binom{10}{2}$?`, opts: [R`45`, R`90`, R`20`, R`10`], ans: 0, why: R`$\tfrac{10\cdot9}2$.` } },
    { title: 'Both $GC$',
      explain: R`First pair $GC$: $\tfrac{8\cdot2}{45}=\tfrac{16}{45}$. Then from $7$ genuine and $1$ counterfeit: $\tfrac{7}{28}$. Product $\tfrac4{45}$.`,
      check: { q: R`From $7$ genuine and $1$ counterfeit, what is $P(GC)$ for a random pair?`, opts: [R`\tfrac14`, R`\tfrac18`, R`\tfrac78`, R`\tfrac12`], ans: 0, why: R`$\tfrac{7}{28}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{15}{15+4}=\tfrac{15}{19}$.`,
      check: { q: R`What is $\tfrac{15}{19}$ as a ratio of $\tfrac{15}{45}$ to $\tfrac{19}{45}$?`, opts: [R`\tfrac{15}{19}`, R`\tfrac{19}{15}`, R`\tfrac{15}{45}`, R`\tfrac{4}{19}`], ans: 0, why: R`The $45$s cancel.` } }
  ],
  bridge: R`Equal weights need matching pair types; compute both and take the ratio.`,
  solution: [
    R`Equal weight means $(GG,GG)$ or $(GC,GC)$.`,
    R`$P(GG,GG)=\tfrac{15}{45}$, $P(GC,GC)=\tfrac{4}{45}$.`,
    R`Conditional probability $\tfrac{15}{19}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{15}{19}$.`
  ],
  shortcut: R`Count unordered outcomes: $\binom82\binom62=420$ vs $16\cdot7=112$: ratio $\tfrac{420}{532}=\tfrac{15}{19}$.`,
  traps: [R`Ignoring the conditioning (answering $\tfrac13$).`, R`Forgetting the $GC,GC$ case.`],
  recognize: R`"Given that ... what is the probability": list the ways the condition can happen and compare.`
},

'2011A22': {
  answer: 'C',
  goal: R`Colour a pentagon's vertices with $6$ colours so the ends of each diagonal differ. The diagonals of a pentagon form a $5$-cycle (the pentagram), so this counts proper colourings of a cycle.`,
  tools: [
    { name: 'Diagonals form a cycle', fact: R`A\text{–}C\text{–}E\text{–}B\text{–}D\text{–}A`, why: R`Each vertex has exactly two diagonals.` },
    { name: 'Colouring a cycle', fact: R`(k-1)^n+(-1)^n(k-1)`, why: R`Chromatic polynomial of an $n$-cycle.` }
  ],
  approach: R`Relabel the vertices in pentagram order; the condition becomes "adjacent in a $5$-cycle get different colours". Use the cycle formula with $k=6$, $n=5$.`,
  steps: [
    { title: 'Recognise the cycle',
      explain: R`Going $A\to C\to E\to B\to D\to A$ uses each diagonal once: a $5$-cycle.`,
      check: { q: R`How many diagonals does each vertex of a pentagon have?`, opts: [R`2`, R`3`, R`1`, R`5`], ans: 0, why: R`It connects to all but itself and its two neighbours.` } },
    { title: 'Count',
      explain: R`$5^5-5=3125-5=3120$.`,
      check: { q: R`What is $(6-1)^5+(-1)^5(6-1)$?`, opts: [R`3120`, R`3125`, R`3130`, R`2880`], ans: 0, why: R`$3125-5$.` } }
  ],
  bridge: R`Turn the diagonal condition into a $5$-cycle and use the cycle colouring formula.`,
  solution: [
    R`The diagonals form the cycle $A,C,E,B,D$.`,
    R`Proper colourings of a $5$-cycle with $6$ colours: $5^5-5$.`,
    R`$3120$.`,
    R`The answer is $\textbf{(C)}\ 3120$.`
  ],
  shortcut: R`Without the formula: colour around the cycle ($6\cdot5^4$) and subtract cases where the last equals the first.`,
  traps: [R`Using sides instead of diagonals (same count here, but by luck).`, R`Using $6\cdot5^4=3750$ (ignores the closing edge).`],
  recognize: R`Colouring with "these pairs must differ": draw the graph of constraints; cycles have a standard formula.`
},

'2011A23': {
  answer: 'C',
  goal: R`Each student says her list except the middle of each group of three; the skipped numbers pass to the next student. George says the single number left. Track the first skipped number and the spacing at each stage.`,
  tools: [
    { name: 'Arithmetic progressions', fact: R`\text{skipped numbers form an AP with spacing multiplied by }3`, why: R`Skipping the middle of each triple of an AP with step $d$ gives an AP with step $3d$.` },
    { name: 'First skipped term', fact: R`\text{middle of the first triple}=\text{first}+d`, why: R`The first three terms are $t,t+d,t+2d$.` }
  ],
  approach: R`Alice skips $2,5,8,\ldots$ (start $2$, step $3$). Barbara's list is that; she skips $5,14,\ldots$ (step $9$). Continue: each next start is the previous start plus the previous step.`,
  steps: [
    { title: 'Follow the starts',
      explain: R`Starts: $2$ (step $3$), $5$ (step $9$), $14$ (step $27$), $41$ (step $81$), $122$ (step $243$), $365$ (step $729$). The last is what Fatima skips.`,
      check: { q: R`If a list is $14,41,68,\ldots$, what is the middle of its first triple?`, opts: [R`41`, R`14`, R`68`, R`27`], ans: 0, why: R`Second term.` } },
    { title: 'Check Fatima',
      explain: R`Fatima's list is $122,365,608,851$. She skips $365$ (middle of the first triple) and says $851$ (an incomplete group). So George says $365$.`,
      check: { q: R`What is $122+243$?`, opts: [R`365`, R`355`, R`375`, R`366`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Track each stage's first skipped number and step until only one number remains.`,
  solution: [
    R`Each stage's skipped numbers form an AP whose step triples: $3,9,27,81,243,729$.`,
    R`Their first terms: $2,5,14,41,122,365$.`,
    R`Fatima's list $122,365,608,851$ leaves only $365$ unsaid.`,
    R`The answer is $\textbf{(C)}\ 365$.`
  ],
  shortcut: R`First terms satisfy $t_{k+1}=t_k+3^k$: $2,5,14,41,122,365$.`,
  traps: [R`Thinking Fatima also skips $851$ (it is not the middle of a full triple).`, R`Using step $3$ throughout.`],
  recognize: R`Repeated "skip every middle of three": arithmetic progressions with step multiplied by $3$.`
},

'2011A24': {
  answer: 'D',
  goal: R`A unit cube contains two regular tetrahedra, each on alternate vertices. We want the volume of their intersection, which turns out to be the octahedron whose vertices are the cube's face centres.`,
  tools: [
    { name: 'Two tetrahedra in a cube', fact: R`\text{vertices }(0,0,0),(1,1,0),(1,0,1),(0,1,1)\text{ and the other four}`, why: R`Each uses one vertex per pair of opposite corners.` },
    { name: 'Intersection is the face-centre octahedron', fact: R`\text{each tetrahedron face passes through three face centres}`, why: R`Edges of each tetrahedron are face diagonals; their midpoints are face centres.` },
    { name: 'Octahedron volume', fact: R`\tfrac16\text{ of the box}`, why: R`Two square pyramids with base area $\tfrac12$ and height $\tfrac12$.` }
  ],
  approach: R`Each tetrahedron is the cube minus four corner pyramids. Their intersection removes all eight corner regions, leaving the octahedron with vertices at the six face centres. Its volume is $2\cdot\tfrac13\cdot\tfrac12\cdot\tfrac12=\tfrac16$.`,
  steps: [
    { title: 'Identify the intersection',
      explain: R`Every edge of either tetrahedron is a face diagonal of the cube, and the two tetrahedra's diagonals on each face cross at the face centre. The common region is bounded by these, giving the octahedron on the $6$ face centres.`,
      check: { q: R`How many vertices does an octahedron have?`, opts: [R`6`, R`8`, R`4`, R`12`], ans: 0, why: R`One per cube face.` } },
    { title: 'Volume',
      explain: R`The middle square through four side-face centres has diagonals $1$ and $1$: area $\tfrac12$. Two pyramids of height $\tfrac12$: $2\cdot\tfrac13\cdot\tfrac12\cdot\tfrac12=\tfrac16$.`,
      check: { q: R`What is $2\cdot\tfrac13\cdot\tfrac12\cdot\tfrac12$?`, opts: [R`\tfrac16`, R`\tfrac1{12}`, R`\tfrac13`, R`\tfrac14`], ans: 0, why: R`$\tfrac{2}{12}$.` } }
  ],
  bridge: R`Recognise the face-centre octahedron and compute its volume.`,
  solution: [
    R`The two regular tetrahedra use alternate cube vertices.`,
    R`Their intersection is the octahedron with vertices at the cube's face centres.`,
    R`Its volume is $\tfrac16$.`,
    R`The answer is $\textbf{(D)}\ \tfrac16$.`
  ],
  shortcut: R`Each tetrahedron has volume $\tfrac13$; the intersection is half of one tetrahedron.`,
  traps: [R`Taking a single tetrahedron's volume ($\tfrac13$).`, R`Using a regular octahedron formula with the wrong edge.`],
  recognize: R`Stella octangula (two tetrahedra in a cube): their intersection is the face-centre octahedron.`
},

'2011A25': {
  answer: 'C',
  goal: R`A point $X$ in a unit square is $n$-ray partitional if $n$ rays from $X$ cut the square into $n$ triangles of equal area. We count points that are $100$-ray but not $60$-ray partitional. First find which points work for a given $n$.`,
  tools: [
    { name: 'Rays must hit the corners', fact: R`\text{every region is a triangle}\Rightarrow\text{each corner is on a ray}`, why: R`Otherwise a region would include a corner and have four sides.` },
    { name: 'Area along one side', fact: R`\text{triangles on the left side have total area }\tfrac x2`, why: R`Height $x$ (distance from $X$ to that side), total base $1$.` },
    { name: 'Counting grid points', fact: R`(m-1)^2\text{ points }\left(\tfrac am,\tfrac bm\right)`, why: R`$a,b$ from $1$ to $m-1$.` }
  ],
  approach: R`Rays go to all four corners, so the left side's triangles have total area $\tfrac x2$, which must be a multiple of $\tfrac1n$. So $x$ and $y$ are multiples of $\tfrac2n$. For $n=2m$ the points are $\left(\tfrac am,\tfrac bm\right)$. Then count and subtract the overlap.`,
  steps: [
    { title: 'Which points work',
      explain: R`$\tfrac x2=\tfrac kn$ gives $x=\tfrac{2k}{n}$; likewise $y$. For $n=100$: $x,y\in\{\tfrac1{50},\ldots,\tfrac{49}{50}\}$, $49^2=2401$ points. For $n=60$: multiples of $\tfrac1{30}$, $29^2$ points.`,
      check: { q: R`For $n=10$, which $x$-values are allowed?`, opts: [R`\tfrac15,\tfrac25,\tfrac35,\tfrac45`, R`\tfrac1{10},\ldots,\tfrac9{10}`, R`\tfrac12`, R`\tfrac14,\tfrac12,\tfrac34`], ans: 0, why: R`Multiples of $\tfrac2{10}$.` } },
    { title: 'Overlap',
      explain: R`Points in both grids have coordinates that are multiples of both $\tfrac1{50}$ and $\tfrac1{30}$, i.e. of $\tfrac1{10}$: $9^2=81$ points.`,
      check: { q: R`What is the largest grid that is common to steps $\tfrac1{50}$ and $\tfrac1{30}$?`, opts: [R`\tfrac1{10}`, R`\tfrac1{150}`, R`\tfrac15`, R`\tfrac1{30}`], ans: 0, why: R`$\gcd(50,30)=10$.` } },
    { title: 'Count',
      explain: R`$2401-81=2320$.`,
      check: { q: R`What is $49^2-9^2$?`, opts: [R`2320`, R`2400`, R`2240`, R`2480`], ans: 0, why: R`$(49-9)(49+9)=40\cdot58$.` } }
  ],
  bridge: R`Force rays to the corners, get the grid of valid points, and subtract the overlap.`,
  solution: [
    R`Rays must pass through all four corners; the triangles on each side then have total area $\tfrac x2$ etc., so $x,y$ are multiples of $\tfrac2n$.`,
    R`$100$-ray partitional points: $49^2=2401$; those also $60$-ray partitional lie on the $\tfrac1{10}$ grid: $81$.`,
    R`$2401-81=2320$.`,
    R`The answer is $\textbf{(C)}\ 2320$.`
  ],
  shortcut: R`Common grid step is $\tfrac{1}{\gcd(50,30)}$.`,
  traps: [R`Using $99^2$ points for $n=100$.`, R`Forgetting the overlap.`],
  recognize: R`Equal-area partitions from a point: the corners force structure; areas on each side give divisibility conditions.`
}

};
