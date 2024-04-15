const connection = require('../config/database')
const getallusers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `mydb`.`employee`;')
    return results
}

module.exports = {
    getallusers
}