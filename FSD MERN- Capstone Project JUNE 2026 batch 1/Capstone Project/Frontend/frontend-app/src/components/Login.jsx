import { useState } from "react";
import { signIn } from "../service/loginService";
import { useNavigate } from "react-router-dom";
function Login() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeOfUser,setTypeOfUser]=useState("");
let [msg,setMessage]=useState("")
let navigate = useNavigate();
let SignIn = async (event)=> {

    event.preventDefault();
    let login = {emailId,password,typeOfUser};
    //console.log(login);
    let result = await signIn(login);
    //console.log(result);
    if(result=="Admin Login"){
            navigate("admin-home");
    }else if(result=="Customer Login"){
            navigate("customer-home")
    }else {
        setMessage(result);
    }
    setEmailId("");
    setPassword("");
    setTypeOfUser("");
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h3>Login </h3>
            <form onSubmit={SignIn}>
                <label>EmailId</label>
                <input type="email" name="emailId" value={emailId}
                onChange={(event)=>setEmailId(event.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="password" value={password}
                onChange={(event)=>setPassword(event.target.value)}/><br/>
                <label>TypeOfUser</label>
                <select name="typeOfUser" onChange={(event)=>setTypeOfUser(event.target.value)}>
                    <option>--Select Type Of User --</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                </select>
                <br/>
                <input type="submit" value="SignIn"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default Login;