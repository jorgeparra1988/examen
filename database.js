const mysql = require('mysql');

const {promisify} = require('util');

const {database} = require('./views/keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        console.error('DATABASE NOT CONNECTED');
    };
    if(connection) connection.release();
    console.log('DB is connected');
});


pool.query = promisify(pool.query);
module.exports = pool;