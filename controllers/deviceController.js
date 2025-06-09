const Device = require('../models/Device');

// GET /devices/detected
async function getDetectedDevices(req, res) {
  try {
    const { status } = req.query;

    const query = status ? { status } : {};

    const devices = await Device.find(query).sort({ ultimaDeteccao: -1 });

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dispositivos detectados', error });
  }
}

// GET /devices/history
async function getDeviceHistory(req, res) {
  try {
    const devices = await Device.find().sort({ ultimaDeteccao: -1 });
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar histórico de dispositivos', error });
  }
}

// GET /devices/:mac
async function getDeviceByMac(req, res) {
  try {
    const { mac } = req.params;
    const device = await Device.findOne({ mac });

    if (!device) {
      return res.status(404).json({ message: 'Dispositivo não encontrado' });
    }

    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o dispositivo', error });
  }
}

// POST /devices/classify
async function classifyDevice(req, res) {
  try {
    const { mac, status, nome } = req.body;

    if (!mac || !status) {
      return res.status(400).json({ message: 'MAC e status são obrigatórios' });
    }

    const device = await Device.findOneAndUpdate(
      { mac },
      {
        status,
        ...(nome && { nome }),
      },
      { new: true }
    );

    if (!device) {
      return res.status(404).json({ message: 'Dispositivo não encontrado' });
    }

    res.status(200).json({ message: 'Dispositivo classificado com sucesso', device });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao classificar o dispositivo', error });
  }
}

module.exports = {
  getDetectedDevices,
  getDeviceHistory,
  getDeviceByMac,
  classifyDevice,
};
