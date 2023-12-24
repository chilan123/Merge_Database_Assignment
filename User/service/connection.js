const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

var connection = mysql.createPool({
    host: process.env.DBHost,
    user: process.env.DBUname,
    password: process.env.DBPassword,
    database: process.env.DataBase
});

connection.getConnection(function(err){
    if(err) throw err;
    console.log("Connected to User database")
});

module.exports = connection;

