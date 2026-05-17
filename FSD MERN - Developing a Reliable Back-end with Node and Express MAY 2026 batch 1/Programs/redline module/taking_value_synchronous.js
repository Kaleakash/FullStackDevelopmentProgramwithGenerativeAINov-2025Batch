let rl = require("readline-sync");
console.log("Module loaded...")
let name = rl.question("What is your name? ");
let id = rl.questionInt("What is your id? ");
let salary = rl.questionFloat("What is your salary? ");
let emailId = rl.questionEMail("What is your email id? ");
let password = rl.questionNewPassword("What is your password? ", {min: 6, max: 20, confirmMessage: "Confirm your password: "});   
console.log("your name is " + name);
console.log("your id is " + id);
console.log("your salary is " + salary);
console.log("your email id is " + emailId);
console.log("your password is " + password);