const visitor = new Set();

function addVisitor(name){
    if(visitor.has(name)){
        console.log(name+" already visited")
    }else {
        visitor.add(name);
        console.log(name+" added to visitor list")
    }
}
addVisitor("Alice@gmail.com");
addVisitor("Bob@gmail.com");
addVisitor("Alice@gmail.com");
console.log("Current visitors: "+[...visitor]);