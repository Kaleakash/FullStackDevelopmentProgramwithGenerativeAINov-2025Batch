let express = require('express');
let app = express();


// adding middleware to parse the request body as json

app.use(express.json());

// array of product in JavaScript object format
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    brand: "Dell",
    price: 65000,
    stock: 25
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    price: 35000,
    stock: 40
  },
  {
    id: 3,
    name: "Wireless Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 1200,
    stock: 100
  },
  {
    id: 4,
    name: "Keyboard",
    category: "Accessories",
    brand: "HP",
    price: 1800,
    stock: 75
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    brand: "Apple",
    price: 25000,
    stock: 20
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    brand: "JBL",
    price: 4500,
    stock: 50
  },
  {
    id: 7,
    name: "Monitor",
    category: "Electronics",
    brand: "LG",
    price: 15000,
    stock: 30
  },
  {
    id: 8,
    name: "External Hard Disk",
    category: "Storage",
    brand: "Seagate",
    price: 5500,
    stock: 35
  },
  {
    id: 9,
    name: "Gaming Headset",
    category: "Audio",
    brand: "HyperX",
    price: 3200,
    stock: 45
  },
  {
    id: 10,
    name: "Printer",
    category: "Office",
    brand: "Canon",
    price: 8500,
    stock: 15
  }
];


// get all product in json format 
// http://localhost:3000/api/products
app.get("/api/products", (request,response) => {
    // json method it convert js object into json format and send to client
  response.json(products);
});

// get product by id in json format
// http://localhost:3000/api/findProductByIdUsingQueryParam?pid=1

app.get("/api/findProductByIdUsingQueryParam", (request,response) => {
    let pid = request.query.pid; // get the value of query parameter pid
    let product = products.find(p => p.id == pid); // find the product with the given id
    if(product){
        response.status(200).json(product); // send the product in json format
    }else{
        response.status(404).json({message: "Product not found"}); // send 404 status code and error message
    }
})

// get product by id in json format
// http://localhost:3000/api/findProductByIdUsingPathParam/1

app.get("/api/findProductByIdUsingPathParam/:pid", (request,response) => {
    let pid = request.params.pid; // get the value of path parameter pid
    let product = products.find(p => p.id == pid); // find the product with the given id
    if(product){
        response.status(200).json(product); // send the product in json format
    }else{
        response.status(404).json({message: "Product not found"}); // send 404 status code and error message
    }
})

// http://localhost:3000/api/findProductByStock?stock=30
app.get("/api/findProductByStock",(request,response)=> {
    let stock = request.query.stock; // get the value of query parameter stock
    // let price = request.query.price; // get the value of query parameter price
    let filteredProducts = products.filter(p => p.stock >= stock); // filter products with stock greater than or equal to the given stock
    if(filteredProducts.length > 0){
        response.status(200).json(filteredProducts); // send the filtered products in json format
    }else{
        response.status(404).json({message: "No products found with the given stock"}); // send 404 status code and error message
    }
})

// http://localhost:3000/api/findProductByPriceRange/1000/5000

app.get("/api/findProductByPriceRange/:minPrice/:maxPrice",(request,response)=> {
    let minPrice = request.params.minPrice;
    let maxPrice = request.params.maxPrice;
    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if(filteredProducts.length > 0){
        response.status(200).json(filteredProducts);
    }else{
        response.status(404).json({message: "No products found with the given price range"});
    }
});
// http://localhost:3000/api/findProductByPriceRangeQuery?minPrice=1000&maxPrice=5000

app.get("/api/findProductByPriceRangeQuery",(request,response)=> {
    let minPrice = request.query.minPrice;
    let maxPrice = request.query.maxPrice;
    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if(filteredProducts.length > 0){
        response.status(200).json(filteredProducts);
    }else{
        response.status(404).json({message: "No products found with the given price range"});
    }
});


// store the product 
// http://localhost:3000/api/storeProduct
app.post("/api/storeProduct",(request,response) => {
    let newProduct = request.body; // get the product data from the request body
   // console.log(newProduct); // print the new product data in the console
   let productExists = products.some(p => p.id == newProduct.id); // check if a product with the same id already exists
   if(productExists){
       response.status(400).json({message: "Product with the same id already exists"}); // send 400 status code and error message
   }else{
       products.push(newProduct); // add the new product to the products array
       response.status(201).json({message: "Product stored successfully"}); // send 201 status code and success message
   }
});

app.listen(3000, ()=>console.log('Server is running on port 3000'));