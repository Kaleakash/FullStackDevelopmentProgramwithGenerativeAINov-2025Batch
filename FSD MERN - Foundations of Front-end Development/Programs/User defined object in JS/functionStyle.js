// this keyword is use to refer to current object 
function Employee() {
    // property 
    this.id =100;
    this.name = "Ravi";
    this.salary = 15000;    // employee property consider 
    let designation = "Tester";//local property consider 
    // behaviour 
    this.displayEmployee = function() {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
        console.log("designation "+designation)
    }
    let fun= function() {           // local function 
        console.log("private function")
    }
}
// //Employee();  it consider as normal function 
// let emp1 = new Employee();  // we create Employee object 
// // console.log("id is "+emp1.id)
// // console.log("name is "+emp1.name)
// // console.log("salary is "+emp1.salary)
// // console.log("designation is "+emp1.designation)
// emp1.displayEmployee();
// //emp1.fun();

// object creation using parameter 

function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.displayEmployeeInfo = function() {
        console.log("id is "+this.id)
        console.log("name is "+this.name)
        console.log("salary is "+this.salary)
    }
    this.incrementSalary = function(newSalary){
        this.salary = newSalary;
    }
}
let emp1 = new Employee(100,"Ravi",34000);
let emp2 = new Employee(101,"John",45000)
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();
emp1.incrementSalary(emp1.salary+2000)
emp2.incrementSalary(emp2.salary+5000)
console.log("after increment")
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();