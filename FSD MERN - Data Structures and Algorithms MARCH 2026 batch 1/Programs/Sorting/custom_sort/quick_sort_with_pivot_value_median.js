let num =  [5,2,9,1,3,4,8,7,6]
console.log("Before sorting: " + num)
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let medianIndex = Math.floor(arr.length / 2);
    let pivot = arr[medianIndex];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot && i !== medianIndex) {
            left.push(arr[i]);
        } else if (arr[i] >= pivot && i !== medianIndex) {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
let sortedNum = quickSort(num);
console.log("After sorting: " + sortedNum)