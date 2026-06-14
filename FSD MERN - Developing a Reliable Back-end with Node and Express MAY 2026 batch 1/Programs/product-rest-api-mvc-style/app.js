const express = require("express");
const connectDB = require("./config/dbConfig");
const productRouter = require("./router/productRouter")
const loginRouter = require("./router/loginRouter");
const app = express();

connectDB();        // it connect database. 

// middleware for enable json post data. 
app.use(express.json());

// adding custom middleware 
// http://localhost:3000/api/products/*

app.use("/api/products", productRouter);

// http://localhost:3000/api/logins/*

app.use("/api/logins",loginRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});