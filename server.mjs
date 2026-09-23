import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4187);
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/main.js', ['main.js', 'text/javascript; charset=utf-8']],
  ['/questions.js', ['questions.js', 'text/javascript; charset=utf-8']],
  ['/unit2-questions.js', ['unit2-questions.js', 'text/javascript; charset=utf-8']],
  ['/solutions/Th-P1-9.pdf', ['output/pdf/Commerce_XI_Maths_Th_P1-9_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Ex-1.1.pdf', ['output/pdf/Commerce_XI_Maths_Ex-1.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Th-P10-15.pdf', ['output/pdf/Commerce_XI_Maths_Th_P10-15_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Ex-1.2.pdf', ['output/pdf/Commerce_XI_Maths_Ex-1.2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Lets-Remember.pdf', ['output/pdf/Commerce_XI_Maths_Lets_Remember_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Mis-Ex-1.pdf', ['output/pdf/Commerce_XI_Maths_Mis-Ex-1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Activities.pdf', ['output/pdf/Commerce_XI_Maths_Activities_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Th-P20-30.pdf', ['output/pdf/Commerce_XI_Maths_Th_P20-30_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Ex-2.1.pdf', ['output/pdf/Commerce_XI_Maths_Ex-2.1_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Lets-Remember-2.pdf', ['output/pdf/Commerce_XI_Maths_Lets_Remember_2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Mis-Ex-2.pdf', ['output/pdf/Commerce_XI_Maths_Mis-Ex-2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/solutions/Activities-2.pdf', ['output/pdf/Commerce_XI_Maths_Activities_2_Detailed_Solutions.pdf', 'application/pdf']],
  ['/guides/unit-1-reference.pdf', ['output/pdf/Commerce_XI_Maths_Unit_1_Sets_and_Relations_Reference_Guide.pdf', 'application/pdf']],
  ['/guides/unit-2-reference.pdf', ['output/pdf/Commerce_XI_Maths_Unit_2_Functions_Reference_Guide.pdf', 'application/pdf']],
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
