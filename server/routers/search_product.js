const express = require('express');
const router = express.Router();

const searchProduct =  require('../controllers/search_product');

router.get('/search/products', searchProduct.getSearchProduct);
router.post('/search/products', searchProduct.postSearchProduct); 

module.exports = router;