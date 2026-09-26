// Mathematics & Statistics, Part 2, Unit 1: Partition Values.
const subscriptDigits = value => String(value).replace(/\d/g, digit => '₀₁₂₃₄₅₆₇₈₉'[Number(digit)]);
const formatPartitionSymbols = value => String(value)
  .replace(/\b([QDP])(\d{1,3})\b/g, (_, symbol, index) => `${symbol}${subscriptDigits(index)}`)
  .replace(/i\s*\(\s*n\s*([+−-])\s*(1|i)\s*\)\/(100|10|4)\b/g, (_, sign, term, denominator) => `⟦frac:i ( n ${sign === '-' ? '−' : sign} ${term} )¦${denominator}⟧`)
  .replace(/\(\s*n\s*([+−-])\s*i\s*\)\/(100|10|4)\b/g, (_, sign, denominator) => `⟦frac:( n ${sign === '-' ? '−' : sign} i )¦${denominator}⟧`)
  .replace(/\b(i|\d+)N(?:th)?\/(100|10|4)\b/g, (match, multiplier, denominator) => `${match.includes('th') ? '( ' : ''}⟦frac:${multiplier} N¦${denominator}⟧${match.includes('th') ? ' )ᵗʰ' : ''}`)
  .replace(/\bN\/i\b/g, '⟦frac:N¦i⟧')
  .replace(/\bith\b/g, 'i ᵗʰ')
  .replace(/\bNth\b/g, 'Nᵗʰ');
const choice = (id, source, prompt, correct, wrong) => {
  const formattedCorrect = formatPartitionSymbols(correct);
  return { id: `p2u1${id}`, source, type: 'choice', prompt: formatPartitionSymbols(prompt), options: [formattedCorrect, ...wrong.map(formatPartitionSymbols)], correct: formattedCorrect };
};
const entry = (id, source, prompt, correct) => ({ id: `p2u1${id}`, source, type: 'entry', prompt: formatPartitionSymbols(prompt), correct: String(correct) });
const C = (prefix, rows) => rows.map((row, index) => choice(`${prefix}${index + 1}`, ...row));
const E = (prefix, rows) => rows.map((row, index) => entry(`${prefix}${index + 1}`, ...row));
const groupedQuartileFormula = 'The formula of quartiles for grouped data is\nQᵢ = L + ⟦frac:h¦f⟧ ( ⟦frac:i N¦4⟧ − c.f. ),    i = 1, 2, 3\n\n';

const quartilePosition = (n, i) => i * (n + 1) / 4;
const decilePosition = (n, i) => i * (n + 1) / 10;
const percentilePosition = (n, i) => i * (n + 1) / 100;
const indexedSymbol = formatPartitionSymbols;
const ordinalSuffix = value => {
  if (!Number.isInteger(value)) return 'th';
  const lastTwo = Math.abs(value) % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return 'th';
  return ({ 1: 'st', 2: 'nd', 3: 'rd' })[Math.abs(value) % 10] || 'th';
};
const positionLabel = position => {
  const displayedPosition = Number(position.toFixed(2));
  const interpolated = !Number.isInteger(position);
  return `${displayedPosition}${ordinalSuffix(displayedPosition)} observation${interpolated ? ' (interpolated)' : ''}`;
};
const positionChoice = (id, source, symbol, n, i, divisor) => {
  const position = divisor === 4 ? quartilePosition(n, i) : divisor === 10 ? decilePosition(n, i) : percentilePosition(n, i);
  const label = positionLabel(position);
  const wrong = [...new Set([i * n / divisor, (n + 1) / divisor, n / i, position + 1, Math.max(1, position - 1)].map(positionLabel))]
    .filter(option => option !== label)
    .slice(0, 3);
  return choice(id, source, `For n = ${n}, the position of ${indexedSymbol(symbol)} is`, label, wrong);
};
const ex11q8 = 'Wages more than (₹): 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000\nNo. of workers: 160, 155, 137, 103, 57, 23, 10, 1, 0';
const ex13q1 = 'The following table gives frequency distribution of marks of 100 students in an examination.\n⟦table:Marks¦15–20¦20–25¦25–30¦30–35¦35–40¦40–45¦45–50;No. of students¦9¦12¦23¦31¦10¦8¦7⟧';
const ex13q2 = 'The following table gives the distribution of daily wages of 500 families in a certain city.\n⟦table:Daily wages¦Below 100¦100–200¦200–300¦300–400¦400–500¦500–600¦600 and above;No. of families¦50¦150¦180¦50¦40¦20¦10⟧';
const ex13q3 = 'From the following distribution, determine median graphically.\n⟦table:Daily wages (in ₹)¦Above 300¦Above 400¦Above 500¦Above 600¦Above 700¦Above 800¦Above 900;No. of employees¦520¦470¦399¦210¦105¦45¦7⟧';
const ex13q4 = 'The following frequency distribution shows the profit (in ₹) of shops in a particular area of city.\n⟦table:Profit per shop (in ₹000)¦0–10¦10–20¦20–30¦30–40¦40–50¦50–60;No. of shops¦12¦18¦27¦20¦17¦6⟧';
const ex13q5 = 'The following is frequency distribution of over time (per week) performed by various workers from a certain company.\n⟦table:Overtime (in hours)¦Below 8¦8–12¦12–16¦16–20¦20–24¦24 and above;No. of workers¦4¦8¦16¦18¦20¦14⟧';
const ex13q6 = '⟦table:Marks less than¦10¦20¦30¦40¦50¦60¦70¦80¦90;No. of students¦4¦6¦24¦46¦67¦86¦96¦99¦100⟧';
const ex13q7 = 'The following table shows the age distribution of head of the families in a certain country.\n⟦table:Age of head of family (in years)¦Under 35¦35–45¦45–55¦55–65¦65–75¦75 and above;Numbers (million)¦46¦85¦64¦75¦90¦40⟧';
const ex13q8 = 'The following table gives the distribution of females in an Indian village.\n⟦table:Age group¦0–10¦10–20¦20–30¦30–40¦40–50¦50–60¦60–70¦70–80¦80–90¦90–100;No. of females (in 000)¦175¦100¦68¦48¦25¦50¦23¦8¦2¦1⟧';
const ex13q9 = '⟦table:Weight of fishes (in gms)¦800–890¦900–990¦1000–1090¦1100–1190¦1200–1290¦1300–1390¦1400–1490;No. of fishes¦8¦16¦20¦25¦40¦6¦5⟧';
const ex13q10 = '⟦table:I.Q. of students¦60–69¦70–79¦80–89¦90–99¦100–109¦110–119¦120–129;No. of students¦20¦40¦50¦50¦20¦10¦10⟧';
const mxq4 = 'Weekly expenditure (₹1000): 0–2, 2–4, 4–6, 6–8, 8–10\nNo. of families: 14, x, 39, 7, 15; P25 = 2.880';
const mxq7 = 'Marks: 0–100, 100–200, 200–300, 300–400, 400–500, 500–600\nNo. of students: 130, 150, 190, 220, 280, 130';
const mxq8 = 'Class: 10–15, 15–20, 20–25, 25–30, 30–35, 35–40, 40–45\nFrequency: 8, 14, 8, 25, 15, 14, 6';
const mxq9 = 'I.Q.: 20–30, 30–40, 40–50, 50–60, 60–70, 70–80, 80–90, 90–100\nNo. of students: 41, 52, 64, 180, 67, 45, 40, 11';
const mxq10 = 'Height (cm): 145–150, 150–155, 155–160, 160–165, 165–170, 170–175, 175–180, 180–185\nNo. of students: 2, 5, 9, 15, 16, 7, 5, 1';
const mxq13 = 'The median of the following incomplete table is 92.\nFind the missing frequencies x, y\n⟦table:C.I.¦30–50¦50–70¦70–90¦90–110¦110–130¦130–150¦Total;f¦6¦x¦18¦20¦y¦10¦80⟧';
const mxq14 = 'A company produces tables which are packed in batches of 100.\nAn analysis of the defective tubes in different batches has received the following information given in table.\nEstimate the number of defective tubes in the central batch.\n⟦table:No. of defective tubes¦Less than 5¦5–9¦10–14¦15–19¦20–24¦25–29¦30 and above;No. of batches¦45¦51¦84¦39¦20¦8¦4⟧';
const mxq15 = 'In a college there are 500 students in junior college, 5% score less than 25 marks, 68 score from 26 to 30 marks,\n30% score from 31 to 35 marks, 70 score from 36 to 40 marks, 20% score from 41 to 45 marks and the rest score 46 and above marks.\nWhat is the median marks?';
const mxq16 = '⟦table:Daily wages more than (₹)¦100¦150¦200¦250¦300¦350¦400¦450¦500;No. of workers¦200¦188¦160¦124¦74¦49¦31¦15¦5⟧';
const mxq17 = 'Draw ogive of both the types for the following frequency distribution and hence find median.\n⟦table:Marks¦0–10¦10–20¦20–30¦30–40¦40–50¦50–60¦60–70¦70–80¦80–90¦90–100;No. of students¦5¦5¦8¦12¦16¦15¦10¦8¦5¦2⟧';
const mxq18Table = '⟦table:C.I.¦8–8.95¦9–9.95¦10–10.95¦11–11.95¦12–12.95;f¦5¦10¦20¦10¦5⟧';
const mxq19Table = '⟦table:Weight (kg)¦40–45¦45–50¦50–55¦55–60¦60–65¦65–70¦70–75¦75–80;No. of persons¦4¦15¦20¦30¦20¦10¦8¦4⟧';

const theoryAConcepts = C('ta', [
  ['Let’s Recall P1', 'When observations are arranged in ascending order, the middle value is called the', 'median', ['mode', 'mean', 'range']],
  ['Let’s Recall P1', 'The median divides an ordered data set into', 'two equal parts', ['three equal parts', 'four equal parts', 'ten equal parts']],
  ['Let’s Recall P1', 'For odd n, the position of the median is', '(n + 1)/2', ['n/2', '(n − 1)/2', '2n']],
  ['Let’s Recall P1', 'For even n, the median is the mean of observations at positions', 'n/2 and (n + 2)/2', ['(n + 1)/2 only', 'n/4 and 3n/4', '1 and n']],
  ['Theory P2', 'Values that divide ordered data into a required number of equal parts are called', 'partition values', ['class marks', 'frequencies', 'deviations']],
  ['Theory P2', 'The median is a partition value because it divides the data into', 'two equal parts', ['four equal parts', 'ten equal parts', 'one hundred equal parts']],
  ['Theory P3', 'The three principal types of partition values studied in this unit are', 'quartiles, deciles and percentiles', ['mean, median and mode', 'range, variance and deviation', 'frequency, class and tally']],
  ['Theory P3', 'Quartiles divide ordered observations into', 'four equal parts', ['two equal parts', 'ten equal parts', 'one hundred equal parts']],
  ['Theory P3', 'The number of quartiles is', '3', ['2', '4', '10']],
  ['Theory P3', 'The first or lower quartile is denoted by', 'Q1', ['Q2', 'Q3', 'D1']],
  ['Theory P3', 'The second quartile is denoted by', 'Q2', ['Q1', 'Q3', 'P2']],
  ['Theory P3', 'The third or upper quartile is denoted by', 'Q3', ['Q1', 'Q2', 'D3']],
  ['Theory P3', 'The percentage of observations below quartile Q₁ is', '25%', ['50%', '75%', '10%']],
  ['Theory P3', 'The percentage of observations below quartile Q₂ is', '50%', ['25%', '75%', '20%']],
  ['Theory P3', 'The percentage of observations below quartile Q₃ is', '75%', ['25%', '50%', '90%']],
  ['Theory P3', 'Which identity is correct?', 'Q2 = Median', ['Q1 = Median', 'Q3 = Median', 'Q1 = Q3']],
  ['Theory P3', 'For raw data containing n observations, the position of Qᵢ is', '⟦frac:i ( n + 1 )¦4⟧', ['⟦frac:iN¦10⟧', '⟦frac:i ( n − 1 )¦4⟧', '⟦frac:( n + i )¦4⟧']],
  ['Theory P3', 'If a partition position is fractional, the textbook method uses', 'linear interpolation between adjacent observations', ['rounding down only', 'rounding up only', 'the class midpoint']],
  ['Theory P3', 'Before calculating quartiles for raw data, observations must be arranged in', 'ascending order', ['random order', 'descending order only', 'frequency order']],
  ['Theory P3', 'For grouped data, the quartile class contains the', 'iNth/4 observation', ['iNth/10 observation', 'iNth/100 observation', '(N + i)th observation']],
  ['Theory P3', `${groupedQuartileFormula}L denotes the`, 'lower boundary of the quartile class', ['upper boundary', 'largest observation', 'total frequency']],
  ['Theory P3', `${groupedQuartileFormula}h denotes the`, 'class width of the quartile class', ['frequency of the quartile class', 'cumulative frequency', 'class mark']],
  ['Theory P3', `${groupedQuartileFormula}f  denotes the`, 'frequency of the quartile class', ['total frequency', 'preceding cumulative frequency', 'class width']],
  ['Theory P3', `${groupedQuartileFormula}c.f. denotes the`, 'less than cumulative frequency of the class just preceding the quartile class', ['frequency of the quartile class', 'total frequency', 'upper boundary']],
  ['Theory P3', `${groupedQuartileFormula}N denotes the`, 'total frequency', ['frequency of the quartile class', 'class width', 'lower boundary of the quartile class']],
  ['Theory P3', 'The central 50% of observations lies between', 'Q1 and Q3', ['Q1 and Q2', 'Q2 and Q3', 'D1 and D9']]
]);
const theoryAPositions = [
  positionChoice('tap1', 'Solved Example P3', 'Q1', 19, 1, 4),
  positionChoice('tap2', 'Solved Example P3', 'Q2', 19, 2, 4),
  positionChoice('tap3', 'Solved Example P3', 'Q3', 19, 3, 4),
  positionChoice('tap4', 'Solved Example P4', 'Q1', 12, 1, 4),
  positionChoice('tap5', 'Solved Example P4', 'Q2', 12, 2, 4),
  positionChoice('tap6', 'Solved Example P4', 'Q3', 12, 3, 4),
  positionChoice('tap7', 'Theory P5', 'Q1', 100, 1, 4),
  positionChoice('tap8', 'Theory P5', 'Q2', 100, 2, 4),
  positionChoice('tap9', 'Theory P5', 'Q3', 100, 3, 4),
  choice('tap10', 'Solved Example P3', 'For 19 ordered observations, Q1 is the value of the', '5th observation', ['4th observation', '10th observation', '15th observation']),
  choice('tap11', 'Solved Example P3', 'For 19 ordered observations, Q2 is the value of the', '10th observation', ['5th observation', '9th observation', '15th observation']),
  choice('tap12', 'Solved Example P3', 'For 19 ordered observations, Q3 is the value of the', '15th observation', ['5th observation', '10th observation', '14th observation']),
  choice('tap13', 'Solved Example P4', 'For the ordered wages 170, 180, 190, 200, 210, 220, 280, 310, 320, 330, 380, 400, Q1 equals', '192.5', ['190', '195', '200']),
  choice('tap14', 'Solved Example P4', 'For the ordered wages 170, 180, 190, 200, 210, 220, 280, 310, 320, 330, 380, 400, Q2 equals', '250', ['220', '245', '280']),
  choice('tap15', 'Solved Example P4', 'For the ordered wages 170, 180, 190, 200, 210, 220, 280, 310, 320, 330, 380, 400, Q3 equals', '327.5', ['320', '325', '330'])
];
const theoryAApplications = [
  choice(
    'taa1',
    'Practice P1–7',
    'The daily earnings (in ₹) of 12 workers are 420, 380, 510, 460, 390, 540, 480, 430, 570, 410, 490, 450.\nWhich method should be used to calculate the quartiles?',
    'Raw-data observation-position method',
    ['Grouped-data quartile formula', 'Less-than cumulative-frequency method', 'Graphical method only']
  ),
  {
    ...choice(
      'taa2',
      'Practice P1–7',
      'Why can the discrete-data method be used for the following distribution?\n⟦table:Number of books (X)¦1¦2¦3¦4¦5;No. of students (f)¦3¦7¦9¦6¦5⟧',
      'The exact value corresponding to every observation is known',
      ['The data are given in continuous class intervals', 'The values of the observations are unknown', 'The total frequency is less than 50']
    ),
    compactTable: true
  },
  {
    ...entry(
      'taa3',
      'Practice P1–7',
      'Calculate Q2 for the following discrete frequency distribution.\n⟦table:X¦5¦7¦9¦11¦13;f¦2¦4¦5¦6¦3;c.f.¦2¦6¦11¦17¦20⟧',
      9
    ),
    compactTable: true
  },
  {
    ...entry(
      'taa4',
      'Practice P1–7',
      'Calculate Q3 for the following discrete frequency distribution.\n⟦table:X¦20¦25¦30¦35¦40¦45;f¦3¦4¦5¦8¦2¦2;c.f.¦3¦7¦12¦20¦22¦24⟧',
      35
    ),
    compactTable: true
  },
  {
    ...entry(
      'taa5',
      'Practice P1–7',
      'The following is a less-than cumulative frequency distribution.\nFind the frequency of the 30–40 marks group.\n⟦table:Marks below¦20¦30¦40¦50¦60;No. of students¦8¦23¦47¦76¦100⟧',
      24
    ),
    compactTable: true
  },
  {
    ...choice(
      'taa6',
      'Practice P1–7',
      'The following is a less-than cumulative frequency distribution.\nFind the frequency of the 70–80 kg group.\n⟦table:Weight below (kg)¦50¦60¦70¦80¦90;No. of persons¦5¦18¦42¦73¦90⟧',
      '31',
      ['17', '24', '3']
    ),
    compactTable: true
  },
  {
    ...choice(
      'taa7',
      'Practice P1–7',
      'For the following grouped distribution, N = 120 and N/4 = 30. Which is the Q1 class?\n⟦table:Class interval¦0–10¦10–20¦20–30¦30–40¦40–50¦50–60;f¦8¦16¦30¦36¦20¦10;c.f.¦8¦24¦54¦90¦110¦120⟧',
      '20–30',
      ['0–10', '10–20', '30–40']
    ),
    compactTable: true
  },
  {
    ...entry(
      'taa8',
      'Practice P1–7',
      'For the following grouped distribution, calculate Q1 using the grouped-data formula.\nFor the Q1 class: L = 20, h = 10, f = 40, c.f. = 20 and N = 160.\n⟦table:Class interval¦10–20¦20–30¦30–40¦40–50¦50–60;f¦20¦40¦50¦30¦20;c.f.¦20¦60¦110¦140¦160⟧',
      25
    ),
    compactTable: true
  },
  {
    ...choice(
      'taa9',
      'Practice P1–7',
      'For the following grouped distribution, identify the Q3 class and calculate Q3.\n⟦table:Class interval¦0–20¦20–40¦40–60¦60–80¦80–100;f¦24¦48¦72¦72¦24;c.f.¦24¦72¦144¦216¦240⟧',
      'Q3 class: 60–80; Q3 = 70',
      ['Q3 class: 40–60; Q3 = 50', 'Q3 class: 60–80; Q3 = 75', 'Q3 class: 80–100; Q3 = 90']
    ),
    compactTable: true
  }
];
export const theoryPages1to7 = [...theoryAConcepts, ...theoryAPositions, ...theoryAApplications];

const theoryBConcepts = C('tb', [
  ['Theory P8', 'Deciles divide ordered observations into', '10 equal parts', ['4 equal parts', '2 equal parts', '100 equal parts']],
  ['Theory P8', 'The number of deciles is', '9', ['10', '4', '99']],
  ['Theory P8', 'Deciles are denoted by', 'D1, D2, …, D9', ['Q1, Q2, Q3', 'P1, P2, …, P99', 'D0, D1, …, D10']],
  ['Theory P8', 'For raw data, the position of Dᵢ is', 'i (n + 1)/10', ['i (n + 1)/4', 'iN/100', '(n + i)/10']],
  ['Theory P8', 'For grouped data, the decile class contains the', 'iNth/10 observation', ['iNth/4 observation', 'iNth/100 observation', 'Nth observation']],
  ['Theory P8', 'Percentiles divide ordered observations into', '100 equal parts', ['10 equal parts', '4 equal parts', '2 equal parts']],
  ['Theory P8', 'The number of percentiles is', '99', ['100', '9', '3']],
  ['Theory P8', 'Percentiles are denoted by', 'P1, P2, …, P99', ['D1, D2, …, D9', 'Q1, Q2, Q3', 'P0, P1, …, P100']],
  ['Theory P8-9', 'For raw data, the position of Pᵢ is', 'i (n + 1)/100', ['i (n + 1)/10', 'iN/4', '(n + i)/100']],
  ['Theory P9', 'For grouped data, the percentile class contains the', 'iNth/100 observation', ['iNth/10 observation', 'iNth/4 observation', 'Nth observation']],
  ['Theory P9', 'Which relation is correct?', 'Q2 = D5 = P50', ['Q1 = D5 = P50', 'Q3 = D5 = P50', 'Q2 = D2 = P20']],
  ['Theory P9', 'Which relation is correct?', 'Q1 = P25', ['Q1 = P50', 'Q2 = P25', 'Q3 = P25']],
  ['Theory P9', 'Which relation is correct?', 'Q3 = P75', ['Q3 = P25', 'Q2 = P75', 'Q1 = P75']],
  ['Let’s Think P9', 'D1 is equivalent to', 'P10', ['P1', 'P25', 'P50']],
  ['Let’s Think P9', 'P30 is equivalent to', 'D3', ['D1', 'D5', 'D7']],
  ['Let’s Think P9', 'D7 is equivalent to', 'P70', ['P7', 'P35', 'P75']],
  ['Theory P10', 'D4 identifies the value below which approximately what percentage of observations lie?', '40%', ['4%', '25%', '60%']],
  ['Theory P10', 'P21 identifies the value below which approximately what percentage of observations lie?', '21%', ['79%', '2.1%', '50%']],
  ['Theory P11', 'For grouped data, N represents', 'total frequency', ['class frequency only', 'class width', 'lower boundary']],
  ['Theory P11', 'The class containing iN/10 is called the', 'ith decile class', ['ith quartile class', 'median class only', 'percentile class']],
  ['Theory P11', 'The class containing iN/100 is called the', 'ith percentile class', ['ith decile class', 'quartile class', 'modal class']],
  ['Theory P12', 'A missing frequency can be found from a known partition value by', 'substituting it in the appropriate partition formula', ['using only the range', 'ignoring cumulative frequency', 'using the class mark as N']],
  ['Theory P13', 'If data are given by mid-values, class boundaries are obtained using', 'half the difference between consecutive mid-values', ['the total frequency', 'the largest frequency', 'the median only']],
  ['Theory P14', 'The limits of the middle 60% of observations are', 'P20 and P80', ['P30 and P70', 'P40 and P60', 'P10 and P90']],
  ['Theory P14', 'The limits of the middle 40% of observations are', 'P30 and P70', ['P20 and P80', 'P40 and P60', 'Q1 and Q3']]
]);
const theoryBPositions = [
  positionChoice('tbp1', 'Solved Example P9', 'D3', 10, 3, 10),
  positionChoice('tbp2', 'Solved Example P9', 'P70', 10, 70, 100),
  positionChoice('tbp3', 'Theory P10', 'D4', 95, 4, 10),
  positionChoice('tbp4', 'Theory P10', 'P55', 95, 55, 100),
  positionChoice('tbp5', 'Solved Example P11', 'D6', 15, 6, 10),
  positionChoice('tbp6', 'Solved Example P11', 'P85', 15, 85, 100),
  choice('tbp7', 'Solved Example P9', 'For the ordered data 169, 225, 289, 324, 325, 400, 625, 729, 784, 841, D3 equals', '299.5', ['289', '310.5', '324']),
  choice('tbp8', 'Solved Example P9', 'For the ordered data 169, 225, 289, 324, 325, 400, 625, 729, 784, 841, P70 equals', '697.8', ['625', '700', '729']),
  choice('tbp9', 'Solved Example P10', 'From the textbook defective-products table, D4 equals', '35', ['30', '40', '45']),
  choice('tbp10', 'Solved Example P10', 'From the textbook defective-products table, P55 equals', '40', ['35', '45', '55']),
  choice('tbp11', 'Solved Example P10-11', 'From the grouped profit data, D4 equals', '13', ['10', '12', '15']),
  choice('tbp12', 'Solved Example P10-11', 'From the grouped profit data, P21 equals', '8.89', ['5', '10', '13']),
  choice('tbp13', 'Theory P14', 'If 75% of observations lie below a value, that value is', 'Q3 or P75', ['Q1 or P25', 'Q2 or P50', 'D3 or P30']),
  choice('tbp14', 'Theory P14', 'If 20% of observations lie below a value, that value is', 'P20 or D2', ['P80 or D8', 'Q1', 'Q2']),
  choice('tbp15', 'Theory P15', 'When the desired partition position falls in a class, interpolation uses the frequency of', 'that partition class', ['the first class', 'the last class', 'the modal class only'])
];
export const theoryPages8to15 = [...theoryBConcepts, ...theoryBPositions];

export const theoryPages16to18 = C('tc', [
  ['Theory P16', 'An ogive is a', 'cumulative frequency curve', ['frequency polygon', 'bar diagram', 'pie chart']],
  ['Theory P16', 'The two types of ogives are', 'less than ogive and more than ogive', ['upper and lower ogive', 'positive and negative ogive', 'simple and compound ogive']],
  ['Theory P16', 'For a less than ogive, plot upper class boundaries against', 'less than cumulative frequencies', ['class frequencies', 'more than cumulative frequencies', 'class marks']],
  ['Theory P16', 'For a more than ogive, plot lower class boundaries against', 'more than cumulative frequencies', ['less than cumulative frequencies', 'class marks', 'relative frequencies']],
  ['Theory P16', 'The curve obtained by joining cumulative-frequency points smoothly is called an', 'ogive', ['histogram', 'frequency polygon', 'sector diagram']],
  ['Theory P17', 'To locate the median on an ogive, draw a horizontal line from', 'N/2 on the Y-axis', ['N/4 on the Y-axis', '2N on the X-axis', 'N on the X-axis']],
  ['Theory P17', 'To locate Qᵢ on an ogive, draw a horizontal line from', 'iN/4 on the Y-axis', ['iN/10 on the Y-axis', 'iN/100 on the Y-axis', 'N/i on the X-axis']],
  ['Theory P17', 'To locate Dᵢ on an ogive, draw a horizontal line from', 'iN/10 on the Y-axis', ['iN/4 on the Y-axis', 'iN/100 on the Y-axis', '10N/i on the X-axis']],
  ['Theory P17', 'To locate Pᵢ on an ogive, draw a horizontal line from', 'iN/100 on the Y-axis', ['iN/10 on the Y-axis', 'iN/4 on the Y-axis', '100N/i on the X-axis']],
  ['Theory P17', 'The intersection point of less than and more than ogives locates the', 'median', ['mode', 'mean', 'range']],
  ['Theory P17', 'Partition values obtained graphically are generally', 'approximate', ['always exact', 'always integers', 'undefined']],
  ['Solved Example P17', 'From the textbook marks ogive, Q2 is approximately', '27.5', ['25', '30', '40']],
  ['Solved Example P17', 'From the textbook marks ogive, D8 is approximately', '40', ['27.5', '30', '50']],
  ['Solved Example P17', 'From the textbook marks ogive, P60 is approximately', '30', ['27.5', '40', '60']],
  ['Solved Example P18', 'Before plotting discontinuous classes 10–14, 15–19, …, they are converted to', 'continuous classes 9.5–14.5, 14.5–19.5, …', ['class marks only', 'percentages', 'descending frequencies']],
  ['Solved Example P18', 'From the overtime-work ogive, Q1 is approximately', '18', ['11', '23', '25']],
  ['Solved Example P18', 'From the overtime-work ogive, the median is approximately', '23', ['18', '25', '29']],
  ['Solved Example P18', 'From the overtime-work ogive, P70 is approximately', '25', ['18', '23', '30']],
  ['Solved Example P18', 'From the overtime-work ogive, employees working less than 11 hours are approximately', '4', ['6', '11', '20']],
  ['Theory P17', 'After meeting the ogive, a perpendicular is drawn to the', 'X-axis to read the partition value', ['Y-axis to read total frequency', 'origin only', 'class-frequency column']],
  ['Theory P16', 'A zero cumulative frequency is assigned before the first class when drawing a', 'less than ogive', ['more than ogive', 'histogram', 'pie chart']],
  ['Theory P16', 'A zero cumulative frequency is assigned after the last class when drawing a', 'more than ogive', ['less than ogive', 'frequency polygon', 'bar graph']],
  ['Theory P17', 'The horizontal level used to locate Q1 is', 'N/4', ['N/2', '3N/4', 'N/10']],
  ['Theory P17', 'The horizontal level used to locate Q3 is', '3N/4', ['N/4', 'N/2', '3N/10']],
  ['Let’s Think P18', 'The overtime example can also be solved by drawing a', 'more than ogive', ['pie chart only', 'simple bar chart', 'scatter plot']]
]);

export const exercise11 = [
  ...E('e11', [
    ['Q1(i)', 'For series of observations : 16, 14.9, 11.5, 11.8, 11.1, 14.5, 14, 12, 10.9, 10.7, 10.6, 10.5, 13.5, 13, 12.6\nCompute quartile Q1', 10.9],
    ['Q1(ii)', 'For series of observations : 16, 14.9, 11.5, 11.8, 11.1, 14.5, 14, 12, 10.9, 10.7, 10.6, 10.5, 13.5, 13, 12.6\nCompute quartile Q2', 12],
    ['Q1(iii)', 'For series of observations : 16, 14.9, 11.5, 11.8, 11.1, 14.5, 14, 12, 10.9, 10.7, 10.6, 10.5, 13.5, 13, 12.6\nCompute quartile Q3', 14],
    ['Q2(i)', 'The heights (in cm) of 10 students are 148, 171, 158, 151, 154, 159, 152, 163, 171, 145.\nCalculate Q1', 150.25],
    ['Q2(ii)', 'The heights (in cm) of 10 students are 148, 171, 158, 151, 154, 159, 152, 163, 171, 145.\nCalculate Q3', 165],
    ['Q3', 'Monthly consumption of electricity (in units) of families in a certain locality is given below :\n205, 201, 190, 188, 194, 172, 210, 225, 215, 232, 260, 230.\nCalculate electricity consumption (in units) below which 25% of families lie.', 191],
    ['Q4', 'For the following data of daily expenditure of families (in ₹),\ncompute the expenditure below which 75% of families include their expenditure.\n⟦table:Daily Expenditure (in ₹)¦350¦450¦550¦650¦750;No. of families¦16¦19¦24¦28¦13⟧', 650],
    ['Q5(i)', 'Calculate quartile Q1 for the following frequency distribution :\n⟦table:No. of E-transactions per day¦0¦1¦2¦3¦4¦5¦6¦7;No. of days¦10¦35¦45¦95¦64¦32¦10¦9⟧', 2],
    ['Q5(ii)', 'Calculate quartile Q2 for the following frequency distribution :\n⟦table:No. of E-transactions per day¦0¦1¦2¦3¦4¦5¦6¦7;No. of days¦10¦35¦45¦95¦64¦32¦10¦9⟧', 3],
    ['Q5(iii)', 'Calculate quartile Q3 for the following frequency distribution :\n⟦table:No. of E-transactions per day¦0¦1¦2¦3¦4¦5¦6¦7;No. of days¦10¦35¦45¦95¦64¦32¦10¦9⟧', 4],
    ['Q6', 'The following is the frequency distribution of heights of 200 male adults in a factory :\n⟦table:Height in cm.¦No. of male adults;145–150¦4;150–155¦6;155–160¦25;160–165¦57;165–170¦64;170–175¦30;175–180¦8;180–185¦6⟧\nFind the central height.', 165.625],
    ['Q7(i)', 'The following is the data of pocket expenditure per week of 50 students in a class.\nIt is known that the median of the distribution is ₹120.\n⟦table:Expenditure per week (in ₹)¦0–50¦50–100¦100–150¦150–200¦200–250;No. of students¦7¦a¦15¦b¦3⟧\nFind missing frequency a.', 12],
    ['Q7(ii)', 'The following is the data of pocket expenditure per week of 50 students in a class.\nIt is known that the median of the distribution is ₹120.\n⟦table:Expenditure per week (in ₹)¦0–50¦50–100¦100–150¦150–200¦200–250;No. of students¦7¦a¦15¦b¦3⟧\nFind missing frequency b.', 13],
    ['Q8(i)', 'The following is the distribution of 160 workers according to the wages in a certain factory :\n⟦table:Wages more than (in ₹)¦No. of workers;8000¦160;9000¦155;10000¦137;11000¦103;12000¦57;13000¦23;14000¦10;15000¦1;16000¦0⟧\nDetermine quartile Q1.', 10500],
    ['Q8(ii)', 'The following is the distribution of 160 workers according to the wages in a certain factory :\n⟦table:Wages more than (in ₹)¦No. of workers;8000¦160;9000¦155;10000¦137;11000¦103;12000¦57;13000¦23;14000¦10;15000¦1;16000¦0⟧\nDetermine quartile Q2.', 11500],
    ['Q8(iii)', 'The following is the distribution of 160 workers according to the wages in a certain factory :\n⟦table:Wages more than (in ₹)¦No. of workers;8000¦160;9000¦155;10000¦137;11000¦103;12000¦57;13000¦23;14000¦10;15000¦1;16000¦0⟧\nDetermine quartile Q3.', 12500]
  ]),
  choice('e11q9', 'Q9', 'Following is grouped data for duration of fixed deposits of 100 senior citizens from a certain bank :\n⟦table:Fixed deposits (in days)¦0–180¦180–360¦360–540¦540–720¦720–900;No. of senior citizens¦15¦20¦25¦30¦10⟧\nCalculate the limits of fixed deposits of central 50% senior citizens.', '(270, 630)', ['(270, 360)', '(180, 630)', '(360, 630)']),
  entry('e11q10', 'Q10', 'Find the missing frequency given that the\nmedian of distribution is 1504.\n⟦table:Life in hours¦950–1150¦1150–1350¦1350–1550¦1550–1750¦1750–1950¦1950–2150;No. of bulbs¦20¦43¦100¦x¦23¦13⟧', 81)
];

export const exercise12 = [
  ...E('e12', [
  ['Q1(i)', 'For data : 79, 82, 36, 38, 51, 72, 68, 70, 64, 63\nCalculate D6.', 69.2],
  ['Q1(ii)', 'For data : 79, 82, 36, 38, 51, 72, 68, 70, 64, 63\nCalculate P85.', 80.05],
  ['Q2(i)', 'The daily wages (in ₹) of 15 labours are\n230, 400, 350, 200, 250, 380, 210, 225, 375, 180, 375, 450, 300, 350, 250\nCalculate D8.', 379],
  ['Q2(ii)', 'The daily wages (in ₹) of 15 labours are\n230, 400, 350, 200, 250, 380, 210, 225, 375, 180, 375, 450, 300, 350, 250\nCalculate P90.', 420],
  ['Q3(i)', 'Calculate 2nd decile for the following :\n⟦table:x¦80¦100¦120¦145¦200¦280¦310¦380¦400¦410;f¦15¦18¦25¦27¦40¦25¦19¦16¦8¦7⟧', 120],
  ['Q3(ii)', 'Calculate 65th percentile for the following :\n⟦table:x¦80¦100¦120¦145¦200¦280¦310¦380¦400¦410;f¦15¦18¦25¦27¦40¦25¦19¦16¦8¦7⟧', 280],
  ['Q4(i)', 'From the following data calculate the rent of 15th house.\n⟦table:House Rent (in ₹)¦11000¦12000¦13000¦14000¦15000¦16000¦17000¦18000;No. of houses¦25¦17¦13¦14¦15¦8¦6¦2⟧', 11000],
  ['Q4(ii)', 'From the following data calculate the rent of 65th house.\n⟦table:House Rent (in ₹)¦11000¦12000¦13000¦14000¦15000¦16000¦17000¦18000;No. of houses¦25¦17¦13¦14¦15¦8¦6¦2⟧', 14000],
  ['Q4(iii)', 'From the following data calculate the rent of 91st house.\n⟦table:House Rent (in ₹)¦11000¦12000¦13000¦14000¦15000¦16000¦17000¦18000;No. of houses¦25¦17¦13¦14¦15¦8¦6¦2⟧', 16000],
  ['Q5(i)', 'The following frequency distribution shows the weight of students in a class.\n⟦table:Weight (in kg)¦40¦45¦50¦55¦60¦65;Number of Students¦15¦40¦29¦21¦10¦5⟧\nFind the percentage of students whose weight is more than 50 kg.', 30],
  ['Q5(ii)', 'The following frequency distribution shows the weight of students in a class.\n⟦table:Weight (in kg)¦40¦45¦50¦55¦60¦65;Number of Students¦15¦40¦29¦21¦10¦5⟧\nIf the weight column provided is of mid values then,\nfind the percentage of students whose weight is more than 50 kg.', 42],
  ['Q6(i)', 'Calculate D4 from the following data:\n⟦table:Mid Value¦2.5¦7.5¦12.5¦17.5¦22.5¦Total;Frequency¦7¦18¦25¦30¦20¦100⟧', 13],
  ['Q6(ii)', 'Calculate P48 from the following data:\n⟦table:Mid Value¦2.5¦7.5¦12.5¦17.5¦22.5¦Total;Frequency¦7¦18¦25¦30¦20¦100⟧', 14.6],
  ['Q7(i)', 'Calculate D9 of the following distribution.\n⟦table:Length (in Inches)¦0–20¦20–40¦40–60¦60–80¦80–100¦100–120;No. of units¦1¦14¦35¦85¦90¦15⟧', 98],
  ['Q7(ii)', 'Calculate P20 of the following distribution.\n⟦table:Length (in Inches)¦0–20¦20–40¦40–60¦60–80¦80–100¦100–120;No. of units¦1¦14¦35¦85¦90¦15⟧', 58.86]
  ]),
  choice('e12q8', 'Q8', 'Weekly wages for group of 100 persons are given below :\n⟦table:Weekly wages (in Rs.)¦0–500¦500–1000¦1000–1500¦1500–2000¦2000–2500;No. of persons¦7¦a¦25¦30¦b⟧\nD3 for this group is Rs. 1100. Calculate the missing frequencies a, b.', '(18, 20)', ['(20, 18)', '(17, 21)', '(22, 16)']),
  choice('e12q9', 'Q9', 'The weekly profit (in rupees) of 100 shops are distributed as follows :\n⟦table:Profit per shop¦0–1000¦1000–2000¦2000–3000¦3000–4000¦4000–5000¦5000–6000¦6000–7000;No. of Shops¦10¦16¦26¦20¦20¦5¦3⟧\nFind the limits of the profit of middle 60% of the shops.', '(P20, P80) = (1625, 4400)', ['(P20, P80) = (1500, 4500)', '(P30, P70) = (1625, 4400)', '(P20, P80) = (1600, 4600)']),
  ...E('e12tail', [
    ['Q10', 'In a particular factory, workers produce various types of output units.\nThe following distribution was obtained\n⟦table:Output units Produced¦70–74¦75–79¦80–84¦85–89¦90–94¦95–99¦100–104;No. of workers¦40¦45¦50¦60¦70¦80¦100⟧\nFind the percentage of workers who have produced less than 82 output units.', 24.72]
  ])
];

export const exercise13 = [
  ...E('e13', [
    ['Q1(i)', `${ex13q1}\nDetermine Q1 graphically.`, 26],
    ['Q1(ii)', `${ex13q1}\nDetermine D6 graphically.`, 32.5],
    ['Q1(iii)', `${ex13q1}\nDetermine P85 graphically.`, 40]
  ]),
  choice('e13q2', 'Q2', `${ex13q2}\nDraw a ‘less than’ ogive for the above data. Determine the median income and obtain the limits of income of central 50% of the families.`, '150, 228, 298', ['150, 228, 300', '148, 225, 298', '150, 250, 350']),
  ...E('e13tail', [
    ['Q3', ex13q3, 574]
  ]),
  choice('e13q4i', 'Q4(i)', `${ex13q4}\nFind graphically the limits of middle 40% shops:`, '20, 36.5', ['20, 35', '18, 36.5', '22, 38']),
  ...E('e13tail2', [
  ['Q4(ii)', `${ex13q4}\nFind graphically the number of shops having profit less than ₹35,000.`, 67],
  ['Q5(i)', `${ex13q5}\nDetermine D2 graphically.`, 13],
  ['Q5(ii)', `${ex13q5}\nDetermine Q2 graphically.`, 19],
  ['Q5(iii)', `${ex13q5}\nDetermine P61 graphically.`, 21.2],
  ['Q6(i)', `Draw ogive for the following data and hence find the value of D1.\n${ex13q6}`, 22],
  ['Q6(ii)', `Draw ogive for the following data and hence find the value of Q1.\n${ex13q6}`, 30.5],
  ['Q6(iii)', `Draw ogive for the following data and hence find the value of P40.\n${ex13q6}`, 37]
  ]),
  choice('e13q7', 'Q7', `${ex13q7}\nDetermine the third, fifth and eighth decile of the distribution graphically.`, '44, 55.5, 68', ['42, 55.5, 70', '44, 57.5, 68', '45, 56, 70']),
  ...E('e13tail3', [
    ['Q8', `${ex13q8}\nDetermine the median age graphically.`, 17.5]
  ]),
  choice('e13q9', 'Q9', `Draw ogive for the following distribution and hence find graphically the limits of weight of middle 50% fishes.\n${ex13q9}`, '1025, 1248', ['1000, 1250', '1025, 1250', '1050, 1248']),
  ...E('e13tail4', [
  ['Q10(i)', `Find graphically the values of D3 for the data given below :\n${ex13q10}`, 79.5],
  ['Q10(ii)', `Find graphically the values of P65 for the data given below :\n${ex13q10}`, 93.5]
  ])
];

export const letsRemember1 = C('lr', [
  ["Let’s Remember P20", 'Partition values divide a distribution into', 'a required number of equal parts', ['unequal classes only', 'two parts only', 'random groups']],
  ["Let’s Remember P20", 'Quartiles divide a distribution into', '4 equal parts', ['10 equal parts', '100 equal parts', '2 equal parts']],
  ["Let’s Remember P20", 'Deciles divide a distribution into', '10 equal parts', ['4 equal parts', '100 equal parts', '9 equal parts']],
  ["Let’s Remember P20", 'Percentiles divide a distribution into', '100 equal parts', ['10 equal parts', '99 equal parts', '4 equal parts']],
  ["Let’s Remember P20", 'For raw data, the position of Qᵢ is', 'i (n + 1)/4', ['iN/4 − c.f.', 'i (n + 1)/10', 'i (n + 1)/100']],
  ["Let’s Remember P20", 'For raw data, the position of Dᵢ is', 'i (n + 1)/10', ['i (n + 1)/4', 'iN/10 − c.f.', 'i (n + 1)/100']],
  ["Let’s Remember P20", 'For raw data, the position of Pᵢ is', 'i (n + 1)/100', ['i (n + 1)/10', 'i (n + 1)/4', 'iN/100 − c.f.']],
  ["Let’s Remember P20", 'For grouped data, Qᵢ uses the class containing', 'iN/4', ['iN/10', 'iN/100', 'N/i']],
  ["Let’s Remember P20", 'Approximate partition values can be determined using an', 'ogive', ['ordinary bar chart', 'pie chart', 'pictograph']],
  ["Let’s Remember P20", 'Which identity is correct?', 'Median = Q2 = D5 = P50', ['Median = Q1 = D5', 'Median = Q3 = P75', 'Median = D1 = P10']],
  ["Let’s Remember P20", 'The correct quartile order is', 'Q1 < Q2 < Q3', ['Q3 < Q2 < Q1', 'Q1 = Q2 = Q3', 'Q2 < Q1 < Q3']],
  ["Let’s Remember P20", 'The correct decile order begins', 'D1 < D2 < D3 < … < D9', ['D9 < D8 < … < D1', 'D1 = D2 = … = D9', 'D1 < Q1 < P1 only']]
]);

export const miscellaneousExercise1 = [
  ...E('mx', [
  ['Q1(i)', 'The data gives number of accidents per day on a railway track,\n4, 2, 3, 5, 6, 3, 4, 1, 2, 3, 2, 3, 4, 3, 2.\nCompute Q2', 3],
  ['Q1(ii)', 'The data gives number of accidents per day on a railway track,\n4, 2, 3, 5, 6, 3, 4, 1, 2, 3, 2, 3, 4, 3, 2.\nCompute P17', 2],
  ['Q1(iii)', 'The data gives number of accidents per day on a railway track,\n4, 2, 3, 5, 6, 3, 4, 1, 2, 3, 2, 3, 4, 3, 2.\nCompute D7', 4],
  ['Q2(i)', 'The distribution of daily sales of shoes (size wise) for 100 days from a certain shop is :\n⟦table:Shoe size¦2¦3¦4¦5¦6¦7¦8;No. of days¦14¦20¦13¦19¦13¦13¦8⟧\nCompute Q2.', 5],
  ['Q2(ii)', 'The distribution of daily sales of shoes (size wise) for 100 days from a certain shop is :\n⟦table:Shoe size¦2¦3¦4¦5¦6¦7¦8;No. of days¦14¦20¦13¦19¦13¦13¦8⟧\nCompute D1.', 2],
  ['Q2(iii)', 'The distribution of daily sales of shoes (size wise) for 100 days from a certain shop is :\n⟦table:Shoe size¦2¦3¦4¦5¦6¦7¦8;No. of days¦14¦20¦13¦19¦13¦13¦8⟧\nCompute P95.', 8]
  ]),
  choice('mxq3', 'Q3', 'Ten students appeared for a test in Mathematics and Statistics and they obtained the marks as follows:\n⟦table:Subject¦Marks;Mathematics¦42, 38, 36, 32, 23, 25, 35, 37, 25, 23;Statistics¦22, 26, 29, 34, 50, 45, 23, 28, 32, 36⟧\nIf the median will be the criteria, in which subject, the level of knowledge of the students is higher?', 'Knowledge of Mathematics is higher than Statistics.', ['Knowledge of Statistics is higher than Mathematics.', 'Both subjects have the same level of knowledge.']),
  ...E('mxtail', [
  ['Q4', 'In the frequency distribution of families given below,\nthe number of families corresponding to expenditure group 2000–4000 is missing from the table.\nHowever value of 25th percentile is 2880.\nFind the missing frequency x.\n⟦table:Expenditure (in ₹)¦0–2000¦2000–4000¦4000–6000¦6000–8000¦8000–10000;No. of families¦14¦x¦39¦7¦15⟧', 25],
  ['Q5(i)', 'Calculate Q1 for the following data :\n⟦table:Mid values¦25¦75¦125¦175¦225¦275;Frequency¦10¦70¦80¦100¦150¦90⟧', 128.125],
  ['Q5(ii)', 'Calculate D6 for the following data :\n⟦table:Mid values¦25¦75¦125¦175¦225¦275;Frequency¦10¦70¦80¦100¦150¦90⟧', 213.33],
  ['Q5(iii)', 'Calculate P15 for the following data :\n⟦table:Mid values¦25¦75¦125¦175¦225¦275;Frequency¦10¦70¦80¦100¦150¦90⟧', 96.43]
  ]),
  choice('mxq6', 'Q6', 'Daily income for a group of 100 workers are given below,\nP30 for this group is ₹110. Calculate missing frequencies x, y.\n⟦table:Daily income (in ₹)¦0–50¦50–100¦100–150¦150–200¦200–250;No. of workers¦7¦x¦25¦30¦y⟧', '18, 20', ['20, 18', '17, 21', '22, 16']),
  ...E('mxtail2', [
  ['Q7', 'The distribution of a sample of students appearing for a C.A. examination is given below,\nHelp C.A. institute to decide cut off marks for qualifying the examination,\nwhen 3% students pass the examination.\n⟦table:Marks¦0–100¦100–200¦200–300¦300–400¦400–500¦500–600;No. of students¦130¦150¦190¦220¦280¦130⟧', 575],
  ['Q8(i)', 'Determine graphically the value of median for the data given below :\n⟦table:Class¦10–15¦15–20¦20–25¦25–30¦30–35¦35–40¦40–45;Frequency¦8¦14¦8¦25¦15¦14¦6⟧', 29],
  ['Q8(ii)', 'Determine graphically the value of D3 for the data given below :\n⟦table:Class¦10–15¦15–20¦20–25¦25–30¦30–35¦35–40¦40–45;Frequency¦8¦14¦8¦25¦15¦14¦6⟧', 25],
  ['Q8(iii)', 'Determine graphically the value of P35 for the data given below :\n⟦table:Class¦10–15¦15–20¦20–25¦25–30¦30–35¦35–40¦40–45;Frequency¦8¦14¦8¦25¦15¦14¦6⟧', 26],
  ['Q9', 'The I.Q. test of 500 students of a college is given below,\nFind graphically the number of students whose I.Q. is more than 55 graphically.\n⟦table:I.Q.¦20–30¦30–40¦40–50¦50–60¦60–70¦70–80¦80–90¦90–100;No. of students¦41¦52¦64¦180¦67¦45¦40¦11⟧', 256],
  ['Q10', 'Draw an ogive for the following distribution.\nDetermine the median graphically and verify your result by mathematical formula.\n⟦table:Height (in cm)¦145–150¦150–155¦155–160¦160–165¦165–170¦170–175¦175–180¦180–185;No. of students¦2¦5¦9¦15¦16¦7¦5¦1⟧', 165],
  ['Q11', 'In a group of 25 students 7 students failed and 6 students got distinction and\nthe marks of remaining 12 students are 61, 36, 44, 59, 52, 56, 41, 37, 39, 38, 41, 64.\nFind the median marks of the whole group.', 41],
  ['Q12', 'The median weight of a group of 79 students is found to be 55 kg.\n6 more students are added to this group whose weights are 50, 51, 52, 59.5, 60, 61 kg.\nWhat will be the value of median of the combined group if the lowest and the highest weights were 53 kg and 59 kg respectively?', 55]
  ]),
  choice('mxq13', 'Q13', mxq13, '14, 12', ['12, 14', '16, 10', '10, 16']),
  ...E('mxtail3', [
  ['Q14', mxq14, 11],
  ['Q15', mxq15, 36]
  ]),
  choice('mxq16', 'Q16', `Draw a cumulative frequency curve more than type for the following data and\nhence locate Q1 and Q3.\n${mxq16}`, '(Q1, Q3) = (220, 340)', ['(Q1, Q3) = (210, 330)', '(Q1, Q3) = (230, 350)', '(Q1, Q3) = (200, 320)']),
  ...E('mxtail4', [
  ['Q16(i)', `Draw a cumulative frequency curve more than type for the following data, after locating Q1 and Q3,\nfind the number of workers with daily wages between ₹170 and ₹260.\n${mxq16}`, 62],
  ['Q16(ii)', `Draw a cumulative frequency curve more than type for the following data, after locating Q1 and Q3,\nfind the number of workers with daily wages less than ₹260.\n${mxq16}`, 86],
  ['Q17', mxq17, 48],
  ['Q18(i)', `Find Q1 for the following data :\n${mxq18Table}`, 9.725],
  ['Q18(ii)', `Find D6 for the following data :\n${mxq18Table}`, 10.725],
  ['Q18(iii)', `Find P78 for the following data :\n${mxq18Table}`, 11.375]
  ]),
  choice('mxq19', 'Q19', `For below data, find all quartiles\n${mxq19Table}`, '(Q1, Q2, Q3) = (52.1875, 57.75, 63.5625)', ['(Q1, Q2, Q3) = (50.1875, 55.75, 61.5625)', '(Q1, Q2, Q3) = (53.1875, 58.75, 64.5625)', '(Q1, Q2, Q3) = (51.1875, 56.75, 62.5625)']),
  ...E('mxtail5', [
  ['Q19', `For below data, find number of persons weighing between 57 kg and 72 kg.\n${mxq19Table}`, 51],
  ['Q20', 'For the following data showing weights of 100 employees,\nfind the maximum weight of the lightest 25% of employees.\n⟦table:Weight (kg)¦45–50¦50–55¦55–60¦60–65¦65–70¦70–75¦75–80;No. of employees¦6¦8¦15¦26¦20¦14¦11⟧', 58.67]
  ])
];

export const activities1 = C('ac', [
  ['Activity 1.1 · Step 1', 'To divide ordered marks into four equal parts, use', 'quartiles', ['deciles', 'percentiles', 'the mean']],
  ['Activity 1.1 · Step 2', 'The three values required to divide marks into four equal parts are', 'Q1, Q2 and Q3', ['D1, D2 and D3', 'P1, P2 and P3', 'mean, median and mode']],
  ['Activity 1.1 · Step 3', 'To divide ordered marks into ten equal parts, use', 'deciles', ['quartiles', 'percentiles', 'class marks']],
  ['Activity 1.1 · Step 4', 'The number of decile values used to divide data into ten equal parts is', '9', ['10', '4', '99']],
  ['Activity 1.1 · Step 5', 'Before finding partition values for classroom marks, first arrange the marks in', 'ascending order', ['random order', 'alphabetical order', 'descending frequency']],
  ['Activity 1.2 · Step 1', 'For marks 18, 24, 31, 35, 42, the number of students is', '5', ['4', '6', '150']],
  ['Activity 1.2 · Step 2', 'For marks 18, 24, 31, 35, 42, the average mark is', '30', ['24', '31', '35']],
  ['Activity 1.2 · Step 3', 'For marks 18, 24, 31, 35, 42, the median mark is', '31', ['24', '30', '35']],
  ['Activity 1.2 · Step 4', 'For marks 18, 24, 31, 35, 42, the student with the middle score obtained', '31 marks', ['24 marks', '30 marks', '35 marks']],
  ['Activity 1.2 · Step 5', 'The score below which 75% of ordered observations lie is', 'Q3', ['Q1', 'Q2', 'D3']],
  ['Activity 1.3 · Step 1', 'Students with attendance below 50% are placed in the', 'black list', ['quartile list', 'merit list', 'frequency list']],
  ['Activity 1.3 · Step 2', 'The partition value corresponding to 50% is', 'Q2 or P50', ['Q1 or P25', 'Q3 or P75', 'D1 or P10']],
  ['Activity 1.3 · Step 3', 'To estimate the number of students below 50% attendance graphically, use an', 'ogive', ['pie chart only', 'pictograph', 'simple bar chart only']],
  ['Activity 1.3 · Step 4', 'On a less than ogive, the number below 50% attendance is read on the', 'Y-axis', ['X-axis', 'title', 'class-width column']],
  ['Activity 1.3 · Step 5', 'On the ogive, begin at attendance 50 on the X-axis and draw a line parallel to the', 'Y-axis', ['X-axis', 'class interval', 'curve']],
  ['Activity 1.4 · Step 1', 'Six equally placed fire exits divide the 114-floor building into', '7 approximately equal sections', ['6 sections', '10 sections', '100 sections']],
  ['Activity 1.4 · Step 2', 'For 114 floors divided by six internal partition points, the first ideal position is approximately', '16.3', ['19', '28.5', '57']],
  ['Activity 1.4 · Step 3', 'A practical first fire-exit floor nearest to 114/7 is', '16', ['7', '19', '57']],
  ['Activity 1.4 · Step 4', 'Using multiples of approximately 114/7, a suitable set of six exit floors is', '16, 33, 49, 65, 81, 98', ['19, 38, 57, 76, 95, 114', '10, 20, 30, 40, 50, 60', '25, 50, 75, 100, 110, 114']],
  ['Activity 1.4 · Step 5', 'The mathematical idea used to place the fire exits is', 'partitioning an interval into equal parts', ['finding only the mean', 'random sampling', 'drawing a pie chart']]
]);
