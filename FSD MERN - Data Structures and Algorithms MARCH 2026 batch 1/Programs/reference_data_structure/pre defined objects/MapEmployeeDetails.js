let mapEmployees = new Map();
console.log(mapEmployees.size); // 0
mapEmployees.set(101, { name: "Alice", department: "HR" });
mapEmployees.set(102, { name: "Bob", department: "Engineering" });
mapEmployees.set(103, { name: "Charlie", department: "Marketing" });
mapEmployees.set(104, { name: "David", department: "Finance" });
if(mapEmployees.has(101)) {
    console.log("Employee with ID 101 already exists. Overwriting...");
}else {
    mapEmployees.set(101, { name: "Raj", department: "Development" }); // Duplicate key, will overwrite previous value  
}


console.log(mapEmployees)
console.log(mapEmployees.size); // 4
console.log(mapEmployees.get(101)); // { name: "Raj", department: "Development" }
console.log(mapEmployees.get(102)); // { name: "Bob", department: "Engineering" }
console.log(mapEmployees.get(105)); // undefined

console.log(mapEmployees.has(103));
console.log(mapEmployees.has(105));

mapEmployees.delete(104);
console.log(mapEmployees.has(104)); // false