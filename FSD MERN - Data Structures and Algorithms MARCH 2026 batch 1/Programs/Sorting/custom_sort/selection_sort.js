let num = [5,2,9,1]
console.log("Before sorting: " + num)
for (let i = 0; i < num.length; i++) {
    
    let minIndex = i 
    for (let j = i + 1; j < num.length; j++) {
        
        if (num[j] < num[minIndex]) {
            minIndex = j
        }
    }

    if (minIndex !== i) {
        let temp = num[i]
        num[i] = num[minIndex]
        num[minIndex] = temp
    }
    
        console.log("Pass " + (i + 1) + ": " + num)
}
console.log("After sorting: " + num)