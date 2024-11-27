import http from 'http';
import fs from 'fs';

let server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  if (request.url === '/') fs.createReadStream('./templates/index.html').pipe(response);
  else if (request.url === '/about') fs.createReadStream('./templates/about.html').pipe(response);
  else fs.createReadStream('./templates/error.html').pipe(response);
});

const PORT = 4598;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`SEVRER RUNS: http://${HOST}:${PORT}`);
});
