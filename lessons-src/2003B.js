// Hand-written lessons: 2003 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2003B16': {
  answer: 'E',
  goal: R`$m$ main courses, $2m$ appetizers, $3$ desserts. We want the least $m$ with at least $365$ distinct dinners ($2003$ isn't a leap year).`,
  tools: [
    { name: 'Multiplication principle', fact: R`\#\text{dinners}=2m\cdot m\cdot3=6m^2`, why: R`Independent choices.` }
  ],
  approach: R`Need $6m^2\ge365$: $m^2\ge60.9$, so $m=8$ ($6\cdot49=294$ is too few; $6\cdot64=384$ works).`,
  steps: [
    { title: 'Inequality',
      explain: R`$6m^2\ge365$.`,
      check: { q: R`How many days are in $2003$?`, opts: [R`365`, R`366`, R`364`, R`360`], ans: 0, why: R`Not a leap year.` } },
    { title: 'Smallest $m$',
      explain: R`$m=7$: $294<365$. $m=8$: $384\ge365$.`,
      check: { q: R`What is $6\cdot8^2$?`, opts: [R`384`, R`294`, R`512`, R`336`], ans: 0, why: R`$6\cdot64$.` } }
  ],
  bridge: R`Count dinners as $6m^2$ and compare with $365$.`,
  solution: [
    R`Dinners $=6m^2$.`,
    R`$6\cdot7^2=294<365\le384=6\cdot8^2$.`,
    R`The answer is $\textbf{(E)}\ 8$.`
  ],
  shortcut: R`$\sqrt{365/6}\approx7.8$, round up.`,
  traps: [R`Using $3m$ dinners (adding instead of multiplying).`, R`Rounding down to $7$.`],
  recognize: R`"Different each night": total combinations at least the number of nights.`
},

'2003B17': {
  answer: 'B',
  goal: R`A sphere of radius $r$ melts to $75\%$ of its volume and exactly fills a cone of radius $r$. We want $h:r$.`,
  tools: [
    { name: 'Volumes', fact: R`\tfrac34\cdot\tfrac43\pi r^3=\pi r^3=\tfrac13\pi r^2h`, why: R`Melted sphere equals the cone.` }
  ],
  approach: R`$\pi r^3=\tfrac13\pi r^2h$ gives $h=3r$.`,
  steps: [
    { title: 'Melted volume',
      explain: R`$\tfrac34\cdot\tfrac43\pi r^3=\pi r^3$.`,
      check: { q: R`What is $\tfrac34\cdot\tfrac43$?`, opts: [R`1`, R`\tfrac12`, R`\tfrac{16}{9}`, R`\tfrac{9}{16}`], ans: 0, why: R`They cancel.` } },
    { title: 'Height',
      explain: R`$\tfrac13r^2h=r^3\Rightarrow h=3r$. Ratio $3:1$.`,
      check: { q: R`If $\tfrac13r^2h=r^3$, what is $h$?`, opts: [R`3r`, R`r`, R`\tfrac r3`, R`9r`], ans: 0, why: R`Multiply by $\tfrac{3}{r^2}$.` } }
  ],
  bridge: R`Set the melted volume equal to the cone volume.`,
  solution: [
    R`Melted volume $\pi r^3$.`,
    R`Cone $\tfrac13\pi r^2h=\pi r^3\Rightarrow h=3r$.`,
    R`The answer is $\textbf{(B)}\ 3:1$.`
  ],
  shortcut: R`Without melting loss it would be $4:1$; $75\%$ gives $3:1$.`,
  traps: [R`Forgetting the $75\%$ ($4:1$).`, R`Using diameter instead of radius.`],
  recognize: R`Shape-to-shape volume transfers: set the volumes equal.`
},

'2003B18': {
  answer: 'D',
  goal: R`For even $n$, $(n+1)(n+3)(n+5)(n+7)(n+9)$ is a product of $5$ consecutive odd numbers. We want the largest integer dividing it for every even $n$.`,
  tools: [
    { name: 'Guaranteed factors', fact: R`5\text{ consecutive odds hit every residue mod }5\text{ and mod }3`, why: R`Odd numbers step by $2$, which is invertible mod $3$ and $5$.` },
    { name: 'Counterexample', fact: R`n=10:\ 11\cdot13\cdot15\cdot17\cdot19`, why: R`Only one $3$ and one $5$, no $7$.` }
  ],
  approach: R`$3$ and $5$ always divide it, so $15$ does. To see nothing larger works, compare $n=2$ ($3\cdot5\cdot7\cdot9\cdot11$) with $n=10$ ($11\cdot13\cdot15\cdot17\cdot19$) and $n=12$ ($13\cdot15\cdot17\cdot19\cdot21$): the only factor common to all three is $15$.`,
  steps: [
    { title: 'Always divisible by 15',
      explain: R`Among $5$ consecutive odd numbers, one is a multiple of $5$ and at least one a multiple of $3$.`,
      check: { q: R`Why does one of five consecutive odd numbers divide by $5$?`, opts: [R`\text{They cover all residues mod }5`, R`\text{They are all prime}`, R`\text{The middle one is }5`, R`\text{They're consecutive integers}`], ans: 0, why: R`Steps of $2$ cycle through all residues mod $5$.` } },
    { title: 'Nothing more',
      explain: R`$n=10$: $11\cdot13\cdot15\cdot17\cdot19$ has exactly one $3$ and one $5$, so $9$, $25$ and $7$ are out. $n=12$ has no factor $11$. So $15$ is the most that always divides.`,
      check: { q: R`Does $11\cdot13\cdot15\cdot17\cdot19$ divide by $9$?`, opts: [R`\text{No}`, R`\text{Yes}`, R`\text{Only by 27}`, R`\text{Only by 33}`], ans: 0, why: R`Only $15$ contributes a $3$.` } }
  ],
  bridge: R`Show $15$ always works; use a couple of cases to rule out more.`,
  solution: [
    R`Five consecutive odds include a multiple of $3$ and of $5$.`,
    R`$n=2$ and $n=10$ share only the factor $15$.`,
    R`The answer is $\textbf{(D)}\ 15$.`
  ],
  shortcut: R`Test two cases and take the gcd: $\gcd(3\cdot5\cdot7\cdot9\cdot11,\ 11\cdot13\cdot15\cdot17\cdot19)=165$; a third case $n=12$ removes the $11$, leaving $15$.`,
  traps: [R`Answering $165$ from only two test cases.`, R`Assuming $9$ always divides.`],
  recognize: R`"Largest integer always dividing": guaranteed residues, then counterexamples.`
},

'2003B19': {
  answer: 'E',
  goal: R`Big semicircle radius $2$ on $AB$; three unit semicircles centred at $-1,0,1$ along $AB$. We want the big semicircle minus the union of the small ones. Overlaps are half-lenses.`,
  tools: [
    { name: 'Half-lens', fact: R`\tfrac\pi3-\tfrac{\sqrt3}4`, why: R`Two unit circles with centres $1$ apart overlap in a lens of $\tfrac{2\pi}3-\tfrac{\sqrt3}2$; half is above $AB$.` },
    { name: 'Union by inclusion–exclusion', fact: R`3\cdot\tfrac\pi2-2\cdot\text{half-lens}`, why: R`The outer semicircles don't overlap each other.` }
  ],
  approach: R`Union $=\tfrac{3\pi}2-2\left(\tfrac\pi3-\tfrac{\sqrt3}4\right)=\tfrac{5\pi}6+\tfrac{\sqrt3}2$. Shaded $=2\pi-$ union.`,
  steps: [
    { title: 'Union',
      explain: R`$\tfrac{3\pi}{2}-\tfrac{2\pi}3+\tfrac{\sqrt3}2=\tfrac{5\pi}6+\tfrac{\sqrt3}2$.`,
      check: { q: R`What is the lens area of two unit circles with centres $1$ apart?`, opts: [R`\tfrac{2\pi}3-\tfrac{\sqrt3}2`, R`\tfrac\pi3`, R`\tfrac{\pi}{3}-\tfrac{\sqrt3}{4}`, R`\pi-\sqrt3`], ans: 0, why: R`Two $120^\circ$ segments.` } },
    { title: 'Shaded',
      explain: R`$2\pi-\tfrac{5\pi}6-\tfrac{\sqrt3}2=\tfrac{7\pi}6-\tfrac{\sqrt3}2$.`,
      check: { q: R`What is $2\pi-\tfrac{5\pi}6$?`, opts: [R`\tfrac{7\pi}6`, R`\tfrac{5\pi}{6}`, R`\tfrac{\pi}{6}`, R`\tfrac{11\pi}{6}`], ans: 0, why: R`$\tfrac{12\pi-5\pi}{6}$.` } }
  ],
  bridge: R`Union of the small semicircles via half-lenses.`,
  solution: [
    R`Big semicircle: $2\pi$.`,
    R`Union of small ones: $\tfrac{5\pi}6+\tfrac{\sqrt3}2$.`,
    R`Shaded: $\tfrac{7\pi}6-\tfrac{\sqrt3}2$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`Check magnitude: $\approx2.80$, a bit under half of $2\pi$.`,
  traps: [R`Subtracting $3\cdot\tfrac\pi2$ without overlaps.`, R`Using full lenses instead of halves.`],
  recognize: R`Overlapping semicircles on a line: inclusion–exclusion with half-lenses.`
},

'2003B20': {
  answer: 'D',
  goal: R`Rectangle $AB=5$, $BC=3$; $F,G$ on $CD$ with $DF=1$, $GC=2$ (so $FG=2$). Lines $AF$ and $BG$ meet at $E$ beyond $CD$. We want $[AEB]$. Triangles $EFG$ and $EAB$ are similar.`,
  tools: [
    { name: 'Similar triangles', fact: R`\frac{h-3}{h}=\frac{FG}{AB}=\frac25`, why: R`$FG\parallel AB$; $h$ is the height of $E$ above $AB$.` }
  ],
  approach: R`$5(h-3)=2h$, so $h=5$. $[AEB]=\tfrac12\cdot5\cdot5$.`,
  steps: [
    { title: 'Height',
      explain: R`$FG=5-1-2=2$. $\tfrac{h-3}h=\tfrac25\Rightarrow h=5$.`,
      check: { q: R`What is $FG$?`, opts: [R`2`, R`3`, R`1`, R`4`], ans: 0, why: R`$5-1-2$.` } },
    { title: 'Area',
      explain: R`$\tfrac12\cdot5\cdot5=\tfrac{25}2$.`,
      check: { q: R`If $5h-15=2h$, what is $h$?`, opts: [R`5`, R`3`, R`\tfrac{15}{7}`, R`7.5`], ans: 0, why: R`$3h=15$.` } }
  ],
  bridge: R`Similar triangles give the height.`,
  solution: [
    R`$\triangle EFG\sim\triangle EAB$ with ratio $\tfrac25$.`,
    R`Heights: $h-3=\tfrac25h\Rightarrow h=5$.`,
    R`$[AEB]=\tfrac{25}2$.`,
    R`The answer is $\textbf{(D)}\ \tfrac{25}2$.`
  ],
  shortcut: R`Coordinates: $AF$: $y=3x$; $BG$: $y=-\tfrac32(x-5)$; meet at $x=\tfrac53$, $y=5$.`,
  traps: [R`Assuming $E$ lies on $CD$.`, R`Using the rectangle's height $3$.`],
  recognize: R`Lines from a base through a parallel segment: similar triangles with a shared apex.`
},

'2003B21': {
  answer: 'C',
  goal: R`A bag has $2$ red, $2$ green. Each step: draw a bead, replace it with red. We want $P(\text{all red after }3\text{ steps})$. Both greens must be drawn.`,
  tools: [
    { name: 'State tracking', fact: R`P(\text{green})=\tfrac g4`, why: R`$g$ greens remain.` },
    { name: 'Paths', fact: R`GG?,\ GRG,\ RGG`, why: R`The two greens must be drawn in two of the three steps.` }
  ],
  approach: R`$GG\ast$: $\tfrac24\cdot\tfrac14=\tfrac18$. $GRG$: $\tfrac24\cdot\tfrac34\cdot\tfrac14=\tfrac3{32}$. $RGG$: $\tfrac24\cdot\tfrac24\cdot\tfrac14=\tfrac1{16}$. Sum.`,
  steps: [
    { title: 'Paths',
      explain: R`$\tfrac18=\tfrac4{32}$, $\tfrac3{32}$, $\tfrac1{16}=\tfrac2{32}$.`,
      check: { q: R`After one green is replaced, what is $P(\text{green})$ next?`, opts: [R`\tfrac14`, R`\tfrac12`, R`\tfrac13`, R`\tfrac34`], ans: 0, why: R`One green out of four.` } },
    { title: 'Sum',
      explain: R`$\tfrac{4+3+2}{32}=\tfrac9{32}$.`,
      check: { q: R`What is $\tfrac{4+3+2}{32}$?`, opts: [R`\tfrac9{32}`, R`\tfrac{5}{32}`, R`\tfrac{7}{16}`, R`\tfrac38`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Enumerate the three successful paths.`,
  solution: [
    R`Paths: $GG\ast$, $GRG$, $RGG$.`,
    R`$\tfrac4{32}+\tfrac3{32}+\tfrac2{32}=\tfrac9{32}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac9{32}$.`
  ],
  shortcut: R`Probabilities change after each green draw — always update the state.`,
  traps: [R`Using constant probability $\tfrac12$.`, R`Forgetting the $GG$ then anything path.`],
  recognize: R`Changing-urn problems: track the state and list paths.`
},

'2003B22': {
  answer: 'B',
  goal: R`A clock chimes $1$ at each half hour and $h$ at $h$ o'clock. Starting 11:15 AM Feb 26, 2003, we want the date of the $2003$rd chime. Count to midnight, then by whole days.`,
  tools: [
    { name: 'Chimes per day', fact: R`2(1+\cdots+12)+24=180`, why: R`Two cycles of hours plus $24$ half-hours.` },
    { name: 'Feb 2003', fact: R`28\text{ days}`, why: R`Not a leap year.` }
  ],
  approach: R`Through midnight ending Feb 26: $1+12+12+66+12=103$ chimes. $2003-103=1900=10\cdot180+100$. Ten full days (Feb 27–Mar 8), then the $100$th chime of Mar 9.`,
  steps: [
    { title: 'Feb 26',
      explain: R`11:30 ($1$), noon ($12$), $12$ half-hours 12:30–11:30 PM, 1–11 PM ($66$), midnight ($12$): $103$.`,
      check: { q: R`What is $1+2+\cdots+11$?`, opts: [R`66`, R`78`, R`55`, R`60`], ans: 0, why: R`$\tfrac{11\cdot12}{2}$.` } },
    { title: 'Days',
      explain: R`$1900=10\cdot180+100$. After Feb 27, 28, Mar 1–8 ($10$ days) we need $100$ more, which happens during Mar 9 ($100<180$).`,
      check: { q: R`Which date is $10$ days of chimes after Feb 26 ends?`, opts: [R`\text{end of Mar 8}`, R`\text{end of Mar 9}`, R`\text{end of Mar 7}`, R`\text{end of Mar 10}`], ans: 0, why: R`Feb 27, 28, then Mar 1–8.` } }
  ],
  bridge: R`Count to midnight, divide the rest by $180$.`,
  solution: [
    R`$103$ chimes through the end of Feb 26.`,
    R`$1900=10\cdot180+100$.`,
    R`$10$ full days end with Mar 8; the $2003$rd chime is on Mar 9.`,
    R`The answer is $\textbf{(B)}$ March 9.`
  ],
  shortcut: R`Remember February 2003 has $28$ days.`,
  traps: [R`Using $29$ days in February.`, R`Forgetting the half-hour chimes.`],
  recognize: R`Periodic counting: count to a clean boundary, then use the period.`
},

'2003B23': {
  answer: 'D',
  goal: R`Regular octagon $ABCDEFGH$ of area $1$. We want the area of rectangle $ABEF$. Compare with side $s$.`,
  tools: [
    { name: 'Width of a regular octagon', fact: R`s(1+\sqrt2)`, why: R`A side plus two $45^\circ$ projections $\tfrac{s}{\sqrt2}$.` },
    { name: 'Octagon area', fact: R`2(1+\sqrt2)s^2`, why: R`Square of side $s(1+\sqrt2)$ minus four corners of $\tfrac{s^2}{4}$.` }
  ],
  approach: R`Rectangle $ABEF$: sides $s$ and $s(1+\sqrt2)$, area $s^2(1+\sqrt2)$ — exactly half the octagon.`,
  steps: [
    { title: 'Rectangle',
      explain: R`$AB=s$ and $BE$ spans the octagon's width: $s(1+\sqrt2)$.`,
      check: { q: R`What is the distance between opposite sides of a regular octagon of side $s$?`, opts: [R`s(1+\sqrt2)`, R`2s`, R`s\sqrt2`, R`s(2+\sqrt2)`], ans: 0, why: R`$s+2\cdot\tfrac{s}{\sqrt2}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{s^2(1+\sqrt2)}{2s^2(1+\sqrt2)}=\tfrac12$.`,
      check: { q: R`What is the octagon's area in terms of $s$?`, opts: [R`2(1+\sqrt2)s^2`, R`(1+\sqrt2)s^2`, R`8s^2`, R`4s^2`], ans: 0, why: R`$s^2(1+\sqrt2)^2-s^2$.` } }
  ],
  bridge: R`Express both areas in $s$.`,
  solution: [
    R`$[ABEF]=s\cdot s(1+\sqrt2)$.`,
    R`Octagon $=2(1+\sqrt2)s^2$.`,
    R`$[ABEF]=\tfrac12$.`,
    R`The answer is $\textbf{(D)}\ \tfrac12$.`
  ],
  shortcut: R`The two trapezoids $BCDE$ and $FGHA$ together equal the rectangle.`,
  traps: [R`Treating $BE$ as $s\sqrt2$.`, R`Using the area of a square.`],
  recognize: R`Regular octagon sub-regions: express everything in the side length.`
},

'2003B24': {
  answer: 'E',
  goal: R`$x+y,\ x-y,\ xy,\ \tfrac xy$ are in arithmetic progression. We want the fifth term. The common difference is $(x-y)-(x+y)=-2y$.`,
  tools: [
    { name: 'Common difference', fact: R`d=-2y`, why: R`First two terms.` },
    { name: 'Two equations', fact: R`xy-(x-y)=-2y,\ \ \tfrac xy-xy=-2y`, why: R`Next two differences.` }
  ],
  approach: R`First gives $x=\tfrac{3y}{1-y}$; second gives $x=\tfrac{-2y^2}{1-y^2}$. Equating: $3(1+y)=-2y$, so $y=-\tfrac35$, $x=-\tfrac98$. Fifth term $=\tfrac xy+d$.`,
  steps: [
    { title: 'Solve',
      explain: R`$3y(1+y)=-2y^2\Rightarrow3+3y=-2y\Rightarrow y=-\tfrac35$. Then $x=\tfrac{-9/5}{8/5}=-\tfrac98$.`,
      check: { q: R`If $3+3y=-2y$, what is $y$?`, opts: [R`-\tfrac35`, R`\tfrac35`, R`-\tfrac53`, R`-3`], ans: 0, why: R`$5y=-3$.` } },
    { title: 'Fifth term',
      explain: R`$\tfrac xy=\tfrac{15}8$, $d=\tfrac65$. Fifth $=\tfrac{15}8+\tfrac65=\tfrac{123}{40}$.`,
      check: { q: R`What is $\tfrac{15}8+\tfrac65$?`, opts: [R`\tfrac{123}{40}`, R`\tfrac{21}{13}`, R`\tfrac{27}{20}`, R`\tfrac{99}{40}`], ans: 0, why: R`$\tfrac{75+48}{40}$.` } }
  ],
  bridge: R`Use $d=-2y$ in both remaining differences.`,
  solution: [
    R`$d=-2y$; solving gives $y=-\tfrac35$, $x=-\tfrac98$.`,
    R`Terms: $-\tfrac{69}{40},-\tfrac{21}{40},\tfrac{27}{40},\tfrac{75}{40}$.`,
    R`Fifth: $\tfrac{123}{40}$.`,
    R`The answer is $\textbf{(E)}\ \tfrac{123}{40}$.`
  ],
  shortcut: R`Check the terms in fortieths: they rise by $48$ each time.`,
  traps: [R`Assuming $y>0$.`, R`Using $d=2y$.`],
  recognize: R`Mixed-expression APs: equal consecutive differences give a system.`
}

};
