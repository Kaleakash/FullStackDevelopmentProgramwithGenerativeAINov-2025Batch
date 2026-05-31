let emp = {id:100,name:"John",salary:50000};
console.log(emp);
console.log(emp.id);
console.log(emp.name);
console.log(emp.salary);
// help to convert string for json format not js object to json object. 
let empString = JSON.stringify(emp);// convert js object to json string
console.log(empString);
console.log(empString.id)
let empJSON = JSON.parse(empString);// convert json string to js object
console.log(empJSON);
console.log(empJSON.id);