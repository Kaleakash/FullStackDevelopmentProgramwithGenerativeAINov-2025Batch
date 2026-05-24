let express = require("express");
let fs = require("fs");

let app = express();

app.use(express.urlencoded({extended:true}));


app.get("/",(request,response)=> {
    response.sendFile(__dirname+"/login.html");
})

app.get("/signUpPage",(request,response)=> {
    response.sendFile(__dirname+"/signUp.html");
})

app.post("/signUp",(request,response)=> {
    let login = request.body;
    let loginFs = JSON.parse(fs.readFileSync("login.json").toString());
    let loginExists = loginFs.find(ll=>ll.emailId==login.emailId);
    if(loginExists){
            response.send("Email Id must be unique")
    }else {
            loginFs.push(login);
            fs.writeFileSync("login.json",JSON.stringify(loginFs));
            response.send("Account created successfully");
    }
})



app.listen(5000,()=>console.log("Server up on port number 5000"));