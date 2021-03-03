// package module
const express = require("express");
const app = express();
const mysql = require('mysql');

// Model 
const sqlStatement = require('../model/sql_statement/index');
const urlProducts = require('../model/url/fanthbol'); 

var con = mysql.createConnection({
    ...urlProducts
});

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-fo

module.exports.Register = (req, res) => {

    if( req.body.name === "" ||
    req.body.email === "" || 
    req.body.password === "" || 
    req.body.numberphone === "" ||
    req.body.address === ""||
    req.body.gender === "" ||
    req.body.days === "" ||
    req.body.months === "" ||
    req.body.years === ""
    ){
        console.log("Sai thong tin");
        res.redirect("http://localhost:3000/checkout/cart");
        return;
    }

    const birthday = req.body.days + "-" + req.body.months + "-" + req.body.years;

    let slugUser = "";
    for(let i = 0; i < req.body.name.trim().split(" ").length; i++){
        if(i === req.body.name.trim().split(" ").length - 1){
            slugUser += req.body.name.trim().split(" ")[i];
            break;
        }
        slugUser += req.body.name.trim().split(" ")[i] + "-";
    }

    let insertData = `INSERT INTO users (id, name, email, numberphone, password, gender, birthday, slug, address) VALUES 
                    ("", "${req.body.name}", "${req.body.email}", "${req.body.numberphone}", "${req.body.password}", "${req.body.gender}", "${birthday}", "${slugUser}", "${req.body.address}")`;
    con.query(insertData, function (error, result, fields){
        if(error) throw error;
        console.log("1 record inserted");
        res.redirect("http://localhost:3000/checkout/cart");
    })
}