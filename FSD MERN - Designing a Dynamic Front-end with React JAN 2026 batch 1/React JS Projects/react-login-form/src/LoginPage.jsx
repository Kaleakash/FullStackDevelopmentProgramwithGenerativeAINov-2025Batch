import { useState } from "react";

function LoginPage() {
let [email, setEmail] = useState("");
let [password,setPassword] = useState("");
let [msg,setMsg] = useState("");
let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    //console.log(e);
    // console.log("Email:", email);
    // console.log("Password:", password);
    if(email === "admin@gmail.com" && password === "admin123") {
        setMsg("Login Successful");
    }else {
        setMsg("Login Failed");
    }
    setEmail("");
    setPassword("");
}

// let handleFormData = (e)=> {
//     let name = e.target.name;
//     let value = e.target.value;
//     if(name === "email") {

//     }
//     if(name === "password") {

//     }
// }
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}
            value={email}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}
                value={password}/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage