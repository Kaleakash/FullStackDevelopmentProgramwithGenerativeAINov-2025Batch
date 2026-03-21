let s1 = Symbol("id");
let s2 = Symbol("id");
let s3 = Symbol("srno")
console.log(s1)
console.log(s2)
console.log(s3)
console.log(typeof(s1))
console.log(typeof(s2))
console.log(s1==s2)
console.log(s1==s3)
// let emp1 = {id:100,name:"Ravi",age:21};
// let emp2 = {id:100,name:"Ravi",age:21};
// console.log(emp1.id+" "+emp1.name+" "+emp1.age)
// console.log(emp2.id+" "+emp2.name+" "+emp2.age)
let emp1 = {name:"Ravi",age:21};
let emp2 = {name:"Ravi",age:21};
emp1[s1]=100;   // hidden property with unique 
emp2[s2]=101;   // hidden property with unique 
console.log(emp1.name+" "+emp1.age)
console.log(emp2.name+" "+emp2.age)
console.log(Object.keys(emp1))
console.log(Object.keys(emp2))
