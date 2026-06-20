let express = require("express");
let jsonwebtoken = require("jsonwebtoken");
let app = express();
// middleware 
app.use(express.json());
let secret_key="my_key";
// in memory ie array 
let products = [
    {"pid":1,"pname":"TV","price":50000},
    {"pid":2,"pname":"Computer","price":35000}
]
let logins = [
    {"emailId":"admin@gmail.com","password":"admin@123","typeOfUser":"admin"},
    {"emailId":"raj@gmail.com","password":"raj@123","typeOfUser":"customer"},
    {"emailId":"ravi@gmail.com","password":"ravi@123","typeOfUser":"customer"}
]
//http://localhost:3000/signIn

app.post("/signIn",(request,response)=> {
    let loginData = request.body;
    let loginExists = logins.find(ll=>ll.emailId==loginData.emailId && ll.password==loginData.password);
    if(loginExists){

        const tokenValue = jsonwebtoken.sign(
            {
                emailId:loginData.emailId
            },
            secret_key,
            {
                expiresIn:"2m"
            }
        )

        response.json({"msg":"Successfully login","token":tokenValue})
    }else {
        response.json({"msg":"Failure try once again"})
    }
})

// get all products 
// http://localhost:3000/findAllProducts
app.get("/findAllProducts",(request,response)=> {
    response.json(products);
});
// store products or create new product 
// http://localhost:3000/storeProduct
app.post("/storeProduct",(request,response)=> {
    let newProduct = request.body;
    let productExists = products.find(p=>p.pid==newProduct.pid);
    if(productExists){
        response.json({"msg":"Product id must be unique"})
    }else {
        products.push(newProduct);
        response.json({"msg":"Product store successfully"})
    }
})




app.listen(3000,()=>console.log("running on port number 3000"))