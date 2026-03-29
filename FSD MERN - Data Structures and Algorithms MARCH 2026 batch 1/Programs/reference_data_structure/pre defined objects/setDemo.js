let ss = new Set();
console.log(ss);
console.log(typeof ss)
console.log("size "+ss.size)
ss.add(1);
ss.add(2);
ss.add(3);
ss.add(1);
console.log(ss)
console.log("size "+ss.size)
console.log("has 1 "+ss.has(1))
console.log("has 4 "+ss.has(4))
console.log("delete 2 "+ss.delete(2))
console.log("delete 4 "+ss.delete(4))
console.log(ss)
console.log("retrieve element one by one")
for(let item of ss){
    console.log(item)
}