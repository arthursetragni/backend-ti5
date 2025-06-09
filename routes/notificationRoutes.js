const express = require('express');
const {
  getNotifications,
  toggleNotifications,
} = require('../controllers/notificationController');

const router = express.Router();

router.get('/', getNotifications);          
router.post('/toggle', toggleNotifications);

module.exports = router;
