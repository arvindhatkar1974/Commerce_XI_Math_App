# Commerce XI Maths App

Part-1 → Unit-1 has seven source papers: `Th(P:1-9)` (35 questions), `Ex-1.1` (34 questions), `Th(P:10-15)` (35 questions), `Ex-1.2` (30 questions), `Let's Remember` (7 MCQs), `Mis-Ex-1` (23 questions), and `Activities` (23 questions). `Surprise Test` selects five date-seeded random questions from each source paper, for 35 questions.

Part-2 → Unit-1 (Partition Values) has nine source papers: `Th(P:1-7)` (41 questions), `Ex-1.1` (18 questions), `Th(P:8-15)` (40 questions), `Ex-1.2` (18 questions), `Th(P:16-18)` (25 questions), `Ex-1.3` (18 questions), `Let's Remember` (12 questions), `Mis-Ex-1` (33 questions), and `Activities` (20 questions). Its `Surprise Test` selects five date-seeded questions from each source paper, for 45 questions.

Part-2 → Unit-2 (Measures of Dispersion) has nine source papers: `Th(P:24-26)` (36 questions), `Ex-2.1` (8 questions), `Th(P:27-30)` (40 questions), `Ex-2.2` (13 questions), `Th(P:31-33)` (32 questions), `Ex-2.3` (16 questions), `Let's Remember` (12 questions), `Mis-Ex-2` (22 questions), and `Activities` (21 questions). Its `Surprise Test` selects five date-seeded questions from each source paper, for 45 questions.

Part-1 → Unit-2 has five source papers: `Th(P:20-30)` (41 questions), `Ex-2.1` (31 questions), `Let's Remember` (7 questions), `Mis-Ex-2` (17 questions), and `Activities` (8 questions). Its `Surprise Test` selects five date-seeded random questions from each source paper, for 25 questions. Exercise 2.1 reproduces the three textbook arrow diagrams in the test.

Part-1 → Unit-3 has nine source papers: `Th(P:33-37)` (38 questions), `Ex-3.1` (30 questions), `Th(P:38-40)` (20 questions), `Ex-3.2` (17 questions), `Th(P:40-42)` (22 questions), `Ex-3.3` (12 questions), `Let's Remember` (9 questions), `Mis-Ex-3` (26 questions), and `Activities` (21 questions). Its `Surprise Test` selects five date-seeded random questions from each source paper, for 45 questions.

Double-click `START_COMMERCE_XI_MATHS_APP.bat` to run the app on Windows. Keep this folder beside `Mohit_Exam_App`, because the launcher uses its bundled Node runtime. Alternatively, with Node.js installed, run `npm start` in this folder and open `http://127.0.0.1:4187`.

Each paper allows 5 minutes per question. Correct answers earn +2, wrong answers −1, and unanswered questions 0. The attempt auto-submits when time expires. Answers, the unfinished attempt, and results are saved in this browser's local storage. Use the same browser and address to resume them; clearing browser site data removes them. Existing unfinished attempts and results remain readable.

Part-1 Units 1, 2, and 3 and Part-2 Units 1 and 2 each provide a downloadable reference guide on the home page and result page. Part-2 Units 1 and 2 also provide detailed-answer PDFs for all nine source papers.

Theory sources: `Syllabus/11thMaths_Part1.pdf`, printed pages 1–9 and 10–15, including ideas used in the solved examples. Ex-1.1 comes from printed pages 9–10, Ex-1.2 from pages 15–16, `Let's Remember` from page 16, `Mis-Ex-1` from pages 16–17, and `Activities` from Activities 1.1–1.10 on pages 17–19. Exercise answers appear on printed pages 126–127. MCQ distractors written for the app are not printed in the textbook.

Unit-2 sources are printed pages 20–32. `Th(P:20-30)` includes the definitions, solved examples, standard functions, graph properties, function algebra, composite and inverse functions, and special functions. `Ex-2.1` comes from pages 30–31; `Let's Remember`, `Mis-Ex-2`, and Activities 2.1–2.3 come from pages 31–32.

Unit-3 sources are printed pages 33–43. The three theory papers include textbook definitions, Let's Note content, and solved examples. Exercises 3.1, 3.2, and 3.3, Let's Remember, Miscellaneous Exercise 3, and Activities 3.1–3.2 follow the textbook wording and answer key. The Unit 3 question bank and answer key were audited after implementation.

The correct MCQ options use the textbook's set-builder wording for Q2(i) and Q2(ii). Two apparent textbook answer-page errors are handled mathematically: Q12(i) asks for the closed interval `[−3,0]` but the printed answer uses strict inequalities, so the app uses `−3 ≤ x ≤ 0`; Q11's power-set answer appears to write `{ϕ}` for the empty-set member, while the app uses the empty set `∅` as a member of `P(A)`.

After a test is submitted, its result page includes **Download Detailed Answers PDF**. Each source paper has a bundled PDF containing every question, the correct answer, explanations, and calculation or reasoning steps.

Part-2 Unit-2 answer notes: Exercise 2.3 Q1 uses the verified combined variance `55.6`, so the combined S.D. is `√55.6 ≈ 7.46`; the printed/extracted key string `55.6516` combines these two values. Miscellaneous Exercise 2 Q15 has `CV(Brand-I) = 22.22%` and `CV(Brand-II) = 20.83%`, so Brand-I is more variable and Brand-II is more consistent. Both corrections are explained in the detailed-answer PDFs and the Unit-2 reference guide.
