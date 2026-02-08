import { useState } from "react";
import { useSelector } from "react-redux";

function Info() {
let [name,setName]=useState("Steven"); // state variable. it is part of Hello we can access within Hello component only 
let nValue = useSelector(gs=>gs.n); //
    return(
        <div>
            <h2>Info Component</h2>
            <p>Info component local state variable 
                ie name is {name}</p>
                <p>Global state variable n value is {nValue}</p>
        </div>
    )
}

export default Info;