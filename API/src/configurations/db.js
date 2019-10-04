const mysql = require('mysql');

mysqlConnection = mysql.createConnection({
    host: "db",
    port: "5000",
    user: "root",
    password: "1234",
    database: "tweet_app_db"
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("DB is connected!");
    }
});

module.exports = mysqlConnection;