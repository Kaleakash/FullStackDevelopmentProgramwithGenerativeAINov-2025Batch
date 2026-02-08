import { useState } from "react";
import { useDispatch } from "react-redux";

function DynamicIncrementN() {
let [num,setNum]=useState(0);   // local variable bind with number field. 
let dispatch = useDispatch();   // this hook help us to call reducer. 

let incrementNValue = ()=> {
    console.log("event fired")
    console.log("i dynamic increment component "+num)
    dispatch({"type":"DYNAMIC_INCREMENT_N","payload":num});   // it call reducer function and it display action type and payload as num value
    setNum("");
}
let handleInput = (event)=> {
    setNum(event.target.value)
}
    return(
        <div>
            <h2>Dynamic Increment n value</h2>
            <input type="text" name="num" onChange={handleInput}
            placeholder="Enter the num value" value={num}/>
    <input type="button" value="Increment N" onClick={incrementNValue}/>
    
        </div>
    )
}

export default DynamicIncrementN;