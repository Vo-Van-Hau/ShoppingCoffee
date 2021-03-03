const express = require('express');
const router = express.Router();

const handleProducts = require('../controllers/product_list');

router.get('/api/product', handleProducts.handleProductList);

module.exports = router;