const mysql = require('mysql2');
const dotenv = require('dotenv').config();


const pool = mysql.createPool({
    
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password : process.env.PASSDB,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {pool}