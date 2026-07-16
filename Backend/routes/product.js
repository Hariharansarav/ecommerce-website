const express = require('express');
const {getProducts, getsingleProducts} = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getsingleProducts);

module.exports = router;