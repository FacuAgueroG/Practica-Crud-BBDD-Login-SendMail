const pool = require ("../db");

const getProducts = async () => {
    try {
        const query = "select * from stock_gafas ";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {console.log(error)}
};

const getProduct = async (id) => {
    try {
        const query = "select * from stock_gafas where id =?";
        const row = await pool.query(query, [id]);
        return row;
    } catch (error) {console.log(error)}
};

const deleteProduct = async (id) => {
    const query = "delete from stock_gafas where id = ?";
    const row = await pool.query(query,[id]);
    return row;
}

const addProduct = async (data) => {
    try {
        const query = "insert into stock_gafas set ?"
        const row = await pool.query(query, [data]);
        return row;
    } catch (error) {
        console.log(error);
    }
}

const addProducts = async (data) => {
    try {
        const query = "insert into stock_gafas set ?";
        const row = await pool.query(query, [data]);
        return row;
    } catch (error) {console.log(error);
    }
};

async function modifyProduct(data,id) {
    try {
        const query = "update stock_gafas set ? where id = ?";
        const row = await pool.query(query,[data, id]);
        return row;}
    catch (error){
        console.log(error)
    }}

module.exports = {getProducts, addProducts, getProduct, addProduct, deleteProduct, modifyProduct};