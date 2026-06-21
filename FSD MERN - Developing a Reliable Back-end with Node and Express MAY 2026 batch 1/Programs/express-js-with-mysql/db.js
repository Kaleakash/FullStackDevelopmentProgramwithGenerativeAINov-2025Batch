const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb",
    port:3306
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        return;
    }
    console.log("MySQL Connected");
});

module.exports = connection;