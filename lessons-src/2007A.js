// Hand-written lessons: 2007 AMC 10A, Difficulty 4 and 5.
// #18 and #24 rely on figures; the coordinates below are reconstructions consistent with the answer key.
const R = String.raw;
module.exports = {

'2007A16': {
  answer: 'E',
  goal: R`$a,b,c,d$ are random from $0$–$2007$ (half even, half odd). We want $P(ad-bc\text{ even})$. Only parities matter: $ad-bc$ is even exactly when $ad$ and $bc$ have the same parity.`,
  tools: [
    { name: 'Parity of a product', fact: R`xy\text{ odd}\iff x,y\text{ both odd}`, why: R`So $P(\text{product odd})=\tfrac14$.` },
    { name: 'Independence', fact: R`P(\text{same})=P(\text{both odd})+P(\text{both even})`, why: R`$ad$ and $bc$ use different variables.` }
  ],
  approach: R`$P(ad\text{ odd})=\tfrac14$, $P(ad\text{ even})=\tfrac34$; same for $bc$. Same parity: $\left(\tfrac14\right)^2+\left(\tfrac34\right)^2$.`,
  steps: [
    { title: 'Each product',
      explain: R`$0$–$2007$ has $1004$ evens and $1004$ odds, so each variable is odd with probability $\tfrac12$. $P(ad\text{ odd})=\tfrac14$.`,
      check: { q: R`What is $P(ad\text{ even})$?`, opts: [R`\tfrac34`, R`\tfrac12`, R`\tfrac14`, R`\tfrac58`], ans: 0, why: R`$1-\tfrac14$.` } },
    { title: 'Same parity',
      explain: R`$\tfrac1{16}+\tfrac9{16}=\tfrac{10}{16}=\tfrac58$.`,
      check: { q: R`What is $\tfrac1{16}+\tfrac9{16}$?`, opts: [R`\tfrac58`, R`\tfrac12`, R`\tfrac9{16}`, R`\tfrac38`], ans: 0, why: R`$\tfrac{10}{16}$.` } }
  ],
  bridge: R`Even difference means equal parities.`,
  solution: [
    R`$P(ad\text{ odd})=P(bc\text{ odd})=\tfrac14$.`,
    R`$ad-bc$ even iff both odd or both even: $\tfrac1{16}+\tfrac9{16}$.`,
    R`$=\tfrac58$.`,
    R`The answer is $\textbf{(E)}\ \tfrac58$.`
  ],
  shortcut: R`$P(\text{odd difference})=2\cdot\tfrac14\cdot\tfrac34=\tfrac38$; subtract from $1$.`,
  traps: [R`Assuming $\tfrac12$ by symmetry.`, R`Using $\tfrac34$ for "even".`],
  recognize: R`Parity of expressions in random integers: reduce each variable to odd/even with probability $\tfrac12$.`
},

'2007A17': {
  answer: 'D',
  goal: R`$75m=n^3$ with positive integers; we want the smallest $m+n$. $n^3$ must contain $3\cdot5^2$, so every prime in $n^3$ needs an exponent that is a multiple of $3$.`,
  tools: [
    { name: 'Prime factorisation', fact: R`75=3\cdot5^2`, why: R`To make a cube we fill exponents up to multiples of $3$.` },
    { name: 'Smallest cube multiple', fact: R`3^3\cdot5^3=3375`, why: R`Exponents raised to $3$.` }
  ],
  approach: R`The smallest cube divisible by $75$ is $3^3\cdot5^3=15^3$. Then $m=\tfrac{3375}{75}=45$, $n=15$.`,
  steps: [
    { title: 'Smallest $n$',
      explain: R`$n$ must be divisible by $3$ and $5$: $n=15$.`,
      check: { q: R`What is the smallest cube divisible by $75$?`, opts: [R`3375`, R`375`, R`1125`, R`5625`], ans: 0, why: R`$15^3$.` } },
    { title: 'Sum',
      explain: R`$m=3\cdot5=45$; $m+n=60$.`,
      check: { q: R`What is $3375/75$?`, opts: [R`45`, R`15`, R`75`, R`25`], ans: 0, why: R`$75\cdot45=3375$.` } }
  ],
  bridge: R`Complete $75$ to a cube.`,
  solution: [
    R`$75m$ must be a cube: $m$ supplies $3^2\cdot5$.`,
    R`$m=45$, $n=15$.`,
    R`$m+n=60$.`,
    R`The answer is $\textbf{(D)}\ 60$.`
  ],
  shortcut: R`Larger $n$ makes both $m$ and $n$ bigger, so the smallest $n$ wins.`,
  traps: [R`Taking $m=75^2$ (making $75^3$).`, R`Giving $m$ alone.`],
  recognize: R`"$km$ is a perfect power": fill each prime's exponent up to the next multiple.`
},

'2007A18': {
  answer: 'C',
  goal: R`A plus-shaped $12$-gon with sides $4$ and right angles; $AG$ and $CH$ meet at $M$. We want $[ABCM]$. Put it on coordinates and find $M$.`,
  tools: [
    { name: 'Coordinates', fact: R`A(4,12),B(8,12),C(8,8),\ldots,G(8,0),H(4,0)`, why: R`Going around the cross with steps of $4$.` },
    { name: 'Line intersection', fact: R`\text{parametrise both segments}`, why: R`Solve for the common point.` },
    { name: 'Shoelace / splitting', fact: R`[ABCM]=[ABC]+[ACM]`, why: R`Split along the diagonal $AC$.` }
  ],
  approach: R`With the cross on a $12\times12$ grid, $AG$ runs $(4,12)\to(8,0)$ and $CH$ runs $(8,8)\to(4,0)$. They meet at $M=\left(\tfrac{32}5,\tfrac{24}5\right)$. Add $[ABC]=8$ and $[ACM]$.`,
  steps: [
    { title: 'Find $M$',
      explain: R`$AG$: $(4+4s,\,12-12s)$. $CH$: $(8-4t,\,8-8t)$. Then $s=1-t$ and $12t=8-8t$, so $t=\tfrac25$ and $M=\left(\tfrac{32}5,\tfrac{24}5\right)$.`,
      check: { q: R`If $12t=8-8t$, what is $t$?`, opts: [R`\tfrac25`, R`\tfrac23`, R`\tfrac12`, R`\tfrac35`], ans: 0, why: R`$20t=8$.` } },
    { title: 'Area',
      explain: R`$[ABC]=\tfrac12\cdot4\cdot4=8$. $[ACM]=\tfrac12\left|4(8-\tfrac{24}5)+8(\tfrac{24}5-12)+\tfrac{32}5(12-8)\right|=\tfrac{48}5$. Total $\tfrac{88}5$.`,
      check: { q: R`What is $8+\tfrac{48}{5}$?`, opts: [R`\tfrac{88}5`, R`\tfrac{56}5`, R`16`, R`\tfrac{44}3`], ans: 0, why: R`$\tfrac{40+48}{5}$.` } }
  ],
  bridge: R`Coordinates, intersection, then split the quadrilateral.`,
  solution: [
    R`$M=\left(\tfrac{32}5,\tfrac{24}5\right)$.`,
    R`$[ABC]=8$, $[ACM]=\tfrac{48}5$.`,
    R`$[ABCM]=\tfrac{88}5$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{88}5$.`
  ],
  shortcut: R`Shoelace on $A,B,C,M$ directly: $\tfrac12|{-48}-32-12.8+57.6|=17.6$.`,
  traps: [R`Assuming $M$ is the centre of the cross.`, R`Ordering the quadrilateral's vertices wrongly in shoelace.`],
  recognize: R`Grid-shaped figures: coordinates make intersections and areas mechanical.`
},

'2007A19': {
  answer: 'C',
  goal: R`A brush of width $w$ paints both diagonals of a square of side $s$, covering half of it. We want $\tfrac sw$. The unpainted part is four isosceles right triangles, one on each side.`,
  tools: [
    { name: 'Unpainted triangle', fact: R`\text{area}=h^2`, why: R`An isosceles right triangle with hypotenuse on the side and height $h$ has area $h^2$.` },
    { name: 'Height', fact: R`h=\tfrac s2-\tfrac{w}{\sqrt2}`, why: R`The triangle's apex sits where two stroke edges meet, $\tfrac{w/2}{\sin45^\circ}=\tfrac w{\sqrt2}$ from the centre.` }
  ],
  approach: R`Unpainted $=4h^2=\tfrac{s^2}2$, so $h=\tfrac{s}{2\sqrt2}$. Set $\tfrac s2-\tfrac w{\sqrt2}=\tfrac{s}{2\sqrt2}$ and solve for $\tfrac sw$.`,
  steps: [
    { title: 'Height of a gap',
      explain: R`$4h^2=\tfrac{s^2}{2}$ gives $h=\tfrac{s}{2\sqrt2}$.`,
      check: { q: R`If $4h^2=\tfrac{s^2}2$, what is $h$?`, opts: [R`\tfrac{s}{2\sqrt2}`, R`\tfrac s4`, R`\tfrac{s}{\sqrt2}`, R`\tfrac{s}{8}`], ans: 0, why: R`$h^2=\tfrac{s^2}8$.` } },
    { title: 'Solve',
      explain: R`$\tfrac s2-\tfrac{s}{2\sqrt2}=\tfrac w{\sqrt2}$. Multiply by $2\sqrt2$: $s(\sqrt2-1)=2w$, so $\tfrac sw=\tfrac2{\sqrt2-1}=2\sqrt2+2$.`,
      check: { q: R`What is $\tfrac{2}{\sqrt2-1}$?`, opts: [R`2\sqrt2+2`, R`2\sqrt2-2`, R`\sqrt2+1`, R`3\sqrt2`], ans: 0, why: R`Multiply by $\tfrac{\sqrt2+1}{\sqrt2+1}$.` } }
  ],
  bridge: R`Write the gap's height two ways.`,
  solution: [
    R`Unpainted: $4$ triangles of area $h^2$, total $\tfrac{s^2}2$, so $h=\tfrac{s}{2\sqrt2}$.`,
    R`Also $h=\tfrac s2-\tfrac w{\sqrt2}$.`,
    R`$\tfrac sw=\tfrac{2}{\sqrt2-1}=2\sqrt2+2$.`,
    R`The answer is $\textbf{(C)}\ 2\sqrt2+2$.`
  ],
  shortcut: R`Estimate: half painted means a thick brush; $\tfrac sw\approx4.8$ matches (C).`,
  traps: [R`Taking the apex distance as $\tfrac w2$.`, R`Computing the painted area as $2sw\sqrt2$ without the overlap.`],
  recognize: R`Painted strips: it's often easier to compute the unpainted pieces.`
},

'2007A20': {
  answer: 'D',
  goal: R`$a+a^{-1}=4$; we want $a^4+a^{-4}$. Square twice.`,
  tools: [
    { name: 'Squaring identity', fact: R`(x+x^{-1})^2=x^2+x^{-2}+2`, why: R`The cross term is $2x\cdot x^{-1}=2$.` }
  ],
  approach: R`$a^2+a^{-2}=16-2=14$, then $a^4+a^{-4}=196-2=194$.`,
  steps: [
    { title: 'First square',
      explain: R`$a^2+a^{-2}=4^2-2=14$.`,
      check: { q: R`What is $(a+a^{-1})^2$ in terms of $a^2+a^{-2}$?`, opts: [R`a^2+a^{-2}+2`, R`a^2+a^{-2}`, R`a^2+a^{-2}-2`, R`a^2+a^{-2}+1`], ans: 0, why: R`Cross term $2$.` } },
    { title: 'Second square',
      explain: R`$a^4+a^{-4}=14^2-2=194$.`,
      check: { q: R`What is $14^2-2$?`, opts: [R`194`, R`196`, R`192`, R`198`], ans: 0, why: R`$196-2$.` } }
  ],
  bridge: R`Square, subtract $2$, repeat.`,
  solution: [
    R`$a^2+a^{-2}=14$.`,
    R`$a^4+a^{-4}=194$.`,
    R`The answer is $\textbf{(D)}\ 194$.`
  ],
  shortcut: R`The map $t\mapsto t^2-2$ takes $a^k+a^{-k}$ to $a^{2k}+a^{-2k}$.`,
  traps: [R`Forgetting to subtract $2$ ($196$).`, R`Subtracting $4$.`],
  recognize: R`Symmetric sums $x^n+x^{-n}$: square and subtract $2$.`
},

'2007A21': {
  answer: 'C',
  goal: R`Cube (surface $24$) → inscribed sphere → inscribed cube. We want the inner cube's surface area. The sphere's diameter is the outer side and the inner space diagonal.`,
  tools: [
    { name: 'Inscribed sphere', fact: R`\text{diameter}=\text{outer side}`, why: R`It touches all faces.` },
    { name: 'Cube in sphere', fact: R`\text{space diagonal}=s\sqrt3=\text{diameter}`, why: R`Opposite vertices are on the sphere.` }
  ],
  approach: R`Outer side $2$. Inner $s\sqrt3=2$, so $s^2=\tfrac43$ and surface $=6\cdot\tfrac43=8$.`,
  steps: [
    { title: 'Diameter',
      explain: R`$6s^2=24$, so the outer side is $2$; the sphere's diameter is $2$.`,
      check: { q: R`A cube has surface area $24$. Its side?`, opts: [R`2`, R`4`, R`\sqrt6`, R`3`], ans: 0, why: R`$6s^2=24$.` } },
    { title: 'Inner cube',
      explain: R`$s\sqrt3=2$: $s^2=\tfrac43$; surface $8$.`,
      check: { q: R`What is $6\cdot\tfrac43$?`, opts: [R`8`, R`6`, R`4`, R`12`], ans: 0, why: R`$\tfrac{24}{3}$.` } }
  ],
  bridge: R`Outer side = diameter = inner space diagonal.`,
  solution: [
    R`Outer side $2$, sphere diameter $2$.`,
    R`Inner side $\tfrac2{\sqrt3}$, surface $6\cdot\tfrac43=8$.`,
    R`The answer is $\textbf{(C)}\ 8$.`
  ],
  shortcut: R`Surface areas scale with $\left(\tfrac{1}{\sqrt3}\right)^2$: $24\cdot\tfrac13=8$.`,
  traps: [R`Using the face diagonal ($s\sqrt2$).`, R`Answering the side length.`],
  recognize: R`Nested cube–sphere–cube: side, diameter, space diagonal.`
},

'2007A22': {
  answer: 'D',
  goal: R`Three-digit terms whose digits shift along cyclically. We want the largest prime that always divides the sum $S$. Each digit shows up once in each place value.`,
  tools: [
    { name: 'Place-value bookkeeping', fact: R`S=111\cdot(\text{sum of hundreds digits})`, why: R`The hundreds, tens and units columns contain the same digits.` },
    { name: 'Factor 111', fact: R`111=3\cdot37`, why: R`So $37$ always divides $S$.` }
  ],
  approach: R`Every digit that appears as a hundreds digit also appears once as a tens and once as a units digit. So $S=(100+10+1)k=111k$ where $k$ is the sum of hundreds digits.`,
  steps: [
    { title: 'Columns',
      explain: R`The tens digits are the hundreds digits shifted one term along, and the units digits shifted two. All three columns have the same digit sum $k$.`,
      check: { q: R`What is $S$ in terms of $k$?`, opts: [R`111k`, R`100k`, R`3k`, R`37k`], ans: 0, why: R`$100k+10k+k$.` } },
    { title: 'Prime factor',
      explain: R`$111=3\cdot37$; $k$ can be anything, so the largest guaranteed prime is $37$.`,
      check: { q: R`Factor $111$.`, opts: [R`3\cdot37`, R`3\cdot47`, R`11\cdot11`, R`7\cdot17`], ans: 0, why: R`$3\cdot37=111$.` } }
  ],
  bridge: R`Each column sums to the same $k$.`,
  solution: [
    R`Columns have equal digit sums $k$.`,
    R`$S=111k=3\cdot37\cdot k$.`,
    R`Largest prime always dividing $S$: $37$.`,
    R`The answer is $\textbf{(D)}\ 37$.`
  ],
  shortcut: R`Check: $247+475+758+582+824=2886=37\cdot78$.`,
  traps: [R`Answering $3$ (true but not largest).`, R`Thinking $k$ must be a multiple of something.`],
  recognize: R`Cyclic digit shifts: column sums are equal, so the total is a multiple of $111\ldots1$.`
},

'2007A23': {
  answer: 'B',
  goal: R`Count pairs $m\ge n\ge1$ with $m^2-n^2=96$. Factor as $(m-n)(m+n)=96$; the factors must have the same parity.`,
  tools: [
    { name: 'Difference of squares', fact: R`m^2-n^2=(m-n)(m+n)`, why: R`Turns the problem into factor pairs.` },
    { name: 'Same parity', fact: R`m-n\equiv m+n\pmod2`, why: R`Their sum $2m$ is even.` }
  ],
  approach: R`$96$ is even, so both factors are even: $(2,48),(4,24),(6,16),(8,12)$. Each gives one pair with $n>0$.`,
  steps: [
    { title: 'Even factor pairs',
      explain: R`$96=2\cdot48=4\cdot24=6\cdot16=8\cdot12$ (both even, smaller first).`,
      check: { q: R`Why is $(1,96)$ not allowed?`, opts: [R`\text{Different parity}`, R`1\text{ is too small}`, R`96\text{ is too big}`, R`\text{It is allowed}`], ans: 0, why: R`$m=\tfrac{97}{2}$ is not an integer.` } },
    { title: 'Count',
      explain: R`$(m,n)=(25,23),(14,10),(11,5),(10,2)$: $4$ pairs.`,
      check: { q: R`For $(m-n,m+n)=(6,16)$, what is $(m,n)$?`, opts: [R`(11,5)`, R`(10,6)`, R`(11,6)`, R`(8,3)`], ans: 0, why: R`$m=\tfrac{22}{2}$, $n=\tfrac{10}{2}$.` } }
  ],
  bridge: R`Count factor pairs of $96$ with both factors even.`,
  solution: [
    R`$(m-n)(m+n)=96$, both factors even.`,
    R`Pairs $(2,48),(4,24),(6,16),(8,12)$.`,
    R`$4$ ordered pairs.`,
    R`The answer is $\textbf{(B)}\ 4$.`
  ],
  shortcut: R`Write $m-n=2a$, $m+n=2b$: $ab=24$ with $a<b$, and $24$ has $4$ such pairs.`,
  traps: [R`Including odd–even pairs.`, R`Counting $(m,n)$ and $(n,m)$ separately.`],
  recognize: R`Differences of squares equal to $N$: factor pairs of $N$ with matching parity.`
},

'2007A24': {
  answer: 'B',
  goal: R`Circles at $A$ and $B$ (radius $2$), $O$ the midpoint with $OA=2\sqrt2$; tangents $OC$, $OD$ and the common tangent $EF$ bound region $ECODF$. Its area is the rectangle $ABFE$ minus two right triangles and two sectors.`,
  tools: [
    { name: 'Tangent length', fact: R`OC=\sqrt{OA^2-r^2}=2`, why: R`Radius $\perp$ tangent.` },
    { name: 'Angles at $A$', fact: R`\angle OAC=45^\circ,\ \angle OAE=90^\circ`, why: R`$\triangle OAC$ is isosceles right; $AE\perp EF\parallel AB$.` },
    { name: 'Sector', fact: R`\tfrac{45}{360}\cdot\pi\cdot2^2=\tfrac\pi2`, why: R`Sector $CAE$.` }
  ],
  approach: R`Rectangle $ABFE$: $4\sqrt2\times2=8\sqrt2$. Remove triangles $OAC$, $OBD$ (area $2$ each) and sectors $CAE$, $DBF$ ($\tfrac\pi2$ each).`,
  steps: [
    { title: 'Pieces',
      explain: R`$OC=\sqrt{8-4}=2$, so $\triangle OAC$ is a right isosceles triangle with area $\tfrac12\cdot2\cdot2=2$ and $\angle OAC=45^\circ$. Sector $CAE$: $90^\circ-45^\circ=45^\circ$, area $\tfrac\pi2$.`,
      check: { q: R`What is $\sqrt{(2\sqrt2)^2-2^2}$?`, opts: [R`2`, R`\sqrt2`, R`2\sqrt3`, R`4`], ans: 0, why: R`$\sqrt{8-4}$.` } },
    { title: 'Subtract',
      explain: R`$8\sqrt2-2\cdot2-2\cdot\tfrac\pi2=8\sqrt2-4-\pi$.`,
      check: { q: R`What is the area of rectangle $ABFE$?`, opts: [R`8\sqrt2`, R`4\sqrt2`, R`16`, R`8`], ans: 0, why: R`$AB=4\sqrt2$, height $2$.` } }
  ],
  bridge: R`Rectangle minus triangles minus sectors.`,
  solution: [
    R`$[ABFE]=8\sqrt2$.`,
    R`$[OAC]=[OBD]=2$; sectors $CAE$, $DBF$ each $\tfrac\pi2$.`,
    R`Shaded $=8\sqrt2-4-\pi$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Curvy regions bounded by tangents: big polygon minus right triangles minus sectors.`,
  traps: [R`Using a $90^\circ$ sector.`, R`Forgetting one of the triangles.`],
  recognize: R`Regions between tangent lines and circles: rectangle/triangle pieces minus sectors.`
},

'2007A25': {
  answer: 'D',
  goal: R`Count $n$ with $n+S(n)+S(S(n))=2007$. Mod $9$ forces $3\mid n$, and size bounds limit $n$ to a short range.`,
  tools: [
    { name: 'Digit sums mod 9', fact: R`S(n)\equiv n\pmod9`, why: R`$10\equiv1\pmod9$.` },
    { name: 'Size bound', fact: R`S(n)\le28,\ S(S(n))\le10`, why: R`For $n\le2007$; so $n\ge1969$.` }
  ],
  approach: R`Mod $9$: $3n\equiv2007\equiv0$, so $n\equiv0\pmod3$. With $1969\le n\le2007$, test the multiples of $3$.`,
  steps: [
    { title: 'Restrictions',
      explain: R`$3n\equiv0\pmod9$ gives $3\mid n$. Since $S(n)+S(S(n))\le38$, $n\ge1969$.`,
      check: { q: R`What is $2007\bmod9$?`, opts: [R`0`, R`3`, R`6`, R`1`], ans: 0, why: R`Digit sum $9$.` } },
    { title: 'Test',
      explain: R`$1977$: $24,6$ ✓. $1980$: $18,9$ ✓. $1983$: $21,3$ ✓. $2001$: $3,3$ ✓. Others fail (e.g. $1971$: $18,9$ gives $1998$).`,
      check: { q: R`Check $1980$: what is $1980+S(1980)+S(S(1980))$?`, opts: [R`2007`, R`2016`, R`1998`, R`2001`], ans: 0, why: R`$1980+18+9$.` } }
  ],
  bridge: R`Use mod $9$ and bounds, then test a few candidates.`,
  solution: [
    R`$n\equiv0\pmod3$ and $n\ge1969$.`,
    R`Solutions: $1977,1980,1983,2001$.`,
    R`$4$ values.`,
    R`The answer is $\textbf{(D)}\ 4$.`
  ],
  shortcut: R`Mod $9$ cuts the candidates to about a dozen; checking them is quick.`,
  traps: [R`Missing $2001$ (on the other side of $2000$).`, R`Not bounding $n$ from below.`],
  recognize: R`Equations with digit sums: mod $9$ plus a size bound.`
}

};
