import { useState } from "react";

function Login() {
let [email,setEmail] = useState("");
let [password,setPassword] = useState("");
let [message,setMessage]=useState("");


let handleSubmit=(e)=>{
    e.preventDefault();
    // more validation can be added here
    if(!email || !password){
        setMessage("Please fill all the fields");
        return;
    }

    // check email and password with the with hardcoded values
    if(email === "admin@gmail.com" && password === "admin123"){ 
        setMessage("Login successful");
    }else {
        setMessage("Invalid email or password");
    }

}

    return(
    <>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} name="email" 
        onChange={(e)=>setEmail(e.target.value)}/><br/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} name="password" 
        onChange={(e)=>setPassword(e.target.value)}/><br/>

        <button type="submit">Login</button>
    </form>
    {message}
    </>
    )
}

export default Login;