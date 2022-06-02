const pool = require ("../db/db");
const md5 = require("md5");


const getUser = async (user, pass) => {
    const query = 'SELECT * FROM autorizados WHERE user = ? AND password = ?'
    const row = await pool.query(query,[user,md5(pass)])
    return row [0]
}
module.exports = {getUser}