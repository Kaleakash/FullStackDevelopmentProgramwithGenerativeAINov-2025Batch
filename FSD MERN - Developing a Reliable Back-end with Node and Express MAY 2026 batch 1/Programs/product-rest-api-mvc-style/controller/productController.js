const service = require("../service/productService");
let create   =  async(req, res) =>{
        try {
            let product = req.body;
            const productData = await service.createProduct(product);

            res.status(201).json(productData);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
let findAll = async(req, res) =>{
        try {
            const products = await service.getAllProducts();

            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

let getById = async(req, res)=> {
        try {
            const product = await service.getProductById(
                req.params.id
            );

            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

let update  =   async(req, res)=> {
        try {
            const product = await service.updateProduct(
                req.params.id,
                req.body
            );

            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

let deleteById  = async (req, res)=> {
        try {
            await service.deleteProduct(req.params.id);

            res.status(200).json({
                message: "Product deleted successfully"
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }


module.exports = {create,findAll,getById,update,deleteById}