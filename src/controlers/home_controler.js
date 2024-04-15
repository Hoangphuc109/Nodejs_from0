const { json } = require('express');
const connection = require('../config/database')
const { getallusers } = require('../services/sevice')
const gethomecontroler = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM `mydb`.`employee`;',
        function (err, results, fields) {
            user = results;
            // console.log(results); // in ra cái này ở dưới terminal 
            // console.log(fields); //không cần lắm
            res.send(JSON.stringify(user))
            // res.send('Hello World! hoangphuc10 diem aduuu')
        }
    )

}
const gethp = (req, res) => {

    return res.render('amazing')
}

const gethomepage = async (req, res) => {
    let results = await getallusers();
    return res.render('home.ejs', { ListEmployee: results })
}

const connectinfo = async (req, res) => {
    console.log("check", req.body)
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    // connection.query(
    //     'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    //     [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear],
    //     function (err, results) {
    //         if (err) {
    //             console.error(err);
    //             res.status(500).send('Error occurred');
    //         } else {
    //             console.log(results);
    //             res.send('Successfully inserted data into the database');
    //         }
    //     }
    // );

    let [results, fields] = await connection.query(
        'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear]
    )
    // const [results, fields] = await connection.query('SELECT * FROM mydb.employee;')

    console.log("check ", results)
    res.send('Successfully inserted data into the database');
};


const create = (req, res) => {
    res.render('create.ejs')
}


module.exports = {
    gethomecontroler, gethp, gethomepage, connectinfo, create

}
