const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');  
       
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serving static files 
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "..", "build")));  

const path = require("path");

// module routers
const route_register = require('./routers/register');
const route_login = require('./routers/login');
const route_handleProduct = require('./routers/product_list');
const route_searchProduct = require('./routers/search_product');

const route_handleAddProduct = require('./routers/admin/handleProduct');


// use routers 
app.use('/', route_register);             
app.use('/', route_login);      
app.use('/', route_handleProduct);  
app.use('/', route_searchProduct); 

app.use('/', route_handleAddProduct);
   
const PORT = 3001;      
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));