// Hand-written lessons: 2005 AMC 10B, Difficulty 4 and 5.
const R = String.raw;
module.exports = {

'2005B16': {
  answer: 'D',
  goal: R`$x^2+mx+n=0$ has roots twice those of $x^2+px+m=0$. We want $\tfrac np$. Use Vieta on both.`,
  tools: [
    { name: "Vieta's formulas", fact: R`x^2+Bx+C:\ \text{sum}=-B,\ \text{product}=C`, why: R`Monic quadratics.` },
    { name: 'Doubling roots', fact: R`\text{sum}\times2,\ \text{product}\times4`, why: R`$2r+2s=2(r+s)$, $(2r)(2s)=4rs$.` }
  ],
  approach: R`Let the small roots be $r,s$: $r+s=-p$, $rs=m$. Then $-m=2(r+s)=-2p$ and $n=4rs=4m$. So $m=2p$, $n=8p$.`,
  steps: [
    { title: 'Sums',
      explain: R`$-m=-2p$, so $m=2p$.`,
      check: { q: R`If the roots double, how does their sum change?`, opts: [R`\text{It doubles}`, R`\text{It quadruples}`, R`\text{It is unchanged}`, R`\text{It halves}`], ans: 0, why: R`$2r+2s$.` } },
    { title: 'Products',
      explain: R`$n=4rs=4m=8p$, so $\tfrac np=8$.`,
      check: { q: R`If the roots double, how does their product change?`, opts: [R`\times4`, R`\times2`, R`\times8`, R`\text{Unchanged}`], ans: 0, why: R`$(2r)(2s)=4rs$.` } }
  ],
  bridge: R`Vieta for both, then substitute.`,
  solution: [
    R`$r+s=-p$, $rs=m$.`,
    R`$2(r+s)=-m\Rightarrow m=2p$; $4rs=n\Rightarrow n=4m=8p$.`,
    R`$\tfrac np=8$.`,
    R`The answer is $\textbf{(D)}\ 8$.`
  ],
  shortcut: R`Check with $p=1$: $x^2+x+2$ and $x^2+2x+8$; the second's roots are double the first's.`,
  traps: [R`Doubling the product instead of quadrupling.`, R`Mixing up which equation contains $m$.`],
  recognize: R`Roots scaled by $k$: sum scales by $k$, product by $k^2$.`
},

'2005B17': {
  answer: 'B',
  goal: R`$4^a=5$, $5^b=6$, $6^c=7$, $7^d=8$. We want $abcd$. Chain the exponents.`,
  tools: [
    { name: 'Chaining powers', fact: R`4^{abcd}=((4^a)^b)^{cd}=\cdots=8`, why: R`Substitute each equation into the next.` }
  ],
  approach: R`$4^{ab}=5^b=6$, $4^{abc}=7$, $4^{abcd}=8$. So $2^{2abcd}=2^3$ and $abcd=\tfrac32$.`,
  steps: [
    { title: 'Chain',
      explain: R`$4^{abcd}=(5)^{bcd}=(6)^{cd}=(7)^d=8$.`,
      check: { q: R`If $4^a=5$, what is $4^{ab}$?`, opts: [R`5^b`, R`4^b`, R`5\cdot b`, R`20^b`], ans: 0, why: R`$(4^a)^b$.` } },
    { title: 'Solve',
      explain: R`$4^{abcd}=8$: $2^{2abcd}=2^3$, so $abcd=\tfrac32$.`,
      check: { q: R`If $4^x=8$, what is $x$?`, opts: [R`\tfrac32`, R`2`, R`\tfrac23`, R`3`], ans: 0, why: R`$2^{2x}=2^3$.` } }
  ],
  bridge: R`Substitute each equation into the next to get $4^{abcd}=8$.`,
  solution: [
    R`$4^{abcd}=8$.`,
    R`$abcd=\log_48=\tfrac32$.`,
    R`The answer is $\textbf{(B)}\ \tfrac32$.`
  ],
  shortcut: R`Change of base: $\log_45\cdot\log_56\cdot\log_67\cdot\log_78=\log_48$.`,
  traps: [R`Adding exponents instead of multiplying.`, R`Answering $\log_84$.`],
  recognize: R`Chains of exponential equations: substitute to telescope.`
},

'2005B18': {
  answer: 'D',
  goal: R`Phone numbers $555$-$abc$-$defg$ with $a<b<\cdots<g$, distinct digits from $2$–$9$. Count them. Increasing order means choosing a set is enough.`,
  tools: [
    { name: 'Increasing sequences', fact: R`\text{a set of digits gives exactly one increasing arrangement}`, why: R`Sorting is unique.` },
    { name: 'Combinations', fact: R`\binom87`, why: R`$7$ digits from the $8$ digits $2$–$9$.` }
  ],
  approach: R`$\binom87=8$: choose which one of $2$–$9$ to leave out.`,
  steps: [
    { title: 'Available digits',
      explain: R`$2,3,\ldots,9$: $8$ digits.`,
      check: { q: R`How many digits are in $\{2,\ldots,9\}$?`, opts: [R`8`, R`7`, R`9`, R`10`], ans: 0, why: R`$9-2+1$.` } },
    { title: 'Choose',
      explain: R`Pick $7$ (equivalently, leave out $1$): $8$ ways.`,
      check: { q: R`What is $\binom87$?`, opts: [R`8`, R`7`, R`56`, R`1`], ans: 0, why: R`$\binom81$.` } }
  ],
  bridge: R`Increasing order turns this into choosing a subset.`,
  solution: [
    R`Choose $7$ of the $8$ digits $2$–$9$.`,
    R`Each choice gives one increasing order.`,
    R`$8$ numbers.`,
    R`The answer is $\textbf{(D)}\ 8$.`
  ],
  shortcut: R`"Increasing" always means "choose a set".`,
  traps: [R`Multiplying by $7!$.`, R`Including $0$ or $1$.`],
  recognize: R`Strictly increasing digit strings: combinations, not permutations.`
},

'2005B19': {
  answer: 'B',
  goal: R`Score distribution: $10\%$ got $70$, $25\%$ got $80$, $20\%$ got $85$, $15\%$ got $90$, $30\%$ got $95$. We want $|\text{mean}-\text{median}|$.`,
  tools: [
    { name: 'Median from percents', fact: R`\text{the score at the }50\%\text{ mark}`, why: R`Cumulative percents.` },
    { name: 'Mean as weighted average', fact: R`\sum(\text{share})(\text{score})`, why: R`Percents are weights.` }
  ],
  approach: R`Cumulative: $10,35,55,\ldots$ — the $50\%$ mark lies in the $85$ group, so the median is $85$. Mean $=7+20+17+13.5+28.5=86$.`,
  steps: [
    { title: 'Median',
      explain: R`$10\%+25\%=35\%<50\%\le55\%$: median $85$.`,
      check: { q: R`What percent scored $95$?`, opts: [R`30\%`, R`25\%`, R`20\%`, R`35\%`], ans: 0, why: R`$100-10-25-20-15$.` } },
    { title: 'Mean',
      explain: R`$0.1(70)+0.25(80)+0.2(85)+0.15(90)+0.3(95)=86$. Difference $1$.`,
      check: { q: R`What is $0.3\cdot95$?`, opts: [R`28.5`, R`27.5`, R`29.5`, R`28`], ans: 0, why: R`$95\cdot3/10$.` } }
  ],
  bridge: R`Cumulative percents for the median; weights for the mean.`,
  solution: [
    R`Median $85$.`,
    R`Mean $86$.`,
    R`Difference $1$.`,
    R`The answer is $\textbf{(B)}\ 1$.`
  ],
  shortcut: R`Use $20$ students: $2,5,4,3,6$ of each score — the 10th and 11th are both $85$.`,
  traps: [R`Forgetting the $30\%$ remainder group.`, R`Taking the median as the middle listed score ($85$ coincidentally, but for the wrong reason).`],
  recognize: R`Median from a frequency table: find where the cumulative share crosses $50\%$.`
},

'2005B20': {
  answer: 'C',
  goal: R`Average all $5!=120$ numbers made from $1,3,5,7,8$. By symmetry each digit appears equally often in each place.`,
  tools: [
    { name: 'Positional symmetry', fact: R`\text{each digit is in each place }24\text{ times}`, why: R`$120/5$.` },
    { name: 'Average digit', fact: R`\tfrac{1+3+5+7+8}{5}=4.8`, why: R`Average value in every position.` }
  ],
  approach: R`Average number $=4.8\cdot(10000+1000+100+10+1)=4.8\cdot11111$.`,
  steps: [
    { title: 'Average digit',
      explain: R`$\tfrac{24}5=4.8$.`,
      check: { q: R`What is $1+3+5+7+8$?`, opts: [R`24`, R`23`, R`25`, R`20`], ans: 0, why: R`Add.` } },
    { title: 'Average number',
      explain: R`$4.8\cdot11111=53332.8$.`,
      check: { q: R`What is $4.8\cdot11111$?`, opts: [R`53332.8`, R`53333.3`, R`48888.4`, R`55555`], ans: 0, why: R`$44444+8888.8$.` } }
  ],
  bridge: R`Every place has average digit $4.8$.`,
  solution: [
    R`Each place averages $4.8$.`,
    R`Mean $=4.8\cdot11111=53332.8$.`,
    R`The answer is $\textbf{(C)}\ 53332.8$.`
  ],
  shortcut: R`Average of all permutations = (average digit) × $111\ldots1$.`,
  traps: [R`Averaging only the largest and smallest numbers.`, R`Using $5$ as the average digit.`],
  recognize: R`Sums or averages over all digit permutations: positional symmetry.`
},

'2005B21': {
  answer: 'A',
  goal: R`$40$ slips, numbers $1$–$10$ four times each; draw $4$. $p=P(\text{all same})$, $q=P(\text{two pairs})$. We want $\tfrac qp$; the common denominator $\binom{40}4$ cancels.`,
  tools: [
    { name: 'Favourable counts', fact: R`p\propto10\binom44,\quad q\propto\binom{10}2\binom42^2`, why: R`Choose the numbers, then the slips.` }
  ],
  approach: R`$p$-count $=10$. $q$-count $=45\cdot6\cdot6=1620$. Ratio $162$.`,
  steps: [
    { title: 'Counts',
      explain: R`All four the same: $10$ ways. Two pairs: $\binom{10}2=45$ number choices, $\binom42=6$ slip choices for each.`,
      check: { q: R`What is $\binom42$?`, opts: [R`6`, R`4`, R`12`, R`8`], ans: 0, why: R`$\tfrac{4\cdot3}{2}$.` } },
    { title: 'Ratio',
      explain: R`$\tfrac{45\cdot36}{10}=162$.`,
      check: { q: R`What is $\tfrac{1620}{10}$?`, opts: [R`162`, R`180`, R`324`, R`16.2`], ans: 0, why: R`Divide.` } }
  ],
  bridge: R`Compare favourable counts; the total cancels.`,
  solution: [
    R`$p\propto10$, $q\propto45\cdot36=1620$.`,
    R`$\tfrac qp=162$.`,
    R`The answer is $\textbf{(A)}\ 162$.`
  ],
  shortcut: R`Ordering $a,b$ would double-count: $90\cdot36/10=324$ is the trap.`,
  traps: [R`Using $10\cdot9$ for the pair of numbers (ordered).`, R`Forgetting to square $\binom42$.`],
  recognize: R`Ratio of probabilities with the same sample space: ratio of counts.`
},

'2005B22': {
  answer: 'C',
  goal: R`For $n\le24$, when does $\tfrac{n(n+1)}2$ divide $n!$? Simplify to whether $n+1$ divides $2(n-1)!$.`,
  tools: [
    { name: 'Simplify', fact: R`\frac{n!}{n(n+1)/2}=\frac{2\,(n-1)!}{n+1}`, why: R`Cancel $n$.` },
    { name: 'Primes block divisibility', fact: R`n+1\text{ odd prime}\Rightarrow n+1\nmid2(n-1)!`, why: R`All factors of $(n-1)!$ are smaller than $n+1$.` }
  ],
  approach: R`It fails exactly when $n+1$ is an odd prime: $3,5,7,11,13,17,19,23$ — $8$ values. Composite $n+1$ (and $n+1=2$) work. Answer $24-8=16$.`,
  steps: [
    { title: 'Failure condition',
      explain: R`If $n+1=p$ is an odd prime, $p$ divides neither $2$ nor $(n-1)!$. If $n+1$ is composite, its factors appear in $2(n-1)!$.`,
      check: { q: R`Does $n=3$ ($n+1=4$) work?`, opts: [R`\text{Yes}`, R`\text{No}`, R`\text{Only if }n\text{ even}`, R`\text{Undefined}`], ans: 0, why: R`$3!=6$ and $1+2+3=6$.` } },
    { title: 'Count',
      explain: R`Odd primes from $3$ to $25$: $3,5,7,11,13,17,19,23$: $8$. So $24-8=16$.`,
      check: { q: R`How many odd primes are at most $25$?`, opts: [R`8`, R`9`, R`7`, R`10`], ans: 0, why: R`$3,5,7,11,13,17,19,23$.` } }
  ],
  bridge: R`Reduce to whether $n+1$ is an odd prime.`,
  solution: [
    R`$\tfrac{n!}{n(n+1)/2}=\tfrac{2(n-1)!}{n+1}$.`,
    R`Fails iff $n+1$ is an odd prime: $8$ values.`,
    R`$24-8=16$.`,
    R`The answer is $\textbf{(C)}\ 16$.`
  ],
  shortcut: R`Composite $n+1\ge4$ always divides $2(n-1)!$ (check $n+1=4$ separately: $2\cdot2!=4$).`,
  traps: [R`Treating $n+1=2$ as failing.`, R`Counting primes up to $24$ instead of $25$.`],
  recognize: R`Factorials divisible by an expression: primes larger than every factor block it.`
},

'2005B23': {
  answer: 'C',
  goal: R`Trapezoid $AB\parallel DC$; $EF$ joins the midpoints of the legs. $[ABEF]=2[FECD]$. We want $\tfrac{AB}{DC}$. The midline cuts the height in half and has length $\tfrac{AB+DC}2$.`,
  tools: [
    { name: 'Midline', fact: R`EF=\tfrac{AB+DC}{2}`, why: R`The segment joining leg midpoints is the average of the bases.` },
    { name: 'Equal heights', fact: R`\text{areas}\propto\text{sum of parallel sides}`, why: R`Both pieces have height $\tfrac h2$.` }
  ],
  approach: R`$AB+EF=2(EF+DC)$. Substitute $EF=\tfrac{AB+DC}2$: $AB=EF+2DC=\tfrac{AB+DC}2+2DC$, so $AB=5DC$.`,
  steps: [
    { title: 'Equation',
      explain: R`Equal heights: $AB+EF=2(EF+DC)$, i.e. $AB=EF+2DC$.`,
      check: { q: R`What is the length of the midline of a trapezoid with bases $a,b$?`, opts: [R`\tfrac{a+b}2`, R`\sqrt{ab}`, R`a+b`, R`\tfrac{2ab}{a+b}`], ans: 0, why: R`Average of the bases.` } },
    { title: 'Solve',
      explain: R`$AB=\tfrac{AB+DC}2+2DC\Rightarrow\tfrac{AB}{2}=\tfrac{5DC}{2}$, so $\tfrac{AB}{DC}=5$.`,
      check: { q: R`If $\tfrac{AB}{2}=\tfrac{5DC}{2}$, what is $\tfrac{AB}{DC}$?`, opts: [R`5`, R`\tfrac52`, R`3`, R`10`], ans: 0, why: R`Multiply by $2$.` } }
  ],
  bridge: R`Use the midline length and equal heights.`,
  solution: [
    R`$EF=\tfrac{AB+DC}{2}$; both pieces have height $\tfrac h2$.`,
    R`$AB+EF=2(EF+DC)$.`,
    R`$AB=5DC$.`,
    R`The answer is $\textbf{(C)}\ 5$.`
  ],
  shortcut: R`Test $DC=1$, $AB=5$: $EF=3$; sums $8$ and $4$. ✓`,
  traps: [R`Treating the pieces' areas as proportional to $AB$ and $DC$ alone.`, R`Using $\sqrt{AB\cdot DC}$ for the midline.`],
  recognize: R`Trapezoid cut by its midline: both halves have the same height.`
},

'2005B24': {
  answer: 'E',
  goal: R`$x=\overline{ab}$, $y=\overline{ba}$ with $x^2-y^2=m^2$. We want $x+y+m$. Factor the difference of squares.`,
  tools: [
    { name: 'Factoring', fact: R`x-y=9(a-b),\ x+y=11(a+b)`, why: R`Place value.` },
    { name: 'Square condition', fact: R`99(a-b)(a+b)=m^2\Rightarrow11\mid a+b`, why: R`$11$ must appear an even number of times.` }
  ],
  approach: R`$a+b=11$, so $m^2=9\cdot121(a-b)$, needing $a-b$ a square. $a-b$ is odd (since $a+b$ is odd) and less than $9$: $a-b=1$. So $x=65$, $y=56$, $m=33$.`,
  steps: [
    { title: 'Force $a+b=11$',
      explain: R`$a+b\le18$, so $11\mid a+b$ means $a+b=11$. Then $m^2=9\cdot121\cdot(a-b)$.`,
      check: { q: R`What is $x+y$ for $x=\overline{ab}$, $y=\overline{ba}$?`, opts: [R`11(a+b)`, R`10(a+b)`, R`9(a+b)`, R`11(a-b)`], ans: 0, why: R`$11a+11b$.` } },
    { title: 'Finish',
      explain: R`$a-b=1$: $a=6$, $b=5$. $m=3\cdot11=33$. $65+56+33=154$.`,
      check: { q: R`Check: $65^2-56^2=?$`, opts: [R`1089`, R`999`, R`1210`, R`1001`], ans: 0, why: R`$9\cdot121=1089=33^2$.` } }
  ],
  bridge: R`$11\mid a+b$, then make $a-b$ a perfect square.`,
  solution: [
    R`$x^2-y^2=99(a-b)(a+b)$.`,
    R`$a+b=11$, $a-b=1$: $x=65$, $y=56$, $m=33$.`,
    R`$x+y+m=154$.`,
    R`The answer is $\textbf{(E)}\ 154$.`
  ],
  shortcut: R`$a-b=9$ would need $a=10$; only $1$ is possible.`,
  traps: [R`Allowing $a-b=4$ (wrong parity).`, R`Forgetting $m$ in the sum.`],
  recognize: R`Reversed digits: $x\pm y$ factor as $9(a-b)$ and $11(a+b)$.`
},

'2005B25': {
  answer: 'C',
  goal: R`Choose the largest $B\subseteq\{1,\ldots,100\}$ with no two elements summing to $125$. Pair up numbers that sum to $125$.`,
  tools: [
    { name: 'Pairing', fact: R`(25,100),(26,99),\ldots,(62,63)`, why: R`$38$ pairs; at most one from each.` },
    { name: 'Free numbers', fact: R`1,\ldots,24`, why: R`Their partners ($101$–$124$) aren't in the set.` }
  ],
  approach: R`Take all of $1$–$24$ ($24$) plus one from each of the $38$ pairs: $62$.`,
  steps: [
    { title: 'Count pairs',
      explain: R`Pairs from $25+100$ to $62+63$: $62-25+1=38$ pairs.`,
      check: { q: R`How many pairs $(k,125-k)$ with $25\le k\le62$?`, opts: [R`38`, R`37`, R`50`, R`36`], ans: 0, why: R`$62-25+1$.` } },
    { title: 'Maximum',
      explain: R`$24+38=62$, and no set can do better (at most one per pair).`,
      check: { q: R`What is $24+38$?`, opts: [R`62`, R`60`, R`64`, R`58`], ans: 0, why: R`Add.` } }
  ],
  bridge: R`Free numbers plus one from each pair.`,
  solution: [
    R`$1$–$24$ have no partner in range: all allowed.`,
    R`$38$ pairs summing to $125$: one each.`,
    R`Maximum $62$.`,
    R`The answer is $\textbf{(C)}\ 62$.`
  ],
  shortcut: R`Take $1$–$24$ and $63$–$100$: $24+38=62$.`,
  traps: [R`Answering $50$ (half of $100$).`, R`Forgetting the unpaired small numbers.`],
  recognize: R`"No two sum to $S$": pair complements; free elements are added in full.`
}

};
