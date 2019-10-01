const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM Tweet', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { idUser } = req.body;
    mysqlConnection.query('SELECT * FROM Tweet WHERE idUser = ?', [idUser], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { idTweet, message, idUser } = req.body;

    const query = `INSERT INTO TWEET(idTweet, message, idUser) values (?, ?, ?)`;

    mysqlConnection.query(query, [idTweet, message, idUser], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved!' });
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    get: get,
    getOne: getOne,
    insert: insert
}