const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');

// GET /settings – Buscar email
router.get('/', getSettings);

// POST /settings – Atualizar email
//router.post('/', updateSettings);

module.exports = router;
