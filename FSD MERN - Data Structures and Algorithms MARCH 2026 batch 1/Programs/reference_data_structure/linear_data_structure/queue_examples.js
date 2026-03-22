class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(data){
        if(this.size()<5){
            this.queue.push(data)
            console.log("Data added in queue as "+data)
        }else {
            console.log("Queue is full")
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }else {
            let element = this.queue.shift();
            return element;
        }
    }
    peek() {
        return this.isEmpty()?"Queue is empty":this.queue[0];
    }
    isEmpty() {
        return this.queue.length==0;
    }
    size() {
        return this.queue.length;
    }
}


let queue = new Queue();
console.log("isEmpty : "+queue.isEmpty())
console.log(queue.dequeue())
console.log("size : "+queue.size())
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
queue.enqueue(500);
queue.enqueue(600);
console.log("size : "+queue.size())
console.log("Dequeue Operation :"+queue.dequeue())
console.log("Dequeue Operation :"+queue.dequeue())
console.log("Dequeue Operation :"+queue.dequeue())
console.log("size : "+queue.size())
console.log("Peek operation : "+queue.peek())
console.log("size : "+queue.size())
console.log("isEmpty : "+queue.isEmpty())


// front =0, rear = -1
// enqueue operation 
// queue[++rear]=100,
// queue[++rear]=200
// queue[++rear]=300
// dequeue operation 
// queue[front++]

// 100,200,300,400  at this point rear is 3, but front is 0, 
// once we do dequeue operation we increment front ++ 
// front =1 
