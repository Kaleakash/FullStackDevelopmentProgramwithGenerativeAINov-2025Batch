let http = require("http");
let url = require("url");
let fs = require("fs");
const PORT = 3000;
let server = http.createServer((request,response)=> {

    let urlRef = url.parse(request.url,true);

    if(urlRef.pathname=="/login"){
        let loginPage = fs.readFileSync("login.html");
        //console.log(loginPage.toString())
        response.write(loginPage);
    }else if (urlRef.pathname=="/aboutUs") {
        let aboutUsPage = fs.readFileSync("aboutUs.html");
        response.write(aboutUsPage);
    }else if (urlRef.pathname=="/contactUs") {
        let contactUsPage = fs.readFileSync("contactUs.html");
        response.write(contactUsPage);
    }else if (urlRef.pathname=="/checkLogin") {
       
        let login = urlRef.query;
        let emailId = login.emailId;
        let password = login.password;
        if(emailId=="raj@gmail.com" && password=="raj@123"){
            response.write("successfully login");
        }else {
            response.write("Failure try once again")
        }
        console.log(login)
    }else {
        let indexPage = fs.readFileSync("index.html");
        response.write(indexPage);
    }

    response.end();

});


server.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));