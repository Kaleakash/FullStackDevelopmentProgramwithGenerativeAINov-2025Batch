let fs = require('fs');
console.log("module loaded successfully");
let data = "This is a test data to write in the file";
fs.writeFileSync("test.txt", data);
console.log("data written successfully");