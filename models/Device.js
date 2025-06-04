import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  mac: {
    type: String,
    required: true,
    unique: true,
  },
  ultimaDeteccao: {
    type: Date,
    default: Date.now,
  },
  vezesDetectado: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: ['conhecido', 'desconhecido'],
    default: 'desconhecido',
  },
  nome: {
    type: String,
    default: '',
  },
});

const Device = mongoose.model('Device', deviceSchema);

export default Device;
