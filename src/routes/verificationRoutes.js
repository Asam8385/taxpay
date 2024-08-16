const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');


router.get('/verify/:testid', verificationController.verify);

module.exports = router;