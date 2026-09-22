// Part 1, Unit 1, Exercise 1.1. Each labelled textbook subpart is one app question.
const choice = (id, source, prompt, correct, wrong) => ({ id, source, type: 'choice', prompt, options: [correct, ...wrong], correct });
const entry = (id, source, prompt, correct) => ({ id, source, type: 'entry', prompt, correct: String(correct) });
const q3Sets = 'Let A = {x | 6x² + x − 15 = 0}, B = {x | 2x² − 5x − 3 = 0}, and C = {x | 2x² − x − 3 = 0}.';
const q5Sets = 'Given A = {1, 2, 3, 4}, B = {3, 4, 5, 6}, and C = {4, 5, 6, 7, 8}.';
const q5Universe = 'Let the universal set be X = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}.';
const q6Data = 'If n(X) = 50, n(A) = 35, n(B) = 20, and n(A′ ∩ B′) = 5.';
const q7Data = 'Out of 200 students, 35 failed MHT-CET, 40 failed AIEEE, 40 failed IIT, 20 failed MHT-CET and AIEEE, 17 failed AIEEE and IIT, 15 failed MHT-CET and IIT, and 5 failed all three.';
const q8Data = 'Of 2,000 people, 70% read Marathi newspapers, 50% read English newspapers, and 32.5% read both.';
const q10Data = 'Of 260 people with a skin disorder, 150 were exposed to chemical A, 74 to B, and 36 to both.';

export const exercise11 = [
  choice('q1i', 'Q1(i)', "Describe the following sets in Roster form\n{x/x is a letter of the word 'MARRIAGE'}", '{M, A, R, I, G, E}', ['{M, A, R, I, G}', '{M, A, R, I, E}', '{M, A, R, I, G, E, S}']),
  choice('q1ii', 'Q1(ii)', 'Describe the following sets in Roster form\n{x/x is an integer, −1/2 < x < 9/2}', '{0, 1, 2, 3, 4}', ['{−1, 0, 1, 2, 3, 4}', '{0, 1, 2, 3, 4, 5}', '{1, 2, 3, 4}']),
  choice('q1iii', 'Q1(iii)', 'Describe the following sets in Roster form\n{x/x = 2n, n ∈ N}', '{2, 4, 6, 8, …}', ['{0, 2, 4, 6, …}', '{1, 3, 5, 7, …}', '{2, 4, 6, 8}']),
  choice('q2i', 'Q2(i)', 'Which set-builder form represents {0}?\n(W is the set of whole numbers and N is the set of natural numbers.)', '{x / x ∈ W, x ∉ N}', ['{x | x ∈ W, x = 1}', '{x | x ∈ W, x < 2}', '{x | x ∈ Z, x < 1}']),
  choice('q2ii', 'Q2(ii)', 'Which set-builder form represents {0, ±1, ±2, ±3}?', '{x / −3 ≤ x ≤ 3, x ∈ Z}', ['{x | x ∈ Z, −3 < x < 3}', '{x | x ∈ N, −3 ≤ x ≤ 3}', '{x | x ∈ Z, −3 ≤ x < 3}']),
  choice('q2iii', 'Q2(iii)', 'Which set-builder form represents {1/2, 2/5, 3/10, 4/17, 5/26, 6/37, 7/50}?', '{x / x = n/(n² + 1), n ∈ N, n ≤ 7}', ['{x | x = n/(n² + 1), n ∈ N, n < 7}', '{x | x = n/(n + 1), n ∈ N, n ≤ 7}', '{x | x = n²/(n² + 1), n ∈ N, n ≤ 7}']),
  choice('q3i', 'Q3(i)', `${q3Sets}\nFind A ∪ B ∪ C.`, '{−5/3, −1, −1/2, 3/2, 3}', ['{−5/3, 3/2, 3}', '{−5/3, −1/2, 3/2, 3}', '{−5/3, −1, −1/2, 3/2}']),
  choice('q3ii', 'Q3(ii)', `${q3Sets}\nFind A ∩ B ∩ C.`, '{ }', ['{3/2}', '{3}', '{−1/2}']),
  choice('q4', 'Q4', 'Let A, B, and C be the sets of distinct letters in “college”, “marriage”, and “luggage”.\nWhat is A − (B ∪ C)?', '{c, o}', ['{o}', '{c, o, l}', '{c, o, g}']),
  choice('q5i', 'Q5(i)', `${q5Sets}\nEvaluate A ∪ (B ∩ C).`, '{1, 2, 3, 4, 5, 6}', ['{3, 4, 5, 6}', '{1, 2, 3, 4, 5, 6, 7, 8}', '{4, 5, 6}']),
  choice('q5ii', 'Q5(ii)', `${q5Sets}\nEvaluate A ∩ (B ∪ C).`, '{3, 4}', ['{4}', '{3, 4, 5, 6}', '{1, 2, 3, 4}']),
  choice('q5iii', 'Q5(iii)', `${q5Sets}\n${q5Universe}\nEvaluate (A ∪ B)′.`, '{7, 8, 9, 10}', ['{1, 2, 3, 4, 5, 6}', '{5, 6, 7, 8, 9, 10}', '{7, 8}']),
  choice('q5iv', 'Q5(iv)', `${q5Sets}\n${q5Universe}\nEvaluate (A ∩ B)′.`, '{1, 2, 5, 6, 7, 8, 9, 10}', ['{3, 4}', '{1, 2, 5, 6}', '{5, 6, 7, 8, 9, 10}']),
  choice('q5v', 'Q5(v)', `${q5Sets}\n${q5Universe}\nEvaluate (A ∩ B) ∪ (A ∩ B′).`, '{1, 2, 3, 4}', ['{3, 4}', '{1, 2}', '{1, 2, 3, 4, 5, 6}']),
  choice('q5vi', 'Q5(vi)', `${q5Sets}\n${q5Universe}\nEvaluate (A ∩ B) ∪ (A′ ∩ B).`, '{3, 4, 5, 6}', ['{3, 4}', '{5, 6}', '{1, 2, 3, 4, 5, 6}']),
  choice('q5vii', 'Q5(vii)', `${q5Sets}\nFind n(A ∪ B).`, '6', ['8', '4', '2']),
  entry('q6i', 'Q6(i)', `${q6Data}\nFind n(A ∪ B).`, 45),
  entry('q6ii', 'Q6(ii)', `${q6Data}\nFind n(A ∩ B).`, 10),
  entry('q6iii', 'Q6(iii)', `${q6Data}\nFind n(A′ ∩ B).`, 10),
  entry('q6iv', 'Q6(iv)', `${q6Data}\nFind n(A ∩ B′).`, 25),
  entry('q7i', 'Q7(i)', `${q7Data}\nHow many failed none?`, 132),
  entry('q7ii', 'Q7(ii)', `${q7Data}\nHow many failed AIEEE or IIT?`, 63),
  entry('q8i', 'Q8(i)', `${q8Data}\nHow many read at least one?`, 1750),
  entry('q8ii', 'Q8(ii)', `${q8Data}\nHow many read neither?`, 250),
  entry('q8iii', 'Q8(iii)', `${q8Data}\nHow many read exactly one of the two?`, 1100),
  entry('q9', 'Q9', 'In a hostel, 25 students take tea, 20 coffee, and 15 milk. Ten take both tea and coffee, eight take both milk and coffee, none take both tea and milk, and everyone takes at least one. How many students are in the hostel?', 42),
  entry('q10i', 'Q10(i)', `${q10Data}\nHow many were exposed to A but not B?`, 114),
  entry('q10ii', 'Q10(ii)', `${q10Data}\nHow many were exposed to B but not A?`, 38),
  entry('q10iii', 'Q10(iii)', `${q10Data}\nHow many were exposed to A or B?`, 188),
  choice('q11', 'Q11', 'If A={1,2,3}, which is the complete power set P(A)?', '{∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}', ['{{1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}', '{∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}}', '{∅, {1}, {2}, {3}, {1,2,3}}']),
  choice('q12i', 'Q12(i)', 'Write the interval [−3, 0] in set-builder form.', '{x / x ∈ R, −3 ≤ x ≤ 0}', ['{x ∈ R | −3 < x < 0}', '{x ∈ R | −3 ≤ x < 0}', '{x ∈ R | −3 < x ≤ 0}']),
  choice('q12ii', 'Q12(ii)', 'Write the interval [6, 12] in set-builder form.', '{x / x ∈ R, 6 ≤ x ≤ 12}', ['{x ∈ R | 6 < x < 12}', '{x ∈ R | 6 ≤ x < 12}', '{x ∈ R | 6 < x ≤ 12}']),
  choice('q12iii', 'Q12(iii)', 'Write the interval (6, 12] in set-builder form.', '{x / x ∈ R, 6 < x ≤ 12}', ['{x ∈ R | 6 ≤ x ≤ 12}', '{x ∈ R | 6 < x < 12}', '{x ∈ R | 6 ≤ x < 12}']),
  choice('q12iv', 'Q12(iv)', 'Write the interval [−23, 5) in set-builder form.', '{x / x ∈ R, −23 ≤ x < 5}', ['{x ∈ R | −23 < x < 5}', '{x ∈ R | −23 ≤ x ≤ 5}', '{x ∈ R | −23 < x ≤ 5}']),
];
// Part 1, Unit 1: theory from textbook pages 1–9 (before Exercise 1.1).
const mcq = (number, prompt, correct, wrong) => ({
  id: `th${number}`, source: `Theory Q${number}`, type: 'choice',
  prompt, options: [correct, ...wrong], correct,
});
const number = (index, prompt, correct) => ({
  id: `th${index}`, source: `Theory Q${index}`, type: 'entry',
  prompt, correct: String(correct),
});

export const theoryPages1to9 = [
  mcq(1, 'Which collection is a set?', 'Days in a week', ['Happy people in a town', 'Clever students in a class', 'Successful people in a city']),
  mcq(2, 'A set is a collection of objects that are:', 'Well-defined', ['Similar', 'Countable', 'Written in order']),
  mcq(3, 'If x is an element of A, which notation is correct?', 'x ∈ A', ['x ⊆ A', 'A ∈ x', 'x ∉ A']),
  mcq(4, 'In the Roster method, elements are:', 'Listed inside braces and separated by commas', ['Shown only in a diagram', 'Described by a property', 'Listed without brackets']),
  mcq(5, 'What is the set of letters in ABBA in Roster form?', '{A, B}', ['{A, B, B, A}', '{A, A, B, B}', '{AB, BA}']),
  mcq(6, 'Does changing the order of elements change a set?', 'No', ['Yes', 'Only for finite sets', 'Only for number sets']),
  mcq(7, 'The Set-Builder method describes elements by:', 'A property that determines them', ['Their order', 'A diagram', 'Their number alone']),
  mcq(8, 'A Venn diagram is a:', 'Pictorial representation of a set', ['List of every element', 'Formula for cardinality', 'Type of interval']),
  mcq(9, 'Which interval excludes both a and b?', '(a, b)', ['[a, b]', '[a, b)', '(a, b]']),
  mcq(10, 'Which interval includes both a and b?', '[a, b]', ['(a, b)', '[a, b)', '(a, b]']),
  mcq(11, 'Which interval includes a but excludes b?', '[a, b)', ['(a, b)', '(a, b]', '[a, b]']),
  mcq(12, 'Which interval excludes a but includes b?', '(a, b]', ['[a, b)', '[a, b]', '(a, b)']),
  mcq(13, 'n(A) means the number of:', 'Distinct elements in A', ['Sets equal to A', 'Subsets of A', 'Elements outside A']),
  mcq(14, 'A set with no element is called a:', 'Empty set', ['Singleton set', 'Universal set', 'Power set']),
  mcq(15, 'A set containing exactly one element is a:', 'Singleton set', ['Finite set only', 'Universal set', 'Proper subset']),
  mcq(16, 'Is the empty set finite?', 'Yes', ['No', 'Only when the universal set is finite', 'Only when it is written as { }']),
  mcq(17, 'Which is an infinite set?', 'Natural numbers', ['Vowels in English', 'Days in a week', 'Letters in “beautiful”']),
  mcq(18, 'Two sets are equal when they have:', 'The same elements', ['The same number of elements', 'The same order of elements', 'The same name']),
  mcq(19, 'Two finite sets are equivalent when they have:', 'The same number of elements', ['Exactly the same elements', 'No common elements', 'The same power set']),
  mcq(20, 'A ⊆ B means:', 'Every element of A is in B', ['Every element of B is in A', 'A and B have equal sizes', 'A is empty']),
  mcq(21, 'If A is a proper subset of B, then:', 'Every element of A is in B, and B has at least one element not in A', ['A = B', 'A has more elements than B', 'A and B are disjoint']),
  mcq(22, 'A universal set for a discussion contains:', 'Every set under consideration as a subset', ['Only natural numbers', 'Only one element', 'No elements']),
  mcq(23, 'The power set P(A) contains:', 'All subsets of A', ['Only the elements of A', 'Only proper subsets of A', 'Only the empty set']),
  mcq(24, 'Relative to universal set U, A′ contains:', 'Elements in U that are not in A', ['All elements of A', 'Elements common to A and U', 'Elements outside U']),
  mcq(25, 'Which identity is correct?', '(A′)′ = A', ['(A′)′ = ∅', '(A′)′ = U', '(A′)′ = P(A)']),
  mcq(26, 'A ∪ B contains elements in:', 'A or B, including those in both', ['Both A and B only', 'A but not B', 'Neither set']),
  mcq(27, 'A ∩ B contains elements in:', 'Both A and B', ['A or B', 'A but not B', 'Neither set']),
  mcq(28, 'If A ∩ B = ∅, the sets are:', 'Disjoint', ['Equal', 'Equivalent', 'Universal']),
  number(29, 'If A = {a, b, a, c}, enter n(A).', 3),
  number(30, 'If A = {p, q, r, s}, enter n(P(A)).', 16),
  number(31, 'If n(A) = 12, n(B) = 9, and n(A ∩ B) = 4, enter n(A ∪ B).', 17),
  number(32, 'If n(U) = 25 and n(A) = 8, enter n(A′).', 17),
  number(33, 'If n(A ∪ B) = 18, n(A) = 10, and n(B) = 12, enter n(A ∩ B).', 4),
  number(34, 'If n(A) = 10 and n(A ∩ B) = 3, enter n(A − B).', 7),
  number(35, 'If n(A) = 12, n(B) = 10, n(C) = 8, n(A ∩ B) = 5, n(B ∩ C) = 4, n(A ∩ C) = 3, and n(A ∩ B ∩ C) = 2, enter n(A ∪ B ∪ C).', 20),
];

// Part 1, Unit 1: theory from textbook pages 10–15, ending before Exercise 1.2.
const relationMcq = (number, prompt, correct, wrong) => ({
  id: `th10p${number}`, source: `Theory Q${number}`, type: 'choice',
  prompt, options: [correct, ...wrong], correct,
});
const relationEntry = (number, prompt, correct) => ({
  id: `th10p${number}`, source: `Theory Q${number}`, type: 'entry',
  prompt, correct: String(correct),
});

export const theoryPages10to15 = [
  relationMcq(1, 'In an ordered pair (a, b), why is the order important?', '(a, b) and (b, a) are generally different', ['The components must be equal', 'Only the second component is used', 'The components must be natural numbers']),
  relationMcq(2, 'In the ordered pair (a, b), a is called the:', 'First component', ['Second component', 'Image only', 'Co-domain']),
  relationMcq(3, 'Two ordered pairs (a, b) and (c, d) are equal if and only if:', 'a = c and b = d', ['a = d and b = c', 'a = b and c = d', 'a + b = c + d']),
  relationMcq(4, '(a, b) = (b, a) if and only if:', 'a = b', ['a ≠ b', 'a = 0', 'b = 0']),
  relationMcq(5, 'The Cartesian product A × B is the set of:', 'All ordered pairs (a, b) where a ∈ A and b ∈ B', ['All unordered pairs from A and B', 'Elements common to A and B', 'All subsets of A ∪ B']),
  relationMcq(6, 'How is the Cartesian product of A and B read?', 'A cross B', ['A union B', 'A intersection B', 'A related to B']),
  relationMcq(7, 'If A = {1, 2} and B = {a, b}, which ordered pair belongs to A × B?', '(2, b)', ['(a, 1)', '(b, 2)', '(a, b)']),
  relationMcq(8, 'If A = ∅ or B = ∅, then A × B is:', '∅', ['A', 'B', '{∅}']),
  relationMcq(9, 'For finite sets A and B, which formula is correct?', 'n(A × B) = n(A) × n(B)', ['n(A × B) = n(A) + n(B)', 'n(A × B) = n(A) − n(B)', 'n(A × B) = 2ⁿ⁽ᴬ⁾']),
  relationMcq(10, 'A relation R from a non-empty set A to a non-empty set B is:', 'Any subset of A × B', ['Always equal to A × B', 'Any subset of A ∪ B', 'A subset of B × A only']),
  relationMcq(11, 'If (x, y) ∈ R, the notation xRy is read as:', 'x is related to y under R', ['x is equal to y', 'x is a subset of y', 'x is the image of R']),
  relationMcq(12, 'If (x, y) ∈ R, then y is called the:', 'Image of x under R', ['Pre-image of x', 'Domain of R', 'First component of x']),
  relationMcq(13, 'If (x, y) ∈ R, then x is called the:', 'Pre-image of y under R', ['Image of y', 'Range of R', 'Second component of y']),
  relationMcq(14, 'The domain of a relation R is the set of all:', 'First components of ordered pairs in R', ['Second components of ordered pairs in R', 'Elements in the co-domain', 'Subsets of R']),
  relationMcq(15, 'If R is a relation from A to B, its co-domain is:', 'B', ['A', 'R', 'A × B']),
  relationMcq(16, 'The range of a relation R is the set of all:', 'Second components of ordered pairs in R', ['First components of ordered pairs in R', 'Elements of A × B not in R', 'Subsets of the domain']),
  relationMcq(17, 'A relation is one-one when:', 'Distinct elements in the domain have distinct images', ['Every element has the same image', 'The range is a proper subset of the co-domain', 'No element has an image']),
  relationMcq(18, 'A relation is many-one when:', 'Two or more domain elements have the same image', ['Every domain element has a distinct image', 'Every co-domain element has a pre-image', 'The domain and range are equal']),
  relationMcq(19, 'A relation from A to B is into when:', 'Its range is a proper subset of B', ['Its range is equal to B', 'Its domain is empty', 'It is equal to A × B']),
  relationMcq(20, 'A relation from A to B is onto when:', 'Every element of B is the image of some element of A', ['Every element of A has two images', 'Its range is a proper subset of B', 'Its domain and co-domain are disjoint']),
  relationMcq(21, 'A binary relation on a non-empty set A is:', 'Any subset of A × A', ['Any subset of A only', 'Only the empty set', 'Any subset of A × B where B ≠ A']),
  relationMcq(22, 'Which is the universal relation on A?', 'A × A', ['∅', 'A ∪ A', 'P(A)']),
  relationMcq(23, 'If n(A) = m and n(B) = n, the number of relations from A to B is:', '2ᵐⁿ', ['m × n', '2ᵐ + 2ⁿ', 'mⁿ']),
  relationMcq(24, 'A relation R on A is reflexive when:', '(a, a) ∈ R for every a ∈ A', ['(a, b) ∈ R implies (b, a) ∈ R', '(a, b) ∈ R and (b, c) ∈ R imply (a, c) ∈ R', 'No pair (a, a) belongs to R']),
  relationMcq(25, 'A relation R on A is symmetric when:', '(a, b) ∈ R implies (b, a) ∈ R', ['(a, a) ∈ R for every a ∈ A', '(a, b) ∈ R implies a = b', '(a, b) ∈ R and (b, c) ∈ R imply (a, c) ∈ R']),
  relationMcq(26, 'A relation R on A is transitive when:', '(a, b) ∈ R and (b, c) ∈ R imply (a, c) ∈ R', ['(a, b) ∈ R implies (b, a) ∈ R', '(a, a) ∈ R for every a ∈ A', 'Every element has exactly one image']),
  relationMcq(27, 'An equivalence relation is:', 'Reflexive, symmetric, and transitive', ['Only reflexive and symmetric', 'Only symmetric and transitive', 'One-one and onto']),
  relationMcq(28, 'For arbitrary non-empty sets A and B, which statement is generally true?', 'A × B ≠ B × A', ['A × B = B × A always', 'A × B = A ∩ B', 'A × B = A ∪ B']),
  relationEntry(29, 'If n(A) = 4 and n(B) = 3, enter n(A × B).', 12),
  relationEntry(30, 'If n(A) = 2 and n(B) = 3, enter the total number of relations from A to B.', 64),
  relationEntry(31, 'For A = {1, 2, 3, 4, 5, 6} and R = {(x, y) / y = x + 1}, enter n(R).', 5),
  relationEntry(32, 'If (x + 3, 2) = (4, y − 3), enter x.', 1),
  relationEntry(33, 'If (x + 3, 2) = (4, y − 3), enter y.', 5),
  relationEntry(34, 'For R = {(1, 4), (1, 5), (2, 4), (2, 5), (3, 4), (3, 5), (4, 5)}, enter n(Domain(R)).', 4),
  relationEntry(35, 'For R = {(1, 4), (1, 5), (2, 4), (2, 5), (3, 4), (3, 5), (4, 5)}, enter n(Range(R)).', 2),
];

// Part 1, Unit 1, Exercise 1.2. Set-valued answers are presented as MCQs.
const ex12Choice = (id, source, prompt, correct, wrong) => ({ id: `ex12${id}`, source, type: 'choice', prompt, options: [correct, ...wrong], correct });
const ex12Q5Sets = 'Let A = {1, 2, 3, 4}, B = {4, 5, 6}, and C = {5, 6}.';
const ex12Q7iiRelation = '{(a, b) / a, b ∈ N, a + b = 12}';

export const exercise12 = [
  ex12Choice('q1', 'Q1', 'If (x − 1, y + 4) = (1, 2), find the values of x and y.', 'x = 2, y = −2', ['x = 0, y = 6', 'x = 2, y = 6', 'x = 0, y = −2']),
  ex12Choice('q2', 'Q2', 'If (x + 1/3, y/3 − 1) = (1/3, 3/2), find x and y.', 'x = 0, y = 15/2', ['x = 2/3, y = 15/2', 'x = 0, y = 5/2', 'x = 2/3, y = 5/2']),
  ex12Choice('q3i', 'Q3(i)', 'If A = {a, b, c} and B = {x, y}, find A × B.', '{(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}', ['{(x, a), (x, b), (x, c), (y, a), (y, b), (y, c)}', '{(a, a), (a, b), (a, c), (b, a), (b, b), (b, c), (c, a), (c, b), (c, c)}', '{(x, x), (x, y), (y, x), (y, y)}']),
  ex12Choice('q3ii', 'Q3(ii)', 'If A = {a, b, c} and B = {x, y}, find B × A.', '{(x, a), (x, b), (x, c), (y, a), (y, b), (y, c)}', ['{(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}', '{(x, x), (x, y), (y, x), (y, y)}', '{(a, a), (b, b), (c, c)}']),
  ex12Choice('q3iii', 'Q3(iii)', 'If A = {a, b, c} and B = {x, y}, find A × A.', '{(a, a), (a, b), (a, c), (b, a), (b, b), (b, c), (c, a), (c, b), (c, c)}', ['{(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}', '{(a, a), (b, b), (c, c)}', '{(a, b), (a, c), (b, a), (b, c), (c, a), (c, b)}']),
  ex12Choice('q3iv', 'Q3(iv)', 'If A = {a, b, c} and B = {x, y}, find B × B.', '{(x, x), (x, y), (y, x), (y, y)}', ['{(x, y), (y, x)}', '{(x, x), (y, y)}', '{(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}']),
  ex12Choice('q4i', 'Q4(i)', 'If P = {1, 2, 3} and Q = {6, 4}, find P × Q.', '{(1, 6), (2, 6), (3, 6), (1, 4), (2, 4), (3, 4)}', ['{(6, 1), (6, 2), (6, 3), (4, 1), (4, 2), (4, 3)}', '{(1, 6), (2, 6), (3, 6)}', '{(1, 4), (2, 4), (3, 4)}']),
  ex12Choice('q4ii', 'Q4(ii)', 'If P = {1, 2, 3} and Q = {6, 4}, find Q × P.', '{(6, 1), (6, 2), (6, 3), (4, 1), (4, 2), (4, 3)}', ['{(1, 6), (2, 6), (3, 6), (1, 4), (2, 4), (3, 4)}', '{(6, 1), (6, 2), (6, 3)}', '{(4, 1), (4, 2), (4, 3)}']),
  ex12Choice('q5i', 'Q5(i)', `${ex12Q5Sets}\nFind A × (B ∩ C).`, '{(1, 5), (1, 6), (2, 5), (2, 6), (3, 5), (3, 6), (4, 5), (4, 6)}', ['{(1, 4), (2, 4), (3, 4), (4, 4)}', '{(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6), (4, 4), (4, 5), (4, 6)}', '{(4, 5), (4, 6)}']),
  ex12Choice('q5ii', 'Q5(ii)', `${ex12Q5Sets}\nFind (A × B) ∩ (A × C).`, '{(1, 5), (1, 6), (2, 5), (2, 6), (3, 5), (3, 6), (4, 5), (4, 6)}', ['{(1, 4), (2, 4), (3, 4), (4, 4)}', '{(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6), (4, 4), (4, 5), (4, 6)}', '{(4, 4), (4, 5), (4, 6)}']),
  ex12Choice('q5iii', 'Q5(iii)', `${ex12Q5Sets}\nFind A × (B ∪ C).`, '{(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6), (4, 4), (4, 5), (4, 6)}', ['{(1, 5), (1, 6), (2, 5), (2, 6), (3, 5), (3, 6), (4, 5), (4, 6)}', '{(1, 4), (2, 4), (3, 4), (4, 4)}', '{(4, 4), (4, 5), (4, 6)}']),
  ex12Choice('q5iv', 'Q5(iv)', `${ex12Q5Sets}\nFind (A × B) ∪ (A × C).`, '{(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6), (4, 4), (4, 5), (4, 6)}', ['{(1, 5), (1, 6), (2, 5), (2, 6), (3, 5), (3, 6), (4, 5), (4, 6)}', '{(1, 4), (2, 4), (3, 4), (4, 4)}', '{(4, 4), (4, 5), (4, 6)}']),
  ex12Choice('q6', 'Q6', 'Express {(x, y) / x² + y² = 100 where x, y ∈ W} as a set of ordered pairs.', '{(0, 10), (6, 8), (8, 6), (10, 0)}', ['{(6, 8), (8, 6)}', '{(0, 10), (10, 0)}', '{(0, 10), (6, 8), (8, 6), (10, 0), (10, 10)}']),
  ex12Choice('q7id', 'Q7(i) Domain', 'Write the domain of the following relation.\n{(a, b) / a ∈ N, a < 6 and b = 4}', '{1, 2, 3, 4, 5}', ['{0, 1, 2, 3, 4, 5}', '{1, 2, 3, 4, 5, 6}', '{4}']),
  ex12Choice('q7ir', 'Q7(i) Range', 'Write the range of the following relation.\n{(a, b) / a ∈ N, a < 6 and b = 4}', '{4}', ['{1, 2, 3, 4, 5}', '{1, 2, 3, 4}', '{1, 2, 3, 4, 5, 6}']),
  ex12Choice('q7iid', 'Q7(ii) Domain', `Write the domain of the following relation.\n${ex12Q7iiRelation}`, '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}', ['{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}', '{1, 2, 3, 4, 5, 6}', '{2, 3, 4, 5, 6, 7, 8, 9, 10}']),
  ex12Choice('q7iir', 'Q7(ii) Range', `Write the range of the following relation.\n${ex12Q7iiRelation}`, '{11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1}', ['{12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1}', '{1, 2, 3, 4, 5, 6}', '{10, 9, 8, 7, 6, 5, 4, 3, 2}']),
  ex12Choice('q7iiid', 'Q7(iii) Domain', 'Write the domain of the following relation.\n{(2, 4), (2, 5), (2, 6), (2, 7)}', '{2}', ['{4, 5, 6, 7}', '{2, 4, 5, 6, 7}', '{2, 2, 2, 2}']),
  ex12Choice('q7iiir', 'Q7(iii) Range', 'Write the range of the following relation.\n{(2, 4), (2, 5), (2, 6), (2, 7)}', '{4, 5, 6, 7}', ['{2}', '{2, 4, 5, 6, 7}', '{4, 5, 6}']),
  ex12Choice('q8', 'Q8', 'Let A = {6, 8} and B = {1, 3, 5}.\nLet R = {(a, b) / a ∈ A, b ∈ B, a − b is an even number}.\nWhich set shows that R is an empty relation from A to B?', 'R = { }', ['R = {(6, 1), (6, 3), (6, 5)}', 'R = {(8, 1), (8, 3), (8, 5)}', 'R = {(6, 1), (8, 3)}']),
  ex12Choice('q9ir', 'Q9(i) Roster form', 'Write the relation in the Roster form.\nR₁ = {(a, a²) / a is prime number less than 15}', 'R₁ = {(2, 4), (3, 9), (5, 25), (7, 49), (11, 121), (13, 169)}', ['R₁ = {(2, 4), (3, 9), (5, 25), (7, 49), (11, 121)}', 'R₁ = {(1, 1), (2, 4), (3, 9), (5, 25), (7, 49), (11, 121), (13, 169)}', 'R₁ = {(2, 2), (3, 3), (5, 5), (7, 7), (11, 11), (13, 13)}']),
  ex12Choice('q9id', 'Q9(i) Domain', 'Find the domain of the following relation.\nR₁ = {(a, a²) / a is prime number less than 15}', '{2, 3, 5, 7, 11, 13}', ['{1, 2, 3, 5, 7, 11, 13}', '{4, 9, 25, 49, 121, 169}', '{2, 3, 5, 7, 11}']),
  ex12Choice('q9irg', 'Q9(i) Range', 'Find the range of the following relation.\nR₁ = {(a, a²) / a is prime number less than 15}', '{4, 9, 25, 49, 121, 169}', ['{2, 3, 5, 7, 11, 13}', '{1, 4, 9, 25, 49, 121, 169}', '{4, 9, 25, 49, 121}']),
  ex12Choice('q9iir', 'Q9(ii) Roster form', 'Write the relation in the Roster form.\nR₂ = {(a, 1/a) / 0 < a ≤ 5, a ∈ N}', 'R₂ = {(1, 1), (2, 1/2), (3, 1/3), (4, 1/4), (5, 1/5)}', ['R₂ = {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)}', 'R₂ = {(1, 1), (2, 1/2), (3, 1/3), (4, 1/4)}', 'R₂ = {(0, 0), (1, 1), (2, 1/2), (3, 1/3), (4, 1/4), (5, 1/5)}']),
  ex12Choice('q9iid', 'Q9(ii) Domain', 'Find the domain of the following relation.\nR₂ = {(a, 1/a) / 0 < a ≤ 5, a ∈ N}', '{1, 2, 3, 4, 5}', ['{0, 1, 2, 3, 4, 5}', '{1, 1/2, 1/3, 1/4, 1/5}', '{1, 2, 3, 4}']),
  ex12Choice('q9iirg', 'Q9(ii) Range', 'Find the range of the following relation.\nR₂ = {(a, 1/a) / 0 < a ≤ 5, a ∈ N}', '{1, 1/2, 1/3, 1/4, 1/5}', ['{1, 2, 3, 4, 5}', '{1/2, 1/3, 1/4, 1/5}', '{0, 1, 1/2, 1/3, 1/4, 1/5}']),
  ex12Choice('q10', 'Q10', 'R = {(a, b) / b = a + 1, a ∈ Z, 0 < a < 5}\nFind the Range of R.', '{2, 3, 4, 5}', ['{1, 2, 3, 4}', '{1, 2, 3, 4, 5}', '{2, 3, 4}']),
  ex12Choice('q11i', 'Q11(i)', 'Find the following relation as a set of ordered pairs.\n{(x, y) / y = 3x, x ∈ {1, 2, 3}, y ∈ {3, 6, 9, 12}}', '{(1, 3), (2, 6), (3, 9)}', ['{(1, 3), (2, 6), (3, 9), (4, 12)}', '{(3, 1), (6, 2), (9, 3)}', '{(1, 3), (2, 6), (3, 12)}']),
  ex12Choice('q11ii', 'Q11(ii)', 'Find the following relation as a set of ordered pairs.\n{(x, y) / y > x + 1, x ∈ {1, 2} and y ∈ {2, 4, 6}}', '{(1, 4), (1, 6), (2, 4), (2, 6)}', ['{(1, 2), (1, 4), (1, 6), (2, 4), (2, 6)}', '{(1, 4), (2, 6)}', '{(1, 2), (2, 4)}']),
  ex12Choice('q11iii', 'Q11(iii)', 'Find the following relation as a set of ordered pairs.\n{(x, y) / x + y = 3, x, y ∈ {0, 1, 2, 3}}', '{(0, 3), (1, 2), (2, 1), (3, 0)}', ['{(1, 2), (2, 1)}', '{(0, 3), (1, 2), (2, 1)}', '{(0, 3), (1, 2), (2, 1), (3, 0), (3, 3)}']),
];

// Part 1, Unit 1, Miscellaneous Exercise 1, followed by MCQs from Activities 1.1–1.6.
const misc1Choice = (id, source, prompt, correct, wrong) => ({ id: `misc1${id}`, source, type: 'choice', prompt, options: [correct, ...wrong], correct });
const misc1Entry = (id, source, prompt, correct) => ({ id: `misc1${id}`, source, type: 'entry', prompt, correct: String(correct) });
const misc1Q2Sets = 'If U = {x / x ∈ N, 1 ≤ x ≤ 12}, A = {1, 4, 7, 10}, B = {2, 4, 6, 7, 11}, and C = {3, 5, 8, 9, 12}.';
const misc1Q5Sets = 'If A = {1, 2, 3} and B = {2, 4}.';

export const miscellaneousExercise1 = [
  misc1Choice('q1i', 'Q1(i)', 'Write the following set in set builder form.\n{10, 20, 30, 40, 50}', '{x / x = 10n, n ∈ N, n ≤ 5}', ['{x / x = 10n, n ∈ W, n < 5}', '{x / x = 5n, n ∈ N, n ≤ 10}', '{x / x = 10n, n ∈ N, n < 5}']),
  misc1Choice('q1ii', 'Q1(ii)', 'Write the following set in set builder form.\n{a, e, i, o, u}', '{x / x is vowel of English alphabets}', ['{x / x is consonant of English alphabets}', '{x / x is a letter of the word “vowel”}', '{x / x is an English alphabet}']),
  misc1Choice('q1iii', 'Q1(iii)', 'Write the following set in set builder form.\n{Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}', '{x / x represents day of a week}', ['{x / x represents working day of a week}', '{x / x represents month of a year}', '{x / x represents weekend day}']),
  misc1Choice('q2i', 'Q2(i)', `${misc1Q2Sets}\nWrite A ∪ B.`, '{1, 2, 4, 6, 7, 10, 11}', ['{4, 7}', '{1, 10}', '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}']),
  misc1Choice('q2ii', 'Q2(ii)', `${misc1Q2Sets}\nWrite B ∩ C.`, '{ }', ['{3, 5, 8, 9, 12}', '{2, 4, 6, 7, 11}', '{4, 7}']),
  misc1Choice('q2iii', 'Q2(iii)', `${misc1Q2Sets}\nWrite A − B.`, '{1, 10}', ['{2, 6, 11}', '{4, 7}', '{1, 2, 6, 10, 11}']),
  misc1Choice('q2iv', 'Q2(iv)', `${misc1Q2Sets}\nWrite B − C.`, '{2, 4, 6, 7, 11}', ['{ }', '{3, 5, 8, 9, 12}', '{2, 4, 6, 7, 11, 12}']),
  misc1Choice('q2v', 'Q2(v)', `${misc1Q2Sets}\nWrite A ∪ B ∪ C.`, '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}', ['{1, 2, 4, 6, 7, 10, 11}', '{3, 4, 5, 7, 8, 9, 12}', '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}']),
  misc1Choice('q2vi', 'Q2(vi)', `${misc1Q2Sets}\nWrite A ∩ (B ∪ C).`, '{4, 7}', ['{ }', '{1, 4, 7, 10}', '{1, 10}']),
  misc1Entry('q3', 'Q3', 'In a survey of 425 students in a school, it was found that 115 drink apple juice, 160 drink orange juice and 80 drink both apple as well as orange juice.\nHow many drink neither apple juice nor orange juice?', 230),
  misc1Entry('q4', 'Q4', 'In a school there are 20 teachers who teach Mathematics or Physics, of these, 12 teach Mathematics and 4 teach both Physics and Mathematics.\nHow many teachers teach Physics?', 12),
  misc1Choice('q5iaa', 'Q5(i) A × A', `${misc1Q5Sets}\nState the elements of A × A.`, '{(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3)}', ['{(1, 2), (1, 4), (2, 2), (2, 4), (3, 2), (3, 4)}', '{(1, 1), (2, 2), (3, 3)}', '{(1, 2), (2, 1), (2, 3), (3, 2)}']),
  misc1Choice('q5iab', 'Q5(i) A × B', `${misc1Q5Sets}\nState the elements of A × B.`, '{(1, 2), (1, 4), (2, 2), (2, 4), (3, 2), (3, 4)}', ['{(2, 1), (2, 2), (2, 3), (4, 1), (4, 2), (4, 3)}', '{(1, 2), (2, 2), (3, 2)}', '{(1, 4), (2, 4), (3, 4)}']),
  misc1Choice('q5iba', 'Q5(i) B × A', `${misc1Q5Sets}\nState the elements of B × A.`, '{(2, 1), (2, 2), (2, 3), (4, 1), (4, 2), (4, 3)}', ['{(1, 2), (1, 4), (2, 2), (2, 4), (3, 2), (3, 4)}', '{(2, 1), (2, 2), (2, 3)}', '{(4, 1), (4, 2), (4, 3)}']),
  misc1Choice('q5ibb', 'Q5(i) B × B', `${misc1Q5Sets}\nState the elements of B × B.`, '{(2, 2), (2, 4), (4, 2), (4, 4)}', ['{(2, 4), (4, 2)}', '{(2, 2), (4, 4)}', '{(1, 2), (1, 4), (2, 2), (2, 4), (3, 2), (3, 4)}']),
  misc1Choice('q5ix', 'Q5(i) Intersection', `${misc1Q5Sets}\nFind (A × B) ∩ (B × A).`, '{(2, 2)}', ['{(1, 2), (2, 1)}', '{(2, 4), (4, 2)}', '{ }']),
  misc1Choice('q5ii', 'Q5(ii)', 'If A = {−1, 1}, find A × A × A.', '{(−1, −1, −1), (−1, −1, 1), (−1, 1, −1), (−1, 1, 1), (1, −1, −1), (1, −1, 1), (1, 1, −1), (1, 1, 1)}', ['{(−1, −1), (−1, 1), (1, −1), (1, 1)}', '{(−1, −1, −1), (−1, 1, 1), (1, −1, 1), (1, 1, −1)}', '{(−1, −1, −1), (1, 1, 1)}']),
  misc1Choice('q6i', 'Q6(i)', 'If A = {1, 2, 3} and B = {4, 5, 6}, consider R₁ = {(1, 4), (1, 5), (1, 6)}.\nWhich statement is correct?', 'R₁ is a relation from A to B', ['R₁ is not a relation because 2 and 3 have no images', 'R₁ is not a relation because 1 has three images', 'R₁ is a relation from B to A']),
  misc1Choice('q6ii', 'Q6(ii)', 'If A = {1, 2, 3} and B = {4, 5, 6}, consider R₂ = {(1, 5), (2, 4), (3, 6)}.\nWhich statement is correct?', 'R₂ is a relation from A to B', ['R₂ is not a relation because the pairs are not in A × B', 'R₂ is a relation from B to A', 'R₂ is not a relation because each first component is different']),
  misc1Choice('q6iii', 'Q6(iii)', 'If A = {1, 2, 3} and B = {4, 5, 6}, consider R₃ = {(1, 4), (1, 5), (3, 6), (2, 6), (3, 4)}.\nWhich statement is correct?', 'R₃ is a relation from A to B', ['R₃ is not a relation because some first components repeat', 'R₃ is a relation from B to A', 'R₃ is not a relation because 2 and 3 have the same image']),
  misc1Choice('q6iv', 'Q6(iv)', 'If A = {1, 2, 3} and B = {4, 5, 6}, consider R₄ = {(4, 2), (2, 6), (5, 1), (2, 4)}.\nWhich statement is correct?', 'R₄ is not a relation from A to B', ['R₄ is a relation from A to B', 'R₄ is empty relation from A to B', 'R₄ is the universal relation from A to B']),
  misc1Choice('q7d', 'Q7 Domain', 'Determine the domain of the following relation.\nR = {(a, b) / a ∈ N, a < 5, b = 4}', '{1, 2, 3, 4}', ['{0, 1, 2, 3, 4}', '{4}', '{1, 2, 3, 4, 5}']),
  misc1Choice('q7r', 'Q7 Range', 'Determine the range of the following relation.\nR = {(a, b) / a ∈ N, a < 5, b = 4}', '{4}', ['{1, 2, 3, 4}', '{0, 1, 2, 3, 4}', '{1, 2, 3, 4, 5}']),
  misc1Choice('a11', 'A1.1', 'Let X = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {1, 2, 3}, and B = {3, 4}.\nFind (A ∪ B)′.', '{5, 6, 7, 8, 9, 10}', ['{1, 2, 3, 4}', '{3}', '{1, 2, 4, 5, 6, 7, 8, 9, 10}']),
  misc1Choice('a12', 'A1.2', 'Let A and B be nonempty subsets of a universal set.\nWhich condition makes A ∪ B = A ∩ B?', 'A = B', ['A ∩ B = { }', 'A ⊂ B only', 'B ⊂ A only']),
  misc1Choice('a13', 'A1.3', 'Let A = {1, 2} and B = {a, b, c}. Which statement is correct?', 'A × B ≠ B × A, but n(A × B) = n(B × A)', ['A × B = B × A, but n(A × B) ≠ n(B × A)', 'A × B = A ∪ B', 'n(A × B) = n(A) + n(B)']),
  misc1Choice('a14', 'A1.4', 'What conclusion will you draw about two sets A and B if A ⊆ B and B ⊆ A?', 'A = B', ['A ∩ B = { }', 'A is a proper subset of B', 'B is a proper subset of A']),
  misc1Choice('a15', 'A1.5', 'If A = {−1/2, 2/3}, which set builder form represents A?', '{x / 6x² − x − 2 = 0}', ['{x / 6x² + x − 2 = 0}', '{x / 6x² − x + 2 = 0}', '{x / 3x² − x − 2 = 0}']),
  misc1Choice('a16d', 'A1.6 Domain', 'For the relation R = {(1, 5), (2, 6), (3, 7), (4, 8)}, write the domain.', '{1, 2, 3, 4}', ['{5, 6, 7, 8}', '{1, 2, 3, 4, 5, 6, 7, 8}', '{1, 5}']),
  misc1Choice('a16r', 'A1.6 Range', 'For the relation R = {(1, 5), (2, 6), (3, 7), (4, 8)}, write the range.', '{5, 6, 7, 8}', ['{1, 2, 3, 4}', '{1, 2, 3, 4, 5, 6, 7, 8}', '{4, 8}']),
  misc1Choice('a17i', 'A1.7(i)', 'Write the following set in Roster form.\nA − set of all factors of 24.', 'A = {1, 2, 3, 4, 6, 8, 12, 24}', ['A = {1, 2, 3, 4, 6, 8, 12}', 'A = {2, 3, 4, 6, 8, 12, 24}', 'A = {1, 2, 3, 4, 6, 8, 12, 24, 48}']),
  misc1Choice('a17ii', 'A1.7(ii)', 'Write the following set in Roster form.\nB − set of all prime numbers less than 30.', 'B = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29}', ['B = {1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29}', 'B = {2, 3, 5, 7, 11, 13, 17, 19, 23}', 'B = {2, 3, 5, 7, 9, 11, 13, 17, 19, 23, 29}']),
  misc1Choice('a17iii', 'A1.7(iii)', 'Write the following set in Roster form.\nC − set of all letters in the word “MATHEMATICS”.', 'C = {M, A, T, H, E, I, C, S}', ['C = {M, A, T, H, E, I, C}', 'C = {M, A, T, H, E, I, C, S, M}', 'C = {M, A, T, H, E, I, S}']),
  misc1Entry('a18', 'A1.8', 'In a survey of 400 students, it was found that 150 drink milk, 250 drink Tea, and 50 drink both.\nHow many drink neither Tea nor milk?', 50),
  misc1Choice('a19u', 'A1.9 Union', 'A = {1/(3x) / x ∈ N and x < 8}\nB = {1/(2x) / x ∈ N and x < 8}\nFind A ∪ B.', '{1/2, 1/3, 1/4, 1/6, 1/8, 1/9, 1/10, 1/12, 1/14, 1/15, 1/18, 1/21}', ['{1/6, 1/12}', '{1/3, 1/9, 1/15, 1/18, 1/21}', '{1/2, 1/4, 1/8, 1/10, 1/14}']),
  misc1Choice('a19i', 'A1.9 Intersection', 'A = {1/(3x) / x ∈ N and x < 8}\nB = {1/(2x) / x ∈ N and x < 8}\nFind A ∩ B.', '{1/6, 1/12}', ['{1/3, 1/6, 1/9, 1/12}', '{1/2, 1/4, 1/6, 1/8}', '{ }']),
  misc1Choice('a19ab', 'A1.9 A − B', 'A = {1/(3x) / x ∈ N and x < 8}\nB = {1/(2x) / x ∈ N and x < 8}\nFind A − B.', '{1/3, 1/9, 1/15, 1/18, 1/21}', ['{1/2, 1/4, 1/8, 1/10, 1/14}', '{1/6, 1/12}', '{1/3, 1/6, 1/9, 1/12, 1/15, 1/18, 1/21}']),
  misc1Choice('a19ba', 'A1.9 B − A', 'A = {1/(3x) / x ∈ N and x < 8}\nB = {1/(2x) / x ∈ N and x < 8}\nFind B − A.', '{1/2, 1/4, 1/8, 1/10, 1/14}', ['{1/3, 1/9, 1/15, 1/18, 1/21}', '{1/6, 1/12}', '{1/2, 1/4, 1/6, 1/8, 1/10, 1/12, 1/14}']),
  misc1Choice('a110c', 'A1.10 Complements', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nFind A′ and B′.', 'A′ = {6, 7, 8}, B′ = {1, 2, 3}', ['A′ = {1, 2, 3}, B′ = {6, 7, 8}', 'A′ = {4, 5}, B′ = {4, 5}', 'A′ = {6, 7, 8}, B′ = {1, 2, 3, 4, 5}']),
  misc1Choice('a110i', 'A1.10 Intersection', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nFind A ∩ B and n(A ∩ B).', 'A ∩ B = {4, 5}, n(A ∩ B) = 2', ['A ∩ B = {1, 2, 3}, n(A ∩ B) = 3', 'A ∩ B = {6, 7, 8}, n(A ∩ B) = 3', 'A ∩ B = {1, 2, 3, 4, 5, 6, 7, 8}, n(A ∩ B) = 8']),
  misc1Choice('a110ab', 'A1.10 A − B', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nFind A − B and n(A − B).', 'A − B = {1, 2, 3}, n(A − B) = 3', ['A − B = {4, 5}, n(A − B) = 2', 'A − B = {6, 7, 8}, n(A − B) = 3', 'A − B = {1, 2, 3, 4, 5}, n(A − B) = 5']),
  misc1Choice('a110ba', 'A1.10 B − A', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nFind B − A and n(B − A).', 'B − A = {6, 7, 8}, n(B − A) = 3', ['B − A = {1, 2, 3}, n(B − A) = 3', 'B − A = {4, 5}, n(B − A) = 2', 'B − A = {4, 5, 6, 7, 8}, n(B − A) = 5']),
  misc1Choice('a110u', 'A1.10 Union', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nFind A ∪ B and n(A ∪ B).', 'A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8}, n(A ∪ B) = 8', ['A ∪ B = {4, 5}, n(A ∪ B) = 2', 'A ∪ B = {1, 2, 3, 6, 7, 8}, n(A ∪ B) = 6', 'A ∪ B = {1, 2, 3, 4, 5}, n(A ∪ B) = 5']),
  misc1Choice('a110n', 'A1.10(i)', 'If n(A − B) = 3, n(A ∩ B) = 2, and n(B − A) = 3, find n(A − B) + n(A ∩ B) + n(B − A).', '8', ['5', '6', '9']),
  misc1Choice('a110ii', 'A1.10(ii)', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nComplete A ∩ B′ = A − B.', 'A ∩ B′ = {1, 2, 3}', ['A ∩ B′ = {4, 5}', 'A ∩ B′ = {6, 7, 8}', 'A ∩ B′ = {1, 2, 3, 4, 5}']),
  misc1Choice('a110iii', 'A1.10(iii)', 'U = {1, 2, 3, 4, 5, 6, 7, 8}\nA = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}.\nComplete A′ ∩ B = B − A.', 'A′ ∩ B = {6, 7, 8}', ['A′ ∩ B = {1, 2, 3}', 'A′ ∩ B = {4, 5}', 'A′ ∩ B = {4, 5, 6, 7, 8}']),
];

