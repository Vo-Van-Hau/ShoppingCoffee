// Model 
const sqlStatement = require('../model/sql_statement/index');
const urlProducts = require('../model/url/products'); 

// package module
const mysql = require('mysql');

var con = mysql.createConnection({
    ...urlProducts
});

module.exports.handleProductList = (req, res) => {
    con.query(sqlStatement.SELECT_all_FROM_Products, function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        }
    )
}
