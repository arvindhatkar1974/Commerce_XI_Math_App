// Mathematics & Statistics, Part 2, Unit 2: Measures of Dispersion.
const subscriptDigits = value => String(value).replace(/\d/g, digit => '₀₁₂₃₄₅₆₇₈₉'[Number(digit)]);
const fractionReplacements = [
  ['(n1x̄1 + n2x̄2)/(n1 + n2)', '⟦frac:n1x̄1 + n2x̄2¦n1 + n2⟧'],
  ['(n1 + n2)/2', '⟦frac:n1 + n2¦2⟧'],
  ['(x̄1 + x̄2)/2', '⟦frac:x̄1 + x̄2¦2⟧'],
  ['(Q3 − Q1)/2', '⟦frac:Q3 − Q1¦2⟧'],
  ['(Q3 + Q1)/2', '⟦frac:Q3 + Q1¦2⟧'],
  ['(X − A)/h', '⟦frac:X − A¦h⟧'],
  ['h/(X − A)', '⟦frac:h¦X − A⟧'],
  ['Σfᵢxᵢ²/N', '⟦frac:Σfᵢxᵢ²¦N⟧'],
  ['Σfᵢxᵢ/N', '⟦frac:Σfᵢxᵢ¦N⟧'],
  ['Σxᵢ²/N', '⟦frac:Σxᵢ²¦N⟧'],
  ['Σxᵢ/N', '⟦frac:Σxᵢ¦N⟧'],
  ['Σxᵢ²/n', '⟦frac:Σxᵢ²¦n⟧'],
  ['Σxᵢ/n', '⟦frac:Σxᵢ¦n⟧'],
  ['Σfᵢ/N', '⟦frac:Σfᵢ¦N⟧'],
  ['σᵤ²/h', '⟦frac:σᵤ²¦h⟧'],
  ['σᵤ/h²', '⟦frac:σᵤ¦h²⟧'],
  ['Var(u)/h²', '⟦frac:Var(u)¦h²⟧'],
  ['Var(X)/2', '⟦frac:Var(X)¦2⟧'],
  ['Q2/2', '⟦frac:Q2¦2⟧'],
  ['Q1/2', '⟦frac:Q1¦2⟧'],
  ['x̄/100', '⟦frac:x̄¦100⟧'],
  ['X/h', '⟦frac:X¦h⟧'],
  ['σ/x̄', '⟦frac:σ¦x̄⟧'],
  ['x̄/σ', '⟦frac:x̄¦σ⟧'],
  ['σ²/x̄', '⟦frac:σ²¦x̄⟧'],
  ['N/Σfᵢxᵢ', '⟦frac:N¦Σfᵢxᵢ⟧'],
];
const formatMath = value => {
  let formatted = String(value);
  for (const [plain, fraction] of fractionReplacements) formatted = formatted.split(plain).join(fraction);
  return formatted
    .replace(/\b([QDP])(\d{1,3})\b/g, (_, symbol, index) => `${symbol}${subscriptDigits(index)}`)
    .replace(/(x̄|[ndfhxyσ])([12])\b/g, (_, symbol, index) => `${symbol}${subscriptDigits(index)}`)
    .replace(/sqrt\(([^)]+)\)/g, '√($1)');
};
const choice = (id, source, prompt, correct, wrong, extra = {}) => {
  const formattedCorrect = formatMath(correct);
  return { id: `p2u2${id}`, source, type: 'choice', prompt: formatMath(prompt), options: [formattedCorrect, ...wrong.map(formatMath)], correct: formattedCorrect, ...extra };
};
const entry = (id, source, prompt, correct, extra = {}) => ({ id: `p2u2${id}`, source, type: 'entry', prompt: formatMath(prompt), correct: String(correct), ...extra });
const C = (prefix, rows) => rows.map((row, index) => choice(`${prefix}${index + 1}`, ...row));
const E = (prefix, rows) => rows.map((row, index) => entry(`${prefix}${index + 1}`, ...row));

const rangeTable = '⟦table:Salary (₹00)¦30–50¦50–70¦70–90¦90–110¦110–130¦130–150;No. of employees¦7¦15¦30¦24¦18¦11⟧';
const openIncomeTable = '⟦table:Income (₹)¦Less than 50¦50–70¦70–90¦90–110¦110–130¦130–150¦Above 150;No. of persons¦59¦102¦125¦330¦200¦132¦52⟧';
const groupedVarianceTable = '⟦table:Class¦45–55¦55–65¦65–75¦75–85¦85–95¦95–105¦105–115¦115–125;Frequency¦7¦20¦27¦23¦13¦6¦3¦1⟧';
const plantHeightTable = '⟦table:Height of plants (cm)¦20–25¦25–30¦30–35¦35–40¦40–45¦45–50;No. of plants¦145¦125¦90¦40¦45¦55⟧';
const goalsTable = '⟦table:No. of goals¦0¦1¦2¦3¦4;No. of matches played by Team A¦19¦6¦5¦16¦14;No. of matches played by Team B¦16¦16¦5¦18¦15⟧';

export const theoryPages24to26 = C('ta', [
  ['Let’s Recall P24', 'A quantity whose value remains unchanged is called a', 'constant', ['variable', 'frequency', 'deviation']],
  ['Let’s Recall P24', 'A quantity that can take different values is called a', 'variable', ['constant', 'class boundary', 'coefficient']],
  ['Let’s Recall P24', 'The arithmetic mean is a measure of', 'central tendency', ['dispersion only', 'skewness only', 'class width']],
  ['Let’s Recall P24', 'Quartiles divide an ordered data set into', 'four equal parts', ['two equal parts', 'ten equal parts', 'one hundred equal parts']],
  ['Let’s Observe P24', 'An average alone cannot describe how observations are', 'scattered around it', ['alphabetically arranged', 'named', 'rounded']],
  ['Theory P24', 'The amount by which observations deviate from an average is called', 'dispersion', ['correlation', 'classification', 'tabulation']],
  ['Theory P24', 'Dispersion describes the degree to which numerical data tend to', 'spread about an average value', ['equal the average', 'form equal classes', 'become constant']],
  ['Theory P24', 'Two series can have the same mean but', 'different dispersion', ['the same observations', 'different sample sizes only', 'no variation']],
  ['Let’s Construct P24', 'For comparing the scatter of two series, both series may first be plotted on a', 'number line', ['pie chart only', 'map', 'calendar']],
  ['Theory P25', 'Which is an absolute measure of dispersion?', 'range', ['coefficient of variation', 'percentage', 'ratio only']],
  ['Theory P25', 'The commonly used measures include range, quartile deviation, variance and', 'standard deviation', ['median only', 'mode only', 'class mark']],
  ['Theory P25', 'Range is defined as', 'largest value − smallest value', ['largest value + smallest value', 'mean − median', 'Q3 − Q1 divided by 2']],
  ['Theory P25', 'If L is the largest value and S the smallest, range equals', 'L − S', ['L + S', 'S − L', 'LS']],
  ['Theory P25', 'Range is the', 'simplest measure of dispersion', ['most detailed frequency table', 'measure of central tendency', 'same as variance']],
  ['Solved Example P25', 'For weights 70, 62, 38, 55, 43, 73, 36, 58, 65, 47, the smallest value is', '36', ['38', '43', '47']],
  ['Solved Example P25', 'For weights 70, 62, 38, 55, 43, 73, 36, 58, 65, 47, the largest value is', '73', ['70', '65', '58']],
  ['Solved Example P25', 'For weights 70, 62, 38, 55, 43, 73, 36, 58, 65, 47, the range is', '37', ['35', '36', '39']],
  ['Solved Example P25', `${rangeTable}\nFor the grouped salary data, the lower limit used for the range is`, '30', ['50', '70', '150']],
  ['Solved Example P25', `${rangeTable}\nFor the grouped salary data, the upper limit used for the range is`, '150', ['130', '110', '90']],
  ['Solved Example P25', `${rangeTable}\nThe range of salaries is`, '120', ['100', '130', '180']],
  ['Theory P25', 'Range may be unsuitable when a data set contains', 'extreme values or outliers', ['equal values', 'a mean', 'frequencies']],
  ['Theory P25', 'Quartile deviation is also called', 'semi-interquartile range', ['total range', 'mean deviation', 'coefficient of variation']],
  ['Theory P25', 'Interquartile range equals', 'Q3 − Q1', ['Q3 + Q1', 'Q2 − Q1', '(Q3 − Q1)/2']],
  ['Theory P25', 'Quartile deviation equals', '(Q3 − Q1)/2', ['Q3 − Q1', '(Q3 + Q1)/2', 'Q2/2']],
  ['Theory P25', 'Quartile deviation reduces the influence of', 'extreme values', ['the central 50% values', 'class widths', 'all frequencies']],
  ['Solved Example P25-26', 'For the ordered marks 52, 56, 58, 60, 61, 67, 72, 75, 79, 84, 91, Q1 is', '58', ['56', '60', '61']],
  ['Solved Example P25-26', 'For the ordered marks 52, 56, 58, 60, 61, 67, 72, 75, 79, 84, 91, Q3 is', '79', ['72', '75', '84']],
  ['Solved Example P25-26', 'For the ordered marks 52, 56, 58, 60, 61, 67, 72, 75, 79, 84, 91, the interquartile range is', '21', ['10.5', '19', '27']],
  ['Solved Example P25-26', 'For the ordered marks 52, 56, 58, 60, 61, 67, 72, 75, 79, 84, 91, the quartile deviation is', '10.5', ['21', '9.5', '11']],
  ['Theory P26', 'For an open-end frequency distribution, an appropriate measure of dispersion is', 'quartile deviation', ['range', 'largest value', 'smallest value']],
  ['Solved Example P26', `${openIncomeTable}\n⟦line:The total frequency N is⟧`, '1000', ['948', '816', '1052']],
  ['Solved Example P26', `${openIncomeTable}\nThe first quartile position is`, '250th observation', ['125th observation', '500th observation', '750th observation']],
  ['Solved Example P26', `${openIncomeTable}\nThe first quartile class is`, '70–90', ['50–70', '90–110', '110–130']],
  ['Solved Example P26', `${openIncomeTable}\nThe third quartile class is`, '110–130', ['90–110', '130–150', '70–90']],
  ['Solved Example P26', `${openIncomeTable}\nQ1 is approximately`, '84.24', ['70', '89', '110']],
  ['Solved Example P26', `${openIncomeTable}\nQ3 is approximately`, '123.4', ['110', '130', '84.24']]
]);

export const exercise21 = E('e21', [
  ['Q1', 'Find range of the following data:\n575, 609, 335, 280, 729, 544, 852, 427, 967, 250', '717'],
  ['Q2', 'The following data gives number of typing mistakes done by Radha during a week.\nFind the range of the data.\n⟦table:Day¦Monday¦Tuesday¦Wednesday¦Thursday¦Friday¦Saturday;No. of mistakes¦15¦20¦21¦12¦17¦10⟧', '11', { compactTable: true }],
  ['Q3', 'Find range for the following data.\n⟦table:Classes¦62–64¦64–66¦66–68¦68–70¦70–72;Frequency¦5¦3¦4¦5¦3⟧', '10', { compactTable: true }],
  ['Q4', 'Find Q.D. for the following data:\n3, 16, 8, 15, 19, 11, 5, 17, 9, 5, 3.', '5.5'],
  ['Q5', 'Given below are the prices of shares of a company for the last 10 days.\n172, 164, 188, 214, 190, 237, 200, 195, 208, 230\nFind Q.D.', '17'],
  ['Q6', 'Calculate Q.D. for the following data.\n⟦table:X¦24¦25¦26¦27¦28¦29¦30;F¦6¦5¦3¦2¦4¦7¦3⟧', '2', { compactTable: true }],
  ['Q7', 'Following data gives the age distribution of 250 employees of a firm.\nCalculate Q.D. of the distribution.\n⟦table:Age (in years)¦20–25¦25–30¦30–35¦35–40¦40–45¦45–50;No. of employees¦30¦40¦60¦50¦46¦14⟧', '5.625', { compactTable: true }],
  ['Q8', 'Following data gives the weight of boxes.\nCalculate Q.D. for the data.\n⟦table:Weight (kg)¦10–12¦12–14¦14–16¦16–18¦18–20¦20–22;No. of boxes¦3¦7¦16¦14¦18¦2⟧', '1.965', { compactTable: true }]
]);

const varianceFormula = 'Var(X) = σ² = arithmetic mean of the squared deviations from the mean';
export const theoryPages27to30 = C('tb', [
  ['Theory P27', 'Range and quartile deviation are based mainly on', 'two values', ['all observations', 'only the mean', 'only class width']],
  ['Theory P27', 'Variance and standard deviation use', 'all observations', ['only the largest value', 'only quartiles', 'only class limits']],
  ['Theory P27', 'Variance is denoted by', 'Var(X) or σ²', ['σ only', 'x̄ only', 'Q.D.']],
  ['Theory P27', 'Variance is the arithmetic mean of', 'squares of deviations from the arithmetic mean', ['absolute observations', 'class widths', 'quartiles']],
  ['Theory P27', 'Standard deviation is denoted by', 'σ', ['σ²', 'x̄', 'N']],
  ['Theory P27', 'Standard deviation is the', 'positive square root of variance', ['square of variance', 'negative square root of variance', 'same as the mean']],
  ['Theory P27', 'Variance can never be', 'negative', ['zero', 'positive', 'a decimal']],
  ['Theory P27', 'If every observation is identical, variance equals', '0', ['1', 'the common value', 'N']],
  ['Let’s Derive P27', 'For raw data, variance can be calculated as', 'Σxᵢ²/n − x̄²', ['Σxᵢ/n + x̄²', 'Σxᵢ² − x̄', 'x̄² only']],
  ['Theory P27', 'For an ungrouped frequency distribution, total frequency is', 'N = Σfᵢ', ['N = Σxᵢ', 'N = x̄', 'N = σ²']],
  ['Theory P27', 'For frequency data, the mean is', 'Σfᵢxᵢ/N', ['Σxᵢ/N', 'Σfᵢ/N', 'Σfᵢxᵢ']],
  ['Theory P27', 'For frequency data, variance by the direct method is', 'Σfᵢxᵢ²/N − x̄²', ['Σfᵢxᵢ/N − x̄', 'Σxᵢ²/N', 'Σfᵢ/N']],
  ['Theory P27-28', 'For grouped data, xᵢ represents the', 'class midpoint', ['class frequency', 'lower boundary', 'cumulative frequency']],
  ['Theory P28', 'Variance is independent of a change of', 'origin', ['scale', 'unit', 'class width']],
  ['Theory P28', 'Variance is not independent of a change of', 'scale', ['origin', 'sample size', 'frequency total']],
  ['Theory P28', 'If d = X − A, then', 'σₓ² = σd²', ['σₓ² = Aσd²', 'σₓ² = σd', 'σₓ = A']],
  ['Theory P28', 'If u = (X − A)/h, then', 'σₓ² = h²σᵤ²', ['σₓ² = hσᵤ²', 'σₓ² = σᵤ²/h', 'σₓ² = A²σᵤ²']],
  ['Theory P28', 'If u = (X − A)/h, standard deviations satisfy', 'σₓ = hσᵤ', ['σₓ = h²σᵤ', 'σₓ = σᵤ/h²', 'σₓ = Aσᵤ']],
  ['Theory P29', 'The shortcut method is also called the', 'step-deviation method', ['quartile method', 'range method', 'graphical method']],
  ['Theory P29', 'In u = (X − A)/h, A is the', 'assumed mean', ['actual variance', 'total frequency', 'standard deviation']],
  ['Theory P29', 'In u = (X − A)/h, h is generally a common', 'class width or scale factor', ['frequency', 'mean', 'quartile']],
  ['Solved Example P28', 'For 9, 12, 15, 18, 21, 24, 27, the mean is', '18', ['15', '21', '36']],
  ['Solved Example P28', 'For 9, 12, 15, 18, 21, 24, 27, the variance is', '36', ['6', '18', '252']],
  ['Solved Example P28', 'For 9, 12, 15, 18, 21, 24, 27, the standard deviation is', '6', ['36', '3', '18']],
  ['Solved Example P28-29', 'For marks 10, 13, 17, 20, 23, the mean is', '16.6', ['16', '17', '21.84']],
  ['Solved Example P28-29', 'For marks 10, 13, 17, 20, 23, the variance is', '21.84', ['16.6', '4.67', '109.2']],
  ['Solved Example P28-29', 'For marks 10, 13, 17, 20, 23, the standard deviation is approximately', '4.67', ['21.84', '16.6', '5.84']],
  ['Solved Example P29', 'A die is rolled 30 times with frequencies 2, 6, 2, 5, 10, 5 for scores 1–6. The mean score is', '4', ['3', '4.5', '5']],
  ['Solved Example P29', 'A die is rolled 30 times with frequencies 2, 6, 2, 5, 10, 5 for scores 1–6. The variance is approximately', '2.47', ['1.57', '4', '18.47']],
  ['Solved Example P29', 'A die is rolled 30 times with frequencies 2, 6, 2, 5, 10, 5 for scores 1–6. The standard deviation is approximately', '1.57', ['2.47', '4', '0.57']],
  ['Solved Example P29', 'For x = 15, 20, 25, 30, 35, 40, 45 and frequencies 13, 12, 15, 18, 17, 10, 15, the coded mean ū is', '0.04', ['0.4', '4', '−0.04']],
  ['Solved Example P29', 'For x = 15, 20, 25, 30, 35, 40, 45 and frequencies 13, 12, 15, 18, 17, 10, 15, Var(u) is approximately', '3.7184', ['0.04', '2.7824', '18.592']],
  ['Solved Example P29', 'For x = 15, 20, 25, 30, 35, 40, 45 and frequencies 13, 12, 15, 18, 17, 10, 15, with h = 5, the variance of X is', '92.96', ['18.592', '3.7184', '25']],
  ['Solved Example P29', 'For x = 15, 20, 25, 30, 35, 40, 45 and frequencies 13, 12, 15, 18, 17, 10, 15, with h = 5, the standard deviation of X is approximately', '9.64', ['92.96', '18.59', '5']],
  ['Solved Example P30', `${groupedVarianceTable}\nFor this grouped distribution, Var(u) is`, '2.25', ['1.5', '4.5', '225']],
  ['Solved Example P30', `${groupedVarianceTable}\n⟦line:With A = 90 and h = 10, Var(X) is⟧`, '225', ['22.5', '15', '2.25']],
  ['Solved Example P30', `${groupedVarianceTable}\nThe standard deviation is`, '15', ['225', '10', '2.25']],
  ['Solved Example P30', `${plantHeightTable}\n⟦line:With A = 32.5 and h = 5, Var(u) is approximately⟧`, '2.7824', ['0.24', '2.25', '69.56']],
  ['Solved Example P30', `${plantHeightTable}\nThe variance of X is approximately`, '69.56', ['8.34', '2.7824', '13.90']],
  ['Solved Example P30', `${plantHeightTable}\nThe standard deviation is approximately`, '8.34', ['69.56', '5', '2.78']]
]);

export const exercise22 = [
  entry('e221', 'Q1(i)', 'For 7, 11, 2, 4, 9, 6, 3, 7, 11, 2, 5, 8, 3, 6, 8, 8, 2, 6\nCalculate variance.', '8'),
  choice('e222', 'Q1(ii)', 'For 7, 11, 2, 4, 9, 6, 3, 7, 11, 2, 5, 8, 3, 6, 8, 8, 2, 6\nCalculate standard deviation.', '2√{2}', ['8', '4', '√{2}']),
  entry('e223', 'Q2(i)', 'For 65, 77, 81, 98, 100, 80, 129\nCalculate variance.', '380'),
  choice('e224', 'Q2(ii)', 'For 65, 77, 81, 98, 100, 80, 129\nCalculate standard deviation.', '2√{95}', ['380', '√{95}', '19']),
  entry('e225', 'Q3(i)', 'Compute variance for the following data:\n⟦table:x¦2¦4¦6¦8¦10;f¦5¦4¦3¦2¦1⟧', '6.1911', { compactTable: true }),
  choice('e226', 'Q3(ii)', 'Compute standard deviation for the following data:\n⟦table:x¦2¦4¦6¦8¦10;f¦5¦4¦3¦2¦1⟧', '√{6.1911}', ['6.1911', '√{5.1911}', '√{7.1911}'], { compactTable: true }),
  entry('e227', 'Q4(i)', 'Compute variance for the following data:\n⟦table:x¦1¦3¦5¦7¦9;Frequency¦5¦10¦20¦10¦5⟧', '4.8', { compactTable: true }),
  choice('e228', 'Q4(ii)', 'Compute standard deviation for the following data:\n⟦table:x¦1¦3¦5¦7¦9;Frequency¦5¦10¦20¦10¦5⟧', '√{4.8}', ['4.8', '√{3.8}', '√{5.8}'], { compactTable: true }),
  entry('e229', 'Q5(i)', 'Following data gives age of 100 students in a school. Calculate variance\n⟦table:Age (in years)¦10¦11¦12¦13¦14;No. of students¦10¦20¦40¦20¦10⟧', '1.2', { compactTable: true }),
  choice('e2210', 'Q5(ii)', 'Following data gives age of 100 students in a school. Calculate S. D.\n⟦table:Age (in years)¦10¦11¦12¦13¦14;No. of students¦10¦20¦40¦20¦10⟧', '√{1.2}', ['1.2', '√{0.2}', '√{2.2}'], { compactTable: true }),
  choice('e2211', 'Q6', 'The mean and variance of 5 observations are 3 and 2 respectively.\nIf three of the five observations are 1, 3 and 5,\nfind the values of other two observations.', '2, 4', ['1, 5', '2, 5', '3, 4']),
  choice('e2212', 'Q7', 'Obtain S. D. for the following data :\n⟦table:Height (in inches)¦60–62¦62–64¦64–66¦66–68¦68–70;No. of students¦4¦30¦45¦15¦6⟧', '√{3.3514}', ['3.3514', '√{2.3514}', '√{4.3514}'], { compactTable: true }),
  choice('e2213', 'Q8', 'The following distribution was obtained by change of origin and scale of variable X.\n⟦table:dᵢ¦−4¦−3¦−2¦−1¦0¦1¦2¦3¦4;fᵢ¦4¦8¦14¦18¦20¦14¦10¦6¦6⟧\nIf it is given that mean and variance are 59.5 and 413 respectively, determine actual class intervals.', '15.5–25.5, 25.5–35.5, …, 95.5–105.5', ['19.5–29.5, 29.5–39.5, …', '−4.5–4.5, 4.5–14.5, …', '55.5–65.5, 65.5–75.5, …'], { compactTable: true })
];

export const theoryPages31to33 = C('tc', [
  ['Theory P31', 'Combined data means data obtained by', 'joining two or more data sets', ['removing all frequencies', 'using only quartiles', 'drawing an ogive']],
  ['Theory P31', 'For samples of sizes n1 and n2, combined size is', 'n1 + n2', ['n1 × n2', 'n1 − n2', '(n1 + n2)/2']],
  ['Theory P31', 'The combined mean is', '⟦frac:n₁x̄₁ + n₂x̄₂¦n₁ + n₂⟧', ['(x̄1 + x̄2)/2 always', 'n₁x̄₁ − n₂x̄₂', 'σ1 + σ2']],
  ['Theory P31', 'In the combined S.D. formula, d1 equals', 'x̄1 − x̄c', ['x̄c − x̄2', 'σ1 − σc', 'n1 − n2']],
  ['Theory P31', 'In the combined S.D. formula, d2 equals', 'x̄2 − x̄c', ['x̄c − x̄1', 'σ2 − σc', 'n2 − n1']],
  ['Theory P31', 'Combined variance includes both within-group variance and', 'differences between group and combined means', ['class limits only', 'quartiles only', 'ranges only']],
  ['Solved Example P31', 'For groups of sizes 10 and 20 with means 24 and 45, the combined mean is', '38', ['34.5', '35', '69']],
  ['Solved Example P31', 'For groups of sizes 10 and 20 with means 24 and 45 and combined mean 38, d1 is', '−14', ['14', '−7', '21']],
  ['Solved Example P31', 'For groups of sizes 10 and 20 with means 24 and 45 and combined mean 38, d2 is', '7', ['−7', '14', '21']],
  ['Solved Example P31', 'For groups of sizes 10 and 20 with means 24 and 45 and standard deviations 6 and 11, the combined variance is approximately', '190.67', ['13.8', '121', '36']],
  ['Solved Example P31', 'For groups of sizes 10 and 20 with means 24 and 45 and standard deviations 6 and 11,\nthe combined standard deviation is approximately', '13.8', ['190.67', '17', '8.5']],
  ['Solved Example P31-32', 'If the first group has 100 items and the combined group has 250, the second group contains', '150 items', ['100 items', '250 items', '350 items']],
  ['Solved Example P31-32', 'If the group means are 45 and unknown and the combined mean is 51, the second mean is', '55', ['51', '45', '60']],
  ['Solved Example P31-32', 'If the combined variance is 130, the second-group variance is', '144', ['12', '130', '49']],
  ['Solved Example P31-32', 'The second-group standard deviation is', '12', ['144', '11', '14']],
  ['Theory P32', 'Standard deviation depends on the', 'unit of measurement', ['order of observations only', 'name of the variable', 'sample label']],
  ['Theory P32', 'Coefficient of variation is independent of the', 'unit of measurement', ['mean', 'standard deviation', 'sample size']],
  ['Theory P32', 'Coefficient of variation is calculated as', '100 × σ/x̄', ['100 × x̄/σ', 'σ²/x̄', 'x̄ − σ']],
  ['Theory P32', 'Coefficient of variation is expressed as a', 'percentage', ['class interval', 'frequency', 'raw score']],
  ['Theory P32', 'A distribution with the smaller C.V. is more', 'consistent', ['variable', 'skewed', 'dispersed']],
  ['Theory P32', 'A distribution with the larger C.V. is more', 'variable', ['consistent', 'compact', 'homogeneous']],
  ['Theory P32', 'C.V. is particularly useful for comparing data measured in', 'different units or with different means', ['the same order only', 'equal frequencies only', 'one class only']],
  ['Solved Example P32', 'Varad has mean 50 and S.D. 11. His C.V. is', '22%', ['11%', '25%', '50%']],
  ['Solved Example P32', 'Viraj has mean 58 and S.D. 16. His C.V. is approximately', '27.59%', ['16%', '22%', '36%']],
  ['Solved Example P32', 'Akhilesh has mean 21 and S.D. 5. His C.V. is approximately', '23.81%', ['5%', '21%', '27.59%']],
  ['Solved Example P32', 'Among Varad, Viraj and Akhilesh, the most consistent is', 'Varad', ['Viraj', 'Akhilesh', 'all equally consistent']],
  ['Solved Example P32', 'If selection is based on the highest expected score, select', 'Viraj', ['Varad', 'Akhilesh', 'none']],
  ['Solved Example P33', 'For company X shares with mean 50 and variance 7, S.D. is approximately', '2.64', ['7', '5.28', '1.90']],
  ['Solved Example P33', 'For company X, C.V. is approximately', '5.28%', ['2.64%', '7%', '1.90%']],
  ['Solved Example P33', 'For company Y shares with mean 105 and variance 4, C.V. is approximately', '1.90%', ['4%', '2.64%', '5.28%']],
  ['Solved Example P33', 'The more stable company share is', 'company Y', ['company X', 'both equally stable', 'neither']],
  ['Let’s Construct P33', 'To compare word-length variability in a passage, calculate mean, S.D. and', 'coefficient of variation', ['range only', 'median only', 'mode only']]
]);

export const exercise23 = [
  choice('e231', 'Q1', 'Mean and standard deviation of two distributions of 100 and 150 items are 50, 5 and 40, 6 respectively.\nFind the mean and standard deviations of all the 250 items taken together.', 'Mean = 44, S. D. = √{55.6} ≈ 7.46', ['Mean = 45, S. D. = √{55.6} ≈ 7.46', 'Mean = 44, S. D. = 55.6', 'Mean = 40, S. D. = √{49} = 7']),
  choice('e233', 'Q2', 'For a certain bivariate data, following information is available.\n⟦table:¦X¦Y;Mean¦13¦17;S.D.¦3¦2;Size¦10¦10⟧\nObtain the combined standard deviation.', '√{10.5}', ['10.5', '√{8.5}', '√{12.5}'], { compactTable: true }),
  entry('e234', 'Q3', 'Calculate coefficient of variation of marks secured by a student in the exam, where the marks are: 2, 4, 6, 8, 10.\n(Given: √{2} = 1.41)', '47%', { requiresPercent: true }),
  entry('e235', 'Q4', 'Find the coefficient of variation of a sample which has mean 25 and standard deviation 5.', '20%', { requiresPercent: true }),
  entry('e236', 'Q5', 'A group of 65 students of class XI have their average height 150.4 cm with coefficient of variation 2.5%.\nWhat is the standard deviation of their height?', '3.76'),
  choice('e237', 'Q6 · Concept', 'Two workers on the same job show the following results:\n⟦table:¦Worker P¦Worker Q;Mean time for completing the job (hours)¦33¦21;Standard Deviation (hours)¦9¦7⟧\nTo find out which worker is more consistent, you will calculate ----, a smaller ----- means greater consistency.', 'Coefficients of Variation (C. V.)', ['Mean', 'Median', 'Standard Deviation (S. D.)'], { compactTable: true, options: ['Coefficients of Variation (C. V.)', 'Mean', 'Median', 'Standard Deviation (S. D.)'] }),
  choice('e238', 'Q6 · Concept', 'Two workers on the same job show the following results:\n⟦table:¦Worker P¦Worker Q;Mean time for completing the job (hours)¦33¦21;Standard Deviation (hours)¦9¦7⟧\nTo find out which worker seems to be faster, you will calculate-----, a smaller ---- indicates faster work.', 'Mean', ['Coefficients of Variation (C. V.)', 'Median', 'Standard Deviation (S. D.)'], { compactTable: true, options: ['Coefficients of Variation (C. V.)', 'Mean', 'Median', 'Standard Deviation (S. D.)'] }),
  choice('e239', 'Q6(i)', 'Two workers on the same job show the following results:\n⟦table:¦Worker P¦Worker Q;Mean time for completing the job (hours)¦33¦21;Standard Deviation (hours)¦9¦7⟧\nRegarding the time required to complete the job, which worker is more consistent?', 'Worker P', ['Worker Q', 'Both are equally consistent', 'Consistency cannot be compared'], { compactTable: true }),
  choice('e2310', 'Q6(ii)', 'Two workers on the same job show the following results:\n⟦table:¦Worker P¦Worker Q;Mean time for completing the job (hours)¦33¦21;Standard Deviation (hours)¦9¦7⟧\nWhich worker seems to be faster in completing the job?', 'Worker Q', ['Worker P', 'Both take the same time', 'Speed cannot be compared'], { compactTable: true }),
  choice('e2311', 'Q7(i)', 'A company has two departments with 42 and 60 employees respectively.\nTheir average weekly wages are ₹ 750 and ₹ 400.\nThe standard deviations are 8 and 10 respectively.\nWhich department has a larger bill?', 'First department', ['Second department', 'Both have equal bills', 'Cannot be determined']),
  choice('e2312', 'Q7(ii)', 'A company has two departments with 42 and 60 employees respectively.\nTheir average weekly wages are ₹ 750 and ₹ 400.\nThe standard deviations are 8 and 10 respectively.\nWhich department has larger variability in wages?', 'Second department', ['First department', 'Both have equal variability', 'Cannot be determined']),
  entry('e2313', 'Q8', 'The following table gives weights of the students of class A.\nCalculate the coefficient of variation (Given : √{0.8} = 0.8944)\n⟦table:Weight (in kg)¦25–35¦35–45¦45–55;Class A¦8¦4¦8⟧', '22.36%', { requiresPercent: true, compactTable: true }),
  choice('e2314', 'Q9(i)', `${goalsTable}\nCompute the coefficients of variation for Team A and Team B.`, 'CV(A) = 80% and CV(B) = 75%', ['CV(A) = 75% and CV(B) = 80%', 'CV(A) = 80% and CV(B) = 80%', 'CV(A) = 19% and CV(B) = 16%']),
  choice('e2315', 'Q9(ii)', `${goalsTable}\nWhich team is more consistent?`, 'Team B', ['Team A', 'Both are equally consistent', 'Neither team']),
  choice('e2316', 'Q10(i)', 'Given below is the information about marks obtained in Mathematics and Statistics by 100 students in a class.\n⟦table:¦Mathematics¦Statistics;Mean¦20¦25;S.D.¦2¦3⟧\nCompute the coefficients of variation for Mathematics and Statistics.', 'CV(M) = 10% and CV(S) = 12%', ['CV(M) = 12% and CV(S) = 10%', 'CV(M) = 20% and CV(S) = 25%', 'CV(M) = 2% and CV(S) = 3%'], { compactTable: true }),
  choice('e2317', 'Q10(ii)', 'Given below is the information about marks obtained in Mathematics and Statistics by 100 students in a class.\n⟦table:¦Mathematics¦Statistics;Mean¦20¦25;S.D.¦2¦3⟧\nWhich subject shows the highest variability in marks?', 'Statistics', ['Mathematics', 'Both have equal variability', 'Neither subject'], { compactTable: true })
];

export const letsRemember2 = C('lr', [
  ['Let’s Remember P34', 'Range equals', 'largest value − smallest value', ['largest value + smallest value', 'Q3 − Q1', 'variance']],
  ['Let’s Remember P34', 'Interquartile range equals', 'Q3 − Q1', ['Q3 + Q1', '(Q3 − Q1)/2', 'Q2']],
  ['Let’s Remember P34', 'Quartile deviation equals', '(Q3 − Q1)/2', ['Q3 − Q1', 'Q1/2', 'Q2/2']],
  ['Let’s Remember P34', 'Variance for raw data is the mean of', 'squared deviations from x̄', ['observations', 'absolute class limits', 'quartiles']],
  ['Let’s Remember P34', 'Standard deviation equals', '√{Var(X)}', ['Var(X)²', '−√{Var(X)}', 'Var(X)/2']],
  ['Let’s Remember P34', 'For frequency data, N equals', 'Σfᵢ', ['Σxᵢ', 'Σfᵢxᵢ', 'x̄']],
  ['Let’s Remember P34', 'For frequency data, x̄ equals', 'Σfᵢxᵢ/N', ['Σxᵢ/N', 'Σfᵢ/N', 'N/Σfᵢxᵢ']],
  ['Let’s Remember P34', 'Under step deviation, u equals', '(X − A)/h', ['X − A', 'X/h + A', 'h/(X − A)']],
  ['Let’s Remember P34', 'Under change of scale, Var(X) equals', 'h²Var(u)', ['hVar(u)', 'Var(u)/h²', 'AVar(u)']],
  ['Let’s Remember P34', 'The combined mean is a', 'size-weighted mean of group means', ['simple average always', 'difference of means', 'sum of S.D.s']],
  ['Let’s Remember P34', 'Coefficient of variation equals', '100 × σ/x̄', ['100 × x̄/σ', 'σ²/x̄', 'x̄/100']],
  ['Let’s Remember P34', 'A smaller coefficient of variation indicates', 'greater consistency', ['greater variability', 'larger range always', 'negative variance']]
]);

export const miscellaneousExercise2 = [
  entry('mx1', 'Q1', 'Find the range for the following data:\n116, 124, 164, 150, 149, 114, 195, 128, 138, 203, 144', '89'),
  entry('mx2', 'Q2', 'Given below is the frequency distribution of weekly wages of 400 workers.\n⟦table:Weekly wages (in ₹00)¦10¦15¦20¦25¦30¦35¦40;No. of workers¦45¦63¦102¦55¦74¦36¦25⟧\nFind the range.', '30'),
  entry('mx3', 'Q3', 'Find the range of the following data.\n⟦table:Classes¦115–125¦125–135¦135–145¦145–155¦155–165¦165–175;Frequency¦1¦4¦6¦1¦3¦5⟧', '60'),
  entry('mx4', 'Q4', 'The city traffic police issued challans for not observing traffic rules.\n⟦table:Day¦Monday¦Tuesday¦Wednesday¦Thursday¦Friday¦Saturday;No. of challans¦40¦24¦36¦58¦62¦80⟧\nFind Q.D.', '16.75'),
  entry('mx5', 'Q5', 'Calculate Q.D. from the following data.\n⟦table:X (less than)¦10¦20¦30¦40¦50¦60¦70;Frequency¦5¦8¦15¦20¦30¦33¦35⟧', '12.59'),
  entry('mx6', 'Q6', 'Calculate the appropriate measure of dispersion for the following open-end data.\n⟦table:Wages (₹)¦Less than 35¦35–40¦40–45¦45–50¦50–55¦55–60;No. of workers¦15¦50¦85¦40¦27¦33⟧', '4.97'),
  entry('mx7', 'Q7', 'Calculate Q.D. for the following data.\n⟦table:Height of plants (feet)¦2–4¦4–6¦6–8¦8–10¦10–12¦12–14¦14–16;No. of plants¦15¦20¦25¦12¦18¦13¦17⟧', '3.25'),
  entry('mx8', 'Q8(i)', 'For 25, 21, 23, 29, 27, 22, 28, 23, 27, 25,\nFind Variance.', '6.6'),
  choice('mx9', 'Q8(ii)', 'For 25, 21, 23, 29, 27, 22, 28, 23, 27, 25,\nFind Standard Deviation (S. D.)', '√{6.6}', ['6.6', '√{5.6}', '√{7.6}']),
  entry('mx10', 'Q9(i)', 'Following data gives no. of goals scored by a team in 100 matches.\nCompute Variance.\n⟦table:No. of goals scored¦0¦1¦2¦3¦4¦5;No. of matches¦15¦20¦25¦15¦20¦5⟧', '2.16', { compactTable: true }),
  choice('mx11', 'Q9(ii)', 'Following data gives no. of goals scored by a team in 100 matches.\nCompute Standard Deviation (S. D.)\n⟦table:No. of goals scored¦0¦1¦2¦3¦4¦5;No. of matches¦15¦20¦25¦15¦20¦5⟧', '√{2.16}', ['2.16', '√{1.16}', '√{3.16}'], { compactTable: true }),
  entry('mx12', 'Q10(i)', '⟦table:C.I.¦45–55¦55–65¦65–75¦75–85¦85–95¦95–105;f¦4¦2¦5¦3¦6¦5⟧\nCompute arithmetic mean.\n(Given √{296} = 17.20)', '78'),
  entry('mx13', 'Q10(ii)', '⟦table:C.I.¦45–55¦55–65¦65–75¦75–85¦85–95¦95–105;f¦4¦2¦5¦3¦6¦5⟧\nCompute S.D. correct to two decimal places.\n(Given √{296} = 17.20)', '17.20'),
  entry('mx14', 'Q10(iii)', '⟦table:C.I.¦45–55¦55–65¦65–75¦75–85¦85–95¦95–105;f¦4¦2¦5¦3¦6¦5⟧\nCompute C.V. as a percentage correct to two decimal places.\n(Given √{296} = 17.20)', '22.05%', { requiresPercent: true }),
  entry('mx15', 'Q11(i)', 'The mean and S.D. of 200 items were calculated as 60 and 20 respectively.\nTwo items were wrongly taken as 3 and 67 instead of 13 and 17.\nFind the correct mean.', '59.8'),
  entry('mx16', 'Q11(ii)', 'The mean and S.D. of 200 items were calculated as 60 and 20 respectively.\nTwo items were wrongly taken as 3 and 67 instead of 13 and 17.\nFind the correct variance.', '403.76'),
  entry('mx17', 'Q12(i)', 'The mean and S.D. of 48 observations are 40 and 8 respectively.\nIf two more observations 60 and 65 are added to set.\nFind the mean of 50 observations.', '40.9'),
  choice('mx18', 'Q12(ii)', 'The mean and S.D. of 48 observations are 40 and 8 respectively.\nIf two more observations 60 and 65 are added to set.\nFind the Standard Deviation of 50 items.', '√{81.13}', ['81.13', '√{80.13}', '√{82.13}']),
  choice('mx19', 'Q13', 'The mean height of 200 students is 65 inches.\nThe mean heights of boys and girls are 70 inches and 62 inches respectively and the standard deviations are 8 and 10 respectively.\nFind the number of boys and the combined S.D.', '75 Boys, Combined S.D. √{101.5}', ['125 Boys, Combined S.D. √{101.5}', '75 Boys, Combined S.D. 101.5', '125 Boys, Combined S.D. √{100.5}']),
  choice('mx21', 'Q14', 'From the following data available for 5 pairs of observations of two variables x and y,\nobtain the combined S.D. for all 10 observations.\nWhere, ⟦sum:x¦1⟧ = 30, ⟦sum:y¦1⟧ = 40, ⟦sum:x¦2⟧ = 225, ⟦sum:y¦2⟧ = 340', '√{7.5}', ['7.5', '√{6.5}', '√{8.5}']),
  choice('mx22', 'Q15', 'The mean and standard deviations of two brands of watches are given below:\n⟦table:¦Brand-I¦Brand-II;Mean¦36 months¦48 months;S.D.¦8 months¦10 months⟧\nCalculate coefficient of variation for the two brands and interpret the results.', 'CV⟦sub:B-I⟧ = 22.22%, CV⟦sub:B-II⟧ = 20.83%, Brand-I is more variable', ['CV⟦sub:B-I⟧ = 20.83%, CV⟦sub:B-II⟧ = 22.22%, Brand-II is more variable', 'CV⟦sub:B-I⟧ = 22.22%, CV⟦sub:B-II⟧ = 20.83%, Brand-II is more variable', 'CV⟦sub:B-I⟧ = 20.83%, CV⟦sub:B-II⟧ = 22.22%, Brand-I is more variable'], { compactTable: true }),
  entry('mx25', 'Q16', '⟦table:C.I.¦5–15¦15–25¦25–35¦35–45¦45–55¦55–65¦65–75;f¦6¦7¦15¦25¦8¦18¦21⟧\nCalculate coefficient of variation as a percentage correct to two decimal places.', '39.49%', { requiresPercent: true })
];

export const activities2 = [
  entry('ac1', 'Activity 2.1 · Step 1', 'For daily sugar sales 120, 75, 33, 140.5, 50 and 70.5 kg,\nidentify L.', '140.5'),
  entry('ac2', 'Activity 2.1 · Step 2', 'For daily sugar sales 120, 75, 33, 140.5, 50 and 70.5 kg,\nidentify S.', '33'),
  entry('ac3', 'Activity 2.1 · Step 3', 'For daily sugar sales 120, 75, 33, 140.5, 50 and 70.5 kg,\nCalculate the range in kg.', '107.5'),
  entry('ac4', 'Activity 2.2 · Step 1', 'For 2, 4, 5, 6, 8, 10, 12, 14, 20, 30, 60,\nEnter the position number of Q1.', '3'),
  entry('ac5', 'Activity 2.2 · Step 2', 'For the ordered data 2, 4, 5, 6, 8, 10, 12, 14, 20, 30, 60,\nEnter Q1.', '5'),
  entry('ac6', 'Activity 2.2 · Step 3', 'For the ordered data 2, 4, 5, 6, 8, 10, 12, 14, 20, 30, 60,\nEnter the position number of Q3.', '9'),
  entry('ac7', 'Activity 2.2 · Step 4', 'For the ordered data 2, 4, 5, 6, 8, 10, 12, 14, 20, 30, 60,\nEnter Q3.', '20'),
  entry('ac8', 'Activity 2.2 · Step 5', 'For the ordered data 2, 4, 5, 6, 8, 10, 12, 14, 20, 30, 60,\nEnter the interquartile range.', '15'),
  entry('ac9', 'Activity 2.3 · Step 1', 'Returns for four years are ₹1000, ₹3000, ₹4500 and ₹5000.\nFind the mean.', '3375'),
  choice('ac10', 'Activity 2.3 · Step 2', 'Returns for four years are ₹1000, ₹3000, ₹4500 and ₹5000.\nThe deviations x − x̄ are', '−2375, −375, 1125, 1625', ['2375, 375, −1125, −1625', '−3375, −375, 1125, 5000', '−2375, 375, 1125, 1625']),
  choice('ac11', 'Activity 2.3 · Step 3', 'Returns for four years are ₹1000, ₹3000, ₹4500 and ₹5000.\nThe squared deviations are', '5640625, 140625, 1265625, 2640625', ['2375, 375, 1125, 1625', '5640625, 140625, 1125625, 2640625', '5640625, 140625, 1265625, 2460625']),
  entry('ac12', 'Activity 2.3 · Step 4', 'For returns ₹1000, ₹3000, ₹4500 and ₹5000,\nFind Σ(x − x̄)².', '9687500'),
  entry('ac13', 'Activity 2.3 · Step 5', 'For returns ₹1000, ₹3000, ₹4500 and ₹5000,\nFind Var(X).', '2421875'),
  entry('ac14', 'Activity 2.3 · Step 6', 'For returns ₹1000, ₹3000, ₹4500 and ₹5000,\nFind S.D. correct to two decimal places.', '1556.24'),
  choice('ac15', 'Activity 2.4 · Step 1', 'The first student group records prices of', 'rice', ['wheat', 'sugar', 'tur-dal']),
  choice('ac16', 'Activity 2.4 · Step 2', 'The second student group records prices of', 'wheat', ['rice', 'sugar', 'tur-dal']),
  choice('ac17', 'Activity 2.4 · Step 3', 'The third student group records prices of', 'sugar', ['rice', 'wheat', 'tur-dal']),
  choice('ac18', 'Activity 2.4 · Step 4', 'The fourth student group records prices of', 'tur-dal', ['rice', 'wheat', 'sugar']),
  choice('ac19', 'Activity 2.4 · Step 5', 'Each group records its item price in', '10 shops', ['4 shops', '5 shops', '20 shops']),
  choice('ac20', 'Activity 2.4 · Step 6', 'For each grocery item, every group finds', 'mean and standard deviation', ['median only', 'range only', 'mode only']),
  choice('ac21', 'Activity 2.4 · Step 7', 'The prices collected for rice, wheat, sugar and tur-dal may also be used to calculate', 'partition values', ['only the largest value', 'only the smallest value', 'no statistical value'])
];
