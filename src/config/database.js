require('dotenv').config();
const mysql = require('mysql2/promise');

const connection_mysql = mysql.createPool({
    host: process.env.DB_host,
    port: process.env.DB_port,
    database: process.env.DB_name1,
    user: process.env.DB_user,
    password: process.env.DB_password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})


module.exports = connection_mysql