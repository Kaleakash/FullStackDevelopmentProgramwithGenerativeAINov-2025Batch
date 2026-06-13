let bcryptjs = require("bcryptjs");
let originalPassword = "abc@123";


async function convertHashPassword(password) {
    let salt = await bcryptjs.genSalt(10);
    let hashPassword = await bcryptjs.hash(password,salt);
    return hashPassword;
}

async function compareHashPassword(originalPassword,hashPassword){
    let result = await bcryptjs.compare(originalPassword,hashPassword);
    return result;
}
async function passwordFunctionality(){

let hashFormatPassword = await convertHashPassword(originalPassword);
console.log(originalPassword);
console.log(hashFormatPassword);
//hashFormatPassword = hashFormatPassword+"aa123";
let matchPassword = await compareHashPassword(originalPassword,hashFormatPassword);
if(matchPassword){
    console.log("password is correct")
}else {
    console.log("password is wrong")
}
}

passwordFunctionality();