// normal function - ES5 
display1();     // we can call before declaration 
function display1() {
    console.log("normal function - display1 ")
}
display1();

// expression style function - > ES5 
//display3();         // error 
let display3 = function() {
    console.log("expression style function - display1 ")
}
display3();
// arrow function --> es6 
let display4 = ()=>console.log("Arrow function")
display4();
// addition of two number using expression style function 
let addNumber1 = function(a,b){
    var sum = a+b;
    return sum;
}
console.log("Addition of two number using expression style "+addNumber1(10,20))
// addition of two number using arrow 
// arrow function by default return value without return keyword. 
let addNumber2 = (a,b)=>a+b;
console.log("Addition of two number using arrow style "+addNumber2(10,20))
// find largest of two number using expression style 
let findLargest1 = function(a,b){
    if(a>b){
        return "1st number largest"
    }else {
        return "2nd number largest"
    }
}
console.log("largest of two number is : "+findLargest1(100,50))
// find largest of two number using arrow style 
let findLargest2 = (a,b)=>{
    if(a>b){
        return "1st number largest"
    }else {
        return "2nd number largest"
    }
}

