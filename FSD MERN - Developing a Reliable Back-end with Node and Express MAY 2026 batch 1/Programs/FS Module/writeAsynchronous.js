let fs = require('fs');
let data = "Store Data in a file asynchronously using writeFile() method";

fs.writeFile('output.txt', data, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("Data written to file successfully");
    }
});

console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")