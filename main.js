import { activities1, exercise11, exercise12, letsRemember1, miscellaneousExercise1, theoryPages1to9, theoryPages10to15 } from './questions.js';
import { activities2, exercise21, letsRemember2, miscellaneousExercise2, theoryPages20to30 } from './unit2-questions.js';
import { activities3, exercise31, exercise32, exercise33, letsRemember3, miscellaneousExercise3, theoryPages33to37, theoryPages38to40, theoryPages40to42 } from './unit3-questions.js';
import { activities1 as part2Activities1, exercise11 as part2Exercise11, exercise12 as part2Exercise12, exercise13 as part2Exercise13, letsRemember1 as part2LetsRemember1, miscellaneousExercise1 as part2MiscellaneousExercise1, theoryPages1to7 as part2TheoryPages1to7, theoryPages8to15 as part2TheoryPages8to15, theoryPages16to18 as part2TheoryPages16to18 } from './part2-unit1-questions.js?v=20260925-85';

const app = document.querySelector('#app');
const homeButton = document.querySelector('#homeButton');
const STORE = 'commerce-xi-maths-v1';
const QUESTION_SECONDS = 300;
const UNIT_PAPER_NAMES = {
  1: ['Th(P:1-9)', 'Ex-1.1', 'Th(P:10-15)', 'Ex-1.2', "Let's Remember", 'Mis-Ex-1', 'Activities', 'Surprise Test'],
  2: ['Th(P:20-30)', 'Ex-2.1', "Let's Remember", 'Mis-Ex-2', 'Activities', 'Surprise Test'],
  3: ['Th(P:33-37)', 'Ex-3.1', 'Th(P:38-40)', 'Ex-3.2', 'Th(P:40-42)', 'Ex-3.3', "Let's Remember", 'Mis-Ex-3', 'Activities', 'Surprise Test'],
};
const UNIT_PAPERS = { 1: {
  'Th(P:1-9)': { title: 'Theory (Pages 1–9)', questions: theoryPages1to9 },
  'Ex-1.1': { title: 'Exercise 1.1', questions: exercise11 },
  'Th(P:10-15)': { title: 'Theory (Pages 10–15)', questions: theoryPages10to15 },
  'Ex-1.2': { title: 'Exercise 1.2', questions: exercise12 },
  "Let's Remember": { title: "Let's Remember", questions: letsRemember1 },
  'Mis-Ex-1': { title: 'Miscellaneous Exercise 1', questions: miscellaneousExercise1 },
  'Activities': { title: 'Activities 1.1–1.10', questions: activities1 },
}, 2: {
  'Th(P:20-30)': { title: 'Theory (Pages 20–30)', questions: theoryPages20to30 },
  'Ex-2.1': { title: 'Exercise 2.1', questions: exercise21 },
  "Let's Remember": { title: "Let's Remember", questions: letsRemember2 },
  'Mis-Ex-2': { title: 'Miscellaneous Exercise 2', questions: miscellaneousExercise2 },
  'Activities': { title: 'Activities 2.1–2.3', questions: activities2 },
}, 3: {
  'Th(P:33-37)': { title: 'Theory (Pages 33–37)', questions: theoryPages33to37 },
  'Ex-3.1': { title: 'Exercise 3.1', questions: exercise31 },
  'Th(P:38-40)': { title: 'Theory (Pages 38–40)', questions: theoryPages38to40 },
  'Ex-3.2': { title: 'Exercise 3.2', questions: exercise32 },
  'Th(P:40-42)': { title: 'Theory (Pages 40–42)', questions: theoryPages40to42 },
  'Ex-3.3': { title: 'Exercise 3.3', questions: exercise33 },
  "Let's Remember": { title: "Let's Remember", questions: letsRemember3 },
  'Mis-Ex-3': { title: 'Miscellaneous Exercise 3', questions: miscellaneousExercise3 },
  'Activities': { title: 'Activities 3.1–3.2', questions: activities3 },
} };
const PART2_UNIT1_PAPER_NAMES = ['Th(P:1-7)', 'Ex-1.1', 'Th(P:8-15)', 'Ex-1.2', 'Th(P:16-18)', 'Ex-1.3', "Let's Remember", 'Mis-Ex-1', 'Activities', 'Surprise Test'];
const PART2_UNIT1_PAPERS = {
  'Th(P:1-7)': { title: 'Theory (Pages 1–7)', questions: part2TheoryPages1to7 },
  'Ex-1.1': { title: 'Exercise 1.1', questions: part2Exercise11 },
  'Th(P:8-15)': { title: 'Theory (Pages 8–15)', questions: part2TheoryPages8to15 },
  'Ex-1.2': { title: 'Exercise 1.2', questions: part2Exercise12 },
  'Th(P:16-18)': { title: 'Theory (Pages 16–18)', questions: part2TheoryPages16to18 },
  'Ex-1.3': { title: 'Exercise 1.3', questions: part2Exercise13 },
  "Let's Remember": { title: "Let's Remember", questions: part2LetsRemember1 },
  'Mis-Ex-1': { title: 'Miscellaneous Exercise 1', questions: part2MiscellaneousExercise1 },
  'Activities': { title: 'Activities 1.1–1.4', questions: part2Activities1 },
};
const SOLUTION_PDFS = {
  '1:Th(P:1-9)': 'solutions/Th-P1-9.pdf', '1:Ex-1.1': 'solutions/Ex-1.1.pdf',
  '1:Th(P:10-15)': 'solutions/Th-P10-15.pdf', '1:Ex-1.2': 'solutions/Ex-1.2.pdf',
  "1:Let's Remember": 'solutions/Lets-Remember.pdf', '1:Mis-Ex-1': 'solutions/Mis-Ex-1.pdf',
  '1:Activities': 'solutions/Activities.pdf',
  '2:Th(P:20-30)': 'solutions/Th-P20-30.pdf', '2:Ex-2.1': 'solutions/Ex-2.1.pdf',
  "2:Let's Remember": 'solutions/Lets-Remember-2.pdf', '2:Mis-Ex-2': 'solutions/Mis-Ex-2.pdf',
  '2:Activities': 'solutions/Activities-2.pdf',
  '3:Th(P:33-37)': 'solutions/Th-P33-37.pdf', '3:Ex-3.1': 'solutions/Ex-3.1.pdf',
  '3:Th(P:38-40)': 'solutions/Th-P38-40.pdf', '3:Ex-3.2': 'solutions/Ex-3.2.pdf',
  '3:Th(P:40-42)': 'solutions/Th-P40-42.pdf', '3:Ex-3.3': 'solutions/Ex-3.3.pdf',
  "3:Let's Remember": 'solutions/Lets-Remember-3.pdf', '3:Mis-Ex-3': 'solutions/Mis-Ex-3.pdf',
  '3:Activities': 'solutions/Activities-3.pdf',
};
const PART2_UNIT1_SOLUTION_PDFS = {
  'Th(P:1-7)': 'solutions/part2-unit1-Th-P1-7.pdf', 'Ex-1.1': 'solutions/part2-unit1-Ex-1.1.pdf',
  'Th(P:8-15)': 'solutions/part2-unit1-Th-P8-15.pdf', 'Ex-1.2': 'solutions/part2-unit1-Ex-1.2.pdf',
  'Th(P:16-18)': 'solutions/part2-unit1-Th-P16-18.pdf', 'Ex-1.3': 'solutions/part2-unit1-Ex-1.3.pdf',
  "Let's Remember": 'solutions/part2-unit1-Lets-Remember.pdf', 'Mis-Ex-1': 'solutions/part2-unit1-Mis-Ex-1.pdf',
  'Activities': 'solutions/part2-unit1-Activities.pdf',
};
const UNIT1_GUIDE_PDF = 'guides/unit-1-reference.pdf';
const UNIT2_GUIDE_PDF = 'guides/unit-2-reference.pdf';
const UNIT3_GUIDE_PDF = 'guides/unit-3-reference.pdf';
const PART2_UNIT1_GUIDE_PDF = 'guides/part2-unit1-reference.pdf';
const localDateKey = date => {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};
const hashSeed = value => {
  let hash = 2166136261;
  for (const character of value) { hash ^= character.charCodeAt(0); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
};
const seededRandom = seed => {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
};
const papersFor = (part, unit) => part === 2 && unit === 1 ? PART2_UNIT1_PAPERS : part === 1 ? UNIT_PAPERS[unit] || {} : {};
function surpriseQuestions(part, unit, dateKey = localDateKey(new Date())) {
  return Object.entries(papersFor(part, unit)).flatMap(([paperName, paper]) => {
    const random = seededRandom(hashSeed(`${dateKey}:${paperName}`));
    const pool = paper.questions.map((question, questionIndex) => ({ question, questionIndex }));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 5).map(({ question, questionIndex }) => ({
      ...question,
      id: `${paperName}:${question.id}`,
      source: `${paperName} · ${question.source}`,
      originPaper: paperName,
      originQuestionIndex: questionIndex,
    }));
  });
}
const paperNamesFor = (unit, part = 1) => part === 2 && unit === 1 ? PART2_UNIT1_PAPER_NAMES : part === 1 ? UNIT_PAPER_NAMES[unit] || [] : [];
const paperFor = (name, unit = 1, part = 1) => {
  const normalized = name === 'Ex1.1' ? 'Ex-1.1' : name;
  return normalized === 'Surprise Test' ? { title: 'Surprise Test', questions: surpriseQuestions(part, unit) } : papersFor(part, unit)[normalized];
};
const questionsFor = (name, record = null, unit = record?.unit || 1, part = record?.part || 1) => record?.questions || paperFor(name, unit, part)?.questions || exercise11;
const marksFor = (name, record = null, unit = record?.unit || 1, part = record?.part || 1) => questionsFor(name, record, unit, part).length * 2;
const minutesFor = (name, record = null, unit = record?.unit || 1, part = record?.part || 1) => questionsFor(name, record, unit, part).length * QUESTION_SECONDS / 60;
const solutionPdfFor = (name, unit, part = 1) => part === 1 ? SOLUTION_PDFS[`${unit}:${name}`] : part === 2 && unit === 1 ? PART2_UNIT1_SOLUTION_PDFS[name] : null;
// Accept equivalent answer forms and preserve fair scoring for older attempts.
const acceptedForms = {
  q2i: ['{x | x ∈ W, x < 1}'],
  q2ii: ['{x | x ∈ Z, −3 ≤ x ≤ 3}'],
  q2iii: ['{x | x = n/(n² + 1), n ∈ N, n ≤ 7}'],
  q3ii: ['∅'],
  q12i: ['{x ∈ R | −3 ≤ x ≤ 0}'],
  q12ii: ['{x ∈ R | 6 ≤ x ≤ 12}'],
  q12iii: ['{x ∈ R | 6 < x ≤ 12}'],
  q12iv: ['{x ∈ R | −23 ≤ x < 5}'],
  p2u1e12tail1: ['24.72%', '24.72 %'],
};
const letters = ['A', 'B', 'C', 'D'];
let mathUnitContext = 1;
let mathPartContext = 1;
const sourceNavLabel = source => source.replace(' Roster form', '').replace(' Complements', 'C').replace(' Intersection', '∩').replace(' Union', '∪').replace(' A − B', 'A−B').replace(' B − A', 'B−A').replace(' A × A', 'AA').replace(' A × B', 'AB').replace(' B × A', 'BA').replace(' B × B', 'BB').replace(' Domain', 'D').replace(' Range', 'R').replace(/[()]/g, '');
const resultSourceLabel = source => String(source).replace(/\(([ivxlcdm]+)\)/gi, (_, roman) => `(${roman.toUpperCase()})`);
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const renderNotation = value => escape(value).replace(/\{x ∈ R \| /g, '{x / x ∈ R, ').replace(/ \| /g, ' / ');
function renderMathMlRadicand(expression) {
  let markup = '';
  for (let index = 0; index < expression.length;) {
    const character = expression[index];
    if (/\s/.test(character)) {
      index += 1;
      continue;
    }
    if (/[A-Za-z]/.test(character)) {
      const identifier = `<mi>${character}</mi>`;
      markup += expression[index + 1] === '²' ? `<msup>${identifier}<mn>2</mn></msup>` : identifier;
      index += expression[index + 1] === '²' ? 2 : 1;
      continue;
    }
    if (/\d/.test(character)) {
      const number = expression.slice(index).match(/^\d+/)[0];
      markup += `<mn>${number}</mn>`;
      index += number.length;
      continue;
    }
    markup += `<mo>${character}</mo>`;
    index += 1;
  }
  return `<math class="math-radical" xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mrow>${markup}</mrow></msqrt></math>`;
}
function renderMath(value) {
  const fractions = [];
  const radicals = [];
  const rendered = renderNotation(value)
    .replace(/⟦frac:([^¦]+)¦([^⟧]+)⟧/g, (_, numerator, denominator) => {
      fractions.push([numerator, denominator]);
      return `\uE002${fractions.length - 1}\uE003`;
    })
    .replace(/√\{([^{}]+)\}/g, (_, radicand) => {
      radicals.push(renderMathMlRadicand(radicand));
      return `\uE000${radicals.length - 1}\uE001`;
    })
    .replace(/(n²|n)\/\((n² \+ 1|n \+ 1)\)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/([−-]?[A-Za-z\d]+)\/\(([A-Za-z\d]+)\)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/([−-]?[A-Za-z\d]+)\/([A-Za-z\d]+)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/(\d+(?:\.\d+)?)(st|nd|rd|th)\b/g, '$1<sup class="ordinal-suffix">$2</sup>');
  const groupedFunctions = rendered
    .replace(/\bc\.f\./g, '<i class="math-symbol">c.f.</i>')
    .replace(/\b(fg|gf)\b/g, '<i class="math-symbol">$1</i>');
  const functions = groupedFunctions.replace(/\b([fg])\b/g, (match, symbol, offset, fullText) => {
    const isFunctionCall = /^\s*[([]/.test(fullText.slice(offset + match.length));
    return `<i class="${isFunctionCall ? 'math-function' : 'math-symbol'}">${symbol}</i>`;
  });
  const unit3Variables = /(?<![A-Za-z])(?:ib|id|iq|ip|ia|ik|ki|ai|bi|iy|ix|xi|ac|bd|ad|bc|kb|ka|kz|ab|kab|aw|bw|cw|xyz)(?![A-Za-z])|(?<![A-Za-z])([bcdikmnpqwxyzαβ])(?![A-Za-z])|(?<![A-Za-z])a(?=\s*(?:$|[,+−=≠<>∈/²³⁴β])|\s+and\s+[bcdikmnpqwxyz]\b|\s+must\b)|(?<=[−+(=/\d])a(?![A-Za-z])/g;
  const italicizeVariables = part => part.replace(unit3Variables, (token, _single, offset, fullText) => {
    const hasSuperscript = /^[⁰¹²³⁴⁵⁶⁷⁸⁹ᵏⁿ]/.test(fullText.slice(offset + token.length));
    return token.replace(/[abcdikmnpqwxyzαβ]/g, (symbol, symbolOffset) => {
      const isPowerBase = hasSuperscript && symbolOffset === token.length - 1;
      return `<i class="math-symbol${isPowerBase ? ' math-power-base' : ''}">${symbol}</i>`;
    });
  });
  return functions
    .split(/(<[^>]+>)/g)
    .map(part => part.startsWith('<') ? part : mathPartContext === 2
      ? part.replace(/(?<![A-Za-z])([fhinxyLN])(?![A-Za-z])/g, match => `<i class="math-symbol">${match}</i>`)
      : mathUnitContext === 3
      ? italicizeVariables(part)
      : part.replace(/(?<![A-Za-z])([iwxyz])(?![A-Za-z])|i(?=$|[\s,.;:)}\]⁰¹²³⁴⁵⁶⁷⁸⁹+−×÷=])/g, match => `<i class="math-symbol">${match}</i>`))
    .join('')
    .replace(/\uE000(\d+)\uE001/g, (_, index) => radicals[Number(index)])
    .replace(/\uE002(\d+)\uE003/g, (_, index) => {
      const [numerator, denominator] = fractions[Number(index)];
      return `<span class="math-frac math-frac-expression"><span>${renderMath(numerator)}</span><span>${renderMath(denominator)}</span></span>`;
    });
}
function renderPrompt(question) {
  if (question.piecewise) {
    const rows = question.piecewise.branches.map(([expression, condition]) => `<span>${renderMath(expression)},</span><span>${renderMath(condition)}</span>`).join('');
    const target = renderMath(question.piecewise.target);
    const caseCount = question.piecewise.branches.length;
    return `<span class="piecewise-line"><span>If ${renderMath('f(x)')} =</span><span class="piecewise-definition piecewise-${caseCount}"><span class="piecewise-brace">{</span><span class="piecewise-cases">${rows}</span></span><span>, then find&nbsp; ${target}</span></span>`;
  }
  const tables = [];
  const promptWithTableTokens = String(question.prompt).replace(/⟦table:([^⟧]+)⟧/g, (_, body) => {
    tables.push(body.split(';').map(row => row.split('¦')));
    return `\uE004${tables.length - 1}\uE005`;
  });
  let html = renderMath(promptWithTableTokens).replace(/\uE004(\d+)\uE005/g, (_, index) => {
    const rows = tables[Number(index)];
    return `<div class="question-table-wrap"><table class="question-data-table"><tbody>${rows.map(row => `<tr>${row.map((cell, cellIndex) => `<${cellIndex === 0 ? 'th' : 'td'}>${renderMath(cell)}</${cellIndex === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  });
  if (question.id === 'q2iii') {
    html = html.replace(/(\{[^}]+\})/, '<span class="math-set">$1</span>');
  }
  return `${html}${question.visual ? `<span class="question-visual">${question.visual}</span>` : ''}`;
}
const formatTime = ms => { const seconds = Math.max(0, Math.ceil(ms / 1000)); return `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor(seconds % 3600 / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; };
const dateLabel = iso => new Date(iso).toLocaleString('en-IN');

function readSaved() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } }
let saved = readSaved();
saved.history ||= [];
const requestedUnit = Number(new URLSearchParams(window.location.search).get('unit'));
const initialUnit = [1, 2, 3].includes(requestedUnit) ? requestedUnit : 1;
let selection = { part: 1, unit: initialUnit, paper: paperNamesFor(initialUnit, 1)[0] };
let attempt = saved.attempt || null;
// Earlier saved attempts have no paper field and belong to Exercise 1.1.
if (attempt && !attempt.paper) attempt.paper = 'Ex-1.1';
if (attempt && !attempt.unit) attempt.unit = 1;
if (attempt && !attempt.part) attempt.part = 1;
// Recover from unfinished attempts saved before a unit or paper structure changed.
// A stale record must never prevent the home screen from opening.
if (attempt) {
  const validPaper = paperFor(attempt.paper, attempt.unit, attempt.part);
  const validDeadline = Number.isFinite(Number(attempt.deadline));
  if (!validPaper || !validDeadline) {
    attempt = null;
    saved.attempt = null;
    localStorage.setItem(STORE, JSON.stringify(saved));
  }
}
let index = attempt?.currentIndex || 0;
let view = attempt ? 'test' : 'home';

function persist() { saved.attempt = attempt; localStorage.setItem(STORE, JSON.stringify(saved)); }
function shuffledOptions(question) {
  const options = [...question.options];
  for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
  return options;
}
if (attempt) {
  const attemptQuestions = questionsFor(attempt.paper, attempt, attempt.unit, attempt.part);
  attempt.responses ||= [];
  attempt.optionOrders ||= [];
  const removedQuestions = Math.max(0, attempt.responses.length - attemptQuestions.length);
  if (removedQuestions) {
    attempt.responses.length = attemptQuestions.length;
    attempt.optionOrders.length = attemptQuestions.length;
    attempt.deadline -= removedQuestions * QUESTION_SECONDS * 1000;
    attempt.currentIndex = Math.min(attempt.currentIndex || 0, Math.max(0, attemptQuestions.length - 1));
    index = attempt.currentIndex;
  }
  const addedQuestions = Math.max(0, attemptQuestions.length - attempt.responses.length);
  for (let i = attempt.responses.length; i < attemptQuestions.length; i++) {
    attempt.responses.push({ selected: '', text: '', review: false, visits: 0 });
    attempt.optionOrders.push(attemptQuestions[i].type === 'choice' ? shuffledOptions(attemptQuestions[i]) : null);
  }
  if (addedQuestions || removedQuestions) {
    attempt.deadline += addedQuestions * QUESTION_SECONDS * 1000;
    persist();
  }
}
function currentState() { return attempt.responses[index]; }
function responseFor(question, response) {
  if (question.type === 'choice') return response.selected || '';
  return (response.text || '').trim();
}
function normalizeNumber(value) {
  const cleaned = String(value).trim().replace(/,/g, '').replace(/\s+/g, '');
  return /^\d+$/.test(cleaned) ? String(Number(cleaned)) : cleaned;
}
function scoreAttempt(active) {
  let correct = 0, wrong = 0, unanswered = 0;
  const items = questionsFor(active.paper, active, active.unit, active.part).map((question, i) => {
    const answer = responseFor(question, active.responses[i]);
    const isAnswered = answer !== '';
    const isCorrect = isAnswered && (question.type === 'choice'
      ? answer === question.correct || (acceptedForms[question.id] || []).includes(answer)
      : normalizeNumber(answer) === question.correct || (acceptedForms[question.id] || []).includes(answer));
    if (isCorrect) correct++;
    else if (isAnswered) wrong++;
    else unanswered++;
    return { source: question.source, answer, correctAnswer: question.correct, isCorrect, marks: isCorrect ? 2 : isAnswered ? -1 : 0 };
  });
  return { id: active.id, part: active.part || 1, unit: active.unit || 1, paper: active.paper, questions: active.questions || null, startedAt: active.startedAt, submittedAt: new Date().toISOString(), reason: active.reason || 'Submitted', score: correct * 2 - wrong, correct, wrong, unanswered, items };
}
function submit(auto = false, confirmed = false) {
  if (!attempt) return;
  const reviewCount = attempt.responses.filter(item => item.review).length;
  if (!auto && !confirmed) {
    document.querySelector('#submitDialog')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'submitDialog';
    overlay.className = 'dialog-backdrop';
    overlay.innerHTML = `<div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="dialogTitle"><h2 id="dialogTitle">Submit ${escape(paperFor(attempt.paper, attempt.unit, attempt.part).title)}?</h2><p>${reviewCount ? `You have ${reviewCount} question${reviewCount === 1 ? '' : 's'} marked for review.` : 'Your answers will be scored and the test will end.'}</p><div class="row"><button class="secondary" id="cancelSubmit">Cancel</button><button class="primary" id="confirmSubmit">Submit</button></div></div>`;
    document.body.append(overlay);
    overlay.querySelector('#cancelSubmit').onclick = () => overlay.remove();
    overlay.querySelector('#confirmSubmit').onclick = () => { overlay.remove(); submit(false, true); };
    return;
  }
  attempt.reason = auto ? 'Time completed' : 'Submitted';
  const result = scoreAttempt(attempt);
  saved.history.unshift(result);
  attempt = null;
  view = 'result';
  persist();
  renderResult(result);
}
function start() {
  if (!paperFor(selection.paper, selection.unit, selection.part)) return;
  if (attempt && !confirm('A test is in progress. Start a new test and discard that unfinished attempt?')) return;
  const questions = questionsFor(selection.paper, null, selection.unit, selection.part);
  attempt = { id: crypto.randomUUID(), part: selection.part, unit: selection.unit, paper: selection.paper, questions: selection.paper === 'Surprise Test' ? questions : null, startedAt: new Date().toISOString(), deadline: Date.now() + questions.length * QUESTION_SECONDS * 1000, responses: questions.map(() => ({ selected: '', text: '', review: false, visits: 0 })), optionOrders: questions.map(q => q.type === 'choice' ? shuffledOptions(q) : null) };
  index = 0; attempt.currentIndex = 0; attempt.responses[0].visits = 1;
  view = 'test'; persist(); render();
}
function goTo(i) {
  if (!attempt || i < 0 || i >= questionsFor(attempt.paper, attempt, attempt.unit, attempt.part).length) return;
  index = i; attempt.currentIndex = i; currentState().visits++; persist(); render();
}
function confirmResultDeletion(ids, all = false) {
  const targets = new Set(ids);
  if (!targets.size) return;
  document.querySelector('#deleteResultsDialog')?.remove();
  const count = targets.size;
  const overlay = document.createElement('div');
  overlay.id = 'deleteResultsDialog';
  overlay.className = 'dialog-backdrop';
  const targetLabel = all ? 'all previous results' : count === 1 ? 'selected result' : `${count} selected results`;
  overlay.innerHTML = `<div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="deleteDialogTitle"><h2 id="deleteDialogTitle">Delete ${targetLabel}?</h2><p>${all || count > 1 ? 'These previous results' : 'This previous result'} will be permanently removed from this browser.</p><div class="row"><button class="secondary" id="cancelDeleteResults">Cancel</button><button class="danger" id="confirmDeleteResults">Delete</button></div></div>`;
  document.body.append(overlay);
  overlay.querySelector('#cancelDeleteResults').onclick = () => overlay.remove();
  overlay.querySelector('#confirmDeleteResults').onclick = () => {
    saved.history = saved.history.filter(item => !targets.has(item.id));
    persist();
    overlay.remove();
    renderHome();
  };
}
function renderHome() {
  mathUnitContext = selection.unit;
  const active = Boolean(attempt);
  const availablePaperNames = paperNamesFor(selection.unit, selection.part);
  const selectedPaper = paperFor(selection.paper, selection.unit, selection.part);
  const selectedQuestions = selectedPaper?.questions || [];
  homeButton.hidden = true;
  app.innerHTML = `<div class="intro intro-with-feedback"><div><h1>Commerce XI Maths App – Free Maharashtra Board Practice Tests</h1><p class="home-description">Free Standard XI Commerce Mathematics and Statistics practice tests, detailed answers and study guides based on the Maharashtra State Board English-medium textbooks.</p><strong class="practice-heading">Choose a Practice Test</strong><div class="muted">Exam → Unit → Paper → Start Paper</div></div><div class="developer-contact"><a class="primary download-link" href="mailto:arvindhatkar1974@gmail.com?subject=Commerce%20XI%20Maths%20App%20%E2%80%93%20Feedback&amp;body=Paper%20name%3A%20%0D%0AQuestion%20number%3A%20%0D%0AFeedback%20or%20problem%3A%20">Feedback / Ask Developer</a><p class="small-note"><span>Report a question, answer mismatch, technical problem or suggestion.</span><span>Contact developer: <a href="mailto:arvindhatkar1974@gmail.com">arvindhatkar1974@gmail.com</a></span></p></div></div>
    ${active ? `<div class="summary"><strong>Unfinished ${escape(paperFor(attempt.paper, attempt.unit, attempt.part).title)} test</strong><br>Time continues while the app is closed. <button class="primary" data-action="resume">Resume test</button></div>` : ''}
    <div class="grid selection-grid">
      <section class="card"><h2>Exam</h2><div class="tile-grid"><button class="tile ${selection.part === 1 ? 'selected' : ''}" data-part="1">Part-1</button><button class="tile ${selection.part === 2 ? 'selected' : ''}" data-part="2">Part-2</button></div></section>
      <section class="card"><h2>Unit</h2><div class="tile-grid units">${Array.from({ length: 9 }, (_, i) => `<button class="tile ${selection.unit === i + 1 ? 'selected' : ''}" data-unit="${i + 1}">${i + 1}</button>`).join('')}<button class="tile ${selection.unit === 10 ? 'selected' : ''}" data-unit="10">All Units</button></div></section>
      <section class="card study-guide-card"><h2>${selection.unit <= 9 ? `Unit-${selection.unit} Study Guide` : 'Study Guide'}</h2>${selection.part === 1 && selection.unit === 1 ? `<a class="primary download-link guide-link" href="${UNIT1_GUIDE_PDF}" download>📘 Symbols, Laws &amp; Formulae</a><p class="small-note">Review the important notation, laws, theorems and formulae before starting a test.</p>` : selection.part === 1 && selection.unit === 2 ? `<a class="primary download-link guide-link" href="${UNIT2_GUIDE_PDF}" download>📘 Functions Reference Guide</a><p class="small-note">Review function notation, types, domains, ranges, operations, composition, inverses and standard graphs before starting a test.</p>` : selection.part === 1 && selection.unit === 3 ? `<a class="primary download-link guide-link" href="${UNIT3_GUIDE_PDF}" download>📘 Complex Numbers Reference Guide</a><p class="small-note">Review imaginary-unit powers, complex-number operations, conjugates, quadratic roots and cube roots of unity before starting a test.</p>` : selection.part === 2 && selection.unit === 1 ? `<a class="primary download-link guide-link" href="${PART2_UNIT1_GUIDE_PDF}" download>📘 Partition Values Reference Guide</a><p class="small-note">Review quartiles, deciles, percentiles, grouped-data formulae and ogives before starting a test.</p>` : '<p class="small-note">The study guide for this selection is being prepared.</p>'}</section>
    </div>
    <div class="paper-summary-layout">
      <section class="card paper-card"><h2>Paper</h2><div class="tile-grid paper-grid">${availablePaperNames.length ? availablePaperNames.map(name => `<button class="tile ${selection.paper === name ? 'selected' : ''}" data-paper="${escape(name)}">${escape(name)}</button>`).join('') : '<p class="small-note">Papers for this selection are being prepared.</p>'}</div></section>
      ${selectedPaper ? `<div class="summary selected-test-summary"><strong>Part-${selection.part} · Unit-${selection.unit} · ${escape(selectedPaper.title)}</strong><br>${selectedQuestions.length} questions: ${selectedQuestions.filter(q => q.type === 'choice').length} MCQs and ${selectedQuestions.filter(q => q.type === 'entry').length} enter-answer questions · 5 minutes per question · ${minutesFor(selection.paper, null, selection.unit, selection.part)} minutes total${selection.paper === 'Surprise Test' ? `<br>5 date-seeded random questions from each of the ${Object.keys(papersFor(selection.part, selection.unit)).length} papers` : ''}<br>Correct: +2 · Wrong: −1 · Unanswered: 0 · Maximum score: ${marksFor(selection.paper, null, selection.unit, selection.part)}</div><button class="primary paper-start" data-action="start">Start ${escape(selectedPaper.title)}</button>` : `<div class="pending selected-test-summary">Part-${selection.part}, ${selection.unit === 10 ? 'All Units' : `Unit-${selection.unit}`} is planned.</div>`}
    </div>
    <section class="unit-resource-section" aria-labelledby="exploreUnits"><h2 id="exploreUnits">Explore Commerce XI Maths Units</h2><div class="unit-resource-grid"><a href="unit-1-sets-and-relations.html"><strong>Unit 1: Sets and Relations</strong><span>Sets, relations, ordered pairs and Cartesian products</span></a><a href="unit-2-functions.html"><strong>Unit 2: Functions</strong><span>Functions, graphs, composition and inverse functions</span></a><a href="unit-3-complex-numbers.html"><strong>Unit 3: Complex Numbers</strong><span>Imaginary numbers, operations, roots and equations</span></a></div></section>
    ${saved.history.length ? `<section class="card results-card" style="margin-top:24px"><div class="row space-between results-heading"><h2>Previous results</h2><div class="row"><button class="secondary" id="deleteSelectedResults" disabled>Delete selected</button><button class="danger" id="deleteAllResults">Delete all</button></div></div>${saved.history.slice(0, 10).map(item => `<div class="result-row"><input type="checkbox" class="result-select" data-select-result="${escape(item.id)}" aria-label="Select result from ${escape(dateLabel(item.submittedAt))}"><span class="result-summary">${escape(dateLabel(item.submittedAt))} · Part-${item.part || 1} · Unit-${item.unit || 1} · ${escape(paperFor(item.paper, item.unit || 1, item.part || 1)?.title || 'Exercise 1.1')} · Total Q: ${item.items?.length ?? item.correct + item.wrong + item.unanswered} · Correct Q: ${item.correct} · Incorrect Q: ${item.wrong} · Unanswered Q: ${item.unanswered} · Score ${item.score}/${(item.items?.length ?? questionsFor(item.paper, item, item.unit || 1, item.part || 1).length) * 2}</span><button class="secondary" data-result="${escape(item.id)}">View result</button></div>`).join('')}</section>` : ''}`;
  app.querySelectorAll('[data-part]').forEach(button => button.onclick = () => { selection.part = Number(button.dataset.part); selection.unit = 1; selection.paper = paperNamesFor(1, selection.part)[0] || ''; renderHome(); });
  app.querySelectorAll('[data-unit]').forEach(button => button.onclick = () => { selection.unit = Number(button.dataset.unit); selection.paper = paperNamesFor(selection.unit, selection.part)[0] || ''; renderHome(); });
  app.querySelectorAll('[data-paper]').forEach(button => button.onclick = () => { selection.paper = button.dataset.paper; renderHome(); });
  app.querySelector('[data-action="start"]')?.addEventListener('click', start);
  app.querySelector('[data-action="resume"]')?.addEventListener('click', () => { view = 'test'; render(); });
  app.querySelectorAll('[data-result]').forEach(button => button.onclick = () => { view = 'result'; renderResult(saved.history.find(item => item.id === button.dataset.result)); });
  const resultChecks = [...app.querySelectorAll('[data-select-result]')];
  const deleteSelected = app.querySelector('#deleteSelectedResults');
  resultChecks.forEach(checkbox => checkbox.onchange = () => { deleteSelected.disabled = !resultChecks.some(item => item.checked); });
  deleteSelected?.addEventListener('click', () => confirmResultDeletion(resultChecks.filter(item => item.checked).map(item => item.dataset.selectResult)));
  app.querySelector('#deleteAllResults')?.addEventListener('click', () => confirmResultDeletion(saved.history.map(item => item.id), true));
}
function renderTest() {
  if (!attempt) { view = 'home'; renderHome(); return; }
  mathUnitContext = attempt.unit || 1;
  mathPartContext = attempt.part || 1;
  if (Date.now() >= attempt.deadline) { submit(true); return; }
  homeButton.hidden = false;
  const paper = paperFor(attempt.paper, attempt.unit, attempt.part);
  const questions = questionsFor(attempt.paper, attempt, attempt.unit, attempt.part);
  let repairedOptionOrder = false;
  questions.forEach((question, questionIndex) => {
    if (question.type !== 'choice') return;
    const currentOrder = attempt.optionOrders[questionIndex] || [];
    const validOrder = currentOrder.length === question.options.length && currentOrder.every(option => question.options.includes(option));
    if (validOrder) return;
    attempt.optionOrders[questionIndex] = shuffledOptions(question);
    if (!question.options.includes(attempt.responses[questionIndex]?.selected)) attempt.responses[questionIndex].selected = '';
    repairedOptionOrder = true;
  });
  if (repairedOptionOrder) persist();
  const question = questions[index], response = currentState();
  const answered = attempt.responses.filter((item, i) => responseFor(questions[i], item) !== '').length;
  const reviews = attempt.responses.filter(item => item.review).length;
  app.innerHTML = `<div class="intro test-page-heading"><div class="source">Part-${attempt.part || 1} · Unit-${attempt.unit || 1} · ${escape(paper.title)}</div><h1>Question ${index + 1} of ${questions.length}</h1><button class="danger" id="submitTop">Submit test</button></div>
    <div class="test-layout"><section class="card question-card"><div class="question-header"><div class="source">${renderMath(question.source)} · ${question.type === 'choice' ? 'MCQ' : 'Enter answer'}</div><div class="test-actions"><button class="secondary" id="previous" ${index === 0 ? 'disabled' : ''}>Previous</button><button class="primary" id="next" ${index === questions.length - 1 ? 'disabled' : ''}>Next</button><button class="secondary" id="review">${response.review ? 'Remove review mark' : 'Mark for review'}</button><button class="secondary" id="clear">Clear answer</button></div><span class="pill">+2 correct · −1 wrong</span></div>
      <p class="prompt">${renderPrompt(question)}</p>${question.type === 'choice' ? `<div class="options">${attempt.optionOrders[index].map((option, i) => `<button class="option ${response.selected === option ? 'selected' : ''}" data-option="${i}"><span class="option-letter">${letters[i]}.</span>${renderMath(option)}</button>`).join('')}</div>` : `<label for="answer" class="small-note">Enter a number</label><br><input id="answer" class="answer-input" inputmode="numeric" autocomplete="off" value="${escape(response.text)}" placeholder="Your answer">`}
      </section>
      <aside><div class="timer" id="timer"><span>Time remaining</span><strong id="timeValue">${formatTime(attempt.deadline - Date.now())}</strong><span>${minutesFor(attempt.paper, attempt, attempt.unit, attempt.part)}-minute overall limit</span></div><section class="card"><h2>All Question Navigator</h2><div class="nav-grid">${questions.map((item, i) => { const state = attempt.responses[i]; const status = state.review ? 'review' : i === index ? 'current' : responseFor(item, state) ? 'answered' : state.visits ? 'visited' : ''; return `<button class="nav-item ${status}" data-index="${i}" title="${escape(item.source)}"><span>${i + 1}</span></button>`; }).join('')}</div><div class="stats"><span>Answered</span><strong>${answered}</strong><span>Marked for review</span><strong>${reviews}</strong><span>Not answered</span><strong>${questions.length - answered}</strong></div><p class="small-note">You can visit any question. Your work is saved automatically in this browser.</p></section></aside></div>`;
  app.querySelectorAll('[data-option]').forEach(button => button.onclick = () => { response.selected = attempt.optionOrders[index][Number(button.dataset.option)]; persist(); renderTest(); });
  app.querySelector('#answer')?.addEventListener('input', event => { response.text = event.target.value; persist(); });
  app.querySelector('#previous').onclick = () => goTo(index - 1);
  app.querySelector('#next').onclick = () => goTo(index + 1);
  app.querySelector('#review').onclick = () => { response.review = !response.review; persist(); renderTest(); };
  app.querySelector('#clear').onclick = () => { response.selected = ''; response.text = ''; persist(); renderTest(); };
  app.querySelector('#submitTop').onclick = () => submit(false);
  app.querySelectorAll('[data-index]').forEach(button => button.onclick = () => goTo(Number(button.dataset.index)));
}
function renderResult(result) {
  homeButton.hidden = false;
  if (!result) { view = 'home'; renderHome(); return; }
  const resultIndex = saved.history.findIndex(item => item.id === result.id);
  const previousResult = resultIndex >= 0 ? saved.history[resultIndex + 1] : null;
  const nextResult = resultIndex > 0 ? saved.history[resultIndex - 1] : null;
  const resultUnit = result.unit || 1;
  mathUnitContext = resultUnit;
  const resultPart = result.part || 1;
  mathPartContext = resultPart;
  const paper = paperFor(result.paper || 'Ex-1.1', resultUnit, resultPart);
  const questions = questionsFor(result.paper || 'Ex-1.1', result, resultUnit, resultPart);
  const solutionPdf = solutionPdfFor(result.paper || 'Ex-1.1', resultUnit, resultPart);
  const studyGuideLink = resultPart === 1 && resultUnit === 1 ? `<a class="secondary download-link" href="${UNIT1_GUIDE_PDF}" download>Download Unit-1 Study Guide</a>` : resultPart === 1 && resultUnit === 2 ? `<a class="secondary download-link" href="${UNIT2_GUIDE_PDF}" download>Download Unit-2 Study Guide</a>` : resultPart === 1 && resultUnit === 3 ? `<a class="secondary download-link" href="${UNIT3_GUIDE_PDF}" download>Download Unit-3 Study Guide</a>` : resultPart === 2 && resultUnit === 1 ? `<a class="secondary download-link" href="${PART2_UNIT1_GUIDE_PDF}" download>Download Unit-1 Study Guide</a>` : '';
  app.innerHTML = `<div class="intro result-intro"><div><div class="source">Part-${result.part || 1} · Unit-${resultUnit} · ${escape(paper.title)}</div><h1>Test Result</h1><div class="muted">${escape(dateLabel(result.submittedAt))} · ${escape(result.reason)}</div></div><div class="row result-navigation"><button class="secondary" id="previousTestResult" ${previousResult ? '' : 'disabled'}>Previous Test Result</button><button class="primary" id="nextTestResult" ${nextResult ? '' : 'disabled'}>Next Test Result</button></div></div><section class="card"><div class="row space-between"><div><div class="muted">Final score</div><div class="result-score">${result.score} / ${questions.length * 2}</div></div><div class="row">${solutionPdf ? `<a class="primary download-link" href="${escape(solutionPdf)}" download>Download Detailed Answers PDF</a>` : ''}${studyGuideLink}</div></div><div class="result-grid"><div class="metric"><strong>${result.correct}</strong>Correct</div><div class="metric"><strong>${result.wrong}</strong>Wrong</div><div class="metric"><strong>${result.unanswered}</strong>Unanswered</div><div class="metric"><strong>${questions.length}</strong>Total</div></div><h2>Question review</h2><div class="review-list">${result.items.map((item, i) => `<div class="review-item"><div class="review-heading"><strong>${i + 1} [${renderMath(resultSourceLabel(item.source))}]</strong><span class="review-status ${item.isCorrect ? 'correct' : item.answer ? 'incorrect' : 'unanswered'}">${item.isCorrect ? '+2 Correct' : item.answer ? '−1 Wrong' : 'Unanswered'}</span></div><div style="margin:7px 0;white-space:pre-wrap">${renderPrompt(questions[i])}</div><span class="small-note">Your answer: ${renderMath(item.answer || '—')} · Correct answer: ${renderMath(item.correctAnswer)}</span></div>`).join('')}</div></section>`;
  app.querySelector('#previousTestResult').onclick = () => { if (previousResult) { renderResult(previousResult); window.scrollTo(0, 0); } };
  app.querySelector('#nextTestResult').onclick = () => { if (nextResult) { renderResult(nextResult); window.scrollTo(0, 0); } };
}
function render() { if (view === 'test') renderTest(); else if (view === 'result') renderResult(saved.history[0]); else renderHome(); }
homeButton.onclick = () => { view = 'home'; renderHome(); };
setInterval(() => { if (!attempt) return; if (Date.now() >= attempt.deadline) { submit(true); return; } const label = document.querySelector('#timeValue'); if (label) { label.textContent = formatTime(attempt.deadline - Date.now()); document.querySelector('#timer')?.classList.toggle('low', attempt.deadline - Date.now() < 10 * 60 * 1000); } }, 1000);
render();

