import { useState } from "react";

function useCount(initialValue=0){
let [count,setCount]=useState(initialValue);

// logic can be complex 
let increment = ()=>setCount(count+1);
let decrement = ()=>setCount(count-1);
let reset = ()=>setCount(initialValue)
    return {count,increment,decrement,reset}
}

export default useCount;