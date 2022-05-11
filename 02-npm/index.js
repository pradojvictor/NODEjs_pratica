const http = require('http');
const url = require("url");
const queryString = require("query-string")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  const params = queryString.parse(url.parse(request.url).search);
  
  const stringJson = JSON.stringify(params);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/json'); // de plain para json
  response.end(stringJson);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

