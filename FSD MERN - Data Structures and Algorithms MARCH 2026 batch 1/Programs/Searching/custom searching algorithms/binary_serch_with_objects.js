let emp1 = { id: 2, name: "Bob",age: 35 };
let emp2 = { id: 1, name: "Alice",age: 20 };
let emp3 = { id: 3, name: "Charlie",age: 25 };
let employees = [emp1, emp2, emp3];
console.log("Original array:", employees);
employees = employees.sort((a, b) => a.id - b.id); // Sort the array based on id in ascending order
console.log("Sorted array:", employees);
let targetId = 5;
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid].id === target) {
            return mid;
        }   else if (arr[mid].id < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
let result = binarySearch(employees, targetId);
if (result !== -1) {
    console.log(`Employee found at index: ${result}, Employee details:`, employees[result]);
}   else {    
    console.log("Employee not found in the array.");
}