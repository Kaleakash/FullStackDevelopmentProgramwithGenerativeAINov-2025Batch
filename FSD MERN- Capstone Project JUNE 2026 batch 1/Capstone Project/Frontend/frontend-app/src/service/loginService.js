import axios from "axios";
let LOGIN_URL="http://localhost:5000/api/logins";
export let signIn = async(login)=>{

    try{
    let result = await axios.post(`${LOGIN_URL}/signIn`,login);
    return result.data;        
    }catch(error){
        console.log(error.message);
        return error;
    }
}
export let signUp = async(login)=>{
   
     try{
    let result = await axios.post(`${LOGIN_URL}/signUp`,login);
    return result.data;        
    }catch(error){
        console.log(error.message);
        return error;
    }
}