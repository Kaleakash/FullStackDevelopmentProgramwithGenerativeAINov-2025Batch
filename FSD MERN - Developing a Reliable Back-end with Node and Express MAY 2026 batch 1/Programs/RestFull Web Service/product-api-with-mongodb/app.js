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

app.listen(3000,()=>console.log('Server is running on port 3000'));