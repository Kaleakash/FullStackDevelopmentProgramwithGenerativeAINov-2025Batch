let names = ["Ravi","raj","Ajay","Vijay","Suresh","Mahesh"];
    console.log("Before Sort");
    console.log(names);
names.sort((s1,s2)=>s1.toLowerCase().localeCompare(s2.toLowerCase())); // sort by ascending order
    console.log("After Sort");
    console.log(names);
names.sort((s1,s2)=> {
    console.log(`s1: ${s1} s2: ${s2}`); 
    return s2.toLowerCase().localeCompare(s1.toLowerCase())}        // 2 names asci code. 
); // sort by descending order
    console.log("After Sort - Descending");
    console.log(names);

let name1 = "Steven";
let name2 = "Steven";
let name3 = "Akash";
console.log(name1.localeCompare(name2));
console.log(name1.localeCompare(name3)); 
console.log(name3.localeCompare(name1));