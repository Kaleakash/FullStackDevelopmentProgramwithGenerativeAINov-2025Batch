let products = [
    {id: 101, name: "Laptop", price: 45000},
    {id: 102, name: "Mobile", price: 15000},
    {id: 103, name: "Tablet", price: 25000},
]
console.log("Before Sort");
products.forEach(p=>console.log(p));
products.sort((p1,p2)=>p1.price-p2.price); // sort by price in ascending order
console.log("After Sort by Price - Ascending");
products.forEach(p=>console.log(p));
products.sort((p1,p2)=>p2.price-p1.price); // sort by price in descending order
console.log("After Sort by Price - Descending");
products.forEach(p=>console.log(p));
console.log("Sort by Name");
products.sort((p1,p2)=>p1.name.localeCompare(p2.name));
console.log("After Sort by Name - Ascending");
products.forEach(p=>console.log(p));
products.sort((p1,p2)=>p2.name.localeCompare(p1.name));
console.log("After Sort by Name - Descending");
products.forEach(p=>console.log(p));