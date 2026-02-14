import { useState } from "react";
import { useSelector } from "react-redux";

function Counter() {
let [n,setN]= useState(200)
let counter = useSelector(gs=>gs.simpleReducer.count);

    return(
        <div>
            <h2>Counter Component</h2>
            <p>Local State variable part of counter component is {n}</p>
            <p>Global state variable part of RTK slice is {counter}</p>
        </div>
    )
}

export default Counter;