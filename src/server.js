const http = require('http');
const { listaTareas } = require('../auxiliar/tareaFunciones');

const server = http.createServer((req, res) => {
  if (req.url === '/tareas' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const listaTareasJSON = JSON.stringify(listaTareas);
    res.end(listaTareasJSON);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('\n Servidor iniciado en http://localhost:3000');
});

module.exports = server;
