let bcryptjs = require("bcryptjs");

async function convertHashPassword(password) {
    let salt = await bcryptjs.genSalt(10);
    let hashPassword = await bcryptjs.hash(password,salt);
    return hashPassword;
}

async function compareHashPassword(originalPassword,hashPassword){
    let result = await bcryptjs.compare(originalPassword,hashPassword);
    return result;
}
module.exports={convertHashPassword,compareHashPassword}
