const express = require('express');
const net = require('net');
const app = express();
const PORT = 3000;

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    console.log('Mensagem recebida do cliente:', data.toString());

    // Responder ao cliente
    socket.write('Mensagem recebida com sucesso!');
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.error('Erro:', err.message);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor TCP rodando na porta ${PORT}`);
});

// Rota GET /receberMensagem
app.get('/receberMensagem', (req, res) => {
  res.send('Mensagem recebida com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
