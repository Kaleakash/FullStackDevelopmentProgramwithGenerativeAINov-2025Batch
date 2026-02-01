import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import MyContext from "./MyContext";

function Parent() {
let [name,setName]=useState("Raj Deep");// share name variable. 
let [age,setAge]=useState(21);

    return(
        <>
        <MyContext.Provider value={{name,age}}>
            <h2>Parent Component</h2>
            <p>Name is parent component is {name}</p>
            <Child1 fname={name}></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </MyContext.Provider>
        
        </>
    )
}

export default Parent;