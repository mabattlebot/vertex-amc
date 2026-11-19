// Hand-written lessons: 2020 AMC 10B, Difficulty 4 and 5 (problems 16-25).
const R = String.raw;
module.exports = {

'2020B16': {
  answer: 'A',
  goal: R`Two players alternately pick real numbers in $[0,n]$, each new number more than $1$ away from all earlier ones; whoever cannot move loses. We must decide who wins with perfect play. Game problems like this are about finding a strategy that guarantees a win no matter what the opponent does.`,
  tools: [
    { name: 'Symmetry (mirror) strategy', fact: R`\text{If every legal move }x\text{ has a legal reply }n-x,\ \text{the replying player never runs out of moves.}`, why: R`After each pair of moves the position is symmetric about the centre, so whatever the opponent can do, the mirror move is also available.` },
    { name: 'Centre point of an interval', fact: R`\text{The centre of }[0,n]\text{ is }\tfrac n2,\ \text{and }x\mapsto n-x\text{ reflects the interval about it.}`, why: R`Reflection keeps distances, so "more than $1$ away" is preserved.` },
    { name: 'Who moves last wins', fact: R`\text{The player who can always answer will make the last move.}`, why: R`The game must end (only finitely many numbers fit), so the player who always has a reply cannot be the one stuck.` }
  ],
  approach: R`Do not try small cases one by one hoping to see a pattern in $n$; look for a strategy that ignores $n$ entirely. The first player has an advantage only if he can create a position where he can always copy. Taking the exact centre makes the board symmetric, and then each of Jenn's moves can be mirrored. The key check is that the mirror move is always legal.`,
  steps: [
    { title: 'Make the board symmetric',
      explain: R`Bela starts with $\tfrac n2$. Now the chosen set is symmetric about the centre. Every later number must be more than $1$ from $\tfrac n2$, so no one can play in $(\tfrac n2-1,\tfrac n2+1)$ again.`,
      check: { q: R`On $[0,10]$, what is the mirror image of $3.2$ about the centre?`, opts: [R`6.8`, R`7.2`, R`5`, R`3.2`], ans: 0, why: R`$10-3.2=6.8$.` } },
    { title: 'Mirror every move',
      explain: R`Whenever Jenn plays $x$, Bela plays $n-x$. Before Jenn's move the set was symmetric. Jenn's $x$ is more than $1$ from all old numbers, so $n-x$ is more than $1$ from all their mirrors, which are the same old numbers. Also $n-x$ is more than $1$ from $x$ itself: $x$ is more than $1$ from $\tfrac n2$, so $|x-(n-x)|=2|x-\tfrac n2|>2$.`,
      check: { q: R`If $|x-\tfrac n2|>1$, what can you say about $|x-(n-x)|$?`, opts: [R`\text{It is greater than }2`, R`\text{It equals }1`, R`\text{It is less than }1`, R`\text{It can be }0`], ans: 0, why: R`$x-(n-x)=2(x-\tfrac n2)$.` } },
    { title: 'Conclude',
      explain: R`Bela always has a legal reply, so Jenn is the one who eventually cannot move. This works for every $n$, so Bela always wins.`,
      check: { q: R`In a game where the second player can always copy the first, who wins?`, opts: [R`\text{The copier}`, R`\text{The first player}`, R`\text{It depends on the board}`, R`\text{Nobody}`], ans: 0, why: R`The copier always has a move, so the other player gets stuck first.` } }
  ],
  bridge: R`Find a first move that makes the position symmetric, then show copying is always legal.`,
  solution: [
    R`Bela first chooses the centre $\tfrac n2$.`,
    R`After that, whenever Jenn chooses $x$, Bela chooses $n-x$.`,
    R`$n-x$ is legal: it is more than $1$ from every earlier number (mirror of Jenn's legal move), and more than $1$ from $x$ because $|x-(n-x)|=2|x-\tfrac n2|>2$.`,
    R`So Bela can always move and Jenn is the one who gets stuck. The answer is $\textbf{(A)}$ Bela will always win.`
  ],
  shortcut: R`Whenever the first player can occupy the unique centre of a symmetric board, try the mirror strategy first.`,
  traps: [R`Trying to compute how many numbers fit for each $n$; the answer does not depend on $n$.`, R`Forgetting to check that the mirror of Jenn's move is not too close to Jenn's move itself.`],
  recognize: R`Two-player "who wins with optimal play" on a symmetric board (interval, circle, grid, piles of equal size) often has a mirroring strategy. Look for a first move that makes the position symmetric.`
},

'2020B17': {
  answer: 'C',
  goal: R`Ten people stand in a circle; each knows the two neighbours and the person directly opposite. We count ways to split everyone into $5$ pairs of acquaintances. Every pair is either two neighbours or two opposite people (a "diameter").`,
  tools: [
    { name: 'Casework on a key choice', fact: R`\text{total}=\sum_{k}(\text{matchings using exactly }k\text{ diameters})`, why: R`Each matching uses some number of diameters, so splitting by that number counts each matching once.` },
    { name: 'Perfect matchings of a path and a cycle', fact: R`\text{A path of }2m\text{ people has }1\text{ way; a cycle of }2m\text{ has }2\text{ ways}`, why: R`On a path the end person must pair with their only neighbour, which forces everything. On a cycle you choose which of two alternating sets of edges to use.` },
    { name: 'Parity of leftover groups', fact: R`\text{A group of an odd number of people cannot be paired off.}`, why: R`Pairs use people two at a time.` }
  ],
  approach: R`The structure is a circle with $5$ diameters. Choose how many diameters are used, then pair the rest using neighbours only. After removing the people on the chosen diameters, the leftover people form arcs, and arcs of odd length are impossible. That parity check kills several cases immediately.`,
  steps: [
    { title: 'No diameters, or all five',
      explain: R`With no diameters, we pair neighbours around the full $10$-cycle: there are $2$ ways (pairs $(1,2),(3,4),\ldots$ or $(2,3),(4,5),\ldots,(10,1)$). With all five diameters there is exactly $1$ way.`,
      check: { q: R`How many ways can $6$ people in a circle be paired using only neighbours?`, opts: [R`2`, R`3`, R`1`, R`6`], ans: 0, why: R`A cycle of even length has exactly $2$ perfect matchings by adjacent pairs.` } },
    { title: 'Exactly one diameter',
      explain: R`Pick one diameter ($5$ choices). Removing those two people splits the circle into two arcs of $4$ people. Each arc must be paired with neighbours (a second diameter would make it "more than one"), and a path of $4$ has exactly one way. So $5$ matchings.`,
      check: { q: R`A row of $4$ people must pair with neighbours. How many ways?`, opts: [R`1`, R`2`, R`3`, R`4`], ans: 0, why: R`The end person must pair with the next, then the last two pair: $1$ way.` } },
    { title: 'Two, three or four diameters',
      explain: R`With two diameters the leftover $6$ people form arcs; checking the positions, some arc always has an odd number of people, so neighbours alone cannot finish: $0$ ways. Four diameters leave $2$ people who are opposite each other, which would be a fifth diameter: $0$. With three diameters, the two unused diameters must be next to each other so their $4$ people form two neighbour pairs: $5$ ways (one for each adjacent pair of diameters, going around).`,
      check: { q: R`Adding the cases $2+5+0+5+0+1$ gives?`, opts: [R`13`, R`12`, R`11`, R`15`], ans: 0, why: R`$2+5+5+1=13$.` } }
  ],
  bridge: R`Split by the number of diameters used and pair the remaining arcs with neighbours, discarding cases with odd arcs.`,
  solution: [
    R`Each pair is either neighbours or a diameter; split by the number $k$ of diameters.`,
    R`$k=0$: $2$ ways around the $10$-cycle. $k=5$: $1$ way.`,
    R`$k=1$: $5$ choices of diameter; the two remaining arcs of $4$ pair up in $1$ way each: $5$.`,
    R`$k=2$ and $k=4$: the leftover arcs include an odd arc (or an opposite pair), so $0$.`,
    R`$k=3$: the two unused diameters must be adjacent: $5$ ways.`,
    R`Total $2+5+5+1=13$. The answer is $\textbf{(C)}\ 13$.`
  ],
  shortcut: R`Draw the circle as a ladder: the diameters are rungs. Counting rung choices with even gaps between them gives the cases quickly.`,
  traps: [R`Counting only neighbour pairings ($2$) or only diameter pairings ($1$).`, R`Forgetting the all-diameters matching.`],
  recognize: R`"Split into pairs who know each other" is counting perfect matchings. Casework on a special type of pair, with a parity check on what is left, is the standard method.`
},

'2020B18': {
  answer: 'B',
  goal: R`Starting with one red and one blue ball, George four times draws a ball and adds another of the same colour. We want the probability of ending with $3$ red and $3$ blue, i.e. exactly $2$ of the $4$ draws were red.`,
  tools: [
    { name: 'Probability of a sequence of dependent draws', fact: R`P(\text{sequence})=\prod\frac{\#\text{balls of drawn colour}}{\#\text{balls in urn}}`, why: R`Each draw's probability depends on the current contents, so multiply step by step.` },
    { name: 'Order does not change the product', fact: R`P(RRBB)=P(RBRB)=\cdots=\frac{1\cdot2\cdot1\cdot2}{2\cdot3\cdot4\cdot5}`, why: R`The numerators for red are always $1,2,\ldots$ and for blue $1,2,\ldots$ in some interleaving, and the denominators are always $2,3,4,5$.` },
    { name: 'Counting arrangements', fact: R`\binom{4}{2}=6`, why: R`Choose which two of the four draws are red.` }
  ],
  approach: R`Rather than drawing a big probability tree, compute the probability of one specific order, then notice every order with two reds and two blues has the same probability. Multiply by the number of orders. This is the famous Pólya urn, where every final split is equally likely.`,
  steps: [
    { title: 'One specific order',
      explain: R`For $RRBB$: first draw red with $\tfrac12$, then red with $\tfrac23$ (now $2$ red of $3$), then blue with $\tfrac14$ ($1$ blue of $4$), then blue with $\tfrac25$. Product $\tfrac12\cdot\tfrac23\cdot\tfrac14\cdot\tfrac25=\tfrac{4}{120}=\tfrac1{30}$.`,
      check: { q: R`Starting from $1$ red and $1$ blue, what is $P(RB)$ for the first two draws?`, opts: [R`\tfrac16`, R`\tfrac14`, R`\tfrac13`, R`\tfrac12`], ans: 0, why: R`$\tfrac12\cdot\tfrac13$: after a red there are $3$ balls with $1$ blue.` } },
    { title: 'Every order has the same probability',
      explain: R`In any order with two reds and two blues, the red numerators are $1$ then $2$, the blue numerators $1$ then $2$, and the denominators are $2,3,4,5$ (the urn grows by one each time). So each of the $\binom42=6$ orders has probability $\tfrac{1\cdot2\cdot1\cdot2}{2\cdot3\cdot4\cdot5}=\tfrac1{30}$.`,
      check: { q: R`What is $P(RBRB)$?`, opts: [R`\tfrac1{30}`, R`\tfrac1{20}`, R`\tfrac1{15}`, R`\tfrac1{60}`], ans: 0, why: R`$\tfrac12\cdot\tfrac13\cdot\tfrac24\cdot\tfrac25=\tfrac{4}{120}$.` } },
    { title: 'Add them up',
      explain: R`$6\cdot\tfrac1{30}=\tfrac15$. A nice check: in this urn every number of red draws $0,1,2,3,4$ turns out equally likely, so each has probability $\tfrac15$.`,
      check: { q: R`What is the probability all four draws are red?`, opts: [R`\tfrac15`, R`\tfrac1{16}`, R`\tfrac1{30}`, R`\tfrac1{10}`], ans: 0, why: R`$\tfrac12\cdot\tfrac23\cdot\tfrac34\cdot\tfrac45=\tfrac15$.` } }
  ],
  bridge: R`Compute one order, argue all orders match, and multiply by the number of orders.`,
  solution: [
    R`Ending with $3$ of each colour means exactly $2$ red draws out of $4$.`,
    R`$P(RRBB)=\tfrac12\cdot\tfrac23\cdot\tfrac14\cdot\tfrac25=\tfrac1{30}$.`,
    R`Any order has red numerators $1,2$, blue numerators $1,2$ and denominators $2,3,4,5$, so each of the $\binom42=6$ orders has probability $\tfrac1{30}$.`,
    R`Total $\tfrac{6}{30}=\tfrac15$. The answer is $\textbf{(B)}\ \tfrac15$.`
  ],
  shortcut: R`Pólya urn starting $1$–$1$: after $n$ draws the number of red draws is uniform on $0,\ldots,n$, so the answer is $\tfrac{1}{n+1}=\tfrac15$.`,
  traps: [R`Treating draws as independent with probability $\tfrac12$ each (giving $\tfrac38$).`, R`Forgetting that the urn grows, so denominators change.`],
  recognize: R`Urns where you "add a ball of the same colour" are Pólya urns. Compute one sequence and use the fact that all orders with the same counts are equally likely.`
},

'2020B19': {
  answer: 'A',
  goal: R`$\binom{52}{10}$ is written $158A00A4AA0$ with one unknown digit $A$ repeated. We do not need to compute $\binom{52}{10}$; we only need enough divisibility facts about it to identify $A$.`,
  tools: [
    { name: 'Counting a prime in a binomial coefficient', fact: R`\binom{52}{10}=\frac{52\cdot51\cdots43}{10!}`, why: R`Count factors of $2$ (or $3$) in the numerator and denominator; the difference is the exact power in $\binom{52}{10}$.` },
    { name: 'Divisibility by $4$ and $8$ from the last digits', fact: R`4\mid N\iff 4\mid(\text{last 2 digits}),\quad 8\mid N\iff 8\mid(\text{last 3 digits})`, why: R`$100$ is a multiple of $4$ and $1000$ of $8$.` },
    { name: 'Remainder mod $3$ from the digit sum', fact: R`N\equiv(\text{sum of digits})\pmod 3`, why: R`$10\equiv1\pmod3$, so each digit contributes itself.` },
    { name: 'Working mod $3$ with fractions', fact: R`\text{Cancel all factors of }3\text{, then reduce each remaining factor mod }3`, why: R`When the $3$s cancel exactly, the quotient's remainder is the product of remainders (with $2\cdot2\equiv1$ acting as an inverse).` }
  ],
  approach: R`The digit $A$ appears in the last three digits $AA0$, so information about powers of $2$ narrows $A$ quickly. Count factors of $2$ in $\binom{52}{10}$ to learn it is divisible by $4$ but not $8$. That leaves two candidates, and the remainder mod $3$ (computed from the fraction, compared with the digit sum) decides between them.`,
  steps: [
    { title: 'Power of $2$',
      explain: R`Numerator $52\cdot51\cdots43$: factors of $2$ come from $52\ (2),\ 50\ (1),\ 48\ (4),\ 46\ (1),\ 44\ (2)$, total $10$. Denominator $10!$ has $5+2+1=8$. So $\binom{52}{10}$ has exactly $2^2$: divisible by $4$, not by $8$.`,
      check: { q: R`How many factors of $2$ are in $10!$?`, opts: [R`8`, R`5`, R`7`, R`10`], ans: 0, why: R`$\lfloor10/2\rfloor+\lfloor10/4\rfloor+\lfloor10/8\rfloor=5+2+1$.` } },
    { title: 'Use the last three digits',
      explain: R`The last three digits are $AA0=110A$. We need $4\mid110A$ but $8\nmid110A$. $A$ must be even: $A=2$ gives $220\equiv4\pmod8$ (ok); $A=4$ gives $440\equiv0$ (no); $A=6$ gives $660\equiv4$ (ok); $A=8$ gives $880\equiv0$ (no). So $A\in\{2,6\}$.`,
      check: { q: R`What is $660\bmod 8$?`, opts: [R`4`, R`0`, R`2`, R`6`], ans: 0, why: R`$8\cdot82=656$, remainder $4$.` } },
    { title: 'Remainder mod $3$',
      explain: R`In the fraction, the numerator has $3$s from $51,48,45$ (total $4$) and $10!$ has $3$s from $9,6,3$ (total $4$), so they cancel. Reduce the rest mod $3$: the numerator leftovers give $2^5\equiv2$ and the denominator leftovers give $2^4\equiv1$, so $\binom{52}{10}\equiv2\pmod3$. The digit sum is $18+4A\equiv A\pmod 3$, so $A\equiv2$. Of $2$ and $6$, only $A=2$ works.`,
      check: { q: R`If a number has digit sum $18+4A$, what is it mod $3$?`, opts: [R`A\bmod3`, R`0`, R`4A`, R`18`], ans: 0, why: R`$18\equiv0$ and $4\equiv1\pmod3$.` } }
  ],
  bridge: R`Get the exact power of $2$ to restrict $A$ using the last three digits, then use the remainder mod $3$ to choose.`,
  solution: [
    R`$\binom{52}{10}=\tfrac{52\cdots43}{10!}$ has $10-8=2$ factors of $2$, so it is divisible by $4$ but not $8$.`,
    R`Its last three digits $AA0=110A$ must be $\equiv4\pmod8$, so $A=2$ or $6$.`,
    R`Cancelling the four $3$s and reducing mod $3$ gives $\binom{52}{10}\equiv2\pmod3$.`,
    R`The digit sum $18+4A\equiv A\pmod3$ must be $2$, so $A=2$ (indeed $\binom{52}{10}=15820024220$).`,
    R`The answer is $\textbf{(A)}\ 2$.`
  ],
  shortcut: R`Lucas's theorem gives the mod-$3$ value directly: $52=1221_3$, $10=0101_3$, so $\binom{52}{10}\equiv\binom11\binom20\binom21\binom10=2\pmod3$.`,
  traps: [R`Using divisibility by $11$: the alternating sum here is $0$ for every $A$, so it gives no information.`, R`Miscounting the $2$s in $48=2^4\cdot3$.`],
  recognize: R`A huge number with hidden digits and a known formula: find its divisibility by small primes from the formula, then match with digit tests (last digits for $2$ and $5$, digit sums for $3$ and $9$, alternating sums for $11$).`
},

'2020B20': {
  answer: 'B',
  goal: R`$S(r)$ is the box "inflated" by $r$: every point within $r$ of the box. Its volume is a cubic in $r$, and we need the ratio $\tfrac{bc}{ad}$ of its coefficients. The work is splitting $S(r)$ into simple pieces.`,
  tools: [
    { name: 'Volume of the inflated box (Steiner formula)', fact: R`V=abc+2(ab+bc+ca)\,r+\pi(a+b+c)\,r^2+\tfrac43\pi r^3`, why: R`Box + slabs on the $6$ faces + quarter-cylinders along the $12$ edges + eighth-balls at the $8$ corners.` },
    { name: 'Quarter-cylinders along edges', fact: R`4\text{ edges of each length }\ell\text{ give }4\cdot\tfrac14\pi r^2\ell=\pi r^2\ell`, why: R`Each edge gets a quarter of a cylinder of radius $r$; the four parallel edges of length $\ell$ together make one full cylinder.` },
    { name: 'Eighth-balls at corners', fact: R`8\cdot\tfrac18\cdot\tfrac43\pi r^3=\tfrac43\pi r^3`, why: R`Each corner gets one octant of a ball; eight octants make a whole ball.` }
  ],
  approach: R`Picture the inflated box: flat slabs over the faces, rounded rods along the edges, rounded caps at the corners. Each type of piece gives one power of $r$. Compute each coefficient from the box's dimensions $1,3,4$, then form the ratio.`,
  steps: [
    { title: 'Constant and linear terms',
      explain: R`At $r=0$ we have the box itself: $d=1\cdot3\cdot4=12$. Over each face of area $A$ sits a slab of volume $Ar$; the faces have total area $2(3+4+12)=38$, so $c=38$.`,
      check: { q: R`What is the surface area of a $2\times3\times5$ box?`, opts: [R`62`, R`31`, R`30`, R`60`], ans: 0, why: R`$2(6+10+15)=62$.` } },
    { title: 'Quadratic term',
      explain: R`Along each edge there is a quarter-cylinder of radius $r$. The four edges of length $\ell$ make one full cylinder, volume $\pi r^2\ell$. Summing over lengths $1,3,4$: $\pi r^2(1+3+4)=8\pi r^2$, so $b=8\pi$.`,
      check: { q: R`For a $2\times3\times5$ box, what is the $r^2$ coefficient?`, opts: [R`10\pi`, R`30\pi`, R`5\pi`, R`20\pi`], ans: 0, why: R`$\pi(2+3+5)=10\pi$.` } },
    { title: 'Cubic term and the ratio',
      explain: R`The eight corner pieces form one ball: $a=\tfrac43\pi$. Then $\dfrac{bc}{ad}=\dfrac{8\pi\cdot38}{\tfrac43\pi\cdot12}=\dfrac{304\pi}{16\pi}=19$.`,
      check: { q: R`What is $\dfrac{8\cdot38}{16}$?`, opts: [R`19`, R`18`, R`38`, R`24`], ans: 0, why: R`$304/16=19$.` } }
  ],
  bridge: R`Decompose the inflated box into box, face slabs, edge quarter-cylinders and corner eighth-balls; read off each coefficient.`,
  solution: [
    R`$d$ is the box volume: $1\cdot3\cdot4=12$.`,
    R`$c$ is the surface area: $2(1\cdot3+3\cdot4+4\cdot1)=38$.`,
    R`$b$: quarter-cylinders on edges total $\pi(1+3+4)=8\pi$.`,
    R`$a$: eight eighth-balls make $\tfrac43\pi$.`,
    R`$\tfrac{bc}{ad}=\tfrac{8\pi\cdot38}{(4\pi/3)\cdot12}=19$. The answer is $\textbf{(B)}\ 19$.`
  ],
  shortcut: R`The formula $V=abc+(\text{surface area})r+\pi(\text{sum of edge lengths}/4)r^2+\tfrac43\pi r^3$ is worth remembering.`,
  traps: [R`Using all $12$ edges as full cylinders (each edge gets only a quarter).`, R`Taking $b=\pi(a+b+c)$ times $4$ by counting each edge length once instead of four quarter-pieces.`],
  recognize: R`"Points within distance $r$ of a shape" means inflating the shape; split it into pieces by what the closest point of the shape is (a face, an edge, or a corner).`
},

'2020B21': {
  answer: 'B',
  goal: R`A square is cut into four regions of area $1$ by the segment $EH$ (cutting off corner $A$) and two perpendiculars $FI$ and $GJ$ to $EH$. We need $FI^2$. Area facts will give lengths, and a well-chosen right triangle will connect $FI$ to known areas.`,
  tools: [
    { name: 'Total area gives the side', fact: R`4\text{ regions of area }1\Rightarrow\text{square area }4,\ \text{side }2`, why: R`The four regions fill the square exactly.` },
    { name: 'Isosceles right triangle', fact: R`\text{legs }x,\ \text{area }\tfrac{x^2}{2},\ \text{hypotenuse }x\sqrt2`, why: R`Triangle $AEH$ with $AE=AH$ has $45^\circ$ angles, and so does every triangle formed with line $EH$ and the square's sides.` },
    { name: 'Area by subtraction', fact: R`[BFIE]=[\triangle PFI]-[\triangle PBE]`, why: R`Extending $EH$ to meet line $BC$ at $P$ makes $BFIE$ a big triangle minus a small one.` }
  ],
  approach: R`First get easy lengths from areas: the square has side $2$ and $AE=AH=\sqrt2$. The awkward region is quadrilateral $BFIE$. Extend line $HE$ past $E$ until it hits line $BC$ (extended) at $P$. All angles there are $45^\circ$ or $90^\circ$, so triangles $PBE$ and $PIF$ are isosceles right triangles, and $BFIE$ is their difference.`,
  steps: [
    { title: 'Lengths from areas',
      explain: R`The four areas sum to $4$, so the square has side $2$. $[AEH]=\tfrac12AE^2=1$ gives $AE=AH=\sqrt2$. So $EB=2-\sqrt2$.`,
      check: { q: R`An isosceles right triangle has area $2$. How long are its legs?`, opts: [R`2`, R`\sqrt2`, R`4`, R`1`], ans: 0, why: R`$\tfrac12x^2=2$ gives $x=2$.` } },
    { title: 'Extend $HE$ to $P$',
      explain: R`Line $HE$ makes $45^\circ$ with $AB$. Extend it beyond $E$ to meet line $BC$ at $P$ (below $B$). Triangle $PBE$ has a right angle at $B$ and $45^\circ$ angles, so $PB=BE=2-\sqrt2$ and $[PBE]=\tfrac12(2-\sqrt2)^2=3-2\sqrt2$. Triangle $PIF$ has a right angle at $I$ and a $45^\circ$ angle at $P$, so $PI=FI$ and $[PIF]=\tfrac12FI^2$.`,
      check: { q: R`What is $\tfrac12(2-\sqrt2)^2$?`, opts: [R`3-2\sqrt2`, R`2-\sqrt2`, R`1`, R`6-4\sqrt2`], ans: 0, why: R`$(2-\sqrt2)^2=6-4\sqrt2$; half is $3-2\sqrt2$.` } },
    { title: 'Subtract and solve',
      explain: R`$[BFIE]=[PIF]-[PBE]$, so $1=\tfrac12FI^2-(3-2\sqrt2)$. Then $\tfrac12FI^2=4-2\sqrt2$ and $FI^2=8-4\sqrt2$.`,
      check: { q: R`If $\tfrac12y=4-2\sqrt2$, what is $y$?`, opts: [R`8-4\sqrt2`, R`2-\sqrt2`, R`4-\sqrt2`, R`8-2\sqrt2`], ans: 0, why: R`Multiply by $2$.` } }
  ],
  bridge: R`Get the side and $AE$ from areas, extend $HE$ to make two isosceles right triangles, and subtract their areas.`,
  solution: [
    R`The square has area $4$ and side $2$; $\tfrac12AE^2=1$ gives $AE=\sqrt2$, so $EB=2-\sqrt2$.`,
    R`Extend $HE$ to meet line $BC$ at $P$. Triangle $PBE$ is isosceles right with legs $2-\sqrt2$: area $3-2\sqrt2$.`,
    R`Triangle $PIF$ is isosceles right with legs $FI=PI$: area $\tfrac12FI^2$.`,
    R`$[BFIE]=\tfrac12FI^2-(3-2\sqrt2)=1$, so $FI^2=8-4\sqrt2$.`,
    R`The answer is $\textbf{(B)}\ 8-4\sqrt2$.`
  ],
  shortcut: R`Coordinates also work ($A$ at the origin, line $EH$: $x+y=\sqrt2$), but the extended triangle turns the area condition into one line of algebra.`,
  traps: [R`Assuming $F$ is the midpoint of $BC$.`, R`Forgetting that $P$ lies on the extension of $BC$ beyond $B$, not on the segment.`],
  recognize: R`A $45^\circ$ cut across a square creates many isosceles right triangles. When a region is awkward, extend a line to make it the difference of two simple triangles.`
},

'2020B22': {
  answer: 'D',
  goal: R`We need $(2^{202}+202)\bmod(2^{101}+2^{51}+1)$. The divisor looks strange, which suggests it is a factor of something simple — here $2^{202}+1$.`,
  tools: [
    { name: 'Sophie Germain identity', fact: R`a^4+4b^4=(a^2+2ab+2b^2)(a^2-2ab+2b^2)`, why: R`Complete the square: $a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$, a difference of squares.` },
    { name: 'Remainders', fact: R`\text{If }m\mid N\text{ then }(N+r)\bmod m=r\text{ when }0\le r<m`, why: R`Adding a multiple of $m$ does not change the remainder.` }
  ],
  approach: R`The divisor has the shape $2x^2+2x+1$ with $x=2^{50}$, which is a Sophie Germain factor. So rewrite $2^{202}+1$ as $4x^4+1$ and factor it. Then $2^{202}+202=(2^{202}+1)+201$, and $201$ is far smaller than the divisor.`,
  steps: [
    { title: 'Substitute $x=2^{50}$',
      explain: R`$2^{101}=2\cdot2^{100}=2x^2$ and $2^{51}=2x$, so the divisor is $2x^2+2x+1$. Also $2^{202}=4\cdot2^{200}=4x^4$.`,
      check: { q: R`With $x=2^{50}$, what is $2^{151}$?`, opts: [R`2x^3`, R`x^3`, R`4x^3`, R`2x^4`], ans: 0, why: R`$2^{151}=2\cdot2^{150}=2x^3$.` } },
    { title: 'Factor $4x^4+1$',
      explain: R`$4x^4+1=(2x^2+1)^2-(2x)^2=(2x^2+2x+1)(2x^2-2x+1)$. So the divisor exactly divides $2^{202}+1$.`,
      check: { q: R`Factor $4y^4+1$ for $y=1$ using the identity.`, opts: [R`5\cdot1`, R`3\cdot2`, R`4\cdot1`, R`5\cdot5`], ans: 0, why: R`$(2+2+1)(2-2+1)=5\cdot1$.` } },
    { title: 'Find the remainder',
      explain: R`$2^{202}+202=(2^{202}+1)+201$. The first part is a multiple of the divisor, and $201$ is smaller than the divisor, so the remainder is $201$.`,
      check: { q: R`If $m\mid N$, what is $(N+7)\bmod m$ when $m>7$?`, opts: [R`7`, R`0`, R`m-7`, R`N`], ans: 0, why: R`The multiple of $m$ contributes nothing.` } }
  ],
  bridge: R`Write everything in terms of $x=2^{50}$, factor $4x^4+1$, and split off $201$.`,
  solution: [
    R`Let $x=2^{50}$; then $2^{101}+2^{51}+1=2x^2+2x+1$ and $2^{202}=4x^4$.`,
    R`$4x^4+1=(2x^2+1)^2-4x^2=(2x^2+2x+1)(2x^2-2x+1)$, so the divisor divides $2^{202}+1$.`,
    R`$2^{202}+202=(2^{202}+1)+201$, and $0\le201<2^{101}+2^{51}+1$.`,
    R`The remainder is $201$. The answer is $\textbf{(D)}\ 201$.`
  ],
  shortcut: R`When a divisor looks like $2x^2\pm2x+1$ or $a^2\pm2ab+2b^2$, think Sophie Germain immediately.`,
  traps: [R`Trying long division of powers of $2$ by hand.`, R`Answering $202$ by assuming the divisor divides $2^{202}$.`],
  recognize: R`Remainder problems with huge powers and an unusual divisor: look for an identity (difference of squares, sum of cubes, Sophie Germain) that makes the divisor a factor of a nearby number.`
},

'2020B23': {
  answer: 'C',
  goal: R`From the four moves $L,R$ (quarter turns) and $H,V$ (reflections in the axes) we form sequences of $20$ moves and count those that return the square to its starting position, i.e. whose total effect is the identity.`,
  tools: [
    { name: 'The symmetries of a square', fact: R`8\text{ symmetries: }I,\ L,\ L^2,\ R,\ H,\ V,\ D_1,\ D_2\ (\text{diagonal reflections})`, why: R`Every combination of moves is one of these eight.` },
    { name: 'Two "types" of symmetry', fact: R`K=\{I,L^2,D_1,D_2\},\quad M=\{L,R,H,V\}`, why: R`Composing two moves from $M$ always lands in $K$, and a move from $M$ after something in $K$ lands in $M$; so after an even number of moves you are always in $K$.` },
    { name: 'Exactly one fixing move', fact: R`\text{For any }g\in M,\ \text{exactly one }h\in M\text{ gives }g\cdot h=I`, why: R`$h$ must be $g^{-1}$, which is in $M$ ($L^{-1}=R$, $H^{-1}=H$, $V^{-1}=V$).` }
  ],
  approach: R`Do not try to track the square through $20$ moves. Instead: let the first $19$ moves be anything; their combined effect is some symmetry $g$. Ask how many choices of the last move undo $g$. The useful fact is that after an odd number of moves, $g$ is always in $\{L,R,H,V\}$, so exactly one last move works.`,
  steps: [
    { title: 'Where can you be after an odd number of moves?',
      explain: R`Each move is in $M=\{L,R,H,V\}$. A product of two moves is in $K=\{I,L^2,D_1,D_2\}$ (for example $LL=L^2$, $HV=L^2$, $LH$ is a diagonal reflection). So after an even number of moves you are in $K$, and after an odd number you are in $M$.`,
      check: { q: R`What is $H$ followed by $V$?`, opts: [R`L^2\ (180^\circ\text{ rotation})`, R`I`, R`L`, R`H`], ans: 0, why: R`Reflecting in both axes sends $(x,y)$ to $(-x,-y)$.` } },
    { title: 'The last move is forced',
      explain: R`After $19$ moves the effect $g$ is in $M$. To end at the identity the last move must be $g^{-1}$, and $g^{-1}$ is also in $M$ (inverse of $L$ is $R$, $H$ and $V$ are their own inverses). So for each of the $4^{19}$ first parts, exactly one last move works.`,
      check: { q: R`If the first $19$ moves combine to $R$, which last move returns everything to the start?`, opts: [R`L`, R`R`, R`H`, R`V`], ans: 0, why: R`$R$ then $L$ is the identity.` } },
    { title: 'Count',
      explain: R`The number of sequences is $4^{19}\cdot1=2^{38}$.`,
      check: { q: R`What is $4^{19}$ as a power of $2$?`, opts: [R`2^{38}`, R`2^{19}`, R`2^{21}`, R`2^{76}`], ans: 0, why: R`$4^{19}=(2^2)^{19}$.` } }
  ],
  bridge: R`Fix the first $19$ moves freely and show there is exactly one way to choose the last.`,
  solution: [
    R`The $8$ symmetries split as $K=\{I,L^2,D_1,D_2\}$ and $M=\{L,R,H,V\}$; a product of two moves from $M$ is in $K$.`,
    R`So any $19$ moves combine to some $g\in M$.`,
    R`The last move must be $g^{-1}$, which is in $M$: exactly one choice.`,
    R`Hence $4^{19}=2^{38}$ sequences. The answer is $\textbf{(C)}\ 2^{38}$.`
  ],
  shortcut: R`"First $n-1$ moves free, last move forced" is a common counting pattern; check the last move always exists and is unique.`,
  traps: [R`Assuming each sequence returns with probability $\tfrac18$ (that would give $4^{20}/8$).`, R`Forgetting that $H$ and $V$ are their own inverses.`],
  recognize: R`Counting sequences of symmetry moves that return to the start: find which symmetries are reachable after the first $n-1$ moves and how many final moves undo each one.`
},

'2020B24': {
  answer: 'C',
  goal: R`We need positive integers $n$ with $\tfrac{n+1000}{70}=\lfloor\sqrt n\rfloor$. Name the floor $k$; then $n=70k-1000$, and the floor condition becomes a pair of inequalities on $k$.`,
  tools: [
    { name: 'Floor as two inequalities', fact: R`\lfloor\sqrt n\rfloor=k\iff k^2\le n<(k+1)^2`, why: R`$k\le\sqrt n<k+1$; square (everything is nonnegative).` },
    { name: 'Quadratic inequalities', fact: R`x^2-px+q\le0\iff r_1\le x\le r_2\ \ (\text{roots }r_1\le r_2)`, why: R`An upward parabola is negative only between its roots.` },
    { name: 'Integrality', fact: R`n=70k-1000\text{ is an integer for every integer }k`, why: R`So each valid $k$ gives exactly one $n$.` }
  ],
  approach: R`The floor value $k$ is the natural unknown, because $n$ is determined by $k$ directly. Substitute $n=70k-1000$ into $k^2\le n<(k+1)^2$ to get two quadratic inequalities in $k$. Solve each by its roots and intersect.`,
  steps: [
    { title: 'Write $n$ in terms of $k$',
      explain: R`If $\lfloor\sqrt n\rfloor=k$, then $n=70k-1000$, and we need $k^2\le70k-1000<(k+1)^2$.`,
      check: { q: R`If $\tfrac{n+50}{10}=k$, what is $n$?`, opts: [R`10k-50`, R`10k+50`, R`k-5`, R`10(k-50)`], ans: 0, why: R`Multiply by $10$ and subtract $50$.` } },
    { title: 'The left inequality',
      explain: R`$k^2-70k+1000\le0$. The roots are $\tfrac{70\pm\sqrt{4900-4000}}2=\tfrac{70\pm30}2=20,50$. So $20\le k\le50$.`,
      check: { q: R`For which $x$ is $x^2-10x+21\le0$?`, opts: [R`3\le x\le7`, R`x\le3\text{ or }x\ge7`, R`-7\le x\le-3`, R`x=5`], ans: 0, why: R`Roots $3$ and $7$; the parabola is below zero between them.` } },
    { title: 'The right inequality',
      explain: R`$70k-1000<k^2+2k+1$ means $k^2-68k+1001>0$. The roots are $34\pm\sqrt{155}\approx34\pm12.45$, i.e. about $21.55$ and $46.45$. So $k\le21$ or $k\ge47$. Together with $20\le k\le50$: $k\in\{20,21,47,48,49,50\}$, which is $6$ values.`,
      check: { q: R`Which is closest to $\sqrt{155}$?`, opts: [R`12.45`, R`12.0`, R`13.0`, R`11.5`], ans: 0, why: R`$12.45^2\approx155.0$.` } }
  ],
  bridge: R`Let $k$ be the floor, write $n=70k-1000$, and solve $k^2\le n<(k+1)^2$ as two quadratic inequalities.`,
  solution: [
    R`Let $k=\lfloor\sqrt n\rfloor$; then $n=70k-1000$ and $k^2\le70k-1000<(k+1)^2$.`,
    R`$k^2-70k+1000\le0$ gives $20\le k\le50$.`,
    R`$k^2-68k+1001>0$ gives $k<34-\sqrt{155}\approx21.55$ or $k>34+\sqrt{155}\approx46.45$.`,
    R`So $k\in\{20,21,47,48,49,50\}$, each giving one positive $n$.`,
    R`There are $6$ values. The answer is $\textbf{(C)}\ 6$.`
  ],
  shortcut: R`Check endpoints quickly: $k=20$ gives $n=400=20^2$ (valid) and $k=50$ gives $n=2500=50^2$ (valid).`,
  traps: [R`Using $\le$ on the right side; $n$ must be strictly less than $(k+1)^2$.`, R`Rounding $34-\sqrt{155}$ wrongly and including or excluding $k=22$.`],
  recognize: R`Equations involving $\lfloor\sqrt n\rfloor$ or $\lfloor x\rfloor$: name the floor $k$, express the other variable in $k$, and turn the floor into two inequalities.`
},

'2020B25': {
  answer: 'A',
  goal: R`$D(n)$ counts ordered factorisations of $n$ into factors greater than $1$. We need $D(96)$ with $96=2^5\cdot3$. Each factorisation is a way of distributing the five $2$s and one $3$ into an ordered list of factors, none of which is $1$.`,
  tools: [
    { name: 'Prime factorisation', fact: R`96=2^5\cdot3`, why: R`A factorisation of $96$ assigns each prime factor to one of the factors.` },
    { name: 'Stars and bars with minimums', fact: R`\#\{x_1+\cdots+x_m=N,\ x_i\ge1\}=\binom{N-1}{m-1}`, why: R`Place $m-1$ bars in the $N-1$ gaps between $N$ stars.` },
    { name: 'Binomial sums', fact: R`\sum_{j}\binom{n}{j}=2^n,\quad\sum_j j\binom nj=n2^{n-1}`, why: R`The first counts all subsets; the second counts (subset, marked element) pairs.` }
  ],
  approach: R`Count by the number of factors $k$. Decide which factor gets the $3$ ($k$ ways). Every other factor then needs at least one $2$; the factor with the $3$ may have any number of $2$s. Count the ways to hand out the $2$s with stars and bars, then sum over $k$.`,
  steps: [
    { title: 'Fix the number of factors and place the $3$',
      explain: R`With $k$ factors, the single $3$ goes into one of them: $k$ choices. The other $k-1$ factors must be powers of $2$ greater than $1$, so each needs at least one $2$. The factor holding the $3$ is already greater than $1$.`,
      check: { q: R`For $n=2^2\cdot3=12$ with $k=2$ factors, how many ordered factorisations?`, opts: [R`4`, R`3`, R`2`, R`6`], ans: 0, why: R`$2\cdot6,\ 6\cdot2,\ 4\cdot3,\ 3\cdot4$.` } },
    { title: 'Distribute the $2$s',
      explain: R`Give one $2$ to each of the $k-1$ factors that need it, leaving $5-(k-1)=6-k$ twos to distribute freely among all $k$ factors: $\binom{(6-k)+(k-1)}{k-1}=\binom{5}{k-1}$ ways. So exactly $k$ factors give $k\binom{5}{k-1}$ factorisations, for $k=1,\ldots,6$.`,
      check: { q: R`How many ways can $3$ identical items go into $2$ boxes (empty allowed)?`, opts: [R`4`, R`3`, R`6`, R`8`], ans: 0, why: R`$\binom{3+1}{1}=4$: $(3,0),(2,1),(1,2),(0,3)$.` } },
    { title: 'Sum over $k$',
      explain: R`With $j=k-1$: $D(96)=\sum_{j=0}^{5}(j+1)\binom5j=\sum j\binom5j+\sum\binom5j=5\cdot2^4+2^5=80+32=112$.`,
      check: { q: R`What is $\sum_{j=0}^{4}\binom4j$?`, opts: [R`16`, R`8`, R`10`, R`32`], ans: 0, why: R`It is $2^4$.` } }
  ],
  bridge: R`Count by the number of factors: place the $3$, give each other factor at least one $2$, distribute the rest, and add.`,
  solution: [
    R`$96=2^5\cdot3$. Fix the number of factors $k$ (from $1$ to $6$).`,
    R`Choose the factor that gets the $3$: $k$ ways. The other $k-1$ factors each need at least one $2$.`,
    R`The remaining $6-k$ twos go freely into $k$ factors: $\binom5{k-1}$ ways.`,
    R`$D(96)=\sum_{k=1}^6k\binom5{k-1}=5\cdot2^4+2^5=112$.`,
    R`The answer is $\textbf{(A)}\ 112$.`
  ],
  shortcut: R`Recursion also works: $D(n)=\sum_{d\mid n,\,d<n}D(d)$ with $D(1)=1$ (choose the last factor), which you can build up for divisors of $96$.`,
  traps: [R`Allowing a factor of $1$.`, R`Counting unordered factorisations (order matters here).`],
  recognize: R`Counting ordered products with factors $>1$ is distributing prime exponents into ordered boxes; stars and bars with "at least one" conditions handles it.`
}

};
