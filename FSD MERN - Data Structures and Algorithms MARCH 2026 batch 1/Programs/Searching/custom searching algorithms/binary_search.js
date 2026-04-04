let num = [4,1,5,2,3,6,7,8,9,10];
console.log("Original array:", num);
num = num.sort((a, b) => a - b); // Sort the array in ascending order
console.log("Sorted array:", num);
let target = 5;
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
let result = binarySearch(num, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array.");
}