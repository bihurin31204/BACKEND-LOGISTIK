const express = require('express');
const { sendEmails } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-emails', sendEmails);

module.exports = router;
