const connection = require('../config/database')
const getallusers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `mydb`.`employee`;')
    return results
}

// const getupdate = async (employeeid) truyền vào id 
const getIdEmployee = async (employeeid) => {
    let [results, fields] = await connection.query('SELECT * FROM `mydb`.`employee` WHERE `idEmployee` = ?;', [employeeid])
    let employee = results && results.length > 0 ? results[0] : {};
    return employee
}

const createEm = async (idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `mydb`.`employee` (`idEmployee`, `Employee Number`, `Last Name`, `First Name`, `SSN`, `Pay Rate`, `Pay Rates_idPay Rates`, `Vacation Days`, `Paid To Date`, `Paid Last Year`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear],

    );
}

const updateEm = async (idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear) => {

    let [results, fields] = await connection.query(
        'UPDATE `mydb`.`employee` SET `Employee Number` = ?,`Last Name` = ?,`First Name` = ?,`SSN` = ?,`Pay Rate` = ?,`Pay Rates_idPay Rates` = ?,`Vacation Days` = ?,`Paid To Date` = ?,`Paid Last Year` = ? WHERE `idEmployee` = ?;',
        [emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear, idem]
    )
}

const deleteEm = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `mydb`.`employee`WHERE `idEmployee` = ?;',
        [id]
    )
    // Nếu dùng "let emid = rep.body.id" thì câu truy vấn sẽ sai câu truy vấn bên dưới:
    // sqlMessage: "You have an error in your SQL syntax; check the manual 
    // that corresponds to your MySQL server version for the right syntax to use near ', 
    // `emnum` = '1232', `lname` = 'beak', `fname` = 'hyun woo'' at line 1"
    // --> vậy nên ta sẽ dùng cú pháp trên thay cho "emid = rep.body.id"
    // emid là "name" tên biến đã đặt req.body.emid là trỏ thẳng tới thằng id của employee
    // res.redirect('/home')
}

//---------------------------------------------


const getall_payrate = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `mydb`.`payrates`;')
    return results
}
module.exports = {
    getallusers, getIdEmployee, createEm, updateEm, deleteEm,
    //------------------------------
    getall_payrate,
}