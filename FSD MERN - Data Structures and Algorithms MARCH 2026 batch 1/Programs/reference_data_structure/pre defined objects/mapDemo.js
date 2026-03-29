const mm = new Map();
console.log(mm.size); // 0
mm.set("name", "John");
mm.set("age", 30);
mm.set(1, "one");
mm.set(2, true);

console.log(mm.get("name"));
console.log(mm.get(1));
console.log(mm.has("age"));
mm.delete("age");
console.log(mm.has("age"));
console.log(mm.size); // 2
mm.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
mm.clear();
console.log(mm.size); // 0