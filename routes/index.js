const express = require('express');

const authRoutes = require('./auth.route');
const productRoutes = require('./product.route');

const router = express.Router();
router.use('/auth',authRoutes);

// router.use('/product', productRoutes);

module.exports = router;