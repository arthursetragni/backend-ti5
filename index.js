// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());


// Endpoint teste
app.get('/', (req, res) => {
  res.json({
    mensagem1: "Rafael chupa pinto Clark!",
    mensagem2: "Guilherme Cu de Mel Vieira!"
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});




