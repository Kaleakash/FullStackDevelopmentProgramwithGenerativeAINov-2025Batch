const express = require("express");
const connectDB = require("./config/dbConfig");

const loginRouter = require("./router/loginRouter");
const app = express();
const loginRepository = require("./repository/loginRepository");
const passwordHashing = require("./middleware/passwordHashing");

connectDB();        // it connect database. 

// middleware for enable json post data. 
app.use(express.json());


// http://localhost:3000/api/logins/*

app.use("/api/logins",loginRouter);

// this function is use to create admin account. 
async function init() {
let loginAdmin = {"emailId":"admin@gmail.com","password":"admin@123","typeOfUser":"admin"}
let loginPresent = await loginRepository.findByEmailId(loginAdmin.emailId);
if(loginPresent){
    console.log("Admin account already present");
}else {
    loginAdmin.password = await passwordHashing.convertHashPassword(loginAdmin.password);
    loginRepository.signUp(loginAdmin);
    console.log("Account created..")
}
}
init();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});