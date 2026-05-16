let fs = require('fs');

fs.readFile('output1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else {
        console.log("Data read from file successfully");
        console.log("Data: ", data);
    }
});

console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")