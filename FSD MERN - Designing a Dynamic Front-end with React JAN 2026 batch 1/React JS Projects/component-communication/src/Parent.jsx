import React,{ useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [pname,setPname]=useState("Raj");
let [child1Value,setChild1Value]=useState("");
let [child2Value,setChild2Value]=useState("");

let receiveChild1Value=(childData)=> {
    console.log(childData)
    setChild1Value(childData);
}
let receiveChild2Value=(childData)=> {
    console.log(childData)
    setChild2Value(childData);
}

    return(
        <div style={{backgroundColor:"lightgrey"}}>
        <h3>Parent Component</h3>
        <p>Parent name in parent component is {pname}</p>
        <p>Child1 value in parent component is {child1Value}</p>
        <p>Child2 value in parent component is {child2Value}</p>
        <Child1 parentName={pname} passValueToChild1={receiveChild1Value} child2Value={child2Value}/>
        <Child2 parentName={pname} passValueToChild2={receiveChild2Value} child1Value={child1Value}/>
        </div>
    )
}
export default Parent;