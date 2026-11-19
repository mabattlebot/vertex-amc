// Hand-written lessons: 2009 AMC 10B, Difficulty 4 and 5.
// #17 and #22 rely on figures; the descriptions below are reconstructions consistent with the answer key.
const R = String.raw;
module.exports = {

'2009B16': {
  answer: 'B',
  goal: R`$BA$ and $BC$ are tangents from $B$ to a circle centred at $O$, and $\triangle ABC$ is equilateral. $D$ is where $BO$ meets the circle. We want $\tfrac{BD}{BO}$. Find $\angle OBA$.`,
  tools: [
    { name: 'Tangent ⟂ radius', fact: R`OA\perp BA`, why: R`A tangent is perpendicular to the radius at the point of contact.` },
    { name: 'Tangents are symmetric', fact: R`BO\text{ bisects }\angle ABC`, why: R`The two tangent segments from $B$ are mirror images in $BO$.` },
    { name: '30-60-90 triangle', fact: R`\text{hypotenuse}=2\times\text{short leg}`, why: R`$\sin30^\circ=\tfrac12$.` }
  ],
  approach: R`$\angle ABO=30^\circ$, so in right triangle $OAB$ the hypotenuse $BO$ is twice the short leg $OA=r$. Then $BD=BO-r=r$.`,
  steps: [
    { title: 'The angle',
      explain: R`$\angle ABC=60^\circ$ and $BO$ bisects it: $\angle ABO=30^\circ$. Triangle $OAB$ has a right angle at $A$.`,
      check: { q: R`In right triangle $OAB$ with $\angle B=30^\circ$ and $OA=r$, what is $BO$?`, opts: [R`2r`, R`r\sqrt3`, R`\tfrac{r}{2}`, R`r\sqrt2`], ans: 0, why: R`$OA$ is opposite $30^\circ$, so it is half the hypotenuse.` } },
    { title: 'The ratio',
      explain: R`$D$ lies between $B$ and $O$ at distance $r$ from $O$, so $BD=2r-r=r$ and $\tfrac{BD}{BO}=\tfrac12$.`,
      check: { q: R`If $BO=2r$ and $OD=r$, what is $BD/BO$?`, opts: [R`\tfrac12`, R`\tfrac13`, R`\tfrac23`, R`\tfrac{\sqrt3}{2}`], ans: 0, why: R`$\tfrac{r}{2r}$.` } }
  ],
  bridge: R`Get $\angle ABO=30^\circ$, then $BO=2r$.`,
  solution: [
    R`$\angle ABO=\tfrac12\cdot60^\circ=30^\circ$ and $\angle OAB=90^\circ$.`,
    R`So $BO=2\cdot OA=2r$, and $BD=BO-OD=r$.`,
    R`$\tfrac{BD}{BO}=\tfrac12$.`,
    R`The answer is $\textbf{(B)}\ \tfrac12$.`
  ],
  shortcut: R`Tangents at $60^\circ$ apart put $B$ at distance $2r$: $D$ is the midpoint of $BO$.`,
  traps: [R`Using $\angle ABO=60^\circ$.`, R`Taking $D$ on the far side of $O$.`],
  recognize: R`Tangents from an external point: the line to the centre bisects the angle and makes right triangles with the radii.`
},

'2009B17': {
  answer: 'C',
  goal: R`Five unit squares (total area $5$) are cut by the line from $(c,0)$ to $(3,3)$ into equal halves. We want $c$. The part of the region below the line is the right triangle $(c,0),(3,0),(3,3)$ minus the one unit square inside that triangle that is not part of the region.`,
  tools: [
    { name: 'Right-triangle area', fact: R`\tfrac12\cdot(3-c)\cdot3`, why: R`Legs along $y=0$ and $x=3$.` },
    { name: 'Equal halves', fact: R`\text{each part}=\tfrac52`, why: R`Total area $5$.` }
  ],
  approach: R`In the figure, the region's part on the lower-right side of the line is the triangle with vertices $(c,0),(3,0),(3,3)$ with exactly one empty unit square removed. Set that equal to $\tfrac52$.`,
  steps: [
    { title: 'Equation',
      explain: R`$\tfrac32(3-c)-1=\tfrac52$, so $\tfrac32(3-c)=\tfrac72$.`,
      check: { q: R`If $\tfrac32(3-c)=\tfrac72$, what is $3-c$?`, opts: [R`\tfrac73`, R`\tfrac{21}{4}`, R`\tfrac76`, R`2`], ans: 0, why: R`Multiply by $\tfrac23$.` } },
    { title: 'Solve',
      explain: R`$c=3-\tfrac73=\tfrac23$.`,
      check: { q: R`What is $3-\tfrac73$?`, opts: [R`\tfrac23`, R`\tfrac13`, R`\tfrac34`, R`\tfrac35`], ans: 0, why: R`$\tfrac{9-7}{3}$.` } }
  ],
  bridge: R`Triangle area minus the empty square equals half of $5$.`,
  solution: [
    R`Region below the line $=\tfrac12(3-c)(3)-1$.`,
    R`Set it to $\tfrac52$: $\tfrac32(3-c)=\tfrac72$.`,
    R`$3-c=\tfrac73$, so $c=\tfrac23$.`,
    R`The answer is $\textbf{(C)}\ \tfrac23$.`
  ],
  shortcut: R`Use one big easy shape (the triangle) and subtract what isn't there, instead of adding pieces.`,
  traps: [R`Forgetting to subtract the empty square.`, R`Setting the triangle equal to $5$ instead of $\tfrac52$.`],
  recognize: R`Area bisection by a line: write one side's area as a simple shape plus or minus whole squares.`
},

'2009B18': {
  answer: 'D',
  goal: R`Rectangle $AB=8$, $BC=6$; $M$ is the midpoint of $AC$ and $E$ on $AB$ has $ME\perp AC$. We want $[AME]$. Triangle $AME$ has a right angle at $M$ and shares $\angle A$ with triangle $ABC$.`,
  tools: [
    { name: 'Diagonal', fact: R`AC=\sqrt{8^2+6^2}=10`, why: R`Pythagoras.` },
    { name: 'Similar right triangles', fact: R`\triangle AME\sim\triangle ABC`, why: R`Both have a right angle and share $\angle A$.` }
  ],
  approach: R`$AM=5$. With $\tan A=\tfrac{BC}{AB}=\tfrac34$, the leg $ME=\tfrac34\cdot5$. Area is half the product of the legs.`,
  steps: [
    { title: 'Legs',
      explain: R`$AM=5$; $ME=AM\tan A=5\cdot\tfrac34=\tfrac{15}4$.`,
      check: { q: R`In rectangle $8\times6$, what is $\tan\angle CAB$?`, opts: [R`\tfrac34`, R`\tfrac43`, R`\tfrac35`, R`\tfrac45`], ans: 0, why: R`Opposite $BC=6$, adjacent $AB=8$.` } },
    { title: 'Area',
      explain: R`$\tfrac12\cdot5\cdot\tfrac{15}4=\tfrac{75}8$.`,
      check: { q: R`What is $\tfrac12\cdot5\cdot\tfrac{15}{4}$?`, opts: [R`\tfrac{75}8`, R`\tfrac{75}4`, R`\tfrac{65}8`, R`\tfrac{25}{3}`], ans: 0, why: R`$\tfrac{75}{8}$.` } }
  ],
  bridge: R`Right angle at $M$: legs $AM$ and $ME$.`,
  solution: [
    R`$AC=10$, $AM=5$.`,
    R`$\triangle AME\sim\triangle ABC$, so $ME=5\cdot\tfrac68=\tfrac{15}4$.`,
    R`$[AME]=\tfrac12\cdot5\cdot\tfrac{15}4=\tfrac{75}8$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{75}8$.`
  ],
  shortcut: R`Similar triangles with ratio $\tfrac{AM}{AB}=\tfrac58$: $[AME]=\left(\tfrac58\right)^2[ABC]=\tfrac{25}{64}\cdot24=\tfrac{75}8$.`,
  traps: [R`Putting the right angle at $E$.`, R`Using $\tan A=\tfrac43$.`],
  recognize: R`A perpendicular dropped onto a diagonal makes a triangle similar to the half-rectangle.`
},

'2009B19': {
  answer: 'A',
  goal: R`A 12-hour clock shows $9$ wherever it should show $1$. We want the fraction of the day it is right, i.e. the fraction of times whose display contains no digit $1$. Hours and minutes are independent.`,
  tools: [
    { name: 'Independence', fact: R`P=P(\text{hour ok})\cdot P(\text{minute ok})`, why: R`Every hour pairs with every minute equally.` },
    { name: 'Digit-by-digit', fact: R`P(\text{minute ok})=P(\text{tens ok})\cdot P(\text{units ok})`, why: R`Minutes $00$–$59$ use every tens/units combination.` }
  ],
  approach: R`Hours $1$–$12$: $1,10,11,12$ contain a $1$, leaving $8$ of $12$. Minutes: tens digit $0$–$5$ (avoid $1$: $\tfrac56$), units digit $0$–$9$ (avoid $1$: $\tfrac9{10}$).`,
  steps: [
    { title: 'Hours',
      explain: R`Good hours: $2$–$9$, so $\tfrac8{12}=\tfrac23$.`,
      check: { q: R`How many of the hours $1$–$12$ contain the digit $1$?`, opts: [R`4`, R`3`, R`2`, R`5`], ans: 0, why: R`$1,10,11,12$.` } },
    { title: 'Minutes and product',
      explain: R`$\tfrac56\cdot\tfrac9{10}=\tfrac34$. Total $\tfrac23\cdot\tfrac34=\tfrac12$.`,
      check: { q: R`What is $\tfrac56\cdot\tfrac9{10}$?`, opts: [R`\tfrac34`, R`\tfrac45`, R`\tfrac{9}{12}\cdot2`, R`\tfrac23`], ans: 0, why: R`$\tfrac{45}{60}$.` } }
  ],
  bridge: R`Multiply the hour fraction by the two minute-digit fractions.`,
  solution: [
    R`Hours without a $1$: $\tfrac8{12}=\tfrac23$.`,
    R`Minutes without a $1$: $\tfrac56\cdot\tfrac9{10}=\tfrac34$.`,
    R`Fraction correct: $\tfrac23\cdot\tfrac34=\tfrac12$.`,
    R`The answer is $\textbf{(A)}\ \tfrac12$.`
  ],
  shortcut: R`Count good minutes directly: $5\cdot9=45$ of $60$.`,
  traps: [R`Missing $10$ and $12$ as bad hours.`, R`Treating the tens digit of minutes as $0$–$9$.`],
  recognize: R`"Avoid a digit" on clocks: split into independent digit positions with their own ranges.`
},

'2009B20': {
  answer: 'B',
  goal: R`Right triangle with legs $AB=1$, $BC=2$; the bisector of $\angle A$ meets $BC$ at $D$. We want $BD$. The angle bisector theorem splits $BC$ in the ratio of the adjacent sides.`,
  tools: [
    { name: 'Angle bisector theorem', fact: R`\frac{BD}{DC}=\frac{AB}{AC}`, why: R`The bisector from $A$ divides the opposite side in the ratio of the sides at $A$.` },
    { name: 'Hypotenuse', fact: R`AC=\sqrt{1+4}=\sqrt5`, why: R`Pythagoras.` }
  ],
  approach: R`$BD:DC=1:\sqrt5$ and $BD+DC=2$, so $BD=\tfrac{2}{1+\sqrt5}$. Rationalise.`,
  steps: [
    { title: 'Ratio',
      explain: R`$\tfrac{BD}{DC}=\tfrac{1}{\sqrt5}$, so $BD=\tfrac{1}{1+\sqrt5}\cdot2$.`,
      check: { q: R`If $BD:DC=1:\sqrt5$ and $BC=2$, what is $BD$?`, opts: [R`\tfrac{2}{1+\sqrt5}`, R`\tfrac{2}{\sqrt5}`, R`\tfrac{1}{\sqrt5}`, R`\tfrac{2\sqrt5}{1+\sqrt5}`], ans: 0, why: R`$BD$ is $\tfrac{1}{1+\sqrt5}$ of the whole.` } },
    { title: 'Rationalise',
      explain: R`$\tfrac{2}{1+\sqrt5}\cdot\tfrac{\sqrt5-1}{\sqrt5-1}=\tfrac{2(\sqrt5-1)}{4}=\tfrac{\sqrt5-1}{2}$.`,
      check: { q: R`What is $(\sqrt5+1)(\sqrt5-1)$?`, opts: [R`4`, R`6`, R`5`, R`2`], ans: 0, why: R`$5-1$.` } }
  ],
  bridge: R`Apply the bisector theorem, then rationalise.`,
  solution: [
    R`$AC=\sqrt5$; $\tfrac{BD}{DC}=\tfrac{1}{\sqrt5}$.`,
    R`$BD=\tfrac{2}{1+\sqrt5}=\tfrac{\sqrt5-1}{2}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac{\sqrt5-1}{2}$.`
  ],
  shortcut: R`Check: $\tan\tfrac{A}{2}=\tfrac{\sin A}{1+\cos A}=\tfrac{2/\sqrt5}{1+1/\sqrt5}=\tfrac{2}{\sqrt5+1}$, and $BD=AB\tan\tfrac A2$.`,
  traps: [R`Using $\tfrac{BD}{DC}=\tfrac{AC}{AB}$ (reversed).`, R`Answering $\tfrac{\sqrt5+1}{2}$.`],
  recognize: R`Angle bisector meeting the opposite side: use the ratio of the two adjacent sides.`
},

'2009B21': {
  answer: 'D',
  goal: R`We want $3^0+3^1+\cdots+3^{2009}\pmod 8$. Powers of $3$ mod $8$ alternate $1,3,1,3,\ldots$`,
  tools: [
    { name: 'Cycle of powers', fact: R`3^2=9\equiv1\pmod8`, why: R`So $3^{\text{even}}\equiv1$, $3^{\text{odd}}\equiv3$.` },
    { name: 'Pairing', fact: R`3^{2k}+3^{2k+1}\equiv1+3=4`, why: R`Group consecutive terms.` }
  ],
  approach: R`There are $2010$ terms, i.e. $1005$ pairs, each $\equiv4$. The sum is $\equiv4\cdot1005\pmod8$.`,
  steps: [
    { title: 'Pairs',
      explain: R`Each pair $(3^{2k},3^{2k+1})$ is $\equiv1+3=4\pmod8$; there are $1005$ pairs.`,
      check: { q: R`How many terms are in $3^0,\ldots,3^{2009}$?`, opts: [R`2010`, R`2009`, R`2008`, R`1005`], ans: 0, why: R`Exponents $0$ through $2009$.` } },
    { title: 'Reduce',
      explain: R`$4\cdot1005$: $1005$ is odd, so $4\cdot\text{odd}\equiv4\pmod8$.`,
      check: { q: R`What is $4\cdot\text{(odd number)}\bmod8$?`, opts: [R`4`, R`0`, R`2`, R`6`], ans: 0, why: R`$4(2m+1)=8m+4$.` } }
  ],
  bridge: R`Pair terms; each pair gives $4$.`,
  solution: [
    R`$3^{2k}\equiv1$, $3^{2k+1}\equiv3\pmod8$.`,
    R`$1005$ pairs, each $\equiv4$.`,
    R`$4\cdot1005\equiv4\pmod8$.`,
    R`The answer is $\textbf{(D)}\ 4$.`
  ],
  shortcut: R`Closed form: the sum is $\tfrac{3^{2010}-1}{2}$. Since $9^2\equiv1\pmod{16}$, $3^{2010}=9^{1005}\equiv9\pmod{16}$, and $\tfrac{9-1}{2}=4$.`,
  traps: [R`Counting $2009$ terms.`, R`Concluding $0$ because each pair is divisible by $4$.`],
  recognize: R`Long sums of powers mod $m$: find the cycle of the powers and group by cycle.`
},

'2009B22': {
  answer: 'B',
  goal: R`A $2\times2\times2$ cake is iced on top and sides and cut vertically. In the top view (square side $2$, $M$ the midpoint of the top edge) one cut runs from $M$ to a bottom corner and the other from the other bottom corner perpendicular to the first cut. Piece $B$ has top triangle with the bottom edge as one side. We want volume $c$ plus icing $s$.`,
  tools: [
    { name: 'Prism volume', fact: R`c=\text{(top area)}\times2`, why: R`Vertical cuts make a prism of height $2$.` },
    { name: 'Icing on a piece', fact: R`s=\text{top area}+2\times\text{(outer edge length)}`, why: R`Only faces on the outside of the cube are iced; the bottom is not.` },
    { name: 'Foot of a perpendicular', fact: R`\text{project onto the line}`, why: R`Finds where the second cut meets the first.` }
  ],
  approach: R`Place the square at $(0,0)$–$(2,2)$ with $M=(1,2)$. The cut is from $(0,0)$ to $M$, direction $(1,2)$. The perpendicular from $(2,0)$ lands at $N=(\tfrac25,\tfrac45)$. Triangle $B$ has vertices $(0,0),(2,0),N$; height $\tfrac45$ over base $2$.`,
  steps: [
    { title: 'Top area',
      explain: R`Projection of $(2,0)$ onto direction $(1,2)$: $\tfrac{2}{5}(1,2)=(\tfrac25,\tfrac45)$. Area $=\tfrac12\cdot2\cdot\tfrac45=\tfrac45$.`,
      check: { q: R`A triangle with base $2$ on the $x$-axis and third vertex at height $\tfrac45$ has area?`, opts: [R`\tfrac45`, R`\tfrac85`, R`\tfrac25`, R`1`], ans: 0, why: R`$\tfrac12\cdot2\cdot\tfrac45$.` } },
    { title: 'Volume and icing',
      explain: R`$c=\tfrac45\cdot2=\tfrac85$. Icing: top $\tfrac45$ plus the outer side face $2\times2=4$, so $s=\tfrac{24}5$. Sum $\tfrac{32}5$.`,
      check: { q: R`Which faces of piece $B$ are iced?`, opts: [R`\text{Top and the one outer side}`, R`\text{All faces}`, R`\text{Top only}`, R`\text{Top, bottom and outer side}`], ans: 0, why: R`Cut faces are inside the cake; the bottom is not iced.` } }
  ],
  bridge: R`Find the triangle's area; volume is twice it, icing is it plus the outer side.`,
  solution: [
    R`Top triangle: base $2$, height $\tfrac45$, area $\tfrac45$.`,
    R`$c=\tfrac85$.`,
    R`$s=\tfrac45+2\cdot2=\tfrac{24}5$.`,
    R`$c+s=\tfrac{32}5$.`,
    R`The answer is $\textbf{(B)}\ \tfrac{32}5$.`
  ],
  shortcut: R`$c+s=3\cdot(\text{top area})+2\cdot(\text{outer edge})$ for any vertical slice of this cake.`,
  traps: [R`Icing the cut faces or the bottom.`, R`Using height $1$ for the cake.`],
  recognize: R`Vertical slices of a prism: volume is area times height; surface counts only original outside faces.`
},

'2009B23': {
  answer: 'C',
  goal: R`Rachel laps in $90$ s, Robert (other direction) in $80$ s. A photo at a random time between $600$ and $660$ s shows the quarter of track centred on the start. We want the probability both are in it. Each runner is in the photo when within $\tfrac18$ lap of the start.`,
  tools: [
    { name: 'Windows around lap times', fact: R`\text{in view when }|t-nT|\le\tfrac T8`, why: R`$\tfrac18$ lap takes $\tfrac T8$ seconds; direction doesn't matter.` },
    { name: 'Uniform time', fact: R`P=\frac{\text{overlap length}}{60}`, why: R`The photo time is uniform on $[600,660]$.` }
  ],
  approach: R`Rachel passes the start at $630$ (lap $7$); she is in view for $630\pm11.25$. Robert passes at $640$ (lap $8$); in view for $640\pm10$. Intersect with each other and $[600,660]$.`,
  steps: [
    { title: 'Windows',
      explain: R`Rachel: $[618.75,641.25]$. Robert: $[630,650]$. (Their other passes, $540,720$ and $560,720$, are too far.)`,
      check: { q: R`How long does Rachel take to run $\tfrac18$ lap?`, opts: [R`11.25\text{ s}`, R`10\text{ s}`, R`22.5\text{ s}`, R`12\text{ s}`], ans: 0, why: R`$90/8$.` } },
    { title: 'Overlap',
      explain: R`$[630,641.25]$, length $11.25$. Probability $\tfrac{11.25}{60}=\tfrac3{16}$.`,
      check: { q: R`What is $\tfrac{11.25}{60}$?`, opts: [R`\tfrac3{16}`, R`\tfrac18`, R`\tfrac14`, R`\tfrac5{16}`], ans: 0, why: R`$\tfrac{45}{240}$.` } }
  ],
  bridge: R`Find each runner's in-view interval during minute $10$ and intersect.`,
  solution: [
    R`Rachel is at the start at $t=630$, in view on $[618.75,641.25]$.`,
    R`Robert is at the start at $t=640$, in view on $[630,650]$.`,
    R`Both: $[630,641.25]$, length $11.25$.`,
    R`$P=\tfrac{11.25}{60}=\tfrac3{16}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac3{16}$.`
  ],
  shortcut: R`Directions are irrelevant: only distance from the start matters.`,
  traps: [R`Using a window of $\tfrac14$ lap on each side.`, R`Dividing by $660$ instead of $60$.`],
  recognize: R`Periodic motion + random observation time: turn each condition into time intervals and measure the overlap.`
},

'2009B24': {
  answer: 'A',
  goal: R`An arch of $9$ congruent isosceles trapezoids, end bottoms horizontal. We want the larger interior angle $x$. Extend each trapezoid's legs: they meet at the arch's centre, and the $9$ wedges fill a half-turn.`,
  tools: [
    { name: 'Equal wedges', fact: R`\text{apex angle}=\tfrac{180^\circ}{9}=20^\circ`, why: R`The ends are horizontal, so the arch spans $180^\circ$.` },
    { name: 'Isosceles triangle', fact: R`\text{base angles}=\tfrac{180^\circ-20^\circ}{2}=80^\circ`, why: R`Extending the legs makes an isosceles triangle.` },
    { name: 'Co-interior angles', fact: R`x=180^\circ-80^\circ`, why: R`The trapezoid's angles on a leg add to $180^\circ$.` }
  ],
  approach: R`Each trapezoid is an isosceles triangle with apex $20^\circ$ minus a smaller similar triangle. Its smaller angles are $80^\circ$, so the larger ones are $100^\circ$.`,
  steps: [
    { title: 'Apex angle',
      explain: R`Nine equal wedges spanning $180^\circ$: $20^\circ$ each.`,
      check: { q: R`What is $180^\circ/9$?`, opts: [R`20^\circ`, R`40^\circ`, R`18^\circ`, R`30^\circ`], ans: 0, why: R`Divide.` } },
    { title: 'Larger angle',
      explain: R`Base angles $\tfrac{160^\circ}{2}=80^\circ$; the larger trapezoid angle is $180^\circ-80^\circ=100^\circ$.`,
      check: { q: R`If the smaller angle of an isosceles trapezoid is $80^\circ$, what is the larger?`, opts: [R`100^\circ`, R`80^\circ`, R`110^\circ`, R`120^\circ`], ans: 0, why: R`Angles along a leg are supplementary.` } }
  ],
  bridge: R`Get the wedge angle, then the triangle's base angles, then the supplement.`,
  solution: [
    R`Legs extended meet at the centre; $9$ wedges make $180^\circ$, so each is $20^\circ$.`,
    R`The isosceles triangle has base angles $80^\circ$.`,
    R`The trapezoid's larger angle is $100^\circ$.`,
    R`The answer is $\textbf{(A)}\ 100$.`
  ],
  shortcut: R`$x=90^\circ+\tfrac12\cdot\tfrac{180^\circ}{n}=90+10=100$.`,
  traps: [R`Using $360^\circ$ for the arch.`, R`Answering the smaller angle $80$.`],
  recognize: R`Rings or arches of congruent wedges: the legs meet at a centre and the wedge angles add to the total turn.`
},

'2009B25': {
  answer: 'B',
  goal: R`Each face of a cube gets a stripe joining midpoints of one of its two pairs of opposite edges, chosen randomly. We want the probability some stripe loop goes all the way round the cube. A loop must run around one of the $3$ axes through $4$ faces.`,
  tools: [
    { name: 'Ring around an axis', fact: R`\text{4 side faces must align: }\left(\tfrac12\right)^4=\tfrac1{16}`, why: R`Each of those faces must pick the one orientation that continues the loop.` },
    { name: 'Disjoint events', fact: R`P(\cup)=\sum P`, why: R`Two different rings would share a face needing two orientations.` }
  ],
  approach: R`For each axis, a loop needs the $4$ faces around it oriented the right way: $\tfrac1{16}$. The top and bottom are free. Rings for two axes can't happen together, so add: $3\cdot\tfrac1{16}$.`,
  steps: [
    { title: 'One axis',
      explain: R`The loop around the vertical axis uses the $4$ side faces, each needing a horizontal stripe: $\left(\tfrac12\right)^4$.`,
      check: { q: R`What is $\left(\tfrac12\right)^4$?`, opts: [R`\tfrac1{16}`, R`\tfrac18`, R`\tfrac14`, R`\tfrac1{32}`], ans: 0, why: R`$\tfrac{1}{2^4}$.` } },
    { title: 'Three axes',
      explain: R`Any two rings share $2$ faces that would need perpendicular stripes, so the events are disjoint. Total $\tfrac3{16}$.`,
      check: { q: R`Can loops around two different axes both appear?`, opts: [R`\text{No}`, R`\text{Yes, always}`, R`\text{Yes, sometimes}`, R`\text{Only for opposite faces}`], ans: 0, why: R`A shared face can't have both stripe directions.` } }
  ],
  bridge: R`One ring has probability $\tfrac1{16}$; three disjoint choices.`,
  solution: [
    R`A ring around a given axis needs $4$ faces aligned: $\tfrac1{16}$.`,
    R`The three ring events are mutually exclusive.`,
    R`$P=\tfrac{3}{16}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac3{16}$.`
  ],
  shortcut: R`Count: $3$ axes $\times\ 2^2$ free top/bottom choices $=12$ of $2^6=64$ patterns: $\tfrac{12}{64}=\tfrac3{16}$.`,
  traps: [R`Requiring all $6$ faces to cooperate ($\tfrac{3}{64}$).`, R`Overlap-correcting events that can't overlap.`],
  recognize: R`Loops on a cube: a loop around an axis uses exactly the $4$ faces around it.`
}

};
