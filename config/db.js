const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dispositivosDB');
    console.log('🟢 MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('🔴 Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
