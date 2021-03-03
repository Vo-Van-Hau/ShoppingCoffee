const express = require('express');
const router = express.Router();

const handleLogin = require('../controllers/login');

router.post('/login', handleLogin.handleLogin);

module.exports = router;