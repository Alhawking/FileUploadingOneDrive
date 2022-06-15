const express = require('express');
const router = express.Router();
const webhookRoutes = require('../../controllers/webHookController');
router.post('/update', webhookRoutes.update);
module.exports = router;