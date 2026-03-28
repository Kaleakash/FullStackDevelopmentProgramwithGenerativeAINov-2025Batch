class Employee {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.subordinates = [];
    }

    addSubordinate(employee) {
        this.subordinates.push(employee);
    }
    display(depth = 0) {
        console.log(`${' '.repeat(depth * 2)}${this.name} - ${this.title}`);
        for (let subordinate of this.subordinates) {
            subordinate.display(depth + 1);
        }   
    }
}

let ceo = new Employee("Alice", "CEO");
let manager1 = new Employee("Bob", "Manager");
let manager2 = new Employee("Charlie", "Manager");
let employee1 = new Employee("David", "Developer");
let employee2 = new Employee("Eve", "Developer");
let employee3 = new Employee("Frank", "Developer");
let employee4 = new Employee("Grace", "Developer");
ceo.addSubordinate(manager1);
ceo.addSubordinate(manager2);
manager1.addSubordinate(employee1);
manager2.addSubordinate(employee2);
manager2.addSubordinate(employee3);
manager2.addSubordinate(employee4);
ceo.display();