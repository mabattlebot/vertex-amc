// Hand-written lessons: 2004 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2004B16': {
  answer: 'D',
  goal: R`Three unit circles, mutually tangent, sit inside a larger circle touching it. We want the large radius. The small centres form an equilateral triangle of side $2$.`,
  tools: [
    { name: 'Circumradius', fact: R`\tfrac{s}{\sqrt3}`, why: R`For an equilateral triangle of side $s$.` },
    { name: 'Internal tangency', fact: R`R=\tfrac2{\sqrt3}+1`, why: R`Distance to a small centre plus its radius.` }
  ],
  approach: R`$R=1+\tfrac2{\sqrt3}=1+\tfrac{2\sqrt3}3=\tfrac{3+2\sqrt3}3$.`,
  steps: [
    { title: 'Centres',
      explain: R`Side $2$, circumradius $\tfrac2{\sqrt3}=\tfrac{2\sqrt3}{3}$.`,
      check: { q: R`What is the circumradius of an equilateral triangle with side $2$?`, opts: [R`\tfrac{2\sqrt3}3`, R`\sqrt3`, R`\tfrac{\sqrt3}{3}`, R`1`], ans: 0, why: R`$\tfrac{2}{\sqrt3}$.` } },
    { title: 'Big radius',
      explain: R`$R=1+\tfrac{2\sqrt3}3=\tfrac{3+2\sqrt3}{3}$.`,
      check: { q: R`What is $1+\tfrac{2\sqrt3}{3}$ as one fraction?`, opts: [R`\tfrac{3+2\sqrt3}3`, R`\tfrac{1+2\sqrt3}{3}`, R`\tfrac{3+\sqrt3}{3}`, R`\tfrac{2+2\sqrt3}{3}`], ans: 0, why: R`$\tfrac33+\tfrac{2\sqrt3}{3}$.` } }
  ],
  bridge: R`Circumradius of the centre triangle, plus $1$.`,
  solution: [
    R`Centres: equilateral, side $2$, circumradius $\tfrac{2\sqrt3}3$.`,
    R`$R=1+\tfrac{2\sqrt3}3=\tfrac{3+2\sqrt3}3$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`$R\approx2.15$; only (D) is about that size.`,
  traps: [R`Using the inradius $\tfrac{1}{\sqrt3}$.`, R`Forgetting to add $1$.`],
  recognize: R`Equal circles packed in a circle: the centres form a regular polygon.`
},

'2004B17': {
  answer: 'B',
  goal: R`Jack is $\overline{ab}$, Bill is $\overline{ba}$; in $5$ years Jack is twice Bill. We want the age difference $9(a-b)$.`,
  tools: [
    { name: 'Equation', fact: R`10a+b+5=2(10b+a+5)`, why: R`"In five years" adds $5$ to both.` },
    { name: 'Digit constraint', fact: R`0\le a,b\le9`, why: R`Leaves few solutions.` }
  ],
  approach: R`$8a=19b+5$. Try $b=1$: $a=3$. Ages $31$ and $13$, difference $18$.`,
  steps: [
    { title: 'Simplify',
      explain: R`$10a+b+5=20b+2a+10\Rightarrow8a=19b+5$.`,
      check: { q: R`For $b=1$, what is $a$?`, opts: [R`3`, R`2`, R`4`, R`24`], ans: 0, why: R`$8a=24$.` } },
    { title: 'Difference',
      explain: R`$31-13=18$. (Other $b$ give non-digit $a$.)`,
      check: { q: R`Check: in $5$ years, is $36=2\cdot18$?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only if }a=b`, R`\text{Off by }1`], ans: 0, why: R`$36=2\cdot18$.` } }
  ],
  bridge: R`Write the ages with digits and solve $8a=19b+5$.`,
  solution: [
    R`$8a=19b+5$ with digits: $a=3$, $b=1$.`,
    R`Ages $31$ and $13$.`,
    R`Difference $18$.`,
    R`The answer is $\textbf{(B)}\ 18$.`
  ],
  shortcut: R`The difference of reversed two-digit numbers is a multiple of $9$.`,
  traps: [R`Forgetting to add $5$ to both ages.`, R`Answering Jack's age.`],
  recognize: R`Reversed-digit ages: set up with $10a+b$ and $10b+a$.`
},

'2004B18': {
  answer: 'E',
  goal: R`Right triangle $ACE$ ($12$-$16$-$20$, right angle at $C$) with $AB=3$, $CD=4$, $EF=5$ — each a quarter of its side. We want $\tfrac{[DBF]}{[ACE]}$. Subtract the three corner triangles.`,
  tools: [
    { name: 'Corner triangle ratio', fact: R`\frac{[ABF]}{[ACE]}=\frac{AB}{AC}\cdot\frac{AF}{AE}`, why: R`Shared angle at $A$.` },
    { name: 'Each corner', fact: R`\tfrac14\cdot\tfrac34=\tfrac3{16}`, why: R`One side is cut at $\tfrac14$, the other at $\tfrac34$.` }
  ],
  approach: R`Each corner triangle is $\tfrac{3}{16}$ of $[ACE]$. Three of them: $\tfrac9{16}$. Remaining: $\tfrac7{16}$.`,
  steps: [
    { title: 'Corners',
      explain: R`At $A$: $\tfrac{3}{12}\cdot\tfrac{15}{20}=\tfrac3{16}$. At $C$: $\tfrac{9}{12}\cdot\tfrac{4}{16}=\tfrac3{16}$. At $E$: $\tfrac{12}{16}\cdot\tfrac{5}{20}=\tfrac3{16}$.`,
      check: { q: R`What is $\tfrac14\cdot\tfrac34$?`, opts: [R`\tfrac3{16}`, R`\tfrac14`, R`\tfrac1{16}`, R`\tfrac38`], ans: 0, why: R`Multiply.` } },
    { title: 'Subtract',
      explain: R`$1-3\cdot\tfrac3{16}=\tfrac7{16}$.`,
      check: { q: R`What is $1-\tfrac9{16}$?`, opts: [R`\tfrac7{16}`, R`\tfrac9{16}`, R`\tfrac{3}{8}`, R`\tfrac{5}{16}`], ans: 0, why: R`$\tfrac{16-9}{16}$.` } }
  ],
  bridge: R`Corner triangles via shared-angle ratios.`,
  solution: [
    R`Each corner triangle is $\tfrac3{16}$ of $[ACE]$.`,
    R`$[DBF]=\left(1-\tfrac9{16}\right)[ACE]$.`,
    R`Ratio $\tfrac7{16}$.`,
    R`The answer is $\textbf{(E)}\ \tfrac7{16}$.`
  ],
  shortcut: R`Same cut fraction $t$ on all sides: inner triangle $=1-3t(1-t)$.`,
  traps: [R`Using $\tfrac14\cdot\tfrac14$ for each corner.`, R`Subtracting only two corners.`],
  recognize: R`Triangle inside a triangle via points on sides: subtract corner triangles.`
},

'2004B19': {
  answer: 'C',
  goal: R`$a_n=a_{n-3}+a_{n-2}-a_{n-1}$ starting $2001,2002,2003$. We want $a_{2004}$. Look at consecutive-pair sums.`,
  tools: [
    { name: 'Pair sums', fact: R`a_n+a_{n-1}=a_{n-2}+a_{n-3}`, why: R`Rearranging the rule.` },
    { name: 'Even-index terms', fact: R`a_{2k}=2002-2(k-1)`, why: R`Even terms drop by $2$ each time.` }
  ],
  approach: R`Pair sums alternate $4003,4005$. So $a_n-a_{n-2}=\pm2$: even-index terms go $2002,2000,1998,\ldots$. $a_{2004}=2002-2\cdot1001=0$.`,
  steps: [
    { title: 'Pattern',
      explain: R`$2001,2002,2003,2000,2005,1998,2007,1996,\ldots$`,
      check: { q: R`What is $a_5=a_2+a_3-a_4$?`, opts: [R`2005`, R`2004`, R`1999`, R`2001`], ans: 0, why: R`$2002+2003-2000$.` } },
    { title: 'Index 2004',
      explain: R`$a_{2k}=2004-2k$; $k=1002$: $0$.`,
      check: { q: R`If $a_{2k}=2004-2k$, what is $a_{2004}$?`, opts: [R`0`, R`2`, R`-2`, R`1002`], ans: 0, why: R`$2004-2004$.` } }
  ],
  bridge: R`Separate odd and even terms.`,
  solution: [
    R`Even terms: $2002,2000,1998,\ldots$, i.e. $a_{2k}=2004-2k$.`,
    R`$a_{2004}=0$.`,
    R`The answer is $\textbf{(C)}\ 0$.`
  ],
  shortcut: R`Compute $8$ terms and the two interleaved sequences are obvious.`,
  traps: [R`Misapplying the rule order.`, R`Off-by-one in the index.`],
  recognize: R`Odd recurrences: compute a few terms; look for interleaved arithmetic sequences.`
},

'2004B20': {
  answer: 'D',
  goal: R`Cevians $AD$ and $BE$ meet at $T$ with $\tfrac{AT}{DT}=3$ and $\tfrac{BT}{ET}=4$. We want $\tfrac{CD}{BD}$. Use mass points.`,
  tools: [
    { name: 'Mass points', fact: R`m_X\cdot XT=m_Y\cdot YT`, why: R`$T$ balances each cevian.` },
    { name: 'Masses add', fact: R`m_D=m_B+m_C,\ m_E=m_A+m_C`, why: R`$D$ on $BC$, $E$ on $AC$.` }
  ],
  approach: R`$m_D=3m_A$, $m_E=4m_B$. So $m_B+m_C=3m_A$ and $m_A+m_C=4m_B$. Solve and use $\tfrac{CD}{BD}=\tfrac{m_B}{m_C}$.`,
  steps: [
    { title: 'Solve masses',
      explain: R`Subtract: $m_B-m_A=3m_A-4m_B\Rightarrow m_B=\tfrac45m_A$, then $m_C=3m_A-\tfrac45m_A=\tfrac{11}5m_A$.`,
      check: { q: R`With $m_A=5$, what are $m_B$ and $m_C$?`, opts: [R`4,11`, R`11,4`, R`4,15`, R`3,12`], ans: 0, why: R`$m_B=4$, $m_C=15-4$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{CD}{BD}=\tfrac{m_B}{m_C}=\tfrac4{11}$.`,
      check: { q: R`On $BC$ with masses $m_B,m_C$, what is $\tfrac{CD}{BD}$?`, opts: [R`\tfrac{m_B}{m_C}`, R`\tfrac{m_C}{m_B}`, R`m_B+m_C`, R`1`], ans: 0, why: R`The heavier end is closer to $D$.` } }
  ],
  bridge: R`Mass points on both cevians.`,
  solution: [
    R`$m_A=5$, $m_D=15$, $m_B=4$, $m_E=16$, $m_C=11$.`,
    R`$\tfrac{CD}{BD}=\tfrac{4}{11}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac4{11}$.`
  ],
  shortcut: R`Check: $m_E=m_A+m_C=16=4m_B$. ✓`,
  traps: [R`Inverting the ratio ($\tfrac{11}4$).`, R`Using $\tfrac{AT}{DT}$ as a ratio on $BC$.`],
  recognize: R`Two cevians with known division ratios: mass points.`
},

'2004B21': {
  answer: 'A',
  goal: R`$S$ is the union of the first $2004$ terms of $1,4,7,\ldots$ and $9,16,23,\ldots$. Count distinct elements: $4008$ minus the overlap.`,
  tools: [
    { name: 'Common terms', fact: R`n\equiv1\ (3),\ n\equiv2\ (7)\Rightarrow n\equiv16\ (21)`, why: R`CRT; $16$ is the smallest that works.` },
    { name: 'Ranges', fact: R`\text{first: }\le6010,\ \text{second: }\le14030`, why: R`$1+3\cdot2003$ and $9+7\cdot2003$.` }
  ],
  approach: R`Common terms: $16,37,58,\ldots\le6010$: $16+21j\le6010$, $j\le285$: $286$ terms. Answer $4008-286$.`,
  steps: [
    { title: 'Overlap',
      explain: R`$16+21j\le6010\Rightarrow j\le\tfrac{5994}{21}\approx285.4$: $286$ values.`,
      check: { q: R`Is $16$ in both sequences?`, opts: [R`\text{Yes}`, R`\text{Only the first}`, R`\text{Only the second}`, R`\text{Neither}`], ans: 0, why: R`$16=1+15=9+7$.` } },
    { title: 'Union',
      explain: R`$4008-286=3722$.`,
      check: { q: R`What is $4008-286$?`, opts: [R`3722`, R`3732`, R`3712`, R`3822`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Inclusion–exclusion with the common progression.`,
  solution: [
    R`Common terms: $n\equiv16\pmod{21}$, up to $6010$: $286$.`,
    R`$|S|=2004+2004-286=3722$.`,
    R`The answer is $\textbf{(A)}\ 3722$.`
  ],
  shortcut: R`The overlap is limited by the shorter range ($6010$).`,
  traps: [R`Using $14030$ as the bound.`, R`Starting the common sequence at $1$.`],
  recognize: R`Unions of arithmetic progressions: CRT for the intersection, then inclusion–exclusion.`
},

'2004B22': {
  answer: 'D',
  goal: R`For the $5$-$12$-$13$ right triangle, find the distance between the incentre and circumcentre. Use coordinates.`,
  tools: [
    { name: 'Circumcentre', fact: R`\text{midpoint of the hypotenuse}`, why: R`Right triangle (Thales).` },
    { name: 'Inradius', fact: R`r=\tfrac{a+b-c}{2}=2`, why: R`Right-triangle formula.` }
  ],
  approach: R`Right angle at $(0,0)$, legs along the axes to $(12,0)$ and $(0,5)$. Incentre $(2,2)$, circumcentre $(6,\tfrac52)$. Distance $\sqrt{16+\tfrac14}$.`,
  steps: [
    { title: 'Centres',
      explain: R`Incentre $(r,r)=(2,2)$; circumcentre $(6,2.5)$.`,
      check: { q: R`What is $\tfrac{5+12-13}{2}$?`, opts: [R`2`, R`3`, R`4`, R`1`], ans: 0, why: R`$\tfrac42$.` } },
    { title: 'Distance',
      explain: R`$\sqrt{4^2+0.5^2}=\sqrt{\tfrac{65}4}=\tfrac{\sqrt{65}}2$.`,
      check: { q: R`What is $16+\tfrac14$?`, opts: [R`\tfrac{65}4`, R`\tfrac{63}{4}`, R`\tfrac{17}{4}`, R`16.5`], ans: 0, why: R`$\tfrac{64+1}{4}$.` } }
  ],
  bridge: R`Coordinates for both centres.`,
  solution: [
    R`Incentre $(2,2)$, circumcentre $(6,\tfrac52)$.`,
    R`Distance $\tfrac{\sqrt{65}}2$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{\sqrt{65}}2$.`
  ],
  shortcut: R`Euler: $OI^2=R(R-2r)=\tfrac{13}2\left(\tfrac{13}2-4\right)=\tfrac{65}4$.`,
  traps: [R`Placing the incentre at the centroid.`, R`Using $r=3$.`],
  recognize: R`Right-triangle centres: circumcentre at the hypotenuse midpoint, incentre at $(r,r)$.`
},

'2004B23': {
  answer: 'B',
  goal: R`Each face of a cube is red/blue at random. We want $P(\text{some placement has four same-coloured vertical faces})$. That means some "belt" of four faces (all faces except an opposite pair) is monochromatic.`,
  tools: [
    { name: 'Case by colour counts', fact: R`6\text{ or }5\text{ of a colour: always works}`, why: R`Put the odd face on top.` },
    { name: 'Four of a colour', fact: R`\text{works only if the other two are opposite}`, why: R`They must be the top and bottom.` }
  ],
  approach: R`All one colour: $2$. Five–one: $2\cdot6=12$. Four–two with the two opposite: $2\cdot3=6$. Three–three never works. Total $20$ of $64$.`,
  steps: [
    { title: 'Count good colourings',
      explain: R`$2+12+6=20$.`,
      check: { q: R`How many pairs of opposite faces does a cube have?`, opts: [R`3`, R`6`, R`4`, R`2`], ans: 0, why: R`Top/bottom, front/back, left/right.` } },
    { title: 'Probability',
      explain: R`$\tfrac{20}{64}=\tfrac5{16}$.`,
      check: { q: R`Simplify $\tfrac{20}{64}$.`, opts: [R`\tfrac5{16}`, R`\tfrac14`, R`\tfrac38`, R`\tfrac{5}{32}`], ans: 0, why: R`Divide by $4$.` } }
  ],
  bridge: R`Count colourings by how many faces share the majority colour.`,
  solution: [
    R`$6$-$0$: $2$; $5$-$1$: $12$; $4$-$2$ opposite: $6$.`,
    R`$20$ good colourings of $64$.`,
    R`$P=\tfrac5{16}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac5{16}$.`
  ],
  shortcut: R`Inclusion–exclusion over the $3$ belts gives the same $20$.`,
  traps: [R`Counting four–two with adjacent odd faces.`, R`Forgetting both colours.`],
  recognize: R`Cube colourings with a placement condition: case on the colour counts.`
},

'2004B24': {
  answer: 'B',
  goal: R`$AB=7$, $AC=8$, $BC=9$; $D$ on the circumcircle with $AD$ bisecting $\angle A$. We want $\tfrac{AD}{CD}$. $D$ is the midpoint of arc $BC$, so $BD=CD$; use Ptolemy.`,
  tools: [
    { name: 'Arc midpoint', fact: R`BD=CD`, why: R`Equal inscribed angles $\angle BAD=\angle CAD$ subtend equal chords.` },
    { name: "Ptolemy's theorem", fact: R`AD\cdot BC=AB\cdot CD+AC\cdot BD`, why: R`Cyclic quadrilateral $ABDC$.` }
  ],
  approach: R`$9AD=7CD+8CD=15CD$, so $\tfrac{AD}{CD}=\tfrac{15}9=\tfrac53$.`,
  steps: [
    { title: 'Equal chords',
      explain: R`$\angle BAD=\angle DAC$ subtend chords $BD$ and $DC$, so $BD=CD$.`,
      check: { q: R`Equal inscribed angles subtend what?`, opts: [R`\text{Equal chords}`, R`\text{Diameters}`, R`\text{Parallel chords}`, R`\text{Nothing}`], ans: 0, why: R`Equal arcs.` } },
    { title: 'Ptolemy',
      explain: R`$AD\cdot9=(7+8)CD$, so $\tfrac{AD}{CD}=\tfrac53$.`,
      check: { q: R`What is $\tfrac{15}{9}$?`, opts: [R`\tfrac53`, R`\tfrac95`, R`\tfrac32`, R`\tfrac{17}{9}`], ans: 0, why: R`Divide by $3$.` } }
  ],
  bridge: R`Arc midpoint gives $BD=CD$; Ptolemy finishes.`,
  solution: [
    R`$BD=CD$.`,
    R`Ptolemy: $9AD=7CD+8CD$.`,
    R`$\tfrac{AD}{CD}=\tfrac53$.`,
    R`The answer is $\textbf{(B)}\ \tfrac53$.`
  ],
  shortcut: R`In general $\tfrac{AD}{CD}=\tfrac{AB+AC}{BC}$ for the bisector to the arc midpoint.`,
  traps: [R`Using the bisector's intersection with $BC$ instead of the circle.`, R`Ordering the quadrilateral wrongly in Ptolemy.`],
  recognize: R`Angle bisector extended to the circumcircle: arc midpoint, equal chords, Ptolemy.`
},

'2004B25': {
  answer: 'B',
  goal: R`A unit circle with diameter $AB$ is internally tangent to two radius-$2$ circles at $A$ and $B$. We want the area inside both big circles but outside the small one. The big circles are centred at $B$ and $A$.`,
  tools: [
    { name: 'Big centres', fact: R`\text{centre of the circle tangent at }A\text{ is }B`, why: R`It lies on line $AO$ at distance $2$ from $A$.` },
    { name: 'Lens area', fact: R`2\left(\tfrac{120}{360}\pi\cdot4-\sqrt3\right)`, why: R`Two radius-$2$ circles with centres $2$ apart meet at $120^\circ$ arcs.` }
  ],
  approach: R`Lens of circles centred at $A$ and $B$ (distance $2$): $\tfrac{8\pi}3-2\sqrt3$. The small circle lies inside the lens; subtract $\pi$.`,
  steps: [
    { title: 'Lens',
      explain: R`Intersection points $(0,\pm\sqrt3)$ with $A=(-1,0)$, $B=(1,0)$. Each segment: sector $\tfrac{4\pi}3$ minus triangle $\sqrt3$. Lens $=\tfrac{8\pi}3-2\sqrt3$.`,
      check: { q: R`What is the area of a $120^\circ$ sector of radius $2$?`, opts: [R`\tfrac{4\pi}3`, R`\tfrac{2\pi}3`, R`\tfrac{8\pi}3`, R`\pi`], ans: 0, why: R`$\tfrac13\cdot4\pi$.` } },
    { title: 'Subtract',
      explain: R`$\tfrac{8\pi}3-2\sqrt3-\pi=\tfrac{5\pi}3-2\sqrt3$.`,
      check: { q: R`What is $\tfrac{8\pi}{3}-\pi$?`, opts: [R`\tfrac{5\pi}3`, R`\tfrac{7\pi}{3}`, R`\tfrac{2\pi}{3}`, R`\pi`], ans: 0, why: R`$\tfrac{8\pi-3\pi}{3}$.` } }
  ],
  bridge: R`Lens area minus the small disk.`,
  solution: [
    R`Big circles are centred at $A$ and $B$, $2$ apart.`,
    R`Lens $=\tfrac{8\pi}3-2\sqrt3$.`,
    R`Shaded $=\tfrac{5\pi}3-2\sqrt3$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Radius $2$, centres $2$ apart: the classic $120^\circ$ lens.`,
  traps: [R`Placing the big centres at distance $1$ from $O$ on the same side.`, R`Forgetting to subtract the small circle.`],
  recognize: R`Overlap of two equal circles: twice a circular segment.`
}

};
