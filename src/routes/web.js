const express = require('express');
const { gethomecontroler, gethp, getnarbar, connectinfo } = require('../controlers/home_controler');
const router = express.Router();
router.get('/', gethomecontroler)
router.get('/hp', gethp)
router.get('/narbar', getnarbar)
router.post('/connect', connectinfo)

module.exports = router;