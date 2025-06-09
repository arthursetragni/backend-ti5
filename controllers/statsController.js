const Device = require('../models/Device');

// GET /stats/overview
const getStatsOverview = async (req, res) => {
  try {
    const totalDispositivos = await Device.countDocuments();
    const conhecidos = await Device.countDocuments({ status: 'conhecido' });
    const desconhecidos = await Device.countDocuments({ status: 'desconhecido' });

    res.json({
      totalDispositivos,
      conhecidos,
      desconhecidos,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas', error });
  }
};

// GET /stats/frequent-users
const getFrequentUsers = async (req, res) => {
  try {
    const topDispositivos = await Device.find()
      .sort({ vezesDetectado: -1 })
      .limit(5)
      .select('mac vezesDetectado -_id'); // Só os campos necessários

    const resultado = topDispositivos.map(d => ({
      mac: d.mac,
      vezes: d.vezesDetectado,
    }));

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários frequentes', error });
  }
};

// GET /stats/devices-per-day?data=2025-06-01
const getDevicesPerDay = async (req, res) => {
  try {
    const { data } = req.query;

    if (!data) {
      return res.status(400).json({ message: 'Parâmetro "data" é obrigatório (YYYY-MM-DD)' });
    }

    const inicio = new Date(data);
    const fim = new Date(data);
    fim.setDate(fim.getDate() + 1);

    const dispositivos = await Device.find({
      ultimaDeteccao: {
        $gte: inicio,
        $lt: fim,
      },
    });

    res.json({
      data,
      quantidade: dispositivos.length,
      dispositivos,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dispositivos por data', error });
  }
};

module.exports = {
  getStatsOverview,
  getFrequentUsers,
  getDevicesPerDay,
};
