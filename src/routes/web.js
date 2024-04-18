const express = require('express');
const { gethomecontroler, gethp, gethomepage, connectinfo, create, getEmployeeId, updateinfo } = require('../controlers/home_controler');
const router = express.Router();
router.get('/', gethomecontroler)
router.get('/hp', gethp)
router.get('/home', gethomepage)
router.post('/connect', connectinfo)
router.get('/create', create)
router.get('/getEmployeeId/:id', getEmployeeId)
router.post('/updateinfo/:id', updateinfo)
module.exports = router;