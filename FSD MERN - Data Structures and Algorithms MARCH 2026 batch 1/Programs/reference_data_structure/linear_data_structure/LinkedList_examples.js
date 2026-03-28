class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;       // head is reference or pointer. Initially it is null because there is no node in the list.
        this.size = 0;          // size is 0 because there are no nodes in the list.    
    }
    append(data) {
        const newNode = new Node(data); // object created with value as 10,20
        if (this.head === null) {
            this.head = newNode;        // first node with value 10 is assigned to head
        } else {
            let current = this.head;    // current node value is 10,
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;     // new node with value 20 is assigned to next of current node with value 10
        }
        this.size++;                    // size 1,2
    }
    prepend(data) {
        const newNode = new Node(data); // object created with value as 5
        newNode.next = this.head;       // next of new node with value 5 is assigned to head which is 10
        this.head = newNode;       // head is assigned to new node with value 5
        this.size++;                    // size 3
    }
    printList(){
        let current = this.head;    // current node value is 5
        while(current !== null){
            console.log(current.data);  // 5,10,20,30
            current = current.next;     // current node value is 10,20,30,null
        }
    }
}                   // [data: 10, next: {data: 20, next: null}}]
let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.printList();