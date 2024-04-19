const { json } = require('express');
const connection = require('../config/database')
const { getallusers, getIdEmployee } = require('../services/sevice')

//test first
const gethp = (req, res) => {

    return res.render('amazing')
}

const create = (req, res) => {
    res.render('create.ejs')
}
//connect database
const gethomecontroler = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM `mydb`.`employee`;',
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

    let [results, fields] = await connection.query(
        'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear],

    );
    res.send('ok baby nho')
};
//get ok 
const getEmployeeId = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('edit.ejs', { employee_update: employee })
}

// update not ok
const updateinfo = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    let [results, fields] = await connection.query(
        'UPDATE `mydb`.`employee` SET `Employee Number` = ?,`Last Name` = ?,`First Name` = ?,`SSN` = ?,`Pay Rate` = ?,`Pay Rates_idPay Rates` = ?,`Vacation Days` = ?,`Paid To Date` = ?,`Paid Last Year` = ? WHERE `idEmployee` = ?;',
        [emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear, idem]
    )

    res.send('Successfully update data into the database');
};


module.exports = {
    gethomecontroler, gethp, gethomepage, createEmployee, create, getEmployeeId, updateinfo

}
