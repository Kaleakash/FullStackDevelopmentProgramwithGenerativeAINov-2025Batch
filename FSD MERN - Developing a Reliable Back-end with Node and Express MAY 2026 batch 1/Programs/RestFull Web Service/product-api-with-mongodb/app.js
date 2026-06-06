let express = require('express');
let app = express();
let mongoDb = require('mongodb');
// add middleware to parse JSON request bodies
app.use(express.json());
let URL = 'mongodb://localhost:27017';
let dbName ="express_db";
let db;
async function connectToDb(){
    // connect to the database
    try{
    let client = await mongoDb.MongoClient.connect(URL);
    db = client.db(dbName);
    console.log('Connected to database');
    }catch(err){
        console.error('Error connecting to database', err);
    }
}
connectToDb();
// store Product data in the database
// method post 
// data : {_id: 1, name: 'Product 1', price: 100}
app.post("/api/storeProduct", async (req, res) => {
    try {
        let productData = req.body;
        let result = await db.collection('products').insertOne(productData);
        res.status(201).json({ message: 'Product stored successfully', msg: result});
    } catch (err) {
        
        res.status(500).json({ message: 'Error storing product'+ err.message });
    }
})

// find all products 
// method get
// http://localhost:3000/api/findProducts
app.get("/api/findProducts", async (req, res) => {
    try {
        let products = await db.collection('products').find().toArray();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products' + err.message });
    }
})


// find a product by ID
// method get
// http://localhost:3000/api/findProductById/1
app.get("/api/findProductById/:pid", async (req, res) => {
    try {
        let pid = parseInt(req.params.pid);
        let product = await db.collection('products').findOne({ _id: pid });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product' + err.message });
    }
})

// update a product by ID
// method put
// http://localhost:3000/api/updateProductById/1
app.put("/api/updateProductById/:pid", async (req, res) => {
    try {
        let pid = parseInt(req.params.pid);
        let productData = req.body;
        let result = await db.collection('products').updateOne({ _id: pid }, { $set: productData });
        if (result.matchedCount === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product updated successfully' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating product' + err.message });
    }
});
// delete product using id
// method delete
// http://localhost:3000/api/deleteProductById/1
app.delete("/api/deleteProductById/:pid", async (req, res) => {
    try {
        let pid = parseInt(req.params.pid);
        let result = await db.collection('products').deleteOne({ _id: pid });
        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting product' + err.message });
    }
});

app.listen(3000,()=>console.log('Server is running on port 3000'));