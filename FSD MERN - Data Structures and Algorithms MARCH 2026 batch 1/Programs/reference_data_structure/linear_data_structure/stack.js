
// top =-1
// 10, top 0, when we push 
// 20, top 1, when we push 
// top 0, 
// 100, 200, 300, 400, 500, 600,    6 size start with 0 to 5, 
// we need to create new array with old array size +1. 
// retrieve each element using loop and copy old array value to new array 
// then add new elements. 
// linked list 

// stack with array pre defined functions 
// class Stack {
//     constructor(){
//         this.stack = [];    // array implementation 
//     }
//     push(data){
//         if(this.stack.length<5){
//         this.stack.push(data);
//         console.log("Data added in Stack "+data);
//         }else {
//             console.log("Stack is full or overflow")
//         }
//     }
//     pop() {
//         if(this.isEmpty()){
//             return "Stack is empty or underflow"
//         }else {
//             let element = this.stack.pop();
//             return element;
//         }
//     }
//     isEmpty() {
//         return this.stack.length==0;
//     }
//     peek() {
//         if(this.isEmpty()){
//             return "Stack is empty or underflow"
//         }else {
//             return this.stack[this.stack.length-1]; // display top or last element 
//         }
//     }
//     size() {
//         return this.stack.length;
//     }
// }
// let ss  =new Stack();
// console.log("Pop :"+ss.pop())
// ss.push(10);
// ss.push(20);
// ss.push(30);
// ss.push(40);
// ss.push(50);
// ss.push(60);
// console.log("Pop : "+ss.pop())// it remove 50
// console.log("Pop : "+ss.pop())// it remove 40
// console.log("Peek :"+ss.peek()) // it display top most element ie 30 
// console.log("Size is "+ss.size())

// stack with array without pre defined functions 

class Stack {
    constructor(capacity = 5) {
        this.stack = new Array(capacity); // fixed size array
        this.top = -1; // initially empty
        this.capacity = capacity;
    }

    // 🔹 PUSH (Manual)
    push(data) {
        // check overflow
        if (this.top === this.capacity - 1) {
            console.log("Stack full → Resizing...");

            // create new array with +1 size
            let newCapacity = this.capacity + 1;
            let newStack = new Array(newCapacity);

            // copy old data
            for (let i = 0; i < this.capacity; i++) {
                newStack[i] = this.stack[i];
            }

            // assign new array
            this.stack = newStack;
            this.capacity = newCapacity;
        }

        // insert element
        this.top++;
        this.stack[this.top] = data;

        console.log("Data added in Stack " + data);
    }

    // 🔹 POP (Manual)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty or underflow";
        }

        let element = this.stack[this.top];
        this.top--; // just decrease pointer
        return element;
    }

    // 🔹 PEEK
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty or underflow";
        }

        return this.stack[this.top];
    }

    // 🔹 isEmpty
    isEmpty() {
        return this.top === -1;
    }

    // 🔹 SIZE
    size() {
        return this.top + 1;
    }

    // 🔹 DISPLAY (extra for understanding)
    display() {
        let result = "";
        for (let i = 0; i <= this.top; i++) {
            result += this.stack[i] + " ";
        }
        console.log("Stack: " + result);
    }
}
let ss = new Stack();

console.log("Pop: " + ss.pop());

ss.push(10); // top = 0
ss.push(20); // top = 1
ss.push(30);
ss.push(40);
ss.push(50);
ss.push(60); // triggers resizing

ss.display();

console.log("Pop: " + ss.pop()); // removes 60
console.log("Pop: " + ss.pop()); // removes 50

console.log("Peek: " + ss.peek()); // 40
console.log("Size: " + ss.size());

// browser stack example 

class Browser {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    visit(page) {
        this.top++;
        this.stack[this.top] = page;
        console.log("Visited:", page);
    }

    back() {
        if (this.top <= 0) {
            console.log("No pages to go back");
            return;
        }
        this.top--;
        console.log("Back to:", this.stack[this.top]);
    }

    current() {
        if (this.top === -1) return "No page";
        return this.stack[this.top];
    }
}

// Usage
let browser = new Browser();
browser.visit("Google");
browser.visit("YouTube");
browser.visit("ChatGPT");

browser.back(); // YouTube
browser.back(); // Google
console.log("Current:", browser.current());

// text editor with undo and re-undo example 

class TextEditor {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    write(text) {
        this.top++;
        this.stack[this.top] = text;
        console.log("Typed:", text);
    }

    undo() {
        if (this.top === -1) {
            console.log("Nothing to undo");
            return;
        }
        console.log("Undo:", this.stack[this.top]);
        this.top--;
    }

    show() {
        let result = "";
        for (let i = 0; i <= this.top; i++) {
            result += this.stack[i] + " ";
        }
        console.log("Current Text:", result);
    }
}

// Usage
let editor = new TextEditor();
editor.write("A");
editor.write("B");
editor.write("C");

editor.undo(); // removes C
editor.show(); // A B