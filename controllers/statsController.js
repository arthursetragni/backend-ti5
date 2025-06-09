const getStatsOverview = (req, res) => {
  res.json({
    totalDispositivos: 23,
    totalUsuarios: 7,
    totalChamadas: 124,
    conhecidos: 12,
    desconhecidos: 11,
  });
};

const getFrequentUsers = (req, res) => {
  res.json([
    { mac: 'AA:BB:CC:DD:EE:01', vezes: 34 },
    { mac: 'AA:BB:CC:DD:EE:02', vezes: 29 },
    { mac: 'AA:BB:CC:DD:EE:03', vezes: 22 },
    { mac: 'AA:BB:CC:DD:EE:04', vezes: 18 },
    { mac: 'AA:BB:CC:DD:EE:05', vezes: 11 },
  ]);
};

const getDevicesPerDay = (req, res) => {
  res.json({
    dias: ['2025-06-01', '2025-06-02', '2025-06-03'],
    dispositivos: [5, 8, 4],
  });
};

module.exports = {
  getStatsOverview,
  getFrequentUsers,
  getDevicesPerDay,
};
