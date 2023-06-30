const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer((req, res) => {
  if (req.url === '/server.js') {
    const filePath = path.join(__dirname, 'server.js');
    const contentType = mime.getType(filePath);
    res.setHeader('Content-Type', contentType);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File non trovato');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log('Server in ascolto sulla porta 5000');
});
