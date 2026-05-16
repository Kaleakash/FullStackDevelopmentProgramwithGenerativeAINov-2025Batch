let fs = require('fs');
let rawData = fs.readFileSync('employee.json');
console.log("Raw JSON data read from employee.json:");
console.log(rawData)
let empStringFormat = rawData.toString();
console.log("JSON data as string:");
console.log(empStringFormat);
console.log(empStringFormat.name); // This will be undefined because empStringFormat is a string, not an object 
// converting JSON string back to JavaScript object
let empObjectFormat = JSON.parse(empStringFormat);
console.log("Name is "+empObjectFormat.name);
console.log("Age is "+empObjectFormat.age);
console.log("Department is "+empObjectFormat.department);
