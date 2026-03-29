let num = [4,1,7,9,3,2,6,8,5];
    console.log("Before Sort");
    console.log(num);
num.sort();
    console.log("After Sort");
    console.log(num);

console.log("sort with more than one digit");
let num1 = [11,44,1,55,6];
    console.log("Before Sort");
    console.log(num1);
//num1.sort();
// sort it takes callback function to sort the array
// it return +ve, -ve, 0
num1.sort((n1,n2)=> {
    console.log(`n1: ${n1} n2: ${n2}`);
    return n1-n2}
); // sort by ascending order
    console.log("After Sort - Ascending");
    console.log(num1);
num1.sort((n1,n2)=> {
    console.log(`n1: ${n1} n2: ${n2}`);
    return n2-n1}
); // sort by descending order
    console.log("After Sort - Descending");
    console.log(num1);