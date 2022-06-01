const mysql = require ("mysql");
const util = require ("util");

const pool = mysql.createPool({
    connectionLimit: 10,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password:process.env.DB_PASS, 
});


pool.query = util.promisify(pool.query);
module.exports = pool;