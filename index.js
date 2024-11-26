import http from 'http';

let server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  response.end('<h1>hello node js</h1>');
});

const PORT = 4598;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`SEVRER RUNS: http://${HOST}:${PORT}`);
});
