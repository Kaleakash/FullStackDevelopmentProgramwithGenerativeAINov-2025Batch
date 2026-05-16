let fs = require('fs');
let emp1 = {
    name: 'John',
    age: 30,
    department: 'HR'
};
let emp2 = {
    name: 'Jane',
    age: 25,
    department: 'IT'
};
let emp3 = {
    name: 'Doe',
    age: 28,
    department: 'Finance'
};
let employees = [emp1, emp2, emp3]; 
let data = JSON.stringify(employees);
fs.writeFileSync('employees.json', data);
console.log('Employee data has been written to employees.json');