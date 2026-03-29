let weakMap = new WeakMap();
let obj = { name: 'John' };
weakMap.set(obj, 'This is a weak map value');
console.log(weakMap.get(obj)); // This is a weak map value
obj = null; // Remove the reference to the object
// At this point, the object is eligible for garbage collection, and the weak map entry will be removed automatically. 
// However, we cannot directly check if the entry has been removed since weak maps do not provide 
// a way to inspect their contents.
console.log(weakMap.get(obj)); // undefined, since obj is now null and the weak map entry has been removed.
// weakMap.set("key", "value"); // This will throw an error because keys in a WeakMap must be objects.
weakMap.set({}, "value"); // This will throw an error because keys in a WeakMap must be objects.