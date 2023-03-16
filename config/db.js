const mysql = require('mysql');   // import mysql from 'mysql';
const dotenv = require('dotenv');   // import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD_DB,
    database: 'mydb',
})

// db.connect();

// db.query('select * from user', (err, rows) => {
//     if (err) throw err;
//     console.log('rows ', rows);
// })

module.exports = { db };  // export { db }
