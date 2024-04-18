const { json } = require('express');
const connection = require('../config/database')
const { getallusers, getupdate } = require('../services/sevice')

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

const connectinfo = async (req, res) => {
    // console.log("check", req.body)
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    let [results, fields] = await connection.query(
        'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear]
    )
    // const [results, fields] = await connection.query('SELECT * FROM mydb.employee;')

    console.log("check ", results)
    res.send('Successfully inserted data into the database');
};
const getEmployeeId = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getupdate(employeeid);
    res.render('edit.ejs', { employee_update: employee })
}


const updateinfo = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    res.render('edit.ejs')
    res.send('Successfully inserted data into the database');
};


module.exports = {
    gethomecontroler, gethp, gethomepage, connectinfo, create, getEmployeeId, updateinfo

}
