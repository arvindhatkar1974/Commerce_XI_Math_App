// Mathematics & Statistics, Part 2, Unit 4: Bivariate Frequency Distribution and Chi Square Statistic (pages 45-55).
const choice = (id, source, prompt, correct, wrong, explanation) => ({ id: `p2u4${id}`, source, type: 'choice', prompt, options: [correct, ...wrong], correct, explanation });
const entry = (id, source, prompt, correct, explanation) => ({ id: `p2u4${id}`, source, type: 'entry', prompt, correct: String(correct), explanation });
const C = (prefix, rows) => rows.map((r, i) => choice(`${prefix}${i + 1}`, ...r));

const iceTable = '⟦table:Y \\ X¦16¦18¦33¦34¦Total;150¦1¦2¦0¦0¦3;250¦2¦1¦1¦0¦4;400¦0¦1¦1¦2¦4;500¦0¦0¦3¦1¦4;Total¦3¦4¦5¦3¦15⟧';
const ageMarksTable = '⟦table:Y \\ X¦10¦11¦12¦13¦Total;21¦1¦0¦2¦1¦4;22¦1¦3¦1¦0¦5;23¦2¦0¦1¦1¦4;24¦1¦2¦2¦2¦7;Total¦5¦5¦6¦4¦20⟧';
const heightWeightTable = '⟦table:Y \\ X¦135–145¦145–155¦155–165¦Total;35–45¦2¦2¦0¦4;45–55¦2¦1¦1¦4;55–65¦4¦4¦4¦12;Total¦8¦7¦5¦20⟧';
const incomeTable = '⟦table:Y \\ X¦200–300¦300–400¦400–500¦Total;200–300¦6¦6¦1¦13;300–400¦0¦4¦6¦10;400–500¦0¦0¦2¦2;Total¦6¦10¦9¦25⟧';
const diceTable = '⟦table:Y \\ X¦2¦3¦4¦5¦6¦Total;1¦0¦1¦2¦0¦1¦4;2¦0¦1¦0¦2¦0¦3;3¦2¦1¦3¦0¦0¦6;4¦0¦2¦0¦0¦1¦3;5¦5¦0¦3¦1¦0¦9;Total¦7¦5¦8¦3¦2¦25⟧';
const diceTableOptionB = '⟦table:Y \\ X¦2¦3¦4¦5¦6¦Total;1¦0¦1¦0¦2¦0¦3;2¦0¦1¦2¦0¦1¦4;3¦2¦1¦3¦0¦0¦6;4¦0¦2¦0¦0¦1¦3;5¦5¦0¦3¦1¦0¦9;Total¦7¦5¦8¦3¦2¦25⟧';
const diceTableOptionC = '⟦table:Y \\ X¦2¦3¦4¦5¦6¦Total;1¦0¦2¦1¦0¦1¦4;2¦0¦0¦1¦2¦0¦3;3¦2¦3¦1¦0¦0¦6;4¦0¦0¦2¦0¦1¦3;5¦5¦3¦0¦1¦0¦9;Total¦7¦8¦5¦3¦2¦25⟧';
const diceTableOptionD = '⟦table:Y \\ X¦2¦3¦4¦5¦6¦Total;1¦0¦0¦2¦0¦5¦7;2¦1¦1¦1¦2¦0¦5;3¦2¦0¦3¦0¦3¦8;4¦0¦2¦0¦0¦1¦3;5¦1¦0¦0¦1¦0¦2;Total¦4¦3¦6¦3¦9¦25⟧';
const spousesTable = '⟦table:Y \\ X¦25¦26¦27¦28¦29¦Total;19¦2¦1¦0¦0¦0¦3;20¦2¦1¦0¦2¦0¦5;21¦0¦2¦1¦0¦0¦3;22¦0¦0¦3¦1¦0¦4;23¦2¦0¦1¦0¦2¦5;Total¦6¦4¦5¦3¦2¦20⟧';
const marksTable = '⟦table:Y \\ X¦20–30¦30–40¦40–50¦Total;20–30¦2¦2¦1¦5;30–40¦3¦2¦2¦7;40–50¦2¦1¦1¦4;Total¦7¦5¦4¦16⟧';
const boysTable = '⟦table:Y \\ X¦150–154¦155–159¦160–164¦165–169¦Total;35–39¦3¦1¦0¦0¦4;40–44¦2¦3¦0¦0¦5;45–49¦1¦2¦1¦0¦4;50–54¦1¦1¦3¦2¦7;Total¦7¦7¦4¦2¦20⟧';
const iceCandyContext = 'A shopkeeper records daily temperature as X and the number of ice candies sold as Y.';
const iceCandyObservations = 'The 15 ordered pairs (X, Y), in day order, are:\n(33, 250), (18, 150), (16, 250), (34, 400), (33, 500), (18, 250), (16, 150), (33, 500),\n(18, 150), (33, 500), (16, 250), (33, 400), (18, 400), (34, 500), (34, 400).';

export const theoryPages45to49 = C('ta', [
  ['Theory P45','A frequency distribution involving one variable is called','univariate frequency distribution',['bivariate frequency distribution','contingency table','conditional distribution'],'Univariate data involve one variable.'],
  ['Theory P45','A frequency distribution of two variables observed on the same population is called','bivariate frequency distribution',['univariate frequency distribution','simple series','time series'],'Bivariate data record two variables together.'],
  ['Theory P45','Which is an example of bivariate data?','height and weight of individuals',['heights only','weights only','ages only'],'Height and weight are observed simultaneously.'],
  ['Theory P45','Income and expenditure of families form','bivariate data',['univariate data','categorical data only','an ungrouped single variable'],'Two variables are recorded for every family.'],
  ['Theory P45',`${iceCandyContext}\nWhich variable represents daily temperature?`,'X',['Y','fᵢⱼ','N'],'Daily temperature is represented by X.'],
  ['Theory P45',`${iceCandyContext}\nWhich variable represents the number of ice candies sold?`,'Y',['X','fᵢⱼ','N'],'The number of ice candies sold is represented by Y.'],
  ['Theory P45',`${iceCandyObservations}\nWhich is the first observation?`,'(33, 250)',['(16, 150)','(18, 500)','(34, 150)'],'The first listed temperature is 33 and sales are 250.'],
  ['Theory P45',`${iceCandyObservations}\nAt which position does the pair (16, 150) occur?`,'seventh observation',['first observation','second observation','fifteenth observation'],'It is the seventh pair in the listed data.'],
  ['Theory P45','A bivariate frequency table is also called a','two-way table',['one-way table','time chart','stem plot'],'The two variables define rows and columns.'],
  ['Theory P45',`${iceTable}\nWhere are the values of X placed in this bivariate frequency table?`,'horizontally at the top',['vertically on the left','only in the total column','outside the table'],'X forms the column headings.'],
  ['Theory P45',`${iceTable}\nWhere are the values of Y placed in this bivariate frequency table?`,'vertically on the left',['horizontally at the top','only in the bottom row','outside the table'],'Y forms the row headings.'],
  ['Theory P45','Each observed pair (x, y) contributes a tally to','one corresponding cell',['every cell','only the total cell','the diagonal only'],'The intersection of its X and Y values identifies the cell.'],
  ['Theory P46',`${iceTable}\nThe grand total is`,'15',['8','12','20'],'The data contain 15 daily observations.'],
  ['Theory P46',`${iceTable}\nThe frequency corresponding to X = 33 and Y = 500 is`,'3',['1','4','5'],'The cell contains three observations.'],
  ['Theory P46',`${iceTable}\nThe marginal frequency for Y = 250 is`,'4',['1','3','5'],'The row total for Y = 250 is 4.'],
  ['Theory P46',`${iceTable}\nThe marginal frequency for X = 33 is`,'5',['3','4','8'],'The column total for X = 33 is 5.'],
  ['Theory P46','Row totals together with values of Y give the','marginal frequency distribution of Y',['conditional distribution of X','marginal distribution of X','grand total only'],'Row totals summarize Y.'],
  ['Theory P46','Column totals together with values of X give the','marginal frequency distribution of X',['conditional distribution of Y','marginal distribution of Y','grand total only'],'Column totals summarize X.'],
  ['Theory P46','The sum of all row totals equals','the grand total N',['one','the number of rows only','the number of columns only'],'Both sets of marginal totals sum to N.'],
  ['Theory P46',`${iceTable}\nThe conditional distribution of X when Y = 250 is`,'2, 1, 1, 0',['1, 2, 0, 0','0, 1, 1, 2','3, 4, 5, 3'],'Read across the Y = 250 row.'],
  ['Theory P46',`${iceTable}\nThe conditional total when Y = 250 is`,'4',['3','5','15'],'The Y = 250 row total is 4.'],
  ['Theory P46',`${iceTable}\nFor X = 33 or 34, the conditional frequencies of Y = 150, 250, 400, 500 are`,'0, 1, 3, 4',['1, 2, 1, 4','3, 4, 4, 4','0, 1, 1, 3'],'Add the X = 33 and X = 34 columns.'],
  ['Theory P47','If X has m values and Y has n values, a bivariate table contains','m × n cells',['m + n cells','m − n cells','m/n cells'],'Each X value pairs with each Y value.'],
  ['Theory P47','The ith value of X is denoted by','xᵢ',['yⱼ','fᵢⱼ','N'],'This is the standard notation.'],
  ['Theory P47','The jth value of Y is denoted by','yⱼ',['xᵢ','fᵢⱼ','N'],'This is the standard notation.'],
  ['Theory P47','The frequency associated with the pair (xᵢ, yⱼ) is denoted by','fᵢⱼ',['xᵢ','yⱼ','N only'],'Cell frequencies use fᵢⱼ.'],
  ['Theory P47','The grand total of all cell frequencies is denoted by','N',['m','n','fᵢⱼ only'],'N is total frequency.'],
  ['Theory P47','The marginal frequency distribution of X is obtained from','column totals',['row totals','diagonal cells','only zero cells'],'Each column total belongs to an X value.'],
  ['Theory P47','The marginal frequency distribution of Y is obtained from','row totals',['column totals','diagonal cells','only nonzero cells'],'Each row total belongs to a Y value.'],
  ['Theory P47','A frequency distribution of one variable for a specified value of the other is','conditional frequency distribution',['marginal distribution','univariate raw data','class interval'],'The other variable supplies the condition.'],
  ['Solved Example P47-48',`${ageMarksTable}\nThe number of students is`,'20',['16','24','25'],'The grand total is 20.'],
  ['Solved Example P47-48',`${ageMarksTable}\nThe marginal distribution of age X is`,'5, 5, 6, 4',['4, 5, 4, 7','5, 4, 5, 6','20, 20, 20, 20'],'Read the column totals.'],
  ['Solved Example P47-48',`${ageMarksTable}\nThe marginal distribution of G.K. marks Y is`,'4, 5, 4, 7',['5, 5, 6, 4','4, 4, 5, 7','20, 20, 20, 20'],'Read the row totals.'],
  ['Solved Example P47-48',`${ageMarksTable}\nThe conditional distribution of age when G.K. marks are 23 is`,'2, 0, 1, 1',['1, 3, 1, 0','1, 0, 2, 1','5, 5, 6, 4'],'Read the Y = 23 row.'],
  ['Solved Example P47-48',`${ageMarksTable}\nThe conditional distribution of G.K. marks when age is 11 is`,'0, 3, 0, 2',['1, 1, 2, 1','2, 0, 0, 3','4, 5, 4, 7'],'Read the X = 11 column.'],
  ['Solved Example P48',`${heightWeightTable}\nThe marginal frequency distribution of height is`,'8, 7, 5',['4, 4, 12','7, 7, 6','20, 20, 20'],'Read the column totals.'],
  ['Solved Example P48',`${heightWeightTable}\nThe marginal frequency distribution of weight is`,'4, 4, 12',['8, 7, 5','4, 8, 8','20, 20, 20'],'Read the row totals.'],
  ['Solved Example P48',`${heightWeightTable}\nThe conditional distribution of height when weight is at least 55 kg is`,'4, 4, 4',['2, 2, 0','2, 1, 1','8, 7, 5'],'Read the 55–65 row.'],
  ['Solved Example P48',`${heightWeightTable}\nThe conditional distribution of weight when height lies from 135 to 145 cm is`,'2, 2, 4',['4, 4, 12','2, 1, 4','8, 7, 5'],'Read the 135–145 column.'],
  ['Theory P46','A zero cell frequency means','that pair did not occur',['the marginal total is zero','the grand total is zero','the variables are identical'],'No observation belongs to that combination.'],
  ['Theory P47','Marginal frequencies can be checked because their sum must equal','N',['m','n','1'],'All observations are counted once.'],
  ['Theory P47','A conditional distribution generally uses','one row or one column selected by a condition',['all marginal totals only','only the grand total','no cell frequencies'],'The condition restricts one variable.'],
  ['Theory P45-47','Before tabulation, bivariate observations are written as','ordered pairs (x, y)',['single values only','percentages only','class marks only'],'Each unit has two associated measurements.'],
  ['Theory P45-47','The main purpose of classification is to','summarize paired observations clearly',['change the observations','remove all frequencies','make N equal to 1'],'Grouping reveals the joint distribution.'],
  ['Theory P45-49','Bivariate tables help study','how two variables occur together',['only one variable’s average','only chronological change','only geometric figures'],'Joint frequencies show their combined pattern.']
]);

const incomeTallyTable = '⟦table:Y \\ X¦200-300¦300-400¦400-500;200-300¦||||/ |¦||||/ |¦|;300-400¦-¦||||¦||||/ |;400-500¦-¦-¦||⟧';
const diceObservations = '(2, 3), (2, 5), (5, 5), (4, 5), (6, 4), (3, 2), (5, 2), (4, 1), (2, 5), (6, 1), (3, 1), (3, 3), (4, 3), (4, 5), (2, 5), (3, 4), (2, 5), (3, 4), (2, 5), (4, 3), (5, 2), (4, 5), (4, 3), (2, 3), (4, 1)';
const spousesObservations = '⟦table:X¦27¦25¦28¦26¦29¦27¦28¦26¦25¦25¦27;Y¦21¦20¦20¦21¦23¦22¦20¦20¦19¦19¦23;X¦26¦29¦25¦27¦26¦25¦28¦25¦27;Y¦19¦23¦23¦22¦21¦20¦22¦23¦22⟧';
const marksObservations = '⟦table:Marks in Statistics (X)¦37¦20¦46¦28¦35¦26¦41¦48¦32¦23¦20¦39¦47¦33¦27¦26;Marks in English (Y)¦30¦32¦41¦33¦29¦43¦30¦21¦44¦38¦47¦24¦32¦31¦20¦21⟧';
const boysObservations = '(152, 40), (160, 54), (163, 52), (150, 35), (154, 36), (160, 49), (166, 54), (157, 38), (159, 43), (153, 48), (152, 41), (158, 51), (155, 44), (156, 47), (156, 43), (166, 53), (160, 50), (151, 39), (153, 50), (158, 46)';
const ex41prompts = {
 q1: `Following table gives income (X) and expenditure (Y) of 25 families:\n${incomeTallyTable}`,
 q2: `Two dice are thrown simultaneously 25 times. The following pairs of observations are obtained.\n${diceObservations}`,
 q3: `Following data gives the age of husbands (X) and age of wives (Y) in years.\n${spousesObservations}`,
 q4: `Construct a bivariate frequency distribution table of the marks obtained by students in Statistics (X) and English (Y).\n${marksObservations}`,
 q5: `Following data gives height in cm (X) and weight in kgs (Y) of 20 boys.\n${boysObservations}`
};
export const exercise41 = [
 choice('e1', 'Q1(i)', `${ex41prompts.q1}\nFind marginal frequency distributions of income and expenditure.`, 'Income: 6, 10, 9; Expenditure: 13, 10, 2', ['Income: 13, 10, 2; Expenditure: 6, 10, 9','Income: 6, 9, 10; Expenditure: 13, 9, 3','Income: 25, 25, 25; Expenditure: 25, 25, 25'], 'The column totals give income frequencies 6, 10, 9 and the row totals give expenditure frequencies 13, 10, 2.'),
 choice('e2', 'Q1(ii)', `${ex41prompts.q1}\nFind conditional frequency distribution of X when Y is between 300–400.`, '0, 4, 6', ['6, 6, 1','0, 0, 2','6, 10, 9'], 'Read the expenditure class 300–400 row.'),
 choice('e3', 'Q1(iii)', `${ex41prompts.q1}\nFind conditional frequency distribution of Y when X is between 200–300.`, '6, 0, 0', ['6, 4, 0','6, 6, 1','13, 10, 2'], 'Read the income class 200–300 column.'),
 entry('e4', 'Q1(iv)', `${ex41prompts.q1}\nFind how many families have their income Rs. 300 and more and expenses Rs. 400 and less?`, '17', 'Add the cells for income at least 300 and expenditure below 400: 6 + 1 + 4 + 6 = 17.'),
 choice('e5', 'Q2', `${ex41prompts.q2}\nPrepare a bivariate frequency distribution table for the above data.`, diceTable, [diceTableOptionB,diceTableOptionC,diceTableOptionD], 'Tallying the 25 ordered pairs gives the displayed table.'),
 choice('e6', 'Q2', `${ex41prompts.q2}\nObtain the marginal frequency distributions of X and Y.`, 'X: 7, 5, 8, 3, 2; Y: 4, 3, 6, 3, 9', ['X: 4, 3, 6, 3, 9; Y: 7, 5, 8, 3, 2','X: 7, 8, 5, 3, 2; Y: 4, 3, 6, 3, 9','X: 7, 5, 8, 3, 2; Y: 3, 4, 6, 3, 9'], 'Column totals give the marginal distribution of X: 7, 5, 8, 3, 2. Row totals give the marginal distribution of Y: 4, 3, 6, 3, 9.'),
 choice('e7', 'Q3', `${ex41prompts.q3}\nConstruct a bivariate frequency distribution table.`, spousesTable, [diceTable,marksTable,boysTable], 'Classifying the 20 husband-wife age pairs gives the displayed bivariate frequency distribution table.'),
 choice('e8', 'Q3', `${ex41prompts.q3}\nFind the marginal distributions.`, 'X: 6, 4, 5, 3, 2; Y: 3, 5, 3, 4, 5', ['X: 3, 5, 3, 4, 5; Y: 6, 4, 5, 3, 2','X: 6, 5, 4, 3, 2; Y: 3, 5, 3, 4, 5','X: 6, 4, 5, 3, 2; Y: 5, 4, 3, 5, 3'], 'Column totals give X: 6, 4, 5, 3, 2. Row totals give Y: 3, 5, 3, 4, 5.'),
 choice('e9', 'Q3', `${ex41prompts.q3}\nFind conditional frequency distribution of age of husbands when the age of wife is 23 years.`, '2, 0, 1, 0, 2', ['0, 2, 1, 0, 2','2, 1, 0, 0, 2','6, 4, 5, 3, 2'], 'Read the Y = 23 row for husband ages X = 25, 26, 27, 28, 29: 2, 0, 1, 0, 2.'),
 choice('e10', 'Q4', `${ex41prompts.q4}\nConstruct a bivariate frequency distribution table for the above data by taking class intervals 20–30, 30–40, .... etc. for both X and Y.`, marksTable, [spousesTable,diceTable,incomeTable], 'Classifying the marks into 20–30, 30–40 and 40–50 for both variables gives the displayed table.'),
 choice('e11', 'Q4', `${ex41prompts.q4}\nFind the marginal distributions.`, 'X: 7, 5, 4; Y: 5, 7, 4', ['X: 5, 7, 4; Y: 7, 5, 4','X: 7, 4, 5; Y: 5, 7, 4','X: 7, 5, 4; Y: 7, 4, 5'], 'Column totals give X: 7, 5, 4. Row totals give Y: 5, 7, 4.'),
 choice('e12', 'Q4', `${ex41prompts.q4}\nFind conditional frequency distribution of Y when X lies between 30–40.`, '2, 2, 1', ['3, 2, 2','2, 3, 2','7, 5, 4'], 'Read the X = 30–40 column for the three Y classes: 2, 2, 1.'),
 choice('e13', 'Q5', `${ex41prompts.q5}\nPrepare a bivariate frequency table taking class intervals 150–154, 155–159...etc. for X and 35–39, 40–44...etc for Y.`, boysTable, [heightWeightTable,marksTable,incomeTable], 'Classifying all 20 height-weight pairs gives the displayed bivariate frequency table.'),
 choice('e14', 'Q5(i)', `${ex41prompts.q5}\nFind the marginal frequency distributions.`, 'X: 7, 7, 4, 2; Y: 4, 5, 4, 7', ['X: 4, 5, 4, 7; Y: 7, 7, 4, 2','X: 7, 4, 7, 2; Y: 4, 5, 4, 7','X: 7, 7, 4, 2; Y: 5, 4, 4, 7'], 'Column totals give X: 7, 7, 4, 2. Row totals give Y: 4, 5, 4, 7.'),
 choice('e15', 'Q5(ii)', `${ex41prompts.q5}\nFind the conditional frequency distribution of Y when 155 ≤ X ≤ 159.`, '1, 3, 2, 1', ['3, 1, 0, 0','4, 5, 4, 7','7, 7, 4, 2'], 'Read the 155–159 column of the constructed table: 1, 3, 2, 1.')
];

const handTable = '⟦table:¦Right-handed¦Left-handed¦Total;Men¦40¦40¦80;Women¦35¦85¦120;Total¦75¦125¦200⟧';
const colourTable = '⟦table:¦Pink¦Blue¦Orange¦Total;Boys¦27¦63¦10¦100;Girls¦41¦45¦14¦100;Total¦68¦108¦24¦200⟧';
export const theoryPages49to52 = C('tb', [
 ['Theory P49','A variable taking non-numerical values is called','categorical variable',['continuous variable only','class interval','frequency total'],'Categories such as gender and blood group are non-numerical.'],
 ['Theory P49','Which is a categorical variable?','blood group',['height in cm','weight in kg','income in rupees'],'Blood group consists of named categories.'],
 ['Theory P49','A two-way frequency table for categorical variables is called','contingency table',['ogive','histogram','univariate array'],'It summarizes two categorical variables.'],
 ['Theory P49','A contingency table is used to study','two categorical variables',['one numerical variable only','time alone','class boundaries only'],'Rows and columns represent categories.'],
 ['Theory P49','Gender and food preference can be summarized using a','contingency table',['frequency polygon only','stem plot only','single tally'],'Both variables are categorical.'],
 ['Theory P49','Any quantity calculated from data is called a','statistic',['category','class boundary','tally mark'],'Mean is an example of a statistic.'],
 ['Solved Example P50','Among 72 teenagers, 40 prefer chocolate. How many prefer vanilla?','32',['18','40','58'],'72 − 40 = 32.'],
 ['Solved Example P50','If the sample has 180 persons and 72 teenagers, the number of adults is','108',['72','90','180'],'180 − 72 = 108.'],
 ['Solved Example P50','If 58 adults prefer vanilla out of 108 adults, adults preferring chocolate number','50',['32','40','90'],'108 − 58 = 50.'],
 ['Solved Example P50','Among 72 teenagers, 40 prefer chocolate and 32 prefer vanilla. Among 108 adults, 50 prefer chocolate and 58 prefer vanilla.\nHow many persons prefer chocolate?','90',['72','108','180'],'40 teenagers + 50 adults = 90.'],
 ['Solved Example P50','Among 72 teenagers, 40 prefer chocolate and 32 prefer vanilla. Among 108 adults, 50 prefer chocolate and 58 prefer vanilla.\nHow many persons prefer vanilla?','90',['72','108','180'],'32 teenagers + 58 adults = 90.'],
 ['Theory P50','The chi-square statistic is denoted by','χ²',['χ','σ²','r'],'Chi-square uses the Greek letter chi squared.'],
 ['Theory P50','The chi-square statistic measures relationship between','two categorical variables',['two means only','one continuous variable only','time and distance only'],'It compares observed and expected categorical frequencies.'],
 ['Theory P50','The chi-square statistic is always','non-negative',['negative','between −1 and 1','equal to zero only'],'Squared deviations divided by positive expected frequencies cannot be negative.'],
 ['Theory P50','In χ² = Σ((Oᵢⱼ − Eᵢⱼ)²/Eᵢⱼ), Oᵢⱼ denotes','observed frequency',['expected frequency','row total','grand total'],'O stands for observed.'],
 ['Theory P50','In the chi-square formula, Eᵢⱼ denotes','expected frequency',['observed frequency','column heading','sample mean'],'E stands for expected.'],
 ['Theory P50','Expected frequency Eᵢⱼ equals','(row total × column total)/grand total',['observed frequency/grand total','row total + column total','grand total/number of rows'],'Use Eᵢⱼ = RᵢCⱼ/N.'],
 ['Theory P50','In the expected-frequency formula, Rᵢ denotes','row total',['column total','grand total','observed cell'],'Rᵢ is the total of row i.'],
 ['Theory P50','In the expected-frequency formula, Cⱼ denotes','column total',['row total','grand total','observed cell'],'Cⱼ is the total of column j.'],
 ['Theory P50','In the expected-frequency formula, N denotes','grand total',['number of rows only','number of columns only','one cell frequency'],'N counts all observations.'],
 ['Theory P50','If observed and expected frequencies are identical in every cell, χ² equals','0',['1','−1','N'],'Every contribution is zero.'],
 ['Theory P50','A larger difference between observed and expected frequencies generally gives','a larger χ²',['a negative χ²','χ² = 0 always','a smaller grand total necessarily'],'Squared deviations increase.'],
 ['Solved Example P51',`${handTable}\nThe expected frequency for men who are right-handed is`,'30',['40','45','50'],'E₁₁ = 80 × 75 / 200 = 30.'],
 ['Solved Example P51',`${handTable}\nThe expected frequency for men who are left-handed is`,'50',['30','40','75'],'E₁₂ = 80 × 125 / 200 = 50.'],
 ['Solved Example P51',`${handTable}\nThe expected frequency for women who are right-handed is`,'45',['35','50','75'],'E₂₁ = 120 × 75 / 200 = 45.'],
 ['Solved Example P51',`${handTable}\nThe expected frequency for women who are left-handed is`,'75',['50','85','120'],'E₂₂ = 120 × 125 / 200 = 75.'],
 ['Solved Example P51',`${handTable}\nThe chi-square statistic is`,'8.88',['6.55','3.37','0'],'The four contributions sum to 8.88.'],
 ['Solved Example P51',`${handTable}\nThe contribution from the cell O = 40, E = 30 is approximately`,'3.33',['2.22','2.00','1.33'],'(40 − 30)²/30 = 3.33.'],
 ['Solved Example P51',`${handTable}\nThe expected-frequency table preserves`,'the same row and column totals',['only the grand total','none of the totals','only diagonal totals'],'Expected counts are constructed from the marginal totals.'],
 ['Solved Example P51-52',`${colourTable}\nThe expected frequency for boys choosing pink is`,'34',['27','41','68'],'100 × 68 / 200 = 34.'],
 ['Solved Example P51-52',`${colourTable}\nThe expected frequency for boys choosing blue is`,'54',['45','63','108'],'100 × 108 / 200 = 54.'],
 ['Solved Example P51-52',`${colourTable}\nThe expected frequency for boys choosing orange is`,'12',['10','14','24'],'100 × 24 / 200 = 12.'],
 ['Solved Example P51-52',`${colourTable}\nThe expected frequencies for girls are`,'34, 54, 12',['41, 45, 14','68, 108, 24','27, 63, 10'],'Both gender row totals equal 100.'],
 ['Solved Example P51-52',`${colourTable}\nThe chi-square statistic is`,'6.55',['8.88','3.37','0'],'The six cell contributions sum to 6.55.'],
 ['Theory P50','The symbol Σ in the chi-square formula means','sum over all cells',['subtract all cells','take only one cell','find the mean'],'Every cell contributes to χ².'],
 ['Theory P50','A 2 × 2 contingency table contains','4 data cells',['2 data cells','6 data cells','8 data cells'],'Two rows times two columns gives four.'],
 ['Theory P50','A table with 2 row categories and 3 column categories contains','6 data cells',['5 data cells','3 data cells','9 data cells'],'2 × 3 = 6.'],
 ['Theory P50-52','Expected frequencies are calculated from','marginal totals and the grand total',['cell labels only','question number','class width only'],'They represent counts expected from the margins.'],
 ['Theory P50-52','The chi-square calculation compares','observed and expected frequencies',['means and medians','class marks and widths','maximum and minimum only'],'Each term uses O − E.'],
 ['Theory P49-52','Contingency tables and χ² are especially suited to','categorical data',['only continuous measurements','only ordered raw scores','only graphs'],'Categories are counted into cells.']
]);

const ex42Tables = [
 '⟦table:¦Offered¦Denied;Male¦75¦150;Female¦25¦50⟧',
 '⟦table:¦French Fries¦Burger¦Pizza;Boys¦6¦20¦24;Girls¦18¦40¦92⟧',
 '⟦table:Passed in →¦First attempt¦Second attempt;Men¦32¦28;Women¦8¦12⟧',
 '⟦table:Age¦Wear glasses¦Do not wear glasses;≤ 30¦310¦90;> 30¦290¦110⟧',
 '⟦table:¦Attacked¦Not attacked;Drug administered¦18¦62;Drug not administered¦30¦10⟧'
];
const ex42Q5Stem = 'Out of a sample of 120 persons in a village, 80 were administered a new drug for preventing influenza and out of them 18 were attacked by influenza. Out of those who were not administered the new drug, 10 persons were not attacked by influenza:';
const ex42Q5WrongTables = [
 '⟦table:¦Attacked¦Not attacked;Drug administered¦18¦30;Drug not administered¦62¦10⟧',
 '⟦table:¦Attacked¦Not attacked;Drug administered¦62¦18;Drug not administered¦10¦30⟧',
 '⟦table:¦Attacked¦Not attacked;Drug administered¦18¦10;Drug not administered¦30¦62⟧'
];
export const exercise42 = [
 entry('x1','Q1',`Following table shows the classification of applications for secretarial and for sales positions according to gender. Calculate the value of χ² statistic.\n${ex42Tables[0]}`,'0','Observed and expected frequencies are proportional, so χ² = 0.'),
 entry('x2','Q2',`200 teenagers were asked which take out food do they prefer – French fries, burger or pizza. The results were –\n${ex42Tables[1]}\nCompute χ² statistic.`,'3.37','Calculate expected frequencies from the margins and sum (O − E)²/E to obtain approximately 3.37.'),
 entry('x3','Q3',`A sample of men and women who had passed their driving test either in 1st attempt or in 2nd attempt were surveyed. Compute χ² statistic.\n${ex42Tables[2]}`,'1.07','The four chi-square contributions total approximately 1.07.'),
 entry('x4','Q4',`800 people were asked whether they wear glasses for reading with following results.\n${ex42Tables[3]}\nCompute the χ² square statistic.`,'2.66','The four chi-square contributions total approximately 2.66.'),
 choice('x5','Q5(a)',`${ex42Q5Stem}\nPrepare: (a) a two-way table showing frequencies.`,ex42Tables[4],ex42Q5WrongTables,'The administered group contains 18 attacked and 62 not attacked. The remaining 40 persons contain 30 attacked and 10 not attacked.'),
 entry('x6','Q5(b)',`${ex42Q5Stem}\n(b) Compute the χ² square statistic.`,'30.625','The completed 2 × 2 table and expected frequencies give χ² = 30.625.')
];

export const letsRemember4 = C('lr', [
 ['Let’s Remember P53','The chi-square statistic is denoted by','χ²',['σ²','r','μ'],'The standard symbol is χ².'],
 ['Let’s Remember P53','The chi-square statistic is computed using','Σ((O − E)²/E)',['Σ(O + E)','Σ(O − E)','E/O only'],'This is the textbook formula.'],
 ['Let’s Remember P53','Expected frequency is calculated as','row total × column total / N',['row total + column total','N / observed frequency','observed × N'],'Use Eᵢⱼ = RᵢCⱼ/N.'],
 ['Let’s Remember P53','O in the chi-square formula denotes','observed frequency',['expected frequency','overall mean','order number'],'O means observed.'],
 ['Let’s Remember P53','E in the chi-square formula denotes','expected frequency',['observed frequency','extreme value','error only'],'E means expected.'],
 ['Let’s Remember P53','N in the expected-frequency formula denotes','grand total',['row total','column total','number of classes only'],'N is the total frequency.'],
 ['Let’s Remember P53','The value of χ² can never be','negative',['zero','positive','a decimal'],'Every term is non-negative.'],
 ['Let’s Remember P53','If O = E for every cell, χ² is','0',['1','−1','N'],'All squared differences are zero.']
]);

const priceDemandTable='⟦table:Y \\ X¦0–4¦5–9¦10–14¦15–19¦Total;5–8¦2¦0¦3¦1¦6;9–12¦2¦9¦1¦0¦12;13–16¦1¦6¦4¦1¦12;Total¦5¦15¦8¦2¦30⟧';
const ageIntelligenceTable='⟦table:Y \\ X¦16–18¦18–20¦20–22¦22–24¦Total;10–20¦2¦0¦0¦0¦2;20–30¦0¦0¦0¦0¦0;30–40¦0¦0¦0¦5¦5;40–50¦3¦2¦3¦1¦9;50–60¦2¦1¦5¦1¦9;60–70¦0¦2¦1¦2¦5;Total¦7¦5¦9¦9¦30⟧';
const salesAdvTable='⟦table:Y \\ X¦115–125¦125–135¦135–145¦145–155¦155–165¦165–175¦Total;60–62¦2¦1¦0¦0¦0¦0¦3;62–64¦1¦0¦3¦0¦0¦0¦4;64–66¦1¦1¦2¦1¦0¦0¦5;66–68¦0¦2¦0¦2¦0¦0¦4;68–70¦0¦1¦1¦0¦1¦1¦4;Total¦4¦5¦6¦3¦1¦1¦20⟧';
const bpTable='⟦table:Y \\ X¦35–45¦45–55¦55–65¦65–75¦Total;115–130¦4¦0¦0¦0¦4;130–145¦2¦1¦3¦0¦6;145–160¦1¦1¦2¦3¦7;160–175¦1¦2¦2¦2¦7;Total¦8¦4¦7¦5¦24⟧';
const xyTable='⟦table:Y \\ X¦80–90¦90–100¦100–110¦110–120¦120–130¦Total;500–600¦0¦1¦0¦2¦1¦4;600–700¦2¦2¦2¦1¦0¦7;700–800¦1¦4¦0¦0¦1¦6;800–900¦1¦3¦1¦0¦3¦8;900–1000¦3¦1¦0¦1¦0¦5;Total¦7¦11¦3¦4¦5¦30⟧';
const mex4Q1Data='⟦table:Price¦5¦7¦9¦8¦10¦7¦9¦8¦5¦11¦11¦10¦2¦3¦9;Demand¦9¦15¦13¦15¦14¦10¦11¦14¦10¦14¦6¦14¦15¦11¦12;Price¦2¦4¦3¦14¦6¦10¦7¦15¦8¦6¦5¦6¦11¦14¦15;Demand¦6¦11¦8¦11¦10¦15¦9¦15¦13¦9¦14¦10¦7¦5¦6⟧';
const mex4Q1Stem=`Following data gives the coded price (x) and demand (y) of a commodity.\n${mex4Q1Data}`;
const mex4Q2Data='⟦table:Age¦16¦17¦22¦19¦21¦16;Marks¦16¦19¦39¦50¦48¦41;Age¦21¦20¦20¦23¦22¦19;Marks¦59¦44¦42¦62¦37¦67;Age¦23¦20¦22¦22¦23¦22;Marks¦45¦57¦35¦37¦38¦56;Age¦17¦18¦16¦21¦19¦20;Marks¦54¦61¦47¦67¦49¦56;Age¦17¦18¦23¦21¦20¦16;Marks¦51¦42¦65¦56¦52¦48⟧';
const mex4Q2Stem=`Following data gives the age in years and marks obtained by 30 students in an intelligence test.\n${mex4Q2Data}`;
const mex4Q3Data='(115, 61), (120, 60), (128, 61), (121, 63), (137, 62), (139, 62), (143, 63), (117, 65), (126, 64), (141, 65), (140, 65), (153, 64), (129, 67), (130, 66), (150, 67), (148, 66), (130, 69), (138, 68), (155, 69), (172, 68)';
const mex4Q3Stem=`Following data gives Sales (in Lakh Rs.) and Advertisement Expenditure (in Thousand Rs.) of 20 firms.\n${mex4Q3Data}`;
const mex4Q4Data='(55, 151), (36, 140), (72, 160), (38, 124), (65, 148), (46, 130), (58, 152), (50, 149), (38, 115), (42, 145), (41, 163), (47, 161), (69, 159), (60, 161), (58, 131), (57, 136), (43, 141), (52, 164), (59, 161), (44, 128), (35, 118), (62, 142), (67, 157), (70, 162)';
const mex4Q4Stem=`Prepare a bivariate frequency distribution for the following data, taking class intervals for X as 35–45, 45–55...etc and for Y as 115–130, 130–145...etc. where, X denotes the age in years and Y denotes blood pressure for a group of 24 persons.\n${mex4Q4Data}`;
const mex4Q5Data='⟦table:X¦110¦88¦91¦115¦97¦85¦85¦91¦120¦95;Y¦500¦800¦870¦599¦625¦650¦905¦700¦850¦824;X¦82¦105¦99¦90¦108¦124¦90¦90¦111¦89;Y¦970¦609¦990¦735¦600¦735¦729¦840¦999¦780;X¦112¦100¦87¦92¦91¦82¦96¦120¦121¦122;Y¦638¦850¦630¦720¦695¦923¦555¦810¦805¦526⟧';
const mex4Q5Stem=`Thirty pairs of values of two variables X and Y are given below.\n${mex4Q5Data}`;
export const miscellaneousExercise4 = [
 choice('m1','Q1',`${mex4Q1Stem}\nClassify the data by taking classes 0–4, 5–9 etc. for x and 5–8, 9–12 etc. for y.`,priceDemandTable,[ageIntelligenceTable,salesAdvTable,bpTable],'Classification gives the displayed table.'),
 choice('m2','Q1(i)',`${mex4Q1Stem}\nYou may use the bivariate frequency table given below.\n${priceDemandTable}\nFind marginal frequency distribution of x.`, '5, 15, 8, 2',['6, 12, 12','7, 5, 9, 9','30, 30, 30, 30'],'Read the column totals.'),
 choice('m3','Q1(i)',`${mex4Q1Stem}\nYou may use the bivariate frequency table given below.\n${priceDemandTable}\nFind marginal frequency distribution of y.`, '6, 12, 12',['5, 15, 8, 2','6, 10, 14','30, 30, 30'],'Read the row totals.'),
 choice('m4','Q1(ii)',`${mex4Q1Stem}\nYou may use the bivariate frequency table given below.\n${priceDemandTable}\nFind conditional frequency distribution of y  when x is less than 10.`, '2, 11, 7',['6, 12, 12','5, 15, 8','2, 3, 1'],'Add the first two X columns.'),
 choice('m5','Q2',`${mex4Q2Stem}\nPrepare a bivariate frequency distribution by taking class intervals 16–18, 18–20,...etc. for age and 10–20, 20–30... etc. for marks.`,ageIntelligenceTable,[priceDemandTable,salesAdvTable,bpTable],'Classification gives the displayed table.'),
 choice('m6','Q2(i)',`${mex4Q2Stem}\nYou may use the bivariate frequency table given below.\n${ageIntelligenceTable}\nFind marginal frequency distribution of age.`, '7, 5, 9, 9',['2, 0, 5, 9, 9, 5','5, 15, 8, 2','30, 30, 30, 30'],'Read the column totals.'),
 choice('m7','Q2(i)',`${mex4Q2Stem}\nYou may use the bivariate frequency table given below.\n${ageIntelligenceTable}\nFind marginal frequency distribution of marks.`, '2, 0, 5, 9, 9, 5',['7, 5, 9, 9','2, 5, 9, 9, 5, 0','30, 30, 30, 30, 30, 30'],'Read the row totals.'),
 choice('m8','Q2(ii)',`${mex4Q2Stem}\nYou may use the bivariate frequency table given below.\n${ageIntelligenceTable}\nFind conditional frequency distribution of marks obtained when age of students is between 20–22.`, '0, 0, 0, 3, 5, 1',['2, 0, 5, 9, 9, 5','0, 0, 3, 5, 1, 0','7, 5, 9, 9'],'Read the 20–22 age column.'),
 choice('m9','Q3(i)',`${mex4Q3Stem}\nConstruct a bivariate frequency distribution table for the above data by taking classes 115–125, 125–135, ....etc. for sales and 60–62, 62–64, ...etc. for advertisement expenditure.`,salesAdvTable,[ageIntelligenceTable,bpTable,xyTable],'Classification gives the displayed table.'),
 choice('m10','Q3(ii)',`${mex4Q3Stem}\nYou may use the bivariate frequency table given below.\n${salesAdvTable}\nFind marginal frequency distribution of sales.`, '4, 5, 6, 3, 1, 1',['3, 4, 5, 4, 4','4, 6, 5, 3, 1, 1','20, 20, 20, 20, 20, 20'],'Read the column totals.'),
 choice('m11','Q3(ii)',`${mex4Q3Stem}\nYou may use the bivariate frequency table given below.\n${salesAdvTable}\nFind marginal frequency distribution of advertisement expenditure.`, '3, 4, 5, 4, 4',['4, 5, 6, 3, 1, 1','3, 5, 4, 4, 4','20, 20, 20, 20, 20'],'Read the row totals.'),
 choice('m12','Q3(iii)',`${mex4Q3Stem}\nYou may use the bivariate frequency table given below.\n${salesAdvTable}\nFind conditional frequency distribution of Sales when the advertisement expenditure is between 64–66 (Thousand Rs.).`, '1, 1, 2, 1, 0, 0',['4, 5, 6, 3, 1, 1','1, 0, 1, 2, 1, 0','3, 4, 5, 4, 4'],'Read the 64–66 row.'),
 choice('m13','Q3(iv)',`${mex4Q3Stem}\nYou may use the bivariate frequency table given below.\n${salesAdvTable}\nFind conditional frequency distribution of advertisement expenditure when the sales are between 125–135 (Lakh Rs.).`, '1, 0, 1, 2, 1',['3, 4, 5, 4, 4','1, 1, 2, 1, 0','4, 5, 6, 3, 1'],'Read the 125–135 column.'),
 choice('m14','Q4',mex4Q4Stem,bpTable,[salesAdvTable,ageIntelligenceTable,xyTable],'Classification gives the displayed table.'),
 choice('m15','Q4(i)',`${mex4Q4Stem}\nYou may use the bivariate frequency table given below.\n${bpTable}\nFind marginal frequency distribution of X.`, '8, 4, 7, 5',['4, 6, 7, 7','8, 7, 4, 5','24, 24, 24, 24'],'Read the column totals.'),
 choice('m16','Q4(ii)',`${mex4Q4Stem}\nYou may use the bivariate frequency table given below.\n${bpTable}\nFind conditional frequency distribution of Y when X < 45.`, '4, 2, 1, 1',['4, 6, 7, 7','8, 4, 7, 5','0, 2, 1, 4'],'Read the 35–45 column.'),
 choice('m17','Q5',`${mex4Q5Stem}\nForm a bivariate frequency table.`,xyTable,[bpTable,salesAdvTable,priceDemandTable],'Classification gives the displayed table.'),
 choice('m18','Q5',`${mex4Q5Stem}\nYou may use the bivariate frequency table given below.\n${xyTable}\nFind marginal frequency distribution of X.`, '7, 11, 3, 4, 5',['4, 7, 6, 8, 5','7, 3, 11, 4, 5','30, 30, 30, 30, 30'],'Read the column totals.'),
 choice('m19','Q5',`${mex4Q5Stem}\nYou may use the bivariate frequency table given below.\n${xyTable}\nFind marginal frequency distribution of Y.`, '4, 7, 6, 8, 5',['7, 11, 3, 4, 5','4, 6, 7, 8, 5','30, 30, 30, 30, 30'],'Read the row totals.'),
 entry('m20','Q6','Following table shows how the samples of Mathematics and Economics scores of 25 students are distributed:\n⟦table:Marks in Economics \\ Marks in Mathematics¦40–70¦70–100;40–70¦20¦15;70–100¦5¦10⟧\nFind the value of χ² statistic.','2.38','Using the observed table and expected frequencies gives χ² ≈ 2.38.'),
 entry('m21','Q7','Compute χ² statistic from following data:\n⟦table:¦Graduates¦Post-Graduates;Male¦28¦22;Female¦32¦18⟧','0.67','The four cell contributions total approximately 0.67.'),
 entry('m22','Q8','Attitude of 250 employees towards a proposed policy of the company is observed in the following table.\n⟦table:¦Favor¦Indifferent¦Oppose;Male¦68¦46¦36;Female¦27¦49¦24⟧\nCalculate χ² statistic.','10.614','The six cell contributions total approximately 10.614.'),
 entry('m23','Q9','In a certain sample of 1000 families, 450 families are consumers of tea. Out of 600 Hindu families, 286 families consume tea.\nCalculate χ² statistic.','4.31','Complete the 2 × 2 table and sum the four chi-square contributions.'),
 entry('m24','Q10','A sample of boys and girls were asked to choose their favourite sport, with the following results.\n⟦table:¦Football¦Cricket¦Hockey¦Basketball;Boys¦86¦60¦44¦10;Girls¦40¦30¦25¦5⟧\nFind the value of χ² statistic.','0.4076','The eight cell contributions give χ² ≈ 0.4076.')
];
miscellaneousExercise4.forEach(question => { question.compactDataTables = true; });

const moviePreferenceTable = '⟦table:¦Melodramatic¦Action¦Total;Boys¦25¦75¦100;Girls¦65¦35¦100;Total¦90¦110¦200⟧';
const optionalSubjectTable = '⟦table:¦Mathematics¦Secretarial Practice¦Total;Boys¦50¦25¦75;Girls¦39¦36¦75;Total¦89¦61¦150⟧';
const classroomHeightWeightContext = 'Students measure the height and weight of at least 20 students in their class and prepare a bivariate frequency table from the collected pairs.';

export const activities4 = [
 choice('a1','Activity 4.1', 'A movie-preference survey has observed frequencies 25, 75, 65 and 35. What is the grand total?','200',['100','180','400'],'25 + 75 + 65 + 35 = 200.'),
 choice('a2','Activity 4.1',`${moviePreferenceTable}\nFind the row totals for boys and girls.`,'100 and 100',['90 and 110','65 and 35','25 and 75'],'Each row totals 100.'),
 choice('a3','Activity 4.1',`${moviePreferenceTable}\nFind the column totals for melodramatic and action movies.`,'90 and 110',['100 and 100','65 and 35','25 and 75'],'25 + 65 = 90 and 75 + 35 = 110.'),
 choice('a4','Activity 4.1',`${moviePreferenceTable}\nFind the four expected frequencies in row order.`,'45, 55, 45, 55',['25, 75, 65, 35','50, 50, 50, 50','90, 110, 90, 110'],'Use row total × column total / 200.'),
 entry('a5','Activity 4.1','⟦table:¦Melodramatic¦Action;Boys¦25¦75;Girls¦65¦35⟧\nCalculate χ² statistic.','32.32','The four contributions from expected counts 45 and 55 sum to approximately 32.32.'),
 choice('a6','Activity 4.1',`${optionalSubjectTable}\nFind the expected frequency for boys choosing Mathematics.`,'44.5',['30.5','39','50'],'75 × 89 / 150 = 44.5.'),
 choice('a7','Activity 4.1',`${optionalSubjectTable}\nFind the expected frequency for boys choosing Secretarial Practice.`,'30.5',['44.5','36','25'],'75 × 61 / 150 = 30.5.'),
 entry('a8','Activity 4.1','⟦table:¦Mathematics¦Secretarial Practice;Boys¦50¦25;Girls¦39¦36⟧\nCalculate χ² statistic correct to two decimal places.','3.86','Expected counts are 44.5 and 30.5 in each row; the contributions sum to approximately 3.86.'),
 choice('a9','Activity 4.2',`${classroomHeightWeightContext}\nWhich measurements are collected?`,'height and weight of at least 20 students',['age and income only','marks in one subject only','temperature only'],'The activity constructs a bivariate table from height and weight.'),
 choice('a10','Activity 4.2',`${classroomHeightWeightContext}\nThe completed table`,'depends on the observations collected',['is always identical','must have zero frequencies','has a fixed χ² value'],'Different samples give different frequencies.'),
 choice('a11','Activity 4.2',`${classroomHeightWeightContext}\nWhich are the two variables?`,'height and weight',['gender and food preference','age and blood group','price and demand'],'Both are measured for each student.'),
 choice('a12','Activity 4.2',`${classroomHeightWeightContext}\nWhich is the suitable summary?`,'bivariate frequency table',['single number only','pie chart of one variable only','list without pairs'],'The table groups height and weight jointly.'),
 choice('a13','Activity 4.3','A bivariate dataset contains height-weight measurements for 20 students.\nWhat is the grand total?','20',['6','7','72'],'There are 20 student pairs.'),
 choice('a14','Activity 4.3','Height classes are 115–125, 125–135, 135–145, 145–155, 155–165 and 165–175 cm.\nWhat is the width of each height class interval?','10 cm',['5 cm','15 cm','20 cm'],'The successive height class limits differ by 10 cm.'),
 choice('a15','Activity 4.3','Weight classes are 62–64, 64–66, 66–68, 68–70 and 70–72 kg.\nWhat is the width of each weight class interval?','2 kg',['5 kg','10 kg','1 kg'],'The successive weight class limits differ by 2 kg.'),
 choice('a16','Activity 4.3','A bivariate frequency table places height classes in columns and writes fₓ below those columns.\nWhat does fₓ represent?','marginal frequencies of height',['conditional frequencies only','expected frequencies','chi-square contributions'],'Column totals summarize X.'),
 choice('a17','Activity 4.3','A bivariate frequency table places weight classes in rows and writes fᵧ to the right of those rows.\nWhat does fᵧ represent?','marginal frequencies of weight',['class marks','expected frequencies','chi-square contributions'],'Row totals summarize Y.'),
 choice('a18','Activity 4.3','Twenty height-weight pairs must be classified in a bivariate frequency table.\nWhat is required to complete the table?','tallying each height-weight pair in its correct cell',['changing the original observations','using only row headings','ignoring marginal totals'],'Every ordered pair is classified once.')
];
