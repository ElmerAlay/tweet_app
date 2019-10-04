const mysql = require('mysql');

mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    port: "6603",
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