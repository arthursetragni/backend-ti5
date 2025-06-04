export async function getNotifications(req, res) {
  try {
    const { status } = req.query;

    const query = status ? { status } : {};

    const devices = await Device.find(query).sort({ ultimaDeteccao: -1 });

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dispositivos detectados', error });
  }
}
export async function toggleNotifications(req, res) {
  try {
    const { status } = req.query;

    const query = status ? { status } : {};

    const devices = await Device.find(query).sort({ ultimaDeteccao: -1 });

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dispositivos detectados', error });
  }
}