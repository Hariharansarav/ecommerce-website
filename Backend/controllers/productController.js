const productModel = require('../models/productModels');

//Get products API - /api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await productModel.find({});
    res.json({
        success: true,
        products

    });
    
}

//Get products API - /api/v1/products/:id
exports.getsingleProducts = async (req, res, next) => {

    try {
           const product = await productModel.findById(req.params.id);
    res.json({ 
        product
    });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })

    }

 
    
}


