const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');

// GET /settings – Buscar configurações
router.get('/settings', getSettings);

// POST /settings – Atualizar configurações
router.post('/settings', updateSettings);

module.exports = router;
