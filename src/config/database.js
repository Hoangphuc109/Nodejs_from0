require('dotenv').config();
const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: process.env.DB_host,
//     port: process.env.DB_port,
//     database: process.env.DB_name,
//     user: process.env.DB_user,
//     password: process.env.DB_password,
// });

const connection = mysql.createPool({
    host: process.env.DB_host,
    port: process.env.DB_port,
    database: process.env.DB_name,
    user: process.env.DB_user,
    password: process.env.DB_password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = connection