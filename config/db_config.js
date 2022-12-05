const mysql = require('mysql2');
const dotenv = require('dotenv').config();


const pool = mysql.createPool({
    
    host: process.env.HOSTDB, //|| 'database-2.cwxbu9wuucdm.us-east-2.rds.amazonaws.com',
    user: process.env.USERDB ,//|| 'admin',
    password : process.env.PASSDB,// || 'adminpassword',
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {pool}