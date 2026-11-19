// Hand-written lessons: 2002 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2002B16': {
  answer: 'D',
  goal: R`Count integers $n$ with $\tfrac{n}{20-n}=k^2$ for an integer $k$. Solve for $n$ and require it to be an integer.`,
  tools: [
    { name: 'Solve for $n$', fact: R`n=\frac{20k^2}{1+k^2}`, why: R`$n=k^2(20-n)$.` },
    { name: 'Coprime', fact: R`\gcd(k^2,1+k^2)=1\Rightarrow1+k^2\mid20`, why: R`So the denominator must divide $20$.` }
  ],
  approach: R`$1+k^2\in\{1,2,5,10,20\}$ gives $k^2\in\{0,1,4,9,19\}$; squares: $0,1,4,9$. So $n=0,10,16,18$.`,
  steps: [
    { title: 'Divisibility',
      explain: R`$1+k^2$ divides $20$.`,
      check: { q: R`Why must $1+k^2$ divide $20$ and not just $20k^2$?`, opts: [R`\gcd(1+k^2,k^2)=1`, R`k\text{ is prime}`, R`n<20`, R`k^2<20`], ans: 0, why: R`Consecutive integers are coprime.` } },
    { title: 'List',
      explain: R`$k^2=0,1,4,9$: $n=0,10,16,18$. Four values.`,
      check: { q: R`For $k^2=4$, what is $n$?`, opts: [R`16`, R`8`, R`10`, R`18`], ans: 0, why: R`$\tfrac{80}{5}$.` } }
  ],
  bridge: R`Solve for $n$, then make the denominator divide $20$.`,
  solution: [
    R`$n=\tfrac{20k^2}{1+k^2}$ with $1+k^2\mid20$.`,
    R`$k^2\in\{0,1,4,9\}$: $n=0,10,16,18$.`,
    R`$4$ values.`,
    R`The answer is $\textbf{(D)}\ 4$.`
  ],
  shortcut: R`Check: $\tfrac{18}{2}=9$, $\tfrac{16}{4}=4$, $\tfrac{10}{10}=1$, $\tfrac{0}{20}=0$.`,
  traps: [R`Forgetting $n=0$ ($0$ is a square).`, R`Including $k^2=19$.`],
  recognize: R`Rational expressions that must be squares: solve for the variable and use coprimality.`
},

'2002B17': {
  answer: 'C',
  goal: R`Regular octagon with side $2$; we want $[ADG]$. Put it in a square of side $2+2\sqrt2$ with corners cut off.`,
  tools: [
    { name: 'Coordinates', fact: R`A=(\sqrt2,0),\ D=(2+2\sqrt2,\ 2+\sqrt2),\ G=(0,\ 2+\sqrt2)`, why: R`Corner cuts have legs $\sqrt2$.` },
    { name: 'Horizontal base', fact: R`DG\text{ is horizontal}`, why: R`$D$ and $G$ have the same height.` }
  ],
  approach: R`$DG=2+2\sqrt2$; height from $A$ is $2+\sqrt2$. Area $=\tfrac12(2+2\sqrt2)(2+\sqrt2)=(1+\sqrt2)(2+\sqrt2)$.`,
  steps: [
    { title: 'Base and height',
      explain: R`$DG=2+2\sqrt2$, height $2+\sqrt2$.`,
      check: { q: R`What are the legs of a corner triangle cut from the square?`, opts: [R`\sqrt2`, R`1`, R`2`, R`2\sqrt2`], ans: 0, why: R`Hypotenuse $2$ over $\sqrt2$.` } },
    { title: 'Area',
      explain: R`$(1+\sqrt2)(2+\sqrt2)=2+\sqrt2+2\sqrt2+2=4+3\sqrt2$.`,
      check: { q: R`What is $(1+\sqrt2)(2+\sqrt2)$?`, opts: [R`4+3\sqrt2`, R`2+3\sqrt2`, R`4+2\sqrt2`, R`3+4\sqrt2`], ans: 0, why: R`Expand.` } }
  ],
  bridge: R`Coordinates make $DG$ horizontal.`,
  solution: [
    R`$DG=2+2\sqrt2$ (horizontal), height from $A$: $2+\sqrt2$.`,
    R`Area $=(1+\sqrt2)(2+\sqrt2)=4+3\sqrt2$.`,
    R`The answer is $\textbf{(C)}\ 4+3\sqrt2$.`
  ],
  shortcut: R`Regular octagon problems: the bounding square has side $s(1+\sqrt2)$.`,
  traps: [R`Mislabelling vertex order.`, R`Using height $2+2\sqrt2$.`],
  recognize: R`Triangles in regular octagons: inscribe in a square and use coordinates.`
},

'2002B18': {
  answer: 'D',
  goal: R`Four distinct circles; we want the maximum number of points lying on at least two of them. Each pair of circles meets in at most $2$ points.`,
  tools: [
    { name: 'Pairs', fact: R`\binom42=6`, why: R`Pairs of circles.` },
    { name: 'Achievability', fact: R`\text{general position gives }2\text{ points per pair, all distinct}`, why: R`Slightly shifted overlapping circles.` }
  ],
  approach: R`At most $6\cdot2=12$, and generic overlapping circles achieve it.`,
  steps: [
    { title: 'Bound',
      explain: R`$\binom42\cdot2=12$.`,
      check: { q: R`At most how many points do two distinct circles share?`, opts: [R`2`, R`1`, R`4`, R`\infty`], ans: 0, why: R`Distinct circles meet in $\le2$ points.` } },
    { title: 'Achieve',
      explain: R`Four equal circles with centres near each other in general position: every pair crosses twice at distinct points.`,
      check: { q: R`What is $\binom42$?`, opts: [R`6`, R`4`, R`8`, R`12`], ans: 0, why: R`$\tfrac{4\cdot3}{2}$.` } }
  ],
  bridge: R`Pairs times $2$, then show it's achievable.`,
  solution: [
    R`Each of the $6$ pairs gives at most $2$ points.`,
    R`$12$ is achievable.`,
    R`The answer is $\textbf{(D)}\ 12$.`
  ],
  shortcut: R`For lines it would be $\binom n2$; circles double it.`,
  traps: [R`$4\cdot4=16$.`, R`Counting only adjacent pairs.`],
  recognize: R`Maximum intersections: count pairs × max per pair, then check general position.`
},

'2002B19': {
  answer: 'C',
  goal: R`An arithmetic sequence has $a_1+\cdots+a_{100}=100$ and $a_{101}+\cdots+a_{200}=200$. We want $d=a_2-a_1$. Each term in the second block is $100d$ more than its partner in the first.`,
  tools: [
    { name: 'Block shift', fact: R`a_{k+100}=a_k+100d`, why: R`Arithmetic sequence.` }
  ],
  approach: R`Difference of sums $=100\cdot100d=10000d=100$, so $d=0.01$.`,
  steps: [
    { title: 'Compare blocks',
      explain: R`$\sum(a_k+100d)-\sum a_k=100\cdot100d$.`,
      check: { q: R`What is $a_{k+100}-a_k$?`, opts: [R`100d`, R`d`, R`99d`, R`101d`], ans: 0, why: R`$100$ steps.` } },
    { title: 'Solve',
      explain: R`$10000d=100\Rightarrow d=0.01$.`,
      check: { q: R`If $10000d=100$, what is $d$?`, opts: [R`0.01`, R`0.1`, R`0.001`, R`1`], ans: 0, why: R`$\tfrac{100}{10000}$.` } }
  ],
  bridge: R`Pair each term with the one $100$ later.`,
  solution: [
    R`$200-100=100\cdot100d$.`,
    R`$d=0.01$.`,
    R`The answer is $\textbf{(C)}\ 0.01$.`
  ],
  shortcut: R`Block averages are $1$ and $2$, centred $100$ terms apart: $d=\tfrac{1}{100}$.`,
  traps: [R`Using $100d$ for the whole difference.`, R`Solving for $a_1$ unnecessarily.`],
  recognize: R`Sums of blocks in an AP: shift by a fixed number of terms.`
},

'2002B20': {
  answer: 'B',
  goal: R`$a-7b+8c=4$ and $8a+4b-c=7$. We want $a^2-b^2+c^2$. Move the $b$ terms across and square: the $ac$ cross terms cancel.`,
  tools: [
    { name: 'Rearrange', fact: R`a+8c=4+7b,\quad8a-c=7-4b`, why: R`Isolate the $b$ terms.` },
    { name: 'Sum of squares', fact: R`(a+8c)^2+(8a-c)^2=65(a^2+c^2)`, why: R`Cross terms $16ac-16ac$ cancel.` }
  ],
  approach: R`$65(a^2+c^2)=(4+7b)^2+(7-4b)^2=65+65b^2$. So $a^2+c^2-b^2=1$.`,
  steps: [
    { title: 'Left side',
      explain: R`$(a+8c)^2+(8a-c)^2=65a^2+65c^2$.`,
      check: { q: R`In $(a+8c)^2+(8a-c)^2$, what happens to the $ac$ terms?`, opts: [R`\text{They cancel}`, R`\text{They double}`, R`\text{They become }32ac`, R`\text{They become }-16ac`], ans: 0, why: R`$+16ac$ and $-16ac$.` } },
    { title: 'Right side',
      explain: R`$(4+7b)^2+(7-4b)^2=65+65b^2$ (the $b$ terms $56b-56b$ cancel). Divide by $65$.`,
      check: { q: R`What is $16+49$?`, opts: [R`65`, R`56`, R`63`, R`75`], ans: 0, why: R`$4^2+7^2$.` } }
  ],
  bridge: R`Isolate $b$, square, add.`,
  solution: [
    R`$a+8c=4+7b$, $8a-c=7-4b$.`,
    R`Square and add: $65(a^2+c^2)=65(1+b^2)$.`,
    R`$a^2-b^2+c^2=1$.`,
    R`The answer is $\textbf{(B)}\ 1$.`
  ],
  shortcut: R`Try $b=0$: $a+8c=4$, $8a-c=7$ gives $a=\tfrac{12}{13}$, $c=\tfrac{5}{13}$; $a^2+c^2=1$. ✓`,
  traps: [R`Trying to solve for all three variables.`, R`Squaring the original equations without rearranging.`],
  recognize: R`Two linear equations, a quadratic target: rearrange so that squaring cancels cross terms.`
},

'2002B21': {
  answer: 'B',
  goal: R`Andy's lawn is $2\times$ Beth's and $3\times$ Carlos's; Carlos's mower is $\tfrac12$ Beth's speed and $\tfrac13$ Andy's. Who finishes first? Compare time $=\tfrac{\text{area}}{\text{rate}}$.`,
  tools: [
    { name: 'Convenient units', fact: R`\text{areas }6,3,2;\ \text{rates }3,2,1`, why: R`Andy, Beth, Carlos.` }
  ],
  approach: R`Times: Andy $\tfrac63=2$, Beth $\tfrac32=1.5$, Carlos $\tfrac21=2$. Beth wins.`,
  steps: [
    { title: 'Set values',
      explain: R`Areas $A=6$, $B=3$, $C=2$; rates $C=1$, $B=2$, $A=3$.`,
      check: { q: R`If Carlos's mower rate is $1$, what is Beth's?`, opts: [R`2`, R`\tfrac12`, R`3`, R`1`], ans: 0, why: R`Carlos is half as fast as Beth.` } },
    { title: 'Times',
      explain: R`$2$, $1.5$, $2$: Beth first.`,
      check: { q: R`What is Beth's time, $3\div2$?`, opts: [R`1.5`, R`2`, R`6`, R`0.67`], ans: 0, why: R`Divide.` } }
  ],
  bridge: R`Pick numbers and compute area/rate.`,
  solution: [
    R`Areas $6,3,2$; rates $3,2,1$.`,
    R`Times $2,1.5,2$.`,
    R`The answer is $\textbf{(B)}$ Beth.`
  ],
  shortcut: R`Use the LCM of the given ratios to choose clean numbers.`,
  traps: [R`Comparing rates or areas alone.`, R`Reversing "half as fast".`],
  recognize: R`Work problems with ratios: choose convenient numbers.`
},

'2002B22': {
  answer: 'B',
  goal: R`Right angle at $O$; $M,N$ midpoints of $OX,OY$; $XN=19$, $YM=22$. We want $XY$. Let $OX=2a$, $OY=2b$.`,
  tools: [
    { name: 'Two medians', fact: R`XN^2=4a^2+b^2,\quad YM^2=a^2+4b^2`, why: R`Pythagoras.` },
    { name: 'Add', fact: R`5(a^2+b^2)=361+484`, why: R`Symmetric sum.` }
  ],
  approach: R`$a^2+b^2=169$, so $XY^2=4(a^2+b^2)=676$ and $XY=26$.`,
  steps: [
    { title: 'Add equations',
      explain: R`$5(a^2+b^2)=845$, so $a^2+b^2=169$.`,
      check: { q: R`What is $361+484$?`, opts: [R`845`, R`835`, R`855`, R`745`], ans: 0, why: R`Add.` } },
    { title: 'Hypotenuse',
      explain: R`$XY^2=(2a)^2+(2b)^2=4\cdot169=676$, $XY=26$.`,
      check: { q: R`What is $\sqrt{676}$?`, opts: [R`26`, R`24`, R`28`, R`13`], ans: 0, why: R`$26^2=676$.` } }
  ],
  bridge: R`Add the two Pythagorean equations.`,
  solution: [
    R`$4a^2+b^2=361$, $a^2+4b^2=484$.`,
    R`$a^2+b^2=169$.`,
    R`$XY=2\sqrt{169}=26$.`,
    R`The answer is $\textbf{(B)}\ 26$.`
  ],
  shortcut: R`No need to find $a$ and $b$ individually.`,
  traps: [R`Taking $XY=\sqrt{a^2+b^2}=13$.`, R`Solving the system the long way.`],
  recognize: R`Symmetric pairs of equations: add them to get the symmetric combination you need.`
},

'2002B23': {
  answer: 'D',
  goal: R`$a_1=1$ and $a_{m+n}=a_m+a_n+mn$. We want $a_{12}$. Use $n=1$ to get a step-by-step rule.`,
  tools: [
    { name: 'Step rule', fact: R`a_{m+1}=a_m+1+m`, why: R`Put $n=1$.` },
    { name: 'Triangular numbers', fact: R`a_m=1+2+\cdots+m`, why: R`Adding $m+1$ each time.` }
  ],
  approach: R`$a_m=\tfrac{m(m+1)}{2}$, so $a_{12}=78$.`,
  steps: [
    { title: 'Recurrence',
      explain: R`$a_2=1+1+1=3$, $a_3=3+1+2=6$, $a_4=10$: triangular numbers.`,
      check: { q: R`What is $a_3$?`, opts: [R`6`, R`5`, R`4`, R`7`], ans: 0, why: R`$a_2+a_1+2\cdot1=3+1+2$.` } },
    { title: 'Evaluate',
      explain: R`$a_{12}=\tfrac{12\cdot13}{2}=78$.`,
      check: { q: R`What is $\tfrac{12\cdot13}{2}$?`, opts: [R`78`, R`66`, R`91`, R`72`], ans: 0, why: R`$6\cdot13$.` } }
  ],
  bridge: R`$n=1$ gives triangular numbers.`,
  solution: [
    R`$a_{m+1}=a_m+(m+1)$.`,
    R`$a_m=\tfrac{m(m+1)}{2}$.`,
    R`$a_{12}=78$.`,
    R`The answer is $\textbf{(D)}\ 78$.`
  ],
  shortcut: R`Check: $a_{6+6}=21+21+36=78$. ✓`,
  traps: [R`Using $a_{12}=12a_1$.`, R`Arithmetic slips adding many terms.`],
  recognize: R`Functional equations on integers: set one variable to $1$.`
},

'2002B24': {
  answer: 'D',
  goal: R`A Ferris wheel of radius $20$ makes one revolution per minute. We want the time from the bottom to $10$ ft above the bottom. Find the angle turned.`,
  tools: [
    { name: 'Height after turning $\theta$', fact: R`h=20-20\cos\theta`, why: R`Measured from the bottom.` },
    { name: 'Uniform rotation', fact: R`360^\circ\text{ per }60\text{ s}`, why: R`$6^\circ$ per second.` }
  ],
  approach: R`$20-20\cos\theta=10\Rightarrow\cos\theta=\tfrac12\Rightarrow\theta=60^\circ$, which is $\tfrac16$ of a turn: $10$ s.`,
  steps: [
    { title: 'Angle',
      explain: R`$\cos\theta=\tfrac12$, so $\theta=60^\circ$.`,
      check: { q: R`If $20\cos\theta=10$, what is $\theta$?`, opts: [R`60^\circ`, R`30^\circ`, R`45^\circ`, R`90^\circ`], ans: 0, why: R`$\cos60^\circ=\tfrac12$.` } },
    { title: 'Time',
      explain: R`$\tfrac{60}{360}\cdot60=10$ s.`,
      check: { q: R`How many seconds for $60^\circ$ at one revolution per minute?`, opts: [R`10`, R`6`, R`15`, R`5`], ans: 0, why: R`$\tfrac16$ of $60$.` } }
  ],
  bridge: R`Convert height to angle, angle to time.`,
  solution: [
    R`$h=20(1-\cos\theta)=10$ gives $\theta=60^\circ$.`,
    R`Time $=\tfrac{60^\circ}{360^\circ}\cdot60=10$ s.`,
    R`The answer is $\textbf{(D)}\ 10$.`
  ],
  shortcut: R`Height is not proportional to time — use the angle.`,
  traps: [R`Assuming $10$ ft is $\tfrac14$ of the height, so $\tfrac14$ of half a turn ($7.5$ s).`, R`Measuring the angle from the horizontal.`],
  recognize: R`Circular motion and heights: convert to an angle with cosine.`
},

'2002B25': {
  answer: 'A',
  goal: R`Appending $15$ raises the mean by $2$; then appending $1$ lowers the new mean by $1$. We want the original count $n$. Let the original mean be $m$.`,
  tools: [
    { name: 'Mean equations', fact: R`nm+15=(n+1)(m+2)`, why: R`Total of the enlarged list.` },
    { name: 'Second append', fact: R`nm+16=(n+2)(m+1)`, why: R`New mean is $m+2-1$.` }
  ],
  approach: R`First: $15=m+2n+2$, so $m=13-2n$. Second: $16=2m+n+2$, so $n+2m=14$. Substitute.`,
  steps: [
    { title: 'Simplify',
      explain: R`$nm+15=nm+2n+m+2\Rightarrow m+2n=13$. $nm+16=nm+n+2m+2\Rightarrow n+2m=14$.`,
      check: { q: R`From $nm+15=(n+1)(m+2)$, what follows?`, opts: [R`m+2n=13`, R`2m+n=13`, R`m+n=15`, R`m=15`], ans: 0, why: R`Expand and cancel $nm$.` } },
    { title: 'Solve',
      explain: R`$n+2(13-2n)=14\Rightarrow-3n=-12\Rightarrow n=4$.`,
      check: { q: R`With $n=4$, what is $m$?`, opts: [R`5`, R`4`, R`6`, R`9`], ans: 0, why: R`$13-8$.` } }
  ],
  bridge: R`Two total-sum equations, two unknowns.`,
  solution: [
    R`$m+2n=13$ and $n+2m=14$.`,
    R`$n=4$, $m=5$.`,
    R`The answer is $\textbf{(A)}\ 4$.`
  ],
  shortcut: R`Check: $4$ numbers averaging $5$ (sum $20$); $+15$ gives mean $7$; $+1$ gives mean $6$. ✓`,
  traps: [R`Applying the $-1$ to the original mean.`, R`Forgetting the list grows each time.`],
  recognize: R`Means changing as items are added: write equations for the totals.`
}

};
