const Login = require("../models/loginModel");
let signUp   =  async (login) =>{
        return await Login.create(login);
}
let findByEmailId   =  async (emailId) =>{
        return await Login.findOne({emailId});
    }

module.exports = {signUp,findByEmailId}