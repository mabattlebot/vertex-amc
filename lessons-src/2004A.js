// Hand-written lessons: 2004 AMC 10A, Difficulty 4 and 5.
// #20 and #21 rely on figures; the descriptions below are reconstructions consistent with the answer key.
const R = String.raw;
module.exports = {

'2004A16': {
  answer: 'D',
  goal: R`In a $5\times5$ grid, count the squares (sizes $1$–$5$) that contain the centre cell. For each size, count positions whose span covers row $3$ and column $3$.`,
  tools: [
    { name: 'Independent row and column ranges', fact: R`\#=(\text{row starts})\times(\text{column starts})`, why: R`A $k\times k$ square covers the centre iff both its row span and column span include $3$.` },
    { name: 'Starts covering the middle', fact: R`\min(k,6-k)\text{ starts for }k\le5`, why: R`The start must be between $4-k$ and $3$, within $1..6-k$.` }
  ],
  approach: R`Sizes $1,2,3,4,5$ give $1,2,3,2,1$ valid starts per direction. Square them and add: $1+4+9+4+1$.`,
  steps: [
    { title: 'Per size',
      explain: R`$k=1$: $1$; $k=2$: starts $2,3$ → $4$; $k=3$: starts $1,2,3$ → $9$; $k=4$: starts $1,2$ → $4$; $k=5$: $1$.`,
      check: { q: R`How many $3\times3$ squares contain the centre?`, opts: [R`9`, R`4`, R`1`, R`6`], ans: 0, why: R`All $3\times3=9$ positions contain it.` } },
    { title: 'Total',
      explain: R`$1+4+9+4+1=19$.`,
      check: { q: R`What is $1+4+9+4+1$?`, opts: [R`19`, R`17`, R`20`, R`15`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Count valid starts per direction and square.`,
  solution: [
    R`By size: $1,4,9,4,1$.`,
    R`Total $19$.`,
    R`The answer is $\textbf{(D)}\ 19$.`
  ],
  shortcut: R`Row-start counts $1,2,3,2,1$ are symmetric; square and sum.`,
  traps: [R`Counting all $55$ squares.`, R`Missing the $4\times4$ squares.`],
  recognize: R`Squares containing a given cell: count horizontal and vertical placements separately.`
},

'2004A17': {
  answer: 'C',
  goal: R`Brenda and Sally start opposite on a track of length $L$, running toward each other. First meeting after Brenda runs $100$; next after Sally runs $150$ more. We want $L$. Between meetings, together they cover one full lap.`,
  tools: [
    { name: 'Combined distances', fact: R`\text{first meeting: }\tfrac L2,\quad\text{each later meeting: }L`, why: R`Approaching each other around the circle.` },
    { name: 'Constant speeds', fact: R`\text{distance}\propto\text{time}`, why: R`Twice the combined distance takes twice the time.` }
  ],
  approach: R`The second leg is twice the first in combined distance, so Brenda runs $200$ in it. Then $L=200+150=350$.`,
  steps: [
    { title: 'Brenda between meetings',
      explain: R`Combined $L$ vs. $\tfrac L2$: twice the time, so Brenda runs $2\cdot100=200$.`,
      check: { q: R`If time doubles at constant speed, distance does what?`, opts: [R`\text{Doubles}`, R`\text{Halves}`, R`\text{Stays}`, R`\text{Quadruples}`], ans: 0, why: R`$d=vt$.` } },
    { title: 'Length',
      explain: R`$L=200+150=350$.`,
      check: { q: R`What is $200+150$?`, opts: [R`350`, R`300`, R`250`, R`400`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Double Brenda's first distance, add Sally's second distance.`,
  solution: [
    R`First meeting: total $\tfrac L2$, Brenda $100$.`,
    R`Next: total $L$, Brenda $200$, Sally $150$.`,
    R`$L=350$.`,
    R`The answer is $\textbf{(C)}\ 350$.`
  ],
  shortcut: R`Check: Sally ran $75$ first; $100:75=200:150$. ✓`,
  traps: [R`Using $100+150=250$.`, R`Assuming they start together.`],
  recognize: R`Runners meeting repeatedly in opposite directions: each meeting adds one lap of combined distance.`
},

'2004A18': {
  answer: 'A',
  goal: R`AP $9,9+d,9+2d$; then $9,11+d,29+2d$ is geometric. We want the smallest possible third GP term. Use the GP condition (middle squared = product of ends).`,
  tools: [
    { name: 'Geometric mean', fact: R`b^2=ac`, why: R`Three-term geometric progression.` },
    { name: 'Quadratic', fact: R`d^2+4d-140=0`, why: R`Expand and collect.` }
  ],
  approach: R`$(11+d)^2=9(29+2d)$ gives $d=10$ or $-14$. Third terms: $49$ or $1$.`,
  steps: [
    { title: 'Equation',
      explain: R`$121+22d+d^2=261+18d\Rightarrow d^2+4d-140=0=(d+14)(d-10)$.`,
      check: { q: R`Factor $d^2+4d-140$.`, opts: [R`(d+14)(d-10)`, R`(d-14)(d+10)`, R`(d+20)(d-7)`, R`(d+7)(d-20)`], ans: 0, why: R`$14\cdot10=140$, $14-10=4$.` } },
    { title: 'Third term',
      explain: R`$29+2d$: $49$ for $d=10$, $1$ for $d=-14$. Smallest $1$.`,
      check: { q: R`For $d=-14$, what is $29+2d$?`, opts: [R`1`, R`-1`, R`15`, R`57`], ans: 0, why: R`$29-28$.` } }
  ],
  bridge: R`Set up $b^2=ac$ and solve for $d$.`,
  solution: [
    R`$(11+d)^2=9(29+2d)$.`,
    R`$d=10$ or $-14$.`,
    R`Third terms $49$ or $1$; smallest $1$.`,
    R`The answer is $\textbf{(A)}\ 1$.`
  ],
  shortcut: R`GP $9,-3,1$ checks: ratio $-\tfrac13$.`,
  traps: [R`Only taking the positive root ($49$).`, R`Adding $2$ and $20$ to the wrong terms.`],
  recognize: R`AP turned into GP: write the AP with $d$, apply $b^2=ac$.`
},

'2004A19': {
  answer: 'C',
  goal: R`A stripe of horizontal width $3$ winds around a silo of height $80$. We want its area. Unroll the cylinder: the stripe becomes a parallelogram.`,
  tools: [
    { name: 'Unrolling', fact: R`\text{the lateral surface is a flat rectangle}`, why: R`Areas are preserved.` },
    { name: 'Parallelogram area', fact: R`\text{base}\times\text{height}`, why: R`Horizontal width $3$, vertical height $80$.` }
  ],
  approach: R`Slicing the stripe into horizontal strips, each has width $3$, stacked over height $80$ (shear doesn't change area). Area $=3\cdot80$.`,
  steps: [
    { title: 'Unroll',
      explain: R`Flattened, the stripe is a slanted band; every horizontal cross-section has length $3$.`,
      check: { q: R`Does the number of revolutions change the area?`, opts: [R`\text{No}`, R`\text{Yes, doubles it}`, R`\text{Yes, halves it}`, R`\text{Only the length}`], ans: 0, why: R`Cavalieri: same width at every height.` } },
    { title: 'Area',
      explain: R`$3\cdot80=240$.`,
      check: { q: R`What is $3\cdot80$?`, opts: [R`240`, R`180`, R`120`, R`480`], ans: 0, why: R`Multiply.` } }
  ],
  bridge: R`Horizontal width times height.`,
  solution: [
    R`Unrolled, the stripe has horizontal width $3$ at every height.`,
    R`Area $=3\cdot80=240$.`,
    R`The answer is $\textbf{(C)}\ 240$.`
  ],
  shortcut: R`Diameter and revolutions are distractors.`,
  traps: [R`Using the slanted length times $3$.`, R`Multiplying by $2$ for two revolutions.`],
  recognize: R`Stripes on cylinders: unroll; Cavalieri gives width × height.`
},

'2004A20': {
  answer: 'D',
  goal: R`In unit square $ABCD$, $E$ on $AD$ and $F$ on $CD$ make $\triangle BEF$ equilateral. We want $\tfrac{[DEF]}{[ABE]}$. Symmetry gives $DE=DF=x$.`,
  tools: [
    { name: 'Symmetry', fact: R`AE=CF,\ DE=DF`, why: R`$BE=BF$ and $BA=BC$ give congruent right triangles.` },
    { name: 'Equal sides', fact: R`BE^2=1+(1-x)^2=EF^2=2x^2`, why: R`Pythagoras in $\triangle ABE$ and $\triangle DEF$.` }
  ],
  approach: R`$x^2+2x-2=0$, so $x=\sqrt3-1$. Then $\tfrac{[DEF]}{[ABE]}=\tfrac{x^2/2}{(1-x)/2}=\tfrac{x^2}{1-x}$.`,
  steps: [
    { title: 'Solve for $x$',
      explain: R`$2-2x+x^2=2x^2\Rightarrow x^2+2x-2=0\Rightarrow x=\sqrt3-1$.`,
      check: { q: R`What is the positive root of $x^2+2x-2=0$?`, opts: [R`\sqrt3-1`, R`\sqrt3+1`, R`2-\sqrt3`, R`\sqrt2-1`], ans: 0, why: R`$x=-1+\sqrt{1+2}$.` } },
    { title: 'Ratio',
      explain: R`$x^2=4-2\sqrt3$, $1-x=2-\sqrt3$. Ratio $\tfrac{2(2-\sqrt3)}{2-\sqrt3}=2$.`,
      check: { q: R`What is $(\sqrt3-1)^2$?`, opts: [R`4-2\sqrt3`, R`2`, R`4+2\sqrt3`, R`3-\sqrt3`], ans: 0, why: R`$3-2\sqrt3+1$.` } }
  ],
  bridge: R`Use symmetry, equate $BE$ and $EF$, compute the ratio.`,
  solution: [
    R`$DE=DF=x$, $AE=1-x$.`,
    R`$1+(1-x)^2=2x^2$: $x=\sqrt3-1$.`,
    R`$\tfrac{x^2}{1-x}=\tfrac{4-2\sqrt3}{2-\sqrt3}=2$.`,
    R`The answer is $\textbf{(D)}\ 2$.`
  ],
  shortcut: R`Angle chasing: $\angle ABE=15^\circ$; ratios of $15^\circ$-triangles give $2$ quickly.`,
  traps: [R`Assuming $E$ is the midpoint.`, R`Taking the negative root.`],
  recognize: R`Equilateral triangle inscribed from a square's corner: symmetric, with $15^\circ$ angles.`
},

'2004A21': {
  answer: 'B',
  goal: R`Concentric circles of radii $3,2,1$ and two lines through the centre at acute angle $\theta$. The shaded region (acute sectors of the inner disk and outer ring, obtuse sectors of the middle ring) is $\tfrac8{13}$ of the unshaded region. We want $\theta$.`,
  tools: [
    { name: 'Sector of a ring', fact: R`\tfrac\alpha2(R^2-r^2)`, why: R`Sector area $\tfrac12\alpha r^2$.` },
    { name: 'Ratio to fraction', fact: R`\tfrac{8}{13}\Rightarrow\text{shaded}=\tfrac8{21}\cdot9\pi=\tfrac{24\pi}{7}`, why: R`Shaded $+$ unshaded $=9\pi$.` }
  ],
  approach: R`Shaded $=2\cdot\tfrac\theta2\cdot1+2\cdot\tfrac{\pi-\theta}2\cdot3+2\cdot\tfrac\theta2\cdot5=3\pi+3\theta$. Set equal to $\tfrac{24\pi}7$.`,
  steps: [
    { title: 'Shaded area',
      explain: R`Inner disk: $\theta$. Middle ring ($4-1=3$): $3(\pi-\theta)$. Outer ring ($9-4=5$): $5\theta$. Total $3\pi+3\theta$.`,
      check: { q: R`What is the area of a ring between radii $2$ and $3$ in a sector of angle $\alpha$ (radians)?`, opts: [R`\tfrac52\alpha`, R`5\alpha`, R`\tfrac12\alpha`, R`\tfrac92\alpha`], ans: 0, why: R`$\tfrac\alpha2(9-4)$.` } },
    { title: 'Solve',
      explain: R`$3\pi+3\theta=\tfrac{24\pi}7\Rightarrow3\theta=\tfrac{3\pi}7\Rightarrow\theta=\tfrac\pi7$.`,
      check: { q: R`What is $\tfrac{24\pi}7-3\pi$?`, opts: [R`\tfrac{3\pi}7`, R`\tfrac{\pi}7`, R`\tfrac{3\pi}{21}`, R`\tfrac{24\pi}{21}`], ans: 0, why: R`$\tfrac{24\pi-21\pi}{7}$.` } }
  ],
  bridge: R`Write the shaded area in $\theta$ and match the given fraction.`,
  solution: [
    R`Shaded $=3\pi+3\theta$.`,
    R`Shaded $=\tfrac8{21}\cdot9\pi=\tfrac{24\pi}7$.`,
    R`$\theta=\tfrac\pi7$.`,
    R`The answer is $\textbf{(B)}\ \tfrac\pi7$.`
  ],
  shortcut: R`Shaded/total ratio $\tfrac{8}{21}$, not $\tfrac{8}{13}$.`,
  traps: [R`Using $\tfrac8{13}$ of the total.`, R`Using degrees in the sector formula.`],
  recognize: R`Sectors across concentric rings: area $\tfrac\alpha2(R^2-r^2)$ for each ring.`
},

'2004A22': {
  answer: 'D',
  goal: R`Square side $2$, semicircle on $AB$ inside; the tangent from $C$ hits $AD$ at $E$. We want $CE$. Both $CB$ and $EA$ are also tangent to the semicircle.`,
  tools: [
    { name: 'Equal tangents', fact: R`\text{tangent lengths from a point are equal}`, why: R`$CB$ and $EA$ touch the circle at $B$ and $A$.` },
    { name: 'Pythagoras', fact: R`CE^2=CD^2+DE^2`, why: R`Right angle at $D$.` }
  ],
  approach: R`Let $AE=e$. Tangents: $CE=CB+EA=2+e$. Right triangle $CDE$: $(2+e)^2=4+(2-e)^2$, so $e=\tfrac12$.`,
  steps: [
    { title: 'Tangent lengths',
      explain: R`From $C$: tangent length $CB=2$. From $E$: $EA=e$. So $CE=2+e$.`,
      check: { q: R`Why is $CB$ tangent to the semicircle?`, opts: [R`CB\perp AB\text{ at }B`, R`CB\text{ passes through the centre}`, R`CB=AB`, R`\text{It isn't}`], ans: 0, why: R`A line perpendicular to a radius at its endpoint.` } },
    { title: 'Solve',
      explain: R`$(2+e)^2=4+(2-e)^2\Rightarrow8e=4\Rightarrow e=\tfrac12$. $CE=\tfrac52$.`,
      check: { q: R`If $8e=4$, what is $2+e$?`, opts: [R`\tfrac52`, R`3`, R`\tfrac32`, R`\sqrt5`], ans: 0, why: R`$e=\tfrac12$.` } }
  ],
  bridge: R`Equal tangents give $CE=2+e$; Pythagoras finishes.`,
  solution: [
    R`$CE=CB+AE=2+e$.`,
    R`$(2+e)^2=2^2+(2-e)^2$ gives $e=\tfrac12$.`,
    R`$CE=\tfrac52$.`,
    R`The answer is $\textbf{(D)}\ \tfrac52$.`
  ],
  shortcut: R`$CDE$ is a $\tfrac32$-$2$-$\tfrac52$ triangle (a scaled $3$-$4$-$5$).`,
  traps: [R`Ignoring that the sides are tangents.`, R`Using coordinates for the tangent point (slow).`],
  recognize: R`Tangent segments crossing a figure with tangent sides: add equal tangent lengths.`
},

'2004A23': {
  answer: 'D',
  goal: R`Circle $D$ contains circles $A$ (radius $1$, through $D$'s centre) and congruent $B,C$ (radius $r$), all mutually tangent. We want $r$. Use coordinates with $D$'s centre at $O$.`,
  tools: [
    { name: 'Radius of $D$', fact: R`R=2`, why: R`$A$ passes through $O$ and is internally tangent: diameter of $A$ = radius of $D$.` },
    { name: 'Tangency distances', fact: R`|OB|=2-r,\ |AB|=1+r,\ B=(x,r)`, why: R`$B,C$ are symmetric across line $OA$ and touch each other.` }
  ],
  approach: R`$O=(0,0)$, $A=(1,0)$, $B=(x,r)$. $x^2+r^2=(2-r)^2$ and $(x-1)^2+r^2=(1+r)^2$. Subtract to get $x=2-3r$, then solve.`,
  steps: [
    { title: 'Equations',
      explain: R`$x^2=4-4r$ and $(x-1)^2=1+2r$. Subtracting: $x^2-(x-1)^2=2x-1=3-6r$, so $x=2-3r$.`,
      check: { q: R`Why is $B$'s $y$-coordinate $r$?`, opts: [R`B\text{ and }C\text{ touch on the axis}`, R`B\text{ touches }A`, R`B\text{ touches }D`, R`\text{Coincidence}`], ans: 0, why: R`Mirror images that touch meet on the line of symmetry.` } },
    { title: 'Solve',
      explain: R`$(2-3r)^2=4-4r\Rightarrow9r^2=8r\Rightarrow r=\tfrac89$.`,
      check: { q: R`If $9r^2=8r$ and $r>0$, what is $r$?`, opts: [R`\tfrac89`, R`\tfrac98`, R`\tfrac23`, R`1`], ans: 0, why: R`Divide by $9r$.` } }
  ],
  bridge: R`Coordinates with the symmetry line as an axis.`,
  solution: [
    R`$R=2$, $A=(1,0)$, $B=(x,r)$.`,
    R`$x^2+r^2=(2-r)^2$ and $(x-1)^2+r^2=(1+r)^2$.`,
    R`$x=2-3r$ and $9r^2=8r$: $r=\tfrac89$.`,
    R`The answer is $\textbf{(D)}\ \tfrac89$.`
  ],
  shortcut: R`Descartes' circle theorem also gives $\tfrac89$ quickly.`,
  traps: [R`Assuming $R=1$.`, R`Placing $B$'s centre on the axis.`],
  recognize: R`Mutually tangent circles inside a circle: coordinates + distance equations.`
},

'2004A24': {
  answer: 'D',
  goal: R`$f(1)=1$, $f(2n)=n\,f(n)$. We want $f(2^{100})$. Apply the rule repeatedly along powers of $2$.`,
  tools: [
    { name: 'Unrolling', fact: R`f(2^k)=2^{k-1}f(2^{k-1})`, why: R`Use $n=2^{k-1}$.` },
    { name: 'Triangular numbers', fact: R`0+1+\cdots+99=4950`, why: R`Exponents add.` }
  ],
  approach: R`$f(2^{100})=2^{99}\cdot2^{98}\cdots2^0\cdot f(1)=2^{4950}$.`,
  steps: [
    { title: 'Pattern',
      explain: R`$f(2)=1$, $f(4)=2$, $f(8)=4\cdot2=2^3$, $f(16)=8\cdot2^3=2^6$: exponents $0,1,3,6,\ldots$`,
      check: { q: R`What is $f(8)$?`, opts: [R`8`, R`4`, R`2`, R`16`], ans: 0, why: R`$4\cdot f(4)=4\cdot2$.` } },
    { title: 'Sum exponents',
      explain: R`$f(2^{100})=2^{0+1+\cdots+99}=2^{4950}$.`,
      check: { q: R`What is $\tfrac{99\cdot100}{2}$?`, opts: [R`4950`, R`5050`, R`9900`, R`4900`], ans: 0, why: R`$99\cdot50$.` } }
  ],
  bridge: R`Multiply the factors $2^{k-1}$ for $k=1..100$.`,
  solution: [
    R`$f(2^k)=2^{k-1}f(2^{k-1})$.`,
    R`$f(2^{100})=2^{\sum_{k=0}^{99}k}=2^{4950}$.`,
    R`The answer is $\textbf{(D)}\ 2^{4950}$.`
  ],
  shortcut: R`$f(2^k)=2^{\binom k2}$.`,
  traps: [R`Summing to $100$ ($5050$).`, R`Answering $2^{99}$.`],
  recognize: R`Recursions on powers of $2$: track the exponent.`
},

'2004A25': {
  answer: 'B',
  goal: R`Three touching unit spheres rest on a plane; a radius-$2$ sphere sits on top. We want the height of its top. The centres form a triangular pyramid.`,
  tools: [
    { name: 'Centroid distance', fact: R`\tfrac{2}{\sqrt3}`, why: R`Circumradius of an equilateral triangle with side $2$.` },
    { name: 'Vertical rise', fact: R`\sqrt{3^2-\tfrac43}`, why: R`Big centre is $1+2=3$ from each small centre.` }
  ],
  approach: R`Small centres at height $1$, forming an equilateral triangle of side $2$. The big centre is above the centroid at height $1+\sqrt{9-\tfrac43}=1+\tfrac{\sqrt{69}}3$. Add radius $2$.`,
  steps: [
    { title: 'Rise',
      explain: R`$\sqrt{9-\tfrac43}=\sqrt{\tfrac{23}3}=\tfrac{\sqrt{69}}3$.`,
      check: { q: R`What is $\sqrt{\tfrac{23}{3}}$?`, opts: [R`\tfrac{\sqrt{69}}3`, R`\tfrac{\sqrt{23}}{9}`, R`\tfrac{23}{\sqrt3}`, R`\sqrt{69}`], ans: 0, why: R`$\sqrt{\tfrac{69}{9}}$.` } },
    { title: 'Top',
      explain: R`$1+\tfrac{\sqrt{69}}3+2=3+\tfrac{\sqrt{69}}3$.`,
      check: { q: R`How high are the small centres?`, opts: [R`1`, R`2`, R`0`, R`\tfrac12`], ans: 0, why: R`Radius $1$.` } }
  ],
  bridge: R`Height of centre + radius.`,
  solution: [
    R`Small centres: height $1$, triangle side $2$, circumradius $\tfrac2{\sqrt3}$.`,
    R`Big centre: $1+\sqrt{9-\tfrac43}=1+\tfrac{\sqrt{69}}3$.`,
    R`Top: $3+\tfrac{\sqrt{69}}3$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`Stacked spheres: horizontal offset from the centroid, vertical by Pythagoras.`,
  traps: [R`Forgetting the small centres are at height $1$.`, R`Using distance $2$ instead of $3$.`],
  recognize: R`Spheres resting on spheres: work with the centres.`
}

};
