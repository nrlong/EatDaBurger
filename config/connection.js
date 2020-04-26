const mysql = require("mysql")
const pass = require("./pass")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "burgersDB"
})
connection.connect((error) => {
    if (error) throw error;
    console.log("connected as id: " + connection.threadId);
    // connection.end();
})


module.exports = connection;