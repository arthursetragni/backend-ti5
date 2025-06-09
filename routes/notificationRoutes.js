const express = require('express');
const {
  getNotifications,
  toggleNotifications,
} = require('../controllers/notificationController');

const router = express.Router();

router.get('/', getNotifications);           // Lista de notificações recentes
router.post('/toggle', toggleNotifications); // Ativar/desativar notificações

module.exports = router;
