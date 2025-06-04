import express from 'express';
import {
  getNotifications,
  toggleNotifications,
} from '../controllers/notificationController.js';

const router = express.Router();


router.get('/', getNotifications);         // Lista de notificações recentes
router.post('/toggle', toggleNotifications); // Ativar/desativar notificações

export default router;
