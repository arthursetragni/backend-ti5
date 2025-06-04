import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import statsRoutes from './routes/statsRoutes.js';
import deviceRoutes from './routes/deviceRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/stats', statsRoutes);
app.use('/devices', deviceRoutes);
app.use('/notifications', notificationRoutes);
app.use('/settings', settingsRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.post('/teste', (req, res) => {
  console.log(req.body); 
  res.json({
    mensagem: 'Corpo recebido com sucesso ✅',
    dadosRecebidos: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});