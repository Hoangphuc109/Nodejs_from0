const { json } = require('express');
const connection = require('../config/database')
const { getallusers, getIdEmployee, createEm, updateEm, deleteEm } = require('../services/sevice')

const create = (req, res) => {
    res.render('create.ejs')
}
//connect database
const gethomecontroler = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM `mydb`.`pay rates`;',
        function (err, results, fields) {
            user = results;
            res.send(JSON.stringify(user))
        }
    )

}

const gethomepage = async (req, res) => {
    let results = await getallusers();
    return res.render('home.ejs', { ListEmployee: results })
}

const createEmployee = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    await createEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear)
    res.redirect('/home')

};
//get ok 
const getEmployeeId = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('edit.ejs', { employee_update: employee })
    //Thằng id ở "req.params.id" là mình tự đặt nếu thay đổi thì ở trang web sau dấu" /:id " 
    //thì cũng phải thay đổi cho giống nhau
}

// update not ok
const updateinfo = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    await updateEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear);
    // res.redirect('/home')
    res.send('update da xong ')
};
const deleteEmployee = async (req, res) => {

    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('delete.ejs', { employee_delete: employee })
}
const deleteinfo = async (req, res) => {
    const id = req.body.idem;
    await deleteEm(id);
    // res.redirect('/home')
    res.send('ok baby')
};

module.exports = {
    gethomecontroler, gethp,
    gethomepage, createEmployee,
    create, getEmployeeId, updateinfo,
    deleteEmployee, deleteinfo

}
