// Model 
const sqlStatement = require('../model/sql_statement/index');
const urlProducts = require('../model/url/products'); 

// package module
const mysql = require('mysql');
const e = require('express');

var con = mysql.createConnection({
    ...urlProducts
});

let nameProductSearchBeforeConvert = "";
let nameProductSearch = "";

module.exports.postSearchProduct = (req, res) => {

    con.query(sqlStatement.SELECT_all_FROM_Products, function (error, results, fields) {

            if (error) throw error;

            nameProductSearchBeforeConvert = req.body.product_search.trim();
            nameProductSearch = removeVietnameseTones(req.body.product_search.toLowerCase());

            const searchProductList = results.filter((item) => {
                if(removeVietnameseTones(item.name.toLowerCase()).indexOf(nameProductSearch) !== -1){
                    return item;
                }
            })

            if(nameProductSearch === ""){
                res.redirect('http://localhost:3000/search/none?q=' + nameProductSearch);
            }else if(searchProductList.length !== 0){
                res.redirect('http://localhost:3000/search/products?q=' + nameProductSearch);
            }else if(searchProductList.length === 0 || nameProductSearchBeforeConvert === " "){
                res.redirect('http://localhost:3000/search/none?q=' + nameProductSearch);
            }

        }
    )   

}

module.exports.getSearchProduct = (req, res) => {

    con.query(sqlStatement.SELECT_all_FROM_Products, function (error, results, fields) {

            if (error) throw error;

            const searchProductList = results.filter((item) => {
                if(removeVietnameseTones(item.name.toLowerCase()).indexOf(nameProductSearch) !== -1){
                    return item;
                }
            })

            searchProductList.push(nameProductSearchBeforeConvert);

            res.send(searchProductList);

        }
    )   
    
}

function removeVietnameseTones(str) {

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư

    // Remove extra spaces
    str = str.replace(/ + /g," ");
    str = str.trim();

    // Remove punctuations
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");

    return str;
}