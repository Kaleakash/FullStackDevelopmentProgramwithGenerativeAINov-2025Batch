let express = require("express")
let app = express();

// http://localhost:5000

app.get("/",(request,response)=> {
   // response.send("Welcome to Node with Express JS")
   //response.sendFile("index.html");   // error 
   //response.sendFile("D:/Desktop/Full Stack Development Program with Generative AI Nov - 2025 Batch/FSD MERN - Developing a Reliable Back-end with Node and Express MAY 2026 batch 1/Programs/express-js-login-app/index.html")
    //response.send(__dirname); // it provide current directory path. 
    //response.sendFile(__dirname+"/index.html")
    response.sendFile(__dirname+"/login.html");
})

// http://localhost:5000/login
// app.get("/login",(request,response)=> {
//     response.sendFile(__dirname+"/login.html")
// })

// http://localhost:5000/login

app.get("/checkLogin",(request,response)=> {
   let emailId = request.query.emailId;
   let password = request.query.password;
   if(emailId=="admin@gmail.com" && password=="admin@123"){
        response.send("Successfully login")
   }else {
        response.send("Failure try once again")
   }
})

app.get("/textFile",(request,response)=> {
    response.sendFile(__dirname+"/info.txt");
})
app.get("/documentFile",(request,response)=> {
    response.sendFile(__dirname+"/info.docx");
})

app.listen(5000,()=>console.log("Server running on port number 5000"))