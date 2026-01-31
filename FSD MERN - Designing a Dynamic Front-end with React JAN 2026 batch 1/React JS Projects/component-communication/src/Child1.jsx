import { useState } from "react";

function Child1(props) {
let [child1Name,setChild1Name]=useState("Sonu");
    return(
        <div style={{backgroundColor:"lightblue"}}>
        <h3>Child1 Component</h3>
        <p>Child1 name is Child1 component is {child1Name}</p>
        <p>Parent name in Child1 component is {props.parentName}</p>
        {props.passValueToChild1(child1Name)}
        <p>Child2 value in Child1 component is {props.child2Value}</p>
        </div>
    )
}
export default Child1;