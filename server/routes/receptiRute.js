const express = require('express');
const router = express.Router();
const receptiKontroler = require('../controllers/receptiKontroler');

router.get('/', receptiKontroler.homepage);

module.exports = router;