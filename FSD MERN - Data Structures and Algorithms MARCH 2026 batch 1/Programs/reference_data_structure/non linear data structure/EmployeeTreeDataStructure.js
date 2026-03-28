class Employee {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.subordinates = [];
    }

    addSubordinate(employee) {
        this.subordinates.push(employee);
    }

    // 🔹 Display hierarchy
    display(depth = 0) {
        console.log(`${' '.repeat(depth * 2)}${this.name} - ${this.title}`);
        for (let sub of this.subordinates) {
            sub.display(depth + 1);
        }
    }

    // 🔹 Find employee by name (DFS)
    findEmployee(name) {
        if (this.name === name) return this;

        for (let sub of this.subordinates) {
            let found = sub.findEmployee(name);
            if (found) return found;
        }
        return null;
    }

    // 🔹 Count total employees
    countEmployees() {
        let count = 1;
        for (let sub of this.subordinates) {
            count += sub.countEmployees();
        }
        return count;
    }

    // 🔹 Get all employees by title
    getByTitle(title, result = []) {
        if (this.title === title) {
            result.push(this.name);
        }

        for (let sub of this.subordinates) {
            sub.getByTitle(title, result);
        }
        return result;
    }

    // 🔹 Find manager of employee
    findManager(name) {
        for (let sub of this.subordinates) {
            if (sub.name === name) {
                return this.name;
            }
            let manager = sub.findManager(name);
            if (manager) return manager;
        }
        return null;
    }

    // 🔹 Get tree height
    getHeight() {
        if (this.subordinates.length === 0) return 1;

        let heights = this.subordinates.map(sub => sub.getHeight());
        return 1 + Math.max(...heights);
    }

    // 🔹 Remove employee
    removeEmployee(name) {
        this.subordinates = this.subordinates.filter(sub => sub.name !== name);

        for (let sub of this.subordinates) {
            sub.removeEmployee(name);
        }
    }

    // 🔹 Level order traversal (BFS)
    levelOrder() {
        let queue = [this];

        while (queue.length) {
            let current = queue.shift();
            console.log(current.name + " - " + current.title);

            for (let sub of current.subordinates) {
                queue.push(sub);
            }
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

// Display tree
ceo.display();

// Find employee
console.log("Find Eve:", ceo.findEmployee("Eve"));

// Count employees
console.log("Total Employees:", ceo.countEmployees());

// Get all developers
console.log("Developers:", ceo.getByTitle("Developer"));

// Find manager
console.log("Manager of Frank:", ceo.findManager("Frank"));

// Tree height
console.log("Tree Height:", ceo.getHeight());

// Remove employee
ceo.removeEmployee("Grace");
console.log("After Removing Grace:");
ceo.display();

// Level order traversal
console.log("Level Order:");
ceo.levelOrder();