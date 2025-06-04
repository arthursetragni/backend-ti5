import express from 'express';
import {
  getDetectedDevices,
  getDeviceHistory,
  getDeviceByMac,
  classifyDevice,
} from '../controllers/deviceController.js';

const router = express.Router();
router.get('/detected', getDetectedDevices);        // Lista dispositivos no momento
router.get('/history', getDeviceHistory);           // Histórico de dispositivos
router.get('/:mac', getDeviceByMac);                // Detalhes de um dispositivo específico
router.post('/classify', classifyDevice);           // Classificar como conhecido ou desconhecido

export default router;
