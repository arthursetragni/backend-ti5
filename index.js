import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import statsRoutes from './routes/statsRoutes.js';
import deviceRoutes from './routes/deviceRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

//connectDB();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/stats', statsRoutes);
app.use('/devices', deviceRoutes);
app.use('/notifications', notificationRoutes);
// app.use('/settings', settingsRoutes);

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


const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('🟢 Conectado ao MongoDB com sucesso!');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
})
.catch((err) => {
  console.error('🔴 Erro ao conectar no MongoDB:', err);
});