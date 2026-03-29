let num = [5,2,9,1,5,6,3,4,8,7]
console.log("Before sorting: " + num)
for (let i = 0; i < num.length; i++) {
    
    for (let j = 0; j < num.length - i - 1; j++) {
        
        if (num[j] > num[j + 1]) {
            let temp = num[j]
            num[j] = num[j + 1]
            num[j + 1] = temp
        }
       
    }
     console.log("Pass " + (i + 1) + ": " + num)
}
console.log("After sorting: " + num)