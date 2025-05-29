const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/receberMensagem', (req, res) => {
  console.log('Requisição recebida de um cliente HTTP');
  res.send('Mensagem recebida com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando em http://localhost:${PORT}`);
});
