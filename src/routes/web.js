const express = require('express');
const { gethomecontroler, gethp, gethomepage, connectinfo, create } = require('../controlers/home_controler');
const router = express.Router();
router.get('/', gethomecontroler)
router.get('/hp', gethp)
router.get('/home', gethomepage)
router.post('/connect', connectinfo)
router.get('/create', create)

module.exports = router;