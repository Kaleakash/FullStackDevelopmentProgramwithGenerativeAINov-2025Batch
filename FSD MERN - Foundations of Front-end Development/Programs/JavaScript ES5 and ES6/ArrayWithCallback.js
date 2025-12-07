let num1 =[1,2,3,4,5,6,7,8,9,10];
console.log(num1)
num1.forEach(display)
function display(n){
    console.log("value is "+n)
}
console.log("----------")
// for each no return 
num1.forEach(function(n){
    console.log("Value is "+n)
})
console.log("--------")
num1.forEach(v=>console.log("value is "+v))
console.log("-----map---")
// map is callback takes each element and return same or modified element 
// return type is array 
let modifiedElementArray = num1.map(v=>v+10);
console.log(modifiedElementArray)
// filter is a callback it return only those value if condition true 
let evenArray = num1.filter(v=>v%2==0)
console.log(evenArray)
let oddArray = num1.filter(v=>v%2!=0)
console.log(oddArray)
//array with method or function chain 
// display only those element which is > 5
num1.filter(v=>v>5).forEach(n=>console.log("value is "+n))

