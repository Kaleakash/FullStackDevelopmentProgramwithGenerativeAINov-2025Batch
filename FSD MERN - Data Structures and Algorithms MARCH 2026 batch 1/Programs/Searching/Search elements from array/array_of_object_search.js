let emp1 = {
    id: 1,
    name: "John",
    age: 30
};
let emp2 = {
    id: 2,
    name: "Jane",
    age: 25
};
let emp3 = {
    id: 3,
    name: "Doe",
    age: 28
};
let employees = [emp1, emp2, emp3];
let searchElement = 4;
let foundEmployee = employees.find(emp => emp.id === searchElement);
if (foundEmployee) {
    console.log("Employee found:", foundEmployee);
} else {
    console.log("Employee not found.");
}