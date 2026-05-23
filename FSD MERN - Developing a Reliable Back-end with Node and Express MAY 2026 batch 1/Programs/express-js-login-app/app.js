let express = require("express")
let app = express();

// http://localhost:5000

app.get("/",(request,response)=> {
   // response.send("Welcome to Node with Express JS")
   //response.sendFile("index.html");   // error 
   //response.sendFile("D:/Desktop/Full Stack Development Program with Generative AI Nov - 2025 Batch/FSD MERN - Developing a Reliable Back-end with Node and Express MAY 2026 batch 1/Programs/express-js-login-app/index.html")
    //response.send(__dirname); // it provide current directory path. 
    response.sendFile(__dirname+"/index.html")
})


app.get("/login",(request,response)=> {
    response.sendFile(__dirname+"/login.html")
})



app.listen(5000,()=>console.log("Server running on port number 5000"))