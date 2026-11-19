// Hand-written lessons: 2002 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2002A16': {
  answer: 'B',
  goal: R`$a+1=b+2=c+3=d+4=a+b+c+d+5$. We want $S=a+b+c+d$. Call the common value $k$ and write everything in terms of $k$.`,
  tools: [
    { name: 'Common value', fact: R`a=k-1,\ b=k-2,\ c=k-3,\ d=k-4`, why: R`Each expression equals $k$.` },
    { name: 'Self-reference', fact: R`k=S+5`, why: R`The last expression.` }
  ],
  approach: R`$S=4k-10$ and $k=S+5$. Substitute: $S=4S+10$, so $S=-\tfrac{10}3$.`,
  steps: [
    { title: 'Sum in $k$',
      explain: R`$S=(k-1)+(k-2)+(k-3)+(k-4)=4k-10$.`,
      check: { q: R`What is $1+2+3+4$?`, opts: [R`10`, R`9`, R`8`, R`12`], ans: 0, why: R`Add.` } },
    { title: 'Solve',
      explain: R`$S=4(S+5)-10=4S+10\Rightarrow-3S=10\Rightarrow S=-\tfrac{10}3$.`,
      check: { q: R`If $S=4S+10$, what is $S$?`, opts: [R`-\tfrac{10}3`, R`\tfrac{10}3`, R`-\tfrac{3}{10}`, R`-10`], ans: 0, why: R`$-3S=10$.` } }
  ],
  bridge: R`Introduce $k$, then use $k=S+5$.`,
  solution: [
    R`$S=4k-10$ and $k=S+5$.`,
    R`$S=4S+10$, so $S=-\tfrac{10}3$.`,
    R`The answer is $\textbf{(B)}\ -\tfrac{10}3$.`
  ],
  shortcut: R`Add the four equations $a+1=S+5$, etc.: $S+10=4S+20$.`,
  traps: [R`Sign errors when solving.`, R`Setting $k=S$.`],
  recognize: R`Chains of equal expressions: name the common value.`
},

'2002A17': {
  answer: 'D',
  goal: R`Cup 1: $4$ oz coffee; cup 2: $4$ oz cream. Pour half of cup 1 into cup 2, mix, pour half of cup 2 back. We want the cream fraction in cup 1. Track amounts.`,
  tools: [
    { name: 'Mixture tracking', fact: R`\text{a well-mixed half carries half of each ingredient}`, why: R`Thorough stirring.` }
  ],
  approach: R`After step 1: cup 1 has $2$ coffee; cup 2 has $2$ coffee $+4$ cream. Pouring $3$ oz back brings $1$ coffee and $2$ cream. Cup 1: $3$ coffee, $2$ cream.`,
  steps: [
    { title: 'First pour',
      explain: R`Cup 1: $2$ coffee. Cup 2: $2$ coffee, $4$ cream ($6$ oz).`,
      check: { q: R`How much liquid is in cup 2 after the first pour?`, opts: [R`6\text{ oz}`, R`4\text{ oz}`, R`8\text{ oz}`, R`2\text{ oz}`], ans: 0, why: R`$4+2$.` } },
    { title: 'Second pour',
      explain: R`Half of cup 2: $1$ coffee $+2$ cream. Cup 1: $3$ coffee, $2$ cream; cream fraction $\tfrac25$.`,
      check: { q: R`What fraction of $3$ coffee $+2$ cream is cream?`, opts: [R`\tfrac25`, R`\tfrac23`, R`\tfrac13`, R`\tfrac12`], ans: 0, why: R`$\tfrac{2}{5}$.` } }
  ],
  bridge: R`Track coffee and cream separately.`,
  solution: [
    R`After pour 1: cup 2 is $2$ coffee $+4$ cream.`,
    R`Pour back $1$ coffee $+2$ cream.`,
    R`Cup 1: $3$ coffee, $2$ cream: $\tfrac25$ cream.`,
    R`The answer is $\textbf{(D)}\ \tfrac25$.`
  ],
  shortcut: R`A small table of amounts avoids all confusion.`,
  traps: [R`Answering $\tfrac13$ (cream fraction of cup 2).`, R`Pouring half of $8$ oz.`],
  recognize: R`Pouring mixtures back and forth: track each ingredient's amount.`
},

'2002A18': {
  answer: 'D',
  goal: R`$27$ dice make a $3\times3\times3$ cube. We want the smallest possible sum of visible faces. Corner dice show $3$ faces, edge dice $2$, face-centre dice $1$; choose the smallest faces each time.`,
  tools: [
    { name: 'Position counts', fact: R`8\text{ corners},\ 12\text{ edges},\ 6\text{ face centres}`, why: R`The centre die is hidden.` },
    { name: 'Adjacent faces', fact: R`1,2,3\text{ meet at a vertex}`, why: R`No two of them are opposite (opposites sum to $7$).` }
  ],
  approach: R`Corners: $1+2+3=6$ each. Edges: $1+2=3$ each. Face centres: $1$ each. Total $8\cdot6+12\cdot3+6\cdot1$.`,
  steps: [
    { title: 'Per position',
      explain: R`$1,2,3$ are mutually adjacent, so corners show $6$; edges show $1+2=3$; centres show $1$.`,
      check: { q: R`Can $1$ and $6$ both be visible on an edge die?`, opts: [R`\text{No, they're opposite}`, R`\text{Yes}`, R`\text{Only on corners}`, R`\text{Only on centres}`], ans: 0, why: R`$1+6=7$.` } },
    { title: 'Total',
      explain: R`$48+36+6=90$.`,
      check: { q: R`What is $8\cdot6+12\cdot3+6$?`, opts: [R`90`, R`84`, R`96`, R`72`], ans: 0, why: R`$48+36+6$.` } }
  ],
  bridge: R`Count positions by visible faces and use the smallest values.`,
  solution: [
    R`Corners: $8\cdot6=48$.`,
    R`Edges: $12\cdot3=36$.`,
    R`Face centres: $6\cdot1=6$.`,
    R`Total $90$.`,
    R`The answer is $\textbf{(D)}\ 90$.`
  ],
  shortcut: R`Check that the smallest numbers can share a vertex: $1,2,3$ can.`,
  traps: [R`Counting the hidden centre die.`, R`Using $1+1$ on edges.`],
  recognize: R`Visible faces of a built cube: classify positions as corner/edge/centre.`
},

'2002A19': {
  answer: 'E',
  goal: R`A dog tied with a $2$-yd rope to a vertex of a regular hexagon (side $1$). We want the reachable area outside the hexagon: a big sector plus two small sectors when the rope wraps around the neighbouring corners.`,
  tools: [
    { name: 'Outside angle at a vertex', fact: R`360^\circ-120^\circ=240^\circ`, why: R`Interior angle of a regular hexagon.` },
    { name: 'Wrapping', fact: R`\text{at a neighbour, }1\text{ yd left, sweeping }60^\circ`, why: R`The exterior angle of a hexagon is $60^\circ$.` }
  ],
  approach: R`Big sector: $\tfrac{240}{360}\cdot\pi\cdot4=\tfrac{8\pi}3$. Two small sectors: $2\cdot\tfrac{60}{360}\cdot\pi\cdot1=\tfrac\pi3$. Total $3\pi$.`,
  steps: [
    { title: 'Big sector',
      explain: R`$\tfrac23\cdot4\pi=\tfrac{8\pi}{3}$.`,
      check: { q: R`What fraction of a circle is $240^\circ$?`, opts: [R`\tfrac23`, R`\tfrac34`, R`\tfrac12`, R`\tfrac13`], ans: 0, why: R`$240/360$.` } },
    { title: 'Small sectors',
      explain: R`Each: $\tfrac16\cdot\pi\cdot1^2=\tfrac\pi6$; two make $\tfrac\pi3$. Total $3\pi$.`,
      check: { q: R`What is $\tfrac{8\pi}3+\tfrac\pi3$?`, opts: [R`3\pi`, R`\tfrac{7\pi}{3}`, R`\tfrac{10\pi}{3}`, R`2\pi`], ans: 0, why: R`$\tfrac{9\pi}{3}$.` } }
  ],
  bridge: R`Big sector plus two wrap-around sectors.`,
  solution: [
    R`$240^\circ$ sector of radius $2$: $\tfrac{8\pi}3$.`,
    R`Two $60^\circ$ sectors of radius $1$: $\tfrac\pi3$.`,
    R`Total $3\pi$.`,
    R`The answer is $\textbf{(E)}\ 3\pi$.`
  ],
  shortcut: R`Rope length $2$ = two sides, so the wrap stops before reaching the next vertex beyond.`,
  traps: [R`Forgetting the wrap-around sectors ($\tfrac{8\pi}{3}$).`, R`Using a $300^\circ$ sector.`],
  recognize: R`Tethered animals around polygons: sectors that shrink as the rope wraps corners.`
},

'2002A20': {
  answer: 'D',
  goal: R`$A,\ldots,F$ are equally spaced (gap $1$) on a line; $G$ is off it, $H$ on $GD$, $J$ on $GF$, with $HC\parallel JE\parallel AG$. We want $\tfrac{HC}{JE}$. Use similar triangles with $AG$.`,
  tools: [
    { name: 'Similar triangles from parallels', fact: R`\triangle DCH\sim\triangle DAG,\ \triangle FEJ\sim\triangle FAG`, why: R`$HC\parallel AG$ and $JE\parallel AG$.` }
  ],
  approach: R`$\tfrac{HC}{AG}=\tfrac{DC}{DA}=\tfrac13$ and $\tfrac{JE}{AG}=\tfrac{FE}{FA}=\tfrac15$. Ratio $\tfrac{1/3}{1/5}=\tfrac53$.`,
  steps: [
    { title: 'Two ratios',
      explain: R`$DC=1$, $DA=3$: $HC=\tfrac{AG}3$. $FE=1$, $FA=5$: $JE=\tfrac{AG}5$.`,
      check: { q: R`What is $DA$?`, opts: [R`3`, R`4`, R`2`, R`5`], ans: 0, why: R`$A$ to $D$ spans three gaps.` } },
    { title: 'Divide',
      explain: R`$\tfrac{HC}{JE}=\tfrac{5}{3}$.`,
      check: { q: R`What is $\tfrac{1/3}{1/5}$?`, opts: [R`\tfrac53`, R`\tfrac35`, R`\tfrac{1}{15}`, R`2`], ans: 0, why: R`$\tfrac13\cdot5$.` } }
  ],
  bridge: R`Compare each segment to $AG$.`,
  solution: [
    R`$HC=\tfrac13AG$ and $JE=\tfrac15AG$.`,
    R`$\tfrac{HC}{JE}=\tfrac53$.`,
    R`The answer is $\textbf{(D)}\ \tfrac53$.`
  ],
  shortcut: R`Parallel segments to a common side scale with their distance from the shared vertex.`,
  traps: [R`Measuring from $A$ instead of from $D$ and $F$.`, R`Inverting the ratio.`],
  recognize: R`Several parallel segments in a triangle: each is a scaled copy of the base.`
},

'2002A21': {
  answer: 'D',
  goal: R`Eight integers with mean, median, unique mode and range all $8$. We want the largest possible element $M$. Sum is $64$ and the minimum is $M-8$; make the other numbers as small as possible.`,
  tools: [
    { name: 'Sum', fact: R`\text{total}=64`, why: R`Mean $8$.` },
    { name: 'Lower bound', fact: R`\text{every element}\ge M-8`, why: R`Range $8$.` },
    { name: 'Median', fact: R`a_4+a_5=16`, why: R`Middle two of eight.` }
  ],
  approach: R`Try $6,6,6,8,8,8,8,14$: sum $64$, median $8$, mode $8$ (four times beats three), range $8$. For $M=15$, the minimum $7$ forces six middle numbers summing to $42$, i.e. all $7$, which breaks the median.`,
  steps: [
    { title: 'Construct $M=14$',
      explain: R`$3(6)+4(8)+14=18+32+14=64$. All four conditions hold.`,
      check: { q: R`Why can the three $6$s coexist with the mode $8$?`, opts: [R`8\text{ appears four times}`, R`6\text{ is smaller}`, R`\text{Modes can tie}`, R`\text{They can't}`], ans: 0, why: R`$4>3$ keeps the mode unique.` } },
    { title: 'Rule out $15$',
      explain: R`With $M=15$: minimum $7$, the other six sum to $64-15-7=42$, each $\ge7$, so all are $7$. Then the median is $7$, not $8$.`,
      check: { q: R`What is $64-15-7$?`, opts: [R`42`, R`44`, R`40`, R`36`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Build a $14$ example; show $15$ is impossible.`,
  solution: [
    R`$\{6,6,6,8,8,8,8,14\}$ satisfies everything.`,
    R`$M=15$ forces all middle values to be $7$: contradiction.`,
    R`Largest is $14$.`,
    R`The answer is $\textbf{(D)}\ 14$.`
  ],
  shortcut: R`To maximise one element under a fixed sum, push all others to their lower bounds.`,
  traps: [R`Making the mode non-unique.`, R`Ignoring the range condition on the minimum.`],
  recognize: R`Extremal statistics: fix the sum and push other values to their bounds.`
},

'2002A22': {
  answer: 'C',
  goal: R`Start with $100$ tiles; each step removes the perfect-square-numbered tiles ($\lfloor\sqrt n\rfloor$ of them) and renumbers. We want the number of steps to reach $1$ tile.`,
  tools: [
    { name: 'Removed per step', fact: R`n\to n-\lfloor\sqrt n\rfloor`, why: R`Squares $1,4,\ldots,\lfloor\sqrt n\rfloor^2$.` },
    { name: 'Two steps per square', fact: R`k^2\to k^2-k\to(k-1)^2`, why: R`$\lfloor\sqrt{k^2-k}\rfloor=k-1$.` }
  ],
  approach: R`From $k^2$ it takes exactly $2$ steps to reach $(k-1)^2$. From $10^2$ down to $1^2$: $9$ drops, $18$ steps.`,
  steps: [
    { title: 'Pattern',
      explain: R`$100\to90\to81\to72\to64\to\cdots$`,
      check: { q: R`From $90$ tiles, how many are removed?`, opts: [R`9`, R`10`, R`8`, R`3`], ans: 0, why: R`$\lfloor\sqrt{90}\rfloor=9$.` } },
    { title: 'Count',
      explain: R`$9$ square-to-square drops ($10^2\to1^2$), each $2$ steps: $18$.`,
      check: { q: R`Why is $\lfloor\sqrt{k^2-k}\rfloor=k-1$?`, opts: [R`(k-1)^2\le k^2-k<k^2`, R`k^2-k=(k-1)^2`, R`\text{It's always }k`, R`\text{Only for even }k`], ans: 0, why: R`$(k-1)^2=k^2-2k+1\le k^2-k$.` } }
  ],
  bridge: R`Two steps per perfect square.`,
  solution: [
    R`Each step removes $\lfloor\sqrt n\rfloor$ tiles.`,
    R`$k^2\to k^2-k\to(k-1)^2$.`,
    R`$100\to1$: $2\cdot9=18$ steps.`,
    R`The answer is $\textbf{(C)}\ 18$.`
  ],
  shortcut: R`Write out the first few: $100,90,81,72,64$ — the pattern is clear.`,
  traps: [R`Counting $10$ drops instead of $9$.`, R`Assuming $10$ removed every time.`],
  recognize: R`Repeated removal by a rule: find what happens between perfect squares.`
},

'2002A23': {
  answer: 'D',
  goal: R`On a line $A,B,C,D$ with $AB=CD=x$, $BC=12$; $E$ above with $BE=CE=10$. Perimeter $AED$ is twice perimeter $BEC$. We want $x$.`,
  tools: [
    { name: 'Altitude', fact: R`\sqrt{10^2-6^2}=8`, why: R`$E$ is above the midpoint of $BC$.` },
    { name: 'Distance', fact: R`AE=\sqrt{(6+x)^2+64}`, why: R`Horizontal $6+x$, vertical $8$.` }
  ],
  approach: R`$2\sqrt{(6+x)^2+64}+12+2x=64$, so $\sqrt{(6+x)^2+64}=26-x$. Square and solve.`,
  steps: [
    { title: 'Equation',
      explain: R`Perimeter $BEC=32$, so $AED=64$. $AD=12+2x$.`,
      check: { q: R`What is the perimeter of $\triangle BEC$?`, opts: [R`32`, R`22`, R`30`, R`28`], ans: 0, why: R`$10+10+12$.` } },
    { title: 'Solve',
      explain: R`$(6+x)^2+64=(26-x)^2\Rightarrow100+12x=676-52x\Rightarrow64x=576\Rightarrow x=9$.`,
      check: { q: R`If $64x=576$, what is $x$?`, opts: [R`9`, R`8`, R`7.5`, R`9.5`], ans: 0, why: R`$576/64$.` } }
  ],
  bridge: R`Write $AE$ with the altitude $8$ and solve.`,
  solution: [
    R`Altitude from $E$: $8$; $AE=DE=\sqrt{(6+x)^2+64}$.`,
    R`$2\sqrt{(6+x)^2+64}+12+2x=64$.`,
    R`$x=9$.`,
    R`The answer is $\textbf{(D)}\ 9$.`
  ],
  shortcut: R`Check: $AE=\sqrt{225+64}=17$; $17+17+30=64$. ✓`,
  traps: [R`Using $AE=10+x$.`, R`Forgetting $AD$ includes $BC$.`],
  recognize: R`Symmetric points on a line with an apex: drop the altitude and use Pythagoras.`
},

'2002A24': {
  answer: 'A',
  goal: R`Tina picks $2$ distinct numbers from $1$–$5$; Sergio picks from $1$–$10$. We want $P(\text{Sergio}>\text{Tina's sum})$. Average over Tina's $10$ pairs.`,
  tools: [
    { name: 'Tina\'s sums', fact: R`3,4,5,5,6,6,7,7,8,9`, why: R`All $\binom52=10$ pairs.` },
    { name: 'Sergio wins', fact: R`P=\tfrac{10-s}{10}`, why: R`Numbers $s+1,\ldots,10$.` }
  ],
  approach: R`$\sum(10-s)=7+6+5+5+4+4+3+3+2+1=40$. Probability $\tfrac{40}{100}=\tfrac25$.`,
  steps: [
    { title: 'Sums',
      explain: R`Pairs and sums: $3,4,5,5,6,6,7,7,8,9$.`,
      check: { q: R`How many pairs sum to $5$?`, opts: [R`2`, R`1`, R`3`, R`0`], ans: 0, why: R`$(1,4)$ and $(2,3)$.` } },
    { title: 'Average',
      explain: R`$\tfrac{1}{10}\sum\tfrac{10-s}{10}=\tfrac{40}{100}=\tfrac25$.`,
      check: { q: R`What is $7+6+5+5+4+4+3+3+2+1$?`, opts: [R`40`, R`45`, R`36`, R`38`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`For each pair, count Sergio's winning numbers.`,
  solution: [
    R`Winning Sergio counts: $7,6,5,5,4,4,3,3,2,1$ (total $40$).`,
    R`$P=\tfrac{40}{10\cdot10}=\tfrac25$.`,
    R`The answer is $\textbf{(A)}\ \tfrac25$.`
  ],
  shortcut: R`Average sum is $6$; $P\approx\tfrac{10-6}{10}=\tfrac25$ exactly, since $P$ is linear in $s$.`,
  traps: [R`Allowing Tina to pick the same number twice.`, R`Counting ties as wins.`],
  recognize: R`Comparing two random quantities: condition on the one with fewer outcomes.`
},

'2002A25': {
  answer: 'C',
  goal: R`Trapezoid with bases $52$ and $39$, legs $12$ and $5$. We want the area, so we need the height. Slide the legs together to form a triangle.`,
  tools: [
    { name: 'Leg triangle', fact: R`\text{sides }5,12,13`, why: R`The base difference $52-39=13$ with the two legs.` },
    { name: 'Height', fact: R`h=\tfrac{5\cdot12}{13}=\tfrac{60}{13}`, why: R`Altitude to the hypotenuse of a $5$-$12$-$13$ right triangle.` }
  ],
  approach: R`Translate one leg to meet the other: triangle $5,12,13$, right-angled. Its altitude to the side $13$ is the trapezoid's height. Area $=\tfrac{52+39}2\cdot\tfrac{60}{13}$.`,
  steps: [
    { title: 'Height',
      explain: R`$h=\tfrac{60}{13}$.`,
      check: { q: R`What is the altitude to the hypotenuse of a $5$-$12$-$13$ triangle?`, opts: [R`\tfrac{60}{13}`, R`5`, R`\tfrac{13}{2}`, R`12`], ans: 0, why: R`$\tfrac{\text{leg}\cdot\text{leg}}{\text{hyp}}$.` } },
    { title: 'Area',
      explain: R`$\tfrac{91}2\cdot\tfrac{60}{13}=7\cdot30=210$.`,
      check: { q: R`What is $\tfrac{91}{2}\cdot\tfrac{60}{13}$?`, opts: [R`210`, R`195`, R`182`, R`234`], ans: 0, why: R`$\tfrac{91}{13}=7$, $\tfrac{60}{2}=30$.` } }
  ],
  bridge: R`Form the leg triangle to get the height.`,
  solution: [
    R`Legs with base difference form a $5$-$12$-$13$ triangle.`,
    R`$h=\tfrac{60}{13}$.`,
    R`Area $=\tfrac{91}{2}\cdot\tfrac{60}{13}=210$.`,
    R`The answer is $\textbf{(C)}\ 210$.`
  ],
  shortcut: R`Area $=[\text{leg triangle}]\cdot\tfrac{a+b}{a-b}=30\cdot\tfrac{91}{13}=210$.`,
  traps: [R`Using a leg as the height.`, R`Assuming a right trapezoid.`],
  recognize: R`Trapezoid with all four sides known: slide legs together to get a triangle.`
}

};
