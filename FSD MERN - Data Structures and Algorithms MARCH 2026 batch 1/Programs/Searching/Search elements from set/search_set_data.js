let ss = new Set();
ss.add(1);
ss.add(2);
ss.add(3);
console.log("2 element in set:", ss.has(2)); // true
console.log("4 element in set:", ss.has(4)); // false
ss.delete(2);
console.log("2 element in set after deletion:", ss.has(2)); // false