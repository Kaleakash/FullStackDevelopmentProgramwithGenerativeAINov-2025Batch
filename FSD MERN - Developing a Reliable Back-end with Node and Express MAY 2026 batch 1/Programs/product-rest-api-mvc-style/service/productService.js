const repository = require("../repositories/productRepository");
let createProduct =    async (product)=> {
        return await repository.storeProduct(product);
    }
let  getAllProducts  =  async ()=> {
        return await repository.findAll();
    }
let   getProductById =  async (id)=> {
        const product = await repository.findById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
let  updateProduct  = async (id, data)=> {
        const product = await repository.update(id, data);

        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
let deleteProduct =     async(id)=> {
        const product = await repository.deleteById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }


module.exports = {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}