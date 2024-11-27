import http from 'http';
import fs from 'fs';

let server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  const stream = fs.createReadStream('./templates/index.html');
  stream.pipe(response);
});

const PORT = 4598;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`SEVRER RUNS: http://${HOST}:${PORT}`);
});
