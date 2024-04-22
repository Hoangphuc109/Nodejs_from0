const express = require('express');
const { gethomecontroler, gethp, gethomepage, createEmployee, create,
    getEmployeeId, updateinfo, deleteEmployee, deleteinfo
} = require('../controlers/home_cl_Em');
const router_Em = express.Router();
router_Em.get('/', gethomecontroler)
router_Em.get('/hp', gethp)
router_Em.get('/home', gethomepage)
router_Em.get('/create', create)
router_Em.post('/getEmployeeId/:id', getEmployeeId)
router_Em.post('/createEmployee', createEmployee)
router_Em.post('/updateinfo', updateinfo)
router_Em.post('/deleteEmployee/:id', deleteEmployee)
router_Em.post('/deleteinfo', deleteinfo)

module.exports = router_Em;