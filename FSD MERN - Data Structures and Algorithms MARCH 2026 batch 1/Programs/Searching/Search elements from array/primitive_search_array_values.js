let num = [3,1,4,1,5,9,2,6,5,3,5];
let search = 5;
let searchElements = num.find(element => element === search);
if (searchElements !== undefined) {
    console.log(`Element ${search} found in the array.`);   
} else {
    console.log(`Element ${search} not found in the array.`);
}
let count=0;
let searchNumberOfTimesPresent = num.filter(element => element === search).length;
if (searchNumberOfTimesPresent > 0) {
    console.log(`Element ${search} is present ${searchNumberOfTimesPresent} times in the array.`);
} else {
    console.log(`Element ${search} is not present in the array.`);
}   

let searchElementsIndexPosition = num.findIndex(element => element === search);
if (searchElementsIndexPosition !== -1) {
    console.log(`Element ${search} found at index ${searchElementsIndexPosition} in the array.`);
} else {
    console.log(`Element ${search} not found in the array.`);
}