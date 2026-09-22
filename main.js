import { exercise11, exercise12, miscellaneousExercise1, theoryPages1to9, theoryPages10to15 } from './questions.js';

const app = document.querySelector('#app');
const homeButton = document.querySelector('#homeButton');
const STORE = 'commerce-xi-maths-v1';
const QUESTION_SECONDS = 300;
const PAPER_NAMES = ['Th(P:1-9)', 'Ex-1.1', 'Th(P:10-15)', 'Ex-1.2', 'Mis-Ex-1', 'Surprise Test'];
const PAPERS = {
  'Th(P:1-9)': { title: 'Theory (Pages 1–9)', questions: theoryPages1to9 },
  'Ex-1.1': { title: 'Exercise 1.1', questions: exercise11 },
  'Th(P:10-15)': { title: 'Theory (Pages 10–15)', questions: theoryPages10to15 },
  'Ex-1.2': { title: 'Exercise 1.2', questions: exercise12 },
  'Mis-Ex-1': { title: 'Miscellaneous Exercise 1', questions: miscellaneousExercise1 },
};
const SURPRISE_SOURCES = Object.entries(PAPERS);
const SOLUTION_PDFS = {
  'Th(P:1-9)': './output/pdf/Commerce_XI_Maths_Th_P1-9_Detailed_Solutions.pdf',
  'Ex-1.1': './output/pdf/Commerce_XI_Maths_Ex-1.1_Detailed_Solutions.pdf',
  'Th(P:10-15)': './output/pdf/Commerce_XI_Maths_Th_P10-15_Detailed_Solutions.pdf',
  'Ex-1.2': './output/pdf/Commerce_XI_Maths_Ex-1.2_Detailed_Solutions.pdf',
  'Mis-Ex-1': './output/pdf/Commerce_XI_Maths_Mis-Ex-1_Detailed_Solutions.pdf',
};
const UNIT1_GUIDE_PDF = './output/pdf/Commerce_XI_Maths_Unit_1_Sets_and_Relations_Reference_Guide.pdf';
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
function surpriseQuestions(dateKey = localDateKey(new Date())) {
  return SURPRISE_SOURCES.flatMap(([paperName, paper]) => {
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
const paperFor = name => {
  const normalized = name === 'Ex1.1' ? 'Ex-1.1' : name;
  return normalized === 'Surprise Test' ? { title: 'Surprise Test', questions: surpriseQuestions() } : PAPERS[normalized];
};
const questionsFor = (name, record = null) => record?.questions || paperFor(name)?.questions || exercise11;
const marksFor = (name, record = null) => questionsFor(name, record).length * 2;
const minutesFor = (name, record = null) => questionsFor(name, record).length * QUESTION_SECONDS / 60;
// Preserve fair scoring for attempts started before the textbook-notation correction.
const acceptedEarlierForms = {
  q2i: ['{x | x ∈ W, x < 1}'],
  q2ii: ['{x | x ∈ Z, −3 ≤ x ≤ 3}'],
  q2iii: ['{x | x = n/(n² + 1), n ∈ N, n ≤ 7}'],
  q3ii: ['∅'],
  q12i: ['{x ∈ R | −3 ≤ x ≤ 0}'],
  q12ii: ['{x ∈ R | 6 ≤ x ≤ 12}'],
  q12iii: ['{x ∈ R | 6 < x ≤ 12}'],
  q12iv: ['{x ∈ R | −23 ≤ x < 5}'],
};
const letters = ['A', 'B', 'C', 'D'];
const sourceNavLabel = source => source.replace(' Roster form', '').replace(' Complements', 'C').replace(' Intersection', '∩').replace(' Union', '∪').replace(' A − B', 'A−B').replace(' B − A', 'B−A').replace(' A × A', 'AA').replace(' A × B', 'AB').replace(' B × A', 'BA').replace(' B × B', 'BB').replace(' Domain', 'D').replace(' Range', 'R').replace(/[()]/g, '');
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const renderNotation = value => escape(value).replace(/\{x ∈ R \| /g, '{x / x ∈ R, ').replace(/ \| /g, ' / ');
function renderMath(value) {
  return renderNotation(value)
    .replace(/(n²|n)\/\((n² \+ 1|n \+ 1)\)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/([−-]?[A-Za-z\d]+)\/\(([A-Za-z\d]+)\)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/([−-]?[A-Za-z\d]+)\/([A-Za-z\d]+)/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>');
}
function renderPrompt(question) {
  let html = renderMath(question.prompt);
  if (question.id === 'q2iii') {
    html = html.replace(/(\{[^}]+\})/, '<span class="math-set">$1</span>');
  }
  return html;
}
const formatTime = ms => { const seconds = Math.max(0, Math.ceil(ms / 1000)); return `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor(seconds % 3600 / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; };
const dateLabel = iso => new Date(iso).toLocaleString('en-IN');

function readSaved() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } }
let saved = readSaved();
saved.history ||= [];
let selection = { part: 1, unit: 1, paper: 'Th(P:1-9)' };
let attempt = saved.attempt || null;
// Earlier saved attempts have no paper field and belong to Exercise 1.1.
if (attempt && !attempt.paper) attempt.paper = 'Ex-1.1';
let index = attempt?.currentIndex || 0;
let view = attempt ? 'test' : 'home';

function persist() { saved.attempt = attempt; localStorage.setItem(STORE, JSON.stringify(saved)); }
function shuffledOptions(question) {
  const options = [...question.options];
  for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
  return options;
}
if (attempt) {
  const attemptQuestions = questionsFor(attempt.paper, attempt);
  attempt.responses ||= [];
  attempt.optionOrders ||= [];
  const addedQuestions = Math.max(0, attemptQuestions.length - attempt.responses.length);
  for (let i = attempt.responses.length; i < attemptQuestions.length; i++) {
    attempt.responses.push({ selected: '', text: '', review: false, visits: 0 });
    attempt.optionOrders.push(attemptQuestions[i].type === 'choice' ? shuffledOptions(attemptQuestions[i]) : null);
  }
  if (addedQuestions) {
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
  const items = questionsFor(active.paper, active).map((question, i) => {
    const answer = responseFor(question, active.responses[i]);
    const isAnswered = answer !== '';
    const isCorrect = isAnswered && (question.type === 'choice' ? answer === question.correct || (acceptedEarlierForms[question.id] || []).includes(answer) : normalizeNumber(answer) === question.correct);
    if (isCorrect) correct++;
    else if (isAnswered) wrong++;
    else unanswered++;
    return { source: question.source, answer, correctAnswer: question.correct, isCorrect, marks: isCorrect ? 2 : isAnswered ? -1 : 0 };
  });
  return { id: active.id, paper: active.paper, questions: active.questions || null, startedAt: active.startedAt, submittedAt: new Date().toISOString(), reason: active.reason || 'Submitted', score: correct * 2 - wrong, correct, wrong, unanswered, items };
}
function submit(auto = false, confirmed = false) {
  if (!attempt) return;
  const reviewCount = attempt.responses.filter(item => item.review).length;
  if (!auto && !confirmed) {
    document.querySelector('#submitDialog')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'submitDialog';
    overlay.className = 'dialog-backdrop';
    overlay.innerHTML = `<div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="dialogTitle"><h2 id="dialogTitle">Submit ${escape(paperFor(attempt.paper).title)}?</h2><p>${reviewCount ? `You have ${reviewCount} question${reviewCount === 1 ? '' : 's'} marked for review.` : 'Your answers will be scored and the test will end.'}</p><div class="row"><button class="secondary" id="cancelSubmit">Cancel</button><button class="primary" id="confirmSubmit">Submit</button></div></div>`;
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
  if (selection.part !== 1 || selection.unit !== 1 || !paperFor(selection.paper)) return;
  if (attempt && !confirm('A test is in progress. Start a new test and discard that unfinished attempt?')) return;
  const questions = questionsFor(selection.paper);
  attempt = { id: crypto.randomUUID(), paper: selection.paper, questions: selection.paper === 'Surprise Test' ? questions : null, startedAt: new Date().toISOString(), deadline: Date.now() + questions.length * QUESTION_SECONDS * 1000, responses: questions.map(() => ({ selected: '', text: '', review: false, visits: 0 })), optionOrders: questions.map(q => q.type === 'choice' ? shuffledOptions(q) : null) };
  index = 0; attempt.currentIndex = 0; attempt.responses[0].visits = 1;
  view = 'test'; persist(); render();
}
function goTo(i) {
  if (!attempt || i < 0 || i >= questionsFor(attempt.paper, attempt).length) return;
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
  const active = Boolean(attempt);
  const selectedPaper = selection.part === 1 && selection.unit === 1 ? paperFor(selection.paper) : null;
  const selectedQuestions = selectedPaper?.questions || [];
  homeButton.hidden = true;
  app.innerHTML = `<div class="intro"><h1>Choose a practice test</h1><div class="muted">Standard XI Mathematics &amp; Statistics (Commerce)</div></div>
    ${active ? `<div class="summary"><strong>Unfinished ${escape(paperFor(attempt.paper).title)} test</strong><br>Time continues while the app is closed. <button class="primary" data-action="resume">Resume test</button></div>` : ''}
    <div class="grid selection-grid">
      <section class="card"><h2>1. Exam</h2><div class="tile-grid"><button class="tile ${selection.part === 1 ? 'selected' : ''}" data-part="1">Part-1</button><button class="tile ${selection.part === 2 ? 'selected' : ''}" data-part="2">Part-2</button></div></section>
      <section class="card"><h2>2. Unit</h2><div class="tile-grid units">${Array.from({ length: 9 }, (_, i) => `<button class="tile ${selection.unit === i + 1 ? 'selected' : ''}" data-unit="${i + 1}">${i + 1}</button>`).join('')}<button class="tile ${selection.unit === 10 ? 'selected' : ''}" data-unit="10">All Units</button></div></section>
      <section class="card study-guide-card"><h2>Unit-1 Study Guide</h2>${selection.part === 1 && selection.unit === 1 ? `<a class="primary download-link guide-link" href="${UNIT1_GUIDE_PDF}" download>📘 Symbols, Laws &amp; Formulae</a><p class="small-note">Review the important notation, laws, theorems and formulae before starting a test.</p>` : '<p class="small-note">The study guide for this selection is being prepared.</p>'}</section>
      <section class="card paper-card"><h2>3. Paper</h2><div class="tile-grid paper-grid">${selection.part === 1 && selection.unit === 1 ? PAPER_NAMES.map(name => `<button class="tile ${selection.paper === name ? 'selected' : ''}" data-paper="${escape(name)}">${escape(name)}</button>`).join('') : '<p class="small-note">Papers for this selection are being prepared.</p>'}</div></section>
    </div>
    ${selectedPaper ? `<div class="summary"><strong>Part-1 · Unit-1 · ${escape(selectedPaper.title)}</strong><br>${selectedQuestions.length} questions: ${selectedQuestions.filter(q => q.type === 'choice').length} MCQs and ${selectedQuestions.filter(q => q.type === 'entry').length} enter-answer questions · 5 minutes per question · ${minutesFor(selection.paper)} minutes total${selection.paper === 'Surprise Test' ? '<br>5 date-seeded random questions from each of the five papers' : ''}<br>Correct: +2 · Wrong: −1 · Unanswered: 0 · Maximum score: ${marksFor(selection.paper)}</div><button class="primary" data-action="start">Start ${escape(selectedPaper.title)}</button>` : `<div class="pending">${selection.part === 1 && selection.unit === 1 ? escape(selection.paper) : `Part-${selection.part}, ${selection.unit === 10 ? 'All Units' : `Unit-${selection.unit}`}`} is planned.</div>`}
    <section class="card developer-contact" style="margin-top:24px"><div><h2>Feedback / Ask Developer</h2><p class="small-note">Report a question, answer mismatch, technical problem or suggestion.<br>Contact developer: <a href="mailto:arvindhatkar1974@gmail.com">arvindhatkar1974@gmail.com</a></p></div><a class="primary download-link" href="mailto:arvindhatkar1974@gmail.com?subject=Commerce%20XI%20Maths%20App%20%E2%80%93%20Feedback&amp;body=Paper%20name%3A%20%0D%0AQuestion%20number%3A%20%0D%0AFeedback%20or%20problem%3A%20">Feedback / Ask Developer</a></section>
    ${saved.history.length ? `<section class="card results-card" style="margin-top:24px"><div class="row space-between results-heading"><h2>Previous results</h2><div class="row"><button class="secondary" id="deleteSelectedResults" disabled>Delete selected</button><button class="danger" id="deleteAllResults">Delete all</button></div></div>${saved.history.slice(0, 10).map(item => `<div class="result-row"><input type="checkbox" class="result-select" data-select-result="${escape(item.id)}" aria-label="Select result from ${escape(dateLabel(item.submittedAt))}"><span class="result-summary">${escape(dateLabel(item.submittedAt))} · ${escape(paperFor(item.paper)?.title || 'Exercise 1.1')} · Total Q: ${item.items?.length ?? item.correct + item.wrong + item.unanswered} · Correct Q: ${item.correct} · Incorrect Q: ${item.wrong} · Unanswered Q: ${item.unanswered} · Score ${item.score}/${(item.items?.length ?? questionsFor(item.paper, item).length) * 2}</span><button class="secondary" data-result="${escape(item.id)}">View result</button></div>`).join('')}</section>` : ''}`;
  app.querySelectorAll('[data-part]').forEach(button => button.onclick = () => { selection.part = Number(button.dataset.part); selection.unit = 1; selection.paper = PAPER_NAMES[0]; renderHome(); });
  app.querySelectorAll('[data-unit]').forEach(button => button.onclick = () => { selection.unit = Number(button.dataset.unit); selection.paper = PAPER_NAMES[0]; renderHome(); });
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
  if (Date.now() >= attempt.deadline) { submit(true); return; }
  homeButton.hidden = false;
  const paper = paperFor(attempt.paper);
  const questions = questionsFor(attempt.paper, attempt);
  const question = questions[index], response = currentState();
  const answered = attempt.responses.filter((item, i) => responseFor(questions[i], item) !== '').length;
  const reviews = attempt.responses.filter(item => item.review).length;
  app.innerHTML = `<div class="row space-between intro"><div><div class="source">Part-1 · Unit-1 · ${escape(paper.title)}</div><h1>Question ${index + 1} of ${questions.length}</h1></div><button class="danger" id="submitTop">Submit test</button></div>
    <div class="test-layout"><section class="card question-card"><div class="question-header"><div class="source">${escape(question.source)} · ${question.type === 'choice' ? 'MCQ' : 'Enter answer'}</div><div class="test-actions"><button class="secondary" id="previous" ${index === 0 ? 'disabled' : ''}>Previous</button><button class="primary" id="next" ${index === questions.length - 1 ? 'disabled' : ''}>Next</button><button class="secondary" id="review">${response.review ? 'Remove review mark' : 'Mark for review'}</button><button class="secondary" id="clear">Clear answer</button></div><span class="pill">+2 correct · −1 wrong</span></div>
      <p class="prompt">${renderPrompt(question)}</p>${question.type === 'choice' ? `<div class="options">${attempt.optionOrders[index].map((option, i) => `<button class="option ${response.selected === option ? 'selected' : ''}" data-option="${i}"><span class="option-letter">${letters[i]}.</span>${renderMath(option)}</button>`).join('')}</div>` : `<label for="answer" class="small-note">Enter a number</label><br><input id="answer" class="answer-input" inputmode="numeric" autocomplete="off" value="${escape(response.text)}" placeholder="Your answer">`}
      </section>
      <aside><div class="timer" id="timer"><span>Time remaining</span><strong id="timeValue">${formatTime(attempt.deadline - Date.now())}</strong><span>${minutesFor(attempt.paper, attempt)}-minute overall limit</span></div><section class="card"><h2>All Question Navigator</h2><div class="nav-grid">${questions.map((item, i) => { const state = attempt.responses[i]; const status = state.review ? 'review' : i === index ? 'current' : responseFor(item, state) ? 'answered' : state.visits ? 'visited' : ''; return `<button class="nav-item ${status}" data-index="${i}" title="${escape(item.source)}"><span>${i + 1}</span><small>${attempt.paper === 'Surprise Test' ? escape(item.originPaper) : !attempt.paper.startsWith('Th(') ? escape(sourceNavLabel(item.source)) : 'Th'}</small></button>`; }).join('')}</div><div class="stats"><span>Answered</span><strong>${answered}</strong><span>Marked for review</span><strong>${reviews}</strong><span>Not answered</span><strong>${questions.length - answered}</strong></div><p class="small-note">You can visit any question. Your work is saved automatically in this browser.</p></section></aside></div>`;
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
  const paper = paperFor(result.paper || 'Ex-1.1');
  const questions = questionsFor(result.paper || 'Ex-1.1', result);
  const solutionPdf = SOLUTION_PDFS[result.paper || 'Ex-1.1'];
  app.innerHTML = `<div class="intro"><div class="source">Part-1 · Unit-1 · ${escape(paper.title)}</div><h1>Test result</h1><div class="muted">${escape(dateLabel(result.submittedAt))} · ${escape(result.reason)}</div></div><section class="card"><div class="row space-between"><div><div class="muted">Final score</div><div class="result-score">${result.score} / ${questions.length * 2}</div></div><div class="row">${solutionPdf ? `<a class="primary download-link" href="${escape(solutionPdf)}" download>Download Detailed Answers PDF</a>` : ''}<a class="secondary download-link" href="${UNIT1_GUIDE_PDF}" download>Download Unit-1 Study Guide</a><button class="primary" id="backHome">Back to home</button></div></div><div class="result-grid"><div class="metric"><strong>${result.correct}</strong>Correct</div><div class="metric"><strong>${result.wrong}</strong>Wrong</div><div class="metric"><strong>${result.unanswered}</strong>Unanswered</div><div class="metric"><strong>${questions.length}</strong>Total</div></div><h2>Question review</h2><div class="review-list">${result.items.map((item, i) => `<div class="review-item"><strong>${escape(item.source)}</strong> · <span class="${item.isCorrect ? 'correct' : item.answer ? 'incorrect' : 'unanswered'}">${item.isCorrect ? '+2 correct' : item.answer ? '−1 wrong' : 'Unanswered'}</span><div style="margin:7px 0;white-space:pre-wrap">${renderPrompt(questions[i])}</div><span class="small-note">Your answer: ${renderMath(item.answer || '—')} · Correct answer: ${renderMath(item.correctAnswer)}</span></div>`).join('')}</div></section>`;
  app.querySelector('#backHome').onclick = () => { view = 'home'; renderHome(); };
}
function render() { if (view === 'test') renderTest(); else if (view === 'result') renderResult(saved.history[0]); else renderHome(); }
homeButton.onclick = () => { view = 'home'; renderHome(); };
setInterval(() => { if (!attempt) return; if (Date.now() >= attempt.deadline) { submit(true); return; } const label = document.querySelector('#timeValue'); if (label) { label.textContent = formatTime(attempt.deadline - Date.now()); document.querySelector('#timer')?.classList.toggle('low', attempt.deadline - Date.now() < 10 * 60 * 1000); } }, 1000);
render();

