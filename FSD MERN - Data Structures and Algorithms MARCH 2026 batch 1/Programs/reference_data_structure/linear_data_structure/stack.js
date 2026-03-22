
// top =-1
// 10, top 0, when we push 
// 20, top 1, when we push 
// top 0, 
// 100, 200, 300, 400, 500, 600,    6 size start with 0 to 5, 
// we need to create new array with old array size +1. 
// retrieve each element using loop and copy old array value to new array 
// then add new elements. 
// linked list 

class Stack {
    constructor(){
        this.stack = [];    // array implementation 
    }
    push(data){
        if(this.stack.length<5){
        this.stack.push(data);
        console.log("Data added in Stack "+data);
        }else {
            console.log("Stack is full or overflow")
        }
    }
    pop() {
        if(this.isEmpty()){
            return "Stack is empty or underflow"
        }else {
            let element = this.stack.pop();
            return element;
        }
    }
    isEmpty() {
        return this.stack.length==0;
    }
    peek() {
        if(this.isEmpty()){
            return "Stack is empty or underflow"
        }else {
            return this.stack[this.stack.length-1]; // display top or last element 
        }
    }
    size() {
        return this.stack.length;
    }
}
let ss  =new Stack();
console.log("Pop :"+ss.pop())
ss.push(10);
ss.push(20);
ss.push(30);
ss.push(40);
ss.push(50);
ss.push(60);
console.log("Pop : "+ss.pop())// it remove 50
console.log("Pop : "+ss.pop())// it remove 40
console.log("Peek :"+ss.peek()) // it display top most element ie 30 
console.log("Size is "+ss.size())