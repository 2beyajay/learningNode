const path = require('path');
const express = require('express')
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res) => {
	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
	res.render('add-product', {docTitle: 'Admin / Add Product'})
});

router.post('/add-product', (req, res) => {
	products.push({title: req.body.title});
	res.redirect('/');
})

exports.routes = router;
exports.products = products;