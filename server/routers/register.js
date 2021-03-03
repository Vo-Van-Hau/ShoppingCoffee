const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');

router.post('/register', Register.Register);

module.exports = router;