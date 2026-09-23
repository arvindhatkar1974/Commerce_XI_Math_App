const choice = (id, source, prompt, correct, wrong, visual = '') => ({ id: `u2${id}`, source, type: 'choice', prompt, options: [correct, ...wrong], correct, visual });
const entry = (id, source, prompt, correct) => ({ id: `u2${id}`, source, type: 'entry', prompt, correct: String(correct) });
const piecewiseEntry = (id, source, branches, target, correct) => {
  const definitions = branches.map(([expression, condition]) => `${expression} for ${condition}`);
  const definition = definitions.length === 2 ? definitions.join(' and ') : `${definitions.slice(0, -1).join(', ')}, and ${definitions.at(-1)}`;
  return { ...entry(id, source, `If f(x) = ${definition}, find ${target}.`, correct), piecewise: { branches, target } };
};

const arrowSvg = (left, right, arrows) => {
  const leftY = left.map((_, i) => 35 + i * (150 / Math.max(1, left.length - 1)));
  const rightY = right.map((_, i) => 35 + i * (150 / Math.max(1, right.length - 1)));
  const lines = arrows.map(([a, b]) => `<line x1="102" y1="${leftY[a]}" x2="298" y2="${rightY[b]}" marker-end="url(#arrow)"/>`).join('');
  const leftText = left.map((v, i) => `<text x="78" y="${leftY[i] + 5}" text-anchor="end">${v}</text><circle cx="92" cy="${leftY[i]}" r="3"/>`).join('');
  const rightText = right.map((v, i) => `<circle cx="308" cy="${rightY[i]}" r="3"/><text x="322" y="${rightY[i] + 5}">${v}</text>`).join('');
  return `<svg class="arrow-diagram" viewBox="0 0 400 220" role="img" aria-label="Arrow diagram"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z"/></marker></defs><ellipse cx="82" cy="110" rx="55" ry="95"/><ellipse cx="318" cy="110" rx="55" ry="95"/>${lines}${leftText}${rightText}</svg>`;
};

export const theoryPages20to30 = [
  choice('th01', 'Theory P20', 'A function f from set A to set B associates each element x in A with how many elements y in B?', 'Exactly one', ['At least two', 'No element', 'Any number, including none']),
  choice('th02', 'Theory P20', 'If f : A → B is a function, set A is called the', 'domain of f', ['range of f', 'co-domain only', 'image of f']),
  choice('th03', 'Theory P20', 'If f : A → B and y = f(x), then y is called the', 'image of x under f', ['pre-image of x', 'domain of f', 'inverse of x']),
  choice('th04', 'Theory P20', 'If f : A → B and y = f(x), then x is called the', 'pre-image of y under f', ['image of y', 'co-domain of y', 'range of y']),
  choice('th05', 'Theory P20', 'A relation from A to B is not a function if an element of A', 'has no image or has more than one image in B', ['has exactly one image in B', 'has the same name as an element of B', 'is joined by a curved arrow']),
  choice('th06', 'Theory P20-21', 'A function f : A → B is one-one if', 'distinct elements in A have distinct images in B', ['every element of B has two pre-images', 'all elements of A have the same image', 'A and B contain the same elements']),
  choice('th07', 'Theory P21', 'A function f : A → B is onto if', 'every element of B is an image of some element of A', ['every element of A has two images', 'some element of B has no pre-image', 'f(A) is a proper subset of B']),
  choice('th08', 'Theory P21', 'For an onto function f : A → B, which equality holds?', 'f(A) = B', ['f(A) = A', 'f(A) = ∅', 'A ∩ B = ∅']),
  choice('th09', 'Theory P21', 'A one-one and onto function is also called', 'bijective', ['constant', 'into', 'step']),
  choice('th10', 'Theory P21', 'A function is into when', 'at least one element of the co-domain has no pre-image', ['every element of the co-domain has a pre-image', 'every input has two outputs', 'its range equals its co-domain']),
  choice('th11', 'Theory P21-22', 'In the ordered-pair representation of a function, the domain is the set of', 'first components', ['second components', 'all components', 'products of components']),
  choice('th12', 'Theory P21-22', 'In the ordered-pair representation of a function, the range is the set of', 'second components', ['first components', 'ordered pairs themselves', 'unused co-domain elements']),
  choice('th13', 'Theory P22', 'For y = f(x) = 2x + 1, f(x) is read as', 'f of x', ['f multiplied by x', 'inverse of x', 'x of f']),
  choice('th14', 'Theory P22', 'In graphical form, the domain is read from the extent of the graph on the', 'x-axis', ['y-axis', 'line y = x', 'origin only']),
  choice('th15', 'Theory P22', 'In graphical form, the range is read from the extent of the graph on the', 'y-axis', ['x-axis', 'line y = x', 'origin only']),
  entry('th16', 'Solved Example P22', 'For f(x) = 2x² − 3x + 4, find f(7).', 81),
  choice('th17', 'Solved Example P22', 'From the textbook graph of y = g(x), g(−4) equals', '0', ['−4', '3', '−5']),
  choice('th18', 'Solved Example P22', 'From the textbook graph of y = g(x), g(3) equals', '−5', ['0', '3', '5']),
  choice('th19', 'Solved Example P22-23', 'If f(x) = 3x² − x and f(m) = 4, then m equals', '4/3 or −1', ['1 or −4/3', '4 or −1', '1/3 or −4']),
  choice('th20', 'Theory P23', 'A constant function f : R → R has the form', 'f(x) = k', ['f(x) = x', 'f(x) = ax + b, a ≠ 0', 'f(x) = 1/x']),
  choice('th21', 'Theory P23', 'For the constant function f(x) = 3, its range is', '{3}', ['R', '[0, ∞)', 'R − {0}']),
  choice('th22', 'Theory P24', 'The identity function on R is defined by', 'f(x) = x', ['f(x) = 1', 'f(x) = x²', 'f(x) = |x|']),
  choice('th23', 'Theory P24', 'The graph of the linear function f(x) = ax + b has slope and y-intercept respectively', 'a and b', ['b and a', '−b/a and a', 'a and −b/a']),
  choice('th24', 'Theory P24', 'The graph of f(x) = ax + b is increasing when', 'a > 0', ['a < 0', 'a = 0 only', 'b < 0']),
  choice('th25', 'Theory P24', 'For a quadratic function whose graph has minimum value k, the range is', '[k, ∞)', ['(−∞, k]', 'R − {k}', '{k}']),
  choice('th26', 'Theory P24-25', 'The domain and range of the square function f(x) = x² are', 'Domain R, Range [0, ∞)', ['Domain [0, ∞), Range R', 'Domain R, Range R', 'Domain R − {0}, Range R − {0}']),
  choice('th27', 'Theory P25', 'The domain and range of the cube function f(x) = x³ are', 'Domain R, Range R', ['Domain R, Range [0, ∞)', 'Domain R − {0}, Range R', 'Domain [0, ∞), Range R']),
  choice('th28', 'Theory P25', 'A rational function has the form', 'f(x) = p(x)/q(x), q(x) ≠ 0', ['f(x) = ax + b only', 'f(x) = axⁿ only', 'f(x) = logₐx only']),
  choice('th29', 'Theory P25', 'For f(x) = 1/x, the domain and range are', 'R − {0} and R − {0}', ['R and R', '[0, ∞) and R', 'R and {0}']),
  choice('th30', 'Theory P26', 'For an exponential function f(x) = aˣ, the required conditions on a are', 'a > 0 and a ≠ 1', ['a < 0', 'a = 1', 'a = 0']),
  choice('th31', 'Theory P26', 'The domain and range of f(x) = aˣ are', 'R and (0, ∞)', ['(0, ∞) and R', 'R and R', 'R − {0} and R − {0}']),
  choice('th32', 'Theory P26', 'The logarithmic statement y = logₐx is equivalent to', 'aʸ = x', ['xʸ = a', 'aˣ = y', 'yᵃ = x']),
  choice('th33', 'Theory P26', 'The domain of the logarithmic function f(x) = logₐx is', '(0, ∞)', ['R', '[0, ∞)', 'R − {0}']),
  choice('th34', 'Theory P27', 'For functions f and g, (f + g)(x) equals', 'f(x) + g(x)', ['f(g(x))', 'f(x)g(x)', 'f(x)/g(x)']),
  choice('th35', 'Theory P27-29', 'If f : A → B and g : B → C, then (g ∘ f)(x) equals', 'g[f(x)]', ['f[g(x)]', 'g(x) + f(x)', 'g(x)f(x)']),
  choice('th36', 'Theory P27', 'For functions f and g, (f/g)(x) is defined as f(x)/g(x), provided', 'g(x) ≠ 0', ['f(x) = 0', 'g(x) = 0', 'f(x) = g(x)']),
  choice('th37', 'Theory P28', 'If f is one-one and onto and f(x) = y, then', 'f⁻¹(y) = x', ['f⁻¹(x) = y always', 'f(y) = x always', 'f⁻¹ does not exist']),
  choice('th38', 'Theory P28', 'If f and g are inverse functions, then', 'f[g(x)] = x and g[f(x)] = x', ['f[g(x)] = 0', 'f(x) + g(x) = x', 'f(x) = g(x) for every x']),
  choice('th39', 'Theory P29-30', 'The range of the signum function sgn(x) is', '{−1, 0, 1}', ['R', '[0, ∞)', 'Set of integers']),
  choice('th40', 'Theory P30', 'For the absolute value function f(x) = |x|, the range is', '[0, ∞)', ['R', '(−∞, 0]', '{−1, 0, 1}']),
  choice('th41', 'Theory P30', 'For the greatest integer function f(x) = [x], the range is', 'I, the set of integers', ['R', '[0, ∞)', '{−1, 0, 1}']),
];

const ex1a = arrowSvg(['2', '1', '0', '−1', '−2'], ['−3', '2', '1', '5', '6', '−1'], [[0,0],[1,2],[2,1],[3,2],[4,3]]);
const ex1b = arrowSvg(['p', 'q', 'r', 's'], ['a', 'b', 'c', 'd', 'e'], [[0,0],[1,2],[2,1],[2,3],[3,4]]);
const ex1c = arrowSvg(['3', '−2', '1', '0', '2', '4'], ['9', '7', '−6', '3', '2'], [[0,1],[2,0],[3,2],[4,3],[5,4]]);

export const exercise21 = [
  choice('ex1a', 'Q1(a)', 'Check if the relation shown in the arrow diagram is a function.', 'It is a function', ['It is not a function because 1 has two images', 'It is not a function because −2 has no image', 'It is not a function because two inputs have image 1'], ex1a),
  choice('ex1b', 'Q1(b)', 'Check if the relation shown in the arrow diagram is a function.', 'It is not a function because r has two images', ['It is a function', 'It is not a function because q has no image', 'It is not a function because a has one pre-image'], ex1b),
  choice('ex1c', 'Q1(c)', 'Check if the relation shown in the arrow diagram is a function.', 'It is not a function because −2 has no image', ['It is a function', 'It is not a function because 3 and 1 have different images', 'It is not a function because 0 has image −6'], ex1c),
  choice('ex2a', 'Q2(a)', 'Does {(1, 0), (3, 3), (2, −1), (4, 1), (2, 2)} represent a function from A = {1, 2, 3, 4} to B = {−1, 0, 1, 2, 3}?', 'No, because 2 has two images', ['Yes, it is a function', 'No, because 3 has no image', 'No, because 0 is in B']),
  choice('ex2b', 'Q2(b)', 'Does {(1, 2), (2, −1), (3, 1), (4, 3)} represent a function from A = {1, 2, 3, 4} to B = {−1, 0, 1, 2, 3}?', 'Yes, it is a function', ['No, because 0 has no pre-image', 'No, because −1 is negative', 'No, because all images must be distinct']),
  choice('ex2c', 'Q2(c)', 'Does {(1, 3), (4, 1), (2, 2)} represent a function from A = {1, 2, 3, 4} to B = {−1, 0, 1, 2, 3}?', 'No, because 3 in A has no image', ['Yes, it is a function', 'No, because 3 is an image', 'No, because 4 cannot be a pre-image']),
  choice('ex2d', 'Q2(d)', 'Does {(1, 1), (2, 1), (3, 1), (4, 1)} represent a function from A = {1, 2, 3, 4} to B = {−1, 0, 1, 2, 3}?', 'Yes, it is a function', ['No, because several elements have the same image', 'No, because 1 appears four times', 'No, because 0 has no pre-image']),
  entry('ex3a', 'Q3(a)', 'If f(m) = m² − 3m + 1, find f(0).', 1),
  entry('ex3b', 'Q3(b)', 'If f(m) = m² − 3m + 1, find f(−3).', 19),
  choice('ex3c', 'Q3(c)', 'If f(m) = m² − 3m + 1, find f(1/2).', '−1/4', ['1/4', '3/4', '−3/4']),
  choice('ex3d', 'Q3(d)', 'If f(m) = m² − 3m + 1, find f(x + 1).', 'x² − x − 1', ['x² + x − 1', 'x² − 3x + 1', 'x² − x + 1']),
  choice('ex3e', 'Q3(e)', 'If f(m) = m² − 3m + 1, find f(−x).', 'x² + 3x + 1', ['x² − 3x + 1', '−x² + 3x + 1', 'x² + 3x − 1']),
  choice('ex4a', 'Q4(a)', 'Find x if g(x) = 0, where g(x) = (5x − 6)/7.', 'x = 6/5', ['x = 5/6', 'x = −6/5', 'x = 7/5']),
  choice('ex4b', 'Q4(b)', 'Find x if g(x) = 0, where g(x) = (18 − 2x²)/7.', 'x = ±3', ['x = 3 only', 'x = ±9', 'x = ±√7']),
  choice('ex4c', 'Q4(c)', 'Find x if g(x) = 0, where g(x) = 6x² + x − 2.', 'x = 1/2 or −2/3', ['x = −1/2 or 2/3', 'x = 2 or −3', 'x = 1/3 or −1']),
  choice('ex5', 'Q5', 'Find x if f(x) = g(x), where f(x) = x⁴ + 2x² and g(x) = 11x².', 'x = 0, ±3', ['x = ±3 only', 'x = 0, ±√11', 'x = 0, ±9']),
  piecewiseEntry('ex6a', 'Q6(a)', [['x² + 3', 'x ≤ 2'], ['5x + 7', 'x > 2']], 'f(3)', 22),
  piecewiseEntry('ex6b', 'Q6(b)', [['x² + 3', 'x ≤ 2'], ['5x + 7', 'x > 2']], 'f(2)', 7),
  piecewiseEntry('ex6c', 'Q6(c)', [['x² + 3', 'x ≤ 2'], ['5x + 7', 'x > 2']], 'f(0)', 3),
  piecewiseEntry('ex7a', 'Q7(a)', [['4x − 2', 'x ≤ −3'], ['5', '−3 < x < 3'], ['x²', 'x ≥ 3']], 'f(−4)', -18),
  piecewiseEntry('ex7b', 'Q7(b)', [['4x − 2', 'x ≤ −3'], ['5', '−3 < x < 3'], ['x²', 'x ≥ 3']], 'f(−3)', -14),
  piecewiseEntry('ex7c', 'Q7(c)', [['4x − 2', 'x ≤ −3'], ['5', '−3 < x < 3'], ['x²', 'x ≥ 3']], 'f(1)', 5),
  piecewiseEntry('ex7d', 'Q7(d)', [['4x − 2', 'x ≤ −3'], ['5', '−3 < x < 3'], ['x²', 'x ≥ 3']], 'f(5)', 25),
  choice('ex8a', 'Q8(a)', 'If f(x) = 3x + 5 and g(x) = 6x − 1, find (f + g)(x).', '9x + 4', ['9x + 6', '3x + 4', '18x² + 27x − 5']),
  entry('ex8b', 'Q8(b)', 'If f(x) = 3x + 5 and g(x) = 6x − 1, find (f − g)(2).', 0),
  entry('ex8c', 'Q8(c)', 'If f(x) = 3x + 5 and g(x) = 6x − 1, find (fg)(3).', 238),
  choice('ex8d', 'Q8(d)', 'If f(x) = 3x + 5 and g(x) = 6x − 1, find (f/g)(x) and its domain.', '(3x + 5)/(6x − 1), domain R − {1/6}', ['(6x − 1)/(3x + 5), domain R − {−5/3}', '(3x + 5)/(6x − 1), domain R', '9x + 4, domain R']),
  choice('ex9a', 'Q9(a)', 'If f(x) = 2x² + 3 and g(x) = 5x − 2, then find f ∘ g', '50x² − 40x + 11', ['10x² + 13', '25x² − 20x + 7', '50x² − 20x + 5']),
  choice('ex9b', 'Q9(b)', 'If f(x) = 2x² + 3 and g(x) = 5x − 2, then find g ∘ f', '10x² + 13', ['50x² − 40x + 11', '10x² + 15', '25x² − 4']),
  choice('ex9c', 'Q9(c)', 'If f(x) = 2x² + 3 and g(x) = 5x − 2, then find f ∘ f', '8x⁴ + 24x² + 21', ['4x⁴ + 12x² + 12', '8x⁴ + 12x² + 21', '4x⁴ + 24x² + 9']),
  choice('ex9d', 'Q9(d)', 'If f(x) = 2x² + 3 and g(x) = 5x − 2, then find g ∘ g', '25x − 12', ['25x − 4', '10x − 4', '25x + 12']),
];

export const letsRemember2 = [
  choice('rem1', "Let's Remember (i)", 'A function f : A → B associates every element of A with', 'a unique element of B', ['two distinct elements of B', 'every element of B', 'no element of B']),
  choice('rem2', "Let's Remember (ii)", 'If (x, y) ∈ f, then y and x are called respectively', 'image and pre-image', ['pre-image and image', 'domain and range', 'co-domain and image']),
  choice('rem3', "Let's Remember (iii)", 'A function f : A → B is one-one if', 'distinct elements in A have distinct images in B', ['every element of B has a pre-image', 'all elements of A have one common image', 'A = B']),
  choice('rem4', "Let's Remember (iv)", 'A function f : A → B is onto if', 'every element of B is an image of some element of A', ['some element of B has no pre-image', 'every element of A has two images', 'the range is empty']),
  choice('rem5', "Let's Remember (v)", 'A function is into if', 'at least one element of B has no pre-image in A', ['every element of B has a pre-image', 'every element of A has no image', 'it is one-one and onto']),
  choice('rem6', "Let's Remember (vi)", 'If f : A → B and g : B → C, the composite function from A to C is denoted by', 'g ∘ f', ['f ∘ g only', 'f + g', 'fg']),
  choice('rem7', "Let's Remember (vii)", 'For an invertible function f, which statement is correct?', 'Domain of f = Range of f⁻¹', ['Domain of f = Domain of f⁻¹ always', 'Range of f is empty', 'f⁻¹ does not interchange domain and range']),
];

export const miscellaneousExercise2 = [
  choice('m1is', 'Q1(i) Function', 'Consider R = {(2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7)}. Is R a function?', 'Yes', ['No, because two inputs have one image', 'No, because 14 is too large', 'No, because the range has seven elements']),
  choice('m1id', 'Q1(i) Domain', 'For R = {(2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7)}, determine the domain.', '{2, 4, 6, 8, 10, 12, 14}', ['{1, 2, 3, 4, 5, 6, 7}', '{2, 4, 6, 8, 10, 12}', '{1, 2, 3, 4, 5, 6, 7, 14}']),
  choice('m1ir', 'Q1(i) Range', 'For R = {(2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7)}, determine the range.', '{1, 2, 3, 4, 5, 6, 7}', ['{2, 4, 6, 8, 10, 12, 14}', '{1, 2, 3, 4, 5, 6}', '{2, 3, 4, 5, 6, 7}']),
  choice('m1ii', 'Q1(ii)', 'Is {(0, 0), (1, 1), (1, −1), (4, 2), (4, −2), (9, 3), (9, −3), (16, 4), (16, −4)} a function?', 'No, because some first components have two images', ['Yes, it is a function', 'No, because 0 is used', 'No, because the second components include negatives']),
  choice('m1iiis', 'Q1(iii) Function', 'Is {(1, 1), (3, 1), (5, 2)} a function?', 'Yes', ['No, because 1 is the image of two inputs', 'No, because 2 has no pre-image', 'No, because the domain has three elements']),
  choice('m1iiid', 'Q1(iii) Domain', 'For f = {(1, 1), (3, 1), (5, 2)}, determine the domain.', '{1, 3, 5}', ['{1, 2}', '{1, 2, 3, 5}', '{1, 1, 2}']),
  choice('m1iiir', 'Q1(iii) Range', 'For f = {(1, 1), (3, 1), (5, 2)}, determine the range.', '{1, 2}', ['{1, 3, 5}', '{1, 1, 2}', '{1, 2, 3, 5}']),
  choice('m2', 'Q2', 'For f(x) = 3x/5 + 2, x ∈ R, find f⁻¹(x).', '(5x − 10)/3', ['(3x − 2)/5', '5x/3 + 2', '(5x + 10)/3']),
  entry('m3a', 'Q3 f(−1)', 'A function is defined by f(x) = 4x + 5 for −4 ≤ x < 0. find f(−1).', 1),
  entry('m3b', 'Q3 f(−2)', 'A function is defined by f(x) = 4x + 5 for −4 ≤ x < 0. find f(−2).', -3),
  choice('m3c', 'Q3 f(0)', 'A function is defined by f(x) = 4x + 5 for −4 ≤ x < 0. What is f(0)?', 'It does not exist', ['5', '0', '−4']),
  entry('m4', 'Q4', 'A function is defined by f(x) = 5 − x for 0 ≤ x ≤ 4. Find x if f(x) = 3.', 2),
  choice('m5', 'Q5', 'If f(x) = 3x² − 5x + 7, find f(x − 1).', '3x² − 11x + 15', ['3x² − 5x + 3', '3x² − 8x + 7', '3x² − 11x + 9']),
  choice('m6', 'Q6', 'If f(x) = 3x + a and f(1) = 7, find a and f(4).', 'a = 4, f(4) = 16', ['a = 4, f(4) = 12', 'a = 3, f(4) = 16', 'a = 10, f(4) = 7']),
  choice('m7', 'Q7', 'If f(x) = ax² + bx + 2, f(1) = 3 and f(4) = 42, find a and b.', 'a = 3, b = −2', ['a = −2, b = 3', 'a = 2, b = −1', 'a = 3, b = 2']),
  choice('m8', 'Q8', 'If f(x) = (2x − 1)/(5x − 2), x ≠ 2/5, then (f ∘ f)(x) equals', 'x', ['1/x', '(2x + 1)/(5x + 2)', '0']),
  choice('m9', 'Q9', 'If f(x) = (x + 3)/(4x − 5) and g(x) = (3 + 5x)/(4x − 1), then (f ∘ g)(x) equals', 'x', ['1/x', 'x + 3', '4x − 1']),
];

export const activities2 = [
  choice('a21f', 'A2.1 f ∘ g', 'If f(x) = (x + 3)/(x − 2) and g(x) = (2x + 3)/(x − 1), find (f ∘ g)(x) with its domain.', 'x, x ≠ 1', ['x, x ≠ 2', '1/x, x ≠ 1', '(3x + 2)/(x − 1)']),
  choice('a21g', 'A2.1 g ∘ f', 'If f(x) = (x + 3)/(x − 2) and g(x) = (2x + 3)/(x − 1), find (g ∘ f)(x) with its domain.', 'x, x ≠ 2', ['x, x ≠ 1', '1/x, x ≠ 2', '(2x + 3)/(x − 2)']),
  choice('a21v', 'A2.1 Verification', 'For f(x) = (x + 3)/(x − 2) and g(x) = (2x + 3)/(x − 1), which conclusion is correct?', 'f ∘ g ≠ g ∘ f because their domains differ', ['f ∘ g = g ∘ f because both simplify to x', 'f ∘ g = 1 and g ∘ f = 0', 'Neither composite exists']),
  choice('a22p', 'A2.2 Ordered pairs', 'For f(n) = 3n² − 4n + 2, n ∈ {0, 1, 2, 3, 4}, select the set of ordered pairs.', '{(0, 2), (1, 1), (2, 6), (3, 17), (4, 34)}', ['{(0, 0), (1, 1), (2, 4), (3, 9), (4, 16)}', '{(0, 2), (1, 1), (2, 4), (3, 11), (4, 22)}', '{(2, 0), (1, 1), (6, 2), (17, 3), (34, 4)}']),
  choice('a22r', 'A2.2 Range', 'For f(n) = 3n² − 4n + 2, n ∈ {0, 1, 2, 3, 4}, determine the range.', '{1, 2, 6, 17, 34}', ['{0, 1, 2, 3, 4}', '{2, 1, 4, 11, 22}', '{2, 6, 17, 34}']),
  choice('a23i', 'A2.3 Inverse', 'If f(x) = 5x − 2, x ≥ 0, find f⁻¹(x).', '(x + 2)/5, x ≥ −2', ['(x − 2)/5, x ≥ 0', '5x + 2, x ≥ −2', '1/(5x − 2), x ≥ 0']),
  choice('a23v', 'A2.3 f⁻¹(7)', 'If f(x) = 5x − 2, x ≥ 0, find f⁻¹(7).', '9/5', ['1', '5/9', '7/5']),
  choice('a23z', 'A2.3 f(x) = 0', 'If f(x) = 5x − 2, x ≥ 0, for what value of x is f(x) = 0?', '2/5', ['−2/5', '5/2', '0']),
];
