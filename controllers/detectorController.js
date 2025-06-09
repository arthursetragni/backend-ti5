const Device = require('../models/Device');
const { enviarNotificacaoDispositivo } = require('../utils/emailService');

async function DetectaMac(req, res) {
  try {
    const { MAC, RSSI } = req.body;

    if (!MAC || !RSSI) {
      return res.status(400).json({ message: 'MAC e RSSI são obrigatórios' });
    }

    const mac = MAC.toLowerCase();
    let device = await Device.findOne({ mac });

    if (device) {
      device.ultimaDeteccao = new Date();
      device.vezesDetectado += 1;
      await device.save();
      await enviarNotificacaoDispositivo(mac);

      return res.status(200).json({
        message: 'Dispositivo atualizado com sucesso',
        device,
      });
    } else {
      const novoDispositivo = new Device({ mac });
      await novoDispositivo.save();

      // Envia e-mail de notificação
      console.log("chegou aqui")
      await enviarNotificacaoDispositivo(mac);

      return res.status(201).json({
        message: 'Novo dispositivo criado com sucesso',
        device: novoDispositivo,
      });
    }
  } catch (error) {
    console.error('Erro ao detectar MAC:', error);
    res.status(500).json({ message: 'Erro interno do servidor', error });
  }
}

module.exports = { DetectaMac };
