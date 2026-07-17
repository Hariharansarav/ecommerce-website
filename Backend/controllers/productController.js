const productModel = require('../models/productModels');

exports.getProducts = async (req, res, next) => {

    const products = await productModel.find({});
    res.json({
        success: true,
        products

    });
    
}

exports.getsingleProducts = (req, res, next) => {
    res.json({message: "This is the product route"});
    
}


