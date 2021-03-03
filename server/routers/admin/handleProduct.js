const express = require('express');
const router = express.Router();

const handleAddProduct = require('../../controllers/admin/handleProduct');

router.post('/data/admin/products/a-d-d', handleAddProduct.handleAddProduct);

router.post('/data/admin/products/up-date', handleAddProduct.handlePostUpdateProduct);
router.get('/data/admin/products/up-date', handleAddProduct.handleGetUpdateProduct);
router.put('/data/admin/products/up-date', handleAddProduct.handlePutUpdateProduct);

module.exports = router;