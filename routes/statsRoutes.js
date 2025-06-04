import express from 'express';
import {
  getStatsOverview,
  getFrequentUsers,
  getDevicesPerDay,
} from '../controllers/statsController.js';

const router = express.Router();

router.get('/overview', getStatsOverview);
router.get('/frequent-users', getFrequentUsers);
router.get('/devices-per-day', getDevicesPerDay);

export default router;