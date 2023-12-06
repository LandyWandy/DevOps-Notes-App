const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/liveness', healthController.livenessCheck);
router.get('/readiness', healthController.readinessCheck);

module.exports = router;
