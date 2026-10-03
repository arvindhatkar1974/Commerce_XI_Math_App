import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4187);
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/test.html', ['test.html', 'text/html; charset=utf-8']],
  ['/results.html', ['results.html', 'text/html; charset=utf-8']],
  ['/view-result.html', ['view-result.html', 'text/html; charset=utf-8']],
  ['/unit.html', ['unit.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/main.js', ['main.js', 'text/javascript; charset=utf-8']],
  ['/question-references.js', ['question-references.js', 'text/javascript; charset=utf-8']],
  ['/questions.js', ['questions.js', 'text/javascript; charset=utf-8']],
  ['/unit2-questions.js', ['unit2-questions.js', 'text/javascript; charset=utf-8']],
  ['/unit3-questions.js', ['unit3-questions.js', 'text/javascript; charset=utf-8']],
  ['/part2-unit1-questions.js', ['part2-unit1-questions.js', 'text/javascript; charset=utf-8']],
  ['/part2-unit2-questions.js', ['part2-unit2-questions.js', 'text/javascript; charset=utf-8']],
  ['/unit-1-sets-and-relations.html', ['unit-1-sets-and-relations.html', 'text/html; charset=utf-8']],
  ['/unit-2-functions.html', ['unit-2-functions.html', 'text/html; charset=utf-8']],
  ['/unit-3-complex-numbers.html', ['unit-3-complex-numbers.html', 'text/html; charset=utf-8']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Th_P1-9_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Th_P1-9_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Ex-1.1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Ex-1.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Th_P10-15_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Th_P10-15_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Ex-1.2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Ex-1.2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Lets_Remember_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Mis-Ex-1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Mis-Ex-1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit1_Activities_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit1_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit2_Th_P20-30_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit2_Th_P20-30_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit2_Ex-2.1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit2_Ex-2.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit2_Lets_Remember_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit2_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit2_Mis-Ex-2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit2_Mis-Ex-2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit2_Activities_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit2_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Th_P33-37_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Th_P33-37_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Th_P38-40_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Th_P38-40_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Th_P40-42_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Th_P40-42_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.3_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Ex-3.3_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Lets_Remember_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Mis-Ex-3_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Mis-Ex-3_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part1_Unit3_Activities_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part1_Unit3_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Th_P1-7_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Th_P1-7_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Th_P8-15_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Th_P8-15_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Th_P16-18_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Th_P16-18_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.3_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Ex-1.3_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Lets_Remember_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Mis-Ex-1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Mis-Ex-1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit1_Activities_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit1_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Th_P24-26_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Th_P24-26_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.1_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Th_P27-30_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Th_P27-30_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Th_P31-33_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Th_P31-33_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.3_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Ex-2.3_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Lets_Remember_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Mis-Ex-2_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Mis-Ex-2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Commerce_XI_Maths_Part2_Unit2_Activities_Detailed_Solutions.pdf', ['solutions/Commerce_XI_Maths_Part2_Unit2_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/guides/Commerce_XI_Maths_Part1_Unit1_Sets_and_Relations_Reference_Guide.pdf', ['guides/Commerce_XI_Maths_Part1_Unit1_Sets_and_Relations_Reference_Guide.pdf', 'application/pdf']],
  ['/guides/Commerce_XI_Maths_Part1_Unit2_Functions_Reference_Guide.pdf', ['guides/Commerce_XI_Maths_Part1_Unit2_Functions_Reference_Guide.pdf', 'application/pdf']],
  ['/guides/Commerce_XI_Maths_Part1_Unit3_Complex_Numbers_Reference_Guide.pdf', ['guides/Commerce_XI_Maths_Part1_Unit3_Complex_Numbers_Reference_Guide.pdf', 'application/pdf']],
  ['/guides/Commerce_XI_Maths_Part2_Unit1_Partition_Values_Reference_Guide.pdf', ['guides/Commerce_XI_Maths_Part2_Unit1_Partition_Values_Reference_Guide.pdf', 'application/pdf']],
  ['/guides/Commerce_XI_Maths_Part2_Unit2_Measures_of_Dispersion_Reference_Guide.pdf', ['guides/Commerce_XI_Maths_Part2_Unit2_Measures_of_Dispersion_Reference_Guide.pdf', 'application/pdf']],
]);

const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url || '/', `http://127.0.0.1:${port}`).pathname;
  const entry = files.get(pathname);
  if (!entry || request.method !== 'GET') { response.writeHead(404); response.end('Not found'); return; }
  try {
    const body = await readFile(path.join(root, entry[0]));
    response.writeHead(200, { 'content-type': entry[1], 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
    response.end(body);
  } catch {
    response.writeHead(500); response.end('Unable to read app file');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Commerce XI Maths App: http://127.0.0.1:${port}`));
