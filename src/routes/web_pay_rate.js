const express = require('express');
const { gethomecontroler, gethp, gethomepage, createEmployee, create,
    getEmployeeId, updateinfo, deleteEmployee, deleteinfo
} = require('../controlers/home_cl_Em');
const router_PR = express.Router();
router_PR.get('/', gethomecontroler)
router_PR.get('/hp', gethp)
router_PR.get('/home', gethomepage)
router_PR.get('/create', create)
router_PR.post('/getEmployeeId/:id', getEmployeeId)
router_PR.post('/createEmployee', createEmployee)
router_PR.post('/updateinfo', updateinfo)
router_PR.post('/deleteEmployee/:id', deleteEmployee)
router_PR.post('/deleteinfo', deleteinfo)

module.exports = router_PR;