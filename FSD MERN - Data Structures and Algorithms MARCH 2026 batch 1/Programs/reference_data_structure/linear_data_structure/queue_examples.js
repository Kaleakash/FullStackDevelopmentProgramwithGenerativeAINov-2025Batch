// class Queue {
//     constructor() {
//         this.queue = [];
//     }
//     enqueue(data){
//         if(this.size()<5){
//             this.queue.push(data)
//             console.log("Data added in queue as "+data)
//         }else {
//             console.log("Queue is full")
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "Queue is empty";
//         }else {
//             let element = this.queue.shift();
//             return element;
//         }
//     }
//     peek() {
//         return this.isEmpty()?"Queue is empty":this.queue[0];
//     }
//     isEmpty() {
//         return this.queue.length==0;
//     }
//     size() {
//         return this.queue.length;
//     }
// }


// let queue = new Queue();
// console.log("isEmpty : "+queue.isEmpty())
// console.log(queue.dequeue())
// console.log("size : "+queue.size())
// queue.enqueue(100);
// queue.enqueue(200);
// queue.enqueue(300);
// queue.enqueue(400);
// queue.enqueue(500);
// queue.enqueue(600);
// console.log("size : "+queue.size())
// console.log("Dequeue Operation :"+queue.dequeue())
// console.log("Dequeue Operation :"+queue.dequeue())
// console.log("Dequeue Operation :"+queue.dequeue())
// console.log("size : "+queue.size())
// console.log("Peek operation : "+queue.peek())
// console.log("size : "+queue.size())
// console.log("isEmpty : "+queue.isEmpty())


// // front =0, rear = -1
// // enqueue operation 
// // queue[++rear]=100,
// // queue[++rear]=200
// // queue[++rear]=300
// // dequeue operation 
// // queue[front++]

// // 100,200,300,400  at this point rear is 3, but front is 0, 
// // once we do dequeue operation we increment front ++ 
// // front =1 


class Queue {
    constructor(capacity = 5) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = -1;
    }

    // 🔹 ENQUEUE
    enqueue(data) {
        if (this.isFull()) {
            console.log("Queue is full (Overflow)");
            return;
        }

        this.rear++;
        this.queue[this.rear] = data;

        console.log("Data added in queue as " + data);
    }

    // 🔹 DEQUEUE
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty (Underflow)";
        }

        let element = this.queue[this.front];
        this.front++; // move front

        return element;
    }

    // 🔹 PEEK
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        return this.queue[this.front];
    }

    // 🔹 isEmpty
    isEmpty() {
        return this.front > this.rear;
    }

    // 🔹 isFull
    isFull() {
        return this.rear === this.capacity - 1;
    }

    // 🔹 SIZE
    size() {
        return this.rear - this.front + 1;
    }

    // 🔹 DISPLAY
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = "";
        for (let i = this.front; i <= this.rear; i++) {
            result += this.queue[i] + " ";
        }
        console.log("Queue: " + result);
    }
}

let queue = new Queue(3);
console.log("Dequeue operation : "+queue.dequeue())
console.log("size is : "+queue.size())
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
console.log("size is : "+queue.size())
console.log("Dequeue operation : "+queue.dequeue())
console.log("size is : "+queue.size())


class CustomerSupportQueue {
    constructor(capacity = 5) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = -1;
    }

    // 🔹 Add customer ticket
    raiseTicket(customerName) {
        if (this.isFull()) {
            console.log("Support queue is full. Please wait...");
            return;
        }

        this.rear++;
        this.queue[this.rear] = customerName;

        console.log(customerName + " added to support queue");
    }

    // 🔹 Serve customer
    resolveTicket() {
        if (this.isEmpty()) {
            console.log("No customers in queue");
            return;
        }

        let customer = this.queue[this.front];
        this.front++;

        console.log("Resolving issue for: " + customer);
    }

    // 🔹 View next customer
    nextCustomer() {
        if (this.isEmpty()) {
            return "No customers waiting";
        }

        return this.queue[this.front];
    }

    // 🔹 Helpers
    isEmpty() {
        return this.front > this.rear;
    }

    isFull() {
        return this.rear === this.capacity - 1;
    }

    size() {
        return this.rear - this.front + 1;
    }

    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = "";
        for (let i = this.front; i <= this.rear; i++) {
            result += this.queue[i] + " → ";
        }
        console.log("Queue:", result);
    }
}

let support = new CustomerSupportQueue(5);

// Customers raise tickets
support.raiseTicket("John");
support.raiseTicket("Alice");
support.raiseTicket("Bob");
support.raiseTicket("David");

support.displayQueue();

// Agent resolves tickets
support.resolveTicket(); // John
support.resolveTicket(); // Alice

support.displayQueue();

// Next customer
console.log("Next:", support.nextCustomer()); // Bob

console.log("Total waiting:", support.size());

class CircularQueue {
    constructor(capacity = 5) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
    }

    // 🔹 ENQUEUE (Add customer)
    enqueue(data) {
        if (this.isFull()) {
            console.log("Queue is full (Overflow)");
            return;
        }

        // first element
        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = data;

        console.log(data + " added to support queue");
    }

    // 🔹 DEQUEUE (Serve customer)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty (Underflow)");
            return;
        }

        let customer = this.queue[this.front];

        // only one element
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }

        console.log("Resolving issue for: " + customer);
        return customer;
    }

    // 🔹 PEEK
    peek() {
        if (this.isEmpty()) {
            return "No customers waiting";
        }
        return this.queue[this.front];
    }

    // 🔹 isEmpty
    isEmpty() {
        return this.front === -1;
    }

    // 🔹 isFull
    isFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }

    // 🔹 SIZE
    size() {
        if (this.isEmpty()) return 0;
        if (this.rear >= this.front) {
            return this.rear - this.front + 1;
        } else {
            return this.capacity - this.front + this.rear + 1;
        }
    }

    // 🔹 DISPLAY
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let i = this.front;
        let result = "";

        while (true) {
            result += this.queue[i] + " → ";
            if (i === this.rear) break;
            i = (i + 1) % this.capacity;
        }

        console.log("Queue:", result);
    }
}

let support2 = new CircularQueue(5);

// Customers arrive
support2.enqueue("John");
support2.enqueue("Alice");
support2.enqueue("Bob");
support2.enqueue("David");
support2.enqueue("Emma");

support2.display();

// Queue full now
support2.enqueue("Mike"); // ❌ Overflow

// Serve customers
support2.dequeue(); // John
support2.dequeue(); // Alice

support2.display();

// New customers (reuse space!)
support2.enqueue("Sophia");
support2.enqueue("Liam");

support2.display();

console.log("Next customer:", support2.peek());
console.log("Total waiting:", support2.size());

class PriorityQueue {
    constructor(capacity = 5) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.sizeVal = 0;
    }

    // 🔹 ENQUEUE (Insert based on priority)
    enqueue(name, priority) {
        if (this.sizeVal === this.capacity) {
            console.log("Queue is full (Overflow)");
            return;
        }

        let i = this.sizeVal - 1;

        // shift elements to maintain priority order
        while (i >= 0 && this.queue[i].priority > priority) {
            this.queue[i + 1] = this.queue[i];
            i--;
        }

        // insert new element
        this.queue[i + 1] = { name, priority };
        this.sizeVal++;

        console.log(name + " added with priority " + priority);
    }

    // 🔹 DEQUEUE (Remove highest priority)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        let element = this.queue[0];

        // shift left manually
        for (let i = 1; i < this.sizeVal; i++) {
            this.queue[i - 1] = this.queue[i];
        }

        this.sizeVal--;
        console.log("Serving: " + element.name);
        return element;
    }

    // 🔹 PEEK
    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.queue[0];
    }

    // 🔹 HELPERS
    isEmpty() {
        return this.sizeVal === 0;
    }

    size() {
        return this.sizeVal;
    }

    // 🔹 DISPLAY
    display() {
        let result = "";
        for (let i = 0; i < this.sizeVal; i++) {
            result += this.queue[i].name + "(" + this.queue[i].priority + ") → ";
        }
        console.log("Queue:", result);
    }
}

let support1 = new PriorityQueue(5);

// Customers with priorities
support1.enqueue("John", 3);   // normal
support1.enqueue("Alice", 2);  // medium
support1.enqueue("Bob", 1);    // VIP
support1.enqueue("David", 3);
support1.enqueue("Emma", 2);

support1.display();

// Queue full
support1.enqueue("VIP-Mike", 1); // ❌ Overflow

// Serve customers (based on priority)
support1.dequeue(); // Bob (VIP)
support1.dequeue(); // Alice
support1.dequeue(); // Emma

support1.display();

console.log("Next:", support1.peek().name);
console.log("Size:", support1.size());