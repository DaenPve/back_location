const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

//NOTA: Abrir puertos para escucha sobre la misma red

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

app.use(bodyParser.json());

wss.on('connection', (ws) => {

  ws.on('message', (coord) => {
    ws.send(JSON.stringify(coord.toString()));
  });

  ws.on('close', () => {
    console.log('Cliente WebSocket desconectado');
  });
});

server.listen(3000, () => {
  console.log('Server Listening');
});
