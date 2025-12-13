// class Employee {

//     constructor() {
//         console.log("object created..")
//         this.id = 100;
//         this.name = "John"
//         this.salary = 34000;
//     }
//     displayEmployeeInfo(){
//         console.log("employee class function")
//         console.log("id is "+this.id)
//         console.log("name is "+this.name)
//         console.log("salary is "+this.salary)
//     }
// }

// let emp1 = new Employee();
// emp1.displayEmployeeInfo();

// parameterized constructor 

class Employee {
    // id=0;
    // name=""
    // salary=0.0
    constructor(id,name,salary) {
        console.log("object created..")
        this.id = id
        this.name = name
        this.salary = salary
    }
    displayEmployeeInfo(){
        console.log("employee class function")
        console.log("id is "+this.id+" data type is "+typeof(this.id))
        console.log("name is "+this.name)
        console.log("salary is "+this.salary)
    }
}
let emp1 = new Employee(100,"Ravi",34000);
let emp2 = new Employee(101,"Raju",45000)
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();