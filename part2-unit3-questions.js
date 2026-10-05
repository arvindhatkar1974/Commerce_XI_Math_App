// Mathematics & Statistics, Part 2, Unit 3: Skewness (textbook pages 37–44).
const subscriptDigits = value => String(value).replace(/\d/g, digit => '₀₁₂₃₄₅₆₇₈₉'[Number(digit)]);
const formatMath = value => String(value)
  .replace(/\b([Q])([123])\b/g, (_, symbol, index) => `${symbol}${subscriptDigits(index)}`)
  .replace(/Skp/g, 'Skₚ')
  .replace(/Skb/g, 'Skᵦ');

const choice = (id, source, prompt, correct, wrong, explanation, extra = {}) => {
  const formattedCorrect = formatMath(correct);
  return { id: `p2u3${id}`, source, type: 'choice', prompt: formatMath(prompt), options: [formattedCorrect, ...wrong.map(formatMath)], correct: formattedCorrect, explanation, ...extra };
};
const entry = (id, source, prompt, correct, explanation, extra = {}) => ({ id: `p2u3${id}`, source, type: 'entry', prompt: formatMath(prompt), correct: String(correct), explanation, ...extra });
const C = (prefix, rows) => rows.map((row, index) => choice(`${prefix}${index + 1}`, ...row));
const E = (prefix, rows) => rows.map((row, index) => entry(`${prefix}${index + 1}`, ...row));

const symmetricTable = '⟦table:X (variable)¦14¦16¦18¦20¦22¦24¦26;f (frequency)¦2¦5¦10¦14¦10¦5¦2⟧';
const positiveTable = '⟦table:X (variable)¦14¦16¦18¦20¦22¦24¦26;f (frequency)¦2¦8¦17¦10¦7¦4¦2⟧';
const profitTable = '⟦table:Profit (₹ lakh)¦10–20¦20–30¦30–40¦40–50¦50–60;No. of firms¦12¦18¦25¦10¦7⟧';
const wageTable = '⟦table:Wages¦Below 300¦300–400¦400–500¦500–600¦600–700¦Above 700;No. of workers¦5¦8¦18¦35¦27¦7⟧';
const heightTable = '⟦table:Height (inches)¦Less than 60¦60–64¦64–68¦68–72¦72–76;No. of females¦10¦20¦40¦10¦2⟧';
const marksAboveTable = '⟦table:Marks above¦0¦10¦20¦30¦40¦50¦60¦70¦80;No. of students¦120¦115¦108¦98¦85¦60¦18¦5¦0⟧';
const activityMarks = '40, 45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 72';
const activityCurveTable = '⟦table:x¦10¦20¦30¦40¦50¦60¦70¦80¦90¦100;f¦3¦9¦16¦14¦13¦10¦8¦5¦5¦2⟧';

const graphFrame = (content, ariaLabel, viewBox = '0 0 520 260') => `<svg class="function-graph" viewBox="${viewBox}" role="img" aria-label="${ariaLabel}"><rect x="1" y="1" width="518" height="258" rx="8" fill="#fffdf8" stroke="#b8cec8"/><g stroke="#17343d" stroke-width="2" fill="none"><line x1="48" y1="220" x2="485" y2="220"/><line x1="48" y1="220" x2="48" y2="30"/></g><path d="M485 220 l-10 -5 v10 z M48 30 l-5 10 h10 z" fill="#17343d"/><g font-family="Georgia,serif" fill="#17343d"><text x="490" y="226" font-size="15">X</text><text x="38" y="25" font-size="15">Y</text>${content}</g></svg>`;
const symmetricCurve = graphFrame('<path d="M95 218 C155 216 185 190 220 105 C240 57 280 57 300 105 C335 190 365 216 425 218" stroke="#075e58" stroke-width="3" fill="none"/><line x1="260" y1="215" x2="260" y2="73" stroke="#718b86" stroke-width="1.5"/><text x="260" y="241" text-anchor="middle" font-size="14">Mean = Median = Mode</text>', 'Symmetric distribution curve with mean, median and mode at the centre');
const threeSkewnessCurves = `<svg class="function-graph" viewBox="0 0 720 245" role="img" aria-label="Three distribution curves labelled I, II and III"><rect x="1" y="1" width="718" height="243" rx="8" fill="#fffdf8" stroke="#b8cec8"/><g font-family="Georgia,serif" fill="#17343d" stroke="#17343d" stroke-width="1.7"><g transform="translate(20 0)"><line x1="25" y1="190" x2="205" y2="190"/><line x1="25" y1="190" x2="25" y2="35"/><path d="M38 188 C72 185 83 140 108 90 C121 64 142 64 155 90 C180 140 191 185 202 188" stroke="#075e58" stroke-width="3" fill="none"/><text x="115" y="220" text-anchor="middle" stroke="none" font-size="18">I</text></g><g transform="translate(250 0)"><line x1="25" y1="190" x2="205" y2="190"/><line x1="25" y1="190" x2="25" y2="35"/><path d="M35 188 C52 174 64 95 92 76 C115 60 132 86 145 118 C160 153 177 178 203 188" stroke="#075e58" stroke-width="3" fill="none"/><text x="115" y="220" text-anchor="middle" stroke="none" font-size="18">II</text></g><g transform="translate(480 0)"><line x1="25" y1="190" x2="205" y2="190"/><line x1="25" y1="190" x2="25" y2="35"/><path d="M35 188 C61 178 78 153 93 118 C106 86 123 60 146 76 C174 95 186 174 203 188" stroke="#075e58" stroke-width="3" fill="none"/><text x="115" y="220" text-anchor="middle" stroke="none" font-size="18">III</text></g></g></svg>`;
const positiveFrequencyCurve = graphFrame('<path d="M78 218 C135 217 165 210 195 172 C218 142 226 70 255 68 C282 66 282 119 301 146 C332 190 374 210 446 218" stroke="#075e58" stroke-width="3" fill="none"/><text x="270" y="244" text-anchor="middle" font-size="14">Variable</text><text x="17" y="132" text-anchor="middle" font-size="14" transform="rotate(-90 17 132)">Frequency</text>', 'Positively skewed frequency curve with a longer right tail');
const quartileCurve = (kind) => {
  const positive = kind === 'positive';
  const path = positive ? 'M78 218 C126 214 169 185 207 108 C226 68 253 62 274 83 C307 116 326 190 446 218' : 'M78 218 C198 190 217 116 250 83 C271 62 298 68 317 108 C355 185 398 214 446 218';
  const xs = positive ? [224, 273, 365] : [155, 247, 296];
  return graphFrame(`<path d="${path}" stroke="#075e58" stroke-width="3" fill="none"/>${xs.map((x,i)=>`<line x1="${x}" y1="218" x2="${x}" y2="${i===1?76:126}" stroke="#718b86" stroke-width="1.5"/><text x="${x}" y="241" text-anchor="middle" font-size="14">Q${['₁','₂','₃'][i]}</text>`).join('')}`, `${positive ? 'Positively' : 'Negatively'} skewed distribution showing Q1, Q2 and Q3`);
};
const positiveQuartileCurve = quartileCurve('positive');
const negativeQuartileCurve = quartileCurve('negative');

export const theoryPages37to43 = [
  ...C('t', [
    ['Theory P37', 'Skewness indicates whether a distribution is', 'symmetric or asymmetric', ['continuous or discrete only', 'large or small only', 'grouped or ungrouped only'], 'Skewness measures symmetry and, when asymmetric, its direction and extent.'],
    ['Theory P37', 'A symmetric distribution has', 'zero skewness', ['positive skewness', 'negative skewness', 'unit skewness'], 'Equal balance on both sides gives zero skewness.'],
    ['Theory P37', 'In a symmetric distribution, values equidistant from the mean have', 'equal frequencies', ['zero frequencies', 'unequal frequencies', 'negative frequencies'], 'Mirrored values have equal frequencies.'],
    ['Theory P37', `${symmetricTable}\nThe mean of this distribution is`, '20', ['18', '22', '24'], 'The frequencies balance around x = 20.'],
    ['Theory P37', `${symmetricTable}\nThe frequencies corresponding to x = 18 and x = 22 are`, '10 and 10', ['5 and 5', '14 and 14', '2 and 2'], 'Both values are two units from the mean and have frequency 10.'],
    ['Theory P37', 'For a symmetric distribution, the correct relation is', 'mean = median = mode', ['mean > median > mode', 'mode > median > mean', 'mean = mode > median'], 'All three central values coincide in a symmetric distribution.'],
    ['Theory P37', 'Which measurements are usually approximately symmetric?', 'lengths of rods and weights of individuals', ['salaries only', 'lifespans only', 'profits only'], 'The textbook gives lengths and weights as typical approximate examples.'],
    ['Theory P37', 'A distribution is asymmetric when values equidistant from the mean have', 'unequal frequencies', ['equal frequencies', 'zero values', 'the same class mark'], 'Unequal mirrored frequencies indicate asymmetry.'],
    ['Theory P37', 'In a positively skewed distribution, the longer tail points towards the', 'positive end of the x-axis', ['negative end of the x-axis', 'y-axis only', 'origin only'], 'Positive skew has a longer right tail.'],
    ['Theory P37', 'For a positively skewed distribution, the correct order is', 'mean > median > mode', ['mode > median > mean', 'mean = median = mode', 'median > mean > mode'], 'High values pull the mean furthest to the right.'],
    ['Theory P38', 'Employee salaries are often', 'positively skewed', ['negatively skewed', 'always symmetric', 'without dispersion'], 'A few very high salaries create a long right tail.'],
    ['Theory P38', `${positiveTable}\nThe modal value of x is`, '18', ['16', '20', '22'], 'The largest frequency, 17, occurs at x = 18.'],
    ['Theory P38', 'In a negatively skewed distribution, the longer tail is on the', 'left side', ['right side', 'upper side', 'both sides equally'], 'The tail points towards the negative end of the x-axis.'],
    ['Theory P38', 'For a negatively skewed distribution, the correct order is', 'mode > median > mean', ['mean > median > mode', 'mean = median = mode', 'median > mode > mean'], 'Low values pull the mean furthest to the left.'],
    ['Theory P38', 'Lifespans of individuals are often', 'negatively skewed', ['positively skewed', 'always symmetric', 'uniform'], 'The textbook gives lifespan as an example of negative skewness.'],
    ['Theory P38', 'Karl Pearson’s coefficient of skewness is', '⟦frac:Mean − Mode¦S.D.⟧', ['⟦frac:Mode − Mean¦S.D.⟧', '⟦frac:Mean − Median¦Variance⟧', '⟦frac:Q3 − Q1¦2⟧'], 'Pearson standardizes Mean − Mode by the standard deviation.'],
    ['Theory P38', 'Dividing Mean − Mode by standard deviation makes the coefficient', 'independent of units', ['equal to the variance', 'always positive', 'equal to the mode'], 'The standardized coefficient permits comparisons across data measured in different units.'],
    ['Theory P38', 'For a positively skewed distribution, Skp is', 'greater than 0', ['less than 0', 'equal to 0', 'always greater than 3'], 'Mean exceeds mode, so the numerator is positive.'],
    ['Theory P38', 'For a negatively skewed distribution, Skp is', 'less than 0', ['greater than 0', 'equal to 0', 'always less than −3'], 'Mean is below mode, so the numerator is negative.'],
    ['Theory P38', 'Most Pearsonian coefficients of skewness lie between', '−1 and 1', ['0 and 1 only', '1 and 3', '−10 and 10'], 'Most values fall between −1 and 1; all lie between −3 and 3.'],
    ['Theory P38', 'All Pearsonian coefficients of skewness lie between', '−3 and 3', ['−1 and 1', '0 and 3', '−10 and 10'], 'The textbook gives the full range as −3 to 3.'],
    ['Theory P38-39', 'When mode is indeterminate, the empirical relation used is', 'Mean − Mode = 3 × (Mean − Median)', ['Mean − Mode = Mean − Median', 'Mode − Mean = 3 × Median', 'Mean + Mode = 3 × Median'], 'The empirical relation replaces the unavailable mode.'],
    ['Theory P39', 'When mode is indeterminate, Pearson’s coefficient becomes', '⟦coefFrac:3¦Mean − Median¦S.D.⟧', ['⟦frac:Mean − Median¦S.D.⟧', '⟦coefFrac:3¦Mode − Median¦S.D.⟧', '⟦frac:Q3 + Q1 − 2Q₂¦Q3 − Q1⟧'], 'Substitute the empirical relation into Pearson’s formula.'],
    ['Solved Example P39', `${profitTable}\nThe modal class is`, '30–40', ['20–30', '40–50', '50–60'], 'The highest frequency 25 occurs in 30–40.'],
    ['Solved Example P39', `${profitTable}\nThe mode is approximately`, '33.18', ['32.5', '35', '11.7554'], 'Using the grouped mode formula gives 33.18.'],
    ['Solved Example P39', `${profitTable}\nThe mean is`, '32.5', ['33.18', '35', '30'], 'With A = 35 and h = 10, the coded mean gives 32.5.'],
    ['Solved Example P39', `${profitTable}\nThe standard deviation is approximately`, '11.7554', ['1.3819', '32.5', '33.18'], 'Variance is 138.19, so S.D. = √138.19 = 11.7554.'],
    ['Solved Example P39', `${profitTable}\nThe distribution is`, 'negatively skewed', ['positively skewed', 'symmetric', 'without skewness measure'], 'Skp = ⟦frac:32.5 − 33.18¦11.7554⟧ = −0.0578.'],
    ['Theory P39', 'Bowley’s coefficient of skewness is based on', 'quartiles', ['mean and mode only', 'variance only', 'range only'], 'Bowley’s measure uses Q1, Q2 and Q3.'],
    ['Theory P39', 'Bowley’s coefficient is', '⟦frac:Q3 + Q1 − 2Q₂¦Q3 − Q1⟧', ['⟦frac:Q3 − Q1¦2⟧', '⟦frac:Q3 + Q1¦2Q₂⟧', '⟦frac:Mean − Mode¦S.D.⟧'], 'This is the standard Bowley formula.'],
    ['Theory P39-40', 'For positive skewness, which comparison is correct?', 'Q3 − Q2 > Q2 − Q1', ['Q3 − Q2 < Q2 − Q1', 'Q3 − Q2 = Q2 − Q1', 'Q3 = Q2 = Q1'], 'The upper half is more spread out in positive skewness.'],
    ['Theory P40', 'For negative skewness, which comparison is correct?', 'Q3 − Q2 < Q2 − Q1', ['Q3 − Q2 > Q2 − Q1', 'Q3 − Q2 = Q2 − Q1', 'Q3 = Q1'], 'The lower half is more spread out in negative skewness.'],
    ['Theory P40', 'Bowley’s coefficient for a symmetric distribution is', '0', ['1', '−1', '3'], 'Equal quartile distances make the numerator zero.'],
    ['Theory P40', 'Bowley’s coefficient lies between', '−1 and 1', ['−3 and 3', '0 and 1 only', '−10 and 10'], 'Bowley’s coefficient is bounded by −1 and 1.'],
    ['Theory P40', 'Bowley’s coefficient can be computed for distributions with', 'open-ended extreme classes', ['no quartiles', 'negative frequencies', 'no median'], 'Extreme open classes do not affect the quartiles when quartile classes are internal.'],
    ['Solved Example P40', 'If Q1 = 80, Q2 = 100 and Q3 = 120, Bowley’s coefficient is', '0', ['0.5', '−0.5', '1'], 'The numerator is 120 + 80 − 200 = 0.'],
    ['Solved Example P40-41', `${wageTable}\nThe total number of workers is`, '100', ['93', '105', '700'], 'The six frequencies sum to 100.'],
    ['Solved Example P40-41', `${wageTable}\nQ1 lies in the class`, '400–500', ['300–400', '500–600', '600–700'], 'The 25th observation lies after cumulative frequency 13 and before 31.'],
    ['Solved Example P40-41', `${wageTable}\nQ2 lies in the class`, '500–600', ['400–500', '600–700', '300–400'], 'The 50th observation lies after cumulative frequency 31 and before 66.'],
    ['Solved Example P40-41', `${wageTable}\nQ3 lies in the class`, '600–700', ['500–600', '400–500', 'Above 700'], 'The 75th observation lies after cumulative frequency 66 and before 93.'],
    ['Solved Example P40-41', `${wageTable}\nBowley’s coefficient is approximately`, '−0.05', ['0.05', '−0.5', '0'], 'Using Q1 = 466.67, Q2 = 554.28 and Q3 = 633.33 gives about −0.05.'],
    ['Solved Example P41', 'If mean = 100, median = 98.5 and S.D. = 9, the mode is', '95.5', ['98.5', '100', '104.5'], 'Mode = Mean − 3 × (Mean − Median) = 95.5.'],
    ['Solved Example P41', 'If mean = 100, median = 98.5 and S.D. = 9, Skp is', '0.5', ['−0.5', '1.5', '0'], 'Skp = ⟦coefFrac:3¦100 − 98.5¦9⟧ = 0.5.'],
    ['Solved Example P41-42', 'If mode is greater than mean by 7 and variance is 100, the distribution is', 'negatively skewed', ['positively skewed', 'symmetric', 'indeterminate'], 'S.D. = 10 and Mean − Mode = −7, giving Skp = −0.7.'],
    ['Solved Example P42', 'If mean = 214, mode = 218 and variance = 196, Skp is approximately', '−0.2857', ['0.2857', '−4', '14'], 'S.D. = 14 and Skp = ⟦frac:214 − 218¦14⟧.'],
    ['Solved Example P42', 'If Q1 = 35, Q2 = 40 and the distribution is symmetric, Q3 is', '45', ['40', '50', '75'], 'Symmetry gives Q3 − Q2 = Q2 − Q1 = 5.'],
    ['Solved Example P42', 'If Q1 = 15, Q2 = 21 and Q3 = 29, Bowley’s coefficient is approximately', '0.143', ['−0.143', '0.5', '1'], 'Skb = ⟦frac:29 + 15 − 42¦29 − 15⟧ = ⟦frac:2¦14⟧.'],
    ['Additional Example P42', 'For a negatively skewed distribution, the required relation is', 'Mean < Mode', ['Mean > Mode', 'Mean = Mode', 'Mean = 0'], 'Since S.D. is positive and Skp < 0, Mean − Mode < 0.'],
    ['Additional Example P42-43', 'If a distribution is symmetric, its quartiles satisfy', '2Q₂ = Q1 + Q3', ['Q2 = Q1 + Q3', 'Q3 = Q2 + Q1', 'Q1 = Q2 = Q3 only'], 'Equal quartile distances give Q3 − Q2 = Q2 − Q1.'],
    ['Additional Example P43', 'If Q1, Q2 and Q3 are in arithmetic progression, the distribution is', 'symmetric', ['positively skewed', 'negatively skewed', 'always bimodal'], 'An A.P. gives Q3 − Q2 = Q2 − Q1, hence Skb = 0.']
  ]),
  choice('g51', 'Theory P37', 'Observe the distribution curve shown below. Which relationship is represented?', 'Mean = Median = Mode', ['Mean > Median > Mode', 'Mode > Median > Mean', 'Mean = Mode > Median'], 'The curve is symmetric, so mean, median and mode coincide.', { visual: symmetricCurve }),
  choice('g52', 'Theory P38', 'Identify the distributions represented by curves I, II and III respectively.', 'Symmetric, positively skewed, negatively skewed', ['Positively skewed, symmetric, negatively skewed', 'Negatively skewed, positively skewed, symmetric', 'Symmetric, negatively skewed, positively skewed'], 'Curve I is balanced, curve II has a longer right tail, and curve III has a longer left tail.', { visual: threeSkewnessCurves }),
  choice('g53', 'Theory P38', 'Observe the frequency curve shown below. The distribution is', 'positively skewed', ['negatively skewed', 'symmetric', 'uniform'], 'The longer tail extends towards the higher values on the right.', { visual: positiveFrequencyCurve }),
  choice('g54', 'Theory P40', 'For the distribution shown below, which relationship is correct?', 'Q3 − Q2 > Q2 − Q1', ['Q3 − Q2 < Q2 − Q1', 'Q3 − Q2 = Q2 − Q1', 'Q1 = Q2 = Q3'], 'In positive skewness, the distance from Q2 to Q3 is greater than the distance from Q1 to Q2.', { visual: positiveQuartileCurve }),
  choice('g55', 'Theory P40', 'For the distribution shown below, which relationship is correct?', 'Q3 − Q2 < Q2 − Q1', ['Q3 − Q2 > Q2 − Q1', 'Q3 − Q2 = Q2 − Q1', 'Q1 = Q2 = Q3'], 'In negative skewness, the distance from Q1 to Q2 is greater than the distance from Q2 to Q3.', { visual: negativeQuartileCurve })
];

export const exercise31 = [
  ...E('eb', [
    ['Q1', 'For a distribution, mean = 100, mode = 127 and SD = 60.\nFind the Pearson coefficient of skewness Skp.', '-0.45', 'Skp = ⟦frac:100 − 127¦60⟧ = ⟦frac:−27¦60⟧ = −0.45.'],
    ['Q2', 'The mean and variance of the distribution is 60 and 100 respectively.\nFind the mode of the distribution if Skp = −0.3.', '63', 'S.D. = 10. Thus −0.3 = ⟦frac:60 − Mode¦10⟧, so Mode = 63.'],
    ['Q2', 'The mean and variance of the distribution is 60 and 100 respectively.\nFind the median of the distribution if Skp = −0.3.', '61', 'Mean − Mode = 3 × (Mean − Median). With mode 63: −3 = 3 × (60 − Median), hence Median = 61.'],
    ['Q3', 'For a data set, sum of upper and lower quartiles is 100,\ndifference between upper and lower quartiles is 40 and median is 50.\nFind the coefficient of skewness.', '0', 'Skb = ⟦frac:Q3 + Q1 − 2Q₂¦Q3 − Q1⟧ = ⟦frac:100 − 100¦40⟧ = 0. The printed textbook answer 1 is inconsistent with its own data and formula.'],
    ['Q4', 'For a data set with upper quartile equal to 55 and median equal to 42. If the distribution is symmetric,\nfind the value of lower quartile.', '29', 'For symmetry, Q1 + Q3 = 2Q₂. Thus Q1 = 84 − 55 = 29.'],
    ['Q5', `${heightTable}\nObtain coefficient of skewness by formula.`, '-0.1881', 'Using the grouped distribution gives a Pearsonian coefficient of approximately −0.1881.'],
  ]),
  choice('e7', 'Q5', `${heightTable}\nComment on nature of the distribution.`, 'negatively skewed', ['positively skewed', 'symmetric', 'cannot be determined'], 'The coefficient is negative, so the distribution is negatively skewed.'),
  ...E('e', [
    ['Q6', 'Find Skp for the following set of observations.\n17, 17, 21, 14, 15, 20, 19, 16, 13, 17, 18', '0', 'Mean = Median = Mode = 17, hence Skp = 0.'],
    ['Q7', 'Calculate Skb for the following set of observations of yield of wheat in kg from 13 plots:\n4.6, 3.5, 4.8, 5.1, 4.7, 5.5, 4.7, 3.6, 3.5, 4.2, 3.5, 3.6, 5.2', '-0.5', 'After ordering, Q1 = 3.6, Q2 = 4.6 and Q3 = 4.8. Thus Skb = ⟦frac:4.8 + 3.6 − 9.2¦4.8 − 3.6⟧ = −0.5.'],
    ['Q8', 'For a frequency distribution, Q3 − Q2 = 90 and Q2 − Q1 = 120.\nFind Skb.', '-0.143', 'Skb = ⟦frac:90 − 120¦90 + 120⟧ = ⟦frac:−30¦210⟧ = −0.142857 ≈ −0.143.']
  ])
];

export const letsRemember3 = C('lr', [
  ['Let’s Remember P43', 'Karl Pearson’s coefficient is denoted by', 'Skp', ['Skb', 'S.D.', 'Q.D.'], 'Skp denotes Pearsonian skewness.'],
  ['Let’s Remember P43', 'Karl Pearson’s coefficient equals', '⟦frac:Mean − Mode¦S.D.⟧', ['⟦frac:Mode − Mean¦S.D.⟧', '⟦frac:Q3 − Q1¦2⟧', '⟦frac:Mean − Median¦Variance⟧'], 'This is the primary Pearsonian formula.'],
  ['Let’s Remember P43', 'If mode is indeterminate, Pearson’s coefficient equals', '⟦coefFrac:3¦Mean − Median¦S.D.⟧', ['⟦frac:Mean − Median¦S.D.⟧', '⟦coefFrac:3¦Mode − Median¦S.D.⟧', '⟦frac:Q3 + Q1 − 2Q₂¦Q3 − Q1⟧'], 'Use the empirical mean–median–mode relation.'],
  ['Let’s Remember P44', 'For a symmetric distribution, Skp is', '0', ['1', '−1', '3'], 'No skewness means coefficient zero.'],
  ['Let’s Remember P44', 'For a positively skewed distribution, Skp is', 'greater than 0', ['less than 0', 'equal to 0', 'equal to −1'], 'Positive skew gives a positive coefficient.'],
  ['Let’s Remember P44', 'For a negatively skewed distribution, Skp is', 'less than 0', ['greater than 0', 'equal to 0', 'equal to 1'], 'Negative skew gives a negative coefficient.'],
  ['Let’s Remember P44', 'Most Skp values lie between', '−1 and 1', ['1 and 3', '0 and 1', '−10 and 10'], 'This is the usual range stated in the textbook.'],
  ['Let’s Remember P44', 'All Skp values lie between', '−3 and 3', ['−1 and 1', '0 and 3', '−100 and 100'], 'This is the full textbook range.'],
  ['Let’s Remember P44', 'Bowley’s coefficient is denoted by', 'Skb', ['Skp', 'S.D.', 'C.V.'], 'Skb denotes Bowley skewness.'],
  ['Let’s Remember P44', 'Bowley’s coefficient equals', '⟦frac:Q3 + Q1 − 2Q₂¦Q3 − Q1⟧', ['⟦frac:Q3 − Q1¦2⟧', '⟦frac:Mean − Mode¦S.D.⟧', '⟦frac:Q3 + Q1¦2Q₂⟧'], 'This is Bowley’s quartile formula.'],
  ['Let’s Remember P44', 'If Skb > 0, the distribution is', 'positively skewed', ['negatively skewed', 'symmetric', 'without a median'], 'The positive sign indicates positive skewness.'],
  ['Let’s Remember P44', 'If Skb < 0, the distribution is', 'negatively skewed', ['positively skewed', 'symmetric', 'uniform'], 'The negative sign indicates negative skewness.'],
  ['Let’s Remember P44', 'Bowley’s coefficient lies between', '−1 and 1', ['−3 and 3', '0 and 1 only', '−10 and 10'], 'Bowley’s coefficient is bounded by −1 and 1.'],
  ['Let’s Remember P44', 'If Skb = 0, the distribution is', 'symmetric', ['positively skewed', 'negatively skewed', 'without a median'], 'A zero Bowley coefficient indicates a symmetric distribution.']
]);

export const miscellaneousExercise3 = E('mx', [
  ['Q1', 'For a distribution, mean = 100, mode = 80 and S.D. = 20.\nFind Pearsonian coefficient of skewness Skp.', '1', 'Skp = ⟦frac:100 − 80¦20⟧ = 1.'],
  ['Q2', 'For a distribution, mean = 60, median = 75 and variance = 900.\nFind Pearsonian coefficient of skewness Skp.', '-1.5', 'S.D. = 30. Skp = ⟦coefFrac:3¦60 − 75¦30⟧ = −1.5.'],
  ['Q3', 'For a distribution, Q1 = 25, Q2 = 35 and Q3 = 50.\nFind Bowley’s coefficient of skewness Skb.', '0.2', 'Skb = ⟦frac:50 + 25 − 70¦50 − 25⟧ = ⟦frac:5¦25⟧ = 0.2.'],
  ['Q4', 'For a distribution, Q3 − Q2 = 40 and Q2 − Q1 = 60.\nFind Bowley’s coefficient of skewness Skb.', '-0.2', 'Skb = ⟦frac:40 − 60¦40 + 60⟧ = ⟦frac:−20¦100⟧ = −0.2.'],
  ['Q5', 'For a distribution, Skb = 0.6, Q2 = 38 and Q1 + Q3 = 100.\nFind Q3.', '70', '0.6 = ⟦frac:100 − 76¦Q3 − Q1⟧, so Q3 − Q1 = 40. Solving with Q1 + Q3 = 100 gives Q3 = 70.'],
  ['Q5', 'For a distribution, Skb = 0.6, Q2 = 38 and Q1 + Q3 = 100.\nFind Q1.', '30', 'From Q3 − Q1 = 40 and Q1 + Q3 = 100, Q1 = 30.'],
  ['Q6', "For a frequency distribution, the mean is 200,\nthe coefficient of variation is 8% and Karl Pearsonian's coefficient of skewness is 0.3.\nFind the mode of the distribution.", '195.2', 'S.D. = 8% of 200 = 16. Hence 0.3 = ⟦frac:200 − Mode¦16⟧ and Mode = 195.2.'],
  ['Q6', "For a frequency distribution, the mean is 200,\nthe coefficient of variation is 8% and Karl Pearsonian's coefficient of skewness is 0.3.\nFind the median of the distribution.", '198.4', 'Mean − Mode = 4.8 = 3 × (Mean − Median), so Median = 198.4.'],
  ['Q7', `${marksAboveTable}\nCalculate Karl Pearsonian coefficient of skewness Skp.`, '-0.4760', 'Convert the more-than cumulative frequencies to class frequencies, then compute mean, mode and S.D.; Skp ≈ −0.4760.'],
  ['Q8', `${marksAboveTable}\nCalculate Bowley’s coefficient of skewness Skb.`, '-0.3194', 'Find Q1, Q2 and Q3 from the converted grouped distribution; Skb ≈ −0.3194.'],
  ['Q9', 'Find Skp for the observations:\n18, 27, 10, 25, 31, 13, 28', '-1.3182', 'Using the empirical median form because the mode is indeterminate gives Skp ≈ −1.3182.'],
  ['Q10', 'Find Skb for the observations:\n18, 27, 10, 25, 31, 13, 28', '-0.6', 'Ordered data: 10, 13, 18, 25, 27, 28, 31. Thus Q1 = 13, Q2 = 25, Q3 = 28 and Skb = ⟦frac:28 + 13 − 50¦15⟧ = −0.6.']
]);

export const activities3 = [
  ...E('a', [
    ['Activity 3.1 · Step 1', `For the representative marks of 12 students arranged in ascending order:\n${activityMarks}\nFind Q1.`, '48.5', 'The Q1 position is ⟦frac:13¦4⟧ = 3.25. Interpolating between the 3rd and 4th observations gives 48.5.'],
    ['Activity 3.1 · Step 2', `For the representative marks:\n${activityMarks}\nFind Q2.`, '56.5', 'The Q2 position is ⟦frac:13¦2⟧ = 6.5, midway between 55 and 58, so Q2 = 56.5.'],
    ['Activity 3.1 · Step 3', `For the representative marks:\n${activityMarks}\nFind Q3.`, '64.25', 'The Q3 position is ⟦frac:39¦4⟧ = 9.75. Interpolating between 62 and 65 gives 64.25.'],
    ['Activity 3.1 · Step 4', `For the representative marks:\n${activityMarks}\nCalculate Bowley’s coefficient of skewness correct to four decimal places.`, '-0.0159', 'Skb = ⟦frac:64.25 + 48.5 − 2 × 56.5¦64.25 − 48.5⟧ = ⟦frac:−0.25¦15.75⟧ ≈ −0.0159.']
  ]),
  ...C('ab', [
    ['Activity 3.1 · Step 5', `For the representative marks:\n${activityMarks}\nThe distribution is`, 'slightly negatively skewed', ['positively skewed', 'perfectly symmetric', 'strongly positively skewed'], 'Skb is slightly below zero.'],
    ['Activity 3.1 · Step 6', 'In Activity 3.1, a different class data set may produce', 'a different coefficient and comment', ['the same quartiles always', 'Skb = 1 always', 'no median'], 'The textbook activity asks students to collect their own data, so results depend on the collected marks.'],
    ['Activity 3.2 · Step 1', `${activityCurveTable}\nThe largest frequency occurs at x =`, '30', ['20', '40', '50'], 'The maximum frequency 16 occurs at x = 30.'],
    ['Activity 3.2 · Step 2', `${activityCurveTable}\nThe freehand curve has a longer tail towards`, 'higher x-values', ['lower x-values', 'both sides equally', 'the y-axis'], 'Frequencies decline gradually from the peak towards 100.'],
    ['Activity 3.2 · Step 3', `${activityCurveTable}\nThe distribution is`, 'positively skewed', ['negatively skewed', 'symmetric', 'without a mode'], 'Its longer tail extends to the right.'],
    ['Activity 3.2 · Step 4', `${activityCurveTable}\nFor this distribution, the expected relation is`, 'Mean > Median > Mode', ['Mode > Median > Mean', 'Mean = Median = Mode', 'Median > Mode > Mean'], 'Positive skewness gives Mean > Median > Mode.'],
    ['Activity 3.2 · Step 5', `${activityCurveTable}\nThe mode is`, '30', ['40', '50', '100'], 'The modal x-value is the one with maximum frequency.'],
    ['Activity 3.2 · Step 6', `${activityCurveTable}\nThe total frequency is`, '85', ['75', '90', '100'], 'Adding all frequencies gives 85.']
  ])
];


