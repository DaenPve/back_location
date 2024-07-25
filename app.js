const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

app.use(bodyParser.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'Servidor en funcionamiento' });
});

app.post('/api/endpoint', (req, res) => {
  console.log('Mensaje recibido en el endpoint HTTP:', req.body);
  
  res.json({ status: 'Mensaje recibido' });
});

wss.on('connection', (ws) => {
  console.log('Cliente WebSocket conectado');

  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message.toString());
    
    ws.send('Mensaje recibido');

  });

  ws.on('close', () => {
    console.log('Cliente WebSocket desconectado');
  });
});

server.listen(8080, () => {
  console.log('Servidor WebSocket y HTTP en funcionamiento en http://localhost:8080');
});
