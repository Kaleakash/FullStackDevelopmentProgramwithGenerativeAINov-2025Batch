import { useState } from "react";

function Child2(props) {
let [child2Name,setChild2Name]=useState("Monu");
    return(
        <div style={{backgroundColor:"lightgreen"}}>
        <h3>Child2 Component</h3>
        <p>Child2 name is in child2 component is {child2Name}</p>
        <p>Parent name in Child2 component is {props.parentName}</p>
        {props.passValueToChild2(child2Name)}
        <p>Child1 value in Child2 component is {props.child1Value}</p>
        </div>
    )
}
export default Child2;