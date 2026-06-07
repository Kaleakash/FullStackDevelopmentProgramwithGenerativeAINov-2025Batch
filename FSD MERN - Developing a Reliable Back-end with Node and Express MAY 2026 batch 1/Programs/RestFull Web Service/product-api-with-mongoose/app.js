let express = require('express');
let mongoose = require('mongoose');

let app = express();
let URL = 'mongodb://localhost:27017/express_db1';
app.use(express.json());

async function connectToDatabase() {
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();

// creating schema 
// let productSchema = new mongoose.Schema({
//     _id:Number,
//     name:String,
//     price:Number
// });

// creating schema with validation
let productSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    pname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 1000000
    }
});
// using schema we need to create model which help to interact with db. 
// 1st parameter collection name, 2nd parameter schema name
let ProductModel = mongoose.model('products', productSchema);


// store product information 
app.post("/api/storeProduct",async (req, res) => {
    try {
        let productData = req.body;
        // data received from client is in json format, we need to convert it into model object and then save it to db.
        let product = new ProductModel(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// find all products 
app.get("/api/findProducts", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {       
         res.status(500).json({ error: error.message });
    }       
})

// find product by id
// http://localhost:3000/api/findProductById/101

app.get("/api/findProductById/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let product = await ProductModel.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update product price using _id 
// http://localhost:3000/api/updateProductPrice/101
app.put("/api/updateProductPrice/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let newPrice = req.body.price;
        let product = await ProductModel.findByIdAndUpdate(id, { price: newPrice });
        if (product) {
            res.status(200).json({ message: 'Product price updated successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// delete product by id
// http://localhost:3000/api/deleteProductById/101
app.delete("/api/deleteProductById/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let product = await ProductModel.findByIdAndDelete(id);
        if (product) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// find products by price range
// http://localhost:3000/api/findProductsByPriceRange/120000/500000
app.get("/api/findProductsByPriceRange/:minPrice/:maxPrice", async (req, res) => {
    try {
        let minPrice = parseInt(req.params.minPrice);
        let maxPrice = parseInt(req.params.maxPrice);
        let products = await ProductModel.find({ price: { $gte: minPrice, $lte: maxPrice } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }       
});

app.listen(3000, () => console.log('Server is running on port 3000'));