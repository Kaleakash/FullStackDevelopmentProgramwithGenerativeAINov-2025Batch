class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;  // pointer to previous node
        this.next = null;  // pointer to next node
    }
}
class DoubleLinkedList {
     constructor() {
        this.head = null;
        this.tail = null;  // important for fast insert at end
        this.size = 0;
    }

    append(data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;   // connect old tail → new node
        newNode.prev = this.tail;   // connect new node → old tail
        this.tail = newNode;        // update tail
    }
    this.size++;
}

prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.size++;
}
delete(data) {
    let current = this.head;

    while (current) {
        if (current.data === data) {

            // Case 1: only one node
            if (current === this.head && current === this.tail) {
                this.head = null;
                this.tail = null;
            }

            // Case 2: delete head
            else if (current === this.head) {
                this.head = current.next;
                this.head.prev = null;
            }

            // Case 3: delete tail
            else if (current === this.tail) {
                this.tail = current.prev;
                this.tail.next = null;
            }

            // Case 4: middle node
            else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }

            this.size--;
            return;
        }
        current = current.next;
    }
}

printForward() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

printBackward() {
    let current = this.tail;
    while (current) {
        console.log(current.data);
        current = current.prev;
    }
}

}

let list = new DoubleLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
list.prepend(4);
console.log("Forward:");
list.printForward();  // Output: 4, 1, 5, 10, 20, 30
console.log("Backward:");
list.printBackward(); // Output: 30, 20, 10, 5, 1, 4
list.delete(10);
console.log("After deleting 10:");
list.printForward();  // Output: 4, 1, 5, 20, 30