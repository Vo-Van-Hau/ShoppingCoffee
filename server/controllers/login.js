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


module.exports.handleLogin = (req, res) => {

    const email = req.body.email_numberphone;
    const password = req.body.password;

    console.log(password);

    con.query(sqlStatement.SELECT_all_FROM_Users, function(error, results, fields){

        if(error) throw error;

        const userAuth = results.find((item, index) => {
            return item.email === email;
        })

        if(!userAuth){;
            res.redirect('http://localhost:3000/login');
            return;
        }

        if(userAuth.password !== password){
            res.redirect('http://localhost:3000/login');
            return;
        }

        res.redirect('http://localhost:3000')   
             
    })

}