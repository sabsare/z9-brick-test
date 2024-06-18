// server.js

const http = require('http');
const os = require('os');

const PORT = 8000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    switch (url) {
      case '/hostname':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(os.hostname());
        break;
      case '/author':
        const author = process.env.AUTHOR || 'Unknown';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(author);
        break;
      case '/id':
        const uuid = process.env.UUID || 'No UUID available';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(uuid);
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
