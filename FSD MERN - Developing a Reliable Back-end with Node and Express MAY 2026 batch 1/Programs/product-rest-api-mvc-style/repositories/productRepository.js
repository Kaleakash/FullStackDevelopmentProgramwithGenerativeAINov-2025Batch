const Product = require("../models/productModel");
let storeProduct   =  async (product) =>{
        return await Product.create(product);
    }
let findAll    = async () =>{
        return await Product.find();
    }
let findById   =  async (id) =>{
        return await Product.findById(id);
    }
let update  =   async (id, product) => {
        return await Product.findByIdAndUpdate(
            id,
            product,
            { new: true }
        );
    }
let deleteById  =  async (id)=> {
        return await Product.findByIdAndDelete(id);
    }
module.exports = {storeProduct,findAll,findById,update,deleteById}