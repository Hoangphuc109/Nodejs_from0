const express = require('express');
const { gethomecontroler, gethp, gethomepage, createEmployee, create, getEmployeeId, updateinfo } = require('../controlers/home_controler');
const router = express.Router();
router.get('/', gethomecontroler)
router.get('/hp', gethp)
router.get('/home', gethomepage)
router.get('/create', create)
router.post('/createEmployee', createEmployee)
router.get('/getEmployeeId/:id', getEmployeeId)
router.post('/updateinfo', updateinfo)
module.exports = router;