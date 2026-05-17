let obj = require("readline");
// we need to provide the input and output streams to create the interface
let rl = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Please enter your id:",(id)=> {
    

    rl.question("Please enter your name:",(name)=> {
    

        rl.question("Please enter your age:",(age)=> {
        console.log("Your id is:",id);
        console.log("Your name is:",name);
        console.log("Your age is:",age);
        rl.close();
    });

    });

});

