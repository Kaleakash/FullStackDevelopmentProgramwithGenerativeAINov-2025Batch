let num = [5,2,4,6];
console.log("Before Sort")
console.log(num)

for(let i = 1; i < num.length; i++){
    let key = num[i];
    let j = i - 1;
    while(j >= 0 && num[j] > key){
        num[j + 1] = num[j];
        j = j - 1;
    }
    console.log("Key: " + key + " J: " + j)
    console.log("Step " + i + ": " + num)
    num[j + 1] = key;
}

console.log("After Sort")
console.log(num)