const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET /receberMensagem
app.get('/receberMensagem', (req, res) => {
  res.send('Mensagem recebida com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
