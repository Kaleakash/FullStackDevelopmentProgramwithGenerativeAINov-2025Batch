let http = require("http");
let url = require("url");
let fs = require("fs");
let queryString = require("querystring");
const PORT = 3000;
let server = http.createServer((request,response)=> {

    let urlRef = url.parse(request.url,true);

    if(urlRef.pathname=="/login"){
        let loginPage = fs.readFileSync("login.html");
        //console.log(loginPage.toString())
        response.write(loginPage);
         response.end();
    }else if (urlRef.pathname=="/aboutUs") {
        let aboutUsPage = fs.readFileSync("aboutUs.html");
        response.write(aboutUsPage);
         response.end();
    }else if (urlRef.pathname=="/contactUs") {
        let contactUsPage = fs.readFileSync("contactUs.html");
        response.write(contactUsPage);
         response.end();
    }else if (urlRef.pathname=="/checkLogin") {
       
        if(request.method=="GET"){
        let login = urlRef.query;
        let emailId = login.emailId;
        let password = login.password;
        if(emailId=="raj@gmail.com" && password=="raj@123"){
            response.write("successfully login");
        }else {
            response.write("Failure try once again")
        }
         response.end();
        }else if(request.method=="POST"){
            //response.write("Post Form Request")
            let bodyData = "";
            
            request.on("data",(formData)=> {
                bodyData = bodyData+formData.toString();
                //console.log(bodyData);
            })

            request.on("end",()=> {
                console.log(bodyData);  // data consider as string 
                let login = queryString.parse(bodyData);    // convert string format data in object format. 
                let emailId = login.emailId;
                let password = login.password;
                if(emailId=="raj@gmail.com" && password=="raj@123"){
                response.write("successfully login");
                 response.end();
                }else {
                response.write("Failure try once again")
                 response.end();
                }
            })

        }
       

    }else {
        let indexPage = fs.readFileSync("index.html");
        response.write(indexPage);
    }
});


server.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));