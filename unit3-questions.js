const choice = (id, source, prompt, correct, wrong) => ({ id: `u3${id}`, source, type: 'choice', prompt, options: [correct, ...wrong], correct });
const entry = (id, source, prompt, correct) => ({ id: `u3${id}`, source, type: 'entry', prompt, correct: String(correct) });
const C = (prefix, rows) => rows.map((row, index) => choice(`${prefix}${index + 1}`, ...row));

export const theoryPages33to37 = C('ta', [
  ['Theory P33', 'The symbol i is introduced so that', 'i = √{−1} and i² = −1', ['i = −1', 'i² = 1', 'i = √{1}']],
  ['Theory P33', 'The symbol i is called', 'an imaginary unit', ['a real unit', 'a rational unit', 'a natural unit']],
  ['Theory P33', 'A number of the form ki, where k ∈ R, k ≠ 0 and i = √{−1}, is called', 'an imaginary number', ['a natural number', 'a rational number', 'a real number']],
  ['Theory P33', 'Write √{−25} using i', '5i', ['−5i', '25i', '5']],
  ['Let’s Note P33', 'For a ∈ R, √{−a²} equals', '±ia', ['a', '−a', 'i²a']],
  ['Let’s Note P33', 'If a, b ∈ R and ai = bi, then', 'a = b', ['a = −b', 'a + b = 0 always', 'ab = 1']],
  ['Theory P33', 'A number of the form a + ib, where a, b ∈ R, is called', 'a complex number', ['an irrational number', 'a natural number', 'a whole number']],
  ['Theory P33', 'The set of complex numbers is denoted by', 'C', ['R', 'I', 'N']],
  ['Theory P33', 'For z = a + ib, Re(z) equals', 'a', ['b', 'ib', 'a + b']],
  ['Theory P33', 'For z = a + ib, Im(z) equals', 'b', ['a', 'ib', 'a + b']],
  ['Example P33', 'For z = 2 + 4i, select Re(z) and Im(z)', 'Re(z) = 2, Im(z) = 4', ['Re(z) = 4, Im(z) = 2', 'Re(z) = 2, Im(z) = 4i', 'Re(z) = 0, Im(z) = 4']],
  ['Example P33', 'Write 5 + √{−16} in the form a + ib', '5 + 4i', ['5 − 4i', '9i', '5 + 16i']],
  ['Example P33', 'For z = 7 + √{3}, select Re(z) and Im(z)', 'Re(z) = 7 + √{3}, Im(z) = 0', ['Re(z) = 7, Im(z) = √{3}', 'Re(z) = 7 + √{3}, Im(z) = 1', 'Re(z) = 0, Im(z) = 7 + √{3}']],
  ['Let’s Note P34', 'A complex number whose real part is zero is', 'an imaginary number', ['a real number', 'always zero', 'a natural number']],
  ['Let’s Note P34', 'A complex number whose imaginary part is zero is', 'a real number', ['an imaginary number', 'not a complex number', 'always non-real']],
  ['Let’s Note P34', 'The zero complex number is written as', '0 + 0i', ['1 + 0i', '0 + i', 'i + i']],
  ['Let’s Note P34', 'Which inclusion is correct?', 'R ⊂ C', ['C ⊂ R', 'R = C', 'R ∩ C = ∅']],
  ['Theory P34', 'The conjugate of z = a + ib is', 'z̄ = a − ib', ['z̄ = −a + ib', 'z̄ = b + ia', 'z̄ = a + ib']],
  ['Example P34', 'Find the conjugate of 3 + 4i', '3 − 4i', ['−3 + 4i', '−3 − 4i', '4 − 3i']],
  ['Example P34', 'Find the conjugate of 7i − 2', '−2 − 7i', ['2 − 7i', '−2 + 7i', '7 − 2i']],
  ['Theory P34', 'For every complex number z, which statement is true?', 'z̄̄ = z', ['z̄ = z always', 'z̄ = −z always', 'z + z̄ = 0 always']],
  ['Theory P34', 'If z = z̄, then z is', 'real', ['imaginary', 'zero only', 'non-real']],
  ['Theory P34', 'If z = −z̄, then z is', 'imaginary', ['real', 'positive', 'natural']],
  ['Theory P34', 'If a + ib = c + id, then', 'a = c and b = d', ['a = d and b = c', 'a + b = c + d only', 'a = −c and b = −d']],
  ['Example P34', 'If x + iy = 4 + 3i, then', 'x = 4 and y = 3', ['x = 3 and y = 4', 'x = 4 and y = 3i', 'x = −4 and y = −3']],
  ['Theory P34', 'If z₁ = a + ib and z₂ = c + id, then z₁ + z₂ equals', '(a + c) + (b + d)i', ['(a − c) + (b − d)i', '(ac − bd) + (ad + bc)i', '(a + b) + (c + d)i']],
  ['Theory P34', 'For complex numbers z₁ and z₂, Re(z₁ + z₂) equals', 'Re(z₁) + Re(z₂)', ['Re(z₁)Re(z₂)', 'Im(z₁) + Im(z₂)', 'Re(z₁) − Re(z₂)']],
  ['Theory P34', 'For a complex number z, z + z̄ equals', '2Re(z)', ['2Im(z)', '0 always', 'z²']],
  ['Theory P34', 'For a real scalar k and z = a + ib, kz equals', 'ka + i(kb)', ['ka + ib', 'a + ik', 'kab i']],
  ['Theory P34-35', 'If z₁ = a + ib and z₂ = c + id, then z₁ − z₂ equals', '(a − c) + (b − d)i', ['(a + c) + (b + d)i', '(a − c) − (b − d)i', '(ac − bd) + (ad + bc)i']],
  ['Example P35', 'If z₁ = 4 + 3i and z₂ = 2 + i, find z₁ − z₂', '2 + 2i', ['2 + 4i', '6 + 4i', '−2 − 2i']],
  ['Theory P35', 'If z₁ = a + ib and z₂ = c + id, then z₁z₂ equals', '(ac − bd) + (ad + bc)i', ['(ac + bd) + (ad − bc)i', '(a + c) + (b + d)i', '(ac − bd) + (ab + cd)i']],
  ['Example P35', 'Find (2 + 3i)(3 − 2i)', '12 + 5i', ['12 − 5i', '5 + 12i', '6 + 5i']],
  ['Let’s Note P35', 'If z = a + ib, then z·z̄ equals', 'a² + b²', ['a² − b²', '2ab', 'a + b']],
  ['Let’s Note P35', 'The values of i², i³ and i⁴ are respectively', '−1, −i, 1', ['1, i, −1', '−1, i, 1', 'i, −1, −i']],
  ['Let’s Note P35', 'For n ∈ N, i⁴ⁿ⁺² equals', '−1', ['1', 'i', '−i']],
  ['Theory P35', 'Division by c + id is carried out by multiplying numerator and denominator by', 'c − id', ['c + id', '−c + id', 'i(c + d)']],
  ['Solved Example P36', 'If real numbers a and b satisfy (i⁴ + 3i)a + (i − 1)b + 5i³ = 0, then', 'a = b = 5/4', ['a = b = 4/5', 'a = 5/4, b = −5/4', 'a = 0, b = 5']]
]);

export const exercise31 = [
  ...C('e1', [
    ['Q1(i)', 'Write the conjugate of complex number 3 + i', '3 − i', ['−3 + i', '−3 − i', '3 + i']],
    ['Q1(ii)', 'Write the conjugate of complex number 3 − i', '3 + i', ['−3 − i', '−3 + i', '3 − i']],
    ['Q1(iii)', 'Write the conjugate of complex number −√{5} − √{7} i', '−√{5} + √{7} i', ['√{5} − √{7} i', '√{5} + √{7} i', '−√{5} − √{7} i']],
    ['Q1(iv)', 'Write the conjugate of complex number −√{−5}', '√{5} i', ['−√{5} i', '√{5}', '−√{5}']],
    ['Q1(v)', 'Write the conjugate of complex number 5i', '−5i', ['5i', '5', '−5']],
    ['Q1(vi)', 'Write the conjugate of complex number √{5} − i', '√{5} + i', ['−√{5} − i', '−√{5} + i', '√{5} − i']],
    ['Q1(vii)', 'Write the conjugate of complex number √{2} + √{3} i', '√{2} − √{3} i', ['−√{2} + √{3} i', '√{3} − √{2} i', '√{2} + √{3} i']]
  ]),
  ...C('e2', [
    ['Q2(i)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n(1 + 2i)(−2 + i)', '−4 − 3i; a = −4, b = −3', ['−4 + 3i; a = −4, b = 3', '−2 − 3i; a = −2, b = −3', '4 − 3i; a = 4, b = −3']],
    ['Q2(ii)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n⟦frac:i(4 + 3i)¦1 − i⟧', '−7/2 + (1/2)i; a = −7/2, b = 1/2', ['7/2 − (1/2)i; a = 7/2, b = −1/2', '−1/2 + (7/2)i; a = −1/2, b = 7/2', '1/2 − (7/2)i; a = 1/2, b = −7/2']],
    ['Q2(iii)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n⟦frac:2 + i¦(3 − i)(1 + 2i)⟧', '3/10 − (1/10)i; a = 3/10, b = −1/10', ['3/10 + (1/10)i; a = 3/10, b = 1/10', '1/10 − (3/10)i; a = 1/10, b = −3/10', '3/5 − (1/5)i; a = 3/5, b = −1/5']],
    ['Q2(iv)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n⟦frac:3 + 2i¦2 − 5i⟧ + ⟦frac:3 − 2i¦2 + 5i⟧', '−8/29 + 0i; a = −8/29, b = 0', ['8/29 + 0i; a = 8/29, b = 0', '−4/29 + (19/29)i; a = −4/29, b = 19/29', '0 − (8/29)i; a = 0, b = −8/29']],
    ['Q2(v)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n⟦frac:2 + √{−3}¦4 + √{−3}⟧', '11/19 + (⟦frac:2√{3}¦19⟧)i; a = 11/19, b = ⟦frac:2√{3}¦19⟧', ['11/19 − (⟦frac:2√{3}¦19⟧)i; a = 11/19, b = −⟦frac:2√{3}¦19⟧', '5/13 + (⟦frac:2√{3}¦13⟧)i; a = 5/13, b = ⟦frac:2√{3}¦13⟧', '2/19 + (⟦frac:11√{3}¦19⟧)i; a = 2/19, b = ⟦frac:11√{3}¦19⟧']],
    ['Q2(vi)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n(2 + 3i)(2 − 3i)', '13 + 0i; a = 13, b = 0', ['−5 + 0i; a = −5, b = 0', '4 − 9i; a = 4, b = −9', '13i; a = 0, b = 13']],
    ['Q2(vii)', 'Express the following in the form of a + ib,\na, b ∈ R, i = √{−1}. State the value of a and b.\n⟦frac:4i⁸ − 3i⁹ + 3¦3i¹¹ − 4i¹⁰ − 2⟧', '23/13 + (15/13)i; a = 23/13, b = 15/13', ['23/13 − (15/13)i; a = 23/13, b = −15/13', '15/13 + (23/13)i; a = 15/13, b = 23/13', '−23/13 + (15/13)i; a = −23/13, b = 15/13']]
  ]),
  choice('e3', 'Q3', 'Show that (−1 + √{3} i)³ is a real number. Its value is', '8', ['−8', '8i', '−8i']),
  ...C('e4', [
    ['Q4(i)', 'Evaluate i³⁵', '−i', ['i', '1', '−1']],
    ['Q4(ii)', 'Evaluate i⁸⁸⁸', '1', ['−1', 'i', '−i']],
    ['Q4(iii)', 'Evaluate i⁹³', 'i', ['−i', '1', '−1']],
    ['Q4(iv)', 'Evaluate i¹¹⁶', '1', ['−1', 'i', '−i']],
    ['Q4(v)', 'Evaluate i⁴⁰³', '−i', ['i', '1', '−1']],
    ['Q4(vi)', 'Evaluate ⟦frac:1¦i⁵⁸⟧', '−1', ['1', 'i', '−i']],
    ['Q4(vii)', 'Evaluate i³⁰ + i⁴⁰ + i⁵⁰ + i⁶⁰', '0', ['1', '−1', '2']]
  ]),
  entry('e5', 'Q5', 'Show that 1 + i¹⁰ + i²⁰ + i³⁰ is a real number. Enter its value', 0),
  choice('e6i', 'Q6(i)', 'Find the value of i⁴⁹ + i⁶⁸ + i⁸⁹ + i¹¹⁰', '2i', ['−2i', '2', '0']),
  entry('e6ii', 'Q6(ii)', 'Find the value of i + i² + i³ + i⁴', 0),
  entry('e7', 'Q7', 'Find the value of 1 + i² + i⁴ + i⁶ + i⁸ + ... + i²⁰', 1),
  choice('e8i', 'Q8(i)', 'Find the value of x and y, which satisfy the equation (x + 2y) + (2x − 3y)i + 4i = 5, where (x, y ∈ R)', 'x = 1, y = 2', ['x = 2, y = 1', 'x = 3, y = 1', 'x = 1, y = −2']),
  choice('e8ii', 'Q8(ii)', 'Find the value of x and y, which satisfy the equation ⟦frac:x + 1¦1 + i⟧ + ⟦frac:y − 1¦1 − i⟧ = i, where (x, y ∈ R)', 'x = −2, y = 2', ['x = 2, y = −2', 'x = 0, y = 0', 'x = −1, y = 1']),
  entry('e9i', 'Q9(i)', 'Find the value of x³ − x² + x + 46, if x = 2 + 3i', 7),
  entry('e9ii', 'Q9(ii)', 'Find the value of 2x³ − 11x² + 44x + 27, if x = ⟦frac:25¦3 − 4i⟧', 2)
];

export const theoryPages38to40 = C('tb', [
  ['Theory P38', 'To find √{x + iy}, the textbook assumes', '√{x + iy} = a + ib, where a, b ∈ R', ['√{x + iy} = a + b', '√{x + iy} = ai + b', '√{x + iy} = x + iy']],
  ['Theory P38', 'If x + iy = (a + ib)², then x equals', 'a² − b²', ['a² + b²', '2ab', 'a − b']],
  ['Theory P38', 'If x + iy = (a + ib)², then y equals', '2ab', ['a² − b²', 'a² + b²', 'a + b']],
  ['Solved Example P38', 'The square roots of 6 + 8i are', '±√{2}(2 + i)', ['±√{2}(2 − i)', '±(2 + 2i)', '±(√{6} + √{8} i)']],
  ['Solved Example P38', 'One square root of 6 + 8i is', '2√{2} + √{2} i', ['2√{2} − √{2} i', '√{2} + 2√{2} i', '−2√{2} + √{2} i']],
  ['Solved Example P39', 'The square roots of 2i are', '±(1 + i)', ['±(1 − i)', '±2i', '±√{2} i']],
  ['Solved Example P39', 'In finding √{2}i = a + ib, equating parts gives', 'a² − b² = 0 and 2ab = 2', ['a² + b² = 0 and ab = 2', 'a² − b² = 2 and ab = 0', 'a + b = 2 and ab = 1']],
  ['Theory P39', 'The roots of ax² + bx + c = 0 are', '⟦frac:−b ± √{b² − 4ac}¦2a⟧', ['⟦frac:b ± √{b² + 4ac}¦2a⟧', '⟦frac:−b ± √{b² + 4ac}¦a⟧', '⟦frac:−b ± √{b² − ac}¦2a⟧']],
  ['Theory P39', 'The expression b² − 4ac is called', 'the discriminant', ['the conjugate', 'the imaginary part', 'the modulus']],
  ['Theory P39', 'If a, b, c ∈ R and b² − 4ac < 0, the roots are', 'complex numbers', ['equal real numbers', 'positive real numbers', 'natural numbers']],
  ['Let’s Note P39', 'If p + iq is a root of a real-coefficient quadratic equation, the other root is', 'p − iq', ['−p + iq', '−p − iq', 'q + ip']],
  ['Let’s Note P39', 'Complex roots of a real-coefficient quadratic equation occur in', 'conjugate pairs', ['equal pairs only', 'reciprocal pairs', 'negative pairs']],
  ['Solved Example P39', 'Solve x² + x + 1 = 0', 'x = ⟦frac:−1 ± √{3} i¦2⟧', ['x = ⟦frac:1 ± √{3} i¦2⟧', 'x = −1 ± √{3} i', 'x = ⟦frac:−1 ± 3i¦2⟧']],
  ['Solved Example P39', 'For x² + x + 1 = 0, the discriminant is', '−3', ['3', '−4', '5']],
  ['Solved Example P39', 'Solve x² − 4x + 13 = 0', 'x = 2 ± 3i', ['x = −2 ± 3i', 'x = 4 ± 13i', 'x = 2 ± i']],
  ['Solved Example P39', 'For x² − 4x + 13 = 0, completing the square gives', '(x − 2)² = −9', ['(x + 2)² = −9', '(x − 4)² = −13', '(x − 2)² = 9']],
  ['Solved Example P40', 'For x² + 4ix − 5 = 0, b² − 4ac equals', '4', ['−4', '16', '−36']],
  ['Solved Example P40', 'Solve x² + 4ix − 5 = 0', 'x = −2i ± 1', ['x = 2i ± 1', 'x = −4i ± 5', 'x = −2 ± i']],
  ['Theory P39', 'For a quadratic equation, the coefficient a must satisfy', 'a ≠ 0', ['a = 0', 'a > 0 only', 'a = 1 only']],
  ['Theory P39', 'If D = b² − 4ac, then √{D} for D < 0 is expressed using', 'i = √{−1}', ['w', 'π', 'e']]
]);

export const exercise32 = C('e32', [
  ['Q1(i)', 'Find the square root of complex number, −8 − 6i', '±(1 − 3i)', ['±(1 + 3i)', '±(3 − i)', '±(2 − 2i)']],
  ['Q1(ii)', 'Find the square root of complex number, 7 + 24i', '±(4 + 3i)', ['±(4 − 3i)', '±(3 + 4i)', '±(7 + 12i)']],
  ['Q1(iii)', 'Find the square root of complex number, 1 + 4√{3} i', '±(2 + √{3} i)', ['±(2 − √{3} i)', '±(√{3} + 2i)', '±(1 + 2√{3} i)']],
  ['Q1(iv)', 'Find the square root of complex number, 3 + 2√{10} i', '±(√{5} + √{2} i)', ['±(√{5} − √{2} i)', '±(√{10} + i)', '±(√{2} + √{5} i)']],
  ['Q1(v)', 'Find the square root of complex number, 2(1 − √{3} i)', '±(√{3} − i)', ['±(√{3} + i)', '±(1 − √{3} i)', '±(2 − √{3} i)']],
  ['Q2(i)', 'Solve quadratic equation, 8x² + 2x + 1 = 0', 'x = ⟦frac:−1 ± √{7} i¦8⟧', ['x = ⟦frac:1 ± √{7} i¦8⟧', 'x = ⟦frac:−1 ± 7i¦8⟧', 'x = ⟦frac:−2 ± √{7} i¦8⟧']],
  ['Q2(ii)', 'Solve quadratic equation, 2x² − √{3}x + 1 = 0', 'x = ⟦frac:√{3} ± √{5} i¦4⟧', ['x = ⟦frac:−√{3} ± √{5} i¦4⟧', 'x = ⟦frac:√{3} ± √{5}¦4⟧', 'x = ⟦frac:√{3} ± i¦2⟧']],
  ['Q2(iii)', 'Solve quadratic equation, 3x² − 7x + 5 = 0', 'x = ⟦frac:7 ± √{11} i¦6⟧', ['x = ⟦frac:−7 ± √{11} i¦6⟧', 'x = ⟦frac:7 ± 11i¦6⟧', 'x = ⟦frac:7 ± √{11}¦6⟧']],
  ['Q2(iv)', 'Solve quadratic equation, x² − 4x + 13 = 0', 'x = 2 ± 3i', ['x = −2 ± 3i', 'x = 4 ± 13i', 'x = 2 ± i']],
  ['Q3(i)', 'Solve quadratic equation, x² + 3ix + 10 = 0', 'x = 2i or −5i', ['x = −2i or 5i', 'x = 2 or −5', 'x = 5i or −2i']],
  ['Q3(ii)', 'Solve quadratic equation, 2x² + 3ix + 2 = 0', 'x = ⟦frac:i¦2⟧ or −2i', ['x = ⟦frac:−i¦2⟧ or 2i', 'x = i or −i', 'x = ⟦frac:1¦2⟧ or −2']],
  ['Q3(iii)', 'Solve quadratic equation, x² + 4ix − 4 = 0', 'x = −2i, −2i', ['x = 2i, 2i', 'x = −4i or i', 'x = ±2i']],
  ['Q3(iv)', 'Solve quadratic equation, ix² − 4x − 4i = 0', 'x = −2i, −2i', ['x = 2i, 2i', 'x = ±2i', 'x = −4i or 0']],
  ['Q4(i)', 'Solve quadratic equation, x² − (2 + i)x − (1 − 7i) = 0', 'x = 3 − i or −1 + 2i', ['x = 3 + i or −1 − 2i', 'x = 2 + i or −1 + 7i', 'x = 1 − i or −3 + 2i']],
  ['Q4(ii)', 'Solve quadratic equation, x² − (3√{2} + 2i)x + 6√{2} i = 0', 'x = 3√{2} or 2i', ['x = −3√{2} or −2i', 'x = √{2} or 6i', 'x = 3√{2}i or 2']],
  ['Q4(iii)', 'Solve quadratic equation, x² − (5 − i)x + (18 + i) = 0', 'x = 3 − 4i or 2 + 3i', ['x = 3 + 4i or 2 − 3i', 'x = 5 or −i', 'x = 3 − 2i or 2 + i']],
  ['Q4(iv)', 'Solve quadratic equation, (2 + i)x² − (5 − i)x + 2(1 − i) = 0', 'x = 1 − i or ⟦frac:4 − 2i¦5⟧', ['x = 1 + i or ⟦frac:4 + 2i¦5⟧', 'x = 1 or ⟦frac:1 − 2i¦5⟧', 'x = −1 − i or ⟦frac:2 − 4i¦5⟧']]
]);

export const theoryPages40to42 = C('tc', [
  ['Theory P40', 'If x is a cube root of unity, then', 'x³ = 1', ['x² = 1', 'x³ = 0', 'x = −1 only']],
  ['Theory P40', 'Factor x³ − 1', '(x − 1)(x² + x + 1)', ['(x + 1)(x² − x + 1)', '(x − 1)³', '(x − 1)(x² − x − 1)']],
  ['Theory P40', 'The three cube roots of unity are', '1, ⟦frac:−1 + √{3} i¦2⟧, ⟦frac:−1 − √{3} i¦2⟧', ['1, i, −i', '1, −1, i', '1, ⟦frac:1 + √{3} i¦2⟧, ⟦frac:1 − √{3} i¦2⟧']],
  ['Theory P40-41', 'If w = ⟦frac:−1 + √{3} i¦2⟧, then w² equals', '⟦frac:−1 − √{3} i¦2⟧', ['⟦frac:−1 + √{3} i¦2⟧', '⟦frac:1 − √{3} i¦2⟧', '1']],
  ['Theory P41', 'For a complex cube root of unity w, w³ equals', '1', ['0', '−1', 'w']],
  ['Theory P41', 'For w ≠ 1, which relation holds?', 'w² + w + 1 = 0', ['w² − w + 1 = 0', 'w² + w − 1 = 0', 'w² = 1']],
  ['Theory P41', 'From w² + w + 1 = 0, w + w² equals', '−1', ['1', '0', 'w']],
  ['Theory P41', 'For a complex cube root of unity w, ⟦frac:1¦w⟧ equals', 'w²', ['w', '1', '−w']],
  ['Theory P41', 'For a complex cube root of unity w, ⟦frac:1¦w²⟧ equals', 'w', ['w²', '1', '−w²']],
  ['Theory P41', 'For n ∈ N, w³ⁿ equals', '1', ['w', 'w²', '0']],
  ['Theory P41', 'For n ∈ N, w³ⁿ⁺¹ equals', 'w', ['1', 'w²', '−w']],
  ['Theory P41', 'For n ∈ N, w³ⁿ⁺² equals', 'w²', ['1', 'w', '−w²']],
  ['Theory P41', 'The conjugate of w is', 'w²', ['w', '1', '−w']],
  ['Theory P41', 'The conjugate of w² is', 'w', ['w²', '1', '−w²']],
  ['Solved Example P41', 'Find ⟦frac:1¦w⟧ + ⟦frac:1¦w²⟧', '−1', ['1', '0', '−2']],
  ['Solved Example P41', 'Find (1 + w²)³', '−1', ['1', '0', '−8']],
  ['Solved Example P41', 'Find (1 − w + w²)³', '−8', ['8', '−1', '0']],
  ['Solved Example P41', 'Find (1 − w)(1 − w²)(1 − w⁴)(1 − w⁵)', '9', ['3', '−9', '0']],
  ['Solved Example P41-42', 'If n is a multiple of 3, then 1 + wⁿ + w²ⁿ equals', '3', ['0', '1', '−1']],
  ['Solved Example P41-42', 'If n is not a multiple of 3, then 1 + wⁿ + w²ⁿ equals', '0', ['3', '1', '−1']],
  ['Theory P40', 'Among the cube roots of unity, the two non-real roots are', 'complex conjugates of each other', ['equal real numbers', 'additive inverses only', 'both equal to i']],
  ['Theory P41', 'Which notation represents the cube roots of unity?', '1, w, w²', ['0, w, w²', '1, w, w³', '−1, w, w²']]
]);

export const exercise33 = C('e33', [
  ['Q1(i)', 'If w is a complex cube root of unity, show that (2 − w)(2 − w²) equals', '7', ['3', '5', '9']],
  ['Q1(ii)', 'If w is a complex cube root of unity, find (2 + w + w²)³ − (1 − 3w + w²)³', '65', ['64', '63', '−65']],
  ['Q1(iii)', 'If w is a complex cube root of unity, find ⟦frac:a + bw + cw²¦c + aw + bw²⟧', 'w²', ['w', '1', '−w²']],
  ['Q2(i)', 'If w is a complex cube root of unity, find w + ⟦frac:1¦w⟧', '−1', ['1', '0', 'w²']],
  ['Q2(ii)', 'If w is a complex cube root of unity, find w² + w³ + w⁴', '0', ['1', '−1', '3']],
  ['Q2(iii)', 'If w is a complex cube root of unity, find (1 + w²)³', '−1', ['1', '0', '−8']],
  ['Q2(iv)', 'If w is a complex cube root of unity, find (1 − w − w²)³ + (1 − w + w²)³', '0', ['8', '−8', '16']],
  ['Q2(v)', 'If w is a complex cube root of unity, find (1 + w)(1 + w²)(1 + w⁴)(1 + w⁸)', '1', ['0', '−1', '4']],
  ['Q3', 'If α and β are the complex cube roots of unity, find α² + β² + αβ', '0', ['1', '−1', '3']],
  ['Q4', 'If x = a + b, y = αa + βb and z = aβ + bα, then xyz equals', 'a³ + b³', ['a³ − b³', '(a + b)³', 'ab(a + b)']],
  ['Q5(i)', 'If w is a complex cube root of unity, find (w² + w − 1)³', '−8', ['8', '−1', '0']],
  ['Q5(ii)', 'If w is a complex cube root of unity, find (a + b) + (aw + bw²) + (aw² + bw)', '0', ['a + b', '3(a + b)', '−(a + b)']]
]);

export const letsRemember3 = C('lr', [
  ["Let’s Remember (i)", 'A number of the form a + ib, where a, b ∈ R and i = √{−1}, is called', 'a complex number', ['an irrational number', 'an imaginary number only', 'a natural number']],
  ["Let’s Remember (ii)", 'If z₁ = a + ib and z₂ = c + id, then z₁ + z₂ equals', '(a + c) + (b + d)i', ['(ac − bd) + (ad + bc)i', '(a − c) + (b − d)i', '(a + b) + (c + d)i']],
  ["Let’s Remember (iii)", 'If z₁ = a + ib and z₂ = c + id, then z₁z₂ equals', '(ac − bd) + (ad + bc)i', ['(ac + bd) + (ad − bc)i', '(a + c) + (b + d)i', '(ac − bd) + (ab + cd)i']],
  ["Let’s Remember (iv)", 'For a positive integer k, i⁴ᵏ equals', '1', ['−1', 'i', '−i']],
  ["Let’s Remember (v)", 'For a positive integer k, i⁴ᵏ⁺¹ equals', 'i', ['1', '−1', '−i']],
  ["Let’s Remember (vi)", 'For a positive integer k, i⁴ᵏ⁺² equals', '−1', ['1', 'i', '−i']],
  ["Let’s Remember (vii)", 'For a positive integer k, i⁴ᵏ⁺³ equals', '−i', ['i', '1', '−1']],
  ["Let’s Remember (viii)", 'The conjugate of z = a + ib is', 'z̄ = a − ib', ['z̄ = −a + ib', 'z̄ = a + ib', 'z̄ = b + ia']],
  ["Let’s Remember (ix)", 'The cube roots of unity are denoted by', '1, w, w² or 1, w, w̄', ['1, i, −i', '0, w, w²', '1, w², w³']]
]);

export const miscellaneousExercise3 = [
  choice('m1', 'Q1', 'Find ⟦frac:i⁵⁹² + i⁵⁹⁰ + i⁵⁸⁸ + i⁵⁸⁶ + i⁵⁸⁴¦i⁵⁸² + i⁵⁸⁰ + i⁵⁷⁸ + i⁵⁷⁶ + i⁵⁷⁴⟧', '−1', ['1', 'i', '−i']),
  choice('m2', 'Q2', 'Find √{−3} × √{−6}', '−3√{2}', ['3√{2}', '3√{2} i', '−3√{2} i']),
  ...C('m3', [
    ['Q3(i)', 'Simplify 3 + √{−64}\nand express it in the form a + ib', '3 + 8i', ['3 − 8i', '11i', '3 + 64i']],
    ['Q3(ii)', 'Simplify (2i³)²\nand express it in the form a + ib', '−4 + 0i', ['4 + 0i', '−2i', '4i']],
    ['Q3(iii)', 'Simplify (2 + 3i)(1 − 4i)\nand express it in the form a + ib', '14 − 5i', ['14 + 5i', '−10 − 5i', '2 − 12i']],
    ['Q3(iv)', 'Simplify (5/2)i(−4 − 3i)\nand express it in the form a + ib', '15/2 − 10i', ['−15/2 − 10i', '15/2 + 10i', '−10 + (15/2)i']],
    ['Q3(v)', 'Simplify (1 + 3i)²(3 + i)\nand express it in the form a + ib', '−30 + 10i', ['−30 − 10i', '30 + 10i', '−10 + 30i']],
    ['Q3(vi)', 'Simplify ⟦frac:4 + 3i¦1 − i⟧\nand express it in the form a + ib', '1/2 + (7/2)i', ['1/2 − (7/2)i', '7/2 + (1/2)i', '−1/2 + (7/2)i']],
    ['Q3(vii)', 'Simplify (1 + ⟦frac:2¦i⟧)(3 + ⟦frac:4¦i⟧)(5 + i)⁻¹\nand express it in the form a + ib', '−35/26 − (45/26)i', ['−35/26 + (45/26)i', '35/26 − (45/26)i', '−45/26 − (35/26)i']],
    ['Q3(viii)', 'Simplify ⟦frac:√{5} + √{3} i¦√{5} − √{3} i⟧\nand express it in the form a + ib', '1/4 + (√{15}/4)i', ['1/4 − (√{15}/4)i', '4 + √{15} i', '√{15}/4 + (1/4)i']],
    ['Q3(ix)', 'Simplify ⟦frac:3i⁵ + 2i⁷ + i⁹¦i⁶ + 2i⁸ + 3i¹⁸⟧\nand express it in the form a + ib', '−i', ['i', '1', '−1']],
    ['Q3(x)', 'Simplify ⟦frac:5 + 7i¦4 + 3i⟧ + ⟦frac:5 + 7i¦4 − 3i⟧\nand express it in the form a + ib', '8/5 + (56/25)i', ['8/5 − (56/25)i', '82/25 + 0i', '56/25 + (8/5)i']]
  ]),
  ...C('m4', [
    ['Q4(i)', 'Solve (4 − 5i)x + (2 + 3i)y = 10 − 7i\nfor x, y ∈ R', 'x = 2, y = 1', ['x = 1, y = 2', 'x = 2, y = −1', 'x = −2, y = 1']],
    ['Q4(ii)', 'Solve (1 − 3i)x + (2 + 5i)y = 7 + i\nfor x, y ∈ R', 'x = 3, y = 2', ['x = 2, y = 3', 'x = −3, y = 2', 'x = 3, y = −2']],
    ['Q4(iii)', 'Solve ⟦frac:x + iy¦2 + 3i⟧ = 7 − i\nfor x, y ∈ R', 'x = 17, y = 19', ['x = 19, y = 17', 'x = 11, y = 23', 'x = 17, y = −19']],
    ['Q4(iv)', 'Solve (x + iy)(5 + 6i) = 2 + 3i\nfor x, y ∈ R', 'x = 28/61, y = 3/61', ['x = 3/61, y = 28/61', 'x = 28/61, y = −3/61', 'x = 2/5, y = 1/2']],
    ['Q4(v)', 'Solve 2x + i⁹y(2 + i) = xi⁷ + 10i¹⁶\nfor x, y ∈ R', 'x = 4, y = −2', ['x = −4, y = 2', 'x = 2, y = −4', 'x = 4, y = 2']]
  ]),
  entry('m5i', 'Q5(i)', 'Find x³ + 2x² − 3x + 21\nif x = 1 + 2i', 1),
  entry('m5ii', 'Q5(ii)', 'Find x³ − 5x² + 4x + 8\nif x = ⟦frac:10¦3 − i⟧', -2),
  entry('m5iii', 'Q5(iii)', 'Find x³ − 3x² + 19x − 20\nif x = 1 − 4i', -3),
  ...C('m6', [
    ['Q6(i)', 'Find the square roots of −16 + 30i', '±(3 + 5i)', ['±(3 − 5i)', '±(5 + 3i)', '±(4 + √{30} i)']],
    ['Q6(ii)', 'Find the square roots of 15 − 8i', '±(4 − i)', ['±(4 + i)', '±(1 − 4i)', '±(3 − 2i)']],
    ['Q6(iii)', 'Find the square roots of 2 + 2√{3} i', '±(√{3} + i)', ['±(√{3} − i)', '±(1 + √{3} i)', '±(2 + √{3} i)']],
    ['Q6(iv)', 'Find the square roots of 18i', '±3(1 + i)', ['±3(1 − i)', '±(9 + i)', '±3i']],
    ['Q6(v)', 'Find the square roots of 3 − 4i', '±(2 − i)', ['±(2 + i)', '±(1 − 2i)', '±(3 − 4i)']],
    ['Q6(vi)', 'Find the square roots of 6 + 8i', '±√{2}(2 + i)', ['±√{2}(2 − i)', '±(2 + 2i)', '±(3 + i)']]
  ])
];

const activity31 = [
  ['Activity 3.1 · Step 1', 'If i = √{−1}, find the value of i⁶', '−1', ['1', 'i', '−i']],
  ['Activity 3.1 · Step 2', 'If i = √{−1}, find the value of i³', '−i', ['i', '1', '−1']],
  ['Activity 3.1 · Step 3', 'If i⁶ = −1, find the coefficient of y after simplifying −15i⁶y', '15', ['−15', '15i', '−15i']],
  ['Activity 3.1 · Step 4', 'If i³ = −i, simplify i³(y + 4)', '−(y + 4)i', ['(y + 4)i', '−i(y − 4)', 'y + 4']],
  ['Activity 3.1 · Step 5', 'Simplify the equation\nx + 2i = 7x − 15i⁶y + i³(y + 4),\nusing i⁶ = −1 and i³ = −i', 'x − 15y + 2i = 7x − (y + 4)i', ['x + 15y + 2i = 7x + (y + 4)i', 'x − 15y + 2i = 7x + (y + 4)i', 'x + 15y + 2i = 7x − (y + 4)i']],
  ['Activity 3.1 · Step 6', 'In x − 15y + 2i = 7x − (y + 4)i,\nthe coefficient of i, on the left side is', '2', ['−2', '0', 'i']],
  ['Activity 3.1 · Step 7', 'Equating the real parts of x − 15y + 2i = 7x − (y + 4)i\ngives', '−6x − 15y = 0', ['−6x + 15y = 0', '6x − 15y = 2', '−6x − 15y = 2']],
  ['Activity 3.1 · Step 8', 'Equating the imaginary parts of x − 15y + 2i = 7x − (y + 4)i\ngives', '2 = −(y + 4)', ['−2 = −(y + 4)', '2 = y + 4', '0 = −(y + 4)']],
  ['Activity 3.1 · Step 9', 'Simplify the equation x − 15y = 7x', '−6x − 15y = 0', ['−6x + 15y = 0', '6x − 15y = 0', '−6x − 15y = 2']],
  ['Activity 3.1 · Step 10', 'Solve 2 = −(y + 4) for y', '−6', ['6', '−2', '2']],
  ['Activity 3.1 · Step 11', 'If y = −6 and −6x − 15y = 0, find x', '15', ['−15', '9', '6']],
  ['Activity 3.1 · Step 12', 'Solve the equations −6x − 15y = 0 and 2 = −(y + 4). The ordered pair (x, y) is', '(15, −6)', ['(−15, 6)', '(9, −6)', '(15, 6)']],
  ['Activity 3.1 · Step 13', 'If x = 15 and y = −6, find x + y', '9', ['−9', '21', '−21']]
];
const activity32 = [
  ['Activity 3.2 · Step 1', 'If w³ = 1, which factor multiplied by c + aw + bw² gives a + bw + cw²?', 'w²', ['w', 'w³', '⟦frac:1¦w²⟧']],
  ['Activity 3.2 · Step 2', 'Complete the equivalent fractions: ⟦frac:a¦w²⟧ = ⟦frac:a ___¦w³⟧', 'w', ['w²', '1', '−w']],
  ['Activity 3.2 · Step 3', 'Complete the equivalent fractions: ⟦frac:b¦w⟧ = ⟦frac:b ___¦w³⟧', 'w²', ['w', '1', '−w²']],
  ['Activity 3.2 · Step 4', 'If w³ = 1, simplify ⟦frac:a¦w²⟧', 'aw', ['aw²', 'a', '⟦frac:a¦w⟧']],
  ['Activity 3.2 · Step 5', 'If w³ = 1, simplify ⟦frac:b¦w⟧', 'bw²', ['bw', 'b', '⟦frac:b¦w²⟧']],
  ['Activity 3.2 · Step 6', 'If w³ = 1, simplify ⟦frac:a¦w²⟧ + ⟦frac:b¦w⟧ + c', 'aw + bw² + c', ['aw² + bw + c', 'a + b + c', 'a + bw + cw²']],
  ['Activity 3.2 · Step 7', 'In the fraction ⟦frac:aw + bw² + c¦c + aw + bw²⟧, the numerator and denominator are', 'equal', ['additive inverses', 'conjugates', 'reciprocals']],
  ['Activity 3.2 · Step 8', 'If w³ = 1, find ⟦frac:a + bw + cw²¦c + aw + bw²⟧ in terms of w²', 'w²', ['w', '1', '−w²']]
];
export const activities3 = C('act', [...activity31, ...activity32]);
