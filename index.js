const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors');
const statsRoutes = require('./routes/statsRoutes.js');
const deviceRoutes = require('./routes/deviceRoutes.js');
const notificationRoutes = require('./routes/notificationRoutes.js');
const settingsRoutes = require('./routes/settingsRoutes.js');
const connectDB = require('./config/db.js');
const mongoose = require('mongoose');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/stats', statsRoutes);
app.use('/devices', deviceRoutes);
app.use('/notifications', notificationRoutes);
app.use('/settings', settingsRoutes);
const { DetectaMac } = require('./controllers/detectorController.js');


app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});


app.post('/teste', DetectaMac);

// app.post('/teste', (req, res) => {
//   console.log(req.body); 
//   res.json({
//     mensagem: 'Corpo recebido com sucesso ✅',
//     dadosRecebidos: req.body,
//     //{ MAC: '7a:32:d1:89:ee:ba', RSSI: '-65' }
//   });
// });

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect("mongodb://mongo:LwnxhheyUfNyzZvuzRWNDoVlnuJeNUSr@switchback.proxy.rlwy.net:45371", {
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

