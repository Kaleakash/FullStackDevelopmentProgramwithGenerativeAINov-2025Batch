
// load use defined module 
let obj1 = require("./abc.js");
let hsbc = require("./hsbc_client.js");
let sbi = require("./sbi_client.js");
obj1.display1();
obj1.displayInfo();
hsbc.withdraw(1234567890,5000);
sbi.withdraw(1234567890,2000);