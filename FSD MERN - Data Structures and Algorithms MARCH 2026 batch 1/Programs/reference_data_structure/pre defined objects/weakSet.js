const weakSet = new WeakSet();
weakSet.add({ name: 'John' });
weakSet.add({ name: 'Jane' });
console.log(weakSet)
console.log(weakSet.has({ name: 'John' })); 
// false, because it's a different object reference
//console.log(weakSet.has({ name: 'John' }));
let obj = { name: 'Bob' };
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
//weakSet.add(100);
// TypeError: Invalid value used in weak set
//weakSet.add('Hello');
// TypeError: Invalid value used in weak set
console.log(weakSet); // undefined, WeakSet does not have a size property
obj = null; // Remove reference to the object
console.log(weakSet.has(obj)); // false, the object has been garbage collected