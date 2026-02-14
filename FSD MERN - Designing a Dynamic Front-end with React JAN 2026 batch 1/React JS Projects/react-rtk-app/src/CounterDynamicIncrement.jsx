import { useDispatch } from "react-redux";
import { dynamicIncrement, increment } from "./slice";
import { useState } from "react";

function CounterDynamicIncrement() {
let [count,setCount]=useState();
    let dispatch = useDispatch();

let incrementCounterValue = ()=> {
    //console.log(count)
        dispatch(dynamicIncrement(count));;// action as well as payload as count. 
        setCount("");
}
    return(
        <div>
            <h3>Counter Increment</h3>
            <input type="text" 
            name="count"
            placeholder="Enter the number"
            onChange={(event)=>setCount(event.target.value)}
            />
            <input type="button"
            value="Increment counter"
            onClick={incrementCounterValue}/>
        </div>
    )
}

export default CounterDynamicIncrement;