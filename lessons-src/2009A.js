// Hand-written lessons: 2009 AMC 10A, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2009A16': {
  answer: 'D',
  goal: R`Consecutive gaps $|a-b|=2$, $|b-c|=3$, $|c-d|=4$; we want the sum of all possible $|a-d|$. Each gap can point either way, so $a-d=\pm2\pm3\pm4$.`,
  tools: [
    { name: 'Telescoping differences', fact: R`a-d=(a-b)+(b-c)+(c-d)`, why: R`The middle terms cancel.` },
    { name: 'Absolute values as signs', fact: R`|x|=k\iff x=\pm k`, why: R`Each difference has two possible signs.` }
  ],
  approach: R`List the absolute values of $\pm2\pm3\pm4$. Sign patterns come in opposite pairs with the same absolute value, so four values remain.`,
  steps: [
    { title: 'List values',
      explain: R`$2+3+4=9$, $2+3-4=1$, $2-3+4=3$, $-2+3+4=5$. Flipping all signs gives the same absolute values.`,
      check: { q: R`What is $|2-3-4|$?`, opts: [R`5`, R`9`, R`1`, R`3`], ans: 0, why: R`$|-5|$.` } },
    { title: 'Sum',
      explain: R`$9+1+3+5=18$.`,
      check: { q: R`What is $9+1+3+5$?`, opts: [R`18`, R`17`, R`15`, R`24`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Write $a-d$ as a signed sum and list absolute values.`,
  solution: [
    R`$a-d=\pm2\pm3\pm4$.`,
    R`Possible $|a-d|$: $9,1,3,5$.`,
    R`Sum $18$.`,
    R`The answer is $\textbf{(D)}\ 18$.`
  ],
  shortcut: R`Fix the sign of one term (say $+4$) and vary the others: $4\pm3\pm2$.`,
  traps: [R`Only considering $9$.`, R`Counting duplicates twice.`],
  recognize: R`Chains of absolute differences: telescope into a signed sum.`
},

'2009A17': {
  answer: 'C',
  goal: R`Rectangle $ABCD$ ($4\times3$) sits inside right triangle $DEF$ with $A$ on $DE$, $C$ on $DF$ and $EF\perp DB$ at $B$. We want $EF$. Since the angle at $D$ is the rectangle's right angle, $DB$ is the altitude to the hypotenuse.`,
  tools: [
    { name: 'Right angle at $D$', fact: R`\angle EDF=\angle ADC=90^\circ`, why: R`$A$ is on $DE$ and $C$ on $DF$.` },
    { name: 'Tangent in right triangles', fact: R`EB=DB\tan\angle EDB,\quad BF=DB\tan\angle BDF`, why: R`$\angle DBE=\angle DBF=90^\circ$.` }
  ],
  approach: R`$DB=5$. In right triangle $DBE$, $\angle EDB=\angle ADB$ with $\tan=\tfrac43$; in $DBF$, $\angle BDF=\angle BDC$ with $\tan=\tfrac34$. Add $EB+BF$.`,
  steps: [
    { title: 'Angles at $D$',
      explain: R`$\tan\angle ADB=\tfrac{AB}{AD}=\tfrac43$ and $\tan\angle BDC=\tfrac{BC}{DC}=\tfrac34$.`,
      check: { q: R`In a $4\times3$ rectangle with $AB=4$, $AD=3$, what is $\tan\angle ADB$?`, opts: [R`\tfrac43`, R`\tfrac34`, R`\tfrac35`, R`\tfrac45`], ans: 0, why: R`Opposite $AB=4$, adjacent $AD=3$.` } },
    { title: 'Lengths',
      explain: R`$EB=5\cdot\tfrac43=\tfrac{20}3$ and $BF=5\cdot\tfrac34=\tfrac{15}4$. $EF=\tfrac{80+45}{12}=\tfrac{125}{12}$.`,
      check: { q: R`What is $\tfrac{20}3+\tfrac{15}4$?`, opts: [R`\tfrac{125}{12}`, R`\tfrac{35}{7}`, R`10`, R`\tfrac{103}{12}`], ans: 0, why: R`$\tfrac{80+45}{12}$.` } }
  ],
  bridge: R`Use $DB=5$ and the tangents of the angles at $D$.`,
  solution: [
    R`$\angle EDF=90^\circ$ and $DB=5$ is perpendicular to $EF$.`,
    R`$EB=5\cdot\tfrac43=\tfrac{20}3$, $BF=5\cdot\tfrac34=\tfrac{15}4$.`,
    R`$EF=\tfrac{125}{12}$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`Check with $DB^2=EB\cdot BF$: $\tfrac{20}3\cdot\tfrac{15}4=25$. ✓`,
  traps: [R`Swapping $\tfrac43$ and $\tfrac34$.`, R`Assuming $EF$ is parallel to a side.`],
  recognize: R`A right triangle with its altitude to the hypotenuse: the altitude splits it into similar triangles; tangents of the angles give the pieces.`
},

'2009A18': {
  answer: 'D',
  goal: R`$60\%$ play soccer, $30\%$ swim, and $40\%$ of soccer players swim. We want the percent of non-swimmers who play soccer. Use $100$ children.`,
  tools: [
    { name: 'Natural frequencies', fact: R`\text{work with }100\text{ children}`, why: R`Percents become counts.` },
    { name: 'Conditional percent', fact: R`\frac{\#(\text{soccer and not swim})}{\#(\text{not swim})}`, why: R`The base is the non-swimmers.` }
  ],
  approach: R`Soccer $60$, of whom $24$ swim, so $36$ do not. Non-swimmers total $70$. Answer $\tfrac{36}{70}$.`,
  steps: [
    { title: 'Counts',
      explain: R`Soccer and swim: $0.4\cdot60=24$. Soccer, no swim: $36$. Non-swimmers: $70$.`,
      check: { q: R`What is $40\%$ of $60$?`, opts: [R`24`, R`18`, R`36`, R`20`], ans: 0, why: R`$0.4\cdot60$.` } },
    { title: 'Percent',
      explain: R`$\tfrac{36}{70}\approx51.4\%$, so $51\%$.`,
      check: { q: R`Approximately what is $\tfrac{36}{70}$?`, opts: [R`51\%`, R`49\%`, R`36\%`, R`60\%`], ans: 0, why: R`$0.514$.` } }
  ],
  bridge: R`Count with $100$ children and divide by the non-swimmers.`,
  solution: [
    R`Of $100$ children: $60$ soccer, $24$ of them swim.`,
    R`$36$ soccer players do not swim; $70$ children do not swim.`,
    R`$\tfrac{36}{70}\approx51\%$.`,
    R`The answer is $\textbf{(D)}\ 51\%$.`
  ],
  shortcut: R`Always identify the base of a conditional percent.`,
  traps: [R`Dividing by $100$ or by $60$.`, R`Using $30\%$ non-swimmers.`],
  recognize: R`"What percent of group X": counts over the size of group X.`
},

'2009A19': {
  answer: 'B',
  goal: R`Circle $B$ (integer radius $r<100$) rolls once around inside circle $A$ (radius $100$) and ends touching at the same points on both circles. We count possible $r$. The point of $B$ in contact returns exactly when $B$'s circumference divides $A$'s.`,
  tools: [
    { name: 'Rolling without slipping', fact: R`\text{contact arc length on }A=\text{arc length on }B`, why: R`No slipping.` },
    { name: 'Divisors', fact: R`r\mid100,\ r<100`, why: R`$2\pi\cdot100$ must be a whole number of $2\pi r$.` }
  ],
  approach: R`After one trip, $2\pi\cdot100$ of $B$'s boundary has touched $A$. To touch with the same point of $B$, this must be a whole number of $B$'s circumferences: $r\mid100$.`,
  steps: [
    { title: 'Condition',
      explain: R`$\tfrac{2\pi\cdot100}{2\pi r}=\tfrac{100}r$ must be an integer.`,
      check: { q: R`For $r=30$, is the condition met?`, opts: [R`\text{No}`, R`\text{Yes}`, R`\text{Only halfway}`, R`\text{Always}`], ans: 0, why: R`$\tfrac{100}{30}$ is not an integer.` } },
    { title: 'Count',
      explain: R`Divisors of $100$ below $100$: $1,2,4,5,10,20,25,50$: $8$ values.`,
      check: { q: R`How many positive divisors does $100$ have?`, opts: [R`9`, R`8`, R`10`, R`6`], ans: 0, why: R`$(2+1)(2+1)$; exclude $100$ itself.` } }
  ],
  bridge: R`Require $100/r$ to be an integer and count divisors.`,
  solution: [
    R`The contact length $200\pi$ must be a multiple of $2\pi r$, so $r\mid100$.`,
    R`$r<100$: $1,2,4,5,10,20,25,50$.`,
    R`$8$ values.`,
    R`The answer is $\textbf{(B)}\ 8$.`
  ],
  shortcut: R`Count divisors of $100$ ($9$) and drop $100$.`,
  traps: [R`Using the rotation count $\tfrac{100}{r}-1$ (irrelevant here).`, R`Counting $r=100$.`],
  recognize: R`Rolling-circle returns: arc lengths must match up, giving a divisibility condition.`
},

'2009A20': {
  answer: 'D',
  goal: R`Two cyclists close a $20$ km gap at $1$ km/min, Andrea three times as fast as Lauren. After $5$ minutes Andrea stops. We want when Lauren arrives. Find each speed first.`,
  tools: [
    { name: 'Closing speed', fact: R`v_A+v_L=1,\ v_A=3v_L`, why: R`They approach each other.` },
    { name: 'Distance = rate × time', fact: R`t=\tfrac{d}{v}`, why: R`For Lauren alone after the stop.` }
  ],
  approach: R`$v_L=\tfrac14$ km/min. After $5$ minutes the gap is $15$ km, which Lauren covers alone in $60$ minutes.`,
  steps: [
    { title: 'Speeds',
      explain: R`$4v_L=1$, so $v_L=\tfrac14$, $v_A=\tfrac34$ km/min.`,
      check: { q: R`If $v_A=3v_L$ and $v_A+v_L=1$, what is $v_L$?`, opts: [R`\tfrac14`, R`\tfrac13`, R`\tfrac34`, R`\tfrac12`], ans: 0, why: R`$4v_L=1$.` } },
    { title: 'Remaining time',
      explain: R`After $5$ minutes: $15$ km left; Lauren takes $\tfrac{15}{1/4}=60$ minutes. Total $65$.`,
      check: { q: R`What is $15\div\tfrac14$?`, opts: [R`60`, R`3.75`, R`20`, R`45`], ans: 0, why: R`$15\cdot4$.` } }
  ],
  bridge: R`Find the speeds, the remaining gap, and Lauren's solo time.`,
  solution: [
    R`$v_L=\tfrac14$, $v_A=\tfrac34$ km/min.`,
    R`After $5$ min the gap is $15$ km.`,
    R`Lauren needs $60$ more minutes: total $65$.`,
    R`The answer is $\textbf{(D)}\ 65$.`
  ],
  shortcut: R`Closing speed drops from $1$ to $\tfrac14$ when Andrea stops.`,
  traps: [R`Using Andrea's speed after she stops.`, R`Answering $60$ (forgetting the first $5$ minutes).`],
  recognize: R`Approach problems: closing speed is the sum; when one stops, only the other's speed counts.`
},

'2009A21': {
  answer: 'C',
  goal: R`Four congruent circles in a ring, each touching its neighbours and the big circle. We want (total small area) / (big area). The small centres form a square.`,
  tools: [
    { name: 'Centres form a square', fact: R`\text{side }2r,\ \text{half-diagonal }r\sqrt2`, why: R`Neighbouring circles touch.` },
    { name: 'Big radius', fact: R`R=r\sqrt2+r=r(1+\sqrt2)`, why: R`Distance to a small centre plus its radius.` }
  ],
  approach: R`$R=r(1+\sqrt2)$, so the ratio is $\tfrac{4r^2}{R^2}=\tfrac{4}{(1+\sqrt2)^2}$. Rationalise.`,
  steps: [
    { title: 'Big radius',
      explain: R`Centres are $r\sqrt2$ from the middle; add $r$: $R=r(1+\sqrt2)$.`,
      check: { q: R`For a square of side $2$, how far is a corner from the centre?`, opts: [R`\sqrt2`, R`1`, R`2`, R`2\sqrt2`], ans: 0, why: R`Half the diagonal $2\sqrt2$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{4}{(1+\sqrt2)^2}=\tfrac{4}{3+2\sqrt2}=4(3-2\sqrt2)$.`,
      check: { q: R`What is $\tfrac{1}{3+2\sqrt2}$?`, opts: [R`3-2\sqrt2`, R`3+2\sqrt2`, R`\tfrac{1}{5}`, R`2\sqrt2-3`], ans: 0, why: R`$(3+2\sqrt2)(3-2\sqrt2)=1$.` } }
  ],
  bridge: R`Find $R$ in terms of $r$ and compute $\tfrac{4r^2}{R^2}$.`,
  solution: [
    R`Small centres form a square of side $2r$; $R=r(1+\sqrt2)$.`,
    R`Ratio $\tfrac{4}{(1+\sqrt2)^2}=4(3-2\sqrt2)$.`,
    R`The answer is $\textbf{(C)}$.`
  ],
  shortcut: R`For $n$ circles in a ring: $R=r\left(1+\tfrac{1}{\sin(180^\circ/n)}\right)$.`,
  traps: [R`Using $R=2r$.`, R`Forgetting the factor $4$.`],
  recognize: R`Rings of tangent circles: centres form a regular polygon; the big radius is the circumradius plus $r$.`
},

'2009A22': {
  answer: 'D',
  goal: R`The twelve numbers ($1$–$6$ twice) are randomly placed on two dice, which are rolled. We want $P(\text{sum}=7)$. Think about which two tiles land on top.`,
  tools: [
    { name: 'Symmetry', fact: R`\text{the two top tiles are a uniformly random pair of distinct tiles}`, why: R`Random placement and fair rolls make every tile equally likely on top, and the second die's top is one of the other $11$.` },
    { name: 'Complementary values', fact: R`v+(7-v)=7,\ v\ne7-v`, why: R`$7$ is odd.` }
  ],
  approach: R`Whatever tile is on top of the first die (value $v$), the second die's top is a random one of the remaining $11$ tiles. Exactly $2$ of them have value $7-v$.`,
  steps: [
    { title: 'Reduce',
      explain: R`The top of die $1$ is some tile with value $v$. The top of die $2$ is equally likely to be any of the other $11$ tiles.`,
      check: { q: R`How many tiles show $7-v$ among the remaining $11$?`, opts: [R`2`, R`1`, R`0`, R`3`], ans: 0, why: R`Both copies are still there since $7-v\ne v$.` } },
    { title: 'Probability',
      explain: R`$\tfrac2{11}$.`,
      check: { q: R`What is $2$ out of $11$?`, opts: [R`\tfrac2{11}`, R`\tfrac16`, R`\tfrac1{11}`, R`\tfrac2{12}`], ans: 0, why: R`Direct.` } }
  ],
  bridge: R`Condition on the first top tile; the second is random among the other $11$.`,
  solution: [
    R`The two top tiles are a random pair of distinct tiles from the $12$.`,
    R`Given the first has value $v$, exactly $2$ of the other $11$ have value $7-v$.`,
    R`Probability $\tfrac2{11}$.`,
    R`The answer is $\textbf{(D)}\ \tfrac2{11}$.`
  ],
  shortcut: R`Ignore the dice entirely: draw two tiles from a bag of twelve.`,
  traps: [R`Answering $\tfrac16$ (as with normal dice).`, R`Thinking the two dice could show the same tile.`],
  recognize: R`Random relabelling plus random rolls: reduce to drawing tiles without replacement.`
},

'2009A23': {
  answer: 'E',
  goal: R`In convex $ABCD$, $AB=9$, $CD=12$, $AC=14$, and $[AED]=[BEC]$. We want $AE$. Equal areas force $AB\parallel CD$, giving similar triangles.`,
  tools: [
    { name: 'Adding a common piece', fact: R`[AED]=[BEC]\Rightarrow[ABD]=[ABC]`, why: R`Add $[ABE]$ to both.` },
    { name: 'Equal areas on a common base', fact: R`\text{equal heights}\Rightarrow CD\parallel AB`, why: R`$C$ and $D$ are the same distance from line $AB$.` },
    { name: 'Similar triangles', fact: R`\triangle ABE\sim\triangle CDE,\ \tfrac{AE}{EC}=\tfrac{AB}{CD}`, why: R`Parallel lines give equal angles.` }
  ],
  approach: R`Add $[ABE]$ to both equal areas to get $[ABD]=[ABC]$, so $CD\parallel AB$. Then $\triangle ABE\sim\triangle CDE$ with ratio $9:12=3:4$, splitting $AC=14$ into $6$ and $8$.`,
  steps: [
    { title: 'Parallel sides',
      explain: R`$[ABD]=[ABE]+[AED]=[ABE]+[BEC]=[ABC]$. Same base $AB$, equal areas: $C$ and $D$ are equally far from $AB$, so $CD\parallel AB$.`,
      check: { q: R`Two triangles share base $AB$ and have equal areas. What can you say about their third vertices?`, opts: [R`\text{Same distance from }AB`, R`\text{They coincide}`, R`\text{They lie on }AB`, R`\text{Nothing}`], ans: 0, why: R`Area $=\tfrac12\cdot AB\cdot$ height.` } },
    { title: 'Similar triangles',
      explain: R`$\tfrac{AE}{EC}=\tfrac{9}{12}=\tfrac34$, so $AE=\tfrac37\cdot14=6$.`,
      check: { q: R`Split $14$ in ratio $3:4$; the first part is?`, opts: [R`6`, R`8`, R`7`, R`\tfrac{42}{4}`], ans: 0, why: R`$14\cdot\tfrac37$.` } }
  ],
  bridge: R`Turn the equal areas into $AB\parallel CD$, then use similar triangles.`,
  solution: [
    R`$[ABD]=[ABC]$, so $CD\parallel AB$.`,
    R`$\triangle ABE\sim\triangle CDE$ with ratio $\tfrac34$.`,
    R`$AE=\tfrac37\cdot14=6$.`,
    R`The answer is $\textbf{(E)}\ 6$.`
  ],
  shortcut: R`Equal "side" triangles at the diagonal intersection always mean a trapezoid.`,
  traps: [R`Assuming $E$ is the midpoint of $AC$.`, R`Using the ratio $\tfrac{12}{9}$ for $AE$.`],
  recognize: R`Equal areas of opposite triangles at a diagonal intersection: the quadrilateral is a trapezoid.`
},

'2009A24': {
  answer: 'C',
  goal: R`Three random vertices of a cube determine a plane. We want the probability that plane passes through the cube's interior. It fails exactly when all three vertices lie on one face.`,
  tools: [
    { name: 'Total triples', fact: R`\binom83=56`, why: R`Choose $3$ of $8$ vertices.` },
    { name: 'Triples on a face', fact: R`6\cdot\binom43=24`, why: R`Each face has $4$ vertices; no triple lies on two faces.` }
  ],
  approach: R`If the three vertices lie on one face, the plane is that face (no interior points). Otherwise the plane cuts through the cube. Count the face triples and take the complement.`,
  steps: [
    { title: 'Face triples',
      explain: R`Each face gives $\binom43=4$ triples; $6$ faces give $24$.`,
      check: { q: R`How many triples of vertices lie on one square face?`, opts: [R`4`, R`6`, R`3`, R`1`], ans: 0, why: R`$\binom43$.` } },
    { title: 'Probability',
      explain: R`$\tfrac{56-24}{56}=\tfrac{32}{56}=\tfrac47$.`,
      check: { q: R`Simplify $\tfrac{32}{56}$.`, opts: [R`\tfrac47`, R`\tfrac37`, R`\tfrac58`, R`\tfrac12`], ans: 0, why: R`Divide by $8$.` } }
  ],
  bridge: R`Subtract face triples from all triples.`,
  solution: [
    R`$\binom83=56$ triples.`,
    R`$24$ lie on a face and give face planes.`,
    R`The other $32$ planes cut the interior: $\tfrac47$.`,
    R`The answer is $\textbf{(C)}\ \tfrac47$.`
  ],
  shortcut: R`Only face planes avoid the interior; every other plane through three vertices slices it.`,
  traps: [R`Thinking corner-cutting planes miss the interior.`, R`Counting face triples twice.`],
  recognize: R`Planes through vertices of a polyhedron: the ones that don't enter the interior are exactly the face planes.`
},

'2009A25': {
  answer: 'B',
  goal: R`$I_k=10^{k+2}+64$. We want the most factors of $2$ it can have. Compare the powers of $2$ in the two terms.`,
  tools: [
    { name: 'Power of 2 in a sum', fact: R`v_2(x+y)=\min(v_2x,v_2y)\text{ if they differ}`, why: R`Factor out the smaller power; the rest is odd + even.` },
    { name: 'Equal powers', fact: R`v_2(2^m(a+b))\text{ with }a,b\text{ odd}\ge m+1`, why: R`Odd + odd is even.` }
  ],
  approach: R`$10^{k+2}=2^{k+2}5^{k+2}$ and $64=2^6$. If $k+2\ne6$, $v_2=\min(k+2,6)\le6$. If $k+2=6$ ($k=4$), factor $2^6(5^6+1)$ and count the $2$s in $5^6+1$.`,
  steps: [
    { title: 'Unequal powers',
      explain: R`For $k\le3$: $v_2=k+2\le5$. For $k\ge5$: $v_2=6$.`,
      check: { q: R`What is $v_2(2^3\cdot5^3+2^6)$?`, opts: [R`3`, R`6`, R`9`, R`4`], ans: 0, why: R`$2^3(125+8)$, and $133$ is odd.` } },
    { title: 'Equal powers: $k=4$',
      explain: R`$I_4=2^6(5^6+1)=2^6\cdot15626=2^7\cdot7813$, with $7813$ odd. So $v_2=7$.`,
      check: { q: R`What is $5^6+1$?`, opts: [R`15626`, R`15625`, R`3126`, R`625`], ans: 0, why: R`$15625+1$.` } }
  ],
  bridge: R`Compare $k+2$ with $6$; the equal case gives an extra factor of $2$.`,
  solution: [
    R`$I_k=2^{k+2}5^{k+2}+2^6$.`,
    R`If $k+2\ne6$, $N(k)\le6$.`,
    R`$k=4$: $2^6(5^6+1)=2^7\cdot7813$, so $N=7$.`,
    R`The answer is $\textbf{(B)}\ 7$.`
  ],
  shortcut: R`$5^{\text{even}}+1\equiv2\pmod4$, so equal powers add exactly one more $2$.`,
  traps: [R`Assuming $N(k)$ grows with $k$.`, R`Missing the equal-power case.`],
  recognize: R`Powers of $2$ in sums: they equal the smaller power unless the two powers match.`
}

};
