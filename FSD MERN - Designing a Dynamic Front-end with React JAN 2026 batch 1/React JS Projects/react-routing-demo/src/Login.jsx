import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginDbDetails from "./loginDb";



function Login() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [msg,setMessage]=useState("")

let navigate = useNavigate();

let checkLoginDetails = (event)=> {
    event.preventDefault();
    //console.log(emailId+" "+password)
    // checking emailId and password hardcoding 
    // in real time we need to pass this pass teh backend technologies using get or post 
    // generally post base upon result i
    // if(emailId==="admin@gmail.com" && password==="admin@123"){
    //     //alert("successfully login   ")
    //     setMessage("Successfully login")
    //     navigate("/home")
    // }else {
    //     //alert("failure try once again")
    //     setMessage("invalid emailId or password")
    // }   

    // check details from in memory db. 
    //console.log(loginDbDetails)
    //console.log(emailId+" "+password)
    let result = loginDbDetails.find(ll=>ll.emailId===emailId && ll.password===password)
    //console.log(result)
    if(result!==undefined){
        sessionStorage.setItem("user",emailId)  // set emailId in session storage. 
        navigate("/home")
    }else {
        setMessage("invalid emailId or password")
    }
    setEmailId("")
    setPassword("")
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h4>Login Page</h4>
            <form onSubmit={checkLoginDetails}>
                <input type="email"
                name="emailId"
                value={emailId}
                placeholder="Enter the EmailId"
                onChange={(event)=>setEmailId(event.target.value)}/><br/>
                <input type="password"
                name="password"
                value={password}
                placeholder="Enter the Password"
                onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="SignIn"/>
            </form>
        </div>
    )
}

export default Login;