import { useState } from "react";
import { useSelector } from "react-redux";

function Hello() {
let [m,setM]=useState(200); // state variable. it is part of Hello we can access within Hello component only 
let nValue = useSelector(gs=>gs.n); // we access global state variable part of store 
    return(
        <div>
            <h2>Hello Component</h2>
            <p>Hello component local state 
                variable ie m is {m}</p>
                <p>Global state variable n value is {nValue}</p>
        </div>
    )
}

export default Hello;