let fs = require("fs");
let emp = {
    name: "John Doe",
    age: 30,
    department: "Engineering"
};
let emp1 = {
    name: "Jane Smith",
    age: 25,
    department: "Marketing"
};
// converting JavaScript object to JSON string
let empJson = JSON.stringify(emp);
fs.writeFileSync("employee.json", empJson);
//fs.appendFileSync("employee.json", empJson + "\n"); // Appending the JSON string to the file with a newline
console.log("Employee data has been written to employee.json");