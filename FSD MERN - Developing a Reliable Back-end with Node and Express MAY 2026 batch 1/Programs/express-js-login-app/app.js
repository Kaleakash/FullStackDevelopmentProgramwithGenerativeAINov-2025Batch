let express = require("express")
let app = express();
// middleware 
// it use to extract form post data. 
app.use(express.urlencoded({extended:true}));
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
// http://localhost:5000/login get method 

app.get("/checkLogin",(request,response)=> {
   let emailId = request.query.emailId;
   let password = request.query.password;
   if(emailId=="admin@gmail.com" && password=="admin@123"){
        response.send("Successfully login with get method")
   }else {
        response.send("Failure try once again with get method")
   }
})
// http://localhost:5000/login post method 
app.post("/checkLogin",(request,response)=> {
  let login = request.body;
  //console.log(login);
  //response.send("Post request")
  if(login.emailId=="admin@gmail.com" && login.password=="admin@123"){
        response.send("Successfully login with post method")
   }else {
        response.send("Failure try once again with post method")
   }
})
app.get("/textFile",(request,response)=> {
    response.sendFile(__dirname+"/info.txt");
})
app.get("/documentFile",(request,response)=> {
    response.sendFile(__dirname+"/info.docx");
})

app.listen(5000,()=>console.log("Server running on port number 5000"))