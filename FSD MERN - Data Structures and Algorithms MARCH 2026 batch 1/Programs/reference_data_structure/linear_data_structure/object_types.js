// literal style objects 
let emp1= {id:100,name:"John",age:21,isActive:true,skillSet:["Java","Python"],
    address:{city:"Bangalore",state:"Kar"}
};

console.log("id is "+emp1.id);
console.log("name is "+emp1.name);
console.log("age is "+emp1.age);
console.log("isActive is "+emp1.isActive);
console.log("Number of skillSet is "+emp1.skillSet.length)
console.log("All skillSet "+emp1.skillSet)
emp1.skillSet.forEach(skill=>console.log(skill))
console.log("City is "+emp1.address.city)
console.log("State is "+emp1.address.state)

// object with array 
let employees = [
  {
    id: 100,
    name: "John",
    age: 21,
    isActive: true,
    skillSet: ["Java", "Python"],
    address: { city: "Bangalore", state: "Kar" }
  },
  {
    id: 101,
    name: "Alice",
    age: 25,
    isActive: false,
    skillSet: ["JavaScript", "React"],
    address: { city: "Hyderabad", state: "Telangana" }
  },
  {
    id: 102,
    name: "Bob",
    age: 28,
    isActive: true,
    skillSet: ["C++", "Python"],
    address: { city: "Chennai", state: "TN" }
  },
  {
    id: 103,
    name: "David",
    age: 30,
    isActive: true,
    skillSet: ["Java", "Spring Boot"],
    address: { city: "Pune", state: "MH" }
  },
  {
    id: 104,
    name: "Emma",
    age: 22,
    isActive: false,
    skillSet: ["HTML", "CSS", "JavaScript"],
    address: { city: "Delhi", state: "Delhi" }
  },
  {
    id: 105,
    name: "Sophia",
    age: 27,
    isActive: true,
    skillSet: ["Angular", "TypeScript"],
    address: { city: "Mumbai", state: "MH" }
  },
  {
    id: 106,
    name: "Liam",
    age: 24,
    isActive: true,
    skillSet: ["Node.js", "Express"],
    address: { city: "Kolkata", state: "WB" }
  },
  {
    id: 107,
    name: "Noah",
    age: 29,
    isActive: false,
    skillSet: ["Go", "Docker"],
    address: { city: "Ahmedabad", state: "Guj" }
  },
  {
    id: 108,
    name: "Olivia",
    age: 23,
    isActive: true,
    skillSet: ["Python", "Django"],
    address: { city: "Jaipur", state: "Raj" }
  },
  {
    id: 109,
    name: "William",
    age: 31,
    isActive: true,
    skillSet: ["AWS", "DevOps"],
    address: { city: "Lucknow", state: "UP" }
  }
];
console.log("object array functionality")
console.log("Number of employees are "+employees.length)
employees.forEach(emp=>console.log(emp))
employees.forEach(emp=>console.log("Name "+emp.name))
// search particular employee using id 
let found = employees.find(emp=>emp.id==1001);  // one object 
if(found==undefined){
    console.log("not present")
}else {
    console.log("record present")
}

let empIndexPosition = employees.findIndex(emp=>emp.id==101);   // return number 
if(empIndexPosition<0){
    console.log("not present")
}else {
    console.log("record present with index position "+empIndexPosition)
}
// return type is new array with condition true 
let activeEmployees = employees.filter(emp=>emp.isActive==true);    // return array object. 
console.log("Number of employees are active "+activeEmployees.length) 
let allSkills = employees.flatMap(emp => emp.skillSet); // one to many
console.log(allSkills);
let names = employees.map(emp=>emp.name);       // one to one 
console.log(names);