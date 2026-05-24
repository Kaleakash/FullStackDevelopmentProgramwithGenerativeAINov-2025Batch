const express = require("express");

const app = express();

// set view engine
app.set("view engine", "ejs");

app.get("/", (request, response) => {

    let message = "Welcome to Express with EJS View Engine"

    response.render("index", { message });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});