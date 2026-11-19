// Hand-written lessons: 2006 AMC 10A, Difficulty 4 and 5.
// #17 relies on a figure; the four lines used (AF, BE, HC, GD) are a reconstruction consistent with the answer key.
const R = String.raw;
module.exports = {

'2006A16': {
  answer: 'D',
  goal: R`Circles of radius $1$ (on top) and $2$ are stacked on the axis of isosceles $\triangle ABC$, tangent to each other and to the sides. We want $[ABC]$. Similar right triangles from the apex $A$ give the apex angle and the height.`,
  tools: [
    { name: 'Similar tangent triangles', fact: R`\frac{1}{d}=\frac{2}{d+3}`, why: R`$d$ = distance from $A$ to the small centre; the radii to $AB$ are perpendicular to it.` },
    { name: 'Half-base', fact: R`\tfrac{BC}{2}=\text{height}\cdot\tan\tfrac{A}{2}`, why: R`Right triangle from the altitude.` }
  ],
  approach: R`$\tfrac1d=\tfrac2{d+3}$ gives $d=3$. The altitude is $3+3+2=8$. $\sin\tfrac A2=\tfrac13$, so $\tan\tfrac A2=\tfrac{1}{2\sqrt2}$ and the half-base is $\tfrac{8}{2\sqrt2}=2\sqrt2$.`,
  steps: [
    { title: 'Height',
      explain: R`$d+3=2d$, so $d=3$. Height $=d+3+2=8$.`,
      check: { q: R`If $\tfrac1d=\tfrac2{d+3}$, what is $d$?`, opts: [R`3`, R`1`, R`2`, R`6`], ans: 0, why: R`$d+3=2d$.` } },
    { title: 'Base and area',
      explain: R`$\sin\tfrac A2=\tfrac13$, $\cos\tfrac A2=\tfrac{2\sqrt2}3$, $\tan=\tfrac1{2\sqrt2}$. Half-base $2\sqrt2$, area $8\cdot2\sqrt2=16\sqrt2$.`,
      check: { q: R`If $\sin\theta=\tfrac13$, what is $\tan\theta$?`, opts: [R`\tfrac{1}{2\sqrt2}`, R`\tfrac13`, R`\tfrac{2\sqrt2}{3}`, R`\tfrac{\sqrt2}{3}`], ans: 0, why: R`$\tfrac{1/3}{2\sqrt2/3}$.` } }
  ],
  bridge: R`Use the two radii to find the apex distance, then the half-angle.`,
  solution: [
    R`$\tfrac1d=\tfrac2{d+3}$: $d=3$; height $8$.`,
    R`$\sin\tfrac A2=\tfrac13$, half-base $=8\tan\tfrac A2=2\sqrt2$.`,
    R`Area $=8\cdot2\sqrt2=16\sqrt2$.`,
    R`The answer is $\textbf{(D)}\ 16\sqrt2$.`
  ],
  shortcut: R`The apex sits as far above the small centre as the centres are apart ($3$), because radii double.`,
  traps: [R`Taking the height as $1+2+2=5$ or $6$.`, R`Using $\sin$ instead of $\tan$ for the base.`],
  recognize: R`Stacked circles in an angle: radii grow linearly with distance from the vertex.`
},

'2006A17': {
  answer: 'A',
  goal: R`Rectangle $ADEH$ is $3\times2$ with trisection points $B,C$ on $AD$ and $G,F$ on $HE$. The lines $AF$, $BE$, $HC$, $GD$ bound $WXYZ$. We want its area. Use coordinates.`,
  tools: [
    { name: 'Coordinates', fact: R`A(0,0),B(1,0),C(2,0),D(3,0),H(0,2),G(1,2),F(2,2),E(3,2)`, why: R`Trisection points at integers.` },
    { name: 'Slopes', fact: R`AF,BE:\ \text{slope }1;\quad HC,GD:\ \text{slope }-1`, why: R`Two pairs of parallel lines, perpendicular to each other.` }
  ],
  approach: R`Lines $y=x$, $y=x-1$, $x+y=2$, $x+y=3$ bound a square with vertices $(1,1),(1.5,0.5),(2,1),(1.5,1.5)$. Its diagonal is $1$, so its area is $\tfrac12$.`,
  steps: [
    { title: 'Vertices',
      explain: R`$y=x$ meets $x+y=2$ at $(1,1)$; $y=x-1$ meets $x+y=3$ at $(2,1)$; the other two corners are $(1.5,0.5)$ and $(1.5,1.5)$.`,
      check: { q: R`Where do $y=x-1$ and $x+y=3$ meet?`, opts: [R`(2,1)`, R`(1,2)`, R`(1.5,0.5)`, R`(1.5,1.5)`], ans: 0, why: R`$2x-1=3$.` } },
    { title: 'Area',
      explain: R`A square with diagonal $1$ has area $\tfrac{1^2}{2}=\tfrac12$.`,
      check: { q: R`What is the area of a square with diagonal $d$?`, opts: [R`\tfrac{d^2}{2}`, R`d^2`, R`\tfrac{d^2}{4}`, R`2d^2`], ans: 0, why: R`Side $\tfrac{d}{\sqrt2}$.` } }
  ],
  bridge: R`Coordinates turn the figure into four simple lines.`,
  solution: [
    R`The lines are $y=x$, $y=x-1$, $x+y=2$, $x+y=3$.`,
    R`They bound a square with diagonal from $(1,1)$ to $(2,1)$.`,
    R`Area $\tfrac12$.`,
    R`The answer is $\textbf{(A)}\ \tfrac12$.`
  ],
  shortcut: R`Parallel lines $1/\sqrt2$ apart in both directions: a square of side $\tfrac1{\sqrt2}$.`,
  traps: [R`Taking the side as $1$ instead of the diagonal.`, R`Misplacing the trisection points.`],
  recognize: R`Lines between trisection points of a rectangle: put it on a grid and use slopes.`
},

'2006A18': {
  answer: 'C',
  goal: R`Plates have $4$ digits and $2$ letters, with the letters adjacent. Count them: choose where the letter block goes, then fill.`,
  tools: [
    { name: 'Block method', fact: R`\text{treat the 2 letters as one unit}`, why: R`They must be adjacent.` },
    { name: 'Multiplication principle', fact: R`10^4\cdot26^2`, why: R`Independent choices for each character.` }
  ],
  approach: R`The letter block plus $4$ digits makes $5$ units; the block can be in $5$ positions. Then $10^4\cdot26^2$ fillings.`,
  steps: [
    { title: 'Positions',
      explain: R`Adjacent pairs among $6$ positions: $(1,2),\ldots,(5,6)$: $5$.`,
      check: { q: R`How many adjacent position pairs are among $6$ slots?`, opts: [R`5`, R`6`, R`15`, R`3`], ans: 0, why: R`Pairs start at slots $1$–$5$.` } },
    { title: 'Fill',
      explain: R`$5\cdot10^4\cdot26^2$.`,
      check: { q: R`Once the positions are fixed, how many ways are there to fill the characters?`, opts: [R`10^4\cdot26^2`, R`10^4+26^2`, R`10^6`, R`36^6`], ans: 0, why: R`Independent choices.` } }
  ],
  bridge: R`Positions for the block × fillings.`,
  solution: [
    R`$5$ positions for the letter pair.`,
    R`$10^4\cdot26^2$ fillings.`,
    R`Total $5\times10^4\times26^2$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Positions don't change the fill count, so just multiply by the number of placements.`,
  traps: [R`Forgetting the placements (A).`, R`Using $\binom62=15$ placements (ignoring adjacency).`],
  recognize: R`"Must be adjacent": glue into a block.`
},

'2006A19': {
  answer: 'C',
  goal: R`Count non-similar triangles whose angles are distinct positive integers in arithmetic progression. Write them as $a-d,a,a+d$.`,
  tools: [
    { name: 'Angle sum', fact: R`3a=180\Rightarrow a=60`, why: R`The middle term of a 3-term AP is the average.` },
    { name: 'Range of $d$', fact: R`1\le d\le59`, why: R`Distinct means $d\ge1$; positive means $60-d\ge1$.` }
  ],
  approach: R`$a=60$ and $d=1,\ldots,59$: $59$ triangles, all with different angle sets, so non-similar.`,
  steps: [
    { title: 'Middle angle',
      explain: R`$(a-d)+a+(a+d)=3a=180$, so $a=60$.`,
      check: { q: R`What must the middle angle be?`, opts: [R`60^\circ`, R`90^\circ`, R`45^\circ`, R`\text{any}`], ans: 0, why: R`$180/3$.` } },
    { title: 'Count',
      explain: R`$d\in\{1,\ldots,59\}$: $59$ choices.`,
      check: { q: R`Why can't $d=60$?`, opts: [R`\text{The smallest angle would be }0`, R`\text{The largest would exceed }180`, R`\text{It's not an integer}`, R`\text{It can}`], ans: 0, why: R`$60-60=0$.` } }
  ],
  bridge: R`Middle angle $60$, count the common differences.`,
  solution: [
    R`Angles $60-d,60,60+d$.`,
    R`$1\le d\le59$.`,
    R`$59$ triangles.`,
    R`The answer is $\textbf{(C)}\ 59$.`
  ],
  shortcut: R`Similarity is determined by angles, so count angle triples.`,
  traps: [R`Counting $d$ and $-d$ separately ($118$, or $178$).`, R`Including $d=0$.`],
  recognize: R`Three numbers in AP with a fixed sum: the middle one is the average.`
},

'2006A20': {
  answer: 'E',
  goal: R`Six distinct integers from $1$–$2006$. We want $P(\text{some pair differs by a multiple of }5)$. A difference is a multiple of $5$ exactly when two numbers share a remainder mod $5$.`,
  tools: [
    { name: 'Pigeonhole principle', fact: R`6\text{ numbers},\ 5\text{ remainders}`, why: R`Two must share a remainder.` }
  ],
  approach: R`There are only $5$ remainders mod $5$, so among $6$ numbers two share one. Their difference is a multiple of $5$ — always.`,
  steps: [
    { title: 'Reformulate',
      explain: R`$5\mid a-b\iff a\equiv b\pmod5$.`,
      check: { q: R`How many possible remainders are there mod $5$?`, opts: [R`5`, R`4`, R`6`, R`2006`], ans: 0, why: R`$0,1,2,3,4$.` } },
    { title: 'Pigeonhole',
      explain: R`$6>5$, so two numbers share a remainder. Probability $1$.`,
      check: { q: R`With $6$ numbers and $5$ remainders, must two share one?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only sometimes}`, R`\text{Only if consecutive}`], ans: 0, why: R`Pigeonhole.` } }
  ],
  bridge: R`Remainders mod $5$ are the pigeonholes.`,
  solution: [
    R`Two numbers differ by a multiple of $5$ iff same remainder.`,
    R`$6$ numbers, $5$ remainders: guaranteed.`,
    R`The answer is $\textbf{(E)}\ 1$.`
  ],
  shortcut: R`"Probability" questions with answer $1$ are often pigeonhole in disguise.`,
  traps: [R`Computing a complicated probability.`, R`Thinking $2006$ matters.`],
  recognize: R`"Some pair differs by a multiple of $n$": pigeonhole on remainders.`
},

'2006A21': {
  answer: 'E',
  goal: R`Count four-digit numbers with at least one digit $2$ or $3$. Use the complement: no $2$s or $3$s.`,
  tools: [
    { name: 'Complementary counting', fact: R`\text{at least one}=\text{total}-\text{none}`, why: R`"None" is a simple product.` },
    { name: 'Allowed digits', fact: R`\text{first: }7,\ \text{others: }8`, why: R`First digit can't be $0,2,3$; others can't be $2,3$.` }
  ],
  approach: R`Total $9000$. None: $7\cdot8^3=3584$. Answer $5416$.`,
  steps: [
    { title: 'Count "none"',
      explain: R`First digit $\in\{1,4,\ldots,9\}$: $7$. Others: $8$ each. $7\cdot512=3584$.`,
      check: { q: R`What is $7\cdot8^3$?`, opts: [R`3584`, R`4096`, R`2744`, R`3136`], ans: 0, why: R`$7\cdot512$.` } },
    { title: 'Subtract',
      explain: R`$9000-3584=5416$.`,
      check: { q: R`How many four-digit numbers are there?`, opts: [R`9000`, R`9999`, R`10000`, R`8999`], ans: 0, why: R`$1000$ to $9999$.` } }
  ],
  bridge: R`Total minus those avoiding $2$ and $3$.`,
  solution: [
    R`Total: $9000$.`,
    R`Avoiding $2,3$: $7\cdot8^3=3584$.`,
    R`$9000-3584=5416$.`,
    R`The answer is $\textbf{(E)}\ 5416$.`
  ],
  shortcut: R`"At least one" always suggests the complement.`,
  traps: [R`Using $8$ choices for the first digit.`, R`Using $10000$ as the total.`],
  recognize: R`"At least one" counting: complement.`
},

'2006A22': {
  answer: 'C',
  goal: R`Debts are paid in pigs ($300$) and goats ($210$) with change allowed, so any amount $300p+210g$ with integers $p,g$ (possibly negative). We want the smallest positive such amount.`,
  tools: [
    { name: 'Bézout', fact: R`\{300p+210g\}=\gcd(300,210)\mathbb Z`, why: R`Integer combinations of two numbers are exactly the multiples of their gcd.` },
    { name: 'Euclidean algorithm', fact: R`\gcd(300,210)=\gcd(210,90)=\gcd(90,30)=30`, why: R`Repeated remainders.` }
  ],
  approach: R`Every combination is a multiple of $30$, and $30$ itself is reachable: $30=300\cdot(-2)+210\cdot3$.`,
  steps: [
    { title: 'GCD',
      explain: R`$\gcd(300,210)=30$.`,
      check: { q: R`What is $\gcd(300,210)$?`, opts: [R`30`, R`10`, R`60`, R`15`], ans: 0, why: R`$300=2^2\cdot3\cdot5^2$, $210=2\cdot3\cdot5\cdot7$.` } },
    { title: 'Achievable',
      explain: R`$3\cdot210-2\cdot300=630-600=30$: pay $3$ goats, receive $2$ pigs.`,
      check: { q: R`What is $3\cdot210-2\cdot300$?`, opts: [R`30`, R`60`, R`-30`, R`90`], ans: 0, why: R`$630-600$.` } }
  ],
  bridge: R`The smallest positive combination is the gcd.`,
  solution: [
    R`Payable amounts are $300p+210g$.`,
    R`These are exactly the multiples of $\gcd=30$.`,
    R`Smallest positive: $30$.`,
    R`The answer is $\textbf{(C)}\ 30$.`
  ],
  shortcut: R`Change allowed = negative coefficients allowed = Bézout.`,
  traps: [R`Answering $10$ or $5$ (not multiples of $30$).`, R`Thinking only non-negative combinations count.`],
  recognize: R`Payments with change in two denominations: the gcd.`
},

'2006A23': {
  answer: 'B',
  goal: R`Circles at $A$ (radius $3$) and $B$ (radius $8$); an internal tangent touches at $C,D$ and meets $AB$ at $E$, with $AE=5$. We want $CD=CE+ED$. Triangles $ACE$ and $BDE$ are similar right triangles.`,
  tools: [
    { name: 'Tangent ⟂ radius', fact: R`\angle ACE=\angle BDE=90^\circ`, why: R`Radii to tangent points.` },
    { name: 'Similarity', fact: R`\triangle ACE\sim\triangle BDE,\ \text{ratio }3:8`, why: R`Vertical angles at $E$.` }
  ],
  approach: R`$CE=\sqrt{25-9}=4$. Scale by $\tfrac83$: $DE=\tfrac{32}3$. $CD=4+\tfrac{32}3$.`,
  steps: [
    { title: 'Small triangle',
      explain: R`$CE=\sqrt{5^2-3^2}=4$.`,
      check: { q: R`What is $\sqrt{25-9}$?`, opts: [R`4`, R`3`, R`\sqrt{34}`, R`5`], ans: 0, why: R`$\sqrt{16}$.` } },
    { title: 'Scale',
      explain: R`$DE=4\cdot\tfrac83=\tfrac{32}3$. $CD=\tfrac{12+32}{3}=\tfrac{44}3$.`,
      check: { q: R`What is $4+\tfrac{32}{3}$?`, opts: [R`\tfrac{44}3`, R`\tfrac{36}3`, R`12`, R`\tfrac{40}3`], ans: 0, why: R`$\tfrac{12+32}{3}$.` } }
  ],
  bridge: R`One Pythagorean triangle, then scale by $\tfrac83$.`,
  solution: [
    R`$\triangle ACE$: hypotenuse $5$, leg $3$, so $CE=4$.`,
    R`$\triangle BDE\sim\triangle ACE$ with ratio $\tfrac83$: $DE=\tfrac{32}3$.`,
    R`$CD=\tfrac{44}3$.`,
    R`The answer is $\textbf{(B)}\ \tfrac{44}3$.`
  ],
  shortcut: R`$CD=CE\cdot\left(1+\tfrac{8}{3}\right)=4\cdot\tfrac{11}3$.`,
  traps: [R`Using the external tangent formula.`, R`Adding $AE$ instead of $CE$.`],
  recognize: R`Internal tangents: the crossing point splits everything in the ratio of the radii.`
},

'2006A25': {
  answer: 'C',
  goal: R`A bug makes $7$ random moves along cube edges from a vertex. We want $P(\text{it visits all }8\text{ vertices exactly once})$. Count Hamiltonian paths from the start and divide by $3^7$.`,
  tools: [
    { name: 'Equally likely walks', fact: R`3^7=2187\text{ walks}`, why: R`Each move has $3$ choices.` },
    { name: 'Symmetry', fact: R`\text{the first two moves: }3\cdot2\text{ equivalent starts}`, why: R`The cube's symmetries make all of them alike.` }
  ],
  approach: R`Any first move ($3$) and any non-backtracking second move ($2$) are equivalent by symmetry. From there, count completions: exactly $3$. Total $18$ paths.`,
  steps: [
    { title: 'Completions',
      explain: R`Label vertices as binary strings. Start $000\to001\to011$. Then $011\to010\to110$ gives $2$ endings ($\to111\to101\to100$ or $\to100\to101\to111$); $011\to111\to101\to100\to110\to010$ gives $1$. So $3$.`,
      check: { q: R`After $000\to001\to011\to111\to110$, can the bug still finish?`, opts: [R`\text{No}`, R`\text{Yes, one way}`, R`\text{Yes, two ways}`, R`\text{Yes, always}`], ans: 0, why: R`It gets stuck leaving $010$ or $100$/$101$ unvisited.` } },
    { title: 'Probability',
      explain: R`$3\cdot2\cdot3=18$ paths; $\tfrac{18}{2187}=\tfrac2{243}$.`,
      check: { q: R`Simplify $\tfrac{18}{2187}$.`, opts: [R`\tfrac2{243}`, R`\tfrac1{81}`, R`\tfrac{2}{729}`, R`\tfrac{6}{729}`], ans: 0, why: R`Divide by $9$.` } }
  ],
  bridge: R`Count Hamiltonian paths using symmetry for the first two moves.`,
  solution: [
    R`First two moves: $3\cdot2=6$ equivalent beginnings.`,
    R`Each extends to $3$ Hamiltonian paths.`,
    R`$18$ paths out of $3^7$: $\tfrac2{243}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac2{243}$.`
  ],
  shortcut: R`Equivalently: each move must avoid visited vertices; multiply the probabilities along the tree.`,
  traps: [R`Assuming any non-backtracking walk works.`, R`Dividing by $8!$.`],
  recognize: R`Random walks covering every vertex once: count Hamiltonian paths and use symmetry.`
}

};
