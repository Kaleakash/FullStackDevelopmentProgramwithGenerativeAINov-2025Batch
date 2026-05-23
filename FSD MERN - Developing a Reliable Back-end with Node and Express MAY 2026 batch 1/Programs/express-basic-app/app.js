let express = require("express");
let app = express();    // created reference of express module 

// http://localhsot:3000/

app.get("/",(request,response)=> {
    response.setHeader("Content-Type","text/html");
    response.write("<h2>Index Page</h2>")
    response.write("<p>Welcome to Express JS Module</p>")
    response.end();
})

// http://localhsot:3000/aboutUs

app.get("/aboutUs",(request,response)=> {
    response.send("Welcome to About Us Page");
})
// http://localhsot:3000/contactUs

app.get("/contactUs",(request,response)=> {
    response.send("Welcome to Contact us Page");
})
// http://localhsot:3000/login

app.get("/login",(request,response)=> {
    response.send("Welcome to Login Page");
})



app.listen(3000,()=>console.log(`Server running on port number 3000`));