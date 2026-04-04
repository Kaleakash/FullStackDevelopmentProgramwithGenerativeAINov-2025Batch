let num = [8,3,5,2];
console.log("Before Sort")
console.log(num)
function merge(left, right) {
    let result = [];        // it will hold the sorted array
    let i = 0;
    let j = 0;
    console.log("Merging: " + left + " and " + right);
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            console.log("left array "+left[i]+" is smaller than right array "+right[j]);        
            console.log("Pushing left array element: " + left[i]);
            i++;
        } else {
            result.push(right[j]);
            console.log("right array "+right[j]+" is smaller than left array "+left[i]);
            console.log("Pushing right array element: " + right[j]);
            j++;
        }
    }
    console.log("Merged: " + result);
    return result.concat(left.slice(i)).concat(right.slice(j));
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }   
    let mid = Math.floor(arr.length / 2);
    console.log("Mid: " + mid);
    let left = mergeSort(arr.slice(0, mid));    // Recursively sort the left half
    console.log("Left: " + left);
    let right = mergeSort(arr.slice(mid));      // Recursively sort the right half
    console.log("Right: " + right);
    return merge(left, right);
}
let sortedNum = mergeSort(num);
console.log("After Sort")
console.log(sortedNum)