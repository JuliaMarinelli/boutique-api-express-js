const { forEach } = require('async');
const express  = require('express');
const { type } = require('os');
const router   = express.Router();
var path       = require('path');
var products   = require('../services/product.service.js');

router.get('/', index);
router.get('/products', viewProducts);
router.post('/product/*', viewProduct);
router.get('/add-product', viewAddProductForm);
router.post('/add-product', addProduct);
router.get('/remove-product', viewRemoveProductForm);
router.delete('/remove-product/*', removeProduct);
router.post('/update-product/*', viewUpdateProductForm);
router.put('/update-product', updateProduct);

function index(req, res, next){
    res.status(200)
}

function viewProducts(req, res, next){
    res.status(200).json(products.getProducts)
}

function viewProduct(req, res, next){
    let prop = req.params[0];
    if(!prop[0]){
        res.status(500)
    }

    let product = products.getProduct(prop)

    res.status(200).json(product)
}


function viewAddProductForm(req, res, next){
    res.status(200)
}

function addProduct(req, res){

    let formResp = req.body;
    let product = {
        name : formResp.name,
        quantity : formResp.quantity,
        img : formResp.img_url,
        date : formResp.date,
        livraison : typeof(formResp.livraison)!=='undefined',
        categorie : formResp.categorie,
        prix : formResp.prix
    }

    let error = false;
    for (const [key, value] of Object.entries(product)) {
        if(value===""){
            error = true;
        }
    }
    
    if(error){
        res.status(500)
    } else {
        products.saveProduct(product)
        res.status(200)
    }
    
}

function viewRemoveProductForm(req, res, next){
    res.status(200)
}

function removeProduct(req,res,next){
    
    let prop = req.params[0];

    if(!prop[0]){
        res.status(500)
        
    } else {
        let product = products.getProduct(prop)
        
        products.deleteProduct(product.id)
        res.status(200).json(product)
    }
}

function viewUpdateProductForm(req, res, next){
    let prop = req.params[0];
    if(!prop[0]){
        res.status(500)
    }

    let product = products.getProduct(prop)

    res.status(200).json(product)
}

function updateProduct(req, res, next){
    let product = req.query['product']
    console.log(product)
    if(product){
        let productJSON = JSON.parse(product)
        res.status(200).json(productJSON)
        res.send(JSON.stringify(productJSON))
    } else {
        res.status(500)
    }
}

function getCategories(){
    var array = products.getProducts
    var categories = []
    array.forEach(product => {
        if(categories.indexOf(product.categorie) === -1){
            categories.push(product.categorie); a
        }
    });
    return categories
}

function getProductsByCategories(){
    let allProducts = products.getProducts
    let productsByCategories = []
    allProducts.forEach(product => {
        let categorie = product.categorie;

        if(typeof(productsByCategories[categorie]) === 'undefined')
            productsByCategories[categorie] = [product]
        else
            productsByCategories[categorie].push(product)
    });

    return productsByCategories;
}
module.exports = router;