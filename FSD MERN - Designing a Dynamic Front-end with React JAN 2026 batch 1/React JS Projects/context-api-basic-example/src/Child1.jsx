import { useContext } from "react";
import Child4 from "./Child4";
import MyContext from "./MyContext";

function Child1(props) {
    // ready to consume data from context 
    // the child component can be any level. 
let data = useContext(MyContext);
    return(
        <>
        <h2>Child1 Component</h2>
        <p>Value in child1 using props as {props.fname}</p>
        <p>Value is in child1 component is {data.name} and age is {data.age}</p>
        <Child4 fname={props.fname}></Child4>
        </>
    )
}

export default Child1;