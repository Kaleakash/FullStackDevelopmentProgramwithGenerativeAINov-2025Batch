let fs = require("fs");
let emp = {
    name: "John Doe",
    age: 30,
    department: "Engineering"
};
// converting JavaScript object to JSON string
let empJson = JSON.stringify(emp);
fs.writeFileSync("employee.json", empJson);
console.log("Employee data has been written to employee.json");