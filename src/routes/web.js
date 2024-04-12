const express = require('express');
const { gethomecontroler, gethp } = require('../controlers/home_controler');
const router = express.Router();

router.get('/', gethomecontroler)
router.get('/hp', gethp)

module.exports = router;