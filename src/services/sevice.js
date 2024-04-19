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

module.exports = {
    getallusers, getIdEmployee
}