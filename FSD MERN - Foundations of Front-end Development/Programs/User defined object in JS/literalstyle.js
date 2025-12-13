
// value can be number,string, boolean, array type , object type 
let emp1 ={id:100,name:"John",age:21,isActive:true,tech:["Java","Python"],
    address:{city:"Bangalore",state:"Kar"}}
console.log("id is "+emp1.id)
console.log("name is "+emp1.name)
console.log("age is "+emp1.age)
console.log("isActive is "+emp1.isActive)
console.log("tech "+emp1.tech)// as string format 
emp1.tech.forEach(tech=>console.log(tech))
console.log("city is "+emp1.address.city)
console.log("state is "+emp1.address.state)
// JSON : JavaScript object notation. 