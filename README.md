# Commerce XI Maths App

Part-1 → Unit-1 has seven source papers: `Th(P:1-9)` (35 questions), `Ex-1.1` (34 questions), `Th(P:10-15)` (35 questions), `Ex-1.2` (30 questions), `Let's Remember` (7 MCQs), `Mis-Ex-1` (23 questions), and `Activities` (23 questions). `Surprise Test` selects five date-seeded random questions from each source paper, for 35 questions. Part-2 and the other unit selectors are planned.

Double-click `START_COMMERCE_XI_MATHS_APP.bat` to run the app on Windows. Keep this folder beside `Mohit_Exam_App`, because the launcher uses its bundled Node runtime. Alternatively, with Node.js installed, run `npm start` in this folder and open `http://127.0.0.1:4187`.

Each paper allows 5 minutes per question. Correct answers earn +2, wrong answers −1, and unanswered questions 0. The attempt auto-submits when time expires. Answers, the unfinished attempt, and results are saved in this browser's local storage. Use the same browser and address to resume them; clearing browser site data removes them. Existing unfinished attempts and results remain readable.

Theory sources: `Syllabus/11thMaths_Part1.pdf`, printed pages 1–9 and 10–15, including ideas used in the solved examples. Ex-1.1 comes from printed pages 9–10, Ex-1.2 from pages 15–16, `Let's Remember` from page 16, `Mis-Ex-1` from pages 16–17, and `Activities` from Activities 1.1–1.10 on pages 17–19. Exercise answers appear on printed pages 126–127. MCQ distractors written for the app are not printed in the textbook.

The correct MCQ options use the textbook's set-builder wording for Q2(i) and Q2(ii). Two apparent textbook answer-page errors are handled mathematically: Q12(i) asks for the closed interval `[−3,0]` but the printed answer uses strict inequalities, so the app uses `−3 ≤ x ≤ 0`; Q11's power-set answer appears to write `{ϕ}` for the empty-set member, while the app uses the empty set `∅` as a member of `P(A)`.

After a test is submitted, its result page includes **Download Detailed Answers PDF**. Each source paper has a bundled PDF containing every question, the correct answer, explanations, and calculation or reasoning steps.
