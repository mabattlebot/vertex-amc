// Hand-written lessons: 2014 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2014B16': {
  answer: 'B',
  goal: R`Four dice are rolled; we want the probability that at least three show the same value. Split into "exactly three equal" and "all four equal".`,
  tools: [
    { name: 'Casework on exactly three vs four', fact: R`P(\ge3)=P(=3)+P(=4)`, why: R`The two cases cannot overlap.` },
    { name: 'Counting outcomes', fact: R`6\cdot\binom43\cdot5\ \text{ and }\ 6`, why: R`Choose the repeated value, which dice show it, and the odd die's value.` }
  ],
  approach: R`Count outcomes out of $6^4=1296$. Exactly three equal: choose the value ($6$), the three dice ($4$), and a different value for the last die ($5$). All four equal: $6$.`,
  steps: [
    { title: 'Exactly three',
      explain: R`$6\cdot4\cdot5=120$ outcomes.`,
      check: { q: R`How many ways to choose which $3$ of $4$ dice match?`, opts: [R`4`, R`3`, R`6`, R`24`], ans: 0, why: R`$\binom43$.` } },
    { title: 'All four and total',
      explain: R`All four equal: $6$. Total $126$, probability $\tfrac{126}{1296}=\tfrac{7}{72}$.`,
      check: { q: R`Simplify $\tfrac{126}{1296}$.`, opts: [R`\tfrac7{72}`, R`\tfrac{1}{9}`, R`\tfrac{7}{64}`, R`\tfrac{1}{12}`], ans: 0, why: R`Divide by $18$.` } }
  ],
  bridge: R`Count exactly-three and all-four outcomes and divide by $6^4$.`,
  solution: [
    R`Exactly three equal: $6\cdot\binom43\cdot5=120$.`,
    R`All four equal: $6$.`,
    R`$\tfrac{126}{1296}=\tfrac7{72}$.`,
    R`The answer is $\textbf{(B)}\ \tfrac7{72}$.`
  ],
  shortcut: R`"At least $k$ the same" is always exactly-$k$ plus higher cases.`,
  traps: [R`Forgetting the factor $5$ (the fourth die must differ).`, R`Forgetting the all-four case.`],
  recognize: R`"At least three the same" with dice: casework by exact counts.`
},

'2014B17': {
  answer: 'D',
  goal: R`We want the largest power of $2$ dividing $10^{1002}-4^{501}$. Factor out the obvious powers of $2$, then find how many $2$s are in what remains.`,
  tools: [
    { name: 'Factoring', fact: R`10^{1002}-4^{501}=2^{1002}(5^{1002}-1)`, why: R`$10^{1002}=2^{1002}5^{1002}$ and $4^{501}=2^{1002}$.` },
    { name: 'Difference of squares', fact: R`5^{1002}-1=(5^{501}-1)(5^{501}+1)`, why: R`$1002=2\cdot501$.` },
    { name: 'Odd powers of 5 mod 8', fact: R`5^{\text{odd}}\equiv5\pmod8`, why: R`$5^2=25\equiv1\pmod8$.` }
  ],
  approach: R`Pull out $2^{1002}$. Split $5^{1002}-1$ as a difference of squares and find the power of $2$ in each factor using remainders mod $8$.`,
  steps: [
    { title: 'Factor',
      explain: R`$10^{1002}-4^{501}=2^{1002}(5^{1002}-1)$.`,
      check: { q: R`What is $4^{501}$ as a power of $2$?`, opts: [R`2^{1002}`, R`2^{501}`, R`2^{2004}`, R`2^{503}`], ans: 0, why: R`$(2^2)^{501}$.` } },
    { title: 'Powers of 2 in $5^{1002}-1$',
      explain: R`$5^{501}\equiv5\pmod8$, so $5^{501}-1\equiv4$ (exactly $2^2$) and $5^{501}+1\equiv6$ (exactly $2^1$). So $5^{1002}-1$ has exactly $2^3$.`,
      check: { q: R`What is the largest power of $2$ dividing $6$?`, opts: [R`2^1`, R`2^2`, R`2^0`, R`2^3`], ans: 0, why: R`$6=2\cdot3$.` } },
    { title: 'Combine',
      explain: R`$1002+3=1005$: the answer is $2^{1005}$.`,
      check: { q: R`What is $1002+3$?`, opts: [R`1005`, R`1004`, R`1006`, R`1003`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Factor out $2^{1002}$ and count $2$s in $5^{1002}-1$ with a difference of squares.`,
  solution: [
    R`$10^{1002}-4^{501}=2^{1002}(5^{1002}-1)$.`,
    R`$5^{1002}-1=(5^{501}-1)(5^{501}+1)$ contributes $2^2\cdot2^1$.`,
    R`Total $2^{1005}$.`,
    R`The answer is $\textbf{(D)}$.`
  ],
  shortcut: R`Lifting the exponent: $v_2(5^n-1)=v_2(4)+v_2(6)+v_2(n)-1=3$ for $n=1002$.`,
  traps: [R`Stopping at $2^{1002}$.`, R`Assuming $5^{1002}-1$ has only one factor of $2$.`],
  recognize: R`Powers of a prime dividing $a^n-b^n$: factor with differences of squares and check small moduli (or use LTE).`
},

'2014B18': {
  answer: 'E',
  goal: R`Eleven positive integers have mean $10$ (sum $110$), median $9$ and unique mode $8$. We maximise the largest. Make the other ten as small as the rules allow.`,
  tools: [
    { name: 'Sum from mean', fact: R`\text{sum}=11\cdot10=110`, why: R`Mean times count.` },
    { name: 'Median position', fact: R`a_6=9`, why: R`The middle of $11$ sorted values.` },
    { name: 'Unique mode', fact: R`8\text{ appears more often than any other value}`, why: R`Definition of a unique mode.` }
  ],
  approach: R`Try different numbers of $8$s. More $8$s raise the small values but let other values repeat more. Compare the minimum possible sum of the first ten values in each case.`,
  steps: [
    { title: 'Three 8s',
      explain: R`Take $a_3=a_4=a_5=8$, $a_1=a_2=1$ (two $1$s is fine, fewer than three $8$s). Then $a_6=9$, and above the median each value may appear at most twice: $9,10,10,11$. Sum of the first ten: $1+1+8+8+8+9+9+10+10+11=75$.`,
      check: { q: R`With three $8$s as the mode, how many times may $10$ appear?`, opts: [R`\text{at most }2`, R`\text{at most }3`, R`\text{once}`, R`\text{any number}`], ans: 0, why: R`It must appear fewer times than $8$.` } },
    { title: 'Compare other cases',
      explain: R`Two $8$s: other values appear once: $1,2,3,8,8,9,10,11,12,13$ sum $77$. Four $8$s: $1,8,8,8,8,9,9,9,10,10$ sum $80$. So three $8$s gives the smallest sum, $75$.`,
      check: { q: R`What is $1+2+3+8+8+9+10+11+12+13$?`, opts: [R`77`, R`75`, R`80`, R`76`], ans: 0, why: R`Add.` } },
    { title: 'Largest value',
      explain: R`$110-75=35$.`,
      check: { q: R`What is $110-75$?`, opts: [R`35`, R`34`, R`33`, R`30`], ans: 0, why: R`Subtract.` } }
  ],
  bridge: R`Minimise the first ten values under the median and mode rules; the eleventh is $110$ minus that.`,
  solution: [
    R`The sum is $110$ and $a_6=9$.`,
    R`With three $8$s: $1,1,8,8,8,9,9,10,10,11$ (sum $75$) respects the unique mode.`,
    R`Other mode counts give larger sums ($77$, $80$).`,
    R`Largest value $35$. The answer is $\textbf{(E)}\ 35$.`
  ],
  shortcut: R`Small values may repeat as long as they repeat fewer times than the mode.`,
  traps: [R`Forcing all small values to be distinct.`, R`Forgetting that $a_6=9$ fixes the median.`],
  recognize: R`Maximise one value under mean/median/mode constraints: minimise all others, trying each possible mode frequency.`
},

'2014B19': {
  answer: 'D',
  goal: R`Two random points on the outer circle (radius $2$) form a chord. We want the probability it crosses the inner circle (radius $1$). That depends only on the angle between the points.`,
  tools: [
    { name: 'Distance from centre to a chord', fact: R`d=R\cos\tfrac\theta2`, why: R`$\theta$ is the central angle; the perpendicular bisects it.` },
    { name: 'Uniform angle', fact: R`\text{the smaller central angle is uniform on }[0^\circ,180^\circ]`, why: R`Fix the first point; the second is uniform around the circle.` }
  ],
  approach: R`The chord crosses the inner circle when its distance from the centre is less than $1$: $2\cos\tfrac\theta2<1$, i.e. $\theta>120^\circ$. Then compute the probability of that angle.`,
  steps: [
    { title: 'Condition on the angle',
      explain: R`$2\cos\tfrac\theta2<1$ means $\cos\tfrac\theta2<\tfrac12$, so $\tfrac\theta2>60^\circ$ and $\theta>120^\circ$.`,
      check: { q: R`For $\theta=120^\circ$ on a circle of radius $2$, how far is the chord from the centre?`, opts: [R`1`, R`\sqrt3`, R`2`, R`0`], ans: 0, why: R`$2\cos60^\circ$.` } },
    { title: 'Probability',
      explain: R`The smaller central angle is uniform on $[0^\circ,180^\circ]$; $P(\theta>120^\circ)=\tfrac{60}{180}=\tfrac13$.`,
      check: { q: R`What fraction of $[0,180]$ is $(120,180]$?`, opts: [R`\tfrac13`, R`\tfrac23`, R`\tfrac16`, R`\tfrac12`], ans: 0, why: R`$60/180$.` } }
  ],
  bridge: R`Turn "crosses the inner circle" into $\theta>120^\circ$ and use the uniform angle.`,
  solution: [
    R`The chord's distance from the centre is $2\cos\tfrac\theta2$.`,
    R`It meets the inner circle iff $2\cos\tfrac\theta2<1$, i.e. $\theta>120^\circ$.`,
    R`$\theta$ is uniform on $[0,180^\circ]$, so the probability is $\tfrac13$.`,
    R`The answer is $\textbf{(D)}\ \tfrac13$.`
  ],
  shortcut: R`Fix one point; the second must land in the arc more than $120^\circ$ away on either side: $120^\circ$ of $360^\circ$.`,
  traps: [R`Comparing areas of the circles.`, R`Using $\theta>90^\circ$.`],
  recognize: R`Random chords from random endpoints: reduce to the central angle, which is uniform.`
},

'2014B20': {
  answer: 'C',
  goal: R`For how many integers is $x^4-51x^2+50<0$? It is a quadratic in $x^2$ that factors.`,
  tools: [
    { name: 'Factor as a quadratic in $x^2$', fact: R`x^4-51x^2+50=(x^2-1)(x^2-50)`, why: R`$1\cdot50=50$ and $1+50=51$.` },
    { name: 'Sign of a product', fact: R`(x^2-1)(x^2-50)<0\iff1<x^2<50`, why: R`Negative exactly between the roots.` }
  ],
  approach: R`Factor, then find integers with $x^2$ strictly between $1$ and $50$.`,
  steps: [
    { title: 'Factor',
      explain: R`$(x^2-1)(x^2-50)<0$ when $1<x^2<50$.`,
      check: { q: R`Factor $y^2-51y+50$.`, opts: [R`(y-1)(y-50)`, R`(y-5)(y-10)`, R`(y+1)(y+50)`, R`(y-2)(y-25)`], ans: 0, why: R`Roots $1$ and $50$.` } },
    { title: 'Count',
      explain: R`$x^2\in\{4,9,\ldots,49\}$, so $|x|\in\{2,\ldots,7\}$: $6$ values, $12$ integers with signs.`,
      check: { q: R`How many integers satisfy $1<x^2<50$?`, opts: [R`12`, R`6`, R`14`, R`10`], ans: 0, why: R`$\pm2,\ldots,\pm7$.` } }
  ],
  bridge: R`Factor in $x^2$ and count integers between the roots.`,
  solution: [
    R`$x^4-51x^2+50=(x^2-1)(x^2-50)$.`,
    R`Negative iff $1<x^2<50$.`,
    R`$x=\pm2,\ldots,\pm7$: $12$ integers.`,
    R`The answer is $\textbf{(C)}\ 12$.`
  ],
  shortcut: R`Treat $x^4$ problems with no odd powers as quadratics in $x^2$.`,
  traps: [R`Forgetting negative $x$.`, R`Including $x=\pm1$ (gives $0$, not negative).`],
  recognize: R`Biquadratic expressions: substitute $y=x^2$ and factor.`
},

'2014B21': {
  answer: 'B',
  goal: R`Trapezoid $ABCD$ has bases $33$ and $21$ and legs $10$ and $14$, with acute angles at $A$ and $B$. We want the shorter diagonal. Find the height and the horizontal overhangs.`,
  tools: [
    { name: 'Overhangs', fact: R`x+y=33-21=12,\quad x^2+h^2=100,\ y^2+h^2=196`, why: R`Drop perpendiculars from $D$ and $C$ to $AB$.` },
    { name: 'Difference of squares', fact: R`y^2-x^2=(y-x)(y+x)=96`, why: R`Subtract the two Pythagorean equations.` }
  ],
  approach: R`The overhangs $x$ (under leg $10$) and $y$ (under leg $14$) satisfy $x+y=12$ and $y^2-x^2=96$, so $y-x=8$. Then $h$ and coordinates give both diagonals.`,
  steps: [
    { title: 'Overhangs and height',
      explain: R`$y-x=\tfrac{96}{12}=8$ with $x+y=12$: $x=2$, $y=10$. Then $h^2=100-4=96$.`,
      check: { q: R`If $x+y=12$ and $y-x=8$, what is $x$?`, opts: [R`2`, R`4`, R`10`, R`6`], ans: 0, why: R`$(12-8)/2$.` } },
    { title: 'Diagonals',
      explain: R`$A=(0,0)$, $B=(33,0)$, $D=(2,h)$, $C=(23,h)$. $AC=\sqrt{23^2+96}=\sqrt{625}=25$. $BD=\sqrt{31^2+96}=\sqrt{1057}$. The shorter is $25$.`,
      check: { q: R`What is $23^2+96$?`, opts: [R`625`, R`529`, R`721`, R`576`], ans: 0, why: R`$529+96$.` } }
  ],
  bridge: R`Find overhangs and height, then compute both diagonals.`,
  solution: [
    R`Overhangs: $x+y=12$, $y^2-x^2=96$ give $x=2$, $y=10$; $h^2=96$.`,
    R`$AC=\sqrt{23^2+96}=25$, $BD=\sqrt{31^2+96}=\sqrt{1057}$.`,
    R`The shorter diagonal is $25$.`,
    R`The answer is $\textbf{(B)}\ 25$.`
  ],
  shortcut: R`$23^2+96=625$ is a perfect square, a strong hint you are on the right diagonal.`,
  traps: [R`Putting the leg $10$ on the wrong side.`, R`Forgetting the angles at $A$, $B$ are acute (overhangs point outward).`],
  recognize: R`Trapezoids with known sides: drop perpendiculars; the two Pythagorean equations subtract to a linear one.`
},

'2014B22': {
  answer: 'B',
  goal: R`Eight semicircles (two per side, diameter $1$) line the inside of a $2\times2$ square. A circle at the centre touches all of them. We want its radius.`,
  tools: [
    { name: 'Tangent circles', fact: R`\text{distance between centres}=r_1+r_2`, why: R`Externally tangent circles touch along the line of centres.` },
    { name: 'Distance formula', fact: R`\sqrt{(\tfrac12)^2+1^2}=\tfrac{\sqrt5}2`, why: R`From the square's centre to a semicircle's centre.` }
  ],
  approach: R`Put the square at $[0,2]^2$. A semicircle on the bottom side is centred at $(\tfrac12,0)$ with radius $\tfrac12$. The central circle is centred at $(1,1)$; its radius plus $\tfrac12$ equals the distance between centres.`,
  steps: [
    { title: 'Distance between centres',
      explain: R`From $(1,1)$ to $(\tfrac12,0)$: $\sqrt{\tfrac14+1}=\tfrac{\sqrt5}2$.`,
      check: { q: R`What is $\sqrt{\tfrac14+1}$?`, opts: [R`\tfrac{\sqrt5}2`, R`\tfrac54`, R`\sqrt5`, R`\tfrac32`], ans: 0, why: R`$\sqrt{5/4}$.` } },
    { title: 'Radius',
      explain: R`$r+\tfrac12=\tfrac{\sqrt5}2$, so $r=\tfrac{\sqrt5-1}2$.`,
      check: { q: R`Solve $r+\tfrac12=\tfrac{\sqrt5}2$.`, opts: [R`\tfrac{\sqrt5-1}2`, R`\tfrac{\sqrt5+1}2`, R`\tfrac{\sqrt5}{2}`, R`\sqrt5-1`], ans: 0, why: R`Subtract $\tfrac12$.` } }
  ],
  bridge: R`Set centre distance equal to the sum of radii.`,
  solution: [
    R`Semicircle centres are at $(\tfrac12,0)$ and similar points, radius $\tfrac12$.`,
    R`Distance from $(1,1)$: $\tfrac{\sqrt5}{2}$.`,
    R`$r=\tfrac{\sqrt5}2-\tfrac12=\tfrac{\sqrt5-1}2$.`,
    R`The answer is $\textbf{(B)}$.`
  ],
  shortcut: R`All eight semicircles are equivalent by symmetry; check one.`,
  traps: [R`Using the distance to the square's side.`, R`Using radius $1$ for the semicircles.`],
  recognize: R`Circles tangent to several equal circles: distance between centres equals the sum of radii.`
},

'2014B23': {
  answer: 'E',
  goal: R`A sphere is inscribed in a frustum whose volume is twice the sphere's. We want the ratio of the base radii $\tfrac Rr$. Tangent lengths give a neat relation between the sphere radius and $R,r$.`,
  tools: [
    { name: 'Tangent lengths', fact: R`\text{slant side}=R+r`, why: R`From each base circle's edge, the two tangent segments to the sphere are equal to that base's radius.` },
    { name: 'Height of the frustum', fact: R`h^2=(R+r)^2-(R-r)^2=4Rr\Rightarrow\rho=\sqrt{Rr}`, why: R`The height equals the sphere's diameter $2\rho$.` },
    { name: 'Frustum volume', fact: R`V=\tfrac{\pi h}{3}(R^2+Rr+r^2)`, why: R`Difference of two cones.` }
  ],
  approach: R`In the cross-section, the frustum is an isosceles trapezoid around a circle. The slant side is $R+r$ (equal tangents), and the height is $2\rho$, giving $\rho^2=Rr$. Plug into the volume condition and solve for $t=\tfrac Rr$.`,
  steps: [
    { title: 'Sphere radius',
      explain: R`$h=2\rho$ and $h^2=(R+r)^2-(R-r)^2=4Rr$, so $\rho^2=Rr$.`,
      check: { q: R`What is $(R+r)^2-(R-r)^2$?`, opts: [R`4Rr`, R`2Rr`, R`R^2-r^2`, R`0`], ans: 0, why: R`Expand.` } },
    { title: 'Volume condition',
      explain: R`$\tfrac{\pi\cdot2\rho}{3}(R^2+Rr+r^2)=2\cdot\tfrac43\pi\rho^3$ gives $R^2+Rr+r^2=4\rho^2=4Rr$, so $R^2-3Rr+r^2=0$.`,
      check: { q: R`Divide $R^2-3Rr+r^2=0$ by $r^2$ with $t=R/r$.`, opts: [R`t^2-3t+1=0`, R`t^2+3t+1=0`, R`t^2-3t=0`, R`3t^2-t+1=0`], ans: 0, why: R`Direct.` } },
    { title: 'Solve',
      explain: R`$t=\tfrac{3+\sqrt5}2$ (the larger root, since $R>r$).`,
      check: { q: R`What is the larger root of $t^2-3t+1=0$?`, opts: [R`\tfrac{3+\sqrt5}2`, R`\tfrac{3-\sqrt5}2`, R`\tfrac{1+\sqrt5}2`, R`2`], ans: 0, why: R`Quadratic formula.` } }
  ],
  bridge: R`Use equal tangents to get $\rho^2=Rr$, then the volume condition gives a quadratic in $\tfrac Rr$.`,
  solution: [
    R`Equal tangent lengths make the slant $R+r$, so $(2\rho)^2=4Rr$.`,
    R`Volume: $R^2+Rr+r^2=4Rr$, so $t^2-3t+1=0$ with $t=\tfrac Rr$.`,
    R`$t=\tfrac{3+\sqrt5}2$.`,
    R`The answer is $\textbf{(E)}$.`
  ],
  shortcut: R`The relation $\rho^2=Rr$ for a sphere in a frustum is worth remembering.`,
  traps: [R`Taking the smaller root.`, R`Using a cone volume formula instead of the frustum's.`],
  recognize: R`Spheres inscribed in frustums (or circles in trapezoids): equal tangent lengths give $\rho^2=Rr$.`
},

'2014B24': {
  answer: 'B',
  goal: R`Arrange $1$–$5$ in a circle (up to rotation and reflection). It is bad if some $n$ from $1$ to $15$ is not a sum of consecutive numbers. Most $n$ are automatic; only $6$ and $7$ need checking.`,
  tools: [
    { name: 'Complements on a circle', fact: R`\text{arc sum }s\iff\text{complementary arc sum }15-s`, why: R`Removing a consecutive block from a circle leaves a consecutive block.` },
    { name: 'Counting arrangements', fact: R`\tfrac{4!}{2}=12`, why: R`Fix $1$; divide by $2$ for reflections.` }
  ],
  approach: R`$1$–$5$ come from single numbers and $15$ from everything. By complements, $8$–$14$ come from $7$–$1$. So an arrangement is bad iff $6$ or $7$ is missing. $6$ needs an adjacent pair $\{1,5\}$ or $\{2,4\}$ or the consecutive triple $\{1,2,3\}$; $7$ needs $\{2,5\}$, $\{3,4\}$ or $\{1,2,4\}$.`,
  steps: [
    { title: 'Reduce to 6 and 7',
      explain: R`If $s$ is a consecutive sum, so is $15-s$. Since $1$–$5$ are present, $10$–$14$ are too; $8,9$ follow from $7,6$. So only $6$ and $7$ matter.`,
      check: { q: R`If an arc sums to $4$, what does the rest of the circle sum to?`, opts: [R`11`, R`4`, R`15`, R`10`], ans: 0, why: R`$15-4$.` } },
    { title: 'Find the bad ones',
      explain: R`Checking the $12$ arrangements: $1,2,5,3,4$ has no consecutive block summing to $6$, and $1,3,2,4,5$ has none summing to $7$. Every other arrangement has both. So $2$ bad arrangements.`,
      check: { q: R`In the circle $1,2,5,3,4$, which adjacent pairs exist?`, opts: [R`\{1,2\},\{2,5\},\{5,3\},\{3,4\},\{4,1\}`, R`\{1,5\},\{2,4\}`, R`\{1,3\},\{2,4\}`, R`\{1,2\},\{3,5\}`], ans: 0, why: R`Neighbours around the circle; none sums to $6$.` } }
  ],
  bridge: R`Use complements to reduce to sums $6$ and $7$, then check which arrangements miss them.`,
  solution: [
    R`Consecutive sums come in pairs $s$, $15-s$, so only $6$ and $7$ need checking.`,
    R`Of the $12$ arrangements, $1,2,5,3,4$ misses $6$ and $1,3,2,4,5$ misses $7$.`,
    R`All others achieve every sum.`,
    R`There are $2$ bad arrangements. The answer is $\textbf{(B)}\ 2$.`
  ],
  shortcut: R`List the ways to make $6$ and $7$ ($\{1,5\},\{2,4\},\{1,2,3\}$ and $\{2,5\},\{3,4\},\{1,2,4\}$) and look for arrangements that avoid all of one list.`,
  traps: [R`Checking all $15$ sums for all $12$ arrangements by brute force (slow).`, R`Counting rotations/reflections separately.`],
  recognize: R`Consecutive sums on a circle: complements pair $s$ with total $-s$, halving the work.`
},

'2014B25': {
  answer: 'C',
  goal: R`A frog on pads $0$–$10$ jumps down with probability $\tfrac N{10}$ from pad $N$. Starting at pad $1$, we want the chance of reaching $10$ before $0$. Use the symmetry of the setup and a chain of linear equations.`,
  tools: [
    { name: 'First-step analysis', fact: R`P_N=\tfrac N{10}P_{N-1}+\left(1-\tfrac N{10}\right)P_{N+1}`, why: R`Condition on the next jump.` },
    { name: 'Symmetry', fact: R`P_5=\tfrac12`, why: R`Reflecting $N\to10-N$ swaps "escape" and "eaten" and keeps the jump probabilities, and pad $5$ is fixed.` }
  ],
  approach: R`Let $P_1=p$. Use the equations for $N=1,2,3,4$ to express $P_2,\ldots,P_5$ in terms of $p$. Then set $P_5=\tfrac12$.`,
  steps: [
    { title: 'Build up from $p$',
      explain: R`$N=1$: $p=0.9P_2$, so $P_2=\tfrac{10p}{9}$. $N=2$: $P_3=\tfrac{P_2-0.2p}{0.8}=\tfrac{41p}{36}$. $N=3$: $P_4=\tfrac{P_3-0.3P_2}{0.7}=\tfrac{145p}{126}$.`,
      check: { q: R`From $p=0.9P_2$, what is $P_2$?`, opts: [R`\tfrac{10p}9`, R`0.9p`, R`\tfrac{9p}{10}`, R`p`], ans: 0, why: R`Divide by $0.9$.` } },
    { title: 'Reach pad 5',
      explain: R`$N=4$: $P_5=\tfrac{P_4-0.4P_3}{0.6}=\tfrac{73p}{63}$.`,
      check: { q: R`What is $\tfrac{145}{126}-\tfrac{0.4\cdot41}{36}$ over a common denominator $630$?`, opts: [R`\tfrac{438}{630}`, R`\tfrac{725}{630}`, R`\tfrac{287}{630}`, R`\tfrac{1012}{630}`], ans: 0, why: R`$725-287$.` } },
    { title: 'Use symmetry',
      explain: R`$\tfrac{73p}{63}=\tfrac12$ gives $p=\tfrac{63}{146}$.`,
      check: { q: R`Solve $\tfrac{73p}{63}=\tfrac12$.`, opts: [R`\tfrac{63}{146}`, R`\tfrac{73}{126}`, R`\tfrac{63}{73}`, R`\tfrac12`], ans: 0, why: R`$p=\tfrac{63}{146}$.` } }
  ],
  bridge: R`Write each $P_N$ in terms of $P_1$ and use $P_5=\tfrac12$.`,
  solution: [
    R`First-step equations give $P_2=\tfrac{10}9p$, $P_3=\tfrac{41}{36}p$, $P_4=\tfrac{145}{126}p$, $P_5=\tfrac{73}{63}p$.`,
    R`By symmetry $P_5=\tfrac12$.`,
    R`So $p=\tfrac{63}{146}$.`,
    R`The answer is $\textbf{(C)}\ \tfrac{63}{146}$.`
  ],
  shortcut: R`Symmetry at the middle pad cuts the system in half.`,
  traps: [R`Assuming $\tfrac12$ by symmetry for pad $1$.`, R`Arithmetic slips in the fractions.`],
  recognize: R`Random walks with absorbing ends: first-step equations, and symmetry often pins a middle value.`
}

};
