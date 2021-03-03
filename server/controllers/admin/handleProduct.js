// package module
const express = require("express");
const app = express();
const mysql = require('mysql');

// Model 
const sqlStatement = require('../../model/sql_statement/index');
const urlProducts = require('../../model/url/products'); 

var con = mysql.createConnection({
    ...urlProducts
});

const removeVietnameseTones = require('../../../client/src/func_support/convertVNtoEN');

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-fo

let idProductSearch;

module.exports.handleAddProduct = (req, res) => {

    const nameOfProduct = req.body.nameOfProduct.trim();
    const slugOfProduct = removeVietnameseTones(nameOfProduct).trim().toLowerCase().replace(" ", "-");
    const salePriceOfProduct = parseInt(req.body.salePriceOfProduct.trim());
    const discountPriceOfProduct = parseInt(req.body.discountPriceOfProduct.trim());
    const linkImgOfProduct = req.body.linkImgOfProduct.trim();
    const CodeOfProduct = req.body.CodeOfProduct.trim();

    if(nameOfProduct === "" || salePriceOfProduct === "" || discountPriceOfProduct === "" || linkImgOfProduct === "" || CodeOfProduct === ""){
        res.redirect("http://localhost:3000/data/admin/products");
        return;
    }

    con.query(sqlStatement.ADD_PRODUCT + `("", "${nameOfProduct}", "${slugOfProduct}", "${linkImgOfProduct}", "${salePriceOfProduct}", "${discountPriceOfProduct}", "${CodeOfProduct}")`, function(error, results, fields){

        if(error) throw error;

        console.log("1 record inserted");
        res.redirect("http://localhost:3000/data/admin/products");
                
    })

}

module.exports.handlePostUpdateProduct = (req, res) => {

    idProductSearch = req.body.searchID.trim();

    if(idProductSearch === ""){
        res.redirect("http://localhost:3000/data/admin/products");
        return;
    }

    res.redirect("http://localhost:3000/data/admin/products");
                
}

module.exports.handleGetUpdateProduct = (req, res) => {

    con.query(sqlStatement.SELECT_all_FROM_Products, function (error, results, fields) {

            if (error) throw error;

            results.push("block");
            results.push(idProductSearch)
            res.send(results);

            // const searchProductList = results.filter((item) => {
            //     if(item.id === parseInt(idProductSearch)){
            //         return item;
            //     }
            // })

            // searchProductList.push("block");
            // searchProductList.push(idProductSearch)

            // res.send(searchProductList);
            
        }
    )   
                
}

module.exports.handlePutUpdateProduct = (req, res) => {

    con.query(sqlStatement.SELECT_all_FROM_Products, function (error, results, fields) {

            if (error) throw error;

            // const searchProductList = results.filter((item) => {
            //     if(item.id === parseInt(idProductSearch)){
            //         return item;
            //     }
            // })

            // searchProductList.push("block");

            // res.send(searchProductList);

            console.log(req.body.nameOfUpdate);

            }
    )   
                
}