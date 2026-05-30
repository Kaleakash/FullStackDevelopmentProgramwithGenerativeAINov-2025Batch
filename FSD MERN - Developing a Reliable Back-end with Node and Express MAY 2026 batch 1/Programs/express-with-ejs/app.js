const express = require("express");

const app = express();

// set view engine
app.set("view engine", "ejs");

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {

    let message = "Welcome to Express with EJS View Engine"

    response.render("index", { message });
});


app.get("/login", (request, response) => {
    let msg="";
    response.render("login",{msg});
});

// in memory login data
let logins = [
    { email: "raj@gmail.com", password: "raj123" },
    { email: "ravi@gmail.com", password: "ravi123" },
    { email: "john@gmail.com", password: "john123" }
];

// check login credentials with hardcoded values
// app.post("/checkLogin", (request, response) => {
//     const login = request.body;

//     if(login.email === "user@example.com" && login.password === "password") {
//         response.send("Login successful!");
//     } else {
//         response.send("Invalid credentials");
//     }
// });

// check login credentials from in memory data ie logins array 
app.post("/checkLogin", (request, response) => {
    const login = request.body;
    let isValidUser = logins.some(user => user.email === login.email && user.password === login.password);
    if(isValidUser) {
       response.render("dashboard", { msg: login.email });
    } else {
        response.render("login", { msg: "Invalid credentials. Please try again." });
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});