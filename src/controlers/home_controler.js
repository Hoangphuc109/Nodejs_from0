const { json } = require('express');
const connection = require('../config/database')

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

const getnarbar = (req, res) => {
    res.render('navbarhome')
}
// const connectinfo = (req, res) => {
//     console.log("check", req.body)
//     let { idemployee, employeenum, lastname, firstname, ssn, payrate, payrateid, vacationday, paidtodate, paidlastyear } = req.body;

//     connection.query(
//         'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//         // 1, 1001, Doe, John, 123456789, Hourly Rate, 1, 10, 1, 2
//         [idemployee, employeenum, lastname, firstname, ssn, payrate, payrateid, vacationday, paidtodate, paidlastyear],
//         function (err, results) {
//             console.log(results);
//             res.send('successfull')
//         }
//     )

// }

const connectinfo = (req, res) => {
    console.log("check", req.body)
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    connection.query(
        'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear],
        function (err, results) {
            if (err) {
                console.error(err);
                res.status(500).send('Error occurred');
            } else {
                console.log(results);
                res.send('Successfully inserted data into the database');
            }
        }
    );
};


module.exports = {
    gethomecontroler, gethp, getnarbar, connectinfo

}
