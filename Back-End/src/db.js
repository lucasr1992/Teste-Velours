const mysql = require('mysql');







const mysqlConnection  = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB_NAME
});

mysqlConnection.connect((err) => {
    if(err) throw err;
    console.log('SQL Connect')
});







module.exports = mysqlConnection


