let http = require("http");
let url = require("url");


let server = http.createServer((request,response)=> {

    let urlRef = url.parse(request.url,true);
    response.writeHead(200,{"Content-Type":"text/html"})
    if(urlRef.pathname=="/about_us"){
       // response.end("About Us Page");
    response.write("<h2>About Us Page</h2>");
    response.write("<p>About Us Page Description</p>")
    }else if(urlRef.pathname=="/contact_us"){
        //response.end("Contact Us Page")
    response.write("<h2>Contact Us Page</h2>");
    response.write("<p>Contact Us Page Description</p>")
    }else if(urlRef.pathname=="/login"){
        //response.end("Login Page")
    response.write("<h2>Login Page</h2>");
    response.write("<p>Login Page Description</p>")

    }else {
        //response.end("Home Page")
    response.write("<h2>Home Page</h2>");
    response.write("<p>Home Page Description</p>")

    }
    response.end();
})



server.listen(3000,()=>console.log("Server up on port number 3000"))

