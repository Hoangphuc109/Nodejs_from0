const express = require('express');
const { gethomecontroler, gethp, gethomepage, createEmployee, create,
    getEmployeeId, updateinfo, deleteEmployee, deleteinfo, getbenefit,
    gethomepayrate
} = require('../controlers/homeControler');
const router = express.Router();
//-------------------------------------
//employee
router.get('/', gethomecontroler)
router.get('/hp', gethp)
router.get('/home', gethomepage)
router.get('/create', create)
router.post('/getEmployeeId/:id', getEmployeeId)
router.post('/createEmployee', createEmployee)
router.post('/updateinfo', updateinfo)
router.post('/deleteEmployee/:id', deleteEmployee)
router.post('/deleteinfo', deleteinfo)
router.get('/benefit', getbenefit)

//--------------------------------------
//payrate
router.get('/payrates', gethomepayrate)

module.exports = router;