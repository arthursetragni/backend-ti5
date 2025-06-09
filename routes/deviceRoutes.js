const express = require('express');
const {
  getDetectedDevices,
  getDeviceHistory,
  getDeviceByMac,
  classifyDevice,
} = require('../controllers/deviceController');

const router = express.Router();

router.get('/detected', getDetectedDevices);        // Lista dispositivos no momento
router.get('/history', getDeviceHistory);           // Histórico de dispositivos
router.get('/:mac', getDeviceByMac);                // Detalhes de um dispositivo específico
router.post('/classify', classifyDevice);           // Classificar como conhecido ou desconhecido

module.exports = router;
