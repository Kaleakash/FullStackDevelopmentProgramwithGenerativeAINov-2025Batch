const repository = require("../repositories/loginRepository");
const passwordHashing = require("../middleware/passwordHashing");

let signUp =    async (login)=> {
    try{
        let loginFromDb = await repository.findByEmailId(login.emailId);
        if(loginFromDb){
            return "EmailId must be unique"
        }else {
            login.password = await passwordHashing.convertHashPassword(login.password);
            return await repository.signUp(login)
        }
        
    }catch(error){
        return error;
    }
}

let  signIn =  async (login)=> {
        let loginFromDb = await repository.findByEmailId(login.emailId);
        
        if(loginFromDb){
        let passwordMatch = await passwordHashing.compareHashPassword(login.password,loginFromDb.password)
                if(passwordMatch){
                    if(loginFromDb.typeOfUser=="admin"){
                            return "Admin Login"
                    }else {
                            return "Customer Login"
                    }
                }else {
                    return "Password is wrong"
                }
                
        }else {
            return "EmailId not present"
        }
    }



module.exports = {signUp,signIn}