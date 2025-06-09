const express = require('express');
const {
  getStatsOverview,
  getFrequentUsers,
  getDevicesPerDay,
} = require('../controllers/statsController');

const router = express.Router();

router.get('/overview', getStatsOverview);
router.get('/frequent-users', getFrequentUsers);
router.get('/devices-per-day', getDevicesPerDay);

module.exports = router;
