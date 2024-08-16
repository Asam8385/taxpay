const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/loginuser', authController.loginUser);

module.exports = router;
