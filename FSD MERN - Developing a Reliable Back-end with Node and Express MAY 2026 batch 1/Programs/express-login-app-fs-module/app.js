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

app.post("/signIn",(request,response)=> {
    let login = request.body;
    let loginFs = JSON.parse(fs.readFileSync("login.json").toString());
    let result = loginFs.find(ll=>ll.emailId==login.emailId && ll.password == login.password && ll.typeOfUser==login.typeOfUser);
    if(result==undefined){
            response.send("Email Id or Password is wrong or TypeOfUser")
    }else {
            if(result.typeOfUser=="Admin"){
                    //response.sendFile(__dirname+"/adminDashboard.html")
                    let adminDashboardPage = fs.readFileSync("adminDashboard.html");
                    response.write(adminDashboardPage)  // data load from file and write in response. 
                    response.write(login.emailId);
                    response.end();
            }else {
                    //response.sendFile(__dirname+"/customerDashboard.html");
                     let customerDashboardPage = fs.readFileSync("customerDashboard.html");
                    response.write(customerDashboardPage)  // data load from file and write in response. 
                    response.write(login.emailId);
                    response.end();
            }
    }
})


app.listen(5000,()=>console.log("Server up on port number 5000"));